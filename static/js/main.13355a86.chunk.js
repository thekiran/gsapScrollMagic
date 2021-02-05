(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(e,t){},136:function(e,t,a){},137:function(e,t,a){},138:function(e,t,a){},143:function(e,t,a){},146:function(e,t,a){},157:function(e,t,a){},161:function(e,t,a){},162:function(e,t,a){},163:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(45),i=a.n(r),c=(a(86),a(7)),o=a(8),l=a(10),u=a(9),m=a(11),d=a(6),h=a.n(d),p=a(12),v=a(168),g=a(75),f=a(117),b=new(function(){function e(){Object(c.a)(this,e),this.socket=null,this.eventEmitter=new f.EventEmitter}return Object(o.a)(e,[{key:"establishSocketConnection",value:function(e){try{this.socket=g("http://localhost:4000",{query:"userId=".concat(e)})}catch(t){alert("Something went wrong; Can't connect to socket server")}}},{key:"getChatList",value:function(e){var t=this;this.socket.emit("chat-list",{userId:e}),this.socket.on("chat-list-response",function(e){t.eventEmitter.emit("chat-list-response",e)})}},{key:"sendMessage",value:function(e){this.socket.emit("add-message",e)}},{key:"receiveMessage",value:function(){var e=this;this.socket.on("add-message-response",function(t){e.eventEmitter.emit("add-message-response",t)})}},{key:"logout",value:function(e){var t=this;this.socket.emit("logout",e),this.socket.on("logout-response",function(e){t.eventEmitter.emit("logout-response",e)})}}]),e}()),y=a(24),E=new(function(){function e(){Object(c.a)(this,e)}return Object(o.a)(e,[{key:"getUserId",value:function(){return new Promise(function(e,t){try{e(localStorage.getItem("userid"))}catch(a){t(a)}})}},{key:"removeLS",value:function(){return new Promise(function(e,t){try{localStorage.removeItem("userid"),localStorage.removeItem("username"),e(!0)}catch(a){t(a)}})}},{key:"setLS",value:function(e,t){return new Promise(function(a,n){try{localStorage.setItem(e,t),a(!0)}catch(s){n(s)}})}},{key:"login",value:function(e){return new Promise(function(){var t=Object(p.a)(h.a.mark(function t(a,n){var s;return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.post("http://localhost:4000/login",e);case 3:s=t.sent,a(s.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),n(t.t0);case 10:case"end":return t.stop()}},t,null,[[0,7]])}));return function(e,a){return t.apply(this,arguments)}}())}},{key:"checkUsernameAvailability",value:function(e){return new Promise(function(){var t=Object(p.a)(h.a.mark(function t(a,n){var s;return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.post("http://localhost:4000/usernameAvailable",{username:e});case 3:s=t.sent,a(s.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),n(t.t0);case 10:case"end":return t.stop()}},t,null,[[0,7]])}));return function(e,a){return t.apply(this,arguments)}}())}},{key:"register",value:function(e){return new Promise(function(){var t=Object(p.a)(h.a.mark(function t(a,n){var s;return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.post("http://localhost:4000/register",e);case 3:s=t.sent,a(s.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),n(t.t0);case 10:case"end":return t.stop()}},t,null,[[0,7]])}));return function(e,a){return t.apply(this,arguments)}}())}},{key:"userSessionCheck",value:function(e){return new Promise(function(){var t=Object(p.a)(h.a.mark(function t(a,n){var s;return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.post("http://localhost:4000/userSessionCheck",{userId:e});case 3:s=t.sent,a(s.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),n(t.t0);case 10:case"end":return t.stop()}},t,null,[[0,7]])}));return function(e,a){return t.apply(this,arguments)}}())}},{key:"getMessages",value:function(e,t){return new Promise(function(){var a=Object(p.a)(h.a.mark(function a(n,s){var r;return h.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,y.post("http://localhost:4000/getMessages",{userId:e,toUserId:t});case 3:r=a.sent,n(r.data),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),s(a.t0);case 10:case"end":return a.stop()}},a,null,[[0,7]])}));return function(e,t){return a.apply(this,arguments)}}())}}]),e}()),k=a(23),w=(a(136),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).createChatListUsers=function(e){if(e.error)alert("Unable to load Chat list, Redirecting to Login.");else{var t=a.state.chatListUsers;if(e.singleUser)t.length>0&&(t=t.filter(function(t){return t.id!==e.chatList[0].id})),t=[].concat(Object(k.a)(t),Object(k.a)(e.chatList));else if(e.userDisconnected){var n=t.findIndex(function(t){return t.id===e.userid});n>=0&&(t[n].online="N")}else t=e.chatList;a.setState({chatListUsers:t})}a.setState({loading:!1})},a.selectedUser=function(e){a.setState({selectedUserId:e.id}),a.props.updateSelectedUser(e)},a.state={loading:!0,selectedUserId:null,chatListUsers:[]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.userId;b.getChatList(e),b.eventEmitter.on("chat-list-response",this.createChatListUsers)}},{key:"componentWillUnmount",value:function(){b.eventEmitter.removeListener("chat-list-response",this.createChatListUsers)}},{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement("ul",{className:"user-list ".concat(0===this.state.chatListUsers.length?"visibility-hidden":"")},this.state.chatListUsers.map(function(t,a){return s.a.createElement("li",{key:a,className:e.state.selectedUserId===t.id?"active":"",onClick:function(){return e.selectedUser(t)}},t.username,s.a.createElement("span",{className:"Y"===t.online?"online":"offline"}))})),s.a.createElement("div",{className:"alert \n          ".concat(this.state.loading?"alert-info":""," \n          ").concat(this.state.chatListUsers.length>0?"visibility-hidden":"")},this.state.loading||0===this.state.chatListUsers.length.length?"Loading your chat list.":"No User Available to chat."))}}]),t}(n.Component)),S=(a(137),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).receiveSocketMessages=function(e){var t=a.state.selectedUser;null!==t&&t.id===e.fromUserId&&(a.setState({conversations:[].concat(Object(k.a)(a.state.conversations),[e])}),a.scrollMessageContainer())},a.getMessages=Object(p.a)(h.a.mark(function e(){var t,n,s,r;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=a.props,n=t.userId,s=t.newSelectedUser,e.next=4,E.getMessages(n,s.id);case 4:(r=e.sent).error?alert("Unable to fetch messages"):(a.setState({conversations:r.messages}),a.scrollMessageContainer()),a.setState({messageLoading:!1}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),a.setState({messageLoading:!1});case 12:case"end":return e.stop()}},e,null,[[0,9]])})),a.sendMessage=function(e){if("Enter"===e.key){var t=e.target.value,n=a.props,s=n.userId,r=n.newSelectedUser;""===t||void 0===t||null===t?alert("Message can't be empty."):""===s?a.router.navigate(["/"]):void 0===r?alert("Select a user to chat."):(a.sendAndUpdateMessages({fromUserId:s,message:t.trim(),toUserId:r.id}),e.target.value="")}},a.state={messageLoading:!0,conversations:[],selectedUser:null},a.messageContainer=s.a.createRef(),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){b.receiveMessage(),b.eventEmitter.on("add-message-response",this.receiveSocketMessages)}},{key:"componentWillUnmount",value:function(){b.eventEmitter.removeListener("add-message-response",this.receiveSocketMessages)}},{key:"componentDidUpdate",value:function(e){null!==e.newSelectedUser&&this.props.newSelectedUser.id===e.newSelectedUser.id||this.getMessages()}},{key:"sendAndUpdateMessages",value:function(e){try{b.sendMessage(e),this.setState({conversations:[].concat(Object(k.a)(this.state.conversations),[e])}),this.scrollMessageContainer()}catch(t){alert("Can't send your message")}}},{key:"scrollMessageContainer",value:function(){var e=this;if(null!==this.messageContainer.current)try{setTimeout(function(){e.messageContainer.current.scrollTop=e.messageContainer.current.scrollHeight},100)}catch(t){console.warn(t)}}},{key:"alignMessages",value:function(e){return this.props.userId!==e}},{key:"getMessageUI",value:function(){var e=this;return s.a.createElement("ul",{ref:this.messageContainer,className:"message-thread"},this.state.conversations.map(function(t,a){return s.a.createElement("li",{className:"".concat(e.alignMessages(t.toUserId)?"align-right":""),key:a}," ",t.message," ")}))}},{key:"getInitiateConversationUI",value:function(){if(null!==this.props.newSelectedUser)return s.a.createElement("div",{className:"message-thread start-chatting-banner"},s.a.createElement("p",{className:"heading"},"You haven 't chatted with ",this.props.newSelectedUser.username," in a while,",s.a.createElement("span",{className:"sub-heading"}," Say Hi.")))}},{key:"render",value:function(){var e=this.state,t=e.messageLoading,a=e.selectedUser;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"message-overlay ".concat(t?"":"visibility-hidden")},s.a.createElement("h3",null," ",null!==a&&a.username?"Loading Messages":" Select a User to chat.")),s.a.createElement("div",{className:"message-wrapper ".concat(t?"visibility-hidden":"")},s.a.createElement("div",{className:"message-container"},s.a.createElement("div",{className:"opposite-user"},"Chatting with ",null!==this.props.newSelectedUser?this.props.newSelectedUser.username:"----"),this.state.conversations.length>0?this.getMessageUI():this.getInitiateConversationUI()),s.a.createElement("div",{className:"message-typer"},s.a.createElement("form",null,s.a.createElement("textarea",{className:"message form-control",placeholder:"Type and hit Enter",onKeyPress:this.sendMessage})))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return null===t.selectedUser||t.selectedUser.id!==e.newSelectedUser.id?{selectedUser:e.newSelectedUser}:null}}]),t}(n.Component)),j=(a(138),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).userId=null,a.state={isOverlayVisible:!0,username:"______",selectedUser:null},a.logout=Object(p.a)(h.a.mark(function e(){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.removeLS();case 3:b.logout({userId:a.userId}),b.eventEmitter.on("logout-response",function(e){a.props.history.push("/")}),e.next=12;break;case 7:throw e.prev=7,e.t0=e.catch(0),console.log(e.t0),alert(" This App is Broken, we are working on it. try after some time."),e.t0;case 12:case"end":return e.stop()}},e,null,[[0,7]])})),a.setRenderLoadingState=function(e){a.setState({isOverlayVisible:e})},a.updateSelectedUser=function(e){a.setState({selectedUser:e})},a.getChatBoxComponent=function(){return a.state.isOverlayVisible?null:s.a.createElement(S,{userId:a.userId,newSelectedUser:a.state.selectedUser})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=Object(p.a)(h.a.mark(function e(){var t;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.setRenderLoadingState(!0),e.next=4,E.getUserId();case 4:return this.userId=e.sent,e.next=7,E.userSessionCheck(this.userId);case 7:(t=e.sent).error?this.props.history.push("/"):(this.setState({username:t.username}),E.setLS("username",t.username),b.establishSocketConnection(this.userId)),this.setRenderLoadingState(!1),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),this.setRenderLoadingState(!1),this.props.history.push("/");case 16:case"end":return e.stop()}},e,this,[[0,12]])}));return function(){return e.apply(this,arguments)}}()},{key:"getChatListComponent",value:function(){return this.state.isOverlayVisible?null:s.a.createElement(w,{userId:this.userId,updateSelectedUser:this.updateSelectedUser})}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"".concat(this.state.isOverlayVisible?"overlay":"visibility-hidden"," ")},s.a.createElement("h1",null,"Loading")),s.a.createElement("header",{className:"app-header"},s.a.createElement("nav",{className:"navbar navbar-expand-md"},s.a.createElement("h4",null,"Hello ",this.state.username," ")),s.a.createElement("ul",{className:"nav justify-content-end"},s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"nav-link",href:"#",onClick:this.logout},"Logout")))),s.a.createElement("main",{role:"main",className:"container content"},s.a.createElement("div",{className:"row chat-content"},s.a.createElement("div",{className:"col-3 chat-list-container"},this.getChatListComponent()),s.a.createElement("div",{className:"col-8 message-container"},this.getChatBoxComponent()))))}}]),t}(n.Component)),U=(Object(v.a)(j),a(167)),C=a(165),O=a(33),x=a(166),I=a(164),L=(a(143),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleLogin=function(){var e=Object(p.a)(h.a.mark(function e(t){var n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a.props.loadingState(!0),e.prev=2,e.next=5,E.login(a.state);case 5:n=e.sent,a.props.loadingState(!1),n.error?alert("Invalid login details"):(E.setLS("userid",n.userId),a.props.history.push("/home")),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),a.props.loadingState(!1),alert("Invalid login details");case 14:case"end":return e.stop()}},e,null,[[2,10]])}));return function(t){return e.apply(this,arguments)}}(),a.handleInputChange=function(e){a.setState(Object(O.a)({},e.target.name,e.target.value))},a.state={username:"",password:""},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement(x.a,{className:"auth-form"},s.a.createElement(x.a.Group,{controlId:"loginUsername"},s.a.createElement(x.a.Control,{type:"text",name:"username",placeholder:"Enter username",onChange:this.handleInputChange})),s.a.createElement(x.a.Group,{controlId:"loginPassword"},s.a.createElement(x.a.Control,{type:"password",name:"password",placeholder:"Password",onChange:this.handleInputChange})),s.a.createElement(I.a,{variant:"primary",type:"submit",onClick:this.handleLogin},"Login"))}}]),t}(n.Component)),N=Object(v.a)(L),M=a(169),A=a(78),P=(a(146),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleRegistration=function(){var e=Object(p.a)(h.a.mark(function e(t){var n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a.props.loadingState(!0),e.prev=2,e.next=5,E.register(a.state);case 5:n=e.sent,a.props.loadingState(!1),n.error?alert("Unable to register, try after some time."):(E.setLS("userid",n.userId),a.props.history.push("/home")),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),a.props.loadingState(!1),alert("Unable to register, try after some time.");case 14:case"end":return e.stop()}},e,null,[[2,10]])}));return function(t){return e.apply(this,arguments)}}(),a.checkUsernameAvailability=function(){var e=Object(p.a)(h.a.mark(function e(t){var n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(""===t.target.value||void 0===t.target.value){e.next=17;break}return a.setState({username:t.target.value}),a.props.loadingState(!0),e.prev=3,e.next=6,E.checkUsernameAvailability(a.state.username);case 6:n=e.sent,a.props.loadingState(!1),n.error?a.setState({usernameAvailable:!1}):a.setState({usernameAvailable:!0}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),a.props.loadingState(!1),a.setState({usernameAvailable:!1});case 15:e.next=18;break;case 17:""===t.target.value&&a.setState({usernameAvailable:!0});case 18:case"end":return e.stop()}},e,null,[[3,11]])}));return function(t){return e.apply(this,arguments)}}(),a.handleInputChange=function(e){a.setState(Object(O.a)({},e.target.name,e.target.value))},a.state={username:"",password:"",usernameAvailable:!0},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement(x.a,{className:"auth-form"},s.a.createElement(x.a.Group,{controlId:"formUsername"},s.a.createElement(A.DebounceInput,{className:"form-control",placeholder:"Enter username",minLength:2,debounceTimeout:300,onChange:this.checkUsernameAvailability}),s.a.createElement(M.a,{className:{"username-availability-warning":!0,"visibility-hidden":this.state.usernameAvailable},variant:"danger"},s.a.createElement("strong",null,this.state.username)," is already taken, try another username.")),s.a.createElement(x.a.Group,{controlId:"formPassword"},s.a.createElement(x.a.Control,{type:"password",name:"password",placeholder:"Password",onChange:this.handleInputChange})),s.a.createElement(I.a,{variant:"primary",type:"submit",onClick:this.handleRegistration},"Registration"))}}]),t}(n.Component)),R=Object(v.a)(P),D=(a(157),function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{class:"overlay"}),s.a.createElement("main",{style:{height:"100vh"}},s.a.createElement("div",{class:"frame"},s.a.createElement("div",{class:"frame__title-wrap"},s.a.createElement("h1",{class:"frame__title"})))),s.a.createElement("section",{class:"animationbg",id:"sec02"}),s.a.createElement("section",{class:"video",id:"vid01"},s.a.createElement("div",{class:"text2"},s.a.createElement("h2",null,"Video will crush it"))),s.a.createElement("section",{class:"animationbg",id:"sec03"},s.a.createElement("div",{class:"text"},s.a.createElement("h2",null,"We help Medical and Pharmaceutical Sales teams explain complex medical and diagnostic solutions by building remote sales presentations like this one that work in the new world. "))),s.a.createElement("section",{class:"video",id:"vid02"},s.a.createElement("div",{class:"text2"},s.a.createElement("h2",null,"Video will crush it"))),s.a.createElement("section",{class:"animationbg",id:"sec04"},s.a.createElement("div",{class:"text"},s.a.createElement("h2",null,"Know when your prospect is looking."))),s.a.createElement("section",{class:"video",id:"vid03"},s.a.createElement("div",{class:"text2"},s.a.createElement("h2",null,"2"))),s.a.createElement("section",{class:"animationbg",id:"sec05"},s.a.createElement("div",{class:"text"},s.a.createElement("h2",null,'zoom is dead, it is time to create a quick modern experience".'))),s.a.createElement("section",{class:"video",id:"vid04"},s.a.createElement("div",{class:"text2"},s.a.createElement("h2",null,"3"))),s.a.createElement("section",{class:"animationbg",id:"sec06"},s.a.createElement("div",{class:"text"},s.a.createElement("h2",null,'zoom is dead, it is time to create a quick modern experience".'))))}),_=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={loadingState:!1},a.setRenderLoadingState=function(e){a.setState({loadingState:e})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(D,null),s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"overlay auth-loading ".concat(this.state.loadingState?"":"visibility-hidden")},s.a.createElement("h1",null,"Loading")),s.a.createElement("div",{className:"authentication-screen"},s.a.createElement(U.a,{variant:"pills",defaultActiveKey:"login"},s.a.createElement(C.a,{eventKey:"login",title:"Login"},s.a.createElement(N,{loadingState:this.setRenderLoadingState})),s.a.createElement(C.a,{eventKey:"registration",title:"Registration"},s.a.createElement(R,{loadingState:this.setRenderLoadingState}))))))}}]),t}(n.Component),J=(a(161),n.Component,a(162),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=document.querySelector("body"),t=document.createElement("script");t.async=!1,t.src="/JS/vendors.js",e.appendChild(t);var a=document.createElement("script");a.async=!1,a.src="/JS/index.js",e.appendChild(a);var n=document.createElement("script");n.async=!1,n.src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js",e.appendChild(n);var s=document.createElement("script");s.async=!1,s.src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/ScrollTrigger.min.js",e.appendChild(s);var r=document.createElement("script");r.async=!1,r.src="/JS/lottie.js",e.appendChild(r);var i=document.createElement("script");i.async=!1,i.src="/JS/ScrollLottie.js",e.appendChild(i);var c=document.createElement("script");c.async=!1,c.src="JS/register.js",e.appendChild(c)}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(_,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},81:function(e,t,a){e.exports=a(163)},86:function(e,t,a){}},[[81,1,2]]]);
//# sourceMappingURL=main.13355a86.chunk.js.map