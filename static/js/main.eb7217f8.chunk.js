(this["webpackJsonpcolor-pro"]=this["webpackJsonpcolor-pro"]||[]).push([[0],{194:function(e,o,a){},322:function(e,o,a){"use strict";a.r(o);var t,n,r,c,l,i=a(3),s=a(0),d=a(10),m=a.n(d),u=a(31),b=(a(194),a(39)),h=a(65),j=a(20),p=a(21),f=(a(125),a(376)),x=a(324),g=a(168),O=a(158),v=a.n(O),C=a(374),w=a(379),y="hex",N=a(9),S={down:function(e){return"@media (max-width:".concat({xs:"575.98px",sm:"767.98px",md:"991.98px",lg:"1199.98px"}[e],")")}},B={navbar:{display:"flex",justifyContent:"flex-start",backgroundColor:"#394bad",alignItems:"center",height:"5vh"},logo:Object(N.a)({marginRight:"15px",padding:"0 13px",fontSize:"1.5rem",fontWeight:"bold",borderRadius:"20%",color:"black",backgroundColor:"rgb(250, 250, 250)",fontFamily:"Roboto",height:"100%",display:"flex",alignItems:"center",textDecoration:"none"},S.down("xs"),{fontSize:"1rem",padding:"0 0"}),slider:(t={width:"720px",margin:"0 10",padding:"6px",display:"inline-block","& .rc-slider-track":{backgroundColor:"clouds"},"& .rc-slider-rail":{height:"8px",backgroundColor:"clouds"},"& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus,.rc-slider-handle:hover":{backgroundColor:"black",outline:"none",border:"2px solid red",boxShadow:"none",width:"17px",height:"17px",marginLeft:"-4px",marginTop:"-3px"}},Object(N.a)(t,S.down("lg"),{width:"580px"}),Object(N.a)(t,S.down("md"),{width:"320px"}),Object(N.a)(t,S.down("xs"),{width:"240px"}),t),brightnessIcon:{color:"yellow"},selectContainer:{padding:"2px",backgroundColor:"white",marginLeft:"auto",marginRight:"1rem"}},k=Object(x.a)(B)((function(e){var o=e.sliderLevel,a=e.updateLevel,t=e.format,n=e.updateFormat,r=e.isSingleColorPalette,c=e.classes;return Object(i.jsxs)("header",{className:c.navbar,children:[Object(i.jsx)("div",{className:c.logo,children:Object(i.jsx)(u.b,{style:{textDecoration:"none"},to:"/",children:"Home"})}),!r&&Object(i.jsxs)("div",{children:[Object(i.jsx)("span",{className:c.brightnessIcon,children:Object(i.jsx)(v.a,{})}),Object(i.jsx)("div",{className:c.slider,children:Object(i.jsx)(g.a,{defaultValue:o,min:100,max:900,step:100,onAfterChange:function(e){return a(e)}})})]}),Object(i.jsx)("div",{className:c.selectContainer,children:Object(i.jsxs)(C.a,{value:t,onChange:n,children:[Object(i.jsx)(w.a,{value:y,children:"HEX"}),Object(i.jsx)(w.a,{value:"rgb",children:"RGB"}),Object(i.jsx)(w.a,{value:"rgba",children:"RGBA"})]})})]})})),P={footer:{backgroundColor:"#e4e8e9",height:"6vh",display:"flex",justifyContent:"flex-end",alignItems:"center",fontWeight:"bold"},footerTitle:{fontSize:"2.0rem",color:"black",margin:"0 1rem"}},F=Object(x.a)(P)((function(e){var o=e.paletteName,a=e.classes;return Object(i.jsx)("div",{className:a.footer,children:Object(i.jsx)("div",{className:a.footerTitle,children:Object(i.jsx)("span",{children:o})})})})),D=a(159),I=a(34),A=a.n(I),E={colorBox:(n={background:function(e){return e.color},height:function(e){return e.isSingleColor?"50%":"25%"},width:"20%",display:"inline-block",position:"relative",margin:"0 auto",marginBottom:"-4.5px","&:hover button":{opacity:"1",transition:"0.5s"}},Object(N.a)(n,S.down("lg"),{width:function(e){return e.isSingleColor?"20%":"25%"},height:function(e){return e.isSingleColor?"50%":"20%"}}),Object(N.a)(n,S.down("md"),{width:function(e){return e.isSingleColor,"50%"},height:function(e){return e.isSingleColor?"20%":"10%"}}),Object(N.a)(n,S.down("xs"),{width:function(e){return e.isSingleColor,"100%"},height:function(e){return e.isSingleColor?"10%":"5%"}}),n),boxContent:{position:"absolute",left:"0px",bottom:"0px",padding:"10px",color:function(e){return A()(e.color).luminance()>.3?"rgba(0,0,0,0.7)":"white"},letterSpacing:"1px",textTransform:"uppercase",fontSize:"12px"},seeMore:{background:"rgba(255, 255, 255, 0.3)",position:"absolute",border:"none",right:"0",bottom:"0",color:function(e){return A()(e.color).luminance()>.3?"rgba(0,0,0,0.7)":"white"},width:"60px",height:"30px",textAlign:"center",lineHeight:"30px",textTransform:"uppercase"},copyButton:{width:"100px",height:"30px",top:"50%",left:"50%",marginLeft:"-50px",marginTop:"-15px",textAlign:"center",outline:"none",background:"rgba(255, 255, 255, 0.3)",fontSize:"1rem",lineHeight:"30px",color:function(e){return A()(e.color).luminance()>.3?"rgba(0,0,0,0.7)":"white"},textTransform:"uppercase",border:"none",opacity:"0",position:"absolute",cursor:"pointer",display:"inline-block",textDecoration:"none"},copyOverlay:{background:function(e){return e.color},opacity:"0",zIndex:"0",width:"100%",height:"100%",transition:"transform 0.8s ease-in-out",transform:"scale(0.1)"},copyOverlayShow:{opacity:"1",transform:"scale(50)",zIndex:"10",position:"absolute"},copyOverlayMessage:Object(N.a)({color:function(e){return A()(e.color).luminance()>.3?"rgba(0,0,0,0.7)":"white"},opacity:"0",position:"fixed",top:"0px",left:"0px",right:"0px",bottom:"0px",fontSize:"3rem",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",transform:"scale(0.1)",textTransform:"uppercase"},S.down("xs"),{fontSize:"2rem"}),copyOverlayMessageShow:{opacity:"1",transform:"scale(1)",transition:"all 0.6s ease-in-out",transitionDelay:"0.9s",zIndex:"20"}},T=Object(x.a)(E)((function(e){var o=e.color,a=e.colorName,t=e.paletteId,n=e.colorId,r=e.isSingleColor,c=e.classes,l=Object(s.useState)(!1),d=Object(j.a)(l,2),m=d[0],b=d[1];return Object(i.jsxs)("div",{className:c.colorBox,children:[Object(i.jsx)("div",{className:m?"".concat(c.copyOverlay," ").concat(c.copyOverlayShow):"".concat(c.copyOverlay)}),Object(i.jsxs)("div",{className:m?"".concat(c.copyOverlayMessage," ").concat(c.copyOverlayMessageShow):"".concat(c.copyOverlayMessage),children:[Object(i.jsx)("h1",{children:"Copied!"}),Object(i.jsx)("h2",{children:o})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{className:c.boxContent,children:Object(i.jsx)("span",{children:a})}),Object(i.jsx)(D.CopyToClipboard,{text:o,onCopy:function(){b(!0),setTimeout((function(){return b(!1)}),2e3)},children:Object(i.jsx)("button",{className:c.copyButton,children:"copy"})})]}),!r&&Object(i.jsx)(u.b,{to:"/palette/".concat(t,"/").concat(n),onClick:function(e){return e.stopPropagation()},children:Object(i.jsx)("span",{className:c.seeMore,children:"more"})})]})})),G={palette:{height:"100vh",display:"flex",flexDirection:"column"},paletteColors:{backgroundColor:"white",marginBottom:"-2px",height:"90vh"}},z=Object(x.a)(G)((function(e){var o=e.palette,a=e.classes,t=Object(s.useState)(500),n=Object(j.a)(t,2),r=n[0],c=n[1],l=Object(s.useState)(y),d=Object(j.a)(l,2),m=d[0],u=d[1],b=Object(s.useState)(!1),h=Object(j.a)(b,2),p=h[0],x=h[1],g=o.colors[r].map((function(e){return Object(i.jsx)(T,{color:e[m],colorName:e.name,paletteId:o.id,colorId:e.id,isSingleColor:!1},e.name)}));return Object(s.useEffect)((function(){x(!0),setTimeout((function(){return x(!1)}),2e3)}),[m]),Object(i.jsxs)("div",{className:a.palette,children:[Object(i.jsx)(k,{sliderLevel:r,format:m,updateLevel:function(e){c(e)},updateFormat:function(e){u(e.target.value)},isSingleColorPalette:!1}),Object(i.jsx)("div",{className:a.paletteColors,children:g}),Object(i.jsx)("div",{children:Object(i.jsx)(f.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:p,message:Object(i.jsx)("span",{in:"messagePopUp",children:"Color format changed to ".concat(m.toUpperCase())}),contentProps:{"aria-describedby":"messagePopUp"}})}),Object(i.jsx)(F,{paletteName:o.paletteName})]})})),R=a(375),L=a(377),M=a(363),U=a(89),V=a.n(U),q={root:{backgroundColor:"white",borderRadius:"5px",padding:"0.5rem",position:"relative",border:"1px solid black",overflow:"hidden","&:hover":{cursor:"pointer","& #del":{opacity:.8}}},colors:{backgroundColor:"white",border:"1px solid #ccc",height:"150px",width:"100%",borderRadius:"5px",overflow:"hidden"},title:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"0",color:"black",paddingTop:"0.5rem",fontSize:"1rem",position:"relative"},miniColorBox:{height:"25%",width:"20%",display:"inline-block",margin:"0 auto",position:"relative",marginBottom:"-4px"},delete:{position:"absolute",bottom:0,right:0,zIndex:"10",opacity:"0",backgroundColor:"red",transition:"all 0.5s ease-in-out"},deleteButton:{color:"white",height:"3rem",width:"3rem"}},H=Object(x.a)(q)((function(e){var o=e.classes,a=e.paletteName,t=e.colors,n=e.handleClick,r=e.id,c=e.deletePalette,l=t.map((function(e){return Object(i.jsx)("div",{className:o.miniColorBox,style:{backgroundColor:e.color}},e.name)}));return Object(i.jsxs)("div",{className:o.root,onClick:function(){return n(r)},children:[Object(i.jsx)("div",{className:o.colors,children:l}),Object(i.jsx)("h5",{className:o.title,children:a}),Object(i.jsx)("div",{id:"del",className:o.delete,children:Object(i.jsx)(M.a,{className:o.deleteButton,onClick:function(e){e.stopPropagation(),c(r)},children:Object(i.jsx)(V.a,{})})})]})})),W=a(369),J=a(172),Y=a(364),K=a(368),Q=a(366),X=a(367),Z=a(365),$=function(e){var o=e.open,a=e.handleDelete;return Object(i.jsx)("div",{children:Object(i.jsxs)(Y.a,{open:o,onClose:function(){return a(!1)},"aria-labelledby":"delete-dialog",children:[Object(i.jsx)(Z.a,{id:"delete-dialog",children:"Delete palette?"}),Object(i.jsx)(Q.a,{children:Object(i.jsx)(X.a,{id:"delete-dialog-description",children:Object(i.jsx)(J.a,{component:"span",variant:"h6",children:"Are you sure you want to delete selected palette?"})})}),Object(i.jsxs)(K.a,{children:[Object(i.jsx)(W.a,{variant:"contained",color:"primary",onClick:function(){return a(!1)},children:"Cancel"}),Object(i.jsx)(W.a,{variant:"contained",onClick:function(){return a(!0)},color:"primary",autoFocus:!0,children:"Delete"})]})]})})},_=a.p+"static/media/back4.62baa04d.svg",ee={"@global":{".fade-exit":{opacity:1},".fade-exit-active":{opacity:0,transition:"opacity 500ms ease-out"}},root:{backgroundColor:"#ffe62b",backgroundImage:"url(".concat(_,")"),height:"100vh",display:"flex",justifyContent:"center",alignItems:"flex-start",overflow:"scroll"},container:(r={width:"55%",display:"flex",flexDirection:"column",alignItems:"flex-start",flexWrap:"wrap"},Object(N.a)(r,S.down("lg"),{width:"60%"}),Object(N.a)(r,S.down("md"),{width:"70%"}),Object(N.a)(r,S.down("sm"),{width:"60%"}),Object(N.a)(r,S.down("xs"),{width:"55%"}),r),nav:{display:"flex",width:"95%",justifyContent:"space-between",alignItems:"center",color:"white"},palettes:(c={boxSizing:"border-box",width:"100%",display:"grid",gridTemplateColumns:"repeat(3,30%)",gridGap:"1.5rem"},Object(N.a)(c,S.down("sm"),{gridTemplateColumns:"repeat(2,50%)"}),Object(N.a)(c,S.down("xs"),{gridTemplateColumns:"repeat(1,100%)",gridGap:"1rem"}),c),title:{fontSize:"2.5rem",color:"#f2bd2c"},createNewLink:{fontSize:"1.5rem",color:"silver"}},oe=Object(x.a)(ee)((function(e){var o=e.paletts,a=e.classes,t=e.history,n=e.deletePalette,r=Object(s.useState)(!1),c=Object(j.a)(r,2),l=c[0],d=c[1],m=Object(s.useState)(null),h=Object(j.a)(m,2),p=h[0],f=h[1],x=function(e){t.push("/palette/".concat(e))},g=function(e){f(e),d(!0)},O=o.map((function(e){return Object(i.jsx)(R.a,{classNames:"fade",timeout:500,children:Object(i.jsx)(H,Object(b.a)(Object(b.a)({deletePalette:g},e),{},{handleClick:x}))},e.id)}));return Object(i.jsx)("div",{className:a.root,children:Object(i.jsxs)("div",{className:a.container,children:[Object(i.jsxs)("nav",{className:a.nav,children:[Object(i.jsx)("h1",{className:a.title,children:"Color Palettes"}),Object(i.jsx)(u.b,{className:a.createNewLink,to:"/palette/new",children:"Create palette"})]}),Object(i.jsx)(L.a,{className:a.palettes,children:O}),Object(i.jsx)($,{open:l,handleDelete:function(e){d(!1),e&&n(p)}})]})})})),ae=a(117),te=[50,100,200,300,400,500,600,700,800,900];function ne(e){var o,a={paletteName:e.paletteName,id:e.id,emoji:e.emoji,colors:{}},t=Object(ae.a)(te);try{for(t.s();!(o=t.n()).done;){var n=o.value;a.colors[n]=[]}}catch(u){t.e(u)}finally{t.f()}var r,c,l,i=Object(ae.a)(e.colors);try{for(i.s();!(r=i.n()).done;){var s=r.value,d=(c=s.color,l=10,A.a.scale(function(e){var o="#fff";return[A()(e).darken(1.4).hex(),e,o]}(c)).mode("lab").colors(l)).reverse();for(var m in d)a.colors[te[m]].push({name:"".concat(s.name," ").concat(te[m]),id:s.name.toLowerCase().replace(/ /g,"-"),hex:d[m],rgb:A()(d[m]).css(),rgba:A()(d[m]).css().replace("rgb","rgba").replace(")",",1.0)")})}}catch(u){i.e(u)}finally{i.f()}return a}var re,ce,le,ie={palette:{height:"100vh",display:"flex",flexDirection:"column"},paletteColors:{height:"90vh",marginBottom:"-2px"},goBackBox:(l={background:"black",height:"50%",width:"20%",display:"inline-block",position:"relative",margin:"0 auto",marginBottom:"-4.5px"},Object(N.a)(l,S.down("md"),{height:"20%",width:"50%"}),Object(N.a)(l,S.down("xs"),{height:"10%",width:"100%"}),l),backButton:{width:"100px",height:"30px",top:"50%",left:"50%",marginLeft:"-50px",marginTop:"-15px",textAlign:"center",outline:"none",background:"rgba(255, 255, 255, 0.3)",fontSize:"1rem",lineHeight:"30px",color:"white",textTransform:"uppercase",border:"none",opacity:"1",position:"absolute",cursor:"pointer",display:"inline-block",textDecoration:"none"}},se=Object(x.a)(ie)((function(e){var o=e.colorId,a=e.palette,t=e.classes,n=Object(s.useState)(y),r=Object(j.a)(n,2),c=r[0],l=r[1],d=Object(s.useState)(!1),m=Object(j.a)(d,2),b=m[0],h=m[1],p=function(e,o){var a=[],t=e.colors;for(var n in t)a=a.concat(t[n].filter((function(e){return e.id===o})));return a.slice(1)}(a,o).map((function(e){return Object(i.jsx)(T,{colorName:e.name,color:e[c],isSingleColor:!0},e.name)}));return Object(s.useEffect)((function(){h(!0),setTimeout((function(){return h(!1)}),2e3)}),[c]),Object(i.jsxs)("div",{className:t.palette,children:[Object(i.jsx)(k,{format:c,updateFormat:function(e){l(e.target.value)},isSingleColorPalette:!0}),Object(i.jsxs)("div",{className:t.paletteColors,children:[p,Object(i.jsx)("div",{className:t.goBackBox,children:Object(i.jsx)(u.b,{to:"/palette/".concat(a.id),className:t.backButton,children:"Go Back"})})]}),Object(i.jsx)("div",{children:Object(i.jsx)(f.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:b,message:Object(i.jsx)("span",{in:"messagePopUp",children:"Color format changed to ".concat(c.toUpperCase())}),contentProps:{"aria-descrybedby":"messagePopUp"}})}),Object(i.jsx)(F,{paletteName:a.paletteName})]})})),de=a(6),me=a(60),ue=a(35),be=a(378),he=a(373),je=a(166),pe=a.n(je),fe=a(8),xe={root:(re={background:function(e){return e.color},height:"25%",width:"20%",display:"inline-block",position:"relative",margin:"0 auto",marginBottom:"-6px","&:hover svg":{transform:"scale(1.4)"}},Object(N.a)(re,S.down("lg"),{width:"25%",height:"20%"}),Object(N.a)(re,S.down("md"),{width:"25%",height:"20%"}),Object(N.a)(re,S.down("sm"),{width:"50%",height:"10%"}),Object(N.a)(re,S.down("xs"),{width:"100%",height:"5%"}),re),boxContent:{display:"flex",justifyContent:"space-between",width:"100%",position:"absolute",left:"0px",bottom:"0px",padding:"10px",color:function(e){return A()(e.color).luminance()>.3?"rgba(0,0,0,0.7)":"white"},letterSpacing:"1px",textTransform:"uppercase",fontSize:"14px"},deleteIcon:{color:function(e){return A()(e.color).luminance()>.3?"rgba(0,0,0,0.7)":"white"},transition:"all 0.3s ease-in-out"}},ge=Object(me.b)((function(e){var o=e.name,a=e.classes,t=e.deleteBox;return Object(i.jsx)("div",{className:a.root,children:Object(i.jsxs)("div",{className:a.boxContent,children:[Object(i.jsx)("span",{children:o}),Object(i.jsx)(V.a,{className:a.deleteIcon,onClick:function(){return t(o)}})]})})})),Oe=Object(x.a)(xe)(ge),ve=Object(me.a)((function(e){var o=e.paletteColors,a=e.removeColor,t=o.map((function(e,o){return Object(i.jsx)(Oe,{index:o,color:e.color,name:e.name,deleteBox:a},e.name)}));return Object(i.jsx)("div",{style:{height:"100%"},children:t})})),Ce=a(371),we=a(372),ye=a(161),Ne=a.n(ye),Se=a(370),Be=function(e){var o=e.saveCurrentPalette,a=e.newPaletteName,t=e.handlePaletteNameChange,n=Object(s.useState)(!1),r=Object(j.a)(n,2),c=r[0],l=r[1],d=function(){l(!1)};return Object(i.jsxs)("div",{children:[Object(i.jsx)(W.a,{variant:"contained",color:"secondary",onClick:function(){l(!0)},children:"Save palette"}),Object(i.jsxs)(Y.a,{open:c,onClose:d,"aria-labelledby":"form-dialog-title",children:[Object(i.jsx)(Z.a,{id:"form-dialog-palette-name",children:"Palette name"}),Object(i.jsxs)(ue.ValidatorForm,{onSubmit:o,children:[Object(i.jsxs)(Q.a,{children:[Object(i.jsx)(X.a,{children:"Please enter an unique name for your new Palette"}),Object(i.jsx)(ue.TextValidator,{label:"Palette Name",name:"newPaletteName",value:a,onChange:t,validators:["required","isPaletteNameUnique"],errorMessages:["Palette name is required","Palette name alredy used"]})]}),Object(i.jsxs)(K.a,{children:[Object(i.jsx)(W.a,{variant:"contained",onClick:d,color:"secondary",children:"Cancel"}),Object(i.jsx)(W.a,{variant:"contained",type:"submit",color:"primary",children:"Save"})]})]})]})]})},ke=400,Pe=function(e){var o;return{root:{display:"flex"},hide:{display:"none"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),flexDirection:"row",justifyContent:"space-between"},appBarShift:(o={width:"calc(100% - ".concat(ke,"px)"),marginLeft:ke,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},Object(N.a)(o,S.down("md"),{width:"calc(100% - ".concat(300,"px)")}),Object(N.a)(o,S.down("sm"),{width:"calc(100% - ".concat(200,"px)")}),o),menuButton:{marginRight:e.spacing(2)},navButtons:{display:"flex",flexDirection:"row",justifyContent:"center",padding:"0 10px",alignItems:"center","& button":{margin:"0 0.5rem"},"& a":{textDecoration:"none"}}}},Fe=Object(fe.a)(Pe,{withTheme:!0})((function(e){var o=e.classes,a=e.open,t=e.newPaletteName,n=e.handlePaletteNameChange,r=e.saveCurrentPalette,c=e.handleDrawerOpen;return Object(i.jsxs)("div",{className:o.root,children:[Object(i.jsx)(Se.a,{}),Object(i.jsxs)(Ce.a,{position:"fixed",className:Object(de.a)(o.appBar,Object(N.a)({},o.appBarShift,a)),children:[Object(i.jsx)(we.a,{children:Object(i.jsx)(M.a,{color:"inherit","aria-label":"open drawer",onClick:c,edge:"start",className:Object(de.a)(o.menuButton,a&&o.hide),children:Object(i.jsx)(Ne.a,{})})}),Object(i.jsxs)("div",{className:o.navButtons,children:[Object(i.jsx)(Be,{newPaletteName:t,handlePaletteNameChange:n,saveCurrentPalette:r}),Object(i.jsx)(u.b,{to:"/",children:Object(i.jsx)(W.a,{variant:"contained",color:"secondary",children:"Go back"})})]})]})]})})),De=a(167),Ie={root:{width:"100%"},colorPicker:{width:"100% !important",marginTop:"2rem"},addButton:(ce={width:"100%",marginTop:"2rem",fontSize:"2.0rem"},Object(N.a)(ce,S.down("md"),{fontSize:"1.5rem"}),Object(N.a)(ce,S.down("sm"),{fontSize:"1rem"}),ce),colorNameInput:(le={marginTop:"1rem",width:"100%",height:"4rem"},Object(N.a)(le,S.down("md"),{height:"3.5rem"}),Object(N.a)(le,S.down("sm"),{height:"3rem"}),le)},Ae=Object(fe.a)(Ie)((function(e){var o=e.classes,a=e.paletteColors,t=(e.clearPalette,e.handleColorChange),n=e.newColor,r=e.addNewColor,c=e.newColorName,l=e.handleColorNameChange;return Object(i.jsxs)("div",{className:o.root,children:[Object(i.jsx)(De.a,{className:o.colorPicker,color:n,onChange:t}),Object(i.jsxs)(ue.ValidatorForm,{onSubmit:r,children:[Object(i.jsx)(ue.TextValidator,{className:o.colorNameInput,variant:"filled",placeholder:"color name",value:c,onChange:l,validators:["required","isColorNameUnique","isColorUnique"],errorMessages:["Color name required","Color name already used","Color alrady in the palette"]}),Object(i.jsx)(W.a,{className:o.addButton,type:"submit",variant:"contained",color:"primary",disabled:a.length>=20,style:{backgroundColor:a.length<20?n.hex:"grey",marginTop:"10px"},children:"Add color"})]})]})})),Ee=function(e){var o,a,t;return{root:{display:"flex"},drawer:(o={width:ke,flexShrink:0,height:"100vh"},Object(N.a)(o,S.down("md"),{width:300}),Object(N.a)(o,S.down("sm"),{width:200}),o),drawerPaper:(a={backgroundColor:"#bfe4e6",width:ke,display:"flex",alignItems:"center"},Object(N.a)(a,S.down("md"),{width:300}),Object(N.a)(a,S.down("sm"),{width:200}),a),drawerHeader:Object(b.a)(Object(b.a)({backgroundColor:"#394bad",display:"flex",alignItems:"center",width:"100%",padding:"0 8px"},e.mixins.toolbar),{},{justifyContent:"flex-end"}),drawerTitle:{color:"white",display:"flex",alignItems:"center",width:"100%"},drawerContainer:{width:"90%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},content:(t={flexGrow:1,height:"90vh",padding:e.spacing(0),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-400},Object(N.a)(t,S.down("md"),{marginLeft:-300}),Object(N.a)(t,S.down("sm"),{marginLeft:-200}),t),contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}},Te=Object(fe.a)(Ee,{withThem:!0})((function(e){var o=e.classes,a=e.savePalette,t=e.palettes,n=e.history,r=Object(s.useState)(!0),c=Object(j.a)(r,2),l=c[0],d=c[1],m=Object(s.useState)(""),u=Object(j.a)(m,2),b=u[0],p=u[1],f=Object(s.useState)(""),x=Object(j.a)(f,2),g=x[0],O=x[1],v=Object(s.useState)(""),C=Object(j.a)(v,2),w=C[0],y=C[1],S=Object(s.useState)([]),B=Object(j.a)(S,2),k=B[0],P=B[1],F=function(e){var o=Object(h.a)(k);o=o.filter((function(o){return o.name!==e})),P(o)},D=function(){P([])};return Object(s.useEffect)((function(){return ue.ValidatorForm.addValidationRule("isColorNameUnique",(function(e){return k.every((function(o){return o.name!==e}))})),function(){ue.ValidatorForm.removeValidationRule("isColorNameUnique")}}),[k]),Object(s.useEffect)((function(){return ue.ValidatorForm.addValidationRule("isColorUnique",(function(){return k.every((function(e){return console.log("color in pallete:".concat(e.color,", newColor:").concat(b.hex)),e.color!==b.hex}))})),function(){ue.ValidatorForm.removeValidationRule("isColorUnique")}}),[k,b]),Object(s.useEffect)((function(){return ue.ValidatorForm.addValidationRule("isPaletteNameUnique",(function(){return t.every((function(e){return e.paletteName!==w}))})),function(){ue.ValidatorForm.removeValidationRule("isPaletteNameUnique")}}),[t,w]),Object(i.jsxs)("div",{className:o.root,children:[Object(i.jsx)(Fe,{open:l,newPaletteName:w,handlePaletteNameChange:function(e){y(e.target.value)},saveCurrentPalette:function(e){var o={paletteName:w,id:w.toLowerCase().replace(/ /g,"-"),colors:k};a(o),n.push("/")},handleDrawerOpen:function(){d(!0)}}),Object(i.jsxs)(be.a,{className:o.drawer,variant:"persistent",anchor:"left",open:l,classes:{paper:o.drawerPaper},children:[Object(i.jsxs)("div",{className:o.drawerHeader,children:[Object(i.jsx)("div",{className:o.drawerTitle,children:Object(i.jsx)(J.a,{variant:"h4",color:"secondary",children:"Pallete design"})}),Object(i.jsx)(M.a,{onClick:function(){d(!1)},children:Object(i.jsx)(pe.a,{style:{fontSize:"2.5rem"}})})]}),Object(i.jsx)(he.a,{}),Object(i.jsxs)("div",{className:o.drawerContainer,children:[Object(i.jsx)(J.a,{variant:"h4",children:"Create color"}),Object(i.jsx)("div",{children:Object(i.jsx)(W.a,{variant:"contained",color:"secondary",onClick:D,children:"Clear palette"})}),Object(i.jsx)(Ae,{paletteColors:k,clearPalette:D,handleColorChange:function(e){p(e)},newColor:b,addNewColor:function(e){var o=Object(h.a)(k);o.push({color:b.hex,name:g}),P(o)},newColorName:g,handleColorNameChange:function(e){O(e.target.value)}}),Object(i.jsx)(he.a,{})]})]}),Object(i.jsxs)("main",{className:Object(de.a)(o.content,Object(N.a)({},o.contentShift,l)),children:[Object(i.jsx)("div",{className:o.drawerHeader}),Object(i.jsx)(ve,{paletteColors:k,removeColor:F,axis:"xy",onSortEnd:function(e){var o=e.oldIndex,a=e.newIndex;P(Object(me.c)(k,o,a))},distance:10}),";"]})]})})),Ge={page:{height:"100vh",position:"fixed",width:"100%",top:0,transition:"opacity 0.5s ease-in-out"},"@global":{".page-enter":{opacity:0},".page-enter-active":{opacity:1},".page-exit-active":{opacity:0}}},ze=Object(x.a)(Ge)((function(e){var o=e.classes,a=e.children;return Object(i.jsx)("section",{className:o.page,children:a})})),Re=[{paletteName:"Material UI Colors",id:"material-ui-colors",emoji:"\ud83c\udfa8",colors:[{name:"red",color:"#F44336"},{name:"pink",color:"#E91E63"},{name:"purple",color:"#9C27B0"},{name:"deeppurple",color:"#673AB7"},{name:"indigo",color:"#3F51B5"},{name:"blue",color:"#2196F3"},{name:"lightblue",color:"#03A9F4"},{name:"cyan",color:"#00BCD4"},{name:"teal",color:"#009688"},{name:"green",color:"#4CAF50"},{name:"lightgreen",color:"#8BC34A"},{name:"lime",color:"#CDDC39"},{name:"yellow",color:"#FFEB3B"},{name:"amber",color:"#FFC107"},{name:"orange",color:"#FF9800"},{name:"deeporange",color:"#FF5722"},{name:"brown",color:"#795548"},{name:"grey",color:"#9E9E9E"},{name:"bluegrey",color:"#607D8B"}]},{paletteName:"Flat UI Colors v1",id:"flat-ui-colors-v1",emoji:"\ud83e\udd19",colors:[{name:"Turquoise",color:"#1abc9c"},{name:"Emerald",color:"#2ecc71"},{name:"PeterRiver",color:"#3498db"},{name:"Amethyst",color:"#9b59b6"},{name:"WetAsphalt",color:"#34495e"},{name:"GreenSea",color:"#16a085"},{name:"Nephritis",color:"#27ae60"},{name:"BelizeHole",color:"#2980b9"},{name:"Wisteria",color:"#8e44ad"},{name:"MidnightBlue",color:"#2c3e50"},{name:"SunFlower",color:"#f1c40f"},{name:"Carrot",color:"#e67e22"},{name:"Alizarin",color:"#e74c3c"},{name:"Clouds",color:"#ecf0f1"},{name:"Concrete",color:"#95a5a6"},{name:"Orange",color:"#f39c12"},{name:"Pumpkin",color:"#d35400"},{name:"Pomegranate",color:"#c0392b"},{name:"Silver",color:"#bdc3c7"},{name:"Asbestos",color:"#7f8c8d"}]},{paletteName:"Flat UI Colors Dutch",id:"flat-ui-colors-dutch",emoji:"\ud83c\uddf3\ud83c\uddf1",colors:[{name:"Sunflower",color:"#FFC312"},{name:"Energos",color:"#C4E538"},{name:"BlueMartina",color:"#12CBC4"},{name:"LavenderRose",color:"#FDA7DF"},{name:"BaraRose",color:"#ED4C67"},{name:"RadiantYellow",color:"#F79F1F"},{name:"AndroidGreen",color:"#A3CB38"},{name:"MediterraneanSea",color:"#1289A7"},{name:"LavenderTea",color:"#D980FA"},{name:"VerryBerry",color:"#B53471"},{name:"PuffinsBill",color:"#EE5A24"},{name:"PixelatedGrass",color:"#009432"},{name:"MerchantMarineBlue",color:"#0652DD"},{name:"ForgottenPurple",color:"#9980FA"},{name:"HollyHock",color:"#833471"},{name:"RedPigment",color:"#EA2027"},{name:"TurkishAqua",color:"#006266"},{name:"20000LeaguesUnderTheSea",color:"#1B1464"},{name:"CircumorbitalRing",color:"#5758BB"},{name:"MagentaPurple",color:"#6F1E51"}]},{paletteName:"Flat UI Colors American",id:"flat-ui-colors-american",emoji:"\ud83c\uddfa\ud83c\uddf8",colors:[{name:"LightGreenishBlue",color:"#55efc4"},{name:"FadedPoster",color:"#81ecec"},{name:"GreenDarnerTail",color:"#74b9ff"},{name:"ShyMoment",color:"#a29bfe"},{name:"CityLights",color:"#dfe6e9"},{name:"MintLeaf",color:"#00b894"},{name:"RobinsEggBlue",color:"#00cec9"},{name:"ElectronBlue",color:"#0984e3"},{name:"ExodusFruit",color:"#6c5ce7"},{name:"SoothingBreeze",color:"#b2bec3"},{name:"SourLemon",color:"#ffeaa7"},{name:"FirstDate",color:"#fab1a0"},{name:"PinkGlamour",color:"#ff7675"},{name:"Pico8Pink",color:"#fd79a8"},{name:"AmericanRiver",color:"#636e72"},{name:"BrightYarrow",color:"#fdcb6e"},{name:"OrangeVille",color:"#e17055"},{name:"Chi-Gong",color:"#d63031"},{name:"PrunusAvium",color:"#e84393"},{name:"DraculaOrchid",color:"#2d3436"}]},{paletteName:"Flat UI Colors Aussie",id:"flat-ui-colors-aussie",emoji:"\ud83c\udde6\ud83c\uddfa",colors:[{name:"Beekeeper",color:"#f6e58d"},{name:"SpicedNectarine",color:"#ffbe76"},{name:"PinkGlamour",color:"#ff7979"},{name:"JuneBud",color:"#badc58"},{name:"CoastalBreeze",color:"#dff9fb"},{name:"Turbo",color:"#f9ca24"},{name:"QuinceJelly",color:"#f0932b"},{name:"CarminePink",color:"#eb4d4b"},{name:"PureApple",color:"#6ab04c"},{name:"HintOfIcePack",color:"#c7ecee"},{name:"MiddleBlue",color:"#7ed6df"},{name:"Heliotrope",color:"#e056fd"},{name:"ExodusFruit",color:"#686de0"},{name:"DeepKoamaru",color:"#30336b"},{name:"SoaringEagle",color:"#95afc0"},{name:"GreenlandGreen",color:"#22a6b3"},{name:"SteelPink",color:"#be2edd"},{name:"Blurple",color:"#4834d4"},{name:"DeepCove",color:"#130f40"},{name:"WizardGrey",color:"#535c68"}]},{paletteName:"Flat UI Colors British",id:"flat-ui-colors-british",emoji:"\ud83c\uddec\ud83c\udde7",colors:[{name:"ProtossPylon",color:"#00a8ff"},{name:"Periwinkle",color:"#9c88ff"},{name:"Rise-N-Shine",color:"#fbc531"},{name:"DownloadProgress",color:"#4cd137"},{name:"Seabrook",color:"#487eb0"},{name:"VanaDylBlue",color:"#0097e6"},{name:"MattPurple",color:"#8c7ae6"},{name:"NanohanachaGold",color:"#e1b12c"},{name:"SkirretGreen",color:"#44bd32"},{name:"Naval",color:"#40739e"},{name:"NasturcianFlower",color:"#e84118"},{name:"LynxWhite",color:"#f5f6fa"},{name:"BlueberrySoda",color:"#7f8fa6"},{name:"MazarineBlue",color:"#273c75"},{name:"BlueNights",color:"#353b48"},{name:"HarleyOrange",color:"#c23616"},{name:"HintOfPensive",color:"#dcdde1"},{name:"ChainGangGrey",color:"#718093"},{name:"PicoVoid",color:"#192a56"},{name:"ElectroMagnetic",color:"#2f3640"}]},{paletteName:"Flat UI Colors Spanish",id:"flat-ui-colors-spanish",emoji:"\ud83c\uddea\ud83c\uddf8",colors:[{name:"JacksonsPurple",color:"#40407a"},{name:"C64Purple",color:"#706fd3"},{name:"SwanWhite",color:"#f7f1e3"},{name:"SummerSky",color:"#34ace0"},{name:"CelestialGreen",color:"#33d9b2"},{name:"LuckyPoint",color:"#2c2c54"},{name:"Liberty",color:"#474787"},{name:"HotStone",color:"#aaa69d"},{name:"DevilBlue",color:"#227093"},{name:"PalmSpringsSplash",color:"#218c74"},{name:"FlourescentRed",color:"#ff5252"},{name:"SyntheticPumpkin",color:"#ff793f"},{name:"CrocodileTooth",color:"#d1ccc0"},{name:"MandarinSorbet",color:"#ffb142"},{name:"SpicedButterNut",color:"#ffda79"},{name:"EyeOfNewt",color:"#b33939"},{name:"ChileanFire",color:"#cd6133"},{name:"GreyPorcelain",color:"#84817a"},{name:"AlamedaOchre",color:"#cc8e35"},{name:"Desert",color:"#ccae62"}]},{paletteName:"Flat UI Colors Indian",id:"flat-ui-colors-indian",emoji:"\ud83c\uddee\ud83c\uddf3",colors:[{name:"OrchidOrange",color:"#FEA47F"},{name:"SpiroDiscoBall",color:"#25CCF7"},{name:"HoneyGlow",color:"#EAB543"},{name:"SweetGarden",color:"#55E6C1"},{name:"FallingStar",color:"#CAD3C8"},{name:"RichGardenia",color:"#F97F51"},{name:"ClearChill",color:"#1B9CFC"},{name:"WhitePepper",color:"#F8EFBA"},{name:"Keppel",color:"#58B19F"},{name:"ShipsOfficer",color:"#2C3A47"},{name:"FieryFuchsia",color:"#B33771"},{name:"BlueBell",color:"#3B3B98"},{name:"GeorgiaPeach",color:"#FD7272"},{name:"OasisStream",color:"#9AECDB"},{name:"BrightUbe",color:"#D6A2E8"},{name:"MagentaPurple",color:"#6D214F"},{name:"EndingNavyBlue",color:"#182C61"},{name:"SasquatchSocks",color:"#FC427B"},{name:"PineGlade",color:"#BDC581"},{name:"HighlighterLavender",color:"#82589F"}]},{paletteName:"Flat UI Colors French",id:"flat-ui-colors-french",emoji:"\ud83c\uddeb\ud83c\uddf7",colors:[{name:"FlatFlesh",color:"#fad390"},{name:"MelonMelody",color:"#f8c291"},{name:"Livid",color:"#6a89cc"},{name:"Spray",color:"#82ccdd"},{name:"ParadiseGreen",color:"#b8e994"},{name:"SquashBlossom",color:"#f6b93b"},{name:"MandarinRed",color:"#e55039"},{name:"AzraqBlue",color:"#4a69bd"},{name:"Dupain",color:"#60a3bc"},{name:"AuroraGreen",color:"#78e08f"},{name:"IcelandPoppy",color:"#fa983a"},{name:"TomatoRed",color:"#eb2f06"},{name:"YueGuangBlue",color:"#1e3799"},{name:"GoodSamaritan",color:"#3c6382"},{name:"Waterfall",color:"#38ada9"},{name:"CarrotOrange",color:"#e58e26"},{name:"JalapenoRed",color:"#b71540"},{name:"DarkSapphire",color:"#0c2461"},{name:"ForestBlues",color:"#0a3d62"},{name:"ReefEncounter",color:"#079992"}]}],Le=function(e){var o=e.location,a=Object(s.useState)(Re),t=Object(j.a)(a,2),n=t[0],r=t[1],c=function(e){return n.find((function(o){return o.id===e}))},l=function(e){r([].concat(Object(h.a)(n),[e]))},d=function(e){var o=Object(h.a)(n);o=o.filter((function(o){return o.id!==e})),r(o)};return Object(i.jsxs)(p.c,{location:o,children:[Object(i.jsx)(p.a,{exact:!0,path:"/",render:function(e){return Object(i.jsx)(ze,{children:Object(i.jsx)(oe,Object(b.a)(Object(b.a)({paletts:n},e),{},{deletePalette:d}))})}}),Object(i.jsx)(p.a,{exact:!0,path:"/palette/new",render:function(e){return Object(i.jsx)(ze,{children:Object(i.jsx)(Te,Object(b.a)({savePalette:l,palettes:n},e))})}}),Object(i.jsx)(p.a,{exact:!0,path:"/palette/:id",render:function(e){return Object(i.jsx)(ze,{children:Object(i.jsx)(z,{palette:ne(c(e.match.params.id))})})}}),Object(i.jsx)(p.a,{exact:!0,path:"/palette/:paletteId/:color",render:function(e){return Object(i.jsx)(ze,{children:Object(i.jsx)(se,{colorId:e.match.params.color,palette:ne(c(e.match.params.paletteId))})})}}),Object(i.jsx)(p.a,{render:function(e){return Object(i.jsx)(ze,{children:Object(i.jsx)(oe,Object(b.a)(Object(b.a)({paletts:n},e),{},{deletePalette:d}))})}})]})};m.a.render(Object(i.jsx)(u.a,{children:Object(i.jsx)(Le,{})}),document.getElementById("root"))}},[[322,1,2]]]);
//# sourceMappingURL=main.eb7217f8.chunk.js.map