(window.webpackJsonp=window.webpackJsonp||[]).push([[1,7,14,15],{262:function(t,e,r){"use strict";r.r(e);r(48),r(13),r(23);var C=r(2).a.extend({name:"StatusLegend",props:{showDetail:{type:Boolean,default:!0},showInline:{type:Boolean,default:!1},showOnly:{type:String,default:""}},data:function(){return{dataArray:[{id:0,icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24 12C24 15.1826 22.7357 18.2348 20.4853 20.4853C18.2348 22.7357 15.1826 24 12 24C8.8174 24 5.76516 22.7357 3.51472 20.4853C1.26428 18.2348 0 15.1826 0 12C0 8.8174 1.26428 5.76516 3.51472 3.51472C5.76516 1.26428 8.8174 0 12 0C15.1826 0 18.2348 1.26428 20.4853 3.51472C22.7357 5.76516 24 8.8174 24 12ZM12 6C11.8104 6.00011 11.6229 6.03993 11.4497 6.11689C11.2764 6.19386 11.1212 6.30626 10.994 6.44687C10.8668 6.58747 10.7705 6.75316 10.7113 6.93325C10.652 7.11334 10.6311 7.30385 10.65 7.4925L11.175 12.753C11.1926 12.9597 11.2872 13.1522 11.44 13.2925C11.5927 13.4327 11.7926 13.5106 12 13.5106C12.2074 13.5106 12.4073 13.4327 12.56 13.2925C12.7128 13.1522 12.8074 12.9597 12.825 12.753L13.35 7.4925C13.3689 7.30385 13.348 7.11334 13.2887 6.93325C13.2295 6.75316 13.1332 6.58747 13.006 6.44687C12.8788 6.30626 12.7236 6.19386 12.5503 6.11689C12.3771 6.03993 12.1896 6.00011 12 6ZM12.003 15C11.6052 15 11.2236 15.158 10.9423 15.4393C10.661 15.7206 10.503 16.1022 10.503 16.5C10.503 16.8978 10.661 17.2794 10.9423 17.5607C11.2236 17.842 11.6052 18 12.003 18C12.4008 18 12.7824 17.842 13.0637 17.5607C13.345 17.2794 13.503 16.8978 13.503 16.5C13.503 16.1022 13.345 15.7206 13.0637 15.4393C12.7824 15.158 12.4008 15 12.003 15Z" fill="#8F8F8F"/></svg>',name:"ไม่พบข้อมูล",description:"ไม่พบข้อมูล แผนงาน ในการดำเนินการคำสัญญา"},{id:1,icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="24" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM19.2547 12.6757L14.7413 15.9978C14.2631 16.2802 13.65 15.9393 13.65 15.3712V14.2428H6V9.85535H13.65V8.72697C13.6496 8.59904 13.683 8.47326 13.7469 8.36245C13.8109 8.25163 13.903 8.15972 14.014 8.09606C14.125 8.0324 14.2508 7.99926 14.3788 8.00001C14.5067 8.00077 14.6322 8.03539 14.7424 8.10035L19.2547 11.4225C19.3637 11.4868 19.4539 11.5785 19.5166 11.6884C19.5793 11.7983 19.6123 11.9226 19.6123 12.0491C19.6123 12.1756 19.5793 12.2999 19.5166 12.4098C19.4539 12.5197 19.3637 12.6114 19.2547 12.6757Z" fill="#FD9154"/></svg>',name:"ถูกเสนอต่อสภา",description:"การยื่นเรื่องเข้าพิจารณาตราเป็นกฎหมายหรือให้มีผลต่อสภาแล้ว ซึ่งส่วนมากใช้กับฝ่ายค้านเพราะเนื่องจากบทบาทของฝ่ายค้านน้อยกว่ารัฐบาลและเรื่องที่เสนอ สามารถถูกปัดตกได้ง่าย ทำให้การดำเนินการตามสัญญาไม่ค่อยได้ไปต่อ ดังนั้นการพยายามผลักดันหรือยื่นเรื่องต่อสภาให้พิจารณาเป็นบทบาทของการขับเคลื่อนคำสัญญาให้ไปต่อ"},{id:2,icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM6 8C6 7.44772 6.44772 7 7 7H10C10.5523 7 11 7.44772 11 8V16C11 16.5523 10.5523 17 10 17H7C6.44772 17 6 16.5523 6 16V8ZM13 8C13 7.44772 13.4477 7 14 7H17C17.5523 7 18 7.44772 18 8V16C18 16.5523 17.5523 17 17 17H14C13.4477 17 13 16.5523 13 16V8Z" fill="#E91E63"/></svg>',name:"ถูกระงับ",description:"ส่วนใหญ่จะเป็นกรณีพิเศษที่ทำให้คำสัญญานั้นถูกระงับไป ยังไม่ได้ทำต่อ หยุดไว้ก่อน เช่น ไม่มีงบ กรณีพรรคโดนยุบ"},{id:3,icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM10.495 5.39L10.595 5.05C11.008 3.65 12.992 3.65 13.405 5.05L13.505 5.39C13.5667 5.59959 13.6745 5.79272 13.8206 5.95521C13.9667 6.11771 14.1472 6.24544 14.3491 6.32906C14.551 6.41268 14.769 6.45006 14.9872 6.43846C15.2053 6.42685 15.4182 6.36656 15.61 6.262L15.921 6.093C17.203 5.394 18.606 6.797 17.908 8.08L17.738 8.39C17.6334 8.58185 17.5731 8.79466 17.5615 9.01285C17.5499 9.23103 17.5873 9.44904 17.6709 9.6509C17.7546 9.85275 17.8823 10.0333 18.0448 10.1794C18.2073 10.3255 18.4004 10.4333 18.61 10.495L18.95 10.595C20.35 11.008 20.35 12.992 18.95 13.405L18.61 13.505C18.4004 13.5667 18.2073 13.6745 18.0448 13.8206C17.8823 13.9667 17.7546 14.1472 17.6709 14.3491C17.5873 14.551 17.5499 14.769 17.5615 14.9872C17.5731 15.2053 17.6334 15.4182 17.738 15.61L17.907 15.921C18.606 17.203 17.203 18.606 15.92 17.908L15.61 17.738C15.4182 17.6334 15.2053 17.5731 14.9872 17.5615C14.769 17.5499 14.551 17.5873 14.3491 17.6709C14.1472 17.7546 13.9667 17.8823 13.8206 18.0448C13.6745 18.2073 13.5667 18.4004 13.505 18.61L13.405 18.95C12.992 20.35 11.008 20.35 10.595 18.95L10.495 18.61C10.4333 18.4004 10.3255 18.2073 10.1794 18.0448C10.0333 17.8823 9.85275 17.7546 9.6509 17.6709C9.44904 17.5873 9.23103 17.5499 9.01285 17.5615C8.79466 17.5731 8.58185 17.6334 8.39 17.738L8.079 17.907C6.797 18.606 5.394 17.203 6.092 15.92L6.262 15.61C6.36656 15.4182 6.42685 15.2053 6.43846 14.9872C6.45006 14.769 6.41268 14.551 6.32906 14.3491C6.24544 14.1472 6.11771 13.9667 5.95521 13.8206C5.79272 13.6745 5.59959 13.5667 5.39 13.505L5.05 13.405C3.65 12.992 3.65 11.008 5.05 10.595L5.39 10.495C6.285 10.231 6.708 9.21 6.262 8.39L6.093 8.079C5.394 6.797 6.797 5.394 8.08 6.092L8.39 6.262C8.58185 6.36656 8.79466 6.42685 9.01285 6.43846C9.23103 6.45006 9.44904 6.41268 9.6509 6.32906C9.85275 6.24544 10.0333 6.11771 10.1794 5.95521C10.3255 5.79272 10.4333 5.59959 10.495 5.39ZM14.0718 14.0718C13.5223 14.6213 12.7771 14.93 12 14.93V14.928C11.2232 14.928 10.4782 14.6194 9.92888 14.0701C9.37959 13.5208 9.071 12.7758 9.071 11.999C9.071 11.2222 9.37959 10.4772 9.92888 9.92788C10.4782 9.37859 11.2232 9.07 12 9.07C12.7771 9.07 13.5223 9.3787 14.0718 9.92818C14.6213 10.4777 14.93 11.2229 14.93 12C14.93 12.7771 14.6213 13.5223 14.0718 14.0718Z" fill="#F4C51F"/></svg>',name:"กำลังดำเนินการ",description:"กำลังดำเนินการยังไม่สำเร็จ ถึงแม้จะเริ่มเป็นบางพื้นที่ แบ่งช่วงระยะ หรือทำสัญญาแต่เริ่มมีการดำเนินการ แล้ว จัดเป็นดำเนินการ อีกทั้งสัญญาที่ดำเนินการแล้ว แต่ไม่ได้ตามเป้าหมายที่ให้สัญญา จัดเป็นกำลังดำเนินการเช่นกัน ไม่จัดเป็นสำเร็จ"},{id:4,icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM17.6969 9.99725C18.1372 9.50191 18.0926 8.74342 17.5972 8.30312C17.1019 7.86282 16.3434 7.90744 15.9031 8.40278L10.4 14.5938L8.0969 12.0028C7.6566 11.5074 6.89812 11.4628 6.40278 11.9031C5.90744 12.3434 5.86282 13.1019 6.30312 13.5972L7.90312 15.3972L9.50312 17.1973C9.73084 17.4534 10.0572 17.6 10.4 17.6C10.7428 17.6 11.0692 17.4534 11.2969 17.1973L17.6969 9.99725Z" fill="#48DBDB"/></svg>',name:"สำเร็จ",description:"ดำเนินการสำเร็จตามที่ให้สัญญาไว้"}]}},computed:{propsClass:function(){return""!==this.showOnly?"":this.showDetail?"mr-2 w-24 mb-2":this.showInline?"mr-2":"w-24"},selectedLegend:function(){var t=this;return""!==this.showOnly?this.dataArray.filter((function(data){return data.name===t.showOnly})):this.dataArray}}}),n=r(16),component=Object(n.a)(C,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:t.showInline?"flex":"",attrs:{"data-testid":"status-legend-container"}},t._l(t.selectedLegend,(function(data){return r("div",{key:data.id,staticClass:"flex flex-col md:flex-row",class:t.showInline||""!==t.showOnly?"":"mb-4"},[r("div",{staticClass:"flex wv-u4 wv-font-anuphan wv-font-bold"},[r("span",{staticClass:"pr-2",domProps:{innerHTML:t._s(data.icon)}}),t._v(" "),r("span",{class:t.propsClass,attrs:{"data-testid":"status-legend-text"}},[t._v(t._s(data.name))])]),t._v(" "),t.showDetail?r("p",{staticClass:"wv-b6 wv-font-baijamjuri"},[t._v("\n      "+t._s(data.description)+"\n    ")]):t._e()])})),0)}),[],!1,null,null,null);e.default=component.exports},272:function(t,e,r){"use strict";r.r(e);var C=r(2).a.extend({name:"IconDown"}),n=r(16),component=Object(n.a)(C,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{attrs:{width:"32",height:"32",viewBox:"16 16 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("g",{attrs:{filter:"url(#filter0_d_442_91719)"}},[r("circle",{attrs:{cx:"32",cy:"32",r:"12",transform:"rotate(-180 32 32)",fill:"white"}}),t._v(" "),r("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M32.5499 36.0335C32.496 36.0876 32.4319 36.1305 32.3614 36.1598C32.2909 36.189 32.2152 36.2041 32.1389 36.2041C32.0625 36.2041 31.9869 36.189 31.9163 36.1598C31.8458 36.1305 31.7817 36.0876 31.7278 36.0335L28.2439 32.5496C28.1349 32.4406 28.0736 32.2927 28.0736 32.1385C28.0736 31.9844 28.1349 31.8365 28.2439 31.7275C28.3529 31.6184 28.5008 31.5572 28.655 31.5572C28.8092 31.5572 28.957 31.6184 29.0661 31.7275L32.1389 34.8014L35.2116 31.7275C35.2656 31.6735 35.3297 31.6306 35.4002 31.6014C35.4708 31.5722 35.5464 31.5572 35.6227 31.5572C35.6991 31.5572 35.7747 31.5722 35.8452 31.6014C35.9157 31.6306 35.9798 31.6735 36.0338 31.7275C36.0878 31.7814 36.1306 31.8455 36.1598 31.9161C36.1891 31.9866 36.2041 32.0622 36.2041 32.1385C36.2041 32.2149 36.1891 32.2905 36.1598 32.361C36.1306 32.4316 36.0878 32.4957 36.0338 32.5496L32.5499 36.0335V36.0335Z",fill:"#3904E9"}})]),t._v(" "),r("defs",[r("filter",{attrs:{id:"filter0_d_442_91719",x:"-11",y:"-15",width:"86",height:"86",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB"}},[r("feFlood",{attrs:{"flood-opacity":"0",result:"BackgroundImageFix"}}),t._v(" "),r("feColorMatrix",{attrs:{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}}),t._v(" "),r("feMorphology",{attrs:{radius:"1",operator:"dilate",in:"SourceAlpha",result:"effect1_dropShadow_442_91719"}}),t._v(" "),r("feOffset",{attrs:{dy:"-4"}}),t._v(" "),r("feGaussianBlur",{attrs:{stdDeviation:"15"}}),t._v(" "),r("feColorMatrix",{attrs:{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"}}),t._v(" "),r("feBlend",{attrs:{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_442_91719"}}),t._v(" "),r("feBlend",{attrs:{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_442_91719",result:"shape"}})],1)])])}),[],!1,null,null,null);e.default=component.exports},273:function(t,e,r){"use strict";r.r(e);var C=r(2).a.extend({name:"IconUp"}),n=r(16),component=Object(n.a)(C,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{attrs:{width:"32",height:"32",viewBox:"27 16 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("g",{attrs:{filter:"url(#filter0_d_442_91721)"}},[r("circle",{attrs:{cx:"43",cy:"32",r:"12",transform:"rotate(-180 43 32)",fill:"white"}}),t._v(" "),r("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M43.2736 29.6808C43.2196 29.6268 43.1556 29.5839 43.085 29.5546C43.0145 29.5253 42.9389 29.5103 42.8625 29.5103C42.7861 29.5103 42.7105 29.5253 42.6399 29.5546C42.5694 29.5839 42.5053 29.6268 42.4514 29.6808L38.9675 33.1647C38.8585 33.2737 38.7972 33.4216 38.7972 33.5758C38.7972 33.73 38.8585 33.8779 38.9675 33.9869C39.0765 34.0959 39.2244 34.1572 39.3786 34.1572C39.5328 34.1572 39.6807 34.0959 39.7897 33.9869L42.8625 30.913L45.9353 33.9869C45.9892 34.0409 46.0533 34.0837 46.1239 34.1129C46.1944 34.1421 46.27 34.1572 46.3464 34.1572C46.4227 34.1572 46.4983 34.1421 46.5688 34.1129C46.6394 34.0837 46.7035 34.0409 46.7575 33.9869C46.8114 33.9329 46.8543 33.8688 46.8835 33.7983C46.9127 33.7278 46.9277 33.6522 46.9277 33.5758C46.9277 33.4995 46.9127 33.4239 46.8835 33.3533C46.8543 33.2828 46.8114 33.2187 46.7575 33.1647L43.2736 29.6808Z",fill:"#3904E9"}})]),t._v(" "),r("defs",[r("filter",{attrs:{id:"filter0_d_442_91721",x:"0",y:"-15",width:"86",height:"86",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB"}},[r("feFlood",{attrs:{"flood-opacity":"0",result:"BackgroundImageFix"}}),t._v(" "),r("feColorMatrix",{attrs:{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}}),t._v(" "),r("feMorphology",{attrs:{radius:"1",operator:"dilate",in:"SourceAlpha",result:"effect1_dropShadow_442_91721"}}),t._v(" "),r("feOffset",{attrs:{dy:"-4"}}),t._v(" "),r("feGaussianBlur",{attrs:{stdDeviation:"15"}}),t._v(" "),r("feColorMatrix",{attrs:{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"}}),t._v(" "),r("feBlend",{attrs:{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_442_91721"}}),t._v(" "),r("feBlend",{attrs:{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_442_91721",result:"shape"}})],1)])])}),[],!1,null,null,null);e.default=component.exports},277:function(t,e,r){"use strict";r.r(e);var C=r(2);r(24),r(74),r(107),r(34),r(13),r(23),r(35),r(26),r(28),r(36),r(37),r(27);function n(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,C=function(){};return{s:C,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:C}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,o=!0,d=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return o=t.done,t},e:function(t){d=!0,n=t},f:function(){try{o||null==r.return||r.return()}finally{if(d)throw n}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var o={name:"wv-sharer",props:["light","center","hideLabel","label","allowCopyLink","outline","url"],data:function(){return{encodedURL:""}},mounted:function(){this.encodedURL=encodeURI(this.url||window.location.href)},methods:{copyToClipboard:function(t){return window.navigator.clipboard.writeText(t)},_classStringToObject:function(t){var e={};if("string"!=typeof t)return e;var r,C=n(t.trim().split(/\s+/));try{for(C.s();!(r=C.n()).done;){e[r.value]=!0}}catch(t){C.e(t)}finally{C.f()}return e}}},d=r(16),c=Object(d.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:t._classStringToObject("wv_sharer "+(this.light?"wv_sharer--light":"wv_sharer--dark")+" "+(this.center?"wv_sharer--center":""))},[t.hideLabel?t._e():r("span",{staticClass:"wv-b5"},[t._v(t._s(t.label||"Share"))]),t._v(" "),t.allowCopyLink?r("div",{staticClass:"wv_sharer__share-link",on:{click:function(e){return t.copyToClipboard(t.encodedURL)}}},[r("svg",{attrs:{viewBox:"0 0 28 28"}},[r("path",{staticClass:"outline",attrs:{d:"M27.5 14C27.5 21.4564 21.4564 27.5 14 27.5C6.54358 27.5 0.5 21.4564 0.5 14C0.5 6.54358 6.54358 0.5 14 0.5C21.4564 0.5 27.5 6.54358 27.5 14Z"}}),t._v(" "),r("path",{attrs:{d:"M9.9751 16.5375C11.1832 16.5375 12.1626 15.5581 12.1626 14.35C12.1626 13.1419 11.1832 12.1625 9.9751 12.1625C8.76697 12.1625 7.7876 13.1419 7.7876 14.35C7.7876 15.5581 8.76697 16.5375 9.9751 16.5375Z"}}),t._v(" "),r("path",{attrs:{d:"M17.6313 21.4594C18.8395 21.4594 19.8188 20.48 19.8188 19.2719C19.8188 18.0638 18.8395 17.0844 17.6313 17.0844C16.4232 17.0844 15.4438 18.0638 15.4438 19.2719C15.4438 20.48 16.4232 21.4594 17.6313 21.4594Z"}}),t._v(" "),r("path",{attrs:{d:"M17.6313 11.6156C18.8395 11.6156 19.8188 10.6362 19.8188 9.42812C19.8188 8.22 18.8395 7.24062 17.6313 7.24062C16.4232 7.24062 15.4438 8.22 15.4438 9.42812C15.4438 10.6362 16.4232 11.6156 17.6313 11.6156Z"}}),t._v(" "),r("path",{attrs:{d:"M15.7915 10.6109L11.8149 13.1673"}}),t._v(" "),r("path",{attrs:{d:"M11.8149 15.5327L15.7915 18.0891"}})])]):t._e(),t._v(" "),r("a",{attrs:{target:"_blank",rel:"noreferrer noopener",href:"http://www.facebook.com/sharer/sharer.php?u="+t.encodedURL}},[t.outline?r("svg",{attrs:{viewBox:"0 0 28 28"}},[r("path",{staticClass:"outline",attrs:{d:"M27.5 14C27.5 21.4564 21.4564 27.5 14 27.5C6.54358 27.5 0.5 21.4564 0.5 14C0.5 6.54358 6.54358 0.5 14 0.5C21.4564 0.5 27.5 6.54358 27.5 14Z"}}),t._v(" "),r("path",{attrs:{d:"M11.8096 18.2251C11.8096 16.9154 11.8022 15.6057 11.817 14.2959C11.817 14.074 11.7578 14.0074 11.5358 14.0148C11.1289 14.0296 10.7219 14.0148 10.3075 14.0222C10.1447 14.0296 10.0781 13.9778 10.0855 13.8076C10.0929 12.9936 10.0929 12.1723 10.0855 11.3583C10.0855 11.2029 10.1299 11.1511 10.2927 11.1511C10.7071 11.1585 11.1289 11.1363 11.5432 11.1585C11.7874 11.1733 11.8318 11.0845 11.8318 10.8625C11.817 10.241 11.817 9.61941 11.8318 8.99785C11.8466 8.23569 12.0538 7.52533 12.5052 6.91117C13.0749 6.12681 13.8889 5.77163 14.8286 5.72724C15.7906 5.68284 16.7599 5.70504 17.7293 5.69764C17.8625 5.69764 17.9069 5.74204 17.9069 5.87523C17.8995 6.70398 17.8995 7.53273 17.9069 8.35409C17.9069 8.50208 17.8625 8.54648 17.7145 8.54648C17.2483 8.53908 16.7821 8.53908 16.3234 8.54648C15.7018 8.54648 15.3318 8.86466 15.2948 9.47882C15.2652 9.9672 15.2874 10.463 15.2726 10.9587C15.2652 11.1363 15.3762 11.1215 15.4872 11.1215C16.1902 11.1215 16.9005 11.1289 17.6035 11.1141C17.8107 11.1141 17.8773 11.1585 17.8551 11.3731C17.7663 12.1945 17.6923 13.0158 17.6183 13.8446C17.6035 14.0296 17.5147 14.0666 17.3519 14.0666C16.7969 14.0592 16.2346 14.0592 15.6796 14.0666C15.28 14.0666 15.317 14.0074 15.317 14.4143C15.317 16.982 15.3096 19.5422 15.3244 22.1099C15.3244 22.3837 15.2578 22.4503 14.9914 22.4429C14.0369 22.4281 13.0749 22.4281 12.1204 22.4429C11.854 22.4503 11.8096 22.3541 11.8096 22.1173C11.8096 20.8076 11.8096 19.5201 11.8096 18.2251Z"}})]):t._e(),t._v(" "),t.outline?t._e():r("svg",{attrs:{viewBox:"0 0 30 30"}},[r("path",{attrs:{d:"M15 0C6.75 0 0 6.75 0 15C0 23.25 6.75 30 15 30C23.25 30 30 23.25 30 15C30 6.75 23.25 0 15 0ZM18.975 9.15C18.45 9.15 18 9.15 17.475 9.15C16.8 9.15 16.425 9.525 16.35 10.125C16.35 10.65 16.35 11.175 16.35 11.7C16.35 11.925 16.425 11.85 16.575 11.85C17.325 11.85 18.075 11.85 18.825 11.85C19.05 11.85 19.125 11.925 19.125 12.15C19.05 13.05 18.975 13.875 18.9 14.775C18.9 15 18.825 15 18.6 15C18 15 17.4 15 16.8 15C16.35 15 16.425 14.925 16.425 15.375C16.425 18.15 16.425 20.85 16.425 23.625C16.425 23.925 16.35 24 16.05 24C15 24 14.025 24 12.975 24C12.675 24 12.675 23.925 12.675 23.625C12.675 22.275 12.675 20.85 12.675 19.5C12.675 18.075 12.675 16.725 12.675 15.3C12.675 15.075 12.6 15 12.375 15C11.925 15 11.475 15 11.025 15C10.875 15 10.8 14.925 10.8 14.775C10.8 13.875 10.8 13.05 10.8 12.15C10.8 12 10.875 11.925 11.025 11.925C11.475 11.925 11.925 11.925 12.375 11.925C12.6 11.925 12.675 11.85 12.675 11.625C12.675 10.95 12.675 10.275 12.675 9.6C12.675 8.775 12.9 8.025 13.425 7.35C14.025 6.525 14.925 6.15 15.9 6.075C16.95 6 18 6.075 18.975 6.075C19.125 6.075 19.125 6.15 19.125 6.3C19.125 7.2 19.125 8.1 19.125 8.925C19.2 9.075 19.125 9.15 18.975 9.15Z"}})])]),t._v(" "),r("a",{attrs:{target:"_blank",rel:"noreferrer noopener",href:"https://twitter.com/intent/tweet?url="+t.encodedURL}},[t.outline?r("svg",{attrs:{viewBox:"0 0 28 28"}},[r("path",{staticClass:"outline",attrs:{d:"M27.5 14C27.5 21.4564 21.4564 27.5 14 27.5C6.54358 27.5 0.5 21.4564 0.5 14C0.5 6.54358 6.54358 0.5 14 0.5C21.4564 0.5 27.5 6.54358 27.5 14Z"}}),t._v(" "),r("path",{attrs:{d:"M11.2001 17.0552C10.2628 17.0401 9.44037 16.5796 8.94642 15.8937C9.2129 15.8792 9.47567 15.8385 9.72249 15.7755L9.69207 14.7998C8.65313 14.6027 7.83639 13.8572 7.55634 12.9031C7.83749 12.9772 8.13206 13.0218 8.43395 13.0304L10.2318 13.0822L8.71859 12.11C7.95913 11.6221 7.47591 10.7987 7.47591 9.87883C7.47591 9.63889 7.51049 9.4057 7.5748 9.18223C9.27121 10.8887 11.6079 11.9824 14.2094 12.1074L14.8714 12.1392L14.7202 11.4939C14.6712 11.2849 14.6449 11.0831 14.6449 10.8791C14.6449 9.41934 15.8767 8.2 17.4437 8.2C18.2545 8.2 18.9792 8.53045 19.4911 9.05665L19.6796 9.25048L19.9451 9.19877C20.1542 9.15803 20.3601 9.10894 20.5623 9.05175C20.464 9.12724 20.36 9.19682 20.2509 9.25989L20.5589 10.1894C20.6502 10.1788 20.7411 10.1666 20.8314 10.1527C20.7126 10.2498 20.5901 10.3425 20.4643 10.4304L20.2354 10.5903L20.2515 10.8691C20.2585 10.992 20.2587 11.1097 20.2587 11.2513C20.2587 15.2208 17.1264 19.8 11.369 19.8C10.3221 19.8 9.32078 19.6253 8.38835 19.306C9.54627 19.1008 10.6056 18.6263 11.4938 17.9538L12.6496 17.0786L11.2001 17.0552Z"}})]):t._e(),t._v(" "),t.outline?t._e():r("svg",{attrs:{viewBox:"0 0 30 30"}},[r("path",{attrs:{d:"M15 0C6.75 0 0 6.75 0 15C0 23.25 6.75 30 15 30C23.25 30 30 23.25 30 15C30 6.75 23.25 0 15 0ZM22.2 11.325C22.2 11.475 22.2 11.625 22.2 11.775C22.2 16.65 18.45 22.35 11.625 22.35C9.525 22.35 7.575 21.75 5.925 20.7C6.225 20.7 6.525 20.775 6.825 20.775C8.55 20.775 10.125 20.175 11.4 19.2C9.75 19.2 8.4 18.075 7.95 16.65C8.175 16.725 8.4 16.725 8.625 16.725C9 16.725 9.3 16.65 9.6 16.575C7.875 16.2 6.6 14.7 6.6 12.975C6.6 12.975 6.6 12.975 6.6 12.9C7.125 13.2 7.65 13.35 8.25 13.35C7.35 12.6 6.75 11.475 6.75 10.2C6.75 9.525 6.9 8.85 7.275 8.325C9.075 10.575 11.85 12.075 14.925 12.225C14.85 11.925 14.85 11.7 14.85 11.4C14.85 9.375 16.5 7.725 18.525 7.725C19.575 7.725 20.55 8.175 21.225 8.925C22.05 8.775 22.875 8.475 23.55 8.025C23.25 8.925 22.65 9.6 21.9 10.05C22.65 9.975 23.4 9.75 24 9.45C23.55 10.125 22.875 10.8 22.2 11.325Z"}})])]),t._v(" "),r("a",{attrs:{target:"_blank",rel:"noreferrer noopener",href:"https://social-plugins.line.me/lineit/share?url="+t.encodedURL}},[t.outline?r("svg",{attrs:{viewBox:"0 0 28 28"}},[r("path",{staticClass:"outline",attrs:{d:"M27.5 14C27.5 21.4564 21.4564 27.5 14 27.5C6.54358 27.5 0.5 21.4564 0.5 14C0.5 6.54358 6.54358 0.5 14 0.5C21.4564 0.5 27.5 6.54358 27.5 14Z"}}),t._v(" "),r("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M20.4949 16.8789C19.4835 18.1348 15.0479 21.1492 14.01 21.764C13.5869 22.0152 13.0515 21.7111 13.0515 21.2153V19.6817C10.5726 19.5825 6.13696 17.3879 6.13696 13.1175C6.13696 8.66867 10.5858 6.50705 13.9836 6.50705C17.659 6.50705 21.8434 8.94631 21.8434 13.0778C21.85 14.2413 21.5129 15.6163 20.4949 16.8789ZM12.0731 11.0218C11.8682 11.0218 11.7029 11.1989 11.7029 11.4184V14.464C11.7029 14.6835 11.8682 14.8606 12.0731 14.8606C12.278 14.8606 12.4433 14.6835 12.4433 14.464V11.4184C12.4433 11.1989 12.278 11.0218 12.0731 11.0218ZM15.0544 11.4184C15.0544 11.1989 15.2196 11.0218 15.4246 11.0218C15.6295 11.0218 15.7947 11.1989 15.7881 11.4184V14.464C15.7881 14.634 15.6824 14.7827 15.5303 14.8394C15.4973 14.8535 15.4576 14.8606 15.418 14.8606C15.3056 14.8606 15.1932 14.8039 15.1205 14.6977L13.7852 12.7287V14.464C13.7852 14.6835 13.6199 14.8606 13.415 14.8606C13.2101 14.8606 13.0448 14.6835 13.0448 14.464V11.5034C13.0448 11.3335 13.1506 11.1847 13.3026 11.1281C13.4546 11.0714 13.6265 11.1281 13.7191 11.2697L15.0544 13.2387V11.4184ZM11.0351 14.0744H10.0502V11.4255C10.0502 11.2059 9.88492 11.0289 9.68 11.0289C9.47508 11.0289 9.30981 11.2059 9.30981 11.4255V14.471C9.30981 14.6906 9.47508 14.8677 9.68 14.8677H11.0351C11.2401 14.8677 11.4053 14.6906 11.4053 14.471C11.4053 14.2515 11.2335 14.0744 11.0351 14.0744ZM17.0307 14.0036H18.4982C18.7031 14.0036 18.8684 14.1807 18.8684 14.4003C18.8684 14.6198 18.7031 14.7969 18.4982 14.7969H16.6605C16.4556 14.7969 16.2903 14.6198 16.2903 14.4003V12.8775V11.3547C16.2903 11.1352 16.4556 10.9581 16.6605 10.9581H18.4387C18.6437 10.9581 18.8089 11.1352 18.8089 11.3547C18.8089 11.5743 18.6437 11.7514 18.4387 11.7514H17.0307V12.4809H18.1743C18.3792 12.4809 18.5445 12.6579 18.5445 12.8775C18.5445 13.0971 18.3792 13.2741 18.1743 13.2741H17.0307V14.0036Z"}})]):t._e(),t._v(" "),t.outline?t._e():r("svg",{attrs:{viewBox:"0 0 30 30"}},[r("path",{attrs:{d:"M12.75 11.4751C12.525 11.4751 12.3 11.7001 12.3 11.9251V15.3001C12.3 15.5251 12.525 15.7501 12.75 15.7501C12.975 15.7501 13.2 15.5251 13.2 15.3001V11.9251C13.2 11.7001 12.975 11.4751 12.75 11.4751Z"}}),t._v(" "),r("path",{attrs:{d:"M16.725 11.4751C16.5 11.4751 16.275 11.7001 16.275 11.9251V13.9501L14.7 11.7751C14.625 11.6251 14.4 11.5501 14.175 11.6251C14.025 11.7001 13.875 11.8501 13.875 12.0751V15.3751C13.875 15.6001 14.1 15.8251 14.325 15.8251C14.55 15.8251 14.775 15.6001 14.775 15.3751V13.4251L16.35 15.6001C16.425 15.7501 16.575 15.7501 16.725 15.7501C16.8 15.7501 16.8 15.7501 16.875 15.7501C17.025 15.6751 17.175 15.5251 17.175 15.3001V11.9251C17.1 11.7001 16.95 11.4751 16.725 11.4751Z"}}),t._v(" "),r("path",{attrs:{d:"M11.475 14.8501H10.275V11.9251C10.275 11.7001 10.05 11.4751 9.825 11.4751C9.6 11.4751 9.375 11.7001 9.375 11.9251V15.3001C9.375 15.5251 9.6 15.7501 9.825 15.7501H11.4C11.625 15.7501 11.85 15.5251 11.85 15.3001C11.85 15.0751 11.775 14.8501 11.475 14.8501Z"}}),t._v(" "),r("path",{attrs:{d:"M20.325 14.775H18.6V13.95H19.95C20.175 13.95 20.4 13.725 20.4 13.5C20.4 13.275 20.175 13.05 19.95 13.05H18.6V12.225H20.25C20.475 12.225 20.7 12 20.7 11.775C20.7 11.55 20.475 11.325 20.25 11.325H18.15C17.925 11.325 17.7 11.55 17.7 11.775V13.425V15.075C17.7 15.3 17.925 15.525 18.15 15.525H20.325C20.55 15.525 20.775 15.3 20.775 15.075C20.775 14.85 20.55 14.775 20.325 14.775Z"}}),t._v(" "),r("path",{attrs:{d:"M15 0C6.75 0 0 6.75 0 15C0 23.25 6.75 30 15 30C23.25 30 30 23.25 30 15C30 6.75 23.25 0 15 0ZM22.725 18.225C21.525 19.725 16.275 23.25 15.075 24C14.55 24.3 13.95 23.925 13.95 23.325V21.525C11.025 21.375 5.775 18.825 5.775 13.725C5.775 8.475 11.025 5.925 15.075 5.925C19.425 5.925 24.375 8.775 24.375 13.725C24.3 15.075 23.925 16.725 22.725 18.225Z"}})])])])}),[],!1,null,null,null).exports,v=r(272),f=r(273),h=r(262),w=C.a.extend({name:"SingleCard",components:{StatusLegend:h.default,WvSharer:c,IconDown:v.default,IconUp:f.default},props:{theme:{type:String,default:"primary"}},data:function(){return{clicked:!1}},methods:{onReadClick:function(){this.clicked=!this.clicked}}}),_=Object(d.a)(w,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-col bg-white max-w-2xl rounded-lg border-2 border-white overflow-hidden"},[r("div",{staticClass:"bg-status-done h-2 mb-3"}),t._v(" "),r("div",{staticClass:"flex justify-between"},[r("div",[r("div",{staticClass:"bg-gray bg-opacity-10 rounded w-max p-2 ml-3"},[r("StatusLegend",{attrs:{"show-detail":!1,"show-only":"สำเร็จ"}})],1),t._v(" "),r("h2",{staticClass:"wv-h8 wv-font-kondolar wv-font-black px-3 py-4"},[t._v("\n        เงินเดือนปริญญาตรี 20,000 บาท เงินเดือน อาชีวะ 18,000 บาท\n      ")]),t._v(" "),r("div",{staticClass:"flex divide-x-2 divide-gray pb-4 wv-font-anuphan wv-u4 wv-font-bold"},[r("div",{staticClass:"flex px-3"},[r("div",{staticClass:"w-4 mr-2"},[r("img",{attrs:{src:t.$config.path.images+"/party/dummy.jpg",alt:"dummy"}})]),t._v(" "),r("p",[t._v("คุณภาพชีวิต")])]),t._v(" "),r("div",{staticClass:"flex px-3"},[r("div",{staticClass:"w-4 mr-2"},[r("img",{attrs:{src:t.$config.path.images+"/party/dummy.jpg",alt:"dummy"}})]),t._v(" "),r("p",[t._v("พรรคพลังประชารัฐ")])])])]),t._v(" "),r("div",{staticClass:"w-14 sm:w-16 md:w-20 flex-shrink-0 mr-3 mb-3"},[r("img",{attrs:{src:t.$config.path.images+"/party/dummy.jpg",alt:"dummy"}})])]),t._v(" "),r("div",{staticClass:"flex justify-between bg-black text-white wv-font-anuphan wv-u4 wv-font-bold px-1 py-2"},[r("div",{staticClass:"flex items-center"},[r("p",{staticClass:"px-3"},[t._v("อ่านเพิ่มเติม")]),t._v(" "),r("button",{on:{click:t.onReadClick}},[t.clicked?r("IconUp"):r("IconDown")],1)]),t._v(" "),r("div",{staticClass:"flex items-center"},[r("p",{staticClass:"hidden sm:block"},[t._v("แชร์คำสัญญา")]),t._v(" "),r("WvSharer",{staticClass:"mr-3",attrs:{label:" ","allow-copy-link":!0,light:!0,outline:!0}})],1)])])}),[],!1,null,null,null);e.default=_.exports;installComponents(_,{Button:r(102).default})}}]);