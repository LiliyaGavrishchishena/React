(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,t,n){e.exports={table:"TableOfOrders_table__2MJZ8",float:"TableOfOrders_float__2rJxd",title:"TableOfOrders_title__3r7mD",head:"TableOfOrders_head__39ujD",row:"TableOfOrders_row__1Bu68",cell:"TableOfOrders_cell__2yIyE",button:"TableOfOrders_button__2iWzU"}},,,,function(e,t,n){e.exports={form:"SignUpForm_form__1PcsP",title:"SignUpForm_title__2VwOf",button:"SignUpForm_button__13833",input:"SignUpForm_input__38SJG"}},function(e,t,n){e.exports={form:"SignInForm_form__DhTTG",title:"SignInForm_title__q8_1b",button:"SignInForm_button__RvsV5",input:"SignInForm_input__1kG_7"}},function(e,t,n){e.exports={actions:"MenuCard_actions__3gzVQ",button:"MenuCard_button__3SpBi"}},function(e,t,n){e.exports={modalWindow:"AddOrderForm_modalWindow__1Jk77",button:"AddOrderForm_button__2wrBW",form:"AddOrderForm_form__1QEX7",title:"AddOrderForm_title__2NesV",input:"AddOrderForm_input__2pDno"}},,function(e,t,n){e.exports={modalWindow:"Modal_modalWindow__322MY"}},function(e,t,n){e.exports={tab:"Tab_tab__ZHjkB",button:"Tab_button__33CZz"}},function(e,t,n){e.exports={header:"AppHeader_header__3gCDF",logo:"AppHeader_logo__11hMN",usermenu:"AppHeader_usermenu__1yZbD"}},,function(e,t,n){e.exports={list:"AppNav_list__7lhMQ",link:"AppNav_link__2X-Xn"}},function(e,t,n){e.exports={container:"UserMenu_container__3Sbg3",name:"UserMenu_name__1pRdt"}},function(e,t,n){e.exports={list:"MenuGrid_list__H5IHt",item:"MenuGrid_item__Hibcv"}},,,,,,,,function(e,t,n){e.exports={backdrop:"Backdrop_backdrop__1MYbF"}},function(e,t,n){e.exports={container:"Dropdown_container__1YT3y"}},function(e,t,n){e.exports={avatar:"Avatar_avatar__3ZRpL"}},function(e,t,n){e.exports=n.p+"static/media/logo.87c78d0b.png"},function(e,t,n){e.exports=n.p+"static/media/avatar.d1910647.jpg"},function(e,t,n){e.exports={btn_addMenu:"MenuPage_btn_addMenu__3d0x1"}},function(e,t,n){e.exports={Loader:"Spiner_Loader__1vJJD",spin:"Spiner_spin__2tKxF"}},function(e,t,n){e.exports={button:"OrderHistory_button__10GoB"}},function(e,t,n){e.exports={btn_openModal:"App_btn_openModal__3OVfd"}},function(e,t,n){e.exports=n(83)},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(29),i=n.n(o),l=n(1),c=n(2),s=n(4),u=n(3),d=n(5),m=n(16),p=n.n(m),h=function(){return r.a.createElement("div",{className:p.a.modalWindow},r.a.createElement("p",{className:p.a.title},"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil ipsum obcaecati maiores ipsam harum distinctio quia, soluta voluptatibus iste deserunt consectetur totam quas quidem, aliquid voluptatem nisi, nobis expedita quis"),r.a.createElement("button",{className:p.a.button_close,type:"button"},"Close"))},f=n(30),b=n.n(f),E=function(e){var t=e.children;return r.a.createElement("div",{className:b.a.backdrop},t)},_=n(10),v=n(8),g=n(12),y=n.n(g),O={email:"",password:""},w=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state=Object(v.a)({},O),n.handleChange=function(e){n.setState(Object(_.a)({},e.target.name,e.target.value))},n.handleSubmit=function(e){e.preventDefault(),n.reset()},n.reset=function(){n.setState(Object(v.a)({},O))},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password;return r.a.createElement("div",{className:y.a.form},r.a.createElement("h2",{className:y.a.title},"Sign In"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{className:y.a.input,type:"email",name:"email",value:t,onChange:this.handleChange,placeholder:"Email"}),r.a.createElement("br",null),r.a.createElement("input",{className:y.a.input,type:"password",name:"password",value:n,onChange:this.handleChange,placeholder:"Password"}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",className:y.a.button},"Sign In")))}}]),t}(a.Component),N=n(11),S=n.n(N),k={name:"",email:"",phone:"",password:""},C=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state=Object(v.a)({},k),n.handleChange=function(e){n.setState(Object(_.a)({},e.target.name,e.target.value))},n.handleSubmit=function(e){e.preventDefault(),n.reset()},n.reset=function(){n.setState(Object(v.a)({},k))},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.email,a=e.phone,o=e.password;return r.a.createElement("div",{className:S.a.form},r.a.createElement("h2",{className:S.a.title},"Sign up"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{className:S.a.input,type:"text",name:"name",value:t,onChange:this.handleChange,placeholder:"Name"}),r.a.createElement("br",null),r.a.createElement("input",{className:S.a.input,type:"email",name:"email",value:n,onChange:this.handleChange,placeholder:"Email"}),r.a.createElement("br",null),r.a.createElement("input",{className:S.a.input,type:"phone",name:"phone",value:a,onChange:this.handleChange,placeholder:"Phone"}),r.a.createElement("br",null),r.a.createElement("input",{className:S.a.input,type:"password",name:"password",value:o,onChange:this.handleChange,placeholder:"Password"}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",className:S.a.button},"SignUp")))}}]),t}(a.Component),j=n(17),D=n.n(j),M=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={on:!1},n.handleCheckSingIn=function(){n.setState({on:!0})},n.handleCheckSingUp=function(){n.setState({on:!1})},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.on;return r.a.createElement("div",{className:D.a.tab},r.a.createElement("button",{className:D.a.button,type:"button",onClick:this.handleCheckSingIn},"Sign in"),r.a.createElement("button",{className:D.a.button,type:"button",onClick:this.handleCheckSingUp},"Sign up"),e?r.a.createElement(w,null):r.a.createElement(C,null))}}]),t}(a.Component),A=function(e){var t=e.image,n=void 0===t?"":t,a=e.width,o=void 0===a?60:a,i=e.height,l=void 0===i?60:i;return r.a.createElement("img",{src:n,alt:"app logo",width:o,height:l})},x=n(20),I=n.n(x),F=function(e){var t=e.items,n=void 0===t?[]:t;return r.a.createElement("nav",null,r.a.createElement("ul",{className:I.a.list},n.map(function(e){return r.a.createElement("li",{key:e},r.a.createElement("a",{className:I.a.link,href:"/"},e))})))},H=n(31),L=n.n(H),W=function(){return r.a.createElement("div",{className:L.a.container},"Lorem ipsum dolor sit amet consectetur adipisicing elit.",r.a.createElement("button",{type:"button"},"Logout"))},R=n(32),P=n.n(R),U=function(e){var t=e.image,n=void 0===t?"":t,a=e.width,o=void 0===a?85:a,i=e.height,l=void 0===i?52:i;return r.a.createElement("img",{className:P.a.avatar,src:n,alt:"avatar",width:o,height:l})},T=n(21),J=n.n(T),B=function(e){function t(){var e,n;Object(l.a)(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).containerRef=Object(a.createRef)(),n.state={isDropDownOpen:!1},n.handleWindowClick=function(e){var t=n.containerRef.current.contains(e.target);n.state.isDropDownOpen&&!t&&n.closeDropdown()},n.openDropdown=function(){n.setState({isDropDownOpen:!0})},n.closeDropdown=function(){n.setState({isDropDownOpen:!1})},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("click",this.handleWindowClick)}},{key:"shouldComponentUpdate",value:function(e,t){var n=this.state.isDropDownOpen;return t.isDropDownOpen!==n}},{key:"componentWillUnmount",value:function(){window.removeEventListener("click",this.handleWindowClick)}},{key:"render",value:function(){var e=this.state.isDropDownOpen,t=this.props,n=t.name,a=t.avatar;return r.a.createElement("div",{className:J.a.container,onClick:this.openDropdown,ref:this.containerRef},r.a.createElement(U,{image:a}),r.a.createElement("span",{className:J.a.name},n," "),e&&r.a.createElement(W,null))}}]),t}(a.Component),K=n(33),q=n.n(K),G=n(34),V=n.n(G),Z=n(18),z=n.n(Z),Q=["Menu","About","Contacts"],X=function(){return r.a.createElement("header",{className:z.a.header},r.a.createElement("div",{className:z.a.logo},r.a.createElement(A,{image:q.a,width:100,height:100})),r.a.createElement("div",{className:"app_nav"},r.a.createElement(F,{items:Q})),r.a.createElement("div",{className:z.a.usermenu},r.a.createElement(B,{avatar:V.a,name:"Jordan Walke"})))},Y=n(15),$=n(13),ee=n.n($),te=function(e){var t=e.image,n=e.name,a=e.price,o=e.onShowMoreInfo,i=e.onDelete;return r.a.createElement("div",{className:ee.a.card},r.a.createElement("img",{src:t,alt:n,width:320,height:240}),r.a.createElement("p",null,n),r.a.createElement("p",null,"Price: ",a,"$"),r.a.createElement("div",{className:ee.a.actions},r.a.createElement("button",{className:ee.a.button,type:"button",onClick:o},"Show more"),r.a.createElement("button",{className:ee.a.button,type:"button",onClick:i},"Delete")))},ne=n(22),ae=n.n(ne),re=function(e){var t=e.items,n=e.onDelete,a=e.onShowMoreInfo;return r.a.createElement("ul",{className:ae.a.list},t.map(function(e){return r.a.createElement("li",{className:ae.a.item,key:e.id},r.a.createElement(te,{name:e.name,price:e.price,image:e.image,onShowMoreInfo:function(){return a(e.id)},onDelete:function(){return n(e.id)}}))}))},oe=n(9),ie=n.n(oe),le="http://localhost:3000/menu",ce="http://localhost:3000/history",se=function(e){return ie.a.get("".concat(le,"/").concat(e)).then(function(e){return e.data})},ue=function(e){return ie.a.delete("".concat(le,"/").concat(e)).then(function(e){return 200===e.status})},de=function(e){return ie.a.post(le,e).then(function(e){return e.data})},me=function(e){return ie.a.get("".concat(ce,"/").concat(e)).then(function(e){return e.data})},pe=function(e){return ie.a.delete("".concat(ce,"/").concat(e)).then(function(e){return 200===e.status})},he=function(e){return ie.a.post(ce,e).then(function(e){return e.data})},fe=n(35),be=n.n(fe),Ee=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={menu:[]},n.handleDeleteItem=function(e){ue(e).then(function(t){t&&n.setState(function(t){return{menu:t.menu.filter(function(t){return t.id!==e})}})})},n.handleShowMoreInfo=function(e){se(e).then(function(e){console.log(e)})},n.handleAddMenuItem=function(){var e={name:"New name ".concat(Date.now()),price:Math.random(),image:"https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?auto=compress&cs=tinysrgb&h=480&w=640"};de(e).then(function(e){n.setState(function(t){return{menu:Object(Y.a)(t.menu).concat([e])}})})},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;ie.a.get(le).then(function(e){return e.data}).then(function(t){e.setState({menu:t})}),se().then(function(t){e.setState({menu:t})})}},{key:"render",value:function(){var e=this.state.menu;return r.a.createElement("div",null,r.a.createElement("button",{className:be.a.btn_addMenu,type:"button",onClick:this.handleAddMenuItem},"Add menu item"),r.a.createElement(re,{items:e,onDelete:this.handleDeleteItem,onShowMoreInfo:this.handleShowMoreInfo}))}}]),t}(a.Component),_e=n(7),ve=n.n(_e),ge=function(e){var t=e.history,n=e.handleShowMoreInfo,a=e.onDelete;return r.a.createElement("table",{className:ve.a.table},r.a.createElement("caption",{className:ve.a.title},"Order history"),r.a.createElement("tbody",null,r.a.createElement("tr",{className:ve.a.head},r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Price"),r.a.createElement("th",null,"Delivery address"),r.a.createElement("th",null,"Rating"),r.a.createElement("th",null,"Show more"),r.a.createElement("th",null,"Delete")),t.map(function(e){var t=e.id,o=e.date,i=e.price,l=e.address,c=e.rating;return r.a.createElement("tr",{className:ve.a.row,key:t},r.a.createElement("td",{className:ve.a.cell},o),r.a.createElement("td",{className:ve.a.cell},i),r.a.createElement("td",{className:ve.a.cell},l),r.a.createElement("td",{className:ve.a.cell},c),r.a.createElement("td",null,r.a.createElement("button",{className:ve.a.button,type:"button",onClick:function(){n(t)}},"Show more")),r.a.createElement("td",null,r.a.createElement("button",{className:ve.a.button,type:"button",id:t,onClick:function(){a(t)}},"Delete")))})))},ye=n(14),Oe=n.n(ye),we={address:"",price:"",rating:""},Ne=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state=Object(v.a)({},we),n.handleChange=function(e){n.setState(Object(_.a)({},e.target.name,e.target.value))},n.handleSubmit=function(e){e.preventDefault();var t=n.state,a=t.address,r=t.price,o=t.rating,i=n.props,l=i.onClose;(0,i.onAddingOrder)({address:a,price:r,rating:o}),n.setState(Object(v.a)({},we)),l(),n.reset()},n.reset=function(){n.setState(Object(v.a)({},we))},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.address,n=e.price,a=e.rating,o=this.props.onClose;return r.a.createElement(E,null,r.a.createElement("div",{className:Oe.a.modalWindow},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",null,"Address of delivery:",r.a.createElement("input",{className:Oe.a.input,type:"text",name:"address",value:t,onChange:this.handleChange,placeholder:"address"})),r.a.createElement("br",null),r.a.createElement("label",null,"Price:",r.a.createElement("input",{className:Oe.a.input,type:"text",name:"price",value:n,onChange:this.handleChange,placeholder:"price"})),r.a.createElement("br",null),r.a.createElement("label",null,"Rating:",r.a.createElement("input",{className:Oe.a.input,type:"text",name:"rating",value:a,onChange:this.handleChange,placeholder:"rating"})),r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"Add"),r.a.createElement("button",{onClick:o,type:"Button"},"Close"))))}}]),t}(a.Component),Se=function(){return r.a.createElement(E,null,r.a.createElement(h,null))},ke=n(36),Ce=n.n(ke),je=function(){return r.a.createElement("div",{className:Ce.a.Loader})},De=n(37),Me=n.n(De),Ae=function(e){function t(){var e,n;Object(l.a)(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).containerRef=Object(a.createRef)(),n.state={history:[],openHistoryNote:!1,isLoading:!1,openAddOrderForm:!1},n.handleWindowClick=function(e){var t=n.containerRef.current.contains(e.target);n.state.openHistoryNote&&!t&&n.closeHistoryNote()},n.handleEscapeKeyPress=function(e){e.preventDefault(),27===e.keyCode&&n.closeHistoryNote()},n.openHistoryNote=function(){n.setState({openHistoryNote:!0})},n.closeHistoryNote=function(){n.setState({openHistoryNote:!1})},n.handleAddOrder=function(e){var t=e.address,a=e.price,r=e.rating;he({date:(new Date).toLocaleDateString("en-US"),price:a,address:t,rating:r}).then(function(e){n.setState(function(t){return{history:Object(Y.a)(t.history).concat([e])}})})},n.openAddOrderForm=function(){n.setState({openAddOrderForm:!0})},n.closeAddOrderForm=function(){n.setState({openAddOrderForm:!1})},n.handleShowMoreInfo=function(e){n.setState({isLoading:!0}),me(e).then(function(e){n.setState({isLoading:!1}),n.openHistoryNote(JSON.stringify(e))}).catch(function(e){n.setState({isLoading:!1}),n.openHistoryNote(e.message)})},n.handleDeleteHistoryNote=function(e){pe(e).then(function(t){t&&n.setState(function(t){return{history:t.history.filter(function(t){return t.id!==e})}})})},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;ie.a.get(ce).then(function(e){return e.data}).then(function(t){e.setState({history:t})}),me().then(function(t){e.setState({history:t})}),window.addEventListener("click",this.handleWindowClick),window.addEventListener("keyup",this.handleEscapeKeyPress)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("click",this.handleWindowClick),window.removeEventListener("keyup",this.handleEscapeKeyPress)}},{key:"render",value:function(){var e=this.state,t=e.history,n=e.openHistoryNote,a=e.openAddOrderForm,o=e.isLoading;return r.a.createElement("div",null,r.a.createElement(ge,{history:t,onDelete:this.handleDeleteHistoryNote,handleShowMoreInfo:this.handleShowMoreInfo}),r.a.createElement("button",{type:"button",onClick:this.openAddOrderForm,ref:this.containerRef,className:Me.a.button},"Add History Note"),o?r.a.createElement(je,null):n&&r.a.createElement(Se,{onClose:this.closeHistoryNote}),a&&r.a.createElement(Ne,{onAddingOrder:this.handleAddOrder,onClose:this.closeAddOrderForm}))}}]),t}(a.Component),xe=function(){return r.a.createElement("h1",null,"Error while fetching data")},Ie=n(38),Fe=n.n(Ie),He=function(e){function t(){var e,n;Object(l.a)(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).containerRef=Object(a.createRef)(),n.state={isModalOpen:!1},n.handleWindowClick=function(e){var t=n.containerRef.current.contains(e.target);n.state.isModalOpen&&!t&&n.closeModal()},n.handleEscapeKeyPress=function(e){e.preventDefault(),27===e.keyCode&&n.closeModal()},n.openModal=function(){n.setState({isModalOpen:!0})},n.closeModal=function(){n.setState({isModalOpen:!1})},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("click",this.handleWindowClick),window.addEventListener("keyup",this.handleEscapeKeyPress)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("click",this.handleWindowClick),window.removeEventListener("keyup",this.handleEscapeKeyPress)}},{key:"render",value:function(){var e=this.state,t=e.isModalOpen,n=e.error;return r.a.createElement("div",null,r.a.createElement(X,null),r.a.createElement("button",{className:Fe.a.btn_openModal,type:"button",onClick:this.openModal,ref:this.containerRef},"Payment details"),t&&r.a.createElement(E,null,r.a.createElement(h,{onClose:this.closeModal})),r.a.createElement(M,null),r.a.createElement("br",null),r.a.createElement(Ee,null),n&&r.a.createElement(xe,null),r.a.createElement(Ae,null))}}]),t}(a.Component);n(81);i.a.render(r.a.createElement(He,null),document.getElementById("root"))}],[[39,2,1]]]);
//# sourceMappingURL=main.6ef05f2c.chunk.js.map