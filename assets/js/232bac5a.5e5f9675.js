"use strict";(self.webpackChunkhexarchon_wiki=self.webpackChunkhexarchon_wiki||[]).push([[7429],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8743:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:6,sidebar_label:"\ud83d\udcf1 Bedrock Issues",title:"Bedrock Issues"},i="Bedrock Issues",s={unversionedId:"faq/bedrock-crossplay",id:"faq/bedrock-crossplay",title:"Bedrock Issues",description:"You can join the server on Bedrock Edition using the IP play.hexarchon.net with Port 19132. Beware that Bedrock support has issues, because Mojang does not care to support 1:1 parity with Java on Bedrock Edition. You will encounter many issues.",source:"@site/docs/faq/bedrock-crossplay.md",sourceDirName:"faq",slug:"/faq/bedrock-crossplay",permalink:"/faq/bedrock-crossplay",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"\ud83d\udcf1 Bedrock Issues",title:"Bedrock Issues"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\uddbc Resource Pack Issues",permalink:"/faq/resource-pack-issues"},next:{title:"\ud83d\udca1 Suggestions and Bugs",permalink:"/faq/suggestions-and-bugs"}},l={},c=[{value:"Why are there so many issues on Bedrock Edition?",id:"why-are-there-so-many-issues-on-bedrock-edition",level:2},{value:"Bedrock Edition Issues",id:"bedrock-edition-issues",level:2},{value:"Bedrock Edition Changes",id:"bedrock-edition-changes",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"bedrock-issues"},"Bedrock Issues"),(0,r.kt)("p",null,"You can join the server on Bedrock Edition using the IP ",(0,r.kt)("inlineCode",{parentName:"p"},"play.hexarchon.net")," with Port ",(0,r.kt)("inlineCode",{parentName:"p"},"19132"),". ",(0,r.kt)("strong",{parentName:"p"},"Beware that Bedrock support has issues, because Mojang does not care to support 1:1 parity with Java on Bedrock Edition.")," You will encounter many issues."),(0,r.kt)("h2",{id:"why-are-there-so-many-issues-on-bedrock-edition"},"Why are there so many issues on Bedrock Edition?"),(0,r.kt)("p",null,"Minecraft Java and Bedrock is programmed using completely different programming languages, with completely different programming formats, with many gameplay variations. Any data incoming from Bedrock players have to be translated to Java Edition for the server to understand the data, and Bedrock is unbelievably lacking in features compared to Java."),(0,r.kt)("br",null),"You can imagine two people speaking completely different languages, attempting to have a conversation. Some words that exist in a language doesn't exist in another language. Some words can have multiple definitions. Google Translate would mostly help, but it would still be inaccurate. While humans could use educated guesses to understand these word variations and incorrect translations, computer code cannot - which is why there are many issues playing on Bedrock Edition. While we try our best to ensure gameplay compatibility on Bedrock Edition, due to these reasons, full Bedrock support is impossible until Mojang makes Bedrock a 1:1 parity with Java. ",(0,r.kt)("br",null),(0,r.kt)("h2",{id:"bedrock-edition-issues"},"Bedrock Edition Issues"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"As of 5/23/2023: With Bedrock 1.19.70, the Bedrock support developers completely broke being able to apply Custom Enchants in anvils on Bedrock Edition. If you play on Bedrock Edition and want to apply a Custom Enchant book, you can mention us on Discord and we'll apply it for you."),(0,r.kt)("li",{parentName:"ul"},"All custom textures don't show because Mojang didn't bother adding most technical features found in Java to Bedrock edition. This includes every item textures, armor textures, GUI textures, symbol textures, head textures, pet textures, mana bar... etc."),(0,r.kt)("li",{parentName:"ul"},"Custom HUD elements don't show (Bedrock deals with rendering completely differently from Java)."),(0,r.kt)("li",{parentName:"ul"},"There is no tab completion for commands (this functionality does not exist on Bedrock Edition)."),(0,r.kt)("li",{parentName:"ul"},"Certain particles don't show, because not all particles from Java are found or can be translated to Bedrock."),(0,r.kt)("li",{parentName:"ul"},"Certain sounds are broken (sound does not play or is wrong)."),(0,r.kt)("li",{parentName:"ul"},"There are issues with visual indicators while mining in the Miner's Mountain, because there is no way to manipulate packets on Bedrock. You may have to continue to break ores after it appears as broken."),(0,r.kt)("li",{parentName:"ul"},"Auctions cannot be opened, because the developer doesn't support it as it causes dupes due to how Bedrock inventories work."),(0,r.kt)("li",{parentName:"ul"},"Abilities cannot be used. This is because Mojang never added the swap item mechanic to Bedrock Edition, which is necessary for abilities to function."),(0,r.kt)("li",{parentName:"ul"},"Enchantments and Item descriptions may not always show properly due to how Bedrock shows item lore."),(0,r.kt)("li",{parentName:"ul"},"Mobs are invisible in certain uncommon cases. Their nametag will still show though."),(0,r.kt)("li",{parentName:"ul"},"Links from chat cannot be clicked (this functionality does not exist on Bedrock Edition)."),(0,r.kt)("li",{parentName:"ul"},"Issues with getting stuck when walking past Bamboo (limitations due to Bedrock Edition handling offset differently).")),(0,r.kt)("h2",{id:"bedrock-edition-changes"},"Bedrock Edition Changes"),(0,r.kt)("p",null,"To balance gameplay, those on Bedrock have these perks:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"20% incoming damage negation."),(0,r.kt)("li",{parentName:"ul"},"10% outgoing damage boost.")))}d.isMDXComponent=!0}}]);