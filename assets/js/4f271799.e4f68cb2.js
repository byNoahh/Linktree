"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[726],{1268:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>a});var i=s(4848),t=s(8453);const o={id:"configuration",title:"Configuration",type:"reference"},r="Configuration",d={id:"api-reference/configuration",title:"Configuration",description:"Lerna's configuration is split into two files: lerna.json and nx.json.",source:"@site/docs/api-reference/configuration.md",sourceDirName:"api-reference",slug:"/api-reference/configuration",permalink:"/docs/api-reference/configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/lerna/lerna/tree/main/website/docs/api-reference/configuration.md",tags:[],version:"current",frontMatter:{id:"configuration",title:"Configuration",type:"reference"},sidebar:"main",previous:{title:"Commands",permalink:"/docs/api-reference/commands"},next:{title:"Utilities",permalink:"/docs/api-reference/utilities"}},c={},a=[{value:"npmClient",id:"npmclient",level:3},{value:"packages",id:"packages",level:3},{value:"version",id:"version",level:3},{value:"commands",id:"commands",level:3},{value:"Target Defaults",id:"target-defaults",level:2},{value:"cache",id:"cache",level:3},{value:"dependsOn",id:"dependson",level:3},{value:"inputs &amp; namedInputs",id:"inputs--namedinputs",level:3},{value:"Using ^",id:"using-",level:4},{value:"outputs",id:"outputs",level:3},{value:"Project-Specific Configuration",id:"project-specific-configuration",level:2},{value:"inputs &amp; namedInputs",id:"inputs--namedinputs-1",level:3},{value:"dependsOn",id:"dependson-1",level:3},{value:"outputs",id:"outputs-1",level:3},{value:"implicitDependencies",id:"implicitdependencies",level:3},{value:"Additional Configuration",id:"additional-configuration",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"configuration",children:"Configuration"})}),"\n",(0,i.jsxs)(n.p,{children:["Lerna's configuration is split into two files: ",(0,i.jsx)(n.code,{children:"lerna.json"})," and ",(0,i.jsx)(n.code,{children:"nx.json"}),"."]}),"\n",(0,i.jsx)(n.h1,{id:"lernajson",children:"Lerna.json"}),"\n",(0,i.jsx)(n.h3,{id:"npmclient",children:"npmClient"}),"\n",(0,i.jsxs)(n.p,{children:["It is important to set this value if you are not using ",(0,i.jsx)(n.code,{children:"npm"})," as your package manager (e.g. if you are using ",(0,i.jsx)(n.code,{children:"yarn"})," or ",(0,i.jsx)(n.code,{children:"pnpm"}),") so that lerna can adjust some of its internal logic when resolving configuration and packages. This is particularly true in the case of ",(0,i.jsx)(n.code,{children:"pnpm"})," because it uses a separate ",(0,i.jsx)(n.code,{children:"pnpm-workspaces.yaml"})," file to define its workspaces configuration."]}),"\n",(0,i.jsx)(n.h3,{id:"packages",children:"packages"}),"\n",(0,i.jsxs)(n.p,{children:["By default, lerna will try and reuse any ",(0,i.jsx)(n.code,{children:"workspaces"})," configuration you may have from your package manager of choice. If you prefer to specify a subset of your available packages for lerna to operate on, you can use the ",(0,i.jsx)(n.code,{children:"packages"})," property which will tell Lerna where to look for ",(0,i.jsx)(n.code,{children:"package.json"})," files."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="lerna.json"',children:'{\n  "packages": ["packages/*"]\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"version",children:"version"}),"\n",(0,i.jsxs)(n.p,{children:["Lerna has two modes of publishing packages: ",(0,i.jsx)(n.code,{children:"fixed"})," and ",(0,i.jsx)(n.code,{children:"independent"}),". When using the fixed mode, all the affected packages will be published using the same version. The last published version is recorded in ",(0,i.jsx)(n.code,{children:"lerna.json"})," as follows:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="lerna.json"',children:'{\n  "version": "1.2.0"\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["When using the independent mode, every package is versioned separately, and ",(0,i.jsx)(n.code,{children:"lerna.json"})," will look as follows:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="lerna.json"',children:'{\n  "version": "independent"\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["See the ",(0,i.jsx)(n.a,{href:"/docs/features/version-and-publish",children:"version and publish docs"})," for more details."]}),"\n",(0,i.jsx)(n.h3,{id:"commands",children:"commands"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"lerna.json"})," files can also encode options for each command like so:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "command": {\n    "version": {\n      "allowBranch": "main",\n      "conventionalCommits": true\n    }\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Find the available options in ",(0,i.jsx)(n.a,{href:"/docs/api-reference/commands",children:"the API docs"}),"."]}),"\n",(0,i.jsx)(n.h1,{id:"nxjson",children:"Nx.json"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:'NOTE: "{projectRoot}" and "{workspaceRoot}" are special syntax supported by the task-runner, which will be appropriately interpolated internally when the command runs. You should therefore not replace "{projectRoot}" or "{workspaceRoot}" with fixed paths as this makes your configuration less flexible.'}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="nx.json"',children:'{\n  "namedInputs": {\n    "default": ["{projectRoot}/**/*"],\n    "prod": ["!{projectRoot}/**/*.spec.tsx"]\n  },\n  "targetDefaults": {\n    "build": {\n      "dependsOn": ["prebuild", "^build"],\n      "inputs": ["prod", "^prod"],\n      "outputs": ["{projectRoot}/dist"],\n      "cache": true\n    },\n    "test": {\n      "inputs": ["default", "^prod", "{workspaceRoot}/jest.config.ts"],\n      "cache": true\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"target-defaults",children:"Target Defaults"}),"\n",(0,i.jsxs)(n.p,{children:["Targets are npm script names. You can add metadata associated with say the build script of each project in the repo in\nthe ",(0,i.jsx)(n.code,{children:"targetDefaults"})," section."]}),"\n",(0,i.jsx)(n.h3,{id:"cache",children:"cache"}),"\n",(0,i.jsxs)(n.p,{children:["When set to ",(0,i.jsx)(n.code,{children:"true"}),", tells Nx to cache the results of running the script. In most repos all\nnon-long running tasks (i.e., not ",(0,i.jsx)(n.code,{children:"serve"}),") should be cacheable."]}),"\n",(0,i.jsx)(n.h3,{id:"dependson",children:"dependsOn"}),"\n",(0,i.jsxs)(n.p,{children:["Targets can depend on other targets. A common scenario is having to build dependencies of a project first before\nbuilding the project. The ",(0,i.jsx)(n.code,{children:"dependsOn"})," property can be used to define the dependencies of an individual target."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:'"dependsOn": [ "prebuild", "^build"]'})," tells Nx that every build script requires the prebuild script of the same\nproject and the build script of all the dependencies to run first."]}),"\n",(0,i.jsx)(n.h3,{id:"inputs--namedinputs",children:"inputs & namedInputs"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"inputs"})," array tells Nx what to consider to determine whether a particular invocation of a script should be a cache\nhit or not. There are three types of inputs:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Filesets"})}),"\n",(0,i.jsx)(n.p,{children:"Examples:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"{projectRoot}/**.*.ts"})}),"\n",(0,i.jsxs)(n.li,{children:["same as ",(0,i.jsx)(n.code,{children:'{fileset: "{projectRoot}/**/*.ts"}'})]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"{workspaceRoot}/jest.config.ts"})}),"\n",(0,i.jsxs)(n.li,{children:["same as ",(0,i.jsx)(n.code,{children:'{fileset: "{workspaceRoot}/jest.config.ts}'})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Runtime Inputs"})}),"\n",(0,i.jsx)(n.p,{children:"Examples:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:'{runtime: "node -v"}'})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Node the result value is hashed, so it is never displayed."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Env Variables"})}),"\n",(0,i.jsx)(n.p,{children:"Examples:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:'{env: "MY_ENV_VAR"}'})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Node the result value is hashed, so it is never displayed."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Named Inputs"})}),"\n",(0,i.jsx)(n.p,{children:"Examples:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:'inputs: ["prod"]'})}),"\n",(0,i.jsxs)(n.li,{children:["same as ",(0,i.jsx)(n.code,{children:'inputs: [{input: "prod", projects: "self"}]'})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Often the same glob will appear in many places (e.g., prod fileset will exclude spec files for all projects).. Because\nkeeping them in sync is error-prone, we recommend defining named inputs, which you can then reference in all of those\nplaces."}),"\n",(0,i.jsx)(n.h4,{id:"using-",children:"Using ^"}),"\n",(0,i.jsx)(n.p,{children:"Examples:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:'inputs: ["^prod"]'})}),"\n",(0,i.jsxs)(n.li,{children:["same as ",(0,i.jsx)(n.code,{children:'inputs: [{input: "prod", projects: "dependencies"}]'})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Similar to ",(0,i.jsx)(n.code,{children:"dependsOn"}),', the "^" symbols means "dependencies". This is a very important idea, so let\'s illustrate it with\nan example.']}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'"test": {\n  "inputs": [ "default", "^prod" ]\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The configuration above means that the test target depends on all source files of a given project and only prod\nsources (non-test sources) of its dependencies. In other words, it treats test sources as private. If your ",(0,i.jsx)(n.code,{children:"remixapp"}),"\nproject depends on the ",(0,i.jsx)(n.code,{children:"header"})," library, changing the ",(0,i.jsx)(n.code,{children:"header"})," tests will not have any effect on the ",(0,i.jsx)(n.code,{children:"remixapp"})," test\ntarget."]}),"\n",(0,i.jsx)(n.h3,{id:"outputs",children:"outputs"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:'"outputs": ["{projectRoot}/dist"]'})," tells Nx where the build script is going to create file artifacts. The provided\nvalue is actually the default, so we can omit it in this case. ",(0,i.jsx)(n.code,{children:'"outputs": []'})," tells Nx that the test target doesn't\ncreate any artifacts on disk. You can list as many outputs as you many. You can also use globs or individual files as\noutputs."]}),"\n",(0,i.jsx)(n.p,{children:"This configuration is usually not needed. Nx comes with reasonable defaults which implement the configuration above."}),"\n",(0,i.jsx)(n.h2,{id:"project-specific-configuration",children:"Project-Specific Configuration"}),"\n",(0,i.jsxs)(n.p,{children:["For a lot of workspaces, where projects are similar, ",(0,i.jsx)(n.code,{children:"nx.json"})," will contain the whole Nx configuration. Sometimes, it's\nuseful to have a project-specific configuration, which is placed in the project's ",(0,i.jsx)(n.code,{children:"package.json"})," file."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="package.json"',children:'{\n  "name": "parent",\n  "scripts": {\n    "build": "...",\n    "test": "..."\n  },\n  "dependencies": {...},\n  "nx": {\n    "namedInputs": {\n      "prod": [\n        "!{projectRoot}/**/*.test.tsx",\n        "{workspaceRoot}/configs/webpack.conf.js"\n      ]\n    },\n    "targets": {\n      "build": {\n        "dependsOn": [\n          "^build"\n        ],\n        "inputs": [\n          "prod",\n          "^prod"\n        ],\n        "outputs": [\n          "{workspaceRoot}/dist/parent"\n        ]\n      }\n    }\n    "implicitDependencies": ["projecta", "!projectb"]\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Note, the ",(0,i.jsx)(n.code,{children:"namedInputs"})," and ",(0,i.jsx)(n.code,{children:"targetDefaults"})," defined in ",(0,i.jsx)(n.code,{children:"nx.json"})," are simply defaults. If you take that configuration\nand copy it into every project's ",(0,i.jsx)(n.code,{children:"package.json"})," file, the results will be the same."]}),"\n",(0,i.jsxs)(n.p,{children:["In other words, every project has a set of named inputs, and it's defined as: ",(0,i.jsx)(n.code,{children:"{...namedInputsFromNxJson, ...namedInputsFromProjectsPackageJson}"}),". Every target/script's ",(0,i.jsx)(n.code,{children:"dependsOn"})," is defined\nas ",(0,i.jsx)(n.code,{children:"dependsOnFromProjectsPackageJson || dependsOnFromNxJson"}),". The same applies to ",(0,i.jsx)(n.code,{children:"inputs"})," and ",(0,i.jsx)(n.code,{children:"outputs"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"inputs--namedinputs-1",children:"inputs & namedInputs"}),"\n",(0,i.jsxs)(n.p,{children:["Defining ",(0,i.jsx)(n.code,{children:"inputs"})," for a given target would replace the set of inputs for that target name defined in ",(0,i.jsx)(n.code,{children:"nx.json"}),".\nUsing pseudocode ",(0,i.jsx)(n.code,{children:"inputs = packageJson.targets.build.inputs || nxJson.targetDefaults.build.inputs"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["You can also define and redefine named inputs. This enables one key use case, where your ",(0,i.jsx)(n.code,{children:"nx.json"})," can define things\nlike this (which applies to every project):"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'"test": {\n  "inputs": [\n    "default",\n    "^prod"\n  ]\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["And projects can define their prod fileset, without having to redefine the inputs for the ",(0,i.jsx)(n.code,{children:"test"})," target."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="package.json"',children:'{\n  "name": "parent",\n  "scripts": {\n    "build": "...",\n    "test": "..."\n  },\n  "dependencies": {...},\n  "nx": {\n    "namedInputs": {\n      "prod": [\n        "!{projectRoot}/**/*.test.js",\n        "{workspacRoot}/jest.config.js"\n      ]\n    }\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["In this case Nx will use the right ",(0,i.jsx)(n.code,{children:"prod"})," input for each project."]}),"\n",(0,i.jsx)(n.h3,{id:"dependson-1",children:"dependsOn"}),"\n",(0,i.jsxs)(n.p,{children:["Defining ",(0,i.jsx)(n.code,{children:"dependsOn"})," for a given target would replace ",(0,i.jsx)(n.code,{children:"dependsOn"})," for that target name defined in ",(0,i.jsx)(n.code,{children:"nx.json"}),".\nUsing pseudocode ",(0,i.jsx)(n.code,{children:"dependsOn = packageJson.targets.build.dependsOn || nxJson.targetDefaults.build.dependsOn"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"outputs-1",children:"outputs"}),"\n",(0,i.jsxs)(n.p,{children:["Defining ",(0,i.jsx)(n.code,{children:"outputs"})," for a given target would replace ",(0,i.jsx)(n.code,{children:"outputs"})," for that target name defined in ",(0,i.jsx)(n.code,{children:"nx.json"}),".\nUsing pseudocode ",(0,i.jsx)(n.code,{children:"outputs = packageJson.targets.build.outputs || nxJson.targetDefaults.build.outputs"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"implicitdependencies",children:"implicitDependencies"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:'"implicitDependencies": ["projecta", "!projectb"]'})," line tells Nx that the parent project depends on ",(0,i.jsx)(n.code,{children:"projecta"})," even\nthough there is no dependency in its ",(0,i.jsx)(n.code,{children:"package.json"}),". Nx will treat such a dependency in the same way it treats explicit\ndependencies. It also tells Nx that even though there is an explicit dependency on ",(0,i.jsx)(n.code,{children:"projectb"}),", it should be ignored."]}),"\n",(0,i.jsx)(n.h2,{id:"additional-configuration",children:"Additional Configuration"}),"\n",(0,i.jsxs)(n.p,{children:["For additional ways to configure tasks and caching, see the relevant ",(0,i.jsx)(n.a,{href:"https://nx.dev/recipes/running-tasks",children:"Nx documentation"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>d});var i=s(6540);const t={},o=i.createContext(t);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);