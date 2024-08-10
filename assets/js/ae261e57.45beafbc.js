"use strict";(self.webpackChunkhexarchon_wiki=self.webpackChunkhexarchon_wiki||[]).push([[9906],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var f=a.createContext({}),u=function(e){var t=a.useContext(f),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(f.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,f=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,g=p["".concat(f,".").concat(d)]||p[d]||c[d]||i;return n?a.createElement(g,o(o({ref:t},s),{},{components:n})):a.createElement(g,o({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var f in t)hasOwnProperty.call(t,f)&&(l[f]=t[f]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9062:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:10,sidebar_label:"\ud83d\udea9 Guilds",title:"Guilds"},o="Guilds",l={unversionedId:"gameplay-mechanics/guilds",id:"gameplay-mechanics/guilds",title:"Guilds",description:"Guilds allow you to create a group for other players to join, which may be useful with co-op. Guilds are NOT related to dungeon parties in any way - this is a seperate system.",source:"@site/docs/gameplay-mechanics/guilds.md",sourceDirName:"gameplay-mechanics",slug:"/gameplay-mechanics/guilds",permalink:"/gameplay-mechanics/guilds",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,sidebar_label:"\ud83d\udea9 Guilds",title:"Guilds"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd25 Furnaces",permalink:"/gameplay-mechanics/furnaces"},next:{title:"\ud83e\ude91 Furniture",permalink:"/gameplay-mechanics/furniture"}},f={},u=[{value:"Creating a Guild",id:"creating-a-guild",level:2},{value:"Managing your Guild",id:"managing-your-guild",level:2}],s={toc:u};function c(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"guilds"},"Guilds"),(0,r.kt)("p",null,"Guilds allow you to create a group for other players to join, which may be useful with co-op. ",(0,r.kt)("strong",{parentName:"p"},"Guilds are NOT related to dungeon parties in any way - this is a seperate system.")),(0,r.kt)("h2",{id:"creating-a-guild"},"Creating a Guild"),(0,r.kt)("p",null,"To create a guild, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"/g create <GuildName>")," command. Creating a guild is free, and there are no maintenance fees."),(0,r.kt)("h2",{id:"managing-your-guild"},"Managing your Guild"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Guilds",src:n(1112).Z,width:"358",height:"165"})),(0,r.kt)("p",null,"To manage your guild, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"/guilds")," command. This will bring up a menu where you can manage your guild."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"Option")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Toggle Guild Chat"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Toggles your chat mode. When enabled, all your chat messages will only be sent to those in your guild.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Manage Players"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Invite, kick, and change guild roles of players.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Friendly Fire Protection"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Toggle friendly fire protection on or off. ",(0,r.kt)("strong",{parentName:"td"},"This option may be handy in dungeons."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Rename Guild"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Rename your guild.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Guilds MOTD"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Change the message send to those in your guild when joining the server.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Guilds List"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Show the list of guilds.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Guild Nickname"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Change your guild nickname.")))))}c.isMDXComponent=!0},1112:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"}}]);