(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"/eHF":function(e,t,i){"use strict";function o(e,t){var i=t.distance,o=t.left,s=t.right,n=t.up,a=t.down,l=t.top,c=t.bottom,d=t.big,h=t.mirror,f=t.opposite,x=(i?i.toString():0)+((o?1:0)|(s?2:0)|(l||a?4:0)|(c||n?8:0)|(h?16:0)|(f?32:0)|(e?64:0)|(d?128:0));if(p.hasOwnProperty(x))return p[x];var u=o||s||n||a||l||c,v=void 0,w=void 0;if(u){if(!h!=!(e&&f)){var m=[s,o,c,l,a,n];o=m[0],s=m[1],l=m[2],c=m[3],n=m[4],a=m[5]}var b=i||(d?"2000px":"100%");v=o?"-"+b:s?b:"0",w=a||l?"-"+b:n||c?b:"0"}return p[x]=(0,r.animation)((e?"to":"from")+" {opacity: 0;"+(u?" transform: translate3d("+v+", "+w+", 0);":"")+"}\n     "+(e?"from":"to")+" {opacity: 1;transform: none;} "),p[x]}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r.defaults,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=e.children,s=(e.out,e.forever),n=e.timeout,a=e.duration,l=void 0===a?r.defaults.duration:a,d=e.delay,p=void 0===d?r.defaults.delay:d,h=e.count,f=void 0===h?r.defaults.count:h,x=function(e,t){var i={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(i[o]=e[o]);return i}(e,["children","out","forever","timeout","duration","delay","count"]),u={make:o,duration:void 0===n?l:n,delay:p,forever:s,count:f,style:{animationFillMode:"both"},reverse:x.left};return t?(0,c.default)(x,u,u,i):u}Object.defineProperty(t,"__esModule",{value:!0});var n,a=i("17x9"),r=i("ar19"),l=i("eH+L"),c=(n=l)&&n.__esModule?n:{default:n},d={out:a.bool,left:a.bool,right:a.bool,top:a.bool,bottom:a.bool,big:a.bool,mirror:a.bool,opposite:a.bool,duration:a.number,timeout:a.number,distance:a.string,delay:a.number,count:a.number,forever:a.bool},p={};s.propTypes=d,t.default=s,e.exports=t.default},"28nh":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var i=[],o=!0,s=!1,n=void 0;try{for(var a,r=e[Symbol.iterator]();!(o=(a=r.next()).done)&&(i.push(a.value),!t||i.length!==t);o=!0);}catch(e){s=!0,n=e}finally{try{!o&&r.return&&r.return()}finally{if(s)throw n}}return i}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e},r=function(){function e(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,i,o){return i&&e(t.prototype,i),o&&e(t,o),t}}(),l=i("q1tI"),c=(o=l)&&o.__esModule?o:{default:o},d=i("17x9"),p=i("ar19"),h=(0,d.shape)({make:d.func,duration:d.number.isRequired,delay:d.number.isRequired,forever:d.bool,count:d.number.isRequired,style:d.object.isRequired,reverse:d.bool}),f={collapse:d.bool,collapseEl:d.element,cascade:d.bool,wait:d.number,force:d.bool,disabled:d.bool,appear:d.bool,enter:d.bool,exit:d.bool,fraction:d.number,refProp:d.string,innerRef:d.func,onReveal:d.func,unmountOnExit:d.bool,mountOnEnter:d.bool,inEffect:h.isRequired,outEffect:(0,d.oneOfType)([h,(0,d.oneOf)([!1])]).isRequired,ssrReveal:d.bool,collapseOnly:d.bool,ssrFadeout:d.bool},x={transitionGroup:d.object},u=function(e){function t(e,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i));return o.isOn=void 0===e.when||!!e.when,o.state={collapse:e.collapse?t.getInitialCollapseStyle(e):void 0,style:{opacity:o.isOn&&!e.ssrReveal||!e.outEffect?void 0:0}},o.savedChild=!1,o.isShown=!1,p.observerMode?o.handleObserve=o.handleObserve.bind(o):(o.revealHandler=o.makeHandler(o.reveal),o.resizeHandler=o.makeHandler(o.resize)),o.saveRef=o.saveRef.bind(o),o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"saveRef",value:function(e){this.childRef&&this.childRef(e),this.props.innerRef&&this.props.innerRef(e),this.el!==e&&(this.el=e&&"offsetHeight"in e?e:void 0,this.observe(this.props,!0))}},{key:"invisible",value:function(){this&&this.el&&(this.savedChild=!1,this.isShown||(this.setState({hasExited:!0,collapse:this.props.collapse?a({},this.state.collapse,{visibility:"hidden"}):null,style:{opacity:0}}),!p.observerMode&&this.props.collapse&&window.document.dispatchEvent(p.collapseend)))}},{key:"animationEnd",value:function(e,t,i){var o=this,s=i.forever,n=i.count,a=i.delay,r=i.duration;if(!s){this.animationEndTimeout=window.setTimeout((function(){o&&o.el&&(o.animationEndTimeout=void 0,e.call(o))}),a+(r+(t?r:0)*n))}}},{key:"getDimensionValue",value:function(){return this.el.offsetHeight+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-top"),10)+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-bottom"),10)}},{key:"collapse",value:function(e,t,i){var o=i.duration+(t.cascade?i.duration:0),s=this.isOn?this.getDimensionValue():0,n=void 0,a=void 0;if(t.collapseOnly)n=i.duration/3,a=i.delay;else{var r=o>>2,l=r>>1;n=r,a=i.delay+(this.isOn?0:o-r-l),e.style.animationDuration=o-r+(this.isOn?l:-l)+"ms",e.style.animationDelay=i.delay+(this.isOn?r-l:0)+"ms"}return e.collapse={height:s,transition:"height "+n+"ms ease "+a+"ms",overflow:t.collapseOnly?"hidden":void 0},e}},{key:"animate",value:function(e){if(this&&this.el&&(this.unlisten(),this.isShown!==this.isOn)){this.isShown=this.isOn;var t=!this.isOn&&e.outEffect,i=e[t?"outEffect":"inEffect"],o="style"in i&&i.style.animationName||void 0,s=void 0;e.collapseOnly?s={hasAppeared:!0,hasExited:!1,style:{opacity:1}}:((e.outEffect||this.isOn)&&i.make&&(o=i.make),s={hasAppeared:!0,hasExited:!1,collapse:void 0,style:a({},i.style,{animationDuration:i.duration+"ms",animationDelay:i.delay+"ms",animationIterationCount:i.forever?"infinite":i.count,opacity:1,animationName:o}),className:i.className}),this.setState(e.collapse?this.collapse(s,e,i):s),t?(this.savedChild=c.default.cloneElement(this.getChild()),this.animationEnd(this.invisible,e.cascade,i)):this.savedChild=!1,this.onReveal(e)}}},{key:"onReveal",value:function(e){e.onReveal&&this.isOn&&(this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),e.wait?this.onRevealTimeout=window.setTimeout(e.onReveal,e.wait):e.onReveal())}},{key:"componentWillUnmount",value:function(){this.unlisten(),p.ssr&&(0,p.disableSsr)()}},{key:"handleObserve",value:function(e,t){n(e,1)[0].intersectionRatio>0&&(t.disconnect(),this.observer=null,this.reveal(this.props,!0))}},{key:"observe",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.el&&p.observerMode){if(this.observer){if(!t)return;this.observer.disconnect()}else if(t)return;this.observer=new IntersectionObserver(this.handleObserve,{threshold:e.fraction}),this.observer.observe(this.el)}}},{key:"reveal",value:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];p.globalHide||(0,p.hideAll)(),this&&this.el&&(e||(e=this.props),p.ssr&&(0,p.disableSsr)(),this.isOn&&this.isShown&&void 0!==e.spy?(this.isShown=!1,this.setState({style:{}}),window.setTimeout((function(){return t.reveal(e)}),200)):i||this.inViewport(e)||e.force?this.animate(e):p.observerMode?this.observe(e):this.listen())}},{key:"componentDidMount",value:function(){var e=this;if(this.el&&!this.props.disabled){this.props.collapseOnly||("make"in this.props.inEffect&&this.props.inEffect.make(!1,this.props),void 0!==this.props.when&&this.props.outEffect&&"make"in this.props.outEffect&&this.props.outEffect.make(!0,this.props));var i=this.context.transitionGroup,o=i&&!i.isMounting?!("enter"in this.props&&!1===this.props.enter):this.props.appear;return this.isOn&&((void 0!==this.props.when||void 0!==this.props.spy)&&!o||p.ssr&&!p.fadeOutEnabled&&!this.props.ssrFadeout&&this.props.outEffect&&!this.props.ssrReveal&&t.getTop(this.el)<window.pageYOffset+window.innerHeight)?(this.isShown=!0,this.setState({hasAppeared:!0,collapse:this.props.collapse?{height:this.getDimensionValue()}:this.state.collapse,style:{opacity:1}}),void this.onReveal(this.props)):p.ssr&&(p.fadeOutEnabled||this.props.ssrFadeout)&&this.props.outEffect&&t.getTop(this.el)<window.pageYOffset+window.innerHeight?(this.setState({style:{opacity:0,transition:"opacity 1000ms 1000ms"}}),void window.setTimeout((function(){return e.reveal(e.props,!0)}),2e3)):void(this.isOn&&(this.props.force?this.animate(this.props):this.reveal(this.props)))}}},{key:"cascade",value:function(e){var t=this,i=void 0;i="string"==typeof e?e.split("").map((function(e,t){return c.default.createElement("span",{key:t,style:{display:"inline-block",whiteSpace:"pre"}},e)})):c.default.Children.toArray(e);var o=this.props[this.isOn||!this.props.outEffect?"inEffect":"outEffect"],n=o.duration,r=o.reverse,l=i.length,d=2*n;this.props.collapse&&(d=parseInt(this.state.style.animationDuration,10),n=d/2);var h=r?l:0;return i.map((function(e){return"object"===(void 0===e?"undefined":s(e))&&e?c.default.cloneElement(e,{style:a({},e.props.style,t.state.style,{animationDuration:Math.round((0,p.cascade)(r?h--:h++,0,l,n,d))+"ms"})}):e}))}},{key:"componentWillReceiveProps",value:function(e){void 0!==e.when&&(this.isOn=!!e.when),e.fraction!==this.props.fraction&&this.observe(e,!0),!this.isOn&&e.onExited&&"exit"in e&&!1===e.exit?e.onExited():e.disabled||(e.collapse&&!this.props.collapse&&(this.setState({style:{},collapse:t.getInitialCollapseStyle(e)}),this.isShown=!1),e.when===this.props.when&&e.spy===this.props.spy||this.reveal(e),this.onRevealTimeout&&!this.isOn&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)))}},{key:"getChild",value:function(){if(this.savedChild&&!this.props.disabled)return this.savedChild;if("object"===s(this.props.children)){var e=c.default.Children.only(this.props.children);return"type"in e&&"string"==typeof e.type||"ref"!==this.props.refProp?e:c.default.createElement("div",null,e)}return c.default.createElement("div",null,this.props.children)}},{key:"render",value:function(){var e;e=this.state.hasAppeared?!this.props.unmountOnExit||!this.state.hasExited||this.isOn:!this.props.mountOnEnter||this.isOn;var t=this.getChild();"function"==typeof t.ref&&(this.childRef=t.ref);var i=!1,o=t.props,s=o.style,n=o.className,r=o.children,l=this.props.disabled?n:(this.props.outEffect?p.namespace:"")+(this.state.className?" "+this.state.className:"")+(n?" "+n:"")||void 0,d=void 0;"function"==typeof this.state.style.animationName&&(this.state.style.animationName=this.state.style.animationName(!this.isOn,this.props)),this.props.cascade&&!this.props.disabled&&r&&this.state.style.animationName?(i=this.cascade(r),d=a({},s,{opacity:1})):d=this.props.disabled?s:a({},s,this.state.style);var h=a({},this.props.props,function(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}({className:l,style:d},this.props.refProp,this.saveRef)),f=c.default.cloneElement(t,h,e?i||r:void 0);return void 0!==this.props.collapse?this.props.collapseEl?c.default.cloneElement(this.props.collapseEl,{style:a({},this.props.collapseEl.style,this.props.disabled?void 0:this.state.collapse),children:f}):c.default.createElement("div",{style:this.props.disabled?void 0:this.state.collapse,children:f}):f}},{key:"makeHandler",value:function(e){var t=this,i=function(){e.call(t,t.props),t.ticking=!1};return function(){t.ticking||((0,p.raf)(i),t.ticking=!0)}}},{key:"inViewport",value:function(e){if(!this.el||window.document.hidden)return!1;var i=this.el.offsetHeight,o=window.pageYOffset-t.getTop(this.el),s=Math.min(i,window.innerHeight)*(p.globalHide?e.fraction:0);return o>s-window.innerHeight&&o<i-s}},{key:"resize",value:function(e){this&&this.el&&this.isOn&&this.inViewport(e)&&(this.unlisten(),this.isShown=this.isOn,this.setState({hasExited:!this.isOn,hasAppeared:!0,collapse:void 0,style:{opacity:this.isOn||!e.outEffect?1:0}}),this.onReveal(e))}},{key:"listen",value:function(){p.observerMode||this.isListener||(this.isListener=!0,window.addEventListener("scroll",this.revealHandler,{passive:!0}),window.addEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.addEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.addEventListener("collapseend",this.revealHandler,{passive:!0}),window.addEventListener("resize",this.resizeHandler,{passive:!0}))}},{key:"unlisten",value:function(){!p.observerMode&&this.isListener&&(window.removeEventListener("scroll",this.revealHandler,{passive:!0}),window.removeEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.removeEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.removeEventListener("collapseend",this.revealHandler,{passive:!0}),window.removeEventListener("resize",this.resizeHandler,{passive:!0}),this.isListener=!1),this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),this.animationEndTimeout&&(this.animationEndTimeout=window.clearTimeout(this.animationEndTimeout))}}],[{key:"getInitialCollapseStyle",value:function(e){return{height:0,visibility:e.when?void 0:"hidden"}}},{key:"getTop",value:function(e){for(;void 0===e.offsetTop;)e=e.parentNode;for(var t=e.offsetTop;e.offsetParent;t+=e.offsetTop)e=e.offsetParent;return t}}]),t}(c.default.Component);u.propTypes=f,u.defaultProps={fraction:.2,refProp:"ref"},u.contextTypes=x,u.displayName="RevealBase",t.default=u,e.exports=t.default},ar19:function(e,t,i){"use strict";function o(e){try{return x.insertRule(e,x.cssRules.length)}catch(e){console.warn("react-reveal - animation failed")}}function s(){d||(t.globalHide=d=!0,window.removeEventListener("scroll",s,!0),o("."+n+" { opacity: 0; }"),window.removeEventListener("orientationchange",s,!0),window.document.removeEventListener("visibilitychange",s))}Object.defineProperty(t,"__esModule",{value:!0}),t.insertRule=o,t.cascade=function(e,t,i,o,s){var n=Math.log(o),a=(Math.log(s)-n)/(i-t);return Math.exp(n+a*(e-t))},t.animation=function(e){if(!x)return"";var t="@keyframes "+(u+h)+"{"+e+"}",i=f[e];return i?""+u+i:(x.insertRule(t,x.cssRules.length),f[e]=h,""+u+h++)},t.hideAll=s,t.default=function(e){var i=e.ssrFadeout;t.fadeOutEnabled=i};var n=t.namespace="react-reveal",a=(t.defaults={duration:1e3,delay:0,count:1},t.ssr=!0),r=t.observerMode=!1,l=t.raf=function(e){return window.setTimeout(e,66)},c=t.disableSsr=function(){return t.ssr=a=!1},d=(t.fadeOutEnabled=!1,t.ssrFadeout=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t.fadeOutEnabled=e},t.globalHide=!1),p=(t.ie10=!1,t.collapseend=void 0),h=1,f={},x=!1,u=n+"-"+Math.floor(1e15*Math.random())+"-";if("undefined"!=typeof window&&"nodejs"!==window.name&&window.document&&"undefined"!=typeof navigator){t.observerMode=r="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype&&/\{\s*\[native code\]\s*\}/.test(""+IntersectionObserver),t.raf=l=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||l,t.ssr=a=window.document.querySelectorAll("div[data-reactroot]").length>0,-1!==navigator.appVersion.indexOf("MSIE 10")&&(t.ie10=!0),a&&"performance"in window&&"timing"in window.performance&&"domContentLoadedEventEnd"in window.performance.timing&&window.performance.timing.domLoading&&Date.now()-window.performance.timing.domLoading<300&&(t.ssr=a=!1),a&&window.setTimeout(c,1500),r||(t.collapseend=p=document.createEvent("Event"),p.initEvent("collapseend",!0,!0));var v=document.createElement("style");document.head.appendChild(v),v.sheet&&v.sheet.cssRules&&v.sheet.insertRule&&(x=v.sheet,window.addEventListener("scroll",s,!0),window.addEventListener("orientationchange",s,!0),window.document.addEventListener("visibilitychange",s))}},"eH+L":function(e,t,i){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e};t.default=function(e,t,i,o){return"in"in e&&(e.when=e.in),n.default.Children.count(o)<2?n.default.createElement(a.default,s({},e,{inEffect:t,outEffect:i,children:o})):(o=n.default.Children.map(o,(function(o){return n.default.createElement(a.default,s({},e,{inEffect:t,outEffect:i,children:o}))})),"Fragment"in n.default?n.default.createElement(n.default.Fragment,null,o):n.default.createElement("span",null,o))};var n=o(i("q1tI")),a=o(i("28nh"));e.exports=t.default},ltSl:function(e,t,i){"use strict";var o=i("MX0m"),s=i.n(o),n=i("q1tI"),a=i.n(n),r=i("YFqc"),l=i.n(r),c=i("/eHF"),d=i.n(c),p=a.a.createElement;t.a=function(e){return p("div",{className:"jsx-1837874551 container-fluid calcAdv"},p("div",{className:"jsx-1837874551 dots-right"}),p("div",{className:"jsx-1837874551 dots-left"}),p(d.a,{left:!0},p("div",{className:"jsx-1837874551 arrow-left-yellow"})),p(d.a,{right:!0},p("div",{className:"jsx-1837874551 arrow-right-red"})),p("div",{className:"jsx-1837874551 container calcAdv-container"},p("div",{className:"jsx-1837874551 row"},p("div",{className:"jsx-1837874551 col-12"},p("div",{className:"jsx-1837874551 wrapper"},p("h3",{className:"jsx-1837874551 header-min-colored"},p("span",{className:"jsx-1837874551 dark-color"},"\u0425\u043e\u0442\u0438\u0442\u0435 \u0443\u0437\u043d\u0430\u0442\u044c \u0441\u043a\u043e\u043b\u044c\u043a\u043e "),"\u043c\u044b \u0434\u043b\u044f \u0432\u0430\u0441 \u044d\u043a\u043e\u043d\u043e\u043c\u0438\u043c?"),p("span",{className:"jsx-1837874551 calc-desc"},"\u0412\u043e\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435\u0441\u044c \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0444\u043e\u0440\u043c\u043e\u0439, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0438 \u0443\u0437\u043d\u0430\u0439\u0442\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442."),p(l.a,{href:"/calculator",as:"/calculator"},p("a",{className:"jsx-1837874551 calc-link"},p("span",{className:"jsx-1837874551"},"\u041a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440"))))))),p(s.a,{id:"1837874551"},[".calcAdv.jsx-1837874551{overflow-x:hidden;position:relative;background-color:#fff;border-top:5px solid #dcdcdc;border-bottom:5px solid #dcdcdc;z-index:0;}",".calcAdv.jsx-1837874551 .dots-right.jsx-1837874551{position:absolute;display:block;width:213px;height:259px;top:0;right:0;opacity:0.5;background:url('/images/dots-min-white.png') 0% 0% no-repeat;}",".calcAdv.jsx-1837874551 .dots-left.jsx-1837874551{position:absolute;display:block;width:213px;height:259px;left:0;bottom:0;background:url('/images/dots-min.png') 0% 0% no-repeat;}",".calcAdv.jsx-1837874551 .arrow-left-yellow.jsx-1837874551{display:block;position:absolute;z-index:0;top:50px;left:-310px;width:350px;height:310px;opacity:1;-webkit-clip-path:polygon(0 0,92% 0,100% 45%,92% 100%,0 100%);clip-path:polygon(0 0,92% 0,100% 45%,92% 100%,0 100%);border-radius:3px;background-color:#d57c29;}",".calcAdv.jsx-1837874551 .arrow-right-red.jsx-1837874551{display:block;position:absolute;z-index:0;top:50px;right:-310px;width:350px;height:310px;opacity:1;-webkit-clip-path:polygon(8% 0,100% 0,100% 100%,8% 100%,0 50%);clip-path:polygon(8% 0,100% 0,100% 100%,8% 100%,0 50%);border-radius:3px;background-color:#c42729;}",".calcAdv.jsx-1837874551 .calcAdv-container.jsx-1837874551{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:100%;height:410px;}",".calcAdv.jsx-1837874551 .calcAdv-container.jsx-1837874551 .row.jsx-1837874551 .col-12.jsx-1837874551 .wrapper.jsx-1837874551{max-width:230px;margin:0 auto;}",".calcAdv.jsx-1837874551 .calcAdv-container.jsx-1837874551 .row.jsx-1837874551 .col-12.jsx-1837874551 .wrapper.jsx-1837874551 .header-min-colored.jsx-1837874551{font-size:27px;margin-bottom:45px;text-align:center;}",".calcAdv.jsx-1837874551 .calcAdv-container.jsx-1837874551 .row.jsx-1837874551 .col-12.jsx-1837874551 .wrapper.jsx-1837874551 .calc-desc.jsx-1837874551{text-align:center;display:block;color:#444444;font-family:var(--noto-font);font-size:14px;font-weight:400;line-height:22px;margin-bottom:30px;}",".calcAdv.jsx-1837874551 .calcAdv-container.jsx-1837874551 .row.jsx-1837874551 .col-12.jsx-1837874551 .wrapper.jsx-1837874551 .calc-link.jsx-1837874551{font-family:var(--molot-font);padding:0;display:block;font-weight:700;width:170px;height:40px;border-radius:3px;background-image:var(--new-gradient);color:#ffffff;font-size:15px;-webkit-letter-spacing:0.5px;-moz-letter-spacing:0.5px;-ms-letter-spacing:0.5px;letter-spacing:0.5px;line-height:40px;margin:0 auto;text-align:center;-webkit-transform:skewX(-10deg);-ms-transform:skewX(-10deg);transform:skewX(-10deg);box-shadow:10px 20px 30px -15px rgba(237,27,61,0.55), -10px 20px 30px -15px rgba(242,125,14,0.55);-webkit-transition:box-shadow 0.2s;transition:box-shadow 0.2s;}",".calcAdv.jsx-1837874551 .calcAdv-container.jsx-1837874551 .row.jsx-1837874551 .col-12.jsx-1837874551 .wrapper.jsx-1837874551 .calc-link.jsx-1837874551:hover{-webkit-text-decoration:none;text-decoration:none;cursor:pointer;color:#ffffff;box-shadow:var(--box-shadow);}",".calcAdv.jsx-1837874551 .calcAdv-container.jsx-1837874551 .row.jsx-1837874551 .col-12.jsx-1837874551 .wrapper.jsx-1837874551 .calc-link.jsx-1837874551:active{box-shadow:0px 0px 3px rgba(0,0,0,0.45);}",".calcAdv.jsx-1837874551 .calcAdv-container.jsx-1837874551 .row.jsx-1837874551 .col-12.jsx-1837874551 .wrapper.jsx-1837874551 .calc-link.jsx-1837874551 span.jsx-1837874551{display:block;-webkit-transform:skewX(10deg);-ms-transform:skewX(10deg);transform:skewX(10deg);}","@media (min-width:768px){.calcAdv.jsx-1837874551{overflow-x:hidden;position:relative;background-color:#fff;border-top:5px solid #dcdcdc;border-bottom:5px solid #dcdcdc;z-index:0;}.calcAdv.jsx-1837874551 .dots-right.jsx-1837874551{position:absolute;display:block;width:213px;height:259px;top:-15%;right:0;opacity:0.3;background:url('/images/dots-min-white.png') 0% 0% no-repeat;}.calcAdv.jsx-1837874551 .dots-left.jsx-1837874551{position:absolute;display:block;width:213px;height:259px;left:0;bottom:0;background:url('/images/dots-min.png') 0% 0% no-repeat;}.calcAdv.jsx-1837874551 .arrow-left-yellow.jsx-1837874551{display:block;position:absolute;z-index:-1;top:50px;left:-100px;width:350px;height:310px;opacity:0;-webkit-clip-path:polygon(0 0,92% 0,100% 45%,92% 100%,0 100%);clip-path:polygon(0 0,92% 0,100% 45%,92% 100%,0 100%);border-radius:3px;background-color:#d57c29;}.calcAdv.jsx-1837874551 .arrow-right-red.jsx-1837874551{display:block;position:absolute;z-index:-1;top:50px;right:-100px;width:350px;height:310px;opacity:0;-webkit-clip-path:polygon(8% 0,100% 0,100% 100%,8% 100%,0 50%);clip-path:polygon(8% 0,100% 0,100% 100%,8% 100%,0 50%);border-radius:3px;background-color:#c42729;}.calcAdv.jsx-1837874551 .calcAdv-container.jsx-1837874551{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:100%;height:410px;}.calcAdv.jsx-1837874551 .calcAdv-container.jsx-1837874551 .row.jsx-1837874551 .col-12.jsx-1837874551 .wrapper.jsx-1837874551{max-width:230px;margin:0 auto;}.calcAdv.jsx-1837874551 .calcAdv-container.jsx-1837874551 .row.jsx-1837874551 .col-12.jsx-1837874551 .wrapper.jsx-1837874551 .header-min-colored.jsx-1837874551{font-size:28px;margin-bottom:60px;text-align:center;}.calcAdv.jsx-1837874551 .calcAdv-container.jsx-1837874551 .row.jsx-1837874551 .col-12.jsx-1837874551 .wrapper.jsx-1837874551 .calc-desc.jsx-1837874551{text-align:center;display:block;color:#444444;font-family:var(--noto-font);font-size:14px;font-weight:400;line-height:22px;margin-bottom:30px;}.calcAdv.jsx-1837874551 .calcAdv-container.jsx-1837874551 .row.jsx-1837874551 .col-12.jsx-1837874551 .wrapper.jsx-1837874551 .calc-link.jsx-1837874551{font-family:var(--molot-font);padding:0;display:block;font-weight:700;width:170px;height:40px;border-radius:3px;background-image:var(--new-gradient);color:#ffffff;font-size:15px;-webkit-letter-spacing:0.5px;-moz-letter-spacing:0.5px;-ms-letter-spacing:0.5px;letter-spacing:0.5px;line-height:40px;margin:0 auto;text-align:center;-webkit-transform:skewX(-10deg);-ms-transform:skewX(-10deg);transform:skewX(-10deg);box-shadow:10px 20px 30px -15px rgba(237,27,61,0.55), -10px 20px 30px -15px rgba(242,125,14,0.55);-webkit-transition:box-shadow 0.2s;transition:box-shadow 0.2s;}.calcAdv.jsx-1837874551 .calcAdv-container.jsx-1837874551 .row.jsx-1837874551 .col-12.jsx-1837874551 .wrapper.jsx-1837874551 .calc-link.jsx-1837874551:hover{-webkit-text-decoration:none;text-decoration:none;cursor:pointer;color:#ffffff;box-shadow:var(--box-shadow);}.calcAdv.jsx-1837874551 .calcAdv-container.jsx-1837874551 .row.jsx-1837874551 .col-12.jsx-1837874551 .wrapper.jsx-1837874551 .calc-link.jsx-1837874551:active{box-shadow:0px 0px 3px rgba(0,0,0,0.45);}.calcAdv.jsx-1837874551 .calcAdv-container.jsx-1837874551 .row.jsx-1837874551 .col-12.jsx-1837874551 .wrapper.jsx-1837874551 .calc-link.jsx-1837874551 span.jsx-1837874551{display:block;-webkit-transform:skewX(10deg);-ms-transform:skewX(10deg);transform:skewX(10deg);}}","@media (min-width:1200px){.calcAdv.jsx-1837874551{overflow:hidden;position:relative;background-color:#fff;border-top:5px solid #dcdcdc;border-bottom:5px solid #dcdcdc;z-index:0;}.calcAdv.jsx-1837874551::after{display:block;position:absolute;content:'';z-index:-1;top:50%;left:-20px;width:540px;height:285px;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);border:15px solid rgba(255,255,255,1);}.calcAdv.jsx-1837874551::before{display:block;position:absolute;content:'';z-index:0;top:50%;right:-20px;width:540px;height:285px;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);border:15px solid rgba(255,255,255,1);}.calcAdv.jsx-1837874551 .dots-right.jsx-1837874551{position:absolute;display:block;width:460px;height:560px;top:-60%;right:0;opacity:0.1;background:url('/images/dots-big-white.png') 0% 0% no-repeat;}.calcAdv.jsx-1837874551 .dots-left.jsx-1837874551{position:absolute;display:block;width:460px;height:560px;left:0;bottom:-60%;opacity:0.1;background:url('/images/dots-big-white.png') 0% 0% no-repeat;}.calcAdv.jsx-1837874551 .arrow-left-yellow.jsx-1837874551{display:block;position:absolute;z-index:-1;top:35px;left:0;width:330px;height:437px;-webkit-clip-path:polygon(0 0,88% 0,100% 45%,88% 100%,0 100%);clip-path:polygon(0 0,88% 0,100% 45%,88% 100%,0 100%);border-radius:3px;background-color:#d57c29;}.calcAdv.jsx-1837874551 .arrow-right-red.jsx-1837874551{display:block;position:absolute;z-index:-1;top:35px;right:0px;width:330px;height:437px;-webkit-clip-path:polygon(12% 0,100% 0,100% 100%,12% 100%,0 50%);clip-path:polygon(12% 0,100% 0,100% 100%,12% 100%,0 50%);border-radius:3px;background-color:#c42729;}.calcAdv.jsx-1837874551 .calcAdv-container.jsx-1837874551{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:100%;height:510px;}.calcAdv.jsx-1837874551 .calcAdv-container.jsx-1837874551 .row.jsx-1837874551 .col-12.jsx-1837874551 .wrapper.jsx-1837874551{max-width:580px;margin:0 auto;}.calcAdv.jsx-1837874551 .calcAdv-container.jsx-1837874551 .row.jsx-1837874551 .col-12.jsx-1837874551 .wrapper.jsx-1837874551 .header-min-colored.jsx-1837874551{font-size:36px;margin-bottom:45px;text-align:center;}.calcAdv.jsx-1837874551 .calcAdv-container.jsx-1837874551 .row.jsx-1837874551 .col-12.jsx-1837874551 .wrapper.jsx-1837874551 .calc-desc.jsx-1837874551{text-align:center;display:block;color:#444444;font-family:var(--noto-font);font-size:22px;font-weight:500;line-height:30px;margin-bottom:30px;}.calcAdv.jsx-1837874551 .calcAdv-container.jsx-1837874551 .row.jsx-1837874551 .col-12.jsx-1837874551 .wrapper.jsx-1837874551 .calc-link.jsx-1837874551{position:relative;font-family:var(--molot-font);padding:0;display:block;font-weight:700;width:270px;height:60px;border-radius:3px;background-image:var(--new-gradient);color:#ffffff;font-size:21px;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;line-height:60px;margin:0 auto;text-align:center;-webkit-transform:skewX(-10deg);-ms-transform:skewX(-10deg);transform:skewX(-10deg);box-shadow:10px 20px 30px -15px rgba(237,27,61,0.55), -10px 20px 30px -15px rgba(242,125,14,0.55);-webkit-transition:box-shadow 0.2s;transition:box-shadow 0.2s;}.calcAdv.jsx-1837874551 .calcAdv-container.jsx-1837874551 .row.jsx-1837874551 .col-12.jsx-1837874551 .wrapper.jsx-1837874551 .calc-link.jsx-1837874551::before{position:absolute;display:block;content:'';top:7px;left:7px;right:7px;bottom:7px;border-radius:3px;border:2px solid white;-webkit-transition:all 0.2s ease-in 0.2s;transition:all 0.2s ease-in 0.2s;}.calcAdv.jsx-1837874551 .calcAdv-container.jsx-1837874551 .row.jsx-1837874551 .col-12.jsx-1837874551 .wrapper.jsx-1837874551 .calc-link.jsx-1837874551:hover{box-shadow:var(--box-shadow);}.calcAdv.jsx-1837874551 .calcAdv-container.jsx-1837874551 .row.jsx-1837874551 .col-12.jsx-1837874551 .wrapper.jsx-1837874551 .calc-link.jsx-1837874551:hover.jsx-1837874551::before{top:12px;left:25px;right:25px;bottom:12px;opacity:0;}.calcAdv.jsx-1837874551 .calcAdv-container.jsx-1837874551 .row.jsx-1837874551 .col-12.jsx-1837874551 .wrapper.jsx-1837874551 .calc-link.jsx-1837874551:active{box-shadow:0px 0px 3px rgba(0,0,0,0.45);}.calcAdv.jsx-1837874551 .calcAdv-container.jsx-1837874551 .row.jsx-1837874551 .col-12.jsx-1837874551 .wrapper.jsx-1837874551 .calc-link.jsx-1837874551 span.jsx-1837874551{display:block;-webkit-transform:skewX(10deg);-ms-transform:skewX(10deg);transform:skewX(10deg);}}","@media (min-width:1400px){.calcAdv.jsx-1837874551::after{display:block;position:absolute;content:'';top:50%;left:-20px;width:540px;height:285px;}.calcAdv.jsx-1837874551::before{top:50%;right:-20px;width:540px;height:285px;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);border:15px solid rgba(255,255,255,1);}.calcAdv.jsx-1837874551 .arrow-left-yellow.jsx-1837874551{top:35px;left:0;width:475px;height:437px;}.calcAdv.jsx-1837874551 .arrow-right-red.jsx-1837874551{top:35px;right:0px;width:475px;height:437px;}}"]))}}}]);