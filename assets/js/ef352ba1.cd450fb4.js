"use strict";(self.webpackChunkhexarchon_wiki=self.webpackChunkhexarchon_wiki||[]).push([[8162],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},A=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,h=p(e,["components","mdxType","originalType","parentName"]),A=s(a),c=r,m=A["".concat(l,".").concat(c)]||A[c]||d[c]||o;return a?n.createElement(m,i(i({ref:t},h),{},{components:a})):n.createElement(m,i({ref:t},h))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=A;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}A.displayName="MDXCreateElement"},1293:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:11,sidebar_label:"\ud83d\udecd\ufe0f Player Shops",title:"Player Shops"},i="Player Shops",p={unversionedId:"gameplay-mechanics/player-shops",id:"gameplay-mechanics/player-shops",title:"Player Shops",description:"How to create player shops.",source:"@site/docs/gameplay-mechanics/player-shops.md",sourceDirName:"gameplay-mechanics",slug:"/gameplay-mechanics/player-shops",permalink:"/gameplay-mechanics/player-shops",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,sidebar_label:"\ud83d\udecd\ufe0f Player Shops",title:"Player Shops"},sidebar:"tutorialSidebar",previous:{title:"\ud83e\ude91 Furniture",permalink:"/gameplay-mechanics/furniture"},next:{title:"\ud83d\udc15 Pets",permalink:"/gameplay-mechanics/pets"}},l={},s=[{value:"Purchasing an Item",id:"purchasing-an-item",level:2},{value:"Creating a Shop",id:"creating-a-shop",level:2},{value:"Getting Whitelisted (Player Shops World)",id:"getting-whitelisted-player-shops-world",level:2},{value:"Managing a Shop",id:"managing-a-shop",level:2},{value:"Removing a Shop",id:"removing-a-shop",level:2},{value:"Other Commands",id:"other-commands",level:2}],h={toc:s};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"player-shops"},"Player Shops"),(0,r.kt)("p",null,"How to create player shops."),(0,r.kt)("p",null,"Player Shops let you sell and buy items with other players. They can be a good alternative to auctions as there are no item list limits, and can catch other players' attention more effectively with your shop builds. ",(0,r.kt)("br",null)),(0,r.kt)("h2",{id:"purchasing-an-item"},"Purchasing an Item"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Player Shop",src:a(4631).Z,width:"854",height:"480"}),"\n",(0,r.kt)("img",{alt:"Type in Chat",src:a(1595).Z,width:"1217",height:"76"}),"\nTo purchase an item from a shop plot, it's simple! Just left-click a shop sign, and type the amount you want to buy in the chat. You can also preview enchantments and attributes of the item being sold as well."),(0,r.kt)("h2",{id:"creating-a-shop"},"Creating a Shop"),(0,r.kt)("p",null,"You can choose to either create a player shop anywhere in the main overworld, or at ",(0,r.kt)("inlineCode",{parentName:"p"},"/warp playershops")," if you are whitelisted. If you decide to create a player shop somewhere other than ",(0,r.kt)("inlineCode",{parentName:"p"},"/warp playershops"),", make sure to create a player warp (",(0,r.kt)("inlineCode",{parentName:"p"},"/pwarp"),") so let other players know that your shop exists."),(0,r.kt)("p",null,"To create a shop chest, follow the steps below."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Place down a chest."),(0,r.kt)("li",{parentName:"ol"},"Face the chest."),(0,r.kt)("li",{parentName:"ol"},"Hold the item you want to sell in your hand."),(0,r.kt)("li",{parentName:"ol"},"Type ",(0,r.kt)("inlineCode",{parentName:"li"},"/pshop create <price>")," (Will reference the item in your hand), or ",(0,r.kt)("inlineCode",{parentName:"li"},"/pshop create <price> <item> <amount>"),"."),(0,r.kt)("li",{parentName:"ol"},"Your shop is now created!")),(0,r.kt)("h2",{id:"getting-whitelisted-player-shops-world"},"Getting Whitelisted (Player Shops World)"),(0,r.kt)("p",null,"If you would like to build and create your own shop at ",(0,r.kt)("inlineCode",{parentName:"p"},"/playershops"),", you need to be whitelisted. To get whitelisted, you must meet the following requirements:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Minimum of one week since the first join date on the server."),(0,r.kt)("li",{parentName:"ul"},"Minimum playtime of 20 hours (can be seen in ",(0,r.kt)("inlineCode",{parentName:"li"},"/help")," -> click your head at the top)"),(0,r.kt)("li",{parentName:"ul"},"No history of any rule violations.")),(0,r.kt)("p",null,"If you meet these requirements and would like to apply for the whitelist, you can do so by opening a ticket on our ",(0,r.kt)("a",{parentName:"p",href:"https://discord.hexarchon.net/"},"Discord.")),(0,r.kt)("p",null,"After being whitelisted, you will be free to do any modifications in the player shops world. However, note that the standard no-theft/griefing rules still apply. Failure to obey the rules will result in permanent suspension from trust and further consequences."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Using excessive amounts of space (>40x40x40) in the player shops region is prohibited, unless the community deems it acceptable."))),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Shop chests will be protected from any players. However, any non-shop chests in the player shops region (600x600) are ",(0,r.kt)("strong",{parentName:"p"},"not protected.")))),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you are inactive for over 30 days (Index score of less than 1.5 in /help -> about) and the community wants your shop to be removed, ",(0,r.kt)("strong",{parentName:"p"},"your shop may be removed.")))),(0,r.kt)("h2",{id:"managing-a-shop"},"Managing a Shop"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Player Control",src:a(3301).Z,width:"366",height:"124"})),(0,r.kt)("p",null,"To manage an already made shop, right-click on the shop sign. From there, you can change the shop mode (selling items/buying items), change the price, and more!"),(0,r.kt)("h2",{id:"removing-a-shop"},"Removing a Shop"),(0,r.kt)("p",null,"To remove a shop, face a player shop sign and type ",(0,r.kt)("inlineCode",{parentName:"p"},"/pshop remove"),"."),(0,r.kt)("h2",{id:"other-commands"},"Other Commands"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"/pshop buy")," - Change the shop you are facing to buy items. ",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"/pshop sell")," - Change the shop you are facing to sell items. ",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"/pshop transfer <name>")," - Transfer the shop you are facing to another player. ",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"/pshop item")," - Change the item of the shop. ",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"/pshop find <item name>")," - Find a nearby shop that matches the item name specified. ",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"/pshop staff <add/clear/del/list>")," - Add, remove, or see the list of players that also have admin permissions at the shop you are facing. ",(0,r.kt)("br",null)))}d.isMDXComponent=!0},3301:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/playershop-control-8c9c414ebe4c7ce07f596736d6f46af4.png"},1595:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"},4631:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/playershop-c88e6edd8d7cf8d1a57a483529ec144d.png"}}]);