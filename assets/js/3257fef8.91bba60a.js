"use strict";(self.webpackChunkpushpreview=self.webpackChunkpushpreview||[]).push([[473],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var i=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=i.createContext({}),l=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,d=u["".concat(s,".").concat(m)]||u[m]||v[m]||n;return r?i.createElement(d,o(o({ref:t},c),{},{components:r})):i.createElement(d,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:a,o[1]=p;for(var l=2;l<n;l++)o[l]=r[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6838:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>v,frontMatter:()=>n,metadata:()=>p,toc:()=>l});var i=r(7462),a=(r(7294),r(3905));const n={sidebar_position:2},o="Private previews",p={unversionedId:"configuration/private-previews",id:"configuration/private-previews",title:"Private previews",description:"Previews generated through PushPreview are public by default, allowing anyone with the link to access them. However, for added security or to maintain confidentiality, PushPreview provides an option to set these previews to be private. This ensures that only authorized viewers can see them, making it a crucial feature for sensitive or confidential projects.",source:"@site/docs/configuration/private-previews.md",sourceDirName:"configuration",slug:"/configuration/private-previews",permalink:"/configuration/private-previews",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Authentication",permalink:"/configuration/authentication"},next:{title:"Integrations",permalink:"/category/integrations"}},s={},l=[{value:"Enable private previews by default",id:"enable-private-previews-by-default",level:2},{value:"Mark individual integrations as private",id:"mark-individual-integrations-as-private",level:2}],c={toc:l},u="wrapper";function v(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"private-previews"},"Private previews"),(0,a.kt)("p",null,"Previews generated through PushPreview are public by default, allowing anyone with the link to access them. However, for added security or to maintain confidentiality, PushPreview provides an option to set these previews to be private. This ensures that only authorized viewers can see them, making it a crucial feature for sensitive or confidential projects."),(0,a.kt)("p",null,"Private previews work by restricting access to users who have ",(0,a.kt)("inlineCode",{parentName:"p"},"READ")," permissions over the repository linked to the preview.\nThis means that only team members or collaborators with the necessary permissions can view the private previews."),(0,a.kt)("p",null,"There are two ways to enable private previews: setting them as private by default for your entire team or marking individual integrations as private."),(0,a.kt)("h2",{id:"enable-private-previews-by-default"},"Enable private previews by default"),(0,a.kt)("p",null,"To make all previews private by default for all your integrations, follow these steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Log in to your PushPreview account.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Navigate to the ",(0,a.kt)("strong",{parentName:"p"},"Team")," page.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Turn on the ",(0,a.kt)("strong",{parentName:"p"},"Private previews")," option."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"Enable private previews",src:r(2160).Z,width:"2873",height:"792"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Save the changes."))),(0,a.kt)("p",null,"This setting ensures that every new preview generated will be private, accessible only to users with the appropriate permissions."),(0,a.kt)("h2",{id:"mark-individual-integrations-as-private"},"Mark individual integrations as private"),(0,a.kt)("p",null,"For more granular control, you can set privacy settings on a per-integration basis:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Log into your PushPreview account.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Navigate to the ",(0,a.kt)("strong",{parentName:"p"},"Integrations")," page.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Choose the integration you want to modify.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Edit"),"."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"Edit integration",src:r(274).Z,width:"2880",height:"1219"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Enable the ",(0,a.kt)("strong",{parentName:"p"},"Private previews")," option."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"Enable private previews",src:r(2160).Z,width:"2873",height:"792"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Save the changes."))),(0,a.kt)("p",null,"This option is ideal for teams that require different privacy levels for various integrations, allowing flexibility and control over who can access specific previews."))}v.isMDXComponent=!0},274:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/edit-integration-a7a56c93007d7696c1a89b1fc33c20aa.png"},2160:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/enable-private-previews-77c83b87f00a02285f34a4ec543f1296.png"}}]);