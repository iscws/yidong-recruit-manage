"use strict";(self.webpackChunkrecruit_manage=self.webpackChunkrecruit_manage||[]).push([[276],{2276:function(e,n,t){t.r(n),t.d(n,{default:function(){return E}});var i,r,a=t(3433),o=t(9439),s=t(2791),u=t(168),c=t(2360),l=c.ZP.div(i||(i=(0,u.Z)(["\n  .items-area {\n    position: relative;\n    display: flex;\n    flex-wrap: wrap;\n    width: 100%;\n  }\n  .items-header {\n    display: flex;\n    align-items: center;\n    margin: 0 25px 0 20px;\n    padding: 10px 10px;\n    background-color: #fff;\n    border-radius: 10px;\n    .timeForm {\n      width: 100%;\n      height: 30px;\n      display: flex;\n      justify-content: space-around;\n    }\n  }\n\n  .emptyArea {\n    margin-top: 30px;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    padding: 40px;\n    width: 100%;\n    background-color: #fff;\n    .button {\n      width: 100px;\n      margin-top: 15px;\n    }\n  }\n"]))),d=t(4165),m=t(5861),f=c.ZP.div(r||(r=(0,u.Z)(["\n  width: 33.3%;\n  padding: 15px;\n  .inner {\n    position: relative;\n    padding: 20px;\n    background-color: #fff;\n    > div {\n      margin-bottom: 10px;\n    }\n    .tips {\n      position: absolute;\n      left: 0px;\n      color: red;\n      font-size: 8px;\n    }\n    .delete {\n      position: absolute;\n      top: 5px;\n      right: 5px;\n      padding: 5px;\n      border-radius: 3px;\n      transition: all ease 0.2s;\n      cursor: pointer;\n\n      &:hover {\n        background-color: rgba(0, 0, 0, 0.2);\n      }\n    }\n  }\n"]))),p=t(7027),h=t(8185),x=t(1717),g=t(7943),Z=t(2835),j=t(4422),v=t(7309),y=t(5820),b=t(2622),k=t(7892),T=t.n(k),w=t(8618),P=t(7689),q=t(184),I=function(e){var n,t=e.infoData,i=(0,s.useState)(!1),r=(0,o.Z)(i,2),a=r[0],u=r[1],c=(0,s.useState)(!1),l=(0,o.Z)(c,2),k=l[0],I=l[1],S=(0,s.useState)(null!==(n=t.isdefalut)&&void 0!==n&&n),Y=(0,o.Z)(S,2),N=Y[0],D=Y[1],E=(0,P.UO)(),H=function(){var e=(0,m.Z)((0,d.Z)().mark((function e(){var n;return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(N){e.next=7;break}return e.next=3,(0,w.nF)(t.id);case 3:200===(n=e.sent).code?(p.ZP.success("\u5220\u9664\u6210\u529f"),u(!0)):p.ZP.error(n.message),e.next=9;break;case 7:p.ZP.success("\u5220\u9664\u6210\u529f"),u(!0);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,s.useEffect)((function(){void 0===N&&(0,w.zN)(t.id).then((function(e){I(!e.data)}))}),[]),a?null:(0,q.jsx)(f,{children:(0,q.jsxs)("div",{className:"inner",children:[(0,q.jsxs)(h.Z,{name:"interviewForm",onFinish:function(e){var n={id:t.id,location:e.location,direction:Number(E.direction),quota:e.quota,startTime:e.date.format("YYYY-MM-DD")+" "+e.startTime.format("HH:mm:ss"),endTime:e.date.format("YYYY-MM-DD")+" "+e.endTime.format("HH:mm:ss")};N?(0,w.iX)(n).then((function(e){200===e.code?(t.id=e.data,p.ZP.success("\u6dfb\u52a0\u6210\u529f"),D(!1)):p.ZP.error(e.message)})):(0,w.lf)(n).then((function(e){200===e.code?p.ZP.success(e.message):p.ZP.error(e.message)}))},children:[(0,q.jsx)(h.Z.Item,{rules:[{required:!0,message:"\u8bf7\u586b\u5199\u65e5\u671f"}],name:"date",label:"\u65e5\u671f",initialValue:T()(t.startTime),children:(0,q.jsx)(x.Z,{format:"YYYY-MM-DD"})}),(0,q.jsx)(h.Z.Item,{name:"startTime",label:"\u5f00\u59cb\u65f6\u95f4",initialValue:T()(t.startTime),rules:[{required:!0,message:"\u8bf7\u586b\u5199\u65f6\u95f4"}],children:(0,q.jsx)(g.Z,{format:"HH:mm",disabled:k})}),(0,q.jsx)(h.Z.Item,{name:"endTime",label:"\u7ed3\u675f\u65f6\u95f4",initialValue:T()(t.endTime),rules:[{required:!0,message:"\u8bf7\u586b\u5199\u65e5\u671f"}],children:(0,q.jsx)(g.Z,{format:"HH:mm"})}),(0,q.jsx)(h.Z.Item,{name:"quota",label:"\u603b\u540d\u989d",initialValue:t.quota,rules:[{required:!0,message:"\u8bf7\u586b\u5199\u540d\u989d"}],children:(0,q.jsx)(Z.Z,{type:"number"})}),(0,q.jsx)(h.Z.Item,{name:"location",label:"\u5730\u70b9",initialValue:t.location,rules:[{required:!0,message:"\u8bf7\u586b\u5199\u5730\u70b9"}],children:(0,q.jsx)(Z.Z,{})}),(0,q.jsx)(h.Z.Item,{label:"\u65b9\u5411",initialValue:t.direction,rules:[{required:!0,message:"\u8bf7\u586b\u5199\u65b9\u5411"}],children:(0,q.jsxs)(j.ZP.Group,{value:t.direction,children:[(0,q.jsx)(j.ZP,{value:1,children:" \u524d\u7aef "}),(0,q.jsx)(j.ZP,{value:2,children:" \u540e\u7aef "})]})}),(0,q.jsx)(h.Z.Item,{children:(0,q.jsx)(v.ZP,{type:"primary",htmlType:"submit",children:N?"\u786e\u5b9a\u65b0\u5efa":"\u66f4\u6539"})})]}),(0,q.jsx)(y.Z,{title:"\u5220\u9664\u9762\u8bd5\u65f6\u95f4",description:"\u4f60\u786e\u5b9a\u8981\u5220\u9664\u8fd9\u4e2a\u9762\u8bd5\u65f6\u95f4\u6bb5\u5417\uff1f",okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88",onConfirm:H,children:(0,q.jsx)("div",{className:"delete",children:(0,q.jsx)(b.Z,{style:{fontSize:"16px",color:"red"}})})})]})})},S=(0,s.memo)(I),Y=t(4664),N=t(5076),D=t(9286),E=function(){var e=(0,s.useState)([]),n=(0,o.Z)(e,2),t=n[0],i=n[1],r=(0,s.useState)(0),u=(0,o.Z)(r,2),c=u[0],d=u[1],m=(0,P.UO)(),f=(0,s.useCallback)((function(){var e=new Date;i([].concat((0,a.Z)(t),[{id:e.getTime(),startTime:e.toLocaleString(),endTime:e.toLocaleString(),quota:"",location:"",spareQuota:0,isdefalut:!0,direction:Number(m.direction)}])),setTimeout((function(){window.scrollTo(0,document.documentElement.scrollHeight)}),50)}),[t]);return(0,s.useEffect)((function(){(0,w.YG)(Number(m.direction)).then((function(e){i(e.data)})),(0,w.WU)().then((function(e){200===e.code&&d(e.data)}))}),[m]),(0,q.jsxs)(l,{children:[(0,q.jsx)("div",{className:"items-header",children:(0,q.jsxs)(h.Z,{name:"timeForm",onFinish:function(e){console.log(e)},className:"timeForm",children:[(0,q.jsx)(h.Z.Item,{label:"\u9762\u8bd5\u5f00\u59cb\u524d\u591a\u4e45\u80fd\u9884\u7ea6\uff08\u5355\u4f4d\uff1a\u5206\u949f\uff09",name:"time",children:(0,q.jsx)(Z.Z,{type:"number",value:c})}),(0,q.jsx)(h.Z.Item,{children:(0,q.jsx)(v.ZP,{htmlType:"submit",type:"primary",children:"\u63d0\u4ea4"})})]})}),(0,q.jsx)("div",{className:"items-area",children:0!==t.length?t.map((function(e){return(0,q.jsx)(S,{infoData:e},e.id)})):(0,q.jsx)("div",{className:"emptyArea",children:(0,q.jsx)(Y.Z,{imageStyle:{height:120},description:(0,q.jsx)("span",{style:{color:"#94979e"},children:"\u4ec0\u4e48\u90fd\u6ca1\u6709~"}),children:(0,q.jsx)(v.ZP,{type:"primary",onClick:f,children:"\u6dfb\u52a0\u9762\u8bd5\u65f6\u95f4"})})})}),(0,q.jsx)("div",{className:"items-tips",children:(0,q.jsx)(N.Z,{type:"primary",style:{right:24},icon:(0,q.jsx)(D.Z,{}),tooltip:(0,q.jsx)("div",{children:"\u65b0\u589e\u9762\u8bd5\u65f6\u95f4"}),onClick:f})})]})}},8618:function(e,n,t){t.d(n,{iX:function(){return h},nF:function(){return x},zN:function(){return j},JT:function(){return d},YG:function(){return f},WU:function(){return v},Im:function(){return m},sz:function(){return g},x4:function(){return l},EP:function(){return Z},lf:function(){return p}});var i=t(1413),r=t(5671),a=t(3144),o=t(1243),s=!1,u=[],c=new(function(){function e(n){var t=this;(0,r.Z)(this,e),this.instance=void 0,this.instance=o.Z.create(n),this.instance.interceptors.request.use((function(e){if(null!==localStorage.getItem("token")){var n=localStorage.getItem("token");e.headers.token="".concat(n)}else console.log("\u5220\u9664 token \u4e86"),delete e.headers.Authorization;return e}),(function(e){return e})),this.instance.interceptors.response.use((function(e){var n=e.data,i=n.code,r=n.message;if(500===i&&"token\u65e0\u6548!\u8bf7\u91cd\u65b0\u767b\u5f55!"===r){var a=e.config;return s?new Promise((function(e){u.push((function(n){a.headers.token=n,e(t.instance.request(a))}))})):(s=!0,Z().then((function(e){var n=e.data;return localStorage.setItem("token",n),console.log("token\u8bbe\u7f6e\u5b8c\u6bd5"),a.headers.token=n,u.forEach((function(e){return e(n)})),u=[],t.instance.request(a)})).catch((function(e){console.log("reflashtoken error = >",e),window.location.href="/Login"})).finally((function(){s=!1})))}return e.data}),(function(e){return Promise.reject(e)}))}return(0,a.Z)(e,[{key:"request",value:function(e){return this.instance.request(e)}},{key:"get",value:function(e){return this.request((0,i.Z)((0,i.Z)({},e),{},{method:"GET"}))}},{key:"post",value:function(e){return this.request((0,i.Z)((0,i.Z)({},e),{},{method:"POST"}))}},{key:"delete",value:function(e){return this.request((0,i.Z)((0,i.Z)({},e),{},{method:"DELETE"}))}}]),e}())({baseURL:"https://www.yidongmall.cn",timeout:1e4});function l(e){return c.post({url:"/api/admin/login/pw",params:e})}function d(e){return c.get({url:"/api/admin/orderBy/".concat(e)})}function m(e){return c.get({url:"/api/admin/getUserInfoByName?username=".concat(e.username)})}function f(e){return c.get({url:"/api/admin/getAllTimeByDir/".concat(e)})}function p(e){return c.post({url:"/api/admin/updateTime",data:e})}function h(e){return c.post({url:"/api/admin/addTime",data:e})}function x(e){return c.get({url:"/api/admin/deleteTime/".concat(e)})}function g(e){return c.get({url:"/api/admin/getUserInfoById",params:{id:e}})}function Z(){var e=localStorage.getItem("username"),n=localStorage.getItem("password");return c.post({url:"/api/admin/login/pw",params:{username:e,password:n}})}function j(e){return c.get({url:"/api/admin/ifSec/".concat(e)})}function v(){return c.get({url:"/api/admin/getPreRecruitTime"})}}}]);
//# sourceMappingURL=276.2fb1856c.chunk.js.map