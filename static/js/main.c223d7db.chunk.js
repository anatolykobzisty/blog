(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{226:function(e,t,a){e.exports=a(384)},384:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),c=a(15),o=a(22),s=a(25),u=a(26),d=a(28),m=a(27),p=a(29),f=a(2),g=(a(234),a(201)),h=a(202),E=a.n(h);function b(){var e=Object(g.a)(["\n  ","\n  \n  * {\n    box-sizing: border-box;\n  }\n\n  img {\n    max-width: 100%;\n    height: auto;\n  }\n\n  ul,\n  ol,\n  li {\n    display: block;\n    padding: 0;\n    margin: 0;\n  }\n"]);return b=function(){return e},e}var y=Object(f.createGlobalStyle)(b(),E.a),v=a(386),x=f.default.div.withConfig({displayName:"Loader__Container",componentId:"utmanw-0"})(["height:100vh;display:flex;justify-content:center;align-items:center;"]),w=function(){return r.a.createElement(x,null,r.a.createElement(v.a,{size:"large",tip:"Loading..."}))},_=a(169),C=a(208),A=a.n(C).a.create({baseURL:"https://conduit.productionready.io/api"}),S=function(){return localStorage.removeItem("token"),delete A.defaults.headers.common.Authorization,{type:"LOGOUT_USER"}},k=f.default.div.withConfig({displayName:"NavBar__StyledNavBar",componentId:"f35ajf-0"})(["width:1100px;display:flex;flex-wrap:nowrap;justify-content:space-between;align-items:center;"]),I=Object(f.default)(o.b).withConfig({displayName:"NavBar__Logo",componentId:"f35ajf-1"})(["font-weight:bold;color:white;font-size:25px;:hover{color:black;}"]),j=f.default.ul.withConfig({displayName:"NavBar__Menu",componentId:"f35ajf-2"})(["display:flex;"]),O=f.default.li.withConfig({displayName:"NavBar__MenuItem",componentId:"f35ajf-3"})(["display:flex;align-items:center;margin-right:30px;:last-child{margin-right:0;}"]),L=Object(f.default)(o.c).withConfig({displayName:"NavBar__StyledNavLink",componentId:"f35ajf-4"})(["color:white;:hover{color:black;}"]),N=function(e){var t=e.isAutheticated,a=e.user,n=e.logout;return r.a.createElement(k,null,r.a.createElement(I,{to:"/blog"},"Blog"),r.a.createElement(j,null,r.a.createElement(O,null,r.a.createElement(L,{to:"/blog",exact:!0},"Home")),!t&&r.a.createElement(r.a.Fragment,null,r.a.createElement(O,null,r.a.createElement(L,{to:"/blog/login"},"Sign in")),r.a.createElement(O,null,r.a.createElement(L,{to:"/blog/signup"},"Sign up"))),t&&r.a.createElement(r.a.Fragment,null,r.a.createElement(O,null,r.a.createElement(L,{to:"/blog/articles/new"},"New Post")),r.a.createElement(O,null,r.a.createElement(_.a,{onClick:function(){n()}},"Log out")),r.a.createElement(O,null,r.a.createElement("span",null,a)))))};N.defaultProps={user:null};var T=Object(c.b)((function(e){var t=e.user;return{isAutheticated:t.loggedIn,user:t.currentUser.username}}),(function(e){return{logout:function(){return e(S())}}}))(N),U=a(72),F=a(9),R=a.n(F),B=a(23),D=a(31),G=a(14),q=a(390),P=a(389),z=a(12),M=function(e){404===e.response.status?q.a.error("Not found requests"):403===e.response.status?q.a.error("Forbidden requests"):401===e.response.status?q.a.error("Unauthorized requests"):q.a.error("Something went wrong")},Q=function(e){return{type:"GET_USER_SUCCESS",user:e}},V=f.default.div.withConfig({displayName:"SignUp__StyledSignUp",componentId:"ui53r-0"})(["display:flex;justify-content:center;"]),W=f.default.div.withConfig({displayName:"SignUp__Container",componentId:"ui53r-1"})(["width:400px;display:flex;flex-direction:column;"]),H=f.default.h1.withConfig({displayName:"SignUp__PageTitle",componentId:"ui53r-2"})(["color:#1890ff;font-size:40px;text-align:center;margin:20px 0;"]),X=f.default.p.withConfig({displayName:"SignUp__DescriptionLink",componentId:"ui53r-3"})(["font-size:16px;text-align:center;"]),K=f.default.div.withConfig({displayName:"SignUp__FormItem",componentId:"ui53r-4"})(["margin-bottom:20px;"]),J=f.default.span.withConfig({displayName:"SignUp__ErrorMessage",componentId:"ui53r-5"})(["color:red;"]),Y=G.b().shape({username:G.c().required("required"),email:G.c().required("required"),password:G.c().required("required")}),Z=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(){var e=Object(B.a)(R.a.mark((function e(t,n){var r,i,l,c;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=a.props.getUser,!navigator.onLine){e.next=24;break}return e.prev=2,e.next=5,A.post("/users/",{user:t});case 5:if(200!==(i=e.sent).status){e.next=16;break}return e.next=9,i.data.user;case 9:return l=e.sent,e.next=12,l.token;case 12:c=e.sent,localStorage.setItem("token",c),r(l),n.setSubmitting(!1);case 16:e.next=22;break;case 18:e.prev=18,e.t0=e.catch(2),n.setSubmitting(!1),422===e.t0.response.status?n.setErrors(e.t0.response.data.errors):M(e.t0);case 22:e.next=26;break;case 24:n.setSubmitting(!1),q.a.error("Please check your network connectivity");case 26:case"end":return e.stop()}}),e,null,[[2,18]])})));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return this.props.isAuthenticated?r.a.createElement(U.a,{to:"/blog"}):r.a.createElement(V,null,r.a.createElement(W,null,r.a.createElement(H,null,"Sign Up"),r.a.createElement(X,null,r.a.createElement(o.b,{to:"/blog/login"},"Have an account?")),r.a.createElement(D.d,{initialValues:{username:"",email:"",password:""},onSubmit:function(t,a){return e.handleSubmit(t,a)},validationSchema:Y},(function(e){var t=e.handleSubmit,a=e.values,n=e.handleChange,i=e.handleBlur,l=e.touched,c=e.isSubmitting,o=e.errors;return r.a.createElement(D.c,{onSubmit:t},r.a.createElement(K,null,r.a.createElement(P.a,{type:"user",name:"username",placeholder:"Username",value:a.username,onChange:n,onBlur:i,prefix:r.a.createElement(z.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}})}),l.username&&o.username&&r.a.createElement(J,null,"username ".concat(o.username))),r.a.createElement(K,null,r.a.createElement(P.a,{type:"email",name:"email",placeholder:"Email",value:a.email,onChange:n,onBlur:i,prefix:r.a.createElement(z.a,{type:"mail",style:{color:"rgba(0,0,0,.25)"}})}),l.email&&o.email&&r.a.createElement(J,null,"email ".concat(o.email))),r.a.createElement(K,null,r.a.createElement(P.a,{type:"password",name:"password",placeholder:"Password",value:a.password,onChange:n,onBlur:i,prefix:r.a.createElement(z.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}})}),l.password&&o.password&&r.a.createElement(J,null,"password ".concat(o.password))),r.a.createElement(_.a,{type:"primary",htmlType:"submit",disabled:c,block:!0},"sign up"))}))))}}]),t}(n.Component),$=Object(c.b)((function(e){return{isAuthenticated:e.user.loggedIn}}),(function(e){return{getUser:function(t){return e(Q(t))}}}))(Z),ee=f.default.div.withConfig({displayName:"SignIn__StyledSignIn",componentId:"sc-1maeia5-0"})(["display:flex;justify-content:center;"]),te=f.default.div.withConfig({displayName:"SignIn__Container",componentId:"sc-1maeia5-1"})(["width:400px;display:flex;flex-direction:column;"]),ae=f.default.h1.withConfig({displayName:"SignIn__PageTitle",componentId:"sc-1maeia5-2"})(["color:#1890ff;font-size:40px;text-align:center;margin:20px 0;"]),ne=f.default.p.withConfig({displayName:"SignIn__DescriptionLink",componentId:"sc-1maeia5-3"})(["font-size:16px;text-align:center;"]),re=f.default.div.withConfig({displayName:"SignIn__FormItem",componentId:"sc-1maeia5-4"})(["margin-bottom:20px;"]),ie=f.default.span.withConfig({displayName:"SignIn__ErrorMessage",componentId:"sc-1maeia5-5"})(["color:red;"]),le=G.b().shape({email:G.c().required("required"),password:G.c().required("required")}),ce=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(){var e=Object(B.a)(R.a.mark((function e(t,n){var r,i,l,c;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=a.props.getUser,!navigator.onLine){e.next=24;break}return e.prev=2,e.next=5,A.post("/users/login/",{user:t});case 5:if(200!==(i=e.sent).status){e.next=16;break}return e.next=9,i.data.user;case 9:return l=e.sent,e.next=12,l.token;case 12:c=e.sent,localStorage.setItem("token",c),r(l),n.setSubmitting(!1);case 16:e.next=22;break;case 18:e.prev=18,e.t0=e.catch(2),n.setSubmitting(!1),422===e.t0.response.status?n.setErrors(e.t0.response.data.errors):M(e.t0);case 22:e.next=26;break;case 24:n.setSubmitting(!1),q.a.error("Please check your network connectivity");case 26:case"end":return e.stop()}}),e,null,[[2,18]])})));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return this.props.isAuthenticated?r.a.createElement(U.a,{to:"/blog"}):r.a.createElement(ee,null,r.a.createElement(te,null,r.a.createElement(ae,null,"Sign In"),r.a.createElement(ne,null,r.a.createElement(o.b,{to:"/blog/signup"},"Need an account?")),r.a.createElement(D.d,{initialValues:{email:"",password:""},onSubmit:function(t,a){return e.handleSubmit(t,a)},validationSchema:le},(function(e){var t=e.handleSubmit,a=e.values,n=e.handleChange,i=e.handleBlur,l=e.touched,c=e.isSubmitting,o=e.errors;return r.a.createElement(D.c,{onSubmit:t},r.a.createElement(re,null,o["email or password"]&&r.a.createElement(ie,null,"email or password ".concat(o["email or password"])),r.a.createElement(P.a,{type:"email",name:"email",placeholder:"Email",value:a.email,onChange:n,onBlur:i,prefix:r.a.createElement(z.a,{type:"mail",style:{color:"rgba(0,0,0,.25)"}})}),l.email&&o.email&&r.a.createElement(ie,null,"email ".concat(o.email))),r.a.createElement(re,null,r.a.createElement(P.a,{type:"password",name:"password",placeholder:"Password",value:a.password,onChange:n,onBlur:i,prefix:r.a.createElement(z.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}})}),l.password&&o.password&&r.a.createElement(ie,null,"password ".concat(o.password))),r.a.createElement(_.a,{type:"primary",htmlType:"submit",disabled:c,block:!0},"sign in"))}))))}}]),t}(n.Component),oe=Object(c.b)((function(e){return{isAuthenticated:e.user.loggedIn}}),(function(e){return{getUser:function(t){return e(Q(t))}}}))(ce),se=a(388),ue=a(387),de=f.default.ul.withConfig({displayName:"TagList__StyledTaglist",componentId:"ll58bc-0"})(["display:flex;flex-wrap:wrap;"]),me=f.default.li.withConfig({displayName:"TagList__Tag",componentId:"ll58bc-1"})(["color:white;background-color:#1890ff;padding:5px 10px;margin-right:10px;margin-bottom:10px;"]),pe=function(e){var t=e.tags;return r.a.createElement(r.a.Fragment,null,r.a.createElement(de,null,t.map((function(e){return r.a.createElement(me,{key:e},e)}))))},fe=function(e){return{type:"HANDLE_LIKE_ARTICLE",article:e}},ge=Object(f.default)(_.a).withConfig({displayName:"AddToFavorites__StyledAddToFavorites",componentId:"sc-1cbe9mc-0"})(["width:60px;"]),he=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!1},a.handleClick=Object(B.a)(R.a.mark((function e(){var t,n,r,i,l,c,o;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.props,n=t.isFavorited,r=t.handleButtonAddToFavorites,i=t.slug,l=n?"delete":"post",a.setState({isLoading:!0}),!navigator.onLine){e.next=22;break}return e.prev=4,e.next=7,A({method:"".concat(l),url:"/articles/".concat(i,"/favorite")});case 7:if(200!==(c=e.sent).status){e.next=14;break}return e.next=11,c.data.article;case 11:o=e.sent,r(o),a.setState({isLoading:!1});case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(4),M(e.t0),a.setState({isLoading:!1});case 20:e.next=24;break;case 22:q.a.error("Please check your network connectivity"),a.setState({isLoading:!1});case 24:case"end":return e.stop()}}),e,null,[[4,16]])}))),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.isFavorited,a=e.favoritesCount,n=e.isAuthenticated,i=this.state.isLoading;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ge,{onClick:this.handleClick,loading:i,disabled:!n},i?null:r.a.createElement(r.a.Fragment,null,r.a.createElement(z.a,{type:"heart",theme:t?"filled":"outlined",style:{fontSize:"13px",color:"#1890ff"}}),r.a.createElement("span",null,"\xa0",a))))}}]),t}(n.Component),Ee=Object(c.b)((function(e){return{isAuthenticated:e.user.loggedIn}}),(function(e){return{handleButtonAddToFavorites:function(t,a){return e(fe(t,a))}}}))(he),be=f.default.div.withConfig({displayName:"Feed__Article",componentId:"sc-1al9ce8-0"})(["width:900px;border:2px solid #1890ff;border-top:none;border-left:none;border-right:none;padding:20px 0;:first-child{border:2px solid #1890ff;border-left:none;border-right:none;}"]),ye=f.default.div.withConfig({displayName:"Feed__ArticlePreview",componentId:"sc-1al9ce8-1"})([""]),ve=f.default.div.withConfig({displayName:"Feed__ArticleMeta",componentId:"sc-1al9ce8-2"})(["display:flex;justify-content:space-between;margin-bottom:15px;"]),xe=f.default.div.withConfig({displayName:"Feed__AvatarAuthorArticle",componentId:"sc-1al9ce8-3"})(["width:45px;height:45px;margin-right:15px;border:1px solid #1890ff;overflow:hidden;"]),we=f.default.div.withConfig({displayName:"Feed__Info",componentId:"sc-1al9ce8-4"})([""]),_e=f.default.div.withConfig({displayName:"Feed__NameAuthorArticle",componentId:"sc-1al9ce8-5"})(["color:#1890ff;font-size:16px;"]),Ce=f.default.span.withConfig({displayName:"Feed__DateArticle",componentId:"sc-1al9ce8-6"})(["font-size:12px;"]),Ae=f.default.div.withConfig({displayName:"Feed__ArticleContent",componentId:"sc-1al9ce8-7"})(["width:100%;"]),Se=f.default.h1.withConfig({displayName:"Feed__ArticleTitle",componentId:"sc-1al9ce8-8"})(["font-size:24px;word-wrap:break-word;margin:0;"]),ke=f.default.p.withConfig({displayName:"Feed__ArticleDescription",componentId:"sc-1al9ce8-9"})(["color:black;font-size:15px;word-wrap:break-word;"]),Ie=f.default.div.withConfig({displayName:"Feed__ArticleFooter",componentId:"sc-1al9ce8-10"})(["display:flex;justify-content:flex-end;"]),je=Object(c.b)((function(e){return{articles:e.multipleArticles.articles}}))((function(e){var t=e.articles;return r.a.createElement(r.a.Fragment,null,t.map((function(e){return r.a.createElement(be,{key:e.createdAt},r.a.createElement(ye,null,r.a.createElement(ve,null,r.a.createElement("div",null,r.a.createElement(xe,null,r.a.createElement("img",{width:"45px",height:"45px",src:e.author.image,alt:""})),r.a.createElement(we,null,r.a.createElement(_e,null,e.author.username),r.a.createElement(Ce,null,"Created ".concat(Object(ue.a)(new Date(e.createdAt),new Date,{addSuffix:!0}))))),r.a.createElement(Ee,{isFavorited:e.favorited,favoritesCount:e.favoritesCount,slug:e.slug}))),r.a.createElement(o.b,{to:"/blog/articles/".concat(e.slug)},r.a.createElement(Ae,null,r.a.createElement(Se,null,e.title),r.a.createElement(ke,null,e.description),r.a.createElement(Ie,null,r.a.createElement(pe,{tags:e.tagList})))))})))})),Oe=function(e,t){return{type:"GET_ARTICLES_SUCCESS",articles:e,articlesCount:t}},Le=f.default.div.withConfig({displayName:"GlobalFeed__StyledGlobalFeed",componentId:"sc-7186gp-0"})(["display:flex;flex-direction:column;align-items:center;margin-top:40px;"]),Ne=f.default.div.withConfig({displayName:"GlobalFeed__Loader",componentId:"sc-7186gp-1"})(["font-size:16px;color:#1890ff;"]),Te=Object(f.default)(se.a).withConfig({displayName:"GlobalFeed__StyledPagination",componentId:"sc-7186gp-2"})(["margin-top:30px;margin-bottom:30px;"]),Ue=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={current:1},a.componentDidMount=function(){(0,a.props.showArticles)()},a.onChange=function(e,t){a.setState({current:e}),(0,a.props.showArticles)(10*e-t,t)},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state.current,t=this.props,a=t.isLoading,n=t.articles,i=t.articlesCount;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Le,null,a&&r.a.createElement(Ne,null,"Loading..."),!a&&n&&r.a.createElement(r.a.Fragment,null,r.a.createElement(je,{articles:n}),r.a.createElement(Te,{total:i,current:e,pageSize:10,onChange:this.onChange}))))}}]),t}(n.Component);Ue.defaultProps={articlesCount:null};var Fe=Object(c.b)((function(e){var t=e.multipleArticles;return{isLoading:t.loading,articles:t.articles,articlesCount:t.articlesCount}}),(function(e){return{showArticles:function(t,a){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return function(){var a=Object(B.a)(R.a.mark((function a(n){var r,i,l;return R.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n({type:"GET_ARTICLES_REQUEST"}),!navigator.onLine){a.next=22;break}return a.prev=2,a.next=5,A.get("/articles",{params:{offset:e,limit:t}});case 5:if(200!==(r=a.sent).status){a.next=14;break}return a.next=9,r.data.articles;case 9:return i=a.sent,a.next=12,r.data.articlesCount;case 12:l=a.sent,n(Oe(i,l));case 14:a.next=20;break;case 16:a.prev=16,a.t0=a.catch(2),M(a.t0),n(Oe());case 20:a.next=24;break;case 22:n({type:"GET_ARTICLES_FAILURE"}),q.a.error("Please check your network connectivity");case 24:case"end":return a.stop()}}),a,null,[[2,16]])})));return function(e){return a.apply(this,arguments)}}()}(t,a))}}}))(Ue),Re=a(56),Be=a.n(Re),De=function(e){return{type:"GET_ARTICLE_SUCCESS",article:e}},Ge=function(e){return function(){var t=Object(B.a)(R.a.mark((function t(a){var n,r;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:"GET_ARTICLE_REQUEST"}),t.prev=1,t.next=4,A.get("/articles/".concat(e));case 4:if(200!==(n=t.sent).status){t.next=10;break}return t.next=8,n.data.article;case 8:r=t.sent,a(De(r));case 10:t.next=16;break;case 12:t.prev=12,t.t0=t.catch(1),M(t.t0),a({type:"GET_ARTICLE_FAILURE"});case 16:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e){return t.apply(this,arguments)}}()},qe=function(){return{type:"CLEAN_ARTICLE "}},Pe=f.default.div.withConfig({displayName:"Article__StyledArticle",componentId:"khm3vx-0"})(["display:flex;flex-wrap:wrap;flex-direction:column;align-items:center;"]),ze=f.default.div.withConfig({displayName:"Article__Banner",componentId:"khm3vx-1"})(["width:100%;padding-top:35px;padding-bottom:30px;border-top:1px solid #1890ff;border-bottom:1px solid #1890ff;"]),Me=f.default.div.withConfig({displayName:"Article__Container",componentId:"khm3vx-2"})(["width:1100px;margin:0 auto;"]),Qe=f.default.h1.withConfig({displayName:"Article__ArticleTitle",componentId:"khm3vx-3"})(["word-wrap:break-word;font-size:44px;margin:0;margin-bottom:20px;"]),Ve=f.default.div.withConfig({displayName:"Article__ArticleMeta",componentId:"khm3vx-4"})(["display:flex;justify-content:space-between;margin-bottom:15px;"]),We=f.default.div.withConfig({displayName:"Article__AvatarAuthorArticle",componentId:"khm3vx-5"})(["width:45px;height:45px;margin-right:15px;border:1px solid #1890ff;overflow:hidden;"]),He=f.default.div.withConfig({displayName:"Article__Info",componentId:"khm3vx-6"})([""]),Xe=f.default.div.withConfig({displayName:"Article__NameAuthorArticle",componentId:"khm3vx-7"})(["color:#1890ff;font-size:16px;"]),Ke=f.default.span.withConfig({displayName:"Article__DateArticle",componentId:"khm3vx-8"})(["font-size:12px;"]),Je=Object(f.default)(o.b).withConfig({displayName:"Article__ButtonEdit",componentId:"khm3vx-9"})(["border:1px solid #1890ff;display:inline-block;padding:5px 10px;text-decoration:none;color:#1890ff;margin-right:10px;:hover{background-color:#1890ff;color:white;}"]),Ye=f.default.button.withConfig({displayName:"Article__ButtonDelete",componentId:"khm3vx-10"})(["padding:5px 10px;font:inherit;border:1px solid #1890ff;background-color:white;color:#1890ff;cursor:pointer;:hover{background-color:#1890ff;color:white;}"]),Ze=f.default.div.withConfig({displayName:"Article__ArticleContent",componentId:"khm3vx-11"})(["padding-top:30px;"]),$e=f.default.div.withConfig({displayName:"Article__ArticleBody",componentId:"khm3vx-12"})(["width:100%;display:flex;justify-content:space-between;"]),et=f.default.div.withConfig({displayName:"Article__BodyWrap",componentId:"khm3vx-13"})(["width:100%;padding:10px;padding-top:0;"]),tt=f.default.p.withConfig({displayName:"Article__Body",componentId:"khm3vx-14"})(["word-wrap:break-word;"]),at=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).isAuthor=function(){var e=a.props,t=e.currentUser,n=e.article;return!(!Be()(n)||!Be()(t))&&n.author.username===t.username},a.handleClickButtonDelete=function(){var e=a.props,t=e.match,n=e.delArticle,r=e.history;n(t.params.slug),r.push("/blog")},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.match,a=e.showArticle,n=e.emptyArticle;a(t.params.slug),n()}},{key:"render",value:function(){var e=this.props,t=e.article,a=e.isLoading;return navigator.onLine?r.a.createElement(r.a.Fragment,null,r.a.createElement(Pe,null,a&&r.a.createElement(w,null),!a&&Be()(t)&&r.a.createElement(r.a.Fragment,null,r.a.createElement(ze,null,r.a.createElement(Me,null,r.a.createElement(Qe,null,t.title),r.a.createElement(Ve,null,r.a.createElement("div",null,r.a.createElement(We,null,r.a.createElement("img",{width:"45px",height:"45px",src:t.author.image,alt:""})),r.a.createElement(He,null,r.a.createElement(Xe,null,t.author.username),r.a.createElement(Ke,null,"Created ".concat(Object(ue.a)(new Date(t.createdAt),new Date,{addSuffix:!0}))))),!a&&this.isAuthor()&&r.a.createElement("span",null,r.a.createElement(Je,{to:"/blog/articles/".concat(t.slug,"/edit")},"Edit Article"),r.a.createElement(Ye,{onClick:this.handleClickButtonDelete},"Delete Article"))))),r.a.createElement(Ze,null,r.a.createElement(Me,null,r.a.createElement($e,null,r.a.createElement(et,null,r.a.createElement(tt,null,t.body)),r.a.createElement(Ee,{isFavorited:t.favorited,favoritesCount:t.favoritesCount,slug:t.slug})),r.a.createElement(pe,{tags:t.tagList})))))):r.a.createElement(U.a,{to:"/blog"})}}]),t}(n.Component);at.defaultProps={article:{}};var nt=Object(U.g)(Object(c.b)((function(e){var t=e.user,a=e.singleArticle;return{isLoading:a.loading,article:a.article,currentUser:t.currentUser}}),(function(e){return{showArticle:function(t){return e(Ge(t))},delArticle:function(t){return e(function(e){return function(){var t=Object(B.a)(R.a.mark((function t(a){return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a({type:"DELETE_ARTICLE_REQUEST"}),!navigator.onLine){t.next=14;break}return t.prev=2,t.next=5,A.delete("/articles/".concat(e));case 5:200===t.sent.status&&a({type:"DELETE_ARTICLE_SUCCESS"}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),M(t.t0);case 12:t.next=16;break;case 14:a({type:"DELETE_ARTICLE_FAILURE "}),q.a.error("Please check your network connectivity");case 16:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}()}(t))},emptyArticle:function(){return e(qe())}}}))(at)),rt=a(138),it=P.a.TextArea,lt=f.default.div.withConfig({displayName:"CreateArticle__StyledCreateArticle",componentId:"sc-1u93rls-0"})(["display:flex;justify-content:center;"]),ct=f.default.div.withConfig({displayName:"CreateArticle__ArticleForm",componentId:"sc-1u93rls-1"})(["margin-top:35px;"]),ot=f.default.div.withConfig({displayName:"CreateArticle__Container",componentId:"sc-1u93rls-2"})(["width:800px;display:flex;flex-direction:column;"]),st=f.default.div.withConfig({displayName:"CreateArticle__FormItem",componentId:"sc-1u93rls-3"})(["margin-bottom:20px;"]),ut=f.default.div.withConfig({displayName:"CreateArticle__ButtonWrap",componentId:"sc-1u93rls-4"})(["display:flex;justify-content:flex-end;"]),dt=f.default.span.withConfig({displayName:"CreateArticle__ErrorMessage",componentId:"sc-1u93rls-5"})(["color:red;"]),mt=function(e){var t=e.field,a=Object(rt.a)(e,["field"]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(P.a,Object.assign({},t,a)))},pt=G.b().shape({title:G.c().required("required"),description:G.c().required("required"),body:G.c().required("required"),tagList:G.a().of(G.c())}),ft=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={isSubmitted:!1},a.handleSubmit=function(){var e=Object(B.a)(R.a.mark((function e(t,n){var r,i,l;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=a.props.addArticle,!navigator.onLine){e.next=21;break}return e.prev=2,e.next=5,A.post("/articles",{article:t});case 5:if(200!==(i=e.sent).status){e.next=12;break}return e.next=9,i.data.article;case 9:l=e.sent,r(l),a.setState({isSubmitted:!0});case 12:e.next=19;break;case 14:e.prev=14,e.t0=e.catch(2),n.setSubmitting(!1),a.setState({isSubmitted:!1}),422===e.t0.response.status?n.setErrors(e.t0.response.data.errors):M(e.t0);case 19:e.next=24;break;case 21:n.setSubmitting(!1),a.setState({isSubmitted:!1}),q.a.error("Please check your network connectivity");case 24:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.emptyArticle)()}},{key:"render",value:function(){var e=this,t=this.props.article,a=this.state.isSubmitted;return localStorage.getItem("token")?a&&Be()(t)?r.a.createElement(U.a,{to:"/blog/articles/".concat(t.slug)}):r.a.createElement(r.a.Fragment,null,r.a.createElement(lt,null,r.a.createElement(ct,null,r.a.createElement(ot,null,r.a.createElement(D.d,{initialValues:{title:"",description:"",body:"",tagList:[]},onSubmit:function(t,a){return e.handleSubmit(t,a)},validationSchema:pt},(function(e){var t=e.handleSubmit,a=e.values,n=e.handleChange,i=e.handleBlur,l=e.touched,c=e.errors,o=e.isSubmitting;return r.a.createElement(D.c,{onSubmit:t},r.a.createElement(st,null,r.a.createElement(P.a,{name:"title",placeholder:"Article Title",value:a.title,onChange:n,onBlur:i}),l.title&&c.title&&r.a.createElement(dt,null,"title ".concat(c.title))),r.a.createElement(st,null,r.a.createElement(P.a,{name:"description",placeholder:"What is this article about?",value:a.description,onChange:n,onBlur:i}),l.description&&c.description&&r.a.createElement(dt,null,"description ".concat(c.description))),r.a.createElement(st,null,r.a.createElement(it,{name:"body",placeholder:"Write your article in (markdown)",rows:10,allowClear:!0,value:a.body,onChange:n,onBlur:i}),l.body&&c.body&&r.a.createElement(dt,null,"body ".concat(c.body))),r.a.createElement(D.b,{name:"tagList",render:function(e){return r.a.createElement("div",null,a.tagList&&a.tagList.length>0?a.tagList.map((function(t,a){return r.a.createElement(st,{key:a},r.a.createElement(D.a,{name:"tagList.".concat(a),placeholder:"Enter tags",component:mt}),r.a.createElement(_.a,{onClick:function(){return e.remove(a)}},"-"),r.a.createElement(_.a,{onClick:function(){return e.insert(a,"")}},"+"))})):r.a.createElement(_.a,{type:"button",onClick:function(){return e.push("")}},"Add a tag"))}}),r.a.createElement(ut,null,r.a.createElement(_.a,{type:"primary",htmlType:"submit",disabled:o},"Publish Article")))})))))):r.a.createElement(U.a,{to:"/blog/"})}}]),t}(n.Component),gt=Object(c.b)((function(e){return{article:e.singleArticle.article}}),(function(e){return{addArticle:function(t){return e(De(t))},emptyArticle:function(){return e(qe())}}}))(ft),ht=a(219),Et=a.n(ht),bt=P.a.TextArea,yt=f.default.div.withConfig({displayName:"EditArticle__StyledEditArticle",componentId:"sc-1tx635c-0"})(["display:flex;justify-content:center;"]),vt=f.default.div.withConfig({displayName:"EditArticle__ArticleForm",componentId:"sc-1tx635c-1"})(["margin-top:35px;"]),xt=f.default.div.withConfig({displayName:"EditArticle__Container",componentId:"sc-1tx635c-2"})(["width:800px;display:flex;flex-direction:column;"]),wt=f.default.div.withConfig({displayName:"EditArticle__FormItem",componentId:"sc-1tx635c-3"})(["margin-bottom:20px;"]),_t=f.default.div.withConfig({displayName:"EditArticle__ButtonWrap",componentId:"sc-1tx635c-4"})(["display:flex;justify-content:flex-end;"]),Ct=f.default.span.withConfig({displayName:"EditArticle__ErrorMessage",componentId:"sc-1tx635c-5"})(["color:red;"]),At=function(e){var t=e.field,a=Object(rt.a)(e,["field"]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(P.a,Object.assign({},t,a)))},St=G.b().shape({title:G.c().required("required"),description:G.c().required("required"),body:G.c().required("required"),tagList:G.a().of(G.c())}),kt=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={isSubmitted:!1},a.componentDidMount=function(){var e=a.props,t=e.match;(0,e.fetchArticle)(t.params.slug)},a.handleSubmit=function(){var e=Object(B.a)(R.a.mark((function e(t,n){var r,i,l,c,o,s;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=a.props,i=r.match,l=r.updateArticle,c=i.params.slug,!navigator.onLine){e.next=22;break}return e.prev=3,e.next=6,A.put("/articles/".concat(c),{article:t});case 6:if(200!==(o=e.sent).status){e.next=13;break}return e.next=10,o.data.article;case 10:s=e.sent,l(s),a.setState({isSubmitted:!0});case 13:e.next=20;break;case 15:e.prev=15,e.t0=e.catch(3),n.setSubmitting(!1),a.setState({isSubmitted:!1}),422===e.t0.response.status?n.setErrors(e.t0.response.data.errors):M(e.t0);case 20:e.next=25;break;case 22:n.setSubmitting(!1),a.setState({isSubmitted:!1}),q.a.error("Please check your network connectivity");case 25:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"setUpdateValuesForm",value:function(){var e=this.props.article;return Be()(e)?Et()(e,["title","description","body","tagList"]):{title:"",description:"",body:"",tagList:[]}}},{key:"render",value:function(){var e=this,t=this.props.article,a=this.state.isSubmitted;return localStorage.getItem("token")?a&&Be()(t)?r.a.createElement(U.a,{to:"/blog/articles/".concat(t.slug)}):r.a.createElement(r.a.Fragment,null,r.a.createElement(yt,null,r.a.createElement(vt,null,r.a.createElement(xt,null,r.a.createElement(D.d,{initialValues:this.setUpdateValuesForm(),onSubmit:function(t,a){return e.handleSubmit(t,a)},validationSchema:St},(function(e){var t=e.handleSubmit,a=e.values,n=e.handleChange,i=e.handleBlur,l=e.touched,c=e.errors,o=e.isSubmitting;return r.a.createElement(D.c,{onSubmit:t},r.a.createElement(wt,null,r.a.createElement(P.a,{name:"title",placeholder:"Article Title",value:a.title,onChange:n,onBlur:i}),l.title&&c.title&&r.a.createElement(Ct,null,"title ".concat(c.title))),r.a.createElement(wt,null,r.a.createElement(P.a,{name:"description",placeholder:"What is this article about?",value:a.description,onChange:n,onBlur:i}),l.description&&c.description&&r.a.createElement(Ct,null,"description ".concat(c.description))),r.a.createElement(wt,null,r.a.createElement(bt,{name:"body",placeholder:"Write your article in (markdown)",rows:10,allowClear:!0,value:a.body,onChange:n,onBlur:i}),l.body&&c.body&&r.a.createElement(Ct,null,"body ".concat(c.body))),r.a.createElement(D.b,{name:"tagList",render:function(e){return r.a.createElement("div",null,a.tagList&&a.tagList.length>0?a.tagList.map((function(t,a){return r.a.createElement(wt,{key:a},r.a.createElement(D.a,{name:"tagList.".concat(a),placeholder:"Enter tags",component:At}),r.a.createElement(_.a,{onClick:function(){return e.remove(a)}},"-"),r.a.createElement(_.a,{onClick:function(){return e.insert(a,"")}},"+"))})):r.a.createElement(_.a,{type:"button",onClick:function(){return e.push("")}},"Add a tag"))}}),r.a.createElement(_t,null,r.a.createElement(_.a,{type:"primary",htmlType:"submit",disabled:o},"Publish Article")))})))))):r.a.createElement(U.a,{to:"/blog/"})}}]),t}(n.Component),It=Object(c.b)((function(e){return{article:e.singleArticle.article}}),(function(e){return{updateArticle:function(t){return e(De(t))},fetchArticle:function(t){return e(Ge(t))},emptyArticle:function(){return e(qe())}}}))(kt),jt=function(){return r.a.createElement(U.d,null,r.a.createElement(U.b,{path:"/blog/",component:Fe,exact:!0}),r.a.createElement(U.b,{path:"/blog/login",component:oe}),r.a.createElement(U.b,{path:"/blog/signup",component:$}),r.a.createElement(U.b,{path:"/blog/articles/new",component:gt}),r.a.createElement(U.b,{path:"/blog/articles/:slug/edit",component:It}),r.a.createElement(U.b,{path:"/blog/articles/:slug",component:nt}))},Ot=f.default.div.withConfig({displayName:"App__Page",componentId:"sc-1to29a3-0"})(["width:100%;margin:0 auto;"]),Lt=f.default.header.withConfig({displayName:"App__Header",componentId:"sc-1to29a3-1"})(["height:60px;display:flex;justify-content:center;align-items:center;background:#1890ff;color:#ffffff;padding:0 20px;"]),Nt=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).componentDidMount=function(){(0,a.props.getCurrentUser)()},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.isLoading;return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,null),r.a.createElement(o.a,null,r.a.createElement(Ot,null,e?r.a.createElement(w,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(Lt,null,r.a.createElement(T,null)),r.a.createElement(jt,null)))))}}]),t}(n.Component),Tt=Object(c.b)((function(e){return{isLoading:e.user.loading}}),(function(e){return{getCurrentUser:function(){return e(function(){var e=Object(B.a)(R.a.mark((function e(t){var a,n,r;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a=localStorage.getItem("token"))){e.next=21;break}return t({type:"GET_USER_REQUEST"}),A.defaults.headers.common.Authorization="Token ".concat(a),e.prev=4,e.next=7,A("/user/");case 7:if(200!==(n=e.sent).status){e.next=13;break}return e.next=11,n.data.user;case 11:r=e.sent,t(Q(r));case 13:e.next=19;break;case 15:e.prev=15,e.t0=e.catch(4),M(e.t0),t({type:"GET_USER_FAILURE"});case 19:e.next=22;break;case 21:t({type:"GET_USER_FAILURE"});case 22:case"end":return e.stop()}}),e,null,[[4,15]])})));return function(t){return e.apply(this,arguments)}}())}}}))(Nt),Ut=a(68),Ft=a(220),Rt=a(21),Bt={currentUser:{},loggedIn:!1,loading:!1},Dt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Bt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_USER_REQUEST":return Object(Rt.a)({},e,{loading:!0});case"GET_USER_SUCCESS":return Object(Rt.a)({},e,{currentUser:t.user,loggedIn:!!localStorage.getItem("token"),loading:!1});case"GET_USER_FAILURE":return Object(Rt.a)({},e,{loading:!1});case"LOGOUT_USER":return Object(Rt.a)({},e,{currentUser:{},loggedIn:!1});default:return e}},Gt={articles:[],articlesCount:null,loading:!1},qt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Gt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ARTICLES_REQUEST":return Object(Rt.a)({},e,{loading:!0});case"GET_ARTICLES_SUCCESS":return Object(Rt.a)({},e,{articles:t.articles,articlesCount:t.articlesCount,loading:!1});case"GET_ARTICLES_FAILURE":return Object(Rt.a)({},e,{loading:!1});case"HANDLE_LIKE_ARTICLE":return Object(Rt.a)({},e,{articles:e.articles.map((function(e){return e.slug===t.article.slug?t.article:e}))});default:return e}},Pt={article:{},loading:!1},zt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ARTICLE_REQUEST":return Object(Rt.a)({},e,{loading:!0});case"GET_ARTICLE_SUCCESS":return Object(Rt.a)({},e,{article:t.article,loading:!1});case"GET_ARTICLE_FAILURE":return Object(Rt.a)({},e,{loading:!1});case"DELETE_ARTICLE_REQUEST":return Object(Rt.a)({},e,{loading:!0});case"DELETE_ARTICLE_SUCCESS":return Object(Rt.a)({},e,{article:{},loading:!1});case"DELETE_ARTICLE_FAILURE ":return Object(Rt.a)({},e,{loading:!1});case"HANDLE_LIKE_ARTICLE":return Object(Rt.a)({},e,{article:t.article});case"CLEAN_ARTICLE ":return Object(Rt.a)({},e,{article:{}});default:return e}},Mt=Object(Ut.c)({user:Dt,multipleArticles:qt,singleArticle:zt}),Qt="object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):Ut.d,Vt=Object(Ut.e)(Mt,Qt(Object(Ut.a)(Ft.a)));l.a.render(r.a.createElement(c.a,{store:Vt},r.a.createElement(o.a,null,r.a.createElement(Tt,null))),document.getElementById("root"))}},[[226,1,2]]]);
//# sourceMappingURL=main.c223d7db.chunk.js.map