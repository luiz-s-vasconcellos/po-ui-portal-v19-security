import{$ as re,$a as T,$d as x,Bd as J,Ca as B,Cd as Ne,Da as A,Ea as G,Ec as te,F as u,Fa as I,Fd as W,G as b,Ga as o,Ha as ae,Ia as v,Ka as g,Kb as Pe,La as h,Lb as L,Ma as f,Mb as N,Na as xe,Nb as U,Oa as he,Ob as q,Pa as M,Pb as Q,Qa as we,Rd as We,Sb as Me,T as m,Tb as Te,Tc as Le,U as _,Ua as z,Va as R,Vb as ke,Vc as qe,Wb as Oe,Xc as oe,Ya as fe,Yb as Ve,Zb as Se,_ as E,_b as me,_d as y,bb as j,ce as ne,dd as ce,ea as D,gb as $,ha as s,hc as de,jb as _e,ka as P,kd as ue,ld as k,na as t,nd as Fe,oa as e,od as De,pa as l,pb as ee,pd as be,qa as X,ra as Z,sa as ve,ta as H,te as w,ua as S,ue as He,va as pe,vc as K,vd as Ie,x as Ce,xc as se,y as le,ya as ye}from"./chunk-Y4SQKOF7.js";var lt=()=>({value:"Option 1"}),rt=()=>({value:"Option 2"}),pt=(a,V)=>[a,V],Be=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-basic"]],standalone:!1,decls:1,vars:6,consts:[["name","combo","p-label","PO Combo",3,"p-options"]],template:function(r,n){r&1&&l(0,"po-combo",0),r&2&&s("p-options",we(3,pt,he(1,lt),he(2,rt)))},dependencies:[k],encapsulation:2})}return a})();var dt=a=>({"docs-sample-code-tabs":a}),Ae=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),o(3,"PO Combo Basic"),e(),t(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),o(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),o(12,"sample-po-combo-basic/sample-po-combo-basic.component.html"),e(),t(13,"pre",7),o(14,`<po-combo name="combo" p-label="PO Combo" [p-options]="[{ value: 'Option 1' }, { value: 'Option 2' }]"> </po-combo>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),o(18,"sample-po-combo-basic/sample-po-combo-basic.component.ts"),e(),t(19,"pre",9),o(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-combo-basic',
  templateUrl: './sample-po-combo-basic.component.html',
  standalone: false
})
export class SamplePoComboBasicComponent {}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-combo-basic"),e(),l(23,"hr")),r&2&&(m(5),P("po-icon "+n.sampleCodeButtonIcon),m(),v(" ",n.sampleCodeButtonLabel,""),m(),s("ngClass",M(4,dt,n.hideSampleCodeTabs)))},dependencies:[T,w,y,x,Be],encapsulation:2})}return a})();var Ge=(()=>{class a{additionalHelpTooltip;combo;comboOptionGroupSwitch;customLiterals;debounceTime;event;fieldLabel;fieldValue;filterMinlength;filterMode;filterService;help;icon;label;literals;optionsGroup;optionsGroupList;placeholder;properties;fieldErrorMessage;option;options;selectedOptionsGroup;size;filterModeOptions=[{label:"Starts With",value:"startsWith"},{label:"Contains",value:"contains"},{label:"Ends With",value:"endsWith"}];iconsOptions=[{label:"an an-building-apartment",value:"an an-building-apartment"},{label:"an an-gas-pump",value:"an an-gas-pump"},{label:"fa fa-calculator",value:"fa fa-calculator"}];propertiesOptions=[{value:"changeOnEnter",label:"Change On Enter"},{value:"disabled",label:"Disabled"},{value:"optional",label:"Optional"},{value:"disabledInitFilter",label:"Disabled Init Filter"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"sort",label:"Sort"},{value:"clean",label:"Clean"},{value:"disabledTabFilter",label:"Disabled Tab Filter"},{value:"errorLimit",label:"Limit Error Message"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}addOption(){this.options=this.verifyOptionObject(this.options.concat(),this.option,this.optionsGroup),this.option={label:void 0,value:void 0}}changeEvent(p){this.event=p}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals=void 0}}optionsGroupSelection(){this.optionsGroup=this.selectedOptionsGroup}restore(){this.additionalHelpTooltip="",this.combo=void 0,this.comboOptionGroupSwitch=!1,this.customLiterals=void 0,this.event="",this.debounceTime=void 0,this.fieldLabel="",this.fieldValue="",this.filterMinlength=void 0,this.filterService="",this.filterMode=void 0,this.help=void 0,this.label=void 0,this.literals="",this.icon=void 0,this.option={label:void 0,value:void 0},this.options=[],this.optionsGroup=void 0,this.optionsGroupList=[],this.placeholder="",this.properties=[],this.fieldErrorMessage="",this.selectedOptionsGroup=void 0,this.size="medium"}insertGroupIntoSelectInput(p){this.selectedOptionsGroup=p,this.optionsGroupList=[...this.optionsGroupList,{label:p,value:p}]}verifyOptionObject(p,r,n){let{label:d,value:c}=r;if(n){let i=p.findIndex(Ee=>Ee.label===n&&"options"in Ee);return i===-1?(this.insertGroupIntoSelectInput(n),[...p,{label:n,options:[{label:d,value:c}]}]):(p[i].options.push({label:d,value:c}),p)}return[...p,{label:d,value:c}]}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-labs"]],standalone:!1,decls:43,vars:56,consts:[["fOption","ngForm"],["f","ngForm"],["name","combo",1,"po-md-12",3,"ngModelChange","p-change","p-keydown","ngModel","p-additional-help-tooltip","p-change-on-enter","p-clean","p-debounce-time","p-disabled","p-disabled-init-filter","p-disabled-tab-filter","p-field-label","p-field-value","p-filter-minlength","p-filter-mode","p-filter-service","p-help","p-icon","p-label","p-literals","p-optional","p-options","p-placeholder","p-required","p-field-error-message","p-show-required","p-sort","p-size","p-error-limit"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["p-label","Po combo options group"],["name","comboOptionGroupSwitch","p-label","Combo options group",1,"po-lg-4","po-md-12",3,"ngModelChange","ngModel"],["name","selectedsOptionsGroup","p-label","Options group list",1,"po-lg-4","po-md-6",3,"ngModelChange","p-change","ngModel","p-disabled","p-options"],["name","optionsGroup","p-label","New Options Group","p-required","",1,"po-lg-4","po-md-6",3,"ngModelChange","ngModel","p-disabled"],["p-label","Po combo options"],["name","optionLabel","p-label","Option Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","optionValue","p-label","Option Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Option",1,"po-lg-2","po-md-4",3,"p-click","p-disabled"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","additionalHelpTooltip","p-clean","","p-label","Additional Help Tooltip",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","icon","p-columns","4","p-label","Icon",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","filterMode","p-columns","4","p-label","Filter Mode",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","filterService","p-clean","","p-help","https://po-sample-api.onrender.com/v1/heroes","p-label","Filter Service",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: {"noData": "Sem dados a serem exibidos"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","fieldValue","p-clean","","p-label","Field Value",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldLabel","p-clean","","p-label","Field Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","debounceTime","p-clean","","p-label","Debounce Time",1,"po-md-6",3,"ngModelChange","ngModel"],["name","filterMinlength","p-clean","","p-label","Filter Min Length",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,n){if(r&1){let d=H();t(0,"po-combo",2),f("ngModelChange",function(i){return u(d),h(n.combo,i)||(n.combo=i),b(i)}),S("p-change",function(){return u(d),b(n.changeEvent("p-change"))})("p-keydown",function(){return u(d),b(n.changeEvent("p-keydown"))}),e(),l(1,"hr"),t(2,"div",3),l(3,"po-info",4)(4,"po-info",5),e(),l(5,"hr"),t(6,"form",null,0),l(8,"po-divider",6),t(9,"div",3)(10,"po-switch",7),f("ngModelChange",function(i){return u(d),h(n.comboOptionGroupSwitch,i)||(n.comboOptionGroupSwitch=i),b(i)}),e(),t(11,"po-select",8),f("ngModelChange",function(i){return u(d),h(n.selectedOptionsGroup,i)||(n.selectedOptionsGroup=i),b(i)}),S("p-change",function(){return u(d),b(n.optionsGroupSelection())}),e(),t(12,"po-input",9),f("ngModelChange",function(i){return u(d),h(n.optionsGroup,i)||(n.optionsGroup=i),b(i)}),e()(),l(13,"po-divider",10),t(14,"div",3)(15,"po-input",11),f("ngModelChange",function(i){return u(d),h(n.option.label,i)||(n.option.label=i),b(i)}),e(),t(16,"po-input",12),f("ngModelChange",function(i){return u(d),h(n.option.value,i)||(n.option.value=i),b(i)}),e()(),t(17,"div",3)(18,"po-button",13),S("p-click",function(){return u(d),b(n.addOption())}),e()()(),l(19,"hr"),t(20,"form",null,1)(22,"po-input",14),f("ngModelChange",function(i){return u(d),h(n.label,i)||(n.label=i),b(i)}),e(),t(23,"po-input",15),f("ngModelChange",function(i){return u(d),h(n.help,i)||(n.help=i),b(i)}),e(),t(24,"po-input",16),f("ngModelChange",function(i){return u(d),h(n.additionalHelpTooltip,i)||(n.additionalHelpTooltip=i),b(i)}),e(),t(25,"po-input",17),f("ngModelChange",function(i){return u(d),h(n.placeholder,i)||(n.placeholder=i),b(i)}),e(),t(26,"po-input",18),f("ngModelChange",function(i){return u(d),h(n.fieldErrorMessage,i)||(n.fieldErrorMessage=i),b(i)}),e(),t(27,"div",3)(28,"po-checkbox-group",19),f("ngModelChange",function(i){return u(d),h(n.properties,i)||(n.properties=i),b(i)}),e(),t(29,"po-radio-group",20),f("ngModelChange",function(i){return u(d),h(n.icon,i)||(n.icon=i),b(i)}),e(),t(30,"po-radio-group",21),f("ngModelChange",function(i){return u(d),h(n.filterMode,i)||(n.filterMode=i),b(i)}),e(),t(31,"po-radio-group",22),f("ngModelChange",function(i){return u(d),h(n.size,i)||(n.size=i),b(i)}),e()(),t(32,"div",3)(33,"po-input",23),f("ngModelChange",function(i){return u(d),h(n.filterService,i)||(n.filterService=i),b(i)}),e(),t(34,"po-input",24),f("ngModelChange",function(i){return u(d),h(n.literals,i)||(n.literals=i),b(i)}),S("p-change",function(){return u(d),b(n.changeLiterals())}),e()(),t(35,"div",3)(36,"po-input",25),f("ngModelChange",function(i){return u(d),h(n.fieldValue,i)||(n.fieldValue=i),b(i)}),e(),t(37,"po-input",26),f("ngModelChange",function(i){return u(d),h(n.fieldLabel,i)||(n.fieldLabel=i),b(i)}),e()(),t(38,"div",3)(39,"po-number",27),f("ngModelChange",function(i){return u(d),h(n.debounceTime,i)||(n.debounceTime=i),b(i)}),e(),t(40,"po-number",28),f("ngModelChange",function(i){return u(d),h(n.filterMinlength,i)||(n.filterMinlength=i),b(i)}),e()(),t(41,"div",3)(42,"po-button",29),S("p-click",function(){return u(d),b(n.restore())}),e()()()}if(r&2){let d=I(7);g("ngModel",n.combo),s("p-additional-help-tooltip",n.additionalHelpTooltip)("p-change-on-enter",n.properties.includes("changeOnEnter"))("p-clean",n.properties.includes("clean"))("p-debounce-time",n.debounceTime)("p-disabled",n.properties.includes("disabled"))("p-disabled-init-filter",n.properties.includes("disableInitFilter"))("p-disabled-tab-filter",n.properties.includes("disabledTabFilter"))("p-field-label",n.fieldLabel)("p-field-value",n.fieldValue)("p-filter-minlength",n.filterMinlength)("p-filter-mode",n.filterMode)("p-filter-service",n.filterService)("p-help",n.help)("p-icon",n.icon)("p-label",n.label)("p-literals",n.customLiterals)("p-optional",n.properties.includes("optional"))("p-options",n.options)("p-placeholder",n.placeholder)("p-required",n.properties.includes("required"))("p-field-error-message",n.fieldErrorMessage)("p-show-required",n.properties.includes("showRequired"))("p-sort",n.properties.includes("sort"))("p-size",n.size)("p-error-limit",n.properties==null?null:n.properties.includes("errorLimit")),m(3),s("p-value",n.combo),m(),s("p-value",n.event),m(6),g("ngModel",n.comboOptionGroupSwitch),m(),g("ngModel",n.selectedOptionsGroup),s("p-disabled",!n.comboOptionGroupSwitch)("p-options",n.optionsGroupList),m(),g("ngModel",n.optionsGroup),s("p-disabled",!n.comboOptionGroupSwitch),m(3),g("ngModel",n.option.label),m(),g("ngModel",n.option.value),m(2),s("p-disabled",d.form.invalid),m(4),g("ngModel",n.label),m(),g("ngModel",n.help),m(),g("ngModel",n.additionalHelpTooltip),m(),g("ngModel",n.placeholder),m(),g("ngModel",n.fieldErrorMessage),m(2),g("ngModel",n.properties),s("p-options",n.propertiesOptions),m(),g("ngModel",n.icon),s("p-options",n.iconsOptions),m(),g("ngModel",n.filterMode),s("p-options",n.filterModeOptions),m(),g("ngModel",n.size),s("p-options",n.sizeOptions),m(2),g("ngModel",n.filterService),m(),g("ngModel",n.literals),m(2),g("ngModel",n.fieldValue),m(),g("ngModel",n.fieldLabel),m(2),g("ngModel",n.debounceTime),m(),g("ngModel",n.filterMinlength)}},dependencies:[Q,L,N,q,U,K,me,Le,qe,k,be,Ie,J,ce,W],encapsulation:2})}return a})();var ut=a=>({"docs-sample-code-tabs":a}),ze=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),o(3,"PO Combo Labs"),e(),t(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),o(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),o(12,"sample-po-combo-labs/sample-po-combo-labs.component.html"),e(),t(13,"pre",7),o(14,`<po-combo
  class="po-md-12"
  name="combo"
  [(ngModel)]="combo"
  [p-additional-help-tooltip]="additionalHelpTooltip"
  [p-change-on-enter]="properties.includes('changeOnEnter')"
  [p-clean]="properties.includes('clean')"
  [p-debounce-time]="debounceTime"
  [p-disabled]="properties.includes('disabled')"
  [p-disabled-init-filter]="properties.includes('disableInitFilter')"
  [p-disabled-tab-filter]="properties.includes('disabledTabFilter')"
  [p-field-label]="fieldLabel"
  [p-field-value]="fieldValue"
  [p-filter-minlength]="filterMinlength"
  [p-filter-mode]="filterMode"
  [p-filter-service]="filterService"
  [p-help]="help"
  [p-icon]="icon"
  [p-label]="label"
  [p-literals]="customLiterals"
  [p-optional]="properties.includes('optional')"
  [p-options]="options"
  [p-placeholder]="placeholder"
  [p-required]="properties.includes('required')"
  [p-field-error-message]="fieldErrorMessage"
  [p-show-required]="properties.includes('showRequired')"
  [p-sort]="properties.includes('sort')"
  [p-size]="size"
  (p-change)="changeEvent('p-change')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-error-limit]="properties?.includes('errorLimit')"
>
</po-combo>

<hr />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="combo"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<hr />

<form #fOption="ngForm">
  <po-divider p-label="Po combo options group"></po-divider>

  <div class="po-row">
    <po-switch
      class="po-lg-4 po-md-12"
      name="comboOptionGroupSwitch"
      [(ngModel)]="comboOptionGroupSwitch"
      p-label="Combo options group"
    >
    </po-switch>

    <po-select
      class="po-lg-4 po-md-6"
      name="selectedsOptionsGroup"
      [(ngModel)]="selectedOptionsGroup"
      p-label="Options group list"
      [p-disabled]="!comboOptionGroupSwitch"
      [p-options]="optionsGroupList"
      (p-change)="optionsGroupSelection()"
    >
    </po-select>

    <po-input
      class="po-lg-4 po-md-6"
      name="optionsGroup"
      [(ngModel)]="optionsGroup"
      p-label="New Options Group"
      [p-disabled]="!comboOptionGroupSwitch"
      p-required
    >
    </po-input>
  </div>

  <po-divider p-label="Po combo options"></po-divider>

  <div class="po-row">
    <po-input class="po-md-6" name="optionLabel" [(ngModel)]="option.label" p-label="Option Label" p-required>
    </po-input>

    <po-input class="po-md-6" name="optionValue" [(ngModel)]="option.value" p-label="Option Value" p-required>
    </po-input>
  </div>

  <div class="po-row">
    <po-button class="po-lg-2 po-md-4" p-label="Add Option" [p-disabled]="fOption.form.invalid" (p-click)="addOption()">
    </po-button>
  </div>
</form>

<hr />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input
    class="po-md-6"
    name="additionalHelpTooltip"
    [(ngModel)]="additionalHelpTooltip"
    p-clean
    p-label="Additional Help Tooltip"
  >
  </po-input>

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder"> </po-input>

  <po-input
    class="po-md-6"
    name="fieldErrorMessage"
    [(ngModel)]="fieldErrorMessage"
    p-clean
    p-label="Field Error Message"
  >
  </po-input>

  <div class="po-row">
    <po-checkbox-group
      class="po-md-12"
      name="properties"
      [(ngModel)]="properties"
      p-columns="4"
      p-label="Properties"
      [p-options]="propertiesOptions"
    >
    </po-checkbox-group>

    <po-radio-group
      class="po-md-12"
      name="icon"
      [(ngModel)]="icon"
      p-columns="4"
      p-label="Icon"
      [p-options]="iconsOptions"
    >
    </po-radio-group>

    <po-radio-group
      class="po-md-12"
      name="filterMode"
      [(ngModel)]="filterMode"
      p-columns="4"
      p-label="Filter Mode"
      [p-options]="filterModeOptions"
    >
    </po-radio-group>

    <po-radio-group
      class="po-md-12"
      name="size"
      [(ngModel)]="size"
      p-columns="4"
      p-label="Size"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="sizeOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-input
      class="po-md-12 po-lg-6"
      name="filterService"
      [(ngModel)]="filterService"
      p-clean
      p-help="https://po-sample-api.onrender.com/v1/heroes"
      p-label="Filter Service"
    >
    </po-input>

    <po-input
      class="po-md-12 po-lg-6"
      name="literals"
      [(ngModel)]="literals"
      p-help='Ex.: {"noData": "Sem dados a serem exibidos"}'
      p-label="Literals"
      (p-change)="changeLiterals()"
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-md-6" name="fieldValue" [(ngModel)]="fieldValue" p-clean p-label="Field Value"> </po-input>

    <po-input class="po-md-6" name="fieldLabel" [(ngModel)]="fieldLabel" p-clean p-label="Field Label"> </po-input>
  </div>

  <div class="po-row">
    <po-number class="po-md-6" name="debounceTime" [(ngModel)]="debounceTime" p-clean p-label="Debounce Time">
    </po-number>

    <po-number class="po-md-6" name="filterMinlength" [(ngModel)]="filterMinlength" p-clean p-label="Filter Min Length">
    </po-number>
  </div>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),o(18,"sample-po-combo-labs/sample-po-combo-labs.component.ts"),e(),t(19,"pre",9),o(20,`import { Component, OnInit } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoComboLiterals,
  PoComboOption,
  PoComboOptionGroup,
  PoRadioGroupOption,
  PoSelectOption
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-combo-labs',
  templateUrl: './sample-po-combo-labs.component.html',
  standalone: false
})
export class SamplePoComboLabsComponent implements OnInit {
  additionalHelpTooltip: string;
  combo: string;
  comboOptionGroupSwitch: boolean;
  customLiterals: PoComboLiterals;
  debounceTime: number;
  event: string;

