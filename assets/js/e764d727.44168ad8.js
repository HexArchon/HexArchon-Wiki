"use strict";(self.webpackChunkhexarchon_wiki=self.webpackChunkhexarchon_wiki||[]).push([[8945],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=u(n),y=r,d=p["".concat(l,".").concat(y)]||p[y]||h[y]||s;return n?o.createElement(d,i(i({ref:t},c),{},{components:n})):o.createElement(d,i({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var u=2;u<s;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1840:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var o=n(7462),r=(n(7294),n(3905));const s={sidebar_position:2,sidebar_label:"Connection Issues",title:"Connection Issues"},i="Connection Issues",a={unversionedId:"faq/connection-issues",id:"faq/connection-issues",title:"Connection Issues",description:"Diagnosing connection issues on the server.",source:"@site/docs/faq/connection-issues.md",sourceDirName:"faq",slug:"/faq/connection-issues",permalink:"/faq/connection-issues",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Connection Issues",title:"Connection Issues"},sidebar:"tutorialSidebar",previous:{title:"FAQ",permalink:"/faq/"},next:{title:"Resource Pack Issues",permalink:"/faq/resource-pack-issues"}},l={},u=[{value:"How do I fix issues with connection lag?",id:"how-do-i-fix-issues-with-connection-lag",level:3},{value:"Why is my ping always high?",id:"why-is-my-ping-always-high",level:3},{value:"Why am I getting connection issues? (i.e. extremely high ping, ping spikes)",id:"why-am-i-getting-connection-issues-ie-extremely-high-ping-ping-spikes",level:3},{value:"What does this mean, and why can I connect to other servers (or games) fine?",id:"what-does-this-mean-and-why-can-i-connect-to-other-servers-or-games-fine",level:3},{value:"Why Cloudflare Warp?",id:"why-cloudflare-warp",level:3},{value:"Still having issues?",id:"still-having-issues",level:3}],c={toc:u};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"connection-issues"},"Connection Issues"),(0,r.kt)("p",null,"Diagnosing connection issues on the server."),(0,r.kt)("h3",{id:"how-do-i-fix-issues-with-connection-lag"},"How do I fix issues with connection lag?"),(0,r.kt)("p",null,"Try using ",(0,r.kt)("a",{parentName:"p",href:"https://1.1.1.1/"},"Cloudflare Warp"),". Make sure to enable it after downloading!"),(0,r.kt)("h3",{id:"why-is-my-ping-always-high"},"Why is my ping always high?"),(0,r.kt)("p",null,"If this is case, it most likely means you ",(0,r.kt)("em",{parentName:"p"},"physically")," live far away from the server. This is a US-East hosted server. There is no way to decrease this ping, unless you ",(0,r.kt)("em",{parentName:"p"},"physically")," move closer to the server."),(0,r.kt)("h3",{id:"why-am-i-getting-connection-issues-ie-extremely-high-ping-ping-spikes"},"Why am I getting connection issues? (i.e. extremely high ping, ping spikes)"),(0,r.kt)("p",null,"First, check that it's not your internet. Are websites loading at normal speeds? Are you able to play on other servers fine? ",(0,r.kt)("br",null)),(0,r.kt)("p",null,'If the answer to both of the above is yes, and you are only having connection issues to HexArchon, it may mean that your "route" to the server has some faults. ',(0,r.kt)("br",null)),(0,r.kt)("p",null,'Every server is hosted at a different location, at a different datacenter. When you connect to a server, your internet jumps from your house to multiple locations, called a "hop", to finally reach the server. If you are experiencing issues with lag only on HexArchon, that likely means that the "hops" your internet takes from your house to the server has some faults. Generally, this issue is more common the further you are physically from the server, as you would be taking more hops.',(0,r.kt)("br",null)),(0,r.kt)("h3",{id:"what-does-this-mean-and-why-can-i-connect-to-other-servers-or-games-fine"},"What does this mean, and why can I connect to other servers (or games) fine?"),(0,r.kt)("p",null,"Think about it this way. You are driving to multiple stores from your house. The road to store A and B is brand new, and free of any artifacts. However, the road to store C is old and has a lot of dangerous potholes. You will have a smooth ride on the way to store A and B. However, on the way to store C, you're going to have a rough time (ping spikes) and might even damage your car (packet loss). This is exactly what may be occuring with your connection. ",(0,r.kt)("br",null)),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Every server is prone to this issue.")," Just like how your desired store may only have 1 physical location, a server only has one location. And just like how there are bad roads, there are bad routes and hops. ",(0,r.kt)("br",null)),(0,r.kt)("h3",{id:"why-cloudflare-warp"},"Why Cloudflare Warp?"),(0,r.kt)("p",null,"Cloudflare Warp takes your internet through a series of different hops in an attempt to avoid the bad hops. Most of the times, this may improve and/or fix issues with your connections. ",(0,r.kt)("br",null)),(0,r.kt)("h3",{id:"still-having-issues"},"Still having issues?"),(0,r.kt)("p",null,"You can open a support ticket on our ",(0,r.kt)("a",{parentName:"p",href:"https://discord.hexarchon.net/"},"Discord"),", and we will be glad to help you out. ",(0,r.kt)("br",null)))}h.isMDXComponent=!0}}]);