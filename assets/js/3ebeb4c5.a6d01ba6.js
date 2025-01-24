"use strict";(self.webpackChunkpandadoc_cpq_docs=self.webpackChunkpandadoc_cpq_docs||[]).push([[2650],{6648:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>t,metadata:()=>l,toc:()=>d});const l=JSON.parse('{"id":"how-to-guides/approvals/setup-approval-rules","title":"Using Conditional Approvals","description":"Conditional approvals in PandaDoc CPQ allow you to define dynamic approval workflows based on various conditions such as quote attributes, CRM fields, and form inputs. This ensures that documents requiring special authorization automatically trigger an approval process.","source":"@site/docs/how-to-guides/02-approvals/setup-approval-rules.md","sourceDirName":"how-to-guides/02-approvals","slug":"/how-to-guides/approvals/setup-approval-rules","permalink":"/pandadoc-cpq-docs/how-to-guides/approvals/setup-approval-rules","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Using Conditional Approvals"},"sidebar":"docsSidebar","previous":{"title":"How to Set Up Custom Opportunity Product Field Sync in Salesforce","permalink":"/pandadoc-cpq-docs/how-to-guides/integrations/custom-opportunity-product-sync"},"next":{"title":"Using Rules and Formulas in Quotes","permalink":"/pandadoc-cpq-docs/how-to-guides/quote-rules-formulas/use-quote-rules-formulas"}}');var o=s(4848),i=s(8453);const t={title:"Using Conditional Approvals"},r="Using Conditional Approvals",a={},d=[{value:"Watch the Video Tutorial",id:"watch-the-video-tutorial",level:2},{value:"Understanding Conditional Approvals",id:"understanding-conditional-approvals",level:2},{value:"Step 1: Setting Up Conditional Approvals in a Template",id:"step-1-setting-up-conditional-approvals-in-a-template",level:2},{value:"Example: Approval Based on Product Selection",id:"example-approval-based-on-product-selection",level:3},{value:"Step 2: Configuring Quote Data Fields",id:"step-2-configuring-quote-data-fields",level:2},{value:"Example: Auto-Populate Selected Products",id:"example-auto-populate-selected-products",level:3},{value:"Step 3: Automating Approvals in a Workflow",id:"step-3-automating-approvals-in-a-workflow",level:2},{value:"Example: Approval Based on Deal Owner",id:"example-approval-based-on-deal-owner",level:3},{value:"Step 4: Testing the Approval Flow",id:"step-4-testing-the-approval-flow",level:2},{value:"Key Takeaways",id:"key-takeaways",level:2}];function c(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"using-conditional-approvals",children:"Using Conditional Approvals"})}),"\n",(0,o.jsxs)(n.p,{children:["Conditional approvals in PandaDoc CPQ allow you to define ",(0,o.jsx)(n.strong,{children:"dynamic approval workflows"})," based on various conditions such as ",(0,o.jsx)(n.strong,{children:"quote attributes, CRM fields, and form inputs"}),". This ensures that documents requiring special authorization automatically trigger an approval process."]}),"\n",(0,o.jsx)(n.p,{children:"This guide covers:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Setting up ",(0,o.jsx)(n.strong,{children:"approval conditions"})," at the ",(0,o.jsx)(n.strong,{children:"template"})," and ",(0,o.jsx)(n.strong,{children:"workflow"})," level."]}),"\n",(0,o.jsxs)(n.li,{children:["Mapping ",(0,o.jsx)(n.strong,{children:"quote and CRM data"})," for dynamic approvals."]}),"\n",(0,o.jsxs)(n.li,{children:["Creating ",(0,o.jsx)(n.strong,{children:"custom rules"})," to automate approval triggers."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"watch-the-video-tutorial",children:"Watch the Video Tutorial"}),"\n",(0,o.jsx)("div",{style:{position:"relative",width:"100%",paddingBottom:"56.25%"},children:(0,o.jsx)("iframe",{src:"https://www.youtube.com/embed/mvaV1i8Uz90?si=ZGhXn8NtfM0KEykf",title:"YouTube video player",frameborder:"0",allowfullscreen:!0,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}})}),"\n",(0,o.jsx)(n.h2,{id:"understanding-conditional-approvals",children:"Understanding Conditional Approvals"}),"\n",(0,o.jsxs)(n.p,{children:["PandaDoc Advanced Approvals work at ",(0,o.jsx)(n.strong,{children:"two levels"}),":"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Template-Level Approvals"})," \u2013 Apply approval conditions directly within a document template."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Workflow-Level Approvals"})," \u2013 Use a ",(0,o.jsx)(n.strong,{children:"workflow"})," to automate approvals based on CRM data, quotes, or form inputs."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"step-1-setting-up-conditional-approvals-in-a-template",children:"Step 1: Setting Up Conditional Approvals in a Template"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Navigate to a Template"})," and open the ",(0,o.jsx)(n.strong,{children:"Approval Flow"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Add an Approval Block"})," \u2013 Each block represents an approval condition."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Define Approval Conditions"})," \u2013 You can check:","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Specific ",(0,o.jsx)(n.strong,{children:"Quote Data Fields"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["CRM attributes such as ",(0,o.jsx)(n.strong,{children:"Deal Owner"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Line items or ",(0,o.jsx)(n.strong,{children:"product selection"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"example-approval-based-on-product-selection",children:"Example: Approval Based on Product Selection"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Create a ",(0,o.jsx)(n.strong,{children:"Quote Data Field"})," called ",(0,o.jsx)(n.code,{children:"Selected Products"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Define a rule: ",(0,o.jsx)(n.em,{children:'If "Selected Products" contains "Pro Plan Subscription", trigger approval.'})]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"step-2-configuring-quote-data-fields",children:"Step 2: Configuring Quote Data Fields"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Open the Quote Editor"})," and add a new ",(0,o.jsx)(n.strong,{children:"Quote Data Field"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Create Dynamic Quote Data Extraction Rules"}),":","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Extract selected ",(0,o.jsx)(n.strong,{children:"line items"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Capture ",(0,o.jsx)(n.strong,{children:"profit margin, section names, or pricing details"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"example-auto-populate-selected-products",children:"Example: Auto-Populate Selected Products"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Set a rule: ",(0,o.jsx)(n.em,{children:'If a line item is selected, store its name in "Selected Products".'})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["This ensures that the ",(0,o.jsx)(n.strong,{children:"approval condition updates in real time"})," as selections change."]}),"\n",(0,o.jsx)(n.h2,{id:"step-3-automating-approvals-in-a-workflow",children:"Step 3: Automating Approvals in a Workflow"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Go to Workflows"})," and create a new approval workflow."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Connect to CRM"})," \u2013 Ensure that deal and product data are pulled from ",(0,o.jsx)(n.strong,{children:"HubSpot"})," or ",(0,o.jsx)(n.strong,{children:"Salesforce"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Recreate Quote Data Fields in Workflow"}),":","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Match data fields from the ",(0,o.jsx)(n.strong,{children:"template"})," with those in the ",(0,o.jsx)(n.strong,{children:"quote step"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"example-approval-based-on-deal-owner",children:"Example: Approval Based on Deal Owner"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Create a ",(0,o.jsx)(n.strong,{children:"Deal Owner"})," data field."]}),"\n",(0,o.jsxs)(n.li,{children:["Map it to a ",(0,o.jsx)(n.strong,{children:"CRM field"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Set a rule: ",(0,o.jsx)(n.em,{children:'If Deal Owner is "John Doe", trigger approval.'})]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"step-4-testing-the-approval-flow",children:"Step 4: Testing the Approval Flow"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Create a document using the workflow."})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Check if conditions trigger approvals:"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Select ",(0,o.jsx)(n.strong,{children:"a Pro Plan"})," \u2192 Approval is triggered."]}),"\n",(0,o.jsxs)(n.li,{children:["Change to ",(0,o.jsx)(n.strong,{children:"a Business Plan"})," \u2192 Auto-approved."]}),"\n",(0,o.jsxs)(n.li,{children:["Assign ",(0,o.jsx)(n.strong,{children:"different Deal Owner"})," \u2192 Approval status updates dynamically."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Verify CRM-Driven Approvals"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Ensure that ",(0,o.jsx)(n.strong,{children:"CRM fields"})," like ",(0,o.jsx)(n.code,{children:"Deal Owner"})," are correctly mapped."]}),"\n",(0,o.jsxs)(n.li,{children:["If conditions match, the document enters ",(0,o.jsx)(n.strong,{children:"approval mode"}),"."]}),"\n",(0,o.jsx)(n.li,{children:"If no conditions are met, the document is automatically sent."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"key-takeaways",children:"Key Takeaways"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Conditional Approvals"})," enable automatic approval workflows for ",(0,o.jsx)(n.strong,{children:"complex sales processes"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Quote and CRM Data Fields"})," help dynamically adjust approvals based on real-time selections."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Approval triggers"})," can be based on ",(0,o.jsx)(n.strong,{children:"product selection, pricing, CRM attributes, or form responses"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Workflow-Level Approvals"})," allow seamless integration with ",(0,o.jsx)(n.strong,{children:"HubSpot, Salesforce, and internal approvals"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["By leveraging ",(0,o.jsx)(n.strong,{children:"Advanced Approvals"}),", you can streamline ",(0,o.jsx)(n.strong,{children:"contract approvals, sales workflows, and deal reviews"}),", ensuring compliance while maintaining efficiency."]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>r});var l=s(6540);const o={},i=l.createContext(o);function t(e){const n=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);