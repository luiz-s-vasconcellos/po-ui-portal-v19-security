import{$ as K,$a as w,$d as C,A as ae,Bd as ee,F as h,Fa as D,Fd as F,G as b,Ga as n,Ha as pe,Ia as P,Ka as g,Kb as R,La as f,Lb as A,Ma as E,Mb as H,Na as re,Nb as X,Ob as O,Pa as _,Pb as W,Pc as ge,Rd as Ce,Sb as de,T as p,Tb as ce,Tc as fe,U as q,Ua as N,Vb as ue,Vc as j,Wb as he,Xa as z,Xc as $,Yb as be,Zb as oe,_ as S,_d as y,a as G,bb as se,ea as ie,ec as Se,h as ne,ha as m,jb as Y,jd as Ee,ka as x,na as t,oa as e,pa as l,pb as me,pd as ve,ta as I,td as ye,te as M,ua as u,ud as T,ue as Me,vc as L,x as le,xc as Z,y as Q}from"./chunk-Y4SQKOF7.js";var xe=(()=>{class o{options=[{value:"poMultiselect1",label:"PO Multiselect 1"},{value:"poMultiselect2",label:"PO Multiselect 2"}];static \u0275fac=function(a){return new(a||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-multiselect-basic"]],standalone:!1,decls:1,vars:1,consts:[["name","multiselect","p-label","PO Multiselect",3,"p-options"]],template:function(a,i){a&1&&l(0,"po-multiselect",0),a&2&&m("p-options",i.options)},dependencies:[T],encapsulation:2})}return o})();var We=o=>({"docs-sample-code-tabs":o}),Pe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-multiselect-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Multiselect Basic"),e(),t(4,"a",2),u("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-multiselect-basic/sample-po-multiselect-basic.component.html"),e(),t(13,"pre",7),n(14,`<po-multiselect name="multiselect" p-label="PO Multiselect" [p-options]="options"> </po-multiselect>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-multiselect-basic/sample-po-multiselect-basic.component.ts"),e(),t(19,"pre",9),n(20,`import { Component } from '@angular/core';

import { PoMultiselectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-multiselect-basic',
  templateUrl: './sample-po-multiselect-basic.component.html',
  standalone: false
})
export class SamplePoMultiselectBasicComponent {
  options: Array<PoMultiselectOption> = [
    { value: 'poMultiselect1', label: 'PO Multiselect 1' },
    { value: 'poMultiselect2', label: 'PO Multiselect 2' }
  ];
}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-multiselect-basic"),e(),l(23,"hr")),a&2&&(p(5),x("po-icon "+i.sampleCodeButtonIcon),p(),P(" ",i.sampleCodeButtonLabel,""),p(),m("ngClass",_(4,We,i.hideSampleCodeTabs)))},dependencies:[w,M,y,C,xe],encapsulation:2})}return o})();var _e=(()=>{class o{additionalHelpTooltip;customLiterals;event;filterMode;help;label;literals;multiselect;option;options;placeholder;placeholderSearch;properties;fieldErrorMessage;filterService;fieldLabel;fieldValue;size;filterModeOptions=[{label:"Starts With",value:"startsWith"},{label:"Contains",value:"contains"},{label:"Ends With",value:"endsWith"}];propertiesOptions=[{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"disabled",label:"Disabled"},{value:"optional",label:"Optional"},{value:"hideSearch",label:"Hide Search"},{value:"autoHeight",label:"Auto Height"},{value:"sort",label:"Sort"},{value:"hideSelectAll",label:"Hide Select All"},{value:"errorLimit",label:"Limit Error Message"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}addOption(){this.options=[...this.options,G({},this.option)],this.option={label:void 0,value:void 0}}changeEvent(s){this.event=s}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals=void 0}}restore(){this.additionalHelpTooltip="",this.customLiterals=void 0,this.help="",this.filterMode=void 0,this.label=void 0,this.literals="",this.placeholder="",this.placeholderSearch=void 0,this.properties=[],this.fieldErrorMessage="",this.filterService="",this.fieldLabel="",this.fieldValue="",this.option={label:void 0,value:void 0},this.options=[],this.event="",this.multiselect=[],this.size="medium"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-multiselect-labs"]],standalone:!1,decls:32,vars:45,consts:[["fOption","ngForm"],["f","ngForm"],[1,"po-row"],["name","PO Multiselect",1,"po-md-12",3,"ngModelChange","p-change","p-keydown","ngModel","p-additional-help-tooltip","p-auto-height","p-disabled","p-field-label","p-field-value","p-filter-service","p-filter-mode","p-help","p-hide-search","p-hide-select-all","p-label","p-literals","p-optional","p-options","p-placeholder","p-placeholder-search","p-required","p-field-error-message","p-show-required","p-size","p-sort","p-error-limit"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Events",1,"po-md-6",3,"p-value"],["name","optionLabel","p-label","Option Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","optionValue","p-label","Option Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Option",1,"po-md-4","po-lg-2",3,"p-click","p-disabled"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","additionalHelpTooltip","p-clean","","p-label","Additional Help Tooltip",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholderSearch","p-clean","","p-label","Placeholder Search",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: {"noData": "Sem dados a serem exibidos", "placeholderSearch": "Buscar"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","filterService","p-clean","","p-help","https://po-sample-api.onrender.com/v1/heroes","p-label","Filter Service",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","fieldValue","p-clean","","p-label","Field Value",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldLabel","p-clean","","p-label","Field Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","filterMode","p-columns","4","p-label","Filter mode",1,"po-md-12",3,"ngModelChange","ngModel","p-disabled","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(a,i){if(a&1){let c=I();t(0,"div",2)(1,"po-multiselect",3),E("ngModelChange",function(r){return h(c),f(i.multiselect,r)||(i.multiselect=r),b(r)}),u("p-change",function(){return h(c),b(i.changeEvent("p-change"))})("p-keydown",function(){return h(c),b(i.changeEvent("p-keydown"))}),e()(),l(2,"hr"),t(3,"div",2),l(4,"po-info",4)(5,"po-info",5),e(),l(6,"hr"),t(7,"form",null,0)(9,"div",2)(10,"po-input",6),E("ngModelChange",function(r){return h(c),f(i.option.label,r)||(i.option.label=r),b(r)}),e(),t(11,"po-input",7),E("ngModelChange",function(r){return h(c),f(i.option.value,r)||(i.option.value=r),b(r)}),e()(),t(12,"div",2)(13,"po-button",8),u("p-click",function(){return h(c),b(i.addOption())}),e()()(),l(14,"hr"),t(15,"form",null,1)(17,"po-input",9),E("ngModelChange",function(r){return h(c),f(i.label,r)||(i.label=r),b(r)}),e(),t(18,"po-input",10),E("ngModelChange",function(r){return h(c),f(i.help,r)||(i.help=r),b(r)}),e(),t(19,"po-input",11),E("ngModelChange",function(r){return h(c),f(i.additionalHelpTooltip,r)||(i.additionalHelpTooltip=r),b(r)}),e(),t(20,"po-input",12),E("ngModelChange",function(r){return h(c),f(i.placeholder,r)||(i.placeholder=r),b(r)}),e(),t(21,"po-input",13),E("ngModelChange",function(r){return h(c),f(i.placeholderSearch,r)||(i.placeholderSearch=r),b(r)}),e(),t(22,"po-input",14),E("ngModelChange",function(r){return h(c),f(i.fieldErrorMessage,r)||(i.fieldErrorMessage=r),b(r)}),e(),t(23,"po-input",15),E("ngModelChange",function(r){return h(c),f(i.literals,r)||(i.literals=r),b(r)}),u("p-change",function(){return h(c),b(i.changeLiterals())}),e(),t(24,"po-input",16),E("ngModelChange",function(r){return h(c),f(i.filterService,r)||(i.filterService=r),b(r)}),e(),t(25,"po-input",17),E("ngModelChange",function(r){return h(c),f(i.fieldValue,r)||(i.fieldValue=r),b(r)}),e(),t(26,"po-input",18),E("ngModelChange",function(r){return h(c),f(i.fieldLabel,r)||(i.fieldLabel=r),b(r)}),e(),t(27,"po-checkbox-group",19),E("ngModelChange",function(r){return h(c),f(i.properties,r)||(i.properties=r),b(r)}),e(),t(28,"po-radio-group",20),E("ngModelChange",function(r){return h(c),f(i.filterMode,r)||(i.filterMode=r),b(r)}),e(),t(29,"po-radio-group",21),E("ngModelChange",function(r){return h(c),f(i.size,r)||(i.size=r),b(r)}),e(),t(30,"div",2)(31,"po-button",22),u("p-click",function(){return h(c),b(i.restore())}),e()()()}if(a&2){let c=D(8);p(),g("ngModel",i.multiselect),m("p-additional-help-tooltip",i.additionalHelpTooltip)("p-auto-height",i.properties.includes("autoHeight"))("p-disabled",i.properties.includes("disabled"))("p-field-label",i.fieldLabel)("p-field-value",i.fieldValue)("p-filter-service",i.filterService)("p-filter-mode",i.filterMode)("p-help",i.help)("p-hide-search",i.properties.includes("hideSearch"))("p-hide-select-all",i.properties.includes("hideSelectAll"))("p-label",i.label)("p-literals",i.customLiterals)("p-optional",i.properties.includes("optional"))("p-options",i.options)("p-placeholder",i.placeholder)("p-placeholder-search",i.placeholderSearch)("p-required",i.properties.includes("required"))("p-field-error-message",i.fieldErrorMessage)("p-show-required",i.properties.includes("showRequired"))("p-size",i.size)("p-sort",i.properties.includes("sort"))("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit")),p(3),m("p-value",i.multiselect),p(),m("p-value",i.event),p(5),g("ngModel",i.option.label),p(),g("ngModel",i.option.value),p(2),m("p-disabled",c.form.invalid),p(4),g("ngModel",i.label),p(),g("ngModel",i.help),p(),g("ngModel",i.additionalHelpTooltip),p(),g("ngModel",i.placeholder),p(),g("ngModel",i.placeholderSearch),p(),g("ngModel",i.fieldErrorMessage),p(),g("ngModel",i.literals),p(),g("ngModel",i.filterService),p(),g("ngModel",i.fieldValue),p(),g("ngModel",i.fieldLabel),p(),g("ngModel",i.properties),m("p-options",i.propertiesOptions),p(),g("ngModel",i.filterMode),m("p-disabled",i.properties.includes("hideSearch"))("p-options",i.filterModeOptions),p(),g("ngModel",i.size),m("p-options",i.sizeOptions)}},dependencies:[W,A,H,O,X,L,fe,j,ve,T,F],encapsulation:2})}return o})();var Je=o=>({"docs-sample-code-tabs":o}),we=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-multiselect-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Multiselect Labs"),e(),t(4,"a",2),u("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-multiselect-labs/sample-po-multiselect-labs.component.html"),e(),t(13,"pre",7),n(14,`<div class="po-row">
  <po-multiselect
    class="po-md-12"
    name="PO Multiselect"
    [(ngModel)]="multiselect"
    [p-additional-help-tooltip]="additionalHelpTooltip"
    [p-auto-height]="properties.includes('autoHeight')"
    [p-disabled]="properties.includes('disabled')"
    [p-field-label]="fieldLabel"
    [p-field-value]="fieldValue"
    [p-filter-service]="filterService"
    [p-filter-mode]="filterMode"
    [p-help]="help"
    [p-hide-search]="properties.includes('hideSearch')"
    [p-hide-select-all]="properties.includes('hideSelectAll')"
    [p-label]="label"
    [p-literals]="customLiterals"
    [p-optional]="properties.includes('optional')"
    [p-options]="options"
    [p-placeholder]="placeholder"
    [p-placeholder-search]="placeholderSearch"
    [p-required]="properties.includes('required')"
    [p-field-error-message]="fieldErrorMessage"
    [p-show-required]="properties.includes('showRequired')"
    [p-size]="size"
    [p-sort]="properties.includes('sort')"
    (p-change)="changeEvent('p-change')"
    (p-keydown)="changeEvent('p-keydown')"
    [p-error-limit]="properties?.includes('errorLimit')"
  >
  </po-multiselect>
</div>

<hr />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="multiselect"> </po-info>

  <po-info class="po-md-6" p-label="Events" [p-value]="event"> </po-info>
</div>

<hr />

<form #fOption="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="optionLabel" [(ngModel)]="option.label" p-label="Option Label" p-required>
    </po-input>

    <po-input class="po-md-6" name="optionValue" [(ngModel)]="option.value" p-label="Option Value" p-required>
    </po-input>
  </div>

  <div class="po-row">
    <po-button class="po-md-4 po-lg-2" p-label="Add Option" [p-disabled]="fOption.form.invalid" (p-click)="addOption()">
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
    name="placeholderSearch"
    [(ngModel)]="placeholderSearch"
    p-clean
    p-label="Placeholder Search"
  >
  </po-input>

  <po-input
    class="po-md-6"
    name="fieldErrorMessage"
    [(ngModel)]="fieldErrorMessage"
    p-clean
    p-label="Field Error Message"
  >
  </po-input>

  <po-input
    class="po-md-12 po-lg-6"
    name="literals"
    [(ngModel)]="literals"
    p-help='Ex.: {"noData": "Sem dados a serem exibidos", "placeholderSearch": "Buscar"}'
    p-label="Literals"
    (p-change)="changeLiterals()"
  >
  </po-input>

  <po-input
    class="po-md-12 po-lg-6"
    name="filterService"
    [(ngModel)]="filterService"
    p-clean
    p-help="https://po-sample-api.onrender.com/v1/heroes"
    p-label="Filter Service"
  >
  </po-input>

  <po-input class="po-md-6" name="fieldValue" [(ngModel)]="fieldValue" p-clean p-label="Field Value"> </po-input>

  <po-input class="po-md-6" name="fieldLabel" [(ngModel)]="fieldLabel" p-clean p-label="Field Label"> </po-input>

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
    name="filterMode"
    [(ngModel)]="filterMode"
    p-columns="4"
    p-label="Filter mode"
    [p-disabled]="properties.includes('hideSearch')"
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

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-multiselect-labs/sample-po-multiselect-labs.component.ts"),e(),t(19,"pre",9),n(20,`import { Component, OnInit } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoMultiselectLiterals,
  PoMultiselectOption,
  PoRadioGroupOption
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-multiselect-labs',
  templateUrl: './sample-po-multiselect-labs.component.html',
  standalone: false
})
export class SamplePoMultiselectLabsComponent implements OnInit {
  additionalHelpTooltip: string;
  customLiterals: PoMultiselectLiterals;
  event: string;
  filterMode: string;
  help: string;
  label: string;
  literals: string;
  multiselect: Array<string>;
  option: PoMultiselectOption;
  options: Array<PoMultiselectOption>;
  placeholder: string;
  placeholderSearch: string;
  properties: Array<string>;
  fieldErrorMessage: string;
  filterService: string;
  fieldLabel: string;
  fieldValue: string;
  size: string;

  public readonly filterModeOptions: Array<PoRadioGroupOption> = [
    { label: 'Starts With', value: 'startsWith' },
    { label: 'Contains', value: 'contains' },
    { label: 'Ends With', value: 'endsWith' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'optional', label: 'Optional' },
    { value: 'hideSearch', label: 'Hide Search' },
    { value: 'autoHeight', label: 'Auto Height' },
    { value: 'sort', label: 'Sort' },
    { value: 'hideSelectAll', label: 'Hide Select All' },
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
    this.options = [...this.options, { ...this.option }];
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

  restore() {
    this.additionalHelpTooltip = '';
    this.customLiterals = undefined;
    this.help = '';
    this.filterMode = undefined;
    this.label = undefined;
    this.literals = '';
    this.placeholder = '';
    this.placeholderSearch = undefined;
    this.properties = [];
    this.fieldErrorMessage = '';
    this.filterService = '';
    this.fieldLabel = '';
    this.fieldValue = '';

    this.option = { label: undefined, value: undefined };
    this.options = [];

    this.event = '';
    this.multiselect = [];
    this.size = 'medium';
  }
}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-multiselect-labs"),e(),l(23,"hr")),a&2&&(p(5),x("po-icon "+i.sampleCodeButtonIcon),p(),P(" ",i.sampleCodeButtonLabel,""),p(),m("ngClass",_(4,Je,i.hideSampleCodeTabs)))},dependencies:[w,M,y,C,_e],encapsulation:2})}return o})();var Te=(()=>{class o{days;employeesVacations=[];finalPeriod;initialPeriod;nameEmployeesVacations;employees=[{value:"412341",label:"Alfred"},{value:"518734",label:"Alice"},{value:"986237",label:"Bradley"},{value:"941278",label:"Jackie"},{value:"897643",label:"Phillip"},{value:"423767",label:"Reynold"},{value:"423837",label:"Robert"}];daysOptions=[{value:10,label:"10"},{value:20,label:"20"},{value:30,label:"30"}];ngOnInit(){this.clean()}clean(){this.days=20,this.initialPeriod=void 0,this.finalPeriod=void 0,this.employeesVacations=[]}updateNameEmployeesVacations(){this.nameEmployeesVacations=this.employees.filter(s=>this.employeesVacations.includes(s.value)).map(s=>s.label).join(", ")}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-multiselect-vacation"]],standalone:!1,decls:26,vars:20,consts:[["f","ngForm"],["modalEmployeesVacation",""],[1,"po-row"],["name","initialPeriod","p-label","Initial period","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","finalPeriod","p-label","Final period","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-min-date"],["name","days","p-help","Maximum of days that employs can choose","p-label","How many days of vacation the employees will be able to have?","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","employeesVacations","p-label","Select your employees for collective vacations","p-required","",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","Approve Vacations","p-label","Approve Vacations",1,"po-md-4","po-offset-md-5","po-offset-lg-5","po-offset-xl-5",3,"p-click","p-disabled"],["p-label","Clean",1,"po-md-3",3,"p-click"],["p-title","Collective Vacation"],["p-label","Initial period",1,"po-md-5",3,"p-value"],["p-label","Final period",1,"po-md-5",3,"p-value"],["p-label","Days",1,"po-md-2",3,"p-value"],["p-label","Employees",1,"po-lg-12",3,"p-value"]],template:function(a,i){if(a&1){let c=I();t(0,"form",null,0)(2,"h3"),n(3,"Collective vacations"),e(),l(4,"hr"),t(5,"div",2)(6,"po-datepicker",3),E("ngModelChange",function(r){return h(c),f(i.initialPeriod,r)||(i.initialPeriod=r),b(r)}),e(),t(7,"po-datepicker",4),E("ngModelChange",function(r){return h(c),f(i.finalPeriod,r)||(i.finalPeriod=r),b(r)}),e()(),t(8,"div",2)(9,"po-radio-group",5),E("ngModelChange",function(r){return h(c),f(i.days,r)||(i.days=r),b(r)}),e()(),t(10,"div",2)(11,"po-multiselect",6),E("ngModelChange",function(r){return h(c),f(i.employeesVacations,r)||(i.employeesVacations=r),b(r)}),e()(),t(12,"div",2)(13,"po-button",7),u("p-click",function(){h(c);let r=D(16);return i.updateNameEmployeesVacations(),b(r.open())}),e(),t(14,"po-button",8),u("p-click",function(){return h(c),b(i.clean())}),e()()(),t(15,"po-modal",9,1)(17,"div",2),l(18,"po-info",10),N(19,"date"),l(20,"po-info",11),N(21,"date"),l(22,"po-info",12),e(),l(23,"hr"),t(24,"div",2),l(25,"po-info",13),e()()}if(a&2){let c=D(1);p(6),g("ngModel",i.initialPeriod),p(),g("ngModel",i.finalPeriod),m("p-min-date",i.initialPeriod),p(2),g("ngModel",i.days),m("p-options",i.daysOptions),p(2),g("ngModel",i.employeesVacations),m("p-options",i.employees),p(2),m("p-disabled",c.form.invalid),p(5),m("p-value",z(19,12,i.initialPeriod,"longDate","+0000")),p(2),m("p-value",z(21,16,i.finalPeriod,"longDate","+0000")),p(2),m("p-value",i.days),p(3),m("p-value",i.nameEmployeesVacations)}},dependencies:[W,A,H,O,X,L,j,$,T,F,Z,Y],encapsulation:2})}return o})();var Qe=o=>({"docs-sample-code-tabs":o}),Ve=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-multiselect-vacation-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Multiselect - Vacation"),e(),t(4,"a",2),u("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-multiselect-vacation/sample-po-multiselect-vacation.component.html"),e(),t(13,"pre",7),n(14,`<form #f="ngForm">
  <h3>Collective vacations</h3>

  <hr />

  <div class="po-row">
    <po-datepicker class="po-md-6" name="initialPeriod" [(ngModel)]="initialPeriod" p-label="Initial period" p-required>
    </po-datepicker>

    <po-datepicker
      class="po-md-6"
      name="finalPeriod"
      [(ngModel)]="finalPeriod"
      p-label="Final period"
      p-required
      [p-min-date]="initialPeriod"
    >
    </po-datepicker>
  </div>

  <div class="po-row">
    <po-radio-group
      class="po-lg-12"
      name="days"
      [(ngModel)]="days"
      p-help="Maximum of days that employs can choose"
      p-label="How many days of vacation the employees will be able to have?"
      p-required
      [p-options]="daysOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-multiselect
      class="po-md-12"
      name="employeesVacations"
      [(ngModel)]="employeesVacations"
      p-label="Select your employees for collective vacations"
      [p-options]="employees"
      p-required
    >
    </po-multiselect>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-4 po-offset-md-5 po-offset-lg-5 po-offset-xl-5"
      name="Approve Vacations"
      p-label="Approve Vacations"
      [p-disabled]="f.form.invalid"
      (p-click)="updateNameEmployeesVacations(); modalEmployeesVacation.open()"
    >
    </po-button>

    <po-button class="po-md-3" p-label="Clean" (p-click)="clean()"> </po-button>
  </div>
</form>

<po-modal #modalEmployeesVacation p-title="Collective Vacation">
  <div class="po-row">
    <po-info class="po-md-5" p-label="Initial period" [p-value]="initialPeriod | date: 'longDate' : '+0000'"> </po-info>

    <po-info class="po-md-5" p-label="Final period" [p-value]="finalPeriod | date: 'longDate' : '+0000'"> </po-info>

    <po-info class="po-md-2" p-label="Days" [p-value]="days"> </po-info>
  </div>

  <hr />

  <div class="po-row">
    <po-info class="po-lg-12" p-label="Employees" [p-value]="nameEmployeesVacations"> </po-info>
  </div>
</po-modal>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-multiselect-vacation/sample-po-multiselect-vacation.component.ts"),e(),t(19,"pre",9),n(20,`import { Component, OnInit } from '@angular/core';

import { PoMultiselectOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-multiselect-vacation',
  templateUrl: './sample-po-multiselect-vacation.component.html',
  standalone: false
})
export class SamplePoMultiselectVacationComponent implements OnInit {
  days: number;
  employeesVacations: Array<string> = [];
  finalPeriod: Date;
  initialPeriod: Date;
  nameEmployeesVacations: string;

  public readonly employees: Array<PoMultiselectOption> = [
    { value: '412341', label: 'Alfred' },
    { value: '518734', label: 'Alice' },
    { value: '986237', label: 'Bradley' },
    { value: '941278', label: 'Jackie' },
    { value: '897643', label: 'Phillip' },
    { value: '423767', label: 'Reynold' },
    { value: '423837', label: 'Robert' }
  ];

  public daysOptions: Array<PoRadioGroupOption> = [
    { value: 10, label: '10' },
    { value: 20, label: '20' },
    { value: 30, label: '30' }
  ];

  ngOnInit() {
    this.clean();
  }

  clean() {
    this.days = 20;
    this.initialPeriod = undefined;
    this.finalPeriod = undefined;
    this.employeesVacations = [];
  }

  updateNameEmployeesVacations() {
    this.nameEmployeesVacations = this.employees
      .filter((employee: PoMultiselectOption) => this.employeesVacations.includes(<string>employee.value))
      .map((employee: PoMultiselectOption) => employee.label)
      .join(', ');
  }
}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-multiselect-vacation"),e(),l(23,"hr")),a&2&&(p(5),x("po-icon "+i.sampleCodeButtonIcon),p(),P(" ",i.sampleCodeButtonLabel,""),p(),m("ngClass",_(4,Qe,i.hideSampleCodeTabs)))},dependencies:[w,M,y,C,Te],encapsulation:2})}return o})();var Ae=(()=>{class o{formBuilder;days;employeesVacations=[];finalPeriod;formCollectiveVacations;initialPeriod;nameEmployeesVacations;employees=[{value:"412341",label:"Alfred"},{value:"518734",label:"Alice"},{value:"986237",label:"Bradley"},{value:"941278",label:"Jackie"},{value:"112333",label:"Jane"},{value:"989898",label:"John"},{value:"897643",label:"Phillip"},{value:"423767",label:"Reynold"},{value:"423837",label:"Robert"}];daysOptions=[{value:10,label:"10"},{value:20,label:"20"},{value:30,label:"30"}];constructor(s){this.formBuilder=s}ngOnInit(){this.formCollectiveVacations=this.formBuilder.group({initialPeriod:[null,R.required],finalPeriod:[null,R.required],days:[null,R.required],employeesVacations:[null,R.required]}),this.clean()}clean(){this.formCollectiveVacations.patchValue({days:20,initialPeriod:void 0,finalPeriod:void 0,employeesVacations:void 0})}getRangeFinalPeriod(){return this.formCollectiveVacations.get("initialPeriod").value}updateEmployeesVacations(){this.nameEmployeesVacations=this.employees.filter(s=>this.formCollectiveVacations.get("employeesVacations").value.includes(s.value)).map(s=>s.label).join(", "),this.initialPeriod=this.formCollectiveVacations.get("initialPeriod").value,this.finalPeriod=this.formCollectiveVacations.get("finalPeriod").value,this.days=this.formCollectiveVacations.get("days").value}static \u0275fac=function(a){return new(a||o)(q(ue))};static \u0275cmp=S({type:o,selectors:[["sample-po-multiselect-vacation-reactive-form"]],standalone:!1,decls:24,vars:20,consts:[["modalEmployeesVacation",""],[3,"formGroup"],[1,"po-row"],["name","initialPeriod","formControlName","initialPeriod","p-label","Initial period","p-required","",1,"po-md-6"],["name","finalPeriod","formControlName","finalPeriod","p-label","Final period","p-required","",1,"po-md-6",3,"p-min-date"],["name","employeesVacations","formControlName","employeesVacations","p-label","Select your employees for collective vacations",1,"po-md-4",3,"p-auto-height","p-options","p-required"],["name","days","formControlName","days","p-label","How many days of vacation the employees will be able to have?","p-required","",1,"po-lg-8",3,"p-options","p-columns"],["name","Approve Vacations","p-label","Approve Vacations",1,"po-md-4","po-offset-md-5","po-offset-lg-5","po-offset-xl-5",3,"p-click","p-disabled"],["p-label","Clean",1,"po-md-3",3,"p-click"],["p-title","Collective Vacation"],["p-label","Initial period",1,"po-md-5",3,"p-value"],["p-label","Final period",1,"po-md-5",3,"p-value"],["p-label","Days",1,"po-md-2",3,"p-value"],["p-label","Employees",1,"po-lg-12",3,"p-value"]],template:function(a,i){if(a&1){let c=I();t(0,"form",1)(1,"h3"),n(2,"Collective vacations"),e(),l(3,"hr"),t(4,"div",2),l(5,"po-datepicker",3)(6,"po-datepicker",4),e(),t(7,"div",2),l(8,"po-multiselect",5)(9,"po-radio-group",6),e(),t(10,"div",2)(11,"po-button",7),u("p-click",function(){h(c);let r=D(14);return i.updateEmployeesVacations(),b(r.open())}),e(),t(12,"po-button",8),u("p-click",function(){return h(c),b(i.clean())}),e()()(),t(13,"po-modal",9,0)(15,"div",2),l(16,"po-info",10),N(17,"date"),l(18,"po-info",11),N(19,"date"),l(20,"po-info",12),e(),l(21,"hr"),t(22,"div",2),l(23,"po-info",13),e()()}a&2&&(m("formGroup",i.formCollectiveVacations),p(6),m("p-min-date",i.getRangeFinalPeriod()),p(2),m("p-auto-height",!0)("p-options",i.employees)("p-required",!0),p(),m("p-options",i.daysOptions)("p-columns",3),p(2),m("p-disabled",i.formCollectiveVacations.invalid),p(5),m("p-value",z(17,12,i.initialPeriod,"longDate","+0000")),p(2),m("p-value",z(19,16,i.finalPeriod,"longDate","+0000")),p(2),m("p-value",i.days),p(3),m("p-value",i.nameEmployeesVacations))},dependencies:[W,A,H,de,ce,L,j,$,T,F,Z,Y],encapsulation:2})}return o})();var Xe=o=>({"docs-sample-code-tabs":o}),Oe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-multiselect-vacation-reactive-form-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Multiselect - Vacation Reactive Form"),e(),t(4,"a",2),u("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-multiselect-vacation-reactive-form/sample-po-multiselect-vacation-reactive-form.component.html"),e(),t(13,"pre",7),n(14,`<form [formGroup]="formCollectiveVacations">
  <h3>Collective vacations</h3>

  <hr />

  <div class="po-row">
    <po-datepicker
      class="po-md-6"
      name="initialPeriod"
      formControlName="initialPeriod"
      p-label="Initial period"
      p-required
    >
    </po-datepicker>

    <po-datepicker
      class="po-md-6"
      name="finalPeriod"
      formControlName="finalPeriod"
      p-label="Final period"
      p-required
      [p-min-date]="getRangeFinalPeriod()"
    >
    </po-datepicker>
  </div>

  <div class="po-row">
    <po-multiselect
      class="po-md-4"
      name="employeesVacations"
      formControlName="employeesVacations"
      p-label="Select your employees for collective vacations"
      [p-auto-height]="true"
      [p-options]="employees"
      [p-required]="true"
    >
    </po-multiselect>

    <po-radio-group
      class="po-lg-8"
      name="days"
      formControlName="days"
      p-label="How many days of vacation the employees will be able to have?"
      p-required
      [p-options]="daysOptions"
      [p-columns]="3"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-4 po-offset-md-5 po-offset-lg-5 po-offset-xl-5"
      name="Approve Vacations"
      p-label="Approve Vacations"
      [p-disabled]="formCollectiveVacations.invalid"
      (p-click)="updateEmployeesVacations(); modalEmployeesVacation.open()"
    >
    </po-button>

    <po-button class="po-md-3" p-label="Clean" (p-click)="clean()"> </po-button>
  </div>
</form>

<po-modal #modalEmployeesVacation p-title="Collective Vacation">
  <div class="po-row">
    <po-info class="po-md-5" p-label="Initial period" [p-value]="initialPeriod | date: 'longDate' : '+0000'"> </po-info>

    <po-info class="po-md-5" p-label="Final period" [p-value]="finalPeriod | date: 'longDate' : '+0000'"> </po-info>

    <po-info class="po-md-2" p-label="Days" [p-value]="days"> </po-info>
  </div>

  <hr />

  <div class="po-row">
    <po-info class="po-lg-12" p-label="Employees" [p-value]="nameEmployeesVacations"> </po-info>
  </div>
</po-modal>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-multiselect-vacation-reactive-form/sample-po-multiselect-vacation-reactive-form.component.ts"),e(),t(19,"pre",9),n(20,`import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { PoMultiselectOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-multiselect-vacation-reactive-form',
  templateUrl: './sample-po-multiselect-vacation-reactive-form.component.html',
  standalone: false
})
export class SamplePoMultiselectVacationReactiveFormComponent implements OnInit {
  days: number;
  employeesVacations: Array<string> = [];
  finalPeriod: Date;
  formCollectiveVacations: UntypedFormGroup;
  initialPeriod: Date;
  nameEmployeesVacations: string;

  public readonly employees: Array<PoMultiselectOption> = [
    { value: '412341', label: 'Alfred' },
    { value: '518734', label: 'Alice' },
    { value: '986237', label: 'Bradley' },
    { value: '941278', label: 'Jackie' },
    { value: '112333', label: 'Jane' },
    { value: '989898', label: 'John' },
    { value: '897643', label: 'Phillip' },
    { value: '423767', label: 'Reynold' },
    { value: '423837', label: 'Robert' }
  ];

  public daysOptions: Array<PoRadioGroupOption> = [
    { value: 10, label: '10' },
    { value: 20, label: '20' },
    { value: 30, label: '30' }
  ];

  constructor(private formBuilder: UntypedFormBuilder) {}

  ngOnInit() {
    this.formCollectiveVacations = this.formBuilder.group({
      initialPeriod: [null, Validators.required],
      finalPeriod: [null, Validators.required],
      days: [null, Validators.required],
      employeesVacations: [null, Validators.required]
    });

    this.clean();
  }

  clean() {
    this.formCollectiveVacations.patchValue({
      days: 20,
      initialPeriod: undefined,
      finalPeriod: undefined,
      employeesVacations: undefined
    });
  }

  getRangeFinalPeriod() {
    return this.formCollectiveVacations.get('initialPeriod').value;
  }

  updateEmployeesVacations() {
    this.nameEmployeesVacations = this.employees
      .filter((employee: PoMultiselectOption) =>
        this.formCollectiveVacations.get('employeesVacations').value.includes(<string>employee.value)
      )
      .map((employee: PoMultiselectOption) => employee.label)
      .join(', ');
    this.initialPeriod = this.formCollectiveVacations.get('initialPeriod').value;
    this.finalPeriod = this.formCollectiveVacations.get('finalPeriod').value;
    this.days = this.formCollectiveVacations.get('days').value;
  }
}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-multiselect-vacation-reactive-form"),e(),l(23,"hr")),a&2&&(p(5),x("po-icon "+i.sampleCodeButtonIcon),p(),P(" ",i.sampleCodeButtonLabel,""),p(),m("ngClass",_(4,Xe,i.hideSampleCodeTabs)))},dependencies:[w,M,y,C,Ae],encapsulation:2})}return o})();function $e(o,U){o&1&&l(0,"po-tag",14),o&2&&m("p-icon",!0)}function et(o,U){o&1&&l(0,"po-tag",15),o&2&&m("p-icon",!0)}function tt(o,U){o&1&&l(0,"po-tag",16),o&2&&m("p-icon",!0)}function nt(o,U){if(o&1&&(t(0,"div",0)(1,"div",7)(2,"div",8),n(3),e()(),t(4,"div",9)(5,"div",10),ie(6,$e,1,1,"po-tag",11)(7,et,1,1,"po-tag",12)(8,tt,1,1,"po-tag",13),e()()()),o&2){let s=U.$implicit;p(3),pe(s.label),p(3),m("ngIf",s.admin),p(),m("ngIf",s.access),p(),m("ngIf",!s.admin&&!s.access)}}var ke=(()=>{class o{employee;typeAccess;typeAccessMap={admin:{admin:!0,access:!0},access:{admin:!1,access:!0},noAccess:{admin:!1,access:!1}};options=[{value:"Anna M.",label:"Anna M.",admin:!1,access:!0},{value:"Jhon T.",label:"Jhon T.",admin:!0,access:!0},{value:"Marie J.",label:"Marie J.",admin:!1,access:!1}];employees=[{label:"Anna M.",value:"Anna M."},{label:"Jhon T.",value:"Jhon T."},{label:"Marie J.",value:"Marie J."}];typeAccessValue=[{label:"Admin e acesso padr\xE3o",value:"admin"},{label:"Acesso padr\xE3o",value:"access"},{label:"Sem acesso",value:"noAccess"}];changeAccess(){let s=[...this.options].map(a=>a.value===this.employee?G({value:a.value,label:a.label},this.typeAccessMap[this.typeAccess]):a);this.options=s,this.employee=void 0,this.typeAccess=void 0}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-multiselect-template"]],standalone:!1,decls:7,vars:7,consts:[[1,"po-row"],["name","employee","p-label","Employee",1,"po-md-5",3,"ngModelChange","p-options","ngModel"],["name","typeOfAccess","p-label","Type of access",1,"po-md-6",3,"ngModelChange","p-options","ngModel"],[1,"po-md-1","containerButton"],["p-label","Alterar acesso",3,"p-click","p-disabled"],["name","multiselect","p-label","PO Multiselect",1,"po-md-12",3,"p-options","p-hide-select-all"],["p-multiselect-option-template",""],[1,"po-md-2","containerFlex"],[1,"po-font-text-large-bold"],[1,"po-md-10"],[1,"containerFlexTag"],["p-value","Admin","p-type","success",3,"p-icon",4,"ngIf"],["p-value","Normal","p-type","info",3,"p-icon",4,"ngIf"],["p-value","Sem acesso","p-type","danger",3,"p-icon",4,"ngIf"],["p-value","Admin","p-type","success",3,"p-icon"],["p-value","Normal","p-type","info",3,"p-icon"],["p-value","Sem acesso","p-type","danger",3,"p-icon"]],template:function(a,i){a&1&&(t(0,"div",0)(1,"po-select",1),E("ngModelChange",function(d){return f(i.employee,d)||(i.employee=d),d}),e(),t(2,"po-select",2),E("ngModelChange",function(d){return f(i.typeAccess,d)||(i.typeAccess=d),d}),e(),t(3,"div",3)(4,"po-button",4),u("p-click",function(){return i.changeAccess()}),e()(),t(5,"po-multiselect",5),ie(6,nt,9,4,"ng-template",6),e()()),a&2&&(p(),m("p-options",i.employees),g("ngModel",i.employee),p(),m("p-options",i.typeAccessValue),g("ngModel",i.typeAccess),p(2),m("p-disabled",!i.employee||!i.typeAccess),p(),m("p-options",i.options)("p-hide-select-all",!0))},dependencies:[se,A,O,L,ye,T,ee,Se],styles:[".containerFlex[_ngcontent-%COMP%]{display:flex;align-items:center}.containerFlexTag[_ngcontent-%COMP%]{display:flex;gap:2px;flex-direction:column}.containerButton[_ngcontent-%COMP%]{display:flex;align-items:flex-end;padding:8px}"]})}return o})();var ot=o=>({"docs-sample-code-tabs":o}),Le=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-multiselect-template-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Multiselect - Template"),e(),t(4,"a",2),u("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-multiselect-template/sample-po-multiselect-template.component.html"),e(),t(13,"pre",7),n(14,`<div class="po-row">
  <po-select class="po-md-5" name="employee" p-label="Employee" [p-options]="employees" [(ngModel)]="employee">
  </po-select>

  <po-select
    class="po-md-6"
    name="typeOfAccess"
    p-label="Type of access"
    [p-options]="typeAccessValue"
    [(ngModel)]="typeAccess"
  >
  </po-select>

  <div class="po-md-1 containerButton">
    <po-button p-label="Alterar acesso" [p-disabled]="!employee || !typeAccess" (p-click)="changeAccess()"> </po-button>
  </div>

  <po-multiselect
    class="po-md-12"
    name="multiselect"
    p-label="PO Multiselect"
    [p-options]="options"
    [p-hide-select-all]="true"
  >
    <ng-template p-multiselect-option-template let-option>
      <div class="po-row">
        <div class="po-md-2 containerFlex">
          <div class="po-font-text-large-bold">{ { option.label }}</div>
        </div>

        <div class="po-md-10">
          <div class="containerFlexTag">
            <po-tag *ngIf="option.admin" p-value="Admin" p-type="success" [p-icon]="true"> </po-tag>
            <po-tag *ngIf="option.access" p-value="Normal" p-type="info" [p-icon]="true"> </po-tag>
            <po-tag *ngIf="!option.admin && !option.access" p-value="Sem acesso" p-type="danger" [p-icon]="true">
            </po-tag>
          </div>
        </div>
      </div>
    </ng-template>
  </po-multiselect>
