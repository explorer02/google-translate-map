(this.webpackJsonpdork=this.webpackJsonpdork||[]).push([[0],{19:function(t,e,n){},31:function(t,e,n){},33:function(t,e,n){},34:function(t,e,n){},35:function(t,e,n){},36:function(t,e,n){},37:function(t,e,n){},38:function(t,e,n){},39:function(t,e,n){},40:function(t,e,n){"use strict";n.r(e);var c=n(2),i=n.n(c),s=n(11),o=n.n(s),a=(n(19),n(3)),l=n(13),r=n(12),j=n(4),u=n.n(j),b=(n(31),n(0)),d=function(t){return Object(b.jsx)("div",{className:"backdrop",children:t.children})},x=n(14),O=(n(33),function(t){var e=t.onClick,n=t.text,c=t.disabled;Object(x.a)(t,["onClick","text","disabled"]);return Object(b.jsx)("button",{className:"custom-button",onClick:e,disabled:c,children:n})}),h=(n(34),function(t){return Object(b.jsx)("div",{className:"modal",children:t.children})}),f=(n(35),function(t){var e=t.onCloseDialog,n=Object(j.useSpeechRecognition)(),c=n.transcript,i=n.resetTranscript,s=Object(b.jsxs)("div",{className:"stt-error",children:[Object(b.jsx)("p",{children:"Speech Recognition Not supported in your Browser"}),Object(b.jsx)(O,{text:"Cancel",onClick:e})]});if(u.a.browserSupportsSpeechRecognition())return s=Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"stt-controls",children:[Object(b.jsx)(O,{text:"Start",onClick:function(){u.a.startListening({continuous:!0})}}),Object(b.jsx)(O,{text:"Stop",onClick:function(){u.a.stopListening()}}),Object(b.jsx)(O,{text:"Clear",onClick:i}),Object(b.jsx)(O,{text:"Cancel",onClick:function(){e(),u.a.abortListening()}})]}),Object(b.jsxs)("div",{className:"stt-output",children:[c,Object(b.jsx)("div",{className:"stt-copy",onClick:function(){navigator.clipboard.writeText(c)},children:Object(b.jsx)(r.a,{icon:l.a,style:{width:"100%",height:"100%",color:"grey"}})})]})]}),Object(b.jsx)(d,{children:Object(b.jsx)(h,{children:Object(b.jsx)("div",{className:"stt",children:s})})})}),p=(n(36),n(37),function(t){var e=t.onCloseDialog,n=Object(c.useState)(""),i=Object(a.a)(n,2),s=i[0],o=i[1],l=Object(c.useState)(!1),r=Object(a.a)(l,2),j=r[0],u=r[1];return Object(b.jsx)(d,{children:Object(b.jsx)(h,{children:Object(b.jsxs)("div",{className:"tts",children:[Object(b.jsx)("div",{className:"tts-input",children:Object(b.jsx)("textarea",{value:s,onChange:function(t){return o(t.target.value)}})}),Object(b.jsxs)("div",{className:"tts-controls",children:[Object(b.jsx)(O,{text:"Speak",onClick:function(){var t=new window.SpeechSynthesisUtterance(s);window.speechSynthesis.cancel(),window.speechSynthesis.speak(t),u(!1)}}),j?Object(b.jsx)(O,{text:"Resume",onClick:function(){window.speechSynthesis.resume(),u(!1)}}):Object(b.jsx)(O,{text:"Pause",onClick:function(){window.speechSynthesis.pause(),u(!0)}}),Object(b.jsx)(O,{text:"Cancel",onClick:function(){e(),window.speechSynthesis.cancel()}})]})]})})})}),g=(n(38),n(39),function(){return Object(b.jsx)("div",{className:"loader",children:"Loading..."})}),C=function(t){var e=t.onCloseDialog,n=Object(c.useState)(!1),i=Object(a.a)(n,2),s=i[0],o=i[1],l=Object(c.useState)({lat:null,lng:null}),r=Object(a.a)(l,2),j=r[0],u=r[1],x=Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(O,{text:"Get Live Location",onClick:function(){o(!0),navigator.geolocation.getCurrentPosition((function(t){u({lat:t.coords.latitude,lng:t.coords.longitude}),o(!1)}))}}),s?Object(b.jsx)(g,{}):j.lat?Object(b.jsx)("a",{href:"https://maps.google.com/?q=".concat(j.lat,",").concat(j.lng),target:"_blank",rel:"noreferrer",children:"Open in maps"}):null]});return"geolocation"in navigator||(x=Object(b.jsx)("p",{children:"Location not accessible"})),Object(b.jsx)(d,{children:Object(b.jsx)(h,{children:Object(b.jsxs)("div",{className:"locater",children:[x,Object(b.jsx)(O,{text:"Cancel",onClick:e})]})})})},v=function(){var t=Object(c.useState)(0),e=Object(a.a)(t,2),n=e[0],i=e[1],s=function(t){i(t)},o=function(){i(0)},l=null;return 1===n?l=Object(b.jsx)(f,{onCloseDialog:o}):2===n?l=Object(b.jsx)(p,{onCloseDialog:o}):3===n&&(l=Object(b.jsx)(C,{onCloseDialog:o})),Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(O,{onClick:function(){return s(1)},text:"Speech to Text"}),Object(b.jsx)(O,{onClick:function(){return s(2)},text:"Text to Speech"}),Object(b.jsx)(O,{onClick:function(){return s(3)},text:"Locater"}),l]})},k=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,s=e.getLCP,o=e.getTTFB;n(t),c(t),i(t),s(t),o(t)}))};o.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root")),k()}},[[40,1,2]]]);
//# sourceMappingURL=main.5caa726d.chunk.js.map