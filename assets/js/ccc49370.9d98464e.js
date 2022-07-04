"use strict";(self.webpackChunkthanhdinh_98=self.webpackChunkthanhdinh_98||[]).push([[103],{8665:(e,t,a)=>{a.d(t,{Z:()=>h});var l=a(7294),n=a(6010),r=a(2434),s=a(9960);const i="sidebar_a9qW",o="sidebarItemTitle_uKok",m="sidebarItemList_Kvuv",c="sidebarItem_CF0Q",d="sidebarItemLink_miNk",g="sidebarItemLinkActive_RRTD";var u=a(5999);function p(e){let{sidebar:t}=e;return 0===t.items.length?null:l.createElement("nav",{className:(0,n.Z)(i,"thin-scrollbar"),"aria-label":(0,u.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(o,"margin-bottom--md")},t.title),l.createElement("ul",{className:m},t.items.map((e=>l.createElement("li",{key:e.permalink,className:c},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title))))))}const h=function(e){const{sidebar:t,toc:a,children:s,...i}=e,o=t&&t.items.length>0;return l.createElement(r.Z,i,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},o&&l.createElement("aside",{className:"col col--3"},l.createElement(p,{sidebar:t})),l.createElement("main",{className:(0,n.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&l.createElement("div",{className:"col col--2"},a))))}},8561:(e,t,a)=>{a.d(t,{Z:()=>k});var l=a(7294),n=a(6010),r=a(3905),s=a(5999),i=a(9960),o=a(4996),m=a(5773),c=a(8780),d=a(4689),g=a(6753);const u="blogPostTitle_rzP5",p="blogPostData_Zg1s",h="blogPostDetailsFull_h6_j";var v=a(62);const E="image_o0gy";const b=function(e){let{author:t}=e;const{name:a,title:n,url:r,imageURL:s}=t;return l.createElement("div",{className:"avatar margin-bottom--sm"},s&&l.createElement(i.Z,{className:"avatar__photo-link avatar__photo",href:r},l.createElement("img",{className:E,src:s,alt:a})),a&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(i.Z,{href:r,itemProp:"url"},l.createElement("span",{itemProp:"name"},a))),n&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},n)))},_="authorCol_FlmR",N="imageOnlyAuthorRow_trpF",f="imageOnlyAuthorCol_S2np";function Z(e){let{authors:t,assets:a}=e;if(0===t.length)return null;const r=t.every((e=>{let{name:t}=e;return!t}));return l.createElement("div",{className:(0,n.Z)("margin-top--md margin-bottom--sm",r?N:"row")},t.map(((e,t)=>{var s;return l.createElement("div",{className:(0,n.Z)(!r&&"col col--6",r?f:_),key:t},l.createElement(b,{author:{...e,imageURL:null!=(s=a.authorsImageUrls[t])?s:e.imageURL}}))})))}const k=function(e){var t;const a=function(){const{selectMessage:e}=(0,m.c2)();return t=>{const a=Math.ceil(t);return e(a,(0,s.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{withBaseUrl:E}=(0,o.C)(),{children:b,frontMatter:_,assets:N,metadata:f,truncated:k,isBlogPostPage:P=!1}=e,{date:C,formattedDate:L,permalink:T,tags:y,readingTime:w,title:I,editUrl:x,authors:A}=f,M=null!=(t=N.image)?t:_.image,R=!P&&k,H=y.length>0,U=P?"h1":"h2";return l.createElement("article",{className:P?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},l.createElement("header",null,l.createElement(U,{className:u,itemProp:"headline"},P?I:l.createElement(i.Z,{itemProp:"url",to:T},I)),l.createElement("div",{className:(0,n.Z)(p,"margin-vert--md")},l.createElement("time",{dateTime:C,itemProp:"datePublished"},L),void 0!==w&&l.createElement(l.Fragment,null," \xb7 ",a(w))),l.createElement(Z,{authors:A,assets:N})),M&&l.createElement("meta",{itemProp:"image",content:E(M,{absolute:!0})}),l.createElement("div",{id:P?c.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},l.createElement(r.Zo,{components:d.Z},b)),(H||k)&&l.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",{[h]:P})},H&&l.createElement("div",{className:(0,n.Z)("col",{"col--9":R})},l.createElement(v.Z,{tags:y})),P&&x&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(g.Z,{editUrl:x})),R&&l.createElement("div",{className:(0,n.Z)("col text--right",{"col--3":H})},l.createElement(i.Z,{to:f.permalink,"aria-label":"Read more about "+I},l.createElement("b",null,l.createElement(s.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},9360:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var l=a(7294),n=a(1217),r=a(8665),s=a(8561),i=a(7462),o=a(5999),m=a(1750);const c=function(e){const{nextItem:t,prevItem:a}=e;return l.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},l.createElement("div",{className:"pagination-nav__item"},a&&l.createElement(m.Z,(0,i.Z)({},a,{subLabel:l.createElement(o.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")}))),l.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&l.createElement(m.Z,(0,i.Z)({},t,{subLabel:l.createElement(o.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")}))))};var d=a(5773),g=a(1575);const u=function(e){var t;const{content:a,sidebar:i}=e,{assets:o,metadata:m}=a,{title:u,description:p,nextItem:h,prevItem:v,date:E,tags:b,authors:_,frontMatter:N}=m,{hide_table_of_contents:f,keywords:Z,toc_min_heading_level:k,toc_max_heading_level:P}=N,C=null!=(t=o.image)?t:N.image;return l.createElement(r.Z,{wrapperClassName:d.kM.wrapper.blogPages,pageClassName:d.kM.page.blogPostPage,sidebar:i,toc:!f&&a.toc&&a.toc.length>0?l.createElement(g.Z,{toc:a.toc,minHeadingLevel:k,maxHeadingLevel:P}):void 0},l.createElement(n.Z,{title:u,description:p,keywords:Z,image:C},l.createElement("meta",{property:"og:type",content:"article"}),l.createElement("meta",{property:"article:published_time",content:E}),_.some((e=>e.url))&&l.createElement("meta",{property:"article:author",content:_.map((e=>e.url)).filter(Boolean).join(",")}),b.length>0&&l.createElement("meta",{property:"article:tag",content:b.map((e=>e.label)).join(",")})),l.createElement(s.Z,{frontMatter:N,assets:o,metadata:m,isBlogPostPage:!0},l.createElement(a,null)),(h||v)&&l.createElement(c,{nextItem:h,prevItem:v}))}},6753:(e,t,a)=>{a.d(t,{Z:()=>c});var l=a(7294),n=a(5999),r=a(7462),s=a(6010);const i="iconEdit_dcUD";const o=function(e){let{className:t,...a}=e;return l.createElement("svg",(0,r.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(i,t),"aria-hidden":"true"},a),l.createElement("g",null,l.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};var m=a(5773);function c(e){let{editUrl:t}=e;return l.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:m.kM.common.editThisPage},l.createElement(o,null),l.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},1750:(e,t,a)=>{a.d(t,{Z:()=>r});var l=a(7294),n=a(9960);const r=function(e){const{permalink:t,title:a,subLabel:r}=e;return l.createElement(n.Z,{className:"pagination-nav__link",to:t},r&&l.createElement("div",{className:"pagination-nav__sublabel"},r),l.createElement("div",{className:"pagination-nav__label"},a))}},1575:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(7462),n=a(7294),r=a(6010),s=a(5002);const i="tableOfContents_cNA8";const o=function(e){let{className:t,...a}=e;return n.createElement("div",{className:(0,r.Z)(i,"thin-scrollbar",t)},n.createElement(s.Z,(0,l.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},5002:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(7462),n=a(7294),r=a(5773);function s(e){let{toc:t,className:a,linkClassName:l,isChild:r}=e;return t.length?n.createElement("ul",{className:r?void 0:a},t.map((e=>n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:null!=l?l:void 0,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(s,{isChild:!0,toc:e.children,className:a,linkClassName:l}))))):null}function i(e){let{toc:t,className:a="table-of-contents table-of-contents__left-border",linkClassName:i="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:m,maxHeadingLevel:c,...d}=e;const g=(0,r.LU)(),u=null!=m?m:g.tableOfContents.minHeadingLevel,p=null!=c?c:g.tableOfContents.maxHeadingLevel,h=(0,r.DA)({toc:t,minHeadingLevel:u,maxHeadingLevel:p}),v=(0,n.useMemo)((()=>{if(i&&o)return{linkClassName:i,linkActiveClassName:o,minHeadingLevel:u,maxHeadingLevel:p}}),[i,o,u,p]);return(0,r.Si)(v),n.createElement(s,(0,l.Z)({toc:h,className:a,linkClassName:i},d))}},7774:(e,t,a)=>{a.d(t,{Z:()=>m});var l=a(7294),n=a(6010),r=a(9960);const s="tag_hD8n",i="tagRegular_D6E_",o="tagWithCount_i0QQ";const m=function(e){const{permalink:t,name:a,count:m}=e;return l.createElement(r.Z,{href:t,className:(0,n.Z)(s,{[i]:!m,[o]:m})},a,m&&l.createElement("span",null,m))}},62:(e,t,a)=>{a.d(t,{Z:()=>m});var l=a(7294),n=a(6010),r=a(5999),s=a(7774);const i="tags_XVD_",o="tag_JSN8";function m(e){let{tags:t}=e;return l.createElement(l.Fragment,null,l.createElement("b",null,l.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),l.createElement("ul",{className:(0,n.Z)(i,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return l.createElement("li",{key:a,className:o},l.createElement(s.Z,{name:t,permalink:a}))}))))}}}]);