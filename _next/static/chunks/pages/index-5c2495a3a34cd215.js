(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(6565)}])},6565:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return R}});var r=t(5893),i=t(7294),o=t(9777),d=t(6243),u=t(132),a=t(7756),l=t.n(a),s={primary:function(e){return e?"primary:hover":"primary"},neutral:function(e){return e?"neutral:hover":"neutral"},anchor:function(e){return e?"anchor:hover":"anchor"}};function c(e){var n,t,o=(0,u.MS)().theme,d=(0,i.useState)(!1),a=d[0],c=d[1],_=s[e.context](a),g=null!==(n=e.action)&&void 0!==n?n:function(){},m=null!==(t=e.cxtAction)&&void 0!==t?t:function(){},f=o.button[_].css();return e.width&&(f.width=e.width),e.display&&(f.display=e.display),e.align&&(f.textAlign=e.align),e.padding&&(f.padding=e.padding),e.href?(0,r.jsx)("a",{className:l().btn,style:f,onMouseOver:function(){return c(!0)},onMouseLeave:function(){return c(!1)},onContextMenu:function(e){m(),e.preventDefault()},href:e.href,children:e.children}):(0,r.jsx)("button",{className:l().btn,style:f,onMouseOver:function(){return c(!0)},onMouseLeave:function(){return c(!1)},onClick:g,onContextMenu:function(e){m(),e.preventDefault()},type:e.type,disabled:e.disabled,children:e.children})}var _=t(4224),g=t.n(_);function m(e){var n,t=(0,u.MS)().theme.card.card.css();return t.width=null!==(n=e.width)&&void 0!==n?n:"auto",e.height&&(t.height=e.height),e.margin&&(t.margin=e.margin),(0,r.jsx)("div",{className:g().card,style:t,children:e.children})}function f(e){var n=(0,u.MS)().theme;return(0,r.jsxs)("div",{className:g().cardControls,style:n.card.dismissal.css(),children:[e.action&&(0,r.jsx)(c,{type:"button",context:"neutral",action:function(){return e.action()},children:"\u2501"}),e.dismiss&&(0,r.jsx)("div",{style:{float:"right"},children:(0,r.jsx)(c,{type:"button",context:"neutral",action:function(){return e.dismiss()},children:"\xd7"})})]})}function B(e){var n=(0,i.useState)(),t=n[0],o=n[1],u=(0,i.useState)(!1),a=u[0],l=u[1];return e.descriptionControl(o),(0,r.jsx)("div",{style:{position:"absolute",bottom:0,left:0,width:"100%"},children:(0,r.jsxs)(m,{width:"100%",height:a?"75vh":"150px",margin:"0",children:[(0,r.jsx)(f,{action:function(){return l(!a)}}),(0,r.jsx)(d.Z,{options:{createElement:function(n,t){for(var o=arguments.length,d=new Array(o>2?o-2:0),u=2;u<o;u++)d[u-2]=arguments[u];return"br"===n?(0,r.jsx)("br",{},t.key):"a"===n?t.href.endsWith(".md")?(0,r.jsx)(c,{context:"anchor",display:"inline",padding:"0",action:function(){return e.simulateTap(t.href.split(".")[0])},children:d},t.key):(0,r.jsx)(c,{context:"anchor",display:"inline",padding:"0",href:t.href,children:d},t.key):i.createElement(n,t,d)}},children:t?t.data("description"):e.readme})]})})}var p=t(9058),T=t.n(p),h=t(9142),k=t.n(h),y=t(578),v=t.n(y);function b(e,n,t,r){if(e.data("".concat(r,"Label"))){var i=t.x1+t.w/2,o=t.y1+t.h/2,d=5*e.data("".concat(r,"Label")).length;5==d&&(d+=5),n.x<i&&e.style("".concat(r,"-text-margin-x"))!=="-".concat(d,"px")&&e.style("".concat(r,"-text-margin-x"),"-".concat(d,"px")),n.x>=i&&e.style("".concat(r,"-text-margin-x"))!=="".concat(d,"px")&&e.style("".concat(r,"-text-margin-x"),"".concat(d,"px")),n.y<=o&&e.style("".concat(r,"-text-margin-y"))!=="-".concat(7,"px")&&e.style("".concat(r,"-text-margin-y"),"-".concat(7,"px")),n.y>o&&e.style("".concat(r,"-text-margin-y"))!=="".concat(7,"px")&&e.style("".concat(r,"-text-margin-y"),"".concat(7,"px"))}}var A=function(e){e&&(e("core","nodeExpansion",(function(){this.nodes().forEach((function(e){e.data("expanded",!1),e.incomers().length&&e.style("visibility","hidden"),e.outgoers().length&&e.style("shape","diamond")}))})),e("collection","expanded",(function(){if(this.length>0){var e=this[0];return!!e.isNode()&&e.data("expanded")}})),e("collection","expand",(function(){if(this.length>0){var e=this[0];e.isNode()&&e.outgoers().length&&(e.data("expanded",!0),e.style("shape","ellipse"),e.outgoers("edge").forEach((function(e){e.style("visibility","visible"),e.target().style("visibility","visible")})))}})),e("collection","collapse",(function(){if(this.length>0){var e=this[0];e.isNode()&&(e.data("expanded",!1),e.outgoers("edge").forEach((function(n){e.style("shape","diamond");var t=n.target();t.style("visibility","hidden"),t.incomers("edge").forEach((function(n){var r=n.source();e.same(r)||r.data("expanded")&&t.style("visibility","visible")})),n.style("visibility","hidden"),t.collapse()})))}})))};"undefined"!==typeof cytoscape&&A(cytoscape);var F=A,x=function(e){e&&e("core","labelPositioning",(function(){this.on("position","node",(function(e){e.target.forEach((function(e){e.isChild()&&function(e){var n=8*e.data("label").length,t=e.boundingBox({}),r=[{x1:t.x1,x2:t.x1+n,y1:t.y1,y2:t.y1+25,vAlign:"top",hAlign:"left",yMargin:20,xMargin:n},{x1:t.x2-n,x2:t.x2,y1:t.y1,y2:t.y1+25,vAlign:"top",hAlign:"right",yMargin:20,xMargin:-n},{x1:t.x1,x2:t.x1+n,y1:t.y2-25,y2:t.y2,vAlign:"bottom",hAlign:"left",yMargin:-20,xMargin:n},{x1:t.x2-n,x2:t.x2,y1:t.y2-25,y2:t.y2,vAlign:"bottom",hAlign:"right",yMargin:-20,xMargin:-n}],i=!0,o=!1,d=void 0;try{for(var u,a=function(n,t){var r=t.value,i=!0;if(e.children().forEach((function(e){var n=e.boundingBox({});(n.x1>=r.x1&&n.x1<=r.x2&&n.y1>=r.y1&&n.y1<=r.y2||n.x2>=r.x1&&n.x2<=r.x2&&n.y1>=r.y1&&n.y1<=r.y2||n.x1>=r.x1&&n.x1<=r.x2&&n.y2>=r.y1&&n.y2<=r.y2||n.x2>=r.x1&&n.x2<=r.x2&&n.y2>=r.y1&&n.y2<=r.y2)&&(i=!1)})),i)return e.style("text-valign",r.vAlign),e.style("text-halign",r.hAlign),e.style("text-margin-y",r.yMargin),e.style("text-margin-x",r.xMargin),"break"},l=r[Symbol.iterator]();!(i=(u=l.next()).done);i=!0){if("break"===a(l,u))break}}catch(s){o=!0,d=s}finally{try{i||null==l.return||l.return()}finally{if(o)throw d}}}(e.parent()),e.connectedEdges("edge").forEach((function(e){b(e,e.sourceEndpoint(),e.source().boundingBox({}),"source"),b(e,e.targetEndpoint(),e.target().boundingBox({}),"target")}))}))})),this.nodes().emit("position")}))},E=t(482);function P(e){var n=(0,i.useRef)(null),t=(0,i.useRef)(),o=(0,i.useRef)(),d=e.elements,u=e.layout,a=e.stylesheet;return(0,i.useEffect)((function(){(0,E.tg)(t.current,e)||(T().use(k()),o.current=T()({container:n.current,layout:u,elements:d,style:a}),o.current.nodes("$node > node").forEach((function(e){e.data("layout")&&e.descendants().layout(e.data("layout")).run()})),o.current.fit(),Object.getPrototypeOf(o.current).popper||T().use(v()),Object.getPrototypeOf(o.current).nodeExpansion||T().use(F),Object.getPrototypeOf(o.current).labelPositioning||T().use(x),t.current=e);return e.cy&&e.cy(o.current),function(){var n;(0,E.tg)(t.current,e)||(null===(n=o.current)||void 0===n||n.destroy())}})),(0,r.jsx)("div",{ref:n,style:{width:"100%",height:"100%"}})}var C=t(377),G=t.n(C);function w(e){var n=(0,u.MS)().theme.layout.container.css();return(0,r.jsx)("div",{className:G().container,style:n,children:e.children})}var D=t(9008);function S(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(D.default,{children:(0,r.jsx)("title",{children:e.title})}),(0,r.jsx)(w,{children:e.children})]})}var j=JSON.parse('{"readme":"# Overview\\nDieses Repository beinhaltet ein Anwendungsbeispiel f\xfcr die Modellierung von Produktarchitekturen mittels Markdown-Dateien.\\n","title":"Anwendungsbeispiel Produktarchitektur","center":"Produkt","layout":{"name":"preset","avoidOverlap":true,"center":"BT_B_1","positions":{"Produkt":{"x":0,"y":0},"BG_A":{"x":300,"y":-100},"BG_B":{"x":300,"y":0},"BG_C":{"x":300,"y":100},"BT_A_1":{"x":600,"y":-150},"BT_A_2":{"x":600,"y":-50},"BT_B_1":{"x":600,"y":0},"BT_C_1":{"x":600,"y":50},"BT_C_2":{"x":600,"y":150},"TF_A_1":{"x":900,"y":-150},"TF_A_2":{"x":900,"y":-50},"TF_A_3":{"x":900,"y":0},"TF_B_1":{"x":900,"y":50},"TF_B_2":{"x":900,"y":150},"TF_A":{"x":1200,"y":-100},"TF_B":{"x":1200,"y":100},"Gesamtfunktion":{"x":1500,"y":0}}},"nodes":[{"id":"Produkt","name":"Produkt","description":"#Produkt\\nDieses Produkt bzw. System dient einzig und allein als Beispiel. Es besteht aus mehreren Komponenten, Baugruppen und Bauteilen und erf\xfcllt eine Gesamtfunktion.\\n\\nEs weist die Produkstruktur der schematischen Darstellung der Produktarchitektur als Verkn\xfcpfung der Funtkions- und Produktstruktur nach Krause et al. auf.\\n\\n##Untergeordnete Elemente\\n[Baugruppe BG_A](BG_A.md): Untergeordnete Baugruppe\\n[Baugruppe BG_B](BG_B.md): Untergeordnete Baugruppe\\n[Baugruppe BG_C](BG_C.md): Untergeordnete Baugruppe\\n[Komponente K_1](K_1.md): Untergeordnete Komponente\\n[Komponente K_2](K_2.md): Untergeordnete Komponente\\n[Komponente K_3](K_3.md): Untergeordnete Komponente\\n\\n##\xdcbergeordnete Elemente\\nDem Produkt sind keine Elemente \xfcbergeordnet.\\n\\n##Verkn\xfcpfte Elemente\\n[Gesamtfunktion](Gesamtfunktion.md): Gesamtfunktion des Produkts"},{"id":"K_1","name":"Komponente K1","description":"","children":[{"id":"BG_A","name":"Baugruppe BG_A","description":"#Baugrupe BG_A\\nDiese Baugruppe ist ein physischer Bestandteil des Produkts, der [Bauteil BT_A_1](BT_A_1.md) und [Bauteil BT_A_2](BT_A_2.md) umfasst.\\n\\n##Untergeordnete Elemente\\n[Bauteil BT_A_1](BT_A_1.md): untergeordnetes Bauteil\\n[Bauteil BT_A_2](BT_A_2.md): untergeordnetes Bauteil\\n\\n##\xdcbergeordnete Elemente\\n[Produkt](Produkt.md)\\n\\n##Verkn\xfcpfte Elemente\\n[Komponente K_1](K_1.md)\\n"}],"hidden":true},{"id":"BG_B","name":"Baugruppe BG_B","description":"#Baugrupe BG_B\\nDiese Baugruppe ist ein physischer Bestandteil des Produkts, der [Bauteil BT_B_1](BT_B_1.md) umfasst.\\n\\n##Untergeordnete Elemente\\n[Bauteil BT_B_1](BT_B_1.md): untergeordnetes Bauteil\\n\\n##\xdcbergeordnete Elemente\\n[Produkt](Produkt.md)\\n\\n##Verkn\xfcpfte Elemente\\nMit dieser Baugruppe sind keine Elemente verkn\xfcpft."},{"id":"BG_C","name":"Baugruppe BG_C","description":"#Baugrupe BG_C\\nDiese Baugruppe ist ein physischer Bestandteil des Produkts, der [Bauteil BT_C_1](BT_C_1.md) und [Bauteil BT_C_2](BT_C_2.md) umfasst.\\n\\n##Untergeordnete Elemente\\n[Bauteil BT_C_1](BT_C_1.md): untergeordnetes Bauteil\\n[Bauteil BT_C_2](BT_C_2.md): untergeordnetes Bauteil\\n\\n##\xdcbergeordnete Elemente\\n[Produkt](Produkt.md)\\n\\n##Verkn\xfcpfte Elemente\\nMit dieser Baugruppe sind keine Elemente verkn\xfcpft."},{"id":"BT_A_1","name":"Bauteil BT_A_1","description":"#Bauteil BT_A_1\\nDieses Bauteil ist ein Bestandteil der [Baugruppe BG_A](BG_A.md) und ist an der Erf\xfcllung von [Teilfunktion TF_A_1](TF_A_1.md) und [Teilfunktion TF_A_2](TF_A_2.md) beteiligt.\\n\\n##Untergeordnete Elemente\\nDiesem Bauteil sind keine Elemente untergeordnet.\\n\\n##\xdcbergeordnete Elemente\\n[Baugruppe BG_A](BG_A.md): \xfcbergeordnete Baugruppe\\n\\n##Verkn\xfcpfte Elemente\\n[Teilfunktion TF_A_1](TF_A_1.md): zugeordnete Teilfunktion\\n[Teilfunktion TF_A_2](TF_A_2.md): zugeordnete Teilfunktion\\n"},{"id":"BT_A_2","name":"Bauteil BT_A_2","description":"#Bauteil BT_A_2\\nDieses Bauteil ist ein Bestandteil der [Baugruppe BG_A](BG_A.md) und ist an der Erf\xfcllung von [Teilfunktion TF_A_2](TF_A_2.md) beteiligt.\\n\\n##Untergeordnete Elemente\\nDiesem Bauteil sind keine Elemente untergeordnet.\\n\\n##\xdcbergeordnete Elemente\\n[Baugruppe BG_A](BG_A.md): \xfcbergeordnete Baugruppe\\n\\n##Verkn\xfcpfte Elemente\\n[Teilfunktion TF_A_2](TF_A_2.md): zugeordnete Teilfunktion"},{"id":"K_2","name":"Komponente K_2","description":"","children":[{"id":"BT_B_1","name":"Bauteil BT_B_1","description":"#Bauteil BT_B_1\\nDieses Bauteil ist ein Bestandteil der [Baugruppe BG_B](BG_B.md) und ist an der Erf\xfcllung von [Teilfunktion TF_A_3](TF_A_3.md) beteiligt.\\n\\n##Untergeordnete Elemente\\nDiesem Bauteil sind keine Elemente untergeordnet.\\n\\n##\xdcbergeordnete Elemente\\n[Baugruppe BG_B](BG_B.md): \xfcbergeordnete Baugruppe\\n\\n##Verkn\xfcpfte Elemente\\n[Teilfunktion TF_A_3](TF_A_3.md): zugeordnete Teilfunktion"},{"id":"BT_C_1","name":"Bauteil BT_C_1","description":"#Bauteil BT_C_1\\nDieses Bauteil ist ein Bestandteil der [Baugruppe BG_C](BG_C.md) und ist an der Erf\xfcllung von [Teilfunktion TF_A_3](TF_A_3.md) und [Teilfunktion TF_B_1](TF_B_1.md) beteiligt.\\n\\n##Untergeordnete Elemente\\nDiesem Bauteil sind keine Elemente untergeordnet.\\n\\n##\xdcbergeordnete Elemente\\n[Baugruppe BG_C](BG_C.md): \xfcbergeordnete Baugruppe\\n\\n##Verkn\xfcpfte Elemente\\n[Teilfunktion TF_A_3](TF_A_3.md): zugeordnete Teilfunktion\\n[Teilfunktion TF_B_1](TF_B_1.md): zugeordnete Teilfunktion"}],"hidden":false},{"id":"K_3","name":"Komponente K3","description":"","children":[{"id":"BT_C_2","name":"Bauteil BT_C_2","description":"#Bauteil BT_C_1\\nDieses Bauteil ist ein Bestandteil der [Baugruppe BG_C](BG_C.md) und ist an der Erf\xfcllung von [Teilfunktion TF_B_2](TF_B_2.md) beteiligt.\\n\\n##Untergeordnete Elemente\\nDiesem Bauteil sind keine Elemente untergeordnet.\\n\\n##\xdcbergeordnete Elemente\\n[Baugruppe BG_C](BG_C.md): \xfcbergeordnete Baugruppe\\n\\n##Verkn\xfcpfte Elemente\\n[Teilfunktion TF_B_1](TF_B_2.md): zugeordnete Teilfunktion"}],"hidden":false},{"id":"Gesamtfunktion","name":"Gesamtfunktion","description":"#Gesamtfunktion\\nDiese Gesamtfunktion wird vom [Produkt](Produkt.md) bereitgestellt bzw. erf\xfcllt. Sie unterteilt sich in mehrere Teilfunktionen, die von einzelnen Bauteilen des Produkts erf\xfcllt werden.\\n\\nEs weist die Funktionsstruktur der schematischen Darstellung der Produktarchitektur als Verkn\xfcpfung der Funtkions- und Produktstruktur nach Krause et al. auf.\\n\\n##Untergeordnete Elemente\\n[Teilfunktion TF_A](TF_A.md): untergeordnete Teilfunktion\\n[Teilfunktion TF_B](TF_B.md): untergeordnete Teilfunktion\\n\\n##\xdcbergeordnete Elemente\\nDer Gesamtfunktion sind keine Elemente \xfcbergeordnet.\\n\\n##Verkn\xfcpfte Elemente\\n[Produkt](Produkt.md): zugeordnetes Produkt"},{"id":"TF_A","name":"Teilfunktion TF_A","description":"#Teilfunktion TF_A\\nDiese Teilfunktion wird vom [Produkt](Produkt.md) bereitgestellt und unterteilt sich in [Teilfunktion TF_A_1](TF_A_1.md), [Teilfunktion TF_A_2](TF_A_2.md) und [Teilfunktion TF_A_3](TF_A_3.md).\\n\\n##Untergeordnete Elemente\\n[Teilfunktion TF_A_1](TF_A_1.md): untergeordnete Funktion\\n[Teilfunktion TF_A_2](TF_A_2.md): untergeordnete Funktion\\n[Teilfunktion TF_A_3](TF_A_3.md): untergeordnete Funktion\\n\\n##\xdcbergeordnete Elemente\\n[Gesamtfunktion](Gesamtfunktion.md): \xfcbergeordnete Funktion\\n\\n##Verkn\xfcpfte Elemente\\nMit dieser Funktion sind keine Elemente verkn\xfcpft."},{"id":"TF_B","name":"Teilfunktion TF_B","description":"#Teilfunktion TF_B\\nDiese Teilfunktion wird vom [Produkt](Produkt.md) bereitgestellt und unterteilt sich in [Teilfunktion TF_B_1](TF_B_1.md) und [Teilfunktion TF_B_2](TF_B_2.md).\\n\\n##Untergeordnete Elemente\\n[Teilfunktion TF_B_1](TF_B_1.md): untergeordnete Funktion\\n[Teilfunktion TF_B_2](TF_B_2.md): untergeordnete Funktion\\n\\n##\xdcbergeordnete Elemente\\n[Gesamtfunktion](Gesamtfunktion.md): \xfcbergeordnete Funktion\\n\\n##Verkn\xfcpfte Elemente\\nMit dieser Funktion sind keine Elemente verkn\xfcpft."},{"id":"TF_A_1","name":"Untergeordnete Teilfunktion TF_A_1","description":"#Teilfunktion TF_A_1\\nDiese untergeordnete Teilfunktion wird vom [Produkt](Produkt.md) bereitgestellt und ist Teil der [Teilfunktion TF_A](TF_A.md).\\n\\n##Untergeordnete Elemente\\nDieser Funktion sind keine Elementer untergeordnet.\\n\\n##\xdcbergeordnete Elemente\\n[Teilfunktion TF_A](TF_A.md): \xfcbergeordnete Funktion\\n\\n##Verkn\xfcpfte Elemente\\n[Bauteil BT_A_1](BT_A_1.md): zugeordnetes Bauteil\\n[Bauteil BT_A_2](BT_A_2.md): zugeordnetes Bauteil"},{"id":"TF_A_2","name":"Untergeordnete Teilfunktion TF_A_2","description":"#Teilfunktion TF_A_2\\nDiese untergeordnete Teilfunktion wird vom [Produkt](Produkt.md) bereitgestellt und ist Teil der [Teilfunktion TF_A](TF_A.md).\\n\\n##Untergeordnete Elemente\\nDieser Funktion sind keine Elementer untergeordnet.\\n\\n##\xdcbergeordnete Elemente\\n[Teilfunktion TF_A](TF_A.md): \xfcbergeordnete Funktion\\n\\n##Verkn\xfcpfte Elemente\\n[Bauteil BT_A_2](BT_A_2.md): zugeordnetes Bauteil"},{"id":"TF_A_3","name":"Untergeordnete Teilfunktion TF_A_3","description":"#Teilfunktion TF_A_3\\nDiese untergeordnete Teilfunktion wird vom [Produkt](Produkt.md) bereitgestellt und ist Teil der [Teilfunktion TF_A](TF_A.md).\\n\\n##Untergeordnete Elemente\\nDieser Funktion sind keine Elementer untergeordnet.\\n\\n##\xdcbergeordnete Elemente\\n[Teilfunktion TF_A](TF_A.md): \xfcbergeordnete Funktion\\n\\n##Verkn\xfcpfte Elemente\\n[Bauteil BT_B_1](BT_B_1.md): zugeordnetes Bauteil\\n[Bauteil BT_C_1](BT_C_1.md): zugeordnetes Bauteil\\n"},{"id":"TF_B_1","name":"Untergeordnete Teilfunktion TF_B_1","description":"#Teilfunktion TF_B_1\\nDiese untergeordnete Teilfunktion wird vom [Produkt](Produkt.md) bereitgestellt und ist Teil der [Teilfunktion TF_B](TF_B.md).\\n\\n##Untergeordnete Elemente\\nDieser Funktion sind keine Elementer untergeordnet.\\n\\n##\xdcbergeordnete Elemente\\n[Teilfunktion TF_B](TF_B.md): \xfcbergeordnete Funktion\\n\\n##Verkn\xfcpfte Elemente\\n[Bauteil BT_C_1](BT_C_1.md): zugeordnetes Bauteil\\n"},{"id":"TF_B_2","name":"Untergeordnete Teilfunktion TF_B_2","description":"#Teilfunktion TF_B_2\\nDiese untergeordnete Teilfunktion wird vom [Produkt](Produkt.md) bereitgestellt und ist Teil der [Teilfunktion TF_B](TF_B.md).\\n\\n##Untergeordnete Elemente\\nDieser Funktion sind keine Elementer untergeordnet.\\n\\n##\xdcbergeordnete Elemente\\n[Teilfunktion TF_B](TF_B.md): \xfcbergeordnete Funktion\\n\\n##Verkn\xfcpfte Elemente\\n[Bauteil BT_C_2](BT_C_2.md): zugeordnetes Bauteil\\n"}],"edges":[{"source":"Produkt","target":"BG_A","directed":false,"straight":true,"lineStyle":"dashed"},{"source":"Produkt","target":"BG_B","directed":false,"straight":true,"lineStyle":"dashed"},{"source":"Produkt","target":"BG_C","directed":false,"straight":true,"lineStyle":"dashed"},{"source":"BG_A","target":"BT_A_1","directed":false,"straight":true,"lineStyle":"dashed"},{"source":"BG_A","target":"BT_A_2","directed":false,"straight":true,"lineStyle":"dashed"},{"source":"BG_B","target":"BT_B_1","directed":false,"straight":true,"lineStyle":"dashed"},{"source":"BG_C","target":"BT_C_1","directed":false,"straight":true,"lineStyle":"dashed"},{"source":"BG_C","target":"BT_C_2","directed":false,"straight":true,"lineStyle":"dashed"},{"source":"Gesamtfunktion","target":"TF_A","directed":false,"straight":true,"lineStyle":"dashed"},{"source":"Gesamtfunktion","target":"TF_B","directed":false,"straight":true,"lineStyle":"dashed"},{"source":"TF_A","target":"TF_A_1","directed":false,"straight":true,"lineStyle":"dashed"},{"source":"TF_A","target":"TF_A_2","directed":false,"straight":true,"lineStyle":"dashed"},{"source":"TF_A","target":"TF_A_3","directed":false,"straight":true,"lineStyle":"dashed"},{"source":"TF_B","target":"TF_B_1","directed":false,"straight":true,"lineStyle":"dashed"},{"source":"TF_B","target":"TF_B_2","directed":false,"straight":true,"lineStyle":"dashed"},{"source":"TF_A","target":"TF_A_1","directed":false,"straight":true,"lineStyle":"dashed"},{"source":"BT_A_1","target":"TF_A_1","directed":false,"straight":true},{"source":"BT_A_1","target":"TF_A_2","directed":false,"straight":true},{"source":"BT_A_2","target":"TF_A_2","directed":false,"straight":true},{"source":"BT_B_1","target":"TF_A_3","directed":false,"straight":true},{"source":"BT_C_1","target":"TF_A_3","directed":false,"straight":true},{"source":"BT_C_1","target":"TF_B_1","directed":false,"straight":true},{"source":"BT_C_2","target":"TF_B_2","directed":false,"straight":true}]}');function O(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function K(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){O(e,n,t[n])}))}return e}function M(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function U(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){M(e,n,t[n])}))}return e}function V(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function z(e){return function(e){if(Array.isArray(e))return V(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return V(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return V(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var N=function(e,n){var t,r,i,o,d,u,a,l,s,c,_,g,m,f,B,p,T,h,k=[],y={};e.hasOwnProperty("children")?(e=e,y.layout=e.layout,e.children.forEach((function(n){var t;(t=k).push.apply(t,z(N(n,e.id)))}))):(e=e,y.description=null!==(T=e.description)&&void 0!==T?T:"",y.hinge=e.hinge,y.parent=n,y.shape=null!==(h=e.shape)&&void 0!==h?h:"rectangle");return y.hidden=e.hidden,y.colorDark=null===(t=e.theme)||void 0===t||null===(r=t.dark)||void 0===r?void 0:r.color,y.borderDark=null===(i=e.theme)||void 0===i||null===(o=i.dark)||void 0===o?void 0:o.border,y.backgroundDark=null===(d=e.theme)||void 0===d||null===(u=d.dark)||void 0===u?void 0:u.background,y.backgroundDarkHover=new E.Il(0,0,0,0,null===(a=e.theme)||void 0===a||null===(l=a.dark)||void 0===l?void 0:l.background).brighten(.1).rgba(),y.colorLight=null===(s=e.theme)||void 0===s||null===(c=s.light)||void 0===c?void 0:c.color,y.borderLight=null===(_=e.theme)||void 0===_||null===(g=_.light)||void 0===g?void 0:g.border,y.backgroundLight=null===(m=e.theme)||void 0===m||null===(f=m.light)||void 0===f?void 0:f.background,y.backgroundLightHover=new E.Il(0,0,0,0,null===(B=e.theme)||void 0===B||null===(p=B.light)||void 0===p?void 0:p.background).brighten(.1).rgba(),k.push(function(e){var n=e.id,t=e.label,r=e.kind,i=e.additionalAttributes;return{data:K({id:"".concat(n),label:null!==t&&void 0!==t?t:"",kind:"".concat(r),entity:"".concat(n)},i)}}({id:e.id,label:e.name,additionalAttributes:y})),k},L=(0,o.Z)((function(e){var n,t=(0,u.MS)().theme,o=(0,i.useRef)(),d=(0,i.useRef)(),a=e.setTippy,l=[],s=j;s.hasOwnProperty("nodes")&&s.nodes.forEach((function(e){var n;(n=l).push.apply(n,z(N(e)))})),s.hasOwnProperty("edges")&&s.edges.forEach((function(e){var n;l.push(function(e,n){var t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:void 0,o={data:U({id:"".concat(e,"-").concat(n),source:e,target:n,directed:t},r)};return void 0!==i&&(o.style=i),o}(e.source,e.target,e.directed,{label:e.label,sourceLabel:e.sourceLabel,targetLabel:e.targetLabel,straight:e.straight,arrowShape:e.arrowShape,lineStyle:null!==(n=e.lineStyle)&&void 0!==n?n:"solid"},e.style))}));var c=(0,i.useCallback)((function(e){d.current!=e&&(e.labelPositioning(),s.hasOwnProperty("center")&&e.center(e.getElementById(s.center)),e.on("mouseover","node",(function(e){var n=e.target;n.isParent()||(a(n.id(),{content:(0,r.jsx)(r.Fragment,{}),popperRef:n.popperRef(),dispose:function(){return n.data("hover",!1)},tippyProps:{placement:"right"}}),n.data("hover",!0))})),e.on("mouseout","node",(function(e){var n=e.target;n.isParent()||a(n.id(),{content:void 0,popperRef:void 0})})),e.on("tap",(function(){e.nodes().removeData("tapped"),o.current(void 0)})),e.on("tap","node",(function(n){var t=n.target;t.isParent()||(t.data("tapped")?(t.removeData("tapped"),o.current(void 0)):(e.nodes().removeData("tapped"),t.data("tapped",!0),o.current(t)))})),d.current=e)}),[a,s]),_=(0,i.useCallback)((function(e){o.current=e}),[]),g=(0,i.useCallback)((function(e){d.current.getElementById(e).emit("tap")}),[]);return(0,r.jsxs)(S,{title:s.title,children:[(0,r.jsx)("div",{style:{height:"calc(100vh - 150px)",width:"100%"},children:(0,r.jsx)(P,{cy:c,elements:l,layout:s.layout,stylesheet:null===(n=t.cytoscape)||void 0===n?void 0:n.canvas})}),(0,r.jsx)(B,{readme:s.readme,descriptionControl:_,simulateTap:g})]})})),R=L},7756:function(e){e.exports={btn:"Button_btn__gZGom"}},4224:function(e){e.exports={card:"Card_card__MdBWe",cardControls:"Card_cardControls__DVxR9",cardDismissal:"Card_cardDismissal__wcfQg",cardTitle:"Card_cardTitle__AvJG5",cardSubTitle:"Card_cardSubTitle__guPa3",cardImage:"Card_cardImage__eebwX",cardBody:"Card_cardBody__S_jTh",cardAction:"Card_cardAction__1KmJE"}},377:function(e){e.exports={container:"Container_container__6kKex"}}},function(e){e.O(0,[856,719,774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);