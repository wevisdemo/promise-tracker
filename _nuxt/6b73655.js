(window.webpackJsonp=window.webpackJsonp||[]).push([[13,9,10,11,15,17,18],{241:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return l})),n.d(e,"c",(function(){return o})),n.d(e,"e",(function(){return c})),n.d(e,"f",(function(){return f})),n.d(e,"d",(function(){return d}));var r,l;n(245),n(13),n(26),n(246),n(247),n(248),n(249),n(250),n(251),n(252),n(253),n(254),n(255),n(256),n(257),n(258),n(27);!function(t){t.Equality="equality",t.Security="security",t.Foreign="foreign",t.Administration="administration",t.Culture="culture",t.Economics="economics",t.Environmental="environmental"}(r||(r={})),function(t){t.NoData="nodata",t.Proposed="proposed",t.Paused="paused",t.Working="working",t.Done="done"}(l||(l={}));var o=[l.NoData,l.Proposed,l.Paused,l.Working,l.Done],c=[r.Equality,r.Security,r.Foreign,r.Administration,r.Culture,r.Economics,r.Environmental],f=new Map([[r.Equality,{long:"ความเท่าเทียม/คุณภาพชีวิต",short:"คุณภาพชีวิต"}],[r.Security,{long:"ความมั่นคง/ปกป้องสถาบันกษัตริย์",short:"ความมั่นคง"}],[r.Foreign,{long:"ต่างประเทศ",short:"ต่างประเทศ"}],[r.Administration,{long:"บริหารจัดการ(ราชการ)",short:"บริหารจัดการ"}],[r.Culture,{long:"ศาสนาและวัฒนธรรม",short:"ศาสนาและวัฒนธรรม"}],[r.Economics,{long:"เศรษฐกิจ",short:"เศรษฐกิจ"}],[r.Environmental,{long:"สิ่งแวดล้อม",short:"สิ่งแวดล้อม"}]]),d=new Map([[l.NoData,"ไม่พบความเคลื่อนไหว"],[l.Proposed,"ถูกเสนอต่อสภา"],[l.Paused,"ถูกระงับ"],[l.Working,"กำลังดำเนินการ"],[l.Done,"สำเร็จ"]])},242:function(t,e,n){"use strict";var r;n.d(e,"a",(function(){return r})),function(t){t.Party="party",t.Status="status",t.Keyword="keyword",t.Topic="topic"}(r||(r={}))},267:function(t,e,n){"use strict";n.r(e);n(48),n(13),n(23);var r=n(2).a.extend({name:"StatusLegend",props:{showDetail:{type:Boolean,default:!0},showInline:{type:Boolean,default:!1},showOnly:{type:String,default:""}},data:function(){return{dataArray:[{id:0,icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24 12C24 15.1826 22.7357 18.2348 20.4853 20.4853C18.2348 22.7357 15.1826 24 12 24C8.8174 24 5.76516 22.7357 3.51472 20.4853C1.26428 18.2348 0 15.1826 0 12C0 8.8174 1.26428 5.76516 3.51472 3.51472C5.76516 1.26428 8.8174 0 12 0C15.1826 0 18.2348 1.26428 20.4853 3.51472C22.7357 5.76516 24 8.8174 24 12ZM12 6C11.8104 6.00011 11.6229 6.03993 11.4497 6.11689C11.2764 6.19386 11.1212 6.30626 10.994 6.44687C10.8668 6.58747 10.7705 6.75316 10.7113 6.93325C10.652 7.11334 10.6311 7.30385 10.65 7.4925L11.175 12.753C11.1926 12.9597 11.2872 13.1522 11.44 13.2925C11.5927 13.4327 11.7926 13.5106 12 13.5106C12.2074 13.5106 12.4073 13.4327 12.56 13.2925C12.7128 13.1522 12.8074 12.9597 12.825 12.753L13.35 7.4925C13.3689 7.30385 13.348 7.11334 13.2887 6.93325C13.2295 6.75316 13.1332 6.58747 13.006 6.44687C12.8788 6.30626 12.7236 6.19386 12.5503 6.11689C12.3771 6.03993 12.1896 6.00011 12 6ZM12.003 15C11.6052 15 11.2236 15.158 10.9423 15.4393C10.661 15.7206 10.503 16.1022 10.503 16.5C10.503 16.8978 10.661 17.2794 10.9423 17.5607C11.2236 17.842 11.6052 18 12.003 18C12.4008 18 12.7824 17.842 13.0637 17.5607C13.345 17.2794 13.503 16.8978 13.503 16.5C13.503 16.1022 13.345 15.7206 13.0637 15.4393C12.7824 15.158 12.4008 15 12.003 15Z" fill="#8F8F8F"/></svg>',name:"ไม่พบความเคลื่อนไหว",description:"หลังจากมีคำสัญญาเกิดขึ้น แล้วเมื่อค้นหาข้อมูลการดำเนินการ แล้วไม่พบความเคลื่อนไหวของการดำเนินของคำสัญญานั้นๆ"},{id:1,icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="24" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM19.2547 12.6757L14.7413 15.9978C14.2631 16.2802 13.65 15.9393 13.65 15.3712V14.2428H6V9.85535H13.65V8.72697C13.6496 8.59904 13.683 8.47326 13.7469 8.36245C13.8109 8.25163 13.903 8.15972 14.014 8.09606C14.125 8.0324 14.2508 7.99926 14.3788 8.00001C14.5067 8.00077 14.6322 8.03539 14.7424 8.10035L19.2547 11.4225C19.3637 11.4868 19.4539 11.5785 19.5166 11.6884C19.5793 11.7983 19.6123 11.9226 19.6123 12.0491C19.6123 12.1756 19.5793 12.2999 19.5166 12.4098C19.4539 12.5197 19.3637 12.6114 19.2547 12.6757Z" fill="#FD9154"/></svg>',name:"ถูกเสนอต่อสภา",description:"การยื่นเรื่องเข้าพิจารณาตราเป็นกฎหมายหรือให้มีผลต่อสภาแล้ว ซึ่งส่วนมากใช้กับฝ่ายค้านเพราะเนื่องจากบทบาทของฝ่ายค้านน้อยกว่ารัฐบาลและเรื่องที่เสนอ สามารถถูกปัดตกได้ง่าย ทำให้การดำเนินการตามสัญญาไม่ค่อยได้ไปต่อ ดังนั้นการพยายามผลักดันหรือยื่นเรื่องต่อสภาให้พิจารณาเป็นบทบาทของการขับเคลื่อนคำสัญญาให้ไปต่อ"},{id:2,icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM6 8C6 7.44772 6.44772 7 7 7H10C10.5523 7 11 7.44772 11 8V16C11 16.5523 10.5523 17 10 17H7C6.44772 17 6 16.5523 6 16V8ZM13 8C13 7.44772 13.4477 7 14 7H17C17.5523 7 18 7.44772 18 8V16C18 16.5523 17.5523 17 17 17H14C13.4477 17 13 16.5523 13 16V8Z" fill="#E91E63"/></svg>',name:"ถูกระงับ",description:"ส่วนใหญ่จะเป็นกรณีพิเศษที่ทำให้คำสัญญานั้นถูกระงับไป ยังไม่ได้ทำต่อ หยุดไว้ก่อน เช่น ไม่มีงบ กรณีพรรคโดนยุบ"},{id:3,icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM10.495 5.39L10.595 5.05C11.008 3.65 12.992 3.65 13.405 5.05L13.505 5.39C13.5667 5.59959 13.6745 5.79272 13.8206 5.95521C13.9667 6.11771 14.1472 6.24544 14.3491 6.32906C14.551 6.41268 14.769 6.45006 14.9872 6.43846C15.2053 6.42685 15.4182 6.36656 15.61 6.262L15.921 6.093C17.203 5.394 18.606 6.797 17.908 8.08L17.738 8.39C17.6334 8.58185 17.5731 8.79466 17.5615 9.01285C17.5499 9.23103 17.5873 9.44904 17.6709 9.6509C17.7546 9.85275 17.8823 10.0333 18.0448 10.1794C18.2073 10.3255 18.4004 10.4333 18.61 10.495L18.95 10.595C20.35 11.008 20.35 12.992 18.95 13.405L18.61 13.505C18.4004 13.5667 18.2073 13.6745 18.0448 13.8206C17.8823 13.9667 17.7546 14.1472 17.6709 14.3491C17.5873 14.551 17.5499 14.769 17.5615 14.9872C17.5731 15.2053 17.6334 15.4182 17.738 15.61L17.907 15.921C18.606 17.203 17.203 18.606 15.92 17.908L15.61 17.738C15.4182 17.6334 15.2053 17.5731 14.9872 17.5615C14.769 17.5499 14.551 17.5873 14.3491 17.6709C14.1472 17.7546 13.9667 17.8823 13.8206 18.0448C13.6745 18.2073 13.5667 18.4004 13.505 18.61L13.405 18.95C12.992 20.35 11.008 20.35 10.595 18.95L10.495 18.61C10.4333 18.4004 10.3255 18.2073 10.1794 18.0448C10.0333 17.8823 9.85275 17.7546 9.6509 17.6709C9.44904 17.5873 9.23103 17.5499 9.01285 17.5615C8.79466 17.5731 8.58185 17.6334 8.39 17.738L8.079 17.907C6.797 18.606 5.394 17.203 6.092 15.92L6.262 15.61C6.36656 15.4182 6.42685 15.2053 6.43846 14.9872C6.45006 14.769 6.41268 14.551 6.32906 14.3491C6.24544 14.1472 6.11771 13.9667 5.95521 13.8206C5.79272 13.6745 5.59959 13.5667 5.39 13.505L5.05 13.405C3.65 12.992 3.65 11.008 5.05 10.595L5.39 10.495C6.285 10.231 6.708 9.21 6.262 8.39L6.093 8.079C5.394 6.797 6.797 5.394 8.08 6.092L8.39 6.262C8.58185 6.36656 8.79466 6.42685 9.01285 6.43846C9.23103 6.45006 9.44904 6.41268 9.6509 6.32906C9.85275 6.24544 10.0333 6.11771 10.1794 5.95521C10.3255 5.79272 10.4333 5.59959 10.495 5.39ZM14.0718 14.0718C13.5223 14.6213 12.7771 14.93 12 14.93V14.928C11.2232 14.928 10.4782 14.6194 9.92888 14.0701C9.37959 13.5208 9.071 12.7758 9.071 11.999C9.071 11.2222 9.37959 10.4772 9.92888 9.92788C10.4782 9.37859 11.2232 9.07 12 9.07C12.7771 9.07 13.5223 9.3787 14.0718 9.92818C14.6213 10.4777 14.93 11.2229 14.93 12C14.93 12.7771 14.6213 13.5223 14.0718 14.0718Z" fill="#F4C51F"/></svg>',name:"กำลังดำเนินการ",description:"กำลังดำเนินการยังไม่สำเร็จ ถึงแม้จะเริ่มเป็นบางพื้นที่ แบ่งช่วงระยะ หรือทำสัญญาแต่เริ่มมีการดำเนินการ แล้ว จัดเป็นดำเนินการ อีกทั้งสัญญาที่ดำเนินการแล้ว แต่ไม่ได้ตามเป้าหมายที่ให้สัญญา จัดเป็นกำลังดำเนินการเช่นกัน ไม่จัดเป็นสำเร็จ"},{id:4,icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM17.6969 9.99725C18.1372 9.50191 18.0926 8.74342 17.5972 8.30312C17.1019 7.86282 16.3434 7.90744 15.9031 8.40278L10.4 14.5938L8.0969 12.0028C7.6566 11.5074 6.89812 11.4628 6.40278 11.9031C5.90744 12.3434 5.86282 13.1019 6.30312 13.5972L7.90312 15.3972L9.50312 17.1973C9.73084 17.4534 10.0572 17.6 10.4 17.6C10.7428 17.6 11.0692 17.4534 11.2969 17.1973L17.6969 9.99725Z" fill="#48DBDB"/></svg>',name:"สำเร็จ",description:"ดำเนินการสำเร็จตามที่ให้สัญญาไว้"}]}},computed:{propsClass:function(){return""!==this.showOnly?"":this.showDetail?"mr-2 w-32 mb-2":this.showInline?"mr-2":"w-32"},selectedLegend:function(){var t=this;return""!==this.showOnly?this.dataArray.filter((function(data){return data.name===t.showOnly})):this.dataArray}}}),l=n(16),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.showInline?"flex":"",attrs:{"data-testid":"status-legend-container"}},t._l(t.selectedLegend,(function(data){return n("div",{key:data.id,staticClass:"flex flex-col md:flex-row",class:t.showInline||""!==t.showOnly?"":"mb-4"},[n("div",{staticClass:"flex wv-u4 wv-font-anuphan wv-font-bold"},[n("span",{staticClass:"pr-2",domProps:{innerHTML:t._s(data.icon)}}),t._v(" "),n("span",{class:t.propsClass,attrs:{"data-testid":"status-legend-text"}},[t._v(t._s(data.name))])]),t._v(" "),t.showDetail?n("p",{staticClass:"wv-b6 wv-font-baijamjuri"},[t._v("\n      "+t._s(data.description)+"\n    ")]):t._e()])})),0)}),[],!1,null,null,null);e.default=component.exports},269:function(t,e,n){"use strict";n.r(e);var r=n(2).a.extend({name:"ExplanationContainer",props:{title:{type:String,required:!0,default:""}}}),l=n(16),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col items-center bg-gray bg-opacity-10 rounded-xl max-w-4xl divide-y divide-white divide-dashed p-4 sm:p-6"},[n("h1",{staticClass:"wv-h5 wv-font-kondolar wv-font-bold text-white pb-4"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),n("div",{staticClass:"flex flex-col items-center sm:flex-row sm:items-start pt-4 sm:p-4"},[t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports},270:function(t,e,n){var r=n(3);t.exports=r(1..valueOf)},276:function(t,e,n){"use strict";n.r(e),n.d(e,"groupPromisesBy",(function(){return d}));var r=n(20),l=n(275),o=(n(13),n(103),n(284),n(49),n(187),n(32),n(48),n(268),n(242)),c=n(241),f=function(t){return t?c.c.reduce((function(e,n){return n in t?[].concat(Object(l.a)(e),[{status:n,count:t[n]}]):e}),[]):[]},d=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:7,d=e.reduce((function(e,n){var r=n[t];return r in e?e[r].count++:e[r]={isNCPO:!1,count:1,statuses:{}},n.status in e[r].statuses?e[r].statuses[n.status]++:e[r].statuses[n.status]=1,!0===n.isNCPO&&(e[r].isNCPO=!0),e}),{}),v=t===o.a.Party?Object.entries(d).map((function(t){var e=Object(r.a)(t,2),label=e[0],n=e[1];return{label:label,icon:"party/".concat(label,".jpg"),isNCPO:n.isNCPO,data:f(n.statuses)}})).sort((function(a,t){return d[t.label].count-d[a.label].count})):t===o.a.Topic?c.e.map((function(t){var e,n;return{label:null===(e=c.f.get(t))||void 0===e?void 0:e.short,icon:"topic/".concat(t,"_small.png"),data:f(null===(n=d[t])||void 0===n?void 0:n.statuses)}})):c.c.map((function(t){var e;return{label:c.d.get(t),icon:"status/".concat(t,"_small.png"),data:f(null===(e=d[t])||void 0===e?void 0:e.statuses)}}));if(v.length>n){var C=v.slice(n);v=[].concat(Object(l.a)(v.slice(0,n)),[{label:"อื่นๆ",icon:"other-group.png",data:c.c.map((function(t){return{status:t,count:C.reduce((function(e,n){var r;return e+((null===(r=n.data.find((function(e){return e.status===t})))||void 0===r?void 0:r.count)||0)}),0)}})).filter((function(t){return t.count>0}))}])}var h=v.map((function(t){return t.data.reduce((function(t,e){return t+e.count}),0)}));return{max:Math.max.apply(Math,Object(l.a)(h)),total:h.reduce((function(t,e){return t+e}),0),charts:v}}},283:function(t,e,n){"use strict";var r=n(11),l=n(1),o=n(3),c=n(104),f=n(19),d=n(15),v=n(185),C=n(43),h=n(107),m=n(188),w=n(4),x=n(73).f,y=n(37).f,_=n(18).f,E=n(270),L=n(189).trim,O="Number",N=l.Number,M=N.prototype,k=l.TypeError,I=o("".slice),j=o("".charCodeAt),S=function(t){var e=m(t,"number");return"bigint"==typeof e?e:B(e)},B=function(t){var e,n,r,l,o,c,f,code,d=m(t,"number");if(h(d))throw k("Cannot convert a Symbol value to a number");if("string"==typeof d&&d.length>2)if(d=L(d),43===(e=j(d,0))||45===e){if(88===(n=j(d,2))||120===n)return NaN}else if(48===e){switch(j(d,1)){case 66:case 98:r=2,l=49;break;case 79:case 111:r=8,l=55;break;default:return+d}for(c=(o=I(d,2)).length,f=0;f<c;f++)if((code=j(o,f))<48||code>l)return NaN;return parseInt(o,r)}return+d};if(c(O,!N(" 0o1")||!N("0b1")||N("+0x1"))){for(var T,P=function(t){var e=arguments.length<1?0:N(S(t)),n=this;return C(M,n)&&w((function(){E(n)}))?v(Object(e),n,P):e},A=r?x(N):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),F=0;A.length>F;F++)d(N,T=A[F])&&!d(P,T)&&_(P,T,y(N,T));P.prototype=M,M.constructor=P,f(l,O,P)}},285:function(t,e,n){var content=n(312);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(59).default)("21a72f83",content,!0,{sourceMap:!1})},286:function(t,e,n){"use strict";n.r(e);var r=n(2),l=n(269),o=n(316),c=n(267),f=r.a.extend({name:"StatusExplanation",components:{ExplanationContainer:l.default,ProcessFlowchart:o.default,StatusLegend:c.default}}),d=n(16),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ExplanationContainer",{attrs:{title:"เส้นทางของคำสัญญา"}},[n("ProcessFlowchart",{staticClass:"flex-shrink-0 mb-2 sm:mt-2 sm:mb-0 sm:mr-8"}),t._v(" "),n("StatusLegend",{staticClass:"mt-4 text-white"})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ExplanationContainer:n(269).default})},304:function(t,e,n){"use strict";n.r(e);n(48),n(13);var r=n(2),filter=n(242),l=n(241),o=r.a.extend({name:"FilterChips",props:{filter:{type:Object,required:!0}},computed:{topic:function(){return this.filter.type},text:function(){var t,e=this.filter,n=e.type,r=e.value;switch(n){case filter.a.Party:return r;case filter.a.Status:return"สถานะ: ".concat(l.d.get(r));case filter.a.Keyword:return"คำค้นหา: ".concat(r);case filter.a.Topic:return"ประเด็น".concat(null===(t=l.f.get(r))||void 0===t?void 0:t.short);default:return""}},icon:function(){var t=this.filter,e=t.type,n=t.value;switch(e){case filter.a.Party:return"".concat(n,".jpg");case filter.a.Status:case filter.a.Topic:return"".concat(n,"_small.png");default:return""}}}}),c=n(16),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-row py-1 px-2 text-ultramarine space-x-2 bg-gray rounded-sm bg-opacity-10"},[n("div",{staticClass:"flex items-center"},["keyword"!==t.topic?n("img",{staticClass:"h-4 w-4 object-cover rounded-full shadow-xl",attrs:{src:t.$config.path.images+"/"+t.topic+"/"+t.icon,alt:t.text}}):t._e()]),t._v(" "),n("span",{staticClass:"wv-u4 wv-font-semibold"},[t._v(t._s(t.text))]),t._v(" "),n("button",{on:{click:function(e){return t.$emit("remove")}}},[n("svg",{attrs:{width:"10",height:"10",viewBox:"0 0 10 10",fill:"currentColor"}},[n("path",{attrs:{d:"M8.83597 0.664218C8.88836 0.716469 8.92992 0.778542 8.95827 0.84688C8.98663 0.915218 9.00123 0.98848 9.00123 1.06247C9.00123 1.13646 8.98663 1.20972 8.95827 1.27806C8.92992 1.34639 8.88836 1.40847 8.83597 1.46072L0.960972 9.33572C0.85535 9.44134 0.712095 9.50068 0.562722 9.50068C0.41335 9.50068 0.270095 9.44134 0.164472 9.33572C0.0588497 9.2301 -0.00048828 9.08684 -0.000488281 8.93747C-0.000488282 8.78809 0.0588497 8.64484 0.164472 8.53922L8.03947 0.664218C8.09172 0.611834 8.1538 0.570273 8.22214 0.541916C8.29047 0.513559 8.36373 0.498962 8.43772 0.498962C8.51171 0.498962 8.58497 0.513559 8.65331 0.541916C8.72165 0.570273 8.78372 0.611834 8.83597 0.664218V0.664218Z"}}),t._v(" "),n("path",{attrs:{d:"M0.164279 0.664218C0.111895 0.716469 0.0703344 0.778542 0.0419771 0.84688C0.0136199 0.915218 -0.000976562 0.98848 -0.000976562 1.06247C-0.000976562 1.13646 0.0136199 1.20972 0.0419771 1.27806C0.0703344 1.34639 0.111895 1.40847 0.164279 1.46072L8.03928 9.33572C8.1449 9.44134 8.28816 9.50068 8.43753 9.50068C8.5869 9.50068 8.73016 9.44134 8.83578 9.33572C8.9414 9.2301 9.00074 9.08684 9.00074 8.93747C9.00074 8.78809 8.9414 8.64484 8.83578 8.53922L0.960779 0.664218C0.908528 0.611834 0.846455 0.570273 0.778117 0.541916C0.709779 0.513559 0.636517 0.498962 0.562529 0.498962C0.488541 0.498962 0.415279 0.513559 0.346941 0.541916C0.278603 0.570273 0.21653 0.611834 0.164279 0.664218V0.664218Z"}})])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:n(101).default})},305:function(t,e,n){"use strict";n.r(e);n(283),n(13);var r=n(2).a.extend({name:"ChartItem",props:{label:{type:String,required:!0},icon:{type:String,default:""},data:{type:Array,required:!0},max:{type:Number,required:!0},total:{type:Number,required:!0}},computed:{count:function(){return this.data.reduce((function(t,e){return t+e.count}),0)},percentage:function(){return(this.count/this.total*100).toLocaleString("th-TH",{maximumFractionDigits:1})}}}),l=n(16),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-row text-white"},[n("div",{staticClass:"flex-1 flex flex-row items-center space-x-1"},[t.icon?n("img",{staticClass:"w-4 h-4 rounded-full",attrs:{src:t.$config.path.images+"/"+t.icon,alt:t.label}}):t._e(),t._v(" "),n("p",{staticClass:"wv-u5 wv-font-semibold"},[t._v(t._s(t.label)+" ("+t._s(t.count)+")")])]),t._v(" "),n("div",{staticClass:"flex flex-row flex-1 space-x-1 wv-u5 wv-font-semibold items-center"},[n("div",{ref:"barchart",staticClass:"flex flex-row h-5",style:{width:Math.round(t.count/t.max*100)+"%"}},t._l(t.data,(function(e){return n("div",{key:e.status,class:"bg-status-"+e.status,style:{width:Math.round(e.count/t.count*100)+"%"}})})),0),t._v(" "),n("span",[t._v(t._s(t.percentage)+"%")])])])}),[],!1,null,null,null);e.default=component.exports},311:function(t,e,n){"use strict";n(285)},312:function(t,e,n){var r=n(58)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.hide-scrollbar[data-v-c6695b2e]::-webkit-scrollbar{\n  display:none\n}\n.hide-scrollbar[data-v-c6695b2e]{\n  -ms-overflow-style:none;\n  scrollbar-width:none\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},318:function(t,e,n){"use strict";n.r(e);n(49),n(48),n(13),n(103);var r=n(2),l=n(304),filter=n(242),o=r.a.extend({name:"ActiveFilters",components:{FilterChip:l.default},props:{promises:{type:Array,default:function(){return[]}},filters:{type:Array,default:function(){return[]}}},computed:{filterImages:function(){return 0===this.promises.length?[{type:"default",value:"all",src:"status/notfound.png"}]:0===this.filters.length?[{type:"default",value:"all",src:"status/default.png"}]:this.filters.filter((function(t){return t.type!==filter.a.Keyword})).map((function(t){var e=t.type,n=t.value;return{type:e,value:n,src:"".concat(e,"/").concat(n,".").concat(e===filter.a.Party?"jpg":"png")}}))}}}),c=n(16),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex-1 md:h-80 bg-white flex flex-row p-8 space-x-8 items-center justify-center rounded-t-xl"},[n("div",{staticClass:"flex flex-col -space-y-4"},t._l(t.filterImages,(function(e,i){var r=e.type,l=e.value,o=e.src;return n("div",{key:r,class:t.filterImages.length>1?"w-24 h-24":"w-32 h-32",style:{zIndex:-i+t.filterImages.length}},[n("img",{staticClass:"rounded-full shadow-xl object-cover active-image w-full h-full",attrs:{src:t.$config.path.images+"/"+o,alt:l}})])})),0),t._v(" "),t.promises.length>0?n("div",{staticClass:"flex flex-col space-y-2"},[n("h1",{staticClass:"wv-h8 wv-font-kondolar wv-font-black"},[t._v("\n      สำรวจคำสัญญา พรรคการเมือง\n    ")]),t._v(" "),n("p",{ref:"countLabel",staticClass:"wv-h10 wv-font-kondolar wv-font-black text-ultramarine"},[t._v("\n      "+t._s(t.promises.length)+" คำสัญญา\n    ")]),t._v(" "),t.filters.length>0?n("div",{staticClass:"flex flex-col items-start space-y-1"},t._l(t.filters,(function(filter){return n("FilterChip",{key:filter.type,attrs:{filter:filter},on:{remove:function(e){return t.$emit("removefilter",filter)}}})})),1):n("p",{staticClass:"wv-u4 wv-font-semibold"},[t._v("จากทุกพรรค ในทุกประเด็น")])]):n("div",[n("h1",{staticClass:"wv-h8 wv-font-kondolar wv-font-black"},[t._v("\n      ไม่พบคำสัญญาที่คุณค้นหา\n    ")])])])}),[],!1,null,null,null);e.default=component.exports},319:function(t,e,n){"use strict";n.r(e);n(48),n(13),n(268);var r=n(2),filter=n(242),l=[{label:"ดูตามสถานะ",type:filter.a.Status},{label:"ดูตามพรรค",type:filter.a.Party},{label:"ดูตามประเด็น",type:filter.a.Topic}],o=r.a.extend({name:"TabNavigation",props:{filters:{type:Array,default:function(){return[]}},activeTab:{type:String,default:null}},computed:{displayButtons:function(){var t=this;return l.filter((function(e){var n=e.type;return!t.filters.find((function(filter){return filter.type===n}))}))}}}),c=o,f=n(16),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-row space-x-1 bg-white md:bg-transparent"},t._l(t.displayButtons,(function(e){var label=e.label,r=e.type;return n("button",{key:r,class:"wv-u4 wv-font-semibold text-white w-1/3 px-3 py-2 rounded-t border border-white "+(t.activeTab===r?"bg-ultramarine border-b-0":"bg-black"),on:{click:function(e){return t.$emit("change",r)}}},[t._v("\n    "+t._s(label)+"\n  ")])})),0)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:n(101).default})},320:function(t,e,n){"use strict";n.r(e);var r=n(2),l=n(305),o=n(276),c=n(101),f=n(286),d=r.a.extend({name:"TabBody",components:{Button:c.default,ChartItem:l.default,StatusExplanation:f.default},props:{promises:{type:Array,default:function(){return[]}},groupBy:{type:String,required:!0}},data:function(){return{isExplanationDialogOpen:!1}},computed:{group:function(){return Object(o.groupPromisesBy)(this.groupBy,this.promises)}}}),v=(n(311),n(16)),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"flex flex-col p-4 space-y-4 bg-ultramarine rounded-b-xl md:rounded-bl-none md:h-80"},[n("div",{staticClass:"flex-1 flex flex-col space-y-2 m-2"},t._l(t.group.charts,(function(e){var label=e.label,r=e.icon,data=e.data;return n("ChartItem",{key:label,attrs:{label:label,icon:r,data:data,max:t.group.max,total:t.group.total}})})),1),t._v(" "),n("Button",{staticClass:"justify-center",on:{click:function(e){t.isExplanationDialogOpen=!0}}},[n("svg",{attrs:{width:"15",height:"16",viewBox:"0 0 15 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M6.75 5.74975H8.25V4.24976H6.75V5.74975ZM7.5 13.9998C4.1925 13.9998 1.5 11.3073 1.5 7.99975C1.5 4.69226 4.1925 1.99976 7.5 1.99976C10.8075 1.99976 13.5 4.69226 13.5 7.99975C13.5 11.3073 10.8075 13.9998 7.5 13.9998ZM7.5 0.499756C6.51509 0.499756 5.53981 0.693749 4.62987 1.07066C3.71993 1.44757 2.89314 2.00002 2.1967 2.69645C0.790176 4.10298 0 6.01063 0 7.99975C0 9.98888 0.790176 11.8965 2.1967 13.3031C2.89314 13.9995 3.71993 14.5519 4.62987 14.9289C5.53981 15.3058 6.51509 15.4998 7.5 15.4998C9.48912 15.4998 11.3968 14.7096 12.8033 13.3031C14.2098 11.8965 15 9.98888 15 7.99975C15 7.01484 14.806 6.03957 14.4291 5.12963C14.0522 4.21969 13.4997 3.39289 12.8033 2.69645C12.1069 2.00002 11.2801 1.44757 10.3701 1.07066C9.46018 0.693749 8.48491 0.499756 7.5 0.499756ZM6.75 11.7498H8.25V7.24975H6.75V11.7498Z"}})]),t._v(" "),n("span",[t._v("ข้อมูลเพิ่มเติม")])])],1),t._v(" "),t.isExplanationDialogOpen?n("div",{staticClass:"fixed inset-0 bg-ultramarine z-50 flex justify-center overflow-y-scroll hide-scrollbar"},[n("button",{staticClass:"fixed top-4 right-4 flex justify-center items-center w-7 h-7 p-1.5 bg-white rounded-full text-ultramarine",on:{click:function(e){t.isExplanationDialogOpen=!1}}},[n("svg",{attrs:{viewBox:"0 0 18 17",fill:"currentColor"}},[n("rect",{attrs:{x:"17.8691",y:"1.12683",width:"22.5558",height:"1.87965",rx:"0.939827",transform:"rotate(135 17.8691 1.12683)"}}),t._v(" "),n("rect",{attrs:{x:"16.54",y:"16.9243",width:"22.5558",height:"1.87965",rx:"0.939827",transform:"rotate(-135 16.54 16.9243)"}})])]),t._v(" "),n("StatusExplanation",{staticClass:"bg-ultramarine my-4 md:my-8"})],1):t._e()])}),[],!1,null,"c6695b2e",null);e.default=component.exports;installComponents(component,{Button:n(101).default,Button:n(101).default})},336:function(t,e,n){"use strict";n.r(e);var r=n(2),l=n(318),o=n(319),c=n(320),filter=n(242),f=r.a.extend({name:"PromiseOverview",components:{TabBody:c.default,TabNavigation:o.default,ActiveFilters:l.default},props:{promises:{type:Array,default:function(){return[]}},filters:{type:Array,default:function(){return[]}}},data:function(){return{activeTab:filter.a.Status}}}),d=n(16),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full flex flex-col lg:flex-row"},[n("div",{staticClass:"flex-1 flex items-end"},[n("ActiveFilters",{class:0===t.promises.length?"lg:rounded-xl bg-gray bg-opacity-10 text-white":"lg:rounded-tr-none lg:rounded-br-none lg:rounded-bl-xl",attrs:{filters:t.filters,promises:t.promises},on:{removefilter:function(filter){return t.$emit("removefilter",filter)}}})],1),t._v(" "),0!==t.promises.length?n("div",{staticClass:"flex-1"},[n("TabNavigation",{attrs:{filters:t.filters,"active-tab":t.activeTab},on:{change:function(e){return t.activeTab=e}}}),t._v(" "),n("TabBody",{attrs:{promises:t.promises,"group-by":t.activeTab}})],1):t._e()])}),[],!1,null,null,null);e.default=component.exports}}]);