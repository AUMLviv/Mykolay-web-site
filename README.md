# Saint Nicholas charity event site

This is sources for https://www.mykolaj.com.ua site.

## How to contribute and help us?

You can fix bug or do some improvements with code and do this site better

## How I can do it?

We're using yeoman `webapp` generator (https://github.com/yeoman/generator-webapp) for do all stuff, so you need to do some
basic things:

### First of all you have to install `yarn`, `gulp` and `bower`:

1. Here the docs how to install `yarn` https://yarnpkg.com/lang/en/docs/install/
2. `yarn global add gulp`
3. `yarn global add bower`

### Next and the last step is to run local server

`gulp serve`

### OK, but what about deploy?

Don't worry about that. We use `Travis CI` for it. When your pull request will
be submitted - `Travis CI` will start build process and commit to
`gh-pages` instead of you.
