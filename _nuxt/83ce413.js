(window.webpackJsonp=window.webpackJsonp||[]).push([[19,20,21,24,25,26,27,28],{238:function(t,e,n){var r=n(10);t.exports=function(t){return r(Map.prototype.entries,t)}},239:function(t,e,n){"use strict";n.r(e);var r=n(2).a.extend({name:"BoxContainer"}),o=n(16),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"p-3 rounded-md overflow-hidden w-full"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},241:function(t,e,n){var r=n(6),o=n(3),l=n(74),f=n(17),c=n(15),d=n(18).f,v=n(72),m=n(183),h=n(258),x=n(104),_=n(260),E=!1,w=x("meta"),T=0,S=function(t){d(t,w,{value:{objectID:"O"+T++,weakData:{}}})},meta=t.exports={enable:function(){meta.enable=function(){},E=!0;var t=v.f,e=o([].splice),n={};n[w]=1,t(n).length&&(v.f=function(n){for(var r=t(n),i=0,o=r.length;i<o;i++)if(r[i]===w){e(r,i,1);break}return r},r({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:m.f}))},fastKey:function(t,e){if(!f(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!c(t,w)){if(!h(t))return"F";if(!e)return"E";S(t)}return t[w].objectID},getWeakData:function(t,e){if(!c(t,w)){if(!h(t))return!0;if(!e)return!1;S(t)}return t[w].weakData},onFreeze:function(t){return _&&E&&h(t)&&!c(t,w)&&S(t),t}};l[w]=!0},243:function(t,e,n){"use strict";n(257)("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),n(261))},244:function(t,e,n){"use strict";n(6)({target:"Map",proto:!0,real:!0,forced:!0},{deleteAll:n(262)})},245:function(t,e,n){"use strict";var r=n(6),o=n(8),l=n(47),f=n(238),c=n(181);r({target:"Map",proto:!0,real:!0,forced:!0},{every:function(t){var map=o(this),e=f(map),n=l(t,arguments.length>1?arguments[1]:void 0);return!c(e,(function(t,e,r){if(!n(e,t,map))return r()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},246:function(t,e,n){"use strict";var r=n(6),o=n(25),l=n(47),f=n(10),c=n(57),d=n(8),v=n(101),m=n(238),h=n(181);r({target:"Map",proto:!0,real:!0,forced:!0},{filter:function(t){var map=d(this),e=m(map),n=l(t,arguments.length>1?arguments[1]:void 0),r=new(v(map,o("Map"))),x=c(r.set);return h(e,(function(t,e){n(e,t,map)&&f(x,r,t,e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),r}})},247:function(t,e,n){"use strict";var r=n(6),o=n(8),l=n(47),f=n(238),c=n(181);r({target:"Map",proto:!0,real:!0,forced:!0},{find:function(t){var map=o(this),e=f(map),n=l(t,arguments.length>1?arguments[1]:void 0);return c(e,(function(t,e,r){if(n(e,t,map))return r(e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},248:function(t,e,n){"use strict";var r=n(6),o=n(8),l=n(47),f=n(238),c=n(181);r({target:"Map",proto:!0,real:!0,forced:!0},{findKey:function(t){var map=o(this),e=f(map),n=l(t,arguments.length>1?arguments[1]:void 0);return c(e,(function(t,e,r){if(n(e,t,map))return r(t)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},249:function(t,e,n){"use strict";var r=n(6),o=n(8),l=n(238),f=n(263),c=n(181);r({target:"Map",proto:!0,real:!0,forced:!0},{includes:function(t){return c(l(o(this)),(function(e,n,r){if(f(n,t))return r()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},250:function(t,e,n){"use strict";var r=n(6),o=n(8),l=n(238),f=n(181);r({target:"Map",proto:!0,real:!0,forced:!0},{keyOf:function(t){return f(l(o(this)),(function(e,n,r){if(n===t)return r(e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},251:function(t,e,n){"use strict";var r=n(6),o=n(25),l=n(47),f=n(10),c=n(57),d=n(8),v=n(101),m=n(238),h=n(181);r({target:"Map",proto:!0,real:!0,forced:!0},{mapKeys:function(t){var map=d(this),e=m(map),n=l(t,arguments.length>1?arguments[1]:void 0),r=new(v(map,o("Map"))),x=c(r.set);return h(e,(function(t,e){f(x,r,n(e,t,map),e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),r}})},252:function(t,e,n){"use strict";var r=n(6),o=n(25),l=n(47),f=n(10),c=n(57),d=n(8),v=n(101),m=n(238),h=n(181);r({target:"Map",proto:!0,real:!0,forced:!0},{mapValues:function(t){var map=d(this),e=m(map),n=l(t,arguments.length>1?arguments[1]:void 0),r=new(v(map,o("Map"))),x=c(r.set);return h(e,(function(t,e){f(x,r,t,n(e,t,map))}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),r}})},253:function(t,e,n){"use strict";var r=n(6),o=n(57),l=n(8),f=n(181);r({target:"Map",proto:!0,real:!0,forced:!0},{merge:function(t){for(var map=l(this),e=o(map.set),n=arguments.length,i=0;i<n;)f(arguments[i++],e,{that:map,AS_ENTRIES:!0});return map}})},254:function(t,e,n){"use strict";var r=n(6),o=n(1),l=n(8),f=n(57),c=n(238),d=n(181),v=o.TypeError;r({target:"Map",proto:!0,real:!0,forced:!0},{reduce:function(t){var map=l(this),e=c(map),n=arguments.length<2,r=n?void 0:arguments[1];if(f(t),d(e,(function(e,o){n?(n=!1,r=o):r=t(r,o,e,map)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),n)throw v("Reduce of empty map with no initial value");return r}})},255:function(t,e,n){"use strict";var r=n(6),o=n(8),l=n(47),f=n(238),c=n(181);r({target:"Map",proto:!0,real:!0,forced:!0},{some:function(t){var map=o(this),e=f(map),n=l(t,arguments.length>1?arguments[1]:void 0);return c(e,(function(t,e,r){if(n(e,t,map))return r()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},256:function(t,e,n){"use strict";var r=n(6),o=n(1),l=n(10),f=n(8),c=n(57),d=o.TypeError;r({target:"Map",proto:!0,real:!0,forced:!0},{update:function(t,e){var map=f(this),n=c(map.get),r=c(map.has),o=c(map.set),v=arguments.length;c(e);var m=l(r,map,t);if(!m&&v<3)throw d("Updating absent value");var h=m?l(n,map,t):c(v>2?arguments[2]:void 0)(t,map);return l(o,map,t,e(h,t,map)),map}})},257:function(t,e,n){"use strict";var r=n(6),o=n(1),l=n(3),f=n(103),c=n(19),d=n(241),v=n(181),m=n(132),h=n(7),x=n(17),_=n(4),E=n(133),w=n(58),T=n(182);t.exports=function(t,e,n){var S=-1!==t.indexOf("Map"),y=-1!==t.indexOf("Weak"),R=S?"set":"add",I=o[t],C=I&&I.prototype,k=I,O={},A=function(t){var e=l(C[t]);c(C,t,"add"==t?function(t){return e(this,0===t?0:t),this}:"delete"==t?function(t){return!(y&&!x(t))&&e(this,0===t?0:t)}:"get"==t?function(t){return y&&!x(t)?void 0:e(this,0===t?0:t)}:"has"==t?function(t){return!(y&&!x(t))&&e(this,0===t?0:t)}:function(t,n){return e(this,0===t?0:t,n),this})};if(f(t,!h(I)||!(y||C.forEach&&!_((function(){(new I).entries().next()})))))k=n.getConstructor(e,t,S,R),d.enable();else if(f(t,!0)){var j=new k,N=j[R](y?{}:-0,1)!=j,M=_((function(){j.has(1)})),D=E((function(t){new I(t)})),B=!y&&_((function(){for(var t=new I,e=5;e--;)t[R](e,e);return!t.has(-0)}));D||((k=e((function(t,e){m(t,C);var n=T(new I,t,k);return null!=e&&v(e,n[R],{that:n,AS_ENTRIES:S}),n}))).prototype=C,C.constructor=k),(M||B)&&(A("delete"),A("has"),S&&A("get")),(B||N)&&A(R),y&&C.clear&&delete C.clear}return O[t]=k,r({global:!0,forced:k!=I},O),w(k,t),y||n.setStrong(k,t,S),k}},258:function(t,e,n){var r=n(4),o=n(17),l=n(42),f=n(259),c=Object.isExtensible,d=r((function(){c(1)}));t.exports=d||f?function(t){return!!o(t)&&((!f||"ArrayBuffer"!=l(t))&&(!c||c(t)))}:c},259:function(t,e,n){var r=n(4);t.exports=r((function(){if("function"==typeof ArrayBuffer){var t=new ArrayBuffer(8);Object.isExtensible(t)&&Object.defineProperty(t,"a",{value:8})}}))},260:function(t,e,n){var r=n(4);t.exports=!r((function(){return Object.isExtensible(Object.preventExtensions({}))}))},261:function(t,e,n){"use strict";var r=n(18).f,o=n(50),l=n(135),f=n(47),c=n(132),d=n(181),v=n(134),m=n(136),h=n(11),x=n(241).fastKey,_=n(32),E=_.set,w=_.getterFor;t.exports={getConstructor:function(t,e,n,v){var m=t((function(t,r){c(t,_),E(t,{type:e,index:o(null),first:void 0,last:void 0,size:0}),h||(t.size=0),null!=r&&d(r,t[v],{that:t,AS_ENTRIES:n})})),_=m.prototype,T=w(e),S=function(t,e,n){var r,o,l=T(t),f=y(t,e);return f?f.value=n:(l.last=f={index:o=x(e,!0),key:e,value:n,previous:r=l.last,next:void 0,removed:!1},l.first||(l.first=f),r&&(r.next=f),h?l.size++:t.size++,"F"!==o&&(l.index[o]=f)),t},y=function(t,e){var n,r=T(t),o=x(e);if("F"!==o)return r.index[o];for(n=r.first;n;n=n.next)if(n.key==e)return n};return l(_,{clear:function(){for(var t=T(this),data=t.index,e=t.first;e;)e.removed=!0,e.previous&&(e.previous=e.previous.next=void 0),delete data[e.index],e=e.next;t.first=t.last=void 0,h?t.size=0:this.size=0},delete:function(t){var e=this,n=T(e),r=y(e,t);if(r){var o=r.next,l=r.previous;delete n.index[r.index],r.removed=!0,l&&(l.next=o),o&&(o.previous=l),n.first==r&&(n.first=o),n.last==r&&(n.last=l),h?n.size--:e.size--}return!!r},forEach:function(t){for(var e,n=T(this),r=f(t,arguments.length>1?arguments[1]:void 0);e=e?e.next:n.first;)for(r(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!y(this,t)}}),l(_,n?{get:function(t){var e=y(this,t);return e&&e.value},set:function(t,e){return S(this,0===t?0:t,e)}}:{add:function(t){return S(this,t=0===t?0:t,t)}}),h&&r(_,"size",{get:function(){return T(this).size}}),m},setStrong:function(t,e,n){var r=e+" Iterator",o=w(e),l=w(r);v(t,e,(function(t,e){E(this,{type:r,target:t,state:o(t),kind:e,last:void 0})}),(function(){for(var t=l(this),e=t.kind,n=t.last;n&&n.removed;)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),m(e)}}},262:function(t,e,n){"use strict";var r=n(10),o=n(57),l=n(8);t.exports=function(){for(var t,e=l(this),n=o(e.delete),f=!0,c=0,d=arguments.length;c<d;c++)t=r(n,e,arguments[c]),f=f&&t;return!!f}},263:function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},264:function(t,e,n){"use strict";n.r(e);var r=n(2).a.extend({name:"TimelineArrow"}),o=n(16),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("svg",{attrs:{width:"14",height:"9",viewBox:"0 0 14 9",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M10.1621 0H3.83777V4.16555L0.574951 4.16555L6.99992 9L13.4249 4.16555L10.1621 4.16555V0Z",fill:"#3904E9"}})])])}),[],!1,null,null,null);e.default=component.exports},269:function(t,e,n){"use strict";n.r(e);var r=n(2),o=n(239),l=r.a.extend({name:"Link",components:{BoxContainer:o.default},props:{link:{type:Object,default:function(){return{name:"",url:""}}}}}),f=n(16),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col items-center"},[n("BoxContainer",{staticClass:"border-black border-2 wv-font-anuphan mb-3"},[n("a",{staticClass:"wv-font-anuphan wv-font-bold wv-u4 text-ultramarine underline",attrs:{href:t.link.url,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n      "+t._s(t.link.name)+"\n    ")])])],1)}),[],!1,null,null,null);e.default=component.exports},270:function(t,e,n){"use strict";n.r(e);n(49),n(23),n(73);var r=n(2),o=n(239),l=n(264),f=r.a.extend({name:"Timeline",components:{BoxContainer:o.default,TimelineArrow:l.default},props:{timeline:{type:Object,default:function(){return{label:"",from:""}}},isLastItem:{type:Boolean,default:!1}},methods:{formatDate:function(t){var e=t.split("-").map((function(t){return parseInt(t,10)}));return 2===e.length?new Date(e[0],e[1]-1,1).toLocaleDateString("th-TH",{year:"numeric",month:"long"}):3===e.length?new Date(e[0],e[1]-1,e[2]).toLocaleDateString("th-TH",{year:"numeric",month:"long",day:"numeric"}):""}}}),c=n(16),component=Object(c.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col items-center"},[n("BoxContainer",{staticClass:"bg-ultramarine text-white"},[n("p",{staticClass:"wv-u5 wv-font-anuphan"},[n("span",[t._v(t._s(t.formatDate(t.timeline.from)))]),t._v(" "),t.timeline.to?n("span",[t._v("- "+t._s(t.formatDate(t.timeline.to)))]):t._e()]),t._v(" "),n("p",{staticClass:"wv-b5 wv-font-baijamjuri"},[t._v(t._s(t.timeline.label))])]),t._v(" "),t.isLastItem?t._e():n("TimelineArrow",{staticClass:"p-2"})],1)}),[],!1,null,null,null);e.default=component.exports},271:function(t,e,n){"use strict";n.r(e);var r=n(2),o=n(239),l=r.a.extend({name:"NCPO",components:{BoxContainer:o.default}}),f=n(16),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("BoxContainer",{staticClass:"bg-ultramarine text-white wv-font-anuphan mt-3"},[n("p",{staticClass:"wv-u4 wv-font-bold"},[t._v("หมายเหตุ : โครงการต่อยอดจากรัฐบาลคสช.")]),t._v(" "),n("p",{staticClass:"wv-u5 pt-2"},[t._v("\n    เป็นนโยบายหรือโครงการที่มีการดำเนินการมาอยู่แล้วตั้งแต่สมัย\n    รัฐบาลคณะรักษาความสงบแห่งชาติ(คสช.) แล้วพรรค\n    การเมือง/รัฐบาลนำมาสานต่อทำต่อเนื่องมา ไม่ได้เริ่มทำ\n    เมื่อได้รับการแต่งตั้งเป็นรัฐบาล เมื่อวันที่ 10 กรกฎาคม พ.ศ. 2562\n  ")])])}),[],!1,null,null,null);e.default=component.exports},276:function(t,e,n){"use strict";n.r(e);var r=n(2),o=n(239),l=n(269),f=n(270),c=n(271),d=r.a.extend({name:"ExpandedCard",components:{BoxContainer:o.default,Link:l.default,Timeline:f.default,NCPO:c.default},props:{expanded:{type:Boolean,default:!1},promise:{type:Object,default:function(){return{}}}}}),v=n(16),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.expanded?n("div",{staticClass:"grid bg-white px-6 py-3 max-w-2xl rounded-lg overflow-hidden",class:t.promise.timelines.length>0?"sm:grid-cols-2":"sm:grid-cols-1",attrs:{id:"expanded-card-"+t.promise.id}},[n("div",[n("h2",{staticClass:"wv-h10 wv-font-kondolar wv-font-black py-4"},[t._v("รายละเอียด")]),t._v(" "),n("p",{staticClass:"wv-font-baijamjuri wv-b5",attrs:{id:"expanded-card-"+t.promise.id+"-description"}},[t._v("\n      "+t._s(t.promise.description)+"\n    ")]),t._v(" "),t.promise.isNCPO?n("NCPO"):t._e(),t._v(" "),t.promise.links.length>0?n("div",[n("h2",{staticClass:"wv-h10 wv-font-kondolar wv-font-black py-4"},[t._v("\n        ลิงก์ / ข้อมูลที่เกี่ยวข้อง\n      ")]),t._v(" "),n("BoxContainer",{staticClass:"border-black border-2 mb-3"},[n("img",{attrs:{id:"expanded-card-"+t.promise.id+"-image",src:t.$config.path.images+"/party/dummy.jpg",alt:"dummy"}})]),t._v(" "),t._l(t.promise.links,(function(link,e){return n("Link",{key:"promise-"+t.promise.id+"-link-"+e,attrs:{link:link}})}))],2):t._e()],1),t._v(" "),t.promise.timelines.length>0?n("div",{staticClass:"sm:pl-6 pb-3"},[n("h2",{staticClass:"timeline wv-h10 wv-font-kondolar wv-font-black py-4"},[t._v("\n      ไทม์ไลน์\n    ")]),t._v(" "),t._l(t.promise.timelines,(function(e,r){return n("Timeline",{key:"promise-"+t.promise.id+"-timeline-"+r,attrs:{timeline:e,"is-last-item":r===t.promise.timelines.length-1}})}))],2):t._e()]):t._e()}),[],!1,null,null,null);e.default=component.exports},279:function(t,e,n){"use strict";n.r(e);var r=n(2),o=n(284),l=n(276),f=r.a.extend({name:"PromiseCard",components:{SingleCard:o.default,ExpandedCard:l.default},props:{promise:{type:Object,default:function(){return{}}},openState:{type:Boolean,default:!1}},data:function(){return{readMoreState:this.$props.openState}},methods:{handleReadClick:function(t){this.readMoreState=t}}}),c=n(16),component=Object(c.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"promise-card-"+t.promise.id}},[n("SingleCard",{attrs:{openState:t.openState,promise:t.promise},on:{readmore:function(e){return t.handleReadClick(e)}}}),t._v(" "),n("ExpandedCard",{attrs:{expanded:t.readMoreState,promise:t.promise}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);