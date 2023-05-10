"use strict";(self.webpackChunkrecruit_manage=self.webpackChunkrecruit_manage||[]).push([[950],{1687:function(n,e,t){t.d(e,{f:function(){return r}});var i=t(2791);function r(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=(0,i.useRef)({fn:n,timer:null}).current;return(0,i.useEffect)((function(){r.fn=n}),[n]),(0,i.useCallback)((function(){if(!r.timer){var n;r.timer=setTimeout((function(){delete r.timer}),e);for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];(n=r.fn).call.apply(n,[this].concat(i))}}),t)}},8618:function(n,e,t){t.d(e,{iX:function(){return p},IH:function(){return N},nF:function(){return g},CI:function(){return j},zN:function(){return Z},nI:function(){return T},JT:function(){return d},YG:function(){return h},$Y:function(){return k},WU:function(){return b},y7:function(){return y},Im:function(){return f},sz:function(){return v},x4:function(){return l},Gm:function(){return P},Jv:function(){return I},EP:function(){return x},d:function(){return w},ij:function(){return S},lf:function(){return m}});var i=t(1413),r=t(5671),a=t(3144),o=t(1243),u=!1,s=[],c=new(function(){function n(e){var t=this;(0,r.Z)(this,n),this.instance=void 0,this.instance=o.Z.create(e),this.instance.interceptors.request.use((function(n){if(null!==localStorage.getItem("token")){var e=localStorage.getItem("token");n.headers.token="".concat(e)}else console.log("\u5220\u9664 token \u4e86"),delete n.headers.Authorization;return n}),(function(n){return n})),this.instance.interceptors.response.use((function(n){var e=n.data,i=e.code,r=e.message;if(500===i&&"token\u65e0\u6548!\u8bf7\u91cd\u65b0\u767b\u5f55!"===r){var a=n.config;return u?new Promise((function(n){s.push((function(e){a.headers.token=e,n(t.instance.request(a))}))})):(u=!0,x().then((function(n){var e=n.data;return localStorage.setItem("token",e),console.log("token\u8bbe\u7f6e\u5b8c\u6bd5"),a.headers.token=e,s.forEach((function(n){return n(e)})),s=[],t.instance.request(a)})).catch((function(n){console.log("reflashtoken error = >",n),window.location.href="/Login"})).finally((function(){u=!1})))}return n.data}),(function(n){return Promise.reject(n)}))}return(0,a.Z)(n,[{key:"request",value:function(n){return this.instance.request(n)}},{key:"get",value:function(n){return this.request((0,i.Z)((0,i.Z)({},n),{},{method:"GET"}))}},{key:"post",value:function(n){return this.request((0,i.Z)((0,i.Z)({},n),{},{method:"POST"}))}},{key:"delete",value:function(n){return this.request((0,i.Z)((0,i.Z)({},n),{},{method:"DELETE"}))}},{key:"put",value:function(n){return this.request((0,i.Z)((0,i.Z)({},n),{},{method:"PUT"}))}}]),n}())({baseURL:"https://www.yidongmall.cn",timeout:1e4});function l(n){return c.post({url:"/api/admin/login/pw",params:n})}function d(n){return c.get({url:"/api/admin/orderBy/".concat(n)})}function f(n){return c.get({url:"/api/admin/getUserInfoByName?username=".concat(n.username)})}function h(n){return c.get({url:"/api/admin/getAllTimeByDir/".concat(n)})}function m(n){return c.put({url:"/api/admin/interview",data:n})}function p(n){return c.post({url:"/api/admin/interview",data:n})}function g(n){return c.delete({url:"/api/admin/interview/".concat(n)})}function v(n){return c.get({url:"/api/admin/getUserInfoById",params:{id:n}})}function x(){var n=localStorage.getItem("username"),e=localStorage.getItem("password");return c.post({url:"/api/admin/login/pw",params:{username:n,password:e}})}function Z(n){return c.get({url:"/api/admin/ifSec/".concat(n)})}function b(){return c.get({url:"/api/admin/getPreRecruitTime"})}function j(n){return c.put({url:"/api/admin/changeRecruitTime/".concat(n)})}function y(n){return c.get({url:"/api/admin/getThisTime/".concat(n)})}function w(n,e){return c.put({url:"/api/admin/setAssess/".concat(n),params:{assess:e}})}function k(n){return c.get({url:"/api/admin/getNow/".concat(n)})}function P(n){return c.get({url:"/api/admin/getNext/".concat(n)})}function I(n){return c.post({url:"/api/admin/push/interview/".concat(n)})}function S(n,e){return c.put({url:"/api/admin/setStatus/".concat(n,"/").concat(e)})}function N(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"\u6682\u4e0d\u652f\u6301\u62a5\u540d";return c.put({url:"/api/admin/page/display",data:{isDisplay:n,message:e}})}function T(){return c.get({url:"/api/recruit/display"})}},5850:function(n,e,t){t.d(e,{Sc:function(){return s},p6:function(){return u},pU:function(){return a},rV:function(){return o}});var i=t(9439),r=t(7762);function a(n){return Number(n.slice(-1))}function o(n,e,t,i){return{key:e,icon:t,children:i,label:n}}function u(n){var e=n.getFullYear().toString(),t=(n.getMonth()+1).toString().padStart(2,"0"),i=n.getDate().toString().padStart(2,"0");return"".concat(e,"-").concat(t,"-").concat(i)}function s(n){var e,t=new Map,a=(0,r.Z)(n);try{for(a.s();!(e=a.n()).done;){var o=(0,i.Z)(e.value,2),u=o[0],s=o[1];t.set(s,u)}}catch(c){a.e(c)}finally{a.f()}return t}},950:function(n,e,t){t.r(e),t.d(e,{default:function(){return G}});var i,r,a=t(9439),o=t(2791),u=t(168),s=t(2360),c=s.ZP.div(i||(i=(0,u.Z)(["\n  width: 1200px;\n  min-height: 400px;\n  max-height: 2000px;\n  margin: 0 auto;\n  padding: 20px;\n  box-sizing: border-box;\n  /* background-color: #fff; */\n  display: flex;\n  .basic-info {\n    width: 35%;\n    padding: 20px 30px;\n    background-color: #fff;\n    box-shadow: 0 0 8px 1px #eeeeee;\n    border-radius: 10px;\n  }\n  .edit-info {\n    position: relative;\n    width: 60%;\n    display: flex;\n    flex-direction: column;\n    /* justify-content: space-between; */\n    /* height: 100vh; */\n    margin-left: 20px;\n    border-radius: 10px;\n    .status {\n      margin-bottom: 15px;\n      height: 140px;\n    }\n    .step-area {\n      /* height: 10vh; */\n      display: flex;\n      align-items: center;\n      margin-bottom: 24px;\n    }\n  }\n"]))),l=t(7027),d=t(7174),f=t(4422),h=t(1645),m=t(8185),p=t(2835),g=t(7309),v=t(5076),x=t(8618),Z=t(7689),b=t(9372),j=t(830),y=t(9529),w=t(7286),k=t(1687),P=t(1659),I=t(2999),S=s.ZP.div(r||(r=(0,u.Z)(["\n  width: 100%;\n  height: 100%;\n  padding: 30px 30px 20px;\n  background-color: #ffff;\n  box-sizing: border-box;\n  .show-status-container {\n    margin-bottom: 15px;\n  }\n  .label {\n    font-weight: 700;\n    font-size: 16px;\n    line-height: 1.5;\n    margin-right: 15px;\n  }\n"]))),N=t(187),T=t(5850),C=t(184),q=[{value:2,label:"\u62a5\u540d\u6210\u529f",disabled:!0},{value:3,label:"\u7b49\u5f85\u9762\u8bd5\u6392\u961f",disabled:!0},{value:4,label:"\u6392\u961f\u4e2d",disabled:!0},{value:5,label:"\u9762\u8bd5\u4e2d",disabled:!0},{value:6,label:"\u9762\u8bd5\u7ed3\u675f"},{value:7,label:"\u9762\u8bd5\u901a\u8fc7"},{value:8,label:"\u9762\u8bd5\u5931\u8d25"},{value:9,label:"\u8003\u6838\u4e2d"},{value:10,label:"\u8003\u6838\u6210\u529f"},{value:11,label:"\u8003\u6838\u5931\u8d25"}],E=new Map([["\u62a5\u540d\u6210\u529f",2],["\u7b49\u5f85\u9762\u8bd5\u6392\u961f",3],["\u6392\u961f\u4e2d",4],["\u9762\u8bd5\u4e2d",5],["\u9762\u8bd5\u7ed3\u675f",6],["\u9762\u8bd5\u901a\u8fc7",7],["\u9762\u8bd5\u5931\u8d25",8],["\u8003\u6838\u4e2d",9],["\u8003\u6838\u6210\u529f",10],["\u8003\u6838\u5931\u8d25",11]]),U=(0,T.Sc)(E),z=function(n){var e=n.status,t=n.changeStatusFn,i=n.id,r=(0,o.useState)(E.get(e)),u=(0,a.Z)(r,2),s=u[0],c=u[1],d=(0,Z.UO)().id,f=P.Z.confirm,h=(0,o.useCallback)((function(){if(void 0!==s){if(console.log(s,E.get(e)),5===s&&4!==E.get(e))return void l.ZP.error("\u53ea\u80fd\u4ece\u6392\u961f\u4e2d\u66f4\u6539\u4e3a\u9762\u8bd5\u4e2d");(0,x.ij)(i,s).then((function(n){200===n.code?(l.ZP.success("\u4fee\u6539\u72b6\u6001\u6210\u529f"),t(U.get(s)),5===s&&(0,x.Jv)(Number(d)).then((function(n){200!==n.code&&(l.ZP.error("\u53d1\u9001\u6d88\u606f\u5931\u8d25\uff0c\u9700\u8981\u4eba\u5de5\u63d0\u9192"),console.log(n))}))):l.ZP.error(n.message)}))}}),[s]);return(0,C.jsxs)(S,{children:[(0,C.jsxs)("div",{className:"show-status-container",children:[(0,C.jsx)("span",{className:"label",children:"\u5f53\u524d\u72b6\u6001\uff1a"}),(0,C.jsx)(I.Z,{style:{width:"140px"},value:s,options:q,onChange:function(n){c(n)}})]}),(0,C.jsxs)("div",{className:"bottom-area",children:[(0,C.jsx)(g.ZP,{type:"primary",onClick:function(){f({title:"\u4f60\u786e\u5b9a\u8981\u5207\u6362\u72b6\u6001\u5417\uff1f",content:"\u5373\u5c06\u4ece ".concat(e," \u66f4\u6539\u4e3a ").concat(U.get(s)),icon:(0,C.jsx)(N.Z,{}),onOk:function(){h()},onCancel:function(){console.log("Cancel")},okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88"})},style:{marginRight:"20px"},children:"\u4fdd\u5b58"}),(0,C.jsx)(g.ZP,{type:"primary",onClick:function(){console.log("\u91cd\u7f6e"),c(E.get(e))},children:"\u91cd\u7f6e"})]})]})},A=(0,o.memo)(z),G=function(){var n=(0,o.useState)(null),e=(0,a.Z)(n,2),t=e[0],i=e[1],r=(0,Z.UO)(),u=(0,o.useState)(""),s=(0,a.Z)(u,2),P=s[0],I=s[1],S=(0,Z.s0)(),N=function(n){I(n)};(0,o.useEffect)((function(){(0,x.sz)(Number(r.id)).then((function(n){i(n.data),N(n.data.status)}))}),[]);var T=function(n){var e=n.type;S("/home/".concat(e,"/1"))},q=(0,k.f)((function(n){n.assess!==(null===t||void 0===t?void 0:t.assess)?(0,x.d)(Number(r.id),n.assess).then((function(n){200===n.code?l.ZP.success(n.message):l.ZP.error(n.message)})):l.ZP.warning("\u6ca1\u6709\u505a\u4efb\u4f55\u4fee\u6539\uff01")}),1e3);return(0,C.jsxs)(c,{children:[(0,C.jsxs)("div",{className:"basic-info",children:[(0,C.jsxs)(d.Z,{title:"\u57fa\u672c\u4fe1\u606f",bordered:!0,column:1,children:[(0,C.jsx)(d.Z.Item,{label:"\u59d3\u540d",children:null===t||void 0===t?void 0:t.username}),(0,C.jsx)(d.Z.Item,{label:"\u7535\u8bdd",children:null===t||void 0===t?void 0:t.phone}),(0,C.jsx)(d.Z.Item,{label:"\u6027\u522b",children:(0,C.jsxs)(f.ZP.Group,{value:"\u7537"===(null===t||void 0===t?void 0:t.sex)?1:2,children:[(0,C.jsx)(f.ZP,{value:1,children:"\u7537"}),(0,C.jsx)(f.ZP,{value:2,children:"\u5973"})]})}),(0,C.jsx)(d.Z.Item,{label:"\u5b66\u9662",children:null===t||void 0===t?void 0:t.college}),(0,C.jsx)(d.Z.Item,{label:"\u4e13\u4e1a",children:null===t||void 0===t?void 0:t.major}),(0,C.jsx)(d.Z.Item,{label:"\u65b9\u5411",children:(0,C.jsxs)(f.ZP.Group,{value:"\u524d\u7aef"===(null===t||void 0===t?void 0:t.direction)?1:2,children:[(0,C.jsx)(f.ZP,{value:1,children:"\u524d\u7aef"}),(0,C.jsx)(f.ZP,{value:2,children:"\u540e\u7aef"})]})})]}),(0,C.jsx)(d.Z,{bordered:!0,style:{marginTop:"15px"},children:(0,C.jsx)(d.Z.Item,{label:"\u81ea\u6211\u4ecb\u7ecd",children:null===t||void 0===t?void 0:t.introduction})})]}),(0,C.jsxs)("div",{className:"edit-info",children:[(0,C.jsx)("div",{className:"card-item status",children:""!==P&&(0,C.jsx)(A,{status:P,changeStatusFn:N,id:Number(r.id)})}),(0,C.jsx)("div",{className:"card-item assess",children:(0,C.jsx)(h.Z,{title:"\u9762\u8bc4",children:null!==t&&(0,C.jsxs)(m.Z,{name:"assess",className:"assess-area",onFinish:q,children:[(0,C.jsx)(m.Z.Item,{name:"assess",initialValue:null===t||void 0===t?void 0:t.assess,rules:[{required:!0,message:"\u8bf7\u81f3\u5c11\u5199\u4e00\u4e2a\u5b57"}],children:(0,C.jsx)(p.Z.TextArea,{showCount:!0,maxLength:400,style:{height:"40vh"},placeholder:"\u8fd9\u4f4d\u540c\u5b66\u57fa\u7840\u600e\u4e48\u8bf4"})}),(0,C.jsx)(m.Z.Item,{style:{textAlign:"right"},children:(0,C.jsx)(g.ZP,{htmlType:"submit",children:"\u63d0\u4ea4"})})]})})}),(0,C.jsxs)(v.Z.Group,{trigger:"click",type:"primary",style:{right:24},icon:(0,C.jsx)(b.Z,{}),children:[(0,C.jsx)(v.Z,{icon:(0,C.jsx)(j.Z,{}),tooltip:"\u56de\u5230\u9762\u8bd5\u60c5\u51b5",onClick:function(){T({type:"interview"})}}),(0,C.jsx)(v.Z,{icon:(0,C.jsx)(y.Z,{}),tooltip:"\u56de\u5230\u62a5\u540d\u60c5\u51b5",onClick:function(){T({type:"enroll"})}}),(0,C.jsx)(v.Z,{icon:(0,C.jsx)(w.Z,{}),tooltip:"\u56de\u5230\u4fee\u6539\u9762\u8bd5",onClick:function(){T({type:"edit"})}})]})]})]})}}}]);
//# sourceMappingURL=950.439ba2e2.chunk.js.map