</div>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-multiselect-template/sample-po-multiselect-template.component.ts"),e(),t(19,"pre",9),n(20,`import { Component } from '@angular/core';
import { PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-multiselect-template',
  templateUrl: './sample-po-multiselect-template.component.html',
  styles: [
    \`
      .containerFlex {
        display: flex;
        align-items: center;
      }

      .containerFlexTag {
        display: flex;
        gap: 2px;
        flex-direction: column;
      }

      .containerButton {
        display: flex;
        align-items: flex-end;
        padding: 8px;
      }
    \`
  ],
  standalone: false
})
export class SamplePoMultiselectTemplateComponent {
  employee;
  typeAccess;
  typeAccessMap = {
    admin: { admin: true, access: true },
    access: { admin: false, access: true },
    noAccess: { admin: false, access: false }
  };

  options = [
    { value: 'Anna M.', label: 'Anna M.', admin: false, access: true },
    { value: 'Jhon T.', label: 'Jhon T.', admin: true, access: true },
    { value: 'Marie J.', label: 'Marie J.', admin: false, access: false }
  ];

  readonly employees: Array<PoSelectOption> = [
    { label: 'Anna M.', value: 'Anna M.' },
    { label: 'Jhon T.', value: 'Jhon T.' },
    { label: 'Marie J.', value: 'Marie J.' }
  ];

  readonly typeAccessValue: Array<PoSelectOption> = [
    { label: 'Admin e acesso padr\xE3o', value: 'admin' },
    { label: 'Acesso padr\xE3o', value: 'access' },
    { label: 'Sem acesso', value: 'noAccess' }
  ];

  changeAccess() {
    const newOptions = [...this.options].map(opt => {
      if (opt.value === this.employee) {
        return {
          value: opt.value,
          label: opt.label,
          ...this.typeAccessMap[this.typeAccess]
        };
      }
      return opt;
    });

    this.options = newOptions;
    this.employee = undefined;
    this.typeAccess = undefined;
  }
}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-multiselect-template"),e(),l(23,"hr")),a&2&&(p(5),x("po-icon "+i.sampleCodeButtonIcon),p(),P(" ",i.sampleCodeButtonLabel,""),p(),m("ngClass",_(4,ot,i.hideSampleCodeTabs)))},dependencies:[w,M,y,C,ke],encapsulation:2})}return o})();var te=(()=>{class o{http;constructor(s){this.http=s}getFilteredData({value:s}){let a={filter:s};return this.http.get("https://po-sample-api.onrender.com/v1/heroes?page=1&pageSize=10",{params:a}).pipe(ne(i=>i.items))}getObjectsByValues(s){return this.http.get(`https://po-sample-api.onrender.com/v1/heroes/?value=${s.toString()}`).pipe(ne(a=>a.items))}static \u0275fac=function(a){return new(a||o)(ae(me))};static \u0275prov=le({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var Fe=(()=>{class o{samplePoMultiselectHeroesService;debounce=500;filterService;heroes;multiselect=["1495831666871","1405833068599"];columns=[{property:"value",label:"id"},{property:"label",label:"Name",type:"link",action:s=>{this.openLink(s)}}];constructor(s){this.samplePoMultiselectHeroesService=s,this.filterService=s}changeOptions(s){this.heroes=[...s]}openLink(s){window.open(`http://google.com/search?q=${s}`,"_blank")}static \u0275fac=function(a){return new(a||o)(q(te))};static \u0275cmp=S({type:o,selectors:[["sample-po-multiselect-heroes"]],standalone:!1,features:[re([te])],decls:4,vars:9,consts:[[1,"po-row"],["name","multiselect","p-label","Search a Hero",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-filter-service","p-debounce-time"],[1,"po-md-6","po-mt-4"],[3,"p-columns","p-items","p-height","p-striped","p-hide-columns-manager","p-hide-table-search"]],template:function(a,i){a&1&&(t(0,"div",0)(1,"po-multiselect",1),E("ngModelChange",function(d){return f(i.multiselect,d)||(i.multiselect=d),d}),u("p-change",function(d){return i.changeOptions(d)}),e(),t(2,"po-container",2),l(3,"po-table",3),e()()),a&2&&(p(),g("ngModel",i.multiselect),m("p-filter-service",i.filterService)("p-debounce-time",i.debounce),p(2),m("p-columns",i.columns)("p-items",i.heroes)("p-height",220)("p-striped",!0)("p-hide-columns-manager",!0)("p-hide-table-search",!1))},dependencies:[A,O,ge,T,Ee],encapsulation:2})}return o})();var rt=o=>({"docs-sample-code-tabs":o}),qe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-multiselect-heroes-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Multiselect - Heroes - using API"),e(),t(4,"a",2),u("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-multiselect-heroes/sample-po-multiselect-heroes.component.html"),e(),t(13,"pre",7),n(14,`<div class="po-row">
  <po-multiselect
    class="po-md-6"
    name="multiselect"
    [(ngModel)]="multiselect"
    p-label="Search a Hero"
    [p-filter-service]="filterService"
    [p-debounce-time]="debounce"
    (p-change)="changeOptions($event)"
  >
  </po-multiselect>

  <po-container class="po-md-6 po-mt-4">
    <po-table
      [p-columns]="columns"
      [p-items]="heroes"
      [p-height]="220"
      [p-striped]="true"
      [p-hide-columns-manager]="true"
      [p-hide-table-search]="false"
    >
    </po-table>
  </po-container>
</div>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-multiselect-heroes/sample-po-multiselect-heroes.component.ts"),e(),t(19,"pre",9),n(20,`import { Component } from '@angular/core';
import { PoTableColumn, PoMultiselectFilter } from '@po-ui/ng-components';

import { SamplePoMultiselectHeroesService } from './sample-po-multiselect-heroes.service';

@Component({
  selector: 'sample-po-multiselect-heroes',
  templateUrl: './sample-po-multiselect-heroes.component.html',
  providers: [SamplePoMultiselectHeroesService],
  standalone: false
})
export class SamplePoMultiselectHeroesComponent {
  debounce = 500;
  filterService: PoMultiselectFilter;
  heroes: Array<any>;
  multiselect: Array<string> = ['1495831666871', '1405833068599'];
  columns: Array<PoTableColumn> = [
    { property: 'value', label: 'id' },
    {
      property: 'label',
      label: 'Name',
      type: 'link',
      action: value => {
        this.openLink(value);
      }
    }
  ];

  constructor(public samplePoMultiselectHeroesService: SamplePoMultiselectHeroesService) {
    this.filterService = samplePoMultiselectHeroesService;
  }

  changeOptions(event): void {
    this.heroes = [...event];
  }

  openLink(value) {
    window.open(\`http://google.com/search?q=\${value}\`, '_blank');
  }
}
`),e(),t(21,"label",6),n(22,"sample-po-multiselect-heroes/sample-po-multiselect-heroes.service.ts"),e(),t(23,"pre",9),n(24,`import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { PoMultiselectFilter, PoMultiselectOption } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoMultiselectHeroesService implements PoMultiselectFilter {
  constructor(private http: HttpClient) {}

  getFilteredData({ value }): Observable<Array<PoMultiselectOption>> {
    const params = { filter: value };

    return this.http
      .get(\`https://po-sample-api.onrender.com/v1/heroes?page=1&pageSize=10\`, { params })
      .pipe(map((response: { items: Array<PoMultiselectOption> }) => response.items));
  }

  getObjectsByValues(value: Array<string | number>): Observable<Array<PoMultiselectOption>> {
    return this.http
      .get(\`https://po-sample-api.onrender.com/v1/heroes/?value=\${value.toString()}\`)
      .pipe(map((response: { items: Array<PoMultiselectOption> }) => response.items));
  }
}
`),e()()()()(),t(25,"div",10),l(26,"sample-po-multiselect-heroes"),e(),l(27,"hr")),a&2&&(p(5),x("po-icon "+i.sampleCodeButtonIcon),p(),P(" ",i.sampleCodeButtonLabel,""),p(),m("ngClass",_(4,rt,i.hideSampleCodeTabs)))},dependencies:[w,M,y,C,Fe],encapsulation:2})}return o})();var De=(()=>{class o{company;fieldLabel="razaoSocial";fieldValue="cnpj";options=[{codigo:"1",nomeFantasia:"TOTVS SA",razaoSocial:"TOTVS LTDA",label:"TOTVS COMPANY",cnpj:"01.234.567/0000-01",value:"100",id:"10",email:"totvscompany@sample.com",data:"10/03/2015",origem:"S\xE3o Paulo"},{codigo:"2",nomeFantasia:"INSTITUTO TOTVS DE ENSINO SA",razaoSocial:"INST TOTVS DE ENSINO LTDA",label:"INST TOTVS",cnpj:"02.345.678/0000-02",value:"200",id:"20",email:"insttotvs@sample.com",data:"10/10/2020",origem:"Joinville"},{codigo:"3",nomeFantasia:"TOTVS ENTERPRISE SA",razaoSocial:"TOTVS ENTERPRISE LTDA ",label:"ENT TOTVS",cnpj:"03.456.789/0000-03",value:"300",id:"30",email:"enttotvs@sample.com",data:"10/01/2022",origem:"Curitiba"}];optionsSelect=[{label:"codigo",value:"codigo"},{label:"nomeFantasia",value:"nomeFantasia"},{label:"razaoSocial",value:"razaoSocial"},{label:"label",value:"label"},{label:"cnpj",value:"cnpj"},{label:"value",value:"value"},{label:"id",value:"id"},{label:"email",value:"email"},{label:"data",value:"data"},{label:"origem",value:"origem"}];onChange(s){this.company=void 0}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-multiselect-any-array"]],standalone:!1,decls:9,vars:9,consts:[[1,"po-row"],[1,"po-md-6"],["name","label","p-label","Select Field Label",3,"ngModelChange","p-change","p-options","ngModel"],["name","label","p-label","Select Field Value",3,"ngModelChange","p-change","p-options","ngModel"],["name","multiselect","p-label","Select your Company",1,"po-md-12",3,"ngModelChange","p-options","p-field-value","p-field-label","ngModel"],["p-label","Model",1,"po-md-12",3,"p-value"]],template:function(a,i){a&1&&(t(0,"div",0)(1,"div",1)(2,"po-select",2),E("ngModelChange",function(d){return f(i.fieldLabel,d)||(i.fieldLabel=d),d}),u("p-change",function(d){return i.onChange(d)}),e(),t(3,"po-select",3),E("ngModelChange",function(d){return f(i.fieldValue,d)||(i.fieldValue=d),d}),u("p-change",function(d){return i.onChange(d)}),e()(),t(4,"div",1)(5,"div",0)(6,"po-multiselect",4),E("ngModelChange",function(d){return f(i.company,d)||(i.company=d),d}),e()(),t(7,"div",0),l(8,"po-info",5),e()()()),a&2&&(p(2),m("p-options",i.optionsSelect),g("ngModel",i.fieldLabel),p(),m("p-options",i.optionsSelect),g("ngModel",i.fieldValue),p(3),m("p-options",i.options)("p-field-value",i.fieldValue)("p-field-label",i.fieldLabel),g("ngModel",i.company),p(2),m("p-value",i.company))},dependencies:[A,O,T,ee,F],encapsulation:2})}return o})();var dt=o=>({"docs-sample-code-tabs":o}),Be=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-multiselect-any-array-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Multiselect - Array Any"),e(),t(4,"a",2),u("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-multiselect-any-array/sample-po-multiselect-any-array.component.html"),e(),t(13,"pre",7),n(14,`<div class="po-row">
  <div class="po-md-6">
    <po-select
      name="label"
      p-label="Select Field Label"
      [p-options]="optionsSelect"
      [(ngModel)]="fieldLabel"
      (p-change)="onChange($event)"
    >
    </po-select>
    <po-select
      name="label"
      p-label="Select Field Value"
      [p-options]="optionsSelect"
      [(ngModel)]="fieldValue"
      (p-change)="onChange($event)"
    >
    </po-select>
  </div>
  <div class="po-md-6">
    <div class="po-row">
      <po-multiselect
        class="po-md-12"
        name="multiselect"
        p-label="Select your Company"
        [p-options]="options"
        [p-field-value]="fieldValue"
        [p-field-label]="fieldLabel"
        [(ngModel)]="company"
      >
      </po-multiselect>
    </div>
    <div class="po-row">
      <po-info class="po-md-12" p-label="Model" [p-value]="company"> </po-info>
    </div>
  </div>
</div>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-multiselect-any-array/sample-po-multiselect-any-array.component.ts"),e(),t(19,"pre",9),n(20,`import { Component, OnInit } from '@angular/core';

import { PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-multiselect-any-array',
  templateUrl: './sample-po-multiselect-any-array.component.html',
  standalone: false
})
export class SamplePoMultiselectAnyArrayComponent {
  company;
  fieldLabel = 'razaoSocial';
  fieldValue = 'cnpj';

  public readonly options: Array<any> = [
    {
      codigo: '1',
      nomeFantasia: 'TOTVS SA',
      razaoSocial: 'TOTVS LTDA',
      label: 'TOTVS COMPANY',
      cnpj: '01.234.567/0000-01',
      value: '100',
      id: '10',
      email: 'totvscompany@sample.com',
      data: '10/03/2015',
      origem: 'S\xE3o Paulo'
    },
    {
      codigo: '2',
      nomeFantasia: 'INSTITUTO TOTVS DE ENSINO SA',
      razaoSocial: 'INST TOTVS DE ENSINO LTDA',
      label: 'INST TOTVS',
      cnpj: '02.345.678/0000-02',
      value: '200',
      id: '20',
      email: 'insttotvs@sample.com',
      data: '10/10/2020',
      origem: 'Joinville'
    },
    {
      codigo: '3',
      nomeFantasia: 'TOTVS ENTERPRISE SA',
      razaoSocial: 'TOTVS ENTERPRISE LTDA ',
      label: 'ENT TOTVS',
      cnpj: '03.456.789/0000-03',
      value: '300',
      id: '30',
      email: 'enttotvs@sample.com',
      data: '10/01/2022',
      origem: 'Curitiba'
    }
  ];

  public readonly optionsSelect: Array<PoSelectOption> = [
    { label: 'codigo', value: 'codigo' },
    { label: 'nomeFantasia', value: 'nomeFantasia' },
    { label: 'razaoSocial', value: 'razaoSocial' },
    { label: 'label', value: 'label' },
    { label: 'cnpj', value: 'cnpj' },
    { label: 'value', value: 'value' },
    { label: 'id', value: 'id' },
    { label: 'email', value: 'email' },
    { label: 'data', value: 'data' },
    { label: 'origem', value: 'origem' }
  ];

  onChange(event) {
    this.company = undefined;
  }
}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-multiselect-any-array"),e(),l(23,"hr")),a&2&&(p(5),x("po-icon "+i.sampleCodeButtonIcon),p(),P(" ",i.sampleCodeButtonLabel,""),p(),m("ngClass",_(4,dt,i.hideSampleCodeTabs)))},dependencies:[w,M,y,C,De],encapsulation:2})}return o})();var Ie=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-multiselect-doc"]],standalone:!1,decls:1277,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoMultiselectFilterMode"],["pan","",1,"docs-api-property-type","PoMultiselectFilter"],["href","https://po-ui.io/guides/api"],["pan","",1,"docs-api-property-type","PoMultiselectLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","Array<PoMultiselectOption"],["pan","",1,"docs-api-property-type","any>"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","{","property:","string,","value:","string","}"],["pan","",1,"docs-api-property-type","Array<string"],["pan","",1,"docs-api-property-type","number>"]],template:function(a,i){a&1&&(t(0,"div",0)(1,"p",1)(2,"code"),n(3,"import { PoFieldModule } from '@po-ui/ng-components';"),e()(),t(4,"div",2)(5,"p"),n(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),e(),t(7,"blockquote")(8,"p"),n(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),t(10,"code"),n(11,"FormsModule"),e(),n(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),t(13,"code"),n(14,"ReactiveFormsModule"),e(),n(15,", ambos nativos do Angular."),e()()(),t(16,"h3",3),n(17,"Componente"),e(),t(18,"h4",4)(19,"code",5),n(20,"PoMultiselectComponent"),e()(),t(21,"div",2)(22,"p"),n(23,`O po-multiselect \xE9 um componente de m\xFAltipla sele\xE7\xE3o.
Este componente \xE9 recomendado para dar ao usu\xE1rio a op\xE7\xE3o de selecionar v\xE1rios itens em uma lista.`),e(),t(24,"p"),n(25,`Quando a lista possuir poucos itens, deve-se dar prefer\xEAncia para o uso do po-checkbox-group, por ser mais simples
e mais r\xE1pido para a sele\xE7\xE3o do usu\xE1rio.`),e(),t(26,"p"),n(27,`Este componente tamb\xE9m n\xE3o deve ser utilizado em casos onde a sele\xE7\xE3o seja \xFAnica. Nesses casos, deve-se utilizar o
po-select, po-combo ou po-radio-group.`),e(),t(28,"p"),n(29,"Com ele tamb\xE9m \xE9 poss\xEDvel definir uma lista \xE0 partir da requisi\xE7\xE3o de um servi\xE7o definido em "),t(30,"code"),n(31,"p-filter-service"),e(),n(32,"."),e(),t(33,"h4"),n(34,"Boas pr\xE1ticas"),e(),t(35,"ul")(36,"li"),n(37,"Caso a lista apresente menos de 5 itens, considere utilizar outro componente;"),e(),t(38,"li"),n(39,"N\xE3o utilize o multiselect caso o usu\xE1rio possa selecionar apenas uma op\xE7\xE3o. Para esse caso, opte por utilizar po-radio ou po-select;"),e(),t(40,"li"),n(41,`Sempre que poss\xEDvel, agrupe as op\xE7\xF5es e use labels curtas para descrever o conte\xFAdo. Exemplo: em uma combina\xE7\xE3o de alimentos,
as op\xE7\xF5es podem ser agrupadas por Vegetais, Frutas, etc;`),e()(),t(42,"h4"),n(43,"Acessibilidade tratada no componente"),e(),t(44,"p"),n(45,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente internamente, e n\xE3o podem ser alteradas pelo propriet\xE1rio do conte\xFAdo. S\xE3o elas:"),e(),t(46,"ul")(47,"li"),n(48,"Quando em foco, o multiselect abre o listbox usando as teclas de Espa\xE7o ou Enter do teclado."),e(),t(49,"li"),n(50,"Utilize as teclas Arrow Up [seta para cima] ou Arrow Down [seta para baixo] do teclado para navegar entre os itens do listbox."),e(),t(51,"li"),n(52,"Utilize a tecla Esc do teclado para fechar o listbox."),e(),t(53,"li"),n(54,"Quando um item estiver em foco, utilize as teclas Arrow Right [seta para direita] ou Arrow Left [seta para esquerda] do teclado para navegar entre eles."),e(),t(55,"li"),n(56,"Quando em foco e havendo um item ou mais j\xE1 selecionado, utilize a tecla Arrow Down [seta para baixo] do teclado para abrir o listbox."),e()(),t(57,"h4"),n(58,"Tokens customiz\xE1veis"),e(),t(59,"p"),n(60,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),e(),t(61,"blockquote")(62,"p"),n(63,"Para maiores informa\xE7\xF5es, acesse o guia "),t(64,"a",6),n(65,"Personalizando o Tema Padr\xE3o com Tokens CSS"),e(),n(66,"."),e()(),t(67,"table")(68,"thead")(69,"tr")(70,"th"),n(71,"Propriedade"),e(),t(72,"th"),n(73,"Descri\xE7\xE3o"),e(),t(74,"th"),n(75,"Valor Padr\xE3o"),e()()(),t(76,"tbody")(77,"tr")(78,"td")(79,"strong"),n(80,"Default Values"),e()(),l(81,"td")(82,"td"),e(),t(83,"tr")(84,"td")(85,"code"),n(86,"--font-family"),e()(),t(87,"td"),n(88,"Fam\xEDlia tipogr\xE1fica usada"),e(),t(89,"td")(90,"code"),n(91,"var(--font-family-theme)"),e()()(),t(92,"tr")(93,"td")(94,"code"),n(95,"--font-size"),e()(),t(96,"td"),n(97,"Tamanho da fonte"),e(),t(98,"td")(99,"code"),n(100,"var(--font-size-default)"),e()()(),t(101,"tr")(102,"td")(103,"code"),n(104,"--text-color-placeholder"),e(),n(105," \xA0"),e(),t(106,"td"),n(107,"Cor do texto do placeholder"),e(),t(108,"td")(109,"code"),n(110,"var(--color-action-disabled)"),e()()(),t(111,"tr")(112,"td")(113,"code"),n(114,"--color"),e()(),t(115,"td"),n(116,"Cor principal do multiselect"),e(),t(117,"td")(118,"code"),n(119,"var(--color-neutral-dark-70)"),e()()(),t(120,"tr")(121,"td")(122,"code"),n(123,"--background"),e()(),t(124,"td"),n(125,"Cor de background"),e(),t(126,"td")(127,"code"),n(128,"var(--color-neutral-light-05)"),e()()(),t(129,"tr")(130,"td")(131,"strong"),n(132,"Hover"),e()(),l(133,"td")(134,"td"),e(),t(135,"tr")(136,"td")(137,"code"),n(138,"--color-hover"),e()(),t(139,"td"),n(140,"Cor principal no estado hover"),e(),t(141,"td")(142,"code"),n(143,"var(--color-action-hover)"),e()()(),t(144,"tr")(145,"td")(146,"code"),n(147,"--background-hover"),e()(),t(148,"td"),n(149,"Cor de background no estado hover"),e(),t(150,"td")(151,"code"),n(152,"var(--color-brand-01-lighter)"),e()()(),t(153,"tr")(154,"td")(155,"strong"),n(156,"Focused"),e()(),l(157,"td")(158,"td"),e(),t(159,"tr")(160,"td")(161,"code"),n(162,"--color-focused"),e()(),t(163,"td"),n(164,"Cor principal no estado de focus"),e(),t(165,"td")(166,"code"),n(167,"var(--color-action-default)"),e()()(),t(168,"tr")(169,"td")(170,"code"),n(171,"--outline-color-focused"),e(),n(172," \xA0"),e(),t(173,"td"),n(174,"Cor do outline do estado de focus"),e(),t(175,"td")(176,"code"),n(177,"var(--color-action-focus)"),e()()(),t(178,"tr")(179,"td")(180,"strong"),n(181,"Disabled"),e()(),l(182,"td")(183,"td"),e(),t(184,"tr")(185,"td")(186,"code"),n(187,"--color-disabled"),e()(),t(188,"td"),n(189,"Cor principal no estado disabled"),e(),t(190,"td")(191,"code"),n(192,"var(--color-action-disabled)"),e()()(),t(193,"tr")(194,"td")(195,"code"),n(196,"--background-disabled"),e(),n(197," \xA0"),e(),t(198,"td"),n(199,"Cor de background no estado disabled \xA0"),e(),t(200,"td")(201,"code"),n(202,"var(--color-neutral-light-20)"),e()()(),t(203,"tr")(204,"td")(205,"strong"),n(206,"Error"),e()(),l(207,"td")(208,"td"),e(),t(209,"tr")(210,"td")(211,"code"),n(212,"--color-error"),e()(),t(213,"td"),n(214,"Cor principal no estado error"),e(),t(215,"td")(216,"code"),n(217,"var(--color-feedback-negative-base)"),e()()()()()(),t(218,"div",7)(219,"h4",8),n(220,"Seletor"),e(),t(221,"pre",9),n(222,`<po-multiselect
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    p-auto-height="boolean"
    (p-change)="EventEmitter"
    p-debounce-time="number"
    p-disabled="boolean"
    p-error-limit="boolean"
    p-field-error-message="string"
    p-field-label="string"
    p-field-value="string"
    p-filter-mode="PoMultiselectFilterMode"
    p-filter-service="string | PoMultiselectFilter"
    p-help="string"
    p-hide-search="boolean"
    p-hide-select-all="boolean"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-literals="PoMultiselectLiterals"
    name="string"
    p-optional="boolean"
    p-options="Array<PoMultiselectOption | any>"
    p-placeholder="string"
    p-placeholder-search="string"
    p-required="boolean"
    p-show-required="boolean"
    p-size="string"
    p-sort="boolean" >
