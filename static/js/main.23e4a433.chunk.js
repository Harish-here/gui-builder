(this["webpackJsonpgui-builder"]=this["webpackJsonpgui-builder"]||[]).push([[0],{32:function(e,t,a){e.exports=a(45)},37:function(e,t,a){},38:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),l=a.n(c),o=(a(37),a(13)),i=a(2),s=(a(38),a(9)),d=a(10),m=a(14),u=a(12),p=a(11),f={docId:"",docName:"",createdAt:"",updatedAt:"",docItems:{}};function b(){return Object.values(localStorage).map((function(e){return JSON.parse(e)}))}function h(e){var t=localStorage.getItem(e);return JSON.parse(t)}var v=[11,21,31,41,51,61,12,22,32,42,52,62,13,23,33,43,53,63,14,24,34,44,54,64,15,25,35,45,55,65,16,26,36,46,56,66],x=["input","email","image","button","radio","label"],g="bg-blue-500 hover:bg-blue-700 text-sm text-white font-bold py-2 px-4 rounded",E="bg-red-500 hover:bg-red-700 text-xs text-white font-bold py-1 px-2 rounded",N="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded";var y={overflow:"auto",height:"580px"},w=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={docList:b(),docName:""},n.gotoBuidler=n.gotoBuidler.bind(Object(m.a)(n)),n.handleInput=n.handleInput.bind(Object(m.a)(n)),n.deleteItem=n.deleteItem.bind(Object(m.a)(n)),n}return Object(d.a)(a,[{key:"generateRandomString",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;return Math.random().toString(20).substr(2,e)}},{key:"gotoBuidler",value:function(){var e=this.state.docName.trim();if(""!==e)if(t=e,b().map((function(e){return e.docName})).includes(t))alert("Doc name already exists");else{var t,a=this.props.history,n=this.generateRandomString();!function(e,t){var a=JSON.parse(JSON.stringify(f));a.docId=e,a.docName=t;var n=(new Date).toDateString()+" - "+(new Date).toLocaleTimeString();a.createdAt=n,a.updatedAt=n,localStorage.setItem(e,JSON.stringify(a))}(n,e),a.push("/builder/".concat(n))}else alert("Please enter the name")}},{key:"deleteItem",value:function(e){if(window.confirm("Are you sure to delete?")){!function(e){localStorage.removeItem(e)}(e);var t=b();this.setState({docList:t})}}},{key:"handleInput",value:function(e){this.setState({docName:e.target.value})}},{key:"render",value:function(){var e=this,t=this.state.docList;return r.a.createElement("div",{className:"h-full flex content-stretch"},r.a.createElement("div",{className:"w-2/3 p-3 flex items-center justify-center"},r.a.createElement("div",{className:"shadow p-10 w-2/3 flex border flex-col"},r.a.createElement("input",{onChange:this.handleInput,placeholder:"Type the name of the doc",type:"text",className:"shadow-lg p-5  m-3 border text-lg"}),r.a.createElement("div",{className:"flex justify-center"},r.a.createElement("button",{className:g,onClick:this.gotoBuidler},"Go")))),r.a.createElement("div",{className:"w-1/3 p-3 border-l-2 flex flex-col"},r.a.createElement("div",{className:"p-3 text-center text-lg border-b"},"Saved items"),r.a.createElement("div",{className:"p-3"},r.a.createElement("ul",{style:y,className:"divide-y"},t.map((function(t){return r.a.createElement("li",{key:t.docId,className:"py-3 flex items-center justify-between"},r.a.createElement("div",{className:"w-2/3 flex items-center"},t.docName),r.a.createElement("div",{className:"w-1/3 flex text-blue-400 items-center justify-around"},r.a.createElement(o.b,{className:"text-sm hover:bg-gray-300 p-1 rounded",to:"/preview/".concat(t.docId)},"Preview"),r.a.createElement(o.b,{className:"text-sm hover:bg-gray-300 p-1 rounded",to:"/builder/".concat(t.docId)},"Edit"),r.a.createElement("button",{className:E,onClick:function(){return e.deleteItem(t.docId)}},"Delete")))}))))))}}]),a}(r.a.Component),j=Object(i.f)(w),I=a(20),O=a(19),S=a(6),k=a(7);function A(){var e=Object(S.a)([""]);return A=function(){return e},e}function D(){var e=Object(S.a)([""]);return D=function(){return e},e}function J(){var e=Object(S.a)(["\n    text-align:center;\n    width:70px;\n"]);return J=function(){return e},e}function C(){var e=Object(S.a)(["\n    width:100px;\n    border: 1px solid #e7e7e7;\n    padding:2px;\n    text-align:center;\n"]);return C=function(){return e},e}var G=k.a.input(C()),T=k.a.label(J()),B=k.a.button(D()),L=k.a.img(A()),M=function(e){return["input","radio","email"].includes(e.type)?r.a.createElement(G,Object.assign({},e,{placeholder:e.type,disabled:!0})):"button"===e.type?r.a.createElement(B,{className:"bg-blue-500 hover:bg-blue-500 text-white font-bold py-1 px-2 rounded"},"Button "):"image"===e.type?r.a.createElement(L,{src:"https://i.picsum.photos/id/378/70/40.jpg"}):"label"===e.type?r.a.createElement(T,{className:"p-2 border"},"Label"):null};function P(){var e=Object(S.a)(["\n    min-width:100px;\n    min-height:35px;\n"]);return P=function(){return e},e}var R=k.a.div(P()),W=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return(r.a.createElement(O.b,{draggableId:this.props.columnId+"-"+this.props.item,index:this.props.index},(function(t){return r.a.createElement(R,Object.assign({className:"collection"===e.props.columnId?" item p-4 m-3 text-center border":" flex justify-center items-center p-4"},t.draggableProps,t.dragHandleProps,{ref:t.innerRef}),r.a.createElement(M,{type:e.props.item,disabled:!0,className:"text-center",placeholder:e.props.item}))})))}}]),a}(r.a.Component);function H(){var e=Object(S.a)(["\n    min-height: 70px;\n"]);return H=function(){return e},e}var U=k.a.div(H()),q=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return(r.a.createElement(O.c,{droppableId:this.props.columnId},(function(t){return r.a.createElement(U,Object.assign({},t.droppableProps,{ref:t.innerRef,className:"collection"===e.props.columnId?"flex flex-col items-center":"flex justify-center items-center"}),e.props.collections.map((function(t,a){return r.a.createElement(W,{columnId:e.props.columnId,key:a,item:t,index:a})})),t.placeholder)})))}}]),a}(r.a.Component);function z(){var e=Object(S.a)(["\n    height: 510px;\n"]);return z=function(){return e},e}function F(){var e=Object(S.a)(["\n    height: 85px;\n"]);return F=function(){return e},e}function K(){var e=Object(S.a)(["\n    min-width:200px;\n"]);return K=function(){return e},e}var Q=k.a.div(K()),V=k.a.div(F()),X=k.a.div(z()),Y=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;Object(s.a)(this,a);var r=h((n=t.call(this,e)).props.match.params.docId);return n.state=Object(I.a)({xy:v,collection:x,showGrid:!1},r),n.onDragEnd=n.onDragEnd.bind(Object(m.a)(n)),n.saveDoc=n.saveDoc.bind(Object(m.a)(n)),n.showTheGrid=n.showTheGrid.bind(Object(m.a)(n)),n}return Object(d.a)(a,[{key:"onDragEnd",value:function(e){var t=this,a=e.destination,n=e.source,r=e.draggableId;if(a&&a.droppableId!==n.droppableId){var c=JSON.parse(JSON.stringify(this.state.docItems)),l=n.droppableId.split("-")[1],o=a.droppableId.split("-")[1];if("collection"===n.droppableId){var i=r.split("-")[1];c[o]=[i]}else{var s=r.split("-")[2];c[l]=[],c[o]=[s]}this.setState({docItems:c}),setTimeout((function(){t.saveDoc()}),1e3)}}},{key:"showTheGrid",value:function(e){this.setState({showGrid:!this.state.showGrid})}},{key:"clearElements",value:function(){var e=JSON.parse(JSON.stringify(this.state.docItems));for(var t in e)e[t]=[];this.setState({docItems:e})}},{key:"saveDoc",value:function(){var e=JSON.parse(JSON.stringify(this.state));delete e.collection,delete e.xy,delete e.showGrid,function(e,t){localStorage.removeItem(e);var a=(new Date).toDateString()+" - "+(new Date).toLocaleTimeString();t.createdAt=a,t.updatedAt=a,localStorage.setItem(e,JSON.stringify(t))}(e.docId,e);var t=h(e.docId).updatedAt;this.setState({updatedAt:t})}},{key:"render",value:function(){var e=this,t=this.state,a=t.collection,n=t.docItems,c=t.docName,l=t.showGrid,i=t.docId,s=t.updatedAt;return r.a.createElement(O.a,{onDragEnd:this.onDragEnd},r.a.createElement("div",{id:"builder",className:"h-full flex content-stretch"},r.a.createElement("div",{className:"w-2/12 border-r-2 p-3"},r.a.createElement("div",{className:"text-lg text-center text-black-300 border-b mb-2 p-2"},"Components",r.a.createElement("div",{className:"text-xs p-1 text-gray-400"},"Drag and Drop the components on board to add and reverse it to remove from board")),r.a.createElement(q,{columnId:"collection",collections:a})),r.a.createElement("div",{className:"w-10/12 p-3 flex justify-center items-center"},r.a.createElement("div",{className:"w-full flex flex-col items-center h-full"},r.a.createElement("div",{className:"absolute flex justify-around items-center p-2 bottom-0 left-10 right-10 shadow border rounded w-1/5 h-15"},r.a.createElement("button",{onClick:function(){return e.clearElements()},className:N},"Clear All"),r.a.createElement("div",{className:"text-xs flex items-center"}," ",r.a.createElement("input",{onChange:this.showTheGrid,type:"checkbox",className:"mr-2"}),"show grids "),r.a.createElement("button",{onClick:function(){return e.saveDoc()},className:"bg-blue-500 hover:bg-blue-500 text-white font-bold py-1 px-2 rounded"},"Save")),r.a.createElement("div",{className:"p-2 flex flex-col items-center justify-center"},r.a.createElement(Q,{className:"p-2 text-center shadow rounded bg-gray-200 min-w-3"},c,r.a.createElement(o.b,{className:"text-xs ml-3 blue",to:"/preview/".concat(i)}," Preview Doc")),r.a.createElement("span",{className:"ml-3 text-xs p-1 text-gray-400"},"Last saved on - ",s)),r.a.createElement(X,{id:"builder-ui",className:"shadow-lg w-2/3 border flex flex-wrap flex-start"},this.state.xy.map((function(e){return r.a.createElement(V,{key:"cell-".concat(e),id:"cell-".concat(e),className:"w-1/6 ".concat(l?"border":"")},r.a.createElement(q,{columnId:"cell-".concat(e),collections:n[e]||[]}))})))))))}}]),a}(r.a.Component),Z=Object(i.f)(Y),$=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;Object(s.a)(this,a);var r=h((n=t.call(this,e)).props.match.params.docId);return n.state=Object(I.a)({xy:v},r),n}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state,t=e.docItems,a=e.docName,n=e.docId,c=e.createdAt;return(r.a.createElement("div",{className:"h-full flex content-stretch"},r.a.createElement("div",{className:"p-3 w-full flex items-center justify-center"},r.a.createElement("div",{className:"flex flex-col h-full items-center w-full"},r.a.createElement("div",{className:"p-2 flex flex-col items-center justify-center"},r.a.createElement(Q,{className:"p-2 text-center shadow rounded bg-gray-200 min-w-3"},a,r.a.createElement(o.b,{className:"text-xs ml-1 blue",to:"/builder/".concat(n)}," Edit Doc")),r.a.createElement("span",{className:"ml-3 text-xs p-1 text-gray-400"},"Created on - ",c)),r.a.createElement(X,{id:"preview-board",className:"w-3/5 shadow-lg border flex flex-wrap"},this.state.xy.map((function(e){return r.a.createElement(V,{key:"cell-".concat(e),id:"cell-".concat(e),className:"flex justify-center items-center w-1/6"},r.a.createElement(M,{type:t[e]&&t[e].length>0?t[e][0]:""}))})))))))}}]),a}(r.a.Component);var _=function(){return 0===Object.values(localStorage).length&&(localStorage.setItem("ga4c89230c",'{"docId":"ga4c89230c","docName":"sample UI","createdAt":"Wed Jun 10 2020 - 2:15:38 AM","updatedAt":"Wed Jun 10 2020 - 2:15:38 AM","docItems":{"11":["input"],"12":[],"13":[],"14":["button"],"15":["radio"],"16":[],"22":[],"23":["label"],"32":["image"],"33":["input"],"34":["button"],"45":["button"],"undefined":["image"]}}'),localStorage.setItem("425241i838",'{"docId":"425241i838","docName":"Tony Stark","createdAt":"Wed Jun 10 2020 - 2:15:38 AM","updatedAt":"Wed Jun 10 2020 - 2:15:38 AM","docItems":{"12":[],"13":["image"],"36":["button"],"42":[],"43":[],"44":["image"],"52":["email"],"53":["email"]}}'),console.log("dummy data added")),r.a.createElement(o.a,{basename:"/gui-builder"},r.a.createElement("div",{id:"App",className:""},r.a.createElement("div",{className:"relative flex flex-col h-full"},r.a.createElement("header",{id:"header",className:"p-3 flex justify-between items-center shadow"},r.a.createElement("div",{className:"flex content-center justify-center flex-1"},r.a.createElement(o.b,{to:"/",className:"text-lg"},r.a.createElement("i",{className:"fa fa-home","aria-hidden":"true"})," Home")),r.a.createElement("div",{className:"flex-1 text-center"},r.a.createElement("div",{className:"f-3 text-teal-500 text-lg font-bold text-xl"},"GUI Builder")),r.a.createElement("div",{className:"flex-1 text-right text-xs"},"- An ",r.a.createElement("b",null," Harish Ravi's")," Work -")),r.a.createElement("section",{id:"main",className:"flex-1 "},r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:j}),r.a.createElement(i.a,{exact:!0,path:"/builder/:docId",component:Z}),r.a.createElement(i.a,{exact:!0,path:"/preview/:docId",component:$}))))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.23e4a433.chunk.js.map