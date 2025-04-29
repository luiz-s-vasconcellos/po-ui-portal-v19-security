import{$ as J,$a as w,$d as k,A as I,Bd as N,Cd as Pe,Ec as X,F as u,Fa as ce,Fd as B,G as E,Ga as e,Ia as L,Ka as b,Kb as ae,La as g,Lb as _,Ma as v,Mb as j,Na as D,Nb as K,Oa as U,Ob as A,Pa as F,Pb as z,Pc as Y,Rd as Le,Sb as be,T as d,Tb as ge,Tc as Ce,U as f,Ua as ue,Va as Ee,Vb as ve,Vc as Z,Wb as he,Yb as fe,Zb as le,_ as S,_d as C,a as G,bb as xe,c as me,ea as pe,gd as ke,h as ne,ha as c,hb as Se,jd as ee,ka as P,na as i,oa as t,pa as n,pb as V,pd as ye,q as de,sd as q,ta as $,te as y,ua as x,ue as Fe,va as se,vc as H,x as O,y as Q,za as oe}from"./chunk-Y4SQKOF7.js";var we=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","lookup","p-field-label","label","p-field-value","value","p-filter-service","https://po-sample-api.onrender.com/v1/heroes","p-label","PO Lookup"]],template:function(l,o){l&1&&n(0,"po-lookup",0)},dependencies:[q],encapsulation:2})}return a})();var Ge=a=>({"docs-sample-code-tabs":a}),qe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup Basic"),t(),i(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-basic/sample-po-lookup-basic.component.html"),t(),i(13,"pre",7),e(14,`<po-lookup
  name="lookup"
  p-field-label="label"
  p-field-value="value"
  p-filter-service="https://po-sample-api.onrender.com/v1/heroes"
  p-label="PO Lookup"
>
</po-lookup>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-lookup-basic/sample-po-lookup-basic.component.ts"),t(),i(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-lookup-basic',
  templateUrl: './sample-po-lookup-basic.component.html',
  standalone: false
})
export class SamplePoLookupBasicComponent {}
`),t()()()()(),i(21,"div",10),n(22,"sample-po-lookup-basic"),t(),n(23,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel,""),d(),c("ngClass",F(4,Ge,o.hideSampleCodeTabs)))},dependencies:[w,y,C,k,we],encapsulation:2})}return a})();var T=(()=>{class a{httpClient;url="https://po-sample-api.onrender.com/v1/heroes";constructor(r){this.httpClient=r}getFilteredItems(r){let m=r,{filterParams:l,advancedFilters:o}=m,p=me(m,["filterParams","advancedFilters"]),s=G(G(G({},p),l),o);return this.httpClient.get(this.url,{params:s})}getObjectByValue(r){return this.httpClient.get(`${this.url}/${r}`)}static \u0275fac=function(l){return new(l||a)(I(V))};static \u0275prov=O({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var Te=(()=>{class a{sampleFilterService;additionalHelpTooltip;columns;columnsName;customLiterals;event;fieldFormat;formatField;fieldLabel;fieldValue;filterService;help;label;literals;lookup;placeholder;properties;fieldErrorMessage;advancedFilters;customAdvancedFilters;size;spacing=ke.Medium;columnsOptions=[{value:"id",label:"Id"},{value:"name",label:"Name"},{value:"email",label:"Email"}];fieldLabelOptions=[{value:"label",label:"Label"},...this.columnsOptions];fieldValueOptions=[{value:"value",label:"Value"},...this.columnsOptions];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"infiniteScroll",label:"Infinite Scroll"},{value:"multiple",label:"Multiple"},{value:"autoHeight",label:"Auto Height"},{value:"hideColumnsManager",label:"Hide Columns Manager"},{value:"textWrap",label:"Text Wrap"},{value:"virtualScroll",label:"Virtual Sroll"},{value:"errorLimit",label:"Limit Error Message"}];columnsDefinition={id:{property:"id",label:"Id"},name:{property:"name",label:"Name"},email:{property:"email",label:"Email"}};typeSpacing=[{label:"Small",value:"small"},{label:"Medium",value:"medium"},{label:"Large",value:"large"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];constructor(r){this.sampleFilterService=r}ngOnInit(){this.restore()}changeEvent(r){this.event=r}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals=void 0}}onFieldFormatChange(r){try{this.fieldFormat=JSON.parse(r)}catch{this.fieldFormat=void 0}}changeAdvancedFilters(){try{this.customAdvancedFilters=JSON.parse(this.advancedFilters)}catch{this.customAdvancedFilters=void 0}}restore(){this.additionalHelpTooltip="",this.columnsName=["id","name"],this.customLiterals=void 0,this.updateColumns(),this.fieldLabel="name",this.fieldValue="id",this.fieldFormat=void 0,this.formatField=void 0,this.event=void 0,this.filterService=void 0,this.label=void 0,this.literals=void 0,this.help=void 0,this.lookup=void 0,this.placeholder="",this.properties=[],this.fieldErrorMessage="",this.customAdvancedFilters=[],this.size="medium"}updateColumns(){this.columns=[],this.columnsName.forEach(r=>this.columns.push(this.columnsDefinition[r]))}static \u0275fac=function(l){return new(l||a)(f(T))};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-labs"]],standalone:!1,features:[D([T])],decls:26,vars:51,consts:[["f","ngForm"],["name","lookup",3,"ngModelChange","p-change","p-error","p-keydown","p-selected","ngModel","p-additional-help-tooltip","p-advanced-filters","p-auto-height","p-clean","p-columns","p-disabled","p-field-format","p-field-label","p-filter-service","p-field-value","p-help","p-hide-columns-manager","p-infinite-scroll","p-label","p-literals","p-multiple","p-no-autocomplete","p-optional","p-placeholder","p-required","p-field-error-message","p-show-required","p-size","p-spacing","p-text-wrap","p-virtual-scroll","p-error-limit"],["p-no-border","true","p-no-padding","true"],[1,"po-row"],["p-label","Model",1,"po-md-12",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","columnsName","p-columns","3","p-label","Columns",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","fieldLabel","p-label","Field Label","p-required","",1,"po-md-6","po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","fieldValue","p-label","Field Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","filterService","p-clean","","p-help","https://po-sample-api.onrender.com/v1/people","p-label","Filter Service",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","additionalHelpTooltip","p-clean","","p-label","Additional Help Tooltip",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: { "modalTitle": "Select a register", "modalPrimaryActionLabel": "Select", "modalPlaceholder": "Search Value" }',"p-label","Literals",1,"po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","formatField","p-label","Field Format","p-help",'Ex.: ["id", "name"]',1,"po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","spacing","p-columns","4","p-label","Spacing",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","advancedFilters","p-help",'Ex.: [{"property":"name","divider":"PERSONAL DATA","required":true,"gridColumns":6},{"property":"id","optional":true,"gridColumns":6}]',"p-label","Advanced Filters","p-rows","4",1,"po-md-12","po-lg-12",3,"ngModelChange","p-change","ngModel"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,o){if(l&1){let p=$();i(0,"po-lookup",1),v("ngModelChange",function(m){return u(p),g(o.lookup,m)||(o.lookup=m),E(m)}),x("p-change",function(){return u(p),E(o.changeEvent("p-change"))})("p-error",function(){return u(p),E(o.changeEvent("p-error"))})("p-keydown",function(){return u(p),E(o.changeEvent("p-keydown"))})("p-selected",function(){return u(p),E(o.changeEvent("p-selected"))}),t(),n(1,"hr"),i(2,"po-container",2)(3,"div",3),n(4,"po-info",4)(5,"po-info",5),t()(),n(6,"hr"),i(7,"form",null,0)(9,"po-input",6),v("ngModelChange",function(m){return u(p),g(o.label,m)||(o.label=m),E(m)}),t(),i(10,"po-checkbox-group",7),v("ngModelChange",function(m){return u(p),g(o.columnsName,m)||(o.columnsName=m),E(m)}),x("p-change",function(){return u(p),E(o.updateColumns())}),t(),i(11,"po-select",8),v("ngModelChange",function(m){return u(p),g(o.fieldLabel,m)||(o.fieldLabel=m),E(m)}),t(),i(12,"po-select",9),v("ngModelChange",function(m){return u(p),g(o.fieldValue,m)||(o.fieldValue=m),E(m)}),t(),i(13,"po-input",10),v("ngModelChange",function(m){return u(p),g(o.filterService,m)||(o.filterService=m),E(m)}),t(),i(14,"po-input",11),v("ngModelChange",function(m){return u(p),g(o.fieldErrorMessage,m)||(o.fieldErrorMessage=m),E(m)}),t(),i(15,"po-input",12),v("ngModelChange",function(m){return u(p),g(o.help,m)||(o.help=m),E(m)}),t(),i(16,"po-input",13),v("ngModelChange",function(m){return u(p),g(o.additionalHelpTooltip,m)||(o.additionalHelpTooltip=m),E(m)}),t(),i(17,"po-input",14),v("ngModelChange",function(m){return u(p),g(o.placeholder,m)||(o.placeholder=m),E(m)}),t(),i(18,"po-input",15),v("ngModelChange",function(m){return u(p),g(o.literals,m)||(o.literals=m),E(m)}),x("p-change",function(){return u(p),E(o.changeLiterals())}),t(),i(19,"po-input",16),v("ngModelChange",function(m){return u(p),g(o.formatField,m)||(o.formatField=m),E(m)}),x("p-change",function(m){return u(p),E(o.onFieldFormatChange(m))}),t(),i(20,"po-checkbox-group",17),v("ngModelChange",function(m){return u(p),g(o.properties,m)||(o.properties=m),E(m)}),t(),i(21,"po-radio-group",18),v("ngModelChange",function(m){return u(p),g(o.spacing,m)||(o.spacing=m),E(m)}),t(),i(22,"po-radio-group",19),v("ngModelChange",function(m){return u(p),g(o.size,m)||(o.size=m),E(m)}),t(),i(23,"po-textarea",20),v("ngModelChange",function(m){return u(p),g(o.advancedFilters,m)||(o.advancedFilters=m),E(m)}),x("p-change",function(){return u(p),E(o.changeAdvancedFilters())}),t(),i(24,"div",3)(25,"po-button",21),x("p-click",function(){return u(p),E(o.restore())}),t()()()}l&2&&(b("ngModel",o.lookup),c("p-additional-help-tooltip",o.additionalHelpTooltip)("p-advanced-filters",o.customAdvancedFilters)("p-auto-height",o.properties.includes("autoHeight"))("p-clean",o.properties.includes("clean"))("p-columns",o.columns)("p-disabled",o.properties.includes("disabled"))("p-field-format",o.fieldFormat)("p-field-label",o.fieldLabel)("p-filter-service",o.filterService||o.sampleFilterService)("p-field-value",o.fieldValue)("p-help",o.help)("p-hide-columns-manager",o.properties.includes("hideColumnsManager"))("p-infinite-scroll",o.properties.includes("infiniteScroll"))("p-label",o.label)("p-literals",o.customLiterals)("p-multiple",o.properties.includes("multiple"))("p-no-autocomplete",o.properties.includes("noAutocomplete"))("p-optional",o.properties.includes("optional"))("p-placeholder",o.placeholder)("p-required",o.properties.includes("required"))("p-field-error-message",o.fieldErrorMessage)("p-show-required",o.properties.includes("showRequired"))("p-size",o.size)("p-spacing",o.spacing)("p-text-wrap",o.properties.includes("textWrap"))("p-virtual-scroll",o.properties.includes("virtualScroll"))("p-error-limit",o.properties==null?null:o.properties.includes("errorLimit")),d(4),c("p-value",o.lookup),d(),c("p-value",o.event),d(4),b("ngModel",o.label),d(),b("ngModel",o.columnsName),c("p-options",o.columnsOptions),d(),b("ngModel",o.fieldLabel),c("p-options",o.fieldLabelOptions),d(),b("ngModel",o.fieldValue),c("p-options",o.fieldValueOptions),d(),b("ngModel",o.filterService),d(),b("ngModel",o.fieldErrorMessage),d(),b("ngModel",o.help),d(),b("ngModel",o.additionalHelpTooltip),d(),b("ngModel",o.placeholder),d(),b("ngModel",o.literals),d(),b("ngModel",o.formatField),d(),b("ngModel",o.properties),c("p-options",o.propertiesOptions),d(),b("ngModel",o.spacing),c("p-options",o.typeSpacing),d(),b("ngModel",o.size),c("p-options",o.sizeOptions),d(),b("ngModel",o.advancedFilters))},dependencies:[z,_,j,A,K,H,Y,Ce,Z,ye,q,N,Pe,B],encapsulation:2})}return a})();var $e=a=>({"docs-sample-code-tabs":a}),_e=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-labs-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup Labs"),t(),i(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-labs/sample-po-lookup-labs.component.html"),t(),i(13,"pre",7),e(14,`<po-lookup
  name="lookup"
  [(ngModel)]="lookup"
  [p-additional-help-tooltip]="additionalHelpTooltip"
  [p-advanced-filters]="customAdvancedFilters"
  [p-auto-height]="properties.includes('autoHeight')"
  [p-clean]="properties.includes('clean')"
  [p-columns]="columns"
  [p-disabled]="properties.includes('disabled')"
  [p-field-format]="fieldFormat"
  [p-field-label]="fieldLabel"
  [p-filter-service]="filterService || sampleFilterService"
  [p-field-value]="fieldValue"
  [p-help]="help"
  [p-hide-columns-manager]="properties.includes('hideColumnsManager')"
  [p-infinite-scroll]="properties.includes('infiniteScroll')"
  [p-label]="label"
  [p-literals]="customLiterals"
  [p-multiple]="properties.includes('multiple')"
  [p-no-autocomplete]="properties.includes('noAutocomplete')"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-required]="properties.includes('required')"
  [p-field-error-message]="fieldErrorMessage"
  [p-show-required]="properties.includes('showRequired')"
  [p-size]="size"
  [p-spacing]="spacing"
  [p-text-wrap]="properties.includes('textWrap')"
  [p-virtual-scroll]="properties.includes('virtualScroll')"
  (p-change)="changeEvent('p-change')"
  (p-error)="changeEvent('p-error')"
  (p-keydown)="changeEvent('p-keydown')"
  (p-selected)="changeEvent('p-selected')"
  [p-error-limit]="properties?.includes('errorLimit')"
>
</po-lookup>

<hr />

<po-container p-no-border="true" p-no-padding="true">
  <div class="po-row">
    <po-info class="po-md-12" p-label="Model" [p-value]="lookup"> </po-info>

    <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
  </div>
</po-container>

<hr />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-checkbox-group
    class="po-md-12 po-lg-6"
    name="columnsName"
    [(ngModel)]="columnsName"
    p-columns="3"
    p-label="Columns"
    [p-options]="columnsOptions"
    (p-change)="updateColumns()"
  >
  </po-checkbox-group>

  <po-select
    class="po-md-6 po-lg-12"
    name="fieldLabel"
    [(ngModel)]="fieldLabel"
    p-label="Field Label"
    p-required
    [p-options]="fieldLabelOptions"
  >
  </po-select>

  <po-select
    class="po-md-6"
    name="fieldValue"
    [(ngModel)]="fieldValue"
    p-label="Field Value"
    p-required
    [p-options]="fieldValueOptions"
  >
  </po-select>

  <po-input
    class="po-md-12 po-lg-6"
    name="filterService"
    [(ngModel)]="filterService"
    p-clean
    p-help="https://po-sample-api.onrender.com/v1/people"
    p-label="Filter Service"
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
    class="po-lg-6"
    name="literals"
    [(ngModel)]="literals"
    p-help='Ex.: { "modalTitle": "Select a register", "modalPrimaryActionLabel": "Select", "modalPlaceholder": "Search Value" }'
    p-label="Literals"
    (p-change)="changeLiterals()"
  >
  </po-input>

  <po-input
    name="formatField"
    [(ngModel)]="formatField"
    class="po-lg-6"
    p-label="Field Format"
    p-help='Ex.: ["id", "name"]'
    (p-change)="onFieldFormatChange($event)"
  >
  </po-input>

  <po-checkbox-group
    class="po-lg-12"
    name="properties"
    [(ngModel)]="properties"
    p-columns="4"
    p-label="Properties"
    [p-options]="propertiesOptions"
  >
  </po-checkbox-group>

  <po-radio-group
    class="po-lg-12"
    name="spacing"
    [(ngModel)]="spacing"
    p-columns="4"
    p-label="Spacing"
    [p-options]="typeSpacing"
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

  <po-textarea
    class="po-md-12 po-lg-12"
    name="advancedFilters"
    [(ngModel)]="advancedFilters"
    (p-change)="changeAdvancedFilters()"
    p-help='Ex.: [{"property":"name","divider":"PERSONAL DATA","required":true,"gridColumns":6},{"property":"id","optional":true,"gridColumns":6}]'
    p-label="Advanced Filters"
    p-rows="4"
  >
  </po-textarea>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-lookup-labs/sample-po-lookup-labs.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoLookupColumn,
  PoLookupFilter,
  PoLookupLiterals,
  PoDynamicFormField,
  PoSelectOption,
  PoTableColumnSpacing,
  PoRadioGroupOption
} from '@po-ui/ng-components';

import { SamplePoLookupService } from '../sample-po-lookup.service';

@Component({
  selector: 'sample-po-lookup-labs',
  templateUrl: './sample-po-lookup-labs.component.html',
  providers: [SamplePoLookupService],
  standalone: false
})
export class SamplePoLookupLabsComponent implements OnInit {
  additionalHelpTooltip: string;
  columns: Array<PoLookupColumn>;
  columnsName: Array<string>;
  customLiterals: PoLookupLiterals;
  event: string;
  fieldFormat: Array<string>;
  formatField: string;
  fieldLabel: string;
  fieldValue: string;
  filterService: PoLookupFilter | string;
  help: string;
  label: string;
  literals: string;
  lookup: any;
  placeholder: string;
  properties: Array<string>;
  fieldErrorMessage: string;
  advancedFilters: string;
  customAdvancedFilters: Array<PoDynamicFormField>;
  size: string;
  spacing: PoTableColumnSpacing = PoTableColumnSpacing.Medium;

  public readonly columnsOptions: Array<PoCheckboxGroupOption> = [
    { value: 'id', label: 'Id' },
    { value: 'name', label: 'Name' },
    { value: 'email', label: 'Email' }
  ];

  public readonly fieldLabelOptions: Array<PoSelectOption> = [
    { value: 'label', label: 'Label' },
    ...this.columnsOptions
  ];

