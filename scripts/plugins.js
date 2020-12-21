+function(t){"use strict";function e(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var n in e)if(void 0!==t.style[n])return{end:e[n]};return!1}t.fn.emulateTransitionEnd=function(e){var n=!1,s=this;t(this).one("bsTransitionEnd",function(){n=!0});var i=function(){n||t(s).trigger(t.support.transition.end)};return setTimeout(i,e),this},t(function(){t.support.transition=e(),t.support.transition&&(t.event.special.bsTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(e){if(t(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}})})}(jQuery),function(t){"use strict";function e(e){var n,s=e.attr("data-target")||(n=e.attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,"");return t(s)}function n(e){return this.each(function(){var n=t(this),i=n.data("bs.collapse"),a=t.extend({},s.DEFAULTS,n.data(),"object"==typeof e&&e);!i&&a.toggle&&/show|hide/.test(e)&&(a.toggle=!1),i||n.data("bs.collapse",i=new s(this,a)),"string"==typeof e&&i[e]()})}var s=function(e,n){this.$element=t(e),this.options=t.extend({},s.DEFAULTS,n),this.$trigger=t('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};s.VERSION="3.3.7",s.TRANSITION_DURATION=350,s.DEFAULTS={toggle:!0},s.prototype.dimension=function(){return this.$element.hasClass("width")?"width":"height"},s.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var e,i=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(i&&i.length&&(e=i.data("bs.collapse"))&&e.transitioning)){var a=t.Event("show.bs.collapse");if(this.$element.trigger(a),!a.isDefaultPrevented()){i&&i.length&&(n.call(i,"hide"),e||i.data("bs.collapse",null));var o=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[o](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var r=function(){this.$element.removeClass("collapsing").addClass("collapse in")[o](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!t.support.transition)return r.call(this);var l=t.camelCase(["scroll",o].join("-"));this.$element.one("bsTransitionEnd",t.proxy(r,this)).emulateTransitionEnd(s.TRANSITION_DURATION)[o](this.$element[0][l])}}}},s.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var e=t.Event("hide.bs.collapse");if(this.$element.trigger(e),!e.isDefaultPrevented()){var n=this.dimension();this.$element[n](this.$element[n]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var i=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};if(!t.support.transition)return i.call(this);this.$element[n](0).one("bsTransitionEnd",t.proxy(i,this)).emulateTransitionEnd(s.TRANSITION_DURATION)}}},s.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},s.prototype.getParent=function(){return t(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(t.proxy(function(n,s){var i=t(s);this.addAriaAndCollapsedClass(e(i),i)},this)).end()},s.prototype.addAriaAndCollapsedClass=function(t,e){var n=t.hasClass("in");t.attr("aria-expanded",n),e.toggleClass("collapsed",!n).attr("aria-expanded",n)};var i=t.fn.collapse;t.fn.collapse=n,t.fn.collapse.Constructor=s,t.fn.collapse.noConflict=function(){return t.fn.collapse=i,this},t(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(s){var i=t(this);i.attr("data-target")||s.preventDefault();var a=e(i),o=a.data("bs.collapse"),r=o?"toggle":i.data();n.call(a,r)})}(jQuery);var GoogleSpreadsheetsParser,GoogleSpreadsheetsUtil;GoogleSpreadsheetsUtil=function(){function t(){}return t.prototype.extractKey=function(t){var e;return e=t.match(/https:\/\/docs.google.com\/spreadsheets\/d\/(.+)\/pubhtml/),null===e||2!==e.length?null:e[1]},t.prototype.getWorksheetId=function(t,e){var n,s,i,a,o,r,l;if(r="https://spreadsheets.google.com/feeds/worksheets/"+t+"/public/basic?alt=json",l=new XMLHttpRequest,l.open("GET",r,!1),l.send(),a=[],200===l.status)if(n=JSON.parse(l.responseText),e){o=n.feed.entry;for(i in o)if(s=o[i],s.title.$t===e){a=s.id.$t.match(/https:\/\/spreadsheets.google.com\/feeds\/worksheets\/.+\/public\/basic\/(.+)/);break}}else a=n.feed.entry[0].id.$t.match(/https:\/\/spreadsheets.google.com\/feeds\/worksheets\/.+\/public\/basic\/(.+)/);return null===a||2!==a.length?null:a[1]},t.prototype.getFeeds=function(t,e){var n,s,i;return s="https://spreadsheets.google.com/feeds/cells/"+t+"/"+e+"/public/values?alt=json",i=new XMLHttpRequest,i.open("GET",s,!1),i.send(),n=null,200===i.status&&(n=JSON.parse(i.responseText)),n},t.prototype.makeTitle=function(t){var e,n,s,i,a;for(a=[],n=0,s=t.length;n<s;n++){if(i=t[n],null===(e=i.gs$cell))return a;if(1!==Number(e.row))return a;a.push(e.$t)}return a},t.prototype.makeContents=function(t){var e,n,s,i,a,o,r,l;if(s=[],!(t.length>=1&&t[0].gs$cell))return s;for(n=Number(t[t.length-1].gs$cell.col),l=0,i=0,a=t.length;i<a;i++)o=t[i],e=o.gs$cell,1!==Number(e.row)&&(e.row!==l&&(l=e.row,r=[]),r.push(e.$t),Number(e.col)===n&&(s.push(r),r=[]));return s},t}(),GoogleSpreadsheetsParser=function(){function t(t,e){var n,s,i,a,o,r,l;l=e.sheetTitle||null,a=e.hasTitle||!0,n=new GoogleSpreadsheetsUtil,o=n.extractKey(t),r=n.getWorksheetId(o,l),i=n.getFeeds(o,r),s=i.feed.entry,a&&(this.titles=n.makeTitle(s)),this.contents=n.makeContents(s)}return t}();