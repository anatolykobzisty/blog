(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{178:function(e,t,r){e.exports=r(324)},324:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(4),i=r.n(o),l=r(17),c=r(20),s=r(30),u=r(31),d=r(33),p=r(32),m=r(34),f=r(2),h=(r(186),r(153)),g=r(154),E=r.n(g);function b(){var e=Object(h.a)(["\n  ","\n  \n  * {\n    box-sizing: border-box;\n  }\n\n  img {\n    max-width: 100%;\n    height: auto;\n  }\n\n  ul,\n  ol,\n  li {\n    display: block;\n    padding: 0;\n    margin: 0;\n  }\n"]);return b=function(){return e},e}var v=Object(f.createGlobalStyle)(b(),E.a),_=r(326),y=f.default.div.withConfig({displayName:"Loader__Container",componentId:"utmanw-0"})(["height:100vh;display:flex;justify-content:center;align-items:center;"]),A=function(){return a.a.createElement(y,null,a.a.createElement(_.a,{size:"large",tip:"Loading..."}))},w=r(125),x=r(160),C=r.n(x).a.create({baseURL:"https://conduit.productionready.io/api"}),I=function(){return localStorage.removeItem("token"),delete C.defaults.headers.common.Authorization,{type:"LOGOUT"}},L=f.default.div.withConfig({displayName:"NavBar__StyledNavBar",componentId:"f35ajf-0"})(["width:1100px;display:flex;flex-wrap:nowrap;justify-content:space-between;align-items:center;"]),S=Object(f.default)(c.b).withConfig({displayName:"NavBar__Logo",componentId:"f35ajf-1"})(["font-weight:bold;color:white;font-size:25px;:hover{color:black;}"]),k=f.default.ul.withConfig({displayName:"NavBar__Menu",componentId:"f35ajf-2"})(["display:flex;"]),O=f.default.li.withConfig({displayName:"NavBar__MenuItem",componentId:"f35ajf-3"})(["display:flex;align-items:center;margin-right:30px;:last-child{margin-right:0;}"]),T=Object(f.default)(c.c).withConfig({displayName:"NavBar__StyledNavLink",componentId:"f35ajf-4"})(["color:white;:hover{color:black;}"]),j=function(e){var t=e.isAutheticated,r=e.user,n=e.authLogout;return a.a.createElement(L,null,a.a.createElement(S,{to:"/blog"},"Blog"),a.a.createElement(k,null,a.a.createElement(O,null,a.a.createElement(T,{to:"/blog",exact:!0},"Home")),!t&&a.a.createElement(a.a.Fragment,null,a.a.createElement(O,null,a.a.createElement(T,{to:"/blog/login"},"Sign in")),a.a.createElement(O,null,a.a.createElement(T,{to:"/blog/signup"},"Sign up"))),t&&a.a.createElement(a.a.Fragment,null,a.a.createElement(O,null,a.a.createElement(T,{to:"/blog/articles/new"},"New Post")),a.a.createElement(O,null,a.a.createElement(w.a,{onClick:function(){n()}},"Log out")),a.a.createElement(O,null,a.a.createElement("span",null,r)))))};j.defaultProps={user:null};var N=Object(l.b)((function(e){var t=e.auth;return{isAutheticated:!!t.currentUser.token,user:t.currentUser.username}}),(function(e){return{authLogout:function(){return e(I())}}}))(j),U=r(51),R=r(329),F=r(13),D=r(52),G=f.default.ul.withConfig({displayName:"BackendErrorMessages__ErrorMessages",componentId:"sc-1qp1hju-0"})(["color:red;"]),z=function(e){var t=e.backendErrors,r=Object.keys(t).map((function(e){var r=t[e].join(" ");return"".concat(e," ").concat(r)}));return a.a.createElement(G,null,r.map((function(e){return a.a.createElement("li",{key:e},e)})))},q=r(10),P=r.n(q),B=r(19),Q=r(330),M=function(e){return{type:"REGISTER_SUCCESS",user:e}},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return{type:"REGISTER_FAILURE",error:e}},K=function(e){return{type:"LOGIN_SUCCESS",user:e}},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return{type:"LOGIN_FAILURE",error:e}},W=f.default.div.withConfig({displayName:"Authentication__StyledAuthentication",componentId:"sc-102kihz-0"})(["display:flex;justify-content:center;"]),X=f.default.div.withConfig({displayName:"Authentication__Container",componentId:"sc-102kihz-1"})(["width:400px;display:flex;flex-direction:column;"]),J=f.default.h1.withConfig({displayName:"Authentication__PageTitle",componentId:"sc-102kihz-2"})(["color:#1890ff;font-size:40px;text-align:center;margin:20px 0;"]),Y=f.default.p.withConfig({displayName:"Authentication__DescriptionLink",componentId:"sc-102kihz-3"})(["font-size:16px;text-align:center;"]),Z=f.default.div.withConfig({displayName:"Authentication__FormItem",componentId:"sc-102kihz-4"})(["margin-bottom:20px;"]),$=function(e){function t(){var e,r;Object(s.a)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).handleFormSubmit=function(e,t){var n=r.props,a=n.authLogin,o=n.authRegister;t?o(e):a(e)},r}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props,r=t.match,n=t.isAuthenticated,o=t.error,i="/blog/signup"===r.path,l=i?"Sign Up":"Sign In",s=i?"/blog/login":"/blog/signup",u=i?"Have an account?":"Need an account?";return n?a.a.createElement(U.a,{to:"/blog"}):a.a.createElement(W,null,a.a.createElement(X,null,a.a.createElement(J,null,l),a.a.createElement(Y,null,a.a.createElement(c.b,{to:s},u)),a.a.createElement(D.d,{initialValues:{username:"",email:"",password:""},onSubmit:function(t){return e.handleFormSubmit(t,i)}},(function(e){var t=e.handleSubmit,r=e.values,n=e.handleChange,c=e.handleBlur;return a.a.createElement(D.c,{onSubmit:t},i&&o&&!o.errors["email or password"]&&a.a.createElement(z,{backendErrors:o.errors}),i&&a.a.createElement(Z,null,a.a.createElement(R.a,{type:"user",name:"username",placeholder:"Username",value:r.username,onChange:n,onBlur:c,prefix:a.a.createElement(F.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}})})),!i&&o&&o.errors["email or password"]&&a.a.createElement(z,{backendErrors:o.errors}),a.a.createElement(Z,null,a.a.createElement(R.a,{type:"email",name:"email",placeholder:"Email",value:r.email,onChange:n,onBlur:c,prefix:a.a.createElement(F.a,{type:"mail",style:{color:"rgba(0,0,0,.25)"}})})),a.a.createElement(Z,null,a.a.createElement(R.a,{type:"password",name:"password",placeholder:"Password",value:r.password,onChange:n,onBlur:c,prefix:a.a.createElement(F.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}})})),a.a.createElement(w.a,{type:"primary",htmlType:"submit",block:!0},l))}))))}}]),t}(n.Component);$.defaultProps={error:null};var ee=Object(l.b)((function(e){var t=e.auth;return{isAuthenticated:!!t.currentUser.token,isLoading:t.loading,error:t.error}}),(function(e){return{authLogin:function(t){return e(function(e){var t=e.email,r=e.password;return(function(){var e=Object(B.a)(P.a.mark((function e(n){var a,o,i,l;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n({type:"LOGIN_REQUEST"}),a={user:{email:t,password:r}},!navigator.onLine){e.next=24;break}return e.prev=3,e.next=6,C.post("/users/login/",a);case 6:if(200!==(o=e.sent).status){e.next=17;break}return e.next=10,o.data.user;case 10:return i=e.sent,e.next=13,i.token;case 13:l=e.sent,C.defaults.headers.common.Authorization="Token ".concat(l),localStorage.setItem("token",l),n(K(i));case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(3),404===e.t0.response.status?(n(V()),Q.a.error("Not found requests")):403===e.t0.response.status?(n(V()),Q.a.error("Forbidden requests")):401===e.t0.response.status?(n(V()),Q.a.error("Unauthorized requests")):422===e.t0.response.status?n(V(e.t0.response.data)):(n(V()),Q.a.error("Something went wrong"));case 22:e.next=26;break;case 24:n(V()),Q.a.error("Please check your network connectivity");case 26:case"end":return e.stop()}}),e,null,[[3,19]])})));return function(t){return e.apply(this,arguments)}}())}(t))},authRegister:function(t){return e(function(e){var t=e.username,r=e.email,n=e.password;return(function(){var e=Object(B.a)(P.a.mark((function e(a){var o,i,l,c;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a({type:"REGISTER_REQUEST"}),o={user:{username:t,email:r,password:n}},!navigator.onLine){e.next=23;break}return e.prev=3,e.next=6,C.post("/users/",o);case 6:if(200!==(i=e.sent).status){e.next=16;break}return e.next=10,i.data.user;case 10:return l=e.sent,e.next=13,l.token;case 13:c=e.sent,localStorage.setItem("token",c),a(M(l));case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(3),404===e.t0.response.status?(a(H()),Q.a.error("Not found requests")):403===e.t0.response.status?(a(H()),Q.a.error("Forbidden requests")):401===e.t0.response.status?(a(H()),Q.a.error("Unauthorized requests")):422===e.t0.response.status?a(H(e.t0.response.data)):(a(H()),Q.a.error("Something went wrong"));case 21:e.next=25;break;case 23:a(H()),Q.a.error("Please check your network connectivity");case 25:case"end":return e.stop()}}),e,null,[[3,18]])})));return function(t){return e.apply(this,arguments)}}())}(t))}}}))($),te=r(328),re=r(327),ne=f.default.ul.withConfig({displayName:"TagList__StyledTaglist",componentId:"ll58bc-0"})(["display:flex;flex-wrap:wrap;"]),ae=f.default.li.withConfig({displayName:"TagList__Tag",componentId:"ll58bc-1"})(["color:white;background-color:#1890ff;padding:5px 10px;margin-right:10px;margin-bottom:10px;"]),oe=function(e){var t=e.tags;return a.a.createElement(a.a.Fragment,null,a.a.createElement(ne,null,t.map((function(e){return a.a.createElement(ae,{key:e},e)}))))},ie=function(e){return{type:"HANDLE_LIKE_ARTICLE_SUCCESS",article:e}},le=Object(f.default)(w.a).withConfig({displayName:"AddToFavorites__StyledAddToFavorites",componentId:"sc-1cbe9mc-0"})(["width:60px;"]),ce=Object(l.b)(null,(function(e){return{handleAddToFavorites:function(t,r){return e(function(e,t){return function(){var r=Object(B.a)(P.a.mark((function r(n){var a,o;return P.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n({type:"HANDLE_LIKE_ARTICLE_REQUEST"}),!navigator.onLine){r.next=18;break}return r.prev=2,r.next=5,C({method:"".concat(e),url:"/articles/".concat(t,"/favorite")});case 5:if(200!==(a=r.sent).status){r.next=11;break}return r.next=9,a.data.article;case 9:o=r.sent,n(ie(o));case 11:r.next=16;break;case 13:r.prev=13,r.t0=r.catch(2),404===r.t0.response.status?(n({type:"HANDLE_LIKE_ARTICLE_FAILURE"}),Q.a.error("Not found requests")):403===r.t0.response.status?(n({type:"HANDLE_LIKE_ARTICLE_FAILURE"}),Q.a.error("Forbidden requests")):401===r.t0.response.status?(n({type:"HANDLE_LIKE_ARTICLE_FAILURE"}),Q.a.error("Unauthorized requests")):(n({type:"HANDLE_LIKE_ARTICLE_FAILURE"}),Q.a.error("Something went wrong"));case 16:r.next=20;break;case 18:n({type:"HANDLE_LIKE_ARTICLE_FAILURE"}),Q.a.error("Please check your network connectivity");case 20:case"end":return r.stop()}}),r,null,[[2,13]])})));return function(e){return r.apply(this,arguments)}}()}(t,r))}}}))((function(e){var t=e.isFavorited,r=e.favoritesCount,n=e.slug,o=e.handleAddToFavorites;return a.a.createElement(a.a.Fragment,null,a.a.createElement(le,{onClick:function(){o(t?"delete":"post",n)}},a.a.createElement(a.a.Fragment,null,a.a.createElement(F.a,{type:"heart",theme:t?"filled":"outlined",style:{fontSize:"13px",color:"#1890ff"}}),a.a.createElement("span",null,"\xa0",r))))})),se=f.default.div.withConfig({displayName:"Feed__Article",componentId:"sc-1al9ce8-0"})(["width:900px;border:2px solid #1890ff;border-top:none;border-left:none;border-right:none;padding:20px 0;:first-child{border:2px solid #1890ff;border-left:none;border-right:none;}"]),ue=f.default.div.withConfig({displayName:"Feed__ArticlePreview",componentId:"sc-1al9ce8-1"})([""]),de=f.default.div.withConfig({displayName:"Feed__ArticleMeta",componentId:"sc-1al9ce8-2"})(["display:flex;justify-content:space-between;margin-bottom:15px;"]),pe=f.default.div.withConfig({displayName:"Feed__AvatarAuthorArticle",componentId:"sc-1al9ce8-3"})(["width:45px;height:45px;margin-right:15px;border:1px solid #1890ff;overflow:hidden;"]),me=f.default.div.withConfig({displayName:"Feed__Info",componentId:"sc-1al9ce8-4"})([""]),fe=f.default.div.withConfig({displayName:"Feed__NameAuthorArticle",componentId:"sc-1al9ce8-5"})(["color:#1890ff;font-size:16px;"]),he=f.default.span.withConfig({displayName:"Feed__DateArticle",componentId:"sc-1al9ce8-6"})(["font-size:12px;"]),ge=f.default.div.withConfig({displayName:"Feed__ArticleContent",componentId:"sc-1al9ce8-7"})(["width:100%;"]),Ee=f.default.h1.withConfig({displayName:"Feed__ArticleTitle",componentId:"sc-1al9ce8-8"})(["font-size:24px;word-wrap:break-word;margin:0;"]),be=f.default.p.withConfig({displayName:"Feed__ArticleDescription",componentId:"sc-1al9ce8-9"})(["color:black;font-size:15px;word-wrap:break-word;"]),ve=f.default.div.withConfig({displayName:"Feed__ArticleFooter",componentId:"sc-1al9ce8-10"})(["display:flex;justify-content:flex-end;"]),_e=Object(l.b)((function(e){return{articles:e.multipleArticles.articles}}))((function(e){var t=e.articles;return a.a.createElement(a.a.Fragment,null,t.map((function(e){return a.a.createElement(se,{key:e.createdAt},a.a.createElement(ue,null,a.a.createElement(de,null,a.a.createElement("div",null,a.a.createElement(pe,null,a.a.createElement("img",{width:"45px",height:"45px",src:e.author.image,alt:""})),a.a.createElement(me,null,a.a.createElement(fe,null,e.author.username),a.a.createElement(he,null,"Created ".concat(Object(re.a)(new Date(e.createdAt),new Date,{addSuffix:!0}))))),a.a.createElement(ce,{isFavorited:e.favorited,favoritesCount:e.favoritesCount,slug:e.slug}))),a.a.createElement(c.b,{to:"/blog/articles/".concat(e.slug)},a.a.createElement(ge,null,a.a.createElement(Ee,null,e.title),a.a.createElement(be,null,e.description),a.a.createElement(ve,null,a.a.createElement(oe,{tags:e.tagList})))))})))})),ye=function(e,t){return{type:"GET_ARTICLES_SUCCESS",articles:e,articlesCount:t}},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return{type:"GET_ARTICLES_FAILURE",error:e}},we=function(){return{type:"CLEAN_ARTICLE"}},xe=f.default.div.withConfig({displayName:"GlobalFeed__StyledGlobalFeed",componentId:"sc-7186gp-0"})(["display:flex;flex-direction:column;align-items:center;margin-top:40px;"]),Ce=f.default.div.withConfig({displayName:"GlobalFeed__Loader",componentId:"sc-7186gp-1"})(["font-size:16px;color:#1890ff;"]),Ie=f.default.div.withConfig({displayName:"GlobalFeed__ErrorMessage",componentId:"sc-7186gp-2"})(["font-size:16px;color:#1890ff;"]),Le=Object(f.default)(te.a).withConfig({displayName:"GlobalFeed__StyledPagination",componentId:"sc-7186gp-3"})(["margin-top:30px;margin-bottom:30px;"]),Se=function(e){function t(){var e,r;Object(s.a)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).state={current:1},r.componentDidMount=function(){var e=r.props,t=e.showArticles;(0,e.cleanPrevArticle)(),t()},r.onChange=function(e,t){r.setState({current:e}),(0,r.props.showArticles)(10*e-t,t)},r}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state.current,t=this.props,r=t.isLoading,n=t.error,o=t.articles,i=t.articlesCount;return a.a.createElement(a.a.Fragment,null,a.a.createElement(xe,null,r&&a.a.createElement(Ce,null,"Loading..."),n&&a.a.createElement(Ie,null,"Some error happened"),!r&&o&&a.a.createElement(a.a.Fragment,null,a.a.createElement(_e,{articles:o}),a.a.createElement(Le,{total:i,current:e,pageSize:10,onChange:this.onChange}))))}}]),t}(n.Component);Se.defaultProps={error:null,articlesCount:null};var ke=Object(l.b)((function(e){var t=e.multipleArticles;return{isLoading:t.loading,error:t.error,articles:t.articles,articlesCount:t.articlesCount}}),(function(e){return{showArticles:function(t,r){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return function(){var r=Object(B.a)(P.a.mark((function r(n){var a,o,i;return P.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n({type:"GET_ARTICLES_REQUEST"}),!navigator.onLine){r.next=21;break}return r.prev=2,r.next=5,C.get("/articles",{params:{offset:e,limit:t}});case 5:if(200!==(a=r.sent).status){r.next=14;break}return r.next=9,a.data.articles;case 9:return o=r.sent,r.next=12,a.data.articlesCount;case 12:i=r.sent,n(ye(o,i));case 14:r.next=19;break;case 16:r.prev=16,r.t0=r.catch(2),404===r.t0.response.status?(n(Ae()),Q.a.error("Not found requests")):403===r.t0.response.status?(n(Ae()),Q.a.error("Forbidden requests")):401===r.t0.response.status?(n(Ae()),Q.a.error("Unauthorized requests")):422===r.t0.response.status?n(Ae(r.t0.response.data)):(n(Ae()),Q.a.error("Something went wrong"));case 19:r.next=23;break;case 21:n(Ae()),Q.a.error("Please check your network connectivity");case 23:case"end":return r.stop()}}),r,null,[[2,16]])})));return function(e){return r.apply(this,arguments)}}()}(t,r))},cleanPrevArticle:function(){return e(we())}}}))(Se),Oe=function(e){return{type:"GET_ARTICLE_SUCCESS",article:e}},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return{type:"GET_ARTICLE_FAILURE",error:e}},je=function(e){return function(){var t=Object(B.a)(P.a.mark((function t(r){var n,a;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r({type:"GET_ARTICLE_REQUEST"}),!navigator.onLine){t.next=18;break}return t.prev=2,t.next=5,C.get("/articles/".concat(e));case 5:if(200!==(n=t.sent).status){t.next=11;break}return t.next=9,n.data.article;case 9:a=t.sent,r(Oe(a));case 11:t.next=16;break;case 13:t.prev=13,t.t0=t.catch(2),404===t.t0.response.status?(r(Te()),Q.a.error("Not found requests")):403===t.t0.response.status?(r(Te()),Q.a.error("Forbidden requests")):401===t.t0.response.status?(r(Te()),Q.a.error("Unauthorized requests")):422===t.t0.response.status?r(Te(t.t0.response.data)):(r(Te()),Q.a.error("Something went wrong"));case 16:t.next=20;break;case 18:r(Te()),Q.a.error("Please check your network connectivity");case 20:case"end":return t.stop()}}),t,null,[[2,13]])})));return function(e){return t.apply(this,arguments)}}()},Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return{type:"DELETE_ARTICLE_FAILURE ",error:e}},Ue=f.default.div.withConfig({displayName:"Article__StyledArticle",componentId:"khm3vx-0"})(["display:flex;flex-wrap:wrap;flex-direction:column;align-items:center;"]),Re=f.default.div.withConfig({displayName:"Article__Loader",componentId:"khm3vx-1"})(["font-size:16px;color:#1890ff;margin-top:40px;"]),Fe=f.default.div.withConfig({displayName:"Article__ErrorMessage",componentId:"khm3vx-2"})(["font-size:16px;color:#1890ff;"]),De=f.default.div.withConfig({displayName:"Article__Banner",componentId:"khm3vx-3"})(["width:100%;padding-top:35px;padding-bottom:30px;border-top:1px solid #1890ff;border-bottom:1px solid #1890ff;"]),Ge=f.default.div.withConfig({displayName:"Article__Container",componentId:"khm3vx-4"})(["width:1100px;margin:0 auto;"]),ze=f.default.h1.withConfig({displayName:"Article__ArticleTitle",componentId:"khm3vx-5"})(["word-wrap:break-word;font-size:44px;margin:0;margin-bottom:20px;"]),qe=f.default.div.withConfig({displayName:"Article__ArticleMeta",componentId:"khm3vx-6"})(["display:flex;justify-content:space-between;margin-bottom:15px;"]),Pe=f.default.div.withConfig({displayName:"Article__AvatarAuthorArticle",componentId:"khm3vx-7"})(["width:45px;height:45px;margin-right:15px;border:1px solid #1890ff;overflow:hidden;"]),Be=f.default.div.withConfig({displayName:"Article__Info",componentId:"khm3vx-8"})([""]),Qe=f.default.div.withConfig({displayName:"Article__NameAuthorArticle",componentId:"khm3vx-9"})(["color:#1890ff;font-size:16px;"]),Me=f.default.span.withConfig({displayName:"Article__DateArticle",componentId:"khm3vx-10"})(["font-size:12px;"]),He=Object(f.default)(c.b).withConfig({displayName:"Article__ButtonEdit",componentId:"khm3vx-11"})(["border:1px solid #1890ff;display:inline-block;padding:5px 10px;text-decoration:none;color:#1890ff;margin-right:10px;:hover{background-color:#1890ff;color:white;}"]),Ke=f.default.button.withConfig({displayName:"Article__ButtonDelete",componentId:"khm3vx-12"})(["padding:5px 10px;font:inherit;border:1px solid #1890ff;background-color:white;color:#1890ff;cursor:pointer;:hover{background-color:#1890ff;color:white;}"]),Ve=f.default.div.withConfig({displayName:"Article__ArticleContent",componentId:"khm3vx-13"})(["padding-top:30px;"]),We=f.default.div.withConfig({displayName:"Article__ArticleBody",componentId:"khm3vx-14"})(["width:100%;display:flex;justify-content:space-between;"]),Xe=f.default.div.withConfig({displayName:"Article__BodyWrap",componentId:"khm3vx-15"})(["width:100%;padding:10px;padding-top:0;"]),Je=f.default.p.withConfig({displayName:"Article__Body",componentId:"khm3vx-16"})(["word-wrap:break-word;"]),Ye=function(e){function t(){var e,r;Object(s.a)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).isAuthor=function(){var e=r.props,t=e.currentUser,n=e.fetchArticle;return!(!Object.keys(n).length||!Object.keys(t).length)&&n.author.username===t.username},r.handleClick=function(){var e=r.props,t=e.match,n=e.delArticle,a=e.history;n(t.params.slug),a.push("/blog")},r}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.match,r=e.showArticle,n=e.cleanPrevArticle,a=t.params.slug;n(),r(a)}},{key:"render",value:function(){var e=this.props,t=e.fetchArticle,r=e.fetchArticleIsError,n=e.fetchArticleIsLoading;return a.a.createElement(a.a.Fragment,null,a.a.createElement(Ue,null,n&&a.a.createElement(Re,null,"Loading..."),r&&a.a.createElement(Fe,null,"Some error happened"),!n&&Object.keys(t).length&&a.a.createElement(a.a.Fragment,null,a.a.createElement(De,null,a.a.createElement(Ge,null,a.a.createElement(ze,null,t.title),a.a.createElement(qe,null,a.a.createElement("div",null,a.a.createElement(Pe,null,a.a.createElement("img",{width:"45px",height:"45px",src:t.author.image,alt:""})),a.a.createElement(Be,null,a.a.createElement(Qe,null,t.author.username),a.a.createElement(Me,null,"Created ".concat(Object(re.a)(new Date(t.createdAt),new Date,{addSuffix:!0}))))),!n&&this.isAuthor()&&a.a.createElement("span",null,a.a.createElement(He,{to:"/blog/articles/".concat(t.slug,"/edit")},"Edit Article"),a.a.createElement(Ke,{onClick:this.handleClick},"Delete Article"))))),a.a.createElement(Ve,null,a.a.createElement(Ge,null,a.a.createElement(We,null,a.a.createElement(Xe,null,a.a.createElement(Je,null,t.body)),a.a.createElement(ce,{isFavorited:t.favorited,favoritesCount:t.favoritesCount,slug:t.slug})),a.a.createElement(oe,{tags:t.tagList}))))))}}]),t}(n.Component);Ye.defaultProps={fetchArticleIsError:null,fetchArticle:{}};var Ze=Object(U.g)(Object(l.b)((function(e){var t=e.auth,r=e.singleArticle;return{fetchArticleIsLoading:r.loading,fetchArticleIsError:r.error,fetchArticle:r.article,currentUser:t.currentUser}}),(function(e){return{showArticle:function(t){return e(je(t))},delArticle:function(t){return e(function(e){return function(){var t=Object(B.a)(P.a.mark((function t(r){return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r({type:"DELETE_ARTICLE_REQUEST"}),!navigator.onLine){t.next=14;break}return t.prev=2,t.next=5,C.delete("/articles/".concat(e));case 5:200===t.sent.status&&r({type:"DELETE_ARTICLE_SUCCESS"}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),404===t.t0.response.status?(r(Ne()),Q.a.error("Not found requests")):403===t.t0.response.status?(r(Ne()),Q.a.error("Forbidden requests")):401===t.t0.response.status?(r(Ne()),Q.a.error("Unauthorized requests")):422===t.t0.response.status?r(Ne(t.t0.response.data)):(r(Ne()),Q.a.error("Something went wrong"));case 12:t.next=16;break;case 14:r(Ne()),Q.a.error("Please check your network connectivity");case 16:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}()}(t))},cleanPrevArticle:function(){return e(we())}}}))(Ye)),$e=r(170),et=R.a.TextArea,tt=f.default.div.withConfig({displayName:"ArticleForm__StyledArticleForm",componentId:"sc-173qngr-0"})(["margin-top:35px;"]),rt=f.default.div.withConfig({displayName:"ArticleForm__Container",componentId:"sc-173qngr-1"})(["width:800px;display:flex;flex-direction:column;"]),nt=f.default.div.withConfig({displayName:"ArticleForm__FormItem",componentId:"sc-173qngr-2"})(["margin-bottom:20px;"]),at=f.default.div.withConfig({displayName:"ArticleForm__ButtonWrap",componentId:"sc-173qngr-3"})(["display:flex;justify-content:flex-end;"]),ot=function(e){var t=e.field,r=Object($e.a)(e,["field"]);return a.a.createElement(a.a.Fragment,null,a.a.createElement(R.a,Object.assign({},t,r)))},it=function(e){var t=e.handleFormSubmit,r=e.error,n=e.updateValues,o=void 0===n?{title:"",description:"",body:"",tagList:[]}:n;return a.a.createElement(a.a.Fragment,null,a.a.createElement(tt,null,a.a.createElement(rt,null,a.a.createElement(D.d,{onSubmit:function(e){return t(e)},initialValues:o},(function(e){var t=e.handleSubmit,n=e.values,o=e.handleChange,i=e.handleBlur;return a.a.createElement(D.c,{onSubmit:t},r&&r.errors&&a.a.createElement(z,{backendErrors:r.errors}),a.a.createElement(nt,null,a.a.createElement(R.a,{name:"title",placeholder:"Article Title",value:n.title,onChange:o,onBlur:i})),a.a.createElement(nt,null,a.a.createElement(R.a,{name:"description",placeholder:"What is this article about?",value:n.description,onChange:o,onBlur:i})),a.a.createElement(nt,null,a.a.createElement(et,{name:"body",placeholder:"Write your article in (markdown)",rows:10,allowClear:!0,value:n.body,onChange:o,onBlur:i})),a.a.createElement(D.b,{name:"tagList",render:function(e){return a.a.createElement("div",null,n.tagList&&n.tagList.length>0?n.tagList.map((function(t,r){return a.a.createElement(nt,{key:r},a.a.createElement(D.a,{name:"tagList.".concat(r),placeholder:"Enter tags",component:ot}),a.a.createElement(w.a,{onClick:function(){return e.remove(r)}},"-"),a.a.createElement(w.a,{onClick:function(){return e.insert(r,"")}},"+"))})):a.a.createElement(w.a,{type:"button",onClick:function(){return e.push("")}},"Add a tag"))}}),a.a.createElement(at,null,a.a.createElement(w.a,{type:"primary",htmlType:"submit"},"Publish Article")))})))))};it.defaultProps={updateValues:{},error:null};var lt=it,ct=function(e){return{type:"ADD_ARTICLE_SUCCESS",article:e}},st=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return{type:"ADD_ARTICLE_FAILURE",error:e}},ut=f.default.div.withConfig({displayName:"CreateArticle__StyledCreateArticle",componentId:"sc-1u93rls-0"})(["display:flex;justify-content:center;"]),dt=function(e){function t(){var e,r;Object(s.a)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).handleFormSubmit=function(e){(0,r.props.createArticle)(e)},r}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.isAuthenticated,r=e.article,n=e.error,o=e.isLoading,i=e.isSubmitted;return t?i?a.a.createElement(U.a,{to:"/blog/articles/".concat(r.slug)}):a.a.createElement(a.a.Fragment,null,o?a.a.createElement(A,null):a.a.createElement(ut,null,a.a.createElement(lt,{handleFormSubmit:this.handleFormSubmit,error:n}))):a.a.createElement(U.a,{to:"/blog"})}}]),t}(n.Component);dt.defaultProps={error:null};var pt=Object(l.b)((function(e){var t=e.auth,r=e.singleArticle;return{isAuthenticated:!!t.currentUser.token,isLoading:r.loading,error:r.error,article:r.article,isSubmitted:r.isSubmitted}}),(function(e){return{createArticle:function(t){return e(function(e){var t=e.title,r=e.description,n=e.body,a=e.tagList;return(function(){var e=Object(B.a)(P.a.mark((function e(o){var i,l,c;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o({type:"ADD_ARTICLE_REQUEST"}),i={article:{title:t,description:r,body:n,tagList:a}},!navigator.onLine){e.next=19;break}return e.prev=3,e.next=6,C.post("/articles",i);case 6:if(200!==(l=e.sent).status){e.next=12;break}return e.next=10,l.data.article;case 10:c=e.sent,o(ct(c));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(3),404===e.t0.response.status?(o(st()),Q.a.error("Not found requests")):403===e.t0.response.status?(o(st()),Q.a.error("Forbidden requests")):401===e.t0.response.status?(o(st()),Q.a.error("Unauthorized requests")):422===e.t0.response.status?o(st(e.t0.response.data)):(o(st()),Q.a.error("Something went wrong"));case 17:e.next=21;break;case 19:o(st()),Q.a.error("Please check your network connectivity");case 21:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(t){return e.apply(this,arguments)}}())}(t))}}}))(dt),mt=r(171),ft=r.n(mt),ht=function(e){return{type:"EDIT_ARTICLE_SUCCESS",article:e}},gt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return{type:"EDIT_ARTICLE_FAILURE",error:e}},Et=f.default.div.withConfig({displayName:"EditArticle__StyledEditArticle",componentId:"sc-1tx635c-0"})(["display:flex;justify-content:center;"]),bt=function(e){function t(){var e,r;Object(s.a)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).componentDidMount=function(){var e=r.props,t=e.match;(0,e.fetchArticle)(t.params.slug)},r.handleFormSubmit=function(e){var t=r.props,n=t.match;(0,t.updateArticle)(n.params.slug,e)},r}return Object(m.a)(t,e),Object(u.a)(t,[{key:"setUpdateValuesForm",value:function(){var e=this.props.article;return Object.keys(e).length?ft()(e,["title","description","body","tagList"]):{}}},{key:"render",value:function(){var e=this.props,t=e.article,r=e.error,n=e.isLoading;return e.isSubmitted?a.a.createElement(U.a,{to:"/blog/articles/".concat(t.slug)}):a.a.createElement(a.a.Fragment,null,n?a.a.createElement(A,null):a.a.createElement(Et,null,a.a.createElement(lt,{handleFormSubmit:this.handleFormSubmit,error:r,updateValues:this.setUpdateValuesForm()})))}}]),t}(n.Component);bt.defaultProps={error:null};var vt=Object(l.b)((function(e){var t=e.singleArticle;return{isLoading:t.loading,error:t.error,article:t.article,isSubmitted:t.isSubmitted}}),(function(e){return{updateArticle:function(t,r){return e(function(e,t){var r=t.title,n=t.description,a=t.body,o=t.tagList;return(function(){var t=Object(B.a)(P.a.mark((function t(i){var l,c,s;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i({type:"EDIT_ARTICLE_REQUEST"}),l={article:{title:r,description:n,body:a,tagList:o}},!navigator.onLine){t.next=19;break}return t.prev=3,t.next=6,C.put("/articles/".concat(e),l);case 6:if(200!==(c=t.sent).status){t.next=12;break}return t.next=10,c.data.article;case 10:s=t.sent,i(ht(s));case 12:t.next=17;break;case 14:t.prev=14,t.t0=t.catch(3),404===t.t0.response.status?(i(gt()),Q.a.error("Not found requests")):403===t.t0.response.status?(i(gt()),Q.a.error("Forbidden requests")):401===t.t0.response.status?(i(gt()),Q.a.error("Unauthorized requests")):422===t.t0.response.status?i(gt(t.t0.response.data)):(i(gt()),Q.a.error("Something went wrong"));case 17:t.next=21;break;case 19:i(gt()),Q.a.error("Please check your network connectivity");case 21:case"end":return t.stop()}}),t,null,[[3,14]])})));return function(e){return t.apply(this,arguments)}}())}(t,r))},fetchArticle:function(t){return e(je(t))}}}))(bt),_t=f.default.main.withConfig({displayName:"Content__StyledContent",componentId:"sc-1fbqzez-0"})(["height:100vh;"]),yt=function(){return a.a.createElement(_t,null,a.a.createElement(U.d,null,a.a.createElement(U.b,{path:"/blog/",component:ke,exact:!0}),a.a.createElement(U.b,{path:"/blog/login",component:ee}),a.a.createElement(U.b,{path:"/blog/signup",component:ee}),a.a.createElement(U.b,{path:"/blog/articles/new",component:pt}),a.a.createElement(U.b,{path:"/blog/articles/:slug/edit",component:vt}),a.a.createElement(U.b,{path:"/blog/articles/:slug",component:Ze})))},At=function(e){return{type:"AUTO_LOGIN_SUCCESS",user:e}},wt=f.default.div.withConfig({displayName:"App__Page",componentId:"sc-1to29a3-0"})(["width:100%;margin:0 auto;"]),xt=f.default.header.withConfig({displayName:"App__Header",componentId:"sc-1to29a3-1"})(["height:60px;display:flex;justify-content:center;align-items:center;background:#1890ff;color:#ffffff;padding:0 20px;"]),Ct=function(e){function t(){var e,r;Object(s.a)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).componentDidMount=function(){(0,r.props.authAutoLogin)()},r}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.isLoading;return a.a.createElement(a.a.Fragment,null,a.a.createElement(v,null),a.a.createElement(c.a,null,a.a.createElement(wt,null,e?a.a.createElement(A,null):a.a.createElement(a.a.Fragment,null,a.a.createElement(xt,null,a.a.createElement(N,null)),a.a.createElement(yt,null)))))}}]),t}(n.Component),It=Object(l.b)((function(e){return{isLoading:e.auth.loading}}),(function(e){return{authAutoLogin:function(){return e(function(){var e=Object(B.a)(P.a.mark((function e(t){var r,n,a;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r=localStorage.getItem("token"))){e.next=20;break}return t({type:"AUTO_LOGIN_REQUEST"}),C.defaults.headers.common.Authorization="Token ".concat(r),e.prev=4,e.next=7,C("/user/");case 7:if(200!==(n=e.sent).status){e.next=13;break}return e.next=11,n.data.user;case 11:a=e.sent,t(At(a));case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(4),404===e.t0.response.status?(t({type:"AUTO_LOGIN_FAILURE"}),Q.a.error("Not found requests")):403===e.t0.response.status?(t({type:"AUTO_LOGIN_FAILURE"}),Q.a.error("Forbidden requests")):401===e.t0.response.status?(t({type:"AUTO_LOGIN_FAILURE"}),Q.a.error("Unauthorized requests")):(t({type:"AUTO_LOGIN_FAILURE"}),Q.a.error("Something went wrong"));case 18:e.next=21;break;case 20:t({type:"AUTO_LOGIN_FAILURE"});case 21:case"end":return e.stop()}}),e,null,[[4,15]])})));return function(t){return e.apply(this,arguments)}}())}}}))(Ct),Lt=r(49),St=r(172),kt=r(6),Ot={currentUser:{},loading:!1,error:null},Tt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ot,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REGISTER_REQUEST":return Object(kt.a)({},e,{loading:!0});case"REGISTER_SUCCESS":return Object(kt.a)({},e,{currentUser:t.user,loading:!1});case"REGISTER_FAILURE":return Object(kt.a)({},e,{loading:!1,error:t.error});case"LOGIN_REQUEST":return Object(kt.a)({},e,{loading:!0});case"LOGIN_SUCCESS":return Object(kt.a)({},e,{currentUser:t.user,loading:!1});case"LOGIN_FAILURE":return Object(kt.a)({},e,{loading:!1,error:t.error});case"AUTO_LOGIN_REQUEST":return Object(kt.a)({},e,{loading:!0});case"AUTO_LOGIN_SUCCESS":return Object(kt.a)({},e,{currentUser:t.user,loading:!1});case"AUTO_LOGIN_FAILURE":return Object(kt.a)({},e,{loading:!1});case"LOGOUT":return Object(kt.a)({},e,{currentUser:{}});default:return e}},jt={articles:[],articlesCount:null,loading:!1},Nt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:jt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ARTICLES_REQUEST":return Object(kt.a)({},e,{loading:!0});case"GET_ARTICLES_SUCCESS":return Object(kt.a)({},e,{articles:t.articles,articlesCount:t.articlesCount,loading:!1});case"GET_ARTICLES_FAILURE":return Object(kt.a)({},e,{loading:!1,error:t.error});case"HANDLE_LIKE_ARTICLE_SUCCESS":return Object(kt.a)({},e,{article:t.article,articles:e.articles.map((function(e){return e.slug===t.article.slug?t.article:e})),loadingAddToFavorites:!1});default:return e}},Ut={article:{},loading:!1,isSubmitted:!1,error:null},Rt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ut,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ARTICLE_REQUEST":return Object(kt.a)({},e,{loading:!0});case"GET_ARTICLE_SUCCESS":return Object(kt.a)({},e,{article:t.article,loading:!1});case"GET_ARTICLE_FAILURE":return Object(kt.a)({},e,{loading:!1,error:t.error});case"ADD_ARTICLE_REQUEST":return Object(kt.a)({},e,{loading:!0});case"ADD_ARTICLE_SUCCESS":return Object(kt.a)({},e,{article:t.article,loading:!1,isSubmitted:!0});case"ADD_ARTICLE_FAILURE":return Object(kt.a)({},e,{loading:!1,error:t.error});case"EDIT_ARTICLE_REQUEST":return Object(kt.a)({},e,{loading:!0});case"EDIT_ARTICLE_SUCCESS":return Object(kt.a)({},e,{loading:!1,isSubmitted:!0});case"EDIT_ARTICLE_FAILURE":return Object(kt.a)({},e,{loading:!1,error:t.error});case"DELETE_ARTICLE_REQUEST":return Object(kt.a)({},e,{loading:!0});case"DELETE_ARTICLE_SUCCESS":return Object(kt.a)({},e,{article:t.article,isSubmitted:!0,loading:!1});case"DELETE_ARTICLE_FAILURE ":return Object(kt.a)({},e,{loading:!1,error:t.error});case"HANDLE_LIKE_ARTICLE_SUCCESS":return Object(kt.a)({},e,{article:t.article});case"CLEAN_ARTICLE":return Object(kt.a)({},e,{isSubmitted:!1,error:null});default:return e}},Ft=Object(Lt.c)({auth:Tt,multipleArticles:Nt,singleArticle:Rt}),Dt="object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):Lt.d,Gt=Object(Lt.e)(Ft,Dt(Object(Lt.a)(St.a)));i.a.render(a.a.createElement(l.a,{store:Gt},a.a.createElement(c.a,null,a.a.createElement(It,null))),document.getElementById("root"))}},[[178,1,2]]]);
//# sourceMappingURL=main.a97d523b.chunk.js.map