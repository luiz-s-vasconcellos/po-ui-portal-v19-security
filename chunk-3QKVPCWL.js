import{$ as Z,$a as A,$d as T,A as Se,Aa as ee,Bd as Ne,Ca as I,Cd as He,Da as k,Ea as F,Ec as ke,F as u,Fd as U,G as b,Ga as e,Ha as pe,Ia as D,Ka as x,La as v,Lb as z,Ma as g,Mb as _e,Na as q,Nb as De,Oa as te,Ob as j,Pa as f,Pb as Ae,Rc as Fe,Rd as ze,T as s,Tc as Oe,U as w,Ua as ne,Va as fe,Vc as Le,Wa as ye,Wb as Me,Yb as ie,Zb as ce,_ as S,_b as R,_d as C,a as G,ab as Ce,b as J,bc as Ie,ce as je,dd as qe,ea as $,ed as X,fd as K,gd as ue,ha as c,hd as Ve,ib as Te,id as Be,jd as y,ka as _,la as he,lb as Pe,na as t,oa as n,pa as i,pb as we,pd as ae,q as Ee,ta as B,te as P,ua as E,ue as We,va as xe,vc as W,vd as Re,x as L,xc as O,y as Y,ya as ve,yc as oe,za as ge}from"./chunk-Y4SQKOF7.js";var pt=()=>({table:"PO Table",angular:"PO-UI"}),ct=r=>[r],Ue=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275cmp=S({type:r,selectors:[["sample-po-table-basic"]],standalone:!1,decls:1,vars:4,consts:[[3,"p-items"]],template:function(l,o){l&1&&i(0,"po-table",0),l&2&&c("p-items",f(2,ct,te(1,pt)))},dependencies:[y],encapsulation:2})}return r})();var bt=r=>({"docs-sample-code-tabs":r}),Qe=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=S({type:r,selectors:[["sample-po-table-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(i(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Table Basic"),n(),t(4,"a",2),E("click",function(){return o.toggleSampleCodeTabs()}),i(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-table-basic/sample-po-table-basic.component.html"),n(),t(13,"pre",7),e(14,`<po-table [p-items]="[{ table: 'PO Table', angular: 'PO-UI' }]"> </po-table>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-table-basic/sample-po-table-basic.component.ts"),n(),t(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-table-basic',
  templateUrl: './sample-po-table-basic.component.html',
  standalone: false
})
export class SamplePoTableBasicComponent {}
`),n()()()()(),t(21,"div",10),i(22,"sample-po-table-basic"),n(),i(23,"hr")),l&2&&(s(5),_("po-icon "+o.sampleCodeButtonIcon),s(),D(" ",o.sampleCodeButtonLabel,""),s(),c("ngClass",f(4,bt,o.hideSampleCodeTabs)))},dependencies:[A,P,C,T,Ue],encapsulation:2})}return r})();var le=(()=>{class r{colors=["color-01","color-02","color-03","color-04","color-05","color-06","color-07","color-08","color-09","color-10","color-11","color-12"];generateNewItem(a){return{text:`Text ${a}`,page:`Link ${a}`,link:"https://po-ui.io/",number:a,date:this.generateRandomDate(),time:this.generateRandomTime(),dateTime:this.generateRandomDate(),currency:this.generateRandomNumber(),subtitle:this.generateRandomColor(),detail:[{info:"Detail Information 1",date:new Date,time:this.generateRandomTime(),currency:1500.5},{info:"Detail Information 2",date:new Date,time:this.generateRandomTime(),currency:6511}],label:this.generateRandomColor(),color:`Text ${a}`,icon:this.generateRandomIcon(a),boolean:this.generateRandomBoolean()}}getColumns(){return{text:{property:"text",width:"30%"},number:{property:"number",type:"number"},date:{property:"date",type:"date"},time:{property:"time",type:"time"},dateTime:{property:"dateTime",label:"DateTime",type:"dateTime"},currency:{property:"currency",type:"currency",format:"USD"},link:{property:"page",label:"Link",type:"link"},icon:{property:"icon",type:"icon"},boolean:{property:"boolean",type:"boolean"},subtitle:{property:"subtitle",type:"subtitle",width:"10%",subtitles:[{value:"color-01",color:"color-01",label:"Color 1",content:"1"},{value:"color-02",color:"color-02",label:"Color 2",content:"2"},{value:"color-03",color:"color-03",label:"Color 3",content:"3"},{value:"color-04",color:"color-04",label:"Color 4",content:"4"},{value:"color-05",color:"color-05",label:"Color 5",content:"5"},{value:"color-06",color:"color-06",label:"Color 6",content:"6"},{value:"color-07",color:"color-07",label:"Color 7",content:"7"},{value:"color-08",color:"color-08",label:"Color 8",content:"8"},{value:"color-09",color:"color-09",label:"Color 9",content:"9"},{value:"color-10",color:"color-10",label:"Color 10",content:"10"},{value:"color-11",color:"color-11",label:"Color 11",content:"11"},{value:"color-12",color:"color-12",label:"Color 12",content:"12"}]},label:{property:"label",type:"label",width:"10%",labels:[{value:"color-01",color:"color-01",label:"Color 1"},{value:"color-02",color:"color-02",label:"Color 2"},{value:"color-03",color:"color-03",label:"Color 3"},{value:"color-04",color:"color-04",label:"Color 4"},{value:"color-05",color:"color-05",label:"Color 5"},{value:"color-06",color:"color-06",label:"Color 6"},{value:"color-07",color:"color-07",label:"Color 7"},{value:"color-08",color:"color-08",label:"Color 8"},{value:"color-09",color:"color-09",label:"Color 9"},{value:"color-10",color:"color-10",label:"Color 10"},{value:"color-11",color:"color-11",label:"Color 11"},{value:"color-12",color:"color-12",label:"Color 12"}]},color:{property:"color",width:"10%",color:this.changeColor},detail:{property:"detail",type:"detail",detail:{columns:[{property:"info",label:"Detail"},{property:"date",label:"Detail Date",type:"date",format:"dd-MM-yy"},{property:"time",label:"Detail Time",type:"time"},{property:"currency",label:"Detail Currency",type:"currency"}],typeHeader:"inline"}}}}changeColor(a,l){return a[l].slice(5,7).trim()%2===0?"color-08":"color-11"}generateRandomBoolean(){return Math.random()>=.5}generateRandomNumber(){return(Math.random()*200+1).toFixed(3)}generateRandomColor(){return this.colors[Math.floor(Math.random()*this.colors.length)]}generateRandomIcon(a){let l=["an an-copy","an an-check","an an-camera","an an-plant","an an-building-apartment"],o=["an an-trash","an an-newspaper","an an-gas-pump","an an-chats","an an-bluetooth"],m=Math.floor(Math.random()*5);return[{value:`${a}`,icon:l[m],tooltip:l[m]},{value:`${a}`,icon:o[m],tooltip:o[m]}]}generateRandomTime(){let a=Math.floor(Math.random()*23),l=Math.floor(Math.random()*59),o=Math.floor(Math.random()*59),m=a<10?"0"+a.toString():a.toString(),p=l<10?"0"+l.toString():l.toString(),d=o<10?"0"+o.toString():o.toString();return`${m}:${p}:${d}`}generateRandomDate(){let a=Math.floor(Math.random()*28),l=Math.floor(Math.random()*12),o=Math.floor(Math.random()*24)+2e3;return new Date(o,l,a)}static \u0275fac=function(l){return new(l||r)};static \u0275prov=L({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var Je=(()=>{class r{samplePoTableLabsService;poModal;actions;actionsDefinition;actionTableFirst={action:this.openModal.bind(this),disabled:this.disableAction.bind(this),label:"First Action"};actionTableSecond={action:this.openModal.bind(this),label:"Second Action"};columns;columnsDefinition;columnsName;componentsSize;container;currentItem;customLiterals;event;height;items;itemIndex=0;literals;maxColumns;properties=["hideBatchActions","hideTableSearch"];selection;spacing=ue.Medium;filterType=X.startsWith;filteredColumns=[];actionsDefinitionOptions=[{label:"Actions",value:"actions"},{label:"Disable first action",value:"disableAction",disabled:!0},{label:"Single action",value:"singleAction"},{label:"First action visible",value:"visibleAction"}];selectionOptions=[{label:"Selectable",value:"selectable"},{label:"Hide select all",value:"hideSelectAll",disabled:!0},{label:"Single select",value:"singleSelect",disabled:!0}];componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];filterModeOptions=[{label:"Starts With",value:X.startsWith},{label:"Contains",value:X.contains},{label:"Ends With",value:X.endsWith}];columnsOptions=[{value:"text",label:"Text"},{value:"link",label:"Link"},{value:"number",label:"Number"},{value:"currency",label:"Currency"},{value:"date",label:"Date"},{value:"time",label:"Time"},{value:"dateTime",label:"DateTime"},{value:"subtitle",label:"Subtitle"},{value:"detail",label:"Detail"},{value:"label",label:"Label"},{value:"color",label:"Color"},{value:"icon",label:"Icon"},{value:"boolean",label:"Boolean"}];propertiesOptions=[{label:"Sort",value:"sort"},{label:"Striped",value:"striped"},{label:"Show more disabled",value:"showMoreDisabled"},{label:"Loading show more",value:"loadingShowMore"},{label:"Hide detail",value:"hideDetail"},{label:"Loading",value:"loading"},{label:"Auto collapse",value:"autoCollapse"},{label:"Hide columns manager",value:"hideColumnsManager"},{label:"Hide batch actions",value:"hideBatchActions"},{label:"Actions Right",value:"actionsRight"},{label:"Draggable",value:"draggable"},{label:"Hide action fixed columns",value:"fixed"},{label:"Hide Table Search",value:"hideTableSearch"},{label:"Virtual Scroll",value:"virtualScroll"}];typeHeaderOptions=[{label:"Inline",value:"inline"},{label:"None",value:"none"},{label:"Top",value:"top"}];typeSpacing=[{label:"Small",value:"small"},{label:"Medium",value:"medium"},{label:"Large",value:"large"}];constructor(a){this.samplePoTableLabsService=a,this.columnsDefinition=this.samplePoTableLabsService?.getColumns()}ngOnInit(){this.restore()}addItem(){this.items=[...this.items,this.samplePoTableLabsService.generateNewItem(this.itemIndex)],this.itemIndex++}changeActionOptions(){let a=this.actionsDefinition.actions;this.actionsDefinitionOptions[1].disabled=!a,this.actionsDefinitionOptions[2].disabled=!a,this.actionsDefinitionOptions[3].disabled=!a,this.actionsDefinitionOptions=[].concat(this.actionsDefinitionOptions),this.actions=a?this.actionsDefinition.singleAction?[this.actionTableFirst]:[this.actionTableFirst,this.actionTableSecond]:[],this.actionTableFirst.visible=this.actionsDefinition.visibleAction,this.spacingSelectOrAction()}changeEvent(a){this.event=a}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals=void 0}}changeFilteredColumns(){this.filteredColumns=this.filteredColumns.toString().split(/,\s*/)}changeSelectionOptions(){let a=this.selection.includes("singleSelect"),l=this.selection.includes("selectable");this.selectionOptions[1].disabled=a||!l,this.selectionOptions[2].disabled=!l,this.selectionOptions=[].concat(this.selectionOptions),this.spacingSelectOrAction()}deleteItems(a){this.height&&(this.items=a)}disableAction(){return this.actionsDefinition.disableAction}openModal(a){this.currentItem=a.text,this.poModal.open()}restore(){this.actionsDefinition={visibleAction:null},this.actions=[],this.columnsDefinition.detail.detail.typeHeader=void 0,this.columnsName=[],this.container="",this.customLiterals=void 0,this.height=void 0,this.componentsSize="medium",this.items=[],this.itemIndex=0,this.literals="",this.maxColumns=void 0,this.properties=["hideBatchActions","hideTableSearch"],this.selection=[],this.spacing=ue.Medium,this.filteredColumns=[],this.updateColumns(),this.changeActionOptions()}showMore(){this.addItem()}updateColumns(){this.columns=[],this.columnsName.forEach(a=>{this.columns.push(this.columnsDefinition[a])})}spacingSelectOrAction(){this.columnsName.length>0&&this.updateColumns()}static \u0275fac=function(l){return new(l||r)(w(le))};static \u0275cmp=S({type:r,selectors:[["sample-po-table-labs"]],viewQuery:function(l,o){if(l&1&&I(O,7),l&2){let m;k(m=F())&&(o.poModal=m.first)}},standalone:!1,features:[q([le])],decls:34,vars:51,consts:[["f","ngForm"],[3,"p-all-selected","p-all-unselected","p-collapsed","p-expanded","p-selected","p-show-more","p-unselected","p-delete-items","p-actions","p-actions-right","p-columns","p-container","p-height","p-filter-type","p-components-size","p-hide-detail","p-hide-columns-manager","p-hide-batch-actions","p-hide-table-search","p-hide-select-all","p-items","p-literals","p-filtered-columns","p-loading","p-max-columns","p-selectable","p-spacing","p-loading-show-more","p-show-more-disabled","p-single-select","p-sort","p-striped","p-virtual-scroll","p-auto-collapse","p-draggable","p-hide-action-fixed-columns"],[1,"po-row"],["p-label","Event",1,"po-md-12",3,"p-value"],["p-label","Add Item",1,"po-md-3",3,"p-click"],["name","columnsName","p-label","Columns","p-columns","4",1,"po-md-12",3,"ngModelChange","p-change","ngModel","p-options"],["p-columns","3","name","typeHeader","p-label","Column detail typeHeader",1,"po-lg-9",3,"ngModelChange","ngModel","p-options"],["name","hideSelect","p-label","Column detail hideSelect",1,"po-lg-3",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties","p-columns","4",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","actionsDefinition","p-columns","4","p-indeterminate","","p-label","Actions",1,"po-lg-12",3,"ngModelChange","p-change","ngModel","p-options"],["name","spacing","p-columns","4","p-label","Spacing",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","selection","p-columns","4","p-help","To enable 'hide select all' and 'single select' check 'selectable'.","p-label","Selection",1,"po-lg-12",3,"ngModelChange","p-change","ngModel","p-options"],["name","filterMode","p-columns","4","p-label","Filter mode",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","literals","p-help",'Ex.: {"noData": "Sem dados a serem exibidos", "noColumns": "Colunas n\xE3o definidas"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","filteredColumns","p-help",'Ex.: "text, time"',"p-label","Filter Columns",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","height","p-clean","","p-help","Height of table","p-label","Height",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxColumns","p-clean","","p-help","Max columns to be visible","p-label","Max Columns",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"],["p-click-out","true","p-size","sm","p-title","PO Table"],["p-label","Chosen Item:",3,"p-value"]],template:function(l,o){if(l&1){let m=B();t(0,"po-table",1),E("p-all-selected",function(){return u(m),b(o.changeEvent("p-all-selected"))})("p-all-unselected",function(){return u(m),b(o.changeEvent("p-all-unselected"))})("p-collapsed",function(){return u(m),b(o.changeEvent("p-collapsed"))})("p-expanded",function(){return u(m),b(o.changeEvent("p-expanded"))})("p-selected",function(){return u(m),b(o.changeEvent("p-selected"))})("p-show-more",function(){return u(m),b(o.showMore())})("p-unselected",function(){return u(m),b(o.changeEvent("p-unselected"))})("p-delete-items",function(d){return u(m),b(o.deleteItems(d))}),n(),i(1,"po-divider"),t(2,"div",2),i(3,"po-info",3),n(),i(4,"po-divider"),t(5,"div",2)(6,"po-button",4),E("p-click",function(){return u(m),b(o.addItem())}),n()(),i(7,"po-divider"),t(8,"form",null,0)(10,"div",2)(11,"po-checkbox-group",5),g("ngModelChange",function(d){return u(m),v(o.columnsName,d)||(o.columnsName=d),b(d)}),E("p-change",function(){return u(m),b(o.updateColumns())}),n()(),t(12,"div",2)(13,"po-radio-group",6),g("ngModelChange",function(d){return u(m),v(o.columnsDefinition.detail.detail.typeHeader,d)||(o.columnsDefinition.detail.detail.typeHeader=d),b(d)}),n(),t(14,"po-switch",7),g("ngModelChange",function(d){return u(m),v(o.columnsDefinition.detail.detail.hideSelect,d)||(o.columnsDefinition.detail.detail.hideSelect=d),b(d)}),n()(),t(15,"div",2)(16,"po-checkbox-group",8),g("ngModelChange",function(d){return u(m),v(o.properties,d)||(o.properties=d),b(d)}),n()(),t(17,"div",2)(18,"po-checkbox-group",9),g("ngModelChange",function(d){return u(m),v(o.actionsDefinition,d)||(o.actionsDefinition=d),b(d)}),E("p-change",function(){return u(m),b(o.changeActionOptions())}),n()(),t(19,"div",2)(20,"po-radio-group",10),g("ngModelChange",function(d){return u(m),v(o.spacing,d)||(o.spacing=d),b(d)}),n()(),t(21,"div",2)(22,"po-checkbox-group",11),g("ngModelChange",function(d){return u(m),v(o.selection,d)||(o.selection=d),b(d)}),E("p-change",function(){return u(m),b(o.changeSelectionOptions())}),n(),t(23,"po-radio-group",12),g("ngModelChange",function(d){return u(m),v(o.filterType,d)||(o.filterType=d),b(d)}),n(),t(24,"po-radio-group",13),g("ngModelChange",function(d){return u(m),v(o.componentsSize,d)||(o.componentsSize=d),b(d)}),n()(),t(25,"div",2)(26,"po-input",14),g("ngModelChange",function(d){return u(m),v(o.literals,d)||(o.literals=d),b(d)}),E("p-change",function(){return u(m),b(o.changeLiterals())}),n(),t(27,"po-input",15),g("ngModelChange",function(d){return u(m),v(o.filteredColumns,d)||(o.filteredColumns=d),b(d)}),E("p-change",function(){return u(m),b(o.changeFilteredColumns())}),n(),t(28,"po-number",16),g("ngModelChange",function(d){return u(m),v(o.height,d)||(o.height=d),b(d)}),n(),t(29,"po-number",17),g("ngModelChange",function(d){return u(m),v(o.maxColumns,d)||(o.maxColumns=d),b(d)}),n()(),t(30,"div",2)(31,"po-button",18),E("p-click",function(){return u(m),b(o.restore())}),n()()(),t(32,"po-modal",19),i(33,"po-info",20),n()}l&2&&(c("p-actions",o.actions)("p-actions-right",o.properties.includes("actionsRight"))("p-columns",o.columns)("p-container",o.container)("p-height",o.height)("p-filter-type",o.filterType)("p-components-size",o.componentsSize)("p-hide-detail",o.properties.includes("hideDetail"))("p-hide-columns-manager",o.properties.includes("hideColumnsManager"))("p-hide-batch-actions",o.properties.includes("hideBatchActions"))("p-hide-table-search",o.properties.includes("hideTableSearch"))("p-hide-select-all",o.selection.includes("hideSelectAll"))("p-items",o.items)("p-literals",o.customLiterals)("p-filtered-columns",o.filteredColumns)("p-loading",o.properties.includes("loading"))("p-max-columns",o.maxColumns)("p-selectable",o.selection.includes("selectable"))("p-spacing",o.spacing)("p-loading-show-more",o.properties.includes("loadingShowMore"))("p-show-more-disabled",o.properties.includes("showMoreDisabled"))("p-single-select",o.selection.includes("singleSelect"))("p-sort",o.properties.includes("sort"))("p-striped",o.properties.includes("striped"))("p-virtual-scroll",o.properties.includes("virtualScroll"))("p-auto-collapse",o.properties.includes("autoCollapse"))("p-draggable",o.properties.includes("draggable"))("p-hide-action-fixed-columns",o.properties.includes("fixed")),s(3),c("p-value",o.event),s(8),x("ngModel",o.columnsName),c("p-options",o.columnsOptions),s(2),x("ngModel",o.columnsDefinition.detail.detail.typeHeader),c("p-options",o.typeHeaderOptions),s(),x("ngModel",o.columnsDefinition.detail.detail.hideSelect),s(2),x("ngModel",o.properties),c("p-options",o.propertiesOptions),s(2),x("ngModel",o.actionsDefinition),c("p-options",o.actionsDefinitionOptions),s(2),x("ngModel",o.spacing),c("p-options",o.typeSpacing),s(2),x("ngModel",o.selection),c("p-options",o.selectionOptions),s(),x("ngModel",o.filterType),c("p-options",o.filterModeOptions),s(),x("ngModel",o.componentsSize),c("p-options",o.componentsSizeOptions),s(2),x("ngModel",o.literals),s(),x("ngModel",o.filteredColumns),s(),x("ngModel",o.height),s(),x("ngModel",o.maxColumns),s(4),c("p-value",o.currentItem))},dependencies:[Ae,z,_e,j,De,W,R,Oe,Le,ae,Re,qe,U,O,y],encapsulation:2})}return r})();var xt=r=>({"docs-sample-code-tabs":r}),$e=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=S({type:r,selectors:[["sample-po-table-labs-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(i(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Table Labs"),n(),t(4,"a",2),E("click",function(){return o.toggleSampleCodeTabs()}),i(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-table-labs/sample-po-table-labs.component.html"),n(),t(13,"pre",7),e(14,`<po-table
  [p-actions]="actions"
  [p-actions-right]="properties.includes('actionsRight')"
  [p-columns]="columns"
  [p-container]="container"
  [p-height]="height"
  [p-filter-type]="filterType"
  [p-components-size]="componentsSize"
  [p-hide-detail]="properties.includes('hideDetail')"
  [p-hide-columns-manager]="properties.includes('hideColumnsManager')"
  [p-hide-batch-actions]="properties.includes('hideBatchActions')"
  [p-hide-table-search]="properties.includes('hideTableSearch')"
  [p-hide-select-all]="selection.includes('hideSelectAll')"
  [p-items]="items"
  [p-literals]="customLiterals"
  [p-filtered-columns]="filteredColumns"
  [p-loading]="properties.includes('loading')"
  [p-max-columns]="maxColumns"
  [p-selectable]="selection.includes('selectable')"
  [p-spacing]="spacing"
  [p-loading-show-more]="properties.includes('loadingShowMore')"
  [p-show-more-disabled]="properties.includes('showMoreDisabled')"
  [p-single-select]="selection.includes('singleSelect')"
  [p-sort]="properties.includes('sort')"
  [p-striped]="properties.includes('striped')"
  [p-virtual-scroll]="properties.includes('virtualScroll')"
  (p-all-selected)="changeEvent('p-all-selected')"
  (p-all-unselected)="changeEvent('p-all-unselected')"
  (p-collapsed)="changeEvent('p-collapsed')"
  (p-expanded)="changeEvent('p-expanded')"
  (p-selected)="changeEvent('p-selected')"
  (p-show-more)="showMore()"
  (p-unselected)="changeEvent('p-unselected')"
  [p-auto-collapse]="properties.includes('autoCollapse')"
  (p-delete-items)="deleteItems($event)"
  [p-draggable]="properties.includes('draggable')"
  [p-hide-action-fixed-columns]="properties.includes('fixed')"
>
</po-table>

<po-divider></po-divider>

<div class="po-row">
  <po-info class="po-md-12" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider></po-divider>

<div class="po-row">
  <po-button class="po-md-3" p-label="Add Item" (p-click)="addItem()"> </po-button>
</div>

<po-divider></po-divider>

<form #f="ngForm">
  <div class="po-row">
    <po-checkbox-group
      class="po-md-12"
      name="columnsName"
      [(ngModel)]="columnsName"
      p-label="Columns"
      p-columns="4"
      [p-options]="columnsOptions"
      (p-change)="updateColumns()"
    >
    </po-checkbox-group>
  </div>

  <div class="po-row">
    <po-radio-group
      class="po-lg-9"
      p-columns="3"
      name="typeHeader"
      [(ngModel)]="columnsDefinition.detail.detail.typeHeader"
      p-label="Column detail typeHeader"
      [p-options]="typeHeaderOptions"
    >
    </po-radio-group>

    <po-switch
      class="po-lg-3"
      name="hideSelect"
      [(ngModel)]="columnsDefinition.detail.detail.hideSelect"
      p-label="Column detail hideSelect"
    >
    </po-switch>
  </div>

  <div class="po-row">
    <po-checkbox-group
      class="po-lg-12"
      name="properties"
      [(ngModel)]="properties"
      p-label="Properties"
      p-columns="4"
      [p-options]="propertiesOptions"
    >
    </po-checkbox-group>
  </div>

  <div class="po-row">
    <po-checkbox-group
      class="po-lg-12"
      name="actionsDefinition"
      [(ngModel)]="actionsDefinition"
      p-columns="4"
      p-indeterminate
      p-label="Actions"
      [p-options]="actionsDefinitionOptions"
      (p-change)="changeActionOptions()"
    >
    </po-checkbox-group>
  </div>

  <div class="po-row">
    <po-radio-group
      class="po-lg-12"
      name="spacing"
      [(ngModel)]="spacing"
      p-columns="4"
      p-label="Spacing"
      [p-options]="typeSpacing"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-checkbox-group
      class="po-lg-12"
      name="selection"
      [(ngModel)]="selection"
      p-columns="4"
      p-help="To enable 'hide select all' and 'single select' check 'selectable'."
      p-label="Selection"
      [p-options]="selectionOptions"
      (p-change)="changeSelectionOptions()"
    >
    </po-checkbox-group>

    <po-radio-group
      class="po-md-12"
      name="filterMode"
      [(ngModel)]="filterType"
      p-columns="4"
      p-label="Filter mode"
      [p-options]="filterModeOptions"
    >
    </po-radio-group>

    <po-radio-group
      class="po-md-12"
      name="size"
      [(ngModel)]="componentsSize"
      p-columns="4"
      p-label="Components size"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="componentsSizeOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-input
      class="po-md-12 po-lg-6"
      name="literals"
      [(ngModel)]="literals"
      p-help='Ex.: {"noData": "Sem dados a serem exibidos", "noColumns": "Colunas n\xE3o definidas"}'
      p-label="Literals"
      (p-change)="changeLiterals()"
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="filteredColumns"
      [(ngModel)]="filteredColumns"
      p-help='Ex.: "text, time"'
      p-label="Filter Columns"
      (p-change)="changeFilteredColumns()"
    >
    </po-input>

    <po-number
      class="po-md-6 po-lg-3"
      name="height"
      [(ngModel)]="height"
      p-clean
      p-help="Height of table"
      p-label="Height"
    >
    </po-number>

    <po-number
      class="po-md-6 po-lg-3"
      name="maxColumns"
      [(ngModel)]="maxColumns"
      p-clean
      p-help="Max columns to be visible"
      p-label="Max Columns"
    >
    </po-number>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>

<po-modal p-click-out="true" p-size="sm" p-title="PO Table">
  <po-info p-label="Chosen Item:" [p-value]="currentItem"> </po-info>
</po-modal>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-table-labs/sample-po-table-labs.component.ts"),n(),t(19,"pre",9),e(20,`import { Component, OnInit, ViewChild } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoModalComponent,
  PoRadioGroupOption,
  PoSearchFilterMode,
  PoTableAction,
  PoTableColumn,
  PoTableColumnSpacing,
  PoTableLiterals
} from '@po-ui/ng-components';

import { SamplePoTableLabsService } from './sample-po-table-labs.service';

@Component({
  selector: 'sample-po-table-labs',
  templateUrl: './sample-po-table-labs.component.html',
  providers: [SamplePoTableLabsService],
  standalone: false
})
export class SamplePoTableLabsComponent implements OnInit {
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  actions: Array<PoTableAction>;
  actionsDefinition: any;
  actionTableFirst: PoTableAction = {
    action: this.openModal.bind(this),
    disabled: this.disableAction.bind(this),
    label: 'First Action'
  };
  actionTableSecond: PoTableAction = { action: this.openModal.bind(this), label: 'Second Action' };

  columns: Array<PoTableColumn>;
  columnsDefinition: any;
  columnsName: Array<string>;
  componentsSize: string;
  container: string;
  currentItem: string;
  customLiterals: PoTableLiterals;
  event: string;
  height: number;
  items: Array<any>;
  itemIndex = 0;
  literals: string;
  maxColumns: number;
  properties: Array<string> = ['hideBatchActions', 'hideTableSearch'];
  selection: Array<string>;
  spacing: PoTableColumnSpacing = PoTableColumnSpacing.Medium;
  filterType: PoSearchFilterMode = PoSearchFilterMode.startsWith;
  filteredColumns: Array<string> = [];

  actionsDefinitionOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Actions', value: 'actions' },
    { label: 'Disable first action', value: 'disableAction', disabled: true },
    { label: 'Single action', value: 'singleAction' },
    { label: 'First action visible', value: 'visibleAction' }
  ];

  selectionOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Selectable', value: 'selectable' },
    { label: 'Hide select all', value: 'hideSelectAll', disabled: true },
    { label: 'Single select', value: 'singleSelect', disabled: true }
  ];

  public readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly filterModeOptions: Array<PoRadioGroupOption> = [
    { label: 'Starts With', value: PoSearchFilterMode.startsWith },
    { label: 'Contains', value: PoSearchFilterMode.contains },
    { label: 'Ends With', value: PoSearchFilterMode.endsWith }
  ];

  public readonly columnsOptions: Array<PoCheckboxGroupOption> = [
    { value: 'text', label: 'Text' },
    { value: 'link', label: 'Link' },
    { value: 'number', label: 'Number' },
    { value: 'currency', label: 'Currency' },
    { value: 'date', label: 'Date' },
    { value: 'time', label: 'Time' },
    { value: 'dateTime', label: 'DateTime' },
    { value: 'subtitle', label: 'Subtitle' },
    { value: 'detail', label: 'Detail' },
    { value: 'label', label: 'Label' },
    { value: 'color', label: 'Color' },
    { value: 'icon', label: 'Icon' },
    { value: 'boolean', label: 'Boolean' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Sort', value: 'sort' },
    { label: 'Striped', value: 'striped' },
    { label: 'Show more disabled', value: 'showMoreDisabled' },
    { label: 'Loading show more', value: 'loadingShowMore' },
    { label: 'Hide detail', value: 'hideDetail' },
    { label: 'Loading', value: 'loading' },
    { label: 'Auto collapse', value: 'autoCollapse' },
    { label: 'Hide columns manager', value: 'hideColumnsManager' },
    { label: 'Hide batch actions', value: 'hideBatchActions' },
    { label: 'Actions Right', value: 'actionsRight' },
    { label: 'Draggable', value: 'draggable' },
    { label: 'Hide action fixed columns', value: 'fixed' },
    { label: 'Hide Table Search', value: 'hideTableSearch' },
    { label: 'Virtual Scroll', value: 'virtualScroll' }
  ];

  public readonly typeHeaderOptions: Array<PoRadioGroupOption> = [
    { label: 'Inline', value: 'inline' },
    { label: 'None', value: 'none' },
    { label: 'Top', value: 'top' }
  ];

  public readonly typeSpacing: Array<PoRadioGroupOption> = [
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' }
  ];

  constructor(private samplePoTableLabsService: SamplePoTableLabsService) {
    this.columnsDefinition = this.samplePoTableLabsService?.getColumns();
  }

  ngOnInit() {
    this.restore();
  }

  addItem() {
    this.items = [...this.items, this.samplePoTableLabsService.generateNewItem(this.itemIndex)];
    this.itemIndex++;
  }

  changeActionOptions() {
    const actions = this.actionsDefinition.actions;

    this.actionsDefinitionOptions[1].disabled = !actions;
    this.actionsDefinitionOptions[2].disabled = !actions;
    this.actionsDefinitionOptions[3].disabled = !actions;

    this.actionsDefinitionOptions = [].concat(this.actionsDefinitionOptions);

    this.actions = actions
      ? this.actionsDefinition.singleAction
        ? [this.actionTableFirst]
        : [this.actionTableFirst, this.actionTableSecond]
      : [];
    this.actionTableFirst.visible = this.actionsDefinition.visibleAction;
    this.spacingSelectOrAction();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  changeFilteredColumns() {
    this.filteredColumns = this.filteredColumns.toString().split(/,\\s*/);
  }

  changeSelectionOptions() {
    const singleSelect = this.selection.includes('singleSelect');
    const selectable = this.selection.includes('selectable');

    this.selectionOptions[1].disabled = singleSelect || !selectable;
    this.selectionOptions[2].disabled = !selectable;

    this.selectionOptions = [].concat(this.selectionOptions);
    this.spacingSelectOrAction();
  }

  deleteItems(items: Array<any>) {
    if (this.height) {
      this.items = items;
    }
  }

  disableAction() {
    return this.actionsDefinition.disableAction;
  }

  openModal(row) {
    this.currentItem = row.text;
    this.poModal.open();
  }

  restore() {
    this.actionsDefinition = { visibleAction: null };
    this.actions = [];
    //this.columnsDefinition = this.samplePoTableLabsService.getColumns();
    this.columnsDefinition.detail.detail.typeHeader = undefined;
    this.columnsName = [];
    this.container = '';
    this.customLiterals = undefined;
    this.height = undefined;
    this.componentsSize = 'medium';
    this.items = [];
    this.itemIndex = 0;
    this.literals = '';
    this.maxColumns = undefined;
    this.properties = ['hideBatchActions', 'hideTableSearch'];
    this.selection = [];
    this.spacing = PoTableColumnSpacing.Medium;
    this.filteredColumns = [];

    this.updateColumns();
    this.changeActionOptions();
  }

  showMore() {
    this.addItem();
  }

  updateColumns() {
    this.columns = [];
    this.columnsName.forEach(column => {
      this.columns.push(this.columnsDefinition[column]);
    });
  }

  private spacingSelectOrAction() {
    if (this.columnsName.length > 0) {
      this.updateColumns();
    }
  }
}
`),n(),t(21,"label",6),e(22,"sample-po-table-labs/sample-po-table-labs.service.ts"),n(),t(23,"pre",9),e(24,`import { Injectable } from '@angular/core';

import { PoTableColumn } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoTableLabsService {
  private readonly colors = [
    'color-01',
    'color-02',
    'color-03',
    'color-04',
    'color-05',
    'color-06',
    'color-07',
    'color-08',
    'color-09',
    'color-10',
    'color-11',
    'color-12'
  ];

  generateNewItem(index: number) {
    return {
      text: \`Text \${index}\`,
      page: \`Link \${index}\`,
      link: 'https://po-ui.io/',
      number: index,
      date: this.generateRandomDate(),
      time: this.generateRandomTime(),
      dateTime: this.generateRandomDate(),
      currency: this.generateRandomNumber(),
      subtitle: this.generateRandomColor(),
      detail: [
        { info: \`Detail Information 1\`, date: new Date(), time: this.generateRandomTime(), currency: 1500.5 },
        { info: \`Detail Information 2\`, date: new Date(), time: this.generateRandomTime(), currency: 6511 }
      ],
      label: this.generateRandomColor(),
      color: \`Text \${index}\`,
      icon: this.generateRandomIcon(index),
      boolean: this.generateRandomBoolean()
    };
  }

  getColumns() {
    return {
      text: <PoTableColumn>{ property: 'text', width: '30%' },
      number: <PoTableColumn>{ property: 'number', type: 'number' },
      date: <PoTableColumn>{ property: 'date', type: 'date' },
      time: <PoTableColumn>{ property: 'time', type: 'time' },
      dateTime: <PoTableColumn>{ property: 'dateTime', label: 'DateTime', type: 'dateTime' },
      currency: <PoTableColumn>{ property: 'currency', type: 'currency', format: 'USD' },
      link: <PoTableColumn>{ property: 'page', label: 'Link', type: 'link' },
      icon: <PoTableColumn>{ property: 'icon', type: 'icon' },
      boolean: <PoTableColumn>{ property: 'boolean', type: 'boolean' },
      subtitle: <PoTableColumn>{
        property: 'subtitle',
        type: 'subtitle',
        width: '10%',
        subtitles: [
          { value: 'color-01', color: 'color-01', label: 'Color 1', content: '1' },
          { value: 'color-02', color: 'color-02', label: 'Color 2', content: '2' },
          { value: 'color-03', color: 'color-03', label: 'Color 3', content: '3' },
          { value: 'color-04', color: 'color-04', label: 'Color 4', content: '4' },
          { value: 'color-05', color: 'color-05', label: 'Color 5', content: '5' },
          { value: 'color-06', color: 'color-06', label: 'Color 6', content: '6' },
          { value: 'color-07', color: 'color-07', label: 'Color 7', content: '7' },
          { value: 'color-08', color: 'color-08', label: 'Color 8', content: '8' },
          { value: 'color-09', color: 'color-09', label: 'Color 9', content: '9' },
          { value: 'color-10', color: 'color-10', label: 'Color 10', content: '10' },
          { value: 'color-11', color: 'color-11', label: 'Color 11', content: '11' },
          { value: 'color-12', color: 'color-12', label: 'Color 12', content: '12' }
        ]
      },

      label: <PoTableColumn>{
        property: 'label',
        type: 'label',
        width: '10%',
        labels: [
          { value: 'color-01', color: 'color-01', label: 'Color 1' },
          { value: 'color-02', color: 'color-02', label: 'Color 2' },
          { value: 'color-03', color: 'color-03', label: 'Color 3' },
          { value: 'color-04', color: 'color-04', label: 'Color 4' },
          { value: 'color-05', color: 'color-05', label: 'Color 5' },
          { value: 'color-06', color: 'color-06', label: 'Color 6' },
          { value: 'color-07', color: 'color-07', label: 'Color 7' },
          { value: 'color-08', color: 'color-08', label: 'Color 8' },
          { value: 'color-09', color: 'color-09', label: 'Color 9' },
          { value: 'color-10', color: 'color-10', label: 'Color 10' },
          { value: 'color-11', color: 'color-11', label: 'Color 11' },
          { value: 'color-12', color: 'color-12', label: 'Color 12' }
        ]
      },

      color: <PoTableColumn>{ property: 'color', width: '10%', color: this.changeColor },

      detail: <PoTableColumn>{
        property: 'detail',
        type: 'detail',
        detail: {
          columns: [
            { property: 'info', label: 'Detail' },
            { property: 'date', label: 'Detail Date', type: 'date', format: 'dd-MM-yy' },
            { property: 'time', label: 'Detail Time', type: 'time' },
            { property: 'currency', label: 'Detail Currency', type: 'currency' }
          ],
          typeHeader: 'inline'
        }
      }
    };
  }

  private changeColor(row, column) {
    const number = row[column].slice(5, 7).trim();

    return number % 2 === 0 ? 'color-08' : 'color-11';
  }

  private generateRandomBoolean(): boolean {
    return Math.random() >= 0.5;
  }

  private generateRandomNumber() {
    return (Math.random() * 200 + 1).toFixed(3);
  }

  private generateRandomColor() {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }

  private generateRandomIcon(index: number) {
    const iconsOne = ['an an-copy', 'an an-check', 'an an-camera', 'an an-plant', 'an an-building-apartment'];
    const iconsTwo = ['an an-trash', 'an an-newspaper', 'an an-gas-pump', 'an an-chats', 'an an-bluetooth'];

    const randomIcon = Math.floor(Math.random() * 5);

    return [
      { value: \`\${index}\`, icon: iconsOne[randomIcon], tooltip: iconsOne[randomIcon] },
      { value: \`\${index}\`, icon: iconsTwo[randomIcon], tooltip: iconsTwo[randomIcon] }
    ];
  }

  private generateRandomTime() {
    const hour = Math.floor(Math.random() * 23);
    const minutes = Math.floor(Math.random() * 59);
    const seconds = Math.floor(Math.random() * 59);

    const hourValid = hour < 10 ? '0' + hour.toString() : hour.toString();
    const minutesValid = minutes < 10 ? '0' + minutes.toString() : minutes.toString();
    const secondsValid = seconds < 10 ? '0' + seconds.toString() : seconds.toString();

    return \`\${hourValid}:\${minutesValid}:\${secondsValid}\`;
  }

  private generateRandomDate() {
    const day = Math.floor(Math.random() * 28);
    const month = Math.floor(Math.random() * 12);
    const year = Math.floor(Math.random() * 24) + 2000;

    return new Date(year, month, day);
  }
}
`),n()()()()(),t(25,"div",10),i(26,"sample-po-table-labs"),n(),i(27,"hr")),l&2&&(s(5),_("po-icon "+o.sampleCodeButtonIcon),s(),D(" ",o.sampleCodeButtonLabel,""),s(),c("ngClass",f(4,xt,o.hideSampleCodeTabs)))},dependencies:[A,P,C,T,Je],encapsulation:2})}return r})();var gt=["table"],Xe=(()=>{class r{tableComponent;service="";key;value;sampleService="";params;filters=[];columns=[{property:"id"},{property:"name"}];stringColumns=JSON.stringify(this.columns);defaultColumns=[...this.columns];addFilter(a,l){this.params=J(G({},this.params),{[a]:l}),this.setFilters(a,l),this.tableComponent.applyFilters(this.params),this.resetInputs()}changeService(a){this.sampleService=a}onChangeColumns(a){try{this.columns=JSON.parse(a)}catch{this.stringColumns=JSON.stringify(this.defaultColumns),this.columns=[...this.defaultColumns]}}removeAllItems(){this.tableComponent.applyFilters({})}removeItem(a){delete this.params[a.removedDisclaimer.property],this.tableComponent.applyFilters(this.params)}resetInputs(){this.key=void 0,this.value=void 0}setFilters(a,l){let o=this.filters.find(m=>m.property===a);o?(this.filters.splice(this.filters.indexOf(o),1),o=Object.assign({},o)):o={property:a},o.value=l,o.label=`${a.charAt(0).toUpperCase()+a.slice(1)}: ${l}`,this.filters=[...this.filters,o]}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=S({type:r,selectors:[["sample-po-table-with-api"]],viewQuery:function(l,o){if(l&1&&I(gt,5),l&2){let m;k(m=F())&&(o.tableComponent=m.first)}},standalone:!1,decls:16,vars:12,consts:[["table",""],[1,"po-row"],["p-label","URL API service","p-help","https://po-sample-api.onrender.com/v1/heroes",1,"po-md-12",3,"ngModelChange","p-change","ngModel"],["p-label","Columns",1,"po-md-12"],["p-label","Columns","p-help","[{ property: 'name' }]",1,"po-md-12",3,"ngModelChange","p-change","ngModel","p-rows"],["p-label","Filters",1,"po-md-12"],["p-label","Key","p-help","Object key",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Value","p-help","Object value",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Filter",1,"po-md-3",3,"p-click","p-disabled"],[1,"po-mt-1","po-md-12",3,"p-remove","p-remove-all","p-disclaimers"],[1,"po-mt-1","po-md-12",3,"p-columns","p-service-api","p-height","p-hide-table-search","p-infinite-scroll"]],template:function(l,o){if(l&1){let m=B();t(0,"div",1)(1,"po-input",2),g("ngModelChange",function(d){return u(m),v(o.service,d)||(o.service=d),b(d)}),E("p-change",function(){return u(m),b(o.changeService(o.service))}),n()(),t(2,"div",1),i(3,"po-divider",3),t(4,"po-textarea",4),g("ngModelChange",function(d){return u(m),v(o.stringColumns,d)||(o.stringColumns=d),b(d)}),E("p-change",function(d){return u(m),b(o.onChangeColumns(d))}),n()(),t(5,"div",1),i(6,"po-divider",5),t(7,"po-input",6),g("ngModelChange",function(d){return u(m),v(o.key,d)||(o.key=d),b(d)}),n(),t(8,"po-input",7),g("ngModelChange",function(d){return u(m),v(o.value,d)||(o.value=d),b(d)}),n()(),t(9,"div",1)(10,"po-button",8),E("p-click",function(){return u(m),b(o.addFilter(o.key,o.value))}),n()(),t(11,"div",1)(12,"po-disclaimer-group",9),E("p-remove",function(d){return u(m),b(o.removeItem(d))})("p-remove-all",function(){return u(m),b(o.removeAllItems())}),n()(),t(13,"div",1),i(14,"po-table",10,0),n()}l&2&&(s(),x("ngModel",o.service),s(3),x("ngModel",o.stringColumns),c("p-rows",5),s(3),x("ngModel",o.key),s(),x("ngModel",o.value),s(2),c("p-disabled",!o.key||!o.value),s(2),c("p-disclaimers",o.filters),s(2),c("p-columns",o.columns)("p-service-api",o.sampleService)("p-height",300)("p-hide-table-search",!1)("p-infinite-scroll",!0))},dependencies:[z,j,W,Fe,R,ae,He,y],encapsulation:2})}return r})();var yt=r=>({"docs-sample-code-tabs":r}),Ke=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=S({type:r,selectors:[["sample-po-table-with-api-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(i(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Table using API"),n(),t(4,"a",2),E("click",function(){return o.toggleSampleCodeTabs()}),i(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-table-with-api/sample-po-table-with-api.component.html"),n(),t(13,"pre",7),e(14,`<div class="po-row">
  <po-input
    class="po-md-12"
    p-label="URL API service"
    p-help="https://po-sample-api.onrender.com/v1/heroes"
    [(ngModel)]="service"
    (p-change)="changeService(service)"
  >
  </po-input>
</div>
<div class="po-row">
  <po-divider class="po-md-12" p-label="Columns"></po-divider>
  <po-textarea
    class="po-md-12"
    p-label="Columns"
    p-help="[{ property: 'name' }]"
    [(ngModel)]="stringColumns"
    [p-rows]="5"
    (p-change)="onChangeColumns($event)"
  >
  </po-textarea>
</div>
<div class="po-row">
  <po-divider class="po-md-12" p-label="Filters"></po-divider>
  <po-input class="po-md-6" p-label="Key" p-help="Object key" [(ngModel)]="key"></po-input>
  <po-input class="po-md-6" p-label="Value" p-help="Object value" [(ngModel)]="value"></po-input>
</div>
<div class="po-row">
  <po-button
    class="po-md-3"
    p-label="Add Filter"
    (p-click)="addFilter(key, value)"
    [p-disabled]="!key || !value"
  ></po-button>
</div>
<div class="po-row">
  <po-disclaimer-group
    class="po-mt-1 po-md-12"
    [p-disclaimers]="filters"
    (p-remove)="removeItem($event)"
    (p-remove-all)="removeAllItems()"
  >
  </po-disclaimer-group>
</div>
<div class="po-row">
  <po-table
    class="po-mt-1 po-md-12"
    #table
    [p-columns]="columns"
    [p-service-api]="sampleService"
    [p-height]="300"
    [p-hide-table-search]="false"
    [p-infinite-scroll]="true"
  >
  </po-table>
</div>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-table-with-api/sample-po-table-with-api.component.ts"),n(),t(19,"pre",9),e(20,`import { Component, ViewChild } from '@angular/core';
import { PoDisclaimerGroupRemoveAction, PoDisclaimer, PoTableComponent, PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-table-with-api',
  templateUrl: './sample-po-table-with-api.component.html',
  standalone: false
})
export class SamplePoTableWithApiComponent {
  @ViewChild('table') tableComponent: PoTableComponent;

  service = '';
  key: string;
  value: string;
  sampleService = '';
  params: {};
  filters: Array<PoDisclaimer> = [];
  columns: Array<PoTableColumn> = [{ property: 'id' }, { property: 'name' }];
  stringColumns: string = JSON.stringify(this.columns);

  private defaultColumns: Array<PoTableColumn> = [...this.columns];

  addFilter(property: string, value: any) {
    this.params = { ...this.params, [property]: value };

    this.setFilters(property, value);

    this.tableComponent.applyFilters(this.params);

    this.resetInputs();
  }

  changeService(service) {
    this.sampleService = service;
  }

  onChangeColumns(columns) {
    try {
      this.columns = JSON.parse(columns);
    } catch (e) {
      this.stringColumns = JSON.stringify(this.defaultColumns);
      this.columns = [...this.defaultColumns];
    }
  }

  removeAllItems() {
    this.tableComponent.applyFilters({});
  }

  removeItem(item: PoDisclaimerGroupRemoveAction) {
    delete this.params[item.removedDisclaimer.property];
    this.tableComponent.applyFilters(this.params);
  }

  private resetInputs() {
    this.key = undefined;
    this.value = undefined;
  }

  private setFilters(property: string, value: string) {
    let filter = this.filters.find(item => item.property === property);
    if (!filter) {
      filter = <any>{ property: property };
    } else {
      this.filters.splice(this.filters.indexOf(filter), 1);
      filter = Object.assign({}, filter);
    }

    filter.value = value;
    filter.label = \`\${property.charAt(0).toUpperCase() + property.slice(1)}: \${value}\`;

    this.filters = [...this.filters, filter];
  }
}
`),n()()()()(),t(21,"div",10),i(22,"sample-po-table-with-api"),n(),i(23,"hr")),l&2&&(s(5),_("po-icon "+o.sampleCodeButtonIcon),s(),D(" ",o.sampleCodeButtonLabel,""),s(),c("ngClass",f(4,yt,o.hideSampleCodeTabs)))},dependencies:[A,P,C,T,Xe],encapsulation:2})}return r})();var re=(()=>{class r{getColumns(){return[{property:"code",type:"number",width:"8%"},{property:"product"},{property:"customer"},{property:"exit_forecast",label:"Exit forecast",type:"dateTime"},{property:"time_since_purchase",label:"Time since purchase",type:"time",visible:!1},{property:"quantity",label:"Quantity (Tons)",type:"number",width:"15%",visible:!1},{property:"icms",label:"ICMS",type:"number",format:"1.2-5",visible:!1},{property:"status",type:"label",width:"8%",labels:[{value:"delivered",color:"blue",label:"Delivered"},{value:"transport",label:"Transport",type:Ie.Success},{value:"production",color:" #745678",label:"Production"},{value:"stock",color:"rgb(201, 53, 125)",label:"Stock",icon:"an an-package"}]}]}getItems(){return[{code:1200,product:"Rice",customer:"Angeloni",quantity:3,icms:1500,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"delivered",license_plate:"MDJD9191",batch_product:18041822,driver:"Jos\xE9 Oliveira"},{code:1355,product:"Margarine",customer:"Giassi",quantity:1,icms:50,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"transport",license_plate:"XXA5454",batch_product:18041821,driver:"Francisco Pereira"},{code:1496,product:"Wheat flour",customer:"Walmart",quantity:5,icms:2045,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"transport",license_plate:"QEW5779",batch_product:18041820,driver:"Pedro da Costa"},{code:1712,product:"Milk",customer:"Carrefour",quantity:10,icms:15005,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"production",license_plate:"WWW1247",batch_product:18041819,driver:"Jo\xE3o da Silva"},{code:1881,product:"Oil",customer:"Carrefour",quantity:1,icms:1110,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"production",license_plate:"XXI2312",batch_product:18041825,driver:"Antonio Lima"},{code:1551,product:"Cream cheese",customer:"Barbosa",quantity:15,icms:1119,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"stock",license_plate:"XXI2359",batch_product:18041888,driver:"Vitoria Felix"}]}generateRandomDate(){let a=Math.floor(Math.random()*20),l=Math.floor(Math.random()*59),o=Math.floor(Math.random()*59);return new Date(2018,10,23,a,l,o)}generateRandomTime(){let a=Math.floor(Math.random()*59),l=Math.floor(Math.random()*59),o=a<10?"0"+a.toString():a.toString(),m=l<10?"0"+l.toString():l.toString();return`00:${o}:${m}`}static \u0275fac=function(l){return new(l||r)};static \u0275prov=L({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();function Pt(r,Q){if(r&1){let a=B();t(0,"po-widget",2)(1,"div",3)(2,"po-select",4),g("ngModelChange",function(o){let m=u(a).$implicit;return v(m.status,o)||(m.status=o),b(o)}),n()(),t(3,"div",3),i(4,"po-info",5)(5,"po-info",6)(6,"po-info",7),n()()}if(r&2){let a=Q.$implicit,l=xe();ge("p-title","Transport detail ",a.code,""),s(2),x("ngModel",a.status),c("p-options",l.statusOptions),s(2),c("p-value",a.batch_product),s(),c("p-value",a.driver),s(),c("p-value",a.license_plate)}}var Ye=(()=>{class r{transportService;columns;items;statusOptions=[{label:"Delivered",value:"delivered"},{label:"Transport",value:"transport"},{label:"Production",value:"production"}];constructor(a){this.transportService=a}ngOnInit(){this.columns=this.transportService.getColumns(),this.items=this.transportService.getItems()}isUndelivered(a,l){return a.status!=="delivered"}static \u0275fac=function(l){return new(l||r)(w(re))};static \u0275cmp=S({type:r,selectors:[["sample-po-table-transport"]],standalone:!1,features:[q([re])],decls:2,vars:9,consts:[["p-spacing","large",3,"p-auto-collapse","p-columns","p-hide-columns-manager","p-hide-table-search","p-items","p-sort","p-striped"],["p-table-row-template","",3,"p-table-row-template-arrow-direction","p-table-row-template-show"],[3,"p-title"],[1,"po-row"],["name","status","p-label","Transport status",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Batch of product","p-orientation","horizontal",1,"po-md-4",3,"p-value"],["p-label","Driver","p-orientation","horizontal",1,"po-md-4",3,"p-value"],["p-label","License plate","p-orientation","horizontal",1,"po-md-4",3,"p-value"]],template:function(l,o){l&1&&(t(0,"po-table",0),$(1,Pt,7,7,"ng-template",1),n()),l&2&&(c("p-auto-collapse",!0)("p-columns",o.columns)("p-hide-columns-manager",!0)("p-hide-table-search",!1)("p-items",o.items)("p-sort",!0)("p-striped",!0),s(),c("p-table-row-template-arrow-direction","right")("p-table-row-template-show",o.isUndelivered))},dependencies:[z,j,Ne,U,y,Be,je],encapsulation:2})}return r})();var _t=r=>({"docs-sample-code-tabs":r}),Ze=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=S({type:r,selectors:[["sample-po-table-transport-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(i(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Table - Transport"),n(),t(4,"a",2),E("click",function(){return o.toggleSampleCodeTabs()}),i(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-table-transport/sample-po-table-transport.component.html"),n(),t(13,"pre",7),e(14,`<po-table
  [p-auto-collapse]="true"
  [p-columns]="columns"
  [p-hide-columns-manager]="true"
  [p-hide-table-search]="false"
  [p-items]="items"
  [p-sort]="true"
  [p-striped]="true"
  p-spacing="large"
>
  <ng-template
    p-table-row-template
    let-rowItem
    let-i="rowIndex"
    [p-table-row-template-arrow-direction]="'right'"
    [p-table-row-template-show]="isUndelivered"
  >
    <po-widget p-title="Transport detail { { rowItem.code }}">
      <div class="po-row">
        <po-select
          class="po-md-6"
          name="status"
          [(ngModel)]="rowItem.status"
          p-label="Transport status"
          [p-options]="statusOptions"
        >
        </po-select>
      </div>

      <div class="po-row">
        <po-info
          class="po-md-4"
          p-label="Batch of product"
          p-orientation="horizontal"
          [p-value]="rowItem.batch_product"
        >
        </po-info>

        <po-info class="po-md-4" p-label="Driver" p-orientation="horizontal" [p-value]="rowItem.driver"> </po-info>

        <po-info class="po-md-4" p-label="License plate" p-orientation="horizontal" [p-value]="rowItem.license_plate">
        </po-info>
      </div>
    </po-widget>
  </ng-template>
</po-table>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-table-transport/sample-po-table-transport.component.ts"),n(),t(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoSelectOption } from '@po-ui/ng-components';

import { PoTableColumn } from '@po-ui/ng-components';

import { SamplePoTableTransportService } from './sample-po-table-transport.service';

@Component({
  selector: 'sample-po-table-transport',
  templateUrl: 'sample-po-table-transport.component.html',
  providers: [SamplePoTableTransportService],
  standalone: false
})
export class SamplePoTableTransportComponent implements OnInit {
  columns: Array<PoTableColumn>;
  items: Array<any>;

  readonly statusOptions: Array<PoSelectOption> = [
    { label: 'Delivered', value: 'delivered' },
    { label: 'Transport', value: 'transport' },
    { label: 'Production', value: 'production' }
  ];

  constructor(private transportService: SamplePoTableTransportService) {}

  ngOnInit() {
    this.columns = this.transportService.getColumns();
    this.items = this.transportService.getItems();
  }

  isUndelivered(row, index: number) {
    return row.status !== 'delivered';
  }
}
`),n(),t(21,"label",6),e(22,"sample-po-table-transport/sample-po-table-transport.service.ts"),n(),t(23,"pre",9),e(24,`import { Injectable } from '@angular/core';

import { PoTableColumn, PoTagType } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoTableTransportService {
  getColumns(): Array<PoTableColumn> {
    return [
      { property: 'code', type: 'number', width: '8%' },
      { property: 'product' },
      { property: 'customer' },
      { property: 'exit_forecast', label: 'Exit forecast', type: 'dateTime' },
      { property: 'time_since_purchase', label: 'Time since purchase', type: 'time', visible: false },
      { property: 'quantity', label: 'Quantity (Tons)', type: 'number', width: '15%', visible: false },
      { property: 'icms', label: 'ICMS', type: 'number', format: '1.2-5', visible: false },
      {
        property: 'status',
        type: 'label',
        width: '8%',
        labels: [
          { value: 'delivered', color: 'blue', label: 'Delivered' },
          { value: 'transport', label: 'Transport', type: PoTagType.Success },
          { value: 'production', color: ' #745678', label: 'Production' },
          { value: 'stock', color: 'rgb(201, 53, 125)', label: 'Stock', icon: 'an an-package' }
        ]
      }
    ];
  }

  getItems(): Array<any> {
    return [
      {
        code: 1200,
        product: 'Rice',
        customer: 'Angeloni',
        quantity: 3,
        icms: 1500,
        exit_forecast: this.generateRandomDate(),
        time_since_purchase: this.generateRandomTime(),
        status: 'delivered',
        license_plate: 'MDJD9191',
        batch_product: 18041822,
        driver: 'Jos\xE9 Oliveira'
      },
      {
        code: 1355,
        product: 'Margarine',
        customer: 'Giassi',
        quantity: 1,
        icms: 50,
        exit_forecast: this.generateRandomDate(),
        time_since_purchase: this.generateRandomTime(),
        status: 'transport',
        license_plate: 'XXA5454',
        batch_product: 18041821,
        driver: 'Francisco Pereira'
      },
      {
        code: 1496,
        product: 'Wheat flour',
        customer: 'Walmart',
        quantity: 5,
        icms: 2045,
        exit_forecast: this.generateRandomDate(),
        time_since_purchase: this.generateRandomTime(),
        status: 'transport',
        license_plate: 'QEW5779',
        batch_product: 18041820,
        driver: 'Pedro da Costa'
      },
      {
        code: 1712,
        product: 'Milk',
        customer: 'Carrefour',
        quantity: 10,
        icms: 15005,
        exit_forecast: this.generateRandomDate(),
        time_since_purchase: this.generateRandomTime(),
        status: 'production',
        license_plate: 'WWW1247',
        batch_product: 18041819,
        driver: 'Jo\xE3o da Silva'
      },
      {
        code: 1881,
        product: 'Oil',
        customer: 'Carrefour',
        quantity: 1,
        icms: 1110,
        exit_forecast: this.generateRandomDate(),
        time_since_purchase: this.generateRandomTime(),
        status: 'production',
        license_plate: 'XXI2312',
        batch_product: 18041825,
        driver: 'Antonio Lima'
      },
      {
        code: 1551,
        product: 'Cream cheese',
        customer: 'Barbosa',
        quantity: 15,
        icms: 1119,
        exit_forecast: this.generateRandomDate(),
        time_since_purchase: this.generateRandomTime(),
        status: 'stock',
        license_plate: 'XXI2359',
        batch_product: 18041888,
        driver: 'Vitoria Felix'
      }
    ];
  }

  private generateRandomDate() {
    const hour = Math.floor(Math.random() * 20);
    const minutes = Math.floor(Math.random() * 59);
    const seconds = Math.floor(Math.random() * 59);

    return new Date(2018, 10, 23, hour, minutes, seconds);
  }

  private generateRandomTime() {
    const minutes = Math.floor(Math.random() * 59);
    const seconds = Math.floor(Math.random() * 59);

    const minutesValid = minutes < 10 ? '0' + minutes.toString() : minutes.toString();
    const secondsValid = seconds < 10 ? '0' + seconds.toString() : seconds.toString();

    return \`00:\${minutesValid}:\${secondsValid}\`;
  }
}
`),n()()()()(),t(25,"div",10),i(26,"sample-po-table-transport"),n(),i(27,"hr")),l&2&&(s(5),_("po-icon "+o.sampleCodeButtonIcon),s(),D(" ",o.sampleCodeButtonLabel,""),s(),c("ngClass",f(4,_t,o.hideSampleCodeTabs)))},dependencies:[A,P,C,T,Ye],encapsulation:2})}return r})();var me=(()=>{class r{getColumns(){return[{property:"status",type:"label",labels:[{value:"available",color:"color-11",label:"Available"},{value:"reserved",color:"color-08",label:"Reserved"},{value:"closed",color:"color-07",label:"Closed"}]},{property:"country"},{property:"destination"},{property:"region",type:"subtitle",width:"180px",subtitles:[{value:"Alps",color:"color-01",label:"Alps",content:"AL"},{value:"Australasia",color:"color-02",label:"Australasia",content:"AU"},{value:"British Isle",color:"color-03",label:"British Isle",content:"BI"},{value:"Caucasus",color:"color-04",label:"Caucasus",content:"CA"},{value:"Danube",color:"color-05",label:"Danube",content:"DA"},{value:"East Asia",color:"color-06",label:"East Asia",content:"EA"},{value:"Latin America",color:"color-07",label:"Latin America",content:"LA"},{value:"Mediterranean",color:"color-08",label:"Mediterranean",content:"ME"},{value:"Nordics",color:"color-09",label:"Nordics",content:"NO"},{value:"North America",color:"color-10",label:"North America",content:"NA"},{value:"Southern Africa",color:"color-11",label:"Southern Africa",content:"SA"},{value:"Western Africa",color:"color-12",label:"Western Africa",content:"WA"}]},{property:"date",type:"date"},{property:"returnDate",label:"Return Date",type:"date"},{property:"value",type:"currency",format:"USD"},{property:"id",label:"Flight Number",type:"number"},{property:"onBoardService",label:"On Board Service",type:"boolean",boolean:{trueLabel:"Yes",falseLabel:"No"}},{property:"detail",label:"Details",type:"detail",detail:{columns:[{property:"package"},{property:"tour"},{property:"time",label:"Departure time",type:"time",format:"HH:mm"},{property:"distance",label:"Distance (Miles)",type:"number",format:"1.0-5"}],typeHeader:"top"}}]}getItems(){return[{id:11234,initials:"BR",country:"Brazil",value:1e3,date:"2018-10-09",returnDate:"2018-11-01",class:"Economic",onBoardService:!1,destination:"Rio de Janeiro",airline:"Azul",status:"available",region:"Latin America",detail:[{package:"Basic",tour:"City tour by public bus and visit to the main museums.",time:"20:10:10",distance:"1000"},{package:"Intermediary",tour:"City tour by van and guided visit to the main museums.",time:"09:15:19",distance:"2000"},{package:"Complete",tour:"VIP city tour, music show with dinner and guided tour to the main museums.",time:"07:10:20",distance:"3000"}]},{id:22467,initials:"FR",country:"France",value:5e3,date:"2019-12-13",returnDate:"2019-12-31",class:"Economic",onBoardService:!1,destination:"Paris",airline:"British Airways",status:"closed",region:"Alps",detail:[{package:"Basic",tour:"City tour by public bus and visit to the main museums.",time:"10:15:10",distance:"4800"},{package:"Intermediary",tour:"City tour by van and guided visit to the main museums.",time:"22:15:10",distance:"11000"},{package:"Complete",tour:"VIP city tour, music show with dinner and guided tour to the main museums.",time:"10:15:10",distance:"1000"}]},{id:40670,initials:"SN",country:"Senegal",value:3200,date:"2017-11-22",returnDate:"2018-12-01",class:"Economic",onBoardService:!1,destination:"Dakar",airline:"Iberia",status:"closed",region:"Western Africa"},{id:34679,initials:"PT",country:"Portugal",value:5500,date:"2017-10-10",returnDate:"2018-10-20",class:"Economic",onBoardService:!1,destination:"Lisbon",airline:"Air Europa",status:"closed",region:"Mediterranean"},{id:48999,initials:"RU",country:"Russia",value:6700,date:"2019-01-17",returnDate:"2019-02-20",class:"First Class",onBoardService:!0,destination:"Moscow",airline:"Lufthansa",status:"reserved",region:"Caucasus"},{id:48999,initials:"US",country:"United States",value:2700.49,date:"2018-10-17",returnDate:"2018-10-29",class:"Economic",onBoardService:!1,destination:"Los Angeles",airline:"American Airlines",status:"reserved",region:"North America"},{id:54563,initials:"CL",country:"Chile",value:2e3,date:"2018-10-20",returnDate:"2018-11-01",destination:"Cusco",class:"Economic",onBoardService:!1,airline:"LATAM",status:"available",region:"Latin America"},{id:64568,initials:"MX",country:"Mexico",value:2100,date:"2018-03-10",returnDate:"2018-05-09",destination:"Mexico City",class:"Economic",onBoardService:!1,airline:"Aero M\xE9xico",status:"available",region:"Latin America",detail:[{package:"Basic",tour:"City tour by public bus and visit to the main museums.",time:"12:10:10",distance:"2200"},{package:"Intermediary",tour:"City tour by van and guided visit to the main museums.",time:"11:10:10",distance:"1500"},{package:"Complete",tour:"VIP city tour, music show with dinner and guided tour to the main museums.",time:"16:10:10",distance:"1800"}]},{id:75456,initials:"IE",country:"Ireland",value:6300,date:"2018-10-14",returnDate:"2018-10-30",destination:"Cork",class:"First Class",onBoardService:!0,airline:"Lufthansa",status:"reserved",region:"British Isle"},{id:23445,initials:"ZA",country:"South Africa",value:1900,date:"2018-12-10",returnDate:"2018-12-25",destination:"Cape Town",class:"Economic",onBoardService:!1,airline:"South African Airways",status:"available",region:"Southern Africa"},{id:19238,initials:"AU",country:"Australia",value:6300,date:"2018-10-14",returnDate:"2018-10-30",destination:"Sydney",class:"First Class",onBoardService:!0,airline:"Jetstar Airways",status:"reserved",region:"Australasia"},{id:85456,initials:"JP",country:"Japan",value:5900,date:"2018-10-25",returnDate:"2018-11-10",destination:"Tokio",class:"Executive",onBoardService:!0,airline:"Japan Airlines",status:"available",region:"East Asia"},{id:94565,initials:"CN",country:"China",value:2900,date:"2018-10-10",returnDate:"2018-10-25",destination:"Beijing",class:"Economic",onBoardService:!1,airline:"Malaysia Airlines",status:"available",region:"East Asia"},{id:32330,initials:"UK",country:"England",value:2090.5,date:"2018-10-07",returnDate:"2018-11-15",destination:"London",class:"Executive",onBoardService:!0,airline:"British Airways",status:"available",region:"British Isle"},{id:14560,initials:"CA",country:"Canada",value:2090.5,date:"2018-10-07",returnDate:"2018-10-20",destination:"Quebec",class:"Economic",onBoardService:!1,airline:"American Airlines",status:"available",region:"North America"},{id:93800,initials:"IS",country:"Iceland",value:6300,date:"2018-10-12",returnDate:"2018-10-27",destination:"Reykjav\xEDk",class:"Economic",onBoardService:!1,airline:"Star Alliance",status:"available",region:"Nordics"},{id:34239,initials:"DE",country:"Germany",value:3070.5,date:"2018-10-07",returnDate:"2018-10-20",destination:"Berlin",class:"Executive",onBoardService:!0,airline:"LATAM",status:"available",region:"Danube"},{id:45611,initials:"AR",country:"Argentina",value:3500.5,date:"2018-12-07",returnDate:"2018-12-29",destination:"Ushuaia",class:"Economic",onBoardService:!1,airline:"LATAM",status:"reserved",region:"Latin America"}]}static \u0275fac=function(l){return new(l||r)};static \u0275prov=L({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var et=(()=>{class r{sampleAirfare;poNotification;poDialog;poModal;poTable;actions=[{action:this.discount.bind(this),icon:"an an-currency-circle-dollar",label:"Apply Discount",disabled:this.validateDiscount.bind(this)},{action:this.details.bind(this),icon:"an an-info",label:"Details"},{action:this.remove.bind(this),icon:"po-icon an an-trash",label:"Remove"}];columns;columnsDefault;detail;items;total=0;totalExpanded=0;initialColumns;constructor(a,l,o){this.sampleAirfare=a,this.poNotification=l,this.poDialog=o}ngOnInit(){this.columns=this.sampleAirfare.getColumns(),this.items=this.sampleAirfare.getItems()}ngAfterViewInit(){if(this.columnsDefault=this.columns,localStorage.getItem("initial-columns")){this.initialColumns=localStorage.getItem("initial-columns").split(",");let l=[...this.columns.map(o=>J(G({},o),{visible:this.initialColumns.includes(o.property)}))];l.sort(this.sortFunction),this.columns=l}}sortFunction(a,l){let o=localStorage.getItem("initial-columns").split(","),m=o.indexOf(a.property),p=o.indexOf(l.property);if(m===-1)return 1;if(p===-1||m<p)return-1;if(m>p)return 1}addToCart(){let a=this.poTable.getSelectedRows();a.length>0&&this.poDialog.confirm({title:"Add to cart",message:`Would you like to add ${a.length} items to cart?`,confirm:()=>this.confirmItems(a),cancel:()=>{}})}confirmItems(a){a.forEach(l=>{switch(l.status){case"available":this.poNotification.success(`${this.getDescription(l)} added succesfully`);break;case"reserved":this.poNotification.warning(`${this.getDescription(l)} added succesfully, verify your e-mail to complete reservation`);break;case"closed":this.poNotification.error(`${this.getDescription(l)} is closed and not available anymore`);break}}),this.poTable.unselectRows()}collapseAll(){this.items.forEach((a,l)=>{a.detail&&(this.onCollapseDetail(),this.poTable.collapse(l))})}decreaseTotal(a){a.value&&(this.total-=a.value)}deleteItems(a){this.items=a}details(a){this.detail=a,this.poModal.open()}remove(a){this.poTable.removeItem(a)}discount(a){if(!a.disableDiscount){let l=J(G({},a),{value:a.value-a.value*.2,disableDiscount:!0});this.poTable.updateItem(a,l)}}expandAll(){this.totalExpanded=0,this.items.forEach((a,l)=>{a.detail&&(this.onExpandDetail(),this.poTable.expand(l))})}onCollapseDetail(){this.totalExpanded-=1,this.totalExpanded=this.totalExpanded<0?0:this.totalExpanded}onExpandDetail(){this.totalExpanded+=1}sumTotal(a){a.value&&(this.total+=a.value)}restoreColumn(){this.columns=this.columnsDefault}changeColumnVisible(a){localStorage.setItem("initial-columns",a)}getDescription(a){return`Airfare to ${a.destination} - ${a.initials}`}validateDiscount(a){return a.disableDiscount}static \u0275fac=function(l){return new(l||r)(w(me),w(ke),w(oe))};static \u0275cmp=S({type:r,selectors:[["sample-po-table-airfare"]],viewQuery:function(l,o){if(l&1&&(I(O,7),I(y,7)),l&2){let m;k(m=F())&&(o.poModal=m.first),k(m=F())&&(o.poTable=m.first)}},standalone:!1,features:[q([me,oe])],decls:16,vars:23,consts:[[1,"po-font-text-bold","po-text-color-neutral-dark-40"],[3,"p-collapsed","p-expanded","p-selected","p-unselected","p-change-visible-columns","p-restore-column-manager","p-delete-items","p-container","p-height","p-hide-batch-actions","p-hide-table-search","p-selectable","p-sort","p-striped","p-actions","p-columns","p-items","p-max-columns","p-virtual-scroll"],["p-label","Total Value","p-orientation","horizontal",1,"po-md-6","po-mb-sm-2","po-mb-md-2","po-lb-lg-2",3,"p-value"],["p-label","Expanded Itens","p-orientation","horizontal",1,"po-md-6","po-mb-sm-2","po-mb-md-2","po-lb-lg-2",3,"p-value"],[1,"po-row"],["p-icon","an an-shopping-cart-simple","p-label","Add items to cart",1,"po-md-3",3,"p-click"],["p-label","Expand all detail",1,"po-md-3",3,"p-click"],["p-label","Collapse all detail",1,"po-md-3",3,"p-click"],["p-click-out","true","p-size","sm",3,"p-title"],["p-label","Airline",1,"po-sm-6",3,"p-value"],["p-label","Initials",1,"po-sm-2",3,"p-value"],["p-label","Class",1,"po-sm-4",3,"p-value"]],template:function(l,o){l&1&&(t(0,"div",0),e(1,"Choose one or more promotional airfares"),n(),i(2,"po-divider"),t(3,"po-table",1),E("p-collapsed",function(){return o.onCollapseDetail()})("p-expanded",function(){return o.onExpandDetail()})("p-selected",function(p){return o.sumTotal(p)})("p-unselected",function(p){return o.decreaseTotal(p)})("p-change-visible-columns",function(p){return o.changeColumnVisible(p)})("p-restore-column-manager",function(){return o.restoreColumn()})("p-delete-items",function(p){return o.deleteItems(p)}),n(),i(4,"po-divider")(5,"po-info",2),ne(6,"currency"),i(7,"po-info",3),t(8,"div",4)(9,"po-button",5),E("p-click",function(){return o.addToCart()}),n(),t(10,"po-button",6),E("p-click",function(){return o.expandAll()}),n(),t(11,"po-button",7),E("p-click",function(){return o.collapseAll()}),n()(),t(12,"po-modal",8),i(13,"po-info",9)(14,"po-info",10)(15,"po-info",11),n()),l&2&&(s(3),c("p-container",!0)("p-height",400)("p-hide-batch-actions",!1)("p-hide-table-search",!1)("p-selectable",!0)("p-sort",!0)("p-striped",!0)("p-actions",o.actions)("p-columns",o.columns)("p-items",o.items)("p-max-columns",7)("p-virtual-scroll",!1),s(2),ve("p-value",ye(6,20,o.total,"USD")),s(2),c("p-value",o.totalExpanded),s(5),ee("p-title","",o.detail==null?null:o.detail.destination," - ",o.detail==null?null:o.detail.country,""),s(),c("p-value",o.detail==null?null:o.detail.airline),s(),c("p-value",o.detail==null?null:o.detail.initials),s(),c("p-value",o.detail==null?null:o.detail.class))},dependencies:[W,R,U,O,y,Pe],encapsulation:2})}return r})();var It=r=>({"docs-sample-code-tabs":r}),tt=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=S({type:r,selectors:[["sample-po-table-airfare-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(i(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Table - Airfare"),n(),t(4,"a",2),E("click",function(){return o.toggleSampleCodeTabs()}),i(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-table-airfare/sample-po-table-airfare.component.html"),n(),t(13,"pre",7),e(14,`<div class="po-font-text-bold po-text-color-neutral-dark-40">Choose one or more promotional airfares</div>

<po-divider></po-divider>

<po-table
  [p-container]="true"
  [p-height]="400"
  [p-hide-batch-actions]="false"
  [p-hide-table-search]="false"
  [p-selectable]="true"
  [p-sort]="true"
  [p-striped]="true"
  [p-actions]="actions"
  [p-columns]="columns"
  [p-items]="items"
  [p-max-columns]="7"
  [p-virtual-scroll]="false"
  (p-collapsed)="onCollapseDetail()"
  (p-expanded)="onExpandDetail()"
  (p-selected)="sumTotal($event)"
  (p-unselected)="decreaseTotal($event)"
  (p-change-visible-columns)="changeColumnVisible($event)"
  (p-restore-column-manager)="restoreColumn()"
  (p-delete-items)="deleteItems($event)"
>
</po-table>

<po-divider></po-divider>

<po-info
  class="po-md-6 po-mb-sm-2 po-mb-md-2 po-lb-lg-2"
  p-label="Total Value"
  p-orientation="horizontal"
  p-value="{ { total | currency: 'USD' }}"
>
</po-info>

<po-info
  class="po-md-6 po-mb-sm-2 po-mb-md-2 po-lb-lg-2"
  p-label="Expanded Itens"
  p-orientation="horizontal"
  [p-value]="totalExpanded"
>
</po-info>

<div class="po-row">
  <po-button class="po-md-3" p-icon="an an-shopping-cart-simple" p-label="Add items to cart" (p-click)="addToCart()">
  </po-button>
  <po-button class="po-md-3" p-label="Expand all detail" (p-click)="expandAll()"> </po-button>
  <po-button class="po-md-3" p-label="Collapse all detail" (p-click)="collapseAll()"> </po-button>
</div>

<po-modal p-click-out="true" p-size="sm" p-title="{ { detail?.destination }} - { { detail?.country }}">
  <po-info class="po-sm-6" p-label="Airline" [p-value]="detail?.airline"> </po-info>

  <po-info class="po-sm-2" p-label="Initials" [p-value]="detail?.initials"> </po-info>

  <po-info class="po-sm-4" p-label="Class" [p-value]="detail?.class"> </po-info>
</po-modal>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-table-airfare/sample-po-table-airfare.component.ts"),n(),t(19,"pre",9),e(20,`import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';

import {
  PoDialogService,
  PoModalComponent,
  PoTableAction,
  PoTableColumn,
  PoTableComponent,
  PoNotificationService
} from '@po-ui/ng-components';

import { SamplePoTableAirfareService } from './sample-po-table-airfare.service';

@Component({
  selector: 'sample-po-table-airfare',
  templateUrl: './sample-po-table-airfare.component.html',
  providers: [SamplePoTableAirfareService, PoDialogService],
  standalone: false
})
export class SamplePoTableAirfareComponent implements AfterViewInit, OnInit {
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;
  @ViewChild(PoTableComponent, { static: true }) poTable: PoTableComponent;

  actions: Array<PoTableAction> = [
    {
      action: this.discount.bind(this),
      icon: 'an an-currency-circle-dollar',
      label: 'Apply Discount',
      disabled: this.validateDiscount.bind(this)
    },
    { action: this.details.bind(this), icon: 'an an-info', label: 'Details' },
    { action: this.remove.bind(this), icon: 'po-icon an an-trash', label: 'Remove' }
  ];
  columns: Array<PoTableColumn>;
  columnsDefault: Array<PoTableColumn>;
  detail: any;
  items: Array<any>;
  total: number = 0;
  totalExpanded = 0;
  initialColumns: Array<any>;

  constructor(
    private sampleAirfare: SamplePoTableAirfareService,
    private poNotification: PoNotificationService,
    private poDialog: PoDialogService
  ) {}

  ngOnInit(): void {
    this.columns = this.sampleAirfare.getColumns();
    this.items = this.sampleAirfare.getItems();
  }

  ngAfterViewInit(): void {
    this.columnsDefault = this.columns;
    if (localStorage.getItem('initial-columns')) {
      this.initialColumns = localStorage.getItem('initial-columns').split(',');

      const result = this.columns.map(el => ({
        ...el,
        visible: this.initialColumns.includes(el.property)
      }));

      const newColumn = [...result];
      newColumn.sort(this.sortFunction);
      this.columns = newColumn;
    }
  }

  sortFunction(a, b) {
    const teste = localStorage.getItem('initial-columns').split(',');
    const indexA = teste.indexOf(a['property']);
    const indexB = teste.indexOf(b['property']);
    if (indexA === -1) {
      return 1;
    }
    if (indexB === -1) {
      return -1;
    }
    if (indexA < indexB) {
      return -1;
    } else if (indexA > indexB) {
      return 1;
    }
  }

  addToCart() {
    const selectedItems = this.poTable.getSelectedRows();

    if (selectedItems.length > 0) {
      this.poDialog.confirm({
        title: 'Add to cart',
        message: \`Would you like to add \${selectedItems.length} items to cart?\`,
        confirm: () => this.confirmItems(selectedItems),
        cancel: () => {}
      });
    }
  }

  confirmItems(selectedItems: Array<any>) {
    selectedItems.forEach(item => {
      switch (item.status) {
        case 'available':
          this.poNotification.success(\`\${this.getDescription(item)} added succesfully\`);
          break;
        case 'reserved':
          this.poNotification.warning(
            \`\${this.getDescription(item)} added succesfully, verify your e-mail to complete reservation\`
          );
          break;
        case 'closed':
          this.poNotification.error(\`\${this.getDescription(item)} is closed and not available anymore\`);
          break;
      }
    });

    this.poTable.unselectRows();
  }

  collapseAll() {
    this.items.forEach((item, index) => {
      if (item.detail) {
        this.onCollapseDetail();
        this.poTable.collapse(index);
      }
    });
  }

  decreaseTotal(row: any) {
    if (row.value) {
      this.total -= row.value;
    }
  }

  deleteItems(items: Array<any>) {
    this.items = items;
  }

  details(item) {
    this.detail = item;
    this.poModal.open();
  }

  remove(item: { [key: string]: any }) {
    this.poTable.removeItem(item);
  }

  discount(item) {
    if (!item.disableDiscount) {
      const updatedItem = { ...item, value: item.value - item.value * 0.2, disableDiscount: true };
      this.poTable.updateItem(item, updatedItem);
    }
  }

  expandAll() {
    this.totalExpanded = 0;
    this.items.forEach((item, index) => {
      if (item.detail) {
        this.onExpandDetail();
        this.poTable.expand(index);
      }
    });
  }

  onCollapseDetail() {
    this.totalExpanded -= 1;
    this.totalExpanded = this.totalExpanded < 0 ? 0 : this.totalExpanded;
  }

  onExpandDetail() {
    this.totalExpanded += 1;
  }

  sumTotal(row: any) {
    if (row.value) {
      this.total += row.value;
    }
  }

  restoreColumn() {
    this.columns = this.columnsDefault;
  }

  changeColumnVisible(event) {
    localStorage.setItem('initial-columns', event);
  }

  private getDescription(item: any) {
    return \`Airfare to \${item.destination} - \${item.initials}\`;
  }

  private validateDiscount(item) {
    return item.disableDiscount;
  }
}
`),n(),t(21,"label",6),e(22,"sample-po-table-airfare/sample-po-table-airfare.service.ts"),n(),t(23,"pre",9),e(24,`import { Injectable } from '@angular/core';

import { PoTableColumn, PoTableDetail } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoTableAirfareService {
  getColumns(): Array<PoTableColumn> {
    const airfareDetail: PoTableDetail = {
      columns: [
        { property: 'package' },
        { property: 'tour' },
        { property: 'time', label: 'Departure time', type: 'time', format: 'HH:mm' },
        { property: 'distance', label: 'Distance (Miles)', type: 'number', format: '1.0-5' }
      ],
      typeHeader: 'top'
    };

    return [
      {
        property: 'status',
        type: 'label',
        labels: [
          { value: 'available', color: 'color-11', label: 'Available' },
          { value: 'reserved', color: 'color-08', label: 'Reserved' },
          { value: 'closed', color: 'color-07', label: 'Closed' }
        ]
      },
      { property: 'country' },
      { property: 'destination' },
      {
        property: 'region',
        type: 'subtitle',
        width: '180px',
        subtitles: [
          { value: 'Alps', color: 'color-01', label: 'Alps', content: 'AL' },
          { value: 'Australasia', color: 'color-02', label: 'Australasia', content: 'AU' },
          { value: 'British Isle', color: 'color-03', label: 'British Isle', content: 'BI' },
          { value: 'Caucasus', color: 'color-04', label: 'Caucasus', content: 'CA' },
          { value: 'Danube', color: 'color-05', label: 'Danube', content: 'DA' },
          { value: 'East Asia', color: 'color-06', label: 'East Asia', content: 'EA' },
          { value: 'Latin America', color: 'color-07', label: 'Latin America', content: 'LA' },
          { value: 'Mediterranean', color: 'color-08', label: 'Mediterranean', content: 'ME' },
          { value: 'Nordics', color: 'color-09', label: 'Nordics', content: 'NO' },
          { value: 'North America', color: 'color-10', label: 'North America', content: 'NA' },
          { value: 'Southern Africa', color: 'color-11', label: 'Southern Africa', content: 'SA' },
          { value: 'Western Africa', color: 'color-12', label: 'Western Africa', content: 'WA' }
        ]
      },
      { property: 'date', type: 'date' },
      { property: 'returnDate', label: 'Return Date', type: 'date' },
      { property: 'value', type: 'currency', format: 'USD' },
      { property: 'id', label: 'Flight Number', type: 'number' },
      {
        property: 'onBoardService',
        label: 'On Board Service',
        type: 'boolean',
        boolean: {
          trueLabel: 'Yes',
          falseLabel: 'No'
        }
      },
      { property: 'detail', label: 'Details', type: 'detail', detail: airfareDetail }
    ];
  }

  getItems() {
    return [
      {
        id: 11234,
        initials: 'BR',
        country: 'Brazil',
        value: 1000.0,
        date: '2018-10-09',
        returnDate: '2018-11-01',
        class: 'Economic',
        onBoardService: false,
        destination: 'Rio de Janeiro',
        airline: 'Azul',
        status: 'available',
        region: 'Latin America',
        detail: [
          {
            package: 'Basic',
            tour: 'City tour by public bus and visit to the main museums.',
            time: '20:10:10',
            distance: '1000'
          },
          {
            package: 'Intermediary',
            tour: 'City tour by van and guided visit to the main museums.',
            time: '09:15:19',
            distance: '2000'
          },
          {
            package: 'Complete',
            tour: 'VIP city tour, music show with dinner and guided tour to the main museums.',
            time: '07:10:20',
            distance: '3000'
          }
        ]
      },
      {
        id: 22467,
        initials: 'FR',
        country: 'France',
        value: 5000.0,
        date: '2019-12-13',
        returnDate: '2019-12-31',
        class: 'Economic',
        onBoardService: false,
        destination: 'Paris',
        airline: 'British Airways',
        status: 'closed',
        region: 'Alps',
        detail: [
          {
            package: 'Basic',
            tour: 'City tour by public bus and visit to the main museums.',
            time: '10:15:10',
            distance: '4800'
          },
          {
            package: 'Intermediary',
            tour: 'City tour by van and guided visit to the main museums.',
            time: '22:15:10',
            distance: '11000'
          },
          {
            package: 'Complete',
            tour: 'VIP city tour, music show with dinner and guided tour to the main museums.',
            time: '10:15:10',
            distance: '1000'
          }
        ]
      },
      {
        id: 40670,
        initials: 'SN',
        country: 'Senegal',
        value: 3200.0,
        date: '2017-11-22',
        returnDate: '2018-12-01',
        class: 'Economic',
        onBoardService: false,
        destination: 'Dakar',
        airline: 'Iberia',
        status: 'closed',
        region: 'Western Africa'
      },
      {
        id: 34679,
        initials: 'PT',
        country: 'Portugal',
        value: 5500.0,
        date: '2017-10-10',
        returnDate: '2018-10-20',
        class: 'Economic',
        onBoardService: false,
        destination: 'Lisbon',
        airline: 'Air Europa',
        status: 'closed',
        region: 'Mediterranean'
      },
      {
        id: 48999,
        initials: 'RU',
        country: 'Russia',
        value: 6700.0,
        date: '2019-01-17',
        returnDate: '2019-02-20',
        class: 'First Class',
        onBoardService: true,
        destination: 'Moscow',
        airline: 'Lufthansa',
        status: 'reserved',
        region: 'Caucasus'
      },
      {
        id: 48999,
        initials: 'US',
        country: 'United States',
        value: 2700.49,
        date: '2018-10-17',
        returnDate: '2018-10-29',
        class: 'Economic',
        onBoardService: false,
        destination: 'Los Angeles',
        airline: 'American Airlines',
        status: 'reserved',
        region: 'North America'
      },
      {
        id: 54563,
        initials: 'CL',
        country: 'Chile',
        value: 2000.0,
        date: '2018-10-20',
        returnDate: '2018-11-01',
        destination: 'Cusco',
        class: 'Economic',
        onBoardService: false,
        airline: 'LATAM',
        status: 'available',
        region: 'Latin America'
      },
      {
        id: 64568,
        initials: 'MX',
        country: 'Mexico',
        value: 2100.0,
        date: '2018-03-10',
        returnDate: '2018-05-09',
        destination: 'Mexico City',
        class: 'Economic',
        onBoardService: false,
        airline: 'Aero M\xE9xico',
        status: 'available',
        region: 'Latin America',
        detail: [
          {
            package: 'Basic',
            tour: 'City tour by public bus and visit to the main museums.',
            time: '12:10:10',
            distance: '2200'
          },
          {
            package: 'Intermediary',
            tour: 'City tour by van and guided visit to the main museums.',
            time: '11:10:10',
            distance: '1500'
          },
          {
            package: 'Complete',
            tour: 'VIP city tour, music show with dinner and guided tour to the main museums.',
            time: '16:10:10',
            distance: '1800'
          }
        ]
      },
      {
        id: 75456,
        initials: 'IE',
        country: 'Ireland',
        value: 6300.0,
        date: '2018-10-14',
        returnDate: '2018-10-30',
        destination: 'Cork',
        class: 'First Class',
        onBoardService: true,
        airline: 'Lufthansa',
        status: 'reserved',
        region: 'British Isle'
      },
      {
        id: 23445,
        initials: 'ZA',
        country: 'South Africa',
        value: 1900.0,
        date: '2018-12-10',
        returnDate: '2018-12-25',
        destination: 'Cape Town',
        class: 'Economic',
        onBoardService: false,
        airline: 'South African Airways',
        status: 'available',
        region: 'Southern Africa'
      },
      {
        id: 19238,
        initials: 'AU',
        country: 'Australia',
        value: 6300.0,
        date: '2018-10-14',
        returnDate: '2018-10-30',
        destination: 'Sydney',
        class: 'First Class',
        onBoardService: true,
        airline: 'Jetstar Airways',
        status: 'reserved',
        region: 'Australasia'
      },
      {
        id: 85456,
        initials: 'JP',
        country: 'Japan',
        value: 5900.0,
        date: '2018-10-25',
        returnDate: '2018-11-10',
        destination: 'Tokio',
        class: 'Executive',
        onBoardService: true,
        airline: 'Japan Airlines',
        status: 'available',
        region: 'East Asia'
      },
      {
        id: 94565,
        initials: 'CN',
        country: 'China',
        value: 2900.0,
        date: '2018-10-10',
        returnDate: '2018-10-25',
        destination: 'Beijing',
        class: 'Economic',
        onBoardService: false,
        airline: 'Malaysia Airlines',
        status: 'available',
        region: 'East Asia'
      },
      {
        id: 32330,
        initials: 'UK',
        country: 'England',
        value: 2090.5,
        date: '2018-10-07',
        returnDate: '2018-11-15',
        destination: 'London',
        class: 'Executive',
        onBoardService: true,
        airline: 'British Airways',
        status: 'available',
        region: 'British Isle'
      },
      {
        id: 14560,
        initials: 'CA',
        country: 'Canada',
        value: 2090.5,
        date: '2018-10-07',
        returnDate: '2018-10-20',
        destination: 'Quebec',
        class: 'Economic',
        onBoardService: false,
        airline: 'American Airlines',
        status: 'available',
        region: 'North America'
      },
      {
        id: 93800,
        initials: 'IS',
        country: 'Iceland',
        value: 6300.0,
        date: '2018-10-12',
        returnDate: '2018-10-27',
        destination: 'Reykjav\xEDk',
        class: 'Economic',
        onBoardService: false,
        airline: 'Star Alliance',
        status: 'available',
        region: 'Nordics'
      },
      {
        id: 34239,
        initials: 'DE',
        country: 'Germany',
        value: 3070.5,
        date: '2018-10-07',
        returnDate: '2018-10-20',
        destination: 'Berlin',
        class: 'Executive',
        onBoardService: true,
        airline: 'LATAM',
        status: 'available',
        region: 'Danube'
      },
      {
        id: 45611,
        initials: 'AR',
        country: 'Argentina',
        value: 3500.5,
        date: '2018-12-07',
        returnDate: '2018-12-29',
        destination: 'Ushuaia',
        class: 'Economic',
        onBoardService: false,
        airline: 'LATAM',
        status: 'reserved',
        region: 'Latin America'
      }
    ];
  }
}
`),n()()()()(),t(25,"div",10),i(26,"sample-po-table-airfare"),n(),i(27,"hr")),l&2&&(s(5),_("po-icon "+o.sampleCodeButtonIcon),s(),D(" ",o.sampleCodeButtonLabel,""),s(),c("ngClass",f(4,It,o.hideSampleCodeTabs)))},dependencies:[A,P,C,T,et],encapsulation:2})}return r})();var H=function(r){return r[r.Stable=0]="Stable",r[r.Experimental=1]="Experimental",r[r.RoadMap=2]="RoadMap",r}(H||{});var se=(()=>{class r{items=[{component:{favorite:["favorite","documentation"],name:"PO Select",description:"Display a list of items and allows selection",link:"/documentation/po-select",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Checkbox",description:"Group of square buttons that allows multiple items to be selected",link:"/documentation/po-checkbox-group",extra:"Best Practices",extras:["Short and objective texts for items","Use with short lists","For big lists use PO Multiselect"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Page Login",description:"Template for authentication",link:"/documentation/po-page-login",extra:"Features",extras:[],status:0,type:"template"}},{component:{favorite:["favorite","documentation"],name:"PO Number",description:"Input that allows only numbers",link:"/documentation/po-number",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:1,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Page Dynamic Table",description:"Template for list resources with a table",link:"/documentation/po-page-dynamic-table",extra:"Features",extras:["6 defaults actions","Use Metadata to build your page","No code","Customization"],status:0,type:"template"}},{component:{favorite:["favorite","documentation"],name:"PO Combo",description:"Display a list of items with filter and allows selection",link:"/documentation/po-combo",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Notification",description:"Show notification easily and quickly",link:"/documentation/po-notification",extra:"Features",extras:["4 types of notifications","Define time for your notifications","Use actions in your notification"],status:0,type:"service"}},{component:{favorite:["favorite","documentation"],name:"PO Multiselect",description:"Display a list of items and allows multiple selection",link:"/documentation/po-multiselect",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:1,type:"component"}},{component:{favorite:[],name:"PO Grid",description:"Create a grid for edition",link:"/documentation/po-grid",extra:"Features",extras:[],status:2,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Input",description:"Input for general texts",link:"/documentation/po-input",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Textarea",description:"Larger input for big texts",link:"/documentation/po-textarea",extra:"Best Practices",extras:["Recommended to large texts like observations and details","For short texts use po-input"],status:1,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Datepicker",description:"Input with calendar for dates",link:"/documentation/po-datepicker",extra:"Features",extras:["Multiple idioms ( pt, es , en)","Custom date formats","Period validation (start date and end date)"],status:1,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Email",description:"Input that allows valid email texts (username@email.com)",link:"/documentation/po-email",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Url",description:"Input that expects a valid url as text (http://www.url.com)",link:"/documentation/po-url",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Password",description:"Input with bullet text to type passwords",link:"/documentation/po-password",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Login",description:"Input with a user icon that represents a login field",link:"/documentation/po-login",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Upload",description:"Upload file(s) with a loading bar",link:"/documentation/po-upload",extra:"Features",extras:["Multiple file selection","Automatic upload after click","File format and size restriction"],status:1,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Avatar",description:"Creates a circle with a picture inside",link:"/documentation/po-avatar",extra:"Features",extras:["Multiple sizes","Default image"],status:0,type:"component"}}];getItems(a,l=!1){let o=[...this.items];return a&&a.column&&o.sort((m,p)=>this.sort(m,p,a)),l||(o.length=10),o}sort(a,l,o){let m=o.column.property,p=o.type;if(m.split(".").length>1){let d=m.split(".")[0],be=m.split(".")[1];return a[d][be]<l[d][be]?p===K.Ascending?-1:1:p===K.Ascending?1:-1}else return a[m]<l[m]?p===K.Ascending?-1:1:p===K.Ascending?1:-1}static \u0275fac=function(l){return new(l||r)};static \u0275prov=L({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();function Lt(r,Q){if(r&1&&(t(0,"div"),e(1),ne(2,"uppercase"),n()),r&2){let a=Q.$implicit;he("badge ",a,""),s(),pe(fe(2,4,a))}}function qt(r,Q){if(r&1&&(t(0,"ul")(1,"li",5),e(2),n(),i(3,"hr"),n()),r&2){let a=Q.$implicit;s(2),pe(a)}}var nt=(()=>{class r{sampleComponents;router;poModal;extraInformation;items;showMoreDisabled=!1;title;isLoading=!1;columns=[{property:"component.status",type:"label",label:"Status",width:"5%",labels:[{value:H.Stable,color:"color-11",label:"Stable",textColor:"white",tooltip:"Published component"},{value:H.Experimental,color:"color-08",label:"Experimental",textColor:"white",tooltip:"Component in homologation"},{value:H.RoadMap,color:"color-07",label:"Roadmap",textColor:"white",tooltip:"Component in roadmap"}]},{property:"component.name",label:"Name",type:"link"},{property:"component.type",label:"Type",type:"columnTemplate",width:"10%"},{property:"component.description",label:"Descri\xE7\xE3o",color:this.experimentalColor.bind(this)},{property:"component.extra",label:"Extras",width:"10px",type:"link",tooltip:"Additional details",action:(a,l)=>{this.extras(a,l)},disabled:this.canShowExtras.bind(this)},{property:"component.favorite",label:"Actions",type:"icon",sortable:!1,icons:[{action:this.favorite.bind(this),color:this.isFavorite.bind(this),icon:"an an-star",tooltip:"Favorite",value:"favorite"},{action:this.goToDocumentation.bind(this),disabled:this.canGoToDocumentation.bind(this),icon:"an an-arrow-square-out",tooltip:"Click to go to documentation",value:"documentation"}]}];constructor(a,l){this.sampleComponents=a,this.router=l}ngOnInit(){this.items=this.sampleComponents.getItems()}experimentalColor(a){return a?.component?.status===H.Experimental?"color-08":"color-11"}extras(a,l){this.title=a,this.extraInformation=l,this.poModal.open()}goToDocumentation(a){this.router.navigate([a?.component?.link])}showMore(a){this.isLoading=!0,this.showMoreDisabled=!0,setTimeout(()=>{this.items=this.getItems(a),this.isLoading=!1},4e3)}sort(a){this.items=this.getItems(a)}showAlert(a){alert(a)}canGoToDocumentation(a){return a?.component?.status!==H.Stable}canShowExtras(a){return a?.component?.status!==H.Stable||a?.component?.extras.length===0}favorite(a){a.component.isFavorite=!a.component.isFavorite}getItems(a){return this.sampleComponents.getItems(a,this.showMoreDisabled)}isFavorite(a){return a?.component?.isFavorite?"color-08":"color-11"}static \u0275fac=function(l){return new(l||r)(w(se),w(ie))};static \u0275cmp=S({type:r,selectors:[["sample-po-table-components"]],viewQuery:function(l,o){if(l&1&&I(O,7),l&2){let m;k(m=F())&&(o.poModal=m.first)}},standalone:!1,features:[q([se])],decls:7,vars:10,consts:[[1,"po-font-text-large","po-text-color-neutral-dark-40"],["p-container","shadow",3,"p-show-more","p-sort-by","p-loading-show-more","p-columns","p-items","p-show-more-disabled","p-sort"],["p-table-column-template","",3,"p-property"],["p-click-out","true","p-size","sm",3,"p-title"],[4,"ngFor","ngForOf"],[1,"po-font-text"]],template:function(l,o){l&1&&(t(0,"div",0),e(1,"PO UI Library"),n(),i(2,"hr"),t(3,"po-table",1),E("p-show-more",function(p){return o.showMore(p)})("p-sort-by",function(p){return o.sort(p)}),$(4,Lt,3,6,"ng-template",2),n(),t(5,"po-modal",3),$(6,qt,4,1,"ul",4),n()),l&2&&(s(3),c("p-loading-show-more",o.isLoading)("p-columns",o.columns)("p-items",o.items)("p-show-more-disabled",o.showMoreDisabled)("p-sort",!0),s(),c("p-property","component.type"),s(),ee("p-title","",o.title," - ",o.extraInformation==null?null:o.extraInformation.component,""),s(),c("ngForOf",o.extraInformation==null?null:o.extraInformation.extras))},dependencies:[Ce,O,y,Ve,Te],styles:[".badge[_ngcontent-%COMP%]{padding:3px 10px;border-radius:3px;color:#fff;width:100px;text-align:center;box-shadow:0 4px 8px #0003,0 6px 20px #00000030;font-size:10px}.badge.component[_ngcontent-%COMP%]{background-color:#82b1ff}.badge.service[_ngcontent-%COMP%]{background-color:#b39ddb}.badge.template[_ngcontent-%COMP%]{background-color:#ffb515}"]})}return r})();var Bt=r=>({"docs-sample-code-tabs":r}),it=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=S({type:r,selectors:[["sample-po-table-components-view"]],standalone:!1,decls:38,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(i(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Table - Po Field Components"),n(),t(4,"a",2),E("click",function(){return o.toggleSampleCodeTabs()}),i(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-table-components/sample-po-table-components.component.html"),n(),t(13,"pre",7),e(14,`<div class="po-font-text-large po-text-color-neutral-dark-40">PO UI Library</div>

<hr />

<po-table
  p-container="shadow"
  [p-loading-show-more]="isLoading"
  [p-columns]="columns"
  [p-items]="items"
  [p-show-more-disabled]="showMoreDisabled"
  [p-sort]="true"
  (p-show-more)="showMore($event)"
  (p-sort-by)="sort($event)"
>
  <ng-template p-table-column-template [p-property]="'component.type'" let-value>
    <div class="badge { { value }}">{ { value | uppercase }}</div>
  </ng-template>
</po-table>

<po-modal p-click-out="true" p-size="sm" p-title="{ { title }} - { { extraInformation?.component }}">
  <ul *ngFor="let extra of extraInformation?.extras">
    <li class="po-font-text">{ { extra }}</li>
    <hr />
  </ul>
</po-modal>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-table-components/sample-po-table-components.component.ts"),n(),t(19,"pre",9),e(20,`import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PoModalComponent, PoTableColumn, PoTableColumnLabel, PoTableColumnSort } from '@po-ui/ng-components';

import { SamplePoTableComponentStatus } from './sample-po-table-components.enum';
import { SamplePoTableComponentsService } from './sample-po-table-components.service';

@Component({
  selector: 'sample-po-table-components',
  templateUrl: './sample-po-table-components.component.html',
  styleUrls: ['./sample-po-table-components.component.css'],
  providers: [SamplePoTableComponentsService],
  standalone: false
})
export class SamplePoTableComponentsComponent implements OnInit {
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  extraInformation: any;
  items: Array<any>;
  showMoreDisabled: boolean = false;
  title: any;
  isLoading: boolean = false;

  public readonly columns: Array<PoTableColumn> = [
    {
      property: 'component.status',
      type: 'label',
      label: 'Status',
      width: '5%',
      labels: <Array<PoTableColumnLabel>>[
        {
          value: SamplePoTableComponentStatus.Stable,
          color: 'color-11',
          label: 'Stable',
          textColor: 'white',
          tooltip: 'Published component'
        },
        {
          value: SamplePoTableComponentStatus.Experimental,
          color: 'color-08',
          label: 'Experimental',
          textColor: 'white',
          tooltip: 'Component in homologation'
        },
        {
          value: SamplePoTableComponentStatus.RoadMap,
          color: 'color-07',
          label: 'Roadmap',
          textColor: 'white',
          tooltip: 'Component in roadmap'
        }
      ]
    },
    {
      property: 'component.name',
      label: 'Name',
      type: 'link'
    },
    { property: 'component.type', label: 'Type', type: 'columnTemplate', width: '10%' },
    { property: 'component.description', label: 'Descri\xE7\xE3o', color: this.experimentalColor.bind(this) },
    {
      property: 'component.extra',
      label: 'Extras',
      width: '10px',
      type: 'link',
      tooltip: 'Additional details',
      action: (value, row) => {
        this.extras(value, row);
      },
      disabled: this.canShowExtras.bind(this)
    },
    {
      property: 'component.favorite',
      label: 'Actions',
      type: 'icon',
      sortable: false,
      icons: [
        {
          action: this.favorite.bind(this),
          color: this.isFavorite.bind(this),
          icon: 'an an-star',
          tooltip: 'Favorite',
          value: 'favorite'
        },
        {
          action: this.goToDocumentation.bind(this),
          disabled: this.canGoToDocumentation.bind(this),
          icon: 'an an-arrow-square-out',
          tooltip: 'Click to go to documentation',
          value: 'documentation'
        }
      ]
    }
  ];

  constructor(
    public sampleComponents: SamplePoTableComponentsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.items = this.sampleComponents.getItems();
  }

  experimentalColor(row) {
    return row?.component?.status === SamplePoTableComponentStatus.Experimental ? 'color-08' : 'color-11';
  }

  extras(value, row) {
    this.title = value;
    this.extraInformation = row;

    this.poModal.open();
  }

  goToDocumentation(row) {
    this.router.navigate([row?.component?.link]);
  }

  showMore(sort: PoTableColumnSort) {
    this.isLoading = true;
    this.showMoreDisabled = true;
    setTimeout(() => {
      this.items = this.getItems(sort);
      this.isLoading = false;
    }, 4000);
  }

  sort(sort: PoTableColumnSort) {
    this.items = this.getItems(sort);
  }

  public showAlert(msg): void {
    alert(msg);
  }

  private canGoToDocumentation(row) {
    return row?.component?.status !== SamplePoTableComponentStatus.Stable;
  }

  private canShowExtras(row: any) {
    return row?.component?.status !== SamplePoTableComponentStatus.Stable || row?.component?.extras.length === 0;
  }

  private favorite(row) {
    row.component.isFavorite = !row.component.isFavorite;
  }

  private getItems(sort: PoTableColumnSort) {
    return this.sampleComponents.getItems(sort, this.showMoreDisabled);
  }

  private isFavorite(row) {
    return row?.component?.isFavorite ? 'color-08' : 'color-11';
  }
}
`),n(),t(21,"label",6),e(22,"sample-po-table-components/sample-po-table-components.enum.ts"),n(),t(23,"pre",9),e(24,`export enum SamplePoTableComponentStatus {
  Stable,
  Experimental,
  RoadMap
}
`),n(),t(25,"label",6),e(26,"sample-po-table-components/sample-po-table-components.service.ts"),n(),t(27,"pre",9),e(28,`import { Injectable } from '@angular/core';

import { PoTableColumnSort, PoTableColumnSortType } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoTableComponentsService {
  readonly items = [
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Select',
        description: 'Display a list of items and allows selection',
        link: '/documentation/po-select',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 0,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Checkbox',
        description: 'Group of square buttons that allows multiple items to be selected',
        link: '/documentation/po-checkbox-group',
        extra: 'Best Practices',
        extras: ['Short and objective texts for items', 'Use with short lists', 'For big lists use PO Multiselect'],
        status: 0,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Page Login',
        description: 'Template for authentication',
        link: '/documentation/po-page-login',
        extra: 'Features',
        extras: [],
        status: 0,
        type: 'template'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Number',
        description: 'Input that allows only numbers',
        link: '/documentation/po-number',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 1,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Page Dynamic Table',
        description: 'Template for list resources with a table',
        link: '/documentation/po-page-dynamic-table',
        extra: 'Features',
        extras: ['6 defaults actions', 'Use Metadata to build your page', 'No code', 'Customization'],
        status: 0,
        type: 'template'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Combo',
        description: 'Display a list of items with filter and allows selection',
        link: '/documentation/po-combo',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 0,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Notification',
        description: 'Show notification easily and quickly',
        link: '/documentation/po-notification',
        extra: 'Features',
        extras: ['4 types of notifications', 'Define time for your notifications', 'Use actions in your notification'],
        status: 0,
        type: 'service'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Multiselect',
        description: 'Display a list of items and allows multiple selection',
        link: '/documentation/po-multiselect',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 1,
        type: 'component'
      }
    },
    {
      component: {
        favorite: [],
        name: 'PO Grid',
        description: 'Create a grid for edition',
        link: '/documentation/po-grid',
        extra: 'Features',
        extras: [],
        status: 2,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Input',
        description: 'Input for general texts',
        link: '/documentation/po-input',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 0,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Textarea',
        description: 'Larger input for big texts',
        link: '/documentation/po-textarea',
        extra: 'Best Practices',
        extras: ['Recommended to large texts like observations and details', 'For short texts use po-input'],
        status: 1,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Datepicker',
        description: 'Input with calendar for dates',
        link: '/documentation/po-datepicker',
        extra: 'Features',
        extras: [
          'Multiple idioms ( pt, es , en)',
          'Custom date formats',
          'Period validation (start date and end date)'
        ],
        status: 1,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Email',
        description: 'Input that allows valid email texts (username@email.com)',
        link: '/documentation/po-email',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 0,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Url',
        description: 'Input that expects a valid url as text (http://www.url.com)',
        link: '/documentation/po-url',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 0,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Password',
        description: 'Input with bullet text to type passwords',
        link: '/documentation/po-password',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 0,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Login',
        description: 'Input with a user icon that represents a login field',
        link: '/documentation/po-login',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 0,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Upload',
        description: 'Upload file(s) with a loading bar',
        link: '/documentation/po-upload',
        extra: 'Features',
        extras: ['Multiple file selection', 'Automatic upload after click', 'File format and size restriction'],
        status: 1,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Avatar',
        description: 'Creates a circle with a picture inside',
        link: '/documentation/po-avatar',
        extra: 'Features',
        extras: ['Multiple sizes', 'Default image'],
        status: 0,
        type: 'component'
      }
    }
  ];

  getItems(sort?: PoTableColumnSort, loadAll: boolean = false): Array<any> {
    const result = [...this.items];

    if (sort && sort.column) {
      result.sort((value, valueToCompare) => this.sort(value, valueToCompare, sort));
    }

    if (!loadAll) {
      result.length = 10;
    }

    return result;
  }

  private sort(value: any, valueToCompare: any, sort: PoTableColumnSort) {
    const property = sort.column.property;
    const type = sort.type;

    if (property.split('.').length > 1) {
      const propertySplitedFirst = property.split('.')[0];
      const propertySplitedLast = property.split('.')[1];
      if (
        value[propertySplitedFirst][propertySplitedLast] < valueToCompare[propertySplitedFirst][propertySplitedLast]
      ) {
        return type === PoTableColumnSortType.Ascending ? -1 : 1;
      }
      return type === PoTableColumnSortType.Ascending ? 1 : -1;
    } else {
      if (value[property] < valueToCompare[property]) {
        return type === PoTableColumnSortType.Ascending ? -1 : 1;
      }
      return type === PoTableColumnSortType.Ascending ? 1 : -1;
    }
  }
}
`),n()()(),t(29,"po-tab",10)(30,"div")(31,"label",6),e(32,"sample-po-table-components/sample-po-table-components.component.css"),n(),t(33,"pre",11),e(34,`.badge {
  padding: 3px 10px;
  border-radius: 3px;
  color: #fff;
  width: 100px;
  text-align: center;
  box-shadow:
    0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  font-size: 10px;
}

.badge.component {
  background-color: #82b1ff;
}

.badge.service {
  background-color: #b39ddb;
}

.badge.template {
  background-color: #ffb515;
}
`),n()()()()(),t(35,"div",12),i(36,"sample-po-table-components"),n(),i(37,"hr")),l&2&&(s(5),_("po-icon "+o.sampleCodeButtonIcon),s(),D(" ",o.sampleCodeButtonLabel,""),s(),c("ngClass",f(4,Bt,o.hideSampleCodeTabs)))},dependencies:[A,P,C,T,nt],encapsulation:2})}return r})();var de=(()=>{class r{http;constructor(a){this.http=a}getColumns(){return[{property:"id",label:"Id",type:"string",width:"90px"},{property:"label",label:"Name",type:"string",width:"90px"},{property:"email",label:"E-mail",type:"string",width:"120px"}]}getItems(){return this.http.get("https://po-sample-api.onrender.com/v1/heroes").pipe(Ee("items"))}static \u0275fac=function(l){return new(l||r)(Se(we))};static \u0275prov=L({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var Ht=["POItemsOri"],zt=["POItemsSelected"],ot=(()=>{class r{service;poItemsOri;poItemsSelected;items=[];itemsSelected=[];columns;constructor(a){this.service=a}ngOnInit(){this.getColumns(),this.getItems()}getColumns(){this.columns=this.service.getColumns()}getItems(){this.service.getItems().subscribe({next:a=>this.items=a,error:a=>console.error(a)})}changeOptions(a,l){if(l==="new")this.itemsSelected.push({id:a.id,label:a.label,email:a.email}),this.itemsSelected=[...this.itemsSelected];else{let o=this.itemsSelected.findIndex(m=>m.id===a.id);this.poItemsSelected.removeItem(o),this.itemsSelected=[...this.poItemsSelected.items]}}deleteItems(a){this.items=a,this.itemsSelected=[]}static \u0275fac=function(l){return new(l||r)(w(de))};static \u0275cmp=S({type:r,selectors:[["sample-po-table-heroes"]],viewQuery:function(l,o){if(l&1&&(I(Ht,7),I(zt,7)),l&2){let m;k(m=F())&&(o.poItemsOri=m.first),k(m=F())&&(o.poItemsSelected=m.first)}},standalone:!1,features:[q([de])],decls:11,vars:16,consts:[["POItemsOri",""],["POItemsSelected",""],[1,"po-row","po-pb-2"],[1,"po-md-6"],[1,"po-font-text-bold","po-text-color-neutral-dark-40"],["p-selectable","true","p-infinite-scroll-distance","80","p-height","300",3,"p-selected","p-unselected","p-delete-items","p-columns","p-infinite-scroll","p-hide-select-all","p-hide-table-search","p-items","p-hide-action-fixed-columns","p-text-wrap","p-virtual-scroll"],["p-height","300",3,"p-columns","p-hide-table-search","p-striped","p-infinite-scroll","p-items","p-hide-action-fixed-columns","p-text-wrap","p-virtual-scroll"]],template:function(l,o){if(l&1){let m=B();t(0,"div",2)(1,"div",3)(2,"div",4),e(3,"Choose one or more heroes for your team"),n(),t(4,"po-table",5,0),E("p-selected",function(d){return u(m),b(o.changeOptions(d,"new"))})("p-unselected",function(d){return u(m),b(o.changeOptions(d,"change"))})("p-delete-items",function(d){return u(m),b(o.deleteItems(d))}),n()(),t(6,"div",3)(7,"div",4),e(8,"Here your chosen heroes"),n(),i(9,"po-table",6,1),n()()}l&2&&(s(4),c("p-columns",o.columns)("p-infinite-scroll",!0)("p-hide-select-all",!0)("p-hide-table-search",!1)("p-items",o.items)("p-hide-action-fixed-columns",!0)("p-text-wrap",!0)("p-virtual-scroll",!1),s(5),c("p-columns",o.columns)("p-hide-table-search",!1)("p-striped",!0)("p-infinite-scroll",!0)("p-items",o.itemsSelected)("p-hide-action-fixed-columns",!0)("p-text-wrap",!0)("p-virtual-scroll",!1))},dependencies:[y],encapsulation:2})}return r})();var Wt=r=>({"docs-sample-code-tabs":r}),at=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=S({type:r,selectors:[["sample-po-table-heroes-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(i(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Table - Heroes"),n(),t(4,"a",2),E("click",function(){return o.toggleSampleCodeTabs()}),i(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-table-heroes/sample-po-table-heroes.component.html"),n(),t(13,"pre",7),e(14,`<div class="po-row po-pb-2">
  <div class="po-md-6">
    <div class="po-font-text-bold po-text-color-neutral-dark-40">Choose one or more heroes for your team</div>
    <po-table
      #POItemsOri
      [p-columns]="columns"
      [p-infinite-scroll]="true"
      p-selectable="true"
      [p-hide-select-all]="true"
      [p-hide-table-search]="false"
      p-infinite-scroll-distance="80"
      (p-selected)="changeOptions($event, 'new')"
      (p-unselected)="changeOptions($event, 'change')"
      p-height="300"
      [p-items]="items"
      (p-delete-items)="deleteItems($event)"
      [p-hide-action-fixed-columns]="true"
      [p-text-wrap]="true"
      [p-virtual-scroll]="false"
    >
    </po-table>
  </div>
  <div class="po-md-6">
    <div class="po-font-text-bold po-text-color-neutral-dark-40">Here your chosen heroes</div>
    <po-table
      #POItemsSelected
      [p-columns]="columns"
      [p-hide-table-search]="false"
      [p-striped]="true"
      [p-infinite-scroll]="true"
      p-height="300"
      [p-items]="itemsSelected"
      [p-hide-action-fixed-columns]="true"
      [p-text-wrap]="true"
      [p-virtual-scroll]="false"
    >
    </po-table>
  </div>
</div>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-table-heroes/sample-po-table-heroes.component.ts"),n(),t(19,"pre",9),e(20,`import { Component, ViewChild, OnInit } from '@angular/core';
import { PoTableColumn, PoTableComponent } from '@po-ui/ng-components';

import { SamplePoTableHeroesService } from './sample-po-table-heroes.service';

@Component({
  selector: 'sample-po-table-heroes',
  templateUrl: './sample-po-table-heroes.component.html',
  providers: [SamplePoTableHeroesService],
  standalone: false
})
export class SamplePoTableHeroesComponent implements OnInit {
  @ViewChild('POItemsOri', { static: true }) poItemsOri: PoTableComponent;
  @ViewChild('POItemsSelected', { static: true }) poItemsSelected: PoTableComponent;

  items: Array<any> = [];
  itemsSelected: Array<any> = [];
  columns: Array<PoTableColumn>;

  constructor(private service: SamplePoTableHeroesService) {}

  ngOnInit(): void {
    this.getColumns();
    this.getItems();
  }

  getColumns(): void {
    this.columns = this.service.getColumns();
  }

  getItems(): void {
    this.service.getItems().subscribe({
      next: res => (this.items = res),
      error: err => console.error(err)
    });
  }

  changeOptions(event, type): void {
    if (type === 'new') {
      this.itemsSelected.push({
        id: event.id,
        label: event.label,
        email: event.email
      });
      this.itemsSelected = [...this.itemsSelected];
    } else {
      const index = this.itemsSelected.findIndex(el => el.id === event.id);
      this.poItemsSelected.removeItem(index);
      this.itemsSelected = [...this.poItemsSelected.items];
    }
  }

  deleteItems(items: Array<any>) {
    this.items = items;
    this.itemsSelected = [];
  }
}
`),n(),t(21,"label",6),e(22,"sample-po-table-heroes/sample-po-table-heroes.service.ts"),n(),t(23,"pre",9),e(24,`import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SamplePoTableHeroesService {
  constructor(private http: HttpClient) {}
  getColumns(): Array<PoTableColumn> {
    return [
      { property: 'id', label: 'Id', type: 'string', width: '90px' },
      { property: 'label', label: 'Name', type: 'string', width: '90px' },
      { property: 'email', label: 'E-mail', type: 'string', width: '120px' }
    ];
  }

  getItems(): Observable<any> {
    return this.http.get('https://po-sample-api.onrender.com/v1/heroes').pipe(pluck('items'));
  }
}
`),n()()()()(),t(25,"div",10),i(26,"sample-po-table-heroes"),n(),i(27,"hr")),l&2&&(s(5),_("po-icon "+o.sampleCodeButtonIcon),s(),D(" ",o.sampleCodeButtonLabel,""),s(),c("ngClass",f(4,Wt,o.hideSampleCodeTabs)))},dependencies:[A,P,C,T,ot],encapsulation:2})}return r})();var Qt=()=>({code:"001",table:"PO Table",angular:"PO-UI"}),Gt=r=>[r],lt=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275cmp=S({type:r,selectors:[["sample-po-table-draggable"]],standalone:!1,decls:4,vars:7,consts:[[1,"po-font-text-bold","po-text-color-neutral-dark-40"],[3,"p-items","p-draggable","p-hide-columns-manager","p-hide-table-search"]],template:function(l,o){l&1&&(t(0,"div",0),e(1,` Choose one column and drag to another horizontal position in the table and drop
`),n(),i(2,"po-divider")(3,"po-table",1)),l&2&&(s(3),c("p-items",f(5,Gt,te(4,Qt)))("p-draggable",!0)("p-hide-columns-manager",!0)("p-hide-table-search",!1))},dependencies:[R,y],encapsulation:2})}return r})();var $t=r=>({"docs-sample-code-tabs":r}),rt=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=S({type:r,selectors:[["sample-po-table-draggable-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(i(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Table Drag and Drop"),n(),t(4,"a",2),E("click",function(){return o.toggleSampleCodeTabs()}),i(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-table-draggable/sample-po-table-draggable.component.html"),n(),t(13,"pre",7),e(14,`<div class="po-font-text-bold po-text-color-neutral-dark-40">
  Choose one column and drag to another horizontal position in the table and drop
</div>

<po-divider></po-divider>

<po-table
  [p-items]="[{ code: '001', table: 'PO Table', angular: 'PO-UI' }]"
  [p-draggable]="true"
  [p-hide-columns-manager]="true"
  [p-hide-table-search]="false"
>
</po-table>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-table-draggable/sample-po-table-draggable.component.ts"),n(),t(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-table-draggable',
  templateUrl: './sample-po-table-draggable.component.html',
  standalone: false
})
export class SamplePoTableDraggableComponent {}
`),n()()()()(),t(21,"div",10),i(22,"sample-po-table-draggable"),n(),i(23,"hr")),l&2&&(s(5),_("po-icon "+o.sampleCodeButtonIcon),s(),D(" ",o.sampleCodeButtonLabel,""),s(),c("ngClass",f(4,$t,o.hideSampleCodeTabs)))},dependencies:[A,P,C,T,lt],encapsulation:2})}return r})();var mt=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275cmp=S({type:r,selectors:[["sample-po-table-doc"]],standalone:!1,decls:4003,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-table-row-template"],["href","/documentation/po-table-column-template"],["href","/documentation/po-table-cell-template"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoTableAction[]"],["href","https://po-ui.io/icons"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","PoTableColumn[]"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoSearchFilterMode"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","any[]"],["pan","",1,"docs-api-property-type","PoTableLiterals"],["href","/documentation/po-i18n"],["href","https://po-ui.io/guides/api"],["pan","",1,"docs-api-property-type","PoTableColumnSpacing"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["pan","",1,"docs-api-property-type","{","key:","value","}"],["pan","",1,"docs-api-property-type"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["pan","",1,"docs-api-property-type","PoTableColumn"],["pan","",1,"docs-api-property-type","PoTableColumnSortType"],["pan","",1,"docs-api-property-type","PoTableBoolean"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],["pan","",1,"docs-api-property-type","PoTableDetail"],["href","https://angular.io/api/common/DecimalPipe"],["pan","",1,"docs-api-property-type","Array<PoTableColumnIcon>"],["href","documentation/po-table#tableColumnIcon"],["pan","",1,"docs-api-property-type","Array<PoTableColumnLabel>"],["pan","",1,"docs-api-property-type","Array<PoTableSubtitleColumn>"],["id","tableColumnIcon"],[1,"an","an-check"],[1,"an","an-warning-circle"],[1,"an","an-x"],[1,"an","an-info"],["pan","",1,"docs-api-property-type","PoTagType"],["pan","",1,"docs-api-property-type","Array<PoTableDetailColumn>"]],template:function(l,o){l&1&&(t(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoTableModule } from '@po-ui/ng-components';"),n()(),t(4,"div",2)(5,"p"),e(6,"M\xF3dulo do componente po-table"),n()(),t(7,"h3",3),e(8,"Componente"),n(),t(9,"h4",4)(10,"code",5),e(11,"PoTableComponent"),n()(),t(12,"div",2)(13,"p"),e(14,`Este componente de tabela \xE9 utilizado para exibi\xE7\xE3o de dados com diferentes tipos como por exemplo textos, data, horas e n\xFAmeros com
formato personalizado.`),n(),t(15,"p"),e(16,`Tamb\xE9m \xE9 possivel criar tabelas com ordena\xE7\xE3o de dados, linhas com detalhes, coluna para sele\xE7\xE3o de linhas, coluna com a\xE7\xF5es e tamb\xE9m
carregamento por demanda atrav\xE9s do bot\xE3o `),t(17,"strong"),e(18,"Carregar mais resultados"),n(),e(19,"."),n(),t(20,"blockquote")(21,"p"),e(22,"As linhas de detalhes podem tamb\xE9m ser customizadas atrav\xE9s do "),t(23,"a",6)(24,"code"),e(25,"p-table-row-template"),n()(),e(26,"."),n()(),t(27,"blockquote")(28,"p"),e(29,"As colunas podem ser customizadas atrav\xE9s dos templates "),t(30,"a",7)(31,"code"),e(32,"p-table-column-template"),n()(),e(33,`
e `),t(34,"a",8)(35,"code"),e(36,"p-table-cell-template"),n()(),e(37,"."),n()(),t(38,"p"),e(39,`O componente permite gerenciar a exibi\xE7\xE3o das colunas dinamicamente. Esta funcionalidade pode ser acessada atrav\xE9s do \xEDcone de engrenagem
no canto superior direito do cabe\xE7alho da tabela.`),n(),t(40,"p"),e(41,"Caso a largura de todas as colunas forem definidas e o total ultrapassar o tamanho tabela, ser\xE1 exibido um "),t(42,"em"),e(43,"scroll"),n(),e(44,` na horizontal para a
completa visualiza\xE7\xE3o dos dados.`),n(),t(45,"h4"),e(46,"Tokens customiz\xE1veis"),n(),t(47,"p"),e(48,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),n(),t(49,"blockquote")(50,"p"),e(51,"Para maiores informa\xE7\xF5es, acesse o guia "),t(52,"a",9),e(53,"Personalizando o Tema Padr\xE3o com Tokens CSS"),n(),e(54,"."),n()(),t(55,"table")(56,"thead")(57,"tr")(58,"th"),e(59,"Propriedade"),n(),t(60,"th"),e(61,"Descri\xE7\xE3o"),n(),t(62,"th"),e(63,"Valor Padr\xE3o"),n()()(),t(64,"tbody")(65,"tr")(66,"td")(67,"strong"),e(68,"Default Values"),n()(),i(69,"td")(70,"td"),n(),t(71,"tr")(72,"td")(73,"code"),e(74,"--font-family"),n()(),t(75,"td"),e(76,"Fam\xEDlia tipogr\xE1fica usada"),n(),t(77,"td")(78,"code"),e(79,"var(--font-family-theme)"),n()()(),t(80,"tr")(81,"td")(82,"code"),e(83,"--background-color"),n()(),t(84,"td"),e(85,"Cor de background"),n(),t(86,"td")(87,"code"),e(88,"var(--color-neutral-light-00)"),n()()(),t(89,"tr")(90,"td")(91,"code"),e(92,"--color"),n()(),t(93,"td"),e(94,"Cor principal da table"),n(),t(95,"td")(96,"code"),e(97,"var(--color-neutral-dark-95)"),n()()(),t(98,"tr")(99,"td")(100,"code"),e(101,"--background-striped-color"),n()(),t(102,"td"),e(103,"Cor do background quando striped"),n(),t(104,"td")(105,"code"),e(106,"var(--color-neutral-light-05)"),n()()(),t(107,"tr")(108,"td")(109,"code"),e(110,"--color-line"),n()(),t(111,"td"),e(112,"Cor das linhas"),n(),t(113,"td")(114,"code"),e(115,"var(--color-neutral-mid-40)"),n()()(),t(116,"tr")(117,"td")(118,"strong"),e(119,"Hover"),n()(),i(120,"td")(121,"td"),n(),t(122,"tr")(123,"td")(124,"code"),e(125,"--color-hover"),n()(),t(126,"td"),e(127,"Cor principal no estado hover"),n(),t(128,"td")(129,"code"),e(130,"var(--color-action-hover)"),n()()(),t(131,"tr")(132,"td")(133,"code"),e(134,"--background-color-hover"),n()(),t(135,"td"),e(136,"Cor de background no estado hover"),n(),t(137,"td")(138,"code"),e(139,"var(--color-brand-01-lighter)"),n()()(),t(140,"tr")(141,"td")(142,"strong"),e(143,"Focused"),n()(),i(144,"td")(145,"td"),n(),t(146,"tr")(147,"td")(148,"code"),e(149,"--outline-color-focused"),n()(),t(150,"td"),e(151,"Cor do outline do estado de focus"),n(),t(152,"td")(153,"code"),e(154,"var(--color-action-focus)"),n()()(),t(155,"tr")(156,"td")(157,"strong"),e(158,"Disabled"),n()(),i(159,"td")(160,"td"),n(),t(161,"tr")(162,"td")(163,"code"),e(164,"--color-disabled"),n()(),t(165,"td"),e(166,"Cor principal no estado disabled"),n(),t(167,"td")(168,"code"),e(169,"var(--color-neutral-mid-40)"),n()()(),t(170,"tr")(171,"td")(172,"strong"),e(173,"Headline"),n()(),i(174,"td")(175,"td"),n(),t(176,"tr")(177,"td")(178,"code"),e(179,"--background-color-headline"),n(),e(180," \xA0"),n(),t(181,"td"),e(182,"Cor do cabe\xE7alho"),n(),t(183,"td")(184,"code"),e(185,"var(--color-neutral-light-10)"),n()()(),t(186,"tr")(187,"td")(188,"code"),e(189,"--font-weight-headline"),n()(),t(190,"td"),e(191,"Peso da fonte do cabe\xE7alho"),n(),t(192,"td")(193,"code"),e(194,"var(--font-weight-bold)"),n()()(),t(195,"tr")(196,"td")(197,"strong"),e(198,"Selected"),n()(),i(199,"td")(200,"td"),n(),t(201,"tr")(202,"td")(203,"code"),e(204,"--background-color-selected"),n(),e(205,"\xA0"),n(),t(206,"td"),e(207,"Cor de background no estado de selecionado"),n(),t(208,"td")(209,"code"),e(210,"var(--color-brand-01-lightest)"),n()()(),t(211,"tr")(212,"td")(213,"strong"),e(214,"Actived"),n()(),i(215,"td")(216,"td"),n(),t(217,"tr")(218,"td")(219,"code"),e(220,"--color-actived"),n()(),t(221,"td"),e(222,"Cor do texto no estado de selecionado"),n(),t(223,"td")(224,"code"),e(225,"var(--color-neutral-dark-90)"),n()()(),t(226,"tr")(227,"td")(228,"code"),e(229,"--background-color-actived"),n()(),t(230,"td"),e(231,"Cor de background no estado de selecionado"),n(),t(232,"td")(233,"code"),e(234,"var(--color-brand-01-light)"),n()()()()()(),t(235,"div",10)(236,"h4",11),e(237,"Seletor"),n(),t(238,"pre",12),e(239,`<po-table
    p-actions-right="boolean"
    p-actions="PoTableAction[]"
    (p-all-selected)="EventEmitter"
    (p-all-unselected)="EventEmitter"
    p-auto-collapse="boolean"
    (p-change-visible-columns)="EventEmitter"
    (p-collapsed)="EventEmitter"
    (p-restore-column-manager)="EventEmitter"
    p-columns="PoTableColumn[]"
    p-components-size="string"
    p-container="string"
    p-draggable="boolean"
    (p-delete-items)="EventEmitter"
    (p-expanded)="EventEmitter"
    p-filter-type="PoSearchFilterMode"
    p-filtered-columns="Array<string>"
    p-height="number"
    p-hide-action-fixed-columns="boolean"
    p-hide-batch-actions="boolean"
    p-hide-columns-manager="boolean"
    p-hide-detail="boolean"
    p-hide-select-all="boolean"
    p-hide-table-search="boolean"
    p-infinite-scroll="boolean"
    p-infinite-scroll-distance="number"
    p-items="any[]"
    p-literals="PoTableLiterals"
    p-loading="boolean"
    p-loading-show-more="boolean"
    p-max-columns="number"
    p-param-delete-api="string"
    p-selectable="boolean"
    p-selectable-entire-line="boolean"
    (p-selected)="EventEmitter"
    p-service-api="string"
    p-service-delete="string"
    (p-show-more)="EventEmitter"
    p-show-more-disabled="boolean"
    p-single-select="boolean"
    p-sort="boolean"
    (p-sort-by)="EventEmitter"
    p-spacing="PoTableColumnSpacing"
    p-striped="boolean"
    p-text-wrap="boolean"
    (p-unselected)="EventEmitter"
    p-virtual-scroll="boolean" >
</po-table>
`),n()(),t(240,"h4",13),e(241,"Propriedades"),n(),t(242,"table",14)(243,"tr",15)(244,"th",16),e(245,"Nome"),n(),t(246,"th",16),e(247,"Tipo"),n(),t(248,"th",16),e(249,"Padr\xE3o"),n(),t(250,"th",16),e(251,"Descri\xE7\xE3o"),n()(),t(252,"tr",17)(253,"td",18)(254,"div",19)(255,"span",20),e(256," p-actions-right"),i(257,"br"),n()()(),t(258,"td",21)(259,"code",22),e(260,"boolean"),n()(),t(261,"td",23)(262,"p")(263,"code"),e(264,"false"),n()()(),t(265,"td",24)(266,"em")(267,"strong"),e(268,"(opcional)"),n()(),t(269,"p"),e(270,"Define que a coluna de a\xE7\xF5es ficar\xE1 no lado direito da tabela."),n()()(),t(271,"tr",17)(272,"td",18)(273,"div",19)(274,"span",20),e(275," p-actions"),i(276,"br"),n()()(),t(277,"td",21)(278,"code",25),e(279,"PoTableAction[]"),n()(),t(280,"td",23),e(281,"-"),n(),t(282,"td",24)(283,"em")(284,"strong"),e(285,"(opcional)"),n()(),t(286,"p"),e(287,"Define uma lista de a\xE7\xF5es."),n(),t(288,"p"),e(289,`Quando houver apenas uma a\xE7\xE3o definida ela ser\xE1 exibida diretamente na coluna, caso contr\xE1rio, o componente
se encarrega de agrup\xE1-las exibindo o \xEDcone `),t(290,"a",26)(291,"strong"),e(292,"an an-dots-three"),n()(),e(293," que listar\xE1 as a\xE7\xF5es ao ser clicado."),n(),t(294,"p")(295,"strong"),e(296,"A coluna de a\xE7\xF5es n\xE3o ser\xE1 exibida quando:"),n()(),t(297,"ul")(298,"li"),e(299,"a lista conter valores inv\xE1lidos ou indefinidos."),n(),t(300,"li"),e(301,"tenha uma \xFAnica a\xE7\xE3o e a mesma n\xE3o for vis\xEDvel."),n()()()(),t(302,"tr",17)(303,"td",18)(304,"div",27)(305,"span",28),e(306," (p-all-selected)"),i(307,"br"),n()()(),t(308,"td",21)(309,"code",29),e(310,"EventEmitter"),n()(),t(311,"td",23),e(312,"-"),n(),t(313,"td",24)(314,"em")(315,"strong"),e(316,"(opcional)"),n()(),t(317,"p"),e(318,"Evento executado quando todas as linhas s\xE3o selecionadas por meio do "),t(319,"em"),e(320,"checkbox"),n(),e(321," que seleciona todas as linhas."),n()()(),t(322,"tr",17)(323,"td",18)(324,"div",27)(325,"span",28),e(326," (p-all-unselected)"),i(327,"br"),n()()(),t(328,"td",21)(329,"code",29),e(330,"EventEmitter"),n()(),t(331,"td",23),e(332,"-"),n(),t(333,"td",24)(334,"em")(335,"strong"),e(336,"(opcional)"),n()(),t(337,"p"),e(338,"Evento executado quando a sele\xE7\xE3o das linhas \xE9 desmarcada por meio do "),t(339,"em"),e(340,"checkbox"),n(),e(341," que seleciona todas as linhas."),n()()(),t(342,"tr",17)(343,"td",18)(344,"div",19)(345,"span",20),e(346," p-auto-collapse"),i(347,"br"),n()()(),t(348,"td",21)(349,"code",22),e(350,"boolean"),n()(),t(351,"td",23)(352,"p")(353,"code"),e(354,"false"),n()()(),t(355,"td",24)(356,"em")(357,"strong"),e(358,"(opcional)"),n()(),t(359,"p"),e(360,"Permite fechar um detalhe ou row template automaticamente, ao abrir outro item."),n()()(),t(361,"tr",17)(362,"td",18)(363,"div",27)(364,"span",28),e(365," (p-change-visible-columns)"),i(366,"br"),n()()(),t(367,"td",21)(368,"code",29),e(369,"EventEmitter"),n()(),t(370,"td",23),e(371,"-"),n(),t(372,"td",24)(373,"em")(374,"strong"),e(375,"(opcional)"),n()(),t(376,"p"),e(377,"Evento disparado ao fechar o page slide do gerenciador de colunas ap\xF3s alterar as colunas vis\xEDveis."),n(),t(378,"p"),e(379,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),n()()(),t(380,"tr",17)(381,"td",18)(382,"div",27)(383,"span",28),e(384," (p-collapsed)"),i(385,"br"),n()()(),t(386,"td",21)(387,"code",29),e(388,"EventEmitter"),n()(),t(389,"td",23),e(390,"-"),n(),t(391,"td",24)(392,"em")(393,"strong"),e(394,"(opcional)"),n()(),t(395,"p"),e(396,"Evento executado ao colapsar uma linha do "),t(397,"code"),e(398,"po-table"),n(),e(399,"."),n(),t(400,"blockquote")(401,"p"),e(402,"Como par\xE2metro o componente envia o item colapsado."),n()()()(),t(403,"tr",17)(404,"td",18)(405,"div",27)(406,"span",28),e(407," (p-restore-column-manager)"),i(408,"br"),n()()(),t(409,"td",21)(410,"code",29),e(411,"EventEmitter"),n()(),t(412,"td",23),e(413,"-"),n(),t(414,"td",24)(415,"em")(416,"strong"),e(417,"(opcional)"),n()(),t(418,"p"),e(419,"Evento disparado ao clicar no bot\xE3o de restaurar padr\xE3o no gerenciador de colunas."),n(),t(420,"p"),e(421,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),n()()(),t(422,"tr",17)(423,"td",18)(424,"div",19)(425,"span",20),e(426," p-columns"),i(427,"br"),n()()(),t(428,"td",21)(429,"code",30),e(430,"PoTableColumn[]"),n()(),t(431,"td",23),e(432,"-"),n(),t(433,"td",24)(434,"em")(435,"strong"),e(436,"(opcional)"),n()(),t(437,"p"),e(438,"Lista das colunas da tabela, deve receber um "),t(439,"em"),e(440,"array"),n(),e(441," de objetos que implementam a interface "),t(442,"code"),e(443,"PoTableColumn"),n(),e(444,`.
Por padr\xE3o receber\xE1 como valor a primeira coluna da lista de itens da tabela.`),n(),t(445,"blockquote")(446,"p"),e(447,"Caso n\xE3o encontre valor, a mensagem 'Nenhuma defini\xE7\xE3o de colunas' ser\xE1 exibida."),n()()()(),t(448,"tr",17)(449,"td",18)(450,"div",19)(451,"span",20),e(452," p-components-size"),i(453,"br"),n()()(),t(454,"td",21)(455,"code",31),e(456,"string"),n()(),t(457,"td",23)(458,"p")(459,"code"),e(460,"medium"),n()()(),t(461,"td",24)(462,"em")(463,"strong"),e(464,"(opcional)"),n()(),t(465,"p"),e(466,"Define o tamanho dos componentes de formul\xE1rio no table:"),n(),t(467,"ul")(468,"li")(469,"code"),e(470,"small"),n(),e(471,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),n(),t(472,"li")(473,"code"),e(474,"medium"),n(),e(475,": aplica a medida medium de cada componente."),n()(),t(476,"blockquote")(477,"p"),e(478,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),t(479,"code"),e(480,"medium"),n(),e(481,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),t(482,"a",32),e(483,"po-theme"),n(),e(484,"."),n()()()(),t(485,"tr",17)(486,"td",18)(487,"div",19)(488,"span",20),e(489," p-container"),i(490,"br"),n()()(),t(491,"td",21)(492,"code",31),e(493,"string"),n()(),t(494,"td",23)(495,"p")(496,"code"),e(497,"border"),n()()(),t(498,"td",24)(499,"em")(500,"strong"),e(501,"(opcional)"),n()(),t(502,"p"),e(503,"Adiciona um contorno arredondado ao "),t(504,"code"),e(505,"po-table"),n(),e(506,", as op\xE7\xF5es s\xE3o:"),n(),t(507,"ul")(508,"li")(509,"code"),e(510,"border"),n(),e(511,": com bordas/linhas."),n(),t(512,"li")(513,"code"),e(514,"shadow"),n(),e(515,": com sombras."),n()()()(),t(516,"tr",17)(517,"td",18)(518,"div",19)(519,"span",20),e(520," p-draggable"),i(521,"br"),n()()(),t(522,"td",21)(523,"code",22),e(524,"boolean"),n()(),t(525,"td",23)(526,"p")(527,"code"),e(528,"false"),n()()(),t(529,"td",24)(530,"em")(531,"strong"),e(532,"(opcional)"),n()(),t(533,"p"),e(534,"Habilita o modo drag and drop para as colunas da tabela."),n()()(),t(535,"tr",17)(536,"td",18)(537,"div",27)(538,"span",28),e(539," (p-delete-items)"),i(540,"br"),n()()(),t(541,"td",21)(542,"code",29),e(543,"EventEmitter"),n()(),t(544,"td",23),e(545,"-"),n(),t(546,"td",24)(547,"em")(548,"strong"),e(549,"(opcional)"),n()(),t(550,"p"),e(551,"Evento executado ap\xF3s o m\xE9todo de exclus\xE3o ser finalizado."),n(),t(552,"pre")(553,"code"),e(554,`<po-table
 (p-delete-items)="items = $event"
>
</po-table>
`),n()(),t(555,"blockquote")(556,"p"),e(557,"Como par\xE2metro o componente envia a lista atualizada, sem os itens exclu\xEDdos."),n()()()(),t(558,"tr",17)(559,"td",18)(560,"div",27)(561,"span",28),e(562," (p-expanded)"),i(563,"br"),n()()(),t(564,"td",21)(565,"code",29),e(566,"EventEmitter"),n()(),t(567,"td",23),e(568,"-"),n(),t(569,"td",24)(570,"em")(571,"strong"),e(572,"(opcional)"),n()(),t(573,"p"),e(574,"Evento executado ao expandir uma linha do "),t(575,"code"),e(576,"po-table"),n(),e(577,"."),n(),t(578,"blockquote")(579,"p"),e(580,"Como par\xE2metro o componente envia o item expandido."),n()()()(),t(581,"tr",17)(582,"td",18)(583,"div",19)(584,"span",20),e(585," p-filter-type"),i(586,"br"),n()()(),t(587,"td",21)(588,"code",33),e(589,"PoSearchFilterMode"),n()(),t(590,"td",23)(591,"p")(592,"code"),e(593,"startsWith"),n()()(),t(594,"td",24)(595,"em")(596,"strong"),e(597,"(opcional)"),n()(),t(598,"p"),e(599,`Define o modo de pesquisa utilizado no campo de busca, quando habilitado.
Valores definidos no enum: PoSearchFilterMode`),n(),t(600,"blockquote")(601,"p"),e(602,`Obs: A pesquisa \xE9 realizada exclusivamente nos dados locais, ou seja, aqueles que foram
renderizados na tabela.`),n()()()(),t(603,"tr",17)(604,"td",18)(605,"div",19)(606,"span",20),e(607," p-filtered-columns"),i(608,"br"),n()()(),t(609,"td",21)(610,"code",34),e(611,"Array<string>"),n()(),t(612,"td",23),e(613,"-"),n(),t(614,"td",24)(615,"em")(616,"strong"),e(617,"(opcional)"),n()(),t(618,"p"),e(619,`Define as colunas que ser\xE3o filtradas no campo de pesquisa.
Aceita um array de strings, representando as colunas espec\xEDficas que ser\xE3o consideradas na filtragem.`),n()()(),t(620,"tr",17)(621,"td",18)(622,"div",19)(623,"span",20),e(624," p-height"),i(625,"br"),n()()(),t(626,"td",21)(627,"code",35),e(628,"number"),n()(),t(629,"td",23),e(630,"-"),n(),t(631,"td",24)(632,"em")(633,"strong"),e(634,"(opcional)"),n()(),t(635,"p"),e(636,"Define a altura da tabela em "),t(637,"em"),e(638,"pixels"),n(),e(639," e fixa o cabe\xE7alho."),n(),t(640,"p"),e(641,"Ao utilizar essa propriedade ser\xE1 inserido o "),t(642,"code"),e(643,"virtual-scroll"),n(),e(644," na tabela melhorando a performance."),n()()(),t(645,"tr",17)(646,"td",18)(647,"div",19)(648,"span",20),e(649," p-hide-action-fixed-columns"),i(650,"br"),n()()(),t(651,"td",21)(652,"code",22),e(653,"boolean"),n()(),t(654,"td",23)(655,"p")(656,"code"),e(657,"false"),n()()(),t(658,"td",24)(659,"em")(660,"strong"),e(661,"(opcional)"),n()(),t(662,"p"),e(663,"Permite que as a\xE7\xF5es para fixar uma coluna da tabela sejam escondidas."),n()()(),t(664,"tr",17)(665,"td",18)(666,"div",19)(667,"span",20),e(668," p-hide-batch-actions"),i(669,"br"),n()()(),t(670,"td",21)(671,"code",22),e(672,"boolean"),n()(),t(673,"td",23)(674,"p")(675,"code"),e(676,"true"),n()()(),t(677,"td",24)(678,"em")(679,"strong"),e(680,"(opcional)"),n()(),t(681,"p"),e(682,"Permite que as a\xE7\xF5es em lote, respons\xE1vel por excluir e exibir a quantidade de itens, sejam escondidas."),n()()(),t(683,"tr",17)(684,"td",18)(685,"div",19)(686,"span",20),e(687," p-hide-columns-manager"),i(688,"br"),n()()(),t(689,"td",21)(690,"code",22),e(691,"boolean"),n()(),t(692,"td",23)(693,"p")(694,"code"),e(695,"false"),n()()(),t(696,"td",24)(697,"em")(698,"strong"),e(699,"(opcional)"),n()(),t(700,"p"),e(701,"Permite que o gerenciador de colunas, respons\xE1vel pela defini\xE7\xE3o de quais colunas ser\xE3o exibidas, seja escondido."),n()()(),t(702,"tr",17)(703,"td",18)(704,"div",19)(705,"span",20),e(706," p-hide-detail"),i(707,"br"),n()()(),t(708,"td",21)(709,"code",22),e(710,"boolean"),n()(),t(711,"td",23)(712,"p")(713,"code"),e(714,"false"),n()()(),t(715,"td",24)(716,"em")(717,"strong"),e(718,"(opcional)"),n()(),t(719,"p"),e(720,"Habilita a visualiza\xE7\xE3o da lista de detalhes de cada linha da coluna."),n()()(),t(721,"tr",17)(722,"td",18)(723,"div",19)(724,"span",20),e(725," p-hide-select-all"),i(726,"br"),n()()(),t(727,"td",21)(728,"code",22),e(729,"boolean"),n()(),t(730,"td",23)(731,"p")(732,"code"),e(733,"false"),n()()(),t(734,"td",24)(735,"p"),e(736,"Esconde o "),t(737,"em"),e(738,"checkbox"),n(),e(739," para sele\xE7\xE3o de todas as linhas."),n(),t(740,"blockquote")(741,"p"),e(742,"Sempre receber\xE1 "),t(743,"em"),e(744,"true"),n(),e(745," caso a sele\xE7\xE3o de apenas uma linha esteja ativa."),n()()()(),t(746,"tr",17)(747,"td",18)(748,"div",19)(749,"span",20),e(750," p-hide-table-search"),i(751,"br"),n()()(),t(752,"td",21)(753,"code",22),e(754,"boolean"),n()(),t(755,"td",23)(756,"p")(757,"code"),e(758,"true"),n()()(),t(759,"td",24)(760,"em")(761,"strong"),e(762,"(opcional)"),n()(),t(763,"p"),e(764,"Permite que o campo de pesquisa seja escondido."),n()()(),t(765,"tr",17)(766,"td",18)(767,"div",19)(768,"span",20),e(769," p-infinite-scroll"),i(770,"br"),n()()(),t(771,"td",21)(772,"code",22),e(773,"boolean"),n()(),t(774,"td",23)(775,"p")(776,"code"),e(777,"false"),n()()(),t(778,"td",24)(779,"em")(780,"strong"),e(781,"(opcional)"),n()(),t(782,"p"),e(783,`Se verdadeiro, ativa a funcionalidade de scroll infinito para a tabela e o bot\xE3o "Carregar Mais" deixar\xE1 de ser exibido. Ao chegar no fim da tabela
executar\xE1 a fun\xE7\xE3o `),t(784,"code"),e(785,"p-show-more"),n(),e(786,"."),n(),t(787,"p")(788,"strong"),e(789,"Regras de utiliza\xE7\xE3o:"),n()(),t(790,"ul")(791,"li"),e(792,"O scroll infinito s\xF3 funciona para tabelas que utilizam a propriedade "),t(793,"code"),e(794,"p-height"),n(),e(795," e que possuem o scroll j\xE1 na carga inicial dos dados."),n()()()(),t(796,"tr",17)(797,"td",18)(798,"div",19)(799,"span",20),e(800," p-infinite-scroll-distance"),i(801,"br"),n()()(),t(802,"td",21)(803,"code",35),e(804,"number"),n()(),t(805,"td",23),e(806,"-"),n(),t(807,"td",24)(808,"em")(809,"strong"),e(810,"(opcional)"),n()(),t(811,"p"),e(812,"Define o percentual necess\xE1rio para disparar o evento "),t(813,"code"),e(814,"p-show-more"),n(),e(815,`, que \xE9 respons\xE1vel por carregar mais dados na tabela. Caso o valor informado seja maior que 100 ou menor
que 0, o valor padr\xE3o ser\xE1 100%`),n(),t(816,"p")(817,"strong"),e(818,"Exemplos:"),n()(),t(819,"ul")(820,"li"),e(821,"p-infinite-scroll-distance = 80: Quando atingir 80% do scroll da tabela, o "),t(822,"code"),e(823,"p-show-more"),n(),e(824," ser\xE1 disparado."),n()()()(),t(825,"tr",17)(826,"td",18)(827,"div",19)(828,"span",20),e(829," p-items"),i(830,"br"),n()()(),t(831,"td",21)(832,"code",36),e(833,"any[]"),n()(),t(834,"td",23),e(835,"-"),n(),t(836,"td",24)(837,"p"),e(838,"Lista de itens da tabela."),n(),t(839,"blockquote")(840,"p"),e(841,"Se falso, ser\xE1 inicializado como um "),t(842,"em"),e(843,"array"),n(),e(844," vazio."),n()()()(),t(845,"tr",17)(846,"td",18)(847,"div",19)(848,"span",20),e(849," p-literals"),i(850,"br"),n()()(),t(851,"td",21)(852,"code",37),e(853,"PoTableLiterals"),n()(),t(854,"td",23),e(855,"-"),n(),t(856,"td",24)(857,"em")(858,"strong"),e(859,"(opcional)"),n()(),t(860,"p"),e(861,"Objeto com as literais usadas no "),t(862,"code"),e(863,"po-table"),n(),e(864,"."),n(),t(865,"p"),e(866,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),n(),t(867,"pre")(868,"code"),e(869,`const customLiterals: PoTableLiterals = {
  noColumns: 'Nenhuma defini\xE7\xE3o de colunas',
  noData: 'Nenhum dado encontrado',
  noVisibleColumn: 'Nenhuma coluna vis\xEDvel',
  noItem: 'Nenhum item selecionado',
  oneItem: '1 item selecionado',
  multipleItems: 'itens selecionados',
  loadingData: 'Carregando',
  loadMoreData: 'Carregar mais resultados',
  seeCompleteSubtitle: 'Ver legenda completa',
  completeSubtitle: 'Legenda completa',
  columnsManager: 'Gerenciador de colunas',
  bodyDelete: 'Deseja realmente excluir esse item?',
  cancel: 'Cancelar',
  delete: 'Excluir',
  deleteSuccessful: 'Itens removidos com sucesso',
  deleteApiError: 'Ocorreu um erro inesperado, tente novamente mais tarde!',
};
`),n()(),t(870,"p"),e(871,"Ou passando apenas as literais que deseja customizar:"),n(),t(872,"pre")(873,"code"),e(874,`const customLiterals: PoTableLiterals = {
  noData: 'Sem dados'
};
`),n()(),t(875,"p"),e(876,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),n(),t(877,"pre")(878,"code"),e(879,`<po-table
  [p-literals]="customLiterals">
</po-table>
`),n()(),t(880,"blockquote")(881,"p"),e(882,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),t(883,"a",38)(884,"code"),e(885,"PoI18nService"),n()(),e(886," ou do browser."),n()()()(),t(887,"tr",17)(888,"td",18)(889,"div",19)(890,"span",20),e(891," p-loading"),i(892,"br"),n()()(),t(893,"td",21)(894,"code",22),e(895,"boolean"),n()(),t(896,"td",23)(897,"p")(898,"code"),e(899,"false"),n()()(),t(900,"td",24)(901,"em")(902,"strong"),e(903,"(opcional)"),n()(),t(904,"p"),e(905,"Bloqueia a intera\xE7\xE3o do usu\xE1rio com os dados da "),t(906,"em"),e(907,"table"),n(),e(908,"."),n()()(),t(909,"tr",17)(910,"td",18)(911,"div",19)(912,"span",20),e(913," p-loading-show-more"),i(914,"br"),n()()(),t(915,"td",21)(916,"code",22),e(917,"boolean"),n()(),t(918,"td",23)(919,"p")(920,"code"),e(921,"false"),n()()(),t(922,"td",24)(923,"em")(924,"strong"),e(925,"(opcional)"),n()(),t(926,"p"),e(927,'Permite que seja adicionado o estado de carregamento no bot\xE3o "Carregar mais resultados".'),n()()(),t(928,"tr",17)(929,"td",18)(930,"div",19)(931,"span",20),e(932," p-max-columns"),i(933,"br"),n()()(),t(934,"td",21)(935,"code",35),e(936,"number"),n()(),t(937,"td",23),e(938,"-"),n(),t(939,"td",24)(940,"em")(941,"strong"),e(942,"(opcional)"),n()(),t(943,"p"),e(944,"Define uma quantidade m\xE1xima de colunas que ser\xE3o exibidas na tabela."),n(),t(945,"p"),e(946,`Quando chegar no valor informado, as colunas que n\xE3o estiverem selecionadas ficar\xE3o
desabilitadas e caso houver mais colunas vis\xEDveis do que o permitido, as excedentes
ser\xE3o ignoradas por ordem de posi\xE7\xE3o.`),n()()(),t(947,"tr",17)(948,"td",18)(949,"div",19)(950,"span",20),e(951," p-param-delete-api"),i(952,"br"),n()()(),t(953,"td",21)(954,"code",31),e(955,"string"),n()(),t(956,"td",23)(957,"p")(958,"code"),e(959,"id"),n()()(),t(960,"td",24)(961,"em")(962,"strong"),e(963,"(opcional)"),n()(),t(964,"p"),e(965,"Adiciona o par\xE2metro a ser enviado para a requisi\xE7\xE3o de DELETE."),n(),t(966,"p"),e(967,"\xC9 necess\xE1rio a utiliza\xE7\xE3o da propriedade "),t(968,"code"),e(969,"p-service-delete"),n(),e(970," em conjunto."),n()()(),t(971,"tr",17)(972,"td",18)(973,"div",19)(974,"span",20),e(975," p-selectable"),i(976,"br"),n()()(),t(977,"td",21)(978,"code",22),e(979,"boolean"),n()(),t(980,"td",23)(981,"p")(982,"code"),e(983,"false"),n()()(),t(984,"td",24)(985,"em")(986,"strong"),e(987,"(opcional)"),n()(),t(988,"p"),e(989,"Permite a sele\xE7\xE3o de linhas na tabela e, caso a propriedade "),t(990,"code"),e(991,"p-single-select"),n(),e(992,` esteja definida ser\xE1 poss\xEDvel
selecionar apenas uma \xFAnica linha.`),n(),t(993,"p")(994,"strong"),e(995,"Importante:"),n()(),t(996,"ul")(997,"li"),e(998,"As linhas de detalhe definidas em "),t(999,"code"),e(1e3,"PoTableDetail"),n(),e(1001," possuem comportamento independente da linha mestre;"),n(),t(1002,"li"),e(1003,"Cada linha possui por padr\xE3o a propriedade din\xE2mica "),t(1004,"code"),e(1005,"$selected"),n(),e(1006,`, na qual \xE9 poss\xEDvel validar se a linha
est\xE1 selecionada, por exemplo: `),t(1007,"code"),e(1008,"item.$selected"),n(),e(1009," ou "),t(1010,"code"),e(1011,"item['$selected']"),n(),e(1012,"."),n()()()(),t(1013,"tr",17)(1014,"td",18)(1015,"div",19)(1016,"span",20),e(1017," p-selectable-entire-line"),i(1018,"br"),n()()(),t(1019,"td",21)(1020,"code",22),e(1021,"boolean"),n()(),t(1022,"td",23)(1023,"p")(1024,"code"),e(1025,"true"),n()()(),t(1026,"td",24)(1027,"p"),e(1028,"Permite selecionar um item da tabela clicando na linha."),n(),t(1029,"blockquote")(1030,"p"),e(1031,"Caso haja necessidade de selecionar o item apenas via radio ou checkbox, deve-se definir esta propriedade como "),t(1032,"code"),e(1033,"false"),n(),e(1034,"."),n()()()(),t(1035,"tr",17)(1036,"td",18)(1037,"div",27)(1038,"span",28),e(1039," (p-selected)"),i(1040,"br"),n()()(),t(1041,"td",21)(1042,"code",29),e(1043,"EventEmitter"),n()(),t(1044,"td",23),e(1045,"-"),n(),t(1046,"td",24)(1047,"em")(1048,"strong"),e(1049,"(opcional)"),n()(),t(1050,"p"),e(1051,"Evento executado ao selecionar uma linha do "),t(1052,"code"),e(1053,"po-table"),n(),e(1054,"."),n()()(),t(1055,"tr",17)(1056,"td",18)(1057,"div",19)(1058,"span",20),e(1059," p-service-api"),i(1060,"br"),n()()(),t(1061,"td",21)(1062,"code",31),e(1063,"string"),n()(),t(1064,"td",23),e(1065,"-"),n(),t(1066,"td",24)(1067,"em")(1068,"strong"),e(1069,"(opcional)"),n()(),t(1070,"p"),e(1071,"URL da API respons\xE1vel por retornar os registros."),n(),t(1072,"p"),e(1073,"Ao realizar a busca de mais registros via pagina\xE7\xE3o (Carregar mais resultados), ser\xE1 enviado os par\xE2metros "),t(1074,"code"),e(1075,"page"),n(),e(1076," e "),t(1077,"code"),e(1078,"pageSize"),n(),e(1079,", conforme abaixo:"),n(),t(1080,"pre")(1081,"code"),e(1082,`url + ?page=1&pageSize=10
`),n()(),t(1083,"p"),e(1084,"Caso utilizar ordena\xE7\xE3o, a coluna ordenada ser\xE1 enviada atrav\xE9s do par\xE2metro "),t(1085,"code"),e(1086,"order"),n(),e(1087,", por exemplo:"),n(),t(1088,"ul")(1089,"li")(1090,"p"),e(1091,"Coluna decrescente:"),n(),t(1092,"pre")(1093,"code"),e(1094,`url + ?page=1&pageSize=10&order=-name
`),n()()(),t(1095,"li")(1096,"p"),e(1097,"Coluna ascendente:"),n(),t(1098,"pre")(1099,"code"),e(1100,`url + ?page=1&pageSize=10&order=name
`),n()()()(),t(1101,"blockquote")(1102,"p"),e(1103,"Esta URL deve retornar e receber os dados no padr\xE3o de "),t(1104,"a",39),e(1105,"API do PO UI"),n(),e(1106,"."),n()()()(),t(1107,"tr",17)(1108,"td",18)(1109,"div",19)(1110,"span",20),e(1111," p-service-delete"),i(1112,"br"),n()()(),t(1113,"td",21)(1114,"code",31),e(1115,"string"),n()(),t(1116,"td",23),e(1117,"-"),n(),t(1118,"td",24)(1119,"em")(1120,"strong"),e(1121,"(opcional)"),n()(),t(1122,"p"),e(1123,"URL da API respons\xE1vel por excluir os registros."),n(),t(1124,"p"),e(1125,"Ao selecionar o bot\xE3o de excluir itens, essa url ser\xE1 executada utilizando o par\xE2metro enviado na propriedade "),t(1126,"code"),e(1127,"p-param-delete-api"),n(),e(1128,`.
Caso ela n\xE3o seja utilizada, o par\xE2metro padr\xE3o a ser enviado ser\xE1 `),t(1129,"code"),e(1130,"id"),n(),e(1131,"."),n(),t(1132,"blockquote")(1133,"p"),e(1134,"Esta URL deve retornar e receber os dados no padr\xE3o de "),t(1135,"a",39),e(1136,"API do PO UI"),n(),e(1137,"."),n()()()(),t(1138,"tr",17)(1139,"td",18)(1140,"div",27)(1141,"span",28),e(1142," (p-show-more)"),i(1143,"br"),n()()(),t(1144,"td",21)(1145,"code",29),e(1146,"EventEmitter"),n()(),t(1147,"td",23),e(1148,"-"),n(),t(1149,"td",24)(1150,"em")(1151,"strong"),e(1152,"(opcional)"),n()(),t(1153,"p"),e(1154,`Recebe uma a\xE7\xE3o de clique para o bot\xE3o "Carregar mais resultados", caso nenhuma a\xE7\xE3o for definida o mesmo
n\xE3o \xE9 vis\xEDvel.`),n(),t(1155,"p"),e(1156,"Recebe um objeto "),t(1157,"code"),e(1158,"{ column, type }"),n(),e(1159," onde:"),n(),t(1160,"ul")(1161,"li"),e(1162,"column ("),t(1163,"code"),e(1164,"PoTableColumn"),n(),e(1165,"): objeto da coluna que est\xE1 ordenada."),n(),t(1166,"li"),e(1167,"type ("),t(1168,"code"),e(1169,"PoTableColumnSortType"),n(),e(1170,"): tipo da ordena\xE7\xE3o."),n()()()(),t(1171,"tr",17)(1172,"td",18)(1173,"div",19)(1174,"span",20),e(1175," p-show-more-disabled"),i(1176,"br"),n()()(),t(1177,"td",21)(1178,"code",22),e(1179,"boolean"),n()(),t(1180,"td",23)(1181,"p")(1182,"code"),e(1183,"false"),n()()(),t(1184,"td",24)(1185,"p"),e(1186,'Se verdadeiro, torna habilitado o bot\xE3o "Carregar mais resultados".'),n()()(),t(1187,"tr",17)(1188,"td",18)(1189,"div",19)(1190,"span",20),e(1191," p-single-select"),i(1192,"br"),n()()(),t(1193,"td",21)(1194,"code",22),e(1195,"boolean"),n()(),t(1196,"td",23),e(1197,"-"),n(),t(1198,"td",24)(1199,"p"),e(1200,"Define que somente uma linha da tabela pode ser selecionada."),n(),t(1201,"blockquote")(1202,"p"),e(1203,"Esta defini\xE7\xE3o n\xE3o se aplica aos itens filhos, os mesmos possuem comportamento independente do item pai."),n()()()(),t(1204,"tr",17)(1205,"td",18)(1206,"div",19)(1207,"span",20),e(1208," p-sort"),i(1209,"br"),n()()(),t(1210,"td",21)(1211,"code",22),e(1212,"boolean"),n()(),t(1213,"td",23)(1214,"p")(1215,"code"),e(1216,"false"),n()()(),t(1217,"td",24)(1218,"em")(1219,"strong"),e(1220,"(opcional)"),n()(),t(1221,"p"),e(1222,`Habilita em todas as colunas a op\xE7\xE3o de ordena\xE7\xE3o de dados. Caso a coluna seja do tipo 'data' ou 'dateTime' a
mesma deve respeitar os tipos de entrada definidos para que sejam ordenadas.`),n()()(),t(1223,"tr",17)(1224,"td",18)(1225,"div",27)(1226,"span",28),e(1227," (p-sort-by)"),i(1228,"br"),n()()(),t(1229,"td",21)(1230,"code",29),e(1231,"EventEmitter"),n()(),t(1232,"td",23),e(1233,"-"),n(),t(1234,"td",24)(1235,"em")(1236,"strong"),e(1237,"(opcional)"),n()(),t(1238,"p"),e(1239,"Evento executado ao ordenar colunas da tabela."),n(),t(1240,"p"),e(1241,"Recebe um objeto "),t(1242,"code"),e(1243,"{ column, type }"),n(),e(1244," onde:"),n(),t(1245,"ul")(1246,"li"),e(1247,"column ("),t(1248,"code"),e(1249,"PoTableColumn"),n(),e(1250,"): objeto da coluna que foi clicada/ordenada."),n(),t(1251,"li"),e(1252,"type ("),t(1253,"code"),e(1254,"PoTableColumnSortType"),n(),e(1255,"): tipo da ordena\xE7\xE3o."),n()()()(),t(1256,"tr",17)(1257,"td",18)(1258,"div",19)(1259,"span",20),e(1260," p-spacing"),i(1261,"br"),n()()(),t(1262,"td",21)(1263,"code",40),e(1264,"PoTableColumnSpacing"),n()(),t(1265,"td",23)(1266,"p")(1267,"code"),e(1268,"medium"),n()()(),t(1269,"td",24)(1270,"em")(1271,"strong"),e(1272,"(opcional)"),n()(),t(1273,"p"),e(1274,"Respons\xE1vel por aplicar espa\xE7amento nas colunas."),n(),t(1275,"p"),e(1276,"Deve receber um dos valores do enum "),t(1277,"code"),e(1278,"PoTableColumnSpacing"),n(),e(1279,"."),n()()(),t(1280,"tr",17)(1281,"td",18)(1282,"div",19)(1283,"span",20),e(1284," p-striped"),i(1285,"br"),n()()(),t(1286,"td",21)(1287,"code",22),e(1288,"boolean"),n()(),t(1289,"td",23)(1290,"p")(1291,"code"),e(1292,"false"),n()()(),t(1293,"td",24)(1294,"p"),e(1295,"Habilita ou desabilita o estilo listrado da tabela ("),t(1296,"code"),e(1297,"striped"),n(),e(1298,")."),n(),t(1299,"blockquote")(1300,"p"),e(1301,"Recomendado para tabelas com maior n\xFAmero de dados, facilitando a sua visualiza\xE7\xE3o na tabela."),n()()()(),t(1302,"tr",17)(1303,"td",18)(1304,"div",19)(1305,"span",20),e(1306," p-text-wrap"),i(1307,"br"),n()()(),t(1308,"td",21)(1309,"code",22),e(1310,"boolean"),n()(),t(1311,"td",23)(1312,"p")(1313,"code"),e(1314,"false"),n()()(),t(1315,"td",24)(1316,"em")(1317,"strong"),e(1318,"(opcional)"),n()(),t(1319,"p"),e(1320,`Habilita ou desabilita a quebra autom\xE1tica de texto. Quando ativada, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),n(),t(1321,"blockquote")(1322,"p"),e(1323,"Incompat\xEDvel com "),t(1324,"code"),e(1325,"virtual-scroll"),n(),e(1326,", que requer altura fixa nas linhas."),n()()()(),t(1327,"tr",17)(1328,"td",18)(1329,"div",27)(1330,"span",28),e(1331," (p-unselected)"),i(1332,"br"),n()()(),t(1333,"td",21)(1334,"code",29),e(1335,"EventEmitter"),n()(),t(1336,"td",23),e(1337,"-"),n(),t(1338,"td",24)(1339,"em")(1340,"strong"),e(1341,"(opcional)"),n()(),t(1342,"p"),e(1343,"Evento executado ao desmarcar a sele\xE7\xE3o de uma linha do "),t(1344,"code"),e(1345,"po-table"),n(),e(1346,"."),n()()(),t(1347,"tr",17)(1348,"td",18)(1349,"div",19)(1350,"span",20),e(1351," p-virtual-scroll"),i(1352,"br"),n()()(),t(1353,"td",21)(1354,"code",22),e(1355,"boolean"),n()(),t(1356,"td",23)(1357,"p")(1358,"code"),e(1359,"true"),n()()(),t(1360,"td",24)(1361,"em")(1362,"strong"),e(1363,"(opcional)"),n()(),t(1364,"p"),e(1365,"Habilita o "),t(1366,"code"),e(1367,"virtual-scroll"),n(),e(1368,` na tabela para melhorar a performance com grandes volumes de dados.
Requer altura (`),t(1369,"code"),e(1370,"p-height"),n(),e(1371,") para funcionar corretamente."),n(),t(1372,"blockquote")(1373,"p"),e(1374,"Incompat\xEDvel com "),t(1375,"code"),e(1376,"p-text-wrap"),n(),e(1377," e "),t(1378,"code"),e(1379,"master-detail"),n(),e(1380,", pois o "),t(1381,"code"),e(1382,"virtual-scroll"),n(),e(1383," exige altura fixa nas linhas."),n()()()()(),t(1384,"h3",13),e(1385,"M\xE9todos"),n(),t(1386,"table",41)(1387,"tr",17)(1388,"th",42)(1389,"div",19)(1390,"h4")(1391,"span",20),e(1392," applyFilters "),n()()()()(),t(1393,"tr",24)(1394,"td",24)(1395,"p"),e(1396,"M\xE9todo respons\xE1vel por realizar busca no servi\xE7o de dados podendo informar filtros e com o retorno, atualiza a tabela."),n(),t(1397,"p"),e(1398,"Caso n\xE3o seja informado par\xE2metro, nada ser\xE1 adicionado ao GET, conforme abaixo:"),n(),t(1399,"pre")(1400,"code"),e(1401,`url + ?page=1&pageSize=10
`),n()(),t(1402,"blockquote")(1403,"p"),e(1404,"Obs: os par\xE2metros "),t(1405,"code"),e(1406,"page"),n(),e(1407," e "),t(1408,"code"),e(1409,"pageSize"),n(),e(1410," sempre ser\xE3o chamados independente de ser enviados outros par\xE2metros."),n()(),t(1411,"p"),e(1412,"Caso sejam informados os par\xE2metros "),t(1413,"code"),e(1414,"{ name: 'JOHN', age: '23' }"),n(),e(1415,", todos ser\xE3o adicionados ao GET, conforme abaixo:"),n(),t(1416,"pre")(1417,"code"),e(1418,`url + ?page=1&pageSize=10&name=JOHN&age=23
`),n()()()()(),t(1419,"h5")(1420,"b"),e(1421,"Par\xE2metros"),n()(),t(1422,"table",14)(1423,"tr",15)(1424,"th",16),e(1425,"Nome"),n(),t(1426,"th",16),e(1427,"Tipo"),n(),t(1428,"th",16),e(1429,"Descri\xE7\xE3o"),n()(),t(1430,"tr",17)(1431,"td",18),e(1432," queryParams"),n(),t(1433,"td",21)(1434,"code",43),e(1435," { key: value } "),n()(),t(1436,"td",24)(1437,"p"),e(1438,"Formato do objeto a ser enviado."),n(),t(1439,"blockquote")(1440,"p"),e(1441,"Pode ser utilizada qualquer string como key, e qualquer string ou number como value."),n()()()()(),i(1442,"br"),t(1443,"table",41)(1444,"tr",17)(1445,"th",42)(1446,"div",19)(1447,"h4")(1448,"span",20),e(1449," applyFixedColumns "),n()()()()(),t(1450,"tr",24)(1451,"td",24)(1452,"p"),e(1453,"Verifica se columns possuem a propriedade width."),n()()()(),i(1454,"br"),t(1455,"table",41)(1456,"tr",17)(1457,"th",42)(1458,"div",19)(1459,"h4")(1460,"span",20),e(1461," collapse "),n()()()()(),t(1462,"tr",24)(1463,"td",24)(1464,"p"),e(1465,"M\xE9todo que colapsa uma linha com detalhe quando executada."),n()()()(),t(1466,"h5")(1467,"b"),e(1468,"Par\xE2metros"),n()(),t(1469,"table",14)(1470,"tr",15)(1471,"th",16),e(1472,"Nome"),n(),t(1473,"th",16),e(1474,"Tipo"),n(),t(1475,"th",16),e(1476,"Descri\xE7\xE3o"),n()(),t(1477,"tr",17)(1478,"td",18),e(1479," rowIndex"),n(),t(1480,"td",21)(1481,"code",44),e(1482," number "),n()(),t(1483,"td",24)(1484,"p"),e(1485,"\xCDndice da linha que ser\xE1 colapsada."),n(),t(1486,"blockquote")(1487,"p"),e(1488,"Ao reordenar os dados da tabela, o valor contido neste \xEDndice ser\xE1 alterado conforme a ordena\xE7\xE3o."),n()()()()(),i(1489,"br"),t(1490,"table",41)(1491,"tr",17)(1492,"th",42)(1493,"div",19)(1494,"h4")(1495,"span",20),e(1496," expand "),n()()()()(),t(1497,"tr",24)(1498,"td",24)(1499,"p"),e(1500,"M\xE9todo que expande uma linha com detalhe quando executada."),n()()()(),t(1501,"h5")(1502,"b"),e(1503,"Par\xE2metros"),n()(),t(1504,"table",14)(1505,"tr",15)(1506,"th",16),e(1507,"Nome"),n(),t(1508,"th",16),e(1509,"Tipo"),n(),t(1510,"th",16),e(1511,"Descri\xE7\xE3o"),n()(),t(1512,"tr",17)(1513,"td",18),e(1514," rowIndex"),n(),t(1515,"td",21)(1516,"code",44),e(1517," number "),n()(),t(1518,"td",24)(1519,"p"),e(1520,"\xCDndice da linha que ser\xE1 expandida."),n(),t(1521,"blockquote")(1522,"p"),e(1523,"Ao reordenar os dados da tabela, o valor contido neste \xEDndice ser\xE1 alterado conforme a ordena\xE7\xE3o."),n()()()()(),i(1524,"br"),t(1525,"table",41)(1526,"tr",17)(1527,"th",42)(1528,"div",19)(1529,"h4")(1530,"span",20),e(1531," getSelectedRows "),n()()()()(),t(1532,"tr",24)(1533,"td",24)(1534,"p"),e(1535,"Retorna as linhas do "),t(1536,"code"),e(1537,"po-table"),n(),e(1538," que est\xE3o selecionadas."),n()()()(),i(1539,"br"),t(1540,"table",41)(1541,"tr",17)(1542,"th",42)(1543,"div",19)(1544,"h4")(1545,"span",20),e(1546," getUnselectedRows "),n()()()()(),t(1547,"tr",24)(1548,"td",24)(1549,"p"),e(1550,"Retorna as linhas do "),t(1551,"code"),e(1552,"po-table"),n(),e(1553," que n\xE3o est\xE3o selecionadas."),n()()()(),i(1554,"br"),t(1555,"table",41)(1556,"tr",17)(1557,"th",42)(1558,"div",19)(1559,"h4")(1560,"span",20),e(1561," unselectRows "),n()()()()(),t(1562,"tr",24)(1563,"td",24)(1564,"p"),e(1565,"Desmarca as linhas que est\xE3o selecionadas."),n()()()(),i(1566,"br"),t(1567,"table",41)(1568,"tr",17)(1569,"th",42)(1570,"div",19)(1571,"h4")(1572,"span",20),e(1573," unselectRowItem "),n()()()()(),t(1574,"tr",24)(1575,"td",24)(1576,"p"),e(1577,"Desmarca uma linha que est\xE1 selecionada."),n()()()(),i(1578,"br"),t(1579,"table",41)(1580,"tr",17)(1581,"th",42)(1582,"div",19)(1583,"h4")(1584,"span",20),e(1585," selectRowItem "),n()()()()(),t(1586,"tr",24)(1587,"td",24)(1588,"p"),e(1589,"Seleciona uma linha do 'po-table'."),n()()()(),i(1590,"br"),t(1591,"table",41)(1592,"tr",17)(1593,"th",42)(1594,"div",19)(1595,"h4")(1596,"span",20),e(1597," deleteItems "),n()()()()(),t(1598,"tr",24)(1599,"td",24)(1600,"p"),e(1601,`M\xE9todo respons\xE1vel pela exclus\xE3o de itens em lote.
Caso a tabela esteja executando a propriedade `),t(1602,"code"),e(1603,"p-service-delete"),n(),e(1604,", ser\xE1 necess\xE1rio excluir 1 item por vez."),n(),t(1605,"p"),e(1606,"Ao utilizar "),t(1607,"code"),e(1608,"p-service-delete"),n(),e(1609," mas sem a propriedade "),t(1610,"code"),e(1611,"p-service-api"),n(),e(1612,`, ser\xE1 responsabilidade do usu\xE1rio o tratamento
ap\xF3s a requisi\xE7\xE3o DELETE ser executada.`),n(),t(1613,"p"),e(1614,"Caso a tabela utilize "),t(1615,"code"),e(1616,"p-height"),n(),e(1617," e esteja sem servi\xE7o, \xE9 necess\xE1rio a reatribui\xE7\xE3o dos itens utilizando o evento "),t(1618,"code"),e(1619,"(p-delete-items)"),n(),e(1620,", por exemplo:"),n(),t(1621,"pre")(1622,"code"),e(1623,`<po-table
 (p-delete-items)="items = $event"
>
</po-table>
`),n()()()()(),i(1624,"br"),t(1625,"table",41)(1626,"tr",17)(1627,"th",42)(1628,"div",19)(1629,"h4")(1630,"span",20),e(1631," removeItem "),n()()()()(),t(1632,"tr",24)(1633,"td",24)(1634,"p"),e(1635,"M\xE9todo que remove um item da tabela."),n()()()(),t(1636,"h5")(1637,"b"),e(1638,"Par\xE2metros"),n()(),t(1639,"table",14)(1640,"tr",15)(1641,"th",16),e(1642,"Nome"),n(),t(1643,"th",16),e(1644,"Tipo"),n(),t(1645,"th",16),e(1646,"Descri\xE7\xE3o"),n()(),t(1647,"tr",17)(1648,"td",18),e(1649," item"),n(),t(1650,"td",21)(1651,"code",35),e(1652," number "),n(),t(1653,"code",43),e(1654," { key: value } "),n()(),t(1655,"td",24)(1656,"p"),e(1657,"\xCDndice da linha ou o item que ser\xE1 removido."),n(),t(1658,"blockquote")(1659,"p"),e(1660,"Ao remover o item, a linha que o representa ser\xE1 exclu\xEDda da tabela."),n()()()()(),i(1661,"br"),t(1662,"table",41)(1663,"tr",17)(1664,"th",42)(1665,"div",19)(1666,"h4")(1667,"span",20),e(1668," updateItem "),n()()()()(),t(1669,"tr",24)(1670,"td",24)(1671,"p"),e(1672,"M\xE9todo que atualiza um item da tabela."),n()()()(),t(1673,"h5")(1674,"b"),e(1675,"Par\xE2metros"),n()(),t(1676,"table",14)(1677,"tr",15)(1678,"th",16),e(1679,"Nome"),n(),t(1680,"th",16),e(1681,"Tipo"),n(),t(1682,"th",16),e(1683,"Descri\xE7\xE3o"),n()(),t(1684,"tr",17)(1685,"td",18),e(1686," item"),n(),t(1687,"td",21)(1688,"code",35),e(1689," number "),n(),t(1690,"code",43),e(1691," { key: value } "),n()(),t(1692,"td",24)(1693,"p"),e(1694,"\xCDndice da linha ou o item que ser\xE1 atualizado."),n()()(),t(1695,"tr",17)(1696,"td",18),e(1697," updatedItem"),n(),t(1698,"td",21)(1699,"code",43),e(1700," { key: value } "),n()(),t(1701,"td",24)(1702,"p"),e(1703,"Item que foi atualizado."),n(),t(1704,"blockquote")(1705,"p"),e(1706,"Ao atualizar o item, a informa\xE7\xE3o ser\xE1 alterada na tabela."),n()()()()(),i(1707,"br"),t(1708,"h3"),e(1709,"Interfaces"),n(),t(1710,"h4",45)(1711,"code",5),e(1712,"PoTableAction"),n()(),t(1713,"div",2)(1714,"p"),e(1715,"Interface para lista de a\xE7\xF5es do componente. "),n()(),t(1716,"h4",13),e(1717,"Propriedades"),n(),t(1718,"table",14)(1719,"tr",15)(1720,"th",16),e(1721,"Nome"),n(),t(1722,"th",16),e(1723,"Tipo"),n(),t(1724,"th",16),e(1725,"Descri\xE7\xE3o"),n()(),t(1726,"tr",17)(1727,"td",18)(1728,"div",19)(1729,"span",20),e(1730," action"),i(1731,"br"),n()()(),t(1732,"td",21)(1733,"code",46),e(1734,"Function"),n()(),t(1735,"td",24)(1736,"em")(1737,"strong"),e(1738,"(opcional)"),n()(),t(1739,"p"),e(1740,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),n(),t(1741,"blockquote")(1742,"p"),e(1743,"Para que a fun\xE7\xE3o seja executada no contexto do elemento filho o mesmo deve ser passado utilizando "),t(1744,"em"),e(1745,"bind"),n(),e(1746,"."),n()(),t(1747,"p"),e(1748,"Exemplo: "),t(1749,"code"),e(1750,"action: this.myFunction.bind(this)"),n()()()(),t(1751,"tr",17)(1752,"td",18)(1753,"div",19)(1754,"span",20),e(1755," disabled"),i(1756,"br"),n()()(),t(1757,"td",21)(1758,"code",22),e(1759,"boolean "),n(),t(1760,"code",46),e(1761," Function"),n()(),t(1762,"td",24)(1763,"em")(1764,"strong"),e(1765,"(opcional)"),n()(),t(1766,"p"),e(1767,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar a a\xE7\xE3o para o registro selecionado."),n(),t(1768,"p"),e(1769,"Tamb\xE9m \xE9 poss\xEDvel informar diretamente um valor booleano que vai habilitar ou desabilitar a a\xE7\xE3o para todos os registros."),n()()(),t(1770,"tr",17)(1771,"td",18)(1772,"div",19)(1773,"span",20),e(1774," icon"),i(1775,"br"),n()()(),t(1776,"td",21)(1777,"code",31),e(1778,"string "),n(),t(1779,"code",47),e(1780," TemplateRef<void>"),n()(),t(1781,"td",24)(1782,"em")(1783,"strong"),e(1784,"(opcional)"),n()(),t(1785,"p"),e(1786,"Define um \xEDcone que ser\xE1 exibido ao lado esquerdo do r\xF3tulo."),n(),t(1787,"p"),e(1788,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),t(1789,"a",26),e(1790,"Biblioteca de \xEDcones"),n(),e(1791,". conforme exemplo abaixo:"),n(),t(1792,"pre")(1793,"code"),e(1794,`<po-component
 [p-property]="[{ label: 'PHOSPHOR ICON', icon: 'an an-newspaper' }]">
</po-component>
`),n()(),t(1795,"p"),e(1796,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),n(),t(1797,"pre")(1798,"code"),e(1799,`<po-component
 [p-property]="[{ label: 'FA ICON', icon: 'fa fa-icon-podcast' }]">
</po-component>
`),n()(),t(1800,"p"),e(1801,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),t(1802,"code"),e(1803,"TemplateRef"),n(),e(1804,`, conforme exemplo abaixo:
component.html:`),n(),t(1805,"pre")(1806,"code"),e(1807,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-component [p-property]="myProperty"></po-component>
`),n()(),t(1808,"p"),e(1809,"component.ts:"),n(),t(1810,"pre")(1811,"code"),e(1812,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   label: 'FA ICON',
   icon: this.iconTemplate
 }
];
`),n()()()(),t(1813,"tr",17)(1814,"td",18)(1815,"div",19)(1816,"span",20),e(1817," label"),i(1818,"br"),n()()(),t(1819,"td",21)(1820,"code",31),e(1821,"string"),n()(),t(1822,"td",24)(1823,"p"),e(1824,"R\xF3tulo da a\xE7\xE3o."),n()()(),t(1825,"tr",17)(1826,"td",18)(1827,"div",19)(1828,"span",20),e(1829," selected"),i(1830,"br"),n()()(),t(1831,"td",21)(1832,"code",22),e(1833,"boolean"),n()(),t(1834,"td",24)(1835,"em")(1836,"strong"),e(1837,"(opcional)"),n()(),t(1838,"p"),e(1839,"Define se a a\xE7\xE3o est\xE1 selecionada."),n()()(),t(1840,"tr",17)(1841,"td",18)(1842,"div",19)(1843,"span",20),e(1844," separator"),i(1845,"br"),n()()(),t(1846,"td",21)(1847,"code",22),e(1848,"boolean"),n()(),t(1849,"td",24)(1850,"em")(1851,"strong"),e(1852,"(opcional)"),n()(),t(1853,"p"),e(1854,"Atribui uma linha separadora acima do item."),n()()(),t(1855,"tr",17)(1856,"td",18)(1857,"div",19)(1858,"span",20),e(1859," type"),i(1860,"br"),n()()(),t(1861,"td",21)(1862,"code",31),e(1863,"string"),n()(),t(1864,"td",24)(1865,"em")(1866,"strong"),e(1867,"(opcional)"),n()(),t(1868,"p"),e(1869,"Define a cor do item, sendo "),t(1870,"code"),e(1871,"default"),n(),e(1872," o padr\xE3o."),n(),t(1873,"p"),e(1874,"Valores v\xE1lidos:"),n(),t(1875,"ul")(1876,"li")(1877,"code"),e(1878,"default"),n()(),t(1879,"li")(1880,"code"),e(1881,"danger"),n(),e(1882," - indicado para a\xE7\xF5es exclusivas (excluir, sair)."),n()()()(),t(1883,"tr",17)(1884,"td",18)(1885,"div",19)(1886,"span",20),e(1887," url"),i(1888,"br"),n()()(),t(1889,"td",21)(1890,"code",31),e(1891,"string"),n()(),t(1892,"td",24)(1893,"em")(1894,"strong"),e(1895,"(opcional)"),n()(),t(1896,"p"),e(1897,"URL utilizada no redirecionamento das p\xE1ginas."),n()()(),t(1898,"tr",17)(1899,"td",18)(1900,"div",19)(1901,"span",20),e(1902," visible"),i(1903,"br"),n()()(),t(1904,"td",21)(1905,"code",22),e(1906,"boolean "),n(),t(1907,"code",46),e(1908," Function"),n()(),t(1909,"td",24)(1910,"em")(1911,"strong"),e(1912,"(opcional)"),n()(),t(1913,"p"),e(1914,"Define se a a\xE7\xE3o ser\xE1 vis\xEDvel."),n(),t(1915,"blockquote")(1916,"p"),e(1917,"Caso o valor n\xE3o seja especificado a a\xE7\xE3o ser\xE1 vis\xEDvel."),n()(),t(1918,"p"),e(1919,"Op\xE7\xF5es para tornar a a\xE7\xE3o vis\xEDvel ou n\xE3o:"),n(),t(1920,"ul")(1921,"li")(1922,"p"),e(1923,"Fun\xE7\xE3o que deve retornar um booleano."),n()(),t(1924,"li")(1925,"p"),e(1926,"Informar diretamente um valor booleano."),n()()()()()(),t(1927,"h4",45)(1928,"code",5),e(1929,"PoTableBoolean"),n()(),t(1930,"div",2)(1931,"p"),e(1932,"Interface que define as colunas booleanas do "),t(1933,"code"),e(1934,"po-table"),n(),e(1935,"."),n()(),t(1936,"h4",13),e(1937,"Propriedades"),n(),t(1938,"table",14)(1939,"tr",15)(1940,"th",16),e(1941,"Nome"),n(),t(1942,"th",16),e(1943,"Tipo"),n(),t(1944,"th",16),e(1945,"Descri\xE7\xE3o"),n()(),t(1946,"tr",17)(1947,"td",18)(1948,"div",19)(1949,"span",20),e(1950," falseLabel"),i(1951,"br"),n()()(),t(1952,"td",21)(1953,"code",31),e(1954,"string"),n()(),t(1955,"td",24)(1956,"em")(1957,"strong"),e(1958,"(opcional)"),n()(),t(1959,"p"),e(1960,"Define o r\xF3tulo para valores "),t(1961,"code"),e(1962,"false"),n(),e(1963,"."),n()()(),t(1964,"tr",17)(1965,"td",18)(1966,"div",19)(1967,"span",20),e(1968," trueLabel"),i(1969,"br"),n()()(),t(1970,"td",21)(1971,"code",31),e(1972,"string"),n()(),t(1973,"td",24)(1974,"em")(1975,"strong"),e(1976,"(opcional)"),n()(),t(1977,"p"),e(1978,"Define o r\xF3tulo para valores "),t(1979,"code"),e(1980,"true"),n(),e(1981,"."),n()()()(),t(1982,"h4",45)(1983,"code",5),e(1984,"PoTableColumnSort"),n()(),t(1985,"div",2)(1986,"p"),e(1987,"Interface para ordena\xE7\xE3o das colunas do componente table."),n()(),t(1988,"h4",13),e(1989,"Propriedades"),n(),t(1990,"table",14)(1991,"tr",15)(1992,"th",16),e(1993,"Nome"),n(),t(1994,"th",16),e(1995,"Tipo"),n(),t(1996,"th",16),e(1997,"Descri\xE7\xE3o"),n()(),t(1998,"tr",17)(1999,"td",18)(2e3,"div",19)(2001,"span",20),e(2002," column"),i(2003,"br"),n()()(),t(2004,"td",21)(2005,"code",48),e(2006,"PoTableColumn"),n()(),t(2007,"td",24)(2008,"em")(2009,"strong"),e(2010,"(opcional)"),n()(),t(2011,"p"),e(2012,"Coluna pela qual a tabela est\xE1 ordenada."),n()()(),t(2013,"tr",17)(2014,"td",18)(2015,"div",19)(2016,"span",20),e(2017," type"),i(2018,"br"),n()()(),t(2019,"td",21)(2020,"code",49),e(2021,"PoTableColumnSortType"),n()(),t(2022,"td",24)(2023,"p"),e(2024,"Tipo da ordena\xE7\xE3o."),n()()()(),t(2025,"h4",45)(2026,"code",5),e(2027,"PoTableColumn"),n()(),t(2028,"div",2)(2029,"p"),e(2030,"Interface para configura\xE7\xE3o das colunas do "),t(2031,"code"),e(2032,"po-table"),n(),e(2033,"."),n(),t(2034,"p"),e(2035,"As defini\xE7\xF5es das colunas ser\xE3o aplicadas linha a linha."),n()(),t(2036,"h4",13),e(2037,"Propriedades"),n(),t(2038,"table",14)(2039,"tr",15)(2040,"th",16),e(2041,"Nome"),n(),t(2042,"th",16),e(2043,"Tipo"),n(),t(2044,"th",16),e(2045,"Descri\xE7\xE3o"),n()(),t(2046,"tr",17)(2047,"td",18)(2048,"div",19)(2049,"span",20),e(2050," action"),i(2051,"br"),n()()(),t(2052,"td",21)(2053,"code",46),e(2054,"Function"),n()(),t(2055,"td",24)(2056,"em")(2057,"strong"),e(2058,"(opcional)"),n()(),t(2059,"p"),e(2060,"Define uma a\xE7\xE3o na coluna quando o tipo da coluna for "),t(2061,"code"),e(2062,"link"),n(),e(2063," ou "),t(2064,"code"),e(2065,"icon"),n(),e(2066,"."),n(),t(2067,"blockquote")(2068,"p"),e(2069,"Quando for do tipo "),t(2070,"code"),e(2071,"link"),n(),e(2072,` ser\xE1 enviado como primeiro par\xE2metro o valor da coluna
e no segundo par\xE2metro o objeto completo da linha. Caso tenha sido definido uma a\xE7\xE3o e um link na coluna, a a\xE7\xE3o
ser\xE1 executada ao inv\xE9s do link.`),n()(),t(2073,"blockquote")(2074,"p"),e(2075,"Quando for do tipo "),t(2076,"code"),e(2077,"icon"),n(),e(2078," enviar\xE1 o objeto completo da linha e o segundo par\xE2metro ser\xE1 a defini\xE7\xE3o da coluna."),n()()()(),t(2079,"tr",17)(2080,"td",18)(2081,"div",19)(2082,"span",20),e(2083," boolean"),i(2084,"br"),n()()(),t(2085,"td",21)(2086,"code",50),e(2087,"PoTableBoolean"),n()(),t(2088,"td",24)(2089,"em")(2090,"strong"),e(2091,"(opcional)"),n()(),t(2092,"p"),e(2093,"Define um objeto do tipo "),t(2094,"code"),e(2095,"PoTableBoolean"),n(),e(2096," para as colunas do tipo "),t(2097,"em"),e(2098,"boolean"),n(),e(2099,". Por exemplo:"),n(),t(2100,"pre")(2101,"code"),e(2102,`{ property: 'approbation', type: 'boolean', boolean: {
  trueLabel: 'Accepted', falseLabel: 'Rejected'
}}
`),n()(),t(2103,"blockquote")(2104,"p"),e(2105,"Caso n\xE3o seja definido um objeto para colunas do tipo "),t(2106,"em"),e(2107,"boolean"),n(),e(2108,`,
esta exibir\xE1 por padr\xE3o `),t(2109,"code"),e(2110,"Sim"),n(),e(2111," e "),t(2112,"code"),e(2113,"N\xE3o"),n(),e(2114," de acordo com os valores "),t(2115,"em"),e(2116,"booleanos"),n(),e(2117,"."),n()()()(),t(2118,"tr",17)(2119,"td",18)(2120,"div",19)(2121,"span",20),e(2122," color"),i(2123,"br"),n()()(),t(2124,"td",21)(2125,"code",31),e(2126,"string "),n(),t(2127,"code",46),e(2128," Function"),n()(),t(2129,"td",24)(2130,"em")(2131,"strong"),e(2132,"(opcional)"),n()(),t(2133,"p"),e(2134,"Define a cor que ser\xE1 aplicada no conte\xFAdo da coluna."),n(),t(2135,"p"),e(2136,"Valores v\xE1lidos:"),n(),t(2137,"ul")(2138,"li"),i(2139,"span",51),t(2140,"code"),e(2141,"color-01"),n()(),t(2142,"li"),i(2143,"span",52),t(2144,"code"),e(2145,"color-02"),n()(),t(2146,"li"),i(2147,"span",53),t(2148,"code"),e(2149,"color-03"),n()(),t(2150,"li"),i(2151,"span",54),t(2152,"code"),e(2153,"color-04"),n()(),t(2154,"li"),i(2155,"span",55),t(2156,"code"),e(2157,"color-05"),n()(),t(2158,"li"),i(2159,"span",56),t(2160,"code"),e(2161,"color-06"),n()(),t(2162,"li"),i(2163,"span",57),t(2164,"code"),e(2165,"color-07"),n()(),t(2166,"li"),i(2167,"span",58),t(2168,"code"),e(2169,"color-08"),n()(),t(2170,"li"),i(2171,"span",59),t(2172,"code"),e(2173,"color-09"),n()(),t(2174,"li"),i(2175,"span",60),t(2176,"code"),e(2177,"color-10"),n()(),t(2178,"li"),i(2179,"span",61),t(2180,"code"),e(2181,"color-11"),n()(),t(2182,"li"),i(2183,"span",62),t(2184,"code"),e(2185,"color-12"),n()()(),t(2186,"blockquote")(2187,"p"),e(2188,`Existe a possibilidade de informar uma fun\xE7\xE3o que retorne um dos valores aceitos, ser\xE3o passados
por par\xE2metro a linha e a coluna atual, por exemplo:`),n()(),t(2189,"pre")(2190,"code"),e(2191,`(row, column) => { row[column] == 'text' ? 'color-03' : 'color-09' }
`),n()(),t(2192,"blockquote")(2193,"p"),e(2194,"\xC9 poss\xEDvel tamb\xE9m us\xE1-la na coluna do tipo "),t(2195,"code"),e(2196,"icons"),n(),e(2197,` para altera\xE7\xE3o das cores de seu conte\xFAdo conforme exemplo abaixo,
contudo, desta forma sobrep\xF5e a cor especificada em cada objeto caso haja:`),n()(),t(2198,"pre")(2199,"code"),e(2200,`{ property: 'columnIcon', label: 'Like', type: 'icon', color: 'color-08', icons: [
  { value: 'an an-star', action: () => this.notification() }
]},
`),n()()()(),t(2201,"tr",17)(2202,"td",18)(2203,"div",19)(2204,"span",20),e(2205," detail"),i(2206,"br"),n()()(),t(2207,"td",21)(2208,"code",63),e(2209,"PoTableDetail"),n()(),t(2210,"td",24)(2211,"em")(2212,"strong"),e(2213,"(opcional)"),n()(),t(2214,"p"),e(2215,"Define um objeto que segue a interface "),t(2216,"code"),e(2217,"PoTableDetail"),n(),e(2218,", para as colunas de detalhes. Por exemplo:"),n(),t(2219,"pre")(2220,"code"),e(2221,`{ columns: [{ property: 'package', label: 'Pacote' }], typeHeader: 'top' }
`),n()()()(),t(2222,"tr",17)(2223,"td",18)(2224,"div",19)(2225,"span",20),e(2226," disabled"),i(2227,"br"),n()()(),t(2228,"td",21)(2229,"code",46),e(2230,"Function"),n()(),t(2231,"td",24)(2232,"em")(2233,"strong"),e(2234,"(opcional)"),n()(),t(2235,"p"),e(2236,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar o "),t(2237,"em"),e(2238,"link"),n(),e(2239," e sua a\xE7\xE3o."),n(),t(2240,"blockquote")(2241,"p"),e(2242,"Propriedade dispon\xEDvel nas colunas do tipo "),t(2243,"code"),e(2244,"link"),n(),e(2245,"."),n()()()(),t(2246,"tr",17)(2247,"td",18)(2248,"div",19)(2249,"span",20),e(2250," format"),i(2251,"br"),n()()(),t(2252,"td",21)(2253,"code",31),e(2254,"string"),n()(),t(2255,"td",24)(2256,"em")(2257,"strong"),e(2258,"(opcional)"),n()(),t(2259,"p"),e(2260,"Formato de exibi\xE7\xE3o do valor da coluna:"),n(),t(2261,"ul")(2262,"li"),e(2263,"Formato para moeda (currency). Exemplos: 'BRL', 'USD'."),n(),t(2264,"li"),e(2265,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
caso n\xE3o seja informado um formato o mesmo ser\xE1 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),n(),t(2266,"li"),e(2267,`Formato para hor\xE1rio (time): aceita apenas os caracteres de hora(HH), minutos(mm), segundos(ss) e milisegundos(f-ffffff), os milisegundos s\xE3o opcionais, caso n\xE3o seja informado um formato o mesmo ser\xE1
'HH:mm:ss'. Exemplos: 'HH:mm', 'HH:mm:ss.ffffff', 'HH:mm:ss.ff', 'mm:ss.fff'.`),n(),t(2268,"li"),e(2269,"Formato para n\xFAmeros (number): aceita um valor seguindo o padr\xE3o "),t(2270,"a",64)(2271,"strong"),e(2272,"DecimalPipe"),n()(),e(2273," para formata\xE7\xE3o, e caso n\xE3o seja informado, o n\xFAmero ser\xE1 exibido na sua forma original. Exemplo:"),t(2274,"ul")(2275,"li"),e(2276,"Com o valor de entrada: "),t(2277,"code"),e(2278,"50"),n(),e(2279," e a valor para formata\xE7\xE3o: "),t(2280,"code"),e(2281,"'1.2-5'"),n(),e(2282," o resultado ser\xE1: "),t(2283,"code"),e(2284,"50.00"),n()()()()()()(),t(2285,"tr",17)(2286,"td",18)(2287,"div",19)(2288,"span",20),e(2289," icons"),i(2290,"br"),n()()(),t(2291,"td",21)(2292,"code",65),e(2293,"Array<PoTableColumnIcon>"),n()(),t(2294,"td",24)(2295,"em")(2296,"strong"),e(2297,"(opcional)"),n()(),t(2298,"p"),e(2299,"Define um "),t(2300,"em"),e(2301,"array"),n(),e(2302," de objetos para colunas de \xEDcones que ir\xE1 sobrepor os valores como "),t(2303,"code"),e(2304,"action"),n(),e(2305," e "),t(2306,"code"),e(2307,"color"),n(),e(2308,`
definidos na coluna, \xE0 partir do `),t(2309,"em"),e(2310,"value"),n(),e(2311," da "),t(2312,"a",66)(2313,"code"),e(2314,"PoTableColumnIcon"),n()(),e(2315,", por exemplo:"),n(),t(2316,"pre")(2317,"code"),e(2318,`{ property: 'columnIcon', label: 'Icons', type: 'icon', action: this.favorite.bind(this), icons: [
  { value: 'delete', icon: 'an an-plus', color: 'color-06', action: this.add.bind(this), tooltip: 'Adiciona um novo item' },
  { value: 'edit', icon: 'an an-pencil-simple', action: this.edit.bind(this) },
  { value: 'delete', icon: 'an an-trash', color: 'color-12', action: this.remove.bind(this) }
]},
`),n()(),t(2319,"pre")(2320,"code"),e(2321,`...
{ id: 1, columnIcon: ['an an-pencil-simple', 'an an-trash', 'an an-star'] }
...
`),n()()()(),t(2322,"tr",17)(2323,"td",18)(2324,"div",19)(2325,"span",20),e(2326," label"),i(2327,"br"),n()()(),t(2328,"td",21)(2329,"code",31),e(2330,"string"),n()(),t(2331,"td",24)(2332,"em")(2333,"strong"),e(2334,"(opcional)"),n()(),t(2335,"p"),e(2336,"Texto para t\xEDtulo da coluna."),n(),t(2337,"p"),e(2338,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),t(2339,"em"),e(2340,"label"),n(),e(2341," o valor da propriedade "),t(2342,"em"),e(2343,"property"),n(),e(2344," com a primeira letra em mai\xFAsculo."),n()()(),t(2345,"tr",17)(2346,"td",18)(2347,"div",19)(2348,"span",20),e(2349," labels"),i(2350,"br"),n()()(),t(2351,"td",21)(2352,"code",67),e(2353,"Array<PoTableColumnLabel>"),n()(),t(2354,"td",24)(2355,"em")(2356,"strong"),e(2357,"(opcional)"),n()(),t(2358,"p"),e(2359,`Define um array de objetos para as colunas de label, onde 'labels' \xE9 uma lista de objetos
do tipo `),t(2360,"code"),e(2361,"PoTableColumnLabel"),n(),e(2362," na qual devem ser definidas os labels. Por exemplo:"),n(),t(2363,"pre")(2364,"code"),e(2365,`{ property: 'flightStatus', label: 'Status', type: 'label', width:'100px', labels: [
 { value: 'confirmed', color: 'color-11', label: 'Confirmado', tooltip: 'Flight Status' },
 { value: 'delayed', color: 'color-08', label: 'Atrasado', tooltip: 'Flight Status' }
}
`),n()()()(),t(2366,"tr",17)(2367,"td",18)(2368,"div",19)(2369,"span",20),e(2370," link"),i(2371,"br"),n()()(),t(2372,"td",21)(2373,"code",31),e(2374,"string"),n()(),t(2375,"td",24)(2376,"em")(2377,"strong"),e(2378,"(opcional)"),n()(),t(2379,"p"),e(2380,"Define o nome da propriedade que conter\xE1 o "),t(2381,"code"),e(2382,"link"),n(),e(2383," a ser redirecionado."),n()()(),t(2384,"tr",17)(2385,"td",18)(2386,"div",19)(2387,"span",20),e(2388," property"),i(2389,"br"),n()()(),t(2390,"td",21)(2391,"code",31),e(2392,"string"),n()(),t(2393,"td",24)(2394,"em")(2395,"strong"),e(2396,"(opcional)"),n()(),t(2397,"p"),e(2398,"Nome identificador da coluna. Tamb\xE9m permite objetos aninhados conforme exemplo abaixo."),n(),t(2399,"pre")(2400,"code"),e(2401,`{ property: 'address.street', label: 'Rua' }
`),n()()()(),t(2402,"tr",17)(2403,"td",18)(2404,"div",19)(2405,"span",20),e(2406," sortable"),i(2407,"br"),n()()(),t(2408,"td",21)(2409,"code",22),e(2410,"boolean"),n()(),t(2411,"td",24)(2412,"em")(2413,"strong"),e(2414,"(opcional)"),n()(),t(2415,"p"),e(2416,`Controla se a coluna ser\xE1 considerada como "ordenavel". Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 usada para
ordena\xE7\xE3o.`),n()()(),t(2417,"tr",17)(2418,"td",18)(2419,"div",19)(2420,"span",20),e(2421," subtitles"),i(2422,"br"),n()()(),t(2423,"td",21)(2424,"code",68),e(2425,"Array<PoTableSubtitleColumn>"),n()(),t(2426,"td",24)(2427,"em")(2428,"strong"),e(2429,"(opcional)"),n()(),t(2430,"p"),e(2431,"Define um array de objetos para as colunas de legenda. Onde, "),t(2432,"code"),e(2433,"subtitles"),n(),e(2434,` \xE9 uma lista de objetos do tipo PoTableSubtitle na qual
devem ser definidas as op\xE7\xF5es de legenda. Por exemplo:`),n(),t(2435,"pre")(2436,"code"),e(2437,`{ property: 'flightStatus', label: 'Status', color: 'subtitle', width:'100px', subtitles: [
 { value: 'confirmed', color: 'color-11', label: 'Confirmado', content: '1' },
 { value: 'delayed', color: 'color-08', label: 'Atrasado', content: '2' }
}
`),n()(),t(2438,"p"),e(2439,`Nesse exemplo a coluna escolhida para legenda \xE9 'flightStatus', se o valor dessa coluna for 'confirmed', o texto da legenda ser\xE1
'Confirmado'.`),n()()(),t(2440,"tr",17)(2441,"td",18)(2442,"div",19)(2443,"span",20),e(2444," tooltip"),i(2445,"br"),n()()(),t(2446,"td",21)(2447,"code",31),e(2448,"string"),n()(),t(2449,"td",24)(2450,"em")(2451,"strong"),e(2452,"(opcional)"),n()(),t(2453,"p"),e(2454,"Define um texto de ajuda que ser\xE1 exibido ao passar o "),t(2455,"em"),e(2456,"mouse"),n(),e(2457," sobre um texto."),n(),t(2458,"blockquote")(2459,"p"),e(2460,"O tooltip s\xF3 ser\xE1 vis\xEDvel se for uma coluna do tipo "),t(2461,"em"),e(2462,"link"),n(),e(2463,"."),n()(),t(2464,"blockquote")(2465,"p"),e(2466,`Caso o conte\xFAdo da c\xE9lula exceder a largura da coluna,
\xE9 ignorado o valor atribu\xEDdo ao `),t(2467,"em"),e(2468,"tooltip"),n(),e(2469," e ser\xE1 exibido justamente o conte\xFAdo da c\xE9lula."),n()()()(),t(2470,"tr",17)(2471,"td",18)(2472,"div",19)(2473,"span",20),e(2474," type"),i(2475,"br"),n()()(),t(2476,"td",21)(2477,"code",31),e(2478,"string"),n()(),t(2479,"td",24)(2480,"em")(2481,"strong"),e(2482,"(opcional)"),n()(),t(2483,"p"),e(2484,"Tipo da coluna."),n(),t(2485,"p"),e(2486,"Valores v\xE1lidos:"),n(),t(2487,"ul")(2488,"li")(2489,"p")(2490,"code"),e(2491,"boolean"),n(),e(2492,": Exibir\xE1 por padr\xE3o "),t(2493,"code"),e(2494,"Sim"),n(),e(2495," e "),t(2496,"code"),e(2497,"N\xE3o"),n(),e(2498," de acordo com os valores "),t(2499,"em"),e(2500,"booleanos"),n(),e(2501,"."),n(),t(2502,"blockquote")(2503,"p"),e(2504,"Caso necessite exibir valores diferentes do padr\xE3o, deve-se utilizar a propriedade "),t(2505,"code"),e(2506,"boolean"),n(),e(2507," desta interface."),n()()(),t(2508,"li")(2509,"p")(2510,"code"),e(2511,"currency"),n(),e(2512,": valores monet\xE1rios."),n()(),t(2513,"li")(2514,"p")(2515,"code"),e(2516,"date"),n(),e(2517,": valor de datas."),n(),t(2518,"ul")(2519,"li"),e(2520,"Aceita os tipos "),t(2521,"em"),e(2522,"string"),n(),e(2523," e "),t(2524,"em"),e(2525,"Date"),n(),e(2526,` padr\xE3o do Javascript,
por exemplo: `),t(2527,"code"),e(2528,"'2017-11-28'"),n(),e(2529," ou "),t(2530,"code"),e(2531,"new Date(2017, 10, 28)"),n(),e(2532,"."),n()()(),t(2533,"li")(2534,"p")(2535,"code"),e(2536,"dateTime"),n(),e(2537,": valor de data com hor\xE1rio."),n(),t(2538,"ul")(2539,"li"),e(2540,"Aceita o tipo "),t(2541,"em"),e(2542,"string"),n(),e(2543," no formato "),t(2544,"strong"),e(2545,"ISO-8601"),n(),e(2546," extendido "),t(2547,"strong"),e(2548,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),n(),e(2549,`
e o tipo `),t(2550,"em"),e(2551,"Date"),n(),e(2552," padr\xE3o do Javascript, por exemplo: "),t(2553,"code"),e(2554,"'2017-11-28T00:00:00-02:00'"),n(),e(2555," ou "),t(2556,"code"),e(2557,"new Date(2017, 10, 28)"),n(),e(2558,"."),n()()(),t(2559,"li")(2560,"p")(2561,"code"),e(2562,"detail"),n(),e(2563,": array de objetos para o master-detail."),n(),t(2564,"ul")(2565,"li"),e(2566,"Incompat\xEDvel com "),t(2567,"code"),e(2568,"virtual-scroll"),n(),e(2569,", que requer altura fixa nas linhas."),n()()(),t(2570,"li")(2571,"p")(2572,"code"),e(2573,"icon"),n(),e(2574,": "),t(2575,"em"),e(2576,"array"),n(),e(2577," de "),t(2578,"em"),e(2579,"string"),n(),e(2580," ou objetos para a coluna de \xEDcones."),n()(),t(2581,"li")(2582,"p")(2583,"code"),e(2584,"label"),n(),e(2585,": texto com destaque."),n()(),t(2586,"li")(2587,"p")(2588,"code"),e(2589,"link"),n(),e(2590,": habilita link na coluna para a\xE7\xE3o ou navega\xE7\xE3o."),n()(),t(2591,"li")(2592,"p")(2593,"code"),e(2594,"number"),n(),e(2595,": valores num\xE9ricos."),n()(),t(2596,"li")(2597,"p")(2598,"code"),e(2599,"string"),n(),e(2600,": textos."),n()(),t(2601,"li")(2602,"p")(2603,"code"),e(2604,"subtitle"),n(),e(2605,": array de objetos para a coluna de legenda."),n()(),t(2606,"li")(2607,"p")(2608,"code"),e(2609,"time"),n(),e(2610,": valor de hor\xE1rio."),n(),t(2611,"ul")(2612,"li"),e(2613,"Aceita o tipo "),t(2614,"em"),e(2615,"string"),n(),e(2616," nos formatos "),t(2617,"strong"),e(2618,"'HH:mm:ss'"),n(),e(2619," ou "),t(2620,"strong"),e(2621,"'HH:mm:ss.ffffff'"),n(),e(2622,", por exemplo: "),t(2623,"code"),e(2624,"'23:12:45'"),n(),e(2625,"."),n()()(),t(2626,"li")(2627,"p")(2628,"code"),e(2629,"cellTemplate"),n(),e(2630,`: Indica que a coluna ser\xE1 utilizada como template, em conjunto com o
`),t(2631,"a",8),e(2632,"PoTableCellTemplate"),n(),e(2633,"."),n()(),t(2634,"li")(2635,"p")(2636,"code"),e(2637,"columnTemplate"),n(),e(2638,`: Indica que a coluna ser\xE1 utilizada como template, em conjunto com o
`),t(2639,"a",7),e(2640,"PoTableColumnTemplate"),n(),e(2641,"."),n()()()()(),t(2642,"tr",17)(2643,"td",18)(2644,"div",19)(2645,"span",20),e(2646," visible"),i(2647,"br"),n()()(),t(2648,"td",21)(2649,"code",22),e(2650,"boolean"),n()(),t(2651,"td",24)(2652,"em")(2653,"strong"),e(2654,"(opcional)"),n()(),t(2655,"p"),e(2656,`Controla a exibi\xE7\xE3o da coluna. Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 exibida mas mas ser\xE1 poss\xEDvel torn\xE1-la
vis\xEDvel atrav\xE9s do `),t(2657,"strong"),e(2658,"gerenciador de colunas"),n(),e(2659,"."),n(),t(2660,"blockquote")(2661,"p"),e(2662,"A disponibilidade de visualiza\xE7\xE3o pode limitar-se de acordo com a defini\xE7\xE3o de "),t(2663,"code"),e(2664,"p-max-columns"),n(),e(2665,"."),n()()()(),t(2666,"tr",17)(2667,"td",18)(2668,"div",19)(2669,"span",20),e(2670," width"),i(2671,"br"),n()()(),t(2672,"td",21)(2673,"code",31),e(2674,"string"),n()(),t(2675,"td",24)(2676,"em")(2677,"strong"),e(2678,"(opcional)"),n()(),t(2679,"p"),e(2680,`hoje o tamanho m\xEDnimo das colunas \xE9 de 32px, respeitando o padding lateral.
Boas Pr\xE1ticas:
Indicamos:`),n(),t(2681,"ul")(2682,"li"),e(2683,"para colunas com 2 das propriedades (property, [p-draggable] e [p-sort]) : 96px"),n(),t(2684,"li"),e(2685,"para colunas com 3 propriedades (property, [p-draggable] e [p-sort]) : 144px"),n()()()()(),t(2686,"h4",45)(2687,"code",5),e(2688,"PoTableLiterals"),n()(),t(2689,"div",2)(2690,"p"),e(2691,"Interface para defini\xE7\xE3o das literais usadas no "),t(2692,"code"),e(2693,"po-table"),n(),e(2694,"."),n()(),t(2695,"h4",13),e(2696,"Propriedades"),n(),t(2697,"table",14)(2698,"tr",15)(2699,"th",16),e(2700,"Nome"),n(),t(2701,"th",16),e(2702,"Tipo"),n(),t(2703,"th",16),e(2704,"Descri\xE7\xE3o"),n()(),t(2705,"tr",17)(2706,"td",18)(2707,"div",19)(2708,"span",20),e(2709," bodyDelete"),i(2710,"br"),n()()(),t(2711,"td",21)(2712,"code",31),e(2713,"string"),n()(),t(2714,"td",24)(2715,"em")(2716,"strong"),e(2717,"(opcional)"),n()(),t(2718,"p"),e(2719,"Texto no corpo do Modal de exclus\xE3o"),n()()(),t(2720,"tr",17)(2721,"td",18)(2722,"div",19)(2723,"span",20),e(2724," cancel"),i(2725,"br"),n()()(),t(2726,"td",21)(2727,"code",31),e(2728,"string"),n()(),t(2729,"td",24)(2730,"em")(2731,"strong"),e(2732,"(opcional)"),n()(),t(2733,"p"),e(2734,"Texto no Modal para cancelar a exclus\xE3o"),n()()(),t(2735,"tr",17)(2736,"td",18)(2737,"div",19)(2738,"span",20),e(2739," columnsManager"),i(2740,"br"),n()()(),t(2741,"td",21)(2742,"code",31),e(2743,"string"),n()(),t(2744,"td",24)(2745,"em")(2746,"strong"),e(2747,"(opcional)"),n()(),t(2748,"p"),e(2749,"Texto do "),t(2750,"strong"),e(2751,"Gerenciador de colunas"),n(),e(2752," localizado no canto superior direito da tabela."),n()()(),t(2753,"tr",17)(2754,"td",18)(2755,"div",19)(2756,"span",20),e(2757," completeSubtitle"),i(2758,"br"),n()()(),t(2759,"td",21)(2760,"code",31),e(2761,"string"),n()(),t(2762,"td",24)(2763,"em")(2764,"strong"),e(2765,"(opcional)"),n()(),t(2766,"p"),e(2767,"T\xEDtulo da modal 'Legenda completa' que aparece ao clicar no bot\xE3o 'Ver legenda completa'."),n()()(),t(2768,"tr",17)(2769,"td",18)(2770,"div",19)(2771,"span",20),e(2772," delete"),i(2773,"br"),n()()(),t(2774,"td",21)(2775,"code",31),e(2776,"string"),n()(),t(2777,"td",24)(2778,"em")(2779,"strong"),e(2780,"(opcional)"),n()(),t(2781,"p"),e(2782,"Texto no Modal para confirmar a exclus\xE3o"),n()()(),t(2783,"tr",17)(2784,"td",18)(2785,"div",19)(2786,"span",20),e(2787," deleteApiError"),i(2788,"br"),n()()(),t(2789,"td",21)(2790,"code",31),e(2791,"string"),n()(),t(2792,"td",24)(2793,"em")(2794,"strong"),e(2795,"(opcional)"),n()(),t(2796,"p"),e(2797,"Texto de notifica\xE7\xE3o de erro na requisi\xE7\xE3o Delete"),n()()(),t(2798,"tr",17)(2799,"td",18)(2800,"div",19)(2801,"span",20),e(2802," deleteSuccessful"),i(2803,"br"),n()()(),t(2804,"td",21)(2805,"code",31),e(2806,"string"),n()(),t(2807,"td",24)(2808,"em")(2809,"strong"),e(2810,"(opcional)"),n()(),t(2811,"p"),e(2812,"Texto de notifica\xE7\xE3o de remo\xE7\xE3o com sucesso"),n()()(),t(2813,"tr",17)(2814,"td",18)(2815,"div",19)(2816,"span",20),e(2817," loadMoreData"),i(2818,"br"),n()()(),t(2819,"td",21)(2820,"code",31),e(2821,"string"),n()(),t(2822,"td",24)(2823,"em")(2824,"strong"),e(2825,"(opcional)"),n()(),t(2826,"p"),e(2827,"Texto do bot\xE3o de "),t(2828,"strong"),e(2829,"Carregar mais resultados"),n(),e(2830," localizado no rodap\xE9 da tabela."),n()()(),t(2831,"tr",17)(2832,"td",18)(2833,"div",19)(2834,"span",20),e(2835," loadingData"),i(2836,"br"),n()()(),t(2837,"td",21)(2838,"code",31),e(2839,"string"),n()(),t(2840,"td",24)(2841,"em")(2842,"strong"),e(2843,"(opcional)"),n()(),t(2844,"p"),e(2845,"Texto exibido enquanto uma requisi\xE7\xE3o est\xE1 sendo executada para carregar dados na tabela."),n()()(),t(2846,"tr",17)(2847,"td",18)(2848,"div",19)(2849,"span",20),e(2850," multipleItems"),i(2851,"br"),n()()(),t(2852,"td",21)(2853,"code",31),e(2854,"string"),n()(),t(2855,"td",24)(2856,"em")(2857,"strong"),e(2858,"(opcional)"),n()(),t(2859,"p"),e(2860,"Texto exibido quando apenas 1 item for selecionado no checkbox."),n()()(),t(2861,"tr",17)(2862,"td",18)(2863,"div",19)(2864,"span",20),e(2865," noColumns"),i(2866,"br"),n()()(),t(2867,"td",21)(2868,"code",31),e(2869,"string"),n()(),t(2870,"td",24)(2871,"em")(2872,"strong"),e(2873,"(opcional)"),n()(),t(2874,"p"),e(2875,"Texto exibido quando n\xE3o existem colunas definidas para a tabela."),n()()(),t(2876,"tr",17)(2877,"td",18)(2878,"div",19)(2879,"span",20),e(2880," noData"),i(2881,"br"),n()()(),t(2882,"td",21)(2883,"code",31),e(2884,"string"),n()(),t(2885,"td",24)(2886,"em")(2887,"strong"),e(2888,"(opcional)"),n()(),t(2889,"p"),e(2890,"Texto exibido quando n\xE3o existem itens para serem exibidos na tabela."),n()()(),t(2891,"tr",17)(2892,"td",18)(2893,"div",19)(2894,"span",20),e(2895," noItem"),i(2896,"br"),n()()(),t(2897,"td",21)(2898,"code",31),e(2899,"string"),n()(),t(2900,"td",24)(2901,"em")(2902,"strong"),e(2903,"(opcional)"),n()(),t(2904,"p"),e(2905,"Texto exibido quando nenhum item for selecionado no checkbox."),n()()(),t(2906,"tr",17)(2907,"td",18)(2908,"div",19)(2909,"span",20),e(2910," noVisibleColumn"),i(2911,"br"),n()()(),t(2912,"td",21)(2913,"code",31),e(2914,"string"),n()(),t(2915,"td",24)(2916,"em")(2917,"strong"),e(2918,"(opcional)"),n()(),t(2919,"p"),e(2920,"Texto exibido quando n\xE3o existem colunas vis\xEDveis para a tabela."),n()()(),t(2921,"tr",17)(2922,"td",18)(2923,"div",19)(2924,"span",20),e(2925," oneItem"),i(2926,"br"),n()()(),t(2927,"td",21)(2928,"code",31),e(2929,"string"),n()(),t(2930,"td",24)(2931,"em")(2932,"strong"),e(2933,"(opcional)"),n()(),t(2934,"p"),e(2935,"Texto exibido quando apenas 1 item for selecionado no checkbox."),n()()(),t(2936,"tr",17)(2937,"td",18)(2938,"div",19)(2939,"span",20),e(2940," seeCompleteSubtitle"),i(2941,"br"),n()()(),t(2942,"td",21)(2943,"code",31),e(2944,"string"),n()(),t(2945,"td",24)(2946,"em")(2947,"strong"),e(2948,"(opcional)"),n()(),t(2949,"p"),e(2950,"Texto do bot\xE3o "),t(2951,"strong"),e(2952,"Ver legenda completa"),n(),e(2953," que aparece quando o rodap\xE9 de legendas \xE9 maior que a tabela."),n()()()(),t(2954,"h4",45)(2955,"code",5),e(2956,"PoTableColumnIcon"),n()(),t(2957,"div",2)(2958,"p"),i(2959,"a",69),n(),t(2960,"p"),e(2961,"Interface que define a coluna com \xEDcone(s) do "),t(2962,"code"),e(2963,"po-table"),n(),e(2964,"."),n()(),t(2965,"h4",13),e(2966,"Propriedades"),n(),t(2967,"table",14)(2968,"tr",15)(2969,"th",16),e(2970,"Nome"),n(),t(2971,"th",16),e(2972,"Tipo"),n(),t(2973,"th",16),e(2974,"Descri\xE7\xE3o"),n()(),t(2975,"tr",17)(2976,"td",18)(2977,"div",19)(2978,"span",20),e(2979," action"),i(2980,"br"),n()()(),t(2981,"td",21)(2982,"code",46),e(2983,"Function"),n()(),t(2984,"td",24)(2985,"em")(2986,"strong"),e(2987,"(opcional)"),n()(),t(2988,"p"),e(2989,"Define a a\xE7\xE3o que ser\xE1 executada ao clicar no \xEDcone."),n()()(),t(2990,"tr",17)(2991,"td",18)(2992,"div",19)(2993,"span",20),e(2994," color"),i(2995,"br"),n()()(),t(2996,"td",21)(2997,"code",31),e(2998,"string "),n(),t(2999,"code",46),e(3e3," Function"),n()(),t(3001,"td",24)(3002,"em")(3003,"strong"),e(3004,"(opcional)"),n()(),t(3005,"p"),e(3006,"Define a cor do \xEDcone."),n(),t(3007,"p"),e(3008,"Valores v\xE1lidos:"),n(),t(3009,"ul")(3010,"li"),i(3011,"span",51),t(3012,"code"),e(3013,"color-01"),n()(),t(3014,"li"),i(3015,"span",52),t(3016,"code"),e(3017,"color-02"),n()(),t(3018,"li"),i(3019,"span",53),t(3020,"code"),e(3021,"color-03"),n()(),t(3022,"li"),i(3023,"span",54),t(3024,"code"),e(3025,"color-04"),n()(),t(3026,"li"),i(3027,"span",55),t(3028,"code"),e(3029,"color-05"),n()(),t(3030,"li"),i(3031,"span",56),t(3032,"code"),e(3033,"color-06"),n()(),t(3034,"li"),i(3035,"span",57),t(3036,"code"),e(3037,"color-07"),n()(),t(3038,"li"),i(3039,"span",58),t(3040,"code"),e(3041,"color-08"),n()(),t(3042,"li"),i(3043,"span",59),t(3044,"code"),e(3045,"color-09"),n()(),t(3046,"li"),i(3047,"span",60),t(3048,"code"),e(3049,"color-10"),n()(),t(3050,"li"),i(3051,"span",61),t(3052,"code"),e(3053,"color-11"),n()(),t(3054,"li"),i(3055,"span",62),t(3056,"code"),e(3057,"color-12"),n()()()()(),t(3058,"tr",17)(3059,"td",18)(3060,"div",19)(3061,"span",20),e(3062," disabled"),i(3063,"br"),n()()(),t(3064,"td",21)(3065,"code",46),e(3066,"Function"),n()(),t(3067,"td",24)(3068,"em")(3069,"strong"),e(3070,"(opcional)"),n()(),t(3071,"p"),e(3072,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar o \xEDcone e sua a\xE7\xE3o."),n()()(),t(3073,"tr",17)(3074,"td",18)(3075,"div",19)(3076,"span",20),e(3077," icon"),i(3078,"br"),n()()(),t(3079,"td",21)(3080,"code",31),e(3081,"string "),n(),t(3082,"code",47),e(3083," TemplateRef<void>"),n()(),t(3084,"td",24)(3085,"em")(3086,"strong"),e(3087,"(opcional)"),n()(),t(3088,"p"),e(3089,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),t(3090,"a",26),e(3091,"Biblioteca de \xEDcones"),n(),e(3092,". conforme exemplo abaixo:"),n(),t(3093,"pre")(3094,"code"),e(3095,`[ { icon: 'an an-plus' } ]
`),n()(),t(3096,"p"),e(3097,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),n(),t(3098,"pre")(3099,"code"),e(3100,`[ {  icon: 'fas fa-plus' } ]
`),n()(),t(3101,"p"),e(3102,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),t(3103,"code"),e(3104,"TemplateRef"),n(),e(3105,`, conforme exemplo abaixo:
`),t(3106,"code"),e(3107,"component.html"),n(),e(3108,":"),n(),t(3109,"pre")(3110,"code"),e(3111,`<ng-template #iconTemplateAdd>
 <span class="material-icons" style="font-size: inherit;">add</span>
</ng-template>

<po-table [p-column]="myProperty"></po-table>
`),n()(),t(3112,"p")(3113,"code"),e(3114,"component.ts"),n(),e(3115,":"),n(),t(3116,"pre")(3117,"code"),e(3118,`@ViewChild('iconTemplateAdd', { static: true }) iconTemplateAdd: TemplateRef<void>;

myProperty = [
 { property: 'columnIcon', label: 'Icons', type: 'icon', icons: [
  { value: 'plus', icon: this.iconTemplateAdd },
 ]}
];
`),n()(),t(3119,"blockquote")(3120,"p"),e(3121,"Caso esta propriedade n\xE3o seja definida, a mesma receber\xE1 o valor contido em "),t(3122,"code"),e(3123,"value"),n(),e(3124,"."),n()()()(),t(3125,"tr",17)(3126,"td",18)(3127,"div",19)(3128,"span",20),e(3129," tooltip"),i(3130,"br"),n()()(),t(3131,"td",21)(3132,"code",31),e(3133,"string"),n()(),t(3134,"td",24)(3135,"em")(3136,"strong"),e(3137,"(opcional)"),n()(),t(3138,"p"),e(3139,"Define um texto de ajuda que ser\xE1 exibido ao passar o "),t(3140,"em"),e(3141,"mouse"),n(),e(3142," em cima do \xEDcone."),n()()(),t(3143,"tr",17)(3144,"td",18)(3145,"div",19)(3146,"span",20),e(3147," value"),i(3148,"br"),n()()(),t(3149,"td",21)(3150,"code",31),e(3151,"string"),n()(),t(3152,"td",24)(3153,"p"),e(3154,"Define o valor do \xEDcone que ser\xE1 exibido."),n()()()(),t(3155,"h4",45)(3156,"code",5),e(3157,"PoTableColumnLabel"),n()(),t(3158,"div",2)(3159,"p"),e(3160,"Interface para configura\xE7\xE3o das colunas de labels do "),t(3161,"code"),e(3162,"po-table"),n(),e(3163,"."),n()(),t(3164,"h4",13),e(3165,"Propriedades"),n(),t(3166,"table",14)(3167,"tr",15)(3168,"th",16),e(3169,"Nome"),n(),t(3170,"th",16),e(3171,"Tipo"),n(),t(3172,"th",16),e(3173,"Descri\xE7\xE3o"),n()(),t(3174,"tr",17)(3175,"td",18)(3176,"div",19)(3177,"span",20),e(3178," color"),i(3179,"br"),n()()(),t(3180,"td",21)(3181,"code",31),e(3182,"string"),n()(),t(3183,"td",24)(3184,"em")(3185,"strong"),e(3186,"(opcional)"),n()(),t(3187,"p"),e(3188,"Define a cor do label."),n(),t(3189,"p"),e(3190,"Valores v\xE1lidos:"),n(),t(3191,"ul")(3192,"li"),i(3193,"span",51),t(3194,"code"),e(3195,"color-01"),n()(),t(3196,"li"),i(3197,"span",52),t(3198,"code"),e(3199,"color-02"),n()(),t(3200,"li"),i(3201,"span",53),t(3202,"code"),e(3203,"color-03"),n()(),t(3204,"li"),i(3205,"span",54),t(3206,"code"),e(3207,"color-04"),n()(),t(3208,"li"),i(3209,"span",55),t(3210,"code"),e(3211,"color-05"),n()(),t(3212,"li"),i(3213,"span",56),t(3214,"code"),e(3215,"color-06"),n()(),t(3216,"li"),i(3217,"span",57),t(3218,"code"),e(3219,"color-07"),n()(),t(3220,"li"),i(3221,"span",58),t(3222,"code"),e(3223,"color-08"),n()(),t(3224,"li"),i(3225,"span",59),t(3226,"code"),e(3227,"color-09"),n()(),t(3228,"li"),i(3229,"span",60),t(3230,"code"),e(3231,"color-10"),n()(),t(3232,"li"),i(3233,"span",61),t(3234,"code"),e(3235,"color-11"),n()(),t(3236,"li"),i(3237,"span",62),t(3238,"code"),e(3239,"color-12"),n()()()()(),t(3240,"tr",17)(3241,"td",18)(3242,"div",19)(3243,"span",20),e(3244," icon"),i(3245,"br"),n()()(),t(3246,"td",21)(3247,"code",22),e(3248,"boolean "),n(),t(3249,"code",31),e(3250," string "),n(),t(3251,"code",47),e(3252," TemplateRef<void>"),n()(),t(3253,"td",24)(3254,"em")(3255,"strong"),e(3256,"(opcional)"),n()(),t(3257,"p"),e(3258,"Define ou ativa um \xEDcone que ser\xE1 exibido ao lado do valor da "),t(3259,"em"),e(3260,"tag"),n(),e(3261,"."),n(),t(3262,"p"),e(3263,"Quando "),t(3264,"code"),e(3265,"p-type"),n(),e(3266," estiver definida, basta informar um valor igual a "),t(3267,"code"),e(3268,"true"),n(),e(3269," para que o \xEDcone seja exibido conforme descri\xE7\xF5es abaixo:"),n(),t(3270,"ul")(3271,"li"),i(3272,"span",70),e(3273," - "),t(3274,"code"),e(3275,"success"),n()(),t(3276,"li"),i(3277,"span",71),e(3278," - "),t(3279,"code"),e(3280,"warning"),n()(),t(3281,"li"),i(3282,"span",72),e(3283," - "),t(3284,"code"),e(3285,"danger"),n()(),t(3286,"li"),i(3287,"span",73),e(3288," - "),t(3289,"code"),e(3290,"info"),n()()(),t(3291,"p"),e(3292,"Tamb\xE9m \xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),t(3293,"a",26),e(3294,"Biblioteca de \xEDcones"),n(),e(3295,". conforme exemplo abaixo:"),n(),t(3296,"pre")(3297,"code"),e(3298,`<po-tag p-icon="an an-user" p-value="PO Tag"></po-tag>
`),n()(),t(3299,"p"),e(3300,"como tamb\xE9m utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),t(3301,"em"),e(3302,"Font Awesome"),n(),e(3303,", da seguinte forma:"),n(),t(3304,"pre")(3305,"code"),e(3306,`<po-tag p-icon="fa fa-podcast" p-value="PO Tag"></po-button>
`),n()(),t(3307,"p"),e(3308,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),t(3309,"code"),e(3310,"TemplateRef"),n(),e(3311,", conforme exemplo abaixo:"),n(),t(3312,"pre")(3313,"code"),e(3314,`<po-tag [p-icon]="template" p-value="Tag template ionic"></po-button>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),n()(),t(3315,"blockquote")(3316,"p"),e(3317,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),t(3318,"code"),e(3319,"font-size: inherit"),n(),e(3320," caso o \xEDcone utilizado n\xE3o aplique-o."),n()()()(),t(3321,"tr",17)(3322,"td",18)(3323,"div",19)(3324,"span",20),e(3325," label"),i(3326,"br"),n()()(),t(3327,"td",21)(3328,"code",31),e(3329,"string"),n()(),t(3330,"td",24)(3331,"p"),e(3332,"Texto que ser\xE1 exibido na coluna."),n()()(),t(3333,"tr",17)(3334,"td",18)(3335,"div",19)(3336,"span",20),e(3337," textColor"),i(3338,"br"),n()()(),t(3339,"td",21)(3340,"code",31),e(3341,"string"),n()(),t(3342,"td",24)(3343,"em")(3344,"strong"),e(3345,"(opcional)"),n()(),t(3346,"p"),e(3347,"Determina a cor do texto da tag. As maneiras de customizar as cores s\xE3o:"),n(),t(3348,"ul")(3349,"li")(3350,"p"),e(3351,"Hexadeximal, por exemplo "),t(3352,"code"),e(3353,"#c64840"),n(),e(3354,";"),n()(),t(3355,"li")(3356,"p"),e(3357,"RGB, como "),t(3358,"code"),e(3359,"rgb(0, 0, 165)"),n(),e(3360,";"),n()(),t(3361,"li")(3362,"p"),e(3363,"O nome da cor, por exemplo "),t(3364,"code"),e(3365,"blue"),n(),e(3366,";"),n()(),t(3367,"li")(3368,"p"),e(3369,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),n(),t(3370,"ul")(3371,"li"),i(3372,"span",51),t(3373,"code"),e(3374,"color-01"),n()(),t(3375,"li"),i(3376,"span",52),t(3377,"code"),e(3378,"color-02"),n()(),t(3379,"li"),i(3380,"span",53),t(3381,"code"),e(3382,"color-03"),n()(),t(3383,"li"),i(3384,"span",54),t(3385,"code"),e(3386,"color-04"),n()(),t(3387,"li"),i(3388,"span",55),t(3389,"code"),e(3390,"color-05"),n()(),t(3391,"li"),i(3392,"span",56),t(3393,"code"),e(3394,"color-06"),n()(),t(3395,"li"),i(3396,"span",57),t(3397,"code"),e(3398,"color-07"),n()(),t(3399,"li"),i(3400,"span",58),t(3401,"code"),e(3402,"color-08"),n()(),t(3403,"li"),i(3404,"span",59),t(3405,"code"),e(3406,"color-09"),n()(),t(3407,"li"),i(3408,"span",60),t(3409,"code"),e(3410,"color-10"),n()(),t(3411,"li"),i(3412,"span",61),t(3413,"code"),e(3414,"color-11"),n()(),t(3415,"li"),i(3416,"span",62),t(3417,"code"),e(3418,"color-12"),n()()()(),t(3419,"li")(3420,"p"),e(3421,"Para uma melhor acessibilidade no uso do componente \xE9 recomend\xE1vel utilizar cores com um melhor contraste em rela\xE7\xE3o ao background."),n()()(),t(3422,"blockquote")(3423,"p")(3424,"strong"),e(3425,"Aten\xE7\xE3o:"),n(),e(3426," A propriedade "),t(3427,"code"),e(3428,"p-type"),n(),e(3429," sobrep\xF5e esta defini\xE7\xE3o."),n()()()(),t(3430,"tr",17)(3431,"td",18)(3432,"div",19)(3433,"span",20),e(3434," tooltip"),i(3435,"br"),n()()(),t(3436,"td",21)(3437,"code",31),e(3438,"string"),n()(),t(3439,"td",24)(3440,"em")(3441,"strong"),e(3442,"(opcional)"),n()(),t(3443,"p"),e(3444,"Define um texto de ajuda que ser\xE1 exibido ao passar o "),t(3445,"em"),e(3446,"mouse"),n(),e(3447," em cima do "),t(3448,"em"),e(3449,"label"),n(),e(3450,"."),n(),t(3451,"blockquote")(3452,"p"),e(3453,`Caso o conte\xFAdo da c\xE9lula exceder a largura da coluna,
\xE9 ignorado o valor atribuido ao tooltip e ser\xE1 exibido justamente o conte\xFAdo da c\xE9lula.`),n()()()(),t(3454,"tr",17)(3455,"td",18)(3456,"div",19)(3457,"span",20),e(3458," type"),i(3459,"br"),n()()(),t(3460,"td",21)(3461,"code",74),e(3462,"PoTagType"),n()(),t(3463,"td",24)(3464,"em")(3465,"strong"),e(3466,"(opcional)"),n()(),t(3467,"p"),e(3468,"Define o tipo da "),t(3469,"em"),e(3470,"tag"),n(),e(3471,"."),n(),t(3472,"p"),e(3473,"Valores v\xE1lidos:"),n(),t(3474,"ul")(3475,"li")(3476,"code"),e(3477,"success"),n(),e(3478,": cor verde utilizada para simbolizar sucesso ou \xEAxito."),n(),t(3479,"li")(3480,"code"),e(3481,"warning"),n(),e(3482,": cor amarela que representa aviso ou advert\xEAncia."),n(),t(3483,"li")(3484,"code"),e(3485,"danger"),n(),e(3486,": cor vermelha para erro ou aviso cr\xEDtico."),n(),t(3487,"li")(3488,"code"),e(3489,"info"),n(),e(3490,": cor cinza escuro que caracteriza conte\xFAdo informativo."),n()(),t(3491,"blockquote")(3492,"p"),e(3493,"Quando esta propriedade for definida, ir\xE1 sobrepor a defini\xE7\xE3o de "),t(3494,"code"),e(3495,"p-color"),n(),e(3496," e "),t(3497,"code"),e(3498,"p-icon"),n(),e(3499," somente ser\xE1 exibido caso seja "),t(3500,"code"),e(3501,"true"),n(),e(3502,"."),n()()()(),t(3503,"tr",17)(3504,"td",18)(3505,"div",19)(3506,"span",20),e(3507," value"),i(3508,"br"),n()()(),t(3509,"td",21)(3510,"code",31),e(3511,"string "),n(),t(3512,"code",35),e(3513," number"),n()(),t(3514,"td",24)(3515,"p"),e(3516,"Valor que ser\xE1 usado como refer\xEAncia para exibi\xE7\xE3o do conte\xFAdo na coluna."),n()()()(),t(3517,"h4",45)(3518,"code",5),e(3519,"PoTableDetailColumn"),n()(),t(3520,"div",2)(3521,"p"),e(3522,"Interface para configura\xE7\xE3o das colunas do "),t(3523,"code"),e(3524,"po-table-detail"),n(),e(3525,"."),n()(),t(3526,"h4",13),e(3527,"Propriedades"),n(),t(3528,"table",14)(3529,"tr",15)(3530,"th",16),e(3531,"Nome"),n(),t(3532,"th",16),e(3533,"Tipo"),n(),t(3534,"th",16),e(3535,"Descri\xE7\xE3o"),n()(),t(3536,"tr",17)(3537,"td",18)(3538,"div",19)(3539,"span",20),e(3540," format"),i(3541,"br"),n()()(),t(3542,"td",21)(3543,"code",31),e(3544,"string"),n()(),t(3545,"td",24)(3546,"em")(3547,"strong"),e(3548,"(opcional)"),n()(),t(3549,"p"),e(3550,"Formato de exibi\xE7\xE3o do valor da coluna:"),n(),t(3551,"ul")(3552,"li")(3553,"p"),e(3554,"Formato para moeda (currency). Exemplos: 'BRL', 'USD'."),n()(),t(3555,"li")(3556,"p"),e(3557,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
caso n\xE3o seja informado um formato o mesmo ser\xE1 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),n()(),t(3558,"li")(3559,"p"),e(3560,`Formato para hor\xE1rio (time): aceita apenas os caracteres de hora(HH), minutos(mm), segundos(ss) e milisegundos(f-ffffff), os milisegundos s\xE3o opcionais, caso n\xE3o seja informado um formato o mesmo ser\xE1
'HH:mm:ss'. Exemplos: 'HH:mm', 'HH:mm:ss.ffffff', 'HH:mm:ss.ff', 'mm:ss.fff'.`),n()(),t(3561,"li")(3562,"p"),e(3563,"Formato para n\xFAmeros (number): aceita um valor seguindo o padr\xE3o "),t(3564,"a",64)(3565,"strong"),e(3566,"DecimalPipe"),n()(),e(3567," para formata\xE7\xE3o, e caso n\xE3o seja informado, o n\xFAmero ser\xE1 exibido na sua forma original. Exemplo:"),n(),t(3568,"ul")(3569,"li"),e(3570,"Valor de entrada: "),t(3571,"code"),e(3572,"50"),n(),e(3573," e valor para formata\xE7\xE3o: "),t(3574,"code"),e(3575,"'1.2-5'"),n(),e(3576," o resultado ser\xE1: "),t(3577,"code"),e(3578,"50.00"),n()()()()()()(),t(3579,"tr",17)(3580,"td",18)(3581,"div",19)(3582,"span",20),e(3583," label"),i(3584,"br"),n()()(),t(3585,"td",21)(3586,"code",31),e(3587,"string"),n()(),t(3588,"td",24)(3589,"em")(3590,"strong"),e(3591,"(opcional)"),n()(),t(3592,"p"),e(3593,"Texto para t\xEDtulo da coluna."),n()()(),t(3594,"tr",17)(3595,"td",18)(3596,"div",19)(3597,"span",20),e(3598," property"),i(3599,"br"),n()()(),t(3600,"td",21)(3601,"code",31),e(3602,"string"),n()(),t(3603,"td",24)(3604,"em")(3605,"strong"),e(3606,"(opcional)"),n()(),t(3607,"p"),e(3608,"Nome identificador da coluna."),n()()(),t(3609,"tr",17)(3610,"td",18)(3611,"div",19)(3612,"span",20),e(3613," type"),i(3614,"br"),n()()(),t(3615,"td",21)(3616,"code",31),e(3617,"string"),n()(),t(3618,"td",24)(3619,"em")(3620,"strong"),e(3621,"(opcional)"),n()(),t(3622,"p"),e(3623,"Tipo da coluna."),n(),t(3624,"p"),e(3625,"Valores v\xE1lidos:"),n(),t(3626,"ul")(3627,"li")(3628,"p")(3629,"code"),e(3630,"currency"),n(),e(3631,": valores monet\xE1rios."),n()(),t(3632,"li")(3633,"p")(3634,"code"),e(3635,"date"),n(),e(3636,": valor de datas."),n(),t(3637,"ul")(3638,"li"),e(3639,"Aceita os tipos "),t(3640,"em"),e(3641,"string"),n(),e(3642," e "),t(3643,"em"),e(3644,"Date"),n(),e(3645,` padr\xE3o do Javascript,
por exemplo: `),t(3646,"code"),e(3647,"'2017-11-28'"),n(),e(3648," ou "),t(3649,"code"),e(3650,"new Date(2017, 10, 28)"),n(),e(3651,"."),n()()(),t(3652,"li")(3653,"p")(3654,"code"),e(3655,"time"),n(),e(3656,": valor de hor\xE1rio."),n()(),t(3657,"li")(3658,"p")(3659,"code"),e(3660,"number"),n(),e(3661,": valores num\xE9ricos."),n()(),t(3662,"li")(3663,"p")(3664,"code"),e(3665,"dateTime"),n(),e(3666,": valor de data com hor\xE1rio."),n(),t(3667,"ul")(3668,"li"),e(3669,"Aceita o tipo "),t(3670,"em"),e(3671,"string"),n(),e(3672," no formato "),t(3673,"strong"),e(3674,"ISO-8601"),n(),e(3675," extendido "),t(3676,"strong"),e(3677,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),n(),e(3678,`
e o tipo `),t(3679,"em"),e(3680,"Date"),n(),e(3681," padr\xE3o do Javascript, por exemplo: "),t(3682,"code"),e(3683,"'2017-11-28T00:00:00-02:00'"),n(),e(3684," ou "),t(3685,"code"),e(3686,"new Date(2017, 10, 28)"),n(),e(3687,"."),n(),t(3688,"li"),e(3689,"Aceita o tipo "),t(3690,"em"),e(3691,"string"),n(),e(3692," nos formatos "),t(3693,"strong"),e(3694,"'HH:mm:ss'"),n(),e(3695," ou "),t(3696,"strong"),e(3697,"'HH:mm:ss.ffffff'"),n(),e(3698,", por exemplo: "),t(3699,"code"),e(3700,"'23:12:45'"),n(),e(3701,"."),n()()()()()()(),t(3702,"h4",45)(3703,"code",5),e(3704,"PoTableDetail"),n()(),t(3705,"div",2)(3706,"p"),e(3707,"Interface para configura\xE7\xE3o do "),t(3708,"em"),e(3709,"detail"),n(),e(3710," do componente "),t(3711,"code"),e(3712,"po-table"),n(),e(3713,"."),n()(),t(3714,"h4",13),e(3715,"Propriedades"),n(),t(3716,"table",14)(3717,"tr",15)(3718,"th",16),e(3719,"Nome"),n(),t(3720,"th",16),e(3721,"Tipo"),n(),t(3722,"th",16),e(3723,"Descri\xE7\xE3o"),n()(),t(3724,"tr",17)(3725,"td",18)(3726,"div",19)(3727,"span",20),e(3728," columns"),i(3729,"br"),n()()(),t(3730,"td",21)(3731,"code",75),e(3732,"Array<PoTableDetailColumn>"),n()(),t(3733,"td",24)(3734,"p"),e(3735,"Define uma lista do tipo "),t(3736,"code"),e(3737,"PoTableDetailColumn"),n(),e(3738," para as colunas do objet "),t(3739,"em"),e(3740,"detail"),n(),e(3741,". Por exemplo:"),n(),t(3742,"pre")(3743,"code"),e(3744,`[
 { property: 'miles', label: 'Miles', type: 'number', format: '1.0-5' },
 { property: 'departure', label: 'Departure time', type: 'date', format: 'dd/MM/yyyy' }
]
`),n()()()(),t(3745,"tr",17)(3746,"td",18)(3747,"div",19)(3748,"span",20),e(3749," hideSelect"),i(3750,"br"),n()()(),t(3751,"td",21)(3752,"code",22),e(3753,"boolean"),n()(),t(3754,"td",24)(3755,"em")(3756,"strong"),e(3757,"(opcional)"),n()(),t(3758,"p"),e(3759,"Define se o checkbox de sele\xE7\xE3o do detail ser\xE1 exibido. Valor padr\xE3o 'false'."),n()()(),t(3760,"tr",17)(3761,"td",18)(3762,"div",19)(3763,"span",20),e(3764," typeHeader"),i(3765,"br"),n()()(),t(3766,"td",21)(3767,"code",31),e(3768,"string"),n()(),t(3769,"td",24)(3770,"em")(3771,"strong"),e(3772,"(opcional)"),n()(),t(3773,"p"),e(3774,"Define o tipo de cabe\xE7alho para o conte\xFAdo do "),t(3775,"em"),e(3776,"detail"),n(),e(3777," ."),n(),t(3778,"p"),e(3779,"Valores v\xE1lidos:"),n(),t(3780,"ul")(3781,"li")(3782,"code"),e(3783,"inline"),n(),e(3784,": Atribui o cabe\xE7alho na mesma linha do "),t(3785,"em"),e(3786,"detail"),n(),e(3787,"."),n(),t(3788,"li")(3789,"code"),e(3790,"top"),n(),e(3791,": Atribui o cabe\xE7alho acima do "),t(3792,"em"),e(3793,"detail"),n(),e(3794,", id\xEAntico ao "),t(3795,"code"),e(3796,"po-table"),n(),e(3797,"."),n(),t(3798,"li")(3799,"code"),e(3800,"none"),n(),e(3801,": Remove o cabe\xE7alho do "),t(3802,"em"),e(3803,"detail"),n(),e(3804,"."),n()()()()(),t(3805,"h4",45)(3806,"code",5),e(3807,"PoTableSubtitleColumn"),n()(),t(3808,"div",2)(3809,"p"),e(3810,"Interface para configura\xE7\xE3o das colunas de legenda do Po-Table."),n()(),t(3811,"h4",13),e(3812,"Propriedades"),n(),t(3813,"table",14)(3814,"tr",15)(3815,"th",16),e(3816,"Nome"),n(),t(3817,"th",16),e(3818,"Tipo"),n(),t(3819,"th",16),e(3820,"Descri\xE7\xE3o"),n()(),t(3821,"tr",17)(3822,"td",18)(3823,"div",19)(3824,"span",20),e(3825," color"),i(3826,"br"),n()()(),t(3827,"td",21)(3828,"code",31),e(3829,"string"),n()(),t(3830,"td",24)(3831,"em")(3832,"strong"),e(3833,"(opcional)"),n()(),t(3834,"p"),e(3835,"Define a cor do "),t(3836,"em"),e(3837,"status"),n(),e(3838,"."),n(),t(3839,"p"),e(3840,"Valores v\xE1lidos:"),n(),t(3841,"ul")(3842,"li"),i(3843,"span",51),t(3844,"code"),e(3845,"color-01"),n()(),t(3846,"li"),i(3847,"span",52),t(3848,"code"),e(3849,"color-02"),n()(),t(3850,"li"),i(3851,"span",53),t(3852,"code"),e(3853,"color-03"),n()(),t(3854,"li"),i(3855,"span",54),t(3856,"code"),e(3857,"color-04"),n()(),t(3858,"li"),i(3859,"span",55),t(3860,"code"),e(3861,"color-05"),n()(),t(3862,"li"),i(3863,"span",56),t(3864,"code"),e(3865,"color-06"),n()(),t(3866,"li"),i(3867,"span",57),t(3868,"code"),e(3869,"color-07"),n()(),t(3870,"li"),i(3871,"span",58),t(3872,"code"),e(3873,"color-08"),n()(),t(3874,"li"),i(3875,"span",59),t(3876,"code"),e(3877,"color-09"),n()(),t(3878,"li"),i(3879,"span",60),t(3880,"code"),e(3881,"color-10"),n()(),t(3882,"li"),i(3883,"span",61),t(3884,"code"),e(3885,"color-11"),n()(),t(3886,"li"),i(3887,"span",62),t(3888,"code"),e(3889,"color-12"),n()()()()(),t(3890,"tr",17)(3891,"td",18)(3892,"div",19)(3893,"span",20),e(3894," content"),i(3895,"br"),n()()(),t(3896,"td",21)(3897,"code",31),e(3898,"string"),n()(),t(3899,"td",24)(3900,"p"),e(3901,"Conte\xFAdo que ser\xE1 exibido na coluna da tabela."),n()()(),t(3902,"tr",17)(3903,"td",18)(3904,"div",19)(3905,"span",20),e(3906," label"),i(3907,"br"),n()()(),t(3908,"td",21)(3909,"code",31),e(3910,"string"),n()(),t(3911,"td",24)(3912,"p"),e(3913,"Texto que ser\xE1 exibido no rodap\xE9 da tabela como legenda."),n()()(),t(3914,"tr",17)(3915,"td",18)(3916,"div",19)(3917,"span",20),e(3918," value"),i(3919,"br"),n()()(),t(3920,"td",21)(3921,"code",31),e(3922,"string "),n(),t(3923,"code",35),e(3924," number"),n()(),t(3925,"td",24)(3926,"p"),e(3927,"Valor que ser\xE1 usado como refer\xEAncia para exibi\xE7\xE3o do conte\xFAdo na coluna."),n()()()(),t(3928,"h3"),e(3929,"Enums"),n(),t(3930,"h4",4)(3931,"code",5),e(3932,"PoTableColumnSortType"),n()(),t(3933,"div",2)(3934,"p"),e(3935,"Tipos de ordena\xE7\xE3o das colunas da tabela."),n()(),t(3936,"h4",13),e(3937,"Propriedades"),n(),t(3938,"table",14)(3939,"tr",15)(3940,"th",16),e(3941,"Nome"),n(),t(3942,"th",16),e(3943,"Descri\xE7\xE3o"),n()(),t(3944,"tr",17)(3945,"td",18)(3946,"div",19)(3947,"span",20),e(3948," Ascending"),i(3949,"br"),n()()(),t(3950,"td",24)(3951,"p"),e(3952,"Ordena\xE7\xE3o ascendente"),n()()(),t(3953,"tr",17)(3954,"td",18)(3955,"div",19)(3956,"span",20),e(3957," Descending"),i(3958,"br"),n()()(),t(3959,"td",24)(3960,"p"),e(3961,"Ordena\xE7\xE3o descendente"),n()()()(),t(3962,"h4",4)(3963,"code",5),e(3964,"PoTableColumnSpacing"),n()(),t(3965,"div",2)(3966,"p"),e(3967,"Tipos de espa\xE7amento das colunas da tabela."),n()(),t(3968,"h4",13),e(3969,"Propriedades"),n(),t(3970,"table",14)(3971,"tr",15)(3972,"th",16),e(3973,"Nome"),n(),t(3974,"th",16),e(3975,"Descri\xE7\xE3o"),n()(),t(3976,"tr",17)(3977,"td",18)(3978,"div",19)(3979,"span",20),e(3980," Small"),i(3981,"br"),n()()(),t(3982,"td",24)(3983,"p"),e(3984,"Espa\xE7amento pequeno"),n()()(),t(3985,"tr",17)(3986,"td",18)(3987,"div",19)(3988,"span",20),e(3989," Medium"),i(3990,"br"),n()()(),t(3991,"td",24)(3992,"p"),e(3993,"Espa\xE7amento m\xE9dio"),n()()(),t(3994,"tr",17)(3995,"td",18)(3996,"div",19)(3997,"span",20),e(3998," Large"),i(3999,"br"),n()()(),t(4e3,"td",24)(4001,"p"),e(4002,"Espa\xE7amento grande"),n()()()()())},dependencies:[P],encapsulation:2})}return r})();var st=(()=>{class r{route;router;sub;hidePoWebSample=!0;samplesLength=8;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,l){this.route=a,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let l=a.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||r)(w(Me),w(ie))};static \u0275cmp=S({type:r,selectors:[["ng-component"]],standalone:!1,decls:13,vars:4,consts:[["p-title","Table",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,o){l&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),E("p-click",function(){return o.changeTab("doc")}),i(3,"sample-po-table-doc"),n(),t(4,"po-tab",3),E("p-click",function(){return o.changeTab("web")}),i(5,"sample-po-table-basic-view")(6,"sample-po-table-labs-view")(7,"sample-po-table-with-api-view")(8,"sample-po-table-transport-view")(9,"sample-po-table-airfare-view")(10,"sample-po-table-components-view")(11,"sample-po-table-heroes-view")(12,"sample-po-table-draggable-view"),n()()()),l&2&&(c("p-actions",o.actions),s(2),c("p-active",o.activeTab==="doc"),s(2),c("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"))},dependencies:[ze,C,T,Qe,$e,Ke,Ze,tt,it,at,rt,mt],encapsulation:2})}return r})();var Yt=[{path:"",component:st}],dt=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275mod=Z({type:r});static \u0275inj=Y({imports:[ce.forChild(Yt),ce]})}return r})();var oi=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275mod=Z({type:r});static \u0275inj=Y({imports:[We,dt]})}return r})();export{oi as DocPoTableModule};
