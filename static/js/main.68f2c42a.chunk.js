(this.webpackJsonprythmvibes=this.webpackJsonprythmvibes||[]).push([[0],{34:function(e,t){},42:function(e,t){},43:function(e,t){},61:function(e,t,n){"use strict";n.r(t);var o=n(7),i=n.n(o),a=n(32),r=n.n(a),c=n(9),s=n(16),l=(n(34),n(42),n(43),n(44),n(8)),j=n(10),m=n(21),h=n.n(m)()((function(e,t){return{micAmp:25,updateMicAmp:function(t){return e((function(e){return{micAmp:t}}))}}})),b=n(11),u=n(62),g=n(22),p=n(6);function d(e){var t=i.a.useRef(),n=Object(o.useState)(!1),a=Object(j.a)(n,2),r=a[0],c=a[1],m=h((function(e){return[e.micAmp]})),d=Object(j.a)(m,1)[0],O=Object(o.useState)({size:e.size,color:e.color,heightSegments:e.heightSegments,widthSegments:e.widthSegments,posX:e.position[0],posY:e.position[1],posZ:e.position[2],rotX:e.rotX,activeRot:!0,rotY:e.rotY,rotZ:e.rotZ}),x=Object(j.a)(O,2),f=x[0],v=x[1],S=function(e){var t=e.target,n=t.value,o=t.name,i=Object(l.a)({},f);i[o]=n,v(i)},y=Object(p.jsx)(g.Html,{style:{backgroundColor:"grey",padding:"0.6em",opacity:"0.7",borderRadius:"0.5em"},position:[f.posX-10,f.posY+2,-50],rotationY:.2,children:Object(p.jsx)("div",{children:Object(p.jsxs)("form",{children:[Object(p.jsx)("label",{htmlfor:"color",children:"Farbe"}),Object(p.jsx)("br",{}),Object(p.jsx)("input",{type:"color",name:"color",value:f.color,onChange:S}),Object(p.jsx)("br",{}),Object(p.jsx)("label",{htmlfor:"size",children:"Gr\xf6\xdfe"}),Object(p.jsx)("input",{type:"range",name:"size",value:f.size,onChange:S}),Object(p.jsx)("label",{htmlfor:"heightSegments",children:"heightSegments"}),Object(p.jsx)("input",{type:"range",min:1,max:20,name:"heightSegments",value:f.heightSegments,onChange:S}),Object(p.jsx)("label",{htmlfor:"widthSegments",children:"widthSegments"}),Object(p.jsx)("input",{type:"range",min:1,max:20,name:"widthSegments",value:f.widthSegments,onChange:S}),Object(p.jsx)("br",{}),Object(p.jsx)("label",{htmlfor:"X",children:"X"}),Object(p.jsx)("input",{type:"range",min:-8.8,max:8.8,name:"posX",value:f.posX,onChange:S}),Object(p.jsx)("label",{htmlfor:"Y",children:"Y"}),Object(p.jsx)("input",{type:"range",min:-10,max:10,name:"posY",value:f.posY,onChange:S}),Object(p.jsx)("label",{htmlfor:"Z",children:"Z"}),Object(p.jsx)("input",{type:"range",min:-10,max:10,name:"posZ",value:f.posZ,onChange:S}),Object(p.jsx)("br",{}),Object(p.jsx)("label",{htmlfor:"rotX",children:"Rotation X"}),Object(p.jsx)("input",{type:"range",min:-100,max:100,name:"rotX",value:f.rotX,onChange:S}),Object(p.jsx)("label",{htmlfor:"rotY",children:"Rotation Y"}),Object(p.jsx)("input",{type:"range",min:-100,max:100,name:"rotY",value:f.rotY,onChange:S}),Object(p.jsx)("label",{htmlfor:"rotZ",children:"Rotation Z"}),Object(p.jsx)("input",{type:"range",min:-100,max:100,name:"rotZ",value:f.rotZ,onChange:S})]})})});return Object(s.useFrame)((function(){if(f.activeRot){var e=d/30;t.current.rotation.x+=f.rotX/1e3*e,t.current.rotation.y+=f.rotY/1e3*e,t.current.rotation.z+=f.rotZ/1e3*e}})),Object(p.jsxs)(i.a.Fragment,{children:[r?y:null,Object(p.jsxs)("mesh",{position:[f.posX,f.posY,f.posZ],ref:t,scale:f.size/10+d/40,onClick:function(){c(!r)},children:[Object(p.jsx)("sphereGeometry",{args:[1,f.heightSegments+20*d,f.widthSegments]}),Object(p.jsx)(u.a,{attact:"material",color:f.color,side:b.DoubleSide,factor:1*d,speed:.01/d*.1,refractionRatio:3,roughness:.2,wireframe:!1})]})]})}var O=n(12);function x(){var e=Object(o.useState)([]),t=Object(j.a)(e,2),n=t[0],a=t[1],r=Object(o.useState)(!1),c=Object(j.a)(r,2),s=c[0],l=c[1],m=Object(o.useState)({id:"default",label:"",kind:"audioinput"}),b=Object(j.a)(m,2),u=(b[0],b[1],h((function(e){return[e.micAmp,e.updateMicAmp]}))),g=Object(j.a)(u,2),d=(g[0],g[1]);(new(window.AudioContext||window.webkitAudioContext)).createAnalyser().fftsize=512;return navigator.mediaDevices.getUserMedia({audio:!0,video:!0}).then((function(e){var t=new AudioContext,n=t.createAnalyser(),o=t.createMediaStreamSource(e),i=t.createScriptProcessor(2048,1,1);n.smoothingTimeConstant=.8,n.fftSize=1024,o.connect(n),n.connect(i),i.connect(t.destination),i.onaudioprocess=function(){var e=new Uint8Array(n.frequencyBinCount);n.getByteFrequencyData(e);var t=e.reduce((function(e,t){return e+t}),0)/e.length;d(t)}})).catch((function(e){console.error(e)})),navigator.mediaDevices&&navigator.mediaDevices.enumerateDevices||console.log("enumerateDevices() not supported."),s||(navigator.mediaDevices.enumerateDevices().then((function(e){e.forEach((function(e){var t={kind:e.kind,label:e.label,id:e.deviceId,groupId:e.groupId};n.push(t),a([].concat(Object(O.a)(n),[t]))}))})).catch((function(e){console.log(e.name+": "+e.message)})),l(!0)),Object(p.jsx)(i.a.Fragment,{})}function f(e){var t=i.a.useRef(),n=Object(o.useState)(!1),a=Object(j.a)(n,2),r=a[0],c=a[1],s=Object(o.useState)(!1),m=Object(j.a)(s,2),d=m[0],O=m[1],x=h((function(e){return[e.micAmp]})),f=(Object(j.a)(x,1)[0],Object(o.useState)({size:e.size,color:e.color,heightSegments:e.heightSegments,widthSegments:e.widthSegments,posX:e.position[0],posY:e.position[1],posZ:e.position[2],rotX:e.rotX,activeRot:!0,rotY:e.rotY,rotZ:e.rotZ})),v=Object(j.a)(f,2),S=v[0],y=v[1],C=function(e){var t=e.target,n=t.value,o=t.name,i=Object(l.a)({},S);i[o]=n,y(i)},Y=Object(p.jsx)(g.Html,{style:{backgroundColor:"grey",padding:"0.6em",opacity:"0.7",borderRadius:"0.5em"},position:[50,40,-50],rotationY:.2,children:Object(p.jsx)("div",{children:Object(p.jsxs)("form",{children:[Object(p.jsx)("label",{htmlfor:"color",children:"Farbe"}),Object(p.jsx)("br",{}),Object(p.jsx)("input",{type:"color",name:"color",value:S.color,onChange:C}),Object(p.jsx)("br",{}),Object(p.jsx)("label",{htmlfor:"size",children:"Wireframe On"}),Object(p.jsx)("input",{type:"checkbox",onChange:function(){O(!d)}}),Object(p.jsx)("label",{htmlfor:"size",children:"Gr\xf6\xdfe"}),Object(p.jsx)("input",{type:"range",name:"size",value:S.size,onChange:C}),Object(p.jsx)("label",{htmlfor:"heightSegments",children:"heightSegments"}),Object(p.jsx)("input",{type:"range",min:1,max:200,name:"heightSegments",value:S.heightSegments,onChange:C}),Object(p.jsx)("label",{htmlfor:"widthSegments",children:"widthSegments"}),Object(p.jsx)("input",{type:"range",min:1,max:200,name:"widthSegments",value:S.widthSegments,onChange:C}),Object(p.jsx)("br",{}),Object(p.jsx)("label",{htmlfor:"X",children:"X"}),Object(p.jsx)("input",{type:"range",min:-8.8,max:8.8,name:"posX",value:S.posX,onChange:C}),Object(p.jsx)("label",{htmlfor:"Y",children:"Y"}),Object(p.jsx)("input",{type:"range",min:-10,max:10,name:"posY",value:S.posY,onChange:C}),Object(p.jsx)("label",{htmlfor:"Z",children:"Z"}),Object(p.jsx)("input",{type:"range",min:-10,max:10,name:"posZ",value:S.posZ,onChange:C}),Object(p.jsx)("br",{}),Object(p.jsx)("label",{htmlfor:"rotX",children:"Rotation X"}),Object(p.jsx)("input",{type:"range",min:-360,max:360,name:"rotX",value:S.rotX,onChange:C}),Object(p.jsx)("label",{htmlfor:"rotY",children:"Rotation Y"}),Object(p.jsx)("input",{type:"range",min:-360,max:360,name:"rotY",value:S.rotY,onChange:C}),Object(p.jsx)("label",{htmlfor:"rotZ",children:"Rotation Z"}),Object(p.jsx)("input",{type:"range",min:-360,max:360,name:"rotZ",value:S.rotZ,onChange:C})]})})});return Object(p.jsxs)(i.a.Fragment,{children:[r?Y:null,Object(p.jsxs)("mesh",{position:[S.posX,S.posY,S.posZ],ref:t,scale:S.size/10,onClick:function(){c(!r)},rotation:[S.rotX/100,S.rotY/100,S.rotZ/100],children:[Object(p.jsx)("planeGeometry",{args:[1e3,1e3,S.heightSegments,S.widthSegments]}),Object(p.jsx)(u.a,{attact:"material",color:S.color,side:b.DoubleSide,factor:.41,speed:1,refractionRatio:3,roughness:.2,wireframe:d})]})]})}var v=function(){var e;return Object(p.jsx)("div",{style:(e={height:"1000px",margin:"-200px"},Object(c.a)(e,"height","2000em"),Object(c.a)(e,"backgroundColor","black"),e),children:Object(p.jsxs)(s.Canvas,{pixelRatio:window.devicePixelRatio,invalidateFrameloop:!1,style:{position:"absolute",left:"0",top:"0",width:"100%",height:"100%"},children:[Object(p.jsx)("ambientLight",{}),Object(p.jsx)("fog",{attach:"fog",args:["lightgrey",5,30]}),Object(p.jsx)("pointLight",{position:[10,10,10]}),Object(p.jsx)(d,{position:[0,0,-4],color:"#ECB365",size:10,heightSegments:1,rotX:-28,rotY:-12,rotZ:-10}),Object(p.jsx)(f,{position:[-2.8,-10,-1],color:"#041C32",size:1,heightSegments:50,widthSegments:50,rotX:-65,rotY:-1,rotZ:2}),Object(p.jsx)(x,{})]})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,63)).then((function(t){var n=t.getCLS,o=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),o(e),i(e),a(e),r(e)}))};r.a.render(Object(p.jsx)(v,{}),document.getElementById("root")),S()}},[[61,1,2]]]);
//# sourceMappingURL=main.68f2c42a.chunk.js.map