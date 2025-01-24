"use strict";(self.webpackChunkpandadoc_cpq_docs=self.webpackChunkpandadoc_cpq_docs||[]).push([[7670],{5331:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"how-to-guides/integrations/setup-pandadoc-cpq-with-hubspot","title":"How to Set Up HubSpot Integration with PandaDoc CPQ","description":"Integrating PandaDoc CPQ with HubSpot allows seamless quoting, approvals, and document generation directly within your CRM. This guide explains how to install and configure the integration and how to access PandaDoc Workflows in HubSpot.","source":"@site/docs/how-to-guides/01-integrations/01-setup-pandadoc-cpq-with-hubspot.md","sourceDirName":"how-to-guides/01-integrations","slug":"/how-to-guides/integrations/setup-pandadoc-cpq-with-hubspot","permalink":"/pandadoc-cpq-docs/how-to-guides/integrations/setup-pandadoc-cpq-with-hubspot","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"How to Set Up HubSpot Integration with PandaDoc CPQ"},"sidebar":"docsSidebar","previous":{"title":"Test and Run Your Workflow","permalink":"/pandadoc-cpq-docs/tutorials/test-and-run-workflow"},"next":{"title":"How to Set Up Salesforce Integration with PandaDoc CPQ","permalink":"/pandadoc-cpq-docs/how-to-guides/integrations/setup-pandadoc-cpq-with-salesforce copy"}}');var s=t(4848),a=t(8453);const i={title:"How to Set Up HubSpot Integration with PandaDoc CPQ"},r="How to Set Up HubSpot Integration with PandaDoc CPQ",d={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Adding PandaDoc Workflows as a Card in the Overview Tab",id:"adding-pandadoc-workflows-as-a-card-in-the-overview-tab",level:2},{value:"Add PandaDoc Workflows as a New Tab",id:"add-pandadoc-workflows-as-a-new-tab",level:2},{value:"Verify the Integration",id:"verify-the-integration",level:2}];function l(e){const n={a:"a",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"how-to-set-up-hubspot-integration-with-pandadoc-cpq",children:"How to Set Up HubSpot Integration with PandaDoc CPQ"})}),"\n",(0,s.jsxs)(n.p,{children:["Integrating ",(0,s.jsx)(n.strong,{children:"PandaDoc CPQ"})," with ",(0,s.jsx)(n.strong,{children:"HubSpot"})," allows seamless quoting, approvals, and document generation directly within your CRM. This guide explains how to ",(0,s.jsx)(n.strong,{children:"install and configure the integration"})," and how to access ",(0,s.jsx)(n.strong,{children:"PandaDoc Workflows in HubSpot"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(n.p,{children:"Before you start, ensure that:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["You have ",(0,s.jsx)(n.strong,{children:"HubSpot Enterprise"})," (or the appropriate plan that supports custom deal views)."]}),"\n",(0,s.jsxs)(n.li,{children:["You have the ",(0,s.jsx)(n.strong,{children:"PandaDoc CPQ add-on"})," enabled."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.strong,{children:"PandaDoc app is installed"})," from the HubSpot Marketplace."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["If you haven\u2019t installed the integration yet, follow the ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://hc.pandadoc.com/en/articles/9714877",children:"HubSpot Integration Installation Guide"})}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"adding-pandadoc-workflows-as-a-card-in-the-overview-tab",children:"Adding PandaDoc Workflows as a Card in the Overview Tab"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.strong,{children:'"Add Cards"'}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Locate ",(0,s.jsx)(n.strong,{children:'"PandaDoc Workflows"'})," in the list."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.strong,{children:'"Create Card"'})," at the top-right."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Close the panel."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Scroll down to find the ",(0,s.jsx)(n.strong,{children:"PandaDoc Workflows"})," card."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Drag to reorder it based on your preference."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.strong,{children:'"Save and Exit"'}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://pandadoc-dd769ec6c844.intercom-attachments-7.com/i/o/xhbviy7k/1216615014/e7caafb94a323ed0782f6f056a2b/26780186382743?expires=1737295200&signature=38ff9d9ec0b9cfaea697a0bbd59001a7fe44d77259d712cb1c9accc146a59bc9&req=dSImEM9%2FmIFeXfMW1HO4zTRMRhLEF9u9jXMuZDJFNo8f17QxMl9StoEjVWLB%0AEGpk3mQWXMZC3JeBC6s%3D%0A",alt:"Select CRM"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Now, the ",(0,s.jsx)(n.strong,{children:"PandaDoc Workflows card"})," is visible in the Overview tab for all deals."]}),"\n",(0,s.jsx)(n.h2,{id:"add-pandadoc-workflows-as-a-new-tab",children:"Add PandaDoc Workflows as a New Tab"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.strong,{children:'"Create New Tab"'})," and name it ",(0,s.jsx)(n.strong,{children:'"PandaDoc Workflows"'}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the new tab, select ",(0,s.jsx)(n.strong,{children:"the PandaDoc Workflows extension card"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Adjust the order of the tabs if necessary."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.strong,{children:'"Save and Exit"'}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://pandadoc-dd769ec6c844.intercom-attachments-7.com/i/o/xhbviy7k/1216615002/e14be711c239e3ea3ea7128a1b15/26777989488023?expires=1737295200&signature=b0ebb20d8b5cf8a727a59410ed3186a7c06c43e3ea719591af945e5998ddd5f3&req=dSImEM9%2FmIFfW%2FMW1HO4zYTDjeN81npyjaQ1wSO5TS3FOFIH0T5L%2BQX91cTN%0AomE1A5vhcUhcExQLz4M%3D%0A",alt:"Select CRM"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"verify-the-integration",children:"Verify the Integration"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Open a deal in HubSpot."}),"\n",(0,s.jsxs)(n.li,{children:["Locate the ",(0,s.jsx)(n.strong,{children:"PandaDoc Workflows card or tab"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Ensure that the integration ",(0,s.jsx)(n.strong,{children:"displays data"})," correctly."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Once set up, you can use ",(0,s.jsx)(n.strong,{children:"PandaDoc CPQ workflows"})," inside HubSpot for ",(0,s.jsx)(n.strong,{children:"generating quotes, approvals, and contract creation"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var o=t(6540);const s={},a=o.createContext(s);function i(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);