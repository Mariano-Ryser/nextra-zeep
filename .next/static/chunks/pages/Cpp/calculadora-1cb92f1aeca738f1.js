(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[210],{186:function(s,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Cpp/calculadora",function(){return r(5342)}])},5342:function(s,e,r){"use strict";r.r(e),r.d(e,{__toc:function(){return a}});var l=r(5893),n=r(2673),o=r(2169),i=r(1255);r(9488);var c=r(2643);let a=[];function t(s){let e=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code",span:"span"},(0,c.a)(),s.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{children:"Creamos y una simple calculadora"}),"\n",(0,l.jsx)(e.p,{children:"Aqui creamos una calculadora donde atravez del switch nos da la\r\nopcion de elegir los numeros y la operacion a realizar."}),"\n",(0,l.jsx)(e.pre,{"data-language":"cpp","data-theme":"default",children:(0,l.jsxs)(e.code,{"data-language":"cpp","data-theme":"default",children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"#include"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"<iostream>"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"int"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"main"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"() {"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"char"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" op;"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"double"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" num1;"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"double"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" num2;"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"double"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" result;"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    std"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"::"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"cout "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<<"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"*************CALCULATOR***********\\n"'}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    std"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"::"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"cout "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<<"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Enter either (+ - * /): "'}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    std"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"::"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"cin "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">>"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" op;"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    std"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"::"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"cout "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<<"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Enter N1:"" "'}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    std"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"::"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"cin "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">>"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" num1;"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    std"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"::"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"cout "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<<"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Enter N2:"" "'}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    std"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"::"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"cin "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">>"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" num2;"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"switch"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(op){"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"case"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'+'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            result "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" num1 "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"+"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" num2;"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        std"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"::"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"cout "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<<"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"result "'}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<<"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" result "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<<"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"\\n"'}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"break"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"case"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'-'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            result "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" num1 "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"-"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" num2;"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        std"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"::"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"cout "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<<"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"result "'}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<<"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" result "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<<"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"\\n "'}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"break"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"case"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'*'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            result "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" num1 "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"*"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" num2;"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        std"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"::"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"cout "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<<"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"result "'}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<<"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" result "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<<"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"\\n "'}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"break"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"case"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'/'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            result "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" num1 "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"/"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" num2;"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        std"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"::"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"cout "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<<"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"result "'}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<<"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" result "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<<"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"\\n "'}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"break"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            std"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"::"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"cout "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<<"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"That wasn\'t a valid response"'}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<<"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"\\n "'}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    std"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"::"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"cout "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<<"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"************************"'}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})})]})}let h={MDXContent:function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,c.a)(),s.components);return e?(0,l.jsx)(e,{...s,children:(0,l.jsx)(t,{...s})}):t(s)},pageOpts:{filePath:"pages/Cpp/calculadora.mdx",route:"/Cpp/calculadora",pageMap:[{kind:"Folder",name:"Cpp",route:"/Cpp",children:[{kind:"MdxPage",name:"calculadora",route:"/Cpp/calculadora"},{kind:"MdxPage",name:"helloWorld",route:"/Cpp/helloWorld"},{kind:"MdxPage",name:"ternaryOperator",route:"/Cpp/ternaryOperator"},{kind:"Meta",data:{calculadora:"Calculadora",helloWorld:"Helloworld",ternaryOperator:"Ternaryoperator"}}]},{kind:"MdxPage",name:"ejemplos",route:"/ejemplos"},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"nextraComponents",route:"/nextraComponents"},{kind:"Meta",data:{ejemplos:"Ejemplos",index:"Index",nextraComponents:"Nextracomponents"}}],flexsearch:{codeblocks:!0},title:"Creamos y una simple calculadora",headings:a},pageNextRoute:"/Cpp/calculadora",nextraLayout:o.ZP,themeConfig:i.Z};e.default=(0,n.j)(h)},1255:function(s,e,r){"use strict";var l=r(5893);r(5675),e.Z={footer:(0,l.jsx)("p",{children:"\xa9 NexZeep."}),logo:(0,l.jsx)("p",{children:"Zeep"}),project:{link:"https://github.com/shuding/nextra",icon:(0,l.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 256 256",children:(0,l.jsx)("path",{fill:"currentColor",d:"m231.9 169.8l-94.8 65.6a15.7 15.7 0 0 1-18.2 0l-94.8-65.6a16.1 16.1 0 0 1-6.4-17.3L45 50a12 12 0 0 1 22.9-1.1L88.5 104h79l20.6-55.1A12 12 0 0 1 211 50l27.3 102.5a16.1 16.1 0 0 1-6.4 17.3Z"})})}}},5789:function(){}},function(s){s.O(0,[942,888,774,179],function(){return s(s.s=186)}),_N_E=s.O()}]);