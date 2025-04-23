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
`),n()()()()(),t(21,"div",10),i(22,"sample-po-table-draggable"),n(),i(23,"hr")),l&2&&(s(5),_("po-icon "+o.sampleCodeButtonIcon),s(),D(" ",o.sampleCodeButtonLabel,""),s(),c("ngClass",f(4,$t,o.hideSampleCodeTabs)))},dependencies:[A,P,C,T,lt],encapsulation:2})}return r})();var mt=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275cmp=S({type:r,selectors:[["sample-po-table-doc"]],standalone:!1,decls:4012,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-table-row-template"],["href","/documentation/po-table-column-template"],["href","/documentation/po-table-cell-template"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoTableAction[]"],["href","https://po-ui.io/icons"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","PoTableColumn[]"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoSearchFilterMode"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","any[]"],["pan","",1,"docs-api-property-type","PoTableLiterals"],["href","/documentation/po-i18n"],["href","https://po-ui.io/guides/api"],["pan","",1,"docs-api-property-type","PoTableColumnSpacing"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["pan","",1,"docs-api-property-type","{","key:","value","}"],["pan","",1,"docs-api-property-type"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["pan","",1,"docs-api-property-type","PoTableColumn"],["pan","",1,"docs-api-property-type","PoTableColumnSortType"],["pan","",1,"docs-api-property-type","PoTableBoolean"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],["pan","",1,"docs-api-property-type","PoTableDetail"],["href","https://angular.io/api/common/DecimalPipe"],["pan","",1,"docs-api-property-type","Array<PoTableColumnIcon>"],["href","documentation/po-table#tableColumnIcon"],["pan","",1,"docs-api-property-type","Array<PoTableColumnLabel>"],["pan","",1,"docs-api-property-type","Array<PoTableSubtitleColumn>"],["id","tableColumnIcon"],[1,"an","an-check"],[1,"an","an-warning-circle"],[1,"an","an-x"],[1,"an","an-info"],["pan","",1,"docs-api-property-type","PoTagType"],["pan","",1,"docs-api-property-type","Array<PoTableDetailColumn>"]],template:function(l,o){l&1&&(t(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoTableModule } from '@po-ui/ng-components';"),n()(),t(4,"div",2)(5,"p"),e(6,"M\xF3dulo do componente po-table"),n()(),t(7,"h3",3),e(8,"Componente"),n(),t(9,"h4",4)(10,"code",5),e(11,"PoTableComponent"),n()(),t(12,"div",2)(13,"p"),e(14,`Este componente de tabela \xE9 utilizado para exibi\xE7\xE3o de dados com diferentes tipos como por exemplo textos, data, horas e n\xFAmeros com
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
`),n()(),t(1083,"p"),e(1084,"Caso utilizar ordena\xE7\xE3o, a coluna ordenada ser\xE1 enviada atrav\xE9s do par\xE2metro "),t(1085,"code"),e(1086,"order"),n(),e(1087,", por exemplo:"),n(),t(1088,"ul")(1089,"li"),e(1090,"Coluna decrescente:"),n()(),t(1091,"pre")(1092,"code"),e(1093,`url + ?page=1&pageSize=10&order=-name
`),n()(),t(1094,"ul")(1095,"li"),e(1096,"Coluna ascendente:"),n()(),t(1097,"pre")(1098,"code"),e(1099,`url + ?page=1&pageSize=10&order=name
`),n()(),t(1100,"blockquote")(1101,"p"),e(1102,"Esta URL deve retornar e receber os dados no padr\xE3o de "),t(1103,"a",39),e(1104,"API do PO UI"),n(),e(1105,"."),n()()()(),t(1106,"tr",17)(1107,"td",18)(1108,"div",19)(1109,"span",20),e(1110," p-service-delete"),i(1111,"br"),n()()(),t(1112,"td",21)(1113,"code",31),e(1114,"string"),n()(),t(1115,"td",23),e(1116,"-"),n(),t(1117,"td",24)(1118,"em")(1119,"strong"),e(1120,"(opcional)"),n()(),t(1121,"p"),e(1122,"URL da API respons\xE1vel por excluir os registros."),n(),t(1123,"p"),e(1124,"Ao selecionar o bot\xE3o de excluir itens, essa url ser\xE1 executada utilizando o par\xE2metro enviado na propriedade "),t(1125,"code"),e(1126,"p-param-delete-api"),n(),e(1127,`.
Caso ela n\xE3o seja utilizada, o par\xE2metro padr\xE3o a ser enviado ser\xE1 `),t(1128,"code"),e(1129,"id"),n(),e(1130,"."),n(),t(1131,"blockquote")(1132,"p"),e(1133,"Esta URL deve retornar e receber os dados no padr\xE3o de "),t(1134,"a",39),e(1135,"API do PO UI"),n(),e(1136,"."),n()()()(),t(1137,"tr",17)(1138,"td",18)(1139,"div",27)(1140,"span",28),e(1141," (p-show-more)"),i(1142,"br"),n()()(),t(1143,"td",21)(1144,"code",29),e(1145,"EventEmitter"),n()(),t(1146,"td",23),e(1147,"-"),n(),t(1148,"td",24)(1149,"em")(1150,"strong"),e(1151,"(opcional)"),n()(),t(1152,"p"),e(1153,`Recebe uma a\xE7\xE3o de clique para o bot\xE3o "Carregar mais resultados", caso nenhuma a\xE7\xE3o for definida o mesmo
n\xE3o \xE9 vis\xEDvel.`),n(),t(1154,"p"),e(1155,"Recebe um objeto "),t(1156,"code"),e(1157,"{ column, type }"),n(),e(1158," onde:"),n(),t(1159,"ul")(1160,"li"),e(1161,"column ("),t(1162,"code"),e(1163,"PoTableColumn"),n(),e(1164,"): objeto da coluna que est\xE1 ordenada."),n(),t(1165,"li"),e(1166,"type ("),t(1167,"code"),e(1168,"PoTableColumnSortType"),n(),e(1169,"): tipo da ordena\xE7\xE3o."),n()()()(),t(1170,"tr",17)(1171,"td",18)(1172,"div",19)(1173,"span",20),e(1174," p-show-more-disabled"),i(1175,"br"),n()()(),t(1176,"td",21)(1177,"code",22),e(1178,"boolean"),n()(),t(1179,"td",23)(1180,"p")(1181,"code"),e(1182,"false"),n()()(),t(1183,"td",24)(1184,"p"),e(1185,'Se verdadeiro, torna habilitado o bot\xE3o "Carregar mais resultados".'),n()()(),t(1186,"tr",17)(1187,"td",18)(1188,"div",19)(1189,"span",20),e(1190," p-single-select"),i(1191,"br"),n()()(),t(1192,"td",21)(1193,"code",22),e(1194,"boolean"),n()(),t(1195,"td",23),e(1196,"-"),n(),t(1197,"td",24)(1198,"p"),e(1199,"Define que somente uma linha da tabela pode ser selecionada."),n(),t(1200,"blockquote")(1201,"p"),e(1202,"Esta defini\xE7\xE3o n\xE3o se aplica aos itens filhos, os mesmos possuem comportamento independente do item pai."),n()()()(),t(1203,"tr",17)(1204,"td",18)(1205,"div",19)(1206,"span",20),e(1207," p-sort"),i(1208,"br"),n()()(),t(1209,"td",21)(1210,"code",22),e(1211,"boolean"),n()(),t(1212,"td",23)(1213,"p")(1214,"code"),e(1215,"false"),n()()(),t(1216,"td",24)(1217,"em")(1218,"strong"),e(1219,"(opcional)"),n()(),t(1220,"p"),e(1221,`Habilita em todas as colunas a op\xE7\xE3o de ordena\xE7\xE3o de dados. Caso a coluna seja do tipo 'data' ou 'dateTime' a
mesma deve respeitar os tipos de entrada definidos para que sejam ordenadas.`),n()()(),t(1222,"tr",17)(1223,"td",18)(1224,"div",27)(1225,"span",28),e(1226," (p-sort-by)"),i(1227,"br"),n()()(),t(1228,"td",21)(1229,"code",29),e(1230,"EventEmitter"),n()(),t(1231,"td",23),e(1232,"-"),n(),t(1233,"td",24)(1234,"em")(1235,"strong"),e(1236,"(opcional)"),n()(),t(1237,"p"),e(1238,"Evento executado ao ordenar colunas da tabela."),n(),t(1239,"p"),e(1240,"Recebe um objeto "),t(1241,"code"),e(1242,"{ column, type }"),n(),e(1243," onde:"),n(),t(1244,"ul")(1245,"li"),e(1246,"column ("),t(1247,"code"),e(1248,"PoTableColumn"),n(),e(1249,"): objeto da coluna que foi clicada/ordenada."),n(),t(1250,"li"),e(1251,"type ("),t(1252,"code"),e(1253,"PoTableColumnSortType"),n(),e(1254,"): tipo da ordena\xE7\xE3o."),n()()()(),t(1255,"tr",17)(1256,"td",18)(1257,"div",19)(1258,"span",20),e(1259," p-spacing"),i(1260,"br"),n()()(),t(1261,"td",21)(1262,"code",40),e(1263,"PoTableColumnSpacing"),n()(),t(1264,"td",23)(1265,"p")(1266,"code"),e(1267,"medium"),n()()(),t(1268,"td",24)(1269,"em")(1270,"strong"),e(1271,"(opcional)"),n()(),t(1272,"p"),e(1273,"Respons\xE1vel por aplicar espa\xE7amento nas colunas."),n(),t(1274,"p"),e(1275,"Deve receber um dos valores do enum "),t(1276,"code"),e(1277,"PoTableColumnSpacing"),n(),e(1278,"."),n()()(),t(1279,"tr",17)(1280,"td",18)(1281,"div",19)(1282,"span",20),e(1283," p-striped"),i(1284,"br"),n()()(),t(1285,"td",21)(1286,"code",22),e(1287,"boolean"),n()(),t(1288,"td",23)(1289,"p")(1290,"code"),e(1291,"false"),n()()(),t(1292,"td",24)(1293,"p"),e(1294,"Habilita ou desabilita o estilo listrado da tabela ("),t(1295,"code"),e(1296,"striped"),n(),e(1297,")."),n(),t(1298,"blockquote")(1299,"p"),e(1300,"Recomendado para tabelas com maior n\xFAmero de dados, facilitando a sua visualiza\xE7\xE3o na tabela."),n()()()(),t(1301,"tr",17)(1302,"td",18)(1303,"div",19)(1304,"span",20),e(1305," p-text-wrap"),i(1306,"br"),n()()(),t(1307,"td",21)(1308,"code",22),e(1309,"boolean"),n()(),t(1310,"td",23)(1311,"p")(1312,"code"),e(1313,"false"),n()()(),t(1314,"td",24)(1315,"em")(1316,"strong"),e(1317,"(opcional)"),n()(),t(1318,"p"),e(1319,`Habilita ou desabilita a quebra autom\xE1tica de texto. Quando ativada, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),n(),t(1320,"blockquote")(1321,"p"),e(1322,"Incompat\xEDvel com "),t(1323,"code"),e(1324,"virtual-scroll"),n(),e(1325,", que requer altura fixa nas linhas."),n()()()(),t(1326,"tr",17)(1327,"td",18)(1328,"div",27)(1329,"span",28),e(1330," (p-unselected)"),i(1331,"br"),n()()(),t(1332,"td",21)(1333,"code",29),e(1334,"EventEmitter"),n()(),t(1335,"td",23),e(1336,"-"),n(),t(1337,"td",24)(1338,"em")(1339,"strong"),e(1340,"(opcional)"),n()(),t(1341,"p"),e(1342,"Evento executado ao desmarcar a sele\xE7\xE3o de uma linha do "),t(1343,"code"),e(1344,"po-table"),n(),e(1345,"."),n()()(),t(1346,"tr",17)(1347,"td",18)(1348,"div",19)(1349,"span",20),e(1350," p-virtual-scroll"),i(1351,"br"),n()()(),t(1352,"td",21)(1353,"code",22),e(1354,"boolean"),n()(),t(1355,"td",23)(1356,"p")(1357,"code"),e(1358,"true"),n()()(),t(1359,"td",24)(1360,"em")(1361,"strong"),e(1362,"(opcional)"),n()(),t(1363,"p"),e(1364,"Habilita o "),t(1365,"code"),e(1366,"virtual-scroll"),n(),e(1367,` na tabela para melhorar a performance com grandes volumes de dados.
Requer altura (`),t(1368,"code"),e(1369,"p-height"),n(),e(1370,") para funcionar corretamente."),n(),t(1371,"blockquote")(1372,"p"),e(1373,"Incompat\xEDvel com "),t(1374,"code"),e(1375,"p-text-wrap"),n(),e(1376," e "),t(1377,"code"),e(1378,"master-detail"),n(),e(1379,", pois o "),t(1380,"code"),e(1381,"virtual-scroll"),n(),e(1382," exige altura fixa nas linhas."),n()()()()(),t(1383,"h3",13),e(1384,"M\xE9todos"),n(),t(1385,"table",41)(1386,"tr",17)(1387,"th",42)(1388,"div",19)(1389,"h4")(1390,"span",20),e(1391," applyFilters "),n()()()()(),t(1392,"tr",24)(1393,"td",24)(1394,"p"),e(1395,"M\xE9todo respons\xE1vel por realizar busca no servi\xE7o de dados podendo informar filtros e com o retorno, atualiza a tabela."),n(),t(1396,"p"),e(1397,"Caso n\xE3o seja informado par\xE2metro, nada ser\xE1 adicionado ao GET, conforme abaixo:"),n(),t(1398,"pre")(1399,"code"),e(1400,`url + ?page=1&pageSize=10
`),n()(),t(1401,"blockquote")(1402,"p"),e(1403,"Obs: os par\xE2metros "),t(1404,"code"),e(1405,"page"),n(),e(1406," e "),t(1407,"code"),e(1408,"pageSize"),n(),e(1409," sempre ser\xE3o chamados independente de ser enviados outros par\xE2metros."),n()(),t(1410,"p"),e(1411,"Caso sejam informados os par\xE2metros "),t(1412,"code"),e(1413,"{ name: 'JOHN', age: '23' }"),n(),e(1414,", todos ser\xE3o adicionados ao GET, conforme abaixo:"),n(),t(1415,"pre")(1416,"code"),e(1417,`url + ?page=1&pageSize=10&name=JOHN&age=23
`),n()()()()(),t(1418,"h5")(1419,"b"),e(1420,"Par\xE2metros"),n()(),t(1421,"table",14)(1422,"tr",15)(1423,"th",16),e(1424,"Nome"),n(),t(1425,"th",16),e(1426,"Tipo"),n(),t(1427,"th",16),e(1428,"Descri\xE7\xE3o"),n()(),t(1429,"tr",17)(1430,"td",18),e(1431," queryParams"),n(),t(1432,"td",21)(1433,"code",43),e(1434," { key: value } "),n()(),t(1435,"td",24)(1436,"p"),e(1437,"Formato do objeto a ser enviado."),n(),t(1438,"blockquote")(1439,"p"),e(1440,"Pode ser utilizada qualquer string como key, e qualquer string ou number como value."),n()()()()(),i(1441,"br"),t(1442,"table",41)(1443,"tr",17)(1444,"th",42)(1445,"div",19)(1446,"h4")(1447,"span",20),e(1448," applyFixedColumns "),n()()()()(),t(1449,"tr",24)(1450,"td",24)(1451,"p"),e(1452,"Verifica se columns possuem a propriedade width."),n()()()(),i(1453,"br"),t(1454,"table",41)(1455,"tr",17)(1456,"th",42)(1457,"div",19)(1458,"h4")(1459,"span",20),e(1460," collapse "),n()()()()(),t(1461,"tr",24)(1462,"td",24)(1463,"p"),e(1464,"M\xE9todo que colapsa uma linha com detalhe quando executada."),n()()()(),t(1465,"h5")(1466,"b"),e(1467,"Par\xE2metros"),n()(),t(1468,"table",14)(1469,"tr",15)(1470,"th",16),e(1471,"Nome"),n(),t(1472,"th",16),e(1473,"Tipo"),n(),t(1474,"th",16),e(1475,"Descri\xE7\xE3o"),n()(),t(1476,"tr",17)(1477,"td",18),e(1478," rowIndex"),n(),t(1479,"td",21)(1480,"code",44),e(1481," number "),n()(),t(1482,"td",24)(1483,"p"),e(1484,"\xCDndice da linha que ser\xE1 colapsada."),n(),t(1485,"blockquote")(1486,"p"),e(1487,"Ao reordenar os dados da tabela, o valor contido neste \xEDndice ser\xE1 alterado conforme a ordena\xE7\xE3o."),n()()()()(),i(1488,"br"),t(1489,"table",41)(1490,"tr",17)(1491,"th",42)(1492,"div",19)(1493,"h4")(1494,"span",20),e(1495," expand "),n()()()()(),t(1496,"tr",24)(1497,"td",24)(1498,"p"),e(1499,"M\xE9todo que expande uma linha com detalhe quando executada."),n()()()(),t(1500,"h5")(1501,"b"),e(1502,"Par\xE2metros"),n()(),t(1503,"table",14)(1504,"tr",15)(1505,"th",16),e(1506,"Nome"),n(),t(1507,"th",16),e(1508,"Tipo"),n(),t(1509,"th",16),e(1510,"Descri\xE7\xE3o"),n()(),t(1511,"tr",17)(1512,"td",18),e(1513," rowIndex"),n(),t(1514,"td",21)(1515,"code",44),e(1516," number "),n()(),t(1517,"td",24)(1518,"p"),e(1519,"\xCDndice da linha que ser\xE1 expandida."),n(),t(1520,"blockquote")(1521,"p"),e(1522,"Ao reordenar os dados da tabela, o valor contido neste \xEDndice ser\xE1 alterado conforme a ordena\xE7\xE3o."),n()()()()(),i(1523,"br"),t(1524,"table",41)(1525,"tr",17)(1526,"th",42)(1527,"div",19)(1528,"h4")(1529,"span",20),e(1530," getSelectedRows "),n()()()()(),t(1531,"tr",24)(1532,"td",24)(1533,"p"),e(1534,"Retorna as linhas do "),t(1535,"code"),e(1536,"po-table"),n(),e(1537," que est\xE3o selecionadas."),n()()()(),i(1538,"br"),t(1539,"table",41)(1540,"tr",17)(1541,"th",42)(1542,"div",19)(1543,"h4")(1544,"span",20),e(1545," getUnselectedRows "),n()()()()(),t(1546,"tr",24)(1547,"td",24)(1548,"p"),e(1549,"Retorna as linhas do "),t(1550,"code"),e(1551,"po-table"),n(),e(1552," que n\xE3o est\xE3o selecionadas."),n()()()(),i(1553,"br"),t(1554,"table",41)(1555,"tr",17)(1556,"th",42)(1557,"div",19)(1558,"h4")(1559,"span",20),e(1560," unselectRows "),n()()()()(),t(1561,"tr",24)(1562,"td",24)(1563,"p"),e(1564,"Desmarca as linhas que est\xE3o selecionadas."),n()()()(),i(1565,"br"),t(1566,"table",41)(1567,"tr",17)(1568,"th",42)(1569,"div",19)(1570,"h4")(1571,"span",20),e(1572," unselectRowItem "),n()()()()(),t(1573,"tr",24)(1574,"td",24)(1575,"p"),e(1576,"Desmarca uma linha que est\xE1 selecionada."),n()()()(),i(1577,"br"),t(1578,"table",41)(1579,"tr",17)(1580,"th",42)(1581,"div",19)(1582,"h4")(1583,"span",20),e(1584," selectRowItem "),n()()()()(),t(1585,"tr",24)(1586,"td",24)(1587,"p"),e(1588,"Seleciona uma linha do 'po-table'."),n()()()(),i(1589,"br"),t(1590,"table",41)(1591,"tr",17)(1592,"th",42)(1593,"div",19)(1594,"h4")(1595,"span",20),e(1596," deleteItems "),n()()()()(),t(1597,"tr",24)(1598,"td",24)(1599,"p"),e(1600,`M\xE9todo respons\xE1vel pela exclus\xE3o de itens em lote.
Caso a tabela esteja executando a propriedade `),t(1601,"code"),e(1602,"p-service-delete"),n(),e(1603,", ser\xE1 necess\xE1rio excluir 1 item por vez."),n(),t(1604,"p"),e(1605,"Ao utilizar "),t(1606,"code"),e(1607,"p-service-delete"),n(),e(1608," mas sem a propriedade "),t(1609,"code"),e(1610,"p-service-api"),n(),e(1611,`, ser\xE1 responsabilidade do usu\xE1rio o tratamento
ap\xF3s a requisi\xE7\xE3o DELETE ser executada.`),n(),t(1612,"p"),e(1613,"Caso a tabela utilize "),t(1614,"code"),e(1615,"p-height"),n(),e(1616," e esteja sem servi\xE7o, \xE9 necess\xE1rio a reatribui\xE7\xE3o dos itens utilizando o evento "),t(1617,"code"),e(1618,"(p-delete-items)"),n(),e(1619,", por exemplo:"),n(),t(1620,"pre")(1621,"code"),e(1622,`<po-table
 (p-delete-items)="items = $event"
>
</po-table>
`),n()()()()(),i(1623,"br"),t(1624,"table",41)(1625,"tr",17)(1626,"th",42)(1627,"div",19)(1628,"h4")(1629,"span",20),e(1630," removeItem "),n()()()()(),t(1631,"tr",24)(1632,"td",24)(1633,"p"),e(1634,"M\xE9todo que remove um item da tabela."),n()()()(),t(1635,"h5")(1636,"b"),e(1637,"Par\xE2metros"),n()(),t(1638,"table",14)(1639,"tr",15)(1640,"th",16),e(1641,"Nome"),n(),t(1642,"th",16),e(1643,"Tipo"),n(),t(1644,"th",16),e(1645,"Descri\xE7\xE3o"),n()(),t(1646,"tr",17)(1647,"td",18),e(1648," item"),n(),t(1649,"td",21)(1650,"code",35),e(1651," number "),n(),t(1652,"code",43),e(1653," { key: value } "),n()(),t(1654,"td",24)(1655,"p"),e(1656,"\xCDndice da linha ou o item que ser\xE1 removido."),n(),t(1657,"blockquote")(1658,"p"),e(1659,"Ao remover o item, a linha que o representa ser\xE1 exclu\xEDda da tabela."),n()()()()(),i(1660,"br"),t(1661,"table",41)(1662,"tr",17)(1663,"th",42)(1664,"div",19)(1665,"h4")(1666,"span",20),e(1667," updateItem "),n()()()()(),t(1668,"tr",24)(1669,"td",24)(1670,"p"),e(1671,"M\xE9todo que atualiza um item da tabela."),n()()()(),t(1672,"h5")(1673,"b"),e(1674,"Par\xE2metros"),n()(),t(1675,"table",14)(1676,"tr",15)(1677,"th",16),e(1678,"Nome"),n(),t(1679,"th",16),e(1680,"Tipo"),n(),t(1681,"th",16),e(1682,"Descri\xE7\xE3o"),n()(),t(1683,"tr",17)(1684,"td",18),e(1685," item"),n(),t(1686,"td",21)(1687,"code",35),e(1688," number "),n(),t(1689,"code",43),e(1690," { key: value } "),n()(),t(1691,"td",24)(1692,"p"),e(1693,"\xCDndice da linha ou o item que ser\xE1 atualizado."),n()()(),t(1694,"tr",17)(1695,"td",18),e(1696," updatedItem"),n(),t(1697,"td",21)(1698,"code",43),e(1699," { key: value } "),n()(),t(1700,"td",24)(1701,"p"),e(1702,"Item que foi atualizado."),n(),t(1703,"blockquote")(1704,"p"),e(1705,"Ao atualizar o item, a informa\xE7\xE3o ser\xE1 alterada na tabela."),n()()()()(),i(1706,"br"),t(1707,"h3"),e(1708,"Interfaces"),n(),t(1709,"h4",45)(1710,"code",5),e(1711,"PoTableAction"),n()(),t(1712,"div",2)(1713,"p"),e(1714,"Interface para lista de a\xE7\xF5es do componente. "),n()(),t(1715,"h4",13),e(1716,"Propriedades"),n(),t(1717,"table",14)(1718,"tr",15)(1719,"th",16),e(1720,"Nome"),n(),t(1721,"th",16),e(1722,"Tipo"),n(),t(1723,"th",16),e(1724,"Descri\xE7\xE3o"),n()(),t(1725,"tr",17)(1726,"td",18)(1727,"div",19)(1728,"span",20),e(1729," action"),i(1730,"br"),n()()(),t(1731,"td",21)(1732,"code",46),e(1733,"Function"),n()(),t(1734,"td",24)(1735,"em")(1736,"strong"),e(1737,"(opcional)"),n()(),t(1738,"p"),e(1739,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),n(),t(1740,"blockquote")(1741,"p"),e(1742,"Para que a fun\xE7\xE3o seja executada no contexto do elemento filho o mesmo deve ser passado utilizando "),t(1743,"em"),e(1744,"bind"),n(),e(1745,"."),n()(),t(1746,"p"),e(1747,"Exemplo: "),t(1748,"code"),e(1749,"action: this.myFunction.bind(this)"),n()()()(),t(1750,"tr",17)(1751,"td",18)(1752,"div",19)(1753,"span",20),e(1754," disabled"),i(1755,"br"),n()()(),t(1756,"td",21)(1757,"code",22),e(1758,"boolean "),n(),t(1759,"code",46),e(1760," Function"),n()(),t(1761,"td",24)(1762,"em")(1763,"strong"),e(1764,"(opcional)"),n()(),t(1765,"p"),e(1766,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar a a\xE7\xE3o para o registro selecionado."),n(),t(1767,"p"),e(1768,"Tamb\xE9m \xE9 poss\xEDvel informar diretamente um valor booleano que vai habilitar ou desabilitar a a\xE7\xE3o para todos os registros."),n()()(),t(1769,"tr",17)(1770,"td",18)(1771,"div",19)(1772,"span",20),e(1773," icon"),i(1774,"br"),n()()(),t(1775,"td",21)(1776,"code",31),e(1777,"string "),n(),t(1778,"code",47),e(1779," TemplateRef<void>"),n()(),t(1780,"td",24)(1781,"em")(1782,"strong"),e(1783,"(opcional)"),n()(),t(1784,"p"),e(1785,"Define um \xEDcone que ser\xE1 exibido ao lado esquerdo do r\xF3tulo."),n(),t(1786,"p"),e(1787,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),t(1788,"a",26),e(1789,"Biblioteca de \xEDcones"),n(),e(1790,". conforme exemplo abaixo:"),n(),t(1791,"pre")(1792,"code"),e(1793,`<po-component
 [p-property]="[{ label: 'PHOSPHOR ICON', icon: 'an an-newspaper' }]">
</po-component>
`),n()(),t(1794,"p"),e(1795,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),n(),t(1796,"pre")(1797,"code"),e(1798,`<po-component
 [p-property]="[{ label: 'FA ICON', icon: 'fa fa-icon-podcast' }]">
</po-component>
`),n()(),t(1799,"p"),e(1800,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),t(1801,"code"),e(1802,"TemplateRef"),n(),e(1803,`, conforme exemplo abaixo:
component.html:`),n(),t(1804,"pre")(1805,"code"),e(1806,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-component [p-property]="myProperty"></po-component>
`),n()(),t(1807,"p"),e(1808,"component.ts:"),n(),t(1809,"pre")(1810,"code"),e(1811,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   label: 'FA ICON',
   icon: this.iconTemplate
 }
];
`),n()()()(),t(1812,"tr",17)(1813,"td",18)(1814,"div",19)(1815,"span",20),e(1816," label"),i(1817,"br"),n()()(),t(1818,"td",21)(1819,"code",31),e(1820,"string"),n()(),t(1821,"td",24)(1822,"p"),e(1823,"R\xF3tulo da a\xE7\xE3o."),n()()(),t(1824,"tr",17)(1825,"td",18)(1826,"div",19)(1827,"span",20),e(1828," selected"),i(1829,"br"),n()()(),t(1830,"td",21)(1831,"code",22),e(1832,"boolean"),n()(),t(1833,"td",24)(1834,"em")(1835,"strong"),e(1836,"(opcional)"),n()(),t(1837,"p"),e(1838,"Define se a a\xE7\xE3o est\xE1 selecionada."),n()()(),t(1839,"tr",17)(1840,"td",18)(1841,"div",19)(1842,"span",20),e(1843," separator"),i(1844,"br"),n()()(),t(1845,"td",21)(1846,"code",22),e(1847,"boolean"),n()(),t(1848,"td",24)(1849,"em")(1850,"strong"),e(1851,"(opcional)"),n()(),t(1852,"p"),e(1853,"Atribui uma linha separadora acima do item."),n()()(),t(1854,"tr",17)(1855,"td",18)(1856,"div",19)(1857,"span",20),e(1858," type"),i(1859,"br"),n()()(),t(1860,"td",21)(1861,"code",31),e(1862,"string"),n()(),t(1863,"td",24)(1864,"em")(1865,"strong"),e(1866,"(opcional)"),n()(),t(1867,"p"),e(1868,"Define a cor do item, sendo "),t(1869,"code"),e(1870,"default"),n(),e(1871," o padr\xE3o."),n(),t(1872,"p"),e(1873,"Valores v\xE1lidos:"),n(),t(1874,"ul")(1875,"li")(1876,"code"),e(1877,"default"),n()(),t(1878,"li")(1879,"code"),e(1880,"danger"),n(),e(1881," - indicado para a\xE7\xF5es exclusivas (excluir, sair)."),n()()()(),t(1882,"tr",17)(1883,"td",18)(1884,"div",19)(1885,"span",20),e(1886," url"),i(1887,"br"),n()()(),t(1888,"td",21)(1889,"code",31),e(1890,"string"),n()(),t(1891,"td",24)(1892,"em")(1893,"strong"),e(1894,"(opcional)"),n()(),t(1895,"p"),e(1896,"URL utilizada no redirecionamento das p\xE1ginas."),n()()(),t(1897,"tr",17)(1898,"td",18)(1899,"div",19)(1900,"span",20),e(1901," visible"),i(1902,"br"),n()()(),t(1903,"td",21)(1904,"code",22),e(1905,"boolean "),n(),t(1906,"code",46),e(1907," Function"),n()(),t(1908,"td",24)(1909,"em")(1910,"strong"),e(1911,"(opcional)"),n()(),t(1912,"p"),e(1913,"Define se a a\xE7\xE3o ser\xE1 vis\xEDvel."),n(),t(1914,"blockquote")(1915,"p"),e(1916,"Caso o valor n\xE3o seja especificado a a\xE7\xE3o ser\xE1 vis\xEDvel."),n()(),t(1917,"p"),e(1918,"Op\xE7\xF5es para tornar a a\xE7\xE3o vis\xEDvel ou n\xE3o:"),n(),t(1919,"ul")(1920,"li")(1921,"p"),e(1922,"Fun\xE7\xE3o que deve retornar um booleano."),n()(),t(1923,"li")(1924,"p"),e(1925,"Informar diretamente um valor booleano."),n()()()()()(),t(1926,"h4",45)(1927,"code",5),e(1928,"PoTableBoolean"),n()(),t(1929,"div",2)(1930,"p"),e(1931,"Interface que define as colunas booleanas do "),t(1932,"code"),e(1933,"po-table"),n(),e(1934,"."),n()(),t(1935,"h4",13),e(1936,"Propriedades"),n(),t(1937,"table",14)(1938,"tr",15)(1939,"th",16),e(1940,"Nome"),n(),t(1941,"th",16),e(1942,"Tipo"),n(),t(1943,"th",16),e(1944,"Descri\xE7\xE3o"),n()(),t(1945,"tr",17)(1946,"td",18)(1947,"div",19)(1948,"span",20),e(1949," falseLabel"),i(1950,"br"),n()()(),t(1951,"td",21)(1952,"code",31),e(1953,"string"),n()(),t(1954,"td",24)(1955,"em")(1956,"strong"),e(1957,"(opcional)"),n()(),t(1958,"p"),e(1959,"Define o r\xF3tulo para valores "),t(1960,"code"),e(1961,"false"),n(),e(1962,"."),n()()(),t(1963,"tr",17)(1964,"td",18)(1965,"div",19)(1966,"span",20),e(1967," trueLabel"),i(1968,"br"),n()()(),t(1969,"td",21)(1970,"code",31),e(1971,"string"),n()(),t(1972,"td",24)(1973,"em")(1974,"strong"),e(1975,"(opcional)"),n()(),t(1976,"p"),e(1977,"Define o r\xF3tulo para valores "),t(1978,"code"),e(1979,"true"),n(),e(1980,"."),n()()()(),t(1981,"h4",45)(1982,"code",5),e(1983,"PoTableColumnSort"),n()(),t(1984,"div",2)(1985,"p"),e(1986,"Interface para ordena\xE7\xE3o das colunas do componente table."),n()(),t(1987,"h4",13),e(1988,"Propriedades"),n(),t(1989,"table",14)(1990,"tr",15)(1991,"th",16),e(1992,"Nome"),n(),t(1993,"th",16),e(1994,"Tipo"),n(),t(1995,"th",16),e(1996,"Descri\xE7\xE3o"),n()(),t(1997,"tr",17)(1998,"td",18)(1999,"div",19)(2e3,"span",20),e(2001," column"),i(2002,"br"),n()()(),t(2003,"td",21)(2004,"code",48),e(2005,"PoTableColumn"),n()(),t(2006,"td",24)(2007,"em")(2008,"strong"),e(2009,"(opcional)"),n()(),t(2010,"p"),e(2011,"Coluna pela qual a tabela est\xE1 ordenada."),n()()(),t(2012,"tr",17)(2013,"td",18)(2014,"div",19)(2015,"span",20),e(2016," type"),i(2017,"br"),n()()(),t(2018,"td",21)(2019,"code",49),e(2020,"PoTableColumnSortType"),n()(),t(2021,"td",24)(2022,"p"),e(2023,"Tipo da ordena\xE7\xE3o."),n()()()(),t(2024,"h4",45)(2025,"code",5),e(2026,"PoTableColumn"),n()(),t(2027,"div",2)(2028,"p"),e(2029,"Interface para configura\xE7\xE3o das colunas do "),t(2030,"code"),e(2031,"po-table"),n(),e(2032,"."),n(),t(2033,"p"),e(2034,"As defini\xE7\xF5es das colunas ser\xE3o aplicadas linha a linha."),n()(),t(2035,"h4",13),e(2036,"Propriedades"),n(),t(2037,"table",14)(2038,"tr",15)(2039,"th",16),e(2040,"Nome"),n(),t(2041,"th",16),e(2042,"Tipo"),n(),t(2043,"th",16),e(2044,"Descri\xE7\xE3o"),n()(),t(2045,"tr",17)(2046,"td",18)(2047,"div",19)(2048,"span",20),e(2049," action"),i(2050,"br"),n()()(),t(2051,"td",21)(2052,"code",46),e(2053,"Function"),n()(),t(2054,"td",24)(2055,"em")(2056,"strong"),e(2057,"(opcional)"),n()(),t(2058,"p"),e(2059,"Define uma a\xE7\xE3o na coluna quando o tipo da coluna for "),t(2060,"code"),e(2061,"link"),n(),e(2062," ou "),t(2063,"code"),e(2064,"icon"),n(),e(2065,"."),n(),t(2066,"blockquote")(2067,"p"),e(2068,"Quando for do tipo "),t(2069,"code"),e(2070,"link"),n(),e(2071,` ser\xE1 enviado como primeiro par\xE2metro o valor da coluna
e no segundo par\xE2metro o objeto completo da linha. Caso tenha sido definido uma a\xE7\xE3o e um link na coluna, a a\xE7\xE3o
ser\xE1 executada ao inv\xE9s do link.`),n()(),t(2072,"blockquote")(2073,"p"),e(2074,"Quando for do tipo "),t(2075,"code"),e(2076,"icon"),n(),e(2077," enviar\xE1 o objeto completo da linha e o segundo par\xE2metro ser\xE1 a defini\xE7\xE3o da coluna."),n()()()(),t(2078,"tr",17)(2079,"td",18)(2080,"div",19)(2081,"span",20),e(2082," boolean"),i(2083,"br"),n()()(),t(2084,"td",21)(2085,"code",50),e(2086,"PoTableBoolean"),n()(),t(2087,"td",24)(2088,"em")(2089,"strong"),e(2090,"(opcional)"),n()(),t(2091,"p"),e(2092,"Define um objeto do tipo "),t(2093,"code"),e(2094,"PoTableBoolean"),n(),e(2095," para as colunas do tipo "),t(2096,"em"),e(2097,"boolean"),n(),e(2098,". Por exemplo:"),n(),t(2099,"pre")(2100,"code"),e(2101,`{ property: 'approbation', type: 'boolean', boolean: {
  trueLabel: 'Accepted', falseLabel: 'Rejected'
}}
`),n()(),t(2102,"blockquote")(2103,"p"),e(2104,"Caso n\xE3o seja definido um objeto para colunas do tipo "),t(2105,"em"),e(2106,"boolean"),n(),e(2107,`,
esta exibir\xE1 por padr\xE3o `),t(2108,"code"),e(2109,"Sim"),n(),e(2110," e "),t(2111,"code"),e(2112,"N\xE3o"),n(),e(2113," de acordo com os valores "),t(2114,"em"),e(2115,"booleanos"),n(),e(2116,"."),n()()()(),t(2117,"tr",17)(2118,"td",18)(2119,"div",19)(2120,"span",20),e(2121," color"),i(2122,"br"),n()()(),t(2123,"td",21)(2124,"code",31),e(2125,"string "),n(),t(2126,"code",46),e(2127," Function"),n()(),t(2128,"td",24)(2129,"em")(2130,"strong"),e(2131,"(opcional)"),n()(),t(2132,"p"),e(2133,"Define a cor que ser\xE1 aplicada no conte\xFAdo da coluna."),n(),t(2134,"p"),e(2135,"Valores v\xE1lidos:"),n(),t(2136,"ul")(2137,"li"),i(2138,"span",51),t(2139,"code"),e(2140,"color-01"),n()(),t(2141,"li"),i(2142,"span",52),t(2143,"code"),e(2144,"color-02"),n()(),t(2145,"li"),i(2146,"span",53),t(2147,"code"),e(2148,"color-03"),n()(),t(2149,"li"),i(2150,"span",54),t(2151,"code"),e(2152,"color-04"),n()(),t(2153,"li"),i(2154,"span",55),t(2155,"code"),e(2156,"color-05"),n()(),t(2157,"li"),i(2158,"span",56),t(2159,"code"),e(2160,"color-06"),n()(),t(2161,"li"),i(2162,"span",57),t(2163,"code"),e(2164,"color-07"),n()(),t(2165,"li"),i(2166,"span",58),t(2167,"code"),e(2168,"color-08"),n()(),t(2169,"li"),i(2170,"span",59),t(2171,"code"),e(2172,"color-09"),n()(),t(2173,"li"),i(2174,"span",60),t(2175,"code"),e(2176,"color-10"),n()(),t(2177,"li"),i(2178,"span",61),t(2179,"code"),e(2180,"color-11"),n()(),t(2181,"li"),i(2182,"span",62),t(2183,"code"),e(2184,"color-12"),n()()(),t(2185,"blockquote")(2186,"p"),e(2187,`Existe a possibilidade de informar uma fun\xE7\xE3o que retorne um dos valores aceitos, ser\xE3o passados
por par\xE2metro a linha e a coluna atual, por exemplo:`),n()(),t(2188,"pre")(2189,"code"),e(2190,`(row, column) => { row[column] == 'text' ? 'color-03' : 'color-09' }
`),n()(),t(2191,"blockquote")(2192,"p"),e(2193,"\xC9 poss\xEDvel tamb\xE9m us\xE1-la na coluna do tipo "),t(2194,"code"),e(2195,"icons"),n(),e(2196,` para altera\xE7\xE3o das cores de seu conte\xFAdo conforme exemplo abaixo,
contudo, desta forma sobrep\xF5e a cor especificada em cada objeto caso haja:`),n()(),t(2197,"pre")(2198,"code"),e(2199,`{ property: 'columnIcon', label: 'Like', type: 'icon', color: 'color-08', icons: [
  { value: 'an an-star', action: () => this.notification() }
]},
`),n()()()(),t(2200,"tr",17)(2201,"td",18)(2202,"div",19)(2203,"span",20),e(2204," detail"),i(2205,"br"),n()()(),t(2206,"td",21)(2207,"code",63),e(2208,"PoTableDetail"),n()(),t(2209,"td",24)(2210,"em")(2211,"strong"),e(2212,"(opcional)"),n()(),t(2213,"p"),e(2214,"Define um objeto que segue a interface "),t(2215,"code"),e(2216,"PoTableDetail"),n(),e(2217,", para as colunas de detalhes. Por exemplo:"),n(),t(2218,"pre")(2219,"code"),e(2220,`{ columns: [{ property: 'package', label: 'Pacote' }], typeHeader: 'top' }
`),n()()()(),t(2221,"tr",17)(2222,"td",18)(2223,"div",19)(2224,"span",20),e(2225," disabled"),i(2226,"br"),n()()(),t(2227,"td",21)(2228,"code",46),e(2229,"Function"),n()(),t(2230,"td",24)(2231,"em")(2232,"strong"),e(2233,"(opcional)"),n()(),t(2234,"p"),e(2235,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar o "),t(2236,"em"),e(2237,"link"),n(),e(2238," e sua a\xE7\xE3o."),n(),t(2239,"blockquote")(2240,"p"),e(2241,"Propriedade dispon\xEDvel nas colunas do tipo "),t(2242,"code"),e(2243,"link"),n(),e(2244,"."),n()()()(),t(2245,"tr",17)(2246,"td",18)(2247,"div",19)(2248,"span",20),e(2249," format"),i(2250,"br"),n()()(),t(2251,"td",21)(2252,"code",31),e(2253,"string"),n()(),t(2254,"td",24)(2255,"em")(2256,"strong"),e(2257,"(opcional)"),n()(),t(2258,"p"),e(2259,"Formato de exibi\xE7\xE3o do valor da coluna:"),n(),t(2260,"ul")(2261,"li"),e(2262,"Formato para moeda (currency). Exemplos: 'BRL', 'USD'."),n(),t(2263,"li"),e(2264,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
caso n\xE3o seja informado um formato o mesmo ser\xE1 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),n(),t(2265,"li"),e(2266,`Formato para hor\xE1rio (time): aceita apenas os caracteres de hora(HH), minutos(mm), segundos(ss) e milisegundos(f-ffffff), os milisegundos s\xE3o opcionais, caso n\xE3o seja informado um formato o mesmo ser\xE1
'HH:mm:ss'. Exemplos: 'HH:mm', 'HH:mm:ss.ffffff', 'HH:mm:ss.ff', 'mm:ss.fff'.`),n(),t(2267,"li"),e(2268,"Formato para n\xFAmeros (number): aceita um valor seguindo o padr\xE3o "),t(2269,"a",64)(2270,"strong"),e(2271,"DecimalPipe"),n()(),e(2272," para formata\xE7\xE3o, e caso n\xE3o seja informado, o n\xFAmero ser\xE1 exibido na sua forma original. Exemplo:"),n()(),t(2273,"ul")(2274,"li"),e(2275,"Com o valor de entrada: "),t(2276,"code"),e(2277,"50"),n(),e(2278," e a valor para formata\xE7\xE3o: "),t(2279,"code"),e(2280,"'1.2-5'"),n(),e(2281," o resultado ser\xE1: "),t(2282,"code"),e(2283,"50.00"),n()()()()(),t(2284,"tr",17)(2285,"td",18)(2286,"div",19)(2287,"span",20),e(2288," icons"),i(2289,"br"),n()()(),t(2290,"td",21)(2291,"code",65),e(2292,"Array<PoTableColumnIcon>"),n()(),t(2293,"td",24)(2294,"em")(2295,"strong"),e(2296,"(opcional)"),n()(),t(2297,"p"),e(2298,"Define um "),t(2299,"em"),e(2300,"array"),n(),e(2301," de objetos para colunas de \xEDcones que ir\xE1 sobrepor os valores como "),t(2302,"code"),e(2303,"action"),n(),e(2304," e "),t(2305,"code"),e(2306,"color"),n(),e(2307,`
definidos na coluna, \xE0 partir do `),t(2308,"em"),e(2309,"value"),n(),e(2310," da "),t(2311,"a",66)(2312,"code"),e(2313,"PoTableColumnIcon"),n()(),e(2314,", por exemplo:"),n(),t(2315,"pre")(2316,"code"),e(2317,`{ property: 'columnIcon', label: 'Icons', type: 'icon', action: this.favorite.bind(this), icons: [
  { value: 'delete', icon: 'an an-plus', color: 'color-06', action: this.add.bind(this), tooltip: 'Adiciona um novo item' },
  { value: 'edit', icon: 'an an-pencil-simple', action: this.edit.bind(this) },
  { value: 'delete', icon: 'an an-trash', color: 'color-12', action: this.remove.bind(this) }
]},
`),n()(),t(2318,"pre")(2319,"code"),e(2320,`...
{ id: 1, columnIcon: ['an an-pencil-simple', 'an an-trash', 'an an-star'] }
...
`),n()()()(),t(2321,"tr",17)(2322,"td",18)(2323,"div",19)(2324,"span",20),e(2325," label"),i(2326,"br"),n()()(),t(2327,"td",21)(2328,"code",31),e(2329,"string"),n()(),t(2330,"td",24)(2331,"em")(2332,"strong"),e(2333,"(opcional)"),n()(),t(2334,"p"),e(2335,"Texto para t\xEDtulo da coluna."),n(),t(2336,"p"),e(2337,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),t(2338,"em"),e(2339,"label"),n(),e(2340," o valor da propriedade "),t(2341,"em"),e(2342,"property"),n(),e(2343," com a primeira letra em mai\xFAsculo."),n()()(),t(2344,"tr",17)(2345,"td",18)(2346,"div",19)(2347,"span",20),e(2348," labels"),i(2349,"br"),n()()(),t(2350,"td",21)(2351,"code",67),e(2352,"Array<PoTableColumnLabel>"),n()(),t(2353,"td",24)(2354,"em")(2355,"strong"),e(2356,"(opcional)"),n()(),t(2357,"p"),e(2358,`Define um array de objetos para as colunas de label, onde 'labels' \xE9 uma lista de objetos
do tipo `),t(2359,"code"),e(2360,"PoTableColumnLabel"),n(),e(2361," na qual devem ser definidas os labels. Por exemplo:"),n(),t(2362,"pre")(2363,"code"),e(2364,`{ property: 'flightStatus', label: 'Status', type: 'label', width:'100px', labels: [
 { value: 'confirmed', color: 'color-11', label: 'Confirmado', tooltip: 'Flight Status' },
 { value: 'delayed', color: 'color-08', label: 'Atrasado', tooltip: 'Flight Status' }
}
`),n()()()(),t(2365,"tr",17)(2366,"td",18)(2367,"div",19)(2368,"span",20),e(2369," link"),i(2370,"br"),n()()(),t(2371,"td",21)(2372,"code",31),e(2373,"string"),n()(),t(2374,"td",24)(2375,"em")(2376,"strong"),e(2377,"(opcional)"),n()(),t(2378,"p"),e(2379,"Define o nome da propriedade que conter\xE1 o "),t(2380,"code"),e(2381,"link"),n(),e(2382," a ser redirecionado."),n()()(),t(2383,"tr",17)(2384,"td",18)(2385,"div",19)(2386,"span",20),e(2387," property"),i(2388,"br"),n()()(),t(2389,"td",21)(2390,"code",31),e(2391,"string"),n()(),t(2392,"td",24)(2393,"em")(2394,"strong"),e(2395,"(opcional)"),n()(),t(2396,"p"),e(2397,"Nome identificador da coluna. Tamb\xE9m permite objetos aninhados conforme exemplo abaixo."),n(),t(2398,"pre")(2399,"code"),e(2400,`{ property: 'address.street', label: 'Rua' }
`),n()()()(),t(2401,"tr",17)(2402,"td",18)(2403,"div",19)(2404,"span",20),e(2405," sortable"),i(2406,"br"),n()()(),t(2407,"td",21)(2408,"code",22),e(2409,"boolean"),n()(),t(2410,"td",24)(2411,"em")(2412,"strong"),e(2413,"(opcional)"),n()(),t(2414,"p"),e(2415,`Controla se a coluna ser\xE1 considerada como "ordenavel". Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 usada para
ordena\xE7\xE3o.`),n()()(),t(2416,"tr",17)(2417,"td",18)(2418,"div",19)(2419,"span",20),e(2420," subtitles"),i(2421,"br"),n()()(),t(2422,"td",21)(2423,"code",68),e(2424,"Array<PoTableSubtitleColumn>"),n()(),t(2425,"td",24)(2426,"em")(2427,"strong"),e(2428,"(opcional)"),n()(),t(2429,"p"),e(2430,"Define um array de objetos para as colunas de legenda. Onde, "),t(2431,"code"),e(2432,"subtitles"),n(),e(2433,` \xE9 uma lista de objetos do tipo PoTableSubtitle na qual
devem ser definidas as op\xE7\xF5es de legenda. Por exemplo:`),n(),t(2434,"pre")(2435,"code"),e(2436,`{ property: 'flightStatus', label: 'Status', color: 'subtitle', width:'100px', subtitles: [
 { value: 'confirmed', color: 'color-11', label: 'Confirmado', content: '1' },
 { value: 'delayed', color: 'color-08', label: 'Atrasado', content: '2' }
}
`),n()(),t(2437,"p"),e(2438,`Nesse exemplo a coluna escolhida para legenda \xE9 'flightStatus', se o valor dessa coluna for 'confirmed', o texto da legenda ser\xE1
'Confirmado'.`),n()()(),t(2439,"tr",17)(2440,"td",18)(2441,"div",19)(2442,"span",20),e(2443," tooltip"),i(2444,"br"),n()()(),t(2445,"td",21)(2446,"code",31),e(2447,"string"),n()(),t(2448,"td",24)(2449,"em")(2450,"strong"),e(2451,"(opcional)"),n()(),t(2452,"p"),e(2453,"Define um texto de ajuda que ser\xE1 exibido ao passar o "),t(2454,"em"),e(2455,"mouse"),n(),e(2456," sobre um texto."),n(),t(2457,"blockquote")(2458,"p"),e(2459,"O tooltip s\xF3 ser\xE1 vis\xEDvel se for uma coluna do tipo "),t(2460,"em"),e(2461,"link"),n(),e(2462,"."),n()(),t(2463,"blockquote")(2464,"p"),e(2465,`Caso o conte\xFAdo da c\xE9lula exceder a largura da coluna,
\xE9 ignorado o valor atribu\xEDdo ao `),t(2466,"em"),e(2467,"tooltip"),n(),e(2468," e ser\xE1 exibido justamente o conte\xFAdo da c\xE9lula."),n()()()(),t(2469,"tr",17)(2470,"td",18)(2471,"div",19)(2472,"span",20),e(2473," type"),i(2474,"br"),n()()(),t(2475,"td",21)(2476,"code",31),e(2477,"string"),n()(),t(2478,"td",24)(2479,"em")(2480,"strong"),e(2481,"(opcional)"),n()(),t(2482,"p"),e(2483,"Tipo da coluna."),n(),t(2484,"p"),e(2485,"Valores v\xE1lidos:"),n(),t(2486,"ul")(2487,"li")(2488,"p")(2489,"code"),e(2490,"boolean"),n(),e(2491,": Exibir\xE1 por padr\xE3o "),t(2492,"code"),e(2493,"Sim"),n(),e(2494," e "),t(2495,"code"),e(2496,"N\xE3o"),n(),e(2497," de acordo com os valores "),t(2498,"em"),e(2499,"booleanos"),n(),e(2500,"."),n(),t(2501,"blockquote")(2502,"p"),e(2503,"Caso necessite exibir valores diferentes do padr\xE3o, deve-se utilizar a propriedade "),t(2504,"code"),e(2505,"boolean"),n(),e(2506," desta interface."),n()()(),t(2507,"li")(2508,"p")(2509,"code"),e(2510,"currency"),n(),e(2511,": valores monet\xE1rios."),n()(),t(2512,"li")(2513,"p")(2514,"code"),e(2515,"date"),n(),e(2516,": valor de datas."),n()()(),t(2517,"ul")(2518,"li"),e(2519,"Aceita os tipos "),t(2520,"em"),e(2521,"string"),n(),e(2522," e "),t(2523,"em"),e(2524,"Date"),n(),e(2525," padr\xE3o do Javascript, por exemplo: "),t(2526,"code"),e(2527,"'2017-11-28'"),n(),e(2528," ou "),t(2529,"code"),e(2530,"new Date(2017, 10, 28)"),n(),e(2531,"."),n()(),t(2532,"ul")(2533,"li")(2534,"code"),e(2535,"dateTime"),n(),e(2536,": valor de data com hor\xE1rio."),n()(),t(2537,"ul")(2538,"li"),e(2539,"Aceita o tipo "),t(2540,"em"),e(2541,"string"),n(),e(2542," no formato "),t(2543,"strong"),e(2544,"ISO-8601"),n(),e(2545," extendido "),t(2546,"strong"),e(2547,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),n(),e(2548,`
e o tipo `),t(2549,"em"),e(2550,"Date"),n(),e(2551," padr\xE3o do Javascript, por exemplo: "),t(2552,"code"),e(2553,"'2017-11-28T00:00:00-02:00'"),n(),e(2554," ou "),t(2555,"code"),e(2556,"new Date(2017, 10, 28)"),n(),e(2557,"."),n()(),t(2558,"ul")(2559,"li")(2560,"code"),e(2561,"detail"),n(),e(2562,": array de objetos para o master-detail."),n()(),t(2563,"ul")(2564,"li"),e(2565,"Incompat\xEDvel com "),t(2566,"code"),e(2567,"virtual-scroll"),n(),e(2568,", que requer altura fixa nas linhas."),n()(),t(2569,"ul")(2570,"li")(2571,"p")(2572,"code"),e(2573,"icon"),n(),e(2574,": "),t(2575,"em"),e(2576,"array"),n(),e(2577," de "),t(2578,"em"),e(2579,"string"),n(),e(2580," ou objetos para a coluna de \xEDcones."),n()(),t(2581,"li")(2582,"p")(2583,"code"),e(2584,"label"),n(),e(2585,": texto com destaque."),n()(),t(2586,"li")(2587,"p")(2588,"code"),e(2589,"link"),n(),e(2590,": habilita link na coluna para a\xE7\xE3o ou navega\xE7\xE3o."),n()(),t(2591,"li")(2592,"p")(2593,"code"),e(2594,"number"),n(),e(2595,": valores num\xE9ricos."),n()(),t(2596,"li")(2597,"p")(2598,"code"),e(2599,"string"),n(),e(2600,": textos."),n()(),t(2601,"li")(2602,"p")(2603,"code"),e(2604,"subtitle"),n(),e(2605,": array de objetos para a coluna de legenda."),n()(),t(2606,"li")(2607,"p")(2608,"code"),e(2609,"time"),n(),e(2610,": valor de hor\xE1rio."),n()()(),t(2611,"ul")(2612,"li"),e(2613,"Aceita o tipo "),t(2614,"em"),e(2615,"string"),n(),e(2616," nos formatos "),t(2617,"strong"),e(2618,"'HH:mm:ss'"),n(),e(2619," ou "),t(2620,"strong"),e(2621,"'HH:mm:ss.ffffff'"),n(),e(2622,", por exemplo: "),t(2623,"code"),e(2624,"'23:12:45'"),n(),e(2625,"."),n()(),t(2626,"ul")(2627,"li")(2628,"code"),e(2629,"cellTemplate"),n(),e(2630,`: Indica que a coluna ser\xE1 utilizada como template, em conjunto com o
`),t(2631,"a",8),e(2632,"PoTableCellTemplate"),n(),e(2633,"."),n(),t(2634,"li")(2635,"code"),e(2636,"columnTemplate"),n(),e(2637,`: Indica que a coluna ser\xE1 utilizada como template, em conjunto com o
`),t(2638,"a",7),e(2639,"PoTableColumnTemplate"),n(),e(2640,"."),n()()()(),t(2641,"tr",17)(2642,"td",18)(2643,"div",19)(2644,"span",20),e(2645," visible"),i(2646,"br"),n()()(),t(2647,"td",21)(2648,"code",22),e(2649,"boolean"),n()(),t(2650,"td",24)(2651,"em")(2652,"strong"),e(2653,"(opcional)"),n()(),t(2654,"p"),e(2655,`Controla a exibi\xE7\xE3o da coluna. Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 exibida mas mas ser\xE1 poss\xEDvel torn\xE1-la
vis\xEDvel atrav\xE9s do `),t(2656,"strong"),e(2657,"gerenciador de colunas"),n(),e(2658,"."),n(),t(2659,"blockquote")(2660,"p"),e(2661,"A disponibilidade de visualiza\xE7\xE3o pode limitar-se de acordo com a defini\xE7\xE3o de "),t(2662,"code"),e(2663,"p-max-columns"),n(),e(2664,"."),n()()()(),t(2665,"tr",17)(2666,"td",18)(2667,"div",19)(2668,"span",20),e(2669," width"),i(2670,"br"),n()()(),t(2671,"td",21)(2672,"code",31),e(2673,"string"),n()(),t(2674,"td",24)(2675,"em")(2676,"strong"),e(2677,"(opcional)"),n()(),t(2678,"p"),e(2679,`hoje o tamanho m\xEDnimo das colunas \xE9 de 32px, respeitando o padding lateral.
Boas Pr\xE1ticas:
Indicamos:`),n(),t(2680,"ul")(2681,"li"),e(2682,"para colunas com 2 das propriedades (property, [p-draggable] e [p-sort]) : 96px"),n(),t(2683,"li"),e(2684,"para colunas com 3 propriedades (property, [p-draggable] e [p-sort]) : 144px"),n()()()()(),t(2685,"h4",45)(2686,"code",5),e(2687,"PoTableLiterals"),n()(),t(2688,"div",2)(2689,"p"),e(2690,"Interface para defini\xE7\xE3o das literais usadas no "),t(2691,"code"),e(2692,"po-table"),n(),e(2693,"."),n()(),t(2694,"h4",13),e(2695,"Propriedades"),n(),t(2696,"table",14)(2697,"tr",15)(2698,"th",16),e(2699,"Nome"),n(),t(2700,"th",16),e(2701,"Tipo"),n(),t(2702,"th",16),e(2703,"Descri\xE7\xE3o"),n()(),t(2704,"tr",17)(2705,"td",18)(2706,"div",19)(2707,"span",20),e(2708," bodyDelete"),i(2709,"br"),n()()(),t(2710,"td",21)(2711,"code",31),e(2712,"string"),n()(),t(2713,"td",24)(2714,"em")(2715,"strong"),e(2716,"(opcional)"),n()(),t(2717,"p"),e(2718,"Texto no corpo do Modal de exclus\xE3o"),n()()(),t(2719,"tr",17)(2720,"td",18)(2721,"div",19)(2722,"span",20),e(2723," cancel"),i(2724,"br"),n()()(),t(2725,"td",21)(2726,"code",31),e(2727,"string"),n()(),t(2728,"td",24)(2729,"em")(2730,"strong"),e(2731,"(opcional)"),n()(),t(2732,"p"),e(2733,"Texto no Modal para cancelar a exclus\xE3o"),n()()(),t(2734,"tr",17)(2735,"td",18)(2736,"div",19)(2737,"span",20),e(2738," columnsManager"),i(2739,"br"),n()()(),t(2740,"td",21)(2741,"code",31),e(2742,"string"),n()(),t(2743,"td",24)(2744,"em")(2745,"strong"),e(2746,"(opcional)"),n()(),t(2747,"p"),e(2748,"Texto do "),t(2749,"strong"),e(2750,"Gerenciador de colunas"),n(),e(2751," localizado no canto superior direito da tabela."),n()()(),t(2752,"tr",17)(2753,"td",18)(2754,"div",19)(2755,"span",20),e(2756," completeSubtitle"),i(2757,"br"),n()()(),t(2758,"td",21)(2759,"code",31),e(2760,"string"),n()(),t(2761,"td",24)(2762,"em")(2763,"strong"),e(2764,"(opcional)"),n()(),t(2765,"p"),e(2766,"T\xEDtulo da modal 'Legenda completa' que aparece ao clicar no bot\xE3o 'Ver legenda completa'."),n()()(),t(2767,"tr",17)(2768,"td",18)(2769,"div",19)(2770,"span",20),e(2771," delete"),i(2772,"br"),n()()(),t(2773,"td",21)(2774,"code",31),e(2775,"string"),n()(),t(2776,"td",24)(2777,"em")(2778,"strong"),e(2779,"(opcional)"),n()(),t(2780,"p"),e(2781,"Texto no Modal para confirmar a exclus\xE3o"),n()()(),t(2782,"tr",17)(2783,"td",18)(2784,"div",19)(2785,"span",20),e(2786," deleteApiError"),i(2787,"br"),n()()(),t(2788,"td",21)(2789,"code",31),e(2790,"string"),n()(),t(2791,"td",24)(2792,"em")(2793,"strong"),e(2794,"(opcional)"),n()(),t(2795,"p"),e(2796,"Texto de notifica\xE7\xE3o de erro na requisi\xE7\xE3o Delete"),n()()(),t(2797,"tr",17)(2798,"td",18)(2799,"div",19)(2800,"span",20),e(2801," deleteSuccessful"),i(2802,"br"),n()()(),t(2803,"td",21)(2804,"code",31),e(2805,"string"),n()(),t(2806,"td",24)(2807,"em")(2808,"strong"),e(2809,"(opcional)"),n()(),t(2810,"p"),e(2811,"Texto de notifica\xE7\xE3o de remo\xE7\xE3o com sucesso"),n()()(),t(2812,"tr",17)(2813,"td",18)(2814,"div",19)(2815,"span",20),e(2816," loadMoreData"),i(2817,"br"),n()()(),t(2818,"td",21)(2819,"code",31),e(2820,"string"),n()(),t(2821,"td",24)(2822,"em")(2823,"strong"),e(2824,"(opcional)"),n()(),t(2825,"p"),e(2826,"Texto do bot\xE3o de "),t(2827,"strong"),e(2828,"Carregar mais resultados"),n(),e(2829," localizado no rodap\xE9 da tabela."),n()()(),t(2830,"tr",17)(2831,"td",18)(2832,"div",19)(2833,"span",20),e(2834," loadingData"),i(2835,"br"),n()()(),t(2836,"td",21)(2837,"code",31),e(2838,"string"),n()(),t(2839,"td",24)(2840,"em")(2841,"strong"),e(2842,"(opcional)"),n()(),t(2843,"p"),e(2844,"Texto exibido enquanto uma requisi\xE7\xE3o est\xE1 sendo executada para carregar dados na tabela."),n()()(),t(2845,"tr",17)(2846,"td",18)(2847,"div",19)(2848,"span",20),e(2849," multipleItems"),i(2850,"br"),n()()(),t(2851,"td",21)(2852,"code",31),e(2853,"string"),n()(),t(2854,"td",24)(2855,"em")(2856,"strong"),e(2857,"(opcional)"),n()(),t(2858,"p"),e(2859,"Texto exibido quando apenas 1 item for selecionado no checkbox."),n()()(),t(2860,"tr",17)(2861,"td",18)(2862,"div",19)(2863,"span",20),e(2864," noColumns"),i(2865,"br"),n()()(),t(2866,"td",21)(2867,"code",31),e(2868,"string"),n()(),t(2869,"td",24)(2870,"em")(2871,"strong"),e(2872,"(opcional)"),n()(),t(2873,"p"),e(2874,"Texto exibido quando n\xE3o existem colunas definidas para a tabela."),n()()(),t(2875,"tr",17)(2876,"td",18)(2877,"div",19)(2878,"span",20),e(2879," noData"),i(2880,"br"),n()()(),t(2881,"td",21)(2882,"code",31),e(2883,"string"),n()(),t(2884,"td",24)(2885,"em")(2886,"strong"),e(2887,"(opcional)"),n()(),t(2888,"p"),e(2889,"Texto exibido quando n\xE3o existem itens para serem exibidos na tabela."),n()()(),t(2890,"tr",17)(2891,"td",18)(2892,"div",19)(2893,"span",20),e(2894," noItem"),i(2895,"br"),n()()(),t(2896,"td",21)(2897,"code",31),e(2898,"string"),n()(),t(2899,"td",24)(2900,"em")(2901,"strong"),e(2902,"(opcional)"),n()(),t(2903,"p"),e(2904,"Texto exibido quando nenhum item for selecionado no checkbox."),n()()(),t(2905,"tr",17)(2906,"td",18)(2907,"div",19)(2908,"span",20),e(2909," noVisibleColumn"),i(2910,"br"),n()()(),t(2911,"td",21)(2912,"code",31),e(2913,"string"),n()(),t(2914,"td",24)(2915,"em")(2916,"strong"),e(2917,"(opcional)"),n()(),t(2918,"p"),e(2919,"Texto exibido quando n\xE3o existem colunas vis\xEDveis para a tabela."),n()()(),t(2920,"tr",17)(2921,"td",18)(2922,"div",19)(2923,"span",20),e(2924," oneItem"),i(2925,"br"),n()()(),t(2926,"td",21)(2927,"code",31),e(2928,"string"),n()(),t(2929,"td",24)(2930,"em")(2931,"strong"),e(2932,"(opcional)"),n()(),t(2933,"p"),e(2934,"Texto exibido quando apenas 1 item for selecionado no checkbox."),n()()(),t(2935,"tr",17)(2936,"td",18)(2937,"div",19)(2938,"span",20),e(2939," seeCompleteSubtitle"),i(2940,"br"),n()()(),t(2941,"td",21)(2942,"code",31),e(2943,"string"),n()(),t(2944,"td",24)(2945,"em")(2946,"strong"),e(2947,"(opcional)"),n()(),t(2948,"p"),e(2949,"Texto do bot\xE3o "),t(2950,"strong"),e(2951,"Ver legenda completa"),n(),e(2952," que aparece quando o rodap\xE9 de legendas \xE9 maior que a tabela."),n()()()(),t(2953,"h4",45)(2954,"code",5),e(2955,"PoTableColumnIcon"),n()(),t(2956,"div",2)(2957,"p"),i(2958,"a",69),n(),t(2959,"p"),e(2960,"Interface que define a coluna com \xEDcone(s) do "),t(2961,"code"),e(2962,"po-table"),n(),e(2963,"."),n()(),t(2964,"h4",13),e(2965,"Propriedades"),n(),t(2966,"table",14)(2967,"tr",15)(2968,"th",16),e(2969,"Nome"),n(),t(2970,"th",16),e(2971,"Tipo"),n(),t(2972,"th",16),e(2973,"Descri\xE7\xE3o"),n()(),t(2974,"tr",17)(2975,"td",18)(2976,"div",19)(2977,"span",20),e(2978," action"),i(2979,"br"),n()()(),t(2980,"td",21)(2981,"code",46),e(2982,"Function"),n()(),t(2983,"td",24)(2984,"em")(2985,"strong"),e(2986,"(opcional)"),n()(),t(2987,"p"),e(2988,"Define a a\xE7\xE3o que ser\xE1 executada ao clicar no \xEDcone."),n()()(),t(2989,"tr",17)(2990,"td",18)(2991,"div",19)(2992,"span",20),e(2993," color"),i(2994,"br"),n()()(),t(2995,"td",21)(2996,"code",31),e(2997,"string "),n(),t(2998,"code",46),e(2999," Function"),n()(),t(3e3,"td",24)(3001,"em")(3002,"strong"),e(3003,"(opcional)"),n()(),t(3004,"p"),e(3005,"Define a cor do \xEDcone."),n(),t(3006,"p"),e(3007,"Valores v\xE1lidos:"),n(),t(3008,"ul")(3009,"li"),i(3010,"span",51),t(3011,"code"),e(3012,"color-01"),n()(),t(3013,"li"),i(3014,"span",52),t(3015,"code"),e(3016,"color-02"),n()(),t(3017,"li"),i(3018,"span",53),t(3019,"code"),e(3020,"color-03"),n()(),t(3021,"li"),i(3022,"span",54),t(3023,"code"),e(3024,"color-04"),n()(),t(3025,"li"),i(3026,"span",55),t(3027,"code"),e(3028,"color-05"),n()(),t(3029,"li"),i(3030,"span",56),t(3031,"code"),e(3032,"color-06"),n()(),t(3033,"li"),i(3034,"span",57),t(3035,"code"),e(3036,"color-07"),n()(),t(3037,"li"),i(3038,"span",58),t(3039,"code"),e(3040,"color-08"),n()(),t(3041,"li"),i(3042,"span",59),t(3043,"code"),e(3044,"color-09"),n()(),t(3045,"li"),i(3046,"span",60),t(3047,"code"),e(3048,"color-10"),n()(),t(3049,"li"),i(3050,"span",61),t(3051,"code"),e(3052,"color-11"),n()(),t(3053,"li"),i(3054,"span",62),t(3055,"code"),e(3056,"color-12"),n()()()()(),t(3057,"tr",17)(3058,"td",18)(3059,"div",19)(3060,"span",20),e(3061," disabled"),i(3062,"br"),n()()(),t(3063,"td",21)(3064,"code",46),e(3065,"Function"),n()(),t(3066,"td",24)(3067,"em")(3068,"strong"),e(3069,"(opcional)"),n()(),t(3070,"p"),e(3071,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar o \xEDcone e sua a\xE7\xE3o."),n()()(),t(3072,"tr",17)(3073,"td",18)(3074,"div",19)(3075,"span",20),e(3076," icon"),i(3077,"br"),n()()(),t(3078,"td",21)(3079,"code",31),e(3080,"string "),n(),t(3081,"code",47),e(3082," TemplateRef<void>"),n()(),t(3083,"td",24)(3084,"em")(3085,"strong"),e(3086,"(opcional)"),n()(),t(3087,"p"),e(3088,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),t(3089,"a",26),e(3090,"Biblioteca de \xEDcones"),n(),e(3091,". conforme exemplo abaixo:"),n(),t(3092,"pre")(3093,"code"),e(3094,`[ { icon: 'an an-plus' } ]
`),n()(),t(3095,"p"),e(3096,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),n(),t(3097,"pre")(3098,"code"),e(3099,`[ {  icon: 'fas fa-plus' } ]
`),n()(),t(3100,"p"),e(3101,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),t(3102,"code"),e(3103,"TemplateRef"),n(),e(3104,`, conforme exemplo abaixo:
`),t(3105,"code"),e(3106,"component.html"),n(),e(3107,":"),n(),t(3108,"pre")(3109,"code"),e(3110,`<ng-template #iconTemplateAdd>
 <span class="material-icons" style="font-size: inherit;">add</span>
</ng-template>

<po-table [p-column]="myProperty"></po-table>
`),n()(),t(3111,"p")(3112,"code"),e(3113,"component.ts"),n(),e(3114,":"),n(),t(3115,"pre")(3116,"code"),e(3117,`@ViewChild('iconTemplateAdd', { static: true }) iconTemplateAdd: TemplateRef<void>;

myProperty = [
 { property: 'columnIcon', label: 'Icons', type: 'icon', icons: [
  { value: 'plus', icon: this.iconTemplateAdd },
 ]}
];
`),n()(),t(3118,"blockquote")(3119,"p"),e(3120,"Caso esta propriedade n\xE3o seja definida, a mesma receber\xE1 o valor contido em "),t(3121,"code"),e(3122,"value"),n(),e(3123,"."),n()()()(),t(3124,"tr",17)(3125,"td",18)(3126,"div",19)(3127,"span",20),e(3128," tooltip"),i(3129,"br"),n()()(),t(3130,"td",21)(3131,"code",31),e(3132,"string"),n()(),t(3133,"td",24)(3134,"em")(3135,"strong"),e(3136,"(opcional)"),n()(),t(3137,"p"),e(3138,"Define um texto de ajuda que ser\xE1 exibido ao passar o "),t(3139,"em"),e(3140,"mouse"),n(),e(3141," em cima do \xEDcone."),n()()(),t(3142,"tr",17)(3143,"td",18)(3144,"div",19)(3145,"span",20),e(3146," value"),i(3147,"br"),n()()(),t(3148,"td",21)(3149,"code",31),e(3150,"string"),n()(),t(3151,"td",24)(3152,"p"),e(3153,"Define o valor do \xEDcone que ser\xE1 exibido."),n()()()(),t(3154,"h4",45)(3155,"code",5),e(3156,"PoTableColumnLabel"),n()(),t(3157,"div",2)(3158,"p"),e(3159,"Interface para configura\xE7\xE3o das colunas de labels do "),t(3160,"code"),e(3161,"po-table"),n(),e(3162,"."),n()(),t(3163,"h4",13),e(3164,"Propriedades"),n(),t(3165,"table",14)(3166,"tr",15)(3167,"th",16),e(3168,"Nome"),n(),t(3169,"th",16),e(3170,"Tipo"),n(),t(3171,"th",16),e(3172,"Descri\xE7\xE3o"),n()(),t(3173,"tr",17)(3174,"td",18)(3175,"div",19)(3176,"span",20),e(3177," color"),i(3178,"br"),n()()(),t(3179,"td",21)(3180,"code",31),e(3181,"string"),n()(),t(3182,"td",24)(3183,"em")(3184,"strong"),e(3185,"(opcional)"),n()(),t(3186,"p"),e(3187,"Define a cor do label."),n(),t(3188,"p"),e(3189,"Valores v\xE1lidos:"),n(),t(3190,"ul")(3191,"li"),i(3192,"span",51),t(3193,"code"),e(3194,"color-01"),n()(),t(3195,"li"),i(3196,"span",52),t(3197,"code"),e(3198,"color-02"),n()(),t(3199,"li"),i(3200,"span",53),t(3201,"code"),e(3202,"color-03"),n()(),t(3203,"li"),i(3204,"span",54),t(3205,"code"),e(3206,"color-04"),n()(),t(3207,"li"),i(3208,"span",55),t(3209,"code"),e(3210,"color-05"),n()(),t(3211,"li"),i(3212,"span",56),t(3213,"code"),e(3214,"color-06"),n()(),t(3215,"li"),i(3216,"span",57),t(3217,"code"),e(3218,"color-07"),n()(),t(3219,"li"),i(3220,"span",58),t(3221,"code"),e(3222,"color-08"),n()(),t(3223,"li"),i(3224,"span",59),t(3225,"code"),e(3226,"color-09"),n()(),t(3227,"li"),i(3228,"span",60),t(3229,"code"),e(3230,"color-10"),n()(),t(3231,"li"),i(3232,"span",61),t(3233,"code"),e(3234,"color-11"),n()(),t(3235,"li"),i(3236,"span",62),t(3237,"code"),e(3238,"color-12"),n()()()()(),t(3239,"tr",17)(3240,"td",18)(3241,"div",19)(3242,"span",20),e(3243," icon"),i(3244,"br"),n()()(),t(3245,"td",21)(3246,"code",22),e(3247,"boolean "),n(),t(3248,"code",31),e(3249," string "),n(),t(3250,"code",47),e(3251," TemplateRef<void>"),n()(),t(3252,"td",24)(3253,"em")(3254,"strong"),e(3255,"(opcional)"),n()(),t(3256,"p"),e(3257,"Define ou ativa um \xEDcone que ser\xE1 exibido ao lado do valor da "),t(3258,"em"),e(3259,"tag"),n(),e(3260,"."),n(),t(3261,"p"),e(3262,"Quando "),t(3263,"code"),e(3264,"p-type"),n(),e(3265," estiver definida, basta informar um valor igual a "),t(3266,"code"),e(3267,"true"),n(),e(3268," para que o \xEDcone seja exibido conforme descri\xE7\xF5es abaixo:"),n(),t(3269,"ul")(3270,"li"),i(3271,"span",70),e(3272," - "),t(3273,"code"),e(3274,"success"),n()(),t(3275,"li"),i(3276,"span",71),e(3277," - "),t(3278,"code"),e(3279,"warning"),n()(),t(3280,"li"),i(3281,"span",72),e(3282," - "),t(3283,"code"),e(3284,"danger"),n()(),t(3285,"li"),i(3286,"span",73),e(3287," - "),t(3288,"code"),e(3289,"info"),n()()(),t(3290,"p"),e(3291,"Tamb\xE9m \xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),t(3292,"a",26),e(3293,"Biblioteca de \xEDcones"),n(),e(3294,". conforme exemplo abaixo:"),n(),t(3295,"pre")(3296,"code"),e(3297,`<po-tag p-icon="an an-user" p-value="PO Tag"></po-tag>
`),n()(),t(3298,"p"),e(3299,"como tamb\xE9m utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),t(3300,"em"),e(3301,"Font Awesome"),n(),e(3302,", da seguinte forma:"),n(),t(3303,"pre")(3304,"code"),e(3305,`<po-tag p-icon="fa fa-podcast" p-value="PO Tag"></po-button>
`),n()(),t(3306,"p"),e(3307,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),t(3308,"code"),e(3309,"TemplateRef"),n(),e(3310,", conforme exemplo abaixo:"),n(),t(3311,"pre")(3312,"code"),e(3313,`<po-tag [p-icon]="template" p-value="Tag template ionic"></po-button>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),n()(),t(3314,"blockquote")(3315,"p"),e(3316,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),t(3317,"code"),e(3318,"font-size: inherit"),n(),e(3319," caso o \xEDcone utilizado n\xE3o aplique-o."),n()()()(),t(3320,"tr",17)(3321,"td",18)(3322,"div",19)(3323,"span",20),e(3324," label"),i(3325,"br"),n()()(),t(3326,"td",21)(3327,"code",31),e(3328,"string"),n()(),t(3329,"td",24)(3330,"p"),e(3331,"Texto que ser\xE1 exibido na coluna."),n()()(),t(3332,"tr",17)(3333,"td",18)(3334,"div",19)(3335,"span",20),e(3336," textColor"),i(3337,"br"),n()()(),t(3338,"td",21)(3339,"code",31),e(3340,"string"),n()(),t(3341,"td",24)(3342,"em")(3343,"strong"),e(3344,"(opcional)"),n()(),t(3345,"p"),e(3346,"Determina a cor do texto da tag. As maneiras de customizar as cores s\xE3o:"),n(),t(3347,"ul")(3348,"li")(3349,"p"),e(3350,"Hexadeximal, por exemplo "),t(3351,"code"),e(3352,"#c64840"),n(),e(3353,";"),n()(),t(3354,"li")(3355,"p"),e(3356,"RGB, como "),t(3357,"code"),e(3358,"rgb(0, 0, 165)"),n(),e(3359,";"),n()(),t(3360,"li")(3361,"p"),e(3362,"O nome da cor, por exemplo "),t(3363,"code"),e(3364,"blue"),n(),e(3365,";"),n()(),t(3366,"li")(3367,"p"),e(3368,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),n()(),t(3369,"li")(3370,"p"),i(3371,"span",51),t(3372,"code"),e(3373,"color-01"),n()()(),t(3374,"li")(3375,"p"),i(3376,"span",52),t(3377,"code"),e(3378,"color-02"),n()()(),t(3379,"li")(3380,"p"),i(3381,"span",53),t(3382,"code"),e(3383,"color-03"),n()()(),t(3384,"li")(3385,"p"),i(3386,"span",54),t(3387,"code"),e(3388,"color-04"),n()()(),t(3389,"li")(3390,"p"),i(3391,"span",55),t(3392,"code"),e(3393,"color-05"),n()()(),t(3394,"li")(3395,"p"),i(3396,"span",56),t(3397,"code"),e(3398,"color-06"),n()()(),t(3399,"li")(3400,"p"),i(3401,"span",57),t(3402,"code"),e(3403,"color-07"),n()()(),t(3404,"li")(3405,"p"),i(3406,"span",58),t(3407,"code"),e(3408,"color-08"),n()()(),t(3409,"li")(3410,"p"),i(3411,"span",59),t(3412,"code"),e(3413,"color-09"),n()()(),t(3414,"li")(3415,"p"),i(3416,"span",60),t(3417,"code"),e(3418,"color-10"),n()()(),t(3419,"li")(3420,"p"),i(3421,"span",61),t(3422,"code"),e(3423,"color-11"),n()()(),t(3424,"li")(3425,"p"),i(3426,"span",62),t(3427,"code"),e(3428,"color-12"),n()()(),t(3429,"li")(3430,"p"),e(3431,"Para uma melhor acessibilidade no uso do componente \xE9 recomend\xE1vel utilizar cores com um melhor contraste em rela\xE7\xE3o ao background."),n()()(),t(3432,"blockquote")(3433,"p")(3434,"strong"),e(3435,"Aten\xE7\xE3o:"),n(),e(3436," A propriedade "),t(3437,"code"),e(3438,"p-type"),n(),e(3439," sobrep\xF5e esta defini\xE7\xE3o."),n()()()(),t(3440,"tr",17)(3441,"td",18)(3442,"div",19)(3443,"span",20),e(3444," tooltip"),i(3445,"br"),n()()(),t(3446,"td",21)(3447,"code",31),e(3448,"string"),n()(),t(3449,"td",24)(3450,"em")(3451,"strong"),e(3452,"(opcional)"),n()(),t(3453,"p"),e(3454,"Define um texto de ajuda que ser\xE1 exibido ao passar o "),t(3455,"em"),e(3456,"mouse"),n(),e(3457," em cima do "),t(3458,"em"),e(3459,"label"),n(),e(3460,"."),n(),t(3461,"blockquote")(3462,"p"),e(3463,`Caso o conte\xFAdo da c\xE9lula exceder a largura da coluna,
\xE9 ignorado o valor atribuido ao tooltip e ser\xE1 exibido justamente o conte\xFAdo da c\xE9lula.`),n()()()(),t(3464,"tr",17)(3465,"td",18)(3466,"div",19)(3467,"span",20),e(3468," type"),i(3469,"br"),n()()(),t(3470,"td",21)(3471,"code",74),e(3472,"PoTagType"),n()(),t(3473,"td",24)(3474,"em")(3475,"strong"),e(3476,"(opcional)"),n()(),t(3477,"p"),e(3478,"Define o tipo da "),t(3479,"em"),e(3480,"tag"),n(),e(3481,"."),n(),t(3482,"p"),e(3483,"Valores v\xE1lidos:"),n(),t(3484,"ul")(3485,"li")(3486,"code"),e(3487,"success"),n(),e(3488,": cor verde utilizada para simbolizar sucesso ou \xEAxito."),n(),t(3489,"li")(3490,"code"),e(3491,"warning"),n(),e(3492,": cor amarela que representa aviso ou advert\xEAncia."),n(),t(3493,"li")(3494,"code"),e(3495,"danger"),n(),e(3496,": cor vermelha para erro ou aviso cr\xEDtico."),n(),t(3497,"li")(3498,"code"),e(3499,"info"),n(),e(3500,": cor cinza escuro que caracteriza conte\xFAdo informativo."),n()(),t(3501,"blockquote")(3502,"p"),e(3503,"Quando esta propriedade for definida, ir\xE1 sobrepor a defini\xE7\xE3o de "),t(3504,"code"),e(3505,"p-color"),n(),e(3506," e "),t(3507,"code"),e(3508,"p-icon"),n(),e(3509," somente ser\xE1 exibido caso seja "),t(3510,"code"),e(3511,"true"),n(),e(3512,"."),n()()()(),t(3513,"tr",17)(3514,"td",18)(3515,"div",19)(3516,"span",20),e(3517," value"),i(3518,"br"),n()()(),t(3519,"td",21)(3520,"code",31),e(3521,"string "),n(),t(3522,"code",35),e(3523," number"),n()(),t(3524,"td",24)(3525,"p"),e(3526,"Valor que ser\xE1 usado como refer\xEAncia para exibi\xE7\xE3o do conte\xFAdo na coluna."),n()()()(),t(3527,"h4",45)(3528,"code",5),e(3529,"PoTableDetailColumn"),n()(),t(3530,"div",2)(3531,"p"),e(3532,"Interface para configura\xE7\xE3o das colunas do "),t(3533,"code"),e(3534,"po-table-detail"),n(),e(3535,"."),n()(),t(3536,"h4",13),e(3537,"Propriedades"),n(),t(3538,"table",14)(3539,"tr",15)(3540,"th",16),e(3541,"Nome"),n(),t(3542,"th",16),e(3543,"Tipo"),n(),t(3544,"th",16),e(3545,"Descri\xE7\xE3o"),n()(),t(3546,"tr",17)(3547,"td",18)(3548,"div",19)(3549,"span",20),e(3550," format"),i(3551,"br"),n()()(),t(3552,"td",21)(3553,"code",31),e(3554,"string"),n()(),t(3555,"td",24)(3556,"em")(3557,"strong"),e(3558,"(opcional)"),n()(),t(3559,"p"),e(3560,"Formato de exibi\xE7\xE3o do valor da coluna:"),n(),t(3561,"ul")(3562,"li"),e(3563,"Formato para moeda (currency). Exemplos: 'BRL', 'USD'."),n(),t(3564,"li"),e(3565,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
caso n\xE3o seja informado um formato o mesmo ser\xE1 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),n(),t(3566,"li"),e(3567,`Formato para hor\xE1rio (time): aceita apenas os caracteres de hora(HH), minutos(mm), segundos(ss) e milisegundos(f-ffffff), os milisegundos s\xE3o opcionais, caso n\xE3o seja informado um formato o mesmo ser\xE1
'HH:mm:ss'. Exemplos: 'HH:mm', 'HH:mm:ss.ffffff', 'HH:mm:ss.ff', 'mm:ss.fff'.`),n(),t(3568,"li"),e(3569,"Formato para n\xFAmeros (number): aceita um valor seguindo o padr\xE3o "),t(3570,"a",64)(3571,"strong"),e(3572,"DecimalPipe"),n()(),e(3573," para formata\xE7\xE3o, e caso n\xE3o seja informado, o n\xFAmero ser\xE1 exibido na sua forma original. Exemplo:"),n()(),t(3574,"ul")(3575,"li"),e(3576,"Valor de entrada: "),t(3577,"code"),e(3578,"50"),n(),e(3579," e valor para formata\xE7\xE3o: "),t(3580,"code"),e(3581,"'1.2-5'"),n(),e(3582," o resultado ser\xE1: "),t(3583,"code"),e(3584,"50.00"),n()()()()(),t(3585,"tr",17)(3586,"td",18)(3587,"div",19)(3588,"span",20),e(3589," label"),i(3590,"br"),n()()(),t(3591,"td",21)(3592,"code",31),e(3593,"string"),n()(),t(3594,"td",24)(3595,"em")(3596,"strong"),e(3597,"(opcional)"),n()(),t(3598,"p"),e(3599,"Texto para t\xEDtulo da coluna."),n()()(),t(3600,"tr",17)(3601,"td",18)(3602,"div",19)(3603,"span",20),e(3604," property"),i(3605,"br"),n()()(),t(3606,"td",21)(3607,"code",31),e(3608,"string"),n()(),t(3609,"td",24)(3610,"em")(3611,"strong"),e(3612,"(opcional)"),n()(),t(3613,"p"),e(3614,"Nome identificador da coluna."),n()()(),t(3615,"tr",17)(3616,"td",18)(3617,"div",19)(3618,"span",20),e(3619," type"),i(3620,"br"),n()()(),t(3621,"td",21)(3622,"code",31),e(3623,"string"),n()(),t(3624,"td",24)(3625,"em")(3626,"strong"),e(3627,"(opcional)"),n()(),t(3628,"p"),e(3629,"Tipo da coluna."),n(),t(3630,"p"),e(3631,"Valores v\xE1lidos:"),n(),t(3632,"ul")(3633,"li")(3634,"p")(3635,"code"),e(3636,"currency"),n(),e(3637,": valores monet\xE1rios."),n()(),t(3638,"li")(3639,"p")(3640,"code"),e(3641,"date"),n(),e(3642,": valor de datas."),n()()(),t(3643,"ul")(3644,"li"),e(3645,"Aceita os tipos "),t(3646,"em"),e(3647,"string"),n(),e(3648," e "),t(3649,"em"),e(3650,"Date"),n(),e(3651," padr\xE3o do Javascript, por exemplo: "),t(3652,"code"),e(3653,"'2017-11-28'"),n(),e(3654," ou "),t(3655,"code"),e(3656,"new Date(2017, 10, 28)"),n(),e(3657,"."),n()(),t(3658,"ul")(3659,"li")(3660,"p")(3661,"code"),e(3662,"time"),n(),e(3663,": valor de hor\xE1rio."),n()(),t(3664,"li")(3665,"p")(3666,"code"),e(3667,"number"),n(),e(3668,": valores num\xE9ricos."),n()(),t(3669,"li")(3670,"p")(3671,"code"),e(3672,"dateTime"),n(),e(3673,": valor de data com hor\xE1rio."),n()()(),t(3674,"ul")(3675,"li")(3676,"p"),e(3677,"Aceita o tipo "),t(3678,"em"),e(3679,"string"),n(),e(3680," no formato "),t(3681,"strong"),e(3682,"ISO-8601"),n(),e(3683," extendido "),t(3684,"strong"),e(3685,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),n(),e(3686,`
e o tipo `),t(3687,"em"),e(3688,"Date"),n(),e(3689," padr\xE3o do Javascript, por exemplo: "),t(3690,"code"),e(3691,"'2017-11-28T00:00:00-02:00'"),n(),e(3692," ou "),t(3693,"code"),e(3694,"new Date(2017, 10, 28)"),n(),e(3695,"."),n()(),t(3696,"li")(3697,"p"),e(3698,"Aceita o tipo "),t(3699,"em"),e(3700,"string"),n(),e(3701," nos formatos "),t(3702,"strong"),e(3703,"'HH:mm:ss'"),n(),e(3704," ou "),t(3705,"strong"),e(3706,"'HH:mm:ss.ffffff'"),n(),e(3707,", por exemplo: "),t(3708,"code"),e(3709,"'23:12:45'"),n(),e(3710,"."),n()()()()()(),t(3711,"h4",45)(3712,"code",5),e(3713,"PoTableDetail"),n()(),t(3714,"div",2)(3715,"p"),e(3716,"Interface para configura\xE7\xE3o do "),t(3717,"em"),e(3718,"detail"),n(),e(3719," do componente "),t(3720,"code"),e(3721,"po-table"),n(),e(3722,"."),n()(),t(3723,"h4",13),e(3724,"Propriedades"),n(),t(3725,"table",14)(3726,"tr",15)(3727,"th",16),e(3728,"Nome"),n(),t(3729,"th",16),e(3730,"Tipo"),n(),t(3731,"th",16),e(3732,"Descri\xE7\xE3o"),n()(),t(3733,"tr",17)(3734,"td",18)(3735,"div",19)(3736,"span",20),e(3737," columns"),i(3738,"br"),n()()(),t(3739,"td",21)(3740,"code",75),e(3741,"Array<PoTableDetailColumn>"),n()(),t(3742,"td",24)(3743,"p"),e(3744,"Define uma lista do tipo "),t(3745,"code"),e(3746,"PoTableDetailColumn"),n(),e(3747," para as colunas do objet "),t(3748,"em"),e(3749,"detail"),n(),e(3750,". Por exemplo:"),n(),t(3751,"pre")(3752,"code"),e(3753,`[
 { property: 'miles', label: 'Miles', type: 'number', format: '1.0-5' },
 { property: 'departure', label: 'Departure time', type: 'date', format: 'dd/MM/yyyy' }
]
`),n()()()(),t(3754,"tr",17)(3755,"td",18)(3756,"div",19)(3757,"span",20),e(3758," hideSelect"),i(3759,"br"),n()()(),t(3760,"td",21)(3761,"code",22),e(3762,"boolean"),n()(),t(3763,"td",24)(3764,"em")(3765,"strong"),e(3766,"(opcional)"),n()(),t(3767,"p"),e(3768,"Define se o checkbox de sele\xE7\xE3o do detail ser\xE1 exibido. Valor padr\xE3o 'false'."),n()()(),t(3769,"tr",17)(3770,"td",18)(3771,"div",19)(3772,"span",20),e(3773," typeHeader"),i(3774,"br"),n()()(),t(3775,"td",21)(3776,"code",31),e(3777,"string"),n()(),t(3778,"td",24)(3779,"em")(3780,"strong"),e(3781,"(opcional)"),n()(),t(3782,"p"),e(3783,"Define o tipo de cabe\xE7alho para o conte\xFAdo do "),t(3784,"em"),e(3785,"detail"),n(),e(3786," ."),n(),t(3787,"p"),e(3788,"Valores v\xE1lidos:"),n(),t(3789,"ul")(3790,"li")(3791,"code"),e(3792,"inline"),n(),e(3793,": Atribui o cabe\xE7alho na mesma linha do "),t(3794,"em"),e(3795,"detail"),n(),e(3796,"."),n(),t(3797,"li")(3798,"code"),e(3799,"top"),n(),e(3800,": Atribui o cabe\xE7alho acima do "),t(3801,"em"),e(3802,"detail"),n(),e(3803,", id\xEAntico ao "),t(3804,"code"),e(3805,"po-table"),n(),e(3806,"."),n(),t(3807,"li")(3808,"code"),e(3809,"none"),n(),e(3810,": Remove o cabe\xE7alho do "),t(3811,"em"),e(3812,"detail"),n(),e(3813,"."),n()()()()(),t(3814,"h4",45)(3815,"code",5),e(3816,"PoTableSubtitleColumn"),n()(),t(3817,"div",2)(3818,"p"),e(3819,"Interface para configura\xE7\xE3o das colunas de legenda do Po-Table."),n()(),t(3820,"h4",13),e(3821,"Propriedades"),n(),t(3822,"table",14)(3823,"tr",15)(3824,"th",16),e(3825,"Nome"),n(),t(3826,"th",16),e(3827,"Tipo"),n(),t(3828,"th",16),e(3829,"Descri\xE7\xE3o"),n()(),t(3830,"tr",17)(3831,"td",18)(3832,"div",19)(3833,"span",20),e(3834," color"),i(3835,"br"),n()()(),t(3836,"td",21)(3837,"code",31),e(3838,"string"),n()(),t(3839,"td",24)(3840,"em")(3841,"strong"),e(3842,"(opcional)"),n()(),t(3843,"p"),e(3844,"Define a cor do "),t(3845,"em"),e(3846,"status"),n(),e(3847,"."),n(),t(3848,"p"),e(3849,"Valores v\xE1lidos:"),n(),t(3850,"ul")(3851,"li"),i(3852,"span",51),t(3853,"code"),e(3854,"color-01"),n()(),t(3855,"li"),i(3856,"span",52),t(3857,"code"),e(3858,"color-02"),n()(),t(3859,"li"),i(3860,"span",53),t(3861,"code"),e(3862,"color-03"),n()(),t(3863,"li"),i(3864,"span",54),t(3865,"code"),e(3866,"color-04"),n()(),t(3867,"li"),i(3868,"span",55),t(3869,"code"),e(3870,"color-05"),n()(),t(3871,"li"),i(3872,"span",56),t(3873,"code"),e(3874,"color-06"),n()(),t(3875,"li"),i(3876,"span",57),t(3877,"code"),e(3878,"color-07"),n()(),t(3879,"li"),i(3880,"span",58),t(3881,"code"),e(3882,"color-08"),n()(),t(3883,"li"),i(3884,"span",59),t(3885,"code"),e(3886,"color-09"),n()(),t(3887,"li"),i(3888,"span",60),t(3889,"code"),e(3890,"color-10"),n()(),t(3891,"li"),i(3892,"span",61),t(3893,"code"),e(3894,"color-11"),n()(),t(3895,"li"),i(3896,"span",62),t(3897,"code"),e(3898,"color-12"),n()()()()(),t(3899,"tr",17)(3900,"td",18)(3901,"div",19)(3902,"span",20),e(3903," content"),i(3904,"br"),n()()(),t(3905,"td",21)(3906,"code",31),e(3907,"string"),n()(),t(3908,"td",24)(3909,"p"),e(3910,"Conte\xFAdo que ser\xE1 exibido na coluna da tabela."),n()()(),t(3911,"tr",17)(3912,"td",18)(3913,"div",19)(3914,"span",20),e(3915," label"),i(3916,"br"),n()()(),t(3917,"td",21)(3918,"code",31),e(3919,"string"),n()(),t(3920,"td",24)(3921,"p"),e(3922,"Texto que ser\xE1 exibido no rodap\xE9 da tabela como legenda."),n()()(),t(3923,"tr",17)(3924,"td",18)(3925,"div",19)(3926,"span",20),e(3927," value"),i(3928,"br"),n()()(),t(3929,"td",21)(3930,"code",31),e(3931,"string "),n(),t(3932,"code",35),e(3933," number"),n()(),t(3934,"td",24)(3935,"p"),e(3936,"Valor que ser\xE1 usado como refer\xEAncia para exibi\xE7\xE3o do conte\xFAdo na coluna."),n()()()(),t(3937,"h3"),e(3938,"Enums"),n(),t(3939,"h4",4)(3940,"code",5),e(3941,"PoTableColumnSortType"),n()(),t(3942,"div",2)(3943,"p"),e(3944,"Tipos de ordena\xE7\xE3o das colunas da tabela."),n()(),t(3945,"h4",13),e(3946,"Propriedades"),n(),t(3947,"table",14)(3948,"tr",15)(3949,"th",16),e(3950,"Nome"),n(),t(3951,"th",16),e(3952,"Descri\xE7\xE3o"),n()(),t(3953,"tr",17)(3954,"td",18)(3955,"div",19)(3956,"span",20),e(3957," Ascending"),i(3958,"br"),n()()(),t(3959,"td",24)(3960,"p"),e(3961,"Ordena\xE7\xE3o ascendente"),n()()(),t(3962,"tr",17)(3963,"td",18)(3964,"div",19)(3965,"span",20),e(3966," Descending"),i(3967,"br"),n()()(),t(3968,"td",24)(3969,"p"),e(3970,"Ordena\xE7\xE3o descendente"),n()()()(),t(3971,"h4",4)(3972,"code",5),e(3973,"PoTableColumnSpacing"),n()(),t(3974,"div",2)(3975,"p"),e(3976,"Tipos de espa\xE7amento das colunas da tabela."),n()(),t(3977,"h4",13),e(3978,"Propriedades"),n(),t(3979,"table",14)(3980,"tr",15)(3981,"th",16),e(3982,"Nome"),n(),t(3983,"th",16),e(3984,"Descri\xE7\xE3o"),n()(),t(3985,"tr",17)(3986,"td",18)(3987,"div",19)(3988,"span",20),e(3989," Small"),i(3990,"br"),n()()(),t(3991,"td",24)(3992,"p"),e(3993,"Espa\xE7amento pequeno"),n()()(),t(3994,"tr",17)(3995,"td",18)(3996,"div",19)(3997,"span",20),e(3998," Medium"),i(3999,"br"),n()()(),t(4e3,"td",24)(4001,"p"),e(4002,"Espa\xE7amento m\xE9dio"),n()()(),t(4003,"tr",17)(4004,"td",18)(4005,"div",19)(4006,"span",20),e(4007," Large"),i(4008,"br"),n()()(),t(4009,"td",24)(4010,"p"),e(4011,"Espa\xE7amento grande"),n()()()()())},dependencies:[P],encapsulation:2})}return r})();var st=(()=>{class r{route;router;sub;hidePoWebSample=!0;samplesLength=8;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,l){this.route=a,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let l=a.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||r)(w(Me),w(ie))};static \u0275cmp=S({type:r,selectors:[["ng-component"]],standalone:!1,decls:13,vars:4,consts:[["p-title"," Table",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,o){l&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),E("p-click",function(){return o.changeTab("doc")}),i(3,"sample-po-table-doc"),n(),t(4,"po-tab",3),E("p-click",function(){return o.changeTab("web")}),i(5,"sample-po-table-basic-view")(6,"sample-po-table-labs-view")(7,"sample-po-table-with-api-view")(8,"sample-po-table-transport-view")(9,"sample-po-table-airfare-view")(10,"sample-po-table-components-view")(11,"sample-po-table-heroes-view")(12,"sample-po-table-draggable-view"),n()()()),l&2&&(c("p-actions",o.actions),s(2),c("p-active",o.activeTab==="doc"),s(2),c("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"))},dependencies:[ze,C,T,Qe,$e,Ke,Ze,tt,it,at,rt,mt],encapsulation:2})}return r})();var Yt=[{path:"",component:st}],dt=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275mod=Z({type:r});static \u0275inj=Y({imports:[ce.forChild(Yt),ce]})}return r})();var oi=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275mod=Z({type:r});static \u0275inj=Y({imports:[We,dt]})}return r})();export{oi as DocPoTableModule};
