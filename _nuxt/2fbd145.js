(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{238:function(t,e,n){var r=n(10);t.exports=function(t){return r(Map.prototype.entries,t)}},239:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"c",(function(){return f})),n.d(e,"e",(function(){return c})),n.d(e,"f",(function(){return l})),n.d(e,"d",(function(){return d}));var r,o;n(243),n(13),n(26),n(244),n(245),n(246),n(247),n(248),n(249),n(250),n(251),n(252),n(253),n(254),n(255),n(256),n(27);!function(t){t.Equality="equality",t.Security="security",t.Foreign="foreign",t.Administration="administration",t.Culture="culture",t.Economics="economics",t.Environmental="environmental"}(r||(r={})),function(t){t.NoData="nodata",t.Proposed="proposed",t.Paused="paused",t.Working="working",t.Done="done"}(o||(o={}));var f=[o.NoData,o.Proposed,o.Paused,o.Working,o.Done],c=[r.Equality,r.Security,r.Foreign,r.Administration,r.Culture,r.Economics,r.Environmental],l=new Map([[r.Equality,{long:"ความเท่าเทียม/คุณภาพชีวิต",short:"คุณภาพชีวิต"}],[r.Security,{long:"ความมั่นคง/ปกป้องสถาบันกษัตริย์",short:"ความมั่นคง"}],[r.Foreign,{long:"ต่างประเทศ",short:"ต่างประเทศ"}],[r.Administration,{long:"บริหารจัดการ(ราชการ)",short:"บริหารจัดการ"}],[r.Culture,{long:"ศาสนาและวัฒนธรรม",short:"ศาสนาและวัฒนธรรม"}],[r.Economics,{long:"เศรษฐกิจ",short:"เศรษฐกิจ"}],[r.Environmental,{long:"สิ่งแวดล้อม",short:"สิ่งแวดล้อม"}]]),d=new Map([[o.NoData,"ไม่พบข้อมูล"],[o.Proposed,"ถูกเสนอต่อสภา"],[o.Paused,"ถูกระงับ"],[o.Working,"กำลังดำเนินการ"],[o.Done,"สำเร็จ"]])},241:function(t,e,n){var r=n(6),o=n(3),f=n(74),c=n(17),l=n(15),d=n(18).f,v=n(73),h=n(183),E=n(259),T=n(105),R=n(261),y=!1,I=T("meta"),S=0,m=function(t){d(t,I,{value:{objectID:"O"+S++,weakData:{}}})},meta=t.exports={enable:function(){meta.enable=function(){},y=!0;var t=v.f,e=o([].splice),n={};n[I]=1,t(n).length&&(v.f=function(n){for(var r=t(n),i=0,o=r.length;i<o;i++)if(r[i]===I){e(r,i,1);break}return r},r({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:h.f}))},fastKey:function(t,e){if(!c(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!l(t,I)){if(!E(t))return"F";if(!e)return"E";m(t)}return t[I].objectID},getWeakData:function(t,e){if(!l(t,I)){if(!E(t))return!0;if(!e)return!1;m(t)}return t[I].weakData},onFreeze:function(t){return R&&y&&E(t)&&!l(t,I)&&m(t),t}};f[I]=!0},243:function(t,e,n){"use strict";n(258)("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),n(262))},244:function(t,e,n){"use strict";n(6)({target:"Map",proto:!0,real:!0,forced:!0},{deleteAll:n(263)})},245:function(t,e,n){"use strict";var r=n(6),o=n(8),f=n(47),c=n(238),l=n(181);r({target:"Map",proto:!0,real:!0,forced:!0},{every:function(t){var map=o(this),e=c(map),n=f(t,arguments.length>1?arguments[1]:void 0);return!l(e,(function(t,e,r){if(!n(e,t,map))return r()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},246:function(t,e,n){"use strict";var r=n(6),o=n(25),f=n(47),c=n(10),l=n(57),d=n(8),v=n(102),h=n(238),E=n(181);r({target:"Map",proto:!0,real:!0,forced:!0},{filter:function(t){var map=d(this),e=h(map),n=f(t,arguments.length>1?arguments[1]:void 0),r=new(v(map,o("Map"))),T=l(r.set);return E(e,(function(t,e){n(e,t,map)&&c(T,r,t,e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),r}})},247:function(t,e,n){"use strict";var r=n(6),o=n(8),f=n(47),c=n(238),l=n(181);r({target:"Map",proto:!0,real:!0,forced:!0},{find:function(t){var map=o(this),e=c(map),n=f(t,arguments.length>1?arguments[1]:void 0);return l(e,(function(t,e,r){if(n(e,t,map))return r(e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},248:function(t,e,n){"use strict";var r=n(6),o=n(8),f=n(47),c=n(238),l=n(181);r({target:"Map",proto:!0,real:!0,forced:!0},{findKey:function(t){var map=o(this),e=c(map),n=f(t,arguments.length>1?arguments[1]:void 0);return l(e,(function(t,e,r){if(n(e,t,map))return r(t)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},249:function(t,e,n){"use strict";var r=n(6),o=n(8),f=n(238),c=n(264),l=n(181);r({target:"Map",proto:!0,real:!0,forced:!0},{includes:function(t){return l(f(o(this)),(function(e,n,r){if(c(n,t))return r()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},250:function(t,e,n){"use strict";var r=n(6),o=n(8),f=n(238),c=n(181);r({target:"Map",proto:!0,real:!0,forced:!0},{keyOf:function(t){return c(f(o(this)),(function(e,n,r){if(n===t)return r(e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},251:function(t,e,n){"use strict";var r=n(6),o=n(25),f=n(47),c=n(10),l=n(57),d=n(8),v=n(102),h=n(238),E=n(181);r({target:"Map",proto:!0,real:!0,forced:!0},{mapKeys:function(t){var map=d(this),e=h(map),n=f(t,arguments.length>1?arguments[1]:void 0),r=new(v(map,o("Map"))),T=l(r.set);return E(e,(function(t,e){c(T,r,n(e,t,map),e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),r}})},252:function(t,e,n){"use strict";var r=n(6),o=n(25),f=n(47),c=n(10),l=n(57),d=n(8),v=n(102),h=n(238),E=n(181);r({target:"Map",proto:!0,real:!0,forced:!0},{mapValues:function(t){var map=d(this),e=h(map),n=f(t,arguments.length>1?arguments[1]:void 0),r=new(v(map,o("Map"))),T=l(r.set);return E(e,(function(t,e){c(T,r,t,n(e,t,map))}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),r}})},253:function(t,e,n){"use strict";var r=n(6),o=n(57),f=n(8),c=n(181);r({target:"Map",proto:!0,real:!0,forced:!0},{merge:function(t){for(var map=f(this),e=o(map.set),n=arguments.length,i=0;i<n;)c(arguments[i++],e,{that:map,AS_ENTRIES:!0});return map}})},254:function(t,e,n){"use strict";var r=n(6),o=n(1),f=n(8),c=n(57),l=n(238),d=n(181),v=o.TypeError;r({target:"Map",proto:!0,real:!0,forced:!0},{reduce:function(t){var map=f(this),e=l(map),n=arguments.length<2,r=n?void 0:arguments[1];if(c(t),d(e,(function(e,o){n?(n=!1,r=o):r=t(r,o,e,map)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),n)throw v("Reduce of empty map with no initial value");return r}})},255:function(t,e,n){"use strict";var r=n(6),o=n(8),f=n(47),c=n(238),l=n(181);r({target:"Map",proto:!0,real:!0,forced:!0},{some:function(t){var map=o(this),e=c(map),n=f(t,arguments.length>1?arguments[1]:void 0);return l(e,(function(t,e,r){if(n(e,t,map))return r()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},256:function(t,e,n){"use strict";var r=n(6),o=n(1),f=n(10),c=n(8),l=n(57),d=o.TypeError;r({target:"Map",proto:!0,real:!0,forced:!0},{update:function(t,e){var map=c(this),n=l(map.get),r=l(map.has),o=l(map.set),v=arguments.length;l(e);var h=f(r,map,t);if(!h&&v<3)throw d("Updating absent value");var E=h?f(n,map,t):l(v>2?arguments[2]:void 0)(t,map);return f(o,map,t,e(E,t,map)),map}})},258:function(t,e,n){"use strict";var r=n(6),o=n(1),f=n(3),c=n(104),l=n(19),d=n(241),v=n(181),h=n(132),E=n(7),T=n(17),R=n(4),y=n(133),I=n(60),S=n(182);t.exports=function(t,e,n){var m=-1!==t.indexOf("Map"),x=-1!==t.indexOf("Weak"),A=m?"set":"add",w=o[t],N=w&&w.prototype,_=w,M={},P=function(t){var e=f(N[t]);l(N,t,"add"==t?function(t){return e(this,0===t?0:t),this}:"delete"==t?function(t){return!(x&&!T(t))&&e(this,0===t?0:t)}:"get"==t?function(t){return x&&!T(t)?void 0:e(this,0===t?0:t)}:"has"==t?function(t){return!(x&&!T(t))&&e(this,0===t?0:t)}:function(t,n){return e(this,0===t?0:t,n),this})};if(c(t,!E(w)||!(x||N.forEach&&!R((function(){(new w).entries().next()})))))_=n.getConstructor(e,t,m,A),d.enable();else if(c(t,!0)){var O=new _,k=O[A](x?{}:-0,1)!=O,D=R((function(){O.has(1)})),z=y((function(t){new w(t)})),j=!x&&R((function(){for(var t=new w,e=5;e--;)t[A](e,e);return!t.has(-0)}));z||((_=e((function(t,e){h(t,N);var n=S(new w,t,_);return null!=e&&v(e,n[A],{that:n,AS_ENTRIES:m}),n}))).prototype=N,N.constructor=_),(D||j)&&(P("delete"),P("has"),m&&P("get")),(j||k)&&P(A),x&&N.clear&&delete N.clear}return M[t]=_,r({global:!0,forced:_!=w},M),I(_,t),x||n.setStrong(_,t,m),_}},259:function(t,e,n){var r=n(4),o=n(17),f=n(42),c=n(260),l=Object.isExtensible,d=r((function(){l(1)}));t.exports=d||c?function(t){return!!o(t)&&((!c||"ArrayBuffer"!=f(t))&&(!l||l(t)))}:l},260:function(t,e,n){var r=n(4);t.exports=r((function(){if("function"==typeof ArrayBuffer){var t=new ArrayBuffer(8);Object.isExtensible(t)&&Object.defineProperty(t,"a",{value:8})}}))},261:function(t,e,n){var r=n(4);t.exports=!r((function(){return Object.isExtensible(Object.preventExtensions({}))}))},262:function(t,e,n){"use strict";var r=n(18).f,o=n(50),f=n(135),c=n(47),l=n(132),d=n(181),v=n(134),h=n(136),E=n(11),T=n(241).fastKey,R=n(34),y=R.set,I=R.getterFor;t.exports={getConstructor:function(t,e,n,v){var h=t((function(t,r){l(t,R),y(t,{type:e,index:o(null),first:void 0,last:void 0,size:0}),E||(t.size=0),null!=r&&d(r,t[v],{that:t,AS_ENTRIES:n})})),R=h.prototype,S=I(e),m=function(t,e,n){var r,o,f=S(t),c=x(t,e);return c?c.value=n:(f.last=c={index:o=T(e,!0),key:e,value:n,previous:r=f.last,next:void 0,removed:!1},f.first||(f.first=c),r&&(r.next=c),E?f.size++:t.size++,"F"!==o&&(f.index[o]=c)),t},x=function(t,e){var n,r=S(t),o=T(e);if("F"!==o)return r.index[o];for(n=r.first;n;n=n.next)if(n.key==e)return n};return f(R,{clear:function(){for(var t=S(this),data=t.index,e=t.first;e;)e.removed=!0,e.previous&&(e.previous=e.previous.next=void 0),delete data[e.index],e=e.next;t.first=t.last=void 0,E?t.size=0:this.size=0},delete:function(t){var e=this,n=S(e),r=x(e,t);if(r){var o=r.next,f=r.previous;delete n.index[r.index],r.removed=!0,f&&(f.next=o),o&&(o.previous=f),n.first==r&&(n.first=o),n.last==r&&(n.last=f),E?n.size--:e.size--}return!!r},forEach:function(t){for(var e,n=S(this),r=c(t,arguments.length>1?arguments[1]:void 0);e=e?e.next:n.first;)for(r(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!x(this,t)}}),f(R,n?{get:function(t){var e=x(this,t);return e&&e.value},set:function(t,e){return m(this,0===t?0:t,e)}}:{add:function(t){return m(this,t=0===t?0:t,t)}}),E&&r(R,"size",{get:function(){return S(this).size}}),h},setStrong:function(t,e,n){var r=e+" Iterator",o=I(e),f=I(r);v(t,e,(function(t,e){y(this,{type:r,target:t,state:o(t),kind:e,last:void 0})}),(function(){for(var t=f(this),e=t.kind,n=t.last;n&&n.removed;)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),h(e)}}},263:function(t,e,n){"use strict";var r=n(10),o=n(57),f=n(8);t.exports=function(){for(var t,e=f(this),n=o(e.delete),c=!0,l=0,d=arguments.length;l<d;l++)t=r(n,e,arguments[l]),c=c&&t;return!!c}},264:function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},320:function(t,e,n){"use strict";n.r(e),n.d(e,"groupBy",(function(){return o})),n.d(e,"filteredPromise",(function(){return f})),n.d(e,"getPromisesLength",(function(){return c})),n.d(e,"getGroupTitle",(function(){return v})),n.d(e,"computedPromisePerPage",(function(){return h})),n.d(e,"pageLength",(function(){return E})),n.d(e,"pageNumberArray",(function(){return T})),n.d(e,"currentPagePromises",(function(){return R}));n(48),n(13),n(33),n(26),n(32);var r=n(239),o=function(t,e){return""!==t&&""===e?{by:"topic",where:t}:""===t&&""!==e?{by:"status",where:e}:{by:"",where:""}},f=function(t,e,n){return"topic"===e?t.filter((function(t){return t.topic===n})):"status"===e?t.filter((function(t){return t.status===n})):t},c=function(t){return t.length},l=function(t){var e;return null===(e=r.f.get(t))||void 0===e?void 0:e.long},d=function(t){return r.d.get(t)},v=function(t,e){return"topic"===t?l(e)?"ประเด็น"+l(e):"":"status"===t&&d(e)?"สถานะ: "+d(e):""},h=function(t,e){return t>0?t:e},E=function(t,e){return e<=0?0:Math.ceil(t/e)},T=function(t,e){if(e>t||t<0||e<0)return[];var n=Array.from({length:t},(function(t,e){return e+1})),r=[];if(n.length<=4)return n;if(e<=2)r=[1,2,"...",n.length];else if(e>=3&&e<n.length-2)r=[1,"...",e,e+1,"...",n.length];else{if(!(e>=n.length-2))return[];r=[1,"...",n.length-2,n.length-1,n.length]}return r},R=function(t,e,n){if(e<1||n<0)return[];var r=e*n,o=r-n;return t.slice(o,r)}}}]);