  public readonly fieldValueOptions: Array<PoSelectOption> = [
    { value: 'value', label: 'Value' },
    ...this.columnsOptions
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'clean', label: 'Clean' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'noAutocomplete', label: 'No Autocomplete' },
    { value: 'optional', label: 'Optional' },
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'infiniteScroll', label: 'Infinite Scroll' },
    { value: 'multiple', label: 'Multiple' },
    { value: 'autoHeight', label: 'Auto Height' },
    { value: 'hideColumnsManager', label: 'Hide Columns Manager' },
    { value: 'textWrap', label: 'Text Wrap' },
    { value: 'virtualScroll', label: 'Virtual Sroll' },
    { value: 'errorLimit', label: 'Limit Error Message' }
  ];

  private readonly columnsDefinition = {
    id: <PoLookupColumn>{ property: 'id', label: 'Id' },
    name: <PoLookupColumn>{ property: 'name', label: 'Name' },
    email: <PoLookupColumn>{ property: 'email', label: 'Email' }
  };

  public readonly typeSpacing: Array<PoRadioGroupOption> = [
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' }
  ];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  constructor(public sampleFilterService: SamplePoLookupService) {}

  ngOnInit(): void {
    this.restore();
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

  onFieldFormatChange(event) {
    try {
      this.fieldFormat = JSON.parse(event);
    } catch {
      this.fieldFormat = undefined;
    }
  }

  changeAdvancedFilters() {
    try {
      this.customAdvancedFilters = JSON.parse(this.advancedFilters);
    } catch {
      this.customAdvancedFilters = undefined;
    }
  }

  restore() {
    this.additionalHelpTooltip = '';
    this.columnsName = ['id', 'name'];
    this.customLiterals = undefined;
    this.updateColumns();

    this.fieldLabel = 'name';
    this.fieldValue = 'id';
    this.fieldFormat = undefined;
    this.formatField = undefined;
    this.event = undefined;
    this.filterService = undefined;
    this.label = undefined;
    this.literals = undefined;
    this.help = undefined;
    this.lookup = undefined;
    this.placeholder = '';
    this.properties = [];
    this.fieldErrorMessage = '';
    this.customAdvancedFilters = [];
    this.size = 'medium';
  }

  updateColumns() {
    this.columns = [];

    this.columnsName.forEach(column => this.columns.push(this.columnsDefinition[column]));
  }
}
`),t(),i(21,"label",6),e(22,"sample-po-lookup.service.ts"),t(),i(23,"pre",9),e(24,`import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { PoLookupFilter, PoLookupFilteredItemsParams } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoLookupService implements PoLookupFilter {
  private url = 'https://po-sample-api.onrender.com/v1/heroes';

  constructor(private httpClient: HttpClient) {}

  getFilteredItems(filteredParams: PoLookupFilteredItemsParams): Observable<any> {
    const { filterParams, advancedFilters, ...restFilteredItemsParams } = filteredParams;
    const params = { ...restFilteredItemsParams, ...filterParams, ...advancedFilters };

    return this.httpClient.get(this.url, { params });
  }

  getObjectByValue(value: string): Observable<any> {
    return this.httpClient.get(\`\${this.url}/\${value}\`);
  }
}
`),t()()()()(),i(25,"div",10),n(26,"sample-po-lookup-labs"),t(),n(27,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel,""),d(),c("ngClass",F(4,$e,o.hideSampleCodeTabs)))},dependencies:[w,y,C,k,Te],encapsulation:2})}return a})();var Xe=()=>({modalTitle:"Heroes available for mission"}),De=(()=>{class a{service;notification;hero;vehicle;columns=[{property:"nickname",label:"Hero"},{property:"name",label:"Name"}];vehicles=[{label:"Airplane",value:"airplane"},{label:"Boat",value:"boat"},{label:"Car",value:"car"},{label:"Helicopter",value:"helicopter"},{label:"Motorcycle",value:"motorcycle"},{label:"Rocket",value:"rocket"},{label:"Spaceship",value:"spaceship"},{label:"Submarine",value:"submarine"},{label:"Truck",value:"truck"}];advancedFilters=[{property:"nickname",divider:"Hero Informations",optional:!0,gridColumns:6,label:"Hero"},{property:"name",optional:!0,gridColumns:6}];constructor(r,l){this.service=r,this.notification=l}fieldFormat(r){return`${r.nickname} - ${r.label}`}startMission(){this.hero.length%2===0?this.notification.success(`Mission started with hero ${this.hero} ${this.vehicle?"with vehicle: "+this.vehicle:""}.`):this.notification.error(`Choose another hero because ${this.hero} is in other mission.`),this.hero=void 0,this.vehicle=void 0}static \u0275fac=function(l){return new(l||a)(f(T),f(X))};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-hero"]],standalone:!1,features:[D([T])],decls:10,vars:11,consts:[["f","ngForm"],[1,"po-row"],["p-label","New mission found","p-value","Objective: Stop an asteroid collision on Earth",1,"po-lg-6"],["name","hero","p-field-label","label","p-field-value","label","p-help","Select hero for mission","p-label","Hero","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-columns","p-field-format","p-filter-service","p-hide-columns-manager","p-advanced-filters","p-literals"],["name","vehicle","p-help","Select a vehicle for the hero","p-label","Vehicle","p-placeholder","None",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Start Mission",1,"po-md-6",3,"p-click","p-disabled"]],template:function(l,o){if(l&1){let p=$();i(0,"div",1),n(1,"po-info",2),t(),n(2,"hr"),i(3,"form",null,0)(5,"div",1)(6,"po-lookup",3),v("ngModelChange",function(m){return u(p),g(o.hero,m)||(o.hero=m),E(m)}),t(),i(7,"po-select",4),v("ngModelChange",function(m){return u(p),g(o.vehicle,m)||(o.vehicle=m),E(m)}),t()(),i(8,"div",1)(9,"po-button",5),x("p-click",function(){return u(p),E(o.startMission())}),t()()()}if(l&2){let p=ce(4);d(6),b("ngModel",o.hero),c("p-columns",o.columns)("p-field-format",o.fieldFormat)("p-filter-service",o.service)("p-hide-columns-manager",!0)("p-advanced-filters",o.advancedFilters)("p-literals",U(10,Xe)),d(),b("ngModel",o.vehicle),c("p-options",o.vehicles),d(2),c("p-disabled",p.form.invalid||p.form.pending)}},dependencies:[z,_,j,A,K,H,q,N,B],encapsulation:2})}return a})();var Ze=a=>({"docs-sample-code-tabs":a}),Ae=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-hero-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup - Hero"),t(),i(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-hero/sample-po-lookup-hero.component.html"),t(),i(13,"pre",7),e(14,`<div class="po-row">
  <po-info class="po-lg-6" p-label="New mission found" p-value="Objective: Stop an asteroid collision on Earth">
  </po-info>
</div>

<hr />

<form #f="ngForm">
  <div class="po-row">
    <po-lookup
      class="po-md-6"
      name="hero"
      [(ngModel)]="hero"
      p-field-label="label"
      p-field-value="label"
      p-help="Select hero for mission"
      p-label="Hero"
      p-required
      [p-columns]="columns"
      [p-field-format]="fieldFormat"
      [p-filter-service]="service"
      [p-hide-columns-manager]="true"
      [p-advanced-filters]="advancedFilters"
      [p-literals]="{ 'modalTitle': 'Heroes available for mission' }"
    >
    </po-lookup>

    <po-select
      class="po-md-6"
      name="vehicle"
      [(ngModel)]="vehicle"
      p-help="Select a vehicle for the hero"
      p-label="Vehicle"
      p-placeholder="None"
      [p-options]="vehicles"
    >
    </po-select>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-6"
      p-label="Start Mission"
      [p-disabled]="f.form.invalid || f.form.pending"
      (p-click)="startMission()"
    >
    </po-button>
  </div>
</form>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-lookup-hero/sample-po-lookup-hero.component.ts"),t(),i(19,"pre",9),e(20,`import { Component } from '@angular/core';

import { PoLookupColumn, PoSelectOption } from '@po-ui/ng-components';

import { PoNotificationService, PoDynamicFormField } from '@po-ui/ng-components';

import { SamplePoLookupService } from '../sample-po-lookup.service';

@Component({
  selector: 'sample-po-lookup-hero',
  templateUrl: './sample-po-lookup-hero.component.html',
  providers: [SamplePoLookupService],
  standalone: false
})
export class SamplePoLookupHeroComponent {
  hero: string;
  vehicle: string;

  public readonly columns: Array<PoLookupColumn> = [
    { property: 'nickname', label: 'Hero' },
    { property: 'name', label: 'Name' }
  ];

  public readonly vehicles: Array<PoSelectOption> = [
    { label: 'Airplane', value: 'airplane' },
    { label: 'Boat', value: 'boat' },
    { label: 'Car', value: 'car' },
    { label: 'Helicopter', value: 'helicopter' },
    { label: 'Motorcycle', value: 'motorcycle' },
    { label: 'Rocket', value: 'rocket' },
    { label: 'Spaceship', value: 'spaceship' },
    { label: 'Submarine', value: 'submarine' },
    { label: 'Truck', value: 'truck' }
  ];

  advancedFilters: Array<PoDynamicFormField> = [
    { property: 'nickname', divider: 'Hero Informations', optional: true, gridColumns: 6, label: 'Hero' },
    { property: 'name', optional: true, gridColumns: 6 }
  ];

  constructor(
    public service: SamplePoLookupService,
    public notification: PoNotificationService
  ) {}

  fieldFormat(value) {
    return \`\${value.nickname} - \${value.label}\`;
  }

  startMission() {
    if (this.hero.length % 2 === 0) {
      this.notification.success(
        \`Mission started with hero \${this.hero} \${this.vehicle ? 'with vehicle: ' + this.vehicle : ''}.\`
      );
    } else {
      this.notification.error(\`Choose another hero because \${this.hero} is in other mission.\`);
    }

    this.hero = undefined;
    this.vehicle = undefined;
  }
}
`),t(),i(21,"label",6),e(22,"sample-po-lookup.service.ts"),t(),i(23,"pre",9),e(24,`import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { PoLookupFilter, PoLookupFilteredItemsParams } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoLookupService implements PoLookupFilter {
  private url = 'https://po-sample-api.onrender.com/v1/heroes';

  constructor(private httpClient: HttpClient) {}

  getFilteredItems(filteredParams: PoLookupFilteredItemsParams): Observable<any> {
    const { filterParams, advancedFilters, ...restFilteredItemsParams } = filteredParams;
    const params = { ...restFilteredItemsParams, ...filterParams, ...advancedFilters };

    return this.httpClient.get(this.url, { params });
  }

  getObjectByValue(value: string): Observable<any> {
    return this.httpClient.get(\`\${this.url}/\${value}\`);
  }
}
`),t()()()()(),i(25,"div",10),n(26,"sample-po-lookup-hero"),t(),n(27,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel,""),d(),c("ngClass",F(4,Ze,o.hideSampleCodeTabs)))},dependencies:[w,y,C,k,De],encapsulation:2})}return a})();var tt=()=>["nickname","label"],it=()=>({modalTitle:"Heroes available for mission"}),Oe=(()=>{class a{service;notification;formBuilder;formMission;columns=[{property:"nickname",label:"Hero"},{property:"name",label:"Name"}];vehicles=[{label:"Airplane",value:"airplane"},{label:"Boat",value:"boat"},{label:"Car",value:"car"},{label:"Helicopter",value:"helicopter"},{label:"Motorcycle",value:"motorcycle"},{label:"Rocket",value:"rocket"},{label:"Spaceship",value:"spaceship"},{label:"Submarine",value:"submarine"},{label:"Truck",value:"truck"}];constructor(r,l,o){this.service=r,this.notification=l,this.formBuilder=o}ngOnInit(){this.formMission=this.formBuilder.group({hero:[null,ae.required],vehicle:[null,ae.required]})}fieldFormat(r){return`${r.nickname} - ${r.label}`}startMission(){let r=this.formMission.get("hero").value,l=this.formMission.get("vehicle").value;r.length%2===0?this.notification.success(`Mission started with hero ${r} ${l?"with vehicle: "+l:""}.`):this.notification.error(`Choose another hero because ${r} is in other mission.`),this.formMission.reset()}static \u0275fac=function(l){return new(l||a)(f(T),f(X),f(ve))};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-hero-reactive-form"]],standalone:!1,features:[D([T])],decls:9,vars:9,consts:[[1,"po-row"],["p-label","New mission found","p-value","Objective: Stop an asteroid collision on Earth",1,"po-lg-6"],[3,"formGroup"],["name","hero","formControlName","hero","p-field-label","label","p-field-value","label","p-help","Select hero for mission","p-label","Hero","p-required","",1,"po-md-6",3,"p-columns","p-field-format","p-filter-service","p-literals"],["name","vehicle","formControlName","vehicle","p-help","Select a vehicle for the hero","p-label","Vehicle","p-placeholder","None",1,"po-md-6",3,"p-options"],["p-label","Start Mission",1,"po-md-6",3,"p-click","p-disabled"]],template:function(l,o){l&1&&(i(0,"div",0),n(1,"po-info",1),t(),n(2,"hr"),i(3,"form",2)(4,"div",0),n(5,"po-lookup",3)(6,"po-select",4),t(),i(7,"div",0)(8,"po-button",5),x("p-click",function(){return o.startMission()}),t()()()),l&2&&(d(3),c("formGroup",o.formMission),d(2),c("p-columns",o.columns)("p-field-format",U(7,tt))("p-filter-service",o.service)("p-literals",U(8,it)),d(),c("p-options",o.vehicles),d(2),c("p-disabled",o.formMission.invalid||o.formMission.pending))},dependencies:[z,_,j,be,ge,H,q,N,B],encapsulation:2})}return a})();var ot=a=>({"docs-sample-code-tabs":a}),Ie=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-hero-reactive-form-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup - Hero Reactive Form"),t(),i(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-hero-reactive-form/sample-po-lookup-hero-reactive-form.component.html"),t(),i(13,"pre",7),e(14,`<div class="po-row">
  <po-info class="po-lg-6" p-label="New mission found" p-value="Objective: Stop an asteroid collision on Earth">
  </po-info>
</div>

<hr />

<form [formGroup]="formMission">
  <div class="po-row">
    <po-lookup
      class="po-md-6"
      name="hero"
      formControlName="hero"
      p-field-label="label"
      p-field-value="label"
      p-help="Select hero for mission"
      p-label="Hero"
      p-required
      [p-columns]="columns"
      [p-field-format]="['nickname', 'label']"
      [p-filter-service]="service"
      [p-literals]="{ 'modalTitle': 'Heroes available for mission' }"
    >
    </po-lookup>

    <po-select
      class="po-md-6"
      name="vehicle"
      formControlName="vehicle"
      p-help="Select a vehicle for the hero"
      p-label="Vehicle"
      p-placeholder="None"
      [p-options]="vehicles"
    >
    </po-select>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-6"
      p-label="Start Mission"
      [p-disabled]="formMission.invalid || formMission.pending"
      (p-click)="startMission()"
    >
    </po-button>
  </div>
</form>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-lookup-hero-reactive-form/sample-po-lookup-hero-reactive-form.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { PoLookupColumn, PoSelectOption } from '@po-ui/ng-components';

import { PoNotificationService } from '@po-ui/ng-components';

import { SamplePoLookupService } from '../sample-po-lookup.service';

@Component({
  selector: 'sample-po-lookup-hero-reactive-form',
  templateUrl: './sample-po-lookup-hero-reactive-form.component.html',
  providers: [SamplePoLookupService],
  standalone: false
})
export class SamplePoLookupHeroReactiveFormComponent implements OnInit {
  formMission: UntypedFormGroup;

  public readonly columns: Array<PoLookupColumn> = [
    { property: 'nickname', label: 'Hero' },
    { property: 'name', label: 'Name' }
  ];

  public readonly vehicles: Array<PoSelectOption> = [
    { label: 'Airplane', value: 'airplane' },
    { label: 'Boat', value: 'boat' },
    { label: 'Car', value: 'car' },
    { label: 'Helicopter', value: 'helicopter' },
    { label: 'Motorcycle', value: 'motorcycle' },
    { label: 'Rocket', value: 'rocket' },
    { label: 'Spaceship', value: 'spaceship' },
    { label: 'Submarine', value: 'submarine' },
    { label: 'Truck', value: 'truck' }
  ];

  constructor(
    public service: SamplePoLookupService,
    public notification: PoNotificationService,
    private formBuilder: UntypedFormBuilder
  ) {}

  ngOnInit(): void {
    this.formMission = this.formBuilder.group({
      hero: [null, Validators.required],
      vehicle: [null, Validators.required]
    });
  }

  fieldFormat(value) {
    return \`\${value.nickname} - \${value.label}\`;
  }

  startMission() {
    const heroName = this.formMission.get('hero').value;
    const heroVehicle = this.formMission.get('vehicle').value;

    if (heroName.length % 2 === 0) {
      this.notification.success(
        \`Mission started with hero \${heroName} \${heroVehicle ? 'with vehicle: ' + heroVehicle : ''}.\`
      );
    } else {
      this.notification.error(\`Choose another hero because \${heroName} is in other mission.\`);
    }

    this.formMission.reset();
  }
}
`),t(),i(21,"label",6),e(22,"sample-po-lookup.service.ts"),t(),i(23,"pre",9),e(24,`import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { PoLookupFilter, PoLookupFilteredItemsParams } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoLookupService implements PoLookupFilter {
  private url = 'https://po-sample-api.onrender.com/v1/heroes';

  constructor(private httpClient: HttpClient) {}

  getFilteredItems(filteredParams: PoLookupFilteredItemsParams): Observable<any> {
    const { filterParams, advancedFilters, ...restFilteredItemsParams } = filteredParams;
    const params = { ...restFilteredItemsParams, ...filterParams, ...advancedFilters };

    return this.httpClient.get(this.url, { params });
  }

  getObjectByValue(value: string): Observable<any> {
    return this.httpClient.get(\`\${this.url}/\${value}\`);
  }
}
`),t()()()()(),i(25,"div",10),n(26,"sample-po-lookup-hero-reactive-form"),t(),n(27,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel,""),d(),c("ngClass",F(4,ot,o.hideSampleCodeTabs)))},dependencies:[w,y,C,k,Oe],encapsulation:2})}return a})();var ie=(()=>{class a{http;baseUrl="https://swapi.dev/api";filmsUrl="https://swapi.dev/api/films/";constructor(r){this.http=r}getFilms(){return this.http.get(this.filmsUrl)}getFilteredItems({filter:r,page:l,filterParams:o}){let p={page:l.toString()};return r&&(p.search=r),this.http.get(`${this.baseUrl}/${o}`,{params:p}).pipe(ne(s=>({items:s.results,hasNext:!!s.next})))}getObjectByValue(r,l){return this.http.get(`${this.baseUrl}/${l}/?search=${r}`).pipe(ne(o=>o.results[0]))}static \u0275fac=function(l){return new(l||a)(I(V))};static \u0275prov=O({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function rt(a,bt){if(a&1&&(i(0,"div",0),n(1,"po-table",4),t()),a&2){let r=se();d(),c("p-columns",r.filmColumns)("p-items",r.filmItemsFiltered)("p-sort",!0)("p-hide-table-search",!1)}}var Ve=(()=>{class a{filterService;entity;filmItemsFiltered;filterParams="people";characterColumns=[{property:"name",label:"Name"},{property:"gender",label:"Gender"},{property:"height",label:"Height"},{property:"mass",label:"Mass"}];entities=[{label:"Character",value:"people"},{label:"Planet",value:"planets"},{label:"Starship",value:"starships"}];filmColumns=[{property:"episode_id",label:"Episode id"},{property:"title",label:"Title"},{property:"director",label:"Director"},{property:"producer",label:"Producer"},{property:"release_date",label:"Release date",type:"date"}];planetsColumns=[{property:"name",label:"Name"},{property:"diameter",label:"Diameter"},{property:"population",label:"Population"},{property:"climate",label:"Climate"}];starshipsColumns=[{property:"name",label:"Name"},{property:"passengers",label:"Passengers"},{property:"max_atmosphering_speed",label:"Max Speed"},{property:"consumables",label:"Consumables"}];filmItems;constructor(r){this.filterService=r}get entityColumns(){return this.getEntityColumns(this.filterParams)}get entityLabel(){return this.getLabelOfEntity(this.filterParams)}ngOnInit(){this.filterService.getFilms().subscribe(r=>{this.filmItems=r.results})}onSelected(r){this.filterService.getObjectByValue(r.name,this.filterParams).subscribe(l=>{this.filmItemsFiltered=this.filmItems.filter(o=>l?.films.includes(o.url))},l=>console.error(l))}getEntityColumns(r){switch(r){case"people":return this.characterColumns;case"planets":return this.planetsColumns;case"starships":return this.starshipsColumns}}getLabelOfEntity(r){switch(r){case"people":return"character";case"planets":return"planet";case"starships":return"starship"}}static \u0275fac=function(l){return new(l||a)(f(ie))};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-sw-films"]],standalone:!1,features:[D([ie])],decls:7,vars:14,consts:[[1,"po-row"],["name","filterParams","p-label","Choose the entity of SW to search",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","entity","p-field-label","name","p-field-value","name",1,"po-md-12",3,"ngModelChange","p-selected","ngModel","p-help","p-label","p-columns","p-filter-params","p-filter-service","p-infinite-scroll"],["class","po-row",4,"ngIf"],[1,"po-sm-12",3,"p-columns","p-items","p-sort","p-hide-table-search"]],template:function(l,o){l&1&&(i(0,"div",0)(1,"po-radio-group",1),v("ngModelChange",function(s){return g(o.filterParams,s)||(o.filterParams=s),s}),t()(),n(2,"hr"),i(3,"div",0)(4,"po-lookup",2),ue(5,"titlecase"),v("ngModelChange",function(s){return g(o.entity,s)||(o.entity=s),s}),x("p-selected",function(s){return o.onSelected(s)}),t()(),pe(6,rt,2,4,"div",3)),l&2&&(d(),b("ngModel",o.filterParams),c("p-options",o.entities),d(3),oe("p-help","Select a ",o.entityLabel," to see the list of movies in which it participated"),oe("p-label","",Ee(5,12,o.entityLabel)," of Star Wars"),b("ngModel",o.entity),c("p-columns",o.entityColumns)("p-filter-params",o.filterParams)("p-filter-service",o.filterService)("p-infinite-scroll",!0),d(2),c("ngIf",o.filmItemsFiltered&&o.entity))},dependencies:[xe,_,A,Z,q,ee,Se],encapsulation:2})}return a})();var dt=a=>({"docs-sample-code-tabs":a}),je=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-sw-films-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup - Star Wars films"),t(),i(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-sw-films/sample-po-lookup-sw-films.component.html"),t(),i(13,"pre",7),e(14,`<div class="po-row">
  <po-radio-group
    class="po-md-12"
    name="filterParams"
    [(ngModel)]="filterParams"
    p-label="Choose the entity of SW to search"
    [p-options]="entities"
  >
  </po-radio-group>
</div>

<hr />

<div class="po-row">
  <po-lookup
    class="po-md-12"
    name="entity"
    [(ngModel)]="entity"
    p-field-label="name"
    p-field-value="name"
    p-help="Select a { { entityLabel }} to see the list of movies in which it participated"
    p-label="{ { entityLabel | titlecase }} of Star Wars"
    [p-columns]="entityColumns"
    [p-filter-params]="filterParams"
    [p-filter-service]="filterService"
    [p-infinite-scroll]="true"
    (p-selected)="onSelected($event)"
  >
  </po-lookup>
</div>

<div class="po-row" *ngIf="filmItemsFiltered && entity">
  <po-table
    class="po-sm-12"
    [p-columns]="filmColumns"
    [p-items]="filmItemsFiltered"
    [p-sort]="true"
    [p-hide-table-search]="false"
  >
  </po-table>
</div>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-lookup-sw-films/sample-po-lookup-sw-films.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';
import { PoRadioGroupOption } from '@po-ui/ng-components';
import { SamplePoLookupSwFilmsService } from './sample-po-lookup-sw-films.service';

@Component({
  selector: 'sample-po-lookup-sw-films',
  templateUrl: './sample-po-lookup-sw-films.component.html',
  providers: [SamplePoLookupSwFilmsService],
  standalone: false
})
export class SamplePoLookupSwFilmsComponent implements OnInit {
  entity;
  filmItemsFiltered;
  filterParams = 'people';

  readonly characterColumns = [
    { property: 'name', label: 'Name' },
    { property: 'gender', label: 'Gender' },
    { property: 'height', label: 'Height' },
    { property: 'mass', label: 'Mass' }
  ];

  readonly entities: Array<PoRadioGroupOption> = [
    { label: 'Character', value: 'people' },
    { label: 'Planet', value: 'planets' },
    { label: 'Starship', value: 'starships' }
  ];

  readonly filmColumns = [
    { property: 'episode_id', label: 'Episode id' },
    { property: 'title', label: 'Title' },
    { property: 'director', label: 'Director' },
    { property: 'producer', label: 'Producer' },
    { property: 'release_date', label: 'Release date', type: 'date' }
  ];

  readonly planetsColumns = [
    { property: 'name', label: 'Name' },
    { property: 'diameter', label: 'Diameter' },
    { property: 'population', label: 'Population' },
    { property: 'climate', label: 'Climate' }
  ];

  readonly starshipsColumns = [
    { property: 'name', label: 'Name' },
    { property: 'passengers', label: 'Passengers' },
    { property: 'max_atmosphering_speed', label: 'Max Speed' },
    { property: 'consumables', label: 'Consumables' }
  ];

  private filmItems;

  constructor(public filterService: SamplePoLookupSwFilmsService) {}

  get entityColumns() {
    return this.getEntityColumns(this.filterParams);
  }

  get entityLabel() {
    return this.getLabelOfEntity(this.filterParams);
  }

  ngOnInit() {
    this.filterService.getFilms().subscribe((films: { results: Array<any> }) => {
      this.filmItems = films.results;
    });
  }

  onSelected(entity) {
    this.filterService.getObjectByValue(entity.name, this.filterParams).subscribe(
      result => {
        this.filmItemsFiltered = this.filmItems.filter(film => result?.films.includes(film.url));
      },
      err => console.error(err)
    );
  }

  private getEntityColumns(entity) {
    switch (entity) {
      case 'people':
        return this.characterColumns;
      case 'planets':
        return this.planetsColumns;
      case 'starships':
        return this.starshipsColumns;
    }
  }

  private getLabelOfEntity(entity): string {
    switch (entity) {
      case 'people':
        return 'character';
      case 'planets':
        return 'planet';
      case 'starships':
        return 'starship';
    }
  }
}
`),t(),i(21,"label",6),e(22,"sample-po-lookup-sw-films/sample-po-lookup-sw-films.service.ts"),t(),i(23,"pre",9),e(24,`import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { PoLookupFilter, PoLookupResponseApi, PoLookupFilteredItemsParams } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoLookupSwFilmsService implements PoLookupFilter {
  private baseUrl = 'https://swapi.dev/api';
  private filmsUrl = 'https://swapi.dev/api/films/';

  constructor(private http: HttpClient) {}

  getFilms() {
    return this.http.get(this.filmsUrl);
  }

  getFilteredItems({ filter, page, filterParams }: PoLookupFilteredItemsParams): Observable<PoLookupResponseApi> {
    const params = { page: page.toString() };

    if (filter) {
      params['search'] = filter;
    }

    return this.http.get(\`\${this.baseUrl}/\${filterParams}\`, { params }).pipe(
      map((response: { results: Array<any>; next: string }) => ({
        items: response.results,
        hasNext: !!response.next
      }))
    );
  }

  getObjectByValue(value: string, filterParams: any): Observable<any> {
    return this.http
      .get(\`\${this.baseUrl}/\${filterParams}/?search=\${value}\`)
      .pipe(map((response: { results: Array<any> }) => response.results[0]));
  }
}
`),t()()()()(),i(25,"div",10),n(26,"sample-po-lookup-sw-films"),t(),n(27,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel,""),d(),c("ngClass",F(4,dt,o.hideSampleCodeTabs)))},dependencies:[w,y,C,k,Ve],encapsulation:2})}return a})();var ze=(()=>{class a{http;constructor(r){this.http=r}getHeroes(r){let l=r?.length?r.toString():r;return this.http.get(`https://po-sample-api.onrender.com/v1/heroes?value=${l}`).pipe(de("items"))}static \u0275fac=function(l){return new(l||a)(I(V))};static \u0275prov=O({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var He=(()=>{class a{service;loading=!1;heroes;multiLookup=[1495831666871,1405833068599];columns=[{property:"value",label:"id"},{property:"label",label:"Name"}];constructor(r){this.service=r}changeOptions(r){this.loading=!0,this.service.getHeroes(r).subscribe(l=>{this.heroes=l},l=>console.error(l),()=>this.loading=!1)}openLink(r){window.open(`http://google.com/search?q=${r}`,"_blank")}static \u0275fac=function(l){return new(l||a)(f(ze))};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-multiple"]],standalone:!1,decls:4,vars:8,consts:[[1,"po-row"],["name","lookup","p-field-label","label","p-field-value","value","p-filter-service","https://po-sample-api.onrender.com/v1/heroes","p-label","Search a Hero",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-multiple"],[1,"po-md-6","po-mt-4"],[3,"p-columns","p-items","p-height","p-striped","p-hide-columns-manager","p-loading"]],template:function(l,o){l&1&&(i(0,"div",0)(1,"po-lookup",1),v("ngModelChange",function(s){return g(o.multiLookup,s)||(o.multiLookup=s),s}),x("p-change",function(s){return o.changeOptions(s)}),t(),i(2,"po-container",2),n(3,"po-table",3),t()()),l&2&&(d(),b("ngModel",o.multiLookup),c("p-multiple",!0),d(2),c("p-columns",o.columns)("p-items",o.heroes)("p-height",220)("p-striped",!0)("p-hide-columns-manager",!0)("p-loading",o.loading))},dependencies:[_,A,Y,q,ee],encapsulation:2})}return a})();var ut=a=>({"docs-sample-code-tabs":a}),Ne=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-multiple-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup - Multiple"),t(),i(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-multiple/sample-po-lookup-multiple.component.html"),t(),i(13,"pre",7),e(14,`<div class="po-row">
  <po-lookup
    class="po-md-6"
    name="lookup"
    [(ngModel)]="multiLookup"
    p-field-label="label"
    p-field-value="value"
    p-filter-service="https://po-sample-api.onrender.com/v1/heroes"
    p-label="Search a Hero"
    [p-multiple]="true"
    (p-change)="changeOptions($event)"
  ></po-lookup>
  <po-container class="po-md-6 po-mt-4">
    <po-table
      [p-columns]="columns"
      [p-items]="heroes"
      [p-height]="220"
      [p-striped]="true"
      [p-hide-columns-manager]="true"
      [p-loading]="loading"
    ></po-table>
  </po-container>
</div>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-lookup-multiple/sample-po-lookup-multiple.component.ts"),t(),i(19,"pre",9),e(20,`import { Component } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';

import { SamplePoLookupMultipleService } from './sample-po-lookup-multiple.service';

@Component({
  selector: 'sample-po-lookup-multiple',
  templateUrl: './sample-po-lookup-multiple.component.html',
  styles: [],
  standalone: false
})
export class SamplePoLookupMultipleComponent {
  loading: boolean = false;
  heroes: Array<any>;
  multiLookup: Array<any> = [1495831666871, 1405833068599];
  columns: Array<PoTableColumn> = [
    { property: 'value', label: 'id' },
    {
      property: 'label',
      label: 'Name'
    }
  ];
  constructor(public service: SamplePoLookupMultipleService) {}

  changeOptions(event): void {
    this.loading = true;
    this.service.getHeroes(event).subscribe(
      result => {
        this.heroes = result;
      },
      err => console.error(err),
      () => (this.loading = false)
    );
  }

  openLink(value) {
    window.open(\`http://google.com/search?q=\${value}\`, '_blank');
  }
}
`),t(),i(21,"label",6),e(22,"sample-po-lookup-multiple/sample-po-lookup-multiple.service.ts"),t(),i(23,"pre",9),e(24,`import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SamplePoLookupMultipleService {
  constructor(public http: HttpClient) {}

  getHeroes(data): Observable<any> {
    const values = data?.length ? data.toString() : data;
    return this.http.get(\`https://po-sample-api.onrender.com/v1/heroes?value=\${values}\`).pipe(pluck('items'));
  }
}
`),t()()()()(),i(25,"div",10),n(26,"sample-po-lookup-multiple"),t(),n(27,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel,""),d(),c("ngClass",F(4,ut,o.hideSampleCodeTabs)))},dependencies:[w,y,C,k,He],encapsulation:2})}return a})();var Be=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-doc"]],standalone:!1,decls:5105,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://angular.io/guide/form-validation#creating-asynchronous-validators"],["href","https://po-ui.io/guides/api"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","Array<PoLookupAdvancedFilter>"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Array<PoLookupColumn>"],["pan","",1,"docs-api-property-type","((value)","=>","string)"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","PoLookupFilter"],["href","https://tc39.es/ecma262/#sec-encodeuricomponent-uricomponent"],["pan","",1,"docs-api-property-type","PoLookupLiterals"],["href","/documentation/po-i18n"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoTableColumnSpacing"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","number"],["href","/documentation/po-lookup"],["pan","",1,"docs-api-property-type","PoProgressAction"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","(file:","PoUploadFile)","=>","void"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","PoMultiselectFilterMode"],["pan","",1,"docs-api-property-type","ForceBooleanComponentEnum"],["pan","",1,"docs-api-property-type","ForceOptionComponentEnum"],["pan","",1,"docs-api-property-type","{","[name:","string]:","string"],["pan","",1,"docs-api-property-type","Array<string>;","}"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoDatepickerIsoFormat"],["pan","",1,"docs-api-property-type","PoSwitchLabelPosition"],["pan","",1,"docs-api-property-type","PoMultiselectLiterals"],["pan","",1,"docs-api-property-type","PoComboLiterals"],["pan","",1,"docs-api-property-type","PoDatepickerRangeLiterals"],["pan","",1,"docs-api-property-type","PoUploadLiterals"],["href","documentation/po-i18n"],["pan","",1,"docs-api-property-type","Array<PoSelectOption>"],["pan","",1,"docs-api-property-type","Array<PoMultiselectOption>"],["pan","",1,"docs-api-property-type","Array<PoCheckboxGroupOption>"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type","PoComboFilter"],["pan","",1,"docs-api-property-type","PoMultiselectFilter"],["pan","",1,"docs-api-property-type","PoUploadFileRestrictions"],["pan","",1,"docs-api-property-type","PoDynamicFieldType"],["href","documentation/po-dynamic-form#po-dynamic-form-field-validation"],["pan","",1,"docs-api-property-type"],["pan","",1,"docs-api-property-type","{","[key:","string]:","any;","}"],["pan","",1,"docs-api-property-type","Array<object>"]],template:function(l,o){l&1&&(i(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),i(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),i(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),i(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),i(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),i(16,"h3",3),e(17,"Componente"),t(),i(18,"h4",4)(19,"code",5),e(20,"PoLookupComponent"),t()(),i(21,"div",2)(22,"p"),e(23,`Componente utilizado para abrir uma janela de busca com uma tabela que lista dados de um servi\xE7o. Nesta janela \xE9 poss\xEDvel buscar e
selecionar um ou mais registros que ser\xE3o enviados para o campo. O `),i(24,"code"),e(25,"po-lookup"),t(),e(26," permite que o usu\xE1rio digite um valor e pressione a tecla "),i(27,"em"),e(28,"TAB"),t(),e(29,` para
buscar um registro.`),t(),i(30,"blockquote")(31,"p"),e(32,`Caso o campo seja iniciado ou preenchido com um valor inexistente na busca, o mesmo ser\xE1 limpado.
No segundo caso ocorrer\xE1 ap\xF3s este perder o foco; ambos os casos o campo ficar\xE1 inv\xE1lido quando requerido.`),t()(),i(33,"blockquote")(34,"p"),e(35,`Enquanto o componente realiza a requisi\xE7\xE3o ao servidor, o componente ficar\xE1 desabilitado e com o status interno do
`),i(36,"a",6),e(37,"modelo"),t(),e(38," como "),i(39,"code"),e(40,"pending"),t(),e(41,"."),t()(),i(42,"p"),e(43,`Este componente n\xE3o \xE9 recomendado quando a busca dos dados possuir poucas informa\xE7\xF5es, para isso utilize outros componentes como o
`),i(44,"code"),e(45,"po-select"),t(),e(46," ou o "),i(47,"code"),e(48,"po-combo"),t(),e(49,`. Quando existe muitos dados o po-lookup por padr\xE3o traz apenas 10 itens na tabela e os demais s\xE3o carregados por demanda atrav\xE9s do
bot\xE3o 'Carregar mais resultados'. Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),i(50,"a",7),e(51,"Guia de implementa\xE7\xE3o das APIs TOTVS"),t(),e(52,"."),t(),i(53,"p"),e(54,"Importante:"),t(),i(55,"ul")(56,"li"),e(57,`Caso o po-lookup contenha o [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o ser\xE1 necess\xE1rio informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".`),i(58,"pre")(59,"code"),e(60,`<po-lookup
  [(ngModel)]="pessoa.nome"
  [ngModelOptions]="{standalone: true}">
</po-lookup>
`),t()()()(),i(61,"h4"),e(62,"Tokens customiz\xE1veis"),t(),i(63,"p"),e(64,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),t(),i(65,"blockquote")(66,"p"),e(67,"Para maiores informa\xE7\xF5es, acesse o guia "),i(68,"a",8),e(69,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(70,"."),t()(),i(71,"table")(72,"thead")(73,"tr")(74,"th"),e(75,"Propriedade"),t(),i(76,"th"),e(77,"Descri\xE7\xE3o"),t(),i(78,"th"),e(79,"Valor Padr\xE3o"),t()()(),i(80,"tbody")(81,"tr")(82,"td")(83,"strong"),e(84,"Default Values"),t()(),n(85,"td")(86,"td"),t(),i(87,"tr")(88,"td")(89,"code"),e(90,"--font-family"),t()(),i(91,"td"),e(92,"Fam\xEDlia tipogr\xE1fica usada"),t(),i(93,"td")(94,"code"),e(95,"var(--font-family-theme)"),t()()(),i(96,"tr")(97,"td")(98,"code"),e(99,"--font-size"),t()(),i(100,"td"),e(101,"Tamanho da fonte"),t(),i(102,"td")(103,"code"),e(104,"var(--font-size-default)"),t()()(),i(105,"tr")(106,"td")(107,"code"),e(108,"--text-color-placeholder"),t()(),i(109,"td"),e(110,"Cor do texto no placeholder"),t(),i(111,"td")(112,"code"),e(113,"var(--color-neutral-light-30)"),t()()(),i(114,"tr")(115,"td")(116,"code"),e(117,"--color"),t()(),i(118,"td"),e(119,"Cor principal do lookup"),t(),i(120,"td")(121,"code"),e(122,"var(--color-neutral-dark-70)"),t()()(),i(123,"tr")(124,"td")(125,"code"),e(126,"--border-radius"),t()(),i(127,"td"),e(128,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),t(),i(129,"td")(130,"code"),e(131,"var(--border-radius-md)"),t()()(),i(132,"tr")(133,"td")(134,"code"),e(135,"--background"),t()(),i(136,"td"),e(137,"Cor de background"),t(),i(138,"td")(139,"code"),e(140,"var(--color-neutral-light-05)"),t()()(),i(141,"tr")(142,"td")(143,"code"),e(144,"--text-color"),t()(),i(145,"td"),e(146,"Cor do texto"),t(),i(147,"td")(148,"code"),e(149,"var(--color-neutral-dark-90)"),t()()(),i(150,"tr")(151,"td")(152,"code"),e(153,"--color-clear"),t()(),i(154,"td"),e(155,"Cor principal do icone clear"),t(),i(156,"td")(157,"code"),e(158,"var(--color-action-default)"),t()()(),i(159,"tr")(160,"td")(161,"strong"),e(162,"Icon"),t()(),n(163,"td")(164,"td"),t(),i(165,"tr")(166,"td")(167,"code"),e(168,"--color-icon"),t()(),i(169,"td"),e(170,"Cor principal do icone pesquisar"),t(),i(171,"td")(172,"code"),e(173,"var(--color-action-default)"),t()()(),i(174,"tr")(175,"td")(176,"strong"),e(177,"Hover"),t()(),n(178,"td")(179,"td"),t(),i(180,"tr")(181,"td")(182,"code"),e(183,"--color-hover"),t()(),i(184,"td"),e(185,"Cor principal no estado hover"),t(),i(186,"td")(187,"code"),e(188,"var(--color-action-hover)"),t()()(),i(189,"tr")(190,"td")(191,"code"),e(192,"--background-hover"),t()(),i(193,"td"),e(194,"Cor de background no estado hover"),t(),i(195,"td")(196,"code"),e(197,"var(--color-brand-01-lightest)"),t()()(),i(198,"tr")(199,"td")(200,"strong"),e(201,"Focused"),t()(),n(202,"td")(203,"td"),t(),i(204,"tr")(205,"td")(206,"code"),e(207,"--color-focused"),t()(),i(208,"td"),e(209,"Cor principal no estado de focus"),t(),i(210,"td")(211,"code"),e(212,"var(--color-action-default)"),t()()(),i(213,"tr")(214,"td")(215,"code"),e(216,"--outline-color-focused"),t()(),i(217,"td"),e(218,"Cor do outline do estado de focus"),t(),i(219,"td")(220,"code"),e(221,"var(--color-action-focus)"),t()()(),i(222,"tr")(223,"td")(224,"strong"),e(225,"Disabled"),t()(),n(226,"td")(227,"td"),t(),i(228,"tr")(229,"td")(230,"code"),e(231,"--color-disabled"),t()(),i(232,"td"),e(233,"Cor principal no estado disabled"),t(),i(234,"td")(235,"code"),e(236,"var(--color-action-disabled)"),t()()(),i(237,"tr")(238,"td")(239,"code"),e(240,"--background-disabled"),t()(),i(241,"td"),e(242,"Cor de background no estado disabled"),t(),i(243,"td")(244,"code"),e(245,"var(--color-neutral-light-20)"),t()()(),i(246,"tr")(247,"td")(248,"code"),e(249,"--text-color-disabled"),t()(),i(250,"td"),e(251,"Cor do texto quando campo est\xE1 desabilitado"),t(),i(252,"td")(253,"code"),e(254,"var(--color-action-disabled)"),t()()(),i(255,"tr")(256,"td")(257,"strong"),e(258,"Error"),t()(),n(259,"td")(260,"td"),t(),i(261,"tr")(262,"td")(263,"code"),e(264,"--color-error"),t()(),i(265,"td"),e(266,"Cor de background no estado de requerido"),t(),i(267,"td")(268,"code"),e(269,"var(--color-feedback-negative-base)"),t()()()()()(),i(270,"div",9)(271,"h4",10),e(272,"Seletor"),t(),i(273,"pre",11),e(274,`<po-lookup
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-advanced-filters="Array<PoLookupAdvancedFilter>"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    p-auto-height="boolean"
    (p-change)="EventEmitter"
    (p-change-visible-columns)="EventEmitter"
    p-clean="boolean"
    (p-restore-column-manager)="EventEmitter"
    p-columns="Array<PoLookupColumn>"
    p-disabled="boolean"
    p-error-limit="boolean"
    p-field-error-message="string"
    p-field-format="((value) => string) | Array<string>"
    p-field-label="string"
    p-field-value="string"
    p-filter-params="any"
    p-filter-service="string | PoLookupFilter"
    p-help="string"
    p-hide-columns-manager="boolean"
    p-infinite-scroll="boolean"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-literals="PoLookupLiterals"
    p-multiple="boolean"
    name="string"
    p-no-autocomplete="boolean"
    (p-error)="EventEmitter"
    p-optional="boolean"
    p-placeholder="string"
    p-required="boolean"
    (p-selected)="EventEmitter"
    p-show-required="boolean"
    p-size="string"
    p-spacing="PoTableColumnSpacing"
    p-text-wrap="boolean"
    p-virtual-scroll="boolean" >
</po-lookup>
`),t()(),i(275,"h4",12),e(276,"Propriedades"),t(),i(277,"table",13)(278,"tr",14)(279,"th",15),e(280,"Nome"),t(),i(281,"th",15),e(282,"Tipo"),t(),i(283,"th",15),e(284,"Padr\xE3o"),t(),i(285,"th",15),e(286,"Descri\xE7\xE3o"),t()(),i(287,"tr",16)(288,"td",17)(289,"div",18)(290,"span",19),e(291," (p-additional-help)"),n(292,"br"),t()()(),i(293,"td",20)(294,"code",21),e(295,"EventEmitter"),t()(),i(296,"td",22),e(297,"-"),t(),i(298,"td",23)(299,"em")(300,"strong"),e(301,"(opcional)"),t()(),i(302,"p"),e(303,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),i(304,"code"),e(305,"p-help"),t(),e(306,"."),t()()(),i(307,"tr",16)(308,"td",17)(309,"div",24)(310,"span",25),e(311," p-additional-help-tooltip"),n(312,"br"),t()()(),i(313,"td",20)(314,"code",26),e(315,"string"),t()(),i(316,"td",22),e(317,"-"),t(),i(318,"td",23)(319,"em")(320,"strong"),e(321,"(opcional)"),t()(),i(322,"p"),e(323,"Exibe um \xEDcone de ajuda adicional ao "),i(324,"code"),e(325,"p-help"),t(),e(326,`, com o texto desta propriedade no tooltip.
Se o evento `),i(327,"code"),e(328,"p-additional-help"),t(),e(329,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),i(330,"strong"),e(331,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),i(332,"blockquote")(333,"p"),e(334,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()()()(),i(335,"tr",16)(336,"td",17)(337,"div",24)(338,"span",25),e(339," p-advanced-filters"),n(340,"br"),t()()(),i(341,"td",20)(342,"code",27),e(343,"Array<PoLookupAdvancedFilter>"),t()(),i(344,"td",22),e(345,"-"),t(),i(346,"td",23)(347,"em")(348,"strong"),e(349,"(opcional)"),t()(),i(350,"p"),e(351,"Lista de objetos dos campos que ser\xE3o criados na busca avan\xE7ada."),t(),i(352,"blockquote")(353,"p"),e(354,"Caso n\xE3o seja passado um objeto ou ent\xE3o ele esteja em branco o link de busca avan\xE7ada ficar\xE1 escondido."),t()(),i(355,"p"),e(356,"Exemplo de URL com busca avan\xE7ada:"),t(),i(357,"pre")(358,"code"),e(359,`url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro
`),t()(),i(360,"p"),e(361,`Caso algum par\xE2metro seja uma lista, a concatena\xE7\xE3o \xE9 feita utilizando v\xEDrgula.
Exemplo:`),t(),i(362,"pre")(363,"code"),e(364,`url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan
`),t()()()(),i(365,"tr",16)(366,"td",17)(367,"div",24)(368,"span",25),e(369," p-append-in-body"),n(370,"br"),t()()(),i(371,"td",20)(372,"code",28),e(373,"boolean"),t()(),i(374,"td",22)(375,"p")(376,"code"),e(377,"false"),t()()(),i(378,"td",23)(379,"em")(380,"strong"),e(381,"(opcional)"),t()(),i(382,"p"),e(383,"Define que o tooltip ("),i(384,"code"),e(385,"p-additional-help-tooltip"),t(),e(386," e/ou "),i(387,"code"),e(388,"p-error-limit"),t(),e(389,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),t(),i(390,"blockquote")(391,"p"),e(392,"Quando utilizado com "),i(393,"code"),e(394,"p-additional-help-tooltip"),t(),e(395,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),t()()()(),i(396,"tr",16)(397,"td",17)(398,"div",24)(399,"span",25),e(400," p-auto-focus"),n(401,"br"),t()()(),i(402,"td",20)(403,"code",28),e(404,"boolean"),t()(),i(405,"td",22)(406,"p")(407,"code"),e(408,"false"),t()()(),i(409,"td",23)(410,"em")(411,"strong"),e(412,"(opcional)"),t()(),i(413,"p"),e(414,"Aplica foco no elemento ao ser iniciado."),t(),i(415,"blockquote")(416,"p"),e(417,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),i(418,"tr",16)(419,"td",17)(420,"div",24)(421,"span",25),e(422," p-auto-height"),n(423,"br"),t()()(),i(424,"td",20)(425,"code",28),e(426,"boolean"),t()(),i(427,"td",22)(428,"p")(429,"code"),e(430,"false"),t()()(),i(431,"td",23)(432,"em")(433,"strong"),e(434,"(opcional)"),t()(),i(435,"p"),e(436,`Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo
com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis.`),t()()(),i(437,"tr",16)(438,"td",17)(439,"div",18)(440,"span",19),e(441," (p-change)"),n(442,"br"),t()()(),i(443,"td",20)(444,"code",21),e(445,"EventEmitter"),t()(),i(446,"td",22),e(447,"-"),t(),i(448,"td",23)(449,"em")(450,"strong"),e(451,"(opcional)"),t()(),i(452,"p"),e(453,"Evento que ser\xE1 disparado ao alterar o model. Por par\xE2metro ser\xE1 passado o novo valor."),t()()(),i(454,"tr",16)(455,"td",17)(456,"div",18)(457,"span",19),e(458," (p-change-visible-columns)"),n(459,"br"),t()()(),i(460,"td",20)(461,"code",21),e(462,"EventEmitter"),t()(),i(463,"td",22),e(464,"-"),t(),i(465,"td",23)(466,"em")(467,"strong"),e(468,"(opcional)"),t()(),i(469,"p"),e(470,"Evento disparado ao fechar o popover do gerenciador de colunas ap\xF3s alterar as colunas vis\xEDveis."),t(),i(471,"p"),e(472,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),t()()(),i(473,"tr",16)(474,"td",17)(475,"div",24)(476,"span",25),e(477," p-clean"),n(478,"br"),t()()(),i(479,"td",20)(480,"code",28),e(481,"boolean"),t()(),i(482,"td",22),e(483,"-"),t(),i(484,"td",23)(485,"p"),e(486,"Exibe um \xEDcone que permite limpar o campo."),t()()(),i(487,"tr",16)(488,"td",17)(489,"div",18)(490,"span",19),e(491," (p-restore-column-manager)"),n(492,"br"),t()()(),i(493,"td",20)(494,"code",21),e(495,"EventEmitter"),t()(),i(496,"td",22),e(497,"-"),t(),i(498,"td",23)(499,"em")(500,"strong"),e(501,"(opcional)"),t()(),i(502,"p"),e(503,"Evento disparado ao clicar no bot\xE3o de restaurar padr\xE3o no gerenciador de colunas."),t(),i(504,"p"),e(505,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),t()()(),i(506,"tr",16)(507,"td",17)(508,"div",24)(509,"span",25),e(510," p-columns"),n(511,"br"),t()()(),i(512,"td",20)(513,"code",29),e(514,"Array<PoLookupColumn>"),t()(),i(515,"td",22),e(516,"-"),t(),i(517,"td",23)(518,"em")(519,"strong"),e(520,"(opcional)"),t()(),i(521,"p"),e(522,`Lista das colunas da tabela.
Essa propriedade deve receber um array de objetos que implementam a interface PoLookupColumn.`),t()()(),i(523,"tr",16)(524,"td",17)(525,"div",24)(526,"span",25),e(527," p-disabled"),n(528,"br"),t()()(),i(529,"td",20)(530,"code",28),e(531,"boolean"),t()(),i(532,"td",22)(533,"p"),e(534,"false"),t()(),i(535,"td",23)(536,"em")(537,"strong"),e(538,"(opcional)"),t()(),i(539,"p"),e(540,"Indica que o campo ser\xE1 desabilitado."),t()()(),i(541,"tr",16)(542,"td",17)(543,"div",24)(544,"span",25),e(545," p-error-limit"),n(546,"br"),t()()(),i(547,"td",20)(548,"code",28),e(549,"boolean"),t()(),i(550,"td",22)(551,"p")(552,"code"),e(553,"false"),t()()(),i(554,"td",23)(555,"em")(556,"strong"),e(557,"(opcional)"),t()(),i(558,"p"),e(559,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),i(560,"blockquote")(561,"p"),e(562,"Caso essa propriedade seja definida como "),i(563,"code"),e(564,"true"),t(),e(565,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),i(566,"tr",16)(567,"td",17)(568,"div",24)(569,"span",25),e(570," p-field-error-message"),n(571,"br"),t()()(),i(572,"td",20)(573,"code",26),e(574,"string"),t()(),i(575,"td",22),e(576,"-"),t(),i(577,"td",23)(578,"em")(579,"strong"),e(580,"(opcional)"),t()(),i(581,"p"),e(582,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),t(),i(583,"blockquote")(584,"p"),e(585,"Necess\xE1rio que a propriedade "),i(586,"code"),e(587,"p-required"),t(),e(588," esteja habilitada."),t()()()(),i(589,"tr",16)(590,"td",17)(591,"div",24)(592,"span",25),e(593," p-field-format"),n(594,"br"),t()()(),i(595,"td",20)(596,"code",30),e(597,"((value) => string) "),t(),i(598,"code",31),e(599," Array<string>"),t()(),i(600,"td",22),e(601,"-"),t(),i(602,"td",23)(603,"em")(604,"strong"),e(605,"(opcional)"),t()(),i(606,"p"),e(607,"Formato de exibi\xE7\xE3o do campo."),t(),i(608,"p"),e(609,"Recebe uma fun\xE7\xE3o que deve retornar uma "),i(610,"em"),e(611,"string"),t(),e(612," com o/os valores do objeto formatados para exibi\xE7\xE3o, por exemplo:"),t(),i(613,"pre")(614,"code"),e(615,"fieldFormat(obj) {\n  return `${obj.id} - ${obj.name}`;\n}\n"),t()(),i(616,"blockquote")(617,"p"),e(618,"Esta propriedade sobrep\xF5e o valor da propriedade "),i(619,"code"),e(620,"p-field-label"),t(),e(621," na descri\xE7\xE3o do campo."),t()(),i(622,"p"),e(623,"Pode-se informar uma lista de propriedades que deseja exibir como descri\xE7\xE3o do campo, Por exemplo:"),t(),i(624,"pre")(625,"code"),e(626,`<po-lookup
 ...
 [p-field-format]="['id','nickname']"
 ...
>

Objeto retornado:
  {
     id:123,
     name: 'Kakaroto',
     nickname: 'Goku',
  }
Apresenta\xE7\xE3o no campo: 123 - Goku
`),t()(),i(627,"blockquote")(628,"p"),e(629,"Ser\xE1 utilizado "),i(630,"code"),e(631,"-"),t(),e(632," como separador."),t()()()(),i(633,"tr",16)(634,"td",17)(635,"div",24)(636,"span",25),e(637," p-field-label"),n(638,"br"),t()()(),i(639,"td",20)(640,"code",26),e(641,"string"),t()(),i(642,"td",22),e(643,"-"),t(),i(644,"td",23)(645,"p"),e(646,"Indica a coluna que ser\xE1 utilizada como descri\xE7\xE3o do campo e como filtro dentro da janela."),t()()(),i(647,"tr",16)(648,"td",17)(649,"div",24)(650,"span",25),e(651," p-field-value"),n(652,"br"),t()()(),i(653,"td",20)(654,"code",26),e(655,"string"),t()(),i(656,"td",22),e(657,"-"),t(),i(658,"td",23)(659,"p"),e(660,"Indica a coluna que ser\xE1 utilizada como valor do campo."),t(),i(661,"blockquote")(662,"p"),e(663,"Aten\xE7\xE3o: Caso n\xE3o seja passada ou tenha o conte\xFAdo incorreto, n\xE3o ir\xE1 atualizar o model do formul\xE1rio."),t()()()(),i(664,"tr",16)(665,"td",17)(666,"div",24)(667,"span",25),e(668," p-filter-params"),n(669,"br"),t()()(),i(670,"td",20)(671,"code",32),e(672,"any"),t()(),i(673,"td",22),e(674,"-"),t(),i(675,"td",23)(676,"em")(677,"strong"),e(678,"(opcional)"),t()(),i(679,"p"),e(680,"Valor que ser\xE1 repassado como par\xE2metro para a URL ou aos m\xE9todos do servi\xE7o que implementam a interface "),i(681,"code"),e(682,"PoLookupFilter"),t(),e(683,"."),t()()(),i(684,"tr",16)(685,"td",17)(686,"div",24)(687,"span",25),e(688," p-filter-service"),n(689,"br"),t()()(),i(690,"td",20)(691,"code",26),e(692,"string "),t(),i(693,"code",33),e(694," PoLookupFilter"),t()(),i(695,"td",22),e(696,"-"),t(),i(697,"td",23)(698,"p"),e(699,`Servi\xE7o respons\xE1vel por buscar os dados da tabela na janela. Pode ser informado um servi\xE7o que implemente a interface
`),i(700,"code"),e(701,"PoLookupFilter"),t(),e(702," ou uma URL."),t(),i(703,"p"),e(704,"Quando utilizada uma URL de um servi\xE7o, ser\xE1 concatenada nesta URL o valor que deseja-se filtrar, por exemplo:"),t(),i(705,"pre")(706,"code"),e(707,`url + ?page=1&pageSize=20&filter=Peter
`),t()(),i(708,"p"),e(709,"Caso utilizar ordena\xE7\xE3o, a coluna ordenada ser\xE1 enviada atrav\xE9s do par\xE2metro "),i(710,"code"),e(711,"order"),t(),e(712,", por exemplo:"),t(),i(713,"ul")(714,"li")(715,"p"),e(716,"Coluna decrescente:"),t(),i(717,"pre")(718,"code"),e(719,`url + ?page=1&pageSize=20&filter=Peter&order=-name
`),t()()(),i(720,"li")(721,"p"),e(722,"Coluna ascendente:"),t(),i(723,"pre")(724,"code"),e(725,`url + ?page=1&pageSize=20&filter=Peter&order=name
`),t()()()(),i(726,"p"),e(727,"Se for definido a propriedade "),i(728,"code"),e(729,"p-filter-params"),t(),e(730,`, o mesmo tamb\xE9m ser\xE1 concatenado. Por exemplo, para o
par\xE2metro `),i(731,"code"),e(732,"{ age: 23 }"),t(),e(733," a URL ficaria:"),t(),i(734,"pre")(735,"code"),e(736,`url + ?page=1&pageSize=20&age=23&filter=Peter
`),t()(),i(737,"p"),e(738,"Ao iniciar o campo com valor, os registros ser\xE3o buscados da seguinte forma:"),t(),i(739,"pre")(740,"code"),e(741,`model = 1234;

GET url/1234
`),t()(),i(742,"p"),e(743,"Caso estiver com m\xFAltipla sele\xE7\xE3o habilitada:"),t(),i(744,"pre")(745,"code"),e(746,`model = [1234, 5678]

GET url?\${fieldValue}=1234,5678
`),t()(),i(747,"blockquote")(748,"p"),e(749,"Esta URL deve retornar e receber os dados no padr\xE3o de "),i(750,"a",7),e(751,"API do PO UI"),t(),e(752,` e utiliza os valores
definidos nas propriedades `),i(753,"code"),e(754,"p-field-label"),t(),e(755," e "),i(756,"code"),e(757,"p-field-value"),t(),e(758," para a constru\xE7\xE3o do "),i(759,"code"),e(760,"po-lookup"),t(),e(761,"."),t()(),i(762,"p"),e(763,"Caso o usu\xE1rio digite um valor e pressione a tecla "),i(764,"em"),e(765,"TAB"),t(),e(766,` para realizar a busca de um registro espec\xEDfico, o valor que se
deseja filtrar ser\xE1 codificado utilizando a fun\xE7\xE3o `),i(767,"a",34),e(768,"encodeURIComponent"),t(),e(769,`
e concatenado na URL da seguinte forma:`),t(),i(770,"pre")(771,"code"),e(772,`url/valor%20que%20se%20deseja%20filtrar
`),t()(),i(773,"blockquote")(774,"p"),e(775,"Quando informado um servi\xE7o que implemente a interface "),i(776,"code"),e(777,"PoLookupFilter"),t(),e(778," o tratamento de encoding do valor a ser filtrado ficar\xE1 a cargo do desenvolvedor."),t()()()(),i(779,"tr",16)(780,"td",17)(781,"div",24)(782,"span",25),e(783," p-help"),n(784,"br"),t()()(),i(785,"td",20)(786,"code",26),e(787,"string"),t()(),i(788,"td",22),e(789,"-"),t(),i(790,"td",23)(791,"em")(792,"strong"),e(793,"(opcional)"),t()(),i(794,"p"),e(795,"Texto de apoio do campo."),t()()(),i(796,"tr",16)(797,"td",17)(798,"div",24)(799,"span",25),e(800," p-hide-columns-manager"),n(801,"br"),t()()(),i(802,"td",20)(803,"code",28),e(804,"boolean"),t()(),i(805,"td",22)(806,"p")(807,"code"),e(808,"false"),t()()(),i(809,"td",23)(810,"em")(811,"strong"),e(812,"(opcional)"),t()(),i(813,"p"),e(814,"Permite que o gerenciador de colunas, respons\xE1vel pela defini\xE7\xE3o de quais colunas ser\xE3o exibidas, seja escondido."),t()()(),i(815,"tr",16)(816,"td",17)(817,"div",24)(818,"span",25),e(819," p-infinite-scroll"),n(820,"br"),t()()(),i(821,"td",20)(822,"code",28),e(823,"boolean"),t()(),i(824,"td",22)(825,"p")(826,"code"),e(827,"false"),t()()(),i(828,"td",23)(829,"em")(830,"strong"),e(831,"(opcional)"),t()(),i(832,"p"),e(833,"Ativa a funcionalidade de scroll infinito para a tabela exibida no retorno da consulta."),t()()(),i(834,"tr",16)(835,"td",17)(836,"div",18)(837,"span",19),e(838," (p-keydown)"),n(839,"br"),t()()(),i(840,"td",20)(841,"code",21),e(842,"EventEmitter"),t()(),i(843,"td",22),e(844,"-"),t(),i(845,"td",23)(846,"em")(847,"strong"),e(848,"(opcional)"),t()(),i(849,"p"),e(850,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),i(851,"code"),e(852,"KeyboardEvent"),t(),e(853," com informa\xE7\xF5es sobre a tecla."),t()()(),i(854,"tr",16)(855,"td",17)(856,"div",24)(857,"span",25),e(858," p-label"),n(859,"br"),t()()(),i(860,"td",20)(861,"code",26),e(862,"string"),t()(),i(863,"td",22),e(864,"-"),t(),i(865,"td",23)(866,"em")(867,"strong"),e(868,"(opcional)"),t()(),i(869,"p"),e(870,"Label do campo."),t(),i(871,"blockquote")(872,"p"),e(873,`Quando utilizar esta propriedade o seu valor ser\xE1 utilizado como t\xEDtulo da modal do componente caso n\xE3o tenha
sido definido um `),i(874,"code"),e(875,"modalTitle"),t(),e(876," na propriedade "),i(877,"code"),e(878,"p-literals"),t(),e(879,"."),t()()()(),i(880,"tr",16)(881,"td",17)(882,"div",24)(883,"span",25),e(884," p-literals"),n(885,"br"),t()()(),i(886,"td",20)(887,"code",35),e(888,"PoLookupLiterals"),t()(),i(889,"td",22),e(890,"-"),t(),i(891,"td",23)(892,"p"),e(893,"Objeto com as literais usadas no "),i(894,"code"),e(895,"po-lookup"),t(),e(896,"."),t(),i(897,"p"),e(898,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),t(),i(899,"pre")(900,"code"),e(901,`const customLiterals: PoLookupLiterals = {
  modalPrimaryActionLabel: 'Select',
  modalSecondaryActionLabel: 'Cancel',
  modalPlaceholder: 'Search Value',
  modalTableNoColumns: 'No columns',
  modalTableNoData: 'No data',
  modalTableLoadingData: 'Loading data',
  modalTableLoadMoreData: 'Load more',
  modalTitle: 'Select a user',
  modalAdvancedSearch: 'Advanced search',
  modalAdvancedSearchTitle: 'Advanced search',
  modalAdvancedSearchPrimaryActionLabel: 'Filter',
  modalAdvancedSearchSecondaryActionLabel: 'Return',
  modalDisclaimerGroupTitle: 'Presenting results filtered by:'
};
`),t()(),i(902,"p"),e(903,"Ou passando apenas as literais que deseja customizar:"),t(),i(904,"pre")(905,"code"),e(906,`const customLiterals: PoLookupLiterals = {
  modalPrimaryActionLabel: 'Select'
};
`),t()(),i(907,"p"),e(908,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),t(),i(909,"pre")(910,"code"),e(911,`<po-lookup
  [p-literals]="customLiterals">
</po-lookup>
`),t()(),i(912,"blockquote")(913,"p"),e(914,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),i(915,"a",36)(916,"code"),e(917,"PoI18nService"),t()(),e(918," ou do browser."),t()()()(),i(919,"tr",16)(920,"td",17)(921,"div",24)(922,"span",25),e(923," p-multiple"),n(924,"br"),t()()(),i(925,"td",20)(926,"code",28),e(927,"boolean"),t()(),i(928,"td",22)(929,"p")(930,"code"),e(931,"false"),t()()(),i(932,"td",23)(933,"em")(934,"strong"),e(935,"(opcional)"),t()(),i(936,"p"),e(937,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),t(),i(938,"blockquote")(939,"p"),e(940,"Quando habilitado o valor do campo passar\xE1 a ser uma lista de valores, por exemplo: "),i(941,"code"),e(942,"[ 12345, 67890 ]"),t()()()()(),i(943,"tr",16)(944,"td",17)(945,"div",24)(946,"span",25),e(947," name"),n(948,"br"),t()()(),i(949,"td",20)(950,"code",26),e(951,"string"),t()(),i(952,"td",22),e(953,"-"),t(),i(954,"td",23)(955,"p"),e(956,"Nome e Id do componente."),t()()(),i(957,"tr",16)(958,"td",17)(959,"div",24)(960,"span",25),e(961," p-no-autocomplete"),n(962,"br"),t()()(),i(963,"td",20)(964,"code",28),e(965,"boolean"),t()(),i(966,"td",22)(967,"p")(968,"code"),e(969,"false"),t()()(),i(970,"td",23)(971,"em")(972,"strong"),e(973,"(opcional)"),t()(),i(974,"p"),e(975,"Define a propriedade nativa "),i(976,"code"),e(977,"autocomplete"),t(),e(978," do campo como "),i(979,"code"),e(980,"off"),t(),e(981,"."),t()()(),i(982,"tr",16)(983,"td",17)(984,"div",18)(985,"span",19),e(986," (p-error)"),n(987,"br"),t()()(),i(988,"td",20)(989,"code",21),e(990,"EventEmitter"),t()(),i(991,"td",22),e(992,"-"),t(),i(993,"td",23)(994,"p"),e(995,`Evento ser\xE1 disparado quando ocorrer algum erro na requisi\xE7\xE3o de busca do item.
Ser\xE1 passado por par\xE2metro o objeto de erro retornado.`),t()()(),i(996,"tr",16)(997,"td",17)(998,"div",24)(999,"span",25),e(1e3," p-optional"),n(1001,"br"),t()()(),i(1002,"td",20)(1003,"code",28),e(1004,"boolean"),t()(),i(1005,"td",22)(1006,"p")(1007,"code"),e(1008,"false"),t()()(),i(1009,"td",23)(1010,"em")(1011,"strong"),e(1012,"(opcional)"),t()(),i(1013,"p"),e(1014,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),i(1015,"blockquote")(1016,"p"),e(1017,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),i(1018,"ul")(1019,"li"),e(1020,"O campo conter "),i(1021,"code"),e(1022,"p-required"),t(),e(1023,";"),t(),i(1024,"li"),e(1025,"N\xE3o possuir "),i(1026,"code"),e(1027,"p-help"),t(),e(1028," e/ou "),i(1029,"code"),e(1030,"p-label"),t(),e(1031,"."),t()()()(),i(1032,"tr",16)(1033,"td",17)(1034,"div",24)(1035,"span",25),e(1036," p-placeholder"),n(1037,"br"),t()()(),i(1038,"td",20)(1039,"code",26),e(1040,"string"),t()(),i(1041,"td",22),e(1042,"-"),t(),i(1043,"td",23)(1044,"p"),e(1045,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),t()()(),i(1046,"tr",16)(1047,"td",17)(1048,"div",24)(1049,"span",25),e(1050," p-required"),n(1051,"br"),t()()(),i(1052,"td",20)(1053,"code",28),e(1054,"boolean"),t()(),i(1055,"td",22)(1056,"p")(1057,"code"),e(1058,"false"),t()()(),i(1059,"td",23)(1060,"em")(1061,"strong"),e(1062,"(opcional)"),t()(),i(1063,"p"),e(1064,"Define que o campo ser\xE1 obrigat\xF3rio."),t(),i(1065,"blockquote")(1066,"p"),e(1067,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),i(1068,"code"),e(1069,"(p-disabled)"),t(),e(1070,"."),t()()()(),i(1071,"tr",16)(1072,"td",17)(1073,"div",18)(1074,"span",19),e(1075," (p-selected)"),n(1076,"br"),t()()(),i(1077,"td",20)(1078,"code",21),e(1079,"EventEmitter"),t()(),i(1080,"td",22),e(1081,"-"),t(),i(1082,"td",23)(1083,"em")(1084,"strong"),e(1085,"(opcional)"),t()(),i(1086,"p"),e(1087,`Evento ser\xE1 disparado quando ocorrer alguma sele\xE7\xE3o.
Ser\xE1 passado por par\xE2metro o objeto com o valor selecionado.`),t()()(),i(1088,"tr",16)(1089,"td",17)(1090,"div",24)(1091,"span",25),e(1092," p-show-required"),n(1093,"br"),t()()(),i(1094,"td",20)(1095,"code",28),e(1096,"boolean"),t()(),i(1097,"td",22),e(1098,"-"),t(),i(1099,"td",23)(1100,"p"),e(1101,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE9 exibida."),t(),i(1102,"blockquote")(1103,"p"),e(1104,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),i(1105,"ul")(1106,"li"),e(1107,"N\xE3o possuir "),i(1108,"code"),e(1109,"p-help"),t(),e(1110," e/ou "),i(1111,"code"),e(1112,"p-label"),t(),e(1113,"."),t()()()(),i(1114,"tr",16)(1115,"td",17)(1116,"div",24)(1117,"span",25),e(1118," p-size"),n(1119,"br"),t()()(),i(1120,"td",20)(1121,"code",26),e(1122,"string"),t()(),i(1123,"td",22)(1124,"p")(1125,"code"),e(1126,"medium"),t()()(),i(1127,"td",23)(1128,"em")(1129,"strong"),e(1130,"(opcional)"),t()(),i(1131,"p"),e(1132,"Define o tamanho do componente:"),t(),i(1133,"ul")(1134,"li")(1135,"code"),e(1136,"small"),t(),e(1137,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),i(1138,"li")(1139,"code"),e(1140,"medium"),t(),e(1141,": altura do input como 44px."),t()(),i(1142,"blockquote")(1143,"p"),e(1144,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(1145,"code"),e(1146,"medium"),t(),e(1147,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(1148,"a",37),e(1149,"po-theme"),t(),e(1150,"."),t()()()(),i(1151,"tr",16)(1152,"td",17)(1153,"div",24)(1154,"span",25),e(1155," p-spacing"),n(1156,"br"),t()()(),i(1157,"td",20)(1158,"code",38),e(1159,"PoTableColumnSpacing"),t()(),i(1160,"td",22)(1161,"p")(1162,"code"),e(1163,"medium"),t()()(),i(1164,"td",23)(1165,"em")(1166,"strong"),e(1167,"(opcional)"),t()(),i(1168,"p"),e(1169,"Respons\xE1vel por aplicar espa\xE7amento nas colunas da tabela contida no lookup."),t(),i(1170,"p"),e(1171,"Deve receber um dos valores do enum "),i(1172,"code"),e(1173,"PoTableColumnSpacing"),t(),e(1174,"."),t()()(),i(1175,"tr",16)(1176,"td",17)(1177,"div",24)(1178,"span",25),e(1179," p-text-wrap"),n(1180,"br"),t()()(),i(1181,"td",20)(1182,"code",28),e(1183,"boolean"),t()(),i(1184,"td",22)(1185,"p")(1186,"code"),e(1187,"false"),t()()(),i(1188,"td",23)(1189,"em")(1190,"strong"),e(1191,"(opcional)"),t()(),i(1192,"p"),e(1193,`Habilita ou desabilita a quebra autom\xE1tica de texto. Quando ativada, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t(),i(1194,"p"),e(1195,"Esta propriedade aplica-se ao texto contido nas c\xE9lulas da tabela."),t(),i(1196,"blockquote")(1197,"p"),e(1198,"Incompat\xEDvel com "),i(1199,"code"),e(1200,"virtual-scroll"),t(),e(1201,", que requer altura fixa nas linhas."),t()()()(),i(1202,"tr",16)(1203,"td",17)(1204,"div",24)(1205,"span",25),e(1206," p-virtual-scroll"),n(1207,"br"),t()()(),i(1208,"td",20)(1209,"code",28),e(1210,"boolean"),t()(),i(1211,"td",22)(1212,"p")(1213,"code"),e(1214,"true"),t()()(),i(1215,"td",23)(1216,"em")(1217,"strong"),e(1218,"(opcional)"),t()(),i(1219,"p"),e(1220,"Habilita o "),i(1221,"code"),e(1222,"virtual-scroll"),t(),e(1223,` na tabela para melhorar a performance com grandes volumes de dados.
A altura da tabela j\xE1 \xE9 pr\xE9-definida, portanto o `),i(1224,"code"),e(1225,"virtual-scroll"),t(),e(1226," ser\xE1 ativado automaticamente."),t(),i(1227,"blockquote")(1228,"p"),e(1229,"Incompat\xEDvel com "),i(1230,"code"),e(1231,"p-text-wrap"),t(),e(1232," e "),i(1233,"code"),e(1234,"master-detail"),t(),e(1235,", pois o "),i(1236,"code"),e(1237,"virtual-scroll"),t(),e(1238," exige altura fixa nas linhas."),t()()()()(),i(1239,"h3",12),e(1240,"M\xE9todos"),t(),i(1241,"table",39)(1242,"tr",16)(1243,"th",40)(1244,"div",24)(1245,"h4")(1246,"span",25),e(1247," focus "),t()()()()(),i(1248,"tr",23)(1249,"td",23)(1250,"p"),e(1251,"Fun\xE7\xE3o que atribui foco ao componente."),t(),i(1252,"p"),e(1253,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),i(1254,"pre")(1255,"code"),e(1256,`import { PoLookupComponent } from '@po-ui/ng-components';

...

@ViewChild(PoLookupComponent, { static: true }) lookup: PoLookupComponent;

focusLookup() {
  this.lookup.focus();
}
`),t()()()()(),n(1257,"br"),i(1258,"table",39)(1259,"tr",16)(1260,"th",40)(1261,"div",24)(1262,"h4")(1263,"span",25),e(1264," showAdditionalHelp "),t()()()()(),i(1265,"tr",23)(1266,"td",23)(1267,"p"),e(1268,"M\xE9todo que exibe "),i(1269,"code"),e(1270,"p-additionalHelpTooltip"),t(),e(1271," ou executa a a\xE7\xE3o definida em "),i(1272,"code"),e(1273,"p-additionalHelp"),t(),e(1274,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),i(1275,"code"),e(1276,"p-keydown"),t(),e(1277,"."),t(),i(1278,"pre")(1279,"code"),e(1280,`<po-lookup
 #lookup
 ...
 p-additional-help-tooltip="Mensagem de ajuda complementar"
 (p-keydown)="onKeyDown($event, lookup)"
></po-lookup>
`),t()(),i(1281,"pre")(1282,"code"),e(1283,`...
onKeyDown(event: KeyboardEvent, inp: PoLookupComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),n(1284,"br"),i(1285,"h3"),e(1286,"Interfaces"),t(),i(1287,"h4",41)(1288,"code",5),e(1289,"PoLookupAdvancedFilter"),t()(),i(1290,"div",2)(1291,"p"),e(1292," Interface para defini\xE7\xE3o das propriedades dos campos de entrada que ser\xE3o criados dinamicamente. "),t()(),i(1293,"h4",12),e(1294,"Propriedades"),t(),i(1295,"table",13)(1296,"tr",14)(1297,"th",15),e(1298,"Nome"),t(),i(1299,"th",15),e(1300,"Tipo"),t(),i(1301,"th",15),e(1302,"Descri\xE7\xE3o"),t()(),i(1303,"tr",16)(1304,"td",17)(1305,"div",24)(1306,"span",25),e(1307," additionalHelp"),n(1308,"br"),t()()(),i(1309,"td",20)(1310,"code",42),e(1311,"Function"),t()(),i(1312,"td",23)(1313,"em")(1314,"strong"),e(1315,"(opcional)"),t()(),i(1316,"p"),e(1317,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),i(1318,"code"),e(1319,"p-help"),t(),e(1320,"."),t()()(),i(1321,"tr",16)(1322,"td",17)(1323,"div",24)(1324,"span",25),e(1325," additionalHelpTooltip"),n(1326,"br"),t()()(),i(1327,"td",20)(1328,"code",26),e(1329,"string"),t()(),i(1330,"td",23)(1331,"em")(1332,"strong"),e(1333,"(opcional)"),t()(),i(1334,"p"),e(1335,"Exibe um \xEDcone de ajuda adicional ao "),i(1336,"code"),e(1337,"p-help"),t(),e(1338,`, com o texto desta propriedade no tooltip.
Se o evento `),i(1339,"code"),e(1340,"p-additional-help"),t(),e(1341,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),i(1342,"strong"),e(1343,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()()()(),i(1344,"tr",16)(1345,"td",17)(1346,"div",24)(1347,"span",25),e(1348," advancedFilters"),n(1349,"br"),t()()(),i(1350,"td",20)(1351,"code",27),e(1352,"Array<PoLookupAdvancedFilter>"),t()(),i(1353,"td",23)(1354,"em")(1355,"strong"),e(1356,"(opcional)"),t()(),i(1357,"p"),e(1358,"Lista de objetos dos campos que ser\xE3o criados na busca avan\xE7ada."),t(),i(1359,"blockquote")(1360,"p"),e(1361,"Caso n\xE3o seja passado um objeto ou ent\xE3o ele esteja em branco o link de busca avan\xE7ada ficar\xE1 escondido."),t()(),i(1362,"p"),e(1363,"Exemplo de URL com busca avan\xE7ada:"),t(),i(1364,"p")(1365,"code"),e(1366,"url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro"),t()(),i(1367,"p"),e(1368,"Caso algum par\xE2metro seja uma lista, a concatena\xE7\xE3o \xE9 feita utilizando v\xEDrgula. Exemplo:"),t(),i(1369,"p")(1370,"code"),e(1371,"url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan"),t()()()(),i(1372,"tr",16)(1373,"td",17)(1374,"div",24)(1375,"span",25),e(1376," appendBox"),n(1377,"br"),t()()(),i(1378,"td",20)(1379,"code",28),e(1380,"boolean"),t()(),i(1381,"td",23)(1382,"em")(1383,"strong"),e(1384,"(opcional)"),t()(),i(1385,"p"),e(1386,"Define que o "),i(1387,"code"),e(1388,"listbox"),t(),e(1389," e/ou tooltip ("),i(1390,"code"),e(1391,"p-additional-help-tooltip"),t(),e(1392," e/ou "),i(1393,"code"),e(1394,"p-error-limit"),t(),e(1395,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o \xE9 necess\xE1ria para cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),t(),i(1396,"blockquote")(1397,"p"),e(1398,`O uso dessa propriedade pode acarretar na perda sequencial da tabula\xE7\xE3o da p\xE1gina.
Quando utilizado com `),i(1399,"code"),e(1400,"p-additional-help-tooltip"),t(),e(1401,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),t()()()(),i(1402,"tr",16)(1403,"td",17)(1404,"div",24)(1405,"span",25),e(1406," autoHeight"),n(1407,"br"),t()()(),i(1408,"td",20)(1409,"code",28),e(1410,"boolean"),t()(),i(1411,"td",23)(1412,"em")(1413,"strong"),e(1414,"(opcional)"),t()(),i(1415,"p"),e(1416,"Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis."),t(),i(1417,"p")(1418,"strong"),e(1419,"Componentes compat\xEDveis:"),t(),i(1420,"code"),e(1421,"po-multiselect"),t(),e(1422,", "),i(1423,"code"),e(1424,"po-lookup"),t(),e(1425,"."),t()()(),i(1426,"tr",16)(1427,"td",17)(1428,"div",24)(1429,"span",25),e(1430," autoUpload"),n(1431,"br"),t()()(),i(1432,"td",20)(1433,"code",28),e(1434,"boolean"),t()(),i(1435,"td",23)(1436,"em")(1437,"strong"),e(1438,"(opcional)"),t()(),i(1439,"p"),e(1440,"Define se o envio do arquivo ser\xE1 autom\xE1tico ao selecionar o mesmo."),t(),i(1441,"p")(1442,"strong"),e(1443,"Componente compat\xEDvel"),t(),e(1444,": "),i(1445,"code"),e(1446,"po-upload"),t()()()(),i(1447,"tr",16)(1448,"td",17)(1449,"div",24)(1450,"span",25),e(1451," booleanFalse"),n(1452,"br"),t()()(),i(1453,"td",20)(1454,"code",26),e(1455,"string"),t()(),i(1456,"td",23)(1457,"em")(1458,"strong"),e(1459,"(opcional)"),t()(),i(1460,"p"),e(1461,"Texto exibido quando o valor do componente for "),i(1462,"em"),e(1463,"false"),t(),e(1464,"."),t()()(),i(1465,"tr",16)(1466,"td",17)(1467,"div",24)(1468,"span",25),e(1469," booleanTrue"),n(1470,"br"),t()()(),i(1471,"td",20)(1472,"code",26),e(1473,"string"),t()(),i(1474,"td",23)(1475,"em")(1476,"strong"),e(1477,"(opcional)"),t()(),i(1478,"p"),e(1479,"Texto exibido quando o valor do componente for "),i(1480,"em"),e(1481,"true"),t(),e(1482,"."),t()()(),i(1483,"tr",16)(1484,"td",17)(1485,"div",24)(1486,"span",25),e(1487," changeOnEnter"),n(1488,"br"),t()()(),i(1489,"td",20)(1490,"code",28),e(1491,"boolean"),t()(),i(1492,"td",23)(1493,"em")(1494,"strong"),e(1495,"(opcional)"),t()(),i(1496,"p"),e(1497,"Indica que o evento "),i(1498,"code"),e(1499,"p-change"),t(),e(1500,' s\xF3 ser\xE1 disparado ao clicar ou pressionar a tecla "Enter" sobre uma op\xE7\xE3o selecionada no '),i(1501,"code"),e(1502,"po-combo"),t(),e(1503,"."),t()()(),i(1504,"tr",16)(1505,"td",17)(1506,"div",24)(1507,"span",25),e(1508," changeVisibleColumns"),n(1509,"br"),t()()(),i(1510,"td",20)(1511,"code",42),e(1512,"Function"),t()(),i(1513,"td",23)(1514,"em")(1515,"strong"),e(1516,"(opcional)"),t()(),i(1517,"p"),e(1518,"Evento disparado ao fechar o popover do gerenciador de colunas ap\xF3s alterar as colunas vis\xEDveis."),t(),i(1519,"p"),e(1520,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),t(),i(1521,"p")(1522,"strong"),e(1523,"Componentes compat\xEDveis"),t(),e(1524,": "),i(1525,"code"),e(1526,"po-lookup"),t()()()(),i(1527,"tr",16)(1528,"td",17)(1529,"div",24)(1530,"span",25),e(1531," clean"),n(1532,"br"),t()()(),i(1533,"td",20)(1534,"code",28),e(1535,"boolean"),t()(),i(1536,"td",23)(1537,"em")(1538,"strong"),e(1539,"(opcional)"),t()(),i(1540,"p"),e(1541,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),t(),i(1542,"p")(1543,"strong"),e(1544,"Componentes compat\xEDveis:"),t(),i(1545,"code"),e(1546,"po-datepicker"),t(),e(1547,", "),i(1548,"code"),e(1549,"po-datepicker-range"),t(),e(1550,", "),i(1551,"code"),e(1552,"po-input"),t(),e(1553,", "),i(1554,"code"),e(1555,"po-number"),t(),e(1556,", "),i(1557,"code"),e(1558,"po-decimal"),t(),e(1559,", "),i(1560,"code"),e(1561,"po-combo"),t(),e(1562,", "),i(1563,"code"),e(1564,"po-lookup"),t(),e(1565,", "),i(1566,"code"),e(1567,"po-password"),t()()()(),i(1568,"tr",16)(1569,"td",17)(1570,"div",24)(1571,"span",25),e(1572," columnRestoreManager"),n(1573,"br"),t()()(),i(1574,"td",20)(1575,"code",42),e(1576,"Function"),t()(),i(1577,"td",23)(1578,"em")(1579,"strong"),e(1580,"(opcional)"),t()(),i(1581,"p"),e(1582,"Evento disparado ao clicar no bot\xE3o de restaurar padr\xE3o no gerenciador de colunas."),t(),i(1583,"p"),e(1584,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),t(),i(1585,"p")(1586,"strong"),e(1587,"Componentes compat\xEDveis"),t(),e(1588,": "),i(1589,"code"),e(1590,"po-lookup"),t()()()(),i(1591,"tr",16)(1592,"td",17)(1593,"div",24)(1594,"span",25),e(1595," columns"),n(1596,"br"),t()()(),i(1597,"td",20)(1598,"code",29),e(1599,"Array<PoLookupColumn> "),t(),i(1600,"code",43),e(1601," number"),t()(),i(1602,"td",23)(1603,"em")(1604,"strong"),e(1605,"(opcional)"),t()(),i(1606,"p"),e(1607,"Define as colunas para utiliza\xE7\xE3o da busca avan\xE7ada. Usada somente em conjunto com a propriedade "),i(1608,"code"),e(1609,"searchService"),t(),e(1610,`,
essa propriedade deve receber um array de objetos que implementam a interface `),i(1611,"a",44)(1612,"code"),e(1613,"PoLookupColumn"),t()(),e(1614,"."),t(),i(1615,"blockquote")(1616,"p"),e(1617,"Caso sejam informadas colunas, deve-se obrigatoriamente conter colunas definidas como "),i(1618,"em"),e(1619,"label"),t(),e(1620," e "),i(1621,"em"),e(1622,"value"),t(),e(1623,` para valores
de tela e do model respectivamente.`),t()(),i(1624,"p")(1625,"strong"),e(1626,"Componentes compat\xEDveis:"),t(),i(1627,"code"),e(1628,"po-radio-group"),t(),e(1629,", "),i(1630,"code"),e(1631,"po-lookup"),t(),e(1632,", "),i(1633,"code"),e(1634,"po-checkbox-group"),t(),e(1635,"."),t()()(),i(1636,"tr",16)(1637,"td",17)(1638,"div",24)(1639,"span",25),e(1640," container"),n(1641,"br"),t()()(),i(1642,"td",20)(1643,"code",26),e(1644,"string"),t()(),i(1645,"td",23)(1646,"em")(1647,"strong"),e(1648,"(opcional)"),t()(),i(1649,"p"),e(1650,`Exibir\xE1 um container para todos os campos abaixo dessa propriedade.
Esta propriedade configura o layout dos componentes dynamic-view e dynamic-edit, deixando todos os items dentro de containers`),t(),i(1651,"p"),e(1652,"Est\xE1 propriedade \xE9 do tipo string, o valor que ser\xE1 titulo do contianer"),t()()(),i(1653,"tr",16)(1654,"td",17)(1655,"div",24)(1656,"span",25),e(1657," customAction"),n(1658,"br"),t()()(),i(1659,"td",20)(1660,"code",45),e(1661,"PoProgressAction"),t()(),i(1662,"td",23)(1663,"em")(1664,"strong"),e(1665,"(opcional)"),t()(),i(1666,"p"),e(1667,"Define uma a\xE7\xE3o personalizada no componente "),i(1668,"code"),e(1669,"po-upload"),t(),e(1670,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),t(),i(1671,"p")(1672,"strong"),e(1673,"Componente compat\xEDvel"),t(),e(1674,": "),i(1675,"code"),e(1676,"po-upload"),t(),e(1677,","),t(),i(1678,"p")(1679,"strong"),e(1680,"Exemplo de configura\xE7\xE3o"),t(),e(1681,":"),t(),i(1682,"pre")(1683,"code",46),e(1684,`customAction: {
  label: 'Baixar',
  icon: 'an-download',
  type: 'default',
  visible: true,
  disabled: false
};
`),t()()()(),i(1685,"tr",16)(1686,"td",17)(1687,"div",24)(1688,"span",25),e(1689," customActionClick"),n(1690,"br"),t()()(),i(1691,"td",20)(1692,"code",47),e(1693,"(file: PoUploadFile) => void"),t()(),i(1694,"td",23)(1695,"em")(1696,"strong"),e(1697,"(opcional)"),t()(),i(1698,"p"),e(1699,"Evento emitido ao clicar na a\xE7\xE3o personalizada configurada no "),i(1700,"code"),e(1701,"p-custom-action"),t(),e(1702,"."),t(),i(1703,"p")(1704,"strong"),e(1705,"Componente compat\xEDvel"),t(),e(1706,": "),i(1707,"code"),e(1708,"po-upload"),t(),e(1709,","),t(),i(1710,"p"),e(1711,`Este evento \xE9 emitido quando o bot\xE3o de a\xE7\xE3o personalizada \xE9 clicado na barra de progresso associada a um arquivo.
O arquivo relacionado \xE0 barra de progresso ser\xE1 passado como par\xE2metro do evento, permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),t(),i(1712,"p")(1713,"strong"),e(1714,"Par\xE2metro do evento"),t(),e(1715,":"),t(),i(1716,"ul")(1717,"li")(1718,"code"),e(1719,"file"),t(),e(1720,": O arquivo associado ao bot\xE3o de a\xE7\xE3o. Este objeto \xE9 da classe "),i(1721,"code"),e(1722,"PoUploadFile"),t(),e(1723," e cont\xE9m informa\xE7\xF5es sobre o arquivo, como nome, status e progresso."),t()(),i(1724,"p")(1725,"strong"),e(1726,"Exemplo de uso"),t(),e(1727,":"),t(),i(1728,"pre")(1729,"code",46),e(1730,`customActionClick: (file: PoUploadFile) => {
  console.log('A\xE7\xE3o personalizada clicada para o arquivo:', file.name);
  // L\xF3gica de download ou outra a\xE7\xE3o relacionada ao arquivo
}
`),t()()()(),i(1731,"tr",16)(1732,"td",17)(1733,"div",24)(1734,"span",25),e(1735," debounceTime"),n(1736,"br"),t()()(),i(1737,"td",20)(1738,"code",43),e(1739,"number"),t()(),i(1740,"td",23)(1741,"em")(1742,"strong"),e(1743,"(opcional)"),t()(),i(1744,"p"),e(1745,"Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro ap\xF3s cada pressionamento de tecla. Ser\xE1 utilizada apenas quando houver servi\xE7o ("),i(1746,"code"),e(1747,"p-filter-service"),t(),e(1748,")."),t(),i(1749,"p")(1750,"strong"),e(1751,"Componentes compat\xEDveis:"),t(),i(1752,"code"),e(1753,"po-combo"),t(),e(1754,", "),i(1755,"code"),e(1756,"po-multiselect"),t(),e(1757,"."),t()()(),i(1758,"tr",16)(1759,"td",17)(1760,"div",24)(1761,"span",25),e(1762," decimalsLength"),n(1763,"br"),t()()(),i(1764,"td",20)(1765,"code",43),e(1766,"number"),t()(),i(1767,"td",23)(1768,"em")(1769,"strong"),e(1770,"(opcional)"),t()(),i(1771,"p"),e(1772,"Quantidade m\xE1xima de casas decimais."),t(),i(1773,"blockquote")(1774,"p"),e(1775,"Esta propriedade s\xF3 pode ser utilizada quando o "),i(1776,"code"),e(1777,"type"),t(),e(1778," for "),i(1779,"em"),e(1780,"currency"),t(),e(1781," ou "),i(1782,"em"),e(1783,"decimal"),t(),e(1784,"."),t()()()(),i(1785,"tr",16)(1786,"td",17)(1787,"div",24)(1788,"span",25),e(1789," directory"),n(1790,"br"),t()()(),i(1791,"td",20)(1792,"code",28),e(1793,"boolean"),t()(),i(1794,"td",23)(1795,"em")(1796,"strong"),e(1797,"(opcional)"),t()(),i(1798,"p"),e(1799,"Permite a sele\xE7\xE3o de diret\xF3rios contendo um ou mais arquivos para envio."),t(),i(1800,"blockquote")(1801,"p"),e(1802,"A habilita\xE7\xE3o desta propriedade se restringe apenas \xE0 sele\xE7\xE3o de diret\xF3rios."),t()(),i(1803,"blockquote")(1804,"p"),e(1805,"Defini\xE7\xE3o n\xE3o suportada pelo browser "),i(1806,"strong"),e(1807,"Internet Explorer"),t(),e(1808,", todavia ser\xE1 poss\xEDvel a sele\xE7\xE3o de arquivos padr\xE3o."),t()(),i(1809,"p")(1810,"strong"),e(1811,"Componente compat\xEDvel"),t(),e(1812,": "),i(1813,"code"),e(1814,"po-upload"),t()()()(),i(1815,"tr",16)(1816,"td",17)(1817,"div",24)(1818,"span",25),e(1819," disabled"),n(1820,"br"),t()()(),i(1821,"td",20)(1822,"code",28),e(1823,"boolean"),t()(),i(1824,"td",23)(1825,"em")(1826,"strong"),e(1827,"(opcional)"),t()(),i(1828,"p"),e(1829,"Desabilita o campo caso informar o valor "),i(1830,"em"),e(1831,"true"),t(),e(1832,"."),t()()(),i(1833,"tr",16)(1834,"td",17)(1835,"div",24)(1836,"span",25),e(1837," disabledInitFilter"),n(1838,"br"),t()()(),i(1839,"td",20)(1840,"code",28),e(1841,"boolean"),t()(),i(1842,"td",23)(1843,"em")(1844,"strong"),e(1845,"(opcional)"),t()(),i(1846,"p"),e(1847,"Desabilita o filtro inicial no servi\xE7o do "),i(1848,"code"),e(1849,"po-combo"),t(),e(1850,", que \xE9 executado no primeiro clique no campo."),t()()(),i(1851,"tr",16)(1852,"td",17)(1853,"div",24)(1854,"span",25),e(1855," disabledTabFilter"),n(1856,"br"),t()()(),i(1857,"td",20)(1858,"code",28),e(1859,"boolean"),t()(),i(1860,"td",23)(1861,"em")(1862,"strong"),e(1863,"(opcional)"),t()(),i(1864,"p"),e(1865,"Se verdadeiro, desabilitar\xE1 a busca de um item via TAB no "),i(1866,"code"),e(1867,"po-combo"),t(),e(1868,"."),t()()(),i(1869,"tr",16)(1870,"td",17)(1871,"div",24)(1872,"span",25),e(1873," divider"),n(1874,"br"),t()()(),i(1875,"td",20)(1876,"code",26),e(1877,"string"),t()(),i(1878,"td",23)(1879,"em")(1880,"strong"),e(1881,"(opcional)"),t()(),i(1882,"p"),e(1883,"Exibir\xE1 um divisor acima, utilizando o seu conteudo como t\xEDtulo."),t()()(),i(1884,"tr",16)(1885,"td",17)(1886,"div",24)(1887,"span",25),e(1888," dragDrop"),n(1889,"br"),t()()(),i(1890,"td",20)(1891,"code",28),e(1892,"boolean"),t()(),i(1893,"td",23)(1894,"em")(1895,"strong"),e(1896,"(opcional)"),t()(),i(1897,"p"),e(1898,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),t(),i(1899,"blockquote")(1900,"p"),e(1901,"Recomendamos utilizar apenas um "),i(1902,"code"),e(1903,"po-upload"),t(),e(1904," com esta funcionalidade por tela."),t()(),i(1905,"p")(1906,"strong"),e(1907,"Componente compat\xEDvel"),t(),e(1908,": "),i(1909,"code"),e(1910,"po-upload"),t()()()(),i(1911,"tr",16)(1912,"td",17)(1913,"div",24)(1914,"span",25),e(1915," dragDropHeight"),n(1916,"br"),t()()(),i(1917,"td",20)(1918,"code",43),e(1919,"number"),t()(),i(1920,"td",23)(1921,"em")(1922,"strong"),e(1923,"(opcional)"),t()(),i(1924,"p"),e(1925,"Define em "),i(1926,"em"),e(1927,"pixels"),t(),e(1928," a altura da \xE1rea onde podem ser arrastados os arquivos. A altura m\xEDnima aceita \xE9 "),i(1929,"code"),e(1930,"160px"),t(),e(1931,"."),t(),i(1932,"blockquote")(1933,"p"),e(1934,"Esta propriedade funciona somente se a propriedade "),i(1935,"code"),e(1936,"p-drag-drop"),t(),e(1937," estiver habilitada."),t()(),i(1938,"p")(1939,"strong"),e(1940,"Componente compat\xEDvel"),t(),e(1941,": "),i(1942,"code"),e(1943,"po-upload"),t()()()(),i(1944,"tr",16)(1945,"td",17)(1946,"div",24)(1947,"span",25),e(1948," errorAsyncFunction"),n(1949,"br"),t()()(),i(1950,"td",20)(1951,"code",48),e(1952,"(value) => Observable<boolean>"),t()(),i(1953,"td",23)(1954,"em")(1955,"strong"),e(1956,"(opcional)"),t()(),i(1957,"p"),e(1958,`Fun\xE7\xE3o executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),i(1959,"code"),e(1960,"change"),t(),e(1961," ou "),i(1962,"code"),e(1963,"change-model"),t(),e(1964,", dependendo do valor da propriedade "),i(1965,"code"),e(1966,"triggerMode"),t(),e(1967,"."),t(),i(1968,"blockquote")(1969,"p"),e(1970,"Retorna "),i(1971,"code"),e(1972,"Observable com o valor true"),t(),e(1973," para sinalizar o erro "),i(1974,"code"),e(1975,"false"),t(),e(1976," para indicar que n\xE3o h\xE1 erro."),t()(),i(1977,"p")(1978,"strong"),e(1979,"Componente compat\xEDvel"),t(),e(1980,": "),i(1981,"code"),e(1982,"po-datepicker"),t()()()(),i(1983,"tr",16)(1984,"td",17)(1985,"div",24)(1986,"span",25),e(1987," errorAsyncProperties"),n(1988,"br"),t()()(),i(1989,"td",20)(1990,"code",49),e(1991,"ErrorAsyncProperties"),t()(),i(1992,"td",23)(1993,"em")(1994,"strong"),e(1995,"(opcional)"),t()(),i(1996,"p"),e(1997,"Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente."),t(),i(1998,"p")(1999,"strong"),e(2e3,"Componentes compat\xEDveis:"),t(),i(2001,"code"),e(2002,"po-input"),t(),e(2003,", "),i(2004,"code"),e(2005,"po-number"),t(),e(2006,", "),i(2007,"code"),e(2008,"po-decimal"),t(),e(2009,", "),i(2010,"code"),e(2011,"po-password"),t(),e(2012,"."),t()()(),i(2013,"tr",16)(2014,"td",17)(2015,"div",24)(2016,"span",25),e(2017," errorLimit"),n(2018,"br"),t()()(),i(2019,"td",20)(2020,"code",28),e(2021,"boolean"),t()(),i(2022,"td",23)(2023,"em")(2024,"strong"),e(2025,"(opcional)"),t()(),i(2026,"p"),e(2027,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),i(2028,"blockquote")(2029,"p"),e(2030,"Caso essa propriedade seja definida como "),i(2031,"code"),e(2032,"true"),t(),e(2033,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()(),i(2034,"p")(2035,"strong"),e(2036,"Componentes compat\xEDveis:"),t(),i(2037,"code"),e(2038,"po-datepicker"),t(),e(2039,", "),i(2040,"code"),e(2041,"po-input"),t(),e(2042,", "),i(2043,"code"),e(2044,"po-number"),t(),e(2045,", "),i(2046,"code"),e(2047,"po-decimal"),t(),e(2048,", "),i(2049,"code"),e(2050,"po-password"),t(),e(2051,", "),i(2052,"code"),e(2053,"po-datepicker-range"),t(),e(2054,", "),i(2055,"code"),e(2056,"po-select"),t(),e(2057,", "),i(2058,"code"),e(2059,"po-checkbox-group"),t(),e(2060,", "),i(2061,"code"),e(2062,"po-radio-group"),t(),e(2063,", "),i(2064,"code"),e(2065,"po-multiselect"),t(),e(2066,", "),i(2067,"code"),e(2068,"po-combo"),t(),e(2069,", "),i(2070,"code"),e(2071,"po-lookup"),t(),e(2072,", "),i(2073,"code"),e(2074,"po-textarea"),t(),e(2075,"."),t()()(),i(2076,"tr",16)(2077,"td",17)(2078,"div",24)(2079,"span",25),e(2080," errorMessage"),n(2081,"br"),t()()(),i(2082,"td",20)(2083,"code",26),e(2084,"string"),t()(),i(2085,"td",23)(2086,"em")(2087,"strong"),e(2088,"(opcional)"),t()(),i(2089,"p"),e(2090,"Mensagem que ser\xE1 apresentada quando o campo ficar inv\xE1lido."),t(),i(2091,"p"),e(2092,"O campo fica inv\xE1lido quando as seguintes propriedades n\xE3o forem respeitadas:"),t(),i(2093,"ul")(2094,"li"),e(2095,"pattern;"),t(),i(2096,"li"),e(2097,"minValue;"),t(),i(2098,"li"),e(2099,"maxValue;"),t(),i(2100,"li"),e(2101,"required;"),t()(),i(2102,"blockquote")(2103,"p"),e(2104,`Esta mensagem pode ser exibida quando o campo estiver vazio, caso seja requerido. Em casos de componentes como
`),i(2105,"code"),e(2106,"po-datepicker"),t(),e(2107,", "),i(2108,"code"),e(2109,"po-input"),t(),e(2110,", "),i(2111,"code"),e(2112,"po-number"),t(),e(2113,", "),i(2114,"code"),e(2115,"po-decimal"),t(),e(2116,", "),i(2117,"code"),e(2118,"po-password"),t(),e(2119,`, \xE9 necess\xE1rio que a propriedade
`),i(2120,"code"),e(2121,"requiredFieldErrorMessage"),t(),e(2122," esteja como "),i(2123,"code"),e(2124,"true"),t(),e(2125,` para que a mensagem seja exibida com o campo vazio. Componentes
como `),i(2126,"code"),e(2127,"po-datepicker-range"),t(),e(2128,", "),i(2129,"code"),e(2130,"po-select"),t(),e(2131,", "),i(2132,"code"),e(2133,"po-checkbox-group"),t(),e(2134,", "),i(2135,"code"),e(2136,"po-radio-group"),t(),e(2137,", "),i(2138,"code"),e(2139,"po-multiselect"),t(),e(2140,", "),i(2141,"code"),e(2142,"po-combo"),t(),e(2143,`,
`),i(2144,"code"),e(2145,"po-lookup"),t(),e(2146," e "),i(2147,"code"),e(2148,"po-textarea"),t(),e(2149," n\xE3o \xE9 necess\xE1rio passar a propriedade "),i(2150,"code"),e(2151,"requiredFieldErrorMessage"),t(),e(2152,"."),t()(),i(2153,"p")(2154,"strong"),e(2155,"Componentes compat\xEDveis:"),t(),i(2156,"code"),e(2157,"po-datepicker"),t(),e(2158,", "),i(2159,"code"),e(2160,"po-input"),t(),e(2161,", "),i(2162,"code"),e(2163,"po-number"),t(),e(2164,", "),i(2165,"code"),e(2166,"po-decimal"),t(),e(2167,", "),i(2168,"code"),e(2169,"po-password"),t(),e(2170,", "),i(2171,"code"),e(2172,"po-datepicker-range"),t(),e(2173,", "),i(2174,"code"),e(2175,"po-select"),t(),e(2176,", "),i(2177,"code"),e(2178,"po-checkbox-group"),t(),e(2179,", "),i(2180,"code"),e(2181,"po-radio-group"),t(),e(2182,", "),i(2183,"code"),e(2184,"po-multiselect"),t(),e(2185,", "),i(2186,"code"),e(2187,"po-combo"),t(),e(2188,", "),i(2189,"code"),e(2190,"po-lookup"),t(),e(2191,", "),i(2192,"code"),e(2193,"po-textarea"),t(),e(2194,"."),t()()(),i(2195,"tr",16)(2196,"td",17)(2197,"div",24)(2198,"span",25),e(2199," fieldLabel"),n(2200,"br"),t()()(),i(2201,"td",20)(2202,"code",26),e(2203,"string"),t()(),i(2204,"td",23)(2205,"em")(2206,"strong"),e(2207,"(opcional)"),t()(),i(2208,"p"),e(2209,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como descri\xE7\xE3o do campo."),t(),i(2210,"p"),e(2211,"O valor padr\xE3o \xE9: "),i(2212,"code"),e(2213,"label"),t(),e(2214,"."),t(),i(2215,"blockquote")(2216,"p"),e(2217,"Esta propriedade pode ser utilizada em conjunto com: "),i(2218,"code"),e(2219,"options"),t(),e(2220,", "),i(2221,"code"),e(2222,"optionsService"),t(),e(2223," e "),i(2224,"code"),e(2225,"searchService"),t(),e(2226,"."),t()()()(),i(2227,"tr",16)(2228,"td",17)(2229,"div",24)(2230,"span",25),e(2231," fieldValue"),n(2232,"br"),t()()(),i(2233,"td",20)(2234,"code",26),e(2235,"string"),t()(),i(2236,"td",23)(2237,"em")(2238,"strong"),e(2239,"(opcional)"),t()(),i(2240,"p"),e(2241,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como valor do campo."),t(),i(2242,"p"),e(2243,"O valor padr\xE3o \xE9: "),i(2244,"code"),e(2245,"value"),t(),e(2246,"."),t(),i(2247,"blockquote")(2248,"p"),e(2249,"Esta propriedade pode ser utilizada em conjunto com: "),i(2250,"code"),e(2251,"options"),t(),e(2252,", "),i(2253,"code"),e(2254,"optionsService"),t(),e(2255," e "),i(2256,"code"),e(2257,"searchService"),t(),e(2258,"."),t()()()(),i(2259,"tr",16)(2260,"td",17)(2261,"div",24)(2262,"span",25),e(2263," filterMinlength"),n(2264,"br"),t()()(),i(2265,"td",20)(2266,"code",43),e(2267,"number"),t()(),i(2268,"td",23)(2269,"em")(2270,"strong"),e(2271,"(opcional)"),t()(),i(2272,"p"),e(2273,"Valor m\xEDnimo de caracteres para realizar o filtro no servi\xE7o do "),i(2274,"code"),e(2275,"po-combo"),t(),e(2276,"."),t()()(),i(2277,"tr",16)(2278,"td",17)(2279,"div",24)(2280,"span",25),e(2281," filterMode"),n(2282,"br"),t()()(),i(2283,"td",20)(2284,"code",50),e(2285,"PoMultiselectFilterMode"),t()(),i(2286,"td",23)(2287,"em")(2288,"strong"),e(2289,"(opcional)"),t()(),i(2290,"p"),e(2291,"Define o modo de pesquisa utilizado no filtro da lista de sele\xE7\xE3o: "),i(2292,"code"),e(2293,"startsWith"),t(),e(2294,", "),i(2295,"code"),e(2296,"contains"),t(),e(2297," ou "),i(2298,"code"),e(2299,"endsWith"),t(),e(2300,"."),t(),i(2301,"blockquote")(2302,"p"),e(2303,"Quando utilizar a propriedade p-filter-service esta propriedade ser\xE1 ignorada."),t()(),i(2304,"p")(2305,"strong"),e(2306,"Componentes compat\xEDveis:"),t(),i(2307,"code"),e(2308,"po-multiselect"),t(),e(2309,"."),t()()(),i(2310,"tr",16)(2311,"td",17)(2312,"div",24)(2313,"span",25),e(2314," forceBooleanComponentType"),n(2315,"br"),t()()(),i(2316,"td",20)(2317,"code",51),e(2318,"ForceBooleanComponentEnum"),t()(),i(2319,"td",23)(2320,"em")(2321,"strong"),e(2322,"(opcional)"),t()(),i(2323,"p"),e(2324,"Valores aceitos:"),t(),i(2325,"ul")(2326,"li"),e(2327,"ForceBooleanComponentEnum.switch"),t(),i(2328,"li"),e(2329,"ForceBooleanComponentEnum.checkbox"),t()()()(),i(2330,"tr",16)(2331,"td",17)(2332,"div",24)(2333,"span",25),e(2334," forceOptionsComponentType"),n(2335,"br"),t()()(),i(2336,"td",20)(2337,"code",52),e(2338,"ForceOptionComponentEnum"),t()(),i(2339,"td",23)(2340,"em")(2341,"strong"),e(2342,"(opcional)"),t()(),i(2343,"p"),e(2344,"pode ser utilizada em conjunto com a propriedade "),i(2345,"code"),e(2346,"options"),t(),e(2347," for\xE7ando o componente a renderizar um "),i(2348,"code"),e(2349,"po-select"),t(),e(2350," ou "),i(2351,"code"),e(2352,"po-radio-group"),t(),e(2353,"."),t(),i(2354,"p"),e(2355,"Valores aceitos:"),t(),i(2356,"ul")(2357,"li"),e(2358,"ForceOptionComponentEnum.radioGroup"),t(),i(2359,"li"),e(2360,"ForceOptionComponentEnum.select"),t()(),i(2361,"blockquote")(2362,"p"),e(2363,"Essa propriedade ser\xE1 ignorada caso seja utilizada em conjunto com a propriedade "),i(2364,"code"),e(2365,"optionsMulti"),t(),e(2366," e "),i(2367,"code"),e(2368,"optionsService"),t(),e(2369,"."),t()()()(),i(2370,"tr",16)(2371,"td",17)(2372,"div",24)(2373,"span",25),e(2374," formField"),n(2375,"br"),t()()(),i(2376,"td",20)(2377,"code",26),e(2378,"string"),t()(),i(2379,"td",23)(2380,"em")(2381,"strong"),e(2382,"(opcional)"),t()(),i(2383,"p"),e(2384,"Nome do campo de formul\xE1rio que ser\xE1 enviado para o servi\xE7o informado na propriedade "),i(2385,"code"),e(2386,"url"),t(),e(2387,"."),t(),i(2388,"blockquote")(2389,"p"),e(2390,"O valor default \xE9 "),i(2391,"code"),e(2392,"files"),t()()(),i(2393,"p")(2394,"strong"),e(2395,"Componente compat\xEDvel"),t(),e(2396,": "),i(2397,"code"),e(2398,"po-upload"),t()()()(),i(2399,"tr",16)(2400,"td",17)(2401,"div",24)(2402,"span",25),e(2403," format"),n(2404,"br"),t()()(),i(2405,"td",20)(2406,"code",26),e(2407,"string "),t(),i(2408,"code",31),e(2409," Array<string>"),t()(),i(2410,"td",23)(2411,"em")(2412,"strong"),e(2413,"(opcional)"),t()(),i(2414,"p"),e(2415,"Formato de exibi\xE7\xE3o no campo."),t(),i(2416,"p"),e(2417,"Ao utilizar esta propriedade com o "),i(2418,"code"),e(2419,"type"),t(),i(2420,"em"),e(2421,"PoDynamicFieldType.Date"),t(),e(2422," ou "),i(2423,"em"),e(2424,"PoDynamicFieldType.DateTime"),t(),e(2425,`,
pode ser utilizada para formata\xE7\xE3o de exibi\xE7\xE3o da data:`),t(),i(2426,"p"),e(2427,"Valores v\xE1lidos:"),t(),i(2428,"ul")(2429,"li"),e(2430,"dd/mm/yyyy"),t(),i(2431,"li"),e(2432,"mm/dd/yyyy"),t(),i(2433,"li"),e(2434,"yyyy/mm/dd"),t()(),i(2435,"p"),e(2436,"Tamb\xE9m pode-se utilizar em conjunto com "),i(2437,"code"),e(2438,"searchService"),t(),e(2439,`, informando uma lista de propriedades que ser\xE1 utilizado
para formata\xE7\xE3o da exibi\xE7\xE3o no campo, por exemplo: ["id", "name"].`),t()()(),i(2440,"tr",16)(2441,"td",17)(2442,"div",24)(2443,"span",25),e(2444," formatModel"),n(2445,"br"),t()()(),i(2446,"td",20)(2447,"code",28),e(2448,"boolean"),t()(),i(2449,"td",23)(2450,"em")(2451,"strong"),e(2452,"(opcional)"),t()(),i(2453,"p"),e(2454,"Indica se o "),i(2455,"code"),e(2456,"model"),t(),e(2457," receber\xE1 o valor formatado pelas propriedades "),i(2458,"code"),e(2459,"p-label-on"),t(),e(2460," e "),i(2461,"code"),e(2462,"p-label-off"),t(),e(2463,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),t(),i(2464,"p"),e(2465,"O valor padr\xE3o \xE9: "),i(2466,"code"),e(2467,"false"),t(),e(2468,"."),t(),i(2469,"blockquote")(2470,"p"),e(2471,"Esta propriedade est\xE1 disponivel apenas para o "),i(2472,"code"),e(2473,"swicth"),t(),e(2474,"."),t()()()(),i(2475,"tr",16)(2476,"td",17)(2477,"div",24)(2478,"span",25),e(2479," gridColumns"),n(2480,"br"),t()()(),i(2481,"td",20)(2482,"code",43),e(2483,"number"),t()(),i(2484,"td",23)(2485,"em")(2486,"strong"),e(2487,"(opcional)"),t()(),i(2488,"p"),e(2489,"Tamanho de exibi\xE7\xE3o do campo em telas."),t(),i(2490,"p"),e(2491,"Deve ser usado o sistema de "),i(2492,"strong"),e(2493,"grid"),t(),e(2494," do PO (1 ... 12 colunas)."),t(),i(2495,"blockquote")(2496,"p"),e(2497,"Esta propriedade \xE9 generica, aplica o valor em todos os tamanhos de telas."),t()()()(),i(2498,"tr",16)(2499,"td",17)(2500,"div",24)(2501,"span",25),e(2502," gridLgColumns"),n(2503,"br"),t()()(),i(2504,"td",20)(2505,"code",43),e(2506,"number"),t()(),i(2507,"td",23)(2508,"em")(2509,"strong"),e(2510,"(opcional)"),t()(),i(2511,"p"),e(2512,"Tamanho de exibi\xE7\xE3o do campo em telas grandes (lg)."),t(),i(2513,"p"),e(2514,"Deve ser usado o sistema de "),i(2515,"strong"),e(2516,"grid"),t(),e(2517," do PO (1 ... 12 colunas)."),t(),i(2518,"blockquote")(2519,"p"),e(2520,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(2521,"code"),e(2522,"gridColumns"),t(),e(2523,"."),t()()()(),i(2524,"tr",16)(2525,"td",17)(2526,"div",24)(2527,"span",25),e(2528," gridLgPull"),n(2529,"br"),t()()(),i(2530,"td",20)(2531,"code",43),e(2532,"number"),t()(),i(2533,"td",23)(2534,"em")(2535,"strong"),e(2536,"(opcional)"),t()(),i(2537,"p"),e(2538,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas grandes (lg)."),t(),i(2539,"p"),e(2540,"Deve ser usado o sistema de "),i(2541,"strong"),e(2542,"grid"),t(),e(2543," do PO (1 ... 11 colunas)."),t(),i(2544,"blockquote")(2545,"p"),e(2546,"Esta propriedade n\xE3o funciona com a propriedade "),i(2547,"code"),e(2548,"gridColumns"),t(),e(2549,". Deve-se especificar o tamanho da tela."),t()()()(),i(2550,"tr",16)(2551,"td",17)(2552,"div",24)(2553,"span",25),e(2554," gridMdColumns"),n(2555,"br"),t()()(),i(2556,"td",20)(2557,"code",43),e(2558,"number"),t()(),i(2559,"td",23)(2560,"em")(2561,"strong"),e(2562,"(opcional)"),t()(),i(2563,"p"),e(2564,"Tamanho de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),t(),i(2565,"p"),e(2566,"Deve ser usado o sistema de "),i(2567,"strong"),e(2568,"grid"),t(),e(2569," do PO (1 ... 12 colunas)."),t(),i(2570,"blockquote")(2571,"p"),e(2572,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(2573,"code"),e(2574,"gridColumns"),t(),e(2575,"."),t()()()(),i(2576,"tr",16)(2577,"td",17)(2578,"div",24)(2579,"span",25),e(2580," gridMdPull"),n(2581,"br"),t()()(),i(2582,"td",20)(2583,"code",43),e(2584,"number"),t()(),i(2585,"td",23)(2586,"em")(2587,"strong"),e(2588,"(opcional)"),t()(),i(2589,"p"),e(2590,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas m\xE9dias (md)."),t(),i(2591,"p"),e(2592,"Deve ser usado o sistema de "),i(2593,"strong"),e(2594,"grid"),t(),e(2595," do PO (1 ... 11 colunas)."),t(),i(2596,"blockquote")(2597,"p"),e(2598,"Esta propriedade n\xE3o funciona com a propriedade "),i(2599,"code"),e(2600,"gridColumns"),t(),e(2601,". Deve-se especificar o tamanho da tela."),t()()()(),i(2602,"tr",16)(2603,"td",17)(2604,"div",24)(2605,"span",25),e(2606," gridSmColumns"),n(2607,"br"),t()()(),i(2608,"td",20)(2609,"code",43),e(2610,"number"),t()(),i(2611,"td",23)(2612,"em")(2613,"strong"),e(2614,"(opcional)"),t()(),i(2615,"p"),e(2616,"Tamanho de exibi\xE7\xE3o do campo em telas menores (sm)."),t(),i(2617,"p"),e(2618,"Deve ser usado o sistema de "),i(2619,"strong"),e(2620,"grid"),t(),e(2621," do PO (1 ... 12 colunas)."),t(),i(2622,"blockquote")(2623,"p"),e(2624,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(2625,"code"),e(2626,"gridColumns"),t(),e(2627,"."),t()()()(),i(2628,"tr",16)(2629,"td",17)(2630,"div",24)(2631,"span",25),e(2632," gridSmPull"),n(2633,"br"),t()()(),i(2634,"td",20)(2635,"code",43),e(2636,"number"),t()(),i(2637,"td",23)(2638,"em")(2639,"strong"),e(2640,"(opcional)"),t()(),i(2641,"p"),e(2642,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas menores (sm)."),t(),i(2643,"p"),e(2644,"Deve ser usado o sistema de "),i(2645,"strong"),e(2646,"grid"),t(),e(2647," do PO (1 ... 11 colunas)."),t(),i(2648,"blockquote")(2649,"p"),e(2650,"Esta propriedade n\xE3o funciona com a propriedade "),i(2651,"code"),e(2652,"gridColumns"),t(),e(2653,". Deve-se especificar o tamanho da tela."),t()()()(),i(2654,"tr",16)(2655,"td",17)(2656,"div",24)(2657,"span",25),e(2658," gridXlColumns"),n(2659,"br"),t()()(),i(2660,"td",20)(2661,"code",43),e(2662,"number"),t()(),i(2663,"td",23)(2664,"em")(2665,"strong"),e(2666,"(opcional)"),t()(),i(2667,"p"),e(2668,"Tamanho de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),t(),i(2669,"p"),e(2670,"Deve ser usado o sistema de "),i(2671,"strong"),e(2672,"grid"),t(),e(2673," do PO (1 ... 12 colunas)."),t(),i(2674,"blockquote")(2675,"p"),e(2676,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(2677,"code"),e(2678,"gridColumns"),t(),e(2679,"."),t()()()(),i(2680,"tr",16)(2681,"td",17)(2682,"div",24)(2683,"span",25),e(2684," gridXlPull"),n(2685,"br"),t()()(),i(2686,"td",20)(2687,"code",43),e(2688,"number"),t()(),i(2689,"td",23)(2690,"em")(2691,"strong"),e(2692,"(opcional)"),t()(),i(2693,"p"),e(2694,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas extra grandes (xl)."),t(),i(2695,"p"),e(2696,"Deve ser usado o sistema de "),i(2697,"strong"),e(2698,"grid"),t(),e(2699," do PO (1 ... 11 colunas)."),t(),i(2700,"blockquote")(2701,"p"),e(2702,"Esta propriedade n\xE3o funciona com a propriedade "),i(2703,"code"),e(2704,"gridColumns"),t(),e(2705,". Deve-se especificar o tamanho da tela."),t()()()(),i(2706,"tr",16)(2707,"td",17)(2708,"div",24)(2709,"span",25),e(2710," headers"),n(2711,"br"),t()()(),i(2712,"td",20)(2713,"code",53),e(2714,"{ [name: string]: string "),t(),i(2715,"code",54),e(2716,` Array<string>;
}`),t()(),i(2717,"td",23)(2718,"em")(2719,"strong"),e(2720,"(opcional)"),t()(),i(2721,"p"),e(2722,"Objeto que cont\xE9m os cabe\xE7alhos que ser\xE1 enviado na requisi\xE7\xE3o dos arquivos."),t(),i(2723,"p")(2724,"strong"),e(2725,"Componente compat\xEDvel"),t(),e(2726,": "),i(2727,"code"),e(2728,"po-upload"),t()()()(),i(2729,"tr",16)(2730,"td",17)(2731,"div",24)(2732,"span",25),e(2733," help"),n(2734,"br"),t()()(),i(2735,"td",20)(2736,"code",26),e(2737,"string"),t()(),i(2738,"td",23)(2739,"em")(2740,"strong"),e(2741,"(opcional)"),t()(),i(2742,"p"),e(2743,"Texto de ajuda."),t()()(),i(2744,"tr",16)(2745,"td",17)(2746,"div",24)(2747,"span",25),e(2748," hideLabelStatus"),n(2749,"br"),t()()(),i(2750,"td",20)(2751,"code",28),e(2752,"boolean"),t()(),i(2753,"td",23)(2754,"em")(2755,"strong"),e(2756,"(opcional)"),t()(),i(2757,"p"),e(2758,"Indica se o status do "),i(2759,"code"),e(2760,"model"),t(),e(2761," ser\xE1 escondido visualmente ao lado do switch"),t()()(),i(2762,"tr",16)(2763,"td",17)(2764,"div",24)(2765,"span",25),e(2766," hidePasswordPeek"),n(2767,"br"),t()()(),i(2768,"td",20)(2769,"code",28),e(2770,"boolean"),t()(),i(2771,"td",23)(2772,"em")(2773,"strong"),e(2774,"(opcional)"),t()(),i(2775,"p"),e(2776,"Permite esconder a fun\xE7\xE3o de espiar a senha digitada no "),i(2777,"code"),e(2778,"po-password"),t(),e(2779,"."),t()()(),i(2780,"tr",16)(2781,"td",17)(2782,"div",24)(2783,"span",25),e(2784," hideRestrictionsInfo"),n(2785,"br"),t()()(),i(2786,"td",20)(2787,"code",28),e(2788,"boolean"),t()(),i(2789,"td",23)(2790,"em")(2791,"strong"),e(2792,"(opcional)"),t()(),i(2793,"p"),e(2794,"Oculta visualmente as informa\xE7\xF5es de restri\xE7\xF5es para o upload."),t(),i(2795,"p")(2796,"strong"),e(2797,"Componente compat\xEDvel"),t(),e(2798,": "),i(2799,"code"),e(2800,"po-upload"),t()()()(),i(2801,"tr",16)(2802,"td",17)(2803,"div",24)(2804,"span",25),e(2805," hideSearch"),n(2806,"br"),t()()(),i(2807,"td",20)(2808,"code",28),e(2809,"boolean"),t()(),i(2810,"td",23)(2811,"em")(2812,"strong"),e(2813,"(opcional)"),t()(),i(2814,"p"),e(2815,"Esconde o campo de pesquisa existente dentro do dropdown do "),i(2816,"code"),e(2817,"po-multiselect"),t(),e(2818,"."),t()()(),i(2819,"tr",16)(2820,"td",17)(2821,"div",24)(2822,"span",25),e(2823," hideSelectAll"),n(2824,"br"),t()()(),i(2825,"td",20)(2826,"code",28),e(2827,"boolean"),t()(),i(2828,"td",23)(2829,"em")(2830,"strong"),e(2831,"(opcional)"),t()(),i(2832,"p"),e(2833,'Indica se o campo "Selecionar todos" do '),i(2834,"code"),e(2835,"po-multiselect"),t(),e(2836," ser\xE1 escondido."),t()()(),i(2837,"tr",16)(2838,"td",17)(2839,"div",24)(2840,"span",25),e(2841," hideSelectButton"),n(2842,"br"),t()()(),i(2843,"td",20)(2844,"code",28),e(2845,"boolean"),t()(),i(2846,"td",23)(2847,"em")(2848,"strong"),e(2849,"(opcional)"),t()(),i(2850,"p"),e(2851,"Omite o bot\xE3o de sele\xE7\xE3o de arquivos."),t(),i(2852,"blockquote")(2853,"p"),e(2854,"Caso o valor definido seja "),i(2855,"code"),e(2856,"true"),t(),e(2857,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),i(2858,"code"),e(2859,"selectFiles()"),t(),e(2860," para sele\xE7\xE3o de arquivos."),t()(),i(2861,"p")(2862,"strong"),e(2863,"Componente compat\xEDvel"),t(),e(2864,": "),i(2865,"code"),e(2866,"po-upload"),t()()()(),i(2867,"tr",16)(2868,"td",17)(2869,"div",24)(2870,"span",25),e(2871," hideSendButton"),n(2872,"br"),t()()(),i(2873,"td",20)(2874,"code",28),e(2875,"boolean"),t()(),i(2876,"td",23)(2877,"em")(2878,"strong"),e(2879,"(opcional)"),t()(),i(2880,"p"),e(2881,"Omite o bot\xE3o de envio de arquivos."),t(),i(2882,"blockquote")(2883,"p"),e(2884,"Caso o valor definido seja "),i(2885,"code"),e(2886,"true"),t(),e(2887,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),i(2888,"code"),e(2889,"sendFiles()"),t(),e(2890," para envio do(s) arquivo(s) selecionado(s)."),t()(),i(2891,"p")(2892,"strong"),e(2893,"Componente compat\xEDvel"),t(),e(2894,": "),i(2895,"code"),e(2896,"po-upload"),t()()()(),i(2897,"tr",16)(2898,"td",17)(2899,"div",24)(2900,"span",25),e(2901," icon"),n(2902,"br"),t()()(),i(2903,"td",20)(2904,"code",26),e(2905,"string "),t(),i(2906,"code",55),e(2907," TemplateRef<void>"),t()(),i(2908,"td",23)(2909,"em")(2910,"strong"),e(2911,"(opcional)"),t()(),i(2912,"p"),e(2913,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),t(),i(2914,"blockquote")(2915,"p"),e(2916,"Esta propriedade s\xF3 pode ser utilizado nos campos:"),t()(),i(2917,"ul")(2918,"li"),e(2919,"Input;"),t(),i(2920,"li"),e(2921,"Number;"),t(),i(2922,"li"),e(2923,"Decimal;"),t(),i(2924,"li"),e(2925,"Combo;"),t(),i(2926,"li"),e(2927,"Password;"),t()(),i(2928,"blockquote")(2929,"p"),e(2930,"Veja a disponibilidade de \xEDcones em "),i(2931,"a",56),e(2932,"biblioteca de \xEDcones"),t(),e(2933,"."),t()()()(),i(2934,"tr",16)(2935,"td",17)(2936,"div",24)(2937,"span",25),e(2938," infiniteScroll"),n(2939,"br"),t()()(),i(2940,"td",20)(2941,"code",28),e(2942,"boolean"),t()(),i(2943,"td",23)(2944,"em")(2945,"strong"),e(2946,"(opcional)"),t()(),i(2947,"p"),e(2948,"Se verdadeiro ativa a funcionalidade de scroll infinito para o combo ou lookup, ao chegar ao fim da tabela executar\xE1 nova busca dos dados conforme pagina\xE7\xE3o."),t(),i(2949,"p")(2950,"strong"),e(2951,"Componentes compat\xEDveis:"),t(),i(2952,"code"),e(2953,"po-combo"),t(),e(2954,", "),i(2955,"code"),e(2956,"po-lookup"),t(),e(2957,"."),t()()(),i(2958,"tr",16)(2959,"td",17)(2960,"div",24)(2961,"span",25),e(2962," infiniteScrollDistance"),n(2963,"br"),t()()(),i(2964,"td",20)(2965,"code",43),e(2966,"number"),t()(),i(2967,"td",23)(2968,"em")(2969,"strong"),e(2970,"(opcional)"),t()(),i(2971,"p"),e(2972,`Define o percentual necess\xE1rio para disparar o evento show-more, que \xE9 respons\xE1vel por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padr\xE3o ser\xE1 100%.
`),i(2973,"strong"),e(2974,"Exemplos"),t(),i(2975,"code"),e(2976,"{ infiniteScrollDistance: 80 }"),t(),e(2977,": Quando atingir 80% do scroll do combo, o show-more ser\xE1 disparado."),t(),i(2978,"p")(2979,"strong"),e(2980,"Componente compat\xEDvel:"),t(),i(2981,"code"),e(2982,"po-combo"),t(),e(2983,"."),t()()(),i(2984,"tr",16)(2985,"td",17)(2986,"div",24)(2987,"span",25),e(2988," isoFormat"),n(2989,"br"),t()()(),i(2990,"td",20)(2991,"code",57),e(2992,"PoDatepickerIsoFormat"),t()(),i(2993,"td",23)(2994,"em")(2995,"strong"),e(2996,"(opcional)"),t()(),i(2997,"p"),e(2998,"Padr\xE3o de formata\xE7\xE3o para sa\xEDda do model, independentemente do formato de entrada."),t(),i(2999,"blockquote")(3e3,"p"),e(3001,"Veja os valores v\xE1lidos no "),i(3002,"code"),e(3003,"enumPoDatepickerIsoFormat"),t(),e(3004,"."),t()(),i(3005,"p")(3006,"strong"),e(3007,"Componente compat\xEDvel:"),t(),e(3008," po-datepicker"),t()()(),i(3009,"tr",16)(3010,"td",17)(3011,"div",24)(3012,"span",25),e(3013," key"),n(3014,"br"),t()()(),i(3015,"td",20)(3016,"code",28),e(3017,"boolean"),t()(),i(3018,"td",23)(3019,"em")(3020,"strong"),e(3021,"(opcional)"),t()(),i(3022,"p"),e(3023,"Identificador"),t()()(),i(3024,"tr",16)(3025,"td",17)(3026,"div",24)(3027,"span",25),e(3028," keydown"),n(3029,"br"),t()()(),i(3030,"td",20)(3031,"code",42),e(3032,"Function"),t()(),i(3033,"td",23)(3034,"em")(3035,"strong"),e(3036,"(opcional)"),t()(),i(3037,"p"),e(3038,`Fun\xE7\xE3o executada quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),i(3039,"code"),e(3040,"KeyboardEvent"),t(),e(3041," com informa\xE7\xF5es sobre a tecla."),t()()(),i(3042,"tr",16)(3043,"td",17)(3044,"div",24)(3045,"span",25),e(3046," label"),n(3047,"br"),t()()(),i(3048,"td",20)(3049,"code",26),e(3050,"string"),t()(),i(3051,"td",23)(3052,"em")(3053,"strong"),e(3054,"(opcional)"),t()(),i(3055,"p"),e(3056,"R\xF3tulo do campo exibido."),t(),i(3057,"p"),e(3058,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),i(3059,"code"),e(3060,"label"),t(),e(3061," o valor da propriedade "),i(3062,"code"),e(3063,"property"),t(),e(3064," com a primeira letra em mai\xFAsculo."),t()()(),i(3065,"tr",16)(3066,"td",17)(3067,"div",24)(3068,"span",25),e(3069," labelPosition"),n(3070,"br"),t()()(),i(3071,"td",20)(3072,"code",58),e(3073,"PoSwitchLabelPosition"),t()(),i(3074,"td",23)(3075,"em")(3076,"strong"),e(3077,"(opcional)"),t()(),i(3078,"p"),e(3079,"Posi\xE7\xE3o de exibi\xE7\xE3o do r\xF3tulo do PoSwitch."),t(),i(3080,"blockquote")(3081,"p"),e(3082,"Por padr\xE3o exibe \xE0 direita."),t()()()(),i(3083,"tr",16)(3084,"td",17)(3085,"div",24)(3086,"span",25),e(3087," literals"),n(3088,"br"),t()()(),i(3089,"td",20)(3090,"code",35),e(3091,"PoLookupLiterals "),t(),i(3092,"code",59),e(3093," PoMultiselectLiterals "),t(),i(3094,"code",60),e(3095," PoComboLiterals "),t(),i(3096,"code",61),e(3097," PoDatepickerRangeLiterals "),t(),i(3098,"code",62),e(3099," PoUploadLiterals"),t()(),i(3100,"td",23)(3101,"em")(3102,"strong"),e(3103,"(opcional)"),t()(),i(3104,"p"),e(3105,"Objeto com as literais usadas para os seguintes componentes: "),i(3106,"code"),e(3107,"po-lookup"),t(),e(3108,", "),i(3109,"code"),e(3110,"po-multiselect"),t(),e(3111,", "),i(3112,"code"),e(3113,"po-combo"),t(),e(3114," e "),i(3115,"code"),e(3116,"po-datepicker-range"),t(),e(3117,"."),t(),i(3118,"blockquote")(3119,"p"),e(3120,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do PoI18nService ou do browser."),t()(),i(3121,"p")(3122,"strong"),e(3123,"Componentes compat\xEDveis:"),t(),i(3124,"code"),e(3125,"po-lookup"),t(),e(3126,", "),i(3127,"code"),e(3128,"po-multiselect"),t(),e(3129,", "),i(3130,"code"),e(3131,"po-combo"),t(),e(3132,", "),i(3133,"code"),e(3134,"po-datepicker-range"),t()()()(),i(3135,"tr",16)(3136,"td",17)(3137,"div",24)(3138,"span",25),e(3139," locale"),n(3140,"br"),t()()(),i(3141,"td",20)(3142,"code",26),e(3143,"string"),t()(),i(3144,"td",23)(3145,"em")(3146,"strong"),e(3147,"(opcional)"),t()(),i(3148,"p"),e(3149,`Define a localidade a ser utilizada no componente.
Por padr\xE3o o valor ser\xE1 configurado segundo a o m\xF3dulo `),i(3150,"a",63)(3151,"code"),e(3152,"I18n"),t()()(),i(3153,"p"),e(3154,`Exemplo de utiliza\xE7\xE3o:
`),i(3155,"code"),e(3156,"[ { property: 'birthday', locale: 'en', type: 'date' }, { property: 'wage', locale: 'ru', type: 'currency' } ];"),t()(),i(3157,"blockquote")(3158,"p"),e(3159,"Para ver quais linguagens suportadas acesse "),i(3160,"a",63)(3161,"code"),e(3162,"I18n"),t()(),e(3163,`
A propriedade ser\xE1 repassada para os componentes que suportam a mesma.`),t()()()(),i(3164,"tr",16)(3165,"td",17)(3166,"div",24)(3167,"span",25),e(3168," mask"),n(3169,"br"),t()()(),i(3170,"td",20)(3171,"code",26),e(3172,"string"),t()(),i(3173,"td",23)(3174,"em")(3175,"strong"),e(3176,"(opcional)"),t()(),i(3177,"p"),e(3178,"M\xE1scara para o campo."),t(),i(3179,"p")(3180,"strong"),e(3181,"Componentes compat\xEDveis:"),t(),i(3182,"code"),e(3183,"po-input"),t(),e(3184,"."),t(),i(3185,"blockquote")(3186,"p"),e(3187,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),i(3188,"code"),e(3189,"type: time"),t(),e(3190,"."),t()()()(),i(3191,"tr",16)(3192,"td",17)(3193,"div",24)(3194,"span",25),e(3195," maskFormatModel"),n(3196,"br"),t()()(),i(3197,"td",20)(3198,"code",28),e(3199,"boolean"),t()(),i(3200,"td",23)(3201,"em")(3202,"strong"),e(3203,"(opcional)"),t()(),i(3204,"p"),e(3205,"Define que o valor do componente ser\xE1 conforme especificado na masc\xE1ra. O valor padr\xE3o \xE9 "),i(3206,"code"),e(3207,"false"),t(),e(3208,"."),t(),i(3209,"p")(3210,"strong"),e(3211,"Componentes compat\xEDveis:"),t(),i(3212,"code"),e(3213,"po-input"),t(),e(3214,"."),t(),i(3215,"blockquote")(3216,"p"),e(3217,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),i(3218,"code"),e(3219,"type: time"),t(),e(3220,"."),t()()()(),i(3221,"tr",16)(3222,"td",17)(3223,"div",24)(3224,"span",25),e(3225," maxLength"),n(3226,"br"),t()()(),i(3227,"td",20)(3228,"code",43),e(3229,"number"),t()(),i(3230,"td",23)(3231,"em")(3232,"strong"),e(3233,"(opcional)"),t()(),i(3234,"p"),e(3235,"Tamanho m\xE1ximo de caracteres."),t(),i(3236,"p")(3237,"strong"),e(3238,"Componentes compat\xEDveis:"),t(),i(3239,"code"),e(3240,"po-input"),t(),e(3241,", "),i(3242,"code"),e(3243,"po-number"),t(),e(3244,", "),i(3245,"code"),e(3246,"po-decimal"),t(),e(3247,", "),i(3248,"code"),e(3249,"po-textarea"),t(),e(3250,", "),i(3251,"code"),e(3252,"po-password"),t(),e(3253,"."),t()()(),i(3254,"tr",16)(3255,"td",17)(3256,"div",24)(3257,"span",25),e(3258," maxValue"),n(3259,"br"),t()()(),i(3260,"td",20)(3261,"code",26),e(3262,"string "),t(),i(3263,"code",43),e(3264," number"),t()(),i(3265,"td",23)(3266,"em")(3267,"strong"),e(3268,"(opcional)"),t()(),i(3269,"p"),e(3270,"Valor m\xE1ximo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),i(3271,"em"),e(3272,"number"),t(),e(3273,", "),i(3274,"em"),e(3275,"date"),t(),e(3276," ou "),i(3277,"em"),e(3278,"dateTime"),t(),e(3279,"."),t(),i(3280,"p")(3281,"strong"),e(3282,"Componentes compat\xEDveis:"),t(),i(3283,"code"),e(3284,"po-datepicker"),t(),e(3285,", "),i(3286,"code"),e(3287,"po-datepicker-range"),t(),e(3288,", "),i(3289,"code"),e(3290,"po-number"),t(),e(3291,", "),i(3292,"code"),e(3293,"po-decimal"),t()()()(),i(3294,"tr",16)(3295,"td",17)(3296,"div",24)(3297,"span",25),e(3298," minLength"),n(3299,"br"),t()()(),i(3300,"td",20)(3301,"code",43),e(3302,"number"),t()(),i(3303,"td",23)(3304,"em")(3305,"strong"),e(3306,"(opcional)"),t()(),i(3307,"p"),e(3308,"Tamanho m\xEDnimo de caracteres."),t(),i(3309,"p")(3310,"strong"),e(3311,"Componentes compat\xEDveis:"),t(),i(3312,"code"),e(3313,"po-input"),t(),e(3314,", "),i(3315,"code"),e(3316,"po-number"),t(),e(3317,", "),i(3318,"code"),e(3319,"po-decimal"),t(),e(3320,", "),i(3321,"code"),e(3322,"po-textarea"),t(),e(3323,", "),i(3324,"code"),e(3325,"po-password"),t(),e(3326,"."),t()()(),i(3327,"tr",16)(3328,"td",17)(3329,"div",24)(3330,"span",25),e(3331," minValue"),n(3332,"br"),t()()(),i(3333,"td",20)(3334,"code",26),e(3335,"string "),t(),i(3336,"code",43),e(3337," number"),t()(),i(3338,"td",23)(3339,"em")(3340,"strong"),e(3341,"(opcional)"),t()(),i(3342,"p"),e(3343,"Valor m\xEDnimo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),i(3344,"em"),e(3345,"number"),t(),e(3346,", "),i(3347,"em"),e(3348,"date"),t(),e(3349," ou "),i(3350,"em"),e(3351,"dateTime"),t(),e(3352,"."),t(),i(3353,"p")(3354,"strong"),e(3355,"Componentes compat\xEDveis:"),t(),i(3356,"code"),e(3357,"po-datepicker"),t(),e(3358,", "),i(3359,"code"),e(3360,"po-datepicker-range"),t(),e(3361,", "),i(3362,"code"),e(3363,"po-number"),t(),e(3364,", "),i(3365,"code"),e(3366,"po-decimal"),t()()()(),i(3367,"tr",16)(3368,"td",17)(3369,"div",24)(3370,"span",25),e(3371," multiple"),n(3372,"br"),t()()(),i(3373,"td",20)(3374,"code",28),e(3375,"boolean"),t()(),i(3376,"td",23)(3377,"em")(3378,"strong"),e(3379,"(opcional)"),t()(),i(3380,"p"),e(3381,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),t(),i(3382,"p")(3383,"strong"),e(3384,"Componente compat\xEDvel:"),t(),i(3385,"code"),e(3386,"po-lookup"),t(),e(3387,", "),i(3388,"code"),e(3389,"po-upload"),t()()()(),i(3390,"tr",16)(3391,"td",17)(3392,"div",24)(3393,"span",25),e(3394," noAutocomplete"),n(3395,"br"),t()()(),i(3396,"td",20)(3397,"code",28),e(3398,"boolean"),t()(),i(3399,"td",23)(3400,"em")(3401,"strong"),e(3402,"(opcional)"),t()(),i(3403,"p"),e(3404,"Define a propriedade nativa "),i(3405,"code"),e(3406,"autocomplete"),t(),e(3407," do campo como off."),t(),i(3408,"p")(3409,"strong"),e(3410,"Componentes compat\xEDveis:"),t(),i(3411,"code"),e(3412,"po-datepicker"),t(),e(3413,", "),i(3414,"code"),e(3415,"po-datepicker-range"),t(),e(3416,", "),i(3417,"code"),e(3418,"po-input"),t(),e(3419,", "),i(3420,"code"),e(3421,"po-number"),t(),e(3422,", "),i(3423,"code"),e(3424,"po-decimal"),t(),e(3425,", "),i(3426,"code"),e(3427,"po-lookup"),t(),e(3428,", "),i(3429,"code"),e(3430,"po-password"),t()()()(),i(3431,"tr",16)(3432,"td",17)(3433,"div",24)(3434,"span",25),e(3435," offsetColumns"),n(3436,"br"),t()()(),i(3437,"td",20)(3438,"code",43),e(3439,"number"),t()(),i(3440,"td",23)(3441,"em")(3442,"strong"),e(3443,"(opcional)"),t()(),i(3444,"p"),e(3445,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas."),t(),i(3446,"p"),e(3447,"Deve ser usado o sistema de "),i(3448,"strong"),e(3449,"grid"),t(),e(3450," do PO (1 ... 12 colunas)."),t(),i(3451,"blockquote")(3452,"p"),e(3453,"Esta propriedade \xE9 gen\xE9rica, aplica o valor em todos os tamanhos de telas."),t()()()(),i(3454,"tr",16)(3455,"td",17)(3456,"div",24)(3457,"span",25),e(3458," offsetLgColumns"),n(3459,"br"),t()()(),i(3460,"td",20)(3461,"code",43),e(3462,"number"),t()(),i(3463,"td",23)(3464,"em")(3465,"strong"),e(3466,"(opcional)"),t()(),i(3467,"p"),e(3468,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas grandes (lg)."),t(),i(3469,"p"),e(3470,"Deve ser usado o sistema de "),i(3471,"strong"),e(3472,"grid"),t(),e(3473," do PO (1 ... 12 colunas)."),t(),i(3474,"blockquote")(3475,"p"),e(3476,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(3477,"code"),e(3478,"offsetColumns"),t(),e(3479,"."),t()()()(),i(3480,"tr",16)(3481,"td",17)(3482,"div",24)(3483,"span",25),e(3484," offsetMdColumns"),n(3485,"br"),t()()(),i(3486,"td",20)(3487,"code",43),e(3488,"number"),t()(),i(3489,"td",23)(3490,"em")(3491,"strong"),e(3492,"(opcional)"),t()(),i(3493,"p"),e(3494,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),t(),i(3495,"p"),e(3496,"Deve ser usado o sistema de "),i(3497,"strong"),e(3498,"grid"),t(),e(3499," do PO (1 ... 12 colunas)."),t(),i(3500,"blockquote")(3501,"p"),e(3502,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(3503,"code"),e(3504,"offsetColumns"),t(),e(3505,"."),t()()()(),i(3506,"tr",16)(3507,"td",17)(3508,"div",24)(3509,"span",25),e(3510," offsetSmColumns"),n(3511,"br"),t()()(),i(3512,"td",20)(3513,"code",43),e(3514,"number"),t()(),i(3515,"td",23)(3516,"em")(3517,"strong"),e(3518,"(opcional)"),t()(),i(3519,"p"),e(3520,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas menores (sm)."),t(),i(3521,"p"),e(3522,"Deve ser usado o sistema de "),i(3523,"strong"),e(3524,"grid"),t(),e(3525," do PO (1 ... 12 colunas)."),t(),i(3526,"blockquote")(3527,"p"),e(3528,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(3529,"code"),e(3530,"offsetColumns"),t(),e(3531,"."),t()()()(),i(3532,"tr",16)(3533,"td",17)(3534,"div",24)(3535,"span",25),e(3536," offsetXlColumns"),n(3537,"br"),t()()(),i(3538,"td",20)(3539,"code",43),e(3540,"number"),t()(),i(3541,"td",23)(3542,"em")(3543,"strong"),e(3544,"(opcional)"),t()(),i(3545,"p"),e(3546,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),t(),i(3547,"p"),e(3548,"Deve ser usado o sistema de "),i(3549,"strong"),e(3550,"grid"),t(),e(3551," do PO (1 ... 12 colunas)."),t(),i(3552,"blockquote")(3553,"p"),e(3554,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(3555,"code"),e(3556,"offsetColumns"),t(),e(3557,"."),t()()()(),i(3558,"tr",16)(3559,"td",17)(3560,"div",24)(3561,"span",25),e(3562," onError"),n(3563,"br"),t()()(),i(3564,"td",20)(3565,"code",42),e(3566,"Function"),t()(),i(3567,"td",23)(3568,"em")(3569,"strong"),e(3570,"(opcional)"),t()(),i(3571,"p"),e(3572,"Evento ser\xE1 disparado quando ocorrer algum erro no envio do arquivo."),t(),i(3573,"blockquote")(3574,"p"),e(3575,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),i(3576,"code"),e(3577,"HttpErrorResponse"),t(),e(3578,"."),t()(),i(3579,"p")(3580,"strong"),e(3581,"Componente compat\xEDvel"),t(),e(3582,": "),i(3583,"code"),e(3584,"po-upload"),t()()()(),i(3585,"tr",16)(3586,"td",17)(3587,"div",24)(3588,"span",25),e(3589," onSuccess"),n(3590,"br"),t()()(),i(3591,"td",20)(3592,"code",42),e(3593,"Function"),t()(),i(3594,"td",23)(3595,"em")(3596,"strong"),e(3597,"(opcional)"),t()(),i(3598,"p"),e(3599,"Evento ser\xE1 disparado quando o envio do arquivo for realizado com sucesso."),t(),i(3600,"blockquote")(3601,"p"),e(3602,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),i(3603,"code"),e(3604,"HttpResponse"),t(),e(3605,"."),t()(),i(3606,"p")(3607,"strong"),e(3608,"Componente compat\xEDvel"),t(),e(3609,": "),i(3610,"code"),e(3611,"po-upload"),t()()()(),i(3612,"tr",16)(3613,"td",17)(3614,"div",24)(3615,"span",25),e(3616," onUpload"),n(3617,"br"),t()()(),i(3618,"td",20)(3619,"code",42),e(3620,"Function"),t()(),i(3621,"td",23)(3622,"em")(3623,"strong"),e(3624,"(opcional)"),t()(),i(3625,"p"),e(3626,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e a propriedade data nesta propriedade pode ser informado algum dado,
que ser\xE1 enviado em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),t(),i(3627,"pre")(3628,"code"),e(3629,`event.data = {id: 'id do usu\xE1rio'};
`),t()(),i(3630,"p")(3631,"strong"),e(3632,"Componente compat\xEDvel"),t(),e(3633,": "),i(3634,"code"),e(3635,"po-upload"),t()()()(),i(3636,"tr",16)(3637,"td",17)(3638,"div",24)(3639,"span",25),e(3640," optional"),n(3641,"br"),t()()(),i(3642,"td",20)(3643,"code",28),e(3644,"boolean"),t()(),i(3645,"td",23)(3646,"em")(3647,"strong"),e(3648,"(opcional)"),t()(),i(3649,"p"),e(3650,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),i(3651,"blockquote")(3652,"p"),e(3653,"A indica\xE7\xE3o n\xE3o ser\xE1 exibida, se:"),t()(),i(3654,"ul")(3655,"li"),e(3656,"O campo for "),i(3657,"code"),e(3658,"required"),t(),e(3659,", ou;"),t(),i(3660,"li"),e(3661,"N\xE3o possuir "),i(3662,"code"),e(3663,"help"),t(),e(3664," e "),i(3665,"code"),e(3666,"label"),t(),e(3667,"."),t()()()(),i(3668,"tr",16)(3669,"td",17)(3670,"div",24)(3671,"span",25),e(3672," options"),n(3673,"br"),t()()(),i(3674,"td",20)(3675,"code",31),e(3676,"Array<string> "),t(),i(3677,"code",64),e(3678," Array<PoSelectOption> "),t(),i(3679,"code",65),e(3680," Array<PoMultiselectOption> "),t(),i(3681,"code",66),e(3682," Array<PoCheckboxGroupOption> "),t(),i(3683,"code",67),e(3684," Array<any>"),t()(),i(3685,"td",23)(3686,"em")(3687,"strong"),e(3688,"(opcional)"),t()(),i(3689,"p"),e(3690,"Lista de op\xE7\xF5es que ser\xE3o exibidos em um componente, podendo selecionar uma op\xE7\xE3o."),t(),i(3691,"p")(3692,"strong"),e(3693,"Componentes compat\xEDveis:"),t(),i(3694,"code"),e(3695,"po-select"),t(),e(3696,", "),i(3697,"code"),e(3698,"po-radio-group"),t(),e(3699,", "),i(3700,"code"),e(3701,"po-checkbox-group"),t(),e(3702,", "),i(3703,"code"),e(3704,"po-multiselect"),t(),e(3705,"."),t()()(),i(3706,"tr",16)(3707,"td",17)(3708,"div",24)(3709,"span",25),e(3710," optionsMulti"),n(3711,"br"),t()()(),i(3712,"td",20)(3713,"code",28),e(3714,"boolean"),t()(),i(3715,"td",23)(3716,"em")(3717,"strong"),e(3718,"(opcional)"),t()(),i(3719,"p"),e(3720,"Permite que o usu\xE1rio fa\xE7a m\xFAltipla sele\xE7\xE3o dentro da lista de op\xE7\xF5es."),t()()(),i(3721,"tr",16)(3722,"td",17)(3723,"div",24)(3724,"span",25),e(3725," optionsService"),n(3726,"br"),t()()(),i(3727,"td",20)(3728,"code",26),e(3729,"string "),t(),i(3730,"code",68),e(3731," PoComboFilter "),t(),i(3732,"code",69),e(3733," PoMultiselectFilter"),t()(),i(3734,"td",23)(3735,"em")(3736,"strong"),e(3737,"(opcional)"),t()(),i(3738,"p"),e(3739,"Servi\xE7o que ser\xE1 utilizado para buscar os itens e preencher a lista de op\xE7\xF5es dinamicamente. Pode ser informada uma URL ou uma instancia do servi\xE7o baseado em PoComboFilter. "),i(3740,"strong"),e(3741,"Importante"),t()(),i(3742,"blockquote")(3743,"p"),e(3744,"Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o "),i(3745,"a",7),e(3746,"guia de API do PO UI"),t(),e(3747,"."),t()()()(),i(3748,"tr",16)(3749,"td",17)(3750,"div",24)(3751,"span",25),e(3752," order"),n(3753,"br"),t()()(),i(3754,"td",20)(3755,"code",43),e(3756,"number"),t()(),i(3757,"td",23)(3758,"em")(3759,"strong"),e(3760,"(opcional)"),t()(),i(3761,"p"),e(3762,"Informa a ordem de exibi\xE7\xE3o do campo."),t(),i(3763,"p"),e(3764,"Exemplo de utiliza\xE7\xE3o:"),t(),i(3765,"p")(3766,"code"),e(3767,"[ { property: 'test 1', order: 2 }, { property: 'test 2', order: 1 }, { property: 'test 3' }, { property: 'test 4', order: 3 } ];"),t()(),i(3768,"p"),e(3769,`Na exibi\xE7\xE3o a ordem ficar\xE1 dessa forma:
`),i(3770,"code"),e(3771,"[ { property: 'test 2', order: 1 }, { property: 'test 1', order: 2 }, { property: 'test 4', order: 3 }, { property: 'test 3' } ];"),t()(),i(3772,"p"),e(3773,"S\xF3 ser\xE3o aceitos valores com n\xFAmeros inteiros maiores do que zero."),t(),i(3774,"p"),e(3775,"Campos sem "),i(3776,"code"),e(3777,"order"),t(),e(3778,` ou com valores negativos, zerados ou inv\xE1lidos
ser\xE3o os \xFAltimos a serem renderizados e seguir\xE3o o posicionamento dentro do
array.`),t()()(),i(3779,"tr",16)(3780,"td",17)(3781,"div",24)(3782,"span",25),e(3783," params"),n(3784,"br"),t()()(),i(3785,"td",20)(3786,"code",32),e(3787,"any"),t()(),i(3788,"td",23)(3789,"em")(3790,"strong"),e(3791,"(opcional)"),t()(),i(3792,"p"),e(3793,"Objeto que ser\xE1 enviado como par\xE2metro nas requisi\xE7\xF5es de busca usados pelos componentes "),i(3794,"code"),e(3795,"po-lookup"),t(),e(3796,` e
`),i(3797,"code"),e(3798,"po-combo"),t(),e(3799,"."),t(),i(3800,"p"),e(3801,"Por exemplo, para o par\xE2metro "),i(3802,"code"),e(3803,"{ age: 23 }"),t(),e(3804," a URL da requisi\xE7\xE3o ficaria:"),t(),i(3805,"p")(3806,"code"),e(3807,"url + ?age=23&filter=Peter"),t()()()(),i(3808,"tr",16)(3809,"td",17)(3810,"div",24)(3811,"span",25),e(3812," pattern"),n(3813,"br"),t()()(),i(3814,"td",20)(3815,"code",26),e(3816,"string"),t()(),i(3817,"td",23)(3818,"em")(3819,"strong"),e(3820,"(opcional)"),t()(),i(3821,"p"),e(3822,"Regex para valida\xE7\xE3o do campo."),t(),i(3823,"p")(3824,"strong"),e(3825,"Componentes compat\xEDveis:"),t(),i(3826,"code"),e(3827,"po-input"),t(),e(3828,", "),i(3829,"code"),e(3830,"po-password"),t(),e(3831,"."),t()()(),i(3832,"tr",16)(3833,"td",17)(3834,"div",24)(3835,"span",25),e(3836," placeholder"),n(3837,"br"),t()()(),i(3838,"td",20)(3839,"code",26),e(3840,"string"),t()(),i(3841,"td",23)(3842,"em")(3843,"strong"),e(3844,"(opcional)"),t()(),i(3845,"p"),e(3846,"Mensagem que ser\xE1 exibida enquanto o campo n\xE3o estiver preenchido."),t()()(),i(3847,"tr",16)(3848,"td",17)(3849,"div",24)(3850,"span",25),e(3851," placeholderSearch"),n(3852,"br"),t()()(),i(3853,"td",20)(3854,"code",26),e(3855,"string"),t()(),i(3856,"td",23)(3857,"em")(3858,"strong"),e(3859,"(opcional)"),t()(),i(3860,"p"),e(3861,"Placeholder do campo de pesquisa do "),i(3862,"code"),e(3863,"po-multiselect"),t(),e(3864,"."),t(),i(3865,"blockquote")(3866,"p"),e(3867,"Caso o mesmo n\xE3o seja informado, o valor padr\xE3o ser\xE1 traduzido com base no idioma do navegador (pt, es e en)."),t()()()(),i(3868,"tr",16)(3869,"td",17)(3870,"div",24)(3871,"span",25),e(3872," property"),n(3873,"br"),t()()(),i(3874,"td",20)(3875,"code",26),e(3876,"string"),t()(),i(3877,"td",23)(3878,"p"),e(3879,"Nome de refer\xEAncia do campo."),t()()(),i(3880,"tr",16)(3881,"td",17)(3882,"div",24)(3883,"span",25),e(3884," range"),n(3885,"br"),t()()(),i(3886,"td",20)(3887,"code",28),e(3888,"boolean"),t()(),i(3889,"td",23)(3890,"em")(3891,"strong"),e(3892,"(opcional)"),t()(),i(3893,"p"),e(3894,"O controle passa a permitir a entrada de um intervalo ao inv\xE9s de um \xFAnico valor."),t(),i(3895,"blockquote")(3896,"p"),e(3897,"Atualmente essa propriedade est\xE1 dispon\xEDvel apenas para o tipo 'date' e 'dateTime'."),t()()()(),i(3898,"tr",16)(3899,"td",17)(3900,"div",24)(3901,"span",25),e(3902," readonly"),n(3903,"br"),t()()(),i(3904,"td",20)(3905,"code",28),e(3906,"boolean"),t()(),i(3907,"td",23)(3908,"em")(3909,"strong"),e(3910,"(opcional)"),t()(),i(3911,"p"),e(3912,"Indica que o campo ser\xE1 somente leitura."),t(),i(3913,"p")(3914,"strong"),e(3915,"Componentes compat\xEDveis:"),t(),i(3916,"code"),e(3917,"po-datepicker"),t(),e(3918,", "),i(3919,"code"),e(3920,"po-datepicker-range"),t(),e(3921,", "),i(3922,"code"),e(3923,"po-input"),t(),e(3924,", "),i(3925,"code"),e(3926,"po-number"),t(),e(3927,", "),i(3928,"code"),e(3929,"po-decimal"),t(),e(3930,", "),i(3931,"code"),e(3932,"po-select"),t(),e(3933,", "),i(3934,"code"),e(3935,"po-textarea"),t(),e(3936,", "),i(3937,"code"),e(3938,"po-password"),t()()()(),i(3939,"tr",16)(3940,"td",17)(3941,"div",24)(3942,"span",25),e(3943," removeInitialFilter"),n(3944,"br"),t()()(),i(3945,"td",20)(3946,"code",28),e(3947,"boolean"),t()(),i(3948,"td",23)(3949,"em")(3950,"strong"),e(3951,"(opcional)"),t()(),i(3952,"p"),e(3953,"Define que o filtro no primeiro clique ser\xE1 removido."),t(),i(3954,"blockquote")(3955,"p"),e(3956,`Caso o combo tenha um valor padr\xE3o de inicializa\xE7\xE3o, o primeiro clique
no componente retornar\xE1 todos os itens da lista e n\xE3o apenas o item inicialiazado.`),t()(),i(3957,"p")(3958,"strong"),e(3959,"Componente compat\xEDvel"),t(),e(3960,": "),i(3961,"code"),e(3962,"po-combo"),t()()()(),i(3963,"tr",16)(3964,"td",17)(3965,"div",24)(3966,"span",25),e(3967," required"),n(3968,"br"),t()()(),i(3969,"td",20)(3970,"code",28),e(3971,"boolean"),t()(),i(3972,"td",23)(3973,"em")(3974,"strong"),e(3975,"(opcional)"),t()(),i(3976,"p"),e(3977,"Define a obrigatoriedade do campo."),t()()(),i(3978,"tr",16)(3979,"td",17)(3980,"div",24)(3981,"span",25),e(3982," requiredFieldErrorMessage"),n(3983,"br"),t()()(),i(3984,"td",20)(3985,"code",28),e(3986,"boolean"),t()(),i(3987,"td",23)(3988,"em")(3989,"strong"),e(3990,"(opcional)"),t()(),i(3991,"p"),e(3992,"Exibe a mensagem setada na propriedade "),i(3993,"code"),e(3994,"errorMessage"),t(),e(3995," se o campo estiver vazio e for requerido."),t(),i(3996,"blockquote")(3997,"p"),e(3998,"Necess\xE1rio que a propriedade "),i(3999,"code"),e(4e3,"required"),t(),e(4001," esteja habilitada."),t()(),i(4002,"p")(4003,"strong"),e(4004,"Componentes compat\xEDveis:"),t(),i(4005,"code"),e(4006,"po-datepicker"),t(),e(4007,", "),i(4008,"code"),e(4009,"po-input"),t(),e(4010,", "),i(4011,"code"),e(4012,"po-number"),t(),e(4013,", "),i(4014,"code"),e(4015,"po-decimal"),t(),e(4016,", "),i(4017,"code"),e(4018,"po-password"),t(),e(4019,"."),t()()(),i(4020,"tr",16)(4021,"td",17)(4022,"div",24)(4023,"span",25),e(4024," restrictions"),n(4025,"br"),t()()(),i(4026,"td",20)(4027,"code",70),e(4028,"PoUploadFileRestrictions"),t()(),i(4029,"td",23)(4030,"em")(4031,"strong"),e(4032,"(opcional)"),t()(),i(4033,"p"),e(4034,"Objeto que segue a defini\xE7\xE3o da interface "),i(4035,"code"),e(4036,"PoUploadFileRestrictions"),t(),e(4037,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),t(),i(4038,"p")(4039,"strong"),e(4040,"Componente compat\xEDvel"),t(),e(4041,": "),i(4042,"code"),e(4043,"po-upload"),t()()()(),i(4044,"tr",16)(4045,"td",17)(4046,"div",24)(4047,"span",25),e(4048," rows"),n(4049,"br"),t()()(),i(4050,"td",20)(4051,"code",43),e(4052,"number"),t()(),i(4053,"td",23)(4054,"em")(4055,"strong"),e(4056,"(opcional)"),t()(),i(4057,"p"),e(4058,"Quantidade de linhas exibidas no "),i(4059,"code"),e(4060,"po-textarea"),t(),e(4061,"."),t()()(),i(4062,"tr",16)(4063,"td",17)(4064,"div",24)(4065,"span",25),e(4066," searchService"),n(4067,"br"),t()()(),i(4068,"td",20)(4069,"code",26),e(4070,"string "),t(),i(4071,"code",33),e(4072," PoLookupFilter"),t()(),i(4073,"td",23)(4074,"em")(4075,"strong"),e(4076,"(opcional)"),t()(),i(4077,"p"),e(4078,"Servi\xE7o que ser\xE1 utilizado para realizar a busca avan\xE7ada. Pode ser utilizado em conjunto com a propriedade "),i(4079,"code"),e(4080,"columns"),t(),e(4081,`.
Pode ser ser informada uma URL ou uma instancia do servi\xE7o baseado em PoLookupFilter.
`),i(4082,"strong"),e(4083,"Importante:"),t()(),i(4084,"blockquote")(4085,"p"),e(4086,"Caso utilizar a propriedade "),i(4087,"code"),e(4088,"optionsService"),t(),e(4089,` esta propriedade ser\xE1 ignorada.
Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),i(4090,"a",7),e(4091,"guia de API do PO UI"),t(),e(4092,"."),t()()()(),i(4093,"tr",16)(4094,"td",17)(4095,"div",24)(4096,"span",25),e(4097," secret"),n(4098,"br"),t()()(),i(4099,"td",20)(4100,"code",28),e(4101,"boolean"),t()(),i(4102,"td",23)(4103,"em")(4104,"strong"),e(4105,"(opcional)"),t()(),i(4106,"p"),e(4107,"Esconde a informa\xE7\xE3o estilo "),i(4108,"em"),e(4109,"password"),t(),e(4110,", pode ser utilizado quando o tipo de dado for "),i(4111,"em"),e(4112,"string"),t(),e(4113,"."),t()()(),i(4114,"tr",16)(4115,"td",17)(4116,"div",24)(4117,"span",25),e(4118," showRequired"),n(4119,"br"),t()()(),i(4120,"td",20)(4121,"code",28),e(4122,"boolean"),t()(),i(4123,"td",23)(4124,"em")(4125,"strong"),e(4126,"(opcional)"),t()(),i(4127,"p"),e(4128,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),i(4129,"blockquote")(4130,"p"),e(4131,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),i(4132,"ul")(4133,"li"),e(4134,"N\xE3o possuir "),i(4135,"code"),e(4136,"p-help"),t(),e(4137," e/ou "),i(4138,"code"),e(4139,"p-label"),t(),e(4140,"."),t()()()(),i(4141,"tr",16)(4142,"td",17)(4143,"div",24)(4144,"span",25),e(4145," size"),n(4146,"br"),t()()(),i(4147,"td",20)(4148,"code",26),e(4149,"string"),t()(),i(4150,"td",23)(4151,"em")(4152,"strong"),e(4153,"(opcional)"),t()(),i(4154,"p"),e(4155,"Define o tamanho dos componentes de formul\xE1rio no template conforme suas respectivas documenta\xE7\xF5es:"),t(),i(4156,"ul")(4157,"li")(4158,"code"),e(4159,"small"),t(),e(4160,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),i(4161,"li")(4162,"code"),e(4163,"medium"),t(),e(4164,": aplica a medida medium de cada componente."),t(),i(4165,"li")(4166,"code"),e(4167,"large"),t(),e(4168,": aplica a medida large de cada componente (dispon\xEDvel para "),i(4169,"code"),e(4170,"po-checkbox"),t(),e(4171," e "),i(4172,"code"),e(4173,"po-radio-group"),t(),e(4174,")."),i(4175,"blockquote")(4176,"p"),e(4177,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(4178,"code"),e(4179,"medium"),t(),e(4180,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(4181,"a",37),e(4182,"po-theme"),t(),e(4183,"."),t()()()()()(),i(4184,"tr",16)(4185,"td",17)(4186,"div",24)(4187,"span",25),e(4188," sort"),n(4189,"br"),t()()(),i(4190,"td",20)(4191,"code",28),e(4192,"boolean"),t()(),i(4193,"td",23)(4194,"em")(4195,"strong"),e(4196,"(opcional)"),t()(),i(4197,"p"),e(4198,"Indica que a lista definida na propriedade p-options ser\xE1 ordenada pela descri\xE7\xE3o."),t(),i(4199,"p")(4200,"strong"),e(4201,"Componentes compat\xEDveis:"),t(),i(4202,"code"),e(4203,"po-combo"),t(),e(4204,", po-multiselect"),t()()(),i(4205,"tr",16)(4206,"td",17)(4207,"div",24)(4208,"span",25),e(4209," step"),n(4210,"br"),t()()(),i(4211,"td",20)(4212,"code",43),e(4213,"number"),t()(),i(4214,"td",23)(4215,"em")(4216,"strong"),e(4217,"(opcional)"),t()(),i(4218,"p"),e(4219,"Intervalo utilizado no "),i(4220,"code"),e(4221,"po-number"),t(),e(4222,"."),t()()(),i(4223,"tr",16)(4224,"td",17)(4225,"div",24)(4226,"span",25),e(4227," thousandMaxlength"),n(4228,"br"),t()()(),i(4229,"td",20)(4230,"code",43),e(4231,"number"),t()(),i(4232,"td",23)(4233,"em")(4234,"strong"),e(4235,"(opcional)"),t()(),i(4236,"p"),e(4237,"Quantidade m\xE1xima de d\xEDgitos antes do separador decimal. O valor m\xE1ximo permitido \xE9 13"),t(),i(4238,"blockquote")(4239,"p"),e(4240,"Esta propriedade s\xF3 pode ser utilizada quando o "),i(4241,"code"),e(4242,"type"),t(),e(4243," for "),i(4244,"em"),e(4245,"currency"),t(),e(4246," ou "),i(4247,"em"),e(4248,"decimal"),t(),e(4249,"."),t()()()(),i(4250,"tr",16)(4251,"td",17)(4252,"div",24)(4253,"span",25),e(4254," type"),n(4255,"br"),t()()(),i(4256,"td",20)(4257,"code",26),e(4258,"string "),t(),i(4259,"code",71),e(4260," PoDynamicFieldType"),t()(),i(4261,"td",23)(4262,"em")(4263,"strong"),e(4264,"(opcional)"),t()(),i(4265,"p"),e(4266,"Tipo do valor campo."),t(),i(4267,"p"),e(4268,"Valores v\xE1lidos:"),t(),i(4269,"ul")(4270,"li")(4271,"code"),e(4272,"boolean"),t(),e(4273,": Valores "),i(4274,"em"),e(4275,"booleanos"),t(),e(4276,"."),t(),i(4277,"li")(4278,"code"),e(4279,"currency"),t(),e(4280,": Valores monet\xE1rios."),t(),i(4281,"li")(4282,"code"),e(4283,"decimal"),t(),e(4284,": Valores decimais."),t(),i(4285,"li")(4286,"code"),e(4287,"date"),t(),e(4288,": Valores de datas."),i(4289,"ul")(4290,"li"),e(4291,"Aceita os tipos "),i(4292,"strong"),e(4293,"string"),t(),e(4294," e "),i(4295,"strong"),e(4296,"Date"),t(),e(4297,` padr\xE3o do Javascript,
por exemplo: `),i(4298,"code"),e(4299,"'2017-11-28'"),t(),e(4300," ou "),i(4301,"code"),e(4302,"new Date(2017, 10, 28)"),t(),e(4303,"."),t()()(),i(4304,"li")(4305,"code"),e(4306,"dateTime"),t(),e(4307,": Valor de data com hor\xE1rio."),i(4308,"ul")(4309,"li"),e(4310,"Aceita o tipo "),i(4311,"em"),e(4312,"string"),t(),e(4313," no formato "),i(4314,"strong"),e(4315,"ISO-8601"),t(),e(4316," extendido "),i(4317,"strong"),e(4318,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),t(),e(4319,`
e o tipo `),i(4320,"strong"),e(4321,"Date"),t(),e(4322," padr\xE3o do Javascript, por exemplo: "),i(4323,"code"),e(4324,"'2017-11-28T00:00:00-02:00'"),t(),e(4325," ou "),i(4326,"code"),e(4327,"new Date(2017, 10, 28)"),t(),e(4328,"."),t()()(),i(4329,"li")(4330,"code"),e(4331,"number"),t(),e(4332,": Valores num\xE9ricos."),t(),i(4333,"li")(4334,"code"),e(4335,"string"),t(),e(4336,": Textos."),t(),i(4337,"li")(4338,"code"),e(4339,"time"),t(),e(4340,": Valor do hor\xE1rio."),i(4341,"ul")(4342,"li"),e(4343,"Aceita o tipo "),i(4344,"strong"),e(4345,"string"),t(),e(4346," nos formatos "),i(4347,"strong"),e(4348,"'HH:mm:ss'"),t(),e(4349," ou "),i(4350,"strong"),e(4351,"'HH:mm:ss.ffffff'"),t(),e(4352,", por exemplo: "),i(4353,"code"),e(4354,"'23:12:45'"),t(),e(4355,"."),t()()()()()(),i(4356,"tr",16)(4357,"td",17)(4358,"div",24)(4359,"span",25),e(4360," url"),n(4361,"br"),t()()(),i(4362,"td",20)(4363,"code",26),e(4364,"string"),t()(),i(4365,"td",23)(4366,"em")(4367,"strong"),e(4368,"(opcional)"),t()(),i(4369,"p"),e(4370,"URL que deve ser feita a requisi\xE7\xE3o com os arquivos selecionados."),t(),i(4371,"p")(4372,"strong"),e(4373,"Componente compat\xEDvel"),t(),e(4374,": "),i(4375,"code"),e(4376,"po-upload"),t()()()(),i(4377,"tr",16)(4378,"td",17)(4379,"div",24)(4380,"span",25),e(4381," validate"),n(4382,"br"),t()()(),i(4383,"td",20)(4384,"code",26),e(4385,"string "),t(),i(4386,"code",42),e(4387," Function"),t()(),i(4388,"td",23)(4389,"em")(4390,"strong"),e(4391,"(opcional)"),t()(),i(4392,"p"),e(4393,"Fun\xE7\xE3o ou servi\xE7o para validar as "),i(4394,"strong"),e(4395,"mudan\xE7as do campo"),t(),e(4396,"."),t(),i(4397,"ul")(4398,"li"),e(4399,"A propriedade aceita os seguintes tipos:"),t()(),i(4400,"ul")(4401,"li")(4402,"strong"),e(4403,"String"),t(),e(4404,": Endpoint usado pelo componente para requisi\xE7\xE3o via "),i(4405,"code"),e(4406,"POST"),t(),e(4407,"."),t(),i(4408,"li")(4409,"strong"),e(4410,"Function"),t(),e(4411,": M\xE9todo que ser\xE1 executado."),t()(),i(4412,"p"),e(4413,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e o novo valor, conforme a interface `),i(4414,"code"),e(4415,"PoDynamicFormFieldChanged"),t(),e(4416,":"),t(),i(4417,"p")(4418,"code"),e(4419,"{ property: 'property name', value: 'new value' }"),t()(),i(4420,"p"),e(4421,"O retorno desta fun\xE7\xE3o deve ser do tipo "),i(4422,"a",72),e(4423,"PoDynamicFormFieldValidation"),t(),e(4424,`,
onde o usu\xE1rio poder\xE1 determinar as novas propriedades do campo.
Por exemplo:`),t(),i(4425,"pre")(4426,"code"),e(4427,`onChangeField(changeValue): PoDynamicFormFieldValidation {

if (changeValue.property === 'birthday' && !this.validate('birthday')) {
  return {
    value: '',
    field: { property: 'birthday', required: true },
    focus: true
  };
}
`),t()(),i(4428,"p"),e(4429,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),i(4430,"code"),e(4431,"bind"),t(),e(4432,`, por exemplo:
`),i(4433,"code"),e(4434,"{ property: 'state', gridColumns: 6, validate: this.myFunction.bind(this) }"),t()()()(),i(4435,"tr",16)(4436,"td",17)(4437,"div",24)(4438,"span",25),e(4439," visible"),n(4440,"br"),t()()(),i(4441,"td",20)(4442,"code",28),e(4443,"boolean"),t()(),i(4444,"td",23)(4445,"em")(4446,"strong"),e(4447,"(opcional)"),t()(),i(4448,"p"),e(4449,"Indica se o campo ser\xE1 vis\xEDvel."),t()()()(),i(4450,"h4",41)(4451,"code",5),e(4452,"PoLookupColumn"),t()(),i(4453,"div",2)(4454,"p"),e(4455,"Interface para configura\xE7\xE3o das colunas do po-lookup."),t()(),i(4456,"h4",12),e(4457,"Propriedades"),t(),i(4458,"table",13)(4459,"tr",14)(4460,"th",15),e(4461,"Nome"),t(),i(4462,"th",15),e(4463,"Tipo"),t(),i(4464,"th",15),e(4465,"Descri\xE7\xE3o"),t()(),i(4466,"tr",16)(4467,"td",17)(4468,"div",24)(4469,"span",25),e(4470," fieldLabel"),n(4471,"br"),t()()(),i(4472,"td",20)(4473,"code",28),e(4474,"boolean"),t()(),i(4475,"td",23)(4476,"em")(4477,"strong"),e(4478,"(opcional)"),t()(),i(4479,"p"),e(4480,"Indica que a coluna ser\xE1 utilizada como valor do campo e como filtro dentro da modal."),t(),i(4481,"p"),e(4482,`Se houver mais de uma configura\xE7\xE3o habilitada, \xE9 exibido os valores no campo concatenados separados
por um tra\xE7o("-"). Por exemplo: "Joinville - SC".`),t(),i(4483,"p"),e(4484,`Importante
Esta configura\xE7\xE3o se torna obsoleta caso os atributos `),i(4485,"code"),e(4486,"p-field-format"),t(),e(4487," ou "),i(4488,"code"),e(4489,"p-field-label"),t(),e(4490," forem configurados no componente."),t()()(),i(4491,"tr",16)(4492,"td",17)(4493,"div",24)(4494,"span",25),e(4495," format"),n(4496,"br"),t()()(),i(4497,"td",20)(4498,"code",26),e(4499,"string"),t()(),i(4500,"td",23)(4501,"em")(4502,"strong"),e(4503,"(opcional)"),t()(),i(4504,"p"),e(4505,"Formato de exibi\xE7\xE3o do valor da coluna:"),t(),i(4506,"ul")(4507,"li"),e(4508,"Formato para moeda (currency). Exemplos: 'BRL', 'USD'."),t(),i(4509,"li"),e(4510,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
valor padr\xE3o \xE9 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),t()()()(),i(4511,"tr",16)(4512,"td",17)(4513,"div",24)(4514,"span",25),e(4515," label"),n(4516,"br"),t()()(),i(4517,"td",20)(4518,"code",26),e(4519,"string"),t()(),i(4520,"td",23)(4521,"em")(4522,"strong"),e(4523,"(opcional)"),t()(),i(4524,"p"),e(4525,"Texto para t\xEDtulo da coluna."),t(),i(4526,"p"),e(4527,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),i(4528,"em"),e(4529,"label"),t(),e(4530," o valor da propriedade "),i(4531,"em"),e(4532,"property"),t(),e(4533," com a primeira letra em mai\xFAsculo."),t()()(),i(4534,"tr",16)(4535,"td",17)(4536,"div",24)(4537,"span",25),e(4538," property"),n(4539,"br"),t()()(),i(4540,"td",20)(4541,"code",26),e(4542,"string"),t()(),i(4543,"td",23)(4544,"em")(4545,"strong"),e(4546,"(opcional)"),t()(),i(4547,"p"),e(4548,"Nome identificador da coluna."),t()()(),i(4549,"tr",16)(4550,"td",17)(4551,"div",24)(4552,"span",25),e(4553," type"),n(4554,"br"),t()()(),i(4555,"td",20)(4556,"code",26),e(4557,"string"),t()(),i(4558,"td",23)(4559,"em")(4560,"strong"),e(4561,"(opcional)"),t()(),i(4562,"p"),e(4563,"Tipo da coluna:"),t(),i(4564,"ul")(4565,"li"),e(4566,"string (padr\xE3o): textos"),t(),i(4567,"li"),e(4568,"number: valores num\xE9ricos"),t(),i(4569,"li"),e(4570,"date: data"),t(),i(4571,"li"),e(4572,"currency: valores monet\xE1rios"),t(),i(4573,"li"),e(4574,"dateTime: data e hora"),t()()()(),i(4575,"tr",16)(4576,"td",17)(4577,"div",24)(4578,"span",25),e(4579," width"),n(4580,"br"),t()()(),i(4581,"td",20)(4582,"code",26),e(4583,"string"),t()(),i(4584,"td",23)(4585,"em")(4586,"strong"),e(4587,"(opcional)"),t()(),i(4588,"p"),e(4589,"A largura da coluna pode ser informada em pixels ou porcentagem. Exemplo: '100px' ou '20%'"),t()()()(),i(4590,"h4",41)(4591,"code",5),e(4592,"PoLookupFilter"),t()(),i(4593,"div",2)(4594,"p"),e(4595,"Define o tipo de busca utilizado no po-lookup."),t()(),i(4596,"h4",12),e(4597,"M\xE9todos"),t(),i(4598,"table",39)(4599,"tr",16)(4600,"th",40)(4601,"div",24)(4602,"h4")(4603,"span",25),e(4604," getFilteredItems "),t()()()()(),i(4605,"tr",23)(4606,"td",23)(4607,"p"),e(4608,`M\xE9todo que ser\xE1 disparado ao filtrar a lista de itens ou carregar mais resultados no componente, deve-se retornar
um `),i(4609,"em"),e(4610,"Observable"),t(),e(4611," com a resposta da API no formato da interface "),i(4612,"code"),e(4613,"PoLookupResponseApi"),t(),e(4614,"."),t()()()(),i(4615,"h5")(4616,"b"),e(4617,"Par\xE2metros"),t()(),i(4618,"table",13)(4619,"tr",14)(4620,"th",15),e(4621,"Nome"),t(),i(4622,"th",15),e(4623,"Tipo"),t(),i(4624,"th",15),e(4625,"Descri\xE7\xE3o"),t()(),i(4626,"tr",16)(4627,"td",17),e(4628," params"),t(),i(4629,"td",20)(4630,"code",73),e(4631," PoLookupFilteredItemsParams "),t()(),i(4632,"td",23)(4633,"p"),e(4634,"Objeto enviado por par\xE2metro que implementa a interface "),i(4635,"code"),e(4636,"PoLookupFilteredItemsParams"),t(),e(4637,"."),t()()()(),n(4638,"br"),i(4639,"table",39)(4640,"tr",16)(4641,"th",40)(4642,"div",24)(4643,"h4")(4644,"span",25),e(4645," getObjectByValue "),t()()()()(),i(4646,"tr",23)(4647,"td",23)(4648,"p"),e(4649,"M\xE9todo respons\xE1vel por enviar um valor que ser\xE1 buscado no servi\xE7o."),t(),i(4650,"p"),e(4651,`Caso a funcionalidade de m\xFAltipla sele\xE7\xE3o estver habilitada, o parametro value ser\xE1 enviado como uma lista de valores
e o observable deve retornar uma lista de objetos.`),t()()()(),i(4652,"h5")(4653,"b"),e(4654,"Par\xE2metros"),t()(),i(4655,"table",13)(4656,"tr",14)(4657,"th",15),e(4658,"Nome"),t(),i(4659,"th",15),e(4660,"Tipo"),t(),i(4661,"th",15),e(4662,"Descri\xE7\xE3o"),t()(),i(4663,"tr",16)(4664,"td",17),e(4665," value"),t(),i(4666,"td",20)(4667,"code",26),e(4668," string "),t(),i(4669,"code",67),e(4670," Array<any> "),t()(),i(4671,"td",23)(4672,"p"),e(4673,"Valor \xFAnico a ser buscado na fonte de dados."),t()()(),i(4674,"tr",16)(4675,"td",17),e(4676," filterParams"),t(),i(4677,"td",20)(4678,"code",73),e(4679," any "),t()(),i(4680,"td",23)(4681,"p"),e(4682,"Valor informado atrav\xE9s da propriedade "),i(4683,"code"),e(4684,"p-filter-params"),t(),e(4685,"."),t()()()(),n(4686,"br"),i(4687,"h4",41)(4688,"code",5),e(4689,"PoLookupFilteredItemsParams"),t()(),i(4690,"div",2)(4691,"p"),e(4692,"Interface do objeto enviado como par\xE2metro na fun\xE7\xE3o "),i(4693,"code"),e(4694,"getFilteredItems"),t(),e(4695,"."),t()(),i(4696,"h4",12),e(4697,"Propriedades"),t(),i(4698,"table",13)(4699,"tr",14)(4700,"th",15),e(4701,"Nome"),t(),i(4702,"th",15),e(4703,"Tipo"),t(),i(4704,"th",15),e(4705,"Descri\xE7\xE3o"),t()(),i(4706,"tr",16)(4707,"td",17)(4708,"div",24)(4709,"span",25),e(4710," advancedFilters"),n(4711,"br"),t()()(),i(4712,"td",20)(4713,"code",74),e(4714,`{ [key: string]: any;
}`),t()(),i(4715,"td",23)(4716,"em")(4717,"strong"),e(4718,"(opcional)"),t()(),i(4719,"p"),e(4720,"Valores informados nos campos de busca avan\xE7ada, que ser\xE3o utilizados para filtrar a lista de itens."),t()()(),i(4721,"tr",16)(4722,"td",17)(4723,"div",24)(4724,"span",25),e(4725," filter"),n(4726,"br"),t()()(),i(4727,"td",20)(4728,"code",26),e(4729,"string"),t()(),i(4730,"td",23)(4731,"em")(4732,"strong"),e(4733,"(opcional)"),t()(),i(4734,"p"),e(4735,"Conte\xFAdo utilizado para filtrar a lista de itens."),t()()(),i(4736,"tr",16)(4737,"td",17)(4738,"div",24)(4739,"span",25),e(4740," filterParams"),n(4741,"br"),t()()(),i(4742,"td",20)(4743,"code",32),e(4744,"any"),t()(),i(4745,"td",23)(4746,"em")(4747,"strong"),e(4748,"(opcional)"),t()(),i(4749,"p"),e(4750,"Valor informado atrav\xE9s da propriedade "),i(4751,"code"),e(4752,"p-filter-params"),t(),e(4753,"."),t()()(),i(4754,"tr",16)(4755,"td",17)(4756,"div",24)(4757,"span",25),e(4758," order"),n(4759,"br"),t()()(),i(4760,"td",20)(4761,"code",26),e(4762,"string"),t()(),i(4763,"td",23)(4764,"em")(4765,"strong"),e(4766,"(opcional)"),t()(),i(4767,"p"),e(4768,"Coluna que est\xE1 sendo ordenada na tabela."),t(),i(4769,"ul")(4770,"li"),e(4771,"Coluna decrescente ser\xE1 informada da seguinte forma: "),i(4772,"code"),e(4773,"-<colunaOrdenada>"),t(),e(4774,", por exemplo "),i(4775,"code"),e(4776,"-name"),t(),e(4777,"."),t(),i(4778,"li"),e(4779,"Coluna ascendente ser\xE1 informada da seguinte forma: "),i(4780,"code"),e(4781,"<colunaOrdenada>"),t(),e(4782,", por exemplo "),i(4783,"code"),e(4784,"name"),t(),e(4785,"."),t()()()(),i(4786,"tr",16)(4787,"td",17)(4788,"div",24)(4789,"span",25),e(4790," page"),n(4791,"br"),t()()(),i(4792,"td",20)(4793,"code",43),e(4794,"number"),t()(),i(4795,"td",23)(4796,"em")(4797,"strong"),e(4798,"(opcional)"),t()(),i(4799,"p"),e(4800,"Controla a pagina\xE7\xE3o dos dados e recebe valor automaticamente a cada clique no bot\xE3o 'Carregar mais resultados'."),t()()(),i(4801,"tr",16)(4802,"td",17)(4803,"div",24)(4804,"span",25),e(4805," pageSize"),n(4806,"br"),t()()(),i(4807,"td",20)(4808,"code",43),e(4809,"number"),t()(),i(4810,"td",23)(4811,"em")(4812,"strong"),e(4813,"(opcional)"),t()(),i(4814,"p"),e(4815,"Quantidade de itens retornados cada vez que o servi\xE7o \xE9 chamado, por padr\xE3o \xE9 10."),t()()()(),i(4816,"h4",41)(4817,"code",5),e(4818,"PoLookupLiterals"),t()(),i(4819,"div",2)(4820,"p"),e(4821,"Interface para defini\xE7\xE3o das literais usadas no "),i(4822,"code"),e(4823,"po-lookup"),t(),e(4824,"."),t()(),i(4825,"h4",12),e(4826,"Propriedades"),t(),i(4827,"table",13)(4828,"tr",14)(4829,"th",15),e(4830,"Nome"),t(),i(4831,"th",15),e(4832,"Tipo"),t(),i(4833,"th",15),e(4834,"Descri\xE7\xE3o"),t()(),i(4835,"tr",16)(4836,"td",17)(4837,"div",24)(4838,"span",25),e(4839," clean"),n(4840,"br"),t()()(),i(4841,"td",20)(4842,"code",26),e(4843,"string"),t()(),i(4844,"td",23)(4845,"em")(4846,"strong"),e(4847,"(opcional)"),t()(),i(4848,"p"),e(4849,"Texto usado no leitor de tela para acessibilidade. Aplica-se ao \xEDcone de limpar."),t()()(),i(4850,"tr",16)(4851,"td",17)(4852,"div",24)(4853,"span",25),e(4854," modalAdvancedSearch"),n(4855,"br"),t()()(),i(4856,"td",20)(4857,"code",26),e(4858,"string"),t()(),i(4859,"td",23)(4860,"em")(4861,"strong"),e(4862,"(opcional)"),t()(),i(4863,"p"),e(4864,"Texto do link de busca avan\xE7ada."),t(),i(4865,"p"),e(4866,`Importante
Caso seja passado uma literal muito comprida poder\xE1 quebrar o layout.`),t()()(),i(4867,"tr",16)(4868,"td",17)(4869,"div",24)(4870,"span",25),e(4871," modalAdvancedSearchPrimaryActionLabel"),n(4872,"br"),t()()(),i(4873,"td",20)(4874,"code",26),e(4875,"string"),t()(),i(4876,"td",23)(4877,"em")(4878,"strong"),e(4879,"(opcional)"),t()(),i(4880,"p"),e(4881,"Texto exibido no label do bot\xE3o de a\xE7\xE3o prim\xE1ria da modal de busca avan\xE7ada."),t()()(),i(4882,"tr",16)(4883,"td",17)(4884,"div",24)(4885,"span",25),e(4886," modalAdvancedSearchSecondaryActionLabel"),n(4887,"br"),t()()(),i(4888,"td",20)(4889,"code",26),e(4890,"string"),t()(),i(4891,"td",23)(4892,"em")(4893,"strong"),e(4894,"(opcional)"),t()(),i(4895,"p"),e(4896,"Texto exibido no label do bot\xE3o de a\xE7\xE3o secund\xE1ria da modal de busca avan\xE7ada."),t()()(),i(4897,"tr",16)(4898,"td",17)(4899,"div",24)(4900,"span",25),e(4901," modalAdvancedSearchTitle"),n(4902,"br"),t()()(),i(4903,"td",20)(4904,"code",26),e(4905,"string"),t()(),i(4906,"td",23)(4907,"em")(4908,"strong"),e(4909,"(opcional)"),t()(),i(4910,"p"),e(4911,"Texto exibido no t\xEDtulo da modal de busca avan\xE7ada."),t()()(),i(4912,"tr",16)(4913,"td",17)(4914,"div",24)(4915,"span",25),e(4916," modalDisclaimerGroupTitle"),n(4917,"br"),t()()(),i(4918,"td",20)(4919,"code",26),e(4920,"string"),t()(),i(4921,"td",23)(4922,"em")(4923,"strong"),e(4924,"(opcional)"),t()(),i(4925,"p"),e(4926,"Texto exibido no t\xEDtulo do disclaimer."),t()()(),i(4927,"tr",16)(4928,"td",17)(4929,"div",24)(4930,"span",25),e(4931," modalPlaceholder"),n(4932,"br"),t()()(),i(4933,"td",20)(4934,"code",26),e(4935,"string"),t()(),i(4936,"td",23)(4937,"em")(4938,"strong"),e(4939,"(opcional)"),t()(),i(4940,"p"),e(4941,"Texto exibido no placeholder do input da modal."),t()()(),i(4942,"tr",16)(4943,"td",17)(4944,"div",24)(4945,"span",25),e(4946," modalPrimaryActionLabel"),n(4947,"br"),t()()(),i(4948,"td",20)(4949,"code",26),e(4950,"string"),t()(),i(4951,"td",23)(4952,"em")(4953,"strong"),e(4954,"(opcional)"),t()(),i(4955,"p"),e(4956,"Texto exibido no label do bot\xE3o de a\xE7\xE3o prim\xE1ria da modal."),t()()(),i(4957,"tr",16)(4958,"td",17)(4959,"div",24)(4960,"span",25),e(4961," modalSecondaryActionLabel"),n(4962,"br"),t()()(),i(4963,"td",20)(4964,"code",26),e(4965,"string"),t()(),i(4966,"td",23)(4967,"em")(4968,"strong"),e(4969,"(opcional)"),t()(),i(4970,"p"),e(4971,"Texto exibido no label do bot\xE3o de a\xE7\xE3o secund\xE1ria da modal."),t()()(),i(4972,"tr",16)(4973,"td",17)(4974,"div",24)(4975,"span",25),e(4976," modalTableLoadMoreData"),n(4977,"br"),t()()(),i(4978,"td",20)(4979,"code",26),e(4980,"string"),t()(),i(4981,"td",23)(4982,"em")(4983,"strong"),e(4984,"(opcional)"),t()(),i(4985,"p"),e(4986,"Label do "),i(4987,"code"),e(4988,"button"),t(),e(4989," que deve carregar mais resultados na tabela, ou seja, exibir mais itens."),t()()(),i(4990,"tr",16)(4991,"td",17)(4992,"div",24)(4993,"span",25),e(4994," modalTableLoadingData"),n(4995,"br"),t()()(),i(4996,"td",20)(4997,"code",26),e(4998,"string"),t()(),i(4999,"td",23)(5e3,"em")(5001,"strong"),e(5002,"(opcional)"),t()(),i(5003,"p"),e(5004,"Texto exibido enquanto uma requisi\xE7\xE3o est\xE1 sendo executada para carregar dados na tabela."),t()()(),i(5005,"tr",16)(5006,"td",17)(5007,"div",24)(5008,"span",25),e(5009," modalTableNoColumns"),n(5010,"br"),t()()(),i(5011,"td",20)(5012,"code",26),e(5013,"string"),t()(),i(5014,"td",23)(5015,"em")(5016,"strong"),e(5017,"(opcional)"),t()(),i(5018,"p"),e(5019,"Texto exibido quando n\xE3o existem colunas definidas para a tabela."),t()()(),i(5020,"tr",16)(5021,"td",17)(5022,"div",24)(5023,"span",25),e(5024," modalTableNoData"),n(5025,"br"),t()()(),i(5026,"td",20)(5027,"code",26),e(5028,"string"),t()(),i(5029,"td",23)(5030,"em")(5031,"strong"),e(5032,"(opcional)"),t()(),i(5033,"p"),e(5034,"Texto exibido quando n\xE3o existem itens para serem exibidos na tabela."),t()()(),i(5035,"tr",16)(5036,"td",17)(5037,"div",24)(5038,"span",25),e(5039," modalTitle"),n(5040,"br"),t()()(),i(5041,"td",20)(5042,"code",26),e(5043,"string"),t()(),i(5044,"td",23)(5045,"em")(5046,"strong"),e(5047,"(opcional)"),t()(),i(5048,"p"),e(5049,"Texto exibido no t\xEDtulo da modal."),t()()(),i(5050,"tr",16)(5051,"td",17)(5052,"div",24)(5053,"span",25),e(5054," search"),n(5055,"br"),t()()(),i(5056,"td",20)(5057,"code",26),e(5058,"string"),t()(),i(5059,"td",23)(5060,"em")(5061,"strong"),e(5062,"(opcional)"),t()(),i(5063,"p"),e(5064,"Texto usado no leitor de tela para acessibilidade. Aplica-se ao \xEDcone de pesquisa."),t()()()(),i(5065,"h4",41)(5066,"code",5),e(5067,"PoLookupResponseApi"),t()(),i(5068,"div",2)(5069,"p"),e(5070,"Interface que representa a estrutura de resposta de uma cole\xE7\xE3o de itens. "),t()(),i(5071,"h4",12),e(5072,"Propriedades"),t(),i(5073,"table",13)(5074,"tr",14)(5075,"th",15),e(5076,"Nome"),t(),i(5077,"th",15),e(5078,"Tipo"),t(),i(5079,"th",15),e(5080,"Descri\xE7\xE3o"),t()(),i(5081,"tr",16)(5082,"td",17)(5083,"div",24)(5084,"span",25),e(5085," hasNext"),n(5086,"br"),t()()(),i(5087,"td",20)(5088,"code",28),e(5089,"boolean"),t()(),i(5090,"td",23)(5091,"p"),e(5092,"Indica se existe uma pr\xF3xima p\xE1gina com mais registros para aquela cole\xE7\xE3o de itens."),t()()(),i(5093,"tr",16)(5094,"td",17)(5095,"div",24)(5096,"span",25),e(5097," items"),n(5098,"br"),t()()(),i(5099,"td",20)(5100,"code",75),e(5101,"Array<object>"),t()(),i(5102,"td",23)(5103,"p"),e(5104,"Lista de itens retornados."),t()()()()())},dependencies:[y],encapsulation:2})}return a})();var Re=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=6;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,l){this.route=r,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let l=r.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||a)(f(he),f(fe))};static \u0275cmp=S({type:a,selectors:[["ng-component"]],standalone:!1,decls:11,vars:4,consts:[["p-title","Lookup",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,o){l&1&&(i(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),x("p-click",function(){return o.changeTab("doc")}),n(3,"sample-po-lookup-doc"),t(),i(4,"po-tab",3),x("p-click",function(){return o.changeTab("web")}),n(5,"sample-po-lookup-basic-view")(6,"sample-po-lookup-labs-view")(7,"sample-po-lookup-hero-view")(8,"sample-po-lookup-hero-reactive-form-view")(9,"sample-po-lookup-sw-films-view")(10,"sample-po-lookup-multiple-view"),t()()()),l&2&&(c("p-actions",o.actions),d(2),c("p-active",o.activeTab==="doc"),d(2),c("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"))},dependencies:[Le,C,k,qe,_e,Ae,Ie,je,Ne,Be],encapsulation:2})}return a})();var St=[{path:"",component:Re}],We=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=J({type:a});static \u0275inj=Q({imports:[le.forChild(St),le]})}return a})();var mi=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=J({type:a});static \u0275inj=Q({imports:[Fe,We]})}return a})();export{mi as DocPoLookupModule};
