(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{239:function(t,n,o){"use strict";o.d(n,"b",(function(){return r})),o.d(n,"a",(function(){return e})),o.d(n,"c",(function(){return c})),o.d(n,"e",(function(){return l})),o.d(n,"f",(function(){return d})),o.d(n,"d",(function(){return f}));var r,e;o(243),o(13),o(26),o(244),o(245),o(246),o(247),o(248),o(249),o(250),o(251),o(252),o(253),o(254),o(255),o(256),o(27);!function(t){t.Equality="equality",t.Security="security",t.Foreign="foreign",t.Administration="administration",t.Culture="culture",t.Economics="economics",t.Environmental="environmental"}(r||(r={})),function(t){t.NoData="nodata",t.Proposed="proposed",t.Paused="paused",t.Working="working",t.Done="done"}(e||(e={}));var c=[e.NoData,e.Proposed,e.Paused,e.Working,e.Done],l=[r.Equality,r.Security,r.Foreign,r.Administration,r.Culture,r.Economics,r.Environmental],d=new Map([[r.Equality,{long:"ความเท่าเทียม/คุณภาพชีวิต",short:"คุณภาพชีวิต"}],[r.Security,{long:"ความมั่นคง/ปกป้องสถาบันกษัตริย์",short:"ความมั่นคง"}],[r.Foreign,{long:"ต่างประเทศ",short:"ต่างประเทศ"}],[r.Administration,{long:"บริหารจัดการ(ราชการ)",short:"บริหารจัดการ"}],[r.Culture,{long:"ศาสนาและวัฒนธรรม",short:"ศาสนาและวัฒนธรรม"}],[r.Economics,{long:"เศรษฐกิจ",short:"เศรษฐกิจ"}],[r.Environmental,{long:"สิ่งแวดล้อม",short:"สิ่งแวดล้อม"}]]),f=new Map([[e.NoData,"ไม่พบข้อมูล"],[e.Proposed,"ถูกเสนอต่อสภา"],[e.Paused,"ถูกระงับ"],[e.Working,"กำลังดำเนินการ"],[e.Done,"สำเร็จ"]])},240:function(t,n,o){"use strict";var r;o.d(n,"a",(function(){return r})),function(t){t.Party="party",t.Status="status",t.Keyword="keyword",t.Topic="topic"}(r||(r={}))},270:function(t,n,o){var r=o(6),e=o(185).values;r({target:"Object",stat:!0},{values:function(t){return e(t)}})},274:function(t,n,o){"use strict";o.r(n),o.d(n,"groupPromisesBy",(function(){return f}));var r=o(20),e=o(273),c=(o(13),o(103),o(282),o(49),o(184),o(32),o(48),o(266),o(270),o(240)),l=o(239),d=function(t){return t?l.c.reduce((function(n,o){return o in t?[].concat(Object(e.a)(n),[{status:o,count:t[o]}]):n}),[]):[]},f=function(t,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:7,f=n.reduce((function(n,o){var r=o[t];return r in n?n[r].count++:n[r]={isNCPO:!1,count:1,statuses:{}},o.status in n[r].statuses?n[r].statuses[o.status]++:n[r].statuses[o.status]=1,!0===o.isNCPO&&(n[r].isNCPO=!0),n}),{}),v=t===c.a.Party?Object.entries(f).map((function(t){var n=Object(r.a)(t,2),label=n[0],o=n[1];return{label:label,icon:"party/".concat(label,".jpg"),isNCPO:o.isNCPO,data:d(o.statuses)}})).sort((function(a,t){return f[t.label].count-f[a.label].count})):t===c.a.Topic?l.e.map((function(t){var n,o;return{label:null===(n=l.f.get(t))||void 0===n?void 0:n.short,icon:"topic/".concat(t,"_small.png"),data:d(null===(o=f[t])||void 0===o?void 0:o.statuses)}})):l.c.map((function(t){var n;return{label:l.d.get(t),icon:"status/".concat(t,"_small.png"),data:d(null===(n=f[t])||void 0===n?void 0:n.statuses)}}));if(v.length>o){var m=v.slice(o);v=[].concat(Object(e.a)(v.slice(0,o)),[{label:"อื่นๆ",icon:"other-group.png",data:l.c.map((function(t){return{status:t,count:m.reduce((function(n,o){var r;return n+((null===(r=o.data.find((function(n){return n.status===t})))||void 0===r?void 0:r.count)||0)}),0)}})).filter((function(t){return t.count>0}))}])}var y=Object.values(f).map((function(t){return t.count}));return{max:Math.max.apply(Math,Object(e.a)(y)),total:y.reduce((function(t,n){return t+n}),0),charts:v}}}}]);