</po-multiselect>
`),e()(),t(223,"h4",10),n(224,"Propriedades"),e(),t(225,"table",11)(226,"tr",12)(227,"th",13),n(228,"Nome"),e(),t(229,"th",13),n(230,"Tipo"),e(),t(231,"th",13),n(232,"Padr\xE3o"),e(),t(233,"th",13),n(234,"Descri\xE7\xE3o"),e()(),t(235,"tr",14)(236,"td",15)(237,"div",16)(238,"span",17),n(239," (p-additional-help)"),l(240,"br"),e()()(),t(241,"td",18)(242,"code",19),n(243,"EventEmitter"),e()(),t(244,"td",20),n(245,"-"),e(),t(246,"td",21)(247,"em")(248,"strong"),n(249,"(opcional)"),e()(),t(250,"p"),n(251,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),t(252,"code"),n(253,"p-help"),e(),n(254,"."),e()()(),t(255,"tr",14)(256,"td",15)(257,"div",22)(258,"span",23),n(259," p-additional-help-tooltip"),l(260,"br"),e()()(),t(261,"td",18)(262,"code",24),n(263,"string"),e()(),t(264,"td",20),n(265,"-"),e(),t(266,"td",21)(267,"em")(268,"strong"),n(269,"(opcional)"),e()(),t(270,"p"),n(271,"Exibe um \xEDcone de ajuda adicional ao "),t(272,"code"),n(273,"p-help"),e(),n(274,`, com o texto desta propriedade no tooltip.
Se o evento `),t(275,"code"),n(276,"p-additional-help"),e(),n(277,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),t(278,"strong"),n(279,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),e()(),t(280,"blockquote")(281,"p"),n(282,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),e()()()(),t(283,"tr",14)(284,"td",15)(285,"div",22)(286,"span",23),n(287," p-append-in-body"),l(288,"br"),e()()(),t(289,"td",18)(290,"code",25),n(291,"boolean"),e()(),t(292,"td",20)(293,"p")(294,"code"),n(295,"false"),e()()(),t(296,"td",21)(297,"em")(298,"strong"),n(299,"(opcional)"),e()(),t(300,"p"),n(301,"Define que o "),t(302,"code"),n(303,"listbox"),e(),n(304," e/ou tooltip ("),t(305,"code"),n(306,"p-additional-help-tooltip"),e(),n(307," e/ou "),t(308,"code"),n(309,"p-error-limit"),e(),n(310,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),e(),t(311,"blockquote")(312,"p"),n(313,`O uso dessa propriedade pode interferir na sequ\xEAncia de tabula\xE7\xE3o da p\xE1gina. Quando utilizado com
`),t(314,"code"),n(315,"p-additional-help-tooltip"),e(),n(316,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),e()()()(),t(317,"tr",14)(318,"td",15)(319,"div",22)(320,"span",23),n(321," p-auto-focus"),l(322,"br"),e()()(),t(323,"td",18)(324,"code",25),n(325,"boolean"),e()(),t(326,"td",20)(327,"p")(328,"code"),n(329,"false"),e()()(),t(330,"td",21)(331,"em")(332,"strong"),n(333,"(opcional)"),e()(),t(334,"p"),n(335,"Aplica foco no elemento ao ser iniciado."),e(),t(336,"blockquote")(337,"p"),n(338,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),e()()()(),t(339,"tr",14)(340,"td",15)(341,"div",22)(342,"span",23),n(343," p-auto-height"),l(344,"br"),e()()(),t(345,"td",18)(346,"code",25),n(347,"boolean"),e()(),t(348,"td",20)(349,"p")(350,"code"),n(351,"false"),e()()(),t(352,"td",21)(353,"em")(354,"strong"),n(355,"(opcional)"),e()(),t(356,"p"),n(357,`Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo
com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis.`),e(),t(358,"blockquote")(359,"p"),n(360,"O valor padr\xE3o ser\xE1 "),t(361,"code"),n(362,"true"),e(),n(363," quando houver servi\xE7o ("),t(364,"code"),n(365,"p-filter-service"),e(),n(366,")."),e()()()(),t(367,"tr",14)(368,"td",15)(369,"div",16)(370,"span",17),n(371," (p-change)"),l(372,"br"),e()()(),t(373,"td",18)(374,"code",19),n(375,"EventEmitter"),e()(),t(376,"td",20),n(377,"-"),e(),t(378,"td",21)(379,"em")(380,"strong"),n(381,"(opcional)"),e()(),t(382,"p"),n(383,"Pode ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver altera\xE7\xF5es no ngModel."),e()()(),t(384,"tr",14)(385,"td",15)(386,"div",22)(387,"span",23),n(388," p-debounce-time"),l(389,"br"),e()()(),t(390,"td",18)(391,"code",26),n(392,"number"),e()(),t(393,"td",20)(394,"p")(395,"code"),n(396,"400"),e()()(),t(397,"td",21)(398,"em")(399,"strong"),n(400,"(opcional)"),e()(),t(401,"p"),n(402,"Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro ap\xF3s cada pressionamento de tecla."),e(),t(403,"blockquote")(404,"p"),n(405,"Ser\xE1 utilizada apenas quando houver servi\xE7o ("),t(406,"code"),n(407,"p-filter-service"),e(),n(408,") e somente ser\xE1 aceito valor maior do que "),t(409,"em"),n(410,"zero"),e(),n(411,"."),e()()()(),t(412,"tr",14)(413,"td",15)(414,"div",22)(415,"span",23),n(416," p-disabled"),l(417,"br"),e()()(),t(418,"td",18)(419,"code",25),n(420,"boolean"),e()(),t(421,"td",20)(422,"p")(423,"code"),n(424,"false"),e()()(),t(425,"td",21)(426,"em")(427,"strong"),n(428,"(opcional)"),e()(),t(429,"p"),n(430,"Indica que o campo ser\xE1 desabilitado."),e()()(),t(431,"tr",14)(432,"td",15)(433,"div",22)(434,"span",23),n(435," p-error-limit"),l(436,"br"),e()()(),t(437,"td",18)(438,"code",25),n(439,"boolean"),e()(),t(440,"td",20)(441,"p")(442,"code"),n(443,"false"),e()()(),t(444,"td",21)(445,"em")(446,"strong"),n(447,"(opcional)"),e()(),t(448,"p"),n(449,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),e(),t(450,"blockquote")(451,"p"),n(452,"Caso essa propriedade seja definida como "),t(453,"code"),n(454,"true"),e(),n(455,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),e()()()(),t(456,"tr",14)(457,"td",15)(458,"div",22)(459,"span",23),n(460," p-field-error-message"),l(461,"br"),e()()(),t(462,"td",18)(463,"code",24),n(464,"string"),e()(),t(465,"td",20),n(466,"-"),e(),t(467,"td",21)(468,"em")(469,"strong"),n(470,"(opcional)"),e()(),t(471,"p"),n(472,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),e(),t(473,"blockquote")(474,"p"),n(475,"Necess\xE1rio que a propriedade "),t(476,"code"),n(477,"p-required"),e(),n(478," esteja habilitada."),e()()()(),t(479,"tr",14)(480,"td",15)(481,"div",22)(482,"span",23),n(483," p-field-label"),l(484,"br"),e()()(),t(485,"td",18)(486,"code",24),n(487,"string"),e()(),t(488,"td",20)(489,"p")(490,"code"),n(491,"label"),e()()(),t(492,"td",21)(493,"em")(494,"strong"),n(495,"(opcional)"),e()(),t(496,"p"),n(497,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),t(498,"code"),n(499,"p-options"),e(),n(500,"), esta propriedade ser\xE1 respons\xE1vel pelo texto de apresenta\xE7\xE3o de cada item da lista."),e(),t(501,"p"),n(502,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
`),t(503,"code"),n(504,"PoMultiSelectOption"),e(),n(505,"."),e()()(),t(506,"tr",14)(507,"td",15)(508,"div",22)(509,"span",23),n(510," p-field-value"),l(511,"br"),e()()(),t(512,"td",18)(513,"code",24),n(514,"string"),e()(),t(515,"td",20)(516,"p")(517,"code"),n(518,"value"),e()()(),t(519,"td",21)(520,"em")(521,"strong"),n(522,"(opcional)"),e()(),t(523,"p"),n(524,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),t(525,"code"),n(526,"p-options"),e(),n(527,"), esta propriedade ser\xE1 respons\xE1vel pelo valor de cada item da lista."),e(),t(528,"p"),n(529,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
`),t(530,"code"),n(531,"PoMultiSelectOption"),e(),n(532,"."),e()()(),t(533,"tr",14)(534,"td",15)(535,"div",22)(536,"span",23),n(537," p-filter-mode"),l(538,"br"),e()()(),t(539,"td",18)(540,"code",27),n(541,"PoMultiselectFilterMode"),e()(),t(542,"td",20)(543,"p")(544,"code"),n(545,"startsWith"),e()()(),t(546,"td",21)(547,"em")(548,"strong"),n(549,"(opcional)"),e()(),t(550,"p"),n(551,`Define o modo de pesquisa utilizado no campo de busca, quando habilitado.
Valores definidos no enum: PoMultiselectFilterMode`),e()()(),t(552,"tr",14)(553,"td",15)(554,"div",22)(555,"span",23),n(556," p-filter-service"),l(557,"br"),e()()(),t(558,"td",18)(559,"code",24),n(560,"string "),e(),t(561,"code",28),n(562," PoMultiselectFilter"),e()(),t(563,"td",20),n(564,"-"),e(),t(565,"td",21)(566,"em")(567,"strong"),n(568,"(opcional)"),e()(),t(569,"p"),n(570,"Nesta propriedade pode ser informada a URL do servi\xE7o em que ser\xE1 realizado o filtro para carregamento da lista de itens no componente."),e(),t(571,"p"),n(572,"Tamb\xE9m existe a possibilidade de informar um servi\xE7o implementando a interface "),t(573,"code"),n(574,"PoMultiselectFilter"),e(),n(575,"."),e(),t(576,"p"),n(577,"Caso utilizado uma URL, o servi\xE7o deve ser retornado no padr\xE3o "),t(578,"a",29),n(579,"API PO UI"),e(),n(580," e utilizar as propriedades "),t(581,"code"),n(582,"p-field-label"),e(),n(583," e "),t(584,"code"),n(585,"p-field-value"),e(),n(586," para a constru\xE7\xE3o da lista de itens."),e(),t(587,"p"),n(588,"Quando utilizada uma URL de servi\xE7o, ent\xE3o ser\xE1 concatenada nesta URL o valor que deseja-se filtrar da seguinte forma:"),e(),t(589,"pre")(590,"code"),n(591,`// caso filtrar por "Peter"
https://localhost:8080/api/heroes?filter=Peter
`),e()(),t(592,"p"),n(593,"E caso iniciar o campo com valor, os itens ser\xE3o buscados da seguinte forma:"),e(),t(594,"pre")(595,"code"),n(596,`// caso o valor do campo for [1234, 5678];
 https://localhost:8080/api/heroes?value=1234,5678

//O *value* \xE9 referente ao \`fieldValue\`.
`),e()()()(),t(597,"tr",14)(598,"td",15)(599,"div",22)(600,"span",23),n(601," p-help"),l(602,"br"),e()()(),t(603,"td",18)(604,"code",24),n(605,"string"),e()(),t(606,"td",20),n(607,"-"),e(),t(608,"td",21)(609,"em")(610,"strong"),n(611,"(opcional)"),e()(),t(612,"p"),n(613,"Texto de apoio para o campo."),e()()(),t(614,"tr",14)(615,"td",15)(616,"div",22)(617,"span",23),n(618," p-hide-search"),l(619,"br"),e()()(),t(620,"td",18)(621,"code",25),n(622,"boolean"),e()(),t(623,"td",20)(624,"p")(625,"code"),n(626,"false"),e()()(),t(627,"td",21)(628,"em")(629,"strong"),n(630,"(opcional)"),e()(),t(631,"p"),n(632,"Esconde o campo de pesquisa existente dentro do dropdown do po-multiselect."),e()()(),t(633,"tr",14)(634,"td",15)(635,"div",22)(636,"span",23),n(637," p-hide-select-all"),l(638,"br"),e()()(),t(639,"td",18)(640,"code",25),n(641,"boolean"),e()(),t(642,"td",20)(643,"p")(644,"code"),n(645,"false"),e()()(),t(646,"td",21)(647,"em")(648,"strong"),n(649,"(opcional)"),e()(),t(650,"p"),n(651,'Indica se o campo "Selecionar todos" ser\xE1 escondido.'),e()()(),t(652,"tr",14)(653,"td",15)(654,"div",16)(655,"span",17),n(656," (p-keydown)"),l(657,"br"),e()()(),t(658,"td",18)(659,"code",19),n(660,"EventEmitter"),e()(),t(661,"td",20),n(662,"-"),e(),t(663,"td",21)(664,"em")(665,"strong"),n(666,"(opcional)"),e()(),t(667,"p"),n(668,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),t(669,"code"),n(670,"KeyboardEvent"),e(),n(671," com informa\xE7\xF5es sobre a tecla."),e()()(),t(672,"tr",14)(673,"td",15)(674,"div",22)(675,"span",23),n(676," p-label"),l(677,"br"),e()()(),t(678,"td",18)(679,"code",24),n(680,"string"),e()(),t(681,"td",20),n(682,"-"),e(),t(683,"td",21)(684,"em")(685,"strong"),n(686,"(opcional)"),e()(),t(687,"p"),n(688,"Label no componente."),e()()(),t(689,"tr",14)(690,"td",15)(691,"div",22)(692,"span",23),n(693," p-literals"),l(694,"br"),e()()(),t(695,"td",18)(696,"code",30),n(697,"PoMultiselectLiterals"),e()(),t(698,"td",20),n(699,"-"),e(),t(700,"td",21)(701,"em")(702,"strong"),n(703,"(opcional)"),e()(),t(704,"p"),n(705,"Objeto com as literais usadas no "),t(706,"code"),n(707,"po-multiselect"),e(),n(708,"."),e(),t(709,"p"),n(710,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),e(),t(711,"pre")(712,"code"),n(713,`const customLiterals: PoMultiselectLiterals = {
  noData: 'Nenhum dado encontrado',
  placeholderSearch: 'Buscar',
  selectAll: 'Select all',
  selectItem: 'Select items'
};
`),e()(),t(714,"p"),n(715,"Ou passando apenas as literais que deseja customizar:"),e(),t(716,"pre")(717,"code"),n(718,`const customLiterals: PoMultiselectLiterals = {
  noData: 'Sem dados'
};
`),e()(),t(719,"p"),n(720,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente:"),e(),t(721,"pre")(722,"code"),n(723,`<po-multiselect
  [p-literals]="customLiterals">
</po-po-multiselect>
`),e()(),t(724,"blockquote")(725,"p"),n(726,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),t(727,"a",31)(728,"code"),n(729,"PoI18nService"),e()(),n(730," ou do browser."),e()()()(),t(731,"tr",14)(732,"td",15)(733,"div",22)(734,"span",23),n(735," name"),l(736,"br"),e()()(),t(737,"td",18)(738,"code",24),n(739,"string"),e()(),t(740,"td",20),n(741,"-"),e(),t(742,"td",21)(743,"p"),n(744,"Nome do componente."),e()()(),t(745,"tr",14)(746,"td",15)(747,"div",22)(748,"span",23),n(749," p-optional"),l(750,"br"),e()()(),t(751,"td",18)(752,"code",25),n(753,"boolean"),e()(),t(754,"td",20)(755,"p")(756,"code"),n(757,"false"),e()()(),t(758,"td",21)(759,"em")(760,"strong"),n(761,"(opcional)"),e()(),t(762,"p"),n(763,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),e(),t(764,"blockquote")(765,"p"),n(766,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),e()(),t(767,"ul")(768,"li"),n(769,"O campo conter "),t(770,"code"),n(771,"p-required"),e(),n(772,";"),e(),t(773,"li"),n(774,"N\xE3o possuir "),t(775,"code"),n(776,"p-help"),e(),n(777," e/ou "),t(778,"code"),n(779,"p-label"),e(),n(780,"."),e()()()(),t(781,"tr",14)(782,"td",15)(783,"div",22)(784,"span",23),n(785," p-options"),l(786,"br"),e()()(),t(787,"td",18)(788,"code",32),n(789,"Array<PoMultiselectOption "),e(),t(790,"code",33),n(791," any>"),e()(),t(792,"td",20),n(793,"-"),e(),t(794,"td",21)(795,"p"),n(796,`Nesta propriedade deve ser definida uma lista de objetos que ser\xE1 exibida no multiselect.
Esta lista deve conter os valores e os labels que ser\xE3o apresentados na tela.`),e(),t(797,"blockquote")(798,"p"),n(799,`Essa propriedade \xE9 imut\xE1vel, ou seja, sempre que quiser atualizar a lista de op\xE7\xF5es dispon\xEDveis
atualize a refer\xEAncia do objeto:`),e()(),t(800,"pre")(801,"code"),n(802,`// atualiza a refer\xEAncia do objeto garantindo a atualiza\xE7\xE3o do template
this.options = [...this.options, { value: 'x', label: 'Nova op\xE7\xE3o' }];

// evite, pois n\xE3o atualiza a refer\xEAncia do objeto podendo gerar atrasos na atualiza\xE7\xE3o do template
this.options.push({ value: 'x', label: 'Nova op\xE7\xE3o' });
`),e()(),t(803,"blockquote")(804,"p"),n(805,"A lista pode ser definida utilizando um array com o valor representando "),t(806,"code"),n(807,"value"),e(),n(808," e "),t(809,"code"),n(810,"label"),e(),n(811," das seguintes formas:"),e()(),t(812,"pre")(813,"code"),n(814,`<po-multiselect name="multiselect" p-label="PO Multiselect" [p-options]="[{value: 1, label: 'One'}, {value: 2, label: 'two'}]"> </po-multiselect>
`),e()(),t(815,"pre")(816,"code"),n(817,`<po-multiselect name="multiselect" p-label="PO Multiselect" [p-options]="[{name: 'Roger', age: 28}, {name: 'Anne', age: 35}]" p-field-label="name" p-field-value="age"> </po-multiselect>
`),e()(),t(818,"ul")(819,"li"),n(820,"Aconselha-se utilizar valores distintos no "),t(821,"code"),n(822,"label"),e(),n(823," e "),t(824,"code"),n(825,"value"),e(),n(826," dos itens."),e()()()(),t(827,"tr",14)(828,"td",15)(829,"div",22)(830,"span",23),n(831," p-placeholder"),l(832,"br"),e()()(),t(833,"td",18)(834,"code",24),n(835,"string"),e()(),t(836,"td",20),n(837,"-"),e(),t(838,"td",21)(839,"em")(840,"strong"),n(841,"(opcional)"),e()(),t(842,"p"),n(843,"Mensagem apresentada enquanto o campo estiver vazio."),e()()(),t(844,"tr",14)(845,"td",15)(846,"div",22)(847,"span",23),n(848," p-placeholder-search"),l(849,"br"),e()()(),t(850,"td",18)(851,"code",24),n(852,"string"),e()(),t(853,"td",20)(854,"p")(855,"code"),n(856,"Buscar"),e()()(),t(857,"td",21)(858,"em")(859,"strong"),n(860,"(opcional)"),e()(),t(861,"p"),n(862,"Placeholder do campo de pesquisa."),e(),t(863,"blockquote")(864,"p"),n(865,"Caso o mesmo n\xE3o seja informado, o valor padr\xE3o ser\xE1 traduzido com base no idioma do navegador (pt, es e en)."),e()()()(),t(866,"tr",14)(867,"td",15)(868,"div",22)(869,"span",23),n(870," p-required"),l(871,"br"),e()()(),t(872,"td",18)(873,"code",25),n(874,"boolean"),e()(),t(875,"td",20)(876,"p")(877,"code"),n(878,"false"),e()()(),t(879,"td",21)(880,"em")(881,"strong"),n(882,"(opcional)"),e()(),t(883,"p"),n(884,"Define que o campo ser\xE1 obrigat\xF3rio."),e(),t(885,"blockquote")(886,"p"),n(887,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),t(888,"code"),n(889,"(p-disabled)"),e(),n(890,"."),e()()()(),t(891,"tr",14)(892,"td",15)(893,"div",22)(894,"span",23),n(895," p-show-required"),l(896,"br"),e()()(),t(897,"td",18)(898,"code",25),n(899,"boolean"),e()(),t(900,"td",20),n(901,"-"),e(),t(902,"td",21)(903,"p"),n(904,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),e(),t(905,"blockquote")(906,"p"),n(907,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),e()(),t(908,"ul")(909,"li"),n(910,"N\xE3o possuir "),t(911,"code"),n(912,"p-help"),e(),n(913," e/ou "),t(914,"code"),n(915,"p-label"),e(),n(916,"."),e()()()(),t(917,"tr",14)(918,"td",15)(919,"div",22)(920,"span",23),n(921," p-size"),l(922,"br"),e()()(),t(923,"td",18)(924,"code",24),n(925,"string"),e()(),t(926,"td",20)(927,"p")(928,"code"),n(929,"medium"),e()()(),t(930,"td",21)(931,"em")(932,"strong"),n(933,"(opcional)"),e()(),t(934,"p"),n(935,"Define o tamanho do componente:"),e(),t(936,"ul")(937,"li")(938,"code"),n(939,"small"),e(),n(940,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),e(),t(941,"li")(942,"code"),n(943,"medium"),e(),n(944,": altura do input como 44px."),e()(),t(945,"blockquote")(946,"p"),n(947,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),t(948,"code"),n(949,"medium"),e(),n(950,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),t(951,"a",34),n(952,"po-theme"),e(),n(953,"."),e()()()(),t(954,"tr",14)(955,"td",15)(956,"div",22)(957,"span",23),n(958," p-sort"),l(959,"br"),e()()(),t(960,"td",18)(961,"code",25),n(962,"boolean"),e()(),t(963,"td",20)(964,"p")(965,"code"),n(966,"false"),e()()(),t(967,"td",21)(968,"em")(969,"strong"),n(970,"(opcional)"),e()(),t(971,"p"),n(972,`Indica que a lista definida na propriedade p-options ser\xE1 ordenada pelo label antes de ser apresentada no
dropdown.`),e()()()(),t(973,"h3",10),n(974,"M\xE9todos"),e(),t(975,"table",35)(976,"tr",14)(977,"th",36)(978,"div",22)(979,"h4")(980,"span",23),n(981," focus "),e()()()()(),t(982,"tr",21)(983,"td",21)(984,"p"),n(985,"Fun\xE7\xE3o que atribui foco ao componente."),e(),t(986,"p"),n(987,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),e(),t(988,"pre")(989,"code"),n(990,`import { PoMultiselectComponent } from '@po-ui/ng-components';

...

@ViewChild(PoMultiselectComponent, { static: true }) multiselect: PoMultiselectComponent;

focusMultiselect() {
  this.multiselect.focus();
}
`),e()()()()(),l(991,"br"),t(992,"table",35)(993,"tr",14)(994,"th",36)(995,"div",22)(996,"h4")(997,"span",23),n(998," showAdditionalHelp "),e()()()()(),t(999,"tr",21)(1e3,"td",21)(1001,"p"),n(1002,"M\xE9todo que exibe "),t(1003,"code"),n(1004,"p-additionalHelpTooltip"),e(),n(1005," ou executa a a\xE7\xE3o definida em "),t(1006,"code"),n(1007,"p-additionalHelp"),e(),n(1008,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),t(1009,"code"),n(1010,"p-keydown"),e(),n(1011,"."),e(),t(1012,"pre")(1013,"code"),n(1014,`<po-multiselect
 #multiselect
 ...
 p-additional-help-tooltip="Mensagem de ajuda complementar"
 (p-keydown)="onKeyDown($event, multiselect)"
></po-multiselect>
`),e()(),t(1015,"pre")(1016,"code"),n(1017,`...
onKeyDown(event: KeyboardEvent, inp: PoMultiselectComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),e()()()()(),l(1018,"br"),t(1019,"h3"),n(1020,"Interfaces"),e(),t(1021,"h4",37)(1022,"code",5),n(1023,"PoMultiselectFilter"),e()(),t(1024,"div",2)(1025,"p"),n(1026,"Interface para os servi\xE7os que ser\xE3o utilizados no po-multiselect."),e()(),t(1027,"h4",10),n(1028,"M\xE9todos"),e(),t(1029,"table",35)(1030,"tr",14)(1031,"th",36)(1032,"div",22)(1033,"h4")(1034,"span",23),n(1035," getFilteredData "),e()()()()(),t(1036,"tr",21)(1037,"td",21)(1038,"p"),n(1039,`M\xE9todo que ser\xE1 chamado ao realizar uma busca no componente, deve retornar um Observable que cont\xE9m uma cole\xE7\xE3o de objetos que seguem
a interface `),t(1040,"code"),n(1041,"PoMultiselectOption"),e(),n(1042,", ser\xE1 informado por parametro o campo e o valor a ser pesquisado."),e()()()(),t(1043,"h5")(1044,"b"),n(1045,"Par\xE2metros"),e()(),t(1046,"table",11)(1047,"tr",12)(1048,"th",13),n(1049,"Nome"),e(),t(1050,"th",13),n(1051,"Tipo"),e(),t(1052,"th",13),n(1053,"Descri\xE7\xE3o"),e()(),t(1054,"tr",14)(1055,"td",15),n(1056," params"),e(),t(1057,"td",18)(1058,"code",38),n(1059," { property: string, value: string } "),e()(),t(1060,"td",21)(1061,"p"),n(1062,"Objeto contendo a propriedade e o valor respons\xE1vel por realizar o filtro."),e()()()(),l(1063,"br"),t(1064,"table",35)(1065,"tr",14)(1066,"th",36)(1067,"div",22)(1068,"h4")(1069,"span",23),n(1070," getObjectsByValues "),e()()()()(),t(1071,"tr",21)(1072,"td",21)(1073,"p"),n(1074,`M\xE9todo que ser\xE1 chamado ao iniciar o componente com valor, deve retornar um Observable que cont\xE9m apenas os objetos filtrados que
seguem a interface `),t(1075,"code"),n(1076,"PoMultiselectOption"),e(),n(1077,", ser\xE1 informado por par\xE2metro valor a ser pesquisado."),e()()()(),t(1078,"h5")(1079,"b"),n(1080,"Par\xE2metros"),e()(),t(1081,"table",11)(1082,"tr",12)(1083,"th",13),n(1084,"Nome"),e(),t(1085,"th",13),n(1086,"Tipo"),e(),t(1087,"th",13),n(1088,"Descri\xE7\xE3o"),e()(),t(1089,"tr",14)(1090,"td",15),n(1091," values"),e(),t(1092,"td",18)(1093,"code",39),n(1094," Array<string "),e(),t(1095,"code",40),n(1096," number> "),e()(),t(1097,"td",21)(1098,"p"),n(1099,"Array com os valores a serem buscados."),e()()()(),l(1100,"br"),t(1101,"h4",37)(1102,"code",5),n(1103,"PoMultiselectLiterals"),e()(),t(1104,"div",2)(1105,"p"),n(1106,"Interface para defini\xE7\xE3o das literais usadas no "),t(1107,"code"),n(1108,"po-multiselect"),e(),n(1109,"."),e()(),t(1110,"h4",10),n(1111,"Propriedades"),e(),t(1112,"table",11)(1113,"tr",12)(1114,"th",13),n(1115,"Nome"),e(),t(1116,"th",13),n(1117,"Tipo"),e(),t(1118,"th",13),n(1119,"Descri\xE7\xE3o"),e()(),t(1120,"tr",14)(1121,"td",15)(1122,"div",22)(1123,"span",23),n(1124," noData"),l(1125,"br"),e()()(),t(1126,"td",18)(1127,"code",24),n(1128,"string"),e()(),t(1129,"td",21)(1130,"em")(1131,"strong"),n(1132,"(opcional)"),e()(),t(1133,"p"),n(1134,"Texto exibido quando n\xE3o houver dados encontrados na busca."),e()()(),t(1135,"tr",14)(1136,"td",15)(1137,"div",22)(1138,"span",23),n(1139," placeholderSearch"),l(1140,"br"),e()()(),t(1141,"td",18)(1142,"code",24),n(1143,"string"),e()(),t(1144,"td",21)(1145,"em")(1146,"strong"),n(1147,"(opcional)"),e()(),t(1148,"p"),n(1149,"Texto do "),t(1150,"em"),n(1151,"placeholder"),e(),n(1152," do campo de busca."),e()()(),t(1153,"tr",14)(1154,"td",15)(1155,"div",22)(1156,"span",23),n(1157," selectAll"),l(1158,"br"),e()()(),t(1159,"td",18)(1160,"code",24),n(1161,"string"),e()(),t(1162,"td",21)(1163,"em")(1164,"strong"),n(1165,"(opcional)"),e()(),t(1166,"p"),n(1167,"Texto exibido no bot\xE3o de selecionar todos."),e()()(),t(1168,"tr",14)(1169,"td",15)(1170,"div",22)(1171,"span",23),n(1172," selectItem"),l(1173,"br"),e()()(),t(1174,"td",18)(1175,"code",24),n(1176,"string"),e()(),t(1177,"td",21)(1178,"em")(1179,"strong"),n(1180,"(opcional)"),e()(),t(1181,"p"),n(1182,"Texto exibido na propriedade placeholder."),e()()()(),t(1183,"h4",37)(1184,"code",5),n(1185,"PoMultiselectOption"),e()(),t(1186,"div",2)(1187,"p"),n(1188,"Interface dos itens da cole\xE7\xE3o que ser\xE1 exibida no dropdown do po-multiselect."),e()(),t(1189,"h4",10),n(1190,"Propriedades"),e(),t(1191,"table",11)(1192,"tr",12)(1193,"th",13),n(1194,"Nome"),e(),t(1195,"th",13),n(1196,"Tipo"),e(),t(1197,"th",13),n(1198,"Descri\xE7\xE3o"),e()(),t(1199,"tr",14)(1200,"td",15)(1201,"div",22)(1202,"span",23),n(1203," label"),l(1204,"br"),e()()(),t(1205,"td",18)(1206,"code",24),n(1207,"string"),e()(),t(1208,"td",21)(1209,"p"),n(1210,"Label exibido nos itens da lista."),e()()(),t(1211,"tr",14)(1212,"td",15)(1213,"div",22)(1214,"span",23),n(1215," value"),l(1216,"br"),e()()(),t(1217,"td",18)(1218,"code",24),n(1219,"string "),e(),t(1220,"code",26),n(1221," number"),e()(),t(1222,"td",21)(1223,"p"),n(1224,"Valor do objeto que ser\xE1 atribu\xEDdo ao model."),e()()()(),t(1225,"h3"),n(1226,"Enums"),e(),t(1227,"h4",4)(1228,"code",5),n(1229,"PoMultiselectFilterMode"),e()(),t(1230,"div",2)(1231,"p"),n(1232,"Define o tipo de busca usado no po-multiselect."),e()(),t(1233,"h4",10),n(1234,"Propriedades"),e(),t(1235,"table",11)(1236,"tr",12)(1237,"th",13),n(1238,"Nome"),e(),t(1239,"th",13),n(1240,"Descri\xE7\xE3o"),e()(),t(1241,"tr",14)(1242,"td",15)(1243,"div",22)(1244,"span",23),n(1245," startsWith"),l(1246,"br"),e()()(),t(1247,"td",21)(1248,"p"),n(1249,"Verifica se o texto "),t(1250,"em"),n(1251,"inicia"),e(),n(1252," com o valor pesquisado."),e()()(),t(1253,"tr",14)(1254,"td",15)(1255,"div",22)(1256,"span",23),n(1257," contains"),l(1258,"br"),e()()(),t(1259,"td",21)(1260,"p"),n(1261,"Verifica se o texto "),t(1262,"em"),n(1263,"cont\xE9m"),e(),n(1264," o valor pesquisado."),e()()(),t(1265,"tr",14)(1266,"td",15)(1267,"div",22)(1268,"span",23),n(1269," endsWith"),l(1270,"br"),e()()(),t(1271,"td",21)(1272,"p"),n(1273,"Verifica se o texto "),t(1274,"em"),n(1275,"finaliza"),e(),n(1276," com o valor pesquisado."),e()()()()())},dependencies:[M],encapsulation:2})}return o})();var Ne=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=7;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(s,a){this.route=s,this.router=a}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(s=>{let a=s.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(s){this.router.navigate([],{queryParams:{view:s},queryParamsHandling:"merge"}),this.activeTab=s}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(a){return new(a||o)(q(he),q(be))};static \u0275cmp=S({type:o,selectors:[["ng-component"]],standalone:!1,decls:12,vars:4,consts:[["p-title","Multiselect",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,i){a&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),u("p-click",function(){return i.changeTab("doc")}),l(3,"sample-po-multiselect-doc"),e(),t(4,"po-tab",3),u("p-click",function(){return i.changeTab("web")}),l(5,"sample-po-multiselect-basic-view")(6,"sample-po-multiselect-labs-view")(7,"sample-po-multiselect-vacation-view")(8,"sample-po-multiselect-vacation-reactive-form-view")(9,"sample-po-multiselect-template-view")(10,"sample-po-multiselect-heroes-view")(11,"sample-po-multiselect-any-array-view"),e()()()),a&2&&(m("p-actions",i.actions),p(2),m("p-active",i.activeTab==="doc"),p(2),m("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[Ce,y,C,Pe,we,Ve,Oe,Le,qe,Be,Ie],encapsulation:2})}return o})();var ht=[{path:"",component:Ne}],ze=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=K({type:o});static \u0275inj=Q({imports:[oe.forChild(ht),oe]})}return o})();var pn=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=K({type:o});static \u0275inj=Q({imports:[Me,ze]})}return o})();export{pn as DocPoMultiselectModule};
