"use strict";(self.webpackChunkrecruit_manage=self.webpackChunkrecruit_manage||[]).push([[0],{5073:function(n,e,t){var r=t(2791),i=t(7309),a=t(8081),u=t(7689),o=t(184),c=function(n){var e,t=(0,u.s0)(),c=null===(e=n.showHeader)||void 0===e||e,s=(0,r.useCallback)((function(n){t("/detail/".concat(n.id))}),[]),l=[{title:"\u540d\u5b57",dataIndex:"username",key:"username",filterMode:"tree"},{title:"\u6027\u522b",key:"sex",dataIndex:"sex"},{title:"\u5b66\u53f7",key:"studentId",dataIndex:"studentId"},{title:"\u624b\u673a\u53f7\u7801",key:"phone",dataIndex:"phone"},{title:"\u5b66\u9662",key:"college",dataIndex:"college"},{title:"\u4e13\u4e1a",key:"major",dataIndex:"major"},{title:"\u72b6\u6001",key:"status",dataIndex:"status"},{title:"\u8fdb\u5165\u8be6\u60c5",key:"index",render:function(n){return(0,o.jsx)(i.ZP,{onClick:function(){return s(n)},type:"primary",children:"\u8fdb\u5165\u8be6\u60c5"})}}];return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(a.Z,{columns:l,dataSource:n.infoData,rowKey:"id",showHeader:c,loading:null===n||void 0===n?void 0:n.loading,pagination:!1})})};e.Z=(0,r.memo)(c)},8e3:function(n,e,t){t.r(e),t.d(e,{default:function(){return v}});var r,i=t(9439),a=t(2791),u=t(3720),o=t(8185),c=t(2835),s=t(7309),l=t(7689),d=t(168),f=t(2360).ZP.div(r||(r=(0,d.Z)(["\n  text-align: right;\n  .area {\n    display: flex;\n    justify-content: space-between;\n    height: 30px;\n    margin-bottom: 30px;\n    .search-form {\n      display: flex;\n\n      .submit-btn {\n        margin-left: 15px;\n      }\n    }\n  }\n  .tips {\n    display: inline-block;\n    margin: 20px 0;\n    padding: 10px 10px;\n    text-align: left;\n    border-radius: 10px;\n    color: #fff;\n    background-color: rgba(0, 21, 41, 0.7);\n    cursor: default;\n  }\n"]))),m=t(8618),p=t(1687),g=t(5073),h=t(184),x=function(){var n=(0,a.useState)([]),e=(0,i.Z)(n,2),t=e[0],r=e[1],d=(0,l.UO)(),x=(0,p.f)((function(n){console.log(n),void 0!==n.username&&""!==n.username?(0,m.Im)(n).then((function(n){200===n.code&&null!==n.data?(r([n.data]),u.ZP.success(n.message)):(r([]),u.ZP.error(n.message+",\u8bf7\u8f93\u5165\u5168\u540d"))})):v()}),1e3);(0,a.useEffect)((function(){v()}),[d]);var v=function(){(0,m.JT)(d.direction).then((function(n){r(n.data)}))};return(0,h.jsxs)(f,{children:[(0,h.jsxs)("div",{className:"area",children:[(0,h.jsx)("div",{className:"search",children:(0,h.jsxs)(o.Z,{className:"search-form",onFinish:x,children:[(0,h.jsx)(o.Z.Item,{name:"username",children:(0,h.jsx)(c.Z,{placeholder:"\u8bf7\u8f93\u5165\u5b8c\u6574\u7684\u59d3\u540d"})}),(0,h.jsx)(o.Z.Item,{children:(0,h.jsx)(s.ZP,{type:"primary",htmlType:"submit",className:"submit-btn",children:"\u641c\u7d22"})})]})}),(0,h.jsx)("div",{className:"btn",children:(0,h.jsx)(s.ZP,{onClick:v,children:"\u5237\u65b0\u6570\u636e"})})]}),(0,h.jsx)(g.Z,{infoData:t})]})},v=(0,a.memo)(x)},1687:function(n,e,t){t.d(e,{f:function(){return i}});var r=t(2791);function i(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],i=(0,r.useRef)({fn:n,timer:null}).current;return(0,r.useEffect)((function(){i.fn=n}),[n]),(0,r.useCallback)((function(){if(!i.timer){var n;i.timer=setTimeout((function(){delete i.timer}),e);for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];(n=i.fn).call.apply(n,[this].concat(r))}}),t)}},8618:function(n,e,t){t.d(e,{iX:function(){return g},nF:function(){return h},CI:function(){return Z},zN:function(){return k},JT:function(){return d},YG:function(){return m},$Y:function(){return j},WU:function(){return y},y7:function(){return I},Im:function(){return f},sz:function(){return x},x4:function(){return l},Gm:function(){return b},Jv:function(){return T},EP:function(){return v},d:function(){return w},lf:function(){return p}});var r=t(1413),i=t(5671),a=t(3144),u=t(1243),o=!1,c=[],s=new(function(){function n(e){var t=this;(0,i.Z)(this,n),this.instance=void 0,this.instance=u.Z.create(e),this.instance.interceptors.request.use((function(n){if(null!==localStorage.getItem("token")){var e=localStorage.getItem("token");n.headers.token="".concat(e)}else console.log("\u5220\u9664 token \u4e86"),delete n.headers.Authorization;return n}),(function(n){return n})),this.instance.interceptors.response.use((function(n){var e=n.data,r=e.code,i=e.message;if(500===r&&"token\u65e0\u6548!\u8bf7\u91cd\u65b0\u767b\u5f55!"===i){var a=n.config;return o?new Promise((function(n){c.push((function(e){a.headers.token=e,n(t.instance.request(a))}))})):(o=!0,v().then((function(n){var e=n.data;return localStorage.setItem("token",e),console.log("token\u8bbe\u7f6e\u5b8c\u6bd5"),a.headers.token=e,c.forEach((function(n){return n(e)})),c=[],t.instance.request(a)})).catch((function(n){console.log("reflashtoken error = >",n),window.location.href="/Login"})).finally((function(){o=!1})))}return n.data}),(function(n){return Promise.reject(n)}))}return(0,a.Z)(n,[{key:"request",value:function(n){return this.instance.request(n)}},{key:"get",value:function(n){return this.request((0,r.Z)((0,r.Z)({},n),{},{method:"GET"}))}},{key:"post",value:function(n){return this.request((0,r.Z)((0,r.Z)({},n),{},{method:"POST"}))}},{key:"delete",value:function(n){return this.request((0,r.Z)((0,r.Z)({},n),{},{method:"DELETE"}))}}]),n}())({baseURL:"https://www.yidongmall.cn",timeout:1e4});function l(n){return s.post({url:"/api/admin/login/pw",params:n})}function d(n){return s.get({url:"/api/admin/orderBy/".concat(n)})}function f(n){return s.get({url:"/api/admin/getUserInfoByName?username=".concat(n.username)})}function m(n){return s.get({url:"/api/admin/getAllTimeByDir/".concat(n)})}function p(n){return s.post({url:"/api/admin/updateTime",data:n})}function g(n){return s.post({url:"/api/admin/addTime",data:n})}function h(n){return s.get({url:"/api/admin/deleteTime/".concat(n)})}function x(n){return s.get({url:"/api/admin/getUserInfoById",params:{id:n}})}function v(){var n=localStorage.getItem("username"),e=localStorage.getItem("password");return s.post({url:"/api/admin/login/pw",params:{username:n,password:e}})}function k(n){return s.get({url:"/api/admin/ifSec/".concat(n)})}function y(){return s.get({url:"/api/admin/getPreRecruitTime"})}function Z(n){return s.get({url:"/api/admin/changeRecruitTime/".concat(n)})}function I(n){return s.get({url:"/api/admin/getThisTimeDelInfo/".concat(n)})}function w(n,e){return s.get({url:"/api/admin/setAssess/".concat(n),params:{assess:e}})}function j(n){return s.get({url:"/api/admin/getNow/".concat(n)})}function b(n,e){return void 0===e?s.get({url:"/api/admin/getNext/".concat(n,"/0")}):s.get({url:"/api/admin/getNext/".concat(n,"/").concat(e)})}function T(n){return s.post({url:"/api/admin/push/interview/".concat(n)})}}}]);
//# sourceMappingURL=0.99de7c2c.chunk.js.map