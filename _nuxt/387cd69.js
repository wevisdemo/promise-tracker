(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{239:function(e,t,C){"use strict";C.r(t);C(48),C(13),C(23);var l=C(2).a.extend({name:"StatusLegend",props:{showDetail:{type:Boolean,default:!0},showInline:{type:Boolean,default:!1},showOnly:{type:String,default:""}},data:function(){return{dataArray:[{id:0,icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24 12C24 15.1826 22.7357 18.2348 20.4853 20.4853C18.2348 22.7357 15.1826 24 12 24C8.8174 24 5.76516 22.7357 3.51472 20.4853C1.26428 18.2348 0 15.1826 0 12C0 8.8174 1.26428 5.76516 3.51472 3.51472C5.76516 1.26428 8.8174 0 12 0C15.1826 0 18.2348 1.26428 20.4853 3.51472C22.7357 5.76516 24 8.8174 24 12ZM12 6C11.8104 6.00011 11.6229 6.03993 11.4497 6.11689C11.2764 6.19386 11.1212 6.30626 10.994 6.44687C10.8668 6.58747 10.7705 6.75316 10.7113 6.93325C10.652 7.11334 10.6311 7.30385 10.65 7.4925L11.175 12.753C11.1926 12.9597 11.2872 13.1522 11.44 13.2925C11.5927 13.4327 11.7926 13.5106 12 13.5106C12.2074 13.5106 12.4073 13.4327 12.56 13.2925C12.7128 13.1522 12.8074 12.9597 12.825 12.753L13.35 7.4925C13.3689 7.30385 13.348 7.11334 13.2887 6.93325C13.2295 6.75316 13.1332 6.58747 13.006 6.44687C12.8788 6.30626 12.7236 6.19386 12.5503 6.11689C12.3771 6.03993 12.1896 6.00011 12 6ZM12.003 15C11.6052 15 11.2236 15.158 10.9423 15.4393C10.661 15.7206 10.503 16.1022 10.503 16.5C10.503 16.8978 10.661 17.2794 10.9423 17.5607C11.2236 17.842 11.6052 18 12.003 18C12.4008 18 12.7824 17.842 13.0637 17.5607C13.345 17.2794 13.503 16.8978 13.503 16.5C13.503 16.1022 13.345 15.7206 13.0637 15.4393C12.7824 15.158 12.4008 15 12.003 15Z" fill="#8F8F8F"/></svg>',name:"ไม่พบข้อมูล",description:"ไม่พบข้อมูล แผนงาน ในการดำเนินการคำสัญญา"},{id:1,icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="24" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM19.2547 12.6757L14.7413 15.9978C14.2631 16.2802 13.65 15.9393 13.65 15.3712V14.2428H6V9.85535H13.65V8.72697C13.6496 8.59904 13.683 8.47326 13.7469 8.36245C13.8109 8.25163 13.903 8.15972 14.014 8.09606C14.125 8.0324 14.2508 7.99926 14.3788 8.00001C14.5067 8.00077 14.6322 8.03539 14.7424 8.10035L19.2547 11.4225C19.3637 11.4868 19.4539 11.5785 19.5166 11.6884C19.5793 11.7983 19.6123 11.9226 19.6123 12.0491C19.6123 12.1756 19.5793 12.2999 19.5166 12.4098C19.4539 12.5197 19.3637 12.6114 19.2547 12.6757Z" fill="#FD9154"/></svg>',name:"ถูกเสนอต่อสภา",description:"การยื่นเรื่องเข้าพิจารณาตราเป็นกฎหมายหรือให้มีผลต่อสภาแล้ว ซึ่งส่วนมากใช้กับฝ่ายค้านเพราะเนื่องจากบทบาทของฝ่ายค้านน้อยกว่ารัฐบาลและเรื่องที่เสนอ สามารถถูกปัดตกได้ง่าย ทำให้การดำเนินการตามสัญญาไม่ค่อยได้ไปต่อ ดังนั้นการพยายามผลักดันหรือยื่นเรื่องต่อสภาให้พิจารณาเป็นบทบาทของการขับเคลื่อนคำสัญญาให้ไปต่อ"},{id:2,icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM6 8C6 7.44772 6.44772 7 7 7H10C10.5523 7 11 7.44772 11 8V16C11 16.5523 10.5523 17 10 17H7C6.44772 17 6 16.5523 6 16V8ZM13 8C13 7.44772 13.4477 7 14 7H17C17.5523 7 18 7.44772 18 8V16C18 16.5523 17.5523 17 17 17H14C13.4477 17 13 16.5523 13 16V8Z" fill="#E91E63"/></svg>',name:"ถูกระงับ",description:"ส่วนใหญ่จะเป็นกรณีพิเศษที่ทำให้คำสัญญานั้นถูกระงับไป ยังไม่ได้ทำต่อ หยุดไว้ก่อน เช่น ไม่มีงบ กรณีพรรคโดนยุบ"},{id:3,icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM10.495 5.39L10.595 5.05C11.008 3.65 12.992 3.65 13.405 5.05L13.505 5.39C13.5667 5.59959 13.6745 5.79272 13.8206 5.95521C13.9667 6.11771 14.1472 6.24544 14.3491 6.32906C14.551 6.41268 14.769 6.45006 14.9872 6.43846C15.2053 6.42685 15.4182 6.36656 15.61 6.262L15.921 6.093C17.203 5.394 18.606 6.797 17.908 8.08L17.738 8.39C17.6334 8.58185 17.5731 8.79466 17.5615 9.01285C17.5499 9.23103 17.5873 9.44904 17.6709 9.6509C17.7546 9.85275 17.8823 10.0333 18.0448 10.1794C18.2073 10.3255 18.4004 10.4333 18.61 10.495L18.95 10.595C20.35 11.008 20.35 12.992 18.95 13.405L18.61 13.505C18.4004 13.5667 18.2073 13.6745 18.0448 13.8206C17.8823 13.9667 17.7546 14.1472 17.6709 14.3491C17.5873 14.551 17.5499 14.769 17.5615 14.9872C17.5731 15.2053 17.6334 15.4182 17.738 15.61L17.907 15.921C18.606 17.203 17.203 18.606 15.92 17.908L15.61 17.738C15.4182 17.6334 15.2053 17.5731 14.9872 17.5615C14.769 17.5499 14.551 17.5873 14.3491 17.6709C14.1472 17.7546 13.9667 17.8823 13.8206 18.0448C13.6745 18.2073 13.5667 18.4004 13.505 18.61L13.405 18.95C12.992 20.35 11.008 20.35 10.595 18.95L10.495 18.61C10.4333 18.4004 10.3255 18.2073 10.1794 18.0448C10.0333 17.8823 9.85275 17.7546 9.6509 17.6709C9.44904 17.5873 9.23103 17.5499 9.01285 17.5615C8.79466 17.5731 8.58185 17.6334 8.39 17.738L8.079 17.907C6.797 18.606 5.394 17.203 6.092 15.92L6.262 15.61C6.36656 15.4182 6.42685 15.2053 6.43846 14.9872C6.45006 14.769 6.41268 14.551 6.32906 14.3491C6.24544 14.1472 6.11771 13.9667 5.95521 13.8206C5.79272 13.6745 5.59959 13.5667 5.39 13.505L5.05 13.405C3.65 12.992 3.65 11.008 5.05 10.595L5.39 10.495C6.285 10.231 6.708 9.21 6.262 8.39L6.093 8.079C5.394 6.797 6.797 5.394 8.08 6.092L8.39 6.262C8.58185 6.36656 8.79466 6.42685 9.01285 6.43846C9.23103 6.45006 9.44904 6.41268 9.6509 6.32906C9.85275 6.24544 10.0333 6.11771 10.1794 5.95521C10.3255 5.79272 10.4333 5.59959 10.495 5.39ZM14.0718 14.0718C13.5223 14.6213 12.7771 14.93 12 14.93V14.928C11.2232 14.928 10.4782 14.6194 9.92888 14.0701C9.37959 13.5208 9.071 12.7758 9.071 11.999C9.071 11.2222 9.37959 10.4772 9.92888 9.92788C10.4782 9.37859 11.2232 9.07 12 9.07C12.7771 9.07 13.5223 9.3787 14.0718 9.92818C14.6213 10.4777 14.93 11.2229 14.93 12C14.93 12.7771 14.6213 13.5223 14.0718 14.0718Z" fill="#F4C51F"/></svg>',name:"กำลังดำเนินการ",description:"กำลังดำเนินการยังไม่สำเร็จ ถึงแม้จะเริ่มเป็นบางพื้นที่ แบ่งช่วงระยะ หรือทำสัญญาแต่เริ่มมีการดำเนินการ แล้ว จัดเป็นดำเนินการ อีกทั้งสัญญาที่ดำเนินการแล้ว แต่ไม่ได้ตามเป้าหมายที่ให้สัญญา จัดเป็นกำลังดำเนินการเช่นกัน ไม่จัดเป็นสำเร็จ"},{id:4,icon:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM17.6969 9.99725C18.1372 9.50191 18.0926 8.74342 17.5972 8.30312C17.1019 7.86282 16.3434 7.90744 15.9031 8.40278L10.4 14.5938L8.0969 12.0028C7.6566 11.5074 6.89812 11.4628 6.40278 11.9031C5.90744 12.3434 5.86282 13.1019 6.30312 13.5972L7.90312 15.3972L9.50312 17.1973C9.73084 17.4534 10.0572 17.6 10.4 17.6C10.7428 17.6 11.0692 17.4534 11.2969 17.1973L17.6969 9.99725Z" fill="#48DBDB"/></svg>',name:"สำเร็จ",description:"ดำเนินการสำเร็จตามที่ให้สัญญาไว้"}]}},computed:{propsClass:function(){return this.showDetail?"w-24 mb-2":this.showInline?"":"w-24"},selectedLegend:function(){var e=this;return""!==this.showOnly?this.dataArray.filter((function(data){return data.name===e.showOnly})):this.dataArray}}}),n=C(16),component=Object(n.a)(l,(function(){var e=this,t=e.$createElement,C=e._self._c||t;return C("div",{class:e.showInline?"flex":"",attrs:{"data-testid":"status-legend-container"}},e._l(e.selectedLegend,(function(data){return C("div",{key:data.id,staticClass:"flex flex-col md:flex-row text-white",class:e.showInline||""!==e.showOnly?"":"mb-4"},[C("div",{staticClass:"flex wv-u4 wv-font-anuphan wv-font-bold"},[C("span",{staticClass:"pr-2",domProps:{innerHTML:e._s(data.icon)}}),e._v(" "),C("span",{staticClass:"mr-2",class:e.propsClass,attrs:{"data-testid":"status-legend-text"}},[e._v(e._s(data.name))])]),e._v(" "),e.showDetail?C("p",{staticClass:"wv-b6 wv-font-baijamjuri"},[e._v("\n      "+e._s(data.description)+"\n    ")]):e._e()])})),0)}),[],!1,null,null,null);t.default=component.exports}}]);