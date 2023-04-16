"use strict";(self.webpackChunkrecruit_manage=self.webpackChunkrecruit_manage||[]).push([[477],{1687:function(e,n,t){t.d(n,{f:function(){return r}});var i=t(2791);function r(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=(0,i.useRef)({fn:e,timer:null}).current;return(0,i.useEffect)((function(){r.fn=e}),[e]),(0,i.useCallback)((function(){if(!r.timer){var e;r.timer=setTimeout((function(){delete r.timer}),n);for(var t=arguments.length,i=new Array(t),o=0;o<t;o++)i[o]=arguments[o];(e=r.fn).call.apply(e,[this].concat(i))}}),t)}},8618:function(e,n,t){t.d(n,{iX:function(){return p},nF:function(){return g},CI:function(){return y},zN:function(){return Z},JT:function(){return d},YG:function(){return m},$Y:function(){return w},WU:function(){return j},y7:function(){return k},Im:function(){return f},sz:function(){return x},x4:function(){return l},Gm:function(){return I},EP:function(){return v},d:function(){return b},lf:function(){return h}});var i=t(1413),r=t(5671),o=t(3144),a=t(1243),s=!1,u=[],c=new(function(){function e(n){var t=this;(0,r.Z)(this,e),this.instance=void 0,this.instance=a.Z.create(n),this.instance.interceptors.request.use((function(e){if(null!==localStorage.getItem("token")){var n=localStorage.getItem("token");e.headers.token="".concat(n)}else console.log("\u5220\u9664 token \u4e86"),delete e.headers.Authorization;return e}),(function(e){return e})),this.instance.interceptors.response.use((function(e){var n=e.data,i=n.code,r=n.message;if(500===i&&"token\u65e0\u6548!\u8bf7\u91cd\u65b0\u767b\u5f55!"===r){var o=e.config;return s?new Promise((function(e){u.push((function(n){o.headers.token=n,e(t.instance.request(o))}))})):(s=!0,v().then((function(e){var n=e.data;return localStorage.setItem("token",n),console.log("token\u8bbe\u7f6e\u5b8c\u6bd5"),o.headers.token=n,u.forEach((function(e){return e(n)})),u=[],t.instance.request(o)})).catch((function(e){console.log("reflashtoken error = >",e),window.location.href="/Login"})).finally((function(){s=!1})))}return e.data}),(function(e){return Promise.reject(e)}))}return(0,o.Z)(e,[{key:"request",value:function(e){return this.instance.request(e)}},{key:"get",value:function(e){return this.request((0,i.Z)((0,i.Z)({},e),{},{method:"GET"}))}},{key:"post",value:function(e){return this.request((0,i.Z)((0,i.Z)({},e),{},{method:"POST"}))}},{key:"delete",value:function(e){return this.request((0,i.Z)((0,i.Z)({},e),{},{method:"DELETE"}))}}]),e}())({baseURL:"https://www.yidongmall.cn",timeout:1e4});function l(e){return c.post({url:"/api/admin/login/pw",params:e})}function d(e){return c.get({url:"/api/admin/orderBy/".concat(e)})}function f(e){return c.get({url:"/api/admin/getUserInfoByName?username=".concat(e.username)})}function m(e){return c.get({url:"/api/admin/getAllTimeByDir/".concat(e)})}function h(e){return c.post({url:"/api/admin/updateTime",data:e})}function p(e){return c.post({url:"/api/admin/addTime",data:e})}function g(e){return c.get({url:"/api/admin/deleteTime/".concat(e)})}function x(e){return c.get({url:"/api/admin/getUserInfoById",params:{id:e}})}function v(){var e=localStorage.getItem("username"),n=localStorage.getItem("password");return c.post({url:"/api/admin/login/pw",params:{username:e,password:n}})}function Z(e){return c.get({url:"/api/admin/ifSec/".concat(e)})}function j(){return c.get({url:"/api/admin/getPreRecruitTime"})}function y(e){return c.get({url:"/api/admin/changeRecruitTime/".concat(e)})}function k(e){return c.get({url:"/api/admin/getThisTimeDelInfo/".concat(e)})}function b(e,n){return c.get({url:"/api/admin/setAssess/".concat(e),params:{assess:n}})}function w(e){return c.get({url:"/api/admin/getNow/".concat(e)})}function I(e,n){return void 0===n?c.get({url:"/api/admin/getNext/".concat(e,"/0")}):c.get({url:"/api/admin/getNext/".concat(e,"/").concat(n)})}},9477:function(e,n,t){t.r(n),t.d(n,{default:function(){return C}});var i,r=t(9439),o=t(2791),a=t(168),s=t(2360).ZP.div(i||(i=(0,a.Z)(["\n  width: 1200px;\n  min-height: 400px;\n  max-height: 1200px;\n  margin: 0 auto;\n  padding: 20px;\n  box-sizing: border-box;\n  /* background-color: #fff; */\n  display: flex;\n  .basic-info {\n    width: 35%;\n    padding: 20px 30px;\n    background-color: #fff;\n    box-shadow: 0 0 8px 1px #eeeeee;\n    border-radius: 10px;\n  }\n  .edit-info {\n    flex: 1;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    /* height: 100vh; */\n    margin-left: 20px;\n    border-radius: 10px;\n    .status {\n      margin-bottom: 15px;\n    }\n    .step-area {\n      /* height: 10vh; */\n      display: flex;\n      align-items: center;\n    }\n  }\n"]))),u=t(1659),c=t(3720),l=t(7174),d=t(4422),f=t(1645),m=t(6388),h=t(7309),p=t(8185),g=t(2835),x=t(5076),v=t(8618),Z=t(7689),j=t(187),y=t(9372),k=t(830),b=t(9529),w=t(7286),I=t(1687),P=t(184),T=[{key:0,title:"\u62a5\u540d\u6210\u529f"},{key:1,title:"\u7b49\u5f85\u9762\u8bd5"},{key:2,title:"\u6392\u961f\u4e2d"},{key:3,title:"\u9762\u8bd5\u4e2d"},{key:4,title:"\u9762\u8bd5\u7ed3\u675f"}],N=new Map([["\u62a5\u540d\u6210\u529f",0],["\u7b49\u5f85\u9762\u8bd5",1],["\u6392\u961f\u4e2d",2],["\u9762\u8bd5\u4e2d",3],["\u9762\u8bd5\u7ed3\u675f",4]]),C=function(){var e=(0,o.useState)(null),n=(0,r.Z)(e,2),t=n[0],i=n[1],a=(0,Z.UO)(),C=(0,o.useState)(0),q=(0,r.Z)(C,2),S=q[0],E=q[1],A=(0,Z.s0)(),G=u.Z.confirm;(0,o.useEffect)((function(){(0,v.sz)(Number(a.id)).then((function(e){E(N.get(e.data.status)),i(e.data)}))}),[]);var z=function(e){var n=e.type;A("/home/".concat(n,"/1"))},U=(0,I.f)((function(e){e.assess!==(null===t||void 0===t?void 0:t.assess)?(0,v.d)(Number(a.id),e.assess).then((function(e){200===e.code?c.ZP.success(e.message):c.ZP.error(e.message)})):c.ZP.warning("\u6ca1\u6709\u505a\u4efb\u4f55\u4fee\u6539\uff01")}),1e3);return(0,P.jsxs)(s,{children:[(0,P.jsx)("div",{className:"basic-info",children:(0,P.jsxs)(l.Z,{title:"\u57fa\u672c\u4fe1\u606f",layout:"vertical",bordered:!0,column:2,children:[(0,P.jsx)(l.Z.Item,{label:"\u59d3\u540d",span:2,children:null===t||void 0===t?void 0:t.username}),(0,P.jsx)(l.Z.Item,{label:"\u7535\u8bdd",span:2,children:null===t||void 0===t?void 0:t.phone}),(0,P.jsx)(l.Z.Item,{label:"\u6027\u522b",children:(0,P.jsxs)(d.ZP.Group,{value:"\u7537"===(null===t||void 0===t?void 0:t.sex)?1:2,children:[(0,P.jsx)(d.ZP,{value:1,children:"\u7537"}),(0,P.jsx)(d.ZP,{value:2,children:"\u5973"})]})}),(0,P.jsx)(l.Z.Item,{label:"\u5b66\u9662",children:null===t||void 0===t?void 0:t.college}),(0,P.jsx)(l.Z.Item,{label:"\u4e13\u4e1a",children:null===t||void 0===t?void 0:t.major}),(0,P.jsx)(l.Z.Item,{label:"\u65b9\u5411",children:(0,P.jsxs)(d.ZP.Group,{value:"\u524d\u7aef"===(null===t||void 0===t?void 0:t.direction)?1:2,children:[(0,P.jsx)(d.ZP,{value:1,children:"\u524d\u7aef"}),(0,P.jsx)(d.ZP,{value:2,children:"\u540e\u7aef"})]})}),(0,P.jsx)(l.Z.Item,{label:"\u81ea\u6211\u4ecb\u7ecd",children:null===t||void 0===t?void 0:t.introduction})]})}),(0,P.jsxs)("div",{className:"edit-info",children:[(0,P.jsx)("div",{className:"card-item status",children:(0,P.jsxs)(f.Z,{title:"\u5f53\u524d\u72b6\u6001",children:[(0,P.jsx)(m.Z,{current:S,items:T.map((function(e){return{key:e.title,title:e.title}})),className:"step-area"}),(0,P.jsxs)("div",{style:{marginTop:24},children:[S<T.length-1&&(0,P.jsx)(h.ZP,{type:"primary",onClick:function(){G({title:"\u4f60\u786e\u5b9a\u8981\u5207\u6362\u72b6\u6001\u5417\uff1f",content:"\u8bf7\u786e\u4fdd\u8be5\u72b6\u6001\u5df2\u7ecf\u7ed3\u675f",icon:(0,P.jsx)(j.Z,{}),onOk:function(){E(S+1)},onCancel:function(){console.log("Cancel")}})},disabled:S<=1,children:"\u4e0b\u4e00\u4e2a\u72b6\u6001"}),S===T.length-1&&(0,P.jsx)(h.ZP,{type:"primary",onClick:function(){return c.ZP.success("Processing complete!")},children:"\u7ed3\u675f"})]})]})}),(0,P.jsx)("div",{className:"card-item assess",children:(0,P.jsx)(f.Z,{title:"\u9762\u8bc4",children:null!==t&&(0,P.jsxs)(p.Z,{name:"assess",className:"assess-area",onFinish:U,children:[(0,P.jsx)(p.Z.Item,{name:"assess",initialValue:null===t||void 0===t?void 0:t.assess,rules:[{required:!0,message:"\u8bf7\u81f3\u5c11\u5199\u4e00\u4e2a\u5b57"}],children:(0,P.jsx)(g.Z.TextArea,{showCount:!0,maxLength:400,style:{height:"40vh"},placeholder:"\u8fd9\u4f4d\u540c\u5b66\u57fa\u7840\u600e\u4e48\u8bf4"})}),(0,P.jsx)(p.Z.Item,{style:{textAlign:"right"},children:(0,P.jsx)(h.ZP,{htmlType:"submit",disabled:S<3,children:"\u63d0\u4ea4"})})]})})}),(0,P.jsxs)(x.Z.Group,{trigger:"click",type:"primary",style:{right:24},icon:(0,P.jsx)(y.Z,{}),children:[(0,P.jsx)(x.Z,{icon:(0,P.jsx)(k.Z,{}),tooltip:"\u56de\u5230\u9762\u8bd5\u60c5\u51b5",onClick:function(){z({type:"interview"})}}),(0,P.jsx)(x.Z,{icon:(0,P.jsx)(b.Z,{}),tooltip:"\u56de\u5230\u62a5\u540d\u60c5\u51b5",onClick:function(){z({type:"enroll"})}}),(0,P.jsx)(x.Z,{icon:(0,P.jsx)(w.Z,{}),tooltip:"\u56de\u5230\u4fee\u6539\u9762\u8bd5",onClick:function(){z({type:"edit"})}})]})]})]})}}}]);
//# sourceMappingURL=477.a1ef7072.chunk.js.map