  fieldLabel: string;
  fieldValue: string;
  filterMinlength: number;
  filterMode: string;
  filterService: string;

  help: string;
  icon: string;
  label: string;
  literals: string;
  optionsGroup: string;
  optionsGroupList: Array<PoSelectOption>;
  placeholder: string;
  properties: Array<string>;
  fieldErrorMessage: string;

  option: PoComboOption;
  options: Array<PoComboOption | PoComboOptionGroup>;
  selectedOptionsGroup: string;
  size: string;

  public readonly filterModeOptions: Array<PoRadioGroupOption> = [
    { label: 'Starts With', value: 'startsWith' },
    { label: 'Contains', value: 'contains' },
    { label: 'Ends With', value: 'endsWith' }
  ];

  public readonly iconsOptions: Array<PoRadioGroupOption> = [
    { label: 'an an-building-apartment', value: 'an an-building-apartment' },
    { label: 'an an-gas-pump', value: 'an an-gas-pump' },
    { label: 'fa fa-calculator', value: 'fa fa-calculator' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'changeOnEnter', label: 'Change On Enter' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'optional', label: 'Optional' },
    { value: 'disabledInitFilter', label: 'Disabled Init Filter' },
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'sort', label: 'Sort' },
    { value: 'clean', label: 'Clean' },
    { value: 'disabledTabFilter', label: 'Disabled Tab Filter' },
    { value: 'errorLimit', label: 'Limit Error Message' }
  ];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  ngOnInit() {
    this.restore();
  }

  addOption() {
    this.options = this.verifyOptionObject(this.options.concat(), this.option, this.optionsGroup);
    this.option = { label: undefined, value: undefined };
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

  optionsGroupSelection() {
    this.optionsGroup = this.selectedOptionsGroup;
  }

  restore() {
    this.additionalHelpTooltip = '';
    this.combo = undefined;
    this.comboOptionGroupSwitch = false;
    this.customLiterals = undefined;
    this.event = '';

    this.debounceTime = undefined;
    this.fieldLabel = '';
    this.fieldValue = '';
    this.filterMinlength = undefined;
    this.filterService = '';
    this.filterMode = undefined;

    this.help = undefined;
    this.label = undefined;
    this.literals = '';
    this.icon = undefined;

    this.option = { label: undefined, value: undefined };
    this.options = [];
    this.optionsGroup = undefined;
    this.optionsGroupList = [];
    this.placeholder = '';
    this.properties = [];
    this.fieldErrorMessage = '';
    this.selectedOptionsGroup = undefined;
    this.size = 'medium';
  }

  private insertGroupIntoSelectInput(value: string) {
    this.selectedOptionsGroup = value;
    this.optionsGroupList = [...this.optionsGroupList, { label: value, value }];
  }

  private verifyOptionObject(
    options: Array<PoComboOption | PoComboOptionGroup>,
    option: PoComboOption,
    optionsGroup?: string
  ) {
    const { label, value } = option;

    if (optionsGroup) {
      const indexItem = options.findIndex(
        (optionItem: PoComboOptionGroup) => optionItem.label === optionsGroup && 'options' in optionItem
      );

      if (indexItem === -1) {
        this.insertGroupIntoSelectInput(optionsGroup);
        return [...options, { label: optionsGroup, options: [{ label, value }] }];
      }

      (options as Array<PoComboOptionGroup>)[indexItem].options.push({ label, value });
      return options;
    }

    return [...options, { label, value }];
  }
}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-combo-labs"),e(),l(23,"hr")),r&2&&(m(5),P("po-icon "+n.sampleCodeButtonIcon),m(),v(" ",n.sampleCodeButtonLabel,""),m(),s("ngClass",M(4,ut,n.hideSampleCodeTabs)))},dependencies:[T,w,y,x,Ge],encapsulation:2})}return a})();var ge=(()=>{class a{getcities(){return[{label:"S\xE3o Paulo",options:[{label:"S\xE3o Paulo",value:"sao paulo"},{label:"Campinas",value:"campinas"}]},{label:"Paran\xE1",options:[{label:"S\xE3o Jos\xE9 dos Pinhais",value:"sao jose dos pinhais"},{label:"Londrina",value:"londrina"},{label:"Maring\xE1",value:"maringa"}]},{label:"Santa Catarina",options:[{label:"Joinville",value:"joinville"},{label:"Florian\xF3polis",value:"florianopolis"},{label:"Itaja\xED",value:"itajai"}]}]}getMedicalSpecialty(){return[{specialty:"Allergist",specialtyValue:"allergist"},{specialty:"Cardiologist",specialtyValue:"cardiologist"},{specialty:"General practitioner",specialtyValue:"generalPractitioner"},{specialty:"Dermatologist",specialtyValue:"dermatologist"},{specialty:"Gynecologist",specialtyValue:"gynecologist"},{specialty:"Nutritionist",specialtyValue:"nutritionist"},{specialty:"Pediatrist",specialtyValue:"pediatrist"},{specialty:"Psychiatrist",specialtyValue:"psychiatrist"},{specialty:"Orthopaedist",specialtyValue:"orthopaedist"}]}static \u0275fac=function(r){return new(r||a)};static \u0275prov=Ce({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var ht=["schedulingForm"];function ft(a,V){a&1&&ve(0)}function St(a,V){if(a&1&&(t(0,"div",5),l(1,"po-avatar",17),t(2,"p",18),o(3),e()()),a&2){let p=pe().$implicit,r=pe();m(),s("p-src",r.getStateByLabel(p.label)),m(2),ae(p.label)}}function Et(a,V){if(a&1&&(t(0,"div",18),o(1),e()),a&2){let p=pe().$implicit;m(),ae(p.label)}}function Ct(a,V){if(a&1&&D(0,ft,1,0,"ng-container",16)(1,St,4,2,"ng-template",null,1,fe)(3,Et,2,1,"ng-template",null,2,fe),a&2){let p=V.$implicit,r=I(2),n=I(4);s("ngIf",p.options)("ngIfThen",r)("ngIfElse",n)}}var Re=(()=>{class a{poNotification;schedulingService;form;birthday;citiesOptions;city;email;informations;medicalSpecialty;medicalSpecialtyOptions;name;phone;typeScheduling;typeSchedulings=[{label:"Particular",value:"particular"},{label:"Health Insurance",value:"healthInsurance"}];constructor(p,r){this.poNotification=p,this.schedulingService=r}ngOnInit(){this.citiesOptions=this.schedulingService.getcities(),this.medicalSpecialtyOptions=this.schedulingService.getMedicalSpecialty()}confirmPreAppointment(p=""){this.poNotification.success(`Great ${p}, your pre-appointment was successfully received!`),this.form.reset()}getStateByLabel(p){return`https://thf.totvs.com.br/sample/api/static/assets/${{"S\xE3o Paulo":"sp","Santa Catarina":"sc",Paran\u00E1:"pr"}[p]}.png`}static \u0275fac=function(r){return new(r||a)(_(te),_(ge))};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-scheduling"]],viewQuery:function(r,n){if(r&1&&B(ht,7),r&2){let d;A(d=G())&&(n.form=d.first)}},standalone:!1,features:[xe([ge])],decls:20,vars:12,consts:[["schedulingForm","ngForm"],["OptionsGroupTitle",""],["optionsGroup",""],[1,"po-text-center"],[1,"po-font-title"],[1,"po-row"],["name","name","p-clean","","p-label","Name","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","email","p-clean","","p-label","Email","p-placeholder","example@domain.com","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","birthday","p-clean","","p-label","Birthday","p-placeholder","dd/mm/yyyy","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","phone","p-clean","","p-label","Phone number","p-mask","(99) 99999-9999","p-placeholder","(99) 99999-9999","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","city","p-icon","an an-map-trifold","p-label","Select a location","p-placeholder","Select a location","p-required","","p-sort","",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-combo-option-template",""],["name","typeScheduling","p-label","Type scheduling","p-required","","p-sort","",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","medicalSpecialty","p-icon","an an-flask","p-label","Medical Specialty/Exam","p-required","","p-sort","","p-field-label","specialty","p-field-value","specialtyValue",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","informations","p-help","Additional informations","p-label","Informations",1,"po-sm-12",3,"ngModelChange","ngModel"],["p-label","Schedule","p-kind","primary",1,"po-md-3",3,"p-click","p-disabled"],[4,"ngIf","ngIfThen","ngIfElse"],["p-size","xs",1,"po-sm-2","po-md-3","po-lg-1",2,"background-color","#fbfbfb",3,"p-src"],[1,"po-sm-10","po-md-9","po-lg-11"]],template:function(r,n){if(r&1){let d=H();t(0,"div",3)(1,"div",4),o(2,"Pre-appointment scheduling"),e()(),t(3,"form",null,0)(5,"div",5)(6,"po-input",6),f("ngModelChange",function(i){return u(d),h(n.name,i)||(n.name=i),b(i)}),e(),t(7,"po-email",7),f("ngModelChange",function(i){return u(d),h(n.email,i)||(n.email=i),b(i)}),e()(),t(8,"div",5)(9,"po-datepicker",8),f("ngModelChange",function(i){return u(d),h(n.birthday,i)||(n.birthday=i),b(i)}),e(),t(10,"po-input",9),f("ngModelChange",function(i){return u(d),h(n.phone,i)||(n.phone=i),b(i)}),e()(),t(11,"div",5)(12,"po-combo",10),f("ngModelChange",function(i){return u(d),h(n.city,i)||(n.city=i),b(i)}),D(13,Ct,5,3,"ng-template",11),e(),t(14,"po-select",12),f("ngModelChange",function(i){return u(d),h(n.typeScheduling,i)||(n.typeScheduling=i),b(i)}),e(),t(15,"po-combo",13),f("ngModelChange",function(i){return u(d),h(n.medicalSpecialty,i)||(n.medicalSpecialty=i),b(i)}),e()(),t(16,"div",5)(17,"po-textarea",14),f("ngModelChange",function(i){return u(d),h(n.informations,i)||(n.informations=i),b(i)}),e()(),t(18,"div",5)(19,"po-button",15),S("p-click",function(){return u(d),b(n.confirmPreAppointment(n.name))}),e()()()}if(r&2){let d=I(4);m(6),g("ngModel",n.name),m(),g("ngModel",n.email),m(2),g("ngModel",n.birthday),m(),g("ngModel",n.phone),m(2),g("ngModel",n.city),s("p-options",n.citiesOptions),m(2),g("ngModel",n.typeScheduling),s("p-options",n.typeSchedulings),m(),g("ngModel",n.medicalSpecialty),s("p-options",n.medicalSpecialtyOptions),m(2),g("ngModel",n.informations),m(2),s("p-disabled",d.invalid)}},dependencies:[j,Q,L,N,q,U,de,K,oe,k,ue,De,be,J,Ne],encapsulation:2})}return a})();var yt=a=>({"docs-sample-code-tabs":a}),je=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-scheduling-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),o(3,"PO Combo - Scheduling"),e(),t(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),o(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),o(12,"sample-po-combo-scheduling/sample-po-combo-scheduling.component.html"),e(),t(13,"pre",7),o(14,`<div class="po-text-center">
  <div class="po-font-title">Pre-appointment scheduling</div>
</div>

<form #schedulingForm="ngForm">
  <div class="po-row">
    <po-input class="po-lg-6" name="name" [(ngModel)]="name" p-clean p-label="Name" p-required> </po-input>

    <po-email
      class="po-lg-6"
      name="email"
      [(ngModel)]="email"
      p-clean
      p-label="Email"
      p-placeholder="example@domain.com"
      p-required
    >
    </po-email>
  </div>

  <div class="po-row">
    <po-datepicker
      class="po-lg-6"
      name="birthday"
      [(ngModel)]="birthday"
      p-clean
      p-label="Birthday"
      p-placeholder="dd/mm/yyyy"
      p-required
    >
    </po-datepicker>

    <po-input
      class="po-lg-6"
      name="phone"
      [(ngModel)]="phone"
      p-clean
      p-label="Phone number"
      p-mask="(99) 99999-9999"
      p-placeholder="(99) 99999-9999"
      p-required
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-combo
      class="po-lg-6"
      name="city"
      [(ngModel)]="city"
      p-icon="an an-map-trifold"
      p-label="Select a location"
      p-placeholder="Select a location"
      p-required
      p-sort
      [p-options]="citiesOptions"
    >
      <ng-template p-combo-option-template let-option>
        <ng-container *ngIf="option.options; then OptionsGroupTitle; else optionsGroup"></ng-container>
        <ng-template #OptionsGroupTitle>
          <div class="po-row">
            <po-avatar
              class="po-sm-2 po-md-3 po-lg-1"
              p-size="xs"
              style="background-color: #fbfbfb"
              [p-src]="getStateByLabel(option.label)"
            >
            </po-avatar>
            <p class="po-sm-10 po-md-9 po-lg-11">{ { option.label }}</p>
          </div>
        </ng-template>
        <ng-template #optionsGroup>
          <div class="po-sm-10 po-md-9 po-lg-11">{ { option.label }}</div>
        </ng-template>
      </ng-template>
    </po-combo>

    <po-select
      class="po-lg-6"
      name="typeScheduling"
      [(ngModel)]="typeScheduling"
      p-label="Type scheduling"
      p-required
      p-sort
      [p-options]="typeSchedulings"
    >
    </po-select>

    <po-combo
      class="po-lg-6"
      name="medicalSpecialty"
      [(ngModel)]="medicalSpecialty"
      p-icon="an an-flask"
      p-label="Medical Specialty/Exam"
      p-required
      p-sort
      [p-options]="medicalSpecialtyOptions"
      p-field-label="specialty"
      p-field-value="specialtyValue"
    >
    </po-combo>
  </div>

  <div class="po-row">
    <po-textarea
      class="po-sm-12"
      name="informations"
      [(ngModel)]="informations"
      p-help="Additional informations"
      p-label="Informations"
    >
    </po-textarea>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-3"
      p-label="Schedule"
      p-kind="primary"
      [p-disabled]="schedulingForm.invalid"
      (p-click)="confirmPreAppointment(name)"
    >
    </po-button>
  </div>
</form>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),o(18,"sample-po-combo-scheduling/sample-po-combo-scheduling.component.ts"),e(),t(19,"pre",9),o(20,`import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PoComboOption, PoComboOptionGroup, PoNotificationService, PoSelectOption } from '@po-ui/ng-components';
import { SamplePoComboSchedulingService } from './sample-po-combo-scheduling.service';

@Component({
  selector: 'sample-po-combo-scheduling',
  templateUrl: './sample-po-combo-scheduling.component.html',
  providers: [SamplePoComboSchedulingService],
  standalone: false
})
export class SamplePoComboSchedulingComponent implements OnInit {
  @ViewChild('schedulingForm', { static: true }) form: NgForm;

  birthday: string;
  citiesOptions: Array<PoComboOptionGroup>;
  city: string;
  email: string;
  informations: string;
  medicalSpecialty: string;
  medicalSpecialtyOptions: Array<any>;
  name: string;
  phone: string;
  typeScheduling: string;

  readonly typeSchedulings: Array<PoSelectOption> = [
    { label: 'Particular', value: 'particular' },
    { label: 'Health Insurance', value: 'healthInsurance' }
  ];

  constructor(
    private poNotification: PoNotificationService,
    private schedulingService: SamplePoComboSchedulingService
  ) {}

  ngOnInit() {
    this.citiesOptions = this.schedulingService.getcities();
    this.medicalSpecialtyOptions = this.schedulingService.getMedicalSpecialty();
  }

  confirmPreAppointment(name: string = '') {
    this.poNotification.success(\`Great \${name}, your pre-appointment was successfully received!\`);

    this.form.reset();
  }

  getStateByLabel(state: string) {
    const stateByLabel = {
      ['S\xE3o Paulo']: 'sp',
      ['Santa Catarina']: 'sc',
      ['Paran\xE1']: 'pr'
    };

    return \`https://thf.totvs.com.br/sample/api/static/assets/\${stateByLabel[state]}.png\`;
  }
}
`),e(),t(21,"label",6),o(22,"sample-po-combo-scheduling/sample-po-combo-scheduling.service.ts"),e(),t(23,"pre",9),o(24,`import { Injectable } from '@angular/core';

import { PoComboOptionGroup } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoComboSchedulingService {
  getcities(): Array<PoComboOptionGroup> {
    return [
      {
        label: 'S\xE3o Paulo',
        options: [
          { label: 'S\xE3o Paulo', value: 'sao paulo' },
          { label: 'Campinas', value: 'campinas' }
        ]
      },
      {
        label: 'Paran\xE1',
        options: [
          { label: 'S\xE3o Jos\xE9 dos Pinhais', value: 'sao jose dos pinhais' },
          { label: 'Londrina', value: 'londrina' },
          { label: 'Maring\xE1', value: 'maringa' }
        ]
      },
      {
        label: 'Santa Catarina',
        options: [
          { label: 'Joinville', value: 'joinville' },
          { label: 'Florian\xF3polis', value: 'florianopolis' },
          { label: 'Itaja\xED', value: 'itajai' }
        ]
      }
    ];
  }

  getMedicalSpecialty() {
    return [
      { specialty: 'Allergist', specialtyValue: 'allergist' },
      { specialty: 'Cardiologist', specialtyValue: 'cardiologist' },
      { specialty: 'General practitioner', specialtyValue: 'generalPractitioner' },
      { specialty: 'Dermatologist', specialtyValue: 'dermatologist' },
      { specialty: 'Gynecologist', specialtyValue: 'gynecologist' },
      { specialty: 'Nutritionist', specialtyValue: 'nutritionist' },
      { specialty: 'Pediatrist', specialtyValue: 'pediatrist' },
      { specialty: 'Psychiatrist', specialtyValue: 'psychiatrist' },
      { specialty: 'Orthopaedist', specialtyValue: 'orthopaedist' }
    ];
  }
}
`),e()()()()(),t(25,"div",10),l(26,"sample-po-combo-scheduling"),e(),l(27,"hr")),r&2&&(m(5),P("po-icon "+n.sampleCodeButtonIcon),m(),v(" ",n.sampleCodeButtonLabel,""),m(),s("ngClass",M(4,yt,n.hideSampleCodeTabs)))},dependencies:[T,w,y,x,Re],encapsulation:2})}return a})();var wt=["transferForm"];function _t(a,V){if(a&1&&(t(0,"div",3),l(1,"po-avatar",15),t(2,"div",16)(3,"div",17),o(4),e(),t(5,"div",18),o(6),e()()()),a&2){let p=V.$implicit;m(4),ae(p.label),m(2),v("Account: ",p.value,"")}}var Ue=(()=>{class a{poNotification;form;poModal;contact;dateTransfer=new Date;typeAccount="Checking Account";value;cancelAction={label:"Cancel",action:()=>this.poModal.close()};confirmAction={label:"Confirm",action:()=>this.confirmTransfer()};typeAccounts=[{label:"Checking Account",value:"Checking Account"},{label:"Savings Account",value:"Savings Account"}];constructor(p){this.poNotification=p}confirmTransfer(){this.poModal.close(),this.poNotification.success("Successful Transfer"),this.formReset()}transfer(){this.poModal.open()}formReset(){this.form.reset({dateTransfer:new Date,typeAccount:"Checking Account"})}static \u0275fac=function(r){return new(r||a)(_(te))};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-transfer"]],viewQuery:function(r,n){if(r&1&&(B(wt,7),B(se,7)),r&2){let d;A(d=G())&&(n.form=d.first),A(d=G())&&(n.poModal=d.first)}},standalone:!1,decls:23,vars:14,consts:[["transferForm","ngForm"],[1,"po-text-center"],[1,"po-font-title"],[1,"po-row"],["name","typeAccount","p-label","From","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","contact","p-field-value","id","p-field-label","name","p-filter-service","https://po-sample-api.onrender.com/v1/people","p-icon","an an-user","p-label","To contact","p-placeholder","Select a contact","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-combo-option-template",""],["name","value","p-clean","","p-label","Value to transfer","p-placeholder","R$ 0,00","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","dateTransfer","p-label","Date to transfer","p-placeholder","dd/mm/yyyy","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Transfer","p-kind","primary",1,"po-md-3",3,"p-click","p-disabled"],["p-title","Do you confirm transfer?",3,"p-primary-action","p-secondary-action"],["p-label","From",1,"po-md-6",3,"p-value"],["p-label","To",1,"po-md-6",3,"p-value"],["p-label","Value",1,"po-md-6",3,"p-value"],["p-label","Date to transfer",1,"po-md-6",3,"p-value"],["p-size","sm",1,"po-sm-2","po-md-3","po-lg-1"],[1,"po-sm-10","po-md-9","po-lg-11"],[1,"po-font-text-large-bold"],[1,"po-font-text-smaller"]],template:function(r,n){if(r&1){let d=H();t(0,"div",1)(1,"div",2),o(2,"Banking Transfer"),e()(),t(3,"form",null,0)(5,"div",3)(6,"po-select",4),f("ngModelChange",function(i){return u(d),h(n.typeAccount,i)||(n.typeAccount=i),b(i)}),e(),t(7,"po-combo",5),f("ngModelChange",function(i){return u(d),h(n.contact,i)||(n.contact=i),b(i)}),D(8,_t,7,2,"ng-template",6),e()(),t(9,"div",3)(10,"po-decimal",7),f("ngModelChange",function(i){return u(d),h(n.value,i)||(n.value=i),b(i)}),e(),t(11,"po-datepicker",8),f("ngModelChange",function(i){return u(d),h(n.dateTransfer,i)||(n.dateTransfer=i),b(i)}),e()(),t(12,"div",3)(13,"po-button",9),S("p-click",function(){return u(d),b(n.transfer())}),e()()(),t(14,"po-modal",10)(15,"div",3),l(16,"po-info",11)(17,"po-info",12),e(),l(18,"po-divider"),t(19,"div",3),l(20,"po-info",13)(21,"po-info",14),z(22,"date"),e()()}if(r&2){let d=I(4);m(6),g("ngModel",n.typeAccount),s("p-options",n.typeAccounts),m(),g("ngModel",n.contact),m(3),g("ngModel",n.value),m(),g("ngModel",n.dateTransfer),m(2),s("p-disabled",d.invalid),m(),s("p-primary-action",n.confirmAction)("p-secondary-action",n.cancelAction),m(2),s("p-value",n.typeAccount),m(),s("p-value",n.contact),m(3),s("p-value",n.value),m(),ye("p-value",R(22,12,n.dateTransfer))}},dependencies:[Q,L,N,q,U,de,K,me,oe,k,ue,Fe,J,W,se,_e],encapsulation:2})}return a})();var Mt=a=>({"docs-sample-code-tabs":a}),Qe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-transfer-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),o(3,"PO Combo - Banking Transfer"),e(),t(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),o(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),o(12,"sample-po-combo-transfer/sample-po-combo-transfer.component.html"),e(),t(13,"pre",7),o(14,`<div class="po-text-center">
  <div class="po-font-title">Banking Transfer</div>
</div>

<form #transferForm="ngForm">
  <div class="po-row">
    <po-select
      class="po-md-6"
      name="typeAccount"
      [(ngModel)]="typeAccount"
      p-label="From"
      p-required
      [p-options]="typeAccounts"
    >
    </po-select>

    <po-combo
      class="po-md-6"
      name="contact"
      [(ngModel)]="contact"
      p-field-value="id"
      p-field-label="name"
      p-filter-service="https://po-sample-api.onrender.com/v1/people"
      p-icon="an an-user"
      p-label="To contact"
      p-placeholder="Select a contact"
      p-required
    >
      <ng-template p-combo-option-template let-option>
        <div class="po-row">
          <po-avatar class="po-sm-2 po-md-3 po-lg-1" p-size="sm"></po-avatar>

          <div class="po-sm-10 po-md-9 po-lg-11">
            <div class="po-font-text-large-bold">{ { option.label }}</div>
            <div class="po-font-text-smaller">Account: { { option.value }}</div>
          </div>
        </div>
      </ng-template>
    </po-combo>
  </div>

  <div class="po-row">
    <po-decimal
      class="po-md-6"
      name="value"
      [(ngModel)]="value"
      p-clean
      p-label="Value to transfer"
      p-placeholder="R$ 0,00"
      p-required
    >
    </po-decimal>

    <po-datepicker
      class="po-md-6"
      name="dateTransfer"
      [(ngModel)]="dateTransfer"
      p-label="Date to transfer"
      p-placeholder="dd/mm/yyyy"
      p-required
    >
    </po-datepicker>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-3"
      p-label="Transfer"
      p-kind="primary"
      [p-disabled]="transferForm.invalid"
      (p-click)="transfer()"
    >
    </po-button>
  </div>
</form>

<po-modal p-title="Do you confirm transfer?" [p-primary-action]="confirmAction" [p-secondary-action]="cancelAction">
  <div class="po-row">
    <po-info class="po-md-6" p-label="From" [p-value]="typeAccount"> </po-info>

    <po-info class="po-md-6" p-label="To" [p-value]="contact"> </po-info>
  </div>

  <po-divider></po-divider>

  <div class="po-row">
    <po-info class="po-md-6" p-label="Value" [p-value]="value"> </po-info>

    <po-info class="po-md-6" p-label="Date to transfer" p-value="{ { dateTransfer | date }}"> </po-info>
  </div>
</po-modal>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),o(18,"sample-po-combo-transfer/sample-po-combo-transfer.component.ts"),e(),t(19,"pre",9),o(20,`import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PoModalAction, PoModalComponent, PoNotificationService, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-combo-transfer',
  templateUrl: './sample-po-combo-transfer.component.html',
  standalone: false
})
export class SamplePoComboTransferComponent {
  @ViewChild('transferForm', { static: true }) form: NgForm;
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  contact: any;
  dateTransfer: Date = new Date();
  typeAccount: string = 'Checking Account';
  value: number;

  cancelAction: PoModalAction = {
    label: 'Cancel',
    action: () => this.poModal.close()
  };

  confirmAction: PoModalAction = {
    label: 'Confirm',
    action: () => this.confirmTransfer()
  };

  readonly typeAccounts: Array<PoSelectOption> = [
    { label: 'Checking Account', value: 'Checking Account' },
    { label: 'Savings Account', value: 'Savings Account' }
  ];

  constructor(private poNotification: PoNotificationService) {}

  confirmTransfer() {
    this.poModal.close();

    this.poNotification.success('Successful Transfer');

    this.formReset();
  }

  transfer() {
    this.poModal.open();
  }

  private formReset() {
    this.form.reset({
      dateTransfer: new Date(),
      typeAccount: 'Checking Account'
    });
  }
}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-combo-transfer"),e(),l(23,"hr")),r&2&&(m(5),P("po-icon "+n.sampleCodeButtonIcon),m(),v(" ",n.sampleCodeButtonLabel,""),m(),s("ngClass",M(4,Mt,n.hideSampleCodeTabs)))},dependencies:[T,w,y,x,Ue],encapsulation:2})}return a})();function kt(a,V){if(a&1&&(X(0),t(1,"div",0),l(2,"po-info",4)(3,"po-info",5)(4,"po-info",6),e(),Z()),a&2){let p=V.ngIf;m(2),s("p-value",p.name),m(),s("p-value",p.nickname),m(),s("p-value",p.email)}}var Je=(()=>{class a{http;hero$;heroName;constructor(p){this.http=p}get knowMoreLabel(){return this.heroName?"Know more":void 0}knowMore(p){window.open(`http://google.com/search?q=${p}`,"_blank")}onChangeHero(p){this.hero$=this.getHero(p)}getHero(p){return this.http.get(`https://po-sample-api.onrender.com/v1/heroes/${p}`)}static \u0275fac=function(r){return new(r||a)(_(ee))};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-heroes"]],standalone:!1,decls:5,vars:5,consts:[[1,"po-row"],[1,"po-lg-6",3,"p-primary-action","p-primary-label"],["name","heroName","p-field-label","nickname","p-field-value","name","p-filter-service","https://po-sample-api.onrender.com/v1/heroes","p-label","Search a Hero","p-sort","",3,"ngModelChange","p-change","ngModel"],[4,"ngIf"],["p-label","Name",1,"po-md-4",3,"p-value"],["p-label","Nickname",1,"po-md-4",3,"p-value"],["p-label","Email",1,"po-md-4",3,"p-value"]],template:function(r,n){r&1&&(t(0,"div",0)(1,"po-widget",1),S("p-primary-action",function(){return n.knowMore(n.heroName)}),t(2,"po-combo",2),f("ngModelChange",function(c){return h(n.heroName,c)||(n.heroName=c),c}),S("p-change",function(c){return n.onChangeHero(c)}),e(),D(3,kt,5,3,"ng-container",3),z(4,"async"),e()()),r&2&&(m(),s("p-primary-label",n.knowMoreLabel),m(),g("ngModel",n.heroName),m(),s("ngIf",R(4,3,n.hero$)))},dependencies:[j,L,q,k,W,ne,$],encapsulation:2})}return a})();var Vt=a=>({"docs-sample-code-tabs":a}),Ye=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-heroes-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),o(3,"PO Combo - Heroes"),e(),t(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),o(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),o(12,"sample-po-combo-heroes/sample-po-combo-heroes.component.html"),e(),t(13,"pre",7),o(14,`<div class="po-row">
  <po-widget class="po-lg-6" [p-primary-label]="knowMoreLabel" (p-primary-action)="knowMore(heroName)">
    <po-combo
      name="heroName"
      [(ngModel)]="heroName"
      p-field-label="nickname"
      p-field-value="name"
      p-filter-service="https://po-sample-api.onrender.com/v1/heroes"
      p-label="Search a Hero"
      p-sort
      (p-change)="onChangeHero($event)"
    >
    </po-combo>

    <ng-container *ngIf="hero$ | async as hero">
      <div class="po-row">
        <po-info class="po-md-4" p-label="Name" [p-value]="hero.name"> </po-info>

        <po-info class="po-md-4" p-label="Nickname" [p-value]="hero.nickname"> </po-info>

        <po-info class="po-md-4" p-label="Email" [p-value]="hero.email"> </po-info>
      </div>
    </ng-container>
  </po-widget>
</div>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),o(18,"sample-po-combo-heroes/sample-po-combo-heroes.component.ts"),e(),t(19,"pre",9),o(20,`import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import { Observable } from 'rxjs';

@Component({
  selector: 'sample-po-combo-heroes',
  templateUrl: './sample-po-combo-heroes.component.html',
  standalone: false
})
export class SamplePoComboHeroesComponent {
  hero$: Observable<any>;
  heroName: string;

  constructor(private http: HttpClient) {}

  get knowMoreLabel() {
    return this.heroName ? 'Know more' : undefined;
  }

  knowMore(heroName: string) {
    window.open(\`http://google.com/search?q=\${heroName}\`, '_blank');
  }

  onChangeHero(heroName: string) {
    this.hero$ = this.getHero(heroName);
  }

  private getHero(heroName: string) {
    return this.http.get(\`https://po-sample-api.onrender.com/v1/heroes/\${heroName}\`);
  }
}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-combo-heroes"),e(),l(23,"hr")),r&2&&(m(5),P("po-icon "+n.sampleCodeButtonIcon),m(),v(" ",n.sampleCodeButtonLabel,""),m(),s("ngClass",M(4,Vt,n.hideSampleCodeTabs)))},dependencies:[T,w,y,x,Je],encapsulation:2})}return a})();function qt(a,V){if(a&1&&(X(0),t(1,"div",0),l(2,"po-info",5)(3,"po-info",6)(4,"po-info",7),e(),Z()),a&2){let p=V.ngIf;m(2),s("p-value",p.name),m(),s("p-value",p.nickname),m(),s("p-value",p.email)}}var Xe=(()=>{class a{http;formBuilder;form;hero$;constructor(p,r){this.http=p,this.formBuilder=r}ngOnInit(){this.form=this.formBuilder.group({hero:[null,Pe.required]})}get knowMoreLabel(){return this.form.valid?"Know more":void 0}knowMore(){let p=this.form.get("hero").value;window.open(`http://google.com/search?q=${p}`,"_blank")}onChangeHero(p){this.hero$=this.getHero(p)}getHero(p){return this.http.get(`https://po-sample-api.onrender.com/v1/heroes/${p}`)}static \u0275fac=function(r){return new(r||a)(_(ee),_(ke))};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-heroes-reactive-form"]],standalone:!1,decls:6,vars:5,consts:[[1,"po-row"],[1,"po-lg-6",3,"p-primary-action","p-primary-label"],[3,"formGroup"],["name","heroName","formControlName","hero","p-field-label","nickname","p-field-value","name","p-filter-service","https://po-sample-api.onrender.com/v1/heroes","p-label","Search a Hero","p-sort","",3,"p-change"],[4,"ngIf"],["p-label","Name",1,"po-md-4",3,"p-value"],["p-label","Nickname",1,"po-md-4",3,"p-value"],["p-label","Email",1,"po-md-4",3,"p-value"]],template:function(r,n){r&1&&(t(0,"div",0)(1,"po-widget",1),S("p-primary-action",function(){return n.knowMore()}),t(2,"div",2)(3,"po-combo",3),S("p-change",function(c){return n.onChangeHero(c)}),e()(),D(4,qt,5,3,"ng-container",4),z(5,"async"),e()()),r&2&&(m(),s("p-primary-label",n.knowMoreLabel),m(),s("formGroup",n.form),m(2),s("ngIf",R(5,3,n.hero$)))},dependencies:[j,L,N,Me,Te,k,W,ne,$],encapsulation:2})}return a})();var Dt=a=>({"docs-sample-code-tabs":a}),Ze=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-heroes-reactive-form-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),o(3,"PO Combo - Heroes Reactive Form"),e(),t(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),o(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),o(12,"sample-po-combo-heroes-reactive-form/sample-po-combo-heroes-reactive-form.component.html"),e(),t(13,"pre",7),o(14,`<div class="po-row">
  <po-widget class="po-lg-6" [p-primary-label]="knowMoreLabel" (p-primary-action)="knowMore()">
    <div [formGroup]="form">
      <po-combo
        name="heroName"
        formControlName="hero"
        p-field-label="nickname"
        p-field-value="name"
        p-filter-service="https://po-sample-api.onrender.com/v1/heroes"
        p-label="Search a Hero"
        p-sort
        (p-change)="onChangeHero($event)"
      >
      </po-combo>
    </div>

    <ng-container *ngIf="hero$ | async as hero">
      <div class="po-row">
        <po-info class="po-md-4" p-label="Name" [p-value]="hero.name"> </po-info>

        <po-info class="po-md-4" p-label="Nickname" [p-value]="hero.nickname"> </po-info>

        <po-info class="po-md-4" p-label="Email" [p-value]="hero.email"> </po-info>
      </div>
    </ng-container>
  </po-widget>
</div>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),o(18,"sample-po-combo-heroes-reactive-form/sample-po-combo-heroes-reactive-form.component.ts"),e(),t(19,"pre",9),o(20,`import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs';

@Component({
  selector: 'sample-po-combo-heroes-reactive-form',
  templateUrl: './sample-po-combo-heroes-reactive-form.component.html',
  standalone: false
})
export class SamplePoComboHeroesReactiveFormComponent implements OnInit {
  form: UntypedFormGroup;
  hero$: Observable<any>;

  constructor(
    private http: HttpClient,
    private formBuilder: UntypedFormBuilder
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      hero: [null, Validators.required]
    });
  }

  get knowMoreLabel() {
    return this.form.valid ? 'Know more' : undefined;
  }

  knowMore() {
    const heroName = this.form.get('hero').value;

    window.open(\`http://google.com/search?q=\${heroName}\`, '_blank');
  }

  onChangeHero(heroName: string) {
    this.hero$ = this.getHero(heroName);
  }

  private getHero(heroName: string) {
    return this.http.get(\`https://po-sample-api.onrender.com/v1/heroes/\${heroName}\`);
  }
}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-combo-heroes-reactive-form"),e(),l(23,"hr")),r&2&&(m(5),P("po-icon "+n.sampleCodeButtonIcon),m(),v(" ",n.sampleCodeButtonLabel,""),m(),s("ngClass",M(4,Dt,n.hideSampleCodeTabs)))},dependencies:[T,w,y,x,Xe],encapsulation:2})}return a})();function Nt(a,V){if(a&1&&(X(0),t(1,"div",0),l(2,"po-info",4)(3,"po-info",5)(4,"po-info",6),e(),Z()),a&2){let p=V.ngIf;m(2),s("p-value",p.name),m(),s("p-value",p.nickname),m(),s("p-value",p.email)}}var $e=(()=>{class a{http;peopleName;people$;constructor(p){this.http=p}onChangePeople(p){this.people$=this.getPeople(p)}getPeople(p){return this.http.get(`https://po-sample-api.onrender.com/v1/people/${p}`)}static \u0275fac=function(r){return new(r||a)(_(ee))};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-infinity-scroll"]],standalone:!1,decls:5,vars:5,consts:[[1,"po-row"],[1,"po-lg-6"],["p-filter-service","https://po-sample-api.onrender.com/v1/people","p-label","People","name","people","p-field-label","name","p-field-value","id",3,"ngModelChange","p-change","ngModel","p-infinite-scroll"],[4,"ngIf"],["p-label","Name",1,"po-md-4",3,"p-value"],["p-label","Nickname",1,"po-md-4",3,"p-value"],["p-label","Email",1,"po-md-4",3,"p-value"]],template:function(r,n){r&1&&(t(0,"div",0)(1,"po-widget",1)(2,"po-combo",2),f("ngModelChange",function(c){return h(n.peopleName,c)||(n.peopleName=c),c}),S("p-change",function(c){return n.onChangePeople(c)}),e(),D(3,Nt,5,3,"ng-container",3),z(4,"async"),e()()),r&2&&(m(2),g("ngModel",n.peopleName),s("p-infinite-scroll",!0),m(),s("ngIf",R(4,3,n.people$)))},dependencies:[j,L,q,k,W,ne,$],encapsulation:2})}return a})();var Ht=a=>({"docs-sample-code-tabs":a}),et=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-infinity-scroll-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),o(3,"PO Combo - Inifity Scroll"),e(),t(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),o(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),o(12,"sample-po-combo-infinity-scroll/sample-po-combo-infinity-scroll.component.html"),e(),t(13,"pre",7),o(14,`<div class="po-row">
  <po-widget class="po-lg-6">
    <po-combo
      p-filter-service="https://po-sample-api.onrender.com/v1/people"
      p-label="People"
      name="people"
      [(ngModel)]="peopleName"
      (p-change)="onChangePeople($event)"
      [p-infinite-scroll]="true"
      p-field-label="name"
      p-field-value="id"
    ></po-combo>

    <ng-container *ngIf="people$ | async as people">
      <div class="po-row">
        <po-info class="po-md-4" p-label="Name" [p-value]="people.name"> </po-info>

        <po-info class="po-md-4" p-label="Nickname" [p-value]="people.nickname"> </po-info>

        <po-info class="po-md-4" p-label="Email" [p-value]="people.email"> </po-info>
      </div>
    </ng-container>
  </po-widget>
</div>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),o(18,"sample-po-combo-infinity-scroll/sample-po-combo-infinity-scroll.component.ts"),e(),t(19,"pre",9),o(20,`import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'sample-po-combo-infinity-scroll',
  templateUrl: './sample-po-combo-infinity-scroll.component.html',
  standalone: false
})
export class SamplePoComboInfinityScrollComponent {
  peopleName: string;
  people$: Observable<any>;

  constructor(private http: HttpClient) {}

  onChangePeople(peopleId: string) {
    this.people$ = this.getPeople(peopleId);
  }

  private getPeople(peopleId: string) {
    return this.http.get(\`https://po-sample-api.onrender.com/v1/people/\${peopleId}\`);
  }
}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-combo-infinity-scroll"),e(),l(23,"hr")),r&2&&(m(5),P("po-icon "+n.sampleCodeButtonIcon),m(),v(" ",n.sampleCodeButtonLabel,""),m(),s("ngClass",M(4,Ht,n.hideSampleCodeTabs)))},dependencies:[T,w,y,x,$e],encapsulation:2})}return a})();var At=["bookingForm"],Gt=["datepicker"],tt=(()=>{class a{poNotification;form;datepickerComponent;adults=1;category=!1;checkin;checkout;children=0;hotel;rooms=1;filterParams={};adultsOptions=[{label:"1 Adult",value:1},{label:"2 Adults",value:2},{label:"3 Adults",value:3},{label:"4 Adults",value:4}];childrenOptions=[{label:"No Child",value:0},{label:"1 Child",value:1},{label:"2 Children",value:2}];roomsOptions=[{label:"1 Room",value:1},{label:"2 Rooms",value:2},{label:"3 Rooms",value:3}];constructor(p){this.poNotification=p}booking(){this.poNotification.success("Hotel booked successfully"),this.formReset(),this.datepickerComponent.focus()}onChangeParams(p){this.filterParams=p?{category:"Luxo"}:{},this.hotel=void 0}formReset(){this.form.reset({adults:1,category:!1,children:0,rooms:1})}static \u0275fac=function(r){return new(r||a)(_(te))};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-hotels"]],viewQuery:function(r,n){if(r&1&&(B(At,7),B(Gt,7)),r&2){let d;A(d=G())&&(n.form=d.first),A(d=G())&&(n.datepickerComponent=d.first)}},standalone:!1,decls:18,vars:14,consts:[["bookingForm","ngForm"],["datepicker",""],[1,"po-text-center"],[1,"po-font-title"],[1,"po-row"],["name","checkin","p-label","Check In","p-placeholder","dd/mm/yyyy","p-required","",1,"po-md-4",3,"ngModelChange","ngModel","p-max-date"],["name","checkout","p-label","Check Out","p-placeholder","dd/mm/yyyy","p-required","",1,"po-md-4",3,"ngModelChange","ngModel","p-min-date"],["name","switch","p-label-off","No, thank you.","p-label-on","Yes, please.","p-label","Only Luxury Category",1,"po-md-4",3,"ngModelChange","p-change","ngModel"],["name","rooms","p-label","Rooms",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","children","p-label","Children",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","adults","p-label","Adults",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","hotel","p-debounce-time","500","p-disabled-init-filter","","p-filter-minlength","1","p-icon","an an-magnifying-glass","p-required","","p-field-label","name","p-field-value","value","p-label","Search a hotel","p-sort","","p-filter-service","https://po-sample-api.onrender.com/v1/hotels",1,"po-sm-12",3,"ngModelChange","ngModel","p-filter-params"],["p-label","Booking","p-kind","primary",1,"po-md-3",3,"p-click","p-disabled"]],template:function(r,n){if(r&1){let d=H();t(0,"div",2)(1,"div",3),o(2,"Booking a Hotel"),e()(),t(3,"form",null,0)(5,"div",4)(6,"po-datepicker",5,1),f("ngModelChange",function(i){return u(d),h(n.checkin,i)||(n.checkin=i),b(i)}),e(),t(8,"po-datepicker",6),f("ngModelChange",function(i){return u(d),h(n.checkout,i)||(n.checkout=i),b(i)}),e(),t(9,"po-switch",7),f("ngModelChange",function(i){return u(d),h(n.category,i)||(n.category=i),b(i)}),S("p-change",function(i){return u(d),b(n.onChangeParams(i))}),e()(),t(10,"div",4)(11,"po-select",8),f("ngModelChange",function(i){return u(d),h(n.rooms,i)||(n.rooms=i),b(i)}),e(),t(12,"po-select",9),f("ngModelChange",function(i){return u(d),h(n.children,i)||(n.children=i),b(i)}),e(),t(13,"po-select",10),f("ngModelChange",function(i){return u(d),h(n.adults,i)||(n.adults=i),b(i)}),e()(),t(14,"div",4)(15,"po-combo",11),f("ngModelChange",function(i){return u(d),h(n.hotel,i)||(n.hotel=i),b(i)}),e()(),t(16,"div",4)(17,"po-button",12),S("p-click",function(){return u(d),b(n.booking())}),e()()()}if(r&2){let d=I(4);m(6),g("ngModel",n.checkin),s("p-max-date",n.checkout),m(2),g("ngModel",n.checkout),s("p-min-date",n.checkin),m(),g("ngModel",n.category),m(2),g("ngModel",n.rooms),s("p-options",n.roomsOptions),m(),g("ngModel",n.children),s("p-options",n.childrenOptions),m(),g("ngModel",n.adults),s("p-options",n.adultsOptions),m(2),g("ngModel",n.hotel),s("p-filter-params",n.filterParams),m(2),s("p-disabled",d.invalid)}},dependencies:[Q,L,N,q,U,K,oe,k,J,ce],encapsulation:2})}return a})();var Rt=a=>({"docs-sample-code-tabs":a}),ot=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-hotels-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),o(3,"PO Combo - Booking Hotel"),e(),t(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),o(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),o(12,"sample-po-combo-hotels/sample-po-combo-hotels.component.html"),e(),t(13,"pre",7),o(14,`<div class="po-text-center">
  <div class="po-font-title">Booking a Hotel</div>
</div>

<form #bookingForm="ngForm">
  <div class="po-row">
    <po-datepicker
      #datepicker
      class="po-md-4"
      name="checkin"
      [(ngModel)]="checkin"
      p-label="Check In"
      p-placeholder="dd/mm/yyyy"
      p-required
      [p-max-date]="checkout"
    >
    </po-datepicker>

    <po-datepicker
      class="po-md-4"
      name="checkout"
      [(ngModel)]="checkout"
      p-label="Check Out"
      p-placeholder="dd/mm/yyyy"
      p-required
      [p-min-date]="checkin"
    >
    </po-datepicker>

    <po-switch
      class="po-md-4"
      name="switch"
      [(ngModel)]="category"
      p-label-off="No, thank you."
      p-label-on="Yes, please."
      p-label="Only Luxury Category"
      (p-change)="onChangeParams($event)"
    >
    </po-switch>
  </div>

  <div class="po-row">
    <po-select class="po-md-4" name="rooms" [(ngModel)]="rooms" p-label="Rooms" [p-options]="roomsOptions"> </po-select>

    <po-select class="po-md-4" name="children" [(ngModel)]="children" p-label="Children" [p-options]="childrenOptions">
    </po-select>

    <po-select class="po-md-4" name="adults" [(ngModel)]="adults" p-label="Adults" [p-options]="adultsOptions">
    </po-select>
  </div>

  <div class="po-row">
    <po-combo
      class="po-sm-12"
      name="hotel"
      [(ngModel)]="hotel"
      p-debounce-time="500"
      p-disabled-init-filter
      p-filter-minlength="1"
      p-icon="an an-magnifying-glass"
      p-required
      p-field-label="name"
      p-field-value="value"
      p-label="Search a hotel"
      p-sort
      p-filter-service="https://po-sample-api.onrender.com/v1/hotels"
      [p-filter-params]="filterParams"
    >
    </po-combo>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-3"
      p-label="Booking"
      p-kind="primary"
      [p-disabled]="bookingForm.invalid"
      (p-click)="booking()"
    >
    </po-button>
  </div>
</form>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),o(18,"sample-po-combo-hotels/sample-po-combo-hotels.component.ts"),e(),t(19,"pre",9),o(20,`import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PoDatepickerComponent, PoNotificationService, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-combo-hotels',
  templateUrl: './sample-po-combo-hotels.component.html',
  standalone: false
})
export class SamplePoComboHotelsComponent {
  @ViewChild('bookingForm', { static: true }) form: NgForm;
  @ViewChild('datepicker', { static: true }) datepickerComponent: PoDatepickerComponent;

  adults: number = 1;
  category: boolean = false;
  checkin: Date;
  checkout: Date;
  children: number = 0;
  hotel: string;
  rooms: number = 1;
  filterParams = {};

  readonly adultsOptions: Array<PoSelectOption> = [
    { label: '1 Adult', value: 1 },
    { label: '2 Adults', value: 2 },
    { label: '3 Adults', value: 3 },
    { label: '4 Adults', value: 4 }
  ];

  readonly childrenOptions: Array<PoSelectOption> = [
    { label: 'No Child', value: 0 },
    { label: '1 Child', value: 1 },
    { label: '2 Children', value: 2 }
  ];

  readonly roomsOptions: Array<PoSelectOption> = [
    { label: '1 Room', value: 1 },
    { label: '2 Rooms', value: 2 },
    { label: '3 Rooms', value: 3 }
  ];

  constructor(private poNotification: PoNotificationService) {}

  booking() {
    this.poNotification.success('Hotel booked successfully');

    this.formReset();

    this.datepickerComponent.focus();
  }

  onChangeParams(isLuxury: boolean) {
    this.filterParams = isLuxury ? { category: 'Luxo' } : {};
    this.hotel = undefined;
  }

  private formReset() {
    this.form.reset({
      adults: 1,
      category: false,
      children: 0,
      rooms: 1
    });
  }
}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-combo-hotels"),e(),l(23,"hr")),r&2&&(m(5),P("po-icon "+n.sampleCodeButtonIcon),m(),v(" ",n.sampleCodeButtonLabel,""),m(),s("ngClass",M(4,Rt,n.hideSampleCodeTabs)))},dependencies:[T,w,y,x,tt],encapsulation:2})}return a})();var nt=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-doc"]],standalone:!1,decls:1615,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoComboFilterMode"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","PoComboFilter"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoComboLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","Array<PoComboOption"],["pan","",1,"docs-api-property-type","PoComboOptionGroup"],["pan","",1,"docs-api-property-type","any>"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type"],["pan","",1,"docs-api-property-type","Array<PoComboOption>"]],template:function(r,n){r&1&&(t(0,"div",0)(1,"p",1)(2,"code"),o(3,"import { PoFieldModule } from '@po-ui/ng-components';"),e()(),t(4,"div",2)(5,"p"),o(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),e(),t(7,"blockquote")(8,"p"),o(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),t(10,"code"),o(11,"FormsModule"),e(),o(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),t(13,"code"),o(14,"ReactiveFormsModule"),e(),o(15,", ambos nativos do Angular."),e()()(),t(16,"h3",3),o(17,"Componente"),e(),t(18,"h4",4)(19,"code",5),o(20,"PoComboComponent"),e()(),t(21,"div",2)(22,"p"),o(23,"O "),t(24,"code"),o(25,"po-combo"),e(),o(26," exibe uma lista de op\xE7\xF5es com f\xE1cil sele\xE7\xE3o e filtragem."),e(),t(27,"p"),o(28,"Al\xE9m da exibi\xE7\xE3o padr\xE3o, nele \xE9 poss\xEDvel listar as op\xF5es em agrupamentos."),e(),t(29,"p"),o(30,"\xC9 poss\xEDvel selecionar e navegar entre as op\xE7\xF5es da lista tanto atrav\xE9s do "),t(31,"em"),o(32,"mouse"),e(),o(33,` quanto do teclado. No teclado navegue com
as setas e pressione `),t(34,"em"),o(35,"Enter"),e(),o(36," na op\xE7\xE3o que desejar."),e(),t(37,"p"),o(38,"Com ele tamb\xE9m \xE9 poss\xEDvel definir uma lista \xE0 partir da requisi\xE7\xE3o de um servi\xE7o definido em "),t(39,"code"),o(40,"p-filter-service"),e(),o(41,"."),e(),t(42,"p"),o(43,"Em "),t(44,"code"),o(45,"p-filter-mode"),e(),o(46,", o filtro poder\xE1 ser configurado para buscar op\xF5es que correspondam ao in\xEDcio, fim ou que contenha o valor digitado."),e(),t(47,"p"),o(48,"O "),t(49,"code"),o(50,"po-combo"),e(),o(51," guarda o \xFAltimo valor caso o usu\xE1rio desista de uma busca, deixando o campo ou pressionando "),t(52,"em"),o(53,"Esc"),e(),o(54,`. Caso seja digitado no
campo de busca a descri\xE7\xE3o completa de um item, ent\xE3o a sele\xE7\xE3o ser\xE1 automaticamente efetuada ao deixar o campo ou pressionando `),t(55,"em"),o(56,"Enter"),e(),o(57,"."),e(),t(58,"p"),o(59,`Utilizando po-combo com servi\xE7o, \xE9 possivel digitar um valor no campo de entrada e pressionar a tecla 'tab' para que o componente
fa\xE7a uma requisi\xE7\xE3o \xE0 URL informada passando o valor digitado no campo. Se encontrado o valor, ent\xE3o o mesmo ser\xE1 selecionado, caso
n\xE3o seja encontrado, ent\xE3o a lista de itens voltar\xE1 para o estado inicial.`),e(),t(60,"h4"),o(61,"Tokens customiz\xE1veis"),e(),t(62,"p"),o(63,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),e(),t(64,"blockquote")(65,"p"),o(66,"Para maiores informa\xE7\xF5es, acesse o guia "),t(67,"a",6),o(68,"Personalizando o Tema Padr\xE3o com Tokens CSS"),e(),o(69,"."),e()(),t(70,"table")(71,"thead")(72,"tr")(73,"th"),o(74,"Propriedade"),e(),t(75,"th"),o(76,"Descri\xE7\xE3o"),e(),t(77,"th"),o(78,"Valor Padr\xE3o"),e()()(),t(79,"tbody")(80,"tr")(81,"td")(82,"strong"),o(83,"Default Values"),e()(),l(84,"td")(85,"td"),e(),t(86,"tr")(87,"td")(88,"code"),o(89,"--font-family"),e()(),t(90,"td"),o(91,"Fam\xEDlia tipogr\xE1fica usada"),e(),t(92,"td")(93,"code"),o(94,"var(--font-family-theme)"),e()()(),t(95,"tr")(96,"td")(97,"code"),o(98,"--font-size"),e()(),t(99,"td"),o(100,"Tamanho da fonte"),e(),t(101,"td")(102,"code"),o(103,"var(--font-size-default)"),e()()(),t(104,"tr")(105,"td")(106,"code"),o(107,"--text-color"),e()(),t(108,"td"),o(109,"Cor do texto"),e(),t(110,"td")(111,"code"),o(112,"var(--color-neutral-dark-90)"),e()()(),t(113,"tr")(114,"td")(115,"code"),o(116,"--text-color-placeholder"),e()(),t(117,"td"),o(118,"Cor do texto no placeholder"),e(),t(119,"td")(120,"code"),o(121,"var(--color-neutral-light-30)"),e()()(),t(122,"tr")(123,"td")(124,"code"),o(125,"--color"),e()(),t(126,"td"),o(127,"Cor principal do Combo"),e(),t(128,"td")(129,"code"),o(130,"var(--color-neutral-dark-70)"),e()()(),t(131,"tr")(132,"td")(133,"code"),o(134,"--background"),e()(),t(135,"td"),o(136,"Cor de background"),e(),t(137,"td")(138,"code"),o(139,"var(--color-neutral-light-05)"),e()()(),t(140,"tr")(141,"td")(142,"code"),o(143,"--border-radius"),e()(),t(144,"td"),o(145,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),e(),t(146,"td")(147,"code"),o(148,"var(--border-width-lg)"),e()()(),t(149,"tr")(150,"td")(151,"code"),o(152,"--min-width"),e()(),t(153,"td"),o(154,"Largura m\xEDnima do combo"),e(),t(155,"td")(156,"code"),o(157,"150px"),e()()(),t(158,"tr")(159,"td")(160,"strong"),o(161,"Hover"),e()(),l(162,"td")(163,"td"),e(),t(164,"tr")(165,"td")(166,"code"),o(167,"--color-hover"),e()(),t(168,"td"),o(169,"Cor principal no estado hover"),e(),t(170,"td")(171,"code"),o(172,"var(--color-action-hover)"),e()()(),t(173,"tr")(174,"td")(175,"code"),o(176,"--background-hover"),e()(),t(177,"td"),o(178,"Cor de background no estado hover"),e(),t(179,"td")(180,"code"),o(181,"var(--color-brand-01-lightest)"),e()()(),t(182,"tr")(183,"td")(184,"strong"),o(185,"Focused"),e()(),l(186,"td")(187,"td"),e(),t(188,"tr")(189,"td")(190,"code"),o(191,"--color-focused"),e()(),t(192,"td"),o(193,"Cor principal no estado de focus"),e(),t(194,"td")(195,"code"),o(196,"var(--color-action-default)"),e()()(),t(197,"tr")(198,"td")(199,"code"),o(200,"--outline-color-focused"),e()(),t(201,"td"),o(202,"Cor do outline do estado de focus"),e(),t(203,"td")(204,"code"),o(205,"var(--color-action-focus)"),e()()(),t(206,"tr")(207,"td")(208,"strong"),o(209,"Error"),e()(),l(210,"td")(211,"td"),e(),t(212,"tr")(213,"td")(214,"code"),o(215,"--color-error"),e()(),t(216,"td"),o(217,"Cor principal no estado de erro"),e(),t(218,"td")(219,"code"),o(220,"var(--color-feedback-negative-base)"),e()()(),t(221,"tr")(222,"td")(223,"strong"),o(224,"Disabled"),e()(),l(225,"td")(226,"td"),e(),t(227,"tr")(228,"td")(229,"code"),o(230,"--color-disabled"),e()(),t(231,"td"),o(232,"Cor principal no estado disabled"),e(),t(233,"td")(234,"code"),o(235,"var(--color-neutral-light-30)"),e()()(),t(236,"tr")(237,"td")(238,"code"),o(239,"--background-disabled"),e()(),t(240,"td"),o(241,"Cor de background no estado disabled"),e(),t(242,"td")(243,"code"),o(244,"var(--color-neutral-light-20)"),e()()(),t(245,"tr")(246,"td")(247,"strong"),o(248,"Suggestion"),e()(),l(249,"td")(250,"td"),e(),t(251,"tr")(252,"td")(253,"code"),o(254,"--text-color-suggestion"),e()(),t(255,"td"),o(256,"Cor do texto no estado suggestion"),e(),t(257,"td")(258,"code"),o(259,"var(--color-neutral-mid-60)"),e()()(),t(260,"tr")(261,"td")(262,"code"),o(263,"--background-suggestion"),e()(),t(264,"td"),o(265,"Cor do background no estado suggestion"),e(),t(266,"td")(267,"code"),o(268,"var(--color-brand-01-lightest)"),e()()()()()(),t(269,"div",7)(270,"h4",8),o(271,"Seletor"),e(),t(272,"pre",9),o(273,`<po-combo
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    p-cache="boolean"
    (p-change)="EventEmitter"
    p-change-on-enter="boolean"
    p-clean="boolean"
    p-debounce-time="number"
    p-disabled="boolean"
    p-disabled-init-filter="boolean"
    p-disabled-tab-filter="boolean"
    p-emit-object-value="boolean"
    p-error-limit="boolean"
    p-field-error-message="string"
    p-field-label="string"
    p-field-value="string"
    p-filter-minlength="number"
    p-filter-mode="PoComboFilterMode"
    p-filter-params="any"
    p-filter-service="PoComboFilter | string"
    p-help="string"
    p-icon="string | TemplateRef<void>"
    p-infinite-scroll="boolean"
    p-infinite-scroll-distance="number"
    (p-input-change)="EventEmitter"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-literals="PoComboLiterals"
    name="string"
    (ng-model-change)="EventEmitter"
    p-optional="boolean"
    p-options="Array<PoComboOption | PoComboOptionGroup | any>"
    p-placeholder="string"
    p-remove-initial-filter="boolean"
    p-required="boolean"
    p-show-required="boolean"
    p-size="string"
    p-sort="boolean" >
</po-combo>
`),e()(),t(274,"h4",10),o(275,"Propriedades"),e(),t(276,"table",11)(277,"tr",12)(278,"th",13),o(279,"Nome"),e(),t(280,"th",13),o(281,"Tipo"),e(),t(282,"th",13),o(283,"Padr\xE3o"),e(),t(284,"th",13),o(285,"Descri\xE7\xE3o"),e()(),t(286,"tr",14)(287,"td",15)(288,"div",16)(289,"span",17),o(290," (p-additional-help)"),l(291,"br"),e()()(),t(292,"td",18)(293,"code",19),o(294,"EventEmitter"),e()(),t(295,"td",20),o(296,"-"),e(),t(297,"td",21)(298,"em")(299,"strong"),o(300,"(opcional)"),e()(),t(301,"p"),o(302,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),t(303,"code"),o(304,"p-help"),e(),o(305,"."),e()()(),t(306,"tr",14)(307,"td",15)(308,"div",22)(309,"span",23),o(310," p-additional-help-tooltip"),l(311,"br"),e()()(),t(312,"td",18)(313,"code",24),o(314,"string"),e()(),t(315,"td",20),o(316,"-"),e(),t(317,"td",21)(318,"em")(319,"strong"),o(320,"(opcional)"),e()(),t(321,"p"),o(322,"Exibe um \xEDcone de ajuda adicional ao "),t(323,"code"),o(324,"p-help"),e(),o(325,`, com o texto desta propriedade no tooltip.
Se o evento `),t(326,"code"),o(327,"p-additional-help"),e(),o(328,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),t(329,"strong"),o(330,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),e()(),t(331,"blockquote")(332,"p"),o(333,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),e()()()(),t(334,"tr",14)(335,"td",15)(336,"div",22)(337,"span",23),o(338," p-append-in-body"),l(339,"br"),e()()(),t(340,"td",18)(341,"code",25),o(342,"boolean"),e()(),t(343,"td",20)(344,"p")(345,"code"),o(346,"false"),e()()(),t(347,"td",21)(348,"em")(349,"strong"),o(350,"(opcional)"),e()(),t(351,"p"),o(352,"Define que o "),t(353,"code"),o(354,"listbox"),e(),o(355," e/ou tooltip ("),t(356,"code"),o(357,"p-additional-help-tooltip"),e(),o(358," e/ou "),t(359,"code"),o(360,"p-error-limit"),e(),o(361,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou
overflow escondido,garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),e(),t(362,"blockquote")(363,"p"),o(364,`O uso dessa propriedade pode acarretar na perda sequencial da tabula\xE7\xE3o da p\xE1gina. Quando utilizado com
`),t(365,"code"),o(366,"p-additional-help-tooltip"),e(),o(367,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),e()()()(),t(368,"tr",14)(369,"td",15)(370,"div",22)(371,"span",23),o(372," p-auto-focus"),l(373,"br"),e()()(),t(374,"td",18)(375,"code",25),o(376,"boolean"),e()(),t(377,"td",20)(378,"p")(379,"code"),o(380,"false"),e()()(),t(381,"td",21)(382,"em")(383,"strong"),o(384,"(opcional)"),e()(),t(385,"p"),o(386,"Aplica foco no elemento ao ser iniciado."),e(),t(387,"blockquote")(388,"p"),o(389,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),e()()()(),t(390,"tr",14)(391,"td",15)(392,"div",22)(393,"span",23),o(394," p-cache"),l(395,"br"),e()()(),t(396,"td",18)(397,"code",25),o(398,"boolean"),e()(),t(399,"td",20)(400,"p")(401,"code"),o(402,"true"),e()()(),t(403,"td",21)(404,"em")(405,"strong"),o(406,"(opcional)"),e()(),t(407,"p"),o(408,"Define se o componente ir\xE1 guardar o valor do model para evitar requisi\xE7\xF5es repetidas."),e(),t(409,"blockquote")(410,"p"),o(411,"Caso o valor seja "),t(412,"code"),o(413,"false"),e(),o(414,", o componente far\xE1 uma nova requisi\xE7\xE3o mesmo que o valor procurado seja o mesmo do model."),e()()()(),t(415,"tr",14)(416,"td",15)(417,"div",16)(418,"span",17),o(419," (p-change)"),l(420,"br"),e()()(),t(421,"td",18)(422,"code",19),o(423,"EventEmitter"),e()(),t(424,"td",20),o(425,"-"),e(),t(426,"td",21)(427,"em")(428,"strong"),o(429,"(opcional)"),e()(),t(430,"p"),o(431,"Deve ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver altera\xE7\xF5es no ngModel. A fun\xE7\xE3o receber\xE1 como argumento o model modificado."),e(),t(432,"blockquote")(433,"p"),o(434,"Pode-se optar pelo recebimento do objeto selecionado ao inv\xE9s do model atrav\xE9s da propriedade "),t(435,"code"),o(436,"p-emit-object-value"),e(),o(437,"."),e()()()(),t(438,"tr",14)(439,"td",15)(440,"div",22)(441,"span",23),o(442," p-change-on-enter"),l(443,"br"),e()()(),t(444,"td",18)(445,"code",25),o(446,"boolean"),e()(),t(447,"td",20)(448,"p")(449,"code"),o(450,"false"),e()()(),t(451,"td",21)(452,"em")(453,"strong"),o(454,"(opcional)"),e()(),t(455,"p"),o(456,"Indica que o evento "),t(457,"code"),o(458,"p-change"),e(),o(459,' s\xF3 ser\xE1 disparado ao clicar ou pressionar a tecla "Enter" sobre uma op\xE7\xE3o selecionada.'),e()()(),t(460,"tr",14)(461,"td",15)(462,"div",22)(463,"span",23),o(464," p-clean"),l(465,"br"),e()()(),t(466,"td",18)(467,"code",25),o(468,"boolean"),e()(),t(469,"td",20),o(470,"-"),e(),t(471,"td",21)(472,"em")(473,"strong"),o(474,"(opcional)"),e()(),t(475,"p"),o(476,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),e()()(),t(477,"tr",14)(478,"td",15)(479,"div",22)(480,"span",23),o(481," p-debounce-time"),l(482,"br"),e()()(),t(483,"td",18)(484,"code",26),o(485,"number"),e()(),t(486,"td",20)(487,"p")(488,"code"),o(489,"400"),e()()(),t(490,"td",21)(491,"em")(492,"strong"),o(493,"(opcional)"),e()(),t(494,"p"),o(495,`Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro ap\xF3s cada pressionamento de tecla.
Ser\xE1 utilizada apenas quando houver servi\xE7o (`),t(496,"code"),o(497,"p-filter-service"),e(),o(498,")."),e()()(),t(499,"tr",14)(500,"td",15)(501,"div",22)(502,"span",23),o(503," p-disabled"),l(504,"br"),e()()(),t(505,"td",18)(506,"code",25),o(507,"boolean"),e()(),t(508,"td",20)(509,"p")(510,"code"),o(511,"false"),e()()(),t(512,"td",21)(513,"em")(514,"strong"),o(515,"(opcional)"),e()(),t(516,"p"),o(517,"Indica que o campo ser\xE1 desabilitado."),e()()(),t(518,"tr",14)(519,"td",15)(520,"div",22)(521,"span",23),o(522," p-disabled-init-filter"),l(523,"br"),e()()(),t(524,"td",18)(525,"code",25),o(526,"boolean"),e()(),t(527,"td",20)(528,"p")(529,"code"),o(530,"false"),e()()(),t(531,"td",21)(532,"em")(533,"strong"),o(534,"(opcional)"),e()(),t(535,"p"),o(536,"Desabilita o filtro inicial no servi\xE7o, que \xE9 executado no primeiro clique no campo."),e()()(),t(537,"tr",14)(538,"td",15)(539,"div",22)(540,"span",23),o(541," p-disabled-tab-filter"),l(542,"br"),e()()(),t(543,"td",18)(544,"code",25),o(545,"boolean"),e()(),t(546,"td",20)(547,"p")(548,"code"),o(549,"false"),e()()(),t(550,"td",21)(551,"em")(552,"strong"),o(553,"(opcional)"),e()(),t(554,"p"),o(555,"Se verdadeiro, desabilitar\xE1 a busca de um item via TAB."),e()()(),t(556,"tr",14)(557,"td",15)(558,"div",22)(559,"span",23),o(560," p-emit-object-value"),l(561,"br"),e()()(),t(562,"td",18)(563,"code",25),o(564,"boolean"),e()(),t(565,"td",20)(566,"p")(567,"code"),o(568,"false"),e()()(),t(569,"td",21)(570,"em")(571,"strong"),o(572,"(opcional)"),e()(),t(573,"p"),o(574,"Se verdadeiro, o evento "),t(575,"code"),o(576,"p-change"),e(),o(577," receber\xE1 como argumento o "),t(578,"code"),o(579,"PoComboOption"),e(),o(580," referente \xE0 op\xE7\xE3o selecionada."),e()()(),t(581,"tr",14)(582,"td",15)(583,"div",22)(584,"span",23),o(585," p-error-limit"),l(586,"br"),e()()(),t(587,"td",18)(588,"code",25),o(589,"boolean"),e()(),t(590,"td",20)(591,"p")(592,"code"),o(593,"false"),e()()(),t(594,"td",21)(595,"em")(596,"strong"),o(597,"(opcional)"),e()(),t(598,"p"),o(599,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),e(),t(600,"blockquote")(601,"p"),o(602,"Caso essa propriedade seja definida como "),t(603,"code"),o(604,"true"),e(),o(605,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),e()()()(),t(606,"tr",14)(607,"td",15)(608,"div",22)(609,"span",23),o(610," p-field-error-message"),l(611,"br"),e()()(),t(612,"td",18)(613,"code",24),o(614,"string"),e()(),t(615,"td",20),o(616,"-"),e(),t(617,"td",21)(618,"em")(619,"strong"),o(620,"(opcional)"),e()(),t(621,"p"),o(622,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),e(),t(623,"blockquote")(624,"p"),o(625,"Necess\xE1rio que a propriedade "),t(626,"code"),o(627,"p-required"),e(),o(628," esteja habilitada."),e()()()(),t(629,"tr",14)(630,"td",15)(631,"div",22)(632,"span",23),o(633," p-field-label"),l(634,"br"),e()()(),t(635,"td",18)(636,"code",24),o(637,"string"),e()(),t(638,"td",20)(639,"p")(640,"code"),o(641,"label"),e()()(),t(642,"td",21)(643,"em")(644,"strong"),o(645,"(opcional)"),e()(),t(646,"p"),o(647,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),t(648,"code"),o(649,"p-options"),e(),o(650,"), esta propriedade ser\xE1 respons\xE1vel pelo texto de apresenta\xE7\xE3o de cada item da lista."),e(),t(651,"p"),o(652,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
PoComboOption.`),e()()(),t(653,"tr",14)(654,"td",15)(655,"div",22)(656,"span",23),o(657," p-field-value"),l(658,"br"),e()()(),t(659,"td",18)(660,"code",24),o(661,"string"),e()(),t(662,"td",20)(663,"p")(664,"code"),o(665,"value"),e()()(),t(666,"td",21)(667,"em")(668,"strong"),o(669,"(opcional)"),e()(),t(670,"p"),o(671,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),t(672,"code"),o(673,"p-options"),e(),o(674,"), esta propriedade ser\xE1 respons\xE1vel pelo valor de cada item da lista."),e(),t(675,"p"),o(676,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
PoComboOption.`),e()()(),t(677,"tr",14)(678,"td",15)(679,"div",22)(680,"span",23),o(681," p-filter-minlength"),l(682,"br"),e()()(),t(683,"td",18)(684,"code",26),o(685,"number"),e()(),t(686,"td",20)(687,"p")(688,"code"),o(689,"0"),e()()(),t(690,"td",21)(691,"em")(692,"strong"),o(693,"(opcional)"),e()(),t(694,"p"),o(695,"Valor m\xEDnimo de caracteres para realizar o filtro no servi\xE7o."),e()()(),t(696,"tr",14)(697,"td",15)(698,"div",22)(699,"span",23),o(700," p-filter-mode"),l(701,"br"),e()()(),t(702,"td",18)(703,"code",27),o(704,"PoComboFilterMode"),e()(),t(705,"td",20)(706,"p")(707,"code"),o(708,"startsWith"),e()()(),t(709,"td",21)(710,"em")(711,"strong"),o(712,"(opcional)"),e()(),t(713,"p"),o(714,"Define o modo de pesquisa utilizado no filtro da lista de sele\xE7\xE3o: "),t(715,"code"),o(716,"startsWith"),e(),o(717,", "),t(718,"code"),o(719,"contains"),e(),o(720," ou "),t(721,"code"),o(722,"endsWith"),e(),o(723,"."),e(),t(724,"blockquote")(725,"p"),o(726,"Quando utilizar a propriedade "),t(727,"code"),o(728,"p-filter-service"),e(),o(729," esta propriedade ser\xE1 ignorada."),e()()()(),t(730,"tr",14)(731,"td",15)(732,"div",22)(733,"span",23),o(734," p-filter-params"),l(735,"br"),e()()(),t(736,"td",18)(737,"code",28),o(738,"any"),e()(),t(739,"td",20),o(740,"-"),e(),t(741,"td",21)(742,"em")(743,"strong"),o(744,"(opcional)"),e()(),t(745,"p"),o(746,"Valor que ser\xE1 repassado como par\xE2metro para a URL ou aos m\xE9todos do servi\xE7o que implementam a interface "),t(747,"em"),o(748,"PoComboFilter"),e(),o(749,"."),e(),t(750,"blockquote")(751,"p"),o(752,"Caso a lista contenha agrupamentos, os mesmos s\xF3 ser\xE3o exibidos se houver no m\xEDnimo uma op\xE7\xE3o que corresponda \xE0 pesquisa."),e()()()(),t(753,"tr",14)(754,"td",15)(755,"div",22)(756,"span",23),o(757," p-filter-service"),l(758,"br"),e()()(),t(759,"td",18)(760,"code",29),o(761,"PoComboFilter "),e(),t(762,"code",24),o(763," string"),e()(),t(764,"td",20),o(765,"-"),e(),t(766,"td",21)(767,"em")(768,"strong"),o(769,"(opcional)"),e()(),t(770,"p"),o(771,`Nesta propriedade deve ser informada a URL do servi\xE7o em que ser\xE1 realizado o filtro para carregamento da lista de
itens no componente.
Caso haja a necessidade de customiza\xE7\xE3o, ent\xE3o pode ser informado um servi\xE7o implementando a interface PoComboFilter.`),e(),t(772,"p"),o(773,`Caso utilizado uma URL, o servi\xE7o deve ser retornado no padr\xE3o API TOTVS e utiliza as propriedades
`),t(774,"code"),o(775,"p-field-label"),e(),o(776," e "),t(777,"code"),o(778,"p-field-value"),e(),o(779," para a constru\xE7\xE3o da lista de itens."),e(),t(780,"p"),o(781,"Quando utilizada uma URL de servi\xE7o, ent\xE3o ser\xE1 concatenada nesta URL o valor que deseja-se filtrar da seguinte forma:"),e(),t(782,"pre")(783,"code"),o(784,`url + ?filter=Peter
`),e()(),t(785,"p"),o(786,"Se for definida a propriedade "),t(787,"code"),o(788,"p-filter-params"),e(),o(789,`, a mesma tamb\xE9m ser\xE1 concatenada. Por exemplo, para o
par\xE2metro `),t(790,"code"),o(791,"{ age: 23 }"),e(),o(792," a URL ficaria:"),e(),t(793,"pre")(794,"code"),o(795,`url + ?page=1&pageSize=20&age=23&filter=Peter
`),e()()()(),t(796,"tr",14)(797,"td",15)(798,"div",22)(799,"span",23),o(800," p-help"),l(801,"br"),e()()(),t(802,"td",18)(803,"code",24),o(804,"string"),e()(),t(805,"td",20),o(806,"-"),e(),t(807,"td",21)(808,"em")(809,"strong"),o(810,"(opcional)"),e()(),t(811,"p"),o(812,"Texto de apoio para o campo."),e()()(),t(813,"tr",14)(814,"td",15)(815,"div",22)(816,"span",23),o(817," p-icon"),l(818,"br"),e()()(),t(819,"td",18)(820,"code",24),o(821,"string "),e(),t(822,"code",30),o(823," TemplateRef<void>"),e()(),t(824,"td",20),o(825,"-"),e(),t(826,"td",21)(827,"em")(828,"strong"),o(829,"(opcional)"),e()(),t(830,"p"),o(831,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),e(),t(832,"p"),o(833,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),t(834,"a",31),o(835,"Biblioteca de \xEDcones"),e(),o(836,". conforme exemplo abaixo:"),e(),t(837,"pre")(838,"code"),o(839,`<po-combo p-icon="an an-user" p-label="PO combo"></po-combo>
`),e()(),t(840,"p"),o(841,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),t(842,"em"),o(843,"Font Awesome"),e(),o(844,", da seguinte forma:"),e(),t(845,"pre")(846,"code"),o(847,`<po-combo p-icon="fa fa-podcast" p-label="PO combo"></po-combo>
`),e()(),t(848,"p"),o(849,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),t(850,"code"),o(851,"TemplateRef"),e(),o(852,", conforme exemplo abaixo:"),e(),t(853,"pre")(854,"code"),o(855,`<po-combo [p-icon]="template" p-label="combo template ionic"></po-combo>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),e()(),t(856,"blockquote")(857,"p"),o(858,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),t(859,"code"),o(860,"font-size: inherit"),e(),o(861," caso o \xEDcone utilizado n\xE3o aplique-o."),e()()()(),t(862,"tr",14)(863,"td",15)(864,"div",22)(865,"span",23),o(866," p-infinite-scroll"),l(867,"br"),e()()(),t(868,"td",18)(869,"code",25),o(870,"boolean"),e()(),t(871,"td",20)(872,"p")(873,"code"),o(874,"false"),e()()(),t(875,"td",21)(876,"em")(877,"strong"),o(878,"(opcional)"),e()(),t(879,"p"),o(880,"Se verdadeiro ativa a funcionalidade de scroll infinito para o combo, Ao chegar ao fim da tabela executar\xE1 nova busca dos dados conforme pagina\xE7\xE3o."),e()()(),t(881,"tr",14)(882,"td",15)(883,"div",22)(884,"span",23),o(885," p-infinite-scroll-distance"),l(886,"br"),e()()(),t(887,"td",18)(888,"code",26),o(889,"number"),e()(),t(890,"td",20),o(891,"-"),e(),t(892,"td",21)(893,"em")(894,"strong"),o(895,"(opcional)"),e()(),t(896,"p"),o(897,"Define o percentual necess\xE1rio para disparar o evento "),t(898,"code"),o(899,"show-more"),e(),o(900,", que \xE9 respons\xE1vel por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padr\xE3o ser\xE1 100%."),e(),t(901,"p")(902,"strong"),o(903,"Exemplos"),e()(),t(904,"ul")(905,"li"),o(906,"p-infinite-scroll-distance = 80: Quando atingir 80% do scroll do combo, o "),t(907,"code"),o(908,"show-more"),e(),o(909," ser\xE1 disparado."),e()()()(),t(910,"tr",14)(911,"td",15)(912,"div",16)(913,"span",17),o(914," (p-input-change)"),l(915,"br"),e()()(),t(916,"td",18)(917,"code",19),o(918,"EventEmitter"),e()(),t(919,"td",20),o(920,"-"),e(),t(921,"td",21)(922,"em")(923,"strong"),o(924,"(opcional)"),e()(),t(925,"p"),o(926,"Deve ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver altera\xE7\xF5es no Search input. A fun\xE7\xE3o receber\xE1 como argumento o input modificado."),e()()(),t(927,"tr",14)(928,"td",15)(929,"div",16)(930,"span",17),o(931," (p-keydown)"),l(932,"br"),e()()(),t(933,"td",18)(934,"code",19),o(935,"EventEmitter"),e()(),t(936,"td",20),o(937,"-"),e(),t(938,"td",21)(939,"em")(940,"strong"),o(941,"(opcional)"),e()(),t(942,"p"),o(943,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),t(944,"code"),o(945,"KeyboardEvent"),e(),o(946," com informa\xE7\xF5es sobre a tecla."),e()()(),t(947,"tr",14)(948,"td",15)(949,"div",22)(950,"span",23),o(951," p-label"),l(952,"br"),e()()(),t(953,"td",18)(954,"code",24),o(955,"string"),e()(),t(956,"td",20),o(957,"-"),e(),t(958,"td",21)(959,"em")(960,"strong"),o(961,"(opcional)"),e()(),t(962,"p"),o(963,"Label no componente."),e()()(),t(964,"tr",14)(965,"td",15)(966,"div",22)(967,"span",23),o(968," p-literals"),l(969,"br"),e()()(),t(970,"td",18)(971,"code",32),o(972,"PoComboLiterals"),e()(),t(973,"td",20),o(974,"-"),e(),t(975,"td",21)(976,"em")(977,"strong"),o(978,"(opcional)"),e()(),t(979,"p"),o(980,"Objeto com as literais usadas no "),t(981,"code"),o(982,"po-combo"),e(),o(983,"."),e(),t(984,"p"),o(985,"Para utilizar basta passar a literal que deseja customizar:"),e(),t(986,"pre")(987,"code"),o(988,`const customLiterals: PoComboLiterals = {
  noData: 'Nenhum valor'
};
`),e()(),t(989,"p"),o(990,"E para carregar a literal customizada, basta apenas passar o objeto para o componente."),e(),t(991,"pre")(992,"code"),o(993,`<po-combo
  [p-literals]="customLiterals">
</po-combo>
`),e()(),t(994,"blockquote")(995,"p"),o(996,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),t(997,"a",33)(998,"code"),o(999,"PoI18nService"),e()(),o(1e3," ou do browser."),e()()()(),t(1001,"tr",14)(1002,"td",15)(1003,"div",22)(1004,"span",23),o(1005," name"),l(1006,"br"),e()()(),t(1007,"td",18)(1008,"code",24),o(1009,"string"),e()(),t(1010,"td",20),o(1011,"-"),e(),t(1012,"td",21)(1013,"p"),o(1014,"Nome do componente."),e()()(),t(1015,"tr",14)(1016,"td",15)(1017,"div",16)(1018,"span",17),o(1019," (ngModelChange)"),l(1020,"br"),e()()(),t(1021,"td",18)(1022,"code",19),o(1023,"EventEmitter"),e()(),t(1024,"td",20),o(1025,"-"),e(),t(1026,"td",21)(1027,"em")(1028,"strong"),o(1029,"(opcional)"),e()(),t(1030,"p"),o(1031,"Fun\xE7\xE3o para atualizar o ngModel do componente, necess\xE1rio quando n\xE3o for utilizado dentro da tag form."),e(),t(1032,"p"),o(1033,"Na vers\xE3o 12.2.0 do Angular a verifica\xE7\xE3o "),t(1034,"code"),o(1035,"strictTemplates"),e(),o(1036,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),e(),t(1037,"pre")(1038,"code"),o(1039,`<po-combo ... [ngModel]="comboModel" (ngModelChange)="comboModel = $event"> </po-combo>
`),e()()()(),t(1040,"tr",14)(1041,"td",15)(1042,"div",22)(1043,"span",23),o(1044," p-optional"),l(1045,"br"),e()()(),t(1046,"td",18)(1047,"code",25),o(1048,"boolean"),e()(),t(1049,"td",20)(1050,"p")(1051,"code"),o(1052,"false"),e()()(),t(1053,"td",21)(1054,"em")(1055,"strong"),o(1056,"(opcional)"),e()(),t(1057,"p"),o(1058,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),e(),t(1059,"blockquote")(1060,"p"),o(1061,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),e()(),t(1062,"ul")(1063,"li"),o(1064,"O campo conter "),t(1065,"code"),o(1066,"p-required"),e(),o(1067,";"),e(),t(1068,"li"),o(1069,"N\xE3o possuir "),t(1070,"code"),o(1071,"p-help"),e(),o(1072," e/ou "),t(1073,"code"),o(1074,"p-label"),e(),o(1075,"."),e()()()(),t(1076,"tr",14)(1077,"td",15)(1078,"div",22)(1079,"span",23),o(1080," p-options"),l(1081,"br"),e()()(),t(1082,"td",18)(1083,"code",34),o(1084,"Array<PoComboOption "),e(),t(1085,"code",35),o(1086," PoComboOptionGroup "),e(),t(1087,"code",36),o(1088," any>"),e()(),t(1089,"td",20),o(1090,"-"),e(),t(1091,"td",21)(1092,"p"),o(1093,"Nesta propriedade define a lista de op\xE7\xF5es do "),t(1094,"code"),o(1095,"po-combo"),e(),o(1096,"."),e(),t(1097,"blockquote")(1098,"p"),o(1099,"A lista pode ser definida utilizando um array com o valor representando o "),t(1100,"code"),o(1101,"value"),e(),o(1102," e o "),t(1103,"code"),o(1104,"label"),e(),o(1105," das seguintes formas:"),e()(),t(1106,"pre")(1107,"code"),o(1108,`<po-combo name="combo" p-label="PO Combo" [p-options]="[{value: 1, label: 'One'}, {value: 2, label: 'two'}]"> </po-combo>
`),e()(),t(1109,"pre")(1110,"code"),o(1111,`<po-combo name="combo" p-label="PO Combo" [p-options]="[{name: 'Roger', age: 28}, {name: 'Anne', age: 35}]" p-field-label="name" p-field-value="age"> </po-combo>
`),e()(),t(1112,"ul")(1113,"li"),o(1114,"Aconselha-se utilizar valores distintos no "),t(1115,"code"),o(1116,"label"),e(),o(1117," e "),t(1118,"code"),o(1119,"value"),e(),o(1120," dos itens."),e()()()(),t(1121,"tr",14)(1122,"td",15)(1123,"div",22)(1124,"span",23),o(1125," p-placeholder"),l(1126,"br"),e()()(),t(1127,"td",18)(1128,"code",24),o(1129,"string"),e()(),t(1130,"td",20),o(1131,"-"),e(),t(1132,"td",21)(1133,"p"),o(1134,"Mensagem apresentada enquanto o campo estiver vazio."),e()()(),t(1135,"tr",14)(1136,"td",15)(1137,"div",22)(1138,"span",23),o(1139," p-remove-initial-filter"),l(1140,"br"),e()()(),t(1141,"td",18)(1142,"code",25),o(1143,"boolean"),e()(),t(1144,"td",20)(1145,"p")(1146,"code"),o(1147,"false"),e()()(),t(1148,"td",21)(1149,"em")(1150,"strong"),o(1151,"(opcional)"),e()(),t(1152,"p"),o(1153,"Define que o filtro no primeiro clique ser\xE1 removido."),e(),t(1154,"blockquote")(1155,"p"),o(1156,`Caso o combo tenha um valor padr\xE3o de inicializa\xE7\xE3o, o primeiro clique
no componente retornar\xE1 todos os itens da lista e n\xE3o apenas o item inicialiazado.`),e()()()(),t(1157,"tr",14)(1158,"td",15)(1159,"div",22)(1160,"span",23),o(1161," p-required"),l(1162,"br"),e()()(),t(1163,"td",18)(1164,"code",25),o(1165,"boolean"),e()(),t(1166,"td",20)(1167,"p")(1168,"code"),o(1169,"false"),e()()(),t(1170,"td",21)(1171,"em")(1172,"strong"),o(1173,"(opcional)"),e()(),t(1174,"p"),o(1175,"Define que o campo ser\xE1 obrigat\xF3rio."),e()()(),t(1176,"tr",14)(1177,"td",15)(1178,"div",22)(1179,"span",23),o(1180," p-show-required"),l(1181,"br"),e()()(),t(1182,"td",18)(1183,"code",25),o(1184,"boolean"),e()(),t(1185,"td",20),o(1186,"-"),e(),t(1187,"td",21)(1188,"p"),o(1189,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),e(),t(1190,"blockquote")(1191,"p"),o(1192,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),e()(),t(1193,"ul")(1194,"li"),o(1195,"N\xE3o possuir "),t(1196,"code"),o(1197,"p-help"),e(),o(1198," e/ou "),t(1199,"code"),o(1200,"p-label"),e(),o(1201,"."),e()()()(),t(1202,"tr",14)(1203,"td",15)(1204,"div",22)(1205,"span",23),o(1206," p-size"),l(1207,"br"),e()()(),t(1208,"td",18)(1209,"code",24),o(1210,"string"),e()(),t(1211,"td",20)(1212,"p")(1213,"code"),o(1214,"medium"),e()()(),t(1215,"td",21)(1216,"em")(1217,"strong"),o(1218,"(opcional)"),e()(),t(1219,"p"),o(1220,"Define o tamanho do componente:"),e(),t(1221,"ul")(1222,"li")(1223,"code"),o(1224,"small"),e(),o(1225,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),e(),t(1226,"li")(1227,"code"),o(1228,"medium"),e(),o(1229,": altura do input como 44px."),e()(),t(1230,"blockquote")(1231,"p"),o(1232,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),t(1233,"code"),o(1234,"medium"),e(),o(1235,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),t(1236,"a",37),o(1237,"po-theme"),e(),o(1238,"."),e()()()(),t(1239,"tr",14)(1240,"td",15)(1241,"div",22)(1242,"span",23),o(1243," p-sort"),l(1244,"br"),e()()(),t(1245,"td",18)(1246,"code",25),o(1247,"boolean"),e()(),t(1248,"td",20),o(1249,"-"),e(),t(1250,"td",21)(1251,"p"),o(1252,"Indica que a lista definida na propriedade p-options ser\xE1 ordenada pela descri\xE7\xE3o."),e()()()(),t(1253,"h3",10),o(1254,"M\xE9todos"),e(),t(1255,"table",38)(1256,"tr",14)(1257,"th",39)(1258,"div",22)(1259,"h4")(1260,"span",23),o(1261," focus "),e()()()()(),t(1262,"tr",21)(1263,"td",21)(1264,"p"),o(1265,"Fun\xE7\xE3o que atribui foco ao componente."),e(),t(1266,"p"),o(1267,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),e(),t(1268,"pre")(1269,"code"),o(1270,`import { PoComboComponent } from '@po-ui/ng-components';

...

@ViewChild(PoComboComponent, { static: true }) combo: PoComboComponent;

focusCombo() {
  this.combo.focus();
}
`),e()()()()(),l(1271,"br"),t(1272,"table",38)(1273,"tr",14)(1274,"th",39)(1275,"div",22)(1276,"h4")(1277,"span",23),o(1278," showAdditionalHelp "),e()()()()(),t(1279,"tr",21)(1280,"td",21)(1281,"p"),o(1282,"M\xE9todo que exibe "),t(1283,"code"),o(1284,"p-additionalHelpTooltip"),e(),o(1285," ou executa a a\xE7\xE3o definida em "),t(1286,"code"),o(1287,"p-additionalHelp"),e(),o(1288,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),t(1289,"code"),o(1290,"p-keydown"),e(),o(1291,"."),e(),t(1292,"pre")(1293,"code"),o(1294,`<po-combo
 #combo
 ...
 p-additional-help-tooltip="Mensagem de ajuda complementar"
 (p-keydown)="onKeyDown($event, combo)"
></po-combo>
`),e()(),t(1295,"pre")(1296,"code"),o(1297,`...
onKeyDown(event: KeyboardEvent, inp: PoComboComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),e()()()()(),l(1298,"br"),t(1299,"h3"),o(1300,"Interfaces"),e(),t(1301,"h4",40)(1302,"code",5),o(1303,"PoComboFilter"),e()(),t(1304,"div",2)(1305,"p"),o(1306,"Interface para os servi\xE7os que ser\xE3o utilizados no po-combo."),e()(),t(1307,"h4",10),o(1308,"M\xE9todos"),e(),t(1309,"table",38)(1310,"tr",14)(1311,"th",39)(1312,"div",22)(1313,"h4")(1314,"span",23),o(1315," getFilteredData "),e()()()()(),t(1316,"tr",21)(1317,"td",21)(1318,"p"),o(1319,`M\xE9todo respons\xE1vel por retornar um Observable que cont\xE9m uma cole\xE7\xE3o de objetos que seguem a interface PoComboOption,
ser\xE1 informado por parametro o campo, de acordo com o fieldLabel, e o valor a ser pesquisado.`),e()()()(),t(1320,"h5")(1321,"b"),o(1322,"Par\xE2metros"),e()(),t(1323,"table",11)(1324,"tr",12)(1325,"th",13),o(1326,"Nome"),e(),t(1327,"th",13),o(1328,"Tipo"),e(),t(1329,"th",13),o(1330,"Descri\xE7\xE3o"),e()(),t(1331,"tr",14)(1332,"td",15),o(1333," params"),e(),t(1334,"td",18)(1335,"code",41),o(1336," any "),e()(),t(1337,"td",21)(1338,"p"),o(1339,"Objeto contendo a propriedade e o valor respons\xE1vel por realizar o filtro."),e()()(),t(1340,"tr",14)(1341,"td",15),o(1342," filterParams"),e(),t(1343,"td",18)(1344,"code",41),o(1345," any "),e()(),t(1346,"td",21)(1347,"p"),o(1348,"Valor informado atrav\xE9s da propriedade "),t(1349,"code"),o(1350,"p-filter-params"),e(),o(1351,"."),e()()()(),l(1352,"br"),t(1353,"table",38)(1354,"tr",14)(1355,"th",39)(1356,"div",22)(1357,"h4")(1358,"span",23),o(1359," getObjectByValue "),e()()()()(),t(1360,"tr",21)(1361,"td",21)(1362,"p"),o(1363,`M\xE9todo respons\xE1vel por retornar um Observable que cont\xE9m apenas o objeto filtrado que seguem a interface PoComboOption,
ser\xE1 informado por parametro valor a ser pesquisado.`),e()()()(),t(1364,"h5")(1365,"b"),o(1366,"Par\xE2metros"),e()(),t(1367,"table",11)(1368,"tr",12)(1369,"th",13),o(1370,"Nome"),e(),t(1371,"th",13),o(1372,"Tipo"),e(),t(1373,"th",13),o(1374,"Descri\xE7\xE3o"),e()(),t(1375,"tr",14)(1376,"td",15),o(1377," value"),e(),t(1378,"td",18)(1379,"code",24),o(1380," string "),e(),t(1381,"code",26),o(1382," number "),e()(),t(1383,"td",21)(1384,"p"),o(1385,"Valor respons\xE1vel por realizar a busca de um \xFAnico objeto."),e()()(),t(1386,"tr",14)(1387,"td",15),o(1388," filterParams"),e(),t(1389,"td",18)(1390,"code",41),o(1391," any "),e()(),t(1392,"td",21)(1393,"p"),o(1394,"Valor informado atrav\xE9s da propriedade "),t(1395,"code"),o(1396,"p-filter-params"),e(),o(1397,"."),e()()()(),l(1398,"br"),t(1399,"h4",40)(1400,"code",5),o(1401,"PoComboLiterals"),e()(),t(1402,"div",2)(1403,"p"),o(1404,"Interface para defini\xE7\xE3o das literais usadas no "),t(1405,"code"),o(1406,"po-combo"),e(),o(1407,"."),e()(),t(1408,"h4",10),o(1409,"Propriedades"),e(),t(1410,"table",11)(1411,"tr",12)(1412,"th",13),o(1413,"Nome"),e(),t(1414,"th",13),o(1415,"Tipo"),e(),t(1416,"th",13),o(1417,"Descri\xE7\xE3o"),e()(),t(1418,"tr",14)(1419,"td",15)(1420,"div",22)(1421,"span",23),o(1422," chooseOption"),l(1423,"br"),e()()(),t(1424,"td",18)(1425,"code",24),o(1426,"string"),e()(),t(1427,"td",21)(1428,"em")(1429,"strong"),o(1430,"(opcional)"),e()(),t(1431,"p"),o(1432,"Texto exibido quando o combo estiver vazio."),e()()(),t(1433,"tr",14)(1434,"td",15)(1435,"div",22)(1436,"span",23),o(1437," clean"),l(1438,"br"),e()()(),t(1439,"td",18)(1440,"code",24),o(1441,"string"),e()(),t(1442,"td",21)(1443,"em")(1444,"strong"),o(1445,"(opcional)"),e()(),t(1446,"p"),o(1447,"Texto do aria-label do bot\xE3o de limpar"),e()()(),t(1448,"tr",14)(1449,"td",15)(1450,"div",22)(1451,"span",23),o(1452," noData"),l(1453,"br"),e()()(),t(1454,"td",18)(1455,"code",24),o(1456,"string"),e()(),t(1457,"td",21)(1458,"em")(1459,"strong"),o(1460,"(opcional)"),e()(),t(1461,"p"),o(1462,"Texto exibido quando n\xE3o houver itens na lista ou se, a pesquisa do filtro n\xE3o retornar nenhum item."),e()()()(),t(1463,"h4",40)(1464,"code",5),o(1465,"PoComboOptionGroup"),e()(),t(1466,"div",2)(1467,"p"),o(1468,"Interface dos agrupamentos da cole\xE7\xE3o que ser\xE1 exibida no dropdown do "),t(1469,"code"),o(1470,"po-combo"),e(),o(1471,"."),e()(),t(1472,"h4",10),o(1473,"Propriedades"),e(),t(1474,"table",11)(1475,"tr",12)(1476,"th",13),o(1477,"Nome"),e(),t(1478,"th",13),o(1479,"Tipo"),e(),t(1480,"th",13),o(1481,"Descri\xE7\xE3o"),e()(),t(1482,"tr",14)(1483,"td",15)(1484,"div",22)(1485,"span",23),o(1486," label"),l(1487,"br"),e()()(),t(1488,"td",18)(1489,"code",24),o(1490,"string"),e()(),t(1491,"td",21)(1492,"p"),o(1493,"T\xEDtulo para cada grupo de op\xE7\xF5es."),e()()(),t(1494,"tr",14)(1495,"td",15)(1496,"div",22)(1497,"span",23),o(1498," options"),l(1499,"br"),e()()(),t(1500,"td",18)(1501,"code",42),o(1502,"Array<PoComboOption>"),e()(),t(1503,"td",21)(1504,"p"),o(1505,"Lista de itens a serem exibidos."),e()()()(),t(1506,"h4",40)(1507,"code",5),o(1508,"PoComboOption"),e()(),t(1509,"div",2)(1510,"p"),o(1511,"Interface que define as op\xE7\xF5es que ser\xE3o exibidas na lista do "),t(1512,"code"),o(1513,"po-combo"),e(),o(1514,"."),e()(),t(1515,"h4",10),o(1516,"Propriedades"),e(),t(1517,"table",11)(1518,"tr",12)(1519,"th",13),o(1520,"Nome"),e(),t(1521,"th",13),o(1522,"Tipo"),e(),t(1523,"th",13),o(1524,"Descri\xE7\xE3o"),e()(),t(1525,"tr",14)(1526,"td",15)(1527,"div",22)(1528,"span",23),o(1529," label"),l(1530,"br"),e()()(),t(1531,"td",18)(1532,"code",24),o(1533,"string"),e()(),t(1534,"td",21)(1535,"em")(1536,"strong"),o(1537,"(opcional)"),e()(),t(1538,"p"),o(1539,"Descri\xE7\xE3o exibida nas op\xE7\xF5es da lista."),e(),t(1540,"blockquote")(1541,"p"),o(1542,"Caso n\xE3o seja definida ser\xE1 assumido o valor definido na propriedade "),t(1543,"code"),o(1544,"value"),e(),o(1545,"."),e()()()(),t(1546,"tr",14)(1547,"td",15)(1548,"div",22)(1549,"span",23),o(1550," value"),l(1551,"br"),e()()(),t(1552,"td",18)(1553,"code",24),o(1554,"string "),e(),t(1555,"code",26),o(1556," number"),e()(),t(1557,"td",21)(1558,"p"),o(1559,"Valor do objeto que ser\xE1 atribu\xEDdo ao "),t(1560,"em"),o(1561,"model"),e(),o(1562,"."),e()()()(),t(1563,"h3"),o(1564,"Enums"),e(),t(1565,"h4",4)(1566,"code",5),o(1567,"PoComboFilterMode"),e()(),t(1568,"div",2)(1569,"p"),o(1570,"Define o tipo de busca usado no po-combo."),e()(),t(1571,"h4",10),o(1572,"Propriedades"),e(),t(1573,"table",11)(1574,"tr",12)(1575,"th",13),o(1576,"Nome"),e(),t(1577,"th",13),o(1578,"Descri\xE7\xE3o"),e()(),t(1579,"tr",14)(1580,"td",15)(1581,"div",22)(1582,"span",23),o(1583," startsWith"),l(1584,"br"),e()()(),t(1585,"td",21)(1586,"p"),o(1587,"Verifica se o texto "),t(1588,"em"),o(1589,"inicia"),e(),o(1590," com o valor pesquisado. Caso n\xE3o seja especificado um tipo, ser\xE1 esse o utilizado."),e()()(),t(1591,"tr",14)(1592,"td",15)(1593,"div",22)(1594,"span",23),o(1595," contains"),l(1596,"br"),e()()(),t(1597,"td",21)(1598,"p"),o(1599,"Verifica se o texto "),t(1600,"em"),o(1601,"cont\xE9m"),e(),o(1602," o valor pesquisado."),e()()(),t(1603,"tr",14)(1604,"td",15)(1605,"div",22)(1606,"span",23),o(1607," endsWith"),l(1608,"br"),e()()(),t(1609,"td",21)(1610,"p"),o(1611,"Verifica se o texto "),t(1612,"em"),o(1613,"finaliza"),e(),o(1614," com o valor pesquisado."),e()()()()())},dependencies:[w],encapsulation:2})}return a})();var it=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=8;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,r){this.route=p,this.router=r}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let r=p.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(r){return new(r||a)(_(Oe),_(Ve))};static \u0275cmp=E({type:a,selectors:[["ng-component"]],standalone:!1,decls:13,vars:4,consts:[["p-title","Combo",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,n){r&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),S("p-click",function(){return n.changeTab("doc")}),l(3,"sample-po-combo-doc"),e(),t(4,"po-tab",3),S("p-click",function(){return n.changeTab("web")}),l(5,"sample-po-combo-basic-view")(6,"sample-po-combo-labs-view")(7,"sample-po-combo-scheduling-view")(8,"sample-po-combo-transfer-view")(9,"sample-po-combo-heroes-view")(10,"sample-po-combo-heroes-reactive-form-view")(11,"sample-po-combo-infinity-scroll-view")(12,"sample-po-combo-hotels-view"),e()()()),r&2&&(s("p-actions",n.actions),m(2),s("p-active",n.activeTab==="doc"),m(2),s("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"))},dependencies:[We,y,x,Ae,ze,je,Qe,Ye,Ze,et,ot,nt],encapsulation:2})}return a})();var Qt=[{path:"",component:it}],at=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=re({type:a});static \u0275inj=le({imports:[Se.forChild(Qt),Se]})}return a})();var Ao=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=re({type:a});static \u0275inj=le({imports:[He,at]})}return a})();export{Ao as DocPoComboModule};
