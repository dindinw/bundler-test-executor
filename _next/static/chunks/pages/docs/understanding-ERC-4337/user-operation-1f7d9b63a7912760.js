(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[898],{5421:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/understanding-ERC-4337/user-operation",function(){return t(5554)}])},3957:function(e,n,t){"use strict";var r=t(5893),d=t(1163);let i={darkMode:!1,logo:(0,r.jsx)("strong",{children:"ERC-4337 Documentation"}),project:{link:"https://github.com/eth-infinitism/account-abstraction"},docsRepositoryBase:"https://github.com/eth-infinitism/landing-page/blob/master",nextThemes:{forcedTheme:"light"},useNextSeoProps(){let{asPath:e}=(0,d.useRouter)();if("/"!==e)return{titleTemplate:"%s – ERC 4337 Documentation"}},footer:{text:""}};n.Z=i},5554:function(e,n,t){"use strict";t.r(n);var r=t(5893),d=t(8863),i=t(3740),o=t(3957);t(5513);var s=t(1151);function a(e){let n=Object.assign({h1:"h1",p:"p",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",a:"a",h2:"h2"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{children:"UserOperation"}),"\n",(0,r.jsxs)(n.p,{children:["All components of ERC-4337 revolve around a pseudo-transaction object called a ",(0,r.jsx)(n.code,{children:"UserOperation"})," which is used to execute actions through a smart contract account. This isn't to be mistaken for a regular transaction type."]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"sender"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"address"})}),(0,r.jsx)(n.td,{children:"The address of the smart contract account"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"nonce"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"uint256"})}),(0,r.jsx)(n.td,{children:"Anti-replay protection; also used as the salt for first-time account creation"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"initCode"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"bytes"})}),(0,r.jsx)(n.td,{children:"Code used to deploy the account if not yet on-chain"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"callData"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"bytes"})}),(0,r.jsx)(n.td,{children:"Data that's passed to the sender for execution"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"callGasLimit"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"uint256"})}),(0,r.jsx)(n.td,{children:"Gas limit for execution phase"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"verificationGasLimit"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"uint256"})}),(0,r.jsx)(n.td,{children:"Gas limit for verification phase"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"preVerificationGas"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"uint256"})}),(0,r.jsx)(n.td,{children:"Gas to compensate the bundler"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"maxFeePerGas"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"uint256"})}),(0,r.jsxs)(n.td,{children:["Maximum fee per gas (similar to ",(0,r.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-1559",children:"EIP-1559"})," ",(0,r.jsx)(n.code,{children:"max_fee_per_gas"}),")"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"maxPriorityFeePerGas"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"uint256"})}),(0,r.jsxs)(n.td,{children:["Maximum priority fee per gas (similar to EIP-1559 ",(0,r.jsx)(n.code,{children:"max_priority_fee_per_gas"}),")"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"paymasterAndData"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"bytes"})}),(0,r.jsx)(n.td,{children:"Paymaster Contract address and any extra data required for verification and execution (empty for self-sponsored transaction)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"signature"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"bytes"})}),(0,r.jsx)(n.td,{children:"Used to validate a UserOperation along with the nonce during verification"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"useroperation-mempool",children:"UserOperation mempool"}),"\n",(0,r.jsxs)(n.p,{children:["Instead of going to the traditional public mempool that hosts pending transactions for EOAs, ",(0,r.jsx)(n.code,{children:"UserOperation"}),"s will instead be sent to the ",(0,r.jsx)(n.code,{children:"UserOperation"})," mempool: a dedicated, higher-level mempool specifically for ",(0,r.jsx)(n.code,{children:"UserOperation"}),"s."]}),"\n",(0,r.jsxs)(n.p,{children:["Bundlers listen to the ",(0,r.jsx)(n.code,{children:"UserOperation"})," mempool and bundle multiple ",(0,r.jsx)(n.code,{children:"UserOperation"}),'s together into a "classic" transaction. They first verify the validity of the ',(0,r.jsx)(n.code,{children:"UserOperation"}),"s using the relevant EntryPoint methods. The bundler then includes that multi-",(0,r.jsx)(n.code,{children:"UserOperation"})," transaction in the next block they propose to the network. To clarify, that transaction isn't sent to the regular mempool. Bundlers are either block builders themselves, or work together with block builders."]})]})}t(5675);let c={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)},pageOpts:{filePath:"pages/docs/understanding-ERC-4337/user-operation.md",route:"/docs/understanding-ERC-4337/user-operation",headings:[{depth:1,value:"UserOperation",id:"useroperation"},{depth:2,value:"UserOperation mempool",id:"useroperation-mempool"}],pageMap:[{kind:"Folder",name:"docs",route:"/docs",children:[{kind:"Meta",data:{index:"Introduction","understanding-ERC-4337":"Understanding ERC-4337",bundlers:"Bundlers",paymasters:"Paymasters",wallets:"Wallets",dapps:"Dapps",faqs:"FAQs"}},{kind:"Folder",name:"bundlers",route:"/docs/bundlers",children:[{kind:"Meta",data:{introduction:"Introduction","building-a-bundler":"Build","testing-a-bundler":"Test","running-a-bundler":"Run"}},{kind:"MdxPage",name:"building-a-bundler",route:"/docs/bundlers/building-a-bundler"},{kind:"MdxPage",name:"introduction",route:"/docs/bundlers/introduction"},{kind:"MdxPage",name:"running-a-bundler",route:"/docs/bundlers/running-a-bundler"},{kind:"MdxPage",name:"testing-a-bundler",route:"/docs/bundlers/testing-a-bundler"}]},{kind:"Folder",name:"dapps",route:"/docs/dapps",children:[{kind:"Meta",data:{introduction:"Introduction","building-for-4337":"Building for 4337"}},{kind:"MdxPage",name:"building-for-4337",route:"/docs/dapps/building-for-4337"},{kind:"MdxPage",name:"introduction",route:"/docs/dapps/introduction"}]},{kind:"Folder",name:"faqs",route:"/docs/faqs",children:[{kind:"Meta",data:{"reputation-throttling-banning":"Reputation, throttling and banning"}},{kind:"MdxPage",name:"reputation-throttling-banning",route:"/docs/faqs/reputation-throttling-banning"}]},{kind:"MdxPage",name:"index",route:"/docs"},{kind:"Folder",name:"paymasters",route:"/docs/paymasters",children:[{kind:"Meta",data:{introduction:"Introduction","paymaster-sol":"Paymaster.sol","running-a-paymaster":"Running a paymaster"}},{kind:"MdxPage",name:"introduction",route:"/docs/paymasters/introduction"},{kind:"MdxPage",name:"paymaster-sol",route:"/docs/paymasters/paymaster-sol"},{kind:"MdxPage",name:"running-a-paymaster",route:"/docs/paymasters/running-a-paymaster"}]},{kind:"Folder",name:"understanding-ERC-4337",route:"/docs/understanding-ERC-4337",children:[{kind:"Meta",data:{architecture:"Architecture","user-operation":"UserOperation","entry-point-contract":"EntryPoint contract","account-contract":"Account contract","account-factory-contract":"Account Factory contract","simple-account":"SimpleAccount.sol"}},{kind:"MdxPage",name:"account-contract",route:"/docs/understanding-ERC-4337/account-contract"},{kind:"MdxPage",name:"account-factory-contract",route:"/docs/understanding-ERC-4337/account-factory-contract"},{kind:"MdxPage",name:"architecture",route:"/docs/understanding-ERC-4337/architecture"},{kind:"MdxPage",name:"entry-point-contract",route:"/docs/understanding-ERC-4337/entry-point-contract"},{kind:"MdxPage",name:"simple-account",route:"/docs/understanding-ERC-4337/simple-account"},{kind:"MdxPage",name:"user-operation",route:"/docs/understanding-ERC-4337/user-operation"}]},{kind:"Folder",name:"wallets",route:"/docs/wallets",children:[{kind:"Meta",data:{introduction:"Introduction","supporting-4337":"Supporting 4337"}},{kind:"MdxPage",name:"introduction",route:"/docs/wallets/introduction"},{kind:"MdxPage",name:"supporting-4337",route:"/docs/wallets/supporting-4337"}]}]}],flexsearch:{codeblocks:!0},title:"UserOperation"},pageNextRoute:"/docs/understanding-ERC-4337/user-operation",nextraLayout:i.ZP,themeConfig:o.Z};n.default=(0,d.j)(c)}},function(e){e.O(0,[822,774,888,179],function(){return e(e.s=5421)}),_N_E=e.O()}]);