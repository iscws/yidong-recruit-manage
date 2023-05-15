"use strict";(self.webpackChunkrecruit_manage=self.webpackChunkrecruit_manage||[]).push([[276],{2276:function(e,n,t){t.r(n),t.d(n,{default:function(){return H}});var r,i,a=t(3433),o=t(9439),u=t(2791),s=t(168),c=t(2360),l=c.ZP.div(r||(r=(0,s.Z)(["\n  .items-area {\n    position: relative;\n    display: flex;\n    flex-wrap: wrap;\n    flex: 1;\n    width: 100%;\n    padding: 20px 10px;\n  }\n  .items-header {\n    display: flex;\n    align-items: center;\n    margin: 0 25px 0 20px;\n    padding: 10px 10px;\n    background-color: #fff;\n    border-radius: 10px;\n    .timeForm {\n      width: 100%;\n      margin-bottom: -15px;\n      display: flex;\n      justify-content: space-around;\n      flex-direction: wrap;\n    }\n  }\n\n  .emptyArea {\n    margin-top: 30px;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    padding: 40px;\n    width: 100%;\n    background-color: #fff;\n    .button {\n      width: 100px;\n      margin-top: 15px;\n    }\n  }\n"]))),d=t(4165),m=t(1413),f=t(5861),p=c.ZP.div(i||(i=(0,s.Z)(["\n  /* width: 33%; */\n  margin: 0 10px 15px 0;\n  min-width: 300px;\n  .inner {\n    position: relative;\n    padding: 20px;\n    background-color: #fff;\n    > div {\n      margin-bottom: 10px;\n    }\n    .tips {\n      position: absolute;\n      left: 0px;\n      color: red;\n      font-size: 8px;\n    }\n    .delete {\n      position: absolute;\n      top: 5px;\n      right: 5px;\n      padding: 5px;\n      border-radius: 3px;\n      transition: all ease 0.2s;\n      cursor: pointer;\n\n      &:hover {\n        background-color: rgba(0, 0, 0, 0.2);\n      }\n    }\n\n    .btnArea {\n      display: flex;\n      justify-content: space-between;\n    }\n  }\n"]))),h=t(7027),g=t(8185),x=t(1717),Z=t(7943),v=t(2835),j=t(4422),y=t(7309),b=t(9228),w=t(1082),k=t(2622),T=t(7892),q=t.n(T),D=t(8618),P=t(7689),I=t(184),N=function(e){var n,t,r=e.infoData,i=(0,P.UO)(),a=(0,u.useState)({innerData:r,isAppoint:!1,created:null===(n=r.created)||void 0===n||n,isDelete:!1}),s=(0,o.Z)(a,2),c=s[0],l=s[1],T=(0,u.useState)(null!==(t=r.spareQuota)&&void 0!==t?t:0),N=(0,o.Z)(T,2),S=N[0],Y=N[1],A=function(){var e=(0,f.Z)((0,d.Z)().mark((function e(){var n;return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!c.created){e.next=7;break}return e.next=3,(0,D.nF)(r.id);case 3:if(200===(n=e.sent).code){e.next=7;break}return h.ZP.error(n.message),e.abrupt("return");case 7:h.ZP.success("\u5220\u9664\u6210\u529f"),l((0,m.Z)((0,m.Z)({},c),{},{isDelete:!0}));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,u.useEffect)((function(){c.created&&(0,D.zN)(r.id).then((function(e){l((0,m.Z)((0,m.Z)({},c),{},{isAppoint:!e.data}))}))}),[]),(0,u.useEffect)((function(){l((0,m.Z)((0,m.Z)({},c),{},{innerData:r}))}),[r]),c.isDelete?null:(0,I.jsx)(p,{children:(0,I.jsxs)("div",{className:"inner",children:[(0,I.jsxs)(g.Z,{name:"interviewForm",onFinish:function(e){var n={id:r.id,location:e.location,direction:Number(i.direction),quota:e.quota,startTime:e.date.format("YYYY-MM-DD")+" "+e.startTime.format("HH:mm:ss"),endTime:e.date.format("YYYY-MM-DD")+" "+e.endTime.format("HH:mm:ss")};c.created?(0,D.lf)(n).then((function(e){200===e.code?h.ZP.success(e.message):h.ZP.error(e.message)})):(0,D.iX)(n).then((function(e){200===e.code?(r.id=e.data,h.ZP.success("\u6dfb\u52a0\u6210\u529f"),l((0,m.Z)((0,m.Z)({},c),{},{created:!0}))):h.ZP.error(e.message)}))},onValuesChange:function(e){if(e.quota&&void 0!==r.quota&&void 0!==r.spareQuota){var n=Number(r.quota)-r.spareQuota;console.log("\u5df2\u62a5\u540d\u4eba\u6570\uff1a"+n),console.log("\u6700\u7ec8\u5269\u4f59\u4eba\u6570\uff1a"+(e.quota-n)),Y(e.quota-n)}},children:[(0,I.jsx)(g.Z.Item,{rules:[{required:!0,message:"\u8bf7\u586b\u5199\u65e5\u671f"}],name:"date",label:"\u65e5\u671f",initialValue:q()(c.innerData.startTime),children:(0,I.jsx)(x.Z,{format:"YYYY-MM-DD"})}),(0,I.jsx)(g.Z.Item,{name:"startTime",label:"\u5f00\u59cb\u65f6\u95f4",initialValue:q()(c.innerData.startTime),rules:[{required:!0,message:"\u8bf7\u586b\u5199\u65f6\u95f4"}],children:(0,I.jsx)(Z.Z,{format:"HH:mm",disabled:c.isAppoint})}),(0,I.jsx)(g.Z.Item,{name:"endTime",label:"\u7ed3\u675f\u65f6\u95f4",initialValue:q()(c.innerData.endTime),rules:[{required:!0,message:"\u8bf7\u586b\u5199\u65e5\u671f"}],children:(0,I.jsx)(Z.Z,{format:"HH:mm"})}),(0,I.jsx)(g.Z.Item,{name:"quota",label:"\u603b\u540d\u989d",initialValue:c.innerData.quota,rules:[{required:!0,message:"\u8bf7\u586b\u5199\u540d\u989d"}],children:(0,I.jsx)(v.Z,{type:"number"})}),(0,I.jsx)(g.Z.Item,{name:"location",label:"\u5730\u70b9",initialValue:c.innerData.location,rules:[{required:!0,message:"\u8bf7\u586b\u5199\u5730\u70b9"}],children:(0,I.jsx)(v.Z,{})}),(0,I.jsx)(g.Z.Item,{label:"\u65b9\u5411",initialValue:c.innerData.direction,rules:[{required:!0,message:"\u8bf7\u586b\u5199\u65b9\u5411"}],children:(0,I.jsxs)(j.ZP.Group,{value:c.innerData.direction,children:[(0,I.jsx)(j.ZP,{value:1,children:" \u524d\u7aef "}),(0,I.jsx)(j.ZP,{value:2,children:" \u540e\u7aef "})]})}),(0,I.jsx)(g.Z.Item,{children:(0,I.jsxs)("div",{className:"btnArea",children:[(0,I.jsx)(y.ZP,{type:"primary",htmlType:"submit",children:c.created?"\u66f4\u6539":"\u786e\u5b9a\u65b0\u5efa"}),(0,I.jsx)(b.Z,{content:"\u5269\u4f59\u540d\u989d\uff1a"+S,trigger:"click",children:(0,I.jsx)(y.ZP,{children:"\u67e5\u770b\u66f4\u591a"})})]})})]}),(0,I.jsx)(w.Z,{title:"\u5220\u9664\u9762\u8bd5\u65f6\u95f4",description:"\u4f60\u786e\u5b9a\u8981\u5220\u9664\u8fd9\u4e2a\u9762\u8bd5\u65f6\u95f4\u6bb5\u5417\uff1f",okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88",onConfirm:A,children:(0,I.jsx)("div",{className:"delete",children:(0,I.jsx)(k.Z,{style:{fontSize:"16px",color:"red"}})})})]})})},S=(0,u.memo)(N),Y=t(4664),A=t(5076),E=t(9286),C=t(1687),H=function(){var e=(0,u.useState)([]),n=(0,o.Z)(e,2),t=n[0],r=n[1],i=(0,u.useState)(0),s=(0,o.Z)(i,2),c=s[0],d=s[1],m=(0,P.UO)(),f=(0,u.useCallback)((function(){var e=new Date;r([].concat((0,a.Z)(t),[{id:e.getTime(),startTime:e.toLocaleString(),endTime:e.toLocaleString(),quota:0,location:"",spareQuota:0,created:!1,direction:Number(m.direction)}])),setTimeout((function(){window.scrollTo(0,document.documentElement.scrollHeight)}),50)}),[t]),p=(0,C.f)((function(e){(0,D.CI)(Number(e.time)).then((function(e){200===e.code?h.ZP.success(e.message):h.ZP.error(e.message)}))}),200);return(0,u.useEffect)((function(){(0,D.YG)(Number(m.direction)).then((function(e){r(e.data)})),(0,D.WU)().then((function(e){200===e.code&&d(e.data)}))}),[m]),(0,I.jsxs)(l,{children:[(0,I.jsx)("div",{className:"items-header",children:0!==c&&(0,I.jsxs)(g.Z,{name:"timeForm",onFinish:p,className:"timeForm",children:[(0,I.jsx)(g.Z.Item,{label:"\u9762\u8bd5\u5f00\u59cb\u524d\u591a\u4e45\u80fd\u9884\u7ea6\uff08\u5355\u4f4d\uff1a\u5206\u949f\uff09",name:"time",initialValue:c,children:(0,I.jsx)(v.Z,{type:"number"})}),(0,I.jsx)(g.Z.Item,{children:(0,I.jsx)(y.ZP,{htmlType:"submit",type:"primary",children:"\u63d0\u4ea4"})})]})}),(0,I.jsx)("div",{className:"items-area",children:0!==t.length?t.map((function(e){return(0,I.jsx)(S,{infoData:e},e.id)})):(0,I.jsx)("div",{className:"emptyArea",children:(0,I.jsx)(Y.Z,{imageStyle:{height:120},description:(0,I.jsx)("span",{style:{color:"#94979e"},children:"\u4ec0\u4e48\u90fd\u6ca1\u6709~"}),children:(0,I.jsx)(y.ZP,{type:"primary",onClick:f,children:"\u6dfb\u52a0\u9762\u8bd5\u65f6\u95f4"})})})}),(0,I.jsx)("div",{className:"items-tips",children:(0,I.jsx)(A.Z,{type:"primary",style:{right:24},icon:(0,I.jsx)(E.Z,{}),tooltip:(0,I.jsx)("div",{children:"\u65b0\u589e\u9762\u8bd5\u65f6\u95f4"}),onClick:f})})]})}},1687:function(e,n,t){t.d(n,{f:function(){return i}});var r=t(2791);function i(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],i=(0,r.useRef)({fn:e,timer:null}).current;return(0,r.useEffect)((function(){i.fn=e}),[e]),(0,r.useCallback)((function(){if(!i.timer){var e;i.timer=setTimeout((function(){delete i.timer}),n);for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];(e=i.fn).call.apply(e,[this].concat(r))}}),t)}},8618:function(e,n,t){t.d(n,{iX:function(){return h},IH:function(){return P},nF:function(){return g},CI:function(){return y},zN:function(){return v},nI:function(){return I},JT:function(){return d},YG:function(){return f},$Y:function(){return k},WU:function(){return j},y7:function(){return b},Im:function(){return m},sz:function(){return x},x4:function(){return l},Gm:function(){return T},Jv:function(){return q},EP:function(){return Z},d:function(){return w},ij:function(){return D},lf:function(){return p}});var r=t(1413),i=t(5671),a=t(3144),o=t(1243),u=!1,s=[],c=new(function(){function e(n){var t=this;(0,i.Z)(this,e),this.instance=void 0,this.instance=o.Z.create(n),this.instance.interceptors.request.use((function(e){if(null!==localStorage.getItem("token")){var n=localStorage.getItem("token");e.headers.token="".concat(n)}else console.log("\u5220\u9664 token \u4e86"),delete e.headers.Authorization;return e}),(function(e){return e})),this.instance.interceptors.response.use((function(e){var n=e.data,r=n.code,i=n.message;if(500===r&&"token\u65e0\u6548!\u8bf7\u91cd\u65b0\u767b\u5f55!"===i){var a=e.config;return u?new Promise((function(e){s.push((function(n){a.headers.token=n,e(t.instance.request(a))}))})):(u=!0,Z().then((function(e){var n=e.data;return localStorage.setItem("token",n),console.log("token\u8bbe\u7f6e\u5b8c\u6bd5"),a.headers.token=n,s.forEach((function(e){return e(n)})),s=[],t.instance.request(a)})).catch((function(e){console.log("reflashtoken error = >",e),window.location.href="/Login"})).finally((function(){u=!1})))}return e.data}),(function(e){return Promise.reject(e)}))}return(0,a.Z)(e,[{key:"request",value:function(e){return this.instance.request(e)}},{key:"get",value:function(e){return this.request((0,r.Z)((0,r.Z)({},e),{},{method:"GET"}))}},{key:"post",value:function(e){return this.request((0,r.Z)((0,r.Z)({},e),{},{method:"POST"}))}},{key:"delete",value:function(e){return this.request((0,r.Z)((0,r.Z)({},e),{},{method:"DELETE"}))}},{key:"put",value:function(e){return this.request((0,r.Z)((0,r.Z)({},e),{},{method:"PUT"}))}}]),e}())({baseURL:"https://www.yidongmall.cn",timeout:1e4});function l(e){return c.post({url:"/api/admin/login/pw",params:e})}function d(e){return c.get({url:"/api/admin/orderBy/".concat(e)})}function m(e){return c.get({url:"/api/admin/getUserInfoByName?username=".concat(e.username)})}function f(e){return c.get({url:"/api/admin/getAllTimeByDir/".concat(e)})}function p(e){return c.put({url:"/api/admin/interview",data:e})}function h(e){return c.post({url:"/api/admin/interview",data:e})}function g(e){return c.delete({url:"/api/admin/interview/".concat(e)})}function x(e){return c.get({url:"/api/admin/getUserInfoById",params:{id:e}})}function Z(){var e=localStorage.getItem("username"),n=localStorage.getItem("password");return c.post({url:"/api/admin/login/pw",params:{username:e,password:n}})}function v(e){return c.get({url:"/api/admin/ifSec/".concat(e)})}function j(){return c.get({url:"/api/admin/getPreRecruitTime"})}function y(e){return c.put({url:"/api/admin/changeRecruitTime/".concat(e)})}function b(e){return c.get({url:"/api/admin/getThisTime/".concat(e)})}function w(e,n){return c.put({url:"/api/admin/setAssess/".concat(e),params:{assess:n}})}function k(e){return c.get({url:"/api/admin/getNow/".concat(e)})}function T(e){return c.get({url:"/api/admin/getNext/".concat(e)})}function q(e){return c.post({url:"/api/admin/push/interview/".concat(e)})}function D(e,n){return c.put({url:"/api/admin/setStatus/".concat(e,"/").concat(n)})}function P(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"\u6682\u4e0d\u652f\u6301\u62a5\u540d";return c.put({url:"/api/admin/page/display",data:{isDisplay:e,message:n}})}function I(){return c.get({url:"/api/recruit/display"})}}}]);
//# sourceMappingURL=276.bbbf8f6b.chunk.js.map