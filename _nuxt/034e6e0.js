(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{238:function(t,e,n){var r=n(10);t.exports=function(t){return r(Map.prototype.entries,t)}},239:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"c",(function(){return c})),n.d(e,"e",(function(){return f})),n.d(e,"f",(function(){return l})),n.d(e,"d",(function(){return d}));var r,o;n(243),n(13),n(26),n(244),n(245),n(246),n(247),n(248),n(249),n(250),n(251),n(252),n(253),n(254),n(255),n(256),n(27);!function(t){t.Equality="equality",t.Security="security",t.Foreign="foreign",t.Administration="administration",t.Culture="culture",t.Economics="economics",t.Environmental="environmental"}(r||(r={})),function(t){t.NoData="nodata",t.Proposed="proposed",t.Paused="paused",t.Working="working",t.Done="done"}(o||(o={}));var c=[o.NoData,o.Proposed,o.Paused,o.Working,o.Done],f=[r.Equality,r.Security,r.Foreign,r.Administration,r.Culture,r.Economics,r.Environmental],l=new Map([[r.Equality,{long:"ความเท่าเทียม/คุณภาพชีวิต",short:"คุณภาพชีวิต"}],[r.Security,{long:"ความมั่นคง/ปกป้องสถาบันกษัตริย์",short:"ความมั่นคง"}],[r.Foreign,{long:"ต่างประเทศ",short:"ต่างประเทศ"}],[r.Administration,{long:"บริหารจัดการ(ราชการ)",short:"บริหารจัดการ"}],[r.Culture,{long:"ศาสนาและวัฒนธรรม",short:"ศาสนาและวัฒนธรรม"}],[r.Economics,{long:"เศรษฐกิจ",short:"เศรษฐกิจ"}],[r.Environmental,{long:"สิ่งแวดล้อม",short:"สิ่งแวดล้อม"}]]),d=new Map([[o.NoData,"ไม่พบข้อมูล"],[o.Proposed,"ถูกเสนอต่อสภา"],[o.Paused,"ถูกระงับ"],[o.Working,"กำลังดำเนินการ"],[o.Done,"สำเร็จ"]])},240:function(t,e,n){"use strict";var r;n.d(e,"a",(function(){return r})),function(t){t.Party="party",t.Status="status",t.Keyword="keyword",t.Topic="topic"}(r||(r={}))},241:function(t,e,n){var r=n(6),o=n(3),c=n(74),f=n(17),l=n(15),d=n(18).f,v=n(73),h=n(183),E=n(259),y=n(105),T=n(261),x=!1,R=y("meta"),S=0,I=function(t){d(t,R,{value:{objectID:"O"+S++,weakData:{}}})},meta=t.exports={enable:function(){meta.enable=function(){},x=!0;var t=v.f,e=o([].splice),n={};n[R]=1,t(n).length&&(v.f=function(n){for(var r=t(n),i=0,o=r.length;i<o;i++)if(r[i]===R){e(r,i,1);break}return r},r({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:h.f}))},fastKey:function(t,e){if(!f(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!l(t,R)){if(!E(t))return"F";if(!e)return"E";I(t)}return t[R].objectID},getWeakData:function(t,e){if(!l(t,R)){if(!E(t))return!0;if(!e)return!1;I(t)}return t[R].weakData},onFreeze:function(t){return T&&x&&E(t)&&!l(t,R)&&I(t),t}};c[R]=!0},243:function(t,e,n){"use strict";n(258)("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),n(262))},244:function(t,e,n){"use strict";n(6)({target:"Map",proto:!0,real:!0,forced:!0},{deleteAll:n(263)})},245:function(t,e,n){"use strict";var r=n(6),o=n(8),c=n(47),f=n(238),l=n(181);r({target:"Map",proto:!0,real:!0,forced:!0},{every:function(t){var map=o(this),e=f(map),n=c(t,arguments.length>1?arguments[1]:void 0);return!l(e,(function(t,e,r){if(!n(e,t,map))return r()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},246:function(t,e,n){"use strict";var r=n(6),o=n(25),c=n(47),f=n(10),l=n(57),d=n(8),v=n(102),h=n(238),E=n(181);r({target:"Map",proto:!0,real:!0,forced:!0},{filter:function(t){var map=d(this),e=h(map),n=c(t,arguments.length>1?arguments[1]:void 0),r=new(v(map,o("Map"))),y=l(r.set);return E(e,(function(t,e){n(e,t,map)&&f(y,r,t,e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),r}})},247:function(t,e,n){"use strict";var r=n(6),o=n(8),c=n(47),f=n(238),l=n(181);r({target:"Map",proto:!0,real:!0,forced:!0},{find:function(t){var map=o(this),e=f(map),n=c(t,arguments.length>1?arguments[1]:void 0);return l(e,(function(t,e,r){if(n(e,t,map))return r(e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},248:function(t,e,n){"use strict";var r=n(6),o=n(8),c=n(47),f=n(238),l=n(181);r({target:"Map",proto:!0,real:!0,forced:!0},{findKey:function(t){var map=o(this),e=f(map),n=c(t,arguments.length>1?arguments[1]:void 0);return l(e,(function(t,e,r){if(n(e,t,map))return r(t)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},249:function(t,e,n){"use strict";var r=n(6),o=n(8),c=n(238),f=n(264),l=n(181);r({target:"Map",proto:!0,real:!0,forced:!0},{includes:function(t){return l(c(o(this)),(function(e,n,r){if(f(n,t))return r()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},250:function(t,e,n){"use strict";var r=n(6),o=n(8),c=n(238),f=n(181);r({target:"Map",proto:!0,real:!0,forced:!0},{keyOf:function(t){return f(c(o(this)),(function(e,n,r){if(n===t)return r(e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},251:function(t,e,n){"use strict";var r=n(6),o=n(25),c=n(47),f=n(10),l=n(57),d=n(8),v=n(102),h=n(238),E=n(181);r({target:"Map",proto:!0,real:!0,forced:!0},{mapKeys:function(t){var map=d(this),e=h(map),n=c(t,arguments.length>1?arguments[1]:void 0),r=new(v(map,o("Map"))),y=l(r.set);return E(e,(function(t,e){f(y,r,n(e,t,map),e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),r}})},252:function(t,e,n){"use strict";var r=n(6),o=n(25),c=n(47),f=n(10),l=n(57),d=n(8),v=n(102),h=n(238),E=n(181);r({target:"Map",proto:!0,real:!0,forced:!0},{mapValues:function(t){var map=d(this),e=h(map),n=c(t,arguments.length>1?arguments[1]:void 0),r=new(v(map,o("Map"))),y=l(r.set);return E(e,(function(t,e){f(y,r,t,n(e,t,map))}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),r}})},253:function(t,e,n){"use strict";var r=n(6),o=n(57),c=n(8),f=n(181);r({target:"Map",proto:!0,real:!0,forced:!0},{merge:function(t){for(var map=c(this),e=o(map.set),n=arguments.length,i=0;i<n;)f(arguments[i++],e,{that:map,AS_ENTRIES:!0});return map}})},254:function(t,e,n){"use strict";var r=n(6),o=n(1),c=n(8),f=n(57),l=n(238),d=n(181),v=o.TypeError;r({target:"Map",proto:!0,real:!0,forced:!0},{reduce:function(t){var map=c(this),e=l(map),n=arguments.length<2,r=n?void 0:arguments[1];if(f(t),d(e,(function(e,o){n?(n=!1,r=o):r=t(r,o,e,map)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),n)throw v("Reduce of empty map with no initial value");return r}})},255:function(t,e,n){"use strict";var r=n(6),o=n(8),c=n(47),f=n(238),l=n(181);r({target:"Map",proto:!0,real:!0,forced:!0},{some:function(t){var map=o(this),e=f(map),n=c(t,arguments.length>1?arguments[1]:void 0);return l(e,(function(t,e,r){if(n(e,t,map))return r()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},256:function(t,e,n){"use strict";var r=n(6),o=n(1),c=n(10),f=n(8),l=n(57),d=o.TypeError;r({target:"Map",proto:!0,real:!0,forced:!0},{update:function(t,e){var map=f(this),n=l(map.get),r=l(map.has),o=l(map.set),v=arguments.length;l(e);var h=c(r,map,t);if(!h&&v<3)throw d("Updating absent value");var E=h?c(n,map,t):l(v>2?arguments[2]:void 0)(t,map);return c(o,map,t,e(E,t,map)),map}})},258:function(t,e,n){"use strict";var r=n(6),o=n(1),c=n(3),f=n(104),l=n(19),d=n(241),v=n(181),h=n(132),E=n(7),y=n(17),T=n(4),x=n(133),R=n(60),S=n(182);t.exports=function(t,e,n){var I=-1!==t.indexOf("Map"),m=-1!==t.indexOf("Weak"),w=I?"set":"add",C=o[t],_=C&&C.prototype,A=C,k={},M=function(t){var e=c(_[t]);l(_,t,"add"==t?function(t){return e(this,0===t?0:t),this}:"delete"==t?function(t){return!(m&&!y(t))&&e(this,0===t?0:t)}:"get"==t?function(t){return m&&!y(t)?void 0:e(this,0===t?0:t)}:"has"==t?function(t){return!(m&&!y(t))&&e(this,0===t?0:t)}:function(t,n){return e(this,0===t?0:t,n),this})};if(f(t,!E(C)||!(m||_.forEach&&!T((function(){(new C).entries().next()})))))A=n.getConstructor(e,t,I,w),d.enable();else if(f(t,!0)){var N=new A,O=N[w](m?{}:-0,1)!=N,P=T((function(){N.has(1)})),D=x((function(t){new C(t)})),j=!m&&T((function(){for(var t=new C,e=5;e--;)t[w](e,e);return!t.has(-0)}));D||((A=e((function(t,e){h(t,_);var n=S(new C,t,A);return null!=e&&v(e,n[w],{that:n,AS_ENTRIES:I}),n}))).prototype=_,_.constructor=A),(P||j)&&(M("delete"),M("has"),I&&M("get")),(j||O)&&M(w),m&&_.clear&&delete _.clear}return k[t]=A,r({global:!0,forced:A!=C},k),R(A,t),m||n.setStrong(A,t,I),A}},259:function(t,e,n){var r=n(4),o=n(17),c=n(42),f=n(260),l=Object.isExtensible,d=r((function(){l(1)}));t.exports=d||f?function(t){return!!o(t)&&((!f||"ArrayBuffer"!=c(t))&&(!l||l(t)))}:l},260:function(t,e,n){var r=n(4);t.exports=r((function(){if("function"==typeof ArrayBuffer){var t=new ArrayBuffer(8);Object.isExtensible(t)&&Object.defineProperty(t,"a",{value:8})}}))},261:function(t,e,n){var r=n(4);t.exports=!r((function(){return Object.isExtensible(Object.preventExtensions({}))}))},262:function(t,e,n){"use strict";var r=n(18).f,o=n(50),c=n(135),f=n(47),l=n(132),d=n(181),v=n(134),h=n(136),E=n(11),y=n(241).fastKey,T=n(34),x=T.set,R=T.getterFor;t.exports={getConstructor:function(t,e,n,v){var h=t((function(t,r){l(t,T),x(t,{type:e,index:o(null),first:void 0,last:void 0,size:0}),E||(t.size=0),null!=r&&d(r,t[v],{that:t,AS_ENTRIES:n})})),T=h.prototype,S=R(e),I=function(t,e,n){var r,o,c=S(t),f=m(t,e);return f?f.value=n:(c.last=f={index:o=y(e,!0),key:e,value:n,previous:r=c.last,next:void 0,removed:!1},c.first||(c.first=f),r&&(r.next=f),E?c.size++:t.size++,"F"!==o&&(c.index[o]=f)),t},m=function(t,e){var n,r=S(t),o=y(e);if("F"!==o)return r.index[o];for(n=r.first;n;n=n.next)if(n.key==e)return n};return c(T,{clear:function(){for(var t=S(this),data=t.index,e=t.first;e;)e.removed=!0,e.previous&&(e.previous=e.previous.next=void 0),delete data[e.index],e=e.next;t.first=t.last=void 0,E?t.size=0:this.size=0},delete:function(t){var e=this,n=S(e),r=m(e,t);if(r){var o=r.next,c=r.previous;delete n.index[r.index],r.removed=!0,c&&(c.next=o),o&&(o.previous=c),n.first==r&&(n.first=o),n.last==r&&(n.last=c),E?n.size--:e.size--}return!!r},forEach:function(t){for(var e,n=S(this),r=f(t,arguments.length>1?arguments[1]:void 0);e=e?e.next:n.first;)for(r(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!m(this,t)}}),c(T,n?{get:function(t){var e=m(this,t);return e&&e.value},set:function(t,e){return I(this,0===t?0:t,e)}}:{add:function(t){return I(this,t=0===t?0:t,t)}}),E&&r(T,"size",{get:function(){return S(this).size}}),h},setStrong:function(t,e,n){var r=e+" Iterator",o=R(e),c=R(r);v(t,e,(function(t,e){x(this,{type:r,target:t,state:o(t),kind:e,last:void 0})}),(function(){for(var t=c(this),e=t.kind,n=t.last;n&&n.removed;)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),h(e)}}},263:function(t,e,n){"use strict";var r=n(10),o=n(57),c=n(8);t.exports=function(){for(var t,e=c(this),n=o(e.delete),f=!0,l=0,d=arguments.length;l<d;l++)t=r(n,e,arguments[l]),f=f&&t;return!!f}},264:function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},295:function(t,e,n){"use strict";n.r(e);n(48),n(13);var r=n(2),filter=n(240),o=n(239),c=r.a.extend({name:"FilterChips",props:{filter:{type:Object,required:!0}},computed:{topic:function(){return this.filter.type},text:function(){var t,e=this.filter,n=e.type,r=e.value;switch(n){case filter.a.Party:return r;case filter.a.Status:return"สถานะ: ".concat(o.d.get(r));case filter.a.Keyword:return"คำค้นหา: ".concat(r);case filter.a.Topic:return"ประเด็น".concat(null===(t=o.f.get(r))||void 0===t?void 0:t.short);default:return""}},icon:function(){var t=this.filter,e=t.type,n=t.value;switch(e){case filter.a.Party:return"".concat(n,".jpg");case filter.a.Status:case filter.a.Topic:return"".concat(n,"_small.png");default:return""}}}}),f=n(16),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-row py-1 px-2 text-ultramarine space-x-2"},[n("div",{staticClass:"flex items-center"},["keyword"!==t.topic?n("img",{staticClass:"h-4 rounded-full shadow-xl",attrs:{src:t.$config.path.images+"/"+t.topic+"/"+t.icon,alt:t.text}}):t._e()]),t._v(" "),n("span",{staticClass:"wv-u4 wv-font-semibold"},[t._v(t._s(t.text))]),t._v(" "),n("button",{on:{click:function(e){return t.$emit("remove")}}},[n("svg",{attrs:{width:"10",height:"10",viewBox:"0 0 10 10",fill:"currentColor"}},[n("path",{attrs:{d:"M8.83597 0.664218C8.88836 0.716469 8.92992 0.778542 8.95827 0.84688C8.98663 0.915218 9.00123 0.98848 9.00123 1.06247C9.00123 1.13646 8.98663 1.20972 8.95827 1.27806C8.92992 1.34639 8.88836 1.40847 8.83597 1.46072L0.960972 9.33572C0.85535 9.44134 0.712095 9.50068 0.562722 9.50068C0.41335 9.50068 0.270095 9.44134 0.164472 9.33572C0.0588497 9.2301 -0.00048828 9.08684 -0.000488281 8.93747C-0.000488282 8.78809 0.0588497 8.64484 0.164472 8.53922L8.03947 0.664218C8.09172 0.611834 8.1538 0.570273 8.22214 0.541916C8.29047 0.513559 8.36373 0.498962 8.43772 0.498962C8.51171 0.498962 8.58497 0.513559 8.65331 0.541916C8.72165 0.570273 8.78372 0.611834 8.83597 0.664218V0.664218Z"}}),t._v(" "),n("path",{attrs:{d:"M0.164279 0.664218C0.111895 0.716469 0.0703344 0.778542 0.0419771 0.84688C0.0136199 0.915218 -0.000976562 0.98848 -0.000976562 1.06247C-0.000976562 1.13646 0.0136199 1.20972 0.0419771 1.27806C0.0703344 1.34639 0.111895 1.40847 0.164279 1.46072L8.03928 9.33572C8.1449 9.44134 8.28816 9.50068 8.43753 9.50068C8.5869 9.50068 8.73016 9.44134 8.83578 9.33572C8.9414 9.2301 9.00074 9.08684 9.00074 8.93747C9.00074 8.78809 8.9414 8.64484 8.83578 8.53922L0.960779 0.664218C0.908528 0.611834 0.846455 0.570273 0.778117 0.541916C0.709779 0.513559 0.636517 0.498962 0.562529 0.498962C0.488541 0.498962 0.415279 0.513559 0.346941 0.541916C0.278603 0.570273 0.21653 0.611834 0.164279 0.664218V0.664218Z"}})])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:n(101).default})}}]);