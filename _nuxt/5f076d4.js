(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{241:function(t,e,r){"use strict";var n;r.d(e,"a",(function(){return n})),function(t){t.Party="party",t.Status="status",t.Keyword="keyword",t.Topic="topic"}(n||(n={}))},268:function(t,e,r){"use strict";r.r(e),r.d(e,"groupPromisesBy",(function(){return m}));var n=r(22),o=r(291),l=(r(13),r(103),r(281),r(49),r(184),r(32),r(48),r(267),r(282),r(241)),c=r(239),f=[c.a.NoData,c.a.Proposed,c.a.Paused,c.a.Working,c.a.Done],d=[c.b.Equality,c.b.Security,c.b.Foreign,c.b.Administration,c.b.Culture,c.b.Economics,c.b.Environmental],v=function(t){return t?f.reduce((function(e,r){return r in t?[].concat(Object(o.a)(e),[{status:r,count:t[r]}]):e}),[]):[]},m=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:7,m=e.reduce((function(e,r){var n=r[t];return n in e?e[n].count++:e[n]={isNCPO:!1,count:1,statuses:{}},r.status in e[n].statuses?e[n].statuses[r.status]++:e[n].statuses[r.status]=1,!0===r.isNCPO&&(e[n].isNCPO=!0),e}),{}),C=t===l.a.Party?Object.entries(m).map((function(t){var e=Object(n.a)(t,2),label=e[0],r=e[1];return{label:label,icon:"party/".concat(label,".jpg"),isNCPO:r.isNCPO,data:v(r.statuses)}})).sort((function(a,t){return m[t.label].count-m[a.label].count})):t===l.a.Topic?d.map((function(t){var e,r;return{label:null===(e=c.d.get(t))||void 0===e?void 0:e.short,icon:"topic/".concat(t,"_small.png"),data:v(null===(r=m[t])||void 0===r?void 0:r.statuses)}})):f.map((function(t){var e;return{label:c.c.get(t),icon:"status/".concat(t,"_small.png"),data:v(null===(e=m[t])||void 0===e?void 0:e.statuses)}}));if(C.length>r){var y=C.slice(r);C=[].concat(Object(o.a)(C.slice(0,r)),[{label:"อื่นๆ",icon:"other-group.png",data:f.map((function(t){return{status:t,count:y.reduce((function(e,r){var n;return e+((null===(n=r.data.find((function(e){return e.status===t})))||void 0===n?void 0:n.count)||0)}),0)}})).filter((function(t){return t.count>0}))}])}var x=Object.values(m).map((function(t){return t.count}));return{max:Math.max.apply(Math,Object(o.a)(x)),total:x.reduce((function(t,e){return t+e}),0),charts:C}}},283:function(t,e,r){"use strict";r.r(e);r(48),r(13);var n=r(2),filter=r(241),o=r(239),l=n.a.extend({name:"FilterChips",props:{filter:{type:Object,required:!0}},computed:{text:function(){var t,e=this.filter,r=e.type,n=e.value;switch(r){case filter.a.Party:return n;case filter.a.Status:return"สถานะ: ".concat(o.c.get(n));case filter.a.Keyword:return"คำค้นหา: ".concat(n);case filter.a.Topic:return"ประเด็น".concat(null===(t=o.d.get(n))||void 0===t?void 0:t.short);default:return""}}}}),c=r(16),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-row py-1 px-2 bg-gray bg-opacity-10 text-ultramarine space-x-2"},[r("span",{staticClass:"wv-u4 wv-font-semibold"},[t._v(t._s(t.text))]),t._v(" "),r("button",{on:{click:function(e){return t.$emit("remove")}}},[r("svg",{attrs:{width:"10",height:"10",viewBox:"0 0 10 10",fill:"currentColor"}},[r("path",{attrs:{d:"M8.83597 0.664218C8.88836 0.716469 8.92992 0.778542 8.95827 0.84688C8.98663 0.915218 9.00123 0.98848 9.00123 1.06247C9.00123 1.13646 8.98663 1.20972 8.95827 1.27806C8.92992 1.34639 8.88836 1.40847 8.83597 1.46072L0.960972 9.33572C0.85535 9.44134 0.712095 9.50068 0.562722 9.50068C0.41335 9.50068 0.270095 9.44134 0.164472 9.33572C0.0588497 9.2301 -0.00048828 9.08684 -0.000488281 8.93747C-0.000488282 8.78809 0.0588497 8.64484 0.164472 8.53922L8.03947 0.664218C8.09172 0.611834 8.1538 0.570273 8.22214 0.541916C8.29047 0.513559 8.36373 0.498962 8.43772 0.498962C8.51171 0.498962 8.58497 0.513559 8.65331 0.541916C8.72165 0.570273 8.78372 0.611834 8.83597 0.664218V0.664218Z"}}),t._v(" "),r("path",{attrs:{d:"M0.164279 0.664218C0.111895 0.716469 0.0703344 0.778542 0.0419771 0.84688C0.0136199 0.915218 -0.000976562 0.98848 -0.000976562 1.06247C-0.000976562 1.13646 0.0136199 1.20972 0.0419771 1.27806C0.0703344 1.34639 0.111895 1.40847 0.164279 1.46072L8.03928 9.33572C8.1449 9.44134 8.28816 9.50068 8.43753 9.50068C8.5869 9.50068 8.73016 9.44134 8.83578 9.33572C8.9414 9.2301 9.00074 9.08684 9.00074 8.93747C9.00074 8.78809 8.9414 8.64484 8.83578 8.53922L0.960779 0.664218C0.908528 0.611834 0.846455 0.570273 0.778117 0.541916C0.709779 0.513559 0.636517 0.498962 0.562529 0.498962C0.488541 0.498962 0.415279 0.513559 0.346941 0.541916C0.278603 0.570273 0.21653 0.611834 0.164279 0.664218V0.664218Z"}})])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:r(101).default})},284:function(t,e,r){"use strict";r.r(e);r(272),r(13);var n=r(2).a.extend({name:"ChartItem",props:{label:{type:String,required:!0},icon:{type:String,default:""},data:{type:Array,required:!0},max:{type:Number,required:!0},total:{type:Number,required:!0}},computed:{count:function(){return this.data.reduce((function(t,e){return t+e.count}),0)},percentage:function(){return(this.count/this.total*100).toLocaleString("th-TH",{maximumFractionDigits:1})}}}),o=r(16),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-row text-white"},[r("div",{staticClass:"flex-1 flex flex-row items-center space-x-1"},[t.icon?r("img",{staticClass:"w-4 h-4 rounded-full",attrs:{src:t.$config.path.images+"/"+t.icon,alt:t.label}}):t._e(),t._v(" "),r("p",{staticClass:"wv-u5 wv-font-semibold"},[t._v(t._s(t.label)+" ("+t._s(t.count)+")")])]),t._v(" "),r("div",{staticClass:"flex flex-row flex-1 space-x-1 wv-u5 wv-font-semibold items-center"},[r("div",{ref:"barchart",staticClass:"flex flex-row h-5",style:{width:Math.round(t.count/t.max*100)+"%"}},t._l(t.data,(function(e){return r("div",{key:e.status,class:"bg-status-"+e.status,style:{width:Math.round(e.count/t.count*100)+"%"}})})),0),t._v(" "),r("span",[t._v(t._s(t.percentage)+"%")])])])}),[],!1,null,null,null);e.default=component.exports},304:function(t,e,r){"use strict";r.r(e);r(49),r(48),r(13),r(103);var n=r(2),o=r(283),filter=r(241),l=n.a.extend({name:"ActiveFilters",components:{FilterChip:o.default},props:{promises:{type:Array,default:function(){return[]}},filters:{type:Array,default:function(){return[]}}},computed:{filterImages:function(){return 0===this.promises.length?[{type:"default",value:"all",src:"status/notfound.png"}]:0===this.filters.length?[{type:"default",value:"all",src:"status/default.png"}]:this.filters.filter((function(t){return t.type!==filter.a.Keyword})).map((function(t){var e=t.type,r=t.value;return{type:e,value:r,src:"".concat(e,"/").concat(r).concat(e===filter.a.Topic?"_small":"",".").concat(e===filter.a.Party?"jpg":"png")}}))}}}),c=r(16),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex-1 md:h-80 bg-white flex flex-row p-8 space-x-8 items-center justify-center rounded-t-xl md:rounded-bl-xl md:rounded-tr-none"},[r("div",{staticClass:"flex flex-col -space-y-4"},t._l(t.filterImages,(function(e,i){var n=e.type,o=e.value,l=e.src;return r("img",{key:n,staticClass:"rounded-full shadow-xl",class:t.filterImages.length>1?"w-24":"w-32",style:{zIndex:-i},attrs:{src:t.$config.path.images+"/"+l,alt:o}})})),0),t._v(" "),t.promises.length>0?r("div",{staticClass:"flex flex-col space-y-2"},[r("h1",{staticClass:"wv-h8 wv-font-kondolar wv-font-black"},[t._v("\n      สำรวจคำสัญญา พรรคการเมือง\n    ")]),t._v(" "),r("p",{ref:"countLabel",staticClass:"wv-h10 wv-font-kondolar wv-font-black text-ultramarine"},[t._v("\n      "+t._s(t.promises.length)+" คำสัญญา\n    ")]),t._v(" "),t.filters.length>0?r("div",{staticClass:"flex flex-col items-start space-y-1"},t._l(t.filters,(function(filter){return r("FilterChip",{key:filter.type,attrs:{filter:filter},on:{remove:function(e){return t.$emit("removefilter",filter)}}})})),1):r("p",{staticClass:"wv-u4 wv-font-semibold"},[t._v("จากทุกพรรค ในทุกประเด็น")])]):r("div",[r("h1",{staticClass:"wv-h8 wv-font-kondolar wv-font-black"},[t._v("\n      ไม่พบคำสัญญาที่คุณค้นหา\n    ")])])])}),[],!1,null,null,null);e.default=component.exports},305:function(t,e,r){"use strict";r.r(e);r(48),r(13),r(267);var n=r(2),filter=r(241),o=[{label:"ดูตามสถานะ",type:filter.a.Status},{label:"ดูตามพรรค",type:filter.a.Party},{label:"ดูตามประเด็น",type:filter.a.Topic}],l=n.a.extend({name:"TabNavigation",props:{filters:{type:Array,default:function(){return[]}},activeTab:{type:String,default:null}},computed:{displayButtons:function(){var t=this;return o.filter((function(e){var r=e.type;return!t.filters.find((function(filter){return filter.type===r}))}))}}}),c=l,f=r(16),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-row space-x-1 bg-white md:bg-transparent"},t._l(t.displayButtons,(function(e){var label=e.label,n=e.type;return r("button",{key:n,class:"wv-u4 wv-font-semibold text-white w-1/3 px-3 py-2 rounded-t border border-white "+(t.activeTab===n?"bg-ultramarine border-b-0":"bg-black"),on:{click:function(e){return t.$emit("change",n)}}},[t._v("\n    "+t._s(label)+"\n  ")])})),0)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:r(101).default})},306:function(t,e,r){"use strict";r.r(e);var n=r(2),o=r(101),l=r(284),c=r(268),f=n.a.extend({name:"TabBody",components:{Button:o.default,ChartItem:l.default},props:{promises:{type:Array,default:function(){return[]}},groupBy:{type:String,required:!0}},computed:{group:function(){return Object(c.groupPromisesBy)(this.groupBy,this.promises)}}}),d=r(16),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-col p-4 space-y-8 bg-ultramarine rounded-b-xl md:rounded-bl-none h-80"},[r("div",{staticClass:"flex-1 flex flex-col space-y-2 m-2"},t._l(t.group.charts,(function(e){var label=e.label,n=e.icon,data=e.data;return r("ChartItem",{key:label,attrs:{label:label,icon:n,data:data,max:t.group.max,total:t.group.total}})})),1),t._v(" "),r("Button",{staticClass:"justify-center"},[r("svg",{attrs:{width:"15",height:"16",viewBox:"0 0 15 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M6.75 5.74975H8.25V4.24976H6.75V5.74975ZM7.5 13.9998C4.1925 13.9998 1.5 11.3073 1.5 7.99975C1.5 4.69226 4.1925 1.99976 7.5 1.99976C10.8075 1.99976 13.5 4.69226 13.5 7.99975C13.5 11.3073 10.8075 13.9998 7.5 13.9998ZM7.5 0.499756C6.51509 0.499756 5.53981 0.693749 4.62987 1.07066C3.71993 1.44757 2.89314 2.00002 2.1967 2.69645C0.790176 4.10298 0 6.01063 0 7.99975C0 9.98888 0.790176 11.8965 2.1967 13.3031C2.89314 13.9995 3.71993 14.5519 4.62987 14.9289C5.53981 15.3058 6.51509 15.4998 7.5 15.4998C9.48912 15.4998 11.3968 14.7096 12.8033 13.3031C14.2098 11.8965 15 9.98888 15 7.99975C15 7.01484 14.806 6.03957 14.4291 5.12963C14.0522 4.21969 13.4997 3.39289 12.8033 2.69645C12.1069 2.00002 11.2801 1.44757 10.3701 1.07066C9.46018 0.693749 8.48491 0.499756 7.5 0.499756ZM6.75 11.7498H8.25V7.24975H6.75V11.7498Z"}})]),t._v(" "),r("span",[t._v("ข้อมูลเพิ่มเติม")])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:r(101).default})},314:function(t,e,r){"use strict";r.r(e);var n=r(2),o=r(304),l=r(305),c=r(306),filter=r(241),f=n.a.extend({name:"PromiseOverview",components:{TabBody:c.default,TabNavigation:l.default,ActiveFilters:o.default},props:{promises:{type:Array,default:function(){return[]}},filters:{type:Array,default:function(){return[]}}},data:function(){return{activeTab:filter.a.Status}}}),d=r(16),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-col md:flex-row"},[r("div",{staticClass:"flex-1 flex items-end"},[r("ActiveFilters",{attrs:{filters:t.filters,promises:t.promises},on:{removefilter:function(filter){return t.$emit("removefilter",filter)}}})],1),t._v(" "),r("div",{staticClass:"flex-1"},[r("TabNavigation",{attrs:{filters:t.filters,"active-tab":t.activeTab},on:{change:function(e){return t.activeTab=e}}}),t._v(" "),r("TabBody",{attrs:{promises:t.promises,"group-by":t.activeTab}})],1)])}),[],!1,null,null,null);e.default=component.exports},327:function(t,e,r){"use strict";r.r(e);var n=r(2),o=r(314),l=r(303),c=r(275),f=r(325),d=r(239),v=n.a.extend({name:"ExplorePage",components:{PromiseOverview:o.default,PromiseCard:c.default,TopicGroup:f.default},data:function(){return{promises:l,PromiseTopic:d.b,topics:[d.b.Equality,d.b.Security,d.b.Foreign,d.b.Administration,d.b.Culture,d.b.Economics,d.b.Environmental],filteredTopic:""}},methods:{setTopicFilter:function(t){this.filteredTopic=t}}}),m=r(16),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg-black min-h-screen"},[r("h1",[t._v("Explore")]),t._v(" "),r("div",{staticClass:"max-w-screen-lg mx-auto"},[r("PromiseOverview",{attrs:{promises:t.promises,filters:[]}})],1),t._v(" "),r("div",{staticClass:"bg-gray"},t._l(t.promises.slice(93,96),(function(t){return r("PromiseCard",{key:"promise-card-"+t.id,staticClass:"pb-2",attrs:{openState:!1,promise:t}})})),1),t._v(" "),r("div",{staticClass:"bg-black"},t._l(t.promises.slice(96,97),(function(t){return r("PromiseCard",{key:"promise-card-"+t.id,staticClass:"pb-2",attrs:{openState:!0,promise:t}})})),1),t._v(" "),r("div",{staticClass:"bg-gray"},[t._l(t.topics,(function(e){return r("div",{key:"topic-"+e},[""===t.filteredTopic||t.filteredTopic===e?r("TopicGroup",{attrs:{topic:e,promises:t.promises,promisePerPage:t.filteredTopic===e?0:3},on:{viewTopic:function(e){return t.setTopicFilter(e)}}}):t._e()],1)})),t._v(" "),r("button",{staticClass:"border border-black p-2 mt-2",on:{click:function(e){t.filteredTopic=""}}},[t._v("\n      Remove Topic Filter: "+t._s(t.filteredTopic)+"\n    ")])],2)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PromiseCard:r(275).default,Button:r(101).default})}}]);