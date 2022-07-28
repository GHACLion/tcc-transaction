(this["webpackJsonptcc-transaction-web"]=this["webpackJsonptcc-transaction-web"]||[]).push([[0],{190:function(e,t,a){e.exports=a(290)},195:function(e,t,a){},200:function(e,t,a){},290:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(26),l=a.n(o);a(195),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=a(55),c=a(73),s=a(25),m=(a(199),a(200),a(52)),d=a.n(m),u=a(75),p=a(21),f=a(294),b=a(176),E=a(298),g=a(296),y=a(33),h=a(31),k=a(173),v=a.n(k),x=a(184),O=v.a.create({baseURL:"",timeout:2e4});O.interceptors.request.use((function(e){if(!e.url.includes("/api/user/login")){var t=localStorage.getItem("tcc-token");t&&(e.headers.Authorization=t)}return e}),(function(e){throw new Error(e)}));O.interceptors.response.use((function(e){console.log("http.interceptors.response",e);var t=null,a=e.data;return e.status&&200===e.status?401===e.status?t="\u8bf7\u5148\u767b\u5f55":a.code&&200!==a.code&&"200"!==a.code&&(t=a.code+"-"+a.message||"Error"):t="\u670d\u52a1\u5f02\u5e38\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5!",null!=t?(x.b.error(t),Promise.reject(t)):a.data}),(function(e){if(console.log("http.interceptors.response err",e),e.response){var t=e.response,a=t.data,n=void 0===a?{}:a,r=t.status,o="HTTP ERROR: ".concat(r);return"string"===typeof n?o=n:"object"===typeof n&&(o=n.message),401===r?(!function(){var e=window.location.href;localStorage.removeItem("token");var t=e.split("#")[0];window.location.href="".concat(t,"#/login")}(),x.b.error("\u8bf7\u5148\u767b\u5f55")):x.b.error(o),Promise.reject(e.response)}return x.b.error("\u670d\u52a1\u5f02\u5e38\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5!"),Promise.reject(e)}));var S=O;function j(e){return S.post("/tcc-transaction-dashboard/api/transaction/confirm",{domain:e.domain,xidString:e.xidString})}function C(e){return S.post("/tcc-transaction-dashboard/api/transaction/reset",{domain:e.domain,xidString:e.xidString})}function w(e){return S.post("/tcc-transaction-dashboard/api/transaction/cancel",{domain:e.domain,xidString:e.xidString})}function I(e){return S.post("/tcc-transaction-dashboard/api/transaction/markDeleted",{domain:e.domain,xidString:e.xidString})}function T(e){return S.post("/tcc-transaction-dashboard/api/transaction/restore",{domain:e.domain,xidString:e.xidString})}function N(e){return S.post("/tcc-transaction-dashboard/api/transaction/delete",{domain:e.domain,xidString:e.xidString})}var z=a(299),R=a(303),D=function(e){var t=e.history,a=Object(n.useState)(!1),o=Object(p.a)(a,2),l=o[0],i=o[1],c=f.a.useForm(),s=Object(p.a)(c,1)[0],m=function(){var e=Object(u.a)(d.a.mark((function e(){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.validateFields();case 2:a=e.sent,i(!0),(n=a,S.post("/tcc-transaction-dashboard/api/user/login",Object(h.a)({},n))).then((function(e){localStorage.setItem("tcc-token",e.token),localStorage.setItem("username",e.username),localStorage.setItem("connectionMode",e.connectionMode),t.push("/welcome"),i(!1)})).catch((function(e){i(!1)}));case 5:case"end":return e.stop()}var n}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"login-container"},r.a.createElement(b.a,{spinning:l,size:"large",delay:500},r.a.createElement(E.a,{title:"TCC\u7ba1\u7406\u540e\u53f0",style:{width:500,margin:"15rem auto"},hoverable:!0},r.a.createElement(f.a,{name:"basic",form:s,autoComplete:"off"},r.a.createElement(f.a.Item,{name:"username",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7528\u6237\u540d!"}]},r.a.createElement(g.a,{size:"large",placeholder:"\u7528\u6237\u540d",prefix:r.a.createElement(z.a,null)})),r.a.createElement(f.a.Item,{name:"password",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801!"}]},r.a.createElement(g.a.Password,{size:"large",placeholder:"\u5bc6\u7801",prefix:r.a.createElement(R.a,null)})),r.a.createElement(f.a.Item,null,r.a.createElement(y.a,{type:"primary",htmlType:"submit",onClick:m,block:!0},"\u767b\u5f55"))))))},F=function(){return r.a.createElement("div",{style:{margin:"15rem 22rem"}},r.a.createElement("h1",{style:{fontSize:"30px"}},"\u6b22\u8fce\u6765\u5230TCC\u7ba1\u7406\u540e\u53f0"))},U=a(105),A=a(71),K=a(301),M=a(302),P=a(96),V=a(53),L=a(293),q=a(297),G=U.a.Option,W=function(e){var t=Object(n.useState)([]),a=Object(p.a)(t,2),o=a[0],l=a[1],i=Object(n.useState)(!1),c=Object(p.a)(i,2),s=c[0],m=c[1],b=Object(n.useState)(!1),E=Object(p.a)(b,2),k=E[0],v=E[1],O=Object(n.useState)(!1),j=Object(p.a)(O,2),C=j[0],w=j[1],I=Object(n.useState)(!1),T=Object(p.a)(I,2),N=T[0],z=T[1],R=f.a.useForm(),D=Object(p.a)(R,1)[0],F=f.a.useForm(),W=Object(p.a)(F,1)[0],B=function(e,t){if(e&&e.length>20){var a=String(e).substr(0,20).concat("...");return r.a.createElement("div",null,r.a.createElement(A.a,{placement:"top",title:e},r.a.createElement(y.a,null,a)))}return e},H=[{title:"domain",key:"domain",dataIndex:"domain",width:150},{title:"\u624b\u673a\u53f7",key:"phoneNumbers",dataIndex:"phoneNumbers",width:200,render:B},{title:"\u544a\u8b66\u7c7b\u578b",key:"alertType",dataIndex:"alertType",width:100,render:function(e,t){return"DING"===e?"\u9489\u9489":"SMS"===e?"\u77ed\u4fe1":"PHONE"===e?"\u7535\u8bdd":"UNKONW"}},{title:"\u544a\u8b66\u9608\u503c",key:"threshold",dataIndex:"threshold",width:100},{title:"\u544a\u8b66\u95f4\u9694(\u5206\u949f)",key:"intervalMinutes",dataIndex:"intervalMinutes",width:100},{title:"\u4e0a\u6b21\u544a\u8b66\u65f6\u95f4",key:"lastAlertTime",dataIndex:"lastAlertTime",width:100},{title:"\u9489\u9489\u673a\u5668\u4eba",key:"dingRobotUrl",dataIndex:"dingRobotUrl",width:250,render:B},{title:"\u521b\u5efa\u65f6\u95f4",key:"createTime",dataIndex:"createTime",width:150},{title:"\u4fee\u6539\u65f6\u95f4",key:"lastUpdateTime",dataIndex:"lastUpdateTime",width:150},{title:"\u7248\u672c\u53f7",key:"version",dataIndex:"version",width:80},{title:"\u64cd\u4f5c",key:"operation",fixed:"right",width:180,render:function(e,t){return r.a.createElement(K.b,null,r.a.createElement(y.a,{size:"small",type:"primary",onClick:function(){X(t)}},"\u4fee\u6539"),r.a.createElement(M.a,{title:"\u662f\u5426\u6267\u884c",onConfirm:function(){Q(t)},okText:"\u662f",cancelText:"\u5426"},r.a.createElement(y.a,{size:"small",type:"primary",style:{backgroundColor:"#faad14",borderColor:"#faad14"},danger:!0},"\u544a\u8b66\u6d4b\u8bd5")),r.a.createElement(M.a,{title:"\u662f\u5426\u5220\u9664",onConfirm:function(){$(t)},okText:"\u662f",cancelText:"\u5426"},r.a.createElement(y.a,{size:"small",type:"primary",danger:!0},"\u5220\u9664")))}}];Object(n.useEffect)((function(){_()}),[]),Object(n.useEffect)((function(){W.resetFields()}),[N]);var _=function(){m(!0),S.get("/tcc-transaction-dashboard/api/domain/all").then((function(e){m(!1),l(e)})).catch((function(e){m(!1)}))},J=function(){var e=Object(u.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.validateFields();case 2:t=e.sent,(a=t,S.post("/tcc-transaction-dashboard/api/domain/create",Object(h.a)({},a))).then((function(e){v(!1),_()})).catch((function(e){}));case 4:case"end":return e.stop()}var a}),e)})));return function(){return e.apply(this,arguments)}}(),X=function(e){w(!0),z(Object(h.a)({},e))},Y=function(){var e=Object(u.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.validateFields();case 2:t=e.sent,(a=t,S.post("/tcc-transaction-dashboard/api/domain/modify",Object(h.a)({},a))).then((function(e){w(!1),_()}));case 4:case"end":return e.stop()}var a}),e)})));return function(){return e.apply(this,arguments)}}(),$=function(e){var t;(t=e,S.post("/tcc-transaction-dashboard/api/domain/delete",Object(h.a)({},t))).then((function(e){_()}))},Q=function(e){var t;(t=e,S.post("/tcc-transaction-dashboard/api/domain/alertTest",Object(h.a)({},t))).then((function(e){x.b.info("\u544a\u8b66\u6d4b\u8bd5\u6210\u529f\uff01")}))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(P.a,{style:{paddingBottom:"12px",paddingRight:"12px"}},r.a.createElement(V.a,{span:1},r.a.createElement(y.a,{style:{backgroundColor:"#faad14",borderColor:"#faad14"},type:"primary",size:"small",danger:!0,onClick:function(){v(!0)}},"\u65b0\u589e")),r.a.createElement(V.a,{span:22},"\xa0"),r.a.createElement(V.a,{span:1},r.a.createElement(y.a,{type:"primary",size:"small",onClick:function(){return _()}},"\u5237\u65b0"))),r.a.createElement(L.a,{rowKey:function(e){return e.domain},columns:H,loading:s,dataSource:o,scroll:{x:2e3,y:800}}),r.a.createElement(q.a,{title:"\u65b0\u589eDomain",visible:k,getContainer:!1,forceRender:!0,closable:!1,footer:[r.a.createElement(y.a,{key:"cancel",onClick:function(){v(!1)}},"\u53d6\u6d88"),r.a.createElement(y.a,{key:"submit",type:"primary",onClick:J},"\u786e\u8ba4")]},r.a.createElement(f.a,{name:"basic",form:D,labelCol:{span:6},wrapperCol:{span:16},autoComplete:"off"},r.a.createElement(f.a.Item,{label:"domain",name:"domain",rules:[{required:!0,message:"\u8bf7\u8f93\u5165domain"}]},r.a.createElement(g.a,null)),r.a.createElement(f.a.Item,{label:"\u624b\u673a\u53f7\u5217\u8868",name:"phoneNumbers",rules:[{pattern:"[1-9][0-9]{10}(,[1-9][0-9]{10}){0,20}$",message:"\u624b\u673a\u53f7\u5217\u8868\u683c\u5f0f\u6709\u8bef\uff0c\u5f62\u5982\uff1a12345678901,12345678902"}]},r.a.createElement(g.a,null)),r.a.createElement(f.a.Item,{label:"\u544a\u8b66\u7c7b\u578b",initialValue:"DING",name:"alertType",rules:[{required:!0,message:"\u544a\u8b66\u7c7b\u578b\u5fc5\u586b"}]},r.a.createElement(U.a,{style:{width:80,margin:"0 8px"}},r.a.createElement(G,{value:"DING"},"\u9489\u9489"),r.a.createElement(G,{value:"SMS",disabled:!0},"\u77ed\u4fe1"),r.a.createElement(G,{value:"PHONE",disabled:!0},"\u7535\u8bdd"))),r.a.createElement(f.a.Item,{label:"\u544a\u8b66\u9608\u503c",name:"threshold",rules:[{pattern:"[0-9]+",message:"\u5fc5\u987b\u4e3a\u6574\u6570"}]},r.a.createElement(g.a,null)),r.a.createElement(f.a.Item,{label:"\u544a\u8b66\u95f4\u9694(\u5206\u949f)",name:"intervalMinutes",rules:[{pattern:"[0-9]+",message:"\u5fc5\u987b\u4e3a\u6574\u6570"}]},r.a.createElement(g.a,null)),r.a.createElement(f.a.Item,{label:"\u9489\u9489\u673a\u5668\u4eba\u5730\u5740",name:"dingRobotUrl"},r.a.createElement(g.a,null)))),r.a.createElement(q.a,{title:"\u4fee\u6539Domain",visible:C,getContainer:!1,forceRender:!0,closable:!1,footer:[r.a.createElement(y.a,{key:"cancel",onClick:function(){w(!1)}},"\u53d6\u6d88"),r.a.createElement(y.a,{key:"submit",type:"primary",onClick:Y},"\u786e\u8ba4")]},r.a.createElement(f.a,{name:"basic",form:W,labelCol:{span:6},wrapperCol:{span:16},autoComplete:"off"},r.a.createElement(f.a.Item,{label:"domain",name:"domain",initialValue:N.domain,rules:[{required:!0,message:"\u8bf7\u8f93\u5165domain"}]},r.a.createElement(g.a,{disabled:!0})),r.a.createElement(f.a.Item,{label:"\u624b\u673a\u53f7\u5217\u8868",initialValue:N.phoneNumbers,name:"phoneNumbers",rules:[{pattern:"[1-9][0-9]{10}(,[1-9][0-9]{10}){0,20}$",message:"\u624b\u673a\u53f7\u5217\u8868\u683c\u5f0f\u6709\u8bef\uff0c\u5f62\u5982\uff1a12345678901,12345678902"}]},r.a.createElement(g.a,null)),r.a.createElement(f.a.Item,{label:"\u544a\u8b66\u7c7b\u578b",initialValue:N.alertType,name:"alertType",rules:[{required:!0,message:"\u544a\u8b66\u7c7b\u578b\u5fc5\u586b"}]},r.a.createElement(U.a,{style:{width:80,margin:"0 8px"}},r.a.createElement(G,{value:"DING"},"\u9489\u9489"),r.a.createElement(G,{value:"SMS",disabled:!0},"\u77ed\u4fe1"),r.a.createElement(G,{value:"PHONE",disabled:!0},"\u7535\u8bdd"))),r.a.createElement(f.a.Item,{label:"\u544a\u8b66\u9608\u503c",initialValue:String(N.threshold),name:"threshold",rules:[{pattern:"[0-9]+",message:"\u5fc5\u987b\u4e3a\u6574\u6570"}]},r.a.createElement(g.a,null)),r.a.createElement(f.a.Item,{label:"\u544a\u8b66\u95f4\u9694(\u5206\u949f)",initialValue:String(N.intervalMinutes),name:"intervalMinutes",rules:[{pattern:"[0-9]+",message:"\u5fc5\u987b\u4e3a\u6574\u6570"}]},r.a.createElement(g.a,null)),r.a.createElement(f.a.Item,{label:"\u9489\u9489\u673a\u5668\u4eba\u5730\u5740",initialValue:N.dingRobotUrl,name:"dingRobotUrl"},r.a.createElement(g.a,null)))))},B=a(151),H="UPDATE_DOMAIN_DATA",_="UPDATE_CURRENT_DOMAIN",J=function(e){var t=Object(i.c)((function(e){return e.domain})).domainData,a=Object(i.b)();return r.a.createElement("div",{className:"search-panel",style:{margin:"30px 0"}},r.a.createElement(f.a,{layout:"inline",onFinish:function(e){a({type:_,payload:e})}},r.a.createElement(f.a.Item,{label:"domain",name:"domain",initialValue:e.domain,rules:[{required:!0,message:"\u8bf7\u8f93\u5165"}]},r.a.createElement(U.a,{style:{width:400},placeholder:"\u8bf7\u9009\u62e9",showSearch:!0},t.map((function(e,t){return r.a.createElement(U.a.Option,{key:t,value:e},e)})))),r.a.createElement(f.a.Item,{label:"xid",name:"xidString"},r.a.createElement(g.a,{allowClear:!0,style:{width:400}})),r.a.createElement(f.a.Item,null,r.a.createElement(y.a,{type:"primary",htmlType:"submit"},"\u67e5\u8be2"),"\xa0\xa0\xa0")))},X=a(300),Y=function(e,t){return e?String(e).split(".")[0]:e},$=function(e,t){var a=e;return e&&e.length>40&&(a=String(e).substr(0,40).concat("...")),r.a.createElement("div",null,a,r.a.createElement(y.a,{className:"button",size:"small",type:"primary",style:{backgroundColor:"#03cee0",borderColor:"#03cee0"},onClick:function(){var t=document.createElement("input");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("Copy"),x.b.success("\u590d\u5236\u6210\u529f"),t.remove()}},"\u590d\u5236"))},Q=[{title:"domain",dataIndex:"domain",key:"domain",width:150},{title:"xid",dataIndex:"xidString",key:"xidString",width:200,render:$},{title:"rootDomain",dataIndex:"rootDomain",key:"rootDomain",width:150},{title:"rootXid",dataIndex:"rootXidString",key:"rootXidString",width:200,render:$},{title:"\u72b6\u6001",dataIndex:"statusId",key:"status",width:120,render:function(e,t){return 1===e?"TRYING":2===e?"CONFIRMING":3===e?"CANCELLING":11===e?"TRY_SUCCESS":12===e?"TRY_FAILED":"UNKONW"}},{title:"\u4e8b\u4ef6\u7c7b\u578b",dataIndex:"transactionTypeId",key:"transactionType",width:100,render:function(e,t){return 1===e?"ROOT":2===e?"BRANCH":"UNKONW"}},{title:"\u5df2\u91cd\u8bd5\u6570",dataIndex:"retriedCount",key:"retriedCount",width:120},{title:"\u521b\u5efa\u65f6\u95f4",dataIndex:"createTime",key:"createTime",width:180,render:Y},{title:"\u4fee\u6539\u65f6\u95f4",dataIndex:"lastUpdateTime",key:"lastUpdateTime",width:180,render:Y},{title:"\u7248\u672c\u53f7",dataIndex:"version",key:"version",width:80}],Z=a(180),ee=a.n(Z),te=a(134),ae=function(e){var t=e.activeTabKey,a="deletedKeys"===t,o=Object(i.c)((function(e){return e.domain})),l=o.currentDomain,c=o.xidString,s=o.refresh,m=Object(n.useState)([]),d=Object(p.a)(m,2),u=d[0],f=d[1],b=Object(n.useState)(0),g=Object(p.a)(b,2),k=g[0],v=g[1],O=Object(n.useState)(!1),z=Object(p.a)(O,2),R=z[0],D=z[1],F=Object(n.useState)([]),U=Object(p.a)(F,2),A=U[0],P=U[1],V=Object(n.useState)([]),G=Object(p.a)(V,2),W=G[0],B=G[1],H={selectedRowKeys:W,onChange:function(e,t){console.log("selectedRows changed: ",t),P(t),B(e)}},_={offset:null,pageSize:1e3,forward:!0},J=(Object(h.a)({},_),function(){f([]),P([]),B([]),Y(_)}),Y=function(e){l&&(D(!0),function(e){var t=e.domain,a=e.xidString,n=e.offset,r=e.pageSize,o=e.deleted;return S.post("/tcc-transaction-dashboard/api/transaction/list",{domain:t,xidString:a,offset:n,pageSize:r,markDeleted:o})}({domain:l,xidString:c,offset:e.offset,pageSize:e.pageSize,deleted:a}).then((function(e){D(!1),f(e.items),v(e.total),e.items&&e.items.length<=0&&x.b.success("\u6ca1\u6709\u6570\u636e\u4e86\ud83d\ude01")})).catch((function(e){D(!1),x.b.error("\u670d\u52a1\u5f02\u5e38\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5")})))};Object(n.useEffect)((function(){J()}),[s,t]);var $=function(e){if(!A||A.length<=0)x.b.warn("\u8bf7\u81f3\u5c11\u9009\u62e9\u4e00\u6761\u4e8b\u4ef6");else{for(var t=new Array,a=0;a<A.length;a++)t.push(e(Object(h.a)({},A[a])));Promise.all(t).then((function(e){var t=e.length;x.b.success("\u6279\u91cf\u64cd\u4f5c\u6210\u529f"),t>0&&J()})).catch((function(e){x.b.error(e.message||"\u670d\u52a1\u5f02\u5e38\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5")}))}},Z=function(e){(function(e){var t=e.domain,a=e.xidString;return S.post("/tcc-transaction-dashboard/api/transaction/detail",{domain:t,xidString:a})})(e).then((function(e){var t,a=!0;try{console.log("contentFormat",e),t=JSON.parse(e.content)}catch(n){t=[e.content],a=!1}q.a.info({icon:!0===a?r.a.createElement(te.a,null):r.a.createElement(te.a,{style:{color:"red"}}),content:r.a.createElement(r.a.Fragment,null,!0===a?r.a.createElement("p",null):r.a.createElement("p",{style:{color:"red"}},"\u4e8b\u4ef6\u8be6\u60c5\u89e3\u6790\u5f02\u5e38\uff0c\u964d\u7ea7\u4e3abase64\u5c55\u793a\uff0c\u53ef\u590d\u5236\u5185\u5bb9\u53bb\u6e90\u670d\u52a1\u8fdb\u884c\u4eba\u5de5\u89e3\u6790"),r.a.createElement(ee.a,{collapseStringsAfterLength:100,src:t})),width:"90%"})}))};return r.a.createElement(E.a,null,a?r.a.createElement(K.b,{size:"small",style:{float:"left",marginBottom:"1rem"}},r.a.createElement(M.a,{title:"\u662f\u5426\u6267\u884c",onConfirm:function(){return $(T)},okText:"\u662f",cancelText:"\u5426"},r.a.createElement(y.a,{size:"small",type:"primary",style:{backgroundColor:"#faad14",borderColor:"#faad14"}},"\u6062\u590d")),r.a.createElement(M.a,{title:"\u662f\u5426\u6267\u884c",onConfirm:function(){return $(N)},okText:"\u662f",cancelText:"\u5426"},r.a.createElement(y.a,{size:"small",type:"primary",danger:!0},"\u5f7b\u5e95\u5220\u9664"))):r.a.createElement(K.b,{size:"small",style:{float:"left",marginBottom:"1rem"}},r.a.createElement(M.a,{title:"\u662f\u5426\u6267\u884c",onConfirm:function(){return $(j)},okText:"\u662f",cancelText:"\u5426"},r.a.createElement(y.a,{size:"small",type:"primary",style:{backgroundColor:"#faad14",borderColor:"#faad14"}},"\u786e\u8ba4")),r.a.createElement(M.a,{title:"\u662f\u5426\u6267\u884c",onConfirm:function(){return $(w)},okText:"\u662f",cancelText:"\u5426"},r.a.createElement(y.a,{size:"small",type:"primary",style:{backgroundColor:"#faad14",borderColor:"#faad14"}},"\u53d6\u6d88")),r.a.createElement(M.a,{title:"\u662f\u5426\u6267\u884c",onConfirm:function(){return $(C)},okText:"\u662f",cancelText:"\u5426"},r.a.createElement(y.a,{size:"small",type:"primary",style:{backgroundColor:"#faad14",borderColor:"#faad14"}},"\u91cd\u7f6e")),r.a.createElement(M.a,{title:"\u662f\u5426\u6267\u884c",onConfirm:function(){return $(I)},okText:"\u662f",cancelText:"\u5426"},r.a.createElement(y.a,{size:"small",type:"primary",danger:!0},"\u5220\u9664"))),r.a.createElement(K.b,{size:"small",style:{float:"right"}},r.a.createElement(X.a,{color:"#f50"},"\u603b\u6570:",k>1e3?k+", \u4ec5\u663e\u793a1000\u6761":k)),r.a.createElement(L.a,{rowKey:function(e){return e.xidString},rowSelection:H,columns:Q.concat({title:"\u4e8b\u4ef6\u8be6\u60c5",key:"detail",fixed:"right",width:80,render:function(e,t){return r.a.createElement(K.b,null,r.a.createElement(y.a,{className:"button",size:"small",type:"primary",onClick:function(){Z(t)}},"\u8be6\u60c5"))}}),dataSource:u,size:"small",bordered:!0,loading:R,pagination:!0,scroll:{x:1500,y:800}}))},ne=B.a.TabPane,re=function(){var e=Object(n.useState)("normal"),t=Object(p.a)(e,2),a=t[0],o=t[1],l=Object(i.c)((function(e){return e.domain})),c=l.currentDomain,s=(l.domainData,Object(i.b)()),m=function(){S.get("/tcc-transaction-dashboard/api/domain/allKeys").then((function(e){s({type:H,payload:e})}))};Object(n.useEffect)((function(){m()}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(J,{domain:c}),r.a.createElement("div",{className:"content"},r.a.createElement(B.a,{defaultActiveKey:"normal",onChange:function(e){console.log("tabPane onTabChange",e,c),o(e)},activeKey:a},r.a.createElement(ne,{tab:"Normal",key:"normal"}),r.a.createElement(ne,{tab:"Deleted Keys",key:"deletedKeys"})),r.a.createElement(ae,{key:c,activeTabKey:a})))},oe=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)(!1),i=Object(p.a)(l,2),c=i[0],s=i[1],m=Object(n.useState)(!1),b=Object(p.a)(m,2),E=b[0],k=b[1],v=Object(n.useState)({}),O=Object(p.a)(v,2),j=O[0],C=O[1],w=f.a.useForm(),I=Object(p.a)(w,1)[0];Object(n.useEffect)((function(){T()}),[]),Object(n.useEffect)((function(){I.resetFields()}),[j]);var T=function(){s(!0),S.get("/tcc-transaction-dashboard/api/task/all").then((function(e){s(!1),o(e)})).catch((function(e){s(!1),x.b.error("\u670d\u52a1\u5f02\u5e38\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5")}))},N=[{title:"domain",dataIndex:"domain",key:"domain"},{title:"job\u7ec4",dataIndex:"jobGroup",key:"jobGroup"},{title:"job\u540d\u79f0",dataIndex:"jobName",key:"jobName"},{title:"cron\u8868\u8fbe\u5f0f",dataIndex:"cronExpression",key:"cronExpression"},{title:"\u72b6\u6001",dataIndex:"status",key:"status"},{title:"\u64cd\u4f5c",key:"operation",render:function(e,t){return r.a.createElement(K.b,null,"NORMAL"===t.status?r.a.createElement(M.a,{title:"\u662f\u5426\u6267\u884c",onConfirm:function(){var e;(e=t.domain,S.get("/tcc-transaction-dashboard/api/task/pause/"+e)).then((function(e){T()}))},okText:"\u662f",cancelText:"\u5426"},r.a.createElement(y.a,{size:"small",type:"primary",danger:!0},"\u505c\u6b62")):r.a.createElement(r.a.Fragment,null),"NORMAL"!==t.status?r.a.createElement(M.a,{title:"\u662f\u5426\u6267\u884c",onConfirm:function(){var e;(e=t.domain,S.get("/tcc-transaction-dashboard/api/task/resume/"+e)).then((function(e){T()}))},okText:"\u662f",cancelText:"\u5426"},r.a.createElement(y.a,{size:"small",type:"primary",style:{backgroundColor:"#faad14",borderColor:"#faad14"}},"\u6062\u590d")):r.a.createElement(r.a.Fragment,null),r.a.createElement(y.a,{size:"small",type:"primary",onClick:function(){z(t)}},"\u4fee\u6539"))}}],z=function(e){C(Object(h.a)({},e)),k(!0)},R=function(){var e=Object(u.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.validateFields();case 2:t=e.sent,(a=t,S.post("/tcc-transaction-dashboard/api/task/modifyCron",{domain:a.domain,cronExpression:a.cronExpression})).then((function(e){k(!1),T()})).catch((function(e){x.b.error("\u670d\u52a1\u5f02\u5e38\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5")}));case 4:case"end":return e.stop()}var a}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(P.a,{style:{padding:"12px"}},r.a.createElement(V.a,{span:23},"\xa0"),r.a.createElement(V.a,{span:1},r.a.createElement(y.a,{type:"primary",size:"small",onClick:function(){return T()}},"\u5237\u65b0"))),r.a.createElement(L.a,{rowKey:function(e){return e.domain},dataSource:a,columns:N,pagination:!1,loading:c}),r.a.createElement(q.a,{title:"\u4fee\u6539",visible:E,getContainer:!1,forceRender:!0,closable:!1,footer:[r.a.createElement(y.a,{key:"cancel",onClick:function(){k(!1)}},"\u53d6\u6d88"),r.a.createElement(y.a,{key:"submit",type:"primary",onClick:R},"\u786e\u8ba4")]},r.a.createElement(f.a,{name:"basic",form:I,labelCol:{span:6},wrapperCol:{span:16},onFinish:R,autoComplete:"off"},r.a.createElement(f.a.Item,{label:"domain",name:"domain",initialValue:j.domain},r.a.createElement(g.a,{disabled:!0})),r.a.createElement(f.a.Item,{label:"cron\u8868\u8fbe\u5f0f",name:"cronExpression",initialValue:j.cronExpression,rules:[{required:!0,message:"\u8bf7\u8f93\u5165cronExpression"}]},r.a.createElement(g.a,null)))))},le=a(127),ie=a(181),ce={domainData:[],currentDomain:"",xidString:null,refresh:0};var se=Object(le.createStore)(Object(le.combineReducers)({domain:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case H:return Object(h.a)(Object(h.a)({},e),{},{domainData:n});case _:return Object(h.a)(Object(h.a)({},e),{},{currentDomain:n.domain,xidString:n.xidString,refresh:e.refresh+1});default:return e}}}),Object(ie.composeWithDevTools)()),me=a(292),de=a(81),ue=a(295),pe=a(130),fe=a(140),be=me.a.Header,Ee=Object(s.g)((function(e){var t=e.history,a=Object(n.useState)(!1),o=Object(p.a)(a,2),l=o[0],i=o[1],c=localStorage.getItem("username"),s=function(){localStorage.clear(),t.push("/login")},m=r.a.createElement(de.a,{onClick:function(e){"logout"===e.key&&s(),i(!1)},theme:"dark"},r.a.createElement(de.a.Item,{key:"logout"},"\u767b\u51fa"));return r.a.createElement(be,{style:{backgroundColor:"#001529",padding:"0px"}},r.a.createElement("span",{style:{top:"0.6rem",position:"relative",display:"inline-block"}},r.a.createElement(ue.a,{width:30,preview:!1,src:"logo192.png"})),r.a.createElement("span",{style:{color:"#fff",fontSize:18,fontWeight:"bold"}},"TCC\u7ba1\u7406\u540e\u53f0"),r.a.createElement("span",{style:{float:"right"}},c?r.a.createElement(pe.a,{overlay:m,onVisibleChange:function(e){i(e)},visible:l},r.a.createElement(y.a,{type:"primary",danger:!0,ghost:!0},r.a.createElement(K.b,null,c,r.a.createElement(fe.a,null)))):r.a.createElement(y.a,{onClick:function(){return console.log("toLogin"),void t.push("/login")}},"\u767b\u5f55")))})),ge=me.a.Content,ye=me.a.Sider,he=Object(s.g)((function(e){var t=e.history,a=e.routeList,o=Object(n.useState)(null),l=Object(p.a)(o,2),i=l[0],s=l[1],m=localStorage.getItem("connectionMode"),d=m&&"SERVER"===m.toUpperCase();return Object(n.useEffect)((function(){var e=window.location.href;console.log("app",e);var a=e.lastIndexOf("/"),n="welcome";e.endsWith("/")||(n=e.substring(a+1)),t.push("/"+n),s(n)}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(me.a,{className:"layout"},r.a.createElement(Ee,null),r.a.createElement(me.a,null,r.a.createElement(ye,null,r.a.createElement(de.a,{selectedKeys:[i],defaultSelectedKeys:["welcome"],theme:"dark",onClick:function(e){s(e.key)}},r.a.createElement(de.a.Item,{key:"welcome"},r.a.createElement(c.b,{to:"/welcome"},"\u9996\u9875")),r.a.createElement(de.a.Item,{key:"domain"},r.a.createElement(c.b,{to:"/domain"},"Domain\u7ba1\u7406")),r.a.createElement(de.a.Item,{key:"transaction"},r.a.createElement(c.b,{to:"/transaction"},"\u4e8b\u4ef6\u7ba1\u7406")),d?r.a.createElement(de.a.Item,{key:"task"},r.a.createElement(c.b,{to:"/task"},"\u4efb\u52a1\u7ba1\u7406")):r.a.createElement(r.a.Fragment,null))),r.a.createElement(ge,null,r.a.createElement("div",{className:"site-layout-content"},a)))))}));var ke=function(e){return r.a.createElement(i.a,{store:se},r.a.createElement(c.a,{forceRefresh:!1},r.a.createElement(s.d,null,r.a.createElement(s.b,{key:"login",path:"/login",component:D}),r.a.createElement(he,{routeList:r.a.createElement(r.a.Fragment,null,r.a.createElement(s.b,{path:"/welcome",component:F}),r.a.createElement(s.b,{path:"/domain",component:W}),r.a.createElement(s.b,{path:"/transaction",component:re}),r.a.createElement(s.b,{path:"/task",component:oe}))}),r.a.createElement(s.a,{to:"/welcome",from:"/"}))))};l.a.render(r.a.createElement(ke,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[190,1,2]]]);
//# sourceMappingURL=main.afde1a6b.chunk.js.map