"use strict";(self.webpackChunkrecruit_manage=self.webpackChunkrecruit_manage||[]).push([[276],{2276:function(e,n,t){t.r(n),t.d(n,{default:function(){return S}});var i,r,a=t(3433),s=t(9439),o=t(2791),u=t(168),l=t(2360),c=l.ZP.div(i||(i=(0,u.Z)(["\n  .items-area {\n    position: relative;\n    display: flex;\n    flex-wrap: wrap;\n    width: 100%;\n  }\n  .items-header {\n    display: flex;\n    align-items: center;\n    margin: 0 25px 0 20px;\n    padding: 10px 10px;\n    background-color: #fff;\n    border-radius: 10px;\n    .timeForm {\n      width: 100%;\n      height: 30px;\n      display: flex;\n      justify-content: space-around;\n    }\n  }\n\n  .emptyArea {\n    margin-top: 30px;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    padding: 40px;\n    width: 100%;\n    background-color: #fff;\n    .button {\n      width: 100px;\n      margin-top: 15px;\n    }\n  }\n"]))),d=t(1413),m=t(4165),p=t(5861),f=l.ZP.div(r||(r=(0,u.Z)(["\n  width: 33%;\n  padding: 15px;\n  .inner {\n    position: relative;\n    padding: 20px;\n    background-color: #fff;\n    > div {\n      margin-bottom: 10px;\n    }\n    .delete {\n      position: absolute;\n      top: 5px;\n      right: 5px;\n      padding: 5px;\n      border-radius: 3px;\n      transition: all ease 0.2s;\n      cursor: pointer;\n\n      &:hover {\n        background-color: rgba(0, 0, 0, 0.2);\n      }\n    }\n  }\n"]))),h=t(7027),x=t(8185),g=t(1717),Z=t(2835),j=t(4422),v=t(7309),y=t(5820),T=t(2622),b=t(7892),k=t.n(b),w=t(8618),q=t(184),Y=function(e){var n=e.infoData,t=(0,o.useState)(!1),i=(0,s.Z)(t,2),r=i[0],a=i[1],u=function(){var e=(0,p.Z)((0,m.Z)().mark((function e(){var t;return(0,m.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==n.isdefalut){e.next=5;break}return e.next=3,(0,w.nF)(n.id);case 3:200===(t=e.sent).code?(h.ZP.success("\u5220\u9664\u6210\u529f"),a(!0)):h.ZP.error(t.message);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r?null:(0,q.jsx)(f,{children:(0,q.jsxs)("div",{className:"inner",children:[(0,q.jsxs)(x.Z,{name:"interviewForm",onFinish:function(e){var t=(0,d.Z)((0,d.Z)((0,d.Z)({},n),e),{},{startTime:e.startTime.format("YYYY-MM-DD HH:mm:ss"),endTime:e.endTime.format("YYYY-MM-DD HH:mm:ss")});if(!0===n.isdefalut){var i={startTime:t.startTime,endTime:t.endTime,direction:1,location:t.location,quota:t.quota,spareQuota:t.spareQuota};(0,w.iX)(i).then((function(e){200===e.code?h.ZP.success(e.message):h.ZP.error(e.message),n.isdefalut=!1}))}else(0,w.lf)(t).then((function(e){200===e.code?h.ZP.success(e.message):h.ZP.error(e.message)}))},children:[(0,q.jsx)(x.Z.Item,{rules:[{required:!0,message:"\u8bf7\u586b\u5199\u65e5\u671f"}],name:"startTime",label:"\u5f00\u59cb\u65f6\u95f4",initialValue:k()(n.startTime),children:(0,q.jsx)(g.Z,{format:"YYYY-MM-DD HH:mm:ss"})}),(0,q.jsx)(x.Z.Item,{name:"endTime",label:"\u7ed3\u675f\u65f6\u95f4",initialValue:k()(n.endTime),rules:[{required:!0,message:"\u8bf7\u586b\u5199\u65e5\u671f"}],children:(0,q.jsx)(g.Z,{format:"YYYY-MM-DD HH:mm:ss"})}),(0,q.jsx)(x.Z.Item,{name:"quota",label:"\u603b\u540d\u989d",initialValue:n.quota,rules:[{required:!0,message:"\u8bf7\u586b\u5199\u540d\u989d"}],children:(0,q.jsx)(Z.Z,{type:"number"})}),(0,q.jsx)(x.Z.Item,{name:"direction",label:"\u65b9\u5411",initialValue:n.direction,rules:[{required:!0,message:"\u8bf7\u586b\u5199\u65b9\u5411"}],children:(0,q.jsxs)(j.ZP.Group,{children:[(0,q.jsx)(j.ZP,{value:1,children:" \u524d\u7aef "}),(0,q.jsx)(j.ZP,{value:2,children:" \u540e\u7aef "})]})}),(0,q.jsx)(x.Z.Item,{name:"location",label:"\u5730\u70b9",initialValue:n.location,rules:[{required:!0,message:"\u8bf7\u586b\u5199\u5730\u70b9"}],children:(0,q.jsx)(Z.Z,{})}),(0,q.jsx)(x.Z.Item,{children:(0,q.jsx)(v.ZP,{type:"primary",htmlType:"submit",children:!0===n.isdefalut?"\u786e\u5b9a\u65b0\u5efa":"\u66f4\u6539"})})]}),(0,q.jsx)(y.Z,{title:"\u5220\u9664\u9762\u8bd5\u65f6\u95f4",description:"\u4f60\u786e\u5b9a\u8981\u5220\u9664\u8fd9\u4e2a\u9762\u8bd5\u65f6\u95f4\u6bb5\u5417\uff1f",okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88",onConfirm:u,children:(0,q.jsx)("div",{className:"delete",children:(0,q.jsx)(T.Z,{style:{fontSize:"16px",color:"red"}})})})]})})},P=(0,o.memo)(Y),I=t(4664),D=t(5076),H=t(9286),S=function(){var e=(0,o.useState)([]),n=(0,s.Z)(e,2),t=n[0],i=n[1],r=(0,o.useCallback)((function(){var e=new Date;i([].concat((0,a.Z)(t),[{id:e.getTime(),startTime:e.toLocaleString(),endTime:e.toLocaleString(),quota:"",location:"",spareQuota:0,isdefalut:!0}])),setTimeout((function(){window.scrollTo(0,document.documentElement.scrollHeight)}),50)}),[t]);return(0,o.useEffect)((function(){(0,w.VJ)().then((function(e){i(e.data)}))}),[]),(0,q.jsxs)(c,{children:[(0,q.jsx)("div",{className:"items-header",children:(0,q.jsxs)(x.Z,{name:"timeForm",onFinish:function(e){console.log(e)},className:"timeForm",children:[(0,q.jsx)(x.Z.Item,{label:"\u9762\u8bd5\u5f00\u59cb\u524d\u591a\u4e45\u80fd\u9884\u7ea6\uff08\u5355\u4f4d\uff1a\u5206\u949f\uff09",name:"time",initialValue:0,children:(0,q.jsx)(Z.Z,{type:"number"})}),(0,q.jsx)(x.Z.Item,{children:(0,q.jsx)(v.ZP,{htmlType:"submit",type:"primary",children:"\u63d0\u4ea4"})})]})}),(0,q.jsx)("div",{className:"items-area",children:0!==t.length?t.map((function(e){return(0,q.jsx)(P,{infoData:e},e.id)})):(0,q.jsx)("div",{className:"emptyArea",children:(0,q.jsx)(I.Z,{imageStyle:{height:120},description:(0,q.jsx)("span",{style:{color:"#94979e"},children:"\u4ec0\u4e48\u90fd\u6ca1\u6709~"}),children:(0,q.jsx)(v.ZP,{type:"primary",onClick:r,children:"\u6dfb\u52a0\u9762\u8bd5\u65f6\u95f4"})})})}),(0,q.jsx)("div",{className:"items-tips",children:(0,q.jsx)(D.Z,{type:"primary",style:{right:24},icon:(0,q.jsx)(H.Z,{}),tooltip:(0,q.jsx)("div",{children:"\u65b0\u589e\u9762\u8bd5\u65f6\u95f4"}),onClick:r})})]})}},8618:function(e,n,t){t.d(n,{iX:function(){return p},nF:function(){return f},JT:function(){return l},VJ:function(){return d},Im:function(){return c},sz:function(){return h},x4:function(){return u},lf:function(){return m}});var i=t(1413),r=t(5671),a=t(3144),s=t(1243),o=new(function(){function e(n){(0,r.Z)(this,e),this.instance=void 0,this.instance=s.Z.create(n),this.instance.interceptors.request.use((function(e){if(null!==localStorage.getItem("token")){var n=localStorage.getItem("token");e.headers.token="".concat(n)}else console.log("\u5220\u9664 token \u4e86"),delete e.headers.Authorization;return e}),(function(e){return e})),this.instance.interceptors.response.use((function(e){return e.data}),(function(e){return e}))}return(0,a.Z)(e,[{key:"request",value:function(e){return this.instance.request(e)}},{key:"get",value:function(e){return this.request((0,i.Z)((0,i.Z)({},e),{},{method:"GET"}))}},{key:"post",value:function(e){return this.request((0,i.Z)((0,i.Z)({},e),{},{method:"POST"}))}},{key:"delete",value:function(e){return this.request((0,i.Z)((0,i.Z)({},e),{},{method:"DELETE"}))}}]),e}())({baseURL:"https://www.yidongmall.cn",timeout:1e4});function u(e){return o.post({url:"/api/admin/login/pw",params:e})}function l(e){return o.get({url:"/api/admin/orderBy/".concat(e)})}function c(e){return o.get({url:"/api/admin/getUserInfoByName?username=".concat(e.username)})}function d(){return o.get({url:"/api/admin/getAllTime"})}function m(e){return o.post({url:"/api/admin/updateTime",data:e})}function p(e){return o.post({url:"/api/admin/addTime",data:e})}function f(e){return o.get({url:"/api/admin/deleteTime/".concat(e)})}function h(e){return o.get({url:"/api/admin/getUserInfoById",data:e})}}}]);
//# sourceMappingURL=276.2a24ba46.chunk.js.map