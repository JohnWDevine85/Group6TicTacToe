(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},102:function(e,t,n){},111:function(e,t,n){},114:function(e,t,n){},115:function(e,t,n){"use strict";n.r(t);var a,c,r,s,i,o=n(0),l=n.n(o),d=n(43),j=n.n(d),m=(n(100),n(4)),b=(n(101),n(102),n(120)),u=n(129),O=n(121),x=n(130),h=n(136),p=n(137),g=n(79),f=n(80),v=n(67),k=new(function(){function e(){Object(g.a)(this,e)}return Object(f.a)(e,[{key:"getProfile",value:function(){return Object(v.a)(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return Object(v.a)(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),y=n(134),w=n(24),N=n(133),I=Object(N.a)(a||(a=Object(w.a)(["\nquery user($username: String!) {\n    user(username: $username) {\n        _id\n        username\n        email\n        bio\n        likedTattoos\n        personalWork\n    }\n}\n"]))),$=Object(N.a)(c||(c=Object(w.a)(["\nquery {\n    me {\n        _id\n        username\n        email\n        likedTattoos\n    }\n}\n"]))),_=Object(N.a)(r||(r=Object(w.a)(["\nquery {\n    me {\n        _id\n        username\n        email\n        bio\n        likedTattoos \n        personalWork \n    }\n}\n"]))),S=Object(N.a)(s||(s=Object(w.a)(["\nquery tattoo($id: ID!) {\n    tattoo(_id: $id) {\n        _id\n        title\n        username\n        imageId\n        description\n        likes\n        commentCount\n        \n        comments {\n            _id\n            username\n            commentBody\n            createdAt\n        }\n    }\n}\n"]))),T=Object(N.a)(i||(i=Object(w.a)(["\nquery tattoos($_id: ID) {\n    tattoos(_id: $_id) {\n        _id\n        title\n        username\n        imageId\n        likes\n        createdAt\n    }\n}\n"]))),C=n(1);var F,L,B,D,U,q,z,P=function(){var e,t=Object(y.a)(_),n=(t.loading,t.data),a=n?n.me:"";return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(u.a,{className:"p-4",bg:"dark",variant:"dark",expand:"lg",children:Object(C.jsxs)(O.a,{children:[Object(C.jsx)(u.a.Brand,{id:"NavTitle",href:"/",children:"#SkinDeep"}),Object(C.jsx)(u.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(C.jsx)(u.a.Collapse,{id:"basic-navbar-nav",className:"justify-content-end",children:Object(C.jsxs)(x.a,{className:"mr-auto",children:[Object(C.jsx)(x.a.Link,{href:"/",children:"Home"}),Object(C.jsxs)(h.a,{className:"mb-3",children:[Object(C.jsx)(p.a,{placeholder:"Search","aria-label":"Search","aria-describedby":"basic-addon2"}),Object(C.jsx)(b.a,{className:"neon-pink-btn me-1",id:"button-addon2",children:"Search"}),(e=a.username,k.loggedIn()?Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(b.a,{className:" neon-pink-btn mx-1",href:"/profile/".concat(e),children:"View Profile"}),Object(C.jsx)(b.a,{className:" neon-pink-btn mx-1",href:"/",onClick:function(){return k.logout()},children:"Logout"})]}):Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(b.a,{className:"neon-pink-btn mx-1",href:"/signup",children:"Signup"}),Object(C.jsx)(b.a,{className:"neon-pink-btn mx-1",href:"/login",children:"Login"})]}))]})]})})]})})})},E=n(28),W=n.n(E),A=n(42),G=n(16),J=n(125),H=n(126),M=n(135),V=(n(111),n(139)),K=Object(N.a)(F||(F=Object(w.a)(["\nmutation addUser($username: String!, $password: String!, $email: String!) {\n    addUser(username: $username, password: $password, email: $email ) {\n        token\n        user {\n            _id\n            username\n            email\n          \n        }\n    }\n}\n"]))),Q=Object(N.a)(L||(L=Object(w.a)(["\nmutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n        token\n        user {\n            _id\n            username\n        }\n    }\n}\n"]))),R=(Object(N.a)(B||(B=Object(w.a)(["\nmutation addTattoo($title: String!, $image: String!, $description: String) {\n    addTattoo(title: $title, image: $image, description: $description) {\n        _id\n        title\n        username\n        image\n        description\n        likes\n    }\n}\n"]))),Object(N.a)(D||(D=Object(w.a)(["\nmutation likeTattoo($tattooId: ID!) {\n    likeTattoo(tattooId: $tattooId) {\n        _id\n        likes\n    }\n}\n"])))),X=Object(N.a)(U||(U=Object(w.a)(["\nmutation unlikeTattoo($tattooId: ID!) {\n    unlikeTattoo(tattooId: $tattooId) {\n        _id\n        likes\n    }\n}\n"]))),Y=(Object(N.a)(q||(q=Object(w.a)(["\nmutation addComment($tattooId: ID!, $commentBody: String!) {\n    addComment(tattooId: $tattooId, commentBody: $commentBody) {\n        _id\n        title\n        username\n        image\n        description\n        likes\n        comments {\n            _id\n            username\n            commentBody\n        }\n    }\n}\n"]))),Object(N.a)(z||(z=Object(w.a)(["\nmutation removeTattoo($tattooId: ID!){\n    removeTattoo(tattooId: $tattooId) {\n        _id\n        username\n        email\n        bio\n        likedTattoos{\n            _id\n            title\n            username\n            image\n            likes\n        }\n        personalWork{\n            _id\n            title\n            username\n            image\n            likes\n        }\n    }\n}\n"]))),function(){var e=Object(V.a)(R),t=Object(G.a)(e,1)[0],n=Object(V.a)(X),a=Object(G.a)(n,1)[0],c=Object(y.a)(T),r=c.data,s=c.loading,i=Object(y.a)($),o=i.data,l=i.loading,d=r?r.tattoos:[];if(s||l)return Object(C.jsx)("div",{children:"Loading..."});var j=function(){var e=Object(A.a)(W.a.mark((function e(n){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o.me.likedTattoos.find((function(e){return e===n}))){e.next=12;break}return e.prev=1,e.next=4,a({variables:{tattooId:n}});case 4:e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.error("Failed to unlike tattoo",e.t0);case 10:e.next=21;break;case 12:return e.prev=12,e.next=15,t({variables:{tattooId:n}});case 15:e.sent,e.next=21;break;case 18:e.prev=18,e.t1=e.catch(12),console.error("Failed to unlike tattoo",e.t1);case 21:window.location.reload();case 22:case"end":return e.stop()}}),e,null,[[1,7],[12,18]])})));return function(t){return e.apply(this,arguments)}}();return Object(C.jsx)(O.a,{className:"my-5",children:Object(C.jsx)(J.a,{xs:1,sm:2,md:3,lg:4,className:"g-4",children:d.map((function(e){return Object(C.jsx)(H.a,{className:"d-flex justify-content-center",children:Object(C.jsxs)(M.a,{className:"p-2",children:[Object(C.jsx)("a",{href:"/tattoo/".concat(e._id),children:Object(C.jsx)(M.a.Img,{variant:"top",src:"/api/image/".concat(e.imageId),alt:"tattoo"})}),Object(C.jsxs)(M.a.Body,{children:[Object(C.jsx)(M.a.Title,{children:e.title}),Object(C.jsxs)(J.a,{children:[Object(C.jsxs)("p",{children:["by ",Object(C.jsx)("a",{className:"link",href:"/profile/".concat(e.username),children:e.username})]}),k.loggedIn()&&o?o.me.likedTattoos.find((function(t){return t===e._id}))?Object(C.jsx)(b.a,{type:"button",className:"neon-green-btn",size:"sm",onClick:function(){return j(e._id)},children:"Unlike"}):Object(C.jsx)(b.a,{type:"button",className:"neon-pink-btn",size:"sm",onClick:function(){return j(e._id)},children:"Like"}):Object(C.jsx)(C.Fragment,{})]})]})]})})}))})})}),Z=n(90),ee=n(131),te=n(132),ne=n(128),ae=n(89),ce=n(15),re=n(22);var se=function(e){var t=Object(o.useState)({email:"",password:""}),n=Object(G.a)(t,2),a=n[0],c=n[1],r=Object(V.a)(Q),s=Object(G.a)(r,2),i=s[0],l=s[1].error,d=function(){var e=Object(A.a)(W.a.mark((function e(t){var n,c;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,i({variables:{email:a.email,password:a.password}});case 4:n=e.sent,c=n.data.login.token,k.login(c),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),j=function(e){var t=e.target,n=t.name,r=t.value;c(Object(m.a)(Object(m.a)({},a),{},Object(ce.a)({},n,r)))};return Object(C.jsxs)("div",{className:"container my-1",children:[Object(C.jsx)(re.b,{to:"/signup",children:"\u2190 Go to Signup"}),Object(C.jsx)("h2",{children:"Login"}),Object(C.jsxs)("form",{onSubmit:d,children:[Object(C.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(C.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(C.jsx)("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:j})]}),Object(C.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(C.jsx)("label",{htmlFor:"pwd",children:"Password:"}),Object(C.jsx)("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:j})]}),l?Object(C.jsx)("div",{children:Object(C.jsx)("p",{className:"error-text",children:"The provided credentials are incorrect"})}):null,Object(C.jsx)("div",{className:"flex-row flex-end",children:Object(C.jsx)("button",{type:"submit",children:"Submit"})})]})]})};var ie=function(e){var t=Object(o.useState)({username:"",email:"",password:""}),n=Object(G.a)(t,2),a=n[0],c=n[1],r=Object(V.a)(K),s=Object(G.a)(r,1)[0],i=function(){var e=Object(A.a)(W.a.mark((function e(t){var n,c;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,s({variables:{username:a.username,email:a.email,password:a.password}});case 3:n=e.sent,c=n.data.addUser.token,k.login(c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(e){var t=e.target,n=t.name,r=t.value;c(Object(m.a)(Object(m.a)({},a),{},Object(ce.a)({},n,r)))};return Object(C.jsxs)("div",{className:"container my-1",children:[Object(C.jsx)(re.b,{to:"/login",children:"\u2190 Go to Login"}),Object(C.jsx)("h2",{children:"Signup"}),Object(C.jsxs)("form",{onSubmit:i,children:[Object(C.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(C.jsx)("label",{htmlFor:"username",children:" Username:"}),Object(C.jsx)("input",{placeholder:"Username",name:"username",type:"username",id:"firstname",onChange:l})]}),Object(C.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(C.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(C.jsx)("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:l})]}),Object(C.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(C.jsx)("label",{htmlFor:"pwd",children:"Password:"}),Object(C.jsx)("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:l})]}),Object(C.jsx)("div",{className:"flex-row flex-end",children:Object(C.jsx)("button",{type:"submit",children:"Submit"})})]})]})},oe=n(18),le=(n(114),function(e){var t=e.comments;return Object(C.jsx)("div",{children:t&&t.map((function(e){return Object(C.jsxs)("div",{className:"comment-card my-3 p-3",children:[Object(C.jsxs)("p",{className:"pill mb-3 ",children:[e.commentBody," ","// "]},e._id),Object(C.jsxs)("p",{className:"mb-0 text-end",children:[Object(C.jsx)(re.b,{className:"link",to:"/profile/".concat(e.username),style:{fontWeight:700},children:e.username})," on ",e.createdAt]})]})}))})}),de=n(127),je=function(){var e=Object(V.a)(R),t=Object(G.a)(e,1)[0],n=Object(V.a)(X),a=Object(G.a)(n,1)[0],c=Object(oe.f)().id,r=Object(y.a)($),s=r.data,i=r.loading,o=Object(y.a)(S,{variables:{id:c}}),l=o.loading,d=o.data,j=d?d.tattoo:{};if(l||i)return Object(C.jsx)("div",{children:"Loading..."});var m=function(){var e=Object(A.a)(W.a.mark((function e(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!s.me.likedTattoos.find((function(e){return e===c}))){e.next=12;break}return e.prev=1,e.next=4,a({variables:{tattooId:c}});case 4:e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.error("Failed to unlike tattoo",e.t0);case 10:e.next=21;break;case 12:return e.prev=12,e.next=15,t({variables:{tattooId:c}});case 15:e.sent,e.next=21;break;case 18:e.prev=18,e.t1=e.catch(12),console.error("Failed to unlike tattoo",e.t1);case 21:window.location.reload();case 22:case"end":return e.stop()}}),e,null,[[1,7],[12,18]])})));return function(){return e.apply(this,arguments)}}();return Object(C.jsxs)(O.a,{className:"my-3",children:[Object(C.jsx)("h2",{className:"my-3",children:j.title}),Object(C.jsxs)(J.a,{children:[Object(C.jsx)(H.a,{xs:"12",lg:"6",className:"text-center mb-4",children:Object(C.jsx)(de.a,{src:"/api/image/".concat(j.imageId),alt:"tattoo",rounded:!0,fluid:!0})}),Object(C.jsxs)(H.a,{children:[Object(C.jsxs)(J.a,{children:[Object(C.jsx)(H.a,{xs:"6",children:Object(C.jsx)("p",{children:j.description})}),Object(C.jsxs)(H.a,{xs:"6",className:"text-center",children:[Object(C.jsx)(J.a,{className:"d-flex justify-content-center",children:Object(C.jsx)("div",{className:"rounded-circle d-flex justify-content-center align-items-center",style:{backgroundColor:"gray",height:"7rem",width:"7rem"},children:Object(C.jsx)("p",{children:"User Image"})})}),Object(C.jsx)(J.a,{children:Object(C.jsx)(re.b,{to:"/profile/".concat(j.username),className:"link mt-2",children:j.username})}),Object(C.jsx)(J.a,{children:k.loggedIn()&&s?Object(C.jsxs)("div",{className:"my-3",children:[Object(C.jsx)(b.a,{type:"button",className:"neon-pink-btn mx-2",size:"sm",children:"Comment"}),s.me.likedTattoos.find((function(e){return e===j._id}))?Object(C.jsx)(b.a,{type:"button",className:"neon-green-btn",size:"sm",onClick:function(){return m()},children:"Unlike"}):Object(C.jsx)(b.a,{type:"button",className:"neon-pink-btn",size:"sm",onClick:function(){return m()},children:"Like"})]}):Object(C.jsx)(C.Fragment,{})})]})]}),j.commentCount?Object(C.jsxs)("div",{className:"mt-1",children:[Object(C.jsx)("h3",{children:"Comments"}),j.commentCount>0&&Object(C.jsx)(le,{comments:j.comments})]}):Object(C.jsx)("div",{className:"mt-3",children:Object(C.jsx)("h3",{children:"No Comments"})})]})]})]})},me=function(e){var t=e.tattooId;console.log(t);var n=Object(y.a)(T,{variables:{_id:t}}),a=n.loading,c=n.data,r=c?c.tattoos:{};return a?Object(C.jsx)("div",{children:"Loading..."}):Object(C.jsx)(H.a,{className:"d-flex justify-content-center align-items-center",children:Object(C.jsx)(M.a,{children:Object(C.jsx)("a",{href:"/tattoo/".concat(r[0]._id),children:Object(C.jsx)(M.a.Img,{className:"d-block w-100",src:"/api/image/".concat(r[0].imageId),alt:"tattoo"})})},t)})},be=function(){var e=Object(oe.f)().username,t=Object(y.a)(I,{variables:{username:e}}),n=t.loading,a=t.data,c=a?a.user:{};return n?Object(C.jsx)("div",{children:"Loading..."}):(console.log("user",c),Object(C.jsxs)(O.a,{className:"my-5",children:[Object(C.jsxs)(J.a,{children:[Object(C.jsxs)(H.a,{xs:2,className:"text-center",children:[Object(C.jsx)("div",{className:"rounded-circle d-flex justify-content-center align-items-center mb-2",style:{backgroundColor:"gray",height:"10rem",width:"10rem"},children:Object(C.jsx)("p",{children:"User Image"})}),Object(C.jsx)("p",{children:c.username})]}),c.bio?Object(C.jsxs)(H.a,{children:[Object(C.jsx)("h2",{children:"Bio"}),Object(C.jsx)("p",{children:c.bio})]}):Object(C.jsx)(C.Fragment,{})]}),Object(C.jsx)("h2",{className:"my-3",children:"Liked Tattoos"}),Object(C.jsx)(J.a,{xs:1,sm:2,md:3,lg:4,className:"g-4",children:c.likedTattoos.map((function(e){return Object(C.jsx)(me,{tattooId:e})}))})]}))},ue=Object(Z.a)({uri:"/graphql"}),Oe=Object(ae.a)((function(e,t){var n=t.headers,a=localStorage.getItem("id_token");return{headers:Object(m.a)(Object(m.a)({},n),{},{authorization:a?"Bearer ".concat(a):""})}})),xe=new ee.a({link:Oe.concat(ue),cache:new te.a});var he=function(){return Object(C.jsx)(ne.a,{client:xe,children:Object(C.jsx)(re.a,{children:Object(C.jsxs)("div",{children:[Object(C.jsx)(P,{}),Object(C.jsxs)(oe.c,{children:[Object(C.jsx)(oe.a,{exact:!0,path:"/",component:Y}),Object(C.jsx)(oe.a,{exact:!0,path:"/login",component:se}),Object(C.jsx)(oe.a,{exact:!0,path:"/signup",component:ie}),Object(C.jsx)(oe.a,{exact:!0,path:"/profile/:username",component:be}),Object(C.jsx)(oe.a,{exact:!0,path:"/tattoo/:id",component:je})]})]})})})},pe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,140)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};j.a.render(Object(C.jsx)(l.a.StrictMode,{children:Object(C.jsx)(he,{})}),document.getElementById("root")),pe()}},[[115,1,2]]]);
//# sourceMappingURL=main.73bac7a0.chunk.js.map