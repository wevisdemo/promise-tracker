(window.webpackJsonp=window.webpackJsonp||[]).push([[35,23,32],{242:function(e,n,t){"use strict";t.r(n);var l=t(2).a.extend({name:"BoxContainer"}),r=t(16),component=Object(r.a)(l,(function(){var e=this,n=e.$createElement;return(e._self._c||n)("div",{staticClass:"p-3 rounded-md overflow-hidden w-full"},[e._t("default")],2)}),[],!1,null,null,null);n.default=component.exports},257:function(e,n,t){"use strict";t.r(n);var l=t(2).a.extend({name:"ExternalLink",props:{url:{type:String,default:""}}}),r=t(16),component=Object(r.a)(l,(function(){var e=this,n=e.$createElement;return(e._self._c||n)("a",{attrs:{href:e.url,target:"_blank",rel:"noopener noreferrer"}},[e._t("default")],2)}),[],!1,null,null,null);n.default=component.exports},286:function(e,n,t){"use strict";t.r(n);var l=t(2),r=t(242),o=t(257),c=l.a.extend({name:"Link",components:{BoxContainer:r.default,ExternalLink:o.default},props:{link:{type:Object,default:function(){return{name:"",url:""}}}}}),f=t(16),component=Object(f.a)(c,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"flex flex-col items-center"},[t("BoxContainer",{staticClass:"border-black border wv-font-anuphan mb-3"},[t("ExternalLink",{staticClass:"wv-font-anuphan wv-font-bold wv-u4 text-ultramarine underline",attrs:{url:e.link.url}},[e._v("\n      "+e._s(e.link.name)+"\n    ")])],1)],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{ExternalLink:t(257).default})}}]);