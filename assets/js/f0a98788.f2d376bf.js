"use strict";(self.webpackChunkpushpreview=self.webpackChunkpushpreview||[]).push([[385],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),h=i,d=c["".concat(s,".").concat(h)]||c[h]||m[h]||a;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7369:(e,t,n)=>{n.d(t,{ZP:()=>l});var r=n(7462),i=(n(7294),n(3905));const a={toc:[]},o="wrapper";function l(e){let{components:t,...n}=e;return(0,i.kt)(o,(0,r.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To configure the GitHub secret, follow these steps:"),(0,i.kt)("div",{style:{position:"relative",paddingBottom:"45.833333333333336%",height:0}},(0,i.kt)("iframe",{src:"https://www.loom.com/embed/0ea45915171245c881be5e8248fa7781?sid=c4c49ec5-af5e-4faf-84eb-8754a8d1cd3a",frameBorder:"0",allowFullScreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Generate a PushPreview token. For more information, see ",(0,i.kt)("a",{parentName:"p",href:"/configuration/authentication"},"Authentication"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to the ",(0,i.kt)("strong",{parentName:"p"},"Settings")," tab of your GitHub repository or organization.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Settings")," menu, navigate to ",(0,i.kt)("strong",{parentName:"p"},"Secrets")," and chose ",(0,i.kt)("strong",{parentName:"p"},"Actions"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click on ",(0,i.kt)("strong",{parentName:"p"},"New repository")," secret or ",(0,i.kt)("strong",{parentName:"p"},"New organization secret"),", depending on your choice in the previous step.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Use the following details to create a new token:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Name"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"PUSHPREVIEW_TOKEN")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Token"),": The token you have generated."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Add secret"),"."))))}l.isMDXComponent=!0},5364:(e,t,n)=>{n.d(t,{ZP:()=>l});var r=n(7462),i=(n(7294),n(3905));const a={toc:[]},o="wrapper";function l(e){let{components:t,...l}=e;return(0,i.kt)(o,(0,r.Z)({},a,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To ensure proper functioning of the PushPreview integration in your GitHub repository, follow these steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a new pull request in your GitHub repository.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add the ",(0,i.kt)("inlineCode",{parentName:"p"},"preview")," label to your new pull request. If the label doesn\u2019t exist, ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/managing-labels#creating-a-label"},"create a new one"),"."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Preview changes",src:n(8809).Z,width:"2880",height:"1089"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Wait briefly for PushPreview to process the pull request and post a comment in the pull request thread.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Look for a comment from PushPreview containing a preview link. Click this link to view the changes."))),(0,i.kt)("p",null,"Congratulations on setting up PushPreview! Your users can now view live previews of changes in pull requests, enhancing collaboration and review efficiency."))}l.isMDXComponent=!0},9580:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var r=n(7462),i=(n(7294),n(3905)),a=n(7369),o=n(5364);const l={sidebar_label:"HTML",sidebar_position:1},s="Pull request previews for any static site",p={unversionedId:"installation/html",id:"installation/html",title:"Pull request previews for any static site",description:"Here's a step-by-step guide to help you install PushPreview in your static site.",source:"@site/docs/installation/html.mdx",sourceDirName:"installation",slug:"/installation/html",permalink:"/installation/html",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"HTML",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/category/installation"},next:{title:"Docusaurus",permalink:"/installation/docusaurus"}},u={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"1. Add the workflow to your repository",id:"1-add-the-workflow-to-your-repository",level:2},{value:"2. Configure the GitHub secret",id:"2-configure-the-github-secret",level:2},{value:"3. Verify the installation",id:"3-verify-the-installation",level:2}],m={toc:c},h="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(h,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pull-request-previews-for-any-static-site"},"Pull request previews for any static site"),(0,i.kt)("p",null,"Here's a step-by-step guide to help you install PushPreview in your static site."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Before you begin, you'll need to have the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A PushPreview account. If you don't have one, ",(0,i.kt)("a",{parentName:"li",href:"https://app.pushpreview.com/accounts/signup/"},"sign up for free"),"."),(0,i.kt)("li",{parentName:"ul"},"An static site (HTML) created.")),(0,i.kt)("h2",{id:"1-add-the-workflow-to-your-repository"},"1. Add the workflow to your repository"),(0,i.kt)("p",null,"To set up the PushPreview workflow in your project:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to the ",(0,i.kt)("inlineCode",{parentName:"p"},".github/workflows")," directory in your repository.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a new file named ",(0,i.kt)("inlineCode",{parentName:"p"},"pushpreview.yml"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Copy the following content into ",(0,i.kt)("inlineCode",{parentName:"p"},"pushpreview.yml"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"name: PushPreview\n\non:\n  pull_request_target:\n    types:\n      - labeled\n\njobs:\n  preview:\n    runs-on: ubuntu-latest\n    if: github.event.label.name == 'preview'\n    steps:\n      - uses: actions/checkout@v3\n      - name: Comment\n        run: |\n          gh pr comment ${{ github.event.pull_request.number }} --repo ${{ github.repository }} --body \"\u2699\ufe0f Hang tight! PushPreview is currently building your preview. We'll share the URL as soon as it's ready.\"\n        env:\n          GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n\n      - name: Setup environment\n        uses: actions/setup-node@v3\n        with:\n          node-version: 18\n\n      - name: Set BASE_URL\n        run: echo \"BASE_URL=/github/${{ github.repository }}/${{ github.event.number }}/\" >> $GITHUB_ENV\n\n      - name: Build site\n        run: |\n          cd docs\n          yarn install --frozen-lockfile\n          yarn build\n\n      - name: Generate preview\n        uses: PushLabsHQ/pushpreview-action@1.0.6\n        with:\n          source-directory: ./docs/build\n          github-token: ${{ secrets.GITHUB_TOKEN }}\n          pushpreview-token: ${{ secrets.PUSHPREVIEW_TOKEN }}\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Modify the ",(0,i.kt)("strong",{parentName:"p"},"Setup environment")," and ",(0,i.kt)("strong",{parentName:"p"},"Build site")," steps to match your specific static site build process.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Ensure the ",(0,i.kt)("inlineCode",{parentName:"p"},"source-directory")," in the ",(0,i.kt)("strong",{parentName:"p"},"Generate preview")," step points to where your HTML files are located after the build.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Save your changes and push the updated ",(0,i.kt)("inlineCode",{parentName:"p"},"pushpreview.yml")," file to your repository."))),(0,i.kt)("h2",{id:"2-configure-the-github-secret"},"2. Configure the GitHub secret"),(0,i.kt)(a.ZP,{mdxType:"GitHubSecret"}),(0,i.kt)("h2",{id:"3-verify-the-installation"},"3. Verify the installation"),(0,i.kt)(o.ZP,{mdxType:"VerifyInstallation"}))}d.isMDXComponent=!0},8809:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/pushpreview-demo-8db2ef8af4934329cb82da971d6aa134.png"}}]);