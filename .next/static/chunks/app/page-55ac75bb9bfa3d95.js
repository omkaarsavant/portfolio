(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5173:function(e,t,a){Promise.resolve().then(a.bind(a,4412))},4412:function(e,t,a){"use strict";a.r(t),a.d(t,{ButtonShootingStarBorder:function(){return U},InputBorderSpotlight:function(){return J},LampDemo:function(){return Q},ShootingStarsAndStarsBackgroundDemo:function(){return $},default:function(){return ei}});var s=a(7437),r=a(8059),l=a.n(r),n=a(2265),i=a(1871),o=a(847),c=a(9107);let d=e=>{let{titleComponent:t,children:a}=e,r=(0,n.useRef)(null),{scrollYProgress:l}=(0,i.v)({target:r}),[c,d]=n.useState(!1);n.useEffect(()=>{let e=()=>{d(window.innerWidth<=768)};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]);let u=(0,o.H)(l,[0,1],[20,0]),h=(0,o.H)(l,[0,1],c?[.7,.9]:[1.05,1]),f=(0,o.H)(l,[0,1],[0,-100]);return(0,s.jsx)("div",{className:"h-[40rem] sm:h-[50rem] md:h-[60rem] flex items-center justify-center relative p-4 sm:p-10 md:p-20",ref:r,children:(0,s.jsxs)("div",{className:"py-10 md:py-20 w-full relative",style:{perspective:"1000px"},children:[(0,s.jsx)(x,{translate:f,titleComponent:t}),(0,s.jsx)(m,{rotate:u,translate:f,scale:h,children:a})]})})},x=e=>{let{translate:t,titleComponent:a}=e;return(0,s.jsx)(c.E.div,{style:{translateY:t},className:"max-w-5xl mx-auto text-center",children:a})},m=e=>{let{rotate:t,scale:a,children:r}=e;return(0,s.jsx)(c.E.div,{style:{rotateX:t,scale:a,boxShadow:"0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003"},className:"max-w-5xl mt-4 sm:mt-8 md:mt-12 mx-auto h-[20rem] sm:h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-2 sm:p-4 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl",children:(0,s.jsx)("div",{className:"h-full w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 p-2 sm:p-4 md:p-6",children:r})})};var u=a(6648),h=a(7138),f=a(30),g=a(6164);function p(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,g.m6)((0,f.W)(t))}var b=a(1905),j=a(8147),v=a(2966),w=a(2728);let y=(e,t)=>{(0,n.useEffect)(()=>{let a=a=>{!e.current||e.current.contains(a.target)||t(a)};return document.addEventListener("mousedown",a),document.addEventListener("touchstart",a),()=>{document.removeEventListener("mousedown",a),document.removeEventListener("touchstart",a)}},[e,t])},N=(0,n.createContext)({onCardClose:()=>{},currentIndex:0}),k=e=>{let{items:t,initialScroll:a=0}=e,r=n.useRef(null),[l,i]=n.useState(!1),[o,d]=n.useState(!0),[x,m]=(0,n.useState)(0);(0,n.useEffect)(()=>{r.current&&(r.current.scrollLeft=a,u())},[a]);let u=()=>{if(r.current){let{scrollLeft:e,scrollWidth:t,clientWidth:a}=r.current;i(e>0),d(e<t-a)}},h=()=>window&&window.innerWidth<768;return(0,s.jsx)(N.Provider,{value:{onCardClose:e=>{if(r.current){let t=h()?230:384,a=h()?4:8;r.current.scrollTo({left:(t+a)*(e+1),behavior:"smooth"}),m(e)}},currentIndex:x},children:(0,s.jsxs)("div",{className:"relative w-full",children:[(0,s.jsxs)("div",{className:"flex w-full overflow-x-scroll overscroll-x-auto py-10 md:py-20 scroll-smooth [scrollbar-width:none]",ref:r,onScroll:u,children:[(0,s.jsx)("div",{className:p("absolute right-0  z-[1000] h-auto  w-[5%] overflow-hidden bg-gradient-to-l")}),(0,s.jsx)("div",{className:p("flex flex-row justify-start gap-4 pl-4","max-w-7xl mx-auto"),children:t.map((e,t)=>(0,s.jsx)(c.E.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0,transition:{duration:.5,delay:.2*t,ease:"easeOut",once:!0}},className:"last:pr-[5%] md:last:pr-[33%]  rounded-3xl",children:e},"card"+t))})]}),(0,s.jsxs)("div",{className:"flex justify-end gap-2 mr-10",children:[(0,s.jsx)("button",{className:"relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50",onClick:()=>{r.current&&r.current.scrollBy({left:-300,behavior:"smooth"})},disabled:!l,children:(0,s.jsx)(b.Z,{className:"h-6 w-6 text-gray-500"})}),(0,s.jsx)("button",{className:"relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50",onClick:()=>{r.current&&r.current.scrollBy({left:300,behavior:"smooth"})},disabled:!o,children:(0,s.jsx)(j.Z,{className:"h-6 w-6 text-gray-500"})})]})]})})},E=e=>{let{card:t,index:a,layout:r=!1}=e,[l,i]=(0,n.useState)(!1),o=(0,n.useRef)(null),{onCardClose:d,currentIndex:x}=(0,n.useContext)(N);(0,n.useEffect)(()=>{function e(e){"Escape"===e.key&&m()}return l?document.body.style.overflow="hidden":document.body.style.overflow="auto",window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[l]),y(o,()=>m());let m=()=>{i(!1),d(a)};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(w.M,{children:l&&(0,s.jsxs)("div",{className:"fixed inset-0 h-screen z-50 overflow-auto",children:[(0,s.jsx)(c.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0"}),(0,s.jsxs)(c.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},ref:o,layoutId:r?"card-".concat(t.title):void 0,className:"max-w-5xl mx-auto bg-white dark:bg-neutral-900 h-fit  z-[60] my-10 p-4 md:p-10 rounded-3xl font-sans relative",children:[(0,s.jsx)("button",{className:"sticky top-4 h-8 w-8 right-0 ml-auto bg-black dark:bg-white rounded-full flex items-center justify-center",onClick:m,children:(0,s.jsx)(v.Z,{className:"h-6 w-6 text-neutral-100 dark:text-neutral-900"})}),(0,s.jsx)(c.E.p,{layoutId:r?"category-".concat(t.title):void 0,className:"text-base font-medium text-black dark:text-white",children:t.category}),(0,s.jsx)(c.E.p,{layoutId:r?"title-".concat(t.title):void 0,className:"text-2xl md:text-5xl font-semibold text-neutral-700 mt-4 dark:text-white",children:t.title}),(0,s.jsx)("div",{className:"py-10",children:t.content})]})]})}),(0,s.jsxs)(c.E.button,{layoutId:r?"card-".concat(t.title):void 0,className:"rounded-3xl bg-gray-100 dark:bg-neutral-900 h-80 w-56 md:h-[40rem] md:w-96 overflow-hidden flex flex-col items-start justify-start relative z-10",children:[(0,s.jsx)("div",{className:"absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none"}),(0,s.jsxs)("div",{className:"relative z-40 p-8",children:[(0,s.jsx)(c.E.p,{layoutId:r?"category-".concat(t.category):void 0,className:"text-white text-sm md:text-base font-medium font-sans text-left",children:t.category}),(0,s.jsx)(c.E.p,{layoutId:r?"title-".concat(t.title):void 0,className:"text-white text-xl md:text-3xl font-semibold max-w-xs text-left [text-wrap:balance] font-sans mt-2",children:t.title})]}),(0,s.jsx)(C,{src:t.src,alt:t.title,fill:!0,className:"object-cover absolute z-10 inset-0"})]})]})},C=e=>{let{height:t,width:a,src:r,className:l,alt:i,...o}=e,[c,d]=(0,n.useState)(!0);return(0,s.jsx)(u.default,{className:p("transition duration-300",c?"blur-sm":"blur-0",l),onLoad:()=>d(!1),src:r,width:a,height:t,loading:"lazy",decoding:"async",blurDataURL:"string"==typeof r?r:void 0,alt:i||"Background of a beautiful view",...o})},_=e=>{let{words:t,duration:a=1e3,className:r}=e,[l,i]=(0,n.useState)(t[0]),[o,d]=(0,n.useState)(!1),x=(0,n.useCallback)(()=>{i(t[t.indexOf(l)+1]||t[0]),d(!0)},[l,t]);return(0,n.useEffect)(()=>{o||setTimeout(()=>{x()},a)},[o,a,x]),(0,s.jsx)(w.M,{onExitComplete:()=>{d(!1)},children:(0,s.jsx)(c.E.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{type:"spring",stiffness:100,damping:10},exit:{opacity:0,y:-40,x:40,filter:"blur(8px)",scale:2,position:"absolute"},className:p("z-10 inline-block relative text-left text-neutral-900 dark:text-neutral-100 px-2",r),children:l.split("").map((e,t)=>(0,s.jsx)(c.E.span,{initial:{opacity:0,y:10,filter:"blur(8px)"},animate:{opacity:1,y:0,filter:"blur(0px)"},transition:{delay:.08*t,duration:.4},className:"inline-block",children:e},l+t))},l)})},I=(0,n.createContext)(void 0),P=e=>{let{children:t,className:a,containerClassName:r}=e,l=(0,n.useRef)(null),[i,o]=(0,n.useState)(!1);return(0,s.jsx)(I.Provider,{value:[i,o],children:(0,s.jsx)("div",{className:p("py-20 flex items-center justify-center",r),style:{perspective:"1000px"},children:(0,s.jsx)("div",{ref:l,onMouseEnter:e=>{if(o(!0),!l.current)return},onMouseMove:e=>{if(!l.current)return;let{left:t,top:a,width:s,height:r}=l.current.getBoundingClientRect(),n=(e.clientX-t-s/2)/25,i=(e.clientY-a-r/2)/25;l.current.style.transform="rotateY(".concat(n,"deg) rotateX(").concat(i,"deg)")},onMouseLeave:e=>{l.current&&(o(!1),l.current.style.transform="rotateY(0deg) rotateX(0deg)")},className:p("flex items-center justify-center relative transition-all duration-200 ease-linear",a),style:{transformStyle:"preserve-3d"},children:t})})})},z=e=>{let{children:t,className:a}=e;return(0,s.jsx)("div",{className:p("h-96 w-96 [transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d]",a),children:t})},M=e=>{let{as:t="div",children:a,className:r,translateX:l=0,translateY:i=0,translateZ:o=0,rotateX:c=0,rotateY:d=0,rotateZ:x=0,...m}=e,u=(0,n.useRef)(null),[h]=S();(0,n.useEffect)(()=>{f()},[h]);let f=()=>{u.current&&(h?u.current.style.transform="translateX(".concat(l,"px) translateY(").concat(i,"px) translateZ(").concat(o,"px) rotateX(").concat(c,"deg) rotateY(").concat(d,"deg) rotateZ(").concat(x,"deg)"):u.current.style.transform="translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)")};return(0,s.jsx)(t,{ref:u,className:p("w-fit transition duration-200 ease-linear",r),...m,children:a})},S=()=>{let e=(0,n.useContext)(I);if(void 0===e)throw Error("useMouseEnter must be used within a MouseEnterProvider");return e};var Z=a(8945),L=a(5856);let O=e=>{let{words:t,className:a,filter:r=!0,duration:l=.5}=e,[i,o]=(0,Z.H)(),d=(0,n.useRef)(null),[x,m]=(0,n.useState)(!1),u=t.split(" ");return(0,n.useEffect)(()=>{let e=new IntersectionObserver(t=>{t.forEach(t=>{t.isIntersecting&&!x&&(o("span",{opacity:1,filter:r?"blur(0px)":"none"},{duration:l||1,delay:(0,L.E)(.2)}),m(!0),e.disconnect())})},{threshold:.1});return d.current&&e.observe(d.current),()=>{d.current&&e.unobserve(d.current)}},[x,o,r,l]),(0,s.jsx)("div",{className:p("font-bold text-center px-4 md:px-8",a),children:(0,s.jsx)("div",{className:"",children:(0,s.jsx)("div",{ref:d,className:"dark:text-white text-black text-3xl md:text-5xl leading-snug tracking-wide mx-auto",children:(0,s.jsx)(c.E.div,{ref:i,className:"flex flex-wrap gap-2",children:u.map((e,t)=>(0,s.jsxs)(c.E.span,{className:"dark:text-white text-black opacity-0",style:{filter:r?"blur(10px)":"none"},children:[e," "]},e+t))})})})})};var H=a(5282),A=a(6391);let B={stiffness:200,damping:20};var W=e=>{let{src:t,alt:a}=e,r=(0,H.c)(0),l=(0,H.c)(0),i=(0,A.q)(0,B),o=(0,A.q)(0,B),d=(0,A.q)(1,B),x=(0,A.q)(0),m=(0,A.q)(0,{stiffness:350,damping:30,mass:1}),u=(0,n.useRef)(null),[h,f]=(0,n.useState)(0);return(0,s.jsxs)("figure",{ref:u,className:"relative flex h-[150px] sm:h-[300px] flex-col items-center justify-center overflow-hidden m-1",style:{perspective:"800px"},onMouseMove:e=>{if(!u.current)return;let t=u.current.getBoundingClientRect(),a=e.clientX-t.left-t.width/2,s=e.clientY-t.top-t.height/2,n=-(s/(t.height/2)*14),c=a/(t.width/2)*14;i.set(n),o.set(c),r.set(e.clientX-t.left),l.set(e.clientY-t.top);let d=s-h;m.set(-(.6*d)),f(s)},onMouseEnter:function(){d.set(1.1),x.set(1)},onMouseLeave:function(){x.set(0),d.set(1),i.set(0),o.set(0),m.set(0)},children:[(0,s.jsx)("div",{className:"absolute top-4 text-center text-sm sm:hidden"}),(0,s.jsx)(c.E.img,{src:t,alt:a,style:{rotateX:i,rotateY:o,scale:d},className:"h-[150px] w-[150px] sm:h-[300px] sm:w-[300px] object-cover will-change-transform"})]})},X=e=>{let{images:t}=e;return(0,s.jsx)("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-4 p-24",children:t.map((e,t)=>(0,s.jsx)(W,{src:e.src,alt:e.alt},t))})};let D=()=>{let e=Math.random()*window.innerWidth;switch(Math.floor(4*Math.random())){case 0:return{x:e,y:0,angle:45};case 1:return{x:window.innerWidth,y:e,angle:135};case 2:return{x:e,y:window.innerHeight,angle:225};case 3:return{x:0,y:e,angle:315};default:return{x:0,y:0,angle:45}}},V=e=>{let{minSpeed:t=10,maxSpeed:a=30,minDelay:r=1200,maxDelay:l=4200,starColor:i="#9E00FF",trailColor:o="#2EB9DF",starWidth:c=10,starHeight:d=1,className:x}=e,[m,u]=(0,n.useState)(null),h=(0,n.useRef)(null);return(0,n.useEffect)(()=>{let e=()=>{let{x:s,y:n,angle:i}=D();u({id:Date.now(),x:s,y:n,angle:i,scale:1,speed:Math.random()*(a-t)+t,distance:0}),setTimeout(e,Math.random()*(l-r)+r)};return e(),()=>{}},[t,a,r,l]),(0,n.useEffect)(()=>{let e=requestAnimationFrame(()=>{m&&u(e=>{if(!e)return null;let t=e.x+e.speed*Math.cos(e.angle*Math.PI/180),a=e.y+e.speed*Math.sin(e.angle*Math.PI/180),s=e.distance+e.speed;return t<-20||t>window.innerWidth+20||a<-20||a>window.innerHeight+20?null:{...e,x:t,y:a,distance:s,scale:1+s/100}})});return()=>cancelAnimationFrame(e)},[m]),(0,s.jsxs)("svg",{ref:h,className:p("w-full h-full absolute inset-0",x),children:[m&&(0,s.jsx)("rect",{x:m.x,y:m.y,width:c*m.scale,height:d,fill:"url(#gradient)",transform:"rotate(".concat(m.angle,", ").concat(m.x+c*m.scale/2,", ").concat(m.y+d/2,")")},m.id),(0,s.jsx)("defs",{children:(0,s.jsxs)("linearGradient",{id:"gradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[(0,s.jsx)("stop",{offset:"0%",style:{stopColor:o,stopOpacity:0}}),(0,s.jsx)("stop",{offset:"100%",style:{stopColor:i,stopOpacity:1}})]})})]})},R=e=>{let{children:t,title:a,href:r,className:l,containerClassName:i}=e,[o,c]=(0,n.useState)("translate(-50%,-50%) rotateX(0deg)");return(0,s.jsxs)(h.default,{className:p("relative group/pin z-50  cursor-pointer",i),onMouseEnter:()=>{c("translate(-50%,-50%) rotateX(40deg) scale(0.8)")},onMouseLeave:()=>{c("translate(-50%,-50%) rotateX(0deg) scale(1)")},href:r||"/",children:[(0,s.jsx)("div",{style:{perspective:"1000px",transform:"rotateX(70deg) translateZ(0deg)"},className:"absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2",children:(0,s.jsx)("div",{style:{transform:o},className:"absolute left-1/2 p-4 top-1/2  flex justify-start items-start  rounded-2xl  shadow-[0_8px_16px_rgb(0_0_0/0.4)] bg-black border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden",children:(0,s.jsx)("div",{className:p(" relative z-50 ",l),children:t})})}),(0,s.jsx)(F,{title:a,href:r})]})},F=e=>{let{title:t,href:a}=e;return(0,s.jsx)(c.E.div,{className:"pointer-events-none  w-96 h-80 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500",children:(0,s.jsxs)("div",{className:" w-full h-full -mt-7 flex-none  inset-0",children:[(0,s.jsx)("div",{className:"absolute top-0 inset-x-0  flex justify-center",children:(0,s.jsxs)("a",{href:a,target:"_blank",className:"relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ",children:[(0,s.jsx)("span",{className:"relative z-20 text-white text-xs font-bold inline-block py-0.5",children:t}),(0,s.jsx)("span",{className:"absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover/btn:opacity-40"})]})}),(0,s.jsx)("div",{style:{perspective:"1000px",transform:"rotateX(70deg) translateZ(0)"},className:"absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2",children:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.E.div,{initial:{opacity:0,scale:0,x:"-50%",y:"-50%"},animate:{opacity:[0,1,.5,0],scale:1,z:0},transition:{duration:6,repeat:1/0,delay:0},className:"absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"}),(0,s.jsx)(c.E.div,{initial:{opacity:0,scale:0,x:"-50%",y:"-50%"},animate:{opacity:[0,1,.5,0],scale:1,z:0},transition:{duration:6,repeat:1/0,delay:2},className:"absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"}),(0,s.jsx)(c.E.div,{initial:{opacity:0,scale:0,x:"-50%",y:"-50%"},animate:{opacity:[0,1,.5,0],scale:1,z:0},transition:{duration:6,repeat:1/0,delay:4},className:"absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"})]})}),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.E.div,{className:"absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40 blur-[2px]"}),(0,s.jsx)(c.E.div,{className:"absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40  "}),(0,s.jsx)(c.E.div,{className:"absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-cyan-600 translate-y-[14px] w-[4px] h-[4px] rounded-full z-40 blur-[3px]"}),(0,s.jsx)(c.E.div,{className:"absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-cyan-300 translate-y-[14px] w-[2px] h-[2px] rounded-full z-40 "})]})]})})},T=e=>{let{children:t,className:a}=e;return(0,s.jsxs)("div",{className:p("relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 w-full rounded-md z-0",a),children:[(0,s.jsxs)("div",{className:"relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0",children:[(0,s.jsxs)(c.E.div,{initial:{opacity:.5,width:"15rem"},whileInView:{opacity:1,width:"30rem"},transition:{delay:.3,duration:.8,ease:"easeInOut"},style:{backgroundImage:"conic-gradient(var(--conic-position), var(--tw-gradient-stops))"},className:"absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]",children:[(0,s.jsx)("div",{className:"absolute  w-[100%] left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]"}),(0,s.jsx)("div",{className:"absolute  w-40 h-[100%] left-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]"})]}),(0,s.jsxs)(c.E.div,{initial:{opacity:.5,width:"15rem"},whileInView:{opacity:1,width:"30rem"},transition:{delay:.3,duration:.8,ease:"easeInOut"},style:{backgroundImage:"conic-gradient(var(--conic-position), var(--tw-gradient-stops))"},className:"absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]",children:[(0,s.jsx)("div",{className:"absolute  w-40 h-[100%] right-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]"}),(0,s.jsx)("div",{className:"absolute  w-[100%] right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]"})]}),(0,s.jsx)("div",{className:"absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl"}),(0,s.jsx)("div",{className:"absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"}),(0,s.jsx)("div",{className:"absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"}),(0,s.jsx)(c.E.div,{initial:{width:"8rem"},whileInView:{width:"16rem"},transition:{delay:.3,duration:.8,ease:"easeInOut"},className:"absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"}),(0,s.jsx)(c.E.div,{initial:{width:"15rem"},whileInView:{width:"30rem"},transition:{delay:.3,duration:.8,ease:"easeInOut"},className:"absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400 "}),(0,s.jsx)("div",{className:"absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950 "})]}),(0,s.jsx)("div",{className:"relative z-50 flex -translate-y-80 flex-col items-center px-5",children:t})]})};var Y=a(1942),q=a(5233),G=a(3872);let U=()=>{let e=[{icon:Y.ltd,text:"omkar-savant",href:"https://www.linkedin.com/in/omkar-savant/",delay:.3},{icon:Y.hJX,text:"omkaarsavant",href:"https://github.com/omkaarsavant",delay:.4},{icon:q.buk,text:"omkar-savant",href:"https://www.credly.com/users/omkar-savant",delay:.5},{icon:G.LCd,text:"omkaarsavant",href:"https://twitter.com/omkaarsavant",delay:.6},{icon:q.nx2,text:"Omkar Savant",href:"https://www.cloudskillsboost.google/public_profiles/a4423f31-81c5-4139-9727-072d87c5010c",delay:.7}];return(0,s.jsx)("div",{className:"mt-[20px] flex flex-wrap justify-center",children:e.map((e,t)=>{let a=e.icon;return(0,s.jsxs)(c.E.button,{initial:{opacity:.5,y:100},whileInView:{opacity:1,y:0},transition:{delay:e.delay,duration:.8,ease:"easeInOut"},onClick:()=>window.open(e.href,"_blank"),className:"group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200 m-2",children:[(0,s.jsx)("span",{children:(0,s.jsx)("span",{className:"spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]"})}),(0,s.jsx)("span",{className:"backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-800"}),(0,s.jsxs)("span",{className:"relative z-10 flex items-center py-0.5 text-xl text-neutral-100",children:[(0,s.jsx)(a,{className:"mr-2"})," ",e.text]})]},t)})})},J=()=>{(0,n.useRef)(null);let[e,t]=(0,n.useState)(!1),[a,r]=(0,n.useState)({x:0,y:0}),[l,i]=(0,n.useState)("");return(0,s.jsx)(c.E.div,{initial:{opacity:.5,y:100},whileInView:{opacity:1,y:0},transition:{delay:.3,duration:.8,ease:"easeInOut"},className:"flex mt-[-300px] ml-[800px] w-80 relative items-center"})};function Q(){return(0,s.jsx)(T,{children:(0,s.jsxs)(c.E.h1,{initial:{opacity:.5,y:100},whileInView:{opacity:1,y:0},transition:{delay:.3,duration:.8,ease:"easeInOut"},className:" bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl",children:["Lets ",(0,s.jsx)("br",{})," Connect!"]})})}function K(){return(0,s.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-48 mt-[-100px]",children:[(0,s.jsx)("div",{className:"flex justify-center p-2",children:(0,s.jsx)(R,{title:"Microsoft",href:"https://learn.microsoft.com/en-in/users/omkarsavant-1517/credentials/269613d32052892a",children:(0,s.jsxs)("div",{className:"flex flex-col tracking-tight text-slate-100/50 w-[20rem] h-[20rem]",children:[(0,s.jsx)("h3",{className:"font-bold text-base text-slate-100",children:"Microsoft Certified"}),(0,s.jsx)("div",{className:"text-base text-slate-500 mb-2",children:"Azure AI Engineer Associate"}),(0,s.jsx)("div",{className:"flex-1 w-full rounded-lg bg-cover bg-center bg-no-repeat",style:{backgroundImage:'url("/images/ai.png")'}})]})})}),(0,s.jsx)("div",{className:"flex justify-center p-4",children:(0,s.jsx)(R,{title:"Microsoft",href:"https://learn.microsoft.com/en-in/users/omkarsavant-1517/credentials/68c74e9d612ff42d",children:(0,s.jsxs)("div",{className:"flex flex-col tracking-tight text-slate-100/50 w-[20rem] h-[20rem]",children:[(0,s.jsx)("h3",{className:"font-bold text-base text-slate-100 mb-2",children:"Microsoft Certified"}),(0,s.jsx)("div",{className:"text-base text-slate-500 mb-2",children:"Azure AI Fundamentals"}),(0,s.jsx)("div",{className:"flex-1 w-full rounded-lg bg-cover bg-center bg-no-repeat",style:{backgroundImage:'url("/images/fun.png")'}})]})})}),(0,s.jsx)("div",{className:"flex justify-center p-4",children:(0,s.jsx)(R,{title:"Microsoft",href:"https://learn.microsoft.com/en-in/users/omkarsavant-1517/credentials/e3c8a056aeefcb98",children:(0,s.jsxs)("div",{className:"flex flex-col tracking-tight text-slate-100/50 w-[20rem] h-[20rem]",children:[(0,s.jsx)("h3",{className:"font-bold text-base text-slate-100 mb-2",children:"Microsoft Certified"}),(0,s.jsx)("div",{className:"text-base text-slate-500 mb-2",children:"Azure Data Scientist Associate"}),(0,s.jsx)("div",{className:"flex-1 rounded-lg bg-cover bg-center bg-no-repeat",style:{backgroundImage:'url("/images/data.png")'}})]})})}),(0,s.jsx)("div",{className:"flex justify-center p-4",children:(0,s.jsx)(R,{title:"Credly",href:"https://www.credly.com/badges/a01437ea-1e53-4519-9e80-ff5d60fb1f12",children:(0,s.jsxs)("div",{className:"flex flex-col tracking-tight text-slate-100/50 w-[20rem] h-[20rem]",children:[(0,s.jsx)("h3",{className:"font-bold text-base text-slate-100 mb-2",children:"Google Cloud Certified"}),(0,s.jsx)("div",{className:"text-base text-slate-500 mb-2",children:"Cloud Digital Leader"}),(0,s.jsx)("div",{className:"flex-1 w-full rounded-lg bg-cover bg-center bg-no-repeat",style:{backgroundImage:'url("/images/cdl.png")'}})]})})}),(0,s.jsx)("div",{className:"flex justify-center p-4",children:(0,s.jsx)(R,{title:"Credly",href:"https://www.credly.com/badges/18aa3d90-88bf-424a-a2fb-970441f687ab/",children:(0,s.jsxs)("div",{className:"flex flex-col tracking-tight text-slate-100/50 w-[20rem] h-[20rem]",children:[(0,s.jsx)("h3",{className:"font-bold text-base text-slate-100 mb-2",children:"GitHub Certified"}),(0,s.jsx)("div",{className:"text-base text-slate-500 mb-2",children:"Foundation"}),(0,s.jsx)("div",{className:"flex-1 w-full rounded-lg bg-cover bg-center bg-no-repeat",style:{backgroundImage:'url("/images/g1.png")'}})]})})}),(0,s.jsx)("div",{className:"flex justify-center p-4",children:(0,s.jsx)(R,{title:"Credly",href:"https://www.credly.com/badges/12f6eafc-fcd7-4b20-a51e-5c46be660d64/",children:(0,s.jsxs)("div",{className:"flex flex-col tracking-tight text-slate-100/50 w-[20rem] h-[20rem]",children:[(0,s.jsx)("h3",{className:"font-bold text-base text-slate-100 mb-2",children:"GitHub Certified"}),(0,s.jsx)("div",{className:"text-base text-slate-500 mb-2",children:"Advanced Security"}),(0,s.jsx)("div",{className:"flex-1 w-full rounded-lg bg-cover bg-center bg-no-repeat",style:{backgroundImage:'url("/images/g2.png")'}})]})})})]})}function $(){return(0,s.jsxs)("div",{className:"",children:[(0,s.jsx)("h2",{className:" flex-col md:flex-row z-10 text-3xl md:text-7xl md:leading-tight max-w-5xl mx-auto   font-medium bg-clip-text flex items-center gap-2 md:gap-8",children:(0,s.jsx)("span",{className:" mx-auto items-center",children:" Notable Certifications"})}),(0,s.jsx)(V,{})]})}function ee(){return(0,s.jsx)("div",{className:"",children:(0,s.jsx)("div",{className:"flex max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans ",children:(0,s.jsx)(O,{words:"He is skilled in..."})})})}function et(){return(0,s.jsxs)("div",{className:"flex flex-wrap justify-center space-x-4 space-y-4 sm:space-y-0",children:[(0,s.jsx)(h.default,{legacyBehavior:!0,href:"https://github.com/omkaarsavant/Villa-Booking",passHref:!0,children:(0,s.jsx)("a",{target:"_blank",rel:"noopener noreferrer",className:"block",children:(0,s.jsx)(P,{className:"inter-var cursor-pointer",children:(0,s.jsxs)(z,{className:"bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border",children:[(0,s.jsx)(M,{translateZ:"50",className:"text-xl font-bold text-neutral-600 dark:text-white",children:"Villa Booking Website"}),(0,s.jsx)(M,{as:"p",translateZ:"60",className:"text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300",children:"A Villa Booking website with working Sign In/Out, Payment, and Chatbot facilities. It also features a Natural Language Processed Chatbot which helps users."}),(0,s.jsx)(M,{translateZ:"100",className:"w-full mt-4",children:(0,s.jsx)(u.default,{src:"/images/villa.png",height:"1000",width:"1000",className:"h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl",alt:"thumbnail"})}),(0,s.jsx)("div",{className:"flex justify-between items-center mt-20",children:(0,s.jsx)(M,{translateZ:20,className:"px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold",children:"View →"})})]})})})}),(0,s.jsx)(h.default,{legacyBehavior:!0,href:"https://github.com/omkaarsavant/-Online-IEEE-Paper-Generation-System",passHref:!0,children:(0,s.jsx)("a",{target:"_blank",rel:"noopener noreferrer",className:"block",children:(0,s.jsx)(P,{className:"inter-var cursor-pointer",children:(0,s.jsxs)(z,{className:"bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border",children:[(0,s.jsx)(M,{translateZ:"50",className:"text-xl font-bold text-neutral-600 dark:text-white",children:"Online IEEE Paper Generation System"}),(0,s.jsx)(M,{as:"p",translateZ:"60",className:"text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300",children:"A pdf containing the data in IEEE format will be generated by the algorithm after the user enters the necessary information in the appropriate fields."}),(0,s.jsx)(M,{translateZ:"100",className:"w-full mt-4",children:(0,s.jsx)(u.default,{src:"/images/ieee.png",height:"1000",width:"1000",className:"h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl",alt:"thumbnail"})}),(0,s.jsx)("div",{className:"flex justify-between items-center mt-20",children:(0,s.jsx)(M,{translateZ:20,className:"px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold",children:"View →"})})]})})})}),(0,s.jsx)(h.default,{legacyBehavior:!0,href:"https://mkphotographyandfilms.com/water/home1/index.html",passHref:!0,children:(0,s.jsx)("a",{target:"_blank",rel:"noopener noreferrer",className:"block",children:(0,s.jsx)(P,{className:"inter-var cursor-pointer",children:(0,s.jsxs)(z,{className:"bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border",children:[(0,s.jsx)(M,{translateZ:"50",className:"text-xl font-bold text-neutral-600 dark:text-white",children:"WinEarth"}),(0,s.jsx)(M,{as:"p",translateZ:"60",className:"text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300",children:"A Social Awareness website about Gangapur Dam, and its Desilting Process. Were First Runner up. Created for Winjit Technologies."}),(0,s.jsx)(M,{translateZ:"100",className:"w-full mt-4",children:(0,s.jsx)(u.default,{src:"/images/winearth.png",height:"1000",width:"1000",className:"h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl",alt:"thumbnail"})}),(0,s.jsx)("div",{className:"flex justify-between items-center mt-20",children:(0,s.jsx)(M,{translateZ:20,className:"px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold",children:"View →"})})]})})})})]})}function ea(){return(0,s.jsxs)("div",{className:"mt-[-135px] flex flex-wrap justify-center space-x-4 space-y-4 sm:space-y-0",children:[(0,s.jsx)(h.default,{legacyBehavior:!0,href:"https://github.com/omkaarsavant/Pravaas-Derailment-Prevention-by-Track-Object-Detection",passHref:!0,children:(0,s.jsx)("a",{target:"_blank",rel:"noopener noreferrer",className:"block",children:(0,s.jsx)(P,{className:"inter-var cursor-pointer",children:(0,s.jsxs)(z,{className:"bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border",children:[(0,s.jsx)(M,{translateZ:"50",className:"text-xl font-bold text-neutral-600 dark:text-white",children:"Derailment Prevention by Object Detection"}),(0,s.jsx)(M,{as:"p",translateZ:"60",className:"text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300",children:"Train derailments caused by foreign items are a major problem in India. This ML Model detects foreign objects and reports it."}),(0,s.jsx)(M,{translateZ:"100",className:"w-full mt-4",children:(0,s.jsx)(u.default,{src:"/images/ml.png",height:"1000",width:"1000",className:"h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl",alt:"thumbnail"})}),(0,s.jsx)("div",{className:"flex justify-between items-center mt-20",children:(0,s.jsx)(M,{translateZ:20,className:"px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold",children:"View →"})})]})})})}),(0,s.jsx)(P,{className:"inter-var",children:(0,s.jsxs)(z,{className:"bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border",children:[(0,s.jsx)(M,{translateZ:"50",className:"text-xl font-bold text-neutral-600 dark:text-white",children:"College Mentor Website"}),(0,s.jsx)(M,{as:"p",translateZ:"60",className:"text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300",children:"Enhanced the College  mentor website by implementing a dynamic backend using PHP and MySQL. Also improved User Interface."}),(0,s.jsx)(M,{translateZ:"100",className:"w-full mt-4",children:(0,s.jsx)(u.default,{src:"/images/mentor.png",height:"1000",width:"1000",className:"h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl",alt:"thumbnail"})}),(0,s.jsx)("div",{className:"flex justify-between items-center mt-20",children:(0,s.jsx)(M,{translateZ:20,children:"‎‎‎‎"})})]})})]})}function es(){return(0,s.jsx)("div",{className:"h-[5px] flex justify-center items-center px-4",children:(0,s.jsxs)("div",{className:"text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400",children:["He loves to build",(0,s.jsx)(_,{words:["Cloud","Web","Software","Machine Learning","Tech"]}),"Projects"]})})}function er(){let e=el.map((e,t)=>(0,s.jsx)(E,{card:e,index:t},e.src));return(0,s.jsxs)("div",{className:"w-full h-full py-20",children:[(0,s.jsx)("h2",{className:"max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans",children:"Meet Omkar! He is..."}),(0,s.jsx)(k,{items:e})]})}let el=[{category:"LinkedIn",title:"Top Web Development Voice",src:"/images/linkedin.png"},{category:"Tech",title:"Enthusiast/Community Member",src:"/images/tech.png"},{category:"Smart India Hackathon ",title:"Hackathon Winner",src:"/images/sih.png"},{category:"Certifications",title:"Multi Certification Holder",src:"/images/cert.png"},{category:"Google",title:"Ex-Web Development Lead",src:"/images/gdsc.png"}];function en(e){let{className:t}=e;return(0,s.jsx)("div",{className:p("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50",t),children:(0,s.jsxs)("div",{className:"flex justify-center space-x-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md",children:[(0,s.jsx)(h.default,{href:"#home",className:"text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 px-4 py-2 rounded-lg",children:"Home"}),(0,s.jsx)(h.default,{href:"#about",className:"text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 px-4 py-2 rounded-lg",children:"About"}),(0,s.jsx)(h.default,{href:"#projects",className:"text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 px-4 py-2 rounded-lg",children:"Projects"}),(0,s.jsx)(h.default,{href:"#skills",className:"text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 px-4 py-2 rounded-lg",children:"Skills"}),(0,s.jsx)(h.default,{href:"#certifications",className:"text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 px-4 py-2 rounded-lg",children:"Certifications"}),(0,s.jsx)(h.default,{href:"#socials",className:"text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 px-4 py-2 rounded-lg",children:"Socials"})]})})}function ei(){return(0,s.jsxs)("div",{className:"jsx-482093d89a00ffe3",children:[(0,s.jsx)(l(),{id:"482093d89a00ffe3",children:"html{scroll-behavior:smooth}"}),(0,s.jsx)(ec,{}),(0,s.jsx)("div",{id:"home",className:"jsx-482093d89a00ffe3",children:(0,s.jsx)(eo,{})}),(0,s.jsx)("div",{id:"about",className:"jsx-482093d89a00ffe3",children:(0,s.jsx)(er,{})}),(0,s.jsx)("div",{id:"projects",className:"jsx-482093d89a00ffe3",children:(0,s.jsx)(es,{})}),(0,s.jsx)(et,{}),(0,s.jsx)(ea,{}),(0,s.jsxs)("div",{id:"skills",className:"jsx-482093d89a00ffe3",children:[(0,s.jsx)(ee,{}),(0,s.jsx)(X,{images:[{src:"/images/cpp.png",alt:"CPP Image 1"},{src:"/images/java2.png",alt:"CPP Image 2"},{src:"/images/gcp2.png",alt:"CPP Image 2"},{src:"/images/sql.png",alt:"CPP Image 2"},{src:"/images/git.png",alt:"CPP Image 3"},{src:"/images/php.png",alt:"CPP Image 4"},{src:"/images/aws.png",alt:"CPP Image 4"},{src:"/images/python.png",alt:"CPP Image 4"},{src:"/images/az.png",alt:"CPP Image 3"},{src:"/images/next.png",alt:"CPP Image 4"},{src:"/images/react.png",alt:"CPP Image 4"},{src:"/images/css.png",alt:"CPP Image 4"},{src:"/images/sales.png",alt:"CPP Image 3"},{src:"/images/table.png",alt:"CPP Image 4"}]})]}),(0,s.jsxs)("div",{id:"certifications",className:"jsx-482093d89a00ffe3",children:[(0,s.jsx)($,{}),(0,s.jsx)("div",{className:"jsx-482093d89a00ffe3 relative z-0",children:(0,s.jsx)(K,{})})]}),(0,s.jsxs)("div",{id:"socials",className:"jsx-482093d89a00ffe3 mt-[-100px] ",children:[(0,s.jsx)("div",{className:"jsx-482093d89a00ffe3",children:(0,s.jsx)(Q,{})}),(0,s.jsx)("div",{className:"jsx-482093d89a00ffe3 relative z-1",children:(0,s.jsx)(J,{})}),(0,s.jsx)(U,{})]})]})}function eo(){return(0,s.jsx)("div",{className:"flex flex-col overflow-hidden mt-20",id:"hero-section",children:(0,s.jsx)(d,{titleComponent:(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("h1",{className:"text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-black dark:text-white",children:["Welcome to my ",(0,s.jsx)("br",{}),(0,s.jsx)("span",{className:"text-3xl sm:text-4xl md:text-5xl lg:text-[6rem] font-bold mt-1 leading-none",style:{paddingBottom:"100px"},children:"Portfolio!"})]})}),children:(0,s.jsx)(u.default,{src:"/images/link.png",alt:"hero",height:720,width:1400,className:"mx-auto rounded-2xl object-cover h-72 sm:h-96 md:h-[36rem] lg:h-[48rem] object-center md:object-left-top",draggable:!1})})})}function ec(){return(0,s.jsx)("div",{className:"relative w-full flex items-center justify-center",children:(0,s.jsx)("div",{className:"w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl hidden lg:block top-2",children:(0,s.jsx)(en,{className:"top-2"})})})}}},function(e){e.O(0,[957,699,240,700,971,23,744],function(){return e(e.s=5173)}),_N_E=e.O()}]);