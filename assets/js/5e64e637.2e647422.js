"use strict";(self.webpackChunkhexarchon_wiki=self.webpackChunkhexarchon_wiki||[]).push([[908],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),h=a,f=m["".concat(l,".").concat(h)]||m[h]||u[h]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9487:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:11,sidebar_label:"Other Features",title:"Other Features"},o="Other Features",s={unversionedId:"gameplay-mechanics/other-features",id:"gameplay-mechanics/other-features",title:"Other Features",description:"Other features which don't belong to other categories.",source:"@site/docs/gameplay-mechanics/other-features.md",sourceDirName:"gameplay-mechanics",slug:"/gameplay-mechanics/other-features",permalink:"/gameplay-mechanics/other-features",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,sidebar_label:"Other Features",title:"Other Features"},sidebar:"tutorialSidebar",previous:{title:"Pets",permalink:"/gameplay-mechanics/pets"},next:{title:"Vanilla Modifications",permalink:"/gameplay-mechanics/vanilla-modifications"}},l={},c=[{value:"Fishing",id:"fishing",level:2},{value:"Chat Features",id:"chat-features",level:2},{value:"Invisible Item Frames",id:"invisible-item-frames",level:2},{value:"Waypoints",id:"waypoints",level:2},{value:"Achievements",id:"achievements",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"other-features"},"Other Features"),(0,a.kt)("p",null,"Other features which don't belong to other categories."),(0,a.kt)("h2",{id:"fishing"},"Fishing"),(0,a.kt)("p",null,"Fishing can be very interesting on HexArchon! Just try it and see... :)"),(0,a.kt)("h2",{id:"chat-features"},"Chat Features"),(0,a.kt)("p",null,"Type these into the chat for various functions!\n",(0,a.kt)("inlineCode",{parentName:"p"},"[item]")," - Showcases an item you are holding.\n",(0,a.kt)("inlineCode",{parentName:"p"},"[inv]")," - Showcases your entire inventory.\n",(0,a.kt)("inlineCode",{parentName:"p"},"[ender]")," - Showcases your ender chest.\n",(0,a.kt)("inlineCode",{parentName:"p"},"[balance]")," ",(0,a.kt)("inlineCode",{parentName:"p"},"[money]")," - Showcases your balance.\n",(0,a.kt)("inlineCode",{parentName:"p"},"[teleport]")," ",(0,a.kt)("inlineCode",{parentName:"p"},"[tp]")," - Allows others to teleport to you."),(0,a.kt)("h2",{id:"invisible-item-frames"},"Invisible Item Frames"),(0,a.kt)("p",null,"You can toggle an item frame's invisibility by facing it and using the command ",(0,a.kt)("inlineCode",{parentName:"p"},"/itf toggle"),". To scan for nearby item frames, use ",(0,a.kt)("inlineCode",{parentName:"p"},"/itf scan <block radius>"),"."),(0,a.kt)("h2",{id:"waypoints"},"Waypoints"),(0,a.kt)("p",null,"You can use the command ",(0,a.kt)("inlineCode",{parentName:"p"},"/warpoint <x> <y> <z>")," to set a waypoint for your compass to face to."),(0,a.kt)("h2",{id:"achievements"},"Achievements"),(0,a.kt)("p",null,"Various achievements in additions to vanilla achievements are available. The list of all achievements can be viewed with ",(0,a.kt)("inlineCode",{parentName:"p"},"/ach"),"."))}u.isMDXComponent=!0}}]);