(window.webpackJsonp=window.webpackJsonp||[]).push([[48,23,24,28,32,33,34,35,36,38,39],{244:function(t,e,n){"use strict";n.r(e);var r=n(2).a.extend({name:"BoxContainer"}),o=n(16),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"p-3 rounded-md overflow-hidden w-full"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},259:function(t,e,n){"use strict";n.r(e);var r=n(2).a.extend({name:"ExternalLink",props:{url:{type:String,default:""}}}),o=n(16),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("a",{attrs:{href:t.url,target:"_blank",rel:"noopener noreferrer"}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},271:function(t,e,n){"use strict";n.r(e);n(24),n(72);var r=n(2).a.extend({name:"LinkBanner",props:{theme:{type:String,default:"ultramarine"},iconImage:{type:String,default:""},titleText:{type:String,default:""},bodyText:{type:String,default:""},buttonText:{type:String,default:""},buttonUrl:{type:String,default:""}},computed:{themeClasses:function(){return"transparent-gray"===this.theme?["bg-gray","bg-opacity-10","text-white"]:["bg-ultramarine","text-white"]},iconImageName:function(){var t=this.iconImage.split("/");return t[t.length-1].split(".")[0]}}}),o=n(16),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col w-full max-w-4xl p-4 rounded-lg sm:flex-row",class:t.themeClasses,attrs:{"data-testid":"theme"}},[n("div",{staticClass:"flex items-center sm:items-start sm:w-2/5"},[t.iconImage?n("img",{staticClass:"w-12 mr-4",attrs:{src:t.$config.path.images+"/"+t.iconImage,alt:t.iconImageName}}):t._e(),t._v(" "),n("h1",{staticClass:"wv-h5 wv-font-kondolar wv-font-bold"},[t._v("\n      "+t._s(t.titleText)+"\n    ")])]),t._v(" "),n("p",{staticClass:"wv-b6 wv-font-baijamjuri py-4 sm:px-4 sm:py-0 sm:w-1/2"},[t._v("\n    "+t._s(t.bodyText)+"\n  ")]),t._v(" "),n("NuxtLink",{staticClass:"self-start",attrs:{to:t.buttonUrl}},[n("Button",{staticClass:"w-full h-10 justify-center sm:w-max flex-shrink-0",attrs:{theme:"primary-white","data-testid":"navigation"}},[n("span",{staticClass:"wv-font-anuphan"},[t._v("\n        "+t._s(t.buttonText)+"\n      ")]),t._v(" "),n("svg",{attrs:{width:"12",height:"12",viewBox:"0 0 12 12",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M-2.26862e-07 6.74994L-2.92429e-07 5.24994L9 5.24994L4.875 1.12494L5.94 0.0599401L11.88 5.99994L5.94 11.9399L4.875 10.8749L9 6.74994L-2.26862e-07 6.74994Z"}})])])],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:n(101).default})},276:function(t,e,n){"use strict";n.r(e);var r=n(2).a.extend({name:"TimelineArrow"}),o=n(16),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("svg",{attrs:{width:"14",height:"9",viewBox:"0 0 14 9",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M10.1621 0H3.83777V4.16555L0.574951 4.16555L6.99992 9L13.4249 4.16555L10.1621 4.16555V0Z",fill:"#3904E9"}})])])}),[],!1,null,null,null);e.default=component.exports},280:function(t,e,n){"use strict";n.r(e);var r=n(2),o=n(101),l=r.a.extend({name:"FormLink",components:{Button:o.default}}),c=n(16),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{ref:"form",staticClass:"w-full mb-6",attrs:{href:"https://docs.google.com/forms/d/e/1FAIpQLSc288kwduqZ5SJvq4osroZPN-MVpoSLzgSjFcEoXLV5YqWZMg/viewform?usp=sf_link",target:"_blank",rel:"noopener noreferrer"},on:{click:function(e){return t.$emit("tagClicked",!0)}}},[n("Button",{staticClass:"w-full justify-center"},[n("span",[t._v("แจ้งคำสัญญาที่อยากให้ติดตามเพิ่มเติม")]),t._v(" "),n("svg",{attrs:{width:"12",height:"12",viewBox:"0 0 12 12",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M-2.26862e-07 6.74994L-2.92429e-07 5.24994L9 5.24994L4.875 1.12494L5.94 0.0599401L11.88 5.99994L5.94 11.9399L4.875 10.8749L9 6.74994L-2.26862e-07 6.74994Z"}})])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:n(101).default})},286:function(t,e,n){"use strict";n.r(e);var r=n(2).a.extend({name:"IconUp"}),o=n(16),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{width:"32",height:"32",viewBox:"27 16 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("g",{attrs:{filter:"url(#filter0_d_442_91721)"}},[n("circle",{attrs:{cx:"43",cy:"32",r:"12",transform:"rotate(-180 43 32)",fill:"white"}}),t._v(" "),n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M43.2736 29.6808C43.2196 29.6268 43.1556 29.5839 43.085 29.5546C43.0145 29.5253 42.9389 29.5103 42.8625 29.5103C42.7861 29.5103 42.7105 29.5253 42.6399 29.5546C42.5694 29.5839 42.5053 29.6268 42.4514 29.6808L38.9675 33.1647C38.8585 33.2737 38.7972 33.4216 38.7972 33.5758C38.7972 33.73 38.8585 33.8779 38.9675 33.9869C39.0765 34.0959 39.2244 34.1572 39.3786 34.1572C39.5328 34.1572 39.6807 34.0959 39.7897 33.9869L42.8625 30.913L45.9353 33.9869C45.9892 34.0409 46.0533 34.0837 46.1239 34.1129C46.1944 34.1421 46.27 34.1572 46.3464 34.1572C46.4227 34.1572 46.4983 34.1421 46.5688 34.1129C46.6394 34.0837 46.7035 34.0409 46.7575 33.9869C46.8114 33.9329 46.8543 33.8688 46.8835 33.7983C46.9127 33.7278 46.9277 33.6522 46.9277 33.5758C46.9277 33.4995 46.9127 33.4239 46.8835 33.3533C46.8543 33.2828 46.8114 33.2187 46.7575 33.1647L43.2736 29.6808Z",fill:"#3904E9"}})]),t._v(" "),n("defs",[n("filter",{attrs:{id:"filter0_d_442_91721",x:"0",y:"-15",width:"86",height:"86",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB"}},[n("feFlood",{attrs:{"flood-opacity":"0",result:"BackgroundImageFix"}}),t._v(" "),n("feColorMatrix",{attrs:{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}}),t._v(" "),n("feMorphology",{attrs:{radius:"1",operator:"dilate",in:"SourceAlpha",result:"effect1_dropShadow_442_91721"}}),t._v(" "),n("feOffset",{attrs:{dy:"-4"}}),t._v(" "),n("feGaussianBlur",{attrs:{stdDeviation:"15"}}),t._v(" "),n("feColorMatrix",{attrs:{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"}}),t._v(" "),n("feBlend",{attrs:{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_442_91721"}}),t._v(" "),n("feBlend",{attrs:{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_442_91721",result:"shape"}})],1)])])}),[],!1,null,null,null);e.default=component.exports},287:function(t,e,n){"use strict";n.r(e);var r=n(2),o=n(244),l=n(259),c=r.a.extend({name:"Link",components:{BoxContainer:o.default,ExternalLink:l.default},props:{link:{type:Object,default:function(){return{name:"",url:""}}}}}),d=n(16),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col items-center"},[n("BoxContainer",{staticClass:"border-black border wv-font-anuphan mb-3"},[n("ExternalLink",{staticClass:"wv-font-anuphan wv-font-bold wv-u4 text-ultramarine underline",attrs:{url:t.link.url}},[t._v("\n      "+t._s(t.link.name)+"\n    ")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ExternalLink:n(259).default})},288:function(t,e,n){"use strict";n.r(e);n(49),n(24),n(72);var r=n(2),o=n(244),l=n(276),c=r.a.extend({name:"Timeline",components:{BoxContainer:o.default,TimelineArrow:l.default},props:{timeline:{type:Object,default:function(){return{label:"",from:""}}},isLastItem:{type:Boolean,default:!1}},methods:{formatDate:function(t){var e=t.split("-").map((function(t){return parseInt(t,10)}));return 2===e.length?new Date(e[0],e[1]-1,1).toLocaleDateString("th-TH",{year:"numeric",month:"long"}):3===e.length?new Date(e[0],e[1]-1,e[2]).toLocaleDateString("th-TH",{year:"numeric",month:"long",day:"numeric"}):""}}}),d=n(16),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col items-center"},[n("BoxContainer",{staticClass:"bg-ultramarine text-white"},[n("p",{staticClass:"wv-u5 wv-font-anuphan"},[n("span",[t._v(t._s(t.formatDate(t.timeline.from)))]),t._v(" "),t.timeline.to?n("span",[t._v("- "+t._s(t.formatDate(t.timeline.to)))]):t._e()]),t._v(" "),n("p",{staticClass:"wv-b5 wv-font-baijamjuri"},[t._v(t._s(t.timeline.label))])]),t._v(" "),t.isLastItem?t._e():n("TimelineArrow",{staticClass:"p-2"})],1)}),[],!1,null,null,null);e.default=component.exports},289:function(t,e,n){"use strict";n.r(e);var r=n(2),o=n(244),l=r.a.extend({name:"NCPO",components:{BoxContainer:o.default}}),c=n(16),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("BoxContainer",{staticClass:"bg-ultramarine text-white wv-font-anuphan mt-3"},[n("p",{staticClass:"wv-u4 wv-font-bold"},[t._v("หมายเหตุ : โครงการต่อยอดจากรัฐบาลคสช.")]),t._v(" "),n("p",{staticClass:"wv-u5 pt-2"},[t._v("\n    เป็นนโยบายหรือโครงการที่มีการดำเนินการมาอยู่แล้วตั้งแต่สมัย\n    รัฐบาลคณะรักษาความสงบแห่งชาติ(คสช.) แล้วพรรค\n    การเมือง/รัฐบาลนำมาสานต่อทำต่อเนื่องมา ไม่ได้เริ่มทำ\n    เมื่อได้รับการแต่งตั้งเป็นรัฐบาล เมื่อวันที่ 10 กรกฎาคม พ.ศ. 2562\n  ")])])}),[],!1,null,null,null);e.default=component.exports},291:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));n(28),n(33),n(103);var r="Promise Tracker",o="สำรวจ รับรู้ ร่วมติดตาม ให้พรรคการเมืองทำตามคำสัญญาที่ให้ไว้กับเรา",l="https://raw.githubusercontent.com/wevisdemo/promise-tracker/main/static/og/default.jpg",c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.pageName,n=t.description,c=void 0===n?o:n,d=t.image,image=void 0===d?l:d,title=e?"".concat(e," - ").concat(r):r;return{title:title,meta:[{hid:"description",name:"description",content:c},{hid:"og-title",property:"og:title",content:title},{hid:"og-description",property:"og:description",content:c},{hid:"og-image",property:"og:image",content:image},{name:"twitter:card",content:"summary_large_image"}]}}},303:function(t,e,n){"use strict";n.r(e);var r=n(2),o=n(304),l=n(305),c=r.a.extend({name:"PromiseCard",components:{SingleCard:o.default,ExpandedCard:l.default},props:{promise:{type:Object,default:function(){return{}}},openState:{type:Boolean,default:!1}},data:function(){return{readMoreState:this.$props.openState}},methods:{handleReadClick:function(t){this.readMoreState=t}}}),d=n(16),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full",attrs:{id:"promise-card-"+t.promise.id}},[n("SingleCard",{attrs:{openState:t.openState,promise:t.promise},on:{readmore:function(e){return t.handleReadClick(e)}}}),t._v(" "),n("ExpandedCard",{attrs:{expanded:t.readMoreState,promise:t.promise}})],1)}),[],!1,null,null,null);e.default=component.exports},304:function(t,e,n){"use strict";n.r(e);n(103);var r=n(2),o=n(273),l=n(286),c=n(267),d=n(241),m=r.a.extend({name:"SingleCard",components:{StatusLegend:c.default,WvSharer:o.a,IconUp:l.default},props:{promise:{type:Object,default:function(){return{}}},openState:{type:Boolean,default:!1}},data:function(){return{clicked:this.$props.openState,isMounted:!1,shareUrl:""}},mounted:function(){this.shareUrl="".concat(location.origin).concat(this.$config.path.base,"/promises/").concat(this.$props.promise.id),this.isMounted=!0},methods:{onReadClick:function(){this.clicked=!this.clicked,this.$emit("readmore",this.clicked)},getStatus:function(t){return d.d.get(t)},getTopic:function(t){var e;return null===(e=d.f.get(t))||void 0===e?void 0:e.short}}}),f=n(16),component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col bg-white rounded-lg border border-white overflow-hidden",attrs:{id:"single-card-"+t.promise.id}},[n("div",{staticClass:"h-2 mb-3",class:"bg-status-"+t.promise.status,attrs:{id:"single-card-"+t.promise.id+"-status-color"}}),t._v(" "),n("div",{staticClass:"flex justify-between"},[n("div",[n("div",{staticClass:"bg-gray bg-opacity-10 rounded w-max p-2 ml-3"},[n("StatusLegend",{attrs:{"show-detail":!1,"show-only":t.promise.status?t.getStatus(t.promise.status):"ไม่พบข้อมูล"}})],1),t._v(" "),n("h2",{staticClass:"wv-h10 wv-font-kondolar wv-font-black px-3 py-4",attrs:{id:"single-card-"+t.promise.id+"-title"}},[t._v("\n        "+t._s(t.promise.title)+"\n      ")])]),t._v(" "),n("div",{staticClass:"w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex-shrink-0 mr-3 mb-3"},[n("img",{staticClass:"rounded-sm overflow-hidden h-full w-full object-cover",attrs:{id:"single-card-"+t.promise.id+"-thumbnail",src:t.promise.imageUrl,alt:"thumbnail-"+t.promise.id}})])]),t._v(" "),n("div",{staticClass:"flex divide-x-2 divide-gray pb-4 wv-font-anuphan wv-u4 wv-font-bold"},[n("div",{staticClass:"flex px-3"},[n("div",{staticClass:"w-4 mr-2"},[n("img",{attrs:{id:"single-card-"+t.promise.id+"-topic-icon",src:t.$config.path.images+"/topic/"+t.promise.topic+".png",alt:""+t.promise.topic}})]),t._v(" "),n("p",{attrs:{id:"single-card-"+t.promise.id+"-topic-name"}},[t._v("\n        "+t._s(t.getTopic(t.promise.topic))+"\n      ")])]),t._v(" "),n("div",{staticClass:"flex px-3"},[n("div",{staticClass:"w-4 mr-2"},[n("img",{attrs:{id:"single-card-"+t.promise.id+"-party-logo",src:t.$config.path.images+"/party/"+t.promise.party+".jpg",alt:""+t.promise.party}})]),t._v(" "),n("p",{attrs:{id:"single-card-"+t.promise.id+"-party-name"}},[t._v("\n        "+t._s(t.promise.party)+"\n      ")])])]),t._v(" "),n("div",{staticClass:"flex justify-between bg-black text-white wv-font-anuphan wv-u4 wv-font-bold px-1 py-2"},[n("button",{staticClass:"flex items-center",attrs:{id:"single-card-"+t.promise.id+"-readmore"},on:{click:t.onReadClick}},[n("p",{staticClass:"px-3"},[t._v("\n        "+t._s(t.clicked?"ปิด":"อ่านเพิ่มเติม")+"\n      ")]),t._v(" "),n("IconUp",{class:t.clicked?"":"transform rotate-180"})],1),t._v(" "),n("div",{staticClass:"flex items-center"},[n("p",{staticClass:"hidden sm:block"},[t._v("แชร์คำสัญญา")]),t._v(" "),t.isMounted?n("WvSharer",{staticClass:"mr-3",attrs:{label:" ","allow-copy-link":!0,light:!0,outline:!0,url:t.shareUrl}}):t._e()],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:n(101).default})},305:function(t,e,n){"use strict";n.r(e);var r=n(2),o=n(244),l=n(287),c=n(288),d=n(289),m=r.a.extend({name:"ExpandedCard",components:{BoxContainer:o.default,Link:l.default,Timeline:c.default,NCPO:d.default},props:{expanded:{type:Boolean,default:!1},promise:{type:Object,default:function(){return{}}}}}),f=n(16),component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.expanded?n("div",{staticClass:"grid bg-white px-6 py-3 rounded-lg overflow-hidden",class:t.promise.timelines.length>0?"sm:grid-cols-2":"sm:grid-cols-1",attrs:{id:"expanded-card-"+t.promise.id}},[n("div",[n("h2",{staticClass:"wv-h10 wv-font-kondolar wv-font-black py-4"},[t._v("รายละเอียด")]),t._v(" "),n("p",{staticClass:"wv-font-baijamjuri wv-b5",attrs:{id:"expanded-card-"+t.promise.id+"-description"}},[t._v("\n      "+t._s(t.promise.description)+"\n    ")]),t._v(" "),t.promise.isNCPO?n("NCPO"):t._e(),t._v(" "),n("h2",{staticClass:"wv-h10 wv-font-kondolar wv-font-black py-4"},[t._v("\n      ลิงก์ / ข้อมูลที่เกี่ยวข้อง\n    ")]),t._v(" "),n("BoxContainer",{staticClass:"border-black border mb-3"},[n("img",{attrs:{id:"expanded-card-"+t.promise.id+"-image",src:t.promise.imageUrl,alt:"image-"+t.promise.id}})]),t._v(" "),t.promise.links.length>0?n("div",t._l(t.promise.links,(function(link,e){return n("Link",{key:"promise-"+t.promise.id+"-link-"+e,attrs:{link:link}})})),1):t._e()],1),t._v(" "),t.promise.timelines.length>0?n("div",{staticClass:"sm:pl-6 pb-3"},[n("h2",{staticClass:"timeline wv-h10 wv-font-kondolar wv-font-black py-4"},[t._v("\n      ไทม์ไลน์\n    ")]),t._v(" "),t._l(t.promise.timelines,(function(e,r){return n("Timeline",{key:"promise-"+t.promise.id+"-timeline-"+r,attrs:{timeline:e,"is-last-item":r===t.promise.timelines.length-1}})}))],2):t._e()]):t._e()}),[],!1,null,null,null);e.default=component.exports},330:function(t,e,n){"use strict";n.r(e),n.d(e,"matchedPromise",(function(){return o})),n.d(e,"titleText",(function(){return l})),n.d(e,"descriptionMap",(function(){return c})),n.d(e,"imageUrl",(function(){return d}));n(48),n(13),n(103),n(245),n(26),n(246),n(247),n(248),n(249),n(250),n(251),n(252),n(253),n(254),n(255),n(256),n(257),n(258),n(27);var r=n(241),o=function(t,e){return t.filter((function(t){return t.id===e}))[0]},l=function(title,t){return"โครงการ".concat(title," โดยพรรค").concat(t)},c=new Map([[r.a.NoData,"คำสัญญานี้ยังไม่พบข้อมูล ขอ(ทวง)ถามพรรคการเมืองถึงข้อมูลและการดำเนินการเกี่ยวกับคำสัญญานี้"],[r.a.Proposed,"คำสัญญานี้ถูกเสนอต่อสภา ร่วมจับตา รอดูผล ของคำสัญญานี้...ว่าได้ไปต่อไหม ?"],[r.a.Paused,"น่าเศร้า !! คำสัญญานี้ถูกระงับไว้ ร่วมแชร์ให้คำสัญญาได้ไปต่อกัน"],[r.a.Working,"คำสัญญานี้กำลังดำเนินการอยู่ บอกต่อให้ทุกคนมาลุ้นไปพร้อมๆกันว่าใกล้แล้ว!!"],[r.a.Done,"คำสัญญานี้ทำได้สำเร็จ บอกต่อให้ทุกคนดู นี่คือคำสัญญาที่พูดแล้วทำจริง!!"]]),d=function(t,e){return"".concat(t,"/").concat(e,".jpg")}},331:function(t,e,n){var content=n(342);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(59).default)("85642ce8",content,!0,{sourceMap:!1})},341:function(t,e,n){"use strict";n(331)},342:function(t,e,n){var r=n(58)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.blog-header[data-v-f144fa8e]{\n  display:flex;\n  height:7rem;\n  width:100%;\n  align-items:center;\n  justify-content:center;\n  background-image:linear-gradient(to bottom, var(--tw-gradient-stops));\n  --tw-gradient-from:#3904E9;\n  --tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(57, 4, 233, 0));\n  --tw-gradient-to:transparent;\n  padding:1rem;\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity))\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},353:function(t,e,n){"use strict";n.r(e);var r=n(2),o=n(330),l=n(314),c=n(303),d=n(271),m=n(280),f=n(291),v=r.a.extend({name:"PromisePage",components:{PromiseCard:c.default,LinkBanner:d.default,FormLink:m.default},data:function(){return{slug:this.$route.params}},head:function(){if(!this.promise)return Object(f.a)();var t=this.promise,title=t.title,e=t.party,n=t.status;return Object(f.a)({pageName:Object(o.titleText)(title,e),description:o.descriptionMap.get(n),image:Object(o.imageUrl)("https://raw.githubusercontent.com/wevisdemo/promise-tracker/main/static/og",n)})},computed:{id:function(){return parseInt(this.slug.id,10)},promise:function(){return Object(o.matchedPromise)(l,this.id)}}}),h=(n(341),n(16)),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col items-center z-10 bg-no-repeat bg-fixed bg-cover",style:{backgroundImage:"url("+t.$config.path.images+"/background/blog_bg.png)"}},[n("div",{staticClass:"blog-header wv-font-kondolar wv-h10"},[n("img",{staticClass:"w-16 h-16 mr-3",attrs:{src:t.$config.path.images+"/status/default.png",alt:"promise-logo"}}),t._v(" "),t._m(0)]),t._v(" "),n("div",{staticClass:"mt-10 sm:mt-20 grid gap-6 max-w-4xl justify-items-center px-2 sm:px-6"},[t.promise?n("PromiseCard",{staticClass:"shadow-2xl",attrs:{"open-state":!0,promise:t.promise}}):t._e(),t._v(" "),n("LinkBanner",{attrs:{theme:"ultramarine","icon-image":"article/explore.png","title-text":"PROMISE TRACKER","body-text":"สำรวจคำสัญญาของพรรคการเมืองที่ผ่านมารักษาคำสัญญาได้แค่ไหน ?","button-text":"ดูคำสัญญา","button-url":"/explore"}}),t._v(" "),n("LinkBanner",{attrs:{theme:"ultramarine","icon-image":"article/article.png","title-text":"วิธีตรวจสอบคำสัญญา","body-text":"หากนัก/พรรคการเมืองที่ได้เข้าไปเป็น รัฐบาล แล้วไม่ทำตามสัญญา มีกระบวนการตรวจ สอบอย่างไรบ้าง","button-text":"อ่านเพิ่มเติม","button-url":"/guide"}}),t._v(" "),n("FormLink")],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticClass:"wv-font-bold"},[t._v("PROMISE TRACKER")]),t._v(" "),n("h2",[t._v("สำรวจคำสัญญาของพรรคการเมืองที่ผ่านมารักษาคำสัญญาได้แค่ไหน ?")])])}],!1,null,"f144fa8e",null);e.default=component.exports;installComponents(component,{PromiseCard:n(303).default,LinkBanner:n(271).default,FormLink:n(280).default})}}]);