(window.webpackJsonp=window.webpackJsonp||[]).push([[15,10,12,14],{240:function(t,n,e){"use strict";e.d(n,"b",(function(){return r})),e.d(n,"a",(function(){return o})),e.d(n,"d",(function(){return c})),e.d(n,"c",(function(){return l}));var r,o;e(243),e(13),e(26),e(244),e(245),e(246),e(247),e(248),e(249),e(250),e(251),e(252),e(253),e(254),e(255),e(256),e(27);!function(t){t.Equality="equality",t.Security="security",t.Foreign="foreign",t.Administration="administration",t.Culture="culture",t.Economics="economics",t.Environmental="environmental"}(r||(r={})),function(t){t.NoData="nodata",t.Proposed="proposed",t.Paused="paused",t.Working="working",t.Done="done"}(o||(o={}));var c=new Map([[r.Equality,{long:"ความเท่าเทียม/คุณภาพชีวิต",short:"คุณภาพชีวิต"}],[r.Security,{long:"ความมั่นคง/ปกป้องสถาบันกษัตริย์",short:"ความมั่นคง"}],[r.Foreign,{long:"ต่างประเทศ",short:"ต่างประเทศ"}],[r.Administration,{long:"บริหารจัดการ(ราชการ)",short:"บริหารจัดการ"}],[r.Culture,{long:"ศาสนาและวัฒนธรรม",short:"ศาสนาและวัฒนธรรม"}],[r.Economics,{long:"เศรษฐกิจ",short:"เศรษฐกิจ"}],[r.Environmental,{long:"สิ่งแวดล้อม",short:"สิ่งแวดล้อม"}]]),l=new Map([[o.NoData,"ไม่พบข้อมูล"],[o.Proposed,"ถูกเสนอต่อสภา"],[o.Paused,"ถูกระงับ"],[o.Working,"กำลังดำเนินการ"],[o.Done,"สำเร็จ"]])},242:function(t,n,e){"use strict";var r;e.d(n,"a",(function(){return r})),function(t){t.Party="party",t.Status="status",t.Keyword="keyword",t.Topic="topic"}(r||(r={}))},266:function(t,n,e){var r=e(3);t.exports=r(1..valueOf)},272:function(t,n,e){"use strict";var r=e(11),o=e(1),c=e(3),l=e(103),f=e(19),d=e(15),m=e(182),v=e(43),h=e(106),y=e(184),C=e(4),x=e(72).f,w=e(34).f,_=e(18).f,N=e(266),E=e(186).trim,I="Number",S=o.Number,M=S.prototype,A=o.TypeError,O=c("".slice),j=c("".charCodeAt),P=function(t){var n=y(t,"number");return"bigint"==typeof n?n:k(n)},k=function(t){var n,e,r,o,c,l,f,code,d=y(t,"number");if(h(d))throw A("Cannot convert a Symbol value to a number");if("string"==typeof d&&d.length>2)if(d=E(d),43===(n=j(d,0))||45===n){if(88===(e=j(d,2))||120===e)return NaN}else if(48===n){switch(j(d,1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+d}for(l=(c=O(d,2)).length,f=0;f<l;f++)if((code=j(c,f))<48||code>o)return NaN;return parseInt(c,r)}return+d};if(l(I,!S(" 0o1")||!S("0b1")||S("+0x1"))){for(var T,F=function(t){var n=arguments.length<1?0:S(P(t)),e=this;return v(M,e)&&C((function(){N(e)}))?m(Object(n),e,F):n},B=r?x(S):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),V=0;B.length>V;V++)d(S,T=B[V])&&!d(F,T)&&_(F,T,w(S,T));F.prototype=M,M.constructor=F,f(o,I,F)}},273:function(t,n,e){"use strict";e.r(n),e.d(n,"groupPromisesBy",(function(){return v}));var r=e(22),o=e(282),c=(e(13),e(105),e(277),e(49),e(185),e(33),e(48),e(268),e(278),e(242)),l=e(240),f=[l.a.NoData,l.a.Proposed,l.a.Paused,l.a.Working,l.a.Done],d=[l.b.Equality,l.b.Security,l.b.Foreign,l.b.Administration,l.b.Culture,l.b.Economics,l.b.Environmental],m=function(t){return t?f.reduce((function(n,e){return e in t?[].concat(Object(o.a)(n),[{status:e,count:t[e]}]):n}),[]):[]},v=function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:7,v=n.reduce((function(n,e){var r=e[t];return r in n?n[r].count++:n[r]={count:1,statuses:{}},e.status in n[r].statuses?n[r].statuses[e.status]++:n[r].statuses[e.status]=1,n}),{}),h=t===c.a.Party?Object.entries(v).map((function(t){var n=Object(r.a)(t,2),label=n[0],e=n[1].statuses;return{label:label,icon:"party/".concat(label,".jpg"),data:m(e)}})).sort((function(a,t){return v[t.label].count-v[a.label].count})):t===c.a.Topic?d.map((function(t){var n,e;return{label:null===(n=l.d.get(t))||void 0===n?void 0:n.short,icon:"topic/".concat(t,"_small.png"),data:m(null===(e=v[t])||void 0===e?void 0:e.statuses)}})):f.map((function(t){var n;return{label:l.c.get(t),icon:"status/".concat(t,"_small.png"),data:m(null===(n=v[t])||void 0===n?void 0:n.statuses)}}));if(h.length>e){var y=h.slice(e);h=[].concat(Object(o.a)(h.slice(0,e)),[{label:"อื่นๆ",icon:"other-group.png",data:f.map((function(t){return{status:t,count:y.reduce((function(n,e){var r;return n+((null===(r=e.data.find((function(n){return n.status===t})))||void 0===r?void 0:r.count)||0)}),0)}})).filter((function(t){return t.count>0}))}])}var C=Object.values(v).map((function(t){return t.count}));return{max:Math.max.apply(Math,Object(o.a)(C)),total:C.reduce((function(t,n){return t+n}),0),charts:h}}},275:function(t,n,e){"use strict";e.r(n);e(272),e(13);var r=e(2).a.extend({name:"ChartItem",props:{label:{type:String,required:!0},icon:{type:String,default:""},data:{type:Array,required:!0},max:{type:Number,required:!0},total:{type:Number,required:!0}},computed:{count:function(){return this.data.reduce((function(t,n){return t+n.count}),0)},percentage:function(){return(this.count/this.total*100).toLocaleString("th-TH",{maximumFractionDigits:1})}}}),o=e(16),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"flex flex-row text-white"},[e("div",{staticClass:"flex-1 flex flex-row items-center space-x-1"},[t.icon?e("img",{staticClass:"w-4 h-4 rounded-full",attrs:{src:t.$config.path.images+"/"+t.icon,alt:t.label}}):t._e(),t._v(" "),e("p",{staticClass:"wv-u5 wv-font-semibold"},[t._v(t._s(t.label)+" ("+t._s(t.count)+")")])]),t._v(" "),e("div",{staticClass:"flex flex-row flex-1 space-x-1 wv-u5 wv-font-semibold items-center"},[e("div",{ref:"barchart",staticClass:"flex flex-row h-5",style:{width:Math.round(t.count/t.max*100)+"%"}},t._l(t.data,(function(n){return e("div",{key:n.status,class:"bg-status-"+n.status,style:{width:Math.round(n.count/t.count*100)+"%"}})})),0),t._v(" "),e("span",[t._v(t._s(t.percentage)+"%")])])])}),[],!1,null,null,null);n.default=component.exports},287:function(t,n,e){"use strict";e.r(n);var r=e(2),o=e(102),c=e(275),l=e(273),f=r.a.extend({name:"TabBody",components:{Button:o.default,ChartItem:c.default},props:{promises:{type:Array,default:function(){return[]}},groupBy:{type:String,required:!0}},computed:{group:function(){return Object(l.groupPromisesBy)(this.groupBy,this.promises)}}}),d=e(16),component=Object(d.a)(f,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"flex flex-col p-4 space-y-8 bg-ultramarine rounded-b-xl md:rounded-bl-none h-80"},[e("div",{staticClass:"flex-1 flex flex-col space-y-2 m-2"},t._l(t.group.charts,(function(n){var label=n.label,r=n.icon,data=n.data;return e("ChartItem",{key:label,attrs:{label:label,icon:r,data:data,max:t.group.max,total:t.group.total}})})),1),t._v(" "),e("Button",{staticClass:"justify-center"},[e("svg",{attrs:{width:"15",height:"16",viewBox:"0 0 15 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M6.75 5.74975H8.25V4.24976H6.75V5.74975ZM7.5 13.9998C4.1925 13.9998 1.5 11.3073 1.5 7.99975C1.5 4.69226 4.1925 1.99976 7.5 1.99976C10.8075 1.99976 13.5 4.69226 13.5 7.99975C13.5 11.3073 10.8075 13.9998 7.5 13.9998ZM7.5 0.499756C6.51509 0.499756 5.53981 0.693749 4.62987 1.07066C3.71993 1.44757 2.89314 2.00002 2.1967 2.69645C0.790176 4.10298 0 6.01063 0 7.99975C0 9.98888 0.790176 11.8965 2.1967 13.3031C2.89314 13.9995 3.71993 14.5519 4.62987 14.9289C5.53981 15.3058 6.51509 15.4998 7.5 15.4998C9.48912 15.4998 11.3968 14.7096 12.8033 13.3031C14.2098 11.8965 15 9.98888 15 7.99975C15 7.01484 14.806 6.03957 14.4291 5.12963C14.0522 4.21969 13.4997 3.39289 12.8033 2.69645C12.1069 2.00002 11.2801 1.44757 10.3701 1.07066C9.46018 0.693749 8.48491 0.499756 7.5 0.499756ZM6.75 11.7498H8.25V7.24975H6.75V11.7498Z"}})]),t._v(" "),e("span",[t._v("ข้อมูลเพิ่มเติม")])])],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Button:e(102).default})}}]);