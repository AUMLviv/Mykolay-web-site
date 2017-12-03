#!/bin/sh
set -e # Exit with nonzero exit code if anything fails
SOURCE_BRANCH="master"

setup_git() {
  git config --global user.email "travis@travis-ci.org"
  git config --global user.name "Travis CI"
}

commit_website_files() {
  git checkout -b gh-pages
  rm -rf `ls -A -1 | grep -v -e build -e .git`
  mv build/{.,}* .
  rm -r build
  git add .
  git commit --message "Travis build: $TRAVIS_BUILD_NUMBER"
}

upload_files() {
  git remote add origin-pages https://${GH_TOKEN}@github.com/AUMLviv/Mykolay-web-site.git > /dev/null 2>&1
  git push --quiet --force --set-upstream origin-pages gh-pages
}

# Pull requests and commits to other branches shouldn't try to deploy
if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != "$SOURCE_BRANCH" ]; then
    echo "Skipping deploy. Done."
    exit 0
fi

setup_git
commit_website_files
upload_files
