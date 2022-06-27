(window.webpackJsonp=window.webpackJsonp||[]).push([[47,9,24,27,28,30,41],{240:function(t,n,e){"use strict";var r;e.d(n,"a",(function(){return r})),function(t){t.Party="party",t.Status="status",t.Keyword="keyword",t.Topic="topic"}(r||(r={}))},267:function(t,n,e){"use strict";e.r(n);var r=e(2).a.extend({name:"ExplanationContainer",props:{title:{type:String,required:!0,default:""}}}),o=e(16),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"flex flex-col items-center bg-gray bg-opacity-10 rounded-xl max-w-4xl divide-y divide-white divide-dashed p-4 sm:p-6"},[e("h1",{staticClass:"wv-h5 wv-font-kondolar wv-font-bold text-white pb-4"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),e("div",{staticClass:"flex flex-col items-center sm:flex-row sm:items-start pt-4 sm:p-4"},[t._t("default")],2)])}),[],!1,null,null,null);n.default=component.exports},268:function(t,n,e){var r=e(3);t.exports=r(1..valueOf)},269:function(t,n,e){"use strict";e.r(n);e(24),e(72);var r=e(2).a.extend({name:"LinkBanner",props:{theme:{type:String,default:"ultramarine"},iconImage:{type:String,required:!1},titleText:{type:String,default:""},bodyText:{type:String,default:""},buttonText:{type:String,default:""},buttonUrl:{type:String,default:""}},computed:{themeClasses:function(){return"transparent-gray"===this.theme?["bg-gray","bg-opacity-10","text-white"]:["bg-ultramarine","text-white"]},iconImageName:function(){var t=this.iconImage.split("/");return t[t.length-1].split(".")[0]}},methods:{handleRedirect:function(){this.$router.push("/"+this.$props.buttonUrl)}}}),o=e(16),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"flex flex-col w-full max-w-4xl p-4 rounded-lg sm:flex-row",class:t.themeClasses,attrs:{"data-testid":"theme"}},[e("div",{staticClass:"flex items-center sm:items-start sm:w-2/5"},[t.iconImage?e("img",{staticClass:"w-12 mr-4",attrs:{src:t.$config.path.images+"/"+t.iconImage,alt:t.iconImageName}}):t._e(),t._v(" "),e("h1",{staticClass:"wv-h5 wv-font-kondolar wv-font-bold"},[t._v("\n      "+t._s(t.titleText)+"\n    ")])]),t._v(" "),e("p",{staticClass:"wv-b6 wv-font-baijamjuri py-4 sm:px-4 sm:py-0 sm:w-1/2"},[t._v("\n    "+t._s(t.bodyText)+"\n  ")]),t._v(" "),e("Button",{staticClass:"w-full h-10 justify-center sm:w-max flex-shrink-0",attrs:{theme:"primary-white","data-testid":"navigation"},on:{click:t.handleRedirect}},[e("span",{staticClass:"wv-font-anuphan"},[t._v("\n      "+t._s(t.buttonText)+"\n    ")]),t._v(" "),e("svg",{attrs:{width:"12",height:"12",viewBox:"0 0 12 12",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M-2.26862e-07 6.74994L-2.92429e-07 5.24994L9 5.24994L4.875 1.12494L5.94 0.0599401L11.88 5.99994L5.94 11.9399L4.875 10.8749L9 6.74994L-2.26862e-07 6.74994Z"}})])])],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Button:e(101).default})},270:function(t,n,e){var r=e(6),o=e(185).values;r({target:"Object",stat:!0},{values:function(t){return o(t)}})},271:function(t,n,e){var content=e(293);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(59).default)("5de05598",content,!0,{sourceMap:!1})},274:function(t,n,e){"use strict";e.r(n),e.d(n,"groupPromisesBy",(function(){return f}));var r=e(20),o=e(273),l=(e(13),e(103),e(282),e(49),e(184),e(32),e(48),e(266),e(270),e(240)),c=e(239),d=function(t){return t?c.c.reduce((function(n,e){return e in t?[].concat(Object(o.a)(n),[{status:e,count:t[e]}]):n}),[]):[]},f=function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:7,f=n.reduce((function(n,e){var r=e[t];return r in n?n[r].count++:n[r]={isNCPO:!1,count:1,statuses:{}},e.status in n[r].statuses?n[r].statuses[e.status]++:n[r].statuses[e.status]=1,!0===e.isNCPO&&(n[r].isNCPO=!0),n}),{}),m=t===l.a.Party?Object.entries(f).map((function(t){var n=Object(r.a)(t,2),label=n[0],e=n[1];return{label:label,icon:"party/".concat(label,".jpg"),isNCPO:e.isNCPO,data:d(e.statuses)}})).sort((function(a,t){return f[t.label].count-f[a.label].count})):t===l.a.Topic?c.e.map((function(t){var n,e;return{label:null===(n=c.f.get(t))||void 0===n?void 0:n.short,icon:"topic/".concat(t,"_small.png"),data:d(null===(e=f[t])||void 0===e?void 0:e.statuses)}})):c.c.map((function(t){var n;return{label:c.d.get(t),icon:"status/".concat(t,"_small.png"),data:d(null===(n=f[t])||void 0===n?void 0:n.statuses)}}));if(m.length>e){var v=m.slice(e);m=[].concat(Object(o.a)(m.slice(0,e)),[{label:"อื่นๆ",icon:"other-group.png",data:c.c.map((function(t){return{status:t,count:v.reduce((function(n,e){var r;return n+((null===(r=e.data.find((function(n){return n.status===t})))||void 0===r?void 0:r.count)||0)}),0)}})).filter((function(t){return t.count>0}))}])}var h=Object.values(f).map((function(t){return t.count}));return{max:Math.max.apply(Math,Object(o.a)(h)),total:h.reduce((function(t,n){return t+n}),0),charts:m}}},279:function(t,n,e){"use strict";e.r(n);var r=e(2),o=e(101),l=r.a.extend({name:"FormLink",components:{Button:o.default}}),c=e(16),component=Object(c.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("a",{ref:"form",staticClass:"w-full mb-6",attrs:{href:"https://docs.google.com/forms/d/e/1FAIpQLSc288kwduqZ5SJvq4osroZPN-MVpoSLzgSjFcEoXLV5YqWZMg/viewform?usp=sf_link",target:"_blank",rel:"noopener noreferrer"},on:{click:function(n){return t.$emit("tagClicked",!0)}}},[e("Button",{staticClass:"w-full justify-center"},[e("span",[t._v("แจ้งคำสัญญาที่อยากให้ติดตามเพิ่มเติม")]),t._v(" "),e("svg",{attrs:{width:"12",height:"12",viewBox:"0 0 12 12",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M-2.26862e-07 6.74994L-2.92429e-07 5.24994L9 5.24994L4.875 1.12494L5.94 0.0599401L11.88 5.99994L5.94 11.9399L4.875 10.8749L9 6.74994L-2.26862e-07 6.74994Z"}})])])],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Button:e(101).default})},280:function(t,n,e){"use strict";e.r(n);var r=e(2).a.extend({name:"StatusAnimation"}),o=(e(292),e(16)),component=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"status-animation"})}),[],!1,null,"ed1bc752",null);n.default=component.exports},284:function(t,n,e){"use strict";e.r(n);var r=e(2),o=e(267),l=e(312),c=e(265),d=r.a.extend({name:"StatusExplanation",components:{ExplanationContainer:o.default,ProcessFlowchart:l.default,StatusLegend:c.default}}),f=e(16),component=Object(f.a)(d,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ExplanationContainer",{attrs:{title:"เส้นทางของคำสัญญา"}},[e("ProcessFlowchart",{staticClass:"flex-shrink-0 mb-2 sm:mt-2 sm:mb-0"}),t._v(" "),e("StatusLegend",{staticClass:"mt-4 text-white"})],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{ExplanationContainer:e(267).default})},291:function(t){t.exports=JSON.parse('[{"name":"ครูไทยเพื่อประชาชน","side":"government"},{"name":"ชาติไทยพัฒนา","side":"government"},{"name":"ชาติพัฒนา","side":"government"},{"name":"ไทรักธรรม","side":"government"},{"name":"ประชาชนปฏิรูป","side":"government"},{"name":"ประชาธรรมไทย","side":"government"},{"name":"ประชาธิปไตยใหม่","side":"government"},{"name":"ประชาธิปัตย์","side":"government"},{"name":"ประชานิยม","side":"government"},{"name":"ประชาภิวัฒน์","side":"government"},{"name":"พลเมืองไทย","side":"government"},{"name":"พลังชาติไทย","side":"government"},{"name":"พลังท้องถิ่นไท","side":"government"},{"name":"พลังไทยรักไทย","side":"government"},{"name":"พลังธรรมใหม่","side":"government"},{"name":"พลังประชารัฐ","side":"government"},{"name":"ภูมิใจไทย","side":"government"},{"name":"รวมพลังประชาชาติไทย","side":"government"},{"name":"รักษ์ผืนป่าประเทศไทย","side":"government"},{"name":"เศรษฐกิจใหม่","side":"government"},{"name":"ก้าวไกล","side":"opposition"},{"name":"ไทยศรีวิไลย์","side":"opposition"},{"name":"ประชาชาติ","side":"opposition"},{"name":"พลังปวงชนไทย","side":"opposition"},{"name":"เพื่อชาติ","side":"opposition"},{"name":"เพื่อไทย","side":"opposition"},{"name":"เสรีรวมไทย","side":"opposition"},{"name":"อนาคตใหม่","side":"opposition"}]')},292:function(t,n,e){"use strict";e(271)},293:function(t,n,e){var r=e(58),o=e(294),l=e(295),c=e(296),d=e(297),f=e(298),m=e(299),v=r((function(i){return i[1]})),h=o(l),x=o(c),w=o(d),_=o(f),y=o(m);v.push([t.i,"/*purgecss start ignore*/\n.status-animation[data-v-ed1bc752]{\n  width:120px;\n  height:120px;\n  background-image:url(/images/status/default.png);\n  background-size:contain;\n  -webkit-animation:statusChange-data-v-ed1bc752 6s ease-in-out infinite;\n          animation:statusChange-data-v-ed1bc752 6s ease-in-out infinite\n}\n@-webkit-keyframes statusChange-data-v-ed1bc752{\n0%{\n    background-image:url("+h+")\n}\n20%{\n    background-image:url("+x+")\n}\n40%{\n    background-image:url("+w+")\n}\n60%{\n    background-image:url("+_+")\n}\n80%{\n    background-image:url("+y+")\n}\nto{\n    background-image:url("+h+")\n}\n}\n@keyframes statusChange-data-v-ed1bc752{\n0%{\n    background-image:url("+h+")\n}\n20%{\n    background-image:url("+x+")\n}\n40%{\n    background-image:url("+w+")\n}\n60%{\n    background-image:url("+_+")\n}\n80%{\n    background-image:url("+y+")\n}\nto{\n    background-image:url("+h+")\n}\n}\n\n/*purgecss end ignore*/",""]),v.locals={},t.exports=v},294:function(t,n,e){"use strict";t.exports=function(t,n){return n||(n={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),n.hash&&(t+=n.hash),/["'() \t\n]/.test(t)||n.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},295:function(t,n,e){t.exports=e.p+"img/default.0adb8b9.png"},296:function(t,n,e){t.exports=e.p+"img/nodata.f9d4abb.png"},297:function(t,n,e){t.exports=e.p+"img/proposed.a773a82.png"},298:function(t,n,e){t.exports=e.p+"img/paused.35496be.png"},299:function(t,n,e){t.exports=e.p+"img/done.fdf43b3.png"},306:function(t,n,e){"use strict";e.r(n);e(49),e(13),e(311);var r=e(2),o=e(239),l=r.a.extend({name:"PartyCard",props:{partyLogo:{type:String,default:"",required:!1},partyName:{type:String,default:""},partyPromises:{type:Array,default:function(){return[]}},buttonUrl:{type:String,default:""}},computed:{sumPartyPromises:function(){var t=this.partyPromises.map((function(a){return a.count}));return t.length>0?t.reduce((function(a,b){return a+b})):0},promises:function(){var t=this,n=this.partyPromises;return n.length>0?n.map((function(a){return{status:a.status,count:a.count,countPercentage:(a.count/t.sumPartyPromises*100).toFixed(2)}})):[{status:o.a.NoData,countPercentage:"100"}]}}}),c=e(16),component=Object(c.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"flex bg-white w-full px-4 py-3 rounded-sm flex-row gap-3 text-black"},[e("div",[e("div",{staticClass:"w-10 h-10 md:w-9 md:h-9"},[t.partyLogo?e("img",{staticClass:"w-full h-full rounded-full shadow",attrs:{src:t.$config.path.images+"/"+t.partyLogo,alt:t.partyName}}):e("img",{staticClass:"w-full h-full rounded-full shadow",attrs:{src:t.$config.path.images+"/party/dummy.jpg",alt:"Dummy Party Logo"}})])]),t._v(" "),e("div",{staticClass:"flex flex-col md:flex-row items-start md:items-center gap-3 w-full"},[e("div",{staticClass:"w-full"},[e("div",{staticClass:"h11 wv-font-black"},[t._v(t._s(t.partyName))]),t._v(" "),e("div",[e("span",{staticClass:"promise-sum"},[t._v(t._s(t.sumPartyPromises))]),t._v(" "),e("span",[t._v(" คำสัญญา")])])]),t._v(" "),e("div",{staticClass:"w-full"},[e("span",{staticClass:"flex h-4 overflow-hidden"},t._l(t.promises,(function(t,i){return e("span",{key:i,class:"bg-status-"+t.status,style:"width:"+t.countPercentage+"%;",attrs:{title:t.status+": "+t.count}})})),0)]),t._v(" "),e("div",[e("NuxtLink",{attrs:{to:t.buttonUrl}},[e("Button",{staticClass:"h-10 w-full sm:w-max",attrs:{theme:"primary-blue"}},[e("span",[t._v("ดูคำสัญญา")]),t._v(" "),e("svg",{attrs:{width:"12",height:"12",viewBox:"0 0 12 12",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M-2.26862e-07 6.74994L-2.92429e-07 5.24994L9 5.24994L4.875 1.12494L5.94 0.0599401L11.88 5.99994L5.94 11.9399L4.875 10.8749L9 6.74994L-2.26862e-07 6.74994Z"}})])])],1)],1)])])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Button:e(101).default})},310:function(t,n,e){var content=e(320);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(59).default)("6c21da38",content,!0,{sourceMap:!1})},311:function(t,n,e){"use strict";var r=e(6),o=e(1),l=e(3),c=e(51),d=e(268),f=e(188),m=e(4),v=o.RangeError,h=o.String,x=Math.floor,w=l(f),_=l("".slice),y=l(1..toFixed),C=function(t,n,e){return 0===n?e:n%2==1?C(t,n-1,e*t):C(t*t,n/2,e)},L=function(data,t,n){for(var e=-1,r=n;++e<6;)r+=t*data[e],data[e]=r%1e7,r=x(r/1e7)},k=function(data,t){for(var n=6,e=0;--n>=0;)e+=data[n],data[n]=x(e/t),e=e%t*1e7},P=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var n=h(data[t]);s=""===s?n:s+w("0",7-n.length)+n}return s};r({target:"Number",proto:!0,forced:m((function(){return"0.000"!==y(8e-5,3)||"1"!==y(.9,0)||"1.25"!==y(1.255,2)||"1000000000000000128"!==y(0xde0b6b3a7640080,0)}))||!m((function(){y({})}))},{toFixed:function(t){var n,e,r,o,l=d(this),f=c(t),data=[0,0,0,0,0,0],m="",x="0";if(f<0||f>20)throw v("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return h(l);if(l<0&&(m="-",l=-l),l>1e-21)if(e=(n=function(t){for(var n=0,e=t;e>=4096;)n+=12,e/=4096;for(;e>=2;)n+=1,e/=2;return n}(l*C(2,69,1))-69)<0?l*C(2,-n,1):l/C(2,n,1),e*=4503599627370496,(n=52-n)>0){for(L(data,0,e),r=f;r>=7;)L(data,1e7,0),r-=7;for(L(data,C(10,r,1),0),r=n-1;r>=23;)k(data,1<<23),r-=23;k(data,1<<r),L(data,1,1),k(data,2),x=P(data)}else L(data,0,e),L(data,1<<-n,0),x=P(data)+w("0",f);return x=f>0?m+((o=x.length)<=f?"0."+w("0",f-o)+x:_(x,0,o-f)+"."+_(x,o-f)):m+x}})},319:function(t,n,e){"use strict";e(310)},320:function(t,n,e){var r=e(58)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.landing-bg[data-v-3b0079fb]{\n  height:540px\n}\n@media (min-width:547px){\n.landing-bg[data-v-3b0079fb]{\n    height:520px\n}\n}\n@media (min-width:640px){\n.landing-bg[data-v-3b0079fb]{\n    height:580px\n}\n}\n@media (min-width:768px){\n.landing-bg[data-v-3b0079fb]{\n    height:630px\n}\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},324:function(t,n,e){"use strict";e.r(n);e(49),e(24),e(72);var r=e(2),o=e(280),l=e(101),c=r.a.extend({name:"Landing",components:{StatusAnimation:o.default,Button:l.default},data:function(){return{updatedDate:"2022-03-12"}},methods:{formatDate:function(t){var n=t.split("-").map((function(t){return parseInt(t,10)}));return new Date(n[0],n[1]-1,n[2]).toLocaleDateString("th-TH",{year:"2-digit",month:"short",day:"numeric"})}}}),d=(e(319),e(16)),component=Object(d.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"relative justify-center max-w-7xl w-full landing-bg overflow-hidden"},[e("img",{staticClass:"absolute m-auto opacity-95 overflow-hidden max-w-none sm:max-w-full -top-16 sm:top-0",staticStyle:{"z-index":"1",left:"50%",transform:"translateX(-50%)"},attrs:{src:t.$config.path.images+"/background/landing_bg.png",alt:"landing_bg"}}),t._v(" "),e("div",{staticClass:"flex flex-col relative z-10 items-center text-center pt-16 sm:pt-32 pb-20"},[e("StatusAnimation"),t._v(" "),e("h3",{staticClass:"wv-h8 wv-font-bold wv-font-kondolar py-4"},[t._v("PROMISE TRACKER")]),t._v(" "),t._m(0),t._v(" "),e("h4",{staticClass:"wv-b5 wv-font-kondolar px-4"},[t._v("\n      ประชาชนทั้งหลาย.. มาติดตามและทวงถามสัญญาที่พรรค\n      และนักการเมืองให้ไว้ตอนหาเสียงกัน!\n    ")]),t._v(" "),e("div",{staticClass:"flex flex-col items-center py-4 w-full px-4"},[e("div",{staticClass:"p-2 wv-font-anuphan wv-u5 bg-gray bg-opacity-10 rounded-sm"},[t._v("\n        อัปเดตล่าสุด "+t._s(t.formatDate(t.updatedDate))+"\n      ")]),t._v(" "),e("NuxtLink",{staticClass:"mt-3 mb-6 w-full flex justify-center",attrs:{to:"explore"}},[e("Button",{staticClass:"h-10 w-full sm:w-max wv-font-anuphan wv-u4 flex justify-center",attrs:{theme:"primary-white"}},[e("span",[t._v("ดูคำสัญญา")]),t._v(" "),e("svg",{attrs:{width:"12",height:"12",viewBox:"0 0 12 12",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M-2.26862e-07 6.74994L-2.92429e-07 5.24994L9 5.24994L4.875 1.12494L5.94 0.0599401L11.88 5.99994L5.94 11.9399L4.875 10.8749L9 6.74994L-2.26862e-07 6.74994Z"}})])])],1)],1),t._v(" "),e("div",{staticClass:"w-5xl w-full px-4"},[e("div",{staticClass:"block w-full border-b border-white border-dashed h-1"},[t._v("\n        "+t._s(" ")+"\n      ")])])],1)])}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("h1",{staticClass:"wv-h4 wv-font-bold wv-font-kondolar pb-4"},[t._v("\n      ที่ผ่านมารักษา"),e("br",{staticClass:"block sm:hidden"}),t._v("สัญญา"),e("br",{staticClass:"hidden sm:block"}),t._v("ได้แค่ไหน?\n    ")])}],!1,null,"3b0079fb",null);n.default=component.exports;installComponents(component,{StatusAnimation:e(280).default,Button:e(101).default})},325:function(t,n,e){"use strict";e.r(n);var r=e(273),o=e(20),l=(e(13),e(266),e(23),e(103),e(306)),c=e(265),d=e(274),f=e(313),m=e(291),filter=e(240),v=Object(d.groupPromisesBy)(filter.a.Party,f,50).charts.reduce((function(t,n){var e,l=Object(o.a)(t,2),c=l[0],d=l[1];return"government"===(null===(e=m.find((function(t){return t.name===n.label})))||void 0===e?void 0:e.side)?[[].concat(Object(r.a)(c),[n]),d]:[c,[].concat(Object(r.a)(d),[n])]}),[[],[]]),h=Object(o.a)(v,2),x=h[0],w=h[1],_={name:"PartyPromise",components:{PartyCard:l.default,StatusLegend:c.default},data:function(){return{partySides:[{name:"ฝ่ายรัฐบาล",parties:x},{name:"ฝ่ายค้าน",parties:w}]}}},y=e(16),component=Object(y.a)(_,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"grid grid-cols-6 gap-4 p-4 sm:p-6 max-w-4xl bg-gray bg-opacity-10 rounded-xl"},[e("div",{staticClass:"col-span-6 sm:col-span-2"},[e("h5",{staticClass:"wv-h5 wv-font-kondolar wv-font-bold"},[t._v("สำรวจคำสัญญา")]),t._v(" "),e("h5",{staticClass:"wv-h5 wv-font-kondolar wv-font-bold pb-6"},[t._v("ตามพรรค")]),t._v(" "),e("StatusLegend",{staticClass:"text-white",attrs:{"show-detail":!1}})],1),t._v(" "),e("div",{staticClass:"col-span-6 sm:col-span-4"},[e("div",{staticClass:"flex flex-col gap-6"},t._l(t.partySides,(function(n){var r=n.name,o=n.parties;return e("div",{key:r,staticClass:"flex flex-col gap-4"},[e("span",{staticClass:"wv-h8 wv-font-kondolar wv-font-bold"},[t._v("\n          "+t._s(r)+" "+t._s(o.length)+" พรรค\n        ")]),t._v(" "),e("div",{staticClass:"flex flex-col gap-1"},t._l(o,(function(t){var label=t.label,n=t.icon,data=t.data;return e("PartyCard",{key:label,attrs:{"party-logo":n,"party-name":label,"party-promises":data,"button-url":"explore?party="+label}})})),1)])})),0)])])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{PartyCard:e(306).default})},330:function(t,n,e){var content=e(342);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(59).default)("20803516",content,!0,{sourceMap:!1})},341:function(t,n,e){"use strict";e(330)},342:function(t,n,e){var r=e(58)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.gradient-background[data-v-417fd2c5]{\n  z-index:-5;\n  position:fixed;\n  top:0px;\n  height:100vh;\n  width:100vw;\n  background-image:linear-gradient(to bottom, var(--tw-gradient-stops));\n  --tw-gradient-from:#3904E9;\n  --tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(57, 4, 233, 0));\n  --tw-gradient-to:#000000\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},352:function(t,n,e){"use strict";e.r(n);var r=e(2),o=e(324),l=e(269),c=e(284),d=e(267),f=e(279),m=e(325),v=r.a.extend({name:"IndexPage",components:{Landing:o.default,LinkBanner:l.default,StatusExplanation:c.default,ExplanationContainer:d.default,FormLink:f.default,PartyPromise:m.default}}),h=(e(341),e(16)),component=Object(h.a)(v,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"flex flex-col"},[e("div",{staticClass:"flex flex-col items-center text-white px-6"},[e("div",{staticClass:"gradient-background"}),t._v(" "),e("Landing"),t._v(" "),e("div",{staticClass:"mt-10 mb-16 space-y-8 px-2"},[e("StatusExplanation"),t._v(" "),e("PartyPromise"),t._v(" "),e("ExplanationContainer",{attrs:{title:"ทวงสัญญากับฝ่ายค้านได้ด้วยเหรอ?"}},[e("img",{staticClass:"mb-4 sm:mr-8 sm:mb-0 w-28 sm:w-48",attrs:{src:t.$config.path.images+"/topic/proposed.png",alt:"proposed"}}),t._v(" "),e("p",{staticClass:"wv-font-baijamjuri wv-b6 text-white"},[e("span",{staticClass:"wv-font-bold"},[t._v("บทบาทหลักของฝ่ายค้านในรัฐสภา คือการตรวจสอบการทำงานของรัฐบาล")]),t._v('\n          และแม้จะเป็นการยากที่จะผลักดันเสียงของประชาชนด้วยเสียงข้างน้อย\n          แต่เราก็อยากลองชวนทุกคนทบทวนดูว่า พวกเขาพยายามเพื่อเราแค่ไหน ดังนั้น\n          สำหรับพรรคฝ่ายค้าน หากดำเนินการมาถึงขั้นตอน "เสนอต่อสภา" ขึ้นไป\n          หรือใช้กลไกของสภา เช่น การอภิปราย การตั้งกระทู้ถาม\n          นั่นแสดงให้เห็นว่า\n          ฝ่ายค้านได้พยายามผลักดันให้คำสัญญานั้นได้เป็นที่รับรู้\n          หรือเข้าสู่กระบวนการตามอำนาจหน้าที่ที่พวกเขาทำได้\n        ')])]),t._v(" "),e("LinkBanner",{attrs:{theme:"transparent-gray","icon-image":"article/article.png","title-text":"วิธีตรวจสอบคำสัญญา","body-text":"หากนัก/พรรคการเมืองที่ได้เข้าไปเป็น รัฐบาล แล้วไม่ทำตามสัญญา มีกระบวนการตรวจ สอบอย่างไรบ้าง","button-text":"อ่านเพิ่มเติม","button-url":"guide"}}),t._v(" "),e("div",[e("FormLink")],1)],1)],1),t._v(" "),e("NuxtLink",{staticClass:"w-full h-20 flex flex-row items-center justify-center px-4 py-2 wv-u4 wv-font-bold space-x-2 border-b bg-ultramarine text-white hover:bg-white hover:text-ultramarine",attrs:{to:"explore"}},[e("span",[t._v("ดูคำสัญญา")]),t._v(" "),e("svg",{attrs:{width:"12",height:"12",viewBox:"0 0 12 12",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M-2.26862e-07 6.74994L-2.92429e-07 5.24994L9 5.24994L4.875 1.12494L5.94 0.0599401L11.88 5.99994L5.94 11.9399L4.875 10.8749L9 6.74994L-2.26862e-07 6.74994Z"}})])])],1)}),[],!1,null,"417fd2c5",null);n.default=component.exports;installComponents(component,{Landing:e(324).default,PartyPromise:e(325).default,ExplanationContainer:e(267).default,LinkBanner:e(269).default,FormLink:e(279).default})}}]);