(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{242:function(t,e,n){"use strict";var r;n.d(e,"a",(function(){return r})),function(t){t.Party="party",t.Status="status",t.Keyword="keyword",t.Topic="topic"}(r||(r={}))},270:function(t,e,n){var r=n(3);t.exports=r(1..valueOf)},276:function(t,e,n){"use strict";n.r(e),n.d(e,"groupPromisesBy",(function(){return m}));var r=n(20),o=n(275),c=(n(13),n(103),n(284),n(49),n(187),n(23),n(72),n(32),n(48),n(268),n(242)),l=n(241),d=function(t){return t?l.c.reduce((function(e,n){return n in t?[].concat(Object(o.a)(e),[{status:n,count:t[n]}]):e}),[]):[]},m=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:7,m=e.reduce((function(e,n){var r=n[t];return r in e?e[r].count++:e[r]={isNCPO:!1,count:1,statuses:{}},n.status in e[r].statuses?e[r].statuses[n.status]++:e[r].statuses[n.status]=1,!0===n.isNCPO&&(e[r].isNCPO=!0),e}),{}),f=t===c.a.Party?Object.entries(m).map((function(t){var e=Object(r.a)(t,2),label=e[0],n=e[1];return{label:label,icon:"party/".concat(label.split("/")[0],".jpg"),isNCPO:n.isNCPO,data:d(n.statuses)}})).sort((function(a,t){return m[t.label].count-m[a.label].count})):t===c.a.Topic?l.e.map((function(t){var e,n;return{label:null===(e=l.f.get(t))||void 0===e?void 0:e.short,icon:"topic/".concat(t,"_small.png"),data:d(null===(n=m[t])||void 0===n?void 0:n.statuses)}})):l.c.map((function(t){var e;return{label:l.d.get(t),icon:"status/".concat(t,"_small.png"),data:d(null===(e=m[t])||void 0===e?void 0:e.statuses)}}));if(f.length>n){var v=f.slice(n);f=[].concat(Object(o.a)(f.slice(0,n)),[{label:"อื่นๆ",icon:"other-group.png",data:l.c.map((function(t){return{status:t,count:v.reduce((function(e,n){var r;return e+((null===(r=n.data.find((function(e){return e.status===t})))||void 0===r?void 0:r.count)||0)}),0)}})).filter((function(t){return t.count>0}))}])}var y=f.map((function(t){return t.data.reduce((function(t,e){return t+e.count}),0)}));return{max:Math.max.apply(Math,Object(o.a)(y)),total:y.reduce((function(t,e){return t+e}),0),charts:f}}},295:function(t){t.exports=JSON.parse('[{"name":"ครูไทยเพื่อประชาชน","side":"government"},{"name":"ชาติไทยพัฒนา","side":"government"},{"name":"ชาติพัฒนา","side":"government"},{"name":"ไทรักธรรม","side":"government"},{"name":"ประชาชนปฏิรูป","side":"government"},{"name":"ประชาธรรมไทย","side":"government"},{"name":"ประชาธิปไตยใหม่","side":"government"},{"name":"ประชาธิปัตย์","side":"government"},{"name":"ประชานิยม","side":"government"},{"name":"ประชาภิวัฒน์","side":"government"},{"name":"พลเมืองไทย","side":"government"},{"name":"พลังชาติไทย","side":"government"},{"name":"พลังท้องถิ่นไท","side":"government"},{"name":"พลังไทยรักไทย","side":"government"},{"name":"พลังธรรมใหม่","side":"government"},{"name":"พลังประชารัฐ","side":"government"},{"name":"ภูมิใจไทย","side":"government"},{"name":"รวมพลังประชาชาติไทย","side":"government"},{"name":"รักษ์ผืนป่าประเทศไทย","side":"government"},{"name":"เศรษฐกิจใหม่","side":"government"},{"name":"ก้าวไกล/อนาคตใหม่","side":"opposition"},{"name":"ไทยศรีวิไลย์","side":"opposition"},{"name":"ประชาชาติ","side":"opposition"},{"name":"พลังปวงชนไทย","side":"opposition"},{"name":"เพื่อชาติ","side":"opposition"},{"name":"เพื่อไทย","side":"opposition"},{"name":"เสรีรวมไทย","side":"opposition"}]')},310:function(t,e,n){"use strict";n.r(e);n(49),n(13),n(315);var r=n(2),o=n(241),c=r.a.extend({name:"PartyCard",props:{partyLogo:{type:String,default:"",required:!1},partyName:{type:String,default:""},partyPromises:{type:Array,default:function(){return[]}},buttonUrl:{type:String,default:""}},computed:{sumPartyPromises:function(){var t=this.partyPromises.map((function(a){return a.count}));return t.length>0?t.reduce((function(a,b){return a+b})):0},promises:function(){var t=this,e=this.partyPromises;return e.length>0?e.map((function(a){return{status:a.status,count:a.count,countPercentage:(a.count/t.sumPartyPromises*100).toFixed(2)}})):[{status:o.a.NoData,countPercentage:"100"}]}}}),l=n(16),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex bg-white w-full px-4 py-3 rounded-sm flex-row gap-3 text-black"},[n("div",[n("div",{staticClass:"w-10 h-10 md:w-9 md:h-9"},[t.partyLogo?n("img",{staticClass:"w-full h-full rounded-full shadow",attrs:{src:t.$config.path.images+"/"+t.partyLogo,alt:t.partyName}}):n("img",{staticClass:"w-full h-full rounded-full shadow",attrs:{src:t.$config.path.images+"/party/dummy.jpg",alt:"Dummy Party Logo"}})])]),t._v(" "),n("div",{staticClass:"flex flex-col md:flex-row items-start md:items-center gap-3 w-full"},[n("div",{staticClass:"w-full"},[n("div",{staticClass:"h11 wv-font-black"},[t._v(t._s(t.partyName))]),t._v(" "),n("div",[n("span",{staticClass:"promise-sum"},[t._v(t._s(t.sumPartyPromises))]),t._v(" "),n("span",[t._v(" คำสัญญา")])])]),t._v(" "),n("div",{staticClass:"w-full"},[n("span",{staticClass:"flex h-4 overflow-hidden"},t._l(t.promises,(function(t,i){return n("span",{key:i,class:"bg-status-"+t.status,style:"width:"+t.countPercentage+"%;",attrs:{title:t.status+": "+t.count}})})),0)]),t._v(" "),n("div",[n("NuxtLink",{attrs:{to:t.buttonUrl}},[n("Button",{staticClass:"h-10 w-full sm:w-max",attrs:{theme:"primary-blue"}},[n("span",[t._v("ดูคำสัญญา")]),t._v(" "),n("svg",{attrs:{width:"12",height:"12",viewBox:"0 0 12 12",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M-2.26862e-07 6.74994L-2.92429e-07 5.24994L9 5.24994L4.875 1.12494L5.94 0.0599401L11.88 5.99994L5.94 11.9399L4.875 10.8749L9 6.74994L-2.26862e-07 6.74994Z"}})])])],1)],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:n(101).default})},315:function(t,e,n){"use strict";var r=n(6),o=n(1),c=n(3),l=n(51),d=n(270),m=n(190),f=n(4),v=o.RangeError,y=o.String,h=Math.floor,w=c(m),x=c("".slice),C=c(1..toFixed),_=function(t,e,n){return 0===e?n:e%2==1?_(t,e-1,n*t):_(t*t,e/2,n)},P=function(data,t,e){for(var n=-1,r=e;++n<6;)r+=t*data[n],data[n]=r%1e7,r=h(r/1e7)},O=function(data,t){for(var e=6,n=0;--e>=0;)n+=data[e],data[e]=h(n/t),n=n%t*1e7},L=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=y(data[t]);s=""===s?e:s+w("0",7-e.length)+e}return s};r({target:"Number",proto:!0,forced:f((function(){return"0.000"!==C(8e-5,3)||"1"!==C(.9,0)||"1.25"!==C(1.255,2)||"1000000000000000128"!==C(0xde0b6b3a7640080,0)}))||!f((function(){C({})}))},{toFixed:function(t){var e,n,r,o,c=d(this),m=l(t),data=[0,0,0,0,0,0],f="",h="0";if(m<0||m>20)throw v("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return y(c);if(c<0&&(f="-",c=-c),c>1e-21)if(n=(e=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e}(c*_(2,69,1))-69)<0?c*_(2,-e,1):c/_(2,e,1),n*=4503599627370496,(e=52-e)>0){for(P(data,0,n),r=m;r>=7;)P(data,1e7,0),r-=7;for(P(data,_(10,r,1),0),r=e-1;r>=23;)O(data,1<<23),r-=23;O(data,1<<r),P(data,1,1),O(data,2),h=L(data)}else P(data,0,n),P(data,1<<-e,0),h=L(data)+w("0",m);return h=m>0?f+((o=h.length)<=m?"0."+w("0",m-o)+h:x(h,0,o-m)+"."+x(h,o-m)):f+h}})},330:function(t,e,n){"use strict";n.r(e);var r=n(275),o=n(20),c=(n(13),n(268),n(24),n(103),n(310)),l=n(267),d=n(276),m=n(317),f=n(295),filter=n(242),v=Object(d.groupPromisesBy)(filter.a.Party,m,50).charts.reduce((function(t,e){var n,c=Object(o.a)(t,2),l=c[0],d=c[1];return"government"===(null===(n=f.find((function(t){return t.name===e.label})))||void 0===n?void 0:n.side)?[[].concat(Object(r.a)(l),[e]),d]:[l,[].concat(Object(r.a)(d),[e])]}),[[],[]]),y=Object(o.a)(v,2),h=y[0],w=y[1],x={name:"PartyPromise",components:{PartyCard:c.default,StatusLegend:l.default},data:function(){return{partySides:[{name:"ฝ่ายรัฐบาล",parties:h},{name:"ฝ่ายค้าน",parties:w}]}}},C=n(16),component=Object(C.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grid grid-cols-6 gap-4 p-4 sm:p-6 max-w-4xl bg-gray bg-opacity-10 rounded-xl"},[n("div",{staticClass:"col-span-6 sm:col-span-2"},[n("h5",{staticClass:"wv-h5 wv-font-kondolar wv-font-bold"},[t._v("สำรวจคำสัญญา")]),t._v(" "),n("h5",{staticClass:"wv-h5 wv-font-kondolar wv-font-bold pb-6"},[t._v("ตามพรรค")]),t._v(" "),n("StatusLegend",{staticClass:"text-white",attrs:{"show-detail":!1}})],1),t._v(" "),n("div",{staticClass:"col-span-6 sm:col-span-4"},[n("div",{staticClass:"flex flex-col gap-6"},t._l(t.partySides,(function(e){var r=e.name,o=e.parties;return n("div",{key:r,staticClass:"flex flex-col gap-4"},[n("span",{staticClass:"wv-h8 wv-font-kondolar wv-font-bold"},[t._v("\n          "+t._s(r)+" "+t._s(o.length)+" พรรค\n        ")]),t._v(" "),n("div",{staticClass:"flex flex-col gap-1"},t._l(o,(function(t){var label=t.label,e=t.icon,data=t.data;return n("PartyCard",{key:label,attrs:{"party-logo":e,"party-name":label,"party-promises":data,"button-url":"explore?party="+label}})})),1)])})),0)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PartyCard:n(310).default})}}]);