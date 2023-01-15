"use strict";(self.webpackChunkhexarchon_wiki=self.webpackChunkhexarchon_wiki||[]).push([[7429],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,y=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8743:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:5,sidebar_label:"\ud83d\udcf1 Bedrock Crossplay",title:"Bedrock Crossplay"},i="Bedrock Crossplay",s={unversionedId:"faq/bedrock-crossplay",id:"faq/bedrock-crossplay",title:"Bedrock Crossplay",description:"You can join the server on Bedrock Edition using the IP play.hexarchon.net with Port 19132. Beware that Bedrock crossplay support is experimental. You will encounter many issues.",source:"@site/docs/faq/bedrock-crossplay.md",sourceDirName:"faq",slug:"/faq/bedrock-crossplay",permalink:"/faq/bedrock-crossplay",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"\ud83d\udcf1 Bedrock Crossplay",title:"Bedrock Crossplay"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\uddbc Resource Pack Issues",permalink:"/faq/resource-pack-issues"}},l={},c=[{value:"Why are there so many issues on Bedrock Edition?",id:"why-are-there-so-many-issues-on-bedrock-edition",level:2},{value:"Bedrock Edition Issues",id:"bedrock-edition-issues",level:2}],u={toc:c};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bedrock-crossplay"},"Bedrock Crossplay"),(0,o.kt)("p",null,"You can join the server on Bedrock Edition using the IP ",(0,o.kt)("inlineCode",{parentName:"p"},"play.hexarchon.net")," with Port ",(0,o.kt)("inlineCode",{parentName:"p"},"19132"),". ",(0,o.kt)("strong",{parentName:"p"},"Beware that Bedrock crossplay support is experimental.")," You will encounter many issues."),(0,o.kt)("h2",{id:"why-are-there-so-many-issues-on-bedrock-edition"},"Why are there so many issues on Bedrock Edition?"),(0,o.kt)("p",null,"Minecraft Java and Bedrock is programmed using completely different programming languages, with completely different programming formats, with many gameplay variations. Any data incoming from Bedrock players have to be translated to Java Edition for the server to understand the data. "),(0,o.kt)("br",null),"You can imagine two people speaking completely different languages, attempting to have a conversation. Some words that exist in a language doesn't exist in another language. Some words can have multiple definitions. Google Translate would mostly help, but it would still be inaccurate. While humans could use educated guesses to understand these word variations and incorrect translations, computer code cannot - which is why there are many issues playing on Bedrock Edition. While we try our best to ensure gameplay compatibility on Bedrock Edition, due to these reasons, full Bedrock support is impossible. ",(0,o.kt)("br",null),(0,o.kt)("h2",{id:"bedrock-edition-issues"},"Bedrock Edition Issues"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"All custom textures don't show due to Bedrock limitations. This includes every item textures, armor textures, GUI textures, symbol textures, head textures, pet textures, mana bar... etc."),(0,o.kt)("li",{parentName:"ul"},"Custom HUD elements don't show (Bedrock deals with rendering completely differently from Java)."),(0,o.kt)("li",{parentName:"ul"},"There is no tab completion for commands (this functionality does not exist on Bedrock Edition)."),(0,o.kt)("li",{parentName:"ul"},"Certain particles don't show. This may introduce difficulties with mobs."),(0,o.kt)("li",{parentName:"ul"},"Certain sounds are broken (sound does not play or is wrong)."),(0,o.kt)("li",{parentName:"ul"},"Auctions cannot be opened (you can still sell though)."),(0,o.kt)("li",{parentName:"ul"},"Repeatable quests category cannot be opened."),(0,o.kt)("li",{parentName:"ul"},"Hardcore quests category cannot be opened."),(0,o.kt)("li",{parentName:"ul"},"Abilities cannot be used. This is because the swap item mechanic is completely missing in Bedrock Edition, which is necessary for abilities to function."),(0,o.kt)("li",{parentName:"ul"},"Enchantments and Item descriptions may not always show properly."),(0,o.kt)("li",{parentName:"ul"},"Mobs are invisible in certain uncommon cases. Their nametag will still show though."),(0,o.kt)("li",{parentName:"ul"},"You may not receive items from certain events."),(0,o.kt)("li",{parentName:"ul"},"Certain item functions may not work."),(0,o.kt)("li",{parentName:"ul"},"Links from chat cannot be clicked (this functionality does not exist on Bedrock Edition)."),(0,o.kt)("li",{parentName:"ul"},"Issues with getting stuck when walking past Bamboo (limitations due to Bedrock Edition handling offset differently).")))}d.isMDXComponent=!0}}]);