(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,17358,(e,t,a)=>{},19812,(e,t,a)=>{var r=e.i(50461);e.r(17358);var i=e.r(91788),o=i&&"object"==typeof i&&"default"in i?i:{default:i},n=void 0!==r.default&&r.default.env&&!0,l=function(e){return"[object String]"===Object.prototype.toString.call(e)},s=function(){function e(e){var t=void 0===e?{}:e,a=t.name,r=void 0===a?"stylesheet":a,i=t.optimizeForSpeed,o=void 0===i?n:i;c(l(r),"`name` must be a string"),this._name=r,this._deletedRulePlaceholder="#"+r+"-deleted-rule____{}",c("boolean"==typeof o,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=o,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var s="u">typeof window&&document.querySelector('meta[property="csp-nonce"]');this._nonce=s?s.getAttribute("content"):null}var t,a=e.prototype;return a.setOptimizeForSpeed=function(e){c("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),c(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},a.isOptimizeForSpeed=function(){return this._optimizeForSpeed},a.inject=function(){var e=this;if(c(!this._injected,"sheet already injected"),this._injected=!0,"u">typeof window&&this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(n||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(t,a){return"number"==typeof a?e._serverSheet.cssRules[a]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),a},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},a.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},a.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},a.insertRule=function(e,t){if(c(l(e),"`insertRule` accepts only strings"),"u"<typeof window)return"number"!=typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var a=this.getSheet();"number"!=typeof t&&(t=a.cssRules.length);try{a.insertRule(e,t)}catch(t){return n||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var r=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,r))}return this._rulesCount++},a.replaceRule=function(e,t){if(this._optimizeForSpeed||"u"<typeof window){var a="u">typeof window?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!a.cssRules[e])return e;a.deleteRule(e);try{a.insertRule(t,e)}catch(r){n||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),a.insertRule(this._deletedRulePlaceholder,e)}}else{var r=this._tags[e];c(r,"old rule at index `"+e+"` not found"),r.textContent=t}return e},a.deleteRule=function(e){if("u"<typeof window)return void this._serverSheet.deleteRule(e);if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];c(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}},a.flush=function(){this._injected=!1,this._rulesCount=0,"u">typeof window?(this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]):this._serverSheet.cssRules=[]},a.cssRules=function(){var e=this;return"u"<typeof window?this._serverSheet.cssRules:this._tags.reduce(function(t,a){return a?t=t.concat(Array.prototype.map.call(e.getSheetForTag(a).cssRules,function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[])},a.makeStyleTag=function(e,t,a){t&&c(l(t),"makeStyleTag accepts only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var i=document.head||document.getElementsByTagName("head")[0];return a?i.insertBefore(r,a):i.appendChild(r),r},t=[{key:"length",get:function(){return this._rulesCount}}],function(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(e.prototype,t),e}();function c(e,t){if(!e)throw Error("StyleSheet: "+t+".")}var m=function(e){for(var t=5381,a=e.length;a;)t=33*t^e.charCodeAt(--a);return t>>>0},d={};function h(e,t){if(!t)return"jsx-"+e;var a=String(t),r=e+a;return d[r]||(d[r]="jsx-"+m(e+"-"+a)),d[r]}function g(e,t){"u"<typeof window&&(t=t.replace(/\/style/gi,"\\/style"));var a=e+t;return d[a]||(d[a]=t.replace(/__jsx-style-dynamic-selector/g,e)),d[a]}var p=function(){function e(e){var t=void 0===e?{}:e,a=t.styleSheet,r=void 0===a?null:a,i=t.optimizeForSpeed,o=void 0!==i&&i;this._sheet=r||new s({name:"styled-jsx",optimizeForSpeed:o}),this._sheet.inject(),r&&"boolean"==typeof o&&(this._sheet.setOptimizeForSpeed(o),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),"u">typeof window&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var a=this.getIdAndRules(e),r=a.styleId,i=a.rules;if(r in this._instancesCounts){this._instancesCounts[r]+=1;return}var o=i.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return -1!==e});this._indices[r]=o,this._instancesCounts[r]=1},t.remove=function(e){var t=this,a=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw Error("StyleSheetRegistry: "+t+".")}(a in this._instancesCounts,"styleId: `"+a+"` not found"),this._instancesCounts[a]-=1,this._instancesCounts[a]<1){var r=this._fromServer&&this._fromServer[a];r?(r.parentNode.removeChild(r),delete this._fromServer[a]):(this._indices[a].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[a]),delete this._instancesCounts[a]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],a=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return a[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return!!e[1]}))},t.styles=function(e){var t,a;return t=this.cssRules(),void 0===(a=e)&&(a={}),t.map(function(e){var t=e[0],r=e[1];return o.default.createElement("style",{id:"__"+t,key:"__"+t,nonce:a.nonce?a.nonce:void 0,dangerouslySetInnerHTML:{__html:r}})})},t.getIdAndRules=function(e){var t=e.children,a=e.dynamic,r=e.id;if(a){var i=h(r,a);return{styleId:i,rules:Array.isArray(t)?t.map(function(e){return g(i,e)}):[g(i,t)]}}return{styleId:h(r),rules:Array.isArray(t)?t:[t]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})},e}(),u=i.createContext(null);function f(){return new p}function b(){return i.useContext(u)}u.displayName="StyleSheetContext";var v=o.default.useInsertionEffect||o.default.useLayoutEffect,x="u">typeof window?f():void 0;function y(e){var t=x||b();return t&&("u"<typeof window?t.add(e):v(function(){return t.add(e),function(){t.remove(e)}},[e.id,String(e.dynamic)])),null}y.dynamic=function(e){return e.map(function(e){return h(e[0],e[1])}).join(" ")},a.StyleRegistry=function(e){var t=e.registry,a=e.children,r=i.useContext(u),n=i.useState(function(){return r||t||f()})[0];return o.default.createElement(u.Provider,{value:n},a)},a.createStyleRegistry=f,a.style=y,a.useStyleRegistry=b},45246,(e,t,a)=>{t.exports=e.r(19812).style},37749,e=>{e.v({className:"jetbrainsmono_2bb19709-module__k2m9iG__className",variable:"jetbrainsmono_2bb19709-module__k2m9iG__variable"})},74524,e=>{e.v({className:"manrope_cff0e64c-module__sG5jWG__className",variable:"manrope_cff0e64c-module__sG5jWG__variable"})},66744,e=>{e.v({className:"syne_3439b88f-module__Co6dYa__className",variable:"syne_3439b88f-module__Co6dYa__variable"})},10477,e=>{"use strict";var t=e.i(91398),a=e.i(45246),r=e.i(58678),i=e.i(37749);let o={className:i.default.className,style:{fontFamily:"'jetbrainsMono', 'jetbrainsMono Fallback'"}};null!=i.default.variable&&(o.variable=i.default.variable);var n=e.i(74524);let l={className:n.default.className,style:{fontFamily:"'manrope', 'manrope Fallback'"}};null!=n.default.variable&&(l.variable=n.default.variable);var s=e.i(66744);let c={className:s.default.className,style:{fontFamily:"'syne', 'syne Fallback'"}};null!=s.default.variable&&(c.variable=s.default.variable);var m=e.i(91788),d=e.i(15443),h=e.i(28268);let g=[{id:"01",zh:{title:"多租户后台权限系统",caseType:"企业后台 / 权限平台",problem:"组织扩张后角色与权限层级复杂，人工维护效率低且风险高。",role:"负责权限模型梳理、核心界面实现与关键流程体验优化。",result:"支撑千人级组织，权限配置与审批人工环节减少约 80%。"},en:{title:"Multi-tenant Access Control System",caseType:"Enterprise Admin / Access Control",problem:"Growing role and permission layers made manual management slow and risky.",role:"Led permission modeling, core UI implementation, and workflow usability.",result:"Supports 1,000+ org structures and cuts manual approval steps by about 80%."},tags:["Admin","RBAC","ABAC","React"]},{id:"02",zh:{title:"运营实时监控大屏",caseType:"数据可视化 / 实时大屏",problem:"运营数据分散，缺少统一视图和实时预警，异常发现滞后。",role:"负责数据接入、图表表达、前端展示和预警逻辑落地。",result:"异常识别从小时级缩短到分钟级，运营响应更快。"},en:{title:"Real-time Operations Dashboard",caseType:"Data Visualization / Large-screen Display",problem:"Scattered operations data delayed anomaly detection and decisions.",role:"Handled data flows, chart design, frontend delivery, and alert logic.",result:"Detection improved from hours to minutes, accelerating operations response."},tags:["ECharts","WebSocket","Realtime","Dashboard"]},{id:"03",zh:{title:"个人品牌获客站",caseType:"品牌官网 / 静态站点",problem:"普通作品集难以清楚表达能力边界、专业判断和个人识别度。",role:"独立完成信息架构、文案、视觉、前端实现与多语言支持。",result:"轻量可维护，首屏加载控制在 1.5 秒内，支持中英文切换。"},en:{title:"Personal Brand & Lead-gen Site",caseType:"Brand Website / Static Site",problem:"A typical portfolio rarely clarifies positioning, judgment, and identity.",role:"Owned IA, copy, visual direction, frontend delivery, and bilingual support.",result:"Lightweight and maintainable, with first-screen loading under 1.5 seconds."},tags:["Next.js","Cloudflare Pages","i18n","UX"]},{id:"04",zh:{title:"Taro 小程序项目",caseType:"微信生态 / Taro 小程序",problem:"小程序需要快速交付、轻体积和顺滑体验，同时兼顾运营与适配。",role:"负责 Taro 架构、核心页面、组件抽象、接口联调与发布问题。",result:"更快支持活动页、业务页和轻量交易链路迭代，复用度更高。"},en:{title:"Taro Mini Program Project",caseType:"WeChat Ecosystem / Taro Mini Program",problem:"Mini programs need fast delivery, small bundles, and smooth in-app flows.",role:"Built the Taro structure, core pages, reusable components, and release flow.",result:"Improved reuse and delivery speed for campaigns, workflows, and light transactions."},tags:["Taro","Mini Program","React","TypeScript"]},{id:"05",zh:{title:"React Native 跨端项目",caseType:"跨端 App / React Native",problem:"跨端 App 需要同时覆盖 iOS/Android，并平衡性能、发布与节奏。",role:"负责 RN 方案调研、基础架构、核心页面和原生/接口联调。",result:"覆盖企业、出海和设备配套 App 场景，展示跨端交付能力。"},en:{title:"React Native Cross-platform Project",caseType:"Cross-platform App / React Native",problem:"Cross-platform apps need shared iOS/Android delivery without losing quality.",role:"Handled RN evaluation, architecture, core screens, native integration, and APIs.",result:"Covers enterprise, global-facing, and device companion app scenarios."},tags:["React Native","Expo","TypeScript","Cross-platform"]},{id:"06",zh:{title:"Web3 钱包前端",caseType:"区块链 / DApp 前端",problem:"链上操作理解门槛高，流程不清晰会放大犹豫和误操作。",role:"负责 Ethers.js 集成、钱包流程梳理和关键步骤体验优化。",result:"支持 ERC-20 资产管理，核心路径更短，步骤减少约 40%。"},en:{title:"Web3 Wallet Frontend",caseType:"Blockchain / DApp Frontend",problem:"On-chain actions are complex, and unclear flows increase user errors.",role:"Focused on Ethers.js integration, wallet flows, and critical action UX.",result:"Added ERC-20 asset support and reduced key interaction steps by about 40%."},tags:["Web3","Ethers.js","MetaMask","ERC-20"]}],p=[{key:"hero",zh:"首页",en:"Home"},{key:"cases",zh:"案例",en:"Cases"},{key:"stack",zh:"能力",en:"Skills"},{key:"contact",zh:"联系",en:"Contact"}],u={zh:{pageTitle:"代码民工 · 前端工程师 & 独立开发者",metaDesc:"代码民工，前端工程师，专注复杂中后台、配置平台与数据可视化，兼顾工程质量、业务理解与产品体验。",brand:"代码民工",badge:"前端工程师 · 深圳 · 开放交流与合作",eyebrow:"Frontend Engineer / Indie Developer",heroSubtitle:"把复杂业务做清楚，把产品体验做完整",heroSummary:"专注中后台系统、配置平台与数据可视化。我关心的不只是代码能跑，更关心结构是否稳定、交互是否顺手、产品是否真正可用。做过权限系统、低代码表单引擎、电商 SKU 配置工作台、实时运营大屏等复杂业务项目，习惯在业务复杂度、工程质量和产品完成度之间找到平衡。",ctaPrimary:"查看案例",ctaSecondary:"联系我",languageSwitcher:"切换语言",languageLabelZh:"中",languageLabelEn:"EN",menuOpen:"打开菜单",menuClose:"关闭菜单",menuLabel:"移动端菜单",themeSwitcher:"切换主题",themeLight:"日",themeDark:"夜",terminalLabel:"终端介绍",terminalCommands:{whoami:"whoami",commits:"git log --oneline -3",focus:"echo $FOCUS"},stackHeading:"我的能力边界",stackDescription:"围绕复杂前端系统展开，覆盖中后台工程、配置型产品、数据可视化与交付链路。我更在意这些能力能否在真实项目里形成稳定产出，而不只是停留在技术名词层面。",casesHeading:"做过什么，解决了什么",casesDescription:"这些不是简单的技术罗列，而是我参与过的真实业务场景。我更希望用问题、职责和结果来说明自己做了什么。",caseLabels:{problem:"业务背景",role:"我的职责",result:"结果"},contact:{eyebrow:"联系方式",title:"可以聊项目，也可以只是打个招呼",subtitle:"如果你正在做中后台系统、配置平台、数据可视化项目，或者只是想交流前端工程和产品实现上的问题，都欢迎联系我。",fitTitle:"更擅长的项目",fitItems:["后台系统 / 工作台","数据可视化 / 大屏","品牌官网 / 作品站"],workflowTitle:"通常的开发方式",workflowItems:["先对齐背景、范围和目标","按阶段推进，过程透明","支持远程协作，文档和代码可完整交接"],emailCard:{title:"发邮件",description:"适合项目沟通、合作咨询，或者直接交流具体问题。",link:"suijiafeng@hotmail.com"},githubCard:{title:"看看我的代码",description:"如果你想更快了解我的实现风格、技术兴趣和项目痕迹，可以先从 GitHub 开始。",link:"github.com/suijiafeng"},emailMeta:"邮箱",githubMeta:"GitHub",locationLabel:"位置",timezoneLabel:"时区",statusLabel:"当前状态",location:"深圳，中国",timezone:"UTC+8 (CST)",status:"开放交流与合作"},terminal:{whoami:"代码民工 / suijiafeng",focus:"Complex Frontend · Product-minded UI · Reliable Delivery",commits:["feat: RBAC admin system v2","feat: lowcode form builder","fix: dashboard realtime perf"]},techGroups:[{title:"前端技术栈",items:[{name:"React / Next.js",subtitle:"面向复杂业务场景构建稳定、可扩展的现代前端应用",level:"94%"},{name:"Tailwind CSS",subtitle:"高效搭建一致的界面系统，兼顾开发效率与视觉完成度",level:"90%"},{name:"TypeScript",subtitle:"用类型系统降低复杂项目中的认知成本和维护风险",level:"92%"},{name:"ECharts/ReCharts",subtitle:"把复杂业务数据转化为可读、可交互、可决策的可视化界面",level:"86%"}]},{title:"数据 & 部署",items:[{name:"Node.js",subtitle:"支持服务端逻辑、构建流程和工程自动化",level:"88%"},{name:"Prisma",subtitle:"用清晰的数据建模方式支撑复杂业务结构和后端协作",level:"82%"},{name:"PostgreSQL",subtitle:"理解关系型数据设计与查询能力在业务系统中的重要性",level:"84%"},{name:"Docker",subtitle:"让开发、测试和部署环境更稳定，减少交付过程中的环境偏差",level:"79%"},{name:"Git / GitHub",subtitle:"以版本管理、协作流程和持续交付保证工程质量",level:"91%"}]}],sections:{stack:"能力",cases:"案例"}},en:{pageTitle:"代码民工 · Frontend Engineer & Indie Developer",metaDesc:"代码民工, a frontend engineer focused on complex admin systems, configuration platforms, and data visualization, with equal attention to engineering quality, business clarity, and product experience.",brand:"代码民工",badge:"Frontend Engineer · Shenzhen · Open to Collaboration",eyebrow:"Frontend Engineer / Indie Developer",heroSubtitle:"Making complex business systems clear and product experiences complete",heroSummary:"I focus on admin systems, configuration platforms, and data visualization. I care not only about whether the code works, but whether the structure is maintainable, the interactions feel right, and the product is truly usable. My work includes access control systems, low-code form builders, e-commerce SKU tools, and real-time dashboards, with a consistent focus on balancing business complexity, engineering quality, and product experience.",ctaPrimary:"View Cases",ctaSecondary:"Say Hi",languageSwitcher:"Switch language",languageLabelZh:"ZH",languageLabelEn:"EN",menuOpen:"Open menu",menuClose:"Close menu",menuLabel:"Mobile menu",themeSwitcher:"Switch theme",themeLight:"Day",themeDark:"Night",terminalLabel:"Terminal introduction",terminalCommands:{whoami:"whoami",commits:"git log --oneline -3",focus:"echo $FOCUS"},stackHeading:"What I work across",stackDescription:"My work centers on complex frontend systems, covering admin engineering, configuration-heavy products, data visualization, and delivery workflows. What matters to me is not the number of tools, but whether they lead to reliable outcomes in real projects.",casesHeading:"What I built and what it solved",casesDescription:"These are not just technology lists. They reflect real business contexts I worked in, explained through the problem, my role, and the outcome.",caseLabels:{problem:"Context",role:"My Role",result:"Outcome"},contact:{eyebrow:"Get In Touch",title:"Happy to talk about projects or just say hello",subtitle:"If you are working on admin systems, configuration platforms, data dashboards, or simply want to exchange ideas about frontend engineering and product implementation, feel free to reach out.",fitTitle:"Projects I am most interested in",fitItems:["Admin systems / workbenches","Data visualization / dashboards","Low-code / config platforms","Brand websites"],workflowTitle:"How I usually work",workflowItems:["Align on context, scope, and goals first","Move in phases with clear progress","Remote-friendly with complete docs and code handoff"],emailCard:{title:"Send an email",description:"Best for project discussions, collaboration inquiries, or specific technical topics.",link:"suijiafeng@hotmail.com"},githubCard:{title:"See my code",description:"If you want a quicker sense of how I build, think, and ship, GitHub is a good place to start.",link:"github.com/suijiafeng"},emailMeta:"Email",githubMeta:"GitHub",locationLabel:"Location",timezoneLabel:"Timezone",statusLabel:"Status",location:"Shenzhen, China",timezone:"UTC+8 (CST)",status:"Open to collaboration"},terminal:{whoami:"代码民工 / suijiafeng",focus:"Complex Frontend · Product-minded UI · Reliable Delivery",commits:["feat: RBAC admin system v2","feat: lowcode form builder","fix: dashboard realtime perf"]},techGroups:[{title:"Frontend Stack",items:[{name:"React / Next.js",subtitle:"Building stable and scalable modern frontend applications for complex product scenarios",level:"94%"},{name:"Tailwind CSS",subtitle:"Creating consistent UI systems with both speed and visual finish in mind",level:"90%"},{name:"TypeScript",subtitle:"Using types to reduce complexity and maintenance risk in larger projects",level:"92%"},{name:"ECharts",subtitle:"Turning operational data into interfaces that are readable, interactive, and decision-friendly",level:"86%"}]},{title:"Data & Delivery",items:[{name:"Node.js",subtitle:"Supporting server-side logic, build pipelines, and engineering automation",level:"88%"},{name:"Prisma",subtitle:"Working with clear data models to support complex business structures and backend collaboration",level:"82%"},{name:"PostgreSQL",subtitle:"Understanding how relational data design supports serious business systems",level:"84%"},{name:"Docker",subtitle:"Keeping development and deployment environments consistent across delivery stages",level:"79%"},{name:"Git / GitHub",subtitle:"Using version control, collaboration flow, and delivery discipline to protect engineering quality",level:"91%"}]}],sections:{stack:"Capabilities",cases:"Cases"}}};var f=e.i(38210),b=e.i(76199);let v=String.raw`
html.official-home-html {
  --bg: #070910;
  --bg-secondary: #0d1117;
  --bg-surface: rgba(13, 17, 23, 0.62);
  --bg-surface-strong: rgba(13, 17, 23, 0.72);
  --bg-surface-soft: rgba(13, 17, 23, 0.42);
  --border: rgba(255, 255, 255, 0.07);
  --brand: #54c7b7;
  --brand-hover: #7ee4d5;
  --brand-soft: rgba(84, 199, 183, 0.16);
  --brand-soft-2: rgba(84, 199, 183, 0.08);
  --brand-border: rgba(84, 199, 183, 0.38);
  --logo-mark: #9fb0bd;
  --logo-text: #f3f7fb;
  --accent: var(--brand);
  --accent-soft: rgba(84, 199, 183, 0.16);
  --accent-alt: #67e8f9;
  --text: #e8eaf0;
  --text-muted: #555e72;
  --text-soft: #b7becc;
  --success: #31d67b;
  --stack-group-gap: 2rem;
  --stack-card-shadow: none;
  --stack-metric-text: #97a3b6;
  --stack-meta-text: var(--text-muted);
  --stack-bar-bg: rgba(255, 255, 255, 0.08);
  --stack-primary-fill: var(--accent);
  --stack-secondary-fill: #31d67b;
  --max-width: 1600px;
  --radius: 6px;
  --nav-height: 72px;
  --theme-transition-duration: 0.24s;
  --theme-transition-ease: ease;
  --font-body: 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Noto Sans SC', sans-serif;
  --font-display: var(--font-display-local), 'Syne', sans-serif;
  --font-mono: var(--font-mono-local), 'JetBrains Mono', monospace;
}

html.official-home-html {
  background-color: var(--bg-secondary);
}

html.official-home-html[lang='en'] {
  --font-body: var(--font-manrope-local), 'Manrope', sans-serif;
}

html.official-home-html[data-theme='light'] {
  --bg: #e8eef5;
  --bg-secondary: #f7fafe;
  --bg-surface: rgba(255, 255, 255, 0.82);
  --bg-surface-strong: rgba(255, 255, 255, 0.94);
  --bg-surface-soft: rgba(244, 247, 252, 0.9);
  --border: rgba(22, 34, 54, 0.12);
  --brand: #0f766e;
  --brand-hover: #0a5b56;
  --brand-soft: #e2f1ee;
  --brand-soft-2: #eef7f4;
  --brand-border: #9fc9c1;
  --logo-mark: #4f606b;
  --logo-text: #21313c;
  --accent: var(--brand);
  --accent-soft: rgba(15, 118, 110, 0.1);
  --accent-alt: #0b63f6;
  --text: #102033;
  --text-muted: #5d6b7d;
  --text-soft: #39495d;
  --success: #178f57;
  --stack-group-gap: 3rem;
  --stack-card-shadow: 0 14px 34px rgba(46, 67, 96, 0.07);
  --stack-metric-text: #7b8491;
  --stack-meta-text: #5f6b7b;
  --stack-bar-bg: rgba(17, 24, 39, 0.08);
  --stack-primary-fill: #0b63f6;
  --stack-secondary-fill: #159a70;
}

body.official-home-body {
  background: #070910;
  color: var(--text);
  font-family: var(--font-body);
  font-size: 18px;
  font-weight: 400;
  line-height: 1.7;
  transition:
    background 0.24s ease,
    color var(--theme-transition-duration) var(--theme-transition-ease);
}

html.official-home-html[data-theme='light'] body.official-home-body {
  background: #f3f6fa;
}

.site-nav,
.hero-badge,
.button,
.contact-link,
.lang-toggle,
.theme-toggle,
.theme-toggle__item,
.lang-toggle__item,
.terminal-card,
.terminal-card__chrome,
.terminal-card__body,
.terminal-output,
.stack-group,
.skill-card,
.contact-card,
.contact-panel,
.tag,
.contact-chip,
.case-card,
.case-detail__value,
.case-result,
.section-heading__description,
.contact-subtitle {
  transition:
    color var(--theme-transition-duration) var(--theme-transition-ease),
    background-color var(--theme-transition-duration) var(--theme-transition-ease),
    background var(--theme-transition-duration) var(--theme-transition-ease),
    border-color var(--theme-transition-duration) var(--theme-transition-ease),
    box-shadow var(--theme-transition-duration) var(--theme-transition-ease),
    opacity var(--theme-transition-duration) var(--theme-transition-ease),
    transform var(--theme-transition-duration) var(--theme-transition-ease);
}

.home-reveal {
  opacity: 0;
  transform: translate3d(0, 18px, 0);
  will-change: opacity, transform;
  transition:
    opacity 560ms cubic-bezier(0.22, 1, 0.36, 1),
    transform 560ms cubic-bezier(0.22, 1, 0.36, 1),
    color var(--theme-transition-duration) var(--theme-transition-ease),
    background-color var(--theme-transition-duration) var(--theme-transition-ease),
    background var(--theme-transition-duration) var(--theme-transition-ease),
    border-color var(--theme-transition-duration) var(--theme-transition-ease),
    box-shadow var(--theme-transition-duration) var(--theme-transition-ease);
}

.home-reveal.is-visible {
  opacity: 1;
  transform: translate3d(0, 0, 0);
  transition-delay: var(--reveal-delay, 0ms), var(--reveal-delay, 0ms), 0ms, 0ms, 0ms, 0ms, 0ms;
}

.home-reveal.is-reveal-complete {
  will-change: auto;
  transition:
    color var(--theme-transition-duration) var(--theme-transition-ease),
    background-color var(--theme-transition-duration) var(--theme-transition-ease),
    background var(--theme-transition-duration) var(--theme-transition-ease),
    border-color var(--theme-transition-duration) var(--theme-transition-ease),
    box-shadow var(--theme-transition-duration) var(--theme-transition-ease),
    opacity var(--theme-transition-duration) var(--theme-transition-ease),
    transform var(--theme-transition-duration) var(--theme-transition-ease);
  transition-delay: 0ms;
}

@media (prefers-reduced-motion: reduce) {
  .home-reveal,
  .home-reveal.is-visible,
  .home-reveal.is-reveal-complete {
    opacity: 1;
    transform: none;
    transition: none;
    will-change: auto;
  }
}

.site-shell {
  position: relative;
  overflow: clip;
}

.noise-layer {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  opacity: 0.12;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='260' height='260' viewBox='0 0 260 260'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.1' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='260' height='260' filter='url(%23n)' opacity='0.42'/%3E%3C/svg%3E");
  mix-blend-mode: soft-light;
}

html.official-home-html[data-theme='light'] .noise-layer {
  opacity: 0.03;
  mix-blend-mode: overlay;
}

.site-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  backdrop-filter: blur(16px);
  background: rgba(7, 9, 16, 0.52);
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
}

html.official-home-html[data-theme='light'] .site-nav {
  background: rgba(248, 250, 252, 0.88);
  border-bottom-color: rgba(16, 32, 51, 0.08);
  box-shadow: 0 12px 32px rgba(53, 74, 102, 0.08);
}

.nav-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--nav-height);
  padding: 0 16px;
  gap: 24px;
  margin: 0 auto;
  max-width: var(--max-width);
}

@media (min-width: 768px) {
  .nav-wrapper {
    padding-right: 40px;
    padding-left: 40px;
  }
}

@media (min-width: 1280px) {
  .nav-wrapper {
    padding-right: 64px;
    padding-left: 64px;
  }
}

.nav-controls {
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.brandmark {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  font-family: var(--font-mono);
  font-size: 0.92rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.app-brand-logo {
  min-height: 2rem;
  flex-shrink: 0;
  color: var(--text);
}

.app-brand-logo__image {
  display: block;
  width: 128px;
  height: auto;
}

@media (min-width: 768px) {
  .app-brand-logo__image {
    width: 192px;
  }
}

.nav-links {
  display: flex;
  gap: 0.25rem;
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-muted);
}

.nav-links button {
  position: relative;
  border-radius: 0.5rem;
  padding: 0.375rem 0.75rem;
  color: inherit;
  transition: color 0.2s ease, background-color 0.2s ease;
}

.nav-links button::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -0.3rem;
  height: 1px;
  background: var(--accent);
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.24s ease;
}

.nav-links button:hover {
  color: var(--text);
  background: rgba(255, 255, 255, 0.05);
}

.nav-links .is-active {
  color: var(--text);
  background: transparent;
}

html.official-home-html[data-theme='light'] .nav-links button:hover {
  color: #172b35;
  background: #f3f6f9;
}

html.official-home-html[data-theme='light'] .nav-links .is-active {
  color: var(--brand-hover);
  background: transparent;
}

.nav-links .is-active::after {
  transform: scaleX(1);
}

.menu-toggle,
.mobile-menu {
  display: none;
}

.mobile-menu-layer {
  display: none;
}

.mobile-lang-toggle,
.mobile-theme-toggle {
  display: none;
}

.section {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 3rem 4rem 4rem;
}

.hero {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(340px, 0.9fr);
  gap: 3rem;
  min-height: 100vh;
  align-items: center;
  padding-top: calc(1.5em + var(--nav-height));
}

.hero__glow {
  display: none;
}

.hero__glow--cyan {
  display: none;
}

.hero__glow--violet {
  display: none;
}

html.official-home-html[data-theme='light'] .hero__glow {
  display: none;
}

html.official-home-html[data-theme='light'] .hero__glow--cyan {
  display: none;
}

html.official-home-html[data-theme='light'] .hero__glow--violet {
  display: none;
}

.hero-badge,
.tag,
.button,
.skill-card,
.stack-group,
.terminal-card {
  border: 1px solid var(--border);
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0.55rem 0.9rem;
  margin-bottom: 1.5rem;
  background: rgba(13, 17, 23, 0.64);
  color: var(--text);
  font-family: var(--font-mono);
  font-size: 0.76rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

html.official-home-html[data-theme='light'] .hero-badge {
  border-color: rgba(22, 34, 54, 0.08);
  background: rgba(255, 255, 255, 0.88);
  box-shadow: 0 12px 26px rgba(46, 67, 96, 0.06);
}

.hero-badge__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--success);
  animation: pulse 2s ease infinite;
}

.eyebrow {
  margin: 0 0 1rem;
  color: var(--accent);
  font-family: var(--font-mono);
  font-size: 1.2rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.hero h1,
.section-heading h2,
.contact-section h2 {
  margin: 0;
  font-family: var(--font-display);
  font-weight: 800;
  letter-spacing: -0.02em;
}

.hero h1 {
  max-width: 10.5ch;
  font-size: clamp(3.6rem, 9vw, 7rem);
  line-height: 0.94;
}

.hero h1 span {
  display: block;
  margin-top: 1.25rem;
  max-width: 16ch;
  font-family: var(--font-body);
  font-size: clamp(1.1rem, 2.2vw, 1.4rem);
  font-weight: 300;
  line-height: 1.65;
  letter-spacing: 0;
  color: var(--text-muted);
}

.hero__summary {
  max-width: 37rem;
  margin: 2rem 0 0;
  color: var(--text-soft);
  font-size: 1.2rem;
  line-height: 1.8;
}

html.official-home-html[data-theme='light'] .hero h1 span {
  color: #445266;
}

html.official-home-html[data-theme='light'] .hero__summary {
  color: #38485d;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2.5rem;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 142px;
  padding: 0.95rem 1.4rem;
  border-radius: var(--radius);
  font-family: var(--font-mono);
  font-size: 0.86rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.button:hover {
  transform: translateY(-1px);
}

.button--primary {
  background: var(--accent);
  border-color: var(--accent);
  color: #031017;
}

html.official-home-html[data-theme='light'] .button--primary {
  color: #f8fbff;
  box-shadow: 0 12px 24px rgba(15, 118, 110, 0.18);
}

.button--ghost {
  background: transparent;
  color: var(--text);
}

html.official-home-html[data-theme='light'] .button--ghost {
  background: rgba(255, 255, 255, 0.5);
}

.lang-toggle {
  margin-left: 12px;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  font-family: var(--font-mono);
  font-size: 0.78rem;
  letter-spacing: 0.06em;
}

.theme-toggle {
  margin-left: 55px;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  border: 1px solid var(--border);
  border-radius: var(--radius);
}

html.official-home-html[data-theme='light'] .theme-toggle,
html.official-home-html[data-theme='light'] .lang-toggle {
  background: rgba(255, 255, 255, 0.48);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.55);
}

.theme-toggle__item {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: calc(var(--radius) - 1px);
  color: var(--text-muted);
}

.theme-toggle__item svg {
  width: 1.05rem;
  height: 1.05rem;
  stroke: currentColor;
  fill: none;
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.theme-toggle__item:hover {
  color: var(--text);
  transform: translateY(-1px);
}

.theme-toggle__item.is-active {
  color: var(--text);
  background: rgba(255, 255, 255, 0.07);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.03);
}

html.official-home-html[data-theme='light'] .theme-toggle__item.is-active {
  background: rgba(255, 255, 255, 0.92);
  box-shadow:
    inset 0 0 0 1px rgba(15, 118, 110, 0.08),
    0 6px 16px rgba(64, 84, 112, 0.08);
}

.lang-toggle__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.45rem;
  height: 1.45rem;
  color: var(--text-muted);
}

.lang-toggle__icon svg {
  width: 0.92rem;
  height: 0.92rem;
  stroke: currentColor;
  fill: none;
  stroke-width: 1.75;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.lang-toggle__item {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2.35rem;
  height: 2rem;
  padding: 0 0.5rem;
  border-radius: calc(var(--radius) - 1px);
  color: var(--text-muted);
}

.lang-toggle__item:hover {
  color: var(--text);
  transform: translateY(-1px);
}

.lang-toggle__item.is-active {
  color: var(--text);
  background: rgba(255, 255, 255, 0.07);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.03);
}

html.official-home-html[data-theme='light'] .lang-toggle__item.is-active {
  background: rgba(255, 255, 255, 0.92);
  box-shadow:
    inset 0 0 0 1px rgba(15, 118, 110, 0.08),
    0 6px 16px rgba(64, 84, 112, 0.08);
}

.terminal-float-wrapper {
  animation: floatCard 7s ease-in-out 1.4s infinite;
}

.lang-transition {
  transition: opacity 0.3s ease;
}

.lang-transition.changing {
  opacity: 0.7;
}

.terminal-card {
  position: relative;
  background: rgba(12, 18, 28, 0.98);
  border: 1px solid rgba(148, 163, 184, 0.12);
  border-radius: 18px;
  overflow: hidden;
  box-shadow:
    0 28px 60px rgba(2, 6, 12, 0.34),
    0 0 0 1px rgba(255, 255, 255, 0.02);
}

html.official-home-html[data-theme='light'] .terminal-card {
  background: rgba(251, 253, 255, 0.99);
  border-color: rgba(22, 34, 54, 0.08);
  box-shadow:
    0 22px 48px rgba(53, 74, 102, 0.12),
    0 0 0 1px rgba(255, 255, 255, 0.72);
}

html.official-home-html[data-theme='light'] .terminal-card__chrome {
  background: rgba(243, 247, 252, 0.96);
}

.terminal-card__chrome {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 1rem;
  border-bottom: 1px solid rgba(148, 163, 184, 0.12);
  background: rgba(10, 16, 26, 0.92);
}

.mac-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.mac-dot--red {
  background: #ff5f57;
}

.mac-dot--yellow {
  background: #febc2e;
}

.mac-dot--green {
  background: #28c840;
}

.terminal-card__body {
  padding: 1.15rem 1.2rem 1.3rem;
  font-family: var(--font-mono);
  font-size: 0.82rem;
  line-height: 1.8;
  color: #d6dfeb;
}

.prompt {
  color: var(--accent);
  font-weight: 600;
}

.terminal-output {
  color: #94a3b8;
  margin: 0.18rem 0 0.7rem 0;
}

html.official-home-html[data-theme='light'] .terminal-output {
  color: #5b6b7d;
}

html.official-home-html[data-theme='light'] .terminal-card__body {
  color: #334155;
}

.terminal-output--commit {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.terminal-hash {
  color: var(--accent-alt);
  min-width: 2.6rem;
  margin-right: 0.25rem;
}

.terminal-line {
  display: inline-flex;
  align-items: center;
}

.cursor {
  display: inline-block;
  width: 2px;
  height: 1em;
  margin-left: 0.4rem;
  background: var(--accent);
  animation: blink 1.1s step-end infinite;
}

.section-heading {
  display: grid;
  gap: 0.8rem;
  margin-bottom: 2rem;
  text-align: center;
}

.section-heading__description,
.contact-subtitle {
  max-width: 40rem;
  margin: 0 auto;
  color: var(--text-muted);
  font-size: 1.05rem;
  line-height: 1.7;
}

.section-heading h2,
.contact-section h2 {
  font-size: clamp(2.2rem, 5vw, 4rem);
  line-height: 1;
}

.stack-groups {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--stack-group-gap);
}

.stack-group {
  padding: 2rem;
  border-radius: var(--radius);
  background: var(--bg-surface);
  box-shadow: var(--stack-card-shadow);
}

.stack-group__header {
  position: relative;
  margin-bottom: 1.5rem;
  padding-bottom: 0.85rem;
}

.stack-group__header::after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 4px;
  height: 33px;
  border-radius: 999px;
  background: var(--accent);
}

.stack-group:nth-child(2) .stack-group__header::after {
  background: #31d67b;
}

.stack-group__header h3,
.skill-card h4 {
  margin: 0;
}

.stack-group__header h3 {
  margin-left: 0.875rem;
  font-family: var(--font-body);
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 1.08;
  letter-spacing: -0.02em;
  text-transform: none;
}

.stack-group__header span,
.skill-card__top span {
  color: var(--text-muted);
  font-family: var(--font-mono);
  font-size: 0.78rem;
}

.stack-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

.skill-card {
  display: grid;
  gap: 1.15rem;
  min-height: 100%;
  padding: 1.2rem;
  border-radius: var(--radius);
  background: rgba(255, 255, 255, 0.015);
}

html.official-home-html[data-theme='light'] .skill-card {
  background: rgba(15, 23, 40, 0.015);
  box-shadow: 0 12px 28px rgba(46, 67, 96, 0.06);
}

.skill-card:hover {
  border-color: rgba(84, 199, 183, 0.2);
  background: rgba(84, 199, 183, 0.045);
}

html.official-home-html[data-theme='light'] .skill-card:hover {
  border-color: rgba(15, 118, 110, 0.16);
  background: rgba(255, 255, 255, 0.72);
}

.skill-card__top {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.9rem;
}

.skill-card h4 {
  font-size: 1.1rem;
  font-weight: 500;
  line-height: 1.4;
}

.skill-card p {
  color: #97a3b6;
  line-height: 1.7;
  font-size: 1rem;
}

html.official-home-html[data-theme='light'] .skill-card p,
html.official-home-html[data-theme='light'] .contact-chip,
html.official-home-html[data-theme='light'] .contact-list__item {
  color: #526073;
}

html.official-home-html[data-theme='light'] .stack-group,
html.official-home-html[data-theme='light'] .contact-card,
html.official-home-html[data-theme='light'] .contact-panel {
  box-shadow: 0 14px 34px rgba(46, 67, 96, 0.07);
}

html.official-home-html[data-theme='light'] .stack-group,
html.official-home-html[data-theme='light'] .contact-card,
html.official-home-html[data-theme='light'] .contact-panel,
html.official-home-html[data-theme='light'] .terminal-card {
  border-color: rgba(22, 34, 54, 0.09);
}

html.official-home-html[data-theme='light'] .tag,
html.official-home-html[data-theme='light'] .contact-chip {
  background: rgba(16, 32, 51, 0.03);
}

html.official-home-html[data-theme='light'] .tag {
  color: #58708f;
}

html.official-home-html[data-theme='light'] .contact-link {
  color: var(--accent);
}

html.official-home-html[data-theme='light'] .contact-link:hover {
  color: var(--brand-hover);
  opacity: 1;
}

.skill-card p {
  margin: 0.65rem 0 0;
}

.skill-bar {
  position: relative;
  width: 100%;
  height: 5px;
  margin: 0.1rem 0 0.15rem;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 999px;
}

.skill-bar__fill {
  position: absolute;
  inset: 0;
  transform-origin: left;
  background: var(--accent);
}

.skill-card--metric {
  gap: 0.45rem;
  padding: 0 0 0.45rem;
  background: transparent;
  border: 0;
  box-shadow: none;
}

.skill-card--metric:hover {
  transform: none;
  background: transparent;
}

.skill-card__top h4 {
  margin: 0;
  font-size: 0.98rem;
  font-weight: 600;
  line-height: 1.4;
  color: var(--text);
}

.skill-card__top span {
  color: var(--stack-meta-text);
  font-size: 0.82rem;
}

.skill-card--primary .skill-bar__fill {
  background: var(--stack-primary-fill);
}

.skill-card--secondary .skill-bar__fill {
  background: var(--stack-secondary-fill);
}

html.official-home-html[data-theme='light'] .contact-card:hover {
  box-shadow: 0 18px 40px rgba(46, 67, 96, 0.12);
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}

.tag {
  padding: 0.12rem 0.24rem;
  border-radius: var(--radius);
  font-family: var(--font-mono);
  font-size: 0.68rem;
  color: #b6c0cf;
  background: rgba(255, 255, 255, 0.02);
}

.contact-section {
  text-align: center;
}

.contact-header {
  margin-bottom: 3rem;
}

.contact-section h2 {
  max-width: 20ch;
  margin: 0 auto 1rem;
  font-size: clamp(2rem, 4vw, 3.5rem);
}

.contact-subtitle {
  max-width: 32rem;
}

.contact-content {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(320px, 0.85fr);
  align-items: stretch;
  gap: 1.4rem;
  margin-bottom: 3rem;
}

.contact-primary {
  display: grid;
  grid-template-rows: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  min-height: 100%;
}

.contact-side {
  display: grid;
  grid-template-rows: minmax(0, 1fr) auto;
  gap: 0.85rem;
  min-height: 100%;
}

html.official-home-html[data-theme='light'] .contact-subtitle,
html.official-home-html[data-theme='light'] .section-heading__description {
  color: #556376;
}

.contact-card,
.contact-panel {
  border: 1px solid var(--border);
  border-radius: calc(var(--radius) + 2px);
  background: var(--bg-surface-strong);
  box-shadow: 0 18px 42px rgba(8, 12, 20, 0.18);
  text-align: left;
}

.contact-card:hover,
.contact-panel:hover {
  border-color: rgba(84, 199, 183, 0.18);
  background: var(--bg-surface-strong);
  box-shadow: 0 22px 48px rgba(8, 12, 20, 0.22);
  transform: translateY(-1px);
}

html.official-home-html[data-theme='light'] .contact-card,
html.official-home-html[data-theme='light'] .contact-panel {
  background: rgba(255, 255, 255, 0.96);
  box-shadow: 0 16px 36px rgba(46, 67, 96, 0.08);
}

html.official-home-html[data-theme='light'] .contact-card:hover,
html.official-home-html[data-theme='light'] .contact-panel:hover {
  border-color: rgba(15, 118, 110, 0.14);
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 20px 40px rgba(46, 67, 96, 0.12);
}

.contact-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem 1.55rem;
}

.contact-card h3,
.contact-panel__title,
.info-value {
  word-break: break-word;
}

.contact-card-meta {
  color: var(--accent);
  font-family: var(--font-mono);
  font-size: 0.74rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
}

.contact-card h3 {
  margin: 0 0 0.35rem;
  font-size: 1.18rem;
  font-weight: 600;
}

.contact-card p {
  margin: 0 0 1.05rem;
  color: var(--text-soft);
  font-size: 0.9rem;
  line-height: 1.55;
}

.contact-link {
  color: var(--accent);
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
}

.contact-link:hover {
  color: #fff;
  opacity: 0.92;
}

.contact-secondary {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.7rem;
}

.contact-extras {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.85rem;
  min-height: 100%;
}

.contact-panel {
  height: 100%;
  padding: 1.05rem 1.15rem;
}

.contact-panel--meta {
  padding-bottom: 0.95rem;
}

.contact-panel__title {
  margin-bottom: 0.8rem;
  color: var(--accent);
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.contact-chip-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.contact-chip {
  padding: 0.42rem 0.6rem;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: rgba(255, 255, 255, 0.04);
  color: var(--text-soft);
  font-size: 0.84rem;
  line-height: 1.4;
}

html.official-home-html[data-theme='light'] .contact-chip {
  border-color: rgba(22, 34, 54, 0.06);
  background: rgba(16, 32, 51, 0.04);
}

.contact-list {
  display: grid;
  gap: 0.65rem;
}

.contact-meta-list {
  display: grid;
  gap: 0.75rem;
}

.contact-meta-item {
  display: flex;
  align-items: flex-start;
  gap: 0.72rem;
  padding-bottom: 0.72rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.contact-meta-item:last-child {
  padding-bottom: 0;
  border-bottom: 0;
}

html.official-home-html[data-theme='light'] .contact-meta-item {
  border-bottom-color: rgba(22, 34, 54, 0.08);
}

.contact-list__item {
  display: flex;
  align-items: flex-start;
  gap: 0.62rem;
  color: var(--text-soft);
  font-size: 0.88rem;
  line-height: 1.5;
}

.contact-list__dot {
  width: 7px;
  height: 7px;
  margin-top: 0.45rem;
  border-radius: 50%;
  flex: 0 0 auto;
  background: var(--accent);
  box-shadow: 0 0 12px rgba(84, 199, 183, 0.34);
}

.info-marker {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex: 0 0 auto;
  background: var(--accent);
  box-shadow: 0 0 14px rgba(84, 199, 183, 0.32);
  margin-top: 0.45rem;
}

.info-label {
  color: var(--text-muted);
  font-size: 0.68rem;
  font-family: 'JetBrains Mono', monospace;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 0.2rem;
}

.info-value {
  color: var(--text);
  font-size: 0.92rem;
  font-weight: 600;
}

.app-footer {
  --app-footer-bg: var(--bg-surface);
  --app-footer-border: var(--border);
  --app-footer-ink: var(--text);
  --app-footer-muted: var(--text-muted);
  --app-footer-dot: rgba(151, 163, 182, 0.48);
  --app-footer-hover: var(--text);
  font-family: var(--font-mono);
  font-size: 0.78rem;
}

html.official-home-html[lang='en'] .hero h1 {
  max-width: 12ch;
  line-height: 0.98;
}

html.official-home-html[lang='en'] .hero h1 span {
  max-width: 24ch;
  font-size: clamp(1.08rem, 1.8vw, 1.28rem);
  font-weight: 400;
  line-height: 1.55;
}

html.official-home-html[lang='en'] .hero__summary,
html.official-home-html[lang='en'] .section-heading__description,
html.official-home-html[lang='en'] .contact-subtitle,
html.official-home-html[lang='en'] .skill-card p {
  line-height: 1.62;
}

html.official-home-html[lang='en'] .skill-card h4 {
  font-size: 1.02rem;
}

html.official-home-html[lang='en'] .nav-links,
html.official-home-html[lang='en'] .hero-badge,
html.official-home-html[lang='en'] .eyebrow,
html.official-home-html[lang='en'] .button,
html.official-home-html[lang='en'] .theme-toggle,
html.official-home-html[lang='en'] .lang-toggle,
html.official-home-html[lang='en'] .stack-group__header h3,
html.official-home-html[lang='en'] .app-footer {
  letter-spacing: 0.04em;
}

@keyframes pulse {

  0%,
  100% {
    transform: scale(1);
    opacity: 1;
  }

  50% {
    transform: scale(1.35);
    opacity: 0.5;
  }
}

@keyframes blink {

  0%,
  50% {
    opacity: 1;
  }

  50.01%,
  100% {
    opacity: 0;
  }
}

@keyframes floatCard {

  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-10px);
  }
}

@keyframes glowDrift {

  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }

  40% {
    transform: translate(14px, -10px) scale(1.05);
  }

  70% {
    transform: translate(-8px, 12px) scale(0.97);
  }
}

@keyframes mobile-menu-slide-in {
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0);
  }
}

@media (max-width: 768px) {
  html.official-home-html {
    --nav-height: 56px;
  }

  .site-nav {
    padding: 0;
  }

  .nav-wrapper {
    min-height: 0;
    height: var(--nav-height);
    padding: 0 16px;
    gap: 12px;
    align-items: center;
    flex-wrap: nowrap;
  }

  .brandmark {
    min-height: 2rem;
    flex: 1 1 auto;
    width: auto;
    justify-content: flex-start;
    font-size: 0.82rem;
    letter-spacing: 0.06em;
  }

  .app-brand-logo.brandmark {
    flex: 0 0 auto;
  }

  .nav-controls {
    display: flex;
    width: auto;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-left: 0;
    gap: 0.45rem;
  }

  .nav-links {
    display: none;
  }

  .nav-controls > .lang-toggle,
  .nav-controls > .theme-toggle {
    display: none;
  }

  .menu-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    padding: 0.5rem;
    border-radius: 0.625rem;
    color: var(--text-muted);
    flex: 0 0 auto;
    transition: color 180ms ease, background-color 180ms ease;
  }

  .menu-toggle:hover {
    background: rgba(84, 199, 183, 0.1);
    color: var(--text);
  }

  html.official-home-html[data-theme='light'] .menu-toggle:hover {
    background: #f3f6f9;
    color: #0b766d;
  }

  .menu-toggle svg,
  .mobile-menu__close svg {
    width: 1.5rem;
    height: 1.5rem;
    stroke: currentColor;
    fill: none;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .mobile-menu-layer {
    position: fixed;
    inset: 0;
    z-index: 120;
    display: block;
  }

  .mobile-menu-backdrop {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }

  .mobile-menu {
    position: fixed;
    inset: 0 0 0 auto;
    z-index: 121;
    display: block;
    width: min(17rem, 82vw);
    overflow-y: auto;
    border-left: 1px solid var(--border);
    background: rgba(14, 18, 28, 0.96);
    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.28);
    transform: translateX(0);
    animation: mobile-menu-slide-in 0.24s ease;
  }

  html.official-home-html[data-theme='light'] .mobile-menu {
    border-left-color: rgba(16, 32, 51, 0.12);
    background: rgba(255, 255, 255, 0.96);
    box-shadow: 0 18px 40px rgba(33, 49, 60, 0.18);
  }

  .mobile-menu__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.45rem;
    border-bottom: 1px solid var(--border);
    padding: 0.8rem 0.65rem 0.8rem 0.85rem;
  }

  html.official-home-html[data-theme='light'] .mobile-menu__header {
    border-bottom-color: rgba(16, 32, 51, 0.12);
  }

  .mobile-menu__header-tools {
    display: flex;
    min-width: 0;
    align-items: center;
    gap: 0.5rem;
  }

  .mobile-menu__close {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2.15rem;
    height: 2.15rem;
    padding: 0.42rem;
    border-radius: 0.625rem;
    color: var(--text-muted);
    transition: color 180ms ease, background-color 180ms ease;
  }

  .mobile-menu__close:hover {
    background: rgba(84, 199, 183, 0.1);
    color: var(--text);
  }

  html.official-home-html[data-theme='light'] .mobile-menu__close:hover {
    background: #f3f6f9;
    color: #0b766d;
  }

  .mobile-menu__links {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    padding: 0.5rem 1rem;
  }

  .mobile-menu__links button {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    width: 100%;
    min-height: 2.75rem;
    border-radius: 0.625rem;
    padding: 0.625rem 0.75rem;
    font-family: var(--font-sans);
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 1.75rem;
    text-align: left;
    color: var(--text-muted);
    transition: color 180ms ease, background-color 180ms ease;
  }

  .mobile-menu__links button svg {
    width: 1.25rem;
    height: 1.25rem;
    flex-shrink: 0;
    stroke: currentColor;
    fill: none;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .mobile-menu__links button:hover {
    background: rgba(84, 199, 183, 0.1);
    color: var(--text);
  }

  .mobile-menu__links button.is-active {
    color: var(--accent);
    background: rgba(84, 199, 183, 0.16);
  }

  html.official-home-html[data-theme='light'] .mobile-menu__links button {
    color: #5f6f79;
  }

  html.official-home-html[data-theme='light'] .mobile-menu__links button:hover {
    background: #f3f6f9;
    color: #172b35;
  }

  html.official-home-html[data-theme='light'] .mobile-menu__links button.is-active {
    background: #e2f1ee;
    color: #0b766d;
  }

  .mobile-lang-toggle,
  .mobile-theme-toggle {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    border: 1px solid var(--border);
    border-radius: var(--radius);
  }

  .mobile-lang-toggle {
    font-family: var(--font-mono);
    font-size: 0.78rem;
    letter-spacing: 0.06em;
  }

  .mobile-lang-toggle {
    flex: 0 0 auto;
  }

  .mobile-theme-toggle {
    flex: 0 0 auto;
  }

  html.official-home-html[data-theme='light'] .mobile-lang-toggle,
  html.official-home-html[data-theme='light'] .mobile-theme-toggle {
    background: rgba(255, 255, 255, 0.62);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.55);
  }

  .mobile-lang-toggle__item,
  .mobile-theme-toggle__item {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
    border-radius: calc(var(--radius) - 1px);
    color: var(--text-muted);
  }

  .mobile-lang-toggle__item {
    min-width: 2.35rem;
    padding: 0 0.5rem;
  }

  .mobile-theme-toggle__item {
    width: 2rem;
  }

  .mobile-theme-toggle__item svg {
    width: 1.05rem;
    height: 1.05rem;
    stroke: currentColor;
    fill: none;
    stroke-width: 1.8;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .mobile-lang-toggle__item.is-active,
  .mobile-theme-toggle__item.is-active {
    color: var(--text);
    background: rgba(255, 255, 255, 0.07);
  }

  html.official-home-html[data-theme='light'] .mobile-lang-toggle__item.is-active,
  html.official-home-html[data-theme='light'] .mobile-theme-toggle__item.is-active {
    background: rgba(255, 255, 255, 0.92);
    box-shadow:
      inset 0 0 0 1px rgba(15, 118, 110, 0.08),
      0 6px 16px rgba(64, 84, 112, 0.08);
  }

  .terminal-float-wrapper {
    display: none;
    animation: none;
  }

  .section {
    padding: 1.85rem 1rem 1.35rem;
  }

  html.official-home-html[data-theme='light'] .section::before {
    inset: 0.35rem 0.15rem 0;
    border-radius: 16px;
  }

  .hero {
    display: block;
    min-height: auto;
    padding-top: calc(2rem + var(--nav-height));
  }

  html.official-home-html[data-theme='light'] .hero.section::before {
    inset: calc(var(--nav-height) + 1.25rem) 0.15rem 0;
  }

  .hero__copy {
    width: 100%;
  }

  .hero-badge {
    display: inline-flex;
    max-width: 100%;
    flex-wrap: wrap;
    margin-bottom: 0.9rem;
    gap: 0.5rem;
    padding: 0.5rem 0.75rem;
    font-size: 0.72rem;
    line-height: 1.45;
  }

  .eyebrow {
    margin-bottom: 0.8rem;
    font-size: 0.9rem;
    letter-spacing: 0.08em;
  }

  .hero h1 {
    max-width: none;
    font-size: clamp(2.25rem, 12vw, 3.35rem);
    line-height: 0.98;
  }

  .hero h1 span {
    max-width: none;
    margin-top: 0.75rem;
    font-size: 0.96rem;
    line-height: 1.58;
  }

  .hero__summary {
    max-width: none;
    margin-top: 1rem;
    font-size: 0.94rem;
    line-height: 1.68;
  }

  .hero__actions {
    flex-direction: row;
    gap: 0.75rem;
    margin-top: 1.25rem;
  }

  .button {
    min-width: 0;
    flex: 1 1 0;
    padding: 0.9rem 1rem;
  }

  .terminal-card {
    display: none;
  }

  .section-heading {
    gap: 0.65rem;
    margin-bottom: 1.5rem;
    text-align: left;
  }

  .section-heading h2,
  .contact-section h2 {
    max-width: none;
    font-size: clamp(1.8rem, 9vw, 2.6rem);
  }

  .section-heading__description,
  .contact-subtitle {
    max-width: none;
    margin: 0;
    font-size: 0.96rem;
  }

  .stack-groups,
  .contact-content {
    gap: 1rem;
  }

  .stack-group {
    padding: 1rem 0.95rem 0.95rem;
  }

  .stack-group__header {
    margin-bottom: 0.9rem;
    padding-bottom: 0.65rem;
  }

  .stack-group__header::after {
    width: 3px;
    height: 24px;
  }

  .stack-group__header h3 {
    margin-left: 0.7rem;
    font-size: 1.22rem;
    line-height: 1.14;
  }

  .stack-grid {
    gap: 0.75rem;
  }

  .stack-grid,
  .contact-content,
  .contact-secondary,
  .contact-side,
  .contact-extras {
    grid-template-columns: 1fr;
  }

  .contact-content,
  .contact-primary,
  .contact-side {
    grid-template-columns: 1fr;
    grid-template-rows: none;
  }

  .skill-card {
    gap: 0.32rem;
    padding: 0 0 0.35rem;
  }

  .skill-card__top {
    align-items: flex-start;
    gap: 0.5rem;
  }

  .skill-card h4 {
    font-size: 0.94rem;
    line-height: 1.45;
  }

  .skill-card__top span {
    flex-shrink: 0;
    font-size: 0.76rem;
  }

  .skill-card p {
    font-size: 0.94rem;
    line-height: 1.65;
  }

  .skill-card--metric p {
    font-size: 0.75rem;
    line-height: 1.5;
  }

  .skill-bar {
    height: 4px;
    margin-top: 0.12rem;
  }

  .cases-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .case-card {
    width: 100%;
    min-width: 0;
    gap: 0.72rem;
    padding: 1rem;
  }

  .case-card__meta {
    align-items: flex-start;
    gap: 0.55rem 0.75rem;
    flex-wrap: wrap;
  }

  .case-type,
  .case-id {
    font-size: 0.64rem;
    line-height: 1.4;
  }

  .case-card h3 {
    font-size: 1.02rem;
    line-height: 1.35;
  }

  .case-details {
    gap: 0.55rem;
  }

  .case-detail {
    gap: 0.22rem;
    font-size: 0.82rem;
    line-height: 1.5;
  }

  .case-detail__label {
    font-size: 0.6rem;
  }

  .tag-list {
    gap: 0.45rem;
  }

  .tag {
    padding: 0.16rem 0.22rem;
    font-size: 0.7rem;
  }

  .contact-content {
    margin-bottom: 1.4rem;
  }

  .contact-primary {
    gap: 0.85rem;
  }

  .contact-card,
  .contact-panel {
    padding: 1rem;
  }

  .contact-card h3 {
    font-size: 1.08rem;
  }

  .contact-card p,
  .contact-list__item,
  .info-value {
    font-size: 0.86rem;
  }

  .contact-chip {
    padding: 0.36rem 0.52rem;
    font-size: 0.8rem;
  }

  .contact-meta-item {
    gap: 0.6rem;
    padding-bottom: 0.6rem;
  }

  .cases-grid {
    grid-template-columns: 1fr;
  }

  .case-card {
    padding: 1.2rem;
  }

}

/* ── 案例网格 ─────────────────────────────────────── */

.cases-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.2rem;
}

.case-card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.68rem;
  padding: 1.35rem;
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
}

.case-card:hover {
  border-color: rgba(20, 86, 217, 0.1);
  box-shadow: 0 14px 30px rgba(17, 24, 39, 0.07);
}

html.official-home-html[data-theme='light'] .case-card:hover {
  border-color: rgba(20, 86, 217, 0.1);
  box-shadow: 0 14px 30px rgba(17, 24, 39, 0.07);
}

.case-card__meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.case-type {
  color: #7d8796;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.case-id {
  color: #97a0ad;
  font-family: var(--font-mono);
  font-size: 0.68rem;
  opacity: 1;
}

.case-card h3 {
  margin: 0;
  font-size: 1.08rem;
  font-weight: 600;
  line-height: 1.24;
}

.case-details {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  flex: 1;
}

.case-detail {
  display: grid;
  gap: 0.16rem;
  font-size: 0.82rem;
  line-height: 1.42;
}

.case-detail__label {
  color: #8b94a3;
  font-family: var(--font-mono);
  font-size: 0.6rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.case-detail__value {
  color: #55606e;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

html.official-home-html[data-theme='light'] .case-detail__value {
  color: #5b6470;
}

.case-result {
  color: #0f9f6e;
  font-weight: 500;
}

html.official-home-html[data-theme='light'] .case-result {
  color: var(--success);
}

html.official-home-html[lang='en'] .case-detail {
  grid-template-columns: 7rem 1fr;
}

.skill-bar {
  background: var(--stack-bar-bg);
}

.skill-card--metric p {
  margin: 0;
  color: var(--stack-metric-text);
  font-size: 0.78rem;
  line-height: 1.55;
}

@media (max-width: 768px) {
  .stack-groups {
    grid-template-columns: 1fr;
    gap: 1.75rem;
  }

  .stack-group__header h3 {
    font-size: 1.22rem;
  }
}

@media (max-width: 520px) {
  .nav-controls {
    align-items: center;
  }

  .lang-toggle,
  .theme-toggle {
    width: auto;
  }

  .hero {
    padding-top: calc(1.7rem + var(--nav-height));
  }

  .hero-badge {
    width: 100%;
  }

  .hero__actions {
    flex-direction: column;
  }

  .button {
    width: 100%;
  }

  .section-heading,
  .contact-header {
    margin-bottom: 1.25rem;
  }

  .stack-groups {
    gap: 1rem;
  }

  .stack-group {
    padding: 0.95rem 0.85rem 0.85rem;
  }

  .stack-group__header {
    margin-bottom: 0.8rem;
  }

  .stack-group__header::after {
    height: 22px;
  }

  .stack-group__header h3 {
    margin-left: 0.62rem;
    font-size: 1.08rem;
  }

  .stack-grid {
    gap: 0.65rem;
  }

  .cases-grid {
    grid-template-columns: 1fr;
    gap: 0.85rem;
  }

  .case-card {
    width: 100%;
    gap: 0.68rem;
    padding: 0.95rem 0.85rem;
  }

  .case-card h3 {
    font-size: 0.96rem;
  }

  .case-type,
  .case-id,
  .case-detail__label {
    letter-spacing: 0.03em;
  }

  .case-detail {
    font-size: 0.78rem;
  }

  .tag-list {
    gap: 0.4rem;
  }

  .tag {
    font-size: 0.68rem;
  }

  .skill-card__top {
    gap: 0.45rem;
  }

  .skill-card__top h4 {
    font-size: 0.9rem;
  }

  .skill-card__top span {
    font-size: 0.72rem;
  }

  .skill-card--metric p {
    font-size: 0.72rem;
  }

  .stack-group,
  .case-card,
  .contact-card,
  .contact-panel {
    border-radius: calc(var(--radius) + 1px);
  }
}
`,x="home-reveal",y=e=>({"--reveal-delay":`${80*e}ms`}),_={light:"#f5efe7",dark:"#0b1020"},k=[{value:"light",icon:(0,t.jsxs)("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[(0,t.jsx)("circle",{cx:"12",cy:"12",r:"4.25"}),(0,t.jsx)("path",{d:"M12 1.75v2.5M12 19.75v2.5M4.75 4.75l1.8 1.8M17.45 17.45l1.8 1.8M1.75 12h2.5M19.75 12h2.5M4.75 19.25l1.8-1.8M17.45 6.55l1.8-1.8"})]})},{value:"dark",icon:(0,t.jsx)("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:(0,t.jsx)("path",{d:"M20.08 14.64A8.75 8.75 0 1 1 9.36 3.92a7.1 7.1 0 0 0 10.72 10.72Z"})})}],w=[{value:"zh",label:"中",ariaLabelKey:"languageLabelZh"},{value:"en",label:"EN",ariaLabelKey:"languageLabelEn"}],j={hero:"M3 12l9-8 9 8M5 10.5V20h5v-5h4v5h5v-9.5",cases:"M4 7a2 2 0 0 1 2-2h3l1.5 2H18a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7zM8 13h8M8 16h5",stack:"M12 3l8 4.5-8 4.5-8-4.5L12 3zM4 12l8 4.5 8-4.5M4 16.5l8 4.5 8-4.5",contact:"M4 6h16v12H4V6zM4 7l8 6 8-6"};function S({eyebrow:e,title:a,description:r,delay:i=0}){return(0,t.jsxs)("div",{className:`${x} section-heading`,style:y(i),children:[(0,t.jsx)("p",{className:"eyebrow",children:e}),(0,t.jsx)("h2",{children:a}),(0,t.jsx)("p",{className:"section-heading__description",children:r})]})}function N({className:e,ariaLabel:a,options:r,currentValue:i,onChange:o}){return(0,t.jsx)("div",{className:e,"aria-label":a,children:r.map(a=>(0,t.jsx)("button",{type:"button",className:`${e}__item ${i===a.value?"is-active":""}`,onClick:()=>o(a.value),"aria-label":a.ariaLabel,"aria-pressed":i===a.value,children:a.icon||a.label},a.value))})}function z({t:e,lang:a}){return(0,t.jsxs)("aside",{className:`${x} terminal-card`,"aria-label":e.terminalLabel,style:y(1),children:[(0,t.jsxs)("div",{className:"terminal-card__chrome",children:[(0,t.jsx)("span",{className:"mac-dot mac-dot--red"}),(0,t.jsx)("span",{className:"mac-dot mac-dot--yellow"}),(0,t.jsx)("span",{className:"mac-dot mac-dot--green"})]}),(0,t.jsxs)("div",{className:"terminal-card__body",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:"prompt",children:"$"})," ",e.terminalCommands.whoami]}),(0,t.jsx)("div",{className:"terminal-output",children:e.terminal.whoami}),(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:"prompt",children:"$"})," ",e.terminalCommands.commits]}),e.terminal.commits.map(e=>{let[a,...r]=e.split(" ");return(0,t.jsxs)("div",{className:"terminal-output terminal-output--commit",children:[(0,t.jsx)("span",{className:"terminal-hash",children:a})," ",r.join(" ")]},e)}),(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:"prompt",children:"$"})," ",e.terminalCommands.focus]}),(0,t.jsx)("div",{className:"terminal-output",children:e.terminal.focus}),(0,t.jsxs)("div",{className:"terminal-line",children:[(0,t.jsx)("span",{className:"prompt",children:"$"})," ",(0,t.jsx)("span",{className:"cursor"})]})]})]},`terminal-${a}`)}function C({project:e,lang:a,t:r,delay:i}){let o=e[a];return(0,t.jsxs)("article",{className:`${x} case-card`,style:y(i),children:[(0,t.jsxs)("div",{className:"case-card__meta",children:[(0,t.jsx)("span",{className:"case-type",children:o.caseType}),(0,t.jsx)("span",{className:"case-id",children:e.id})]}),(0,t.jsx)("h3",{children:o.title}),(0,t.jsxs)("div",{className:"case-details",children:[(0,t.jsxs)("div",{className:"case-detail",children:[(0,t.jsx)("span",{className:"case-detail__label",children:r.caseLabels.problem}),(0,t.jsx)("span",{className:"case-detail__value",children:o.problem})]}),(0,t.jsxs)("div",{className:"case-detail",children:[(0,t.jsx)("span",{className:"case-detail__label",children:r.caseLabels.role}),(0,t.jsx)("span",{className:"case-detail__value",children:o.role})]}),(0,t.jsxs)("div",{className:"case-detail case-detail--result",children:[(0,t.jsx)("span",{className:"case-detail__label",children:r.caseLabels.result}),(0,t.jsx)("span",{className:"case-detail__value case-result",children:o.result})]})]}),(0,t.jsx)("div",{className:"tag-list",children:e.tags.map(e=>(0,t.jsx)("span",{className:"tag",children:e},e))})]})}function T({group:e,groupIndex:a,delay:r}){return(0,t.jsxs)("div",{className:`${x} stack-group`,style:y(r),children:[(0,t.jsx)("div",{className:"stack-group__header",children:(0,t.jsx)("h3",{children:e.title})}),(0,t.jsx)("div",{className:"stack-grid",children:e.items.map(r=>(0,t.jsxs)("article",{className:`skill-card skill-card--metric ${0===a?"skill-card--primary":"skill-card--secondary"}`,children:[(0,t.jsxs)("div",{className:"skill-card__top",children:[(0,t.jsx)("h4",{children:r.name}),(0,t.jsx)("span",{children:r.level})]}),(0,t.jsx)("div",{className:"skill-bar",children:(0,t.jsx)("span",{className:"skill-bar__fill",style:{transform:`scaleX(${parseFloat(r.level)/100})`}})}),(0,t.jsx)("p",{children:r.subtitle})]},`${e.title}-${r.name}`))})]})}function R({meta:e,title:a,description:r,href:i,children:o,external:n=!1,delay:l}){return(0,t.jsxs)("div",{className:`${x} contact-card`,style:y(l),children:[(0,t.jsx)("div",{className:"contact-card-meta",children:e}),(0,t.jsx)("h3",{children:a}),(0,t.jsx)("p",{children:r}),(0,t.jsx)("a",{href:i,className:"contact-link",target:n?"_blank":void 0,rel:n?"noreferrer":void 0,children:o})]})}e.s(["default",0,function(){let e=(0,b.getConfig)(),i=e.site.url,n=`${e.site.url}/logo.svg`,s=(0,m.useRef)(null),L=(0,m.useRef)(null),F=(0,m.useRef)(null),E=(0,m.useRef)(null),M=(0,m.useRef)(null),A=(0,m.useMemo)(()=>({hero:L,cases:F,stack:E,contact:M}),[]),I=(0,m.useRef)("hero"),[$,P]=(0,m.useState)("hero"),[D,O]=(0,m.useState)("zh"),[H,B]=(0,f.default)({fallbackTheme:"dark"}),[G,U]=(0,m.useState)(!1),q=u[D],W=k.map(e=>({...e,ariaLabel:"light"===e.value?q.themeLight:q.themeDark})),V=w.map(e=>({...e,ariaLabel:q[e.ariaLabelKey]})),X={"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":`${i}#webpage`,url:i,name:u.zh.pageTitle,description:u.zh.metaDesc,isPartOf:{"@id":`${i}#website`},about:{"@id":`${i}#person`},inLanguage:["zh-CN","en"]},{"@type":"WebSite","@id":`${i}#website`,url:i,name:e.site.name,description:u.zh.metaDesc,inLanguage:["zh-CN","en"],publisher:{"@id":`${i}#person`}},{"@type":"Person","@id":`${i}#person`,name:e.author.name,url:i,description:u.zh.metaDesc,image:n,jobTitle:"前端架构师",worksFor:{"@type":"Organization",name:e.site.name},sameAs:[e.social.github],email:e.social.email,homeLocation:{"@type":"Place",name:e.social.location}}]};(0,m.useEffect)(()=>{let e=document.documentElement,t=document.body;e.classList.add("official-home-html"),t.classList.add("official-home-body");let a=requestAnimationFrame(()=>{e.classList.remove("theme-preload")});return()=>{cancelAnimationFrame(a),e.classList.remove("official-home-html"),e.classList.remove("theme-preload"),t.classList.remove("official-home-body"),e.removeAttribute("data-theme")}},[]),(0,m.useEffect)(()=>{let e=window.requestAnimationFrame(()=>{let e=localStorage.getItem("lang");("en"===e||"zh"===e)&&O(e)});return()=>{window.cancelAnimationFrame(e)}},[]),(0,m.useEffect)(()=>{document.documentElement.lang=D},[D]),(0,m.useEffect)(()=>{let e=s.current;if(!e)return;let t=Array.from(e.querySelectorAll(`.${x}`));if(!t.length)return;let a=window.matchMedia("(prefers-reduced-motion: reduce)"),r=[],i=e=>{e.classList.add("is-reveal-complete")},o=e=>{if(e.classList.contains("is-visible")||(e.classList.add("is-visible"),a.matches))return void i(e);let t=Number.parseFloat(getComputedStyle(e).getPropertyValue("--reveal-delay"))||0;r.push(window.setTimeout(()=>i(e),t+620))};if(a.matches||!("IntersectionObserver"in window))return t.forEach(o),()=>{r.forEach(e=>window.clearTimeout(e))};let n=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(o(e.target),n.unobserve(e.target))})},{rootMargin:"0px 0px -8% 0px",threshold:.14});return t.forEach(e=>n.observe(e)),()=>{n.disconnect(),r.forEach(e=>window.clearTimeout(e))}},[D]);let Y=e=>{O(e),localStorage.setItem("lang",e)},K=e=>{B(e)},Z=(0,m.useCallback)(e=>{let t=A[e]?.current;if(!t)return;let a=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--nav-height"),10)||72,r=t.getBoundingClientRect().top+window.scrollY-a-24;window.scrollTo({top:Math.max(0,r),behavior:"smooth"}),U(!1)},[A,U]),J=(0,m.useCallback)(()=>{Z("hero")},[Z]),Q=(0,m.useCallback)(()=>{Z("cases")},[Z]),ee=(0,m.useCallback)(()=>{Z("contact")},[Z]),et=(0,m.useCallback)(()=>{let e=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--nav-height"),10)||72,t=window.scrollY+e+48,a=p.map(e=>({key:e.key,node:A[e.key]?.current})).filter(e=>e.node),r=a[0]?.key||"hero";return a.forEach(e=>{e.node.offsetTop<=t&&(r=e.key)}),r},[A]),ea=(0,m.useCallback)(()=>{let e=et();I.current!==e&&(I.current=e,P(e))},[et]);(0,m.useEffect)(()=>{let e=null,t=window.location.hash.replace("#","");t&&A[t]?.current?(I.current=t,e=window.requestAnimationFrame(()=>{P(t),Z(t)})):(I.current=et(),ea());let a=()=>{ea()},r=()=>{let e=window.location.hash.replace("#","");if(e&&A[e]?.current){I.current=e,P(e),Z(e);return}ea()};return window.addEventListener("scroll",a,{passive:!0}),window.addEventListener("hashchange",r),()=>{null!==e&&window.cancelAnimationFrame(e),window.removeEventListener("scroll",a),window.removeEventListener("hashchange",r)}},[et,Z,A,ea]);let er=(0,m.useMemo)(()=>p.map(e=>({label:e[D],onClick:()=>Z(e.key)})),[D,Z]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.default,{children:[(0,t.jsx)("title",{children:q.pageTitle}),(0,t.jsx)("meta",{name:"description",content:q.metaDesc}),(0,t.jsx)("meta",{name:"keywords",content:e.site.keywords}),(0,t.jsx)("meta",{name:"author",content:e.author.name}),(0,t.jsx)("meta",{name:"robots",content:"index, follow"}),(0,t.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,t.jsx)("link",{rel:"canonical",href:i}),(0,t.jsx)("link",{rel:"alternate",hrefLang:"zh-CN",href:i}),(0,t.jsx)("link",{rel:"alternate",hrefLang:"en",href:i}),(0,t.jsx)("link",{rel:"alternate",hrefLang:"x-default",href:i}),(0,t.jsx)("meta",{property:"og:title",content:q.pageTitle}),(0,t.jsx)("meta",{property:"og:description",content:q.metaDesc}),(0,t.jsx)("meta",{property:"og:type",content:"website"}),(0,t.jsx)("meta",{property:"og:url",content:i}),(0,t.jsx)("meta",{property:"og:site_name",content:e.site.name}),(0,t.jsx)("meta",{property:"og:locale",content:"en"===D?"en_US":"zh_CN"}),(0,t.jsx)("meta",{property:"og:image",content:n}),(0,t.jsx)("meta",{property:"og:image:alt",content:`${e.site.name} logo`}),(0,t.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,t.jsx)("meta",{name:"twitter:title",content:q.pageTitle}),(0,t.jsx)("meta",{name:"twitter:description",content:q.metaDesc}),(0,t.jsx)("meta",{name:"twitter:image",content:n}),(0,t.jsx)("meta",{name:"twitter:image:alt",content:`${e.site.name} logo`}),(0,t.jsx)("meta",{name:"theme-color",content:_[H]}),(0,t.jsx)("meta",{name:"theme-color",media:"(prefers-color-scheme: light)",content:_.light}),(0,t.jsx)("meta",{name:"theme-color",media:"(prefers-color-scheme: dark)",content:_.dark}),(0,t.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(X)}})]}),(0,t.jsx)(a.default,{id:v.__hash,children:v}),(0,t.jsxs)("div",{ref:s,className:`site-shell official-homepage ${o.variable} ${l.variable} ${c.variable}`,children:[(0,t.jsx)("div",{"aria-hidden":"true",className:"noise-layer"}),(0,t.jsx)("header",{className:"site-nav",children:(0,t.jsxs)("div",{className:"nav-wrapper",children:[(0,t.jsx)("button",{type:"button",onClick:J,className:"app-brand-logo brandmark",children:(0,t.jsx)(h.default,{className:"app-brand-logo__image",theme:H,title:q.brand,shimmer:!1})}),(0,t.jsxs)("div",{className:"nav-controls",children:[(0,t.jsx)("nav",{"aria-label":"Primary",className:"nav-links",children:p.map(e=>(0,t.jsx)("button",{type:"button",onClick:()=>Z(e.key),className:($===e.key?"is-active":"")||"",children:e[D]},e.key))}),(0,t.jsx)("button",{type:"button","aria-expanded":G,"aria-controls":"home-mobile-menu","aria-label":G?q.menuClose:q.menuOpen,onClick:()=>U(e=>!e),className:"menu-toggle",children:(0,t.jsx)("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:(0,t.jsx)("path",{d:"M4 6h16M4 12h16m-7 6h7"})})}),(0,t.jsx)(N,{className:"theme-toggle",ariaLabel:q.themeSwitcher,options:W,currentValue:H,onChange:K}),(0,t.jsx)(N,{className:"lang-toggle",ariaLabel:q.languageSwitcher,options:V,currentValue:D,onChange:Y})]})]})}),G&&(0,t.jsxs)("div",{className:"mobile-menu-layer",children:[(0,t.jsx)("button",{type:"button","aria-label":q.menuClose,onClick:()=>U(!1),className:"mobile-menu-backdrop"}),(0,t.jsxs)("aside",{id:"home-mobile-menu","aria-label":q.menuLabel,className:"mobile-menu",children:[(0,t.jsxs)("div",{className:"mobile-menu__header",children:[(0,t.jsxs)("div",{className:"mobile-menu__header-tools",children:[(0,t.jsx)(N,{className:"mobile-theme-toggle",ariaLabel:q.themeSwitcher,options:W,currentValue:H,onChange:K}),(0,t.jsx)(N,{className:"mobile-lang-toggle",ariaLabel:q.languageSwitcher,options:V,currentValue:D,onChange:Y})]}),(0,t.jsx)("button",{type:"button","aria-label":q.menuClose,onClick:()=>U(!1),className:"mobile-menu__close",children:(0,t.jsx)("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:(0,t.jsx)("path",{d:"M6 18L18 6M6 6l12 12"})})})]}),(0,t.jsx)("nav",{"aria-label":q.menuLabel,className:"mobile-menu__links",children:p.map(e=>(0,t.jsxs)("button",{type:"button",onClick:()=>Z(e.key),className:($===e.key?"is-active":"")||"",children:[(0,t.jsx)("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:(0,t.jsx)("path",{d:j[e.key]})}),(0,t.jsx)("span",{children:e[D]})]},e.key))})]})]}),(0,t.jsxs)("main",{children:[(0,t.jsxs)("section",{id:"hero",ref:L,className:"hero section",children:[(0,t.jsx)("div",{"aria-hidden":"true",className:"hero__glow hero__glow--cyan"}),(0,t.jsxs)("div",{style:y(0),className:`${x} hero__copy`,children:[(0,t.jsxs)("div",{className:"hero-badge",children:[(0,t.jsx)("span",{className:"hero-badge__dot"}),(0,t.jsx)("span",{children:q.badge})]}),(0,t.jsx)("p",{className:"eyebrow",children:q.eyebrow}),(0,t.jsxs)("h1",{children:[q.brand,(0,t.jsx)("span",{children:q.heroSubtitle})]}),(0,t.jsx)("p",{className:"hero__summary",children:q.heroSummary}),(0,t.jsxs)("div",{className:"hero__actions",children:[(0,t.jsx)("button",{type:"button",onClick:Q,className:"button button--primary",children:q.ctaPrimary}),(0,t.jsx)("button",{onClick:ee,className:"button button--ghost",children:q.ctaSecondary})]})]},`hero-copy-${D}`),(0,t.jsx)("div",{className:"terminal-float-wrapper",children:(0,t.jsx)(z,{t:q,lang:D})})]}),(0,t.jsxs)("section",{id:"cases",ref:F,className:"section",children:[(0,t.jsx)(S,{eyebrow:q.sections.cases,title:q.casesHeading,description:q.casesDescription}),(0,t.jsx)("div",{className:"cases-grid",children:g.map((e,a)=>(0,t.jsx)(C,{project:e,lang:D,t:q,delay:a+1},e.id))})]}),(0,t.jsxs)("section",{id:"stack",ref:E,className:"section",children:[(0,t.jsx)(S,{eyebrow:q.sections.stack,title:q.stackHeading,description:q.stackDescription}),(0,t.jsx)("div",{className:"stack-groups",children:q.techGroups.map((e,a)=>(0,t.jsx)(T,{group:e,groupIndex:a,delay:a+1},`stack-group-${a}-${D}`))})]}),(0,t.jsxs)("section",{id:"contact",ref:M,className:"section contact-section section-heading",children:[(0,t.jsxs)("div",{style:y(0),className:`${x} contact-header`,children:[(0,t.jsx)("p",{className:"eyebrow",children:q.contact.eyebrow}),(0,t.jsx)("h2",{children:q.contact.title}),(0,t.jsx)("p",{className:"contact-subtitle",children:q.contact.subtitle})]}),(0,t.jsxs)("div",{className:"contact-content",children:[(0,t.jsxs)("div",{className:"contact-primary",children:[(0,t.jsx)(R,{meta:q.contact.emailMeta,title:q.contact.emailCard.title,description:q.contact.emailCard.description,href:`mailto:${q.contact.emailCard.link}`,delay:1,children:q.contact.emailCard.link}),(0,t.jsx)(R,{meta:q.contact.githubMeta,title:q.contact.githubCard.title,description:q.contact.githubCard.description,href:`https://${q.contact.githubCard.link}`,external:!0,delay:2,children:q.contact.githubCard.link})]}),(0,t.jsxs)("div",{className:"contact-side",children:[(0,t.jsxs)("div",{className:"contact-extras",children:[(0,t.jsxs)("div",{style:y(3),className:`${x} contact-panel`,children:[(0,t.jsx)("div",{className:"contact-panel__title",children:q.contact.fitTitle}),(0,t.jsx)("div",{className:"contact-chip-list",children:q.contact.fitItems.map(e=>(0,t.jsx)("span",{className:"contact-chip",children:e},e))})]}),(0,t.jsxs)("div",{style:y(4),className:`${x} contact-panel`,children:[(0,t.jsx)("div",{className:"contact-panel__title",children:q.contact.workflowTitle}),(0,t.jsx)("div",{className:"contact-list",children:q.contact.workflowItems.map(e=>(0,t.jsxs)("div",{className:"contact-list__item",children:[(0,t.jsx)("span",{className:"contact-list__dot"}),(0,t.jsx)("span",{children:e})]},e))})]})]}),(0,t.jsx)("div",{className:"contact-secondary",children:(0,t.jsxs)("div",{style:y(5),className:`${x} contact-panel contact-panel--meta`,children:[(0,t.jsx)("div",{className:"contact-panel__title",children:"Meta"}),(0,t.jsxs)("div",{className:"contact-meta-list",children:[(0,t.jsxs)("div",{className:"contact-meta-item",children:[(0,t.jsx)("span",{className:"info-marker"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"info-label",children:q.contact.locationLabel}),(0,t.jsx)("div",{className:"info-value",children:q.contact.location})]})]}),(0,t.jsxs)("div",{className:"contact-meta-item",children:[(0,t.jsx)("span",{className:"info-marker"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"info-label",children:q.contact.timezoneLabel}),(0,t.jsx)("div",{className:"info-value",children:q.contact.timezone})]})]}),(0,t.jsxs)("div",{className:"contact-meta-item",children:[(0,t.jsx)("span",{className:"info-marker"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"info-label",children:q.contact.statusLabel}),(0,t.jsx)("div",{className:"info-value",children:q.contact.status})]})]})]})]})})]})]})]})]}),(0,t.jsx)(d.default,{navLinks:er})]})]})}],10477)},21899,(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",()=>e.r(10477)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push(["/"])})}]);