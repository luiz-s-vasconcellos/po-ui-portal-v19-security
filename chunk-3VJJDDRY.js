import{$ as J,$a as w,$d as k,A as I,Bd as N,Cd as Pe,Ec as X,F as c,Fa as ue,Fd as B,G as E,Ga as e,Ia as L,Ka as b,Kb as ae,La as g,Lb as _,Ma as v,Mb as j,Na as D,Nb as K,Oa as U,Ob as A,Pa as F,Pb as z,Pc as Y,Rd as Le,Sb as be,T as d,Tb as ge,Tc as Ce,U as f,Ua as ce,Va as Ee,Vb as ve,Vc as Z,Wb as he,Yb as fe,Zb as le,_ as S,_d as C,a as G,bb as xe,c as me,ea as pe,gd as ke,h as ne,ha as u,hb as Se,jd as ee,ka as P,na as i,oa as t,pa as n,pb as V,pd as ye,q as de,sd as q,ta as $,te as y,ua as x,ue as Fe,va as se,vc as H,x as O,y as Q,za as oe}from"./chunk-Y4SQKOF7.js";var we=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","lookup","p-field-label","label","p-field-value","value","p-filter-service","https://po-sample-api.onrender.com/v1/heroes","p-label","PO Lookup"]],template:function(l,o){l&1&&n(0,"po-lookup",0)},dependencies:[q],encapsulation:2})}return a})();var Ge=a=>({"docs-sample-code-tabs":a}),qe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup Basic"),t(),i(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-basic/sample-po-lookup-basic.component.html"),t(),i(13,"pre",7),e(14,`<po-lookup
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
`),t()()()()(),i(21,"div",10),n(22,"sample-po-lookup-basic"),t(),n(23,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel,""),d(),u("ngClass",F(4,Ge,o.hideSampleCodeTabs)))},dependencies:[w,y,C,k,we],encapsulation:2})}return a})();var T=(()=>{class a{httpClient;url="https://po-sample-api.onrender.com/v1/heroes";constructor(r){this.httpClient=r}getFilteredItems(r){let m=r,{filterParams:l,advancedFilters:o}=m,p=me(m,["filterParams","advancedFilters"]),s=G(G(G({},p),l),o);return this.httpClient.get(this.url,{params:s})}getObjectByValue(r){return this.httpClient.get(`${this.url}/${r}`)}static \u0275fac=function(l){return new(l||a)(I(V))};static \u0275prov=O({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var Te=(()=>{class a{sampleFilterService;additionalHelpTooltip;columns;columnsName;customLiterals;event;fieldFormat;formatField;fieldLabel;fieldValue;filterService;help;label;literals;lookup;placeholder;properties;fieldErrorMessage;advancedFilters;customAdvancedFilters;size;spacing=ke.Medium;columnsOptions=[{value:"id",label:"Id"},{value:"name",label:"Name"},{value:"email",label:"Email"}];fieldLabelOptions=[{value:"label",label:"Label"},...this.columnsOptions];fieldValueOptions=[{value:"value",label:"Value"},...this.columnsOptions];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"infiniteScroll",label:"Infinite Scroll"},{value:"multiple",label:"Multiple"},{value:"autoHeight",label:"Auto Height"},{value:"hideColumnsManager",label:"Hide Columns Manager"},{value:"textWrap",label:"Text Wrap"},{value:"virtualScroll",label:"Virtual Sroll"},{value:"errorLimit",label:"Limit Error Message"}];columnsDefinition={id:{property:"id",label:"Id"},name:{property:"name",label:"Name"},email:{property:"email",label:"Email"}};typeSpacing=[{label:"Small",value:"small"},{label:"Medium",value:"medium"},{label:"Large",value:"large"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];constructor(r){this.sampleFilterService=r}ngOnInit(){this.restore()}changeEvent(r){this.event=r}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals=void 0}}onFieldFormatChange(r){try{this.fieldFormat=JSON.parse(r)}catch{this.fieldFormat=void 0}}changeAdvancedFilters(){try{this.customAdvancedFilters=JSON.parse(this.advancedFilters)}catch{this.customAdvancedFilters=void 0}}restore(){this.additionalHelpTooltip="",this.columnsName=["id","name"],this.customLiterals=void 0,this.updateColumns(),this.fieldLabel="name",this.fieldValue="id",this.fieldFormat=void 0,this.formatField=void 0,this.event=void 0,this.filterService=void 0,this.label=void 0,this.literals=void 0,this.help=void 0,this.lookup=void 0,this.placeholder="",this.properties=[],this.fieldErrorMessage="",this.customAdvancedFilters=[],this.size="medium"}updateColumns(){this.columns=[],this.columnsName.forEach(r=>this.columns.push(this.columnsDefinition[r]))}static \u0275fac=function(l){return new(l||a)(f(T))};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-labs"]],standalone:!1,features:[D([T])],decls:26,vars:51,consts:[["f","ngForm"],["name","lookup",3,"ngModelChange","p-change","p-error","p-keydown","p-selected","ngModel","p-additional-help-tooltip","p-advanced-filters","p-auto-height","p-clean","p-columns","p-disabled","p-field-format","p-field-label","p-filter-service","p-field-value","p-help","p-hide-columns-manager","p-infinite-scroll","p-label","p-literals","p-multiple","p-no-autocomplete","p-optional","p-placeholder","p-required","p-field-error-message","p-show-required","p-size","p-spacing","p-text-wrap","p-virtual-scroll","p-error-limit"],["p-no-border","true","p-no-padding","true"],[1,"po-row"],["p-label","Model",1,"po-md-12",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","columnsName","p-columns","3","p-label","Columns",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","fieldLabel","p-label","Field Label","p-required","",1,"po-md-6","po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","fieldValue","p-label","Field Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","filterService","p-clean","","p-help","https://po-sample-api.onrender.com/v1/people","p-label","Filter Service",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","additionalHelpTooltip","p-clean","","p-label","Additional Help Tooltip",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: { "modalTitle": "Select a register", "modalPrimaryActionLabel": "Select", "modalPlaceholder": "Search Value" }',"p-label","Literals",1,"po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","formatField","p-label","Field Format","p-help",'Ex.: ["id", "name"]',1,"po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","spacing","p-columns","4","p-label","Spacing",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","advancedFilters","p-help",'Ex.: [{"property":"name","divider":"PERSONAL DATA","required":true,"gridColumns":6},{"property":"id","optional":true,"gridColumns":6}]',"p-label","Advanced Filters","p-rows","4",1,"po-md-12","po-lg-12",3,"ngModelChange","p-change","ngModel"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,o){if(l&1){let p=$();i(0,"po-lookup",1),v("ngModelChange",function(m){return c(p),g(o.lookup,m)||(o.lookup=m),E(m)}),x("p-change",function(){return c(p),E(o.changeEvent("p-change"))})("p-error",function(){return c(p),E(o.changeEvent("p-error"))})("p-keydown",function(){return c(p),E(o.changeEvent("p-keydown"))})("p-selected",function(){return c(p),E(o.changeEvent("p-selected"))}),t(),n(1,"hr"),i(2,"po-container",2)(3,"div",3),n(4,"po-info",4)(5,"po-info",5),t()(),n(6,"hr"),i(7,"form",null,0)(9,"po-input",6),v("ngModelChange",function(m){return c(p),g(o.label,m)||(o.label=m),E(m)}),t(),i(10,"po-checkbox-group",7),v("ngModelChange",function(m){return c(p),g(o.columnsName,m)||(o.columnsName=m),E(m)}),x("p-change",function(){return c(p),E(o.updateColumns())}),t(),i(11,"po-select",8),v("ngModelChange",function(m){return c(p),g(o.fieldLabel,m)||(o.fieldLabel=m),E(m)}),t(),i(12,"po-select",9),v("ngModelChange",function(m){return c(p),g(o.fieldValue,m)||(o.fieldValue=m),E(m)}),t(),i(13,"po-input",10),v("ngModelChange",function(m){return c(p),g(o.filterService,m)||(o.filterService=m),E(m)}),t(),i(14,"po-input",11),v("ngModelChange",function(m){return c(p),g(o.fieldErrorMessage,m)||(o.fieldErrorMessage=m),E(m)}),t(),i(15,"po-input",12),v("ngModelChange",function(m){return c(p),g(o.help,m)||(o.help=m),E(m)}),t(),i(16,"po-input",13),v("ngModelChange",function(m){return c(p),g(o.additionalHelpTooltip,m)||(o.additionalHelpTooltip=m),E(m)}),t(),i(17,"po-input",14),v("ngModelChange",function(m){return c(p),g(o.placeholder,m)||(o.placeholder=m),E(m)}),t(),i(18,"po-input",15),v("ngModelChange",function(m){return c(p),g(o.literals,m)||(o.literals=m),E(m)}),x("p-change",function(){return c(p),E(o.changeLiterals())}),t(),i(19,"po-input",16),v("ngModelChange",function(m){return c(p),g(o.formatField,m)||(o.formatField=m),E(m)}),x("p-change",function(m){return c(p),E(o.onFieldFormatChange(m))}),t(),i(20,"po-checkbox-group",17),v("ngModelChange",function(m){return c(p),g(o.properties,m)||(o.properties=m),E(m)}),t(),i(21,"po-radio-group",18),v("ngModelChange",function(m){return c(p),g(o.spacing,m)||(o.spacing=m),E(m)}),t(),i(22,"po-radio-group",19),v("ngModelChange",function(m){return c(p),g(o.size,m)||(o.size=m),E(m)}),t(),i(23,"po-textarea",20),v("ngModelChange",function(m){return c(p),g(o.advancedFilters,m)||(o.advancedFilters=m),E(m)}),x("p-change",function(){return c(p),E(o.changeAdvancedFilters())}),t(),i(24,"div",3)(25,"po-button",21),x("p-click",function(){return c(p),E(o.restore())}),t()()()}l&2&&(b("ngModel",o.lookup),u("p-additional-help-tooltip",o.additionalHelpTooltip)("p-advanced-filters",o.customAdvancedFilters)("p-auto-height",o.properties.includes("autoHeight"))("p-clean",o.properties.includes("clean"))("p-columns",o.columns)("p-disabled",o.properties.includes("disabled"))("p-field-format",o.fieldFormat)("p-field-label",o.fieldLabel)("p-filter-service",o.filterService||o.sampleFilterService)("p-field-value",o.fieldValue)("p-help",o.help)("p-hide-columns-manager",o.properties.includes("hideColumnsManager"))("p-infinite-scroll",o.properties.includes("infiniteScroll"))("p-label",o.label)("p-literals",o.customLiterals)("p-multiple",o.properties.includes("multiple"))("p-no-autocomplete",o.properties.includes("noAutocomplete"))("p-optional",o.properties.includes("optional"))("p-placeholder",o.placeholder)("p-required",o.properties.includes("required"))("p-field-error-message",o.fieldErrorMessage)("p-show-required",o.properties.includes("showRequired"))("p-size",o.size)("p-spacing",o.spacing)("p-text-wrap",o.properties.includes("textWrap"))("p-virtual-scroll",o.properties.includes("virtualScroll"))("p-error-limit",o.properties==null?null:o.properties.includes("errorLimit")),d(4),u("p-value",o.lookup),d(),u("p-value",o.event),d(4),b("ngModel",o.label),d(),b("ngModel",o.columnsName),u("p-options",o.columnsOptions),d(),b("ngModel",o.fieldLabel),u("p-options",o.fieldLabelOptions),d(),b("ngModel",o.fieldValue),u("p-options",o.fieldValueOptions),d(),b("ngModel",o.filterService),d(),b("ngModel",o.fieldErrorMessage),d(),b("ngModel",o.help),d(),b("ngModel",o.additionalHelpTooltip),d(),b("ngModel",o.placeholder),d(),b("ngModel",o.literals),d(),b("ngModel",o.formatField),d(),b("ngModel",o.properties),u("p-options",o.propertiesOptions),d(),b("ngModel",o.spacing),u("p-options",o.typeSpacing),d(),b("ngModel",o.size),u("p-options",o.sizeOptions),d(),b("ngModel",o.advancedFilters))},dependencies:[z,_,j,A,K,H,Y,Ce,Z,ye,q,N,Pe,B],encapsulation:2})}return a})();var $e=a=>({"docs-sample-code-tabs":a}),_e=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-labs-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup Labs"),t(),i(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-labs/sample-po-lookup-labs.component.html"),t(),i(13,"pre",7),e(14,`<po-lookup
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
`),t()()()()(),i(25,"div",10),n(26,"sample-po-lookup-labs"),t(),n(27,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel,""),d(),u("ngClass",F(4,$e,o.hideSampleCodeTabs)))},dependencies:[w,y,C,k,Te],encapsulation:2})}return a})();var Xe=()=>({modalTitle:"Heroes available for mission"}),De=(()=>{class a{service;notification;hero;vehicle;columns=[{property:"nickname",label:"Hero"},{property:"name",label:"Name"}];vehicles=[{label:"Airplane",value:"airplane"},{label:"Boat",value:"boat"},{label:"Car",value:"car"},{label:"Helicopter",value:"helicopter"},{label:"Motorcycle",value:"motorcycle"},{label:"Rocket",value:"rocket"},{label:"Spaceship",value:"spaceship"},{label:"Submarine",value:"submarine"},{label:"Truck",value:"truck"}];advancedFilters=[{property:"nickname",divider:"Hero Informations",optional:!0,gridColumns:6,label:"Hero"},{property:"name",optional:!0,gridColumns:6}];constructor(r,l){this.service=r,this.notification=l}fieldFormat(r){return`${r.nickname} - ${r.label}`}startMission(){this.hero.length%2===0?this.notification.success(`Mission started with hero ${this.hero} ${this.vehicle?"with vehicle: "+this.vehicle:""}.`):this.notification.error(`Choose another hero because ${this.hero} is in other mission.`),this.hero=void 0,this.vehicle=void 0}static \u0275fac=function(l){return new(l||a)(f(T),f(X))};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-hero"]],standalone:!1,features:[D([T])],decls:10,vars:11,consts:[["f","ngForm"],[1,"po-row"],["p-label","New mission found","p-value","Objective: Stop an asteroid collision on Earth",1,"po-lg-6"],["name","hero","p-field-label","label","p-field-value","label","p-help","Select hero for mission","p-label","Hero","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-columns","p-field-format","p-filter-service","p-hide-columns-manager","p-advanced-filters","p-literals"],["name","vehicle","p-help","Select a vehicle for the hero","p-label","Vehicle","p-placeholder","None",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Start Mission",1,"po-md-6",3,"p-click","p-disabled"]],template:function(l,o){if(l&1){let p=$();i(0,"div",1),n(1,"po-info",2),t(),n(2,"hr"),i(3,"form",null,0)(5,"div",1)(6,"po-lookup",3),v("ngModelChange",function(m){return c(p),g(o.hero,m)||(o.hero=m),E(m)}),t(),i(7,"po-select",4),v("ngModelChange",function(m){return c(p),g(o.vehicle,m)||(o.vehicle=m),E(m)}),t()(),i(8,"div",1)(9,"po-button",5),x("p-click",function(){return c(p),E(o.startMission())}),t()()()}if(l&2){let p=ue(4);d(6),b("ngModel",o.hero),u("p-columns",o.columns)("p-field-format",o.fieldFormat)("p-filter-service",o.service)("p-hide-columns-manager",!0)("p-advanced-filters",o.advancedFilters)("p-literals",U(10,Xe)),d(),b("ngModel",o.vehicle),u("p-options",o.vehicles),d(2),u("p-disabled",p.form.invalid||p.form.pending)}},dependencies:[z,_,j,A,K,H,q,N,B],encapsulation:2})}return a})();var Ze=a=>({"docs-sample-code-tabs":a}),Ae=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-hero-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup - Hero"),t(),i(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-hero/sample-po-lookup-hero.component.html"),t(),i(13,"pre",7),e(14,`<div class="po-row">
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
`),t()()()()(),i(25,"div",10),n(26,"sample-po-lookup-hero"),t(),n(27,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel,""),d(),u("ngClass",F(4,Ze,o.hideSampleCodeTabs)))},dependencies:[w,y,C,k,De],encapsulation:2})}return a})();var tt=()=>["nickname","label"],it=()=>({modalTitle:"Heroes available for mission"}),Oe=(()=>{class a{service;notification;formBuilder;formMission;columns=[{property:"nickname",label:"Hero"},{property:"name",label:"Name"}];vehicles=[{label:"Airplane",value:"airplane"},{label:"Boat",value:"boat"},{label:"Car",value:"car"},{label:"Helicopter",value:"helicopter"},{label:"Motorcycle",value:"motorcycle"},{label:"Rocket",value:"rocket"},{label:"Spaceship",value:"spaceship"},{label:"Submarine",value:"submarine"},{label:"Truck",value:"truck"}];constructor(r,l,o){this.service=r,this.notification=l,this.formBuilder=o}ngOnInit(){this.formMission=this.formBuilder.group({hero:[null,ae.required],vehicle:[null,ae.required]})}fieldFormat(r){return`${r.nickname} - ${r.label}`}startMission(){let r=this.formMission.get("hero").value,l=this.formMission.get("vehicle").value;r.length%2===0?this.notification.success(`Mission started with hero ${r} ${l?"with vehicle: "+l:""}.`):this.notification.error(`Choose another hero because ${r} is in other mission.`),this.formMission.reset()}static \u0275fac=function(l){return new(l||a)(f(T),f(X),f(ve))};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-hero-reactive-form"]],standalone:!1,features:[D([T])],decls:9,vars:9,consts:[[1,"po-row"],["p-label","New mission found","p-value","Objective: Stop an asteroid collision on Earth",1,"po-lg-6"],[3,"formGroup"],["name","hero","formControlName","hero","p-field-label","label","p-field-value","label","p-help","Select hero for mission","p-label","Hero","p-required","",1,"po-md-6",3,"p-columns","p-field-format","p-filter-service","p-literals"],["name","vehicle","formControlName","vehicle","p-help","Select a vehicle for the hero","p-label","Vehicle","p-placeholder","None",1,"po-md-6",3,"p-options"],["p-label","Start Mission",1,"po-md-6",3,"p-click","p-disabled"]],template:function(l,o){l&1&&(i(0,"div",0),n(1,"po-info",1),t(),n(2,"hr"),i(3,"form",2)(4,"div",0),n(5,"po-lookup",3)(6,"po-select",4),t(),i(7,"div",0)(8,"po-button",5),x("p-click",function(){return o.startMission()}),t()()()),l&2&&(d(3),u("formGroup",o.formMission),d(2),u("p-columns",o.columns)("p-field-format",U(7,tt))("p-filter-service",o.service)("p-literals",U(8,it)),d(),u("p-options",o.vehicles),d(2),u("p-disabled",o.formMission.invalid||o.formMission.pending))},dependencies:[z,_,j,be,ge,H,q,N,B],encapsulation:2})}return a})();var ot=a=>({"docs-sample-code-tabs":a}),Ie=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-hero-reactive-form-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup - Hero Reactive Form"),t(),i(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-hero-reactive-form/sample-po-lookup-hero-reactive-form.component.html"),t(),i(13,"pre",7),e(14,`<div class="po-row">
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
`),t()()()()(),i(25,"div",10),n(26,"sample-po-lookup-hero-reactive-form"),t(),n(27,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel,""),d(),u("ngClass",F(4,ot,o.hideSampleCodeTabs)))},dependencies:[w,y,C,k,Oe],encapsulation:2})}return a})();var ie=(()=>{class a{http;baseUrl="https://swapi.dev/api";filmsUrl="https://swapi.dev/api/films/";constructor(r){this.http=r}getFilms(){return this.http.get(this.filmsUrl)}getFilteredItems({filter:r,page:l,filterParams:o}){let p={page:l.toString()};return r&&(p.search=r),this.http.get(`${this.baseUrl}/${o}`,{params:p}).pipe(ne(s=>({items:s.results,hasNext:!!s.next})))}getObjectByValue(r,l){return this.http.get(`${this.baseUrl}/${l}/?search=${r}`).pipe(ne(o=>o.results[0]))}static \u0275fac=function(l){return new(l||a)(I(V))};static \u0275prov=O({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function rt(a,bt){if(a&1&&(i(0,"div",0),n(1,"po-table",4),t()),a&2){let r=se();d(),u("p-columns",r.filmColumns)("p-items",r.filmItemsFiltered)("p-sort",!0)("p-hide-table-search",!1)}}var Ve=(()=>{class a{filterService;entity;filmItemsFiltered;filterParams="people";characterColumns=[{property:"name",label:"Name"},{property:"gender",label:"Gender"},{property:"height",label:"Height"},{property:"mass",label:"Mass"}];entities=[{label:"Character",value:"people"},{label:"Planet",value:"planets"},{label:"Starship",value:"starships"}];filmColumns=[{property:"episode_id",label:"Episode id"},{property:"title",label:"Title"},{property:"director",label:"Director"},{property:"producer",label:"Producer"},{property:"release_date",label:"Release date",type:"date"}];planetsColumns=[{property:"name",label:"Name"},{property:"diameter",label:"Diameter"},{property:"population",label:"Population"},{property:"climate",label:"Climate"}];starshipsColumns=[{property:"name",label:"Name"},{property:"passengers",label:"Passengers"},{property:"max_atmosphering_speed",label:"Max Speed"},{property:"consumables",label:"Consumables"}];filmItems;constructor(r){this.filterService=r}get entityColumns(){return this.getEntityColumns(this.filterParams)}get entityLabel(){return this.getLabelOfEntity(this.filterParams)}ngOnInit(){this.filterService.getFilms().subscribe(r=>{this.filmItems=r.results})}onSelected(r){this.filterService.getObjectByValue(r.name,this.filterParams).subscribe(l=>{this.filmItemsFiltered=this.filmItems.filter(o=>l?.films.includes(o.url))},l=>console.error(l))}getEntityColumns(r){switch(r){case"people":return this.characterColumns;case"planets":return this.planetsColumns;case"starships":return this.starshipsColumns}}getLabelOfEntity(r){switch(r){case"people":return"character";case"planets":return"planet";case"starships":return"starship"}}static \u0275fac=function(l){return new(l||a)(f(ie))};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-sw-films"]],standalone:!1,features:[D([ie])],decls:7,vars:14,consts:[[1,"po-row"],["name","filterParams","p-label","Choose the entity of SW to search",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","entity","p-field-label","name","p-field-value","name",1,"po-md-12",3,"ngModelChange","p-selected","ngModel","p-help","p-label","p-columns","p-filter-params","p-filter-service","p-infinite-scroll"],["class","po-row",4,"ngIf"],[1,"po-sm-12",3,"p-columns","p-items","p-sort","p-hide-table-search"]],template:function(l,o){l&1&&(i(0,"div",0)(1,"po-radio-group",1),v("ngModelChange",function(s){return g(o.filterParams,s)||(o.filterParams=s),s}),t()(),n(2,"hr"),i(3,"div",0)(4,"po-lookup",2),ce(5,"titlecase"),v("ngModelChange",function(s){return g(o.entity,s)||(o.entity=s),s}),x("p-selected",function(s){return o.onSelected(s)}),t()(),pe(6,rt,2,4,"div",3)),l&2&&(d(),b("ngModel",o.filterParams),u("p-options",o.entities),d(3),oe("p-help","Select a ",o.entityLabel," to see the list of movies in which it participated"),oe("p-label","",Ee(5,12,o.entityLabel)," of Star Wars"),b("ngModel",o.entity),u("p-columns",o.entityColumns)("p-filter-params",o.filterParams)("p-filter-service",o.filterService)("p-infinite-scroll",!0),d(2),u("ngIf",o.filmItemsFiltered&&o.entity))},dependencies:[xe,_,A,Z,q,ee,Se],encapsulation:2})}return a})();var dt=a=>({"docs-sample-code-tabs":a}),je=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-sw-films-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup - Star Wars films"),t(),i(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-sw-films/sample-po-lookup-sw-films.component.html"),t(),i(13,"pre",7),e(14,`<div class="po-row">
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
`),t()()()()(),i(25,"div",10),n(26,"sample-po-lookup-sw-films"),t(),n(27,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel,""),d(),u("ngClass",F(4,dt,o.hideSampleCodeTabs)))},dependencies:[w,y,C,k,Ve],encapsulation:2})}return a})();var ze=(()=>{class a{http;constructor(r){this.http=r}getHeroes(r){let l=r?.length?r.toString():r;return this.http.get(`https://po-sample-api.onrender.com/v1/heroes?value=${l}`).pipe(de("items"))}static \u0275fac=function(l){return new(l||a)(I(V))};static \u0275prov=O({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var He=(()=>{class a{service;loading=!1;heroes;multiLookup=[1495831666871,1405833068599];columns=[{property:"value",label:"id"},{property:"label",label:"Name"}];constructor(r){this.service=r}changeOptions(r){this.loading=!0,this.service.getHeroes(r).subscribe(l=>{this.heroes=l},l=>console.error(l),()=>this.loading=!1)}openLink(r){window.open(`http://google.com/search?q=${r}`,"_blank")}static \u0275fac=function(l){return new(l||a)(f(ze))};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-multiple"]],standalone:!1,decls:4,vars:8,consts:[[1,"po-row"],["name","lookup","p-field-label","label","p-field-value","value","p-filter-service","https://po-sample-api.onrender.com/v1/heroes","p-label","Search a Hero",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-multiple"],[1,"po-md-6","po-mt-4"],[3,"p-columns","p-items","p-height","p-striped","p-hide-columns-manager","p-loading"]],template:function(l,o){l&1&&(i(0,"div",0)(1,"po-lookup",1),v("ngModelChange",function(s){return g(o.multiLookup,s)||(o.multiLookup=s),s}),x("p-change",function(s){return o.changeOptions(s)}),t(),i(2,"po-container",2),n(3,"po-table",3),t()()),l&2&&(d(),b("ngModel",o.multiLookup),u("p-multiple",!0),d(2),u("p-columns",o.columns)("p-items",o.heroes)("p-height",220)("p-striped",!0)("p-hide-columns-manager",!0)("p-loading",o.loading))},dependencies:[_,A,Y,q,ee],encapsulation:2})}return a})();var ct=a=>({"docs-sample-code-tabs":a}),Ne=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-multiple-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup - Multiple"),t(),i(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-multiple/sample-po-lookup-multiple.component.html"),t(),i(13,"pre",7),e(14,`<div class="po-row">
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
`),t()()()()(),i(25,"div",10),n(26,"sample-po-lookup-multiple"),t(),n(27,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel,""),d(),u("ngClass",F(4,ct,o.hideSampleCodeTabs)))},dependencies:[w,y,C,k,He],encapsulation:2})}return a})();var Be=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-doc"]],standalone:!1,decls:5106,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://angular.io/guide/form-validation#creating-asynchronous-validators"],["href","https://po-ui.io/guides/api"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","Array<PoLookupAdvancedFilter>"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Array<PoLookupColumn>"],["pan","",1,"docs-api-property-type","((value)","=>","string)"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","PoLookupFilter"],["href","https://tc39.es/ecma262/#sec-encodeuricomponent-uricomponent"],["pan","",1,"docs-api-property-type","PoLookupLiterals"],["href","/documentation/po-i18n"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoTableColumnSpacing"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","number"],["href","/documentation/po-lookup"],["pan","",1,"docs-api-property-type","PoProgressAction"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","(file:","PoUploadFile)","=>","void"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","PoMultiselectFilterMode"],["pan","",1,"docs-api-property-type","ForceBooleanComponentEnum"],["pan","",1,"docs-api-property-type","ForceOptionComponentEnum"],["pan","",1,"docs-api-property-type","{","[name:","string]:","string"],["pan","",1,"docs-api-property-type","Array<string>;","}"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoDatepickerIsoFormat"],["pan","",1,"docs-api-property-type","PoSwitchLabelPosition"],["pan","",1,"docs-api-property-type","PoMultiselectLiterals"],["pan","",1,"docs-api-property-type","PoComboLiterals"],["pan","",1,"docs-api-property-type","PoDatepickerRangeLiterals"],["pan","",1,"docs-api-property-type","PoUploadLiterals"],["href","documentation/po-i18n"],["pan","",1,"docs-api-property-type","Array<PoSelectOption>"],["pan","",1,"docs-api-property-type","Array<PoMultiselectOption>"],["pan","",1,"docs-api-property-type","Array<PoCheckboxGroupOption>"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type","PoComboFilter"],["pan","",1,"docs-api-property-type","PoMultiselectFilter"],["pan","",1,"docs-api-property-type","PoUploadFileRestrictions"],["pan","",1,"docs-api-property-type","PoDynamicFieldType"],["href","documentation/po-dynamic-form#po-dynamic-form-field-validation"],["pan","",1,"docs-api-property-type"],["pan","",1,"docs-api-property-type","{","[key:","string]:","any;","}"],["pan","",1,"docs-api-property-type","Array<object>"]],template:function(l,o){l&1&&(i(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),i(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
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
Ent\xE3o ser\xE1 necess\xE1rio informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".`),t()(),i(58,"pre")(59,"code"),e(60,`<po-lookup
  [(ngModel)]="pessoa.nome"
  [ngModelOptions]="{standalone: true}">
</po-lookup>
`),t()(),i(61,"h4"),e(62,"Tokens customiz\xE1veis"),t(),i(63,"p"),e(64,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),t(),i(65,"blockquote")(66,"p"),e(67,"Para maiores informa\xE7\xF5es, acesse o guia "),i(68,"a",8),e(69,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(70,"."),t()(),i(71,"table")(72,"thead")(73,"tr")(74,"th"),e(75,"Propriedade"),t(),i(76,"th"),e(77,"Descri\xE7\xE3o"),t(),i(78,"th"),e(79,"Valor Padr\xE3o"),t()()(),i(80,"tbody")(81,"tr")(82,"td")(83,"strong"),e(84,"Default Values"),t()(),n(85,"td")(86,"td"),t(),i(87,"tr")(88,"td")(89,"code"),e(90,"--font-family"),t()(),i(91,"td"),e(92,"Fam\xEDlia tipogr\xE1fica usada"),t(),i(93,"td")(94,"code"),e(95,"var(--font-family-theme)"),t()()(),i(96,"tr")(97,"td")(98,"code"),e(99,"--font-size"),t()(),i(100,"td"),e(101,"Tamanho da fonte"),t(),i(102,"td")(103,"code"),e(104,"var(--font-size-default)"),t()()(),i(105,"tr")(106,"td")(107,"code"),e(108,"--text-color-placeholder"),t()(),i(109,"td"),e(110,"Cor do texto no placeholder"),t(),i(111,"td")(112,"code"),e(113,"var(--color-neutral-light-30)"),t()()(),i(114,"tr")(115,"td")(116,"code"),e(117,"--color"),t()(),i(118,"td"),e(119,"Cor principal do lookup"),t(),i(120,"td")(121,"code"),e(122,"var(--color-neutral-dark-70)"),t()()(),i(123,"tr")(124,"td")(125,"code"),e(126,"--border-radius"),t()(),i(127,"td"),e(128,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),t(),i(129,"td")(130,"code"),e(131,"var(--border-radius-md)"),t()()(),i(132,"tr")(133,"td")(134,"code"),e(135,"--background"),t()(),i(136,"td"),e(137,"Cor de background"),t(),i(138,"td")(139,"code"),e(140,"var(--color-neutral-light-05)"),t()()(),i(141,"tr")(142,"td")(143,"code"),e(144,"--text-color"),t()(),i(145,"td"),e(146,"Cor do texto"),t(),i(147,"td")(148,"code"),e(149,"var(--color-neutral-dark-90)"),t()()(),i(150,"tr")(151,"td")(152,"code"),e(153,"--color-clear"),t()(),i(154,"td"),e(155,"Cor principal do icone clear"),t(),i(156,"td")(157,"code"),e(158,"var(--color-action-default)"),t()()(),i(159,"tr")(160,"td")(161,"strong"),e(162,"Icon"),t()(),n(163,"td")(164,"td"),t(),i(165,"tr")(166,"td")(167,"code"),e(168,"--color-icon"),t()(),i(169,"td"),e(170,"Cor principal do icone pesquisar"),t(),i(171,"td")(172,"code"),e(173,"var(--color-action-default)"),t()()(),i(174,"tr")(175,"td")(176,"strong"),e(177,"Hover"),t()(),n(178,"td")(179,"td"),t(),i(180,"tr")(181,"td")(182,"code"),e(183,"--color-hover"),t()(),i(184,"td"),e(185,"Cor principal no estado hover"),t(),i(186,"td")(187,"code"),e(188,"var(--color-action-hover)"),t()()(),i(189,"tr")(190,"td")(191,"code"),e(192,"--background-hover"),t()(),i(193,"td"),e(194,"Cor de background no estado hover"),t(),i(195,"td")(196,"code"),e(197,"var(--color-brand-01-lightest)"),t()()(),i(198,"tr")(199,"td")(200,"strong"),e(201,"Focused"),t()(),n(202,"td")(203,"td"),t(),i(204,"tr")(205,"td")(206,"code"),e(207,"--color-focused"),t()(),i(208,"td"),e(209,"Cor principal no estado de focus"),t(),i(210,"td")(211,"code"),e(212,"var(--color-action-default)"),t()()(),i(213,"tr")(214,"td")(215,"code"),e(216,"--outline-color-focused"),t()(),i(217,"td"),e(218,"Cor do outline do estado de focus"),t(),i(219,"td")(220,"code"),e(221,"var(--color-action-focus)"),t()()(),i(222,"tr")(223,"td")(224,"strong"),e(225,"Disabled"),t()(),n(226,"td")(227,"td"),t(),i(228,"tr")(229,"td")(230,"code"),e(231,"--color-disabled"),t()(),i(232,"td"),e(233,"Cor principal no estado disabled"),t(),i(234,"td")(235,"code"),e(236,"var(--color-action-disabled)"),t()()(),i(237,"tr")(238,"td")(239,"code"),e(240,"--background-disabled"),t()(),i(241,"td"),e(242,"Cor de background no estado disabled"),t(),i(243,"td")(244,"code"),e(245,"var(--color-neutral-light-20)"),t()()(),i(246,"tr")(247,"td")(248,"code"),e(249,"--text-color-disabled"),t()(),i(250,"td"),e(251,"Cor do texto quando campo est\xE1 desabilitado"),t(),i(252,"td")(253,"code"),e(254,"var(--color-action-disabled)"),t()()(),i(255,"tr")(256,"td")(257,"strong"),e(258,"Error"),t()(),n(259,"td")(260,"td"),t(),i(261,"tr")(262,"td")(263,"code"),e(264,"--color-error"),t()(),i(265,"td"),e(266,"Cor de background no estado de requerido"),t(),i(267,"td")(268,"code"),e(269,"var(--color-feedback-negative-base)"),t()()()()()(),i(270,"div",9)(271,"h4",10),e(272,"Seletor"),t(),i(273,"pre",11),e(274,`<po-lookup
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
`),t()(),i(708,"p"),e(709,"Caso utilizar ordena\xE7\xE3o, a coluna ordenada ser\xE1 enviada atrav\xE9s do par\xE2metro "),i(710,"code"),e(711,"order"),t(),e(712,", por exemplo:"),t(),i(713,"ul")(714,"li"),e(715,"Coluna decrescente:"),t()(),i(716,"pre")(717,"code"),e(718,`url + ?page=1&pageSize=20&filter=Peter&order=-name
`),t()(),i(719,"ul")(720,"li"),e(721,"Coluna ascendente:"),t()(),i(722,"pre")(723,"code"),e(724,`url + ?page=1&pageSize=20&filter=Peter&order=name
`),t()(),i(725,"p"),e(726,"Se for definido a propriedade "),i(727,"code"),e(728,"p-filter-params"),t(),e(729,`, o mesmo tamb\xE9m ser\xE1 concatenado. Por exemplo, para o
par\xE2metro `),i(730,"code"),e(731,"{ age: 23 }"),t(),e(732," a URL ficaria:"),t(),i(733,"pre")(734,"code"),e(735,`url + ?page=1&pageSize=20&age=23&filter=Peter
`),t()(),i(736,"p"),e(737,"Ao iniciar o campo com valor, os registros ser\xE3o buscados da seguinte forma:"),t(),i(738,"pre")(739,"code"),e(740,`model = 1234;

GET url/1234
`),t()(),i(741,"p"),e(742,"Caso estiver com m\xFAltipla sele\xE7\xE3o habilitada:"),t(),i(743,"pre")(744,"code"),e(745,`model = [1234, 5678]

GET url?\${fieldValue}=1234,5678
`),t()(),i(746,"blockquote")(747,"p"),e(748,"Esta URL deve retornar e receber os dados no padr\xE3o de "),i(749,"a",7),e(750,"API do PO UI"),t(),e(751,` e utiliza os valores
definidos nas propriedades `),i(752,"code"),e(753,"p-field-label"),t(),e(754," e "),i(755,"code"),e(756,"p-field-value"),t(),e(757," para a constru\xE7\xE3o do "),i(758,"code"),e(759,"po-lookup"),t(),e(760,"."),t()(),i(761,"p"),e(762,"Caso o usu\xE1rio digite um valor e pressione a tecla "),i(763,"em"),e(764,"TAB"),t(),e(765,` para realizar a busca de um registro espec\xEDfico, o valor que se
deseja filtrar ser\xE1 codificado utilizando a fun\xE7\xE3o `),i(766,"a",34),e(767,"encodeURIComponent"),t(),e(768,`
e concatenado na URL da seguinte forma:`),t(),i(769,"pre")(770,"code"),e(771,`url/valor%20que%20se%20deseja%20filtrar
`),t()(),i(772,"blockquote")(773,"p"),e(774,"Quando informado um servi\xE7o que implemente a interface "),i(775,"code"),e(776,"PoLookupFilter"),t(),e(777," o tratamento de encoding do valor a ser filtrado ficar\xE1 a cargo do desenvolvedor."),t()()()(),i(778,"tr",16)(779,"td",17)(780,"div",24)(781,"span",25),e(782," p-help"),n(783,"br"),t()()(),i(784,"td",20)(785,"code",26),e(786,"string"),t()(),i(787,"td",22),e(788,"-"),t(),i(789,"td",23)(790,"em")(791,"strong"),e(792,"(opcional)"),t()(),i(793,"p"),e(794,"Texto de apoio do campo."),t()()(),i(795,"tr",16)(796,"td",17)(797,"div",24)(798,"span",25),e(799," p-hide-columns-manager"),n(800,"br"),t()()(),i(801,"td",20)(802,"code",28),e(803,"boolean"),t()(),i(804,"td",22)(805,"p")(806,"code"),e(807,"false"),t()()(),i(808,"td",23)(809,"em")(810,"strong"),e(811,"(opcional)"),t()(),i(812,"p"),e(813,"Permite que o gerenciador de colunas, respons\xE1vel pela defini\xE7\xE3o de quais colunas ser\xE3o exibidas, seja escondido."),t()()(),i(814,"tr",16)(815,"td",17)(816,"div",24)(817,"span",25),e(818," p-infinite-scroll"),n(819,"br"),t()()(),i(820,"td",20)(821,"code",28),e(822,"boolean"),t()(),i(823,"td",22)(824,"p")(825,"code"),e(826,"false"),t()()(),i(827,"td",23)(828,"em")(829,"strong"),e(830,"(opcional)"),t()(),i(831,"p"),e(832,"Ativa a funcionalidade de scroll infinito para a tabela exibida no retorno da consulta."),t()()(),i(833,"tr",16)(834,"td",17)(835,"div",18)(836,"span",19),e(837," (p-keydown)"),n(838,"br"),t()()(),i(839,"td",20)(840,"code",21),e(841,"EventEmitter"),t()(),i(842,"td",22),e(843,"-"),t(),i(844,"td",23)(845,"em")(846,"strong"),e(847,"(opcional)"),t()(),i(848,"p"),e(849,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),i(850,"code"),e(851,"KeyboardEvent"),t(),e(852," com informa\xE7\xF5es sobre a tecla."),t()()(),i(853,"tr",16)(854,"td",17)(855,"div",24)(856,"span",25),e(857," p-label"),n(858,"br"),t()()(),i(859,"td",20)(860,"code",26),e(861,"string"),t()(),i(862,"td",22),e(863,"-"),t(),i(864,"td",23)(865,"em")(866,"strong"),e(867,"(opcional)"),t()(),i(868,"p"),e(869,"Label do campo."),t(),i(870,"blockquote")(871,"p"),e(872,`Quando utilizar esta propriedade o seu valor ser\xE1 utilizado como t\xEDtulo da modal do componente caso n\xE3o tenha
sido definido um `),i(873,"code"),e(874,"modalTitle"),t(),e(875," na propriedade "),i(876,"code"),e(877,"p-literals"),t(),e(878,"."),t()()()(),i(879,"tr",16)(880,"td",17)(881,"div",24)(882,"span",25),e(883," p-literals"),n(884,"br"),t()()(),i(885,"td",20)(886,"code",35),e(887,"PoLookupLiterals"),t()(),i(888,"td",22),e(889,"-"),t(),i(890,"td",23)(891,"p"),e(892,"Objeto com as literais usadas no "),i(893,"code"),e(894,"po-lookup"),t(),e(895,"."),t(),i(896,"p"),e(897,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),t(),i(898,"pre")(899,"code"),e(900,`const customLiterals: PoLookupLiterals = {
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
`),t()(),i(901,"p"),e(902,"Ou passando apenas as literais que deseja customizar:"),t(),i(903,"pre")(904,"code"),e(905,`const customLiterals: PoLookupLiterals = {
  modalPrimaryActionLabel: 'Select'
};
`),t()(),i(906,"p"),e(907,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),t(),i(908,"pre")(909,"code"),e(910,`<po-lookup
  [p-literals]="customLiterals">
</po-lookup>
`),t()(),i(911,"blockquote")(912,"p"),e(913,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),i(914,"a",36)(915,"code"),e(916,"PoI18nService"),t()(),e(917," ou do browser."),t()()()(),i(918,"tr",16)(919,"td",17)(920,"div",24)(921,"span",25),e(922," p-multiple"),n(923,"br"),t()()(),i(924,"td",20)(925,"code",28),e(926,"boolean"),t()(),i(927,"td",22)(928,"p")(929,"code"),e(930,"false"),t()()(),i(931,"td",23)(932,"em")(933,"strong"),e(934,"(opcional)"),t()(),i(935,"p"),e(936,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),t(),i(937,"blockquote")(938,"p"),e(939,"Quando habilitado o valor do campo passar\xE1 a ser uma lista de valores, por exemplo: "),i(940,"code"),e(941,"[ 12345, 67890 ]"),t()()()()(),i(942,"tr",16)(943,"td",17)(944,"div",24)(945,"span",25),e(946," name"),n(947,"br"),t()()(),i(948,"td",20)(949,"code",26),e(950,"string"),t()(),i(951,"td",22),e(952,"-"),t(),i(953,"td",23)(954,"p"),e(955,"Nome e Id do componente."),t()()(),i(956,"tr",16)(957,"td",17)(958,"div",24)(959,"span",25),e(960," p-no-autocomplete"),n(961,"br"),t()()(),i(962,"td",20)(963,"code",28),e(964,"boolean"),t()(),i(965,"td",22)(966,"p")(967,"code"),e(968,"false"),t()()(),i(969,"td",23)(970,"em")(971,"strong"),e(972,"(opcional)"),t()(),i(973,"p"),e(974,"Define a propriedade nativa "),i(975,"code"),e(976,"autocomplete"),t(),e(977," do campo como "),i(978,"code"),e(979,"off"),t(),e(980,"."),t()()(),i(981,"tr",16)(982,"td",17)(983,"div",18)(984,"span",19),e(985," (p-error)"),n(986,"br"),t()()(),i(987,"td",20)(988,"code",21),e(989,"EventEmitter"),t()(),i(990,"td",22),e(991,"-"),t(),i(992,"td",23)(993,"p"),e(994,`Evento ser\xE1 disparado quando ocorrer algum erro na requisi\xE7\xE3o de busca do item.
Ser\xE1 passado por par\xE2metro o objeto de erro retornado.`),t()()(),i(995,"tr",16)(996,"td",17)(997,"div",24)(998,"span",25),e(999," p-optional"),n(1e3,"br"),t()()(),i(1001,"td",20)(1002,"code",28),e(1003,"boolean"),t()(),i(1004,"td",22)(1005,"p")(1006,"code"),e(1007,"false"),t()()(),i(1008,"td",23)(1009,"em")(1010,"strong"),e(1011,"(opcional)"),t()(),i(1012,"p"),e(1013,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),i(1014,"blockquote")(1015,"p"),e(1016,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),i(1017,"ul")(1018,"li"),e(1019,"O campo conter "),i(1020,"code"),e(1021,"p-required"),t(),e(1022,";"),t(),i(1023,"li"),e(1024,"N\xE3o possuir "),i(1025,"code"),e(1026,"p-help"),t(),e(1027," e/ou "),i(1028,"code"),e(1029,"p-label"),t(),e(1030,"."),t()()()(),i(1031,"tr",16)(1032,"td",17)(1033,"div",24)(1034,"span",25),e(1035," p-placeholder"),n(1036,"br"),t()()(),i(1037,"td",20)(1038,"code",26),e(1039,"string"),t()(),i(1040,"td",22),e(1041,"-"),t(),i(1042,"td",23)(1043,"p"),e(1044,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),t()()(),i(1045,"tr",16)(1046,"td",17)(1047,"div",24)(1048,"span",25),e(1049," p-required"),n(1050,"br"),t()()(),i(1051,"td",20)(1052,"code",28),e(1053,"boolean"),t()(),i(1054,"td",22)(1055,"p")(1056,"code"),e(1057,"false"),t()()(),i(1058,"td",23)(1059,"em")(1060,"strong"),e(1061,"(opcional)"),t()(),i(1062,"p"),e(1063,"Define que o campo ser\xE1 obrigat\xF3rio."),t(),i(1064,"blockquote")(1065,"p"),e(1066,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),i(1067,"code"),e(1068,"(p-disabled)"),t(),e(1069,"."),t()()()(),i(1070,"tr",16)(1071,"td",17)(1072,"div",18)(1073,"span",19),e(1074," (p-selected)"),n(1075,"br"),t()()(),i(1076,"td",20)(1077,"code",21),e(1078,"EventEmitter"),t()(),i(1079,"td",22),e(1080,"-"),t(),i(1081,"td",23)(1082,"em")(1083,"strong"),e(1084,"(opcional)"),t()(),i(1085,"p"),e(1086,`Evento ser\xE1 disparado quando ocorrer alguma sele\xE7\xE3o.
Ser\xE1 passado por par\xE2metro o objeto com o valor selecionado.`),t()()(),i(1087,"tr",16)(1088,"td",17)(1089,"div",24)(1090,"span",25),e(1091," p-show-required"),n(1092,"br"),t()()(),i(1093,"td",20)(1094,"code",28),e(1095,"boolean"),t()(),i(1096,"td",22),e(1097,"-"),t(),i(1098,"td",23)(1099,"p"),e(1100,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE9 exibida."),t(),i(1101,"blockquote")(1102,"p"),e(1103,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),i(1104,"ul")(1105,"li"),e(1106,"N\xE3o possuir "),i(1107,"code"),e(1108,"p-help"),t(),e(1109," e/ou "),i(1110,"code"),e(1111,"p-label"),t(),e(1112,"."),t()()()(),i(1113,"tr",16)(1114,"td",17)(1115,"div",24)(1116,"span",25),e(1117," p-size"),n(1118,"br"),t()()(),i(1119,"td",20)(1120,"code",26),e(1121,"string"),t()(),i(1122,"td",22)(1123,"p")(1124,"code"),e(1125,"medium"),t()()(),i(1126,"td",23)(1127,"em")(1128,"strong"),e(1129,"(opcional)"),t()(),i(1130,"p"),e(1131,"Define o tamanho do componente:"),t(),i(1132,"ul")(1133,"li")(1134,"code"),e(1135,"small"),t(),e(1136,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),i(1137,"li")(1138,"code"),e(1139,"medium"),t(),e(1140,": altura do input como 44px."),t()(),i(1141,"blockquote")(1142,"p"),e(1143,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(1144,"code"),e(1145,"medium"),t(),e(1146,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(1147,"a",37),e(1148,"po-theme"),t(),e(1149,"."),t()()()(),i(1150,"tr",16)(1151,"td",17)(1152,"div",24)(1153,"span",25),e(1154," p-spacing"),n(1155,"br"),t()()(),i(1156,"td",20)(1157,"code",38),e(1158,"PoTableColumnSpacing"),t()(),i(1159,"td",22)(1160,"p")(1161,"code"),e(1162,"medium"),t()()(),i(1163,"td",23)(1164,"em")(1165,"strong"),e(1166,"(opcional)"),t()(),i(1167,"p"),e(1168,"Respons\xE1vel por aplicar espa\xE7amento nas colunas da tabela contida no lookup."),t(),i(1169,"p"),e(1170,"Deve receber um dos valores do enum "),i(1171,"code"),e(1172,"PoTableColumnSpacing"),t(),e(1173,"."),t()()(),i(1174,"tr",16)(1175,"td",17)(1176,"div",24)(1177,"span",25),e(1178," p-text-wrap"),n(1179,"br"),t()()(),i(1180,"td",20)(1181,"code",28),e(1182,"boolean"),t()(),i(1183,"td",22)(1184,"p")(1185,"code"),e(1186,"false"),t()()(),i(1187,"td",23)(1188,"em")(1189,"strong"),e(1190,"(opcional)"),t()(),i(1191,"p"),e(1192,`Habilita ou desabilita a quebra autom\xE1tica de texto. Quando ativada, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t(),i(1193,"p"),e(1194,"Esta propriedade aplica-se ao texto contido nas c\xE9lulas da tabela."),t(),i(1195,"blockquote")(1196,"p"),e(1197,"Incompat\xEDvel com "),i(1198,"code"),e(1199,"virtual-scroll"),t(),e(1200,", que requer altura fixa nas linhas."),t()()()(),i(1201,"tr",16)(1202,"td",17)(1203,"div",24)(1204,"span",25),e(1205," p-virtual-scroll"),n(1206,"br"),t()()(),i(1207,"td",20)(1208,"code",28),e(1209,"boolean"),t()(),i(1210,"td",22)(1211,"p")(1212,"code"),e(1213,"true"),t()()(),i(1214,"td",23)(1215,"em")(1216,"strong"),e(1217,"(opcional)"),t()(),i(1218,"p"),e(1219,"Habilita o "),i(1220,"code"),e(1221,"virtual-scroll"),t(),e(1222,` na tabela para melhorar a performance com grandes volumes de dados.
A altura da tabela j\xE1 \xE9 pr\xE9-definida, portanto o `),i(1223,"code"),e(1224,"virtual-scroll"),t(),e(1225," ser\xE1 ativado automaticamente."),t(),i(1226,"blockquote")(1227,"p"),e(1228,"Incompat\xEDvel com "),i(1229,"code"),e(1230,"p-text-wrap"),t(),e(1231," e "),i(1232,"code"),e(1233,"master-detail"),t(),e(1234,", pois o "),i(1235,"code"),e(1236,"virtual-scroll"),t(),e(1237," exige altura fixa nas linhas."),t()()()()(),i(1238,"h3",12),e(1239,"M\xE9todos"),t(),i(1240,"table",39)(1241,"tr",16)(1242,"th",40)(1243,"div",24)(1244,"h4")(1245,"span",25),e(1246," focus "),t()()()()(),i(1247,"tr",23)(1248,"td",23)(1249,"p"),e(1250,"Fun\xE7\xE3o que atribui foco ao componente."),t(),i(1251,"p"),e(1252,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),i(1253,"pre")(1254,"code"),e(1255,`import { PoLookupComponent } from '@po-ui/ng-components';

...

@ViewChild(PoLookupComponent, { static: true }) lookup: PoLookupComponent;

focusLookup() {
  this.lookup.focus();
}
`),t()()()()(),n(1256,"br"),i(1257,"table",39)(1258,"tr",16)(1259,"th",40)(1260,"div",24)(1261,"h4")(1262,"span",25),e(1263," showAdditionalHelp "),t()()()()(),i(1264,"tr",23)(1265,"td",23)(1266,"p"),e(1267,"M\xE9todo que exibe "),i(1268,"code"),e(1269,"p-additionalHelpTooltip"),t(),e(1270," ou executa a a\xE7\xE3o definida em "),i(1271,"code"),e(1272,"p-additionalHelp"),t(),e(1273,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),i(1274,"code"),e(1275,"p-keydown"),t(),e(1276,"."),t(),i(1277,"pre")(1278,"code"),e(1279,`<po-lookup
 #lookup
 ...
 p-additional-help-tooltip="Mensagem de ajuda complementar"
 (p-keydown)="onKeyDown($event, lookup)"
></po-lookup>
`),t()(),i(1280,"pre")(1281,"code"),e(1282,`...
onKeyDown(event: KeyboardEvent, inp: PoLookupComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),n(1283,"br"),i(1284,"h3"),e(1285,"Interfaces"),t(),i(1286,"h4",41)(1287,"code",5),e(1288,"PoLookupAdvancedFilter"),t()(),i(1289,"div",2)(1290,"p"),e(1291," Interface para defini\xE7\xE3o das propriedades dos campos de entrada que ser\xE3o criados dinamicamente. "),t()(),i(1292,"h4",12),e(1293,"Propriedades"),t(),i(1294,"table",13)(1295,"tr",14)(1296,"th",15),e(1297,"Nome"),t(),i(1298,"th",15),e(1299,"Tipo"),t(),i(1300,"th",15),e(1301,"Descri\xE7\xE3o"),t()(),i(1302,"tr",16)(1303,"td",17)(1304,"div",24)(1305,"span",25),e(1306," additionalHelp"),n(1307,"br"),t()()(),i(1308,"td",20)(1309,"code",42),e(1310,"Function"),t()(),i(1311,"td",23)(1312,"em")(1313,"strong"),e(1314,"(opcional)"),t()(),i(1315,"p"),e(1316,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),i(1317,"code"),e(1318,"p-help"),t(),e(1319,"."),t()()(),i(1320,"tr",16)(1321,"td",17)(1322,"div",24)(1323,"span",25),e(1324," additionalHelpTooltip"),n(1325,"br"),t()()(),i(1326,"td",20)(1327,"code",26),e(1328,"string"),t()(),i(1329,"td",23)(1330,"em")(1331,"strong"),e(1332,"(opcional)"),t()(),i(1333,"p"),e(1334,"Exibe um \xEDcone de ajuda adicional ao "),i(1335,"code"),e(1336,"p-help"),t(),e(1337,`, com o texto desta propriedade no tooltip.
Se o evento `),i(1338,"code"),e(1339,"p-additional-help"),t(),e(1340,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),i(1341,"strong"),e(1342,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()()()(),i(1343,"tr",16)(1344,"td",17)(1345,"div",24)(1346,"span",25),e(1347," advancedFilters"),n(1348,"br"),t()()(),i(1349,"td",20)(1350,"code",27),e(1351,"Array<PoLookupAdvancedFilter>"),t()(),i(1352,"td",23)(1353,"em")(1354,"strong"),e(1355,"(opcional)"),t()(),i(1356,"p"),e(1357,"Lista de objetos dos campos que ser\xE3o criados na busca avan\xE7ada."),t(),i(1358,"blockquote")(1359,"p"),e(1360,"Caso n\xE3o seja passado um objeto ou ent\xE3o ele esteja em branco o link de busca avan\xE7ada ficar\xE1 escondido."),t()(),i(1361,"p"),e(1362,"Exemplo de URL com busca avan\xE7ada:"),t(),i(1363,"p")(1364,"code"),e(1365,"url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro"),t()(),i(1366,"p"),e(1367,"Caso algum par\xE2metro seja uma lista, a concatena\xE7\xE3o \xE9 feita utilizando v\xEDrgula. Exemplo:"),t(),i(1368,"p")(1369,"code"),e(1370,"url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan"),t()()()(),i(1371,"tr",16)(1372,"td",17)(1373,"div",24)(1374,"span",25),e(1375," appendBox"),n(1376,"br"),t()()(),i(1377,"td",20)(1378,"code",28),e(1379,"boolean"),t()(),i(1380,"td",23)(1381,"em")(1382,"strong"),e(1383,"(opcional)"),t()(),i(1384,"p"),e(1385,"Define que o "),i(1386,"code"),e(1387,"listbox"),t(),e(1388," e/ou tooltip ("),i(1389,"code"),e(1390,"p-additional-help-tooltip"),t(),e(1391," e/ou "),i(1392,"code"),e(1393,"p-error-limit"),t(),e(1394,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o \xE9 necess\xE1ria para cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),t(),i(1395,"blockquote")(1396,"p"),e(1397,`O uso dessa propriedade pode acarretar na perda sequencial da tabula\xE7\xE3o da p\xE1gina.
Quando utilizado com `),i(1398,"code"),e(1399,"p-additional-help-tooltip"),t(),e(1400,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),t()()()(),i(1401,"tr",16)(1402,"td",17)(1403,"div",24)(1404,"span",25),e(1405," autoHeight"),n(1406,"br"),t()()(),i(1407,"td",20)(1408,"code",28),e(1409,"boolean"),t()(),i(1410,"td",23)(1411,"em")(1412,"strong"),e(1413,"(opcional)"),t()(),i(1414,"p"),e(1415,"Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis."),t(),i(1416,"p")(1417,"strong"),e(1418,"Componentes compat\xEDveis:"),t(),i(1419,"code"),e(1420,"po-multiselect"),t(),e(1421,", "),i(1422,"code"),e(1423,"po-lookup"),t(),e(1424,"."),t()()(),i(1425,"tr",16)(1426,"td",17)(1427,"div",24)(1428,"span",25),e(1429," autoUpload"),n(1430,"br"),t()()(),i(1431,"td",20)(1432,"code",28),e(1433,"boolean"),t()(),i(1434,"td",23)(1435,"em")(1436,"strong"),e(1437,"(opcional)"),t()(),i(1438,"p"),e(1439,"Define se o envio do arquivo ser\xE1 autom\xE1tico ao selecionar o mesmo."),t(),i(1440,"p")(1441,"strong"),e(1442,"Componente compat\xEDvel"),t(),e(1443,": "),i(1444,"code"),e(1445,"po-upload"),t()()()(),i(1446,"tr",16)(1447,"td",17)(1448,"div",24)(1449,"span",25),e(1450," booleanFalse"),n(1451,"br"),t()()(),i(1452,"td",20)(1453,"code",26),e(1454,"string"),t()(),i(1455,"td",23)(1456,"em")(1457,"strong"),e(1458,"(opcional)"),t()(),i(1459,"p"),e(1460,"Texto exibido quando o valor do componente for "),i(1461,"em"),e(1462,"false"),t(),e(1463,"."),t()()(),i(1464,"tr",16)(1465,"td",17)(1466,"div",24)(1467,"span",25),e(1468," booleanTrue"),n(1469,"br"),t()()(),i(1470,"td",20)(1471,"code",26),e(1472,"string"),t()(),i(1473,"td",23)(1474,"em")(1475,"strong"),e(1476,"(opcional)"),t()(),i(1477,"p"),e(1478,"Texto exibido quando o valor do componente for "),i(1479,"em"),e(1480,"true"),t(),e(1481,"."),t()()(),i(1482,"tr",16)(1483,"td",17)(1484,"div",24)(1485,"span",25),e(1486," changeOnEnter"),n(1487,"br"),t()()(),i(1488,"td",20)(1489,"code",28),e(1490,"boolean"),t()(),i(1491,"td",23)(1492,"em")(1493,"strong"),e(1494,"(opcional)"),t()(),i(1495,"p"),e(1496,"Indica que o evento "),i(1497,"code"),e(1498,"p-change"),t(),e(1499,' s\xF3 ser\xE1 disparado ao clicar ou pressionar a tecla "Enter" sobre uma op\xE7\xE3o selecionada no '),i(1500,"code"),e(1501,"po-combo"),t(),e(1502,"."),t()()(),i(1503,"tr",16)(1504,"td",17)(1505,"div",24)(1506,"span",25),e(1507," changeVisibleColumns"),n(1508,"br"),t()()(),i(1509,"td",20)(1510,"code",42),e(1511,"Function"),t()(),i(1512,"td",23)(1513,"em")(1514,"strong"),e(1515,"(opcional)"),t()(),i(1516,"p"),e(1517,"Evento disparado ao fechar o popover do gerenciador de colunas ap\xF3s alterar as colunas vis\xEDveis."),t(),i(1518,"p"),e(1519,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),t(),i(1520,"p")(1521,"strong"),e(1522,"Componentes compat\xEDveis"),t(),e(1523,": "),i(1524,"code"),e(1525,"po-lookup"),t()()()(),i(1526,"tr",16)(1527,"td",17)(1528,"div",24)(1529,"span",25),e(1530," clean"),n(1531,"br"),t()()(),i(1532,"td",20)(1533,"code",28),e(1534,"boolean"),t()(),i(1535,"td",23)(1536,"em")(1537,"strong"),e(1538,"(opcional)"),t()(),i(1539,"p"),e(1540,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),t(),i(1541,"p")(1542,"strong"),e(1543,"Componentes compat\xEDveis:"),t(),i(1544,"code"),e(1545,"po-datepicker"),t(),e(1546,", "),i(1547,"code"),e(1548,"po-datepicker-range"),t(),e(1549,", "),i(1550,"code"),e(1551,"po-input"),t(),e(1552,", "),i(1553,"code"),e(1554,"po-number"),t(),e(1555,", "),i(1556,"code"),e(1557,"po-decimal"),t(),e(1558,", "),i(1559,"code"),e(1560,"po-combo"),t(),e(1561,", "),i(1562,"code"),e(1563,"po-lookup"),t(),e(1564,", "),i(1565,"code"),e(1566,"po-password"),t()()()(),i(1567,"tr",16)(1568,"td",17)(1569,"div",24)(1570,"span",25),e(1571," columnRestoreManager"),n(1572,"br"),t()()(),i(1573,"td",20)(1574,"code",42),e(1575,"Function"),t()(),i(1576,"td",23)(1577,"em")(1578,"strong"),e(1579,"(opcional)"),t()(),i(1580,"p"),e(1581,"Evento disparado ao clicar no bot\xE3o de restaurar padr\xE3o no gerenciador de colunas."),t(),i(1582,"p"),e(1583,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),t(),i(1584,"p")(1585,"strong"),e(1586,"Componentes compat\xEDveis"),t(),e(1587,": "),i(1588,"code"),e(1589,"po-lookup"),t()()()(),i(1590,"tr",16)(1591,"td",17)(1592,"div",24)(1593,"span",25),e(1594," columns"),n(1595,"br"),t()()(),i(1596,"td",20)(1597,"code",29),e(1598,"Array<PoLookupColumn> "),t(),i(1599,"code",43),e(1600," number"),t()(),i(1601,"td",23)(1602,"em")(1603,"strong"),e(1604,"(opcional)"),t()(),i(1605,"p"),e(1606,"Define as colunas para utiliza\xE7\xE3o da busca avan\xE7ada. Usada somente em conjunto com a propriedade "),i(1607,"code"),e(1608,"searchService"),t(),e(1609,`,
essa propriedade deve receber um array de objetos que implementam a interface `),i(1610,"a",44)(1611,"code"),e(1612,"PoLookupColumn"),t()(),e(1613,"."),t(),i(1614,"blockquote")(1615,"p"),e(1616,"Caso sejam informadas colunas, deve-se obrigatoriamente conter colunas definidas como "),i(1617,"em"),e(1618,"label"),t(),e(1619," e "),i(1620,"em"),e(1621,"value"),t(),e(1622,` para valores
de tela e do model respectivamente.`),t()(),i(1623,"p")(1624,"strong"),e(1625,"Componentes compat\xEDveis:"),t(),i(1626,"code"),e(1627,"po-radio-group"),t(),e(1628,", "),i(1629,"code"),e(1630,"po-lookup"),t(),e(1631,", "),i(1632,"code"),e(1633,"po-checkbox-group"),t(),e(1634,"."),t()()(),i(1635,"tr",16)(1636,"td",17)(1637,"div",24)(1638,"span",25),e(1639," container"),n(1640,"br"),t()()(),i(1641,"td",20)(1642,"code",26),e(1643,"string"),t()(),i(1644,"td",23)(1645,"em")(1646,"strong"),e(1647,"(opcional)"),t()(),i(1648,"p"),e(1649,`Exibir\xE1 um container para todos os campos abaixo dessa propriedade.
Esta propriedade configura o layout dos componentes dynamic-view e dynamic-edit, deixando todos os items dentro de containers`),t(),i(1650,"p"),e(1651,"Est\xE1 propriedade \xE9 do tipo string, o valor que ser\xE1 titulo do contianer"),t()()(),i(1652,"tr",16)(1653,"td",17)(1654,"div",24)(1655,"span",25),e(1656," customAction"),n(1657,"br"),t()()(),i(1658,"td",20)(1659,"code",45),e(1660,"PoProgressAction"),t()(),i(1661,"td",23)(1662,"em")(1663,"strong"),e(1664,"(opcional)"),t()(),i(1665,"p"),e(1666,"Define uma a\xE7\xE3o personalizada no componente "),i(1667,"code"),e(1668,"po-upload"),t(),e(1669,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),t(),i(1670,"p")(1671,"strong"),e(1672,"Componente compat\xEDvel"),t(),e(1673,": "),i(1674,"code"),e(1675,"po-upload"),t(),e(1676,","),t(),i(1677,"p")(1678,"strong"),e(1679,"Exemplo de configura\xE7\xE3o"),t(),e(1680,":"),t(),i(1681,"pre")(1682,"code",46),e(1683,`customAction: {
  label: 'Baixar',
  icon: 'an-download',
  type: 'default',
  visible: true,
  disabled: false
};
`),t()()()(),i(1684,"tr",16)(1685,"td",17)(1686,"div",24)(1687,"span",25),e(1688," customActionClick"),n(1689,"br"),t()()(),i(1690,"td",20)(1691,"code",47),e(1692,"(file: PoUploadFile) => void"),t()(),i(1693,"td",23)(1694,"em")(1695,"strong"),e(1696,"(opcional)"),t()(),i(1697,"p"),e(1698,"Evento emitido ao clicar na a\xE7\xE3o personalizada configurada no "),i(1699,"code"),e(1700,"p-custom-action"),t(),e(1701,"."),t(),i(1702,"p")(1703,"strong"),e(1704,"Componente compat\xEDvel"),t(),e(1705,": "),i(1706,"code"),e(1707,"po-upload"),t(),e(1708,","),t(),i(1709,"p"),e(1710,`Este evento \xE9 emitido quando o bot\xE3o de a\xE7\xE3o personalizada \xE9 clicado na barra de progresso associada a um arquivo.
O arquivo relacionado \xE0 barra de progresso ser\xE1 passado como par\xE2metro do evento, permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),t(),i(1711,"p")(1712,"strong"),e(1713,"Par\xE2metro do evento"),t(),e(1714,":"),t(),i(1715,"ul")(1716,"li")(1717,"code"),e(1718,"file"),t(),e(1719,": O arquivo associado ao bot\xE3o de a\xE7\xE3o. Este objeto \xE9 da classe "),i(1720,"code"),e(1721,"PoUploadFile"),t(),e(1722," e cont\xE9m informa\xE7\xF5es sobre o arquivo, como nome, status e progresso."),t()(),i(1723,"p")(1724,"strong"),e(1725,"Exemplo de uso"),t(),e(1726,":"),t(),i(1727,"pre")(1728,"code",46),e(1729,`customActionClick: (file: PoUploadFile) => {
  console.log('A\xE7\xE3o personalizada clicada para o arquivo:', file.name);
  // L\xF3gica de download ou outra a\xE7\xE3o relacionada ao arquivo
}
`),t()()()(),i(1730,"tr",16)(1731,"td",17)(1732,"div",24)(1733,"span",25),e(1734," debounceTime"),n(1735,"br"),t()()(),i(1736,"td",20)(1737,"code",43),e(1738,"number"),t()(),i(1739,"td",23)(1740,"em")(1741,"strong"),e(1742,"(opcional)"),t()(),i(1743,"p"),e(1744,"Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro ap\xF3s cada pressionamento de tecla. Ser\xE1 utilizada apenas quando houver servi\xE7o ("),i(1745,"code"),e(1746,"p-filter-service"),t(),e(1747,")."),t(),i(1748,"p")(1749,"strong"),e(1750,"Componentes compat\xEDveis:"),t(),i(1751,"code"),e(1752,"po-combo"),t(),e(1753,", "),i(1754,"code"),e(1755,"po-multiselect"),t(),e(1756,"."),t()()(),i(1757,"tr",16)(1758,"td",17)(1759,"div",24)(1760,"span",25),e(1761," decimalsLength"),n(1762,"br"),t()()(),i(1763,"td",20)(1764,"code",43),e(1765,"number"),t()(),i(1766,"td",23)(1767,"em")(1768,"strong"),e(1769,"(opcional)"),t()(),i(1770,"p"),e(1771,"Quantidade m\xE1xima de casas decimais."),t(),i(1772,"blockquote")(1773,"p"),e(1774,"Esta propriedade s\xF3 pode ser utilizada quando o "),i(1775,"code"),e(1776,"type"),t(),e(1777," for "),i(1778,"em"),e(1779,"currency"),t(),e(1780," ou "),i(1781,"em"),e(1782,"decimal"),t(),e(1783,"."),t()()()(),i(1784,"tr",16)(1785,"td",17)(1786,"div",24)(1787,"span",25),e(1788," directory"),n(1789,"br"),t()()(),i(1790,"td",20)(1791,"code",28),e(1792,"boolean"),t()(),i(1793,"td",23)(1794,"em")(1795,"strong"),e(1796,"(opcional)"),t()(),i(1797,"p"),e(1798,"Permite a sele\xE7\xE3o de diret\xF3rios contendo um ou mais arquivos para envio."),t(),i(1799,"blockquote")(1800,"p"),e(1801,"A habilita\xE7\xE3o desta propriedade se restringe apenas \xE0 sele\xE7\xE3o de diret\xF3rios."),t()(),i(1802,"blockquote")(1803,"p"),e(1804,"Defini\xE7\xE3o n\xE3o suportada pelo browser "),i(1805,"strong"),e(1806,"Internet Explorer"),t(),e(1807,", todavia ser\xE1 poss\xEDvel a sele\xE7\xE3o de arquivos padr\xE3o."),t()(),i(1808,"p")(1809,"strong"),e(1810,"Componente compat\xEDvel"),t(),e(1811,": "),i(1812,"code"),e(1813,"po-upload"),t()()()(),i(1814,"tr",16)(1815,"td",17)(1816,"div",24)(1817,"span",25),e(1818," disabled"),n(1819,"br"),t()()(),i(1820,"td",20)(1821,"code",28),e(1822,"boolean"),t()(),i(1823,"td",23)(1824,"em")(1825,"strong"),e(1826,"(opcional)"),t()(),i(1827,"p"),e(1828,"Desabilita o campo caso informar o valor "),i(1829,"em"),e(1830,"true"),t(),e(1831,"."),t()()(),i(1832,"tr",16)(1833,"td",17)(1834,"div",24)(1835,"span",25),e(1836," disabledInitFilter"),n(1837,"br"),t()()(),i(1838,"td",20)(1839,"code",28),e(1840,"boolean"),t()(),i(1841,"td",23)(1842,"em")(1843,"strong"),e(1844,"(opcional)"),t()(),i(1845,"p"),e(1846,"Desabilita o filtro inicial no servi\xE7o do "),i(1847,"code"),e(1848,"po-combo"),t(),e(1849,", que \xE9 executado no primeiro clique no campo."),t()()(),i(1850,"tr",16)(1851,"td",17)(1852,"div",24)(1853,"span",25),e(1854," disabledTabFilter"),n(1855,"br"),t()()(),i(1856,"td",20)(1857,"code",28),e(1858,"boolean"),t()(),i(1859,"td",23)(1860,"em")(1861,"strong"),e(1862,"(opcional)"),t()(),i(1863,"p"),e(1864,"Se verdadeiro, desabilitar\xE1 a busca de um item via TAB no "),i(1865,"code"),e(1866,"po-combo"),t(),e(1867,"."),t()()(),i(1868,"tr",16)(1869,"td",17)(1870,"div",24)(1871,"span",25),e(1872," divider"),n(1873,"br"),t()()(),i(1874,"td",20)(1875,"code",26),e(1876,"string"),t()(),i(1877,"td",23)(1878,"em")(1879,"strong"),e(1880,"(opcional)"),t()(),i(1881,"p"),e(1882,"Exibir\xE1 um divisor acima, utilizando o seu conteudo como t\xEDtulo."),t()()(),i(1883,"tr",16)(1884,"td",17)(1885,"div",24)(1886,"span",25),e(1887," dragDrop"),n(1888,"br"),t()()(),i(1889,"td",20)(1890,"code",28),e(1891,"boolean"),t()(),i(1892,"td",23)(1893,"em")(1894,"strong"),e(1895,"(opcional)"),t()(),i(1896,"p"),e(1897,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),t(),i(1898,"blockquote")(1899,"p"),e(1900,"Recomendamos utilizar apenas um "),i(1901,"code"),e(1902,"po-upload"),t(),e(1903," com esta funcionalidade por tela."),t()(),i(1904,"p")(1905,"strong"),e(1906,"Componente compat\xEDvel"),t(),e(1907,": "),i(1908,"code"),e(1909,"po-upload"),t()()()(),i(1910,"tr",16)(1911,"td",17)(1912,"div",24)(1913,"span",25),e(1914," dragDropHeight"),n(1915,"br"),t()()(),i(1916,"td",20)(1917,"code",43),e(1918,"number"),t()(),i(1919,"td",23)(1920,"em")(1921,"strong"),e(1922,"(opcional)"),t()(),i(1923,"p"),e(1924,"Define em "),i(1925,"em"),e(1926,"pixels"),t(),e(1927," a altura da \xE1rea onde podem ser arrastados os arquivos. A altura m\xEDnima aceita \xE9 "),i(1928,"code"),e(1929,"160px"),t(),e(1930,"."),t(),i(1931,"blockquote")(1932,"p"),e(1933,"Esta propriedade funciona somente se a propriedade "),i(1934,"code"),e(1935,"p-drag-drop"),t(),e(1936," estiver habilitada."),t()(),i(1937,"p")(1938,"strong"),e(1939,"Componente compat\xEDvel"),t(),e(1940,": "),i(1941,"code"),e(1942,"po-upload"),t()()()(),i(1943,"tr",16)(1944,"td",17)(1945,"div",24)(1946,"span",25),e(1947," errorAsyncFunction"),n(1948,"br"),t()()(),i(1949,"td",20)(1950,"code",48),e(1951,"(value) => Observable<boolean>"),t()(),i(1952,"td",23)(1953,"em")(1954,"strong"),e(1955,"(opcional)"),t()(),i(1956,"p"),e(1957,`Fun\xE7\xE3o executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),i(1958,"code"),e(1959,"change"),t(),e(1960," ou "),i(1961,"code"),e(1962,"change-model"),t(),e(1963,", dependendo do valor da propriedade "),i(1964,"code"),e(1965,"triggerMode"),t(),e(1966,"."),t(),i(1967,"blockquote")(1968,"p"),e(1969,"Retorna "),i(1970,"code"),e(1971,"Observable com o valor true"),t(),e(1972," para sinalizar o erro "),i(1973,"code"),e(1974,"false"),t(),e(1975," para indicar que n\xE3o h\xE1 erro."),t()(),i(1976,"p")(1977,"strong"),e(1978,"Componente compat\xEDvel"),t(),e(1979,": "),i(1980,"code"),e(1981,"po-datepicker"),t()()()(),i(1982,"tr",16)(1983,"td",17)(1984,"div",24)(1985,"span",25),e(1986," errorAsyncProperties"),n(1987,"br"),t()()(),i(1988,"td",20)(1989,"code",49),e(1990,"ErrorAsyncProperties"),t()(),i(1991,"td",23)(1992,"em")(1993,"strong"),e(1994,"(opcional)"),t()(),i(1995,"p"),e(1996,"Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente."),t(),i(1997,"p")(1998,"strong"),e(1999,"Componentes compat\xEDveis:"),t(),i(2e3,"code"),e(2001,"po-input"),t(),e(2002,", "),i(2003,"code"),e(2004,"po-number"),t(),e(2005,", "),i(2006,"code"),e(2007,"po-decimal"),t(),e(2008,", "),i(2009,"code"),e(2010,"po-password"),t(),e(2011,"."),t()()(),i(2012,"tr",16)(2013,"td",17)(2014,"div",24)(2015,"span",25),e(2016," errorLimit"),n(2017,"br"),t()()(),i(2018,"td",20)(2019,"code",28),e(2020,"boolean"),t()(),i(2021,"td",23)(2022,"em")(2023,"strong"),e(2024,"(opcional)"),t()(),i(2025,"p"),e(2026,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),i(2027,"blockquote")(2028,"p"),e(2029,"Caso essa propriedade seja definida como "),i(2030,"code"),e(2031,"true"),t(),e(2032,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()(),i(2033,"p")(2034,"strong"),e(2035,"Componentes compat\xEDveis:"),t(),i(2036,"code"),e(2037,"po-datepicker"),t(),e(2038,", "),i(2039,"code"),e(2040,"po-input"),t(),e(2041,", "),i(2042,"code"),e(2043,"po-number"),t(),e(2044,", "),i(2045,"code"),e(2046,"po-decimal"),t(),e(2047,", "),i(2048,"code"),e(2049,"po-password"),t(),e(2050,", "),i(2051,"code"),e(2052,"po-datepicker-range"),t(),e(2053,", "),i(2054,"code"),e(2055,"po-select"),t(),e(2056,", "),i(2057,"code"),e(2058,"po-checkbox-group"),t(),e(2059,", "),i(2060,"code"),e(2061,"po-radio-group"),t(),e(2062,", "),i(2063,"code"),e(2064,"po-multiselect"),t(),e(2065,", "),i(2066,"code"),e(2067,"po-combo"),t(),e(2068,", "),i(2069,"code"),e(2070,"po-lookup"),t(),e(2071,", "),i(2072,"code"),e(2073,"po-textarea"),t(),e(2074,"."),t()()(),i(2075,"tr",16)(2076,"td",17)(2077,"div",24)(2078,"span",25),e(2079," errorMessage"),n(2080,"br"),t()()(),i(2081,"td",20)(2082,"code",26),e(2083,"string"),t()(),i(2084,"td",23)(2085,"em")(2086,"strong"),e(2087,"(opcional)"),t()(),i(2088,"p"),e(2089,"Mensagem que ser\xE1 apresentada quando o campo ficar inv\xE1lido."),t(),i(2090,"p"),e(2091,"O campo fica inv\xE1lido quando as seguintes propriedades n\xE3o forem respeitadas:"),t(),i(2092,"ul")(2093,"li"),e(2094,"pattern;"),t(),i(2095,"li"),e(2096,"minValue;"),t(),i(2097,"li"),e(2098,"maxValue;"),t(),i(2099,"li"),e(2100,"required;"),t()(),i(2101,"blockquote")(2102,"p"),e(2103,`Esta mensagem pode ser exibida quando o campo estiver vazio, caso seja requerido. Em casos de componentes como
`),i(2104,"code"),e(2105,"po-datepicker"),t(),e(2106,", "),i(2107,"code"),e(2108,"po-input"),t(),e(2109,", "),i(2110,"code"),e(2111,"po-number"),t(),e(2112,", "),i(2113,"code"),e(2114,"po-decimal"),t(),e(2115,", "),i(2116,"code"),e(2117,"po-password"),t(),e(2118,`, \xE9 necess\xE1rio que a propriedade
`),i(2119,"code"),e(2120,"requiredFieldErrorMessage"),t(),e(2121," esteja como "),i(2122,"code"),e(2123,"true"),t(),e(2124,` para que a mensagem seja exibida com o campo vazio. Componentes
como `),i(2125,"code"),e(2126,"po-datepicker-range"),t(),e(2127,", "),i(2128,"code"),e(2129,"po-select"),t(),e(2130,", "),i(2131,"code"),e(2132,"po-checkbox-group"),t(),e(2133,", "),i(2134,"code"),e(2135,"po-radio-group"),t(),e(2136,", "),i(2137,"code"),e(2138,"po-multiselect"),t(),e(2139,", "),i(2140,"code"),e(2141,"po-combo"),t(),e(2142,`,
`),i(2143,"code"),e(2144,"po-lookup"),t(),e(2145," e "),i(2146,"code"),e(2147,"po-textarea"),t(),e(2148," n\xE3o \xE9 necess\xE1rio passar a propriedade "),i(2149,"code"),e(2150,"requiredFieldErrorMessage"),t(),e(2151,"."),t()(),i(2152,"p")(2153,"strong"),e(2154,"Componentes compat\xEDveis:"),t(),i(2155,"code"),e(2156,"po-datepicker"),t(),e(2157,", "),i(2158,"code"),e(2159,"po-input"),t(),e(2160,", "),i(2161,"code"),e(2162,"po-number"),t(),e(2163,", "),i(2164,"code"),e(2165,"po-decimal"),t(),e(2166,", "),i(2167,"code"),e(2168,"po-password"),t(),e(2169,", "),i(2170,"code"),e(2171,"po-datepicker-range"),t(),e(2172,", "),i(2173,"code"),e(2174,"po-select"),t(),e(2175,", "),i(2176,"code"),e(2177,"po-checkbox-group"),t(),e(2178,", "),i(2179,"code"),e(2180,"po-radio-group"),t(),e(2181,", "),i(2182,"code"),e(2183,"po-multiselect"),t(),e(2184,", "),i(2185,"code"),e(2186,"po-combo"),t(),e(2187,", "),i(2188,"code"),e(2189,"po-lookup"),t(),e(2190,", "),i(2191,"code"),e(2192,"po-textarea"),t(),e(2193,"."),t()()(),i(2194,"tr",16)(2195,"td",17)(2196,"div",24)(2197,"span",25),e(2198," fieldLabel"),n(2199,"br"),t()()(),i(2200,"td",20)(2201,"code",26),e(2202,"string"),t()(),i(2203,"td",23)(2204,"em")(2205,"strong"),e(2206,"(opcional)"),t()(),i(2207,"p"),e(2208,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como descri\xE7\xE3o do campo."),t(),i(2209,"p"),e(2210,"O valor padr\xE3o \xE9: "),i(2211,"code"),e(2212,"label"),t(),e(2213,"."),t(),i(2214,"blockquote")(2215,"p"),e(2216,"Esta propriedade pode ser utilizada em conjunto com: "),i(2217,"code"),e(2218,"options"),t(),e(2219,", "),i(2220,"code"),e(2221,"optionsService"),t(),e(2222," e "),i(2223,"code"),e(2224,"searchService"),t(),e(2225,"."),t()()()(),i(2226,"tr",16)(2227,"td",17)(2228,"div",24)(2229,"span",25),e(2230," fieldValue"),n(2231,"br"),t()()(),i(2232,"td",20)(2233,"code",26),e(2234,"string"),t()(),i(2235,"td",23)(2236,"em")(2237,"strong"),e(2238,"(opcional)"),t()(),i(2239,"p"),e(2240,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como valor do campo."),t(),i(2241,"p"),e(2242,"O valor padr\xE3o \xE9: "),i(2243,"code"),e(2244,"value"),t(),e(2245,"."),t(),i(2246,"blockquote")(2247,"p"),e(2248,"Esta propriedade pode ser utilizada em conjunto com: "),i(2249,"code"),e(2250,"options"),t(),e(2251,", "),i(2252,"code"),e(2253,"optionsService"),t(),e(2254," e "),i(2255,"code"),e(2256,"searchService"),t(),e(2257,"."),t()()()(),i(2258,"tr",16)(2259,"td",17)(2260,"div",24)(2261,"span",25),e(2262," filterMinlength"),n(2263,"br"),t()()(),i(2264,"td",20)(2265,"code",43),e(2266,"number"),t()(),i(2267,"td",23)(2268,"em")(2269,"strong"),e(2270,"(opcional)"),t()(),i(2271,"p"),e(2272,"Valor m\xEDnimo de caracteres para realizar o filtro no servi\xE7o do "),i(2273,"code"),e(2274,"po-combo"),t(),e(2275,"."),t()()(),i(2276,"tr",16)(2277,"td",17)(2278,"div",24)(2279,"span",25),e(2280," filterMode"),n(2281,"br"),t()()(),i(2282,"td",20)(2283,"code",50),e(2284,"PoMultiselectFilterMode"),t()(),i(2285,"td",23)(2286,"em")(2287,"strong"),e(2288,"(opcional)"),t()(),i(2289,"p"),e(2290,"Define o modo de pesquisa utilizado no filtro da lista de sele\xE7\xE3o: "),i(2291,"code"),e(2292,"startsWith"),t(),e(2293,", "),i(2294,"code"),e(2295,"contains"),t(),e(2296," ou "),i(2297,"code"),e(2298,"endsWith"),t(),e(2299,"."),t(),i(2300,"blockquote")(2301,"p"),e(2302,"Quando utilizar a propriedade p-filter-service esta propriedade ser\xE1 ignorada."),t()(),i(2303,"p")(2304,"strong"),e(2305,"Componentes compat\xEDveis:"),t(),i(2306,"code"),e(2307,"po-multiselect"),t(),e(2308,"."),t()()(),i(2309,"tr",16)(2310,"td",17)(2311,"div",24)(2312,"span",25),e(2313," forceBooleanComponentType"),n(2314,"br"),t()()(),i(2315,"td",20)(2316,"code",51),e(2317,"ForceBooleanComponentEnum"),t()(),i(2318,"td",23)(2319,"em")(2320,"strong"),e(2321,"(opcional)"),t()(),i(2322,"p"),e(2323,"Valores aceitos:"),t(),i(2324,"ul")(2325,"li"),e(2326,"ForceBooleanComponentEnum.switch"),t(),i(2327,"li"),e(2328,"ForceBooleanComponentEnum.checkbox"),t()()()(),i(2329,"tr",16)(2330,"td",17)(2331,"div",24)(2332,"span",25),e(2333," forceOptionsComponentType"),n(2334,"br"),t()()(),i(2335,"td",20)(2336,"code",52),e(2337,"ForceOptionComponentEnum"),t()(),i(2338,"td",23)(2339,"em")(2340,"strong"),e(2341,"(opcional)"),t()(),i(2342,"p"),e(2343,"pode ser utilizada em conjunto com a propriedade "),i(2344,"code"),e(2345,"options"),t(),e(2346," for\xE7ando o componente a renderizar um "),i(2347,"code"),e(2348,"po-select"),t(),e(2349," ou "),i(2350,"code"),e(2351,"po-radio-group"),t(),e(2352,"."),t(),i(2353,"p"),e(2354,"Valores aceitos:"),t(),i(2355,"ul")(2356,"li"),e(2357,"ForceOptionComponentEnum.radioGroup"),t(),i(2358,"li"),e(2359,"ForceOptionComponentEnum.select"),t()(),i(2360,"blockquote")(2361,"p"),e(2362,"Essa propriedade ser\xE1 ignorada caso seja utilizada em conjunto com a propriedade "),i(2363,"code"),e(2364,"optionsMulti"),t(),e(2365," e "),i(2366,"code"),e(2367,"optionsService"),t(),e(2368,"."),t()()()(),i(2369,"tr",16)(2370,"td",17)(2371,"div",24)(2372,"span",25),e(2373," formField"),n(2374,"br"),t()()(),i(2375,"td",20)(2376,"code",26),e(2377,"string"),t()(),i(2378,"td",23)(2379,"em")(2380,"strong"),e(2381,"(opcional)"),t()(),i(2382,"p"),e(2383,"Nome do campo de formul\xE1rio que ser\xE1 enviado para o servi\xE7o informado na propriedade "),i(2384,"code"),e(2385,"url"),t(),e(2386,"."),t(),i(2387,"blockquote")(2388,"p"),e(2389,"O valor default \xE9 "),i(2390,"code"),e(2391,"files"),t()()(),i(2392,"p")(2393,"strong"),e(2394,"Componente compat\xEDvel"),t(),e(2395,": "),i(2396,"code"),e(2397,"po-upload"),t()()()(),i(2398,"tr",16)(2399,"td",17)(2400,"div",24)(2401,"span",25),e(2402," format"),n(2403,"br"),t()()(),i(2404,"td",20)(2405,"code",26),e(2406,"string "),t(),i(2407,"code",31),e(2408," Array<string>"),t()(),i(2409,"td",23)(2410,"em")(2411,"strong"),e(2412,"(opcional)"),t()(),i(2413,"p"),e(2414,"Formato de exibi\xE7\xE3o no campo."),t(),i(2415,"p"),e(2416,"Ao utilizar esta propriedade com o "),i(2417,"code"),e(2418,"type"),t(),i(2419,"em"),e(2420,"PoDynamicFieldType.Date"),t(),e(2421," ou "),i(2422,"em"),e(2423,"PoDynamicFieldType.DateTime"),t(),e(2424,`,
pode ser utilizada para formata\xE7\xE3o de exibi\xE7\xE3o da data:`),t(),i(2425,"p"),e(2426,"Valores v\xE1lidos:"),t(),i(2427,"ul")(2428,"li"),e(2429,"dd/mm/yyyy"),t(),i(2430,"li"),e(2431,"mm/dd/yyyy"),t(),i(2432,"li"),e(2433,"yyyy/mm/dd"),t()(),i(2434,"p"),e(2435,"Tamb\xE9m pode-se utilizar em conjunto com "),i(2436,"code"),e(2437,"searchService"),t(),e(2438,`, informando uma lista de propriedades que ser\xE1 utilizado
para formata\xE7\xE3o da exibi\xE7\xE3o no campo, por exemplo: ["id", "name"].`),t()()(),i(2439,"tr",16)(2440,"td",17)(2441,"div",24)(2442,"span",25),e(2443," formatModel"),n(2444,"br"),t()()(),i(2445,"td",20)(2446,"code",28),e(2447,"boolean"),t()(),i(2448,"td",23)(2449,"em")(2450,"strong"),e(2451,"(opcional)"),t()(),i(2452,"p"),e(2453,"Indica se o "),i(2454,"code"),e(2455,"model"),t(),e(2456," receber\xE1 o valor formatado pelas propriedades "),i(2457,"code"),e(2458,"p-label-on"),t(),e(2459," e "),i(2460,"code"),e(2461,"p-label-off"),t(),e(2462,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),t(),i(2463,"p"),e(2464,"O valor padr\xE3o \xE9: "),i(2465,"code"),e(2466,"false"),t(),e(2467,"."),t(),i(2468,"blockquote")(2469,"p"),e(2470,"Esta propriedade est\xE1 disponivel apenas para o "),i(2471,"code"),e(2472,"swicth"),t(),e(2473,"."),t()()()(),i(2474,"tr",16)(2475,"td",17)(2476,"div",24)(2477,"span",25),e(2478," gridColumns"),n(2479,"br"),t()()(),i(2480,"td",20)(2481,"code",43),e(2482,"number"),t()(),i(2483,"td",23)(2484,"em")(2485,"strong"),e(2486,"(opcional)"),t()(),i(2487,"p"),e(2488,"Tamanho de exibi\xE7\xE3o do campo em telas."),t(),i(2489,"p"),e(2490,"Deve ser usado o sistema de "),i(2491,"strong"),e(2492,"grid"),t(),e(2493," do PO (1 ... 12 colunas)."),t(),i(2494,"blockquote")(2495,"p"),e(2496,"Esta propriedade \xE9 generica, aplica o valor em todos os tamanhos de telas."),t()()()(),i(2497,"tr",16)(2498,"td",17)(2499,"div",24)(2500,"span",25),e(2501," gridLgColumns"),n(2502,"br"),t()()(),i(2503,"td",20)(2504,"code",43),e(2505,"number"),t()(),i(2506,"td",23)(2507,"em")(2508,"strong"),e(2509,"(opcional)"),t()(),i(2510,"p"),e(2511,"Tamanho de exibi\xE7\xE3o do campo em telas grandes (lg)."),t(),i(2512,"p"),e(2513,"Deve ser usado o sistema de "),i(2514,"strong"),e(2515,"grid"),t(),e(2516," do PO (1 ... 12 colunas)."),t(),i(2517,"blockquote")(2518,"p"),e(2519,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(2520,"code"),e(2521,"gridColumns"),t(),e(2522,"."),t()()()(),i(2523,"tr",16)(2524,"td",17)(2525,"div",24)(2526,"span",25),e(2527," gridLgPull"),n(2528,"br"),t()()(),i(2529,"td",20)(2530,"code",43),e(2531,"number"),t()(),i(2532,"td",23)(2533,"em")(2534,"strong"),e(2535,"(opcional)"),t()(),i(2536,"p"),e(2537,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas grandes (lg)."),t(),i(2538,"p"),e(2539,"Deve ser usado o sistema de "),i(2540,"strong"),e(2541,"grid"),t(),e(2542," do PO (1 ... 11 colunas)."),t(),i(2543,"blockquote")(2544,"p"),e(2545,"Esta propriedade n\xE3o funciona com a propriedade "),i(2546,"code"),e(2547,"gridColumns"),t(),e(2548,". Deve-se especificar o tamanho da tela."),t()()()(),i(2549,"tr",16)(2550,"td",17)(2551,"div",24)(2552,"span",25),e(2553," gridMdColumns"),n(2554,"br"),t()()(),i(2555,"td",20)(2556,"code",43),e(2557,"number"),t()(),i(2558,"td",23)(2559,"em")(2560,"strong"),e(2561,"(opcional)"),t()(),i(2562,"p"),e(2563,"Tamanho de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),t(),i(2564,"p"),e(2565,"Deve ser usado o sistema de "),i(2566,"strong"),e(2567,"grid"),t(),e(2568," do PO (1 ... 12 colunas)."),t(),i(2569,"blockquote")(2570,"p"),e(2571,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(2572,"code"),e(2573,"gridColumns"),t(),e(2574,"."),t()()()(),i(2575,"tr",16)(2576,"td",17)(2577,"div",24)(2578,"span",25),e(2579," gridMdPull"),n(2580,"br"),t()()(),i(2581,"td",20)(2582,"code",43),e(2583,"number"),t()(),i(2584,"td",23)(2585,"em")(2586,"strong"),e(2587,"(opcional)"),t()(),i(2588,"p"),e(2589,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas m\xE9dias (md)."),t(),i(2590,"p"),e(2591,"Deve ser usado o sistema de "),i(2592,"strong"),e(2593,"grid"),t(),e(2594," do PO (1 ... 11 colunas)."),t(),i(2595,"blockquote")(2596,"p"),e(2597,"Esta propriedade n\xE3o funciona com a propriedade "),i(2598,"code"),e(2599,"gridColumns"),t(),e(2600,". Deve-se especificar o tamanho da tela."),t()()()(),i(2601,"tr",16)(2602,"td",17)(2603,"div",24)(2604,"span",25),e(2605," gridSmColumns"),n(2606,"br"),t()()(),i(2607,"td",20)(2608,"code",43),e(2609,"number"),t()(),i(2610,"td",23)(2611,"em")(2612,"strong"),e(2613,"(opcional)"),t()(),i(2614,"p"),e(2615,"Tamanho de exibi\xE7\xE3o do campo em telas menores (sm)."),t(),i(2616,"p"),e(2617,"Deve ser usado o sistema de "),i(2618,"strong"),e(2619,"grid"),t(),e(2620," do PO (1 ... 12 colunas)."),t(),i(2621,"blockquote")(2622,"p"),e(2623,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(2624,"code"),e(2625,"gridColumns"),t(),e(2626,"."),t()()()(),i(2627,"tr",16)(2628,"td",17)(2629,"div",24)(2630,"span",25),e(2631," gridSmPull"),n(2632,"br"),t()()(),i(2633,"td",20)(2634,"code",43),e(2635,"number"),t()(),i(2636,"td",23)(2637,"em")(2638,"strong"),e(2639,"(opcional)"),t()(),i(2640,"p"),e(2641,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas menores (sm)."),t(),i(2642,"p"),e(2643,"Deve ser usado o sistema de "),i(2644,"strong"),e(2645,"grid"),t(),e(2646," do PO (1 ... 11 colunas)."),t(),i(2647,"blockquote")(2648,"p"),e(2649,"Esta propriedade n\xE3o funciona com a propriedade "),i(2650,"code"),e(2651,"gridColumns"),t(),e(2652,". Deve-se especificar o tamanho da tela."),t()()()(),i(2653,"tr",16)(2654,"td",17)(2655,"div",24)(2656,"span",25),e(2657," gridXlColumns"),n(2658,"br"),t()()(),i(2659,"td",20)(2660,"code",43),e(2661,"number"),t()(),i(2662,"td",23)(2663,"em")(2664,"strong"),e(2665,"(opcional)"),t()(),i(2666,"p"),e(2667,"Tamanho de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),t(),i(2668,"p"),e(2669,"Deve ser usado o sistema de "),i(2670,"strong"),e(2671,"grid"),t(),e(2672," do PO (1 ... 12 colunas)."),t(),i(2673,"blockquote")(2674,"p"),e(2675,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(2676,"code"),e(2677,"gridColumns"),t(),e(2678,"."),t()()()(),i(2679,"tr",16)(2680,"td",17)(2681,"div",24)(2682,"span",25),e(2683," gridXlPull"),n(2684,"br"),t()()(),i(2685,"td",20)(2686,"code",43),e(2687,"number"),t()(),i(2688,"td",23)(2689,"em")(2690,"strong"),e(2691,"(opcional)"),t()(),i(2692,"p"),e(2693,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas extra grandes (xl)."),t(),i(2694,"p"),e(2695,"Deve ser usado o sistema de "),i(2696,"strong"),e(2697,"grid"),t(),e(2698," do PO (1 ... 11 colunas)."),t(),i(2699,"blockquote")(2700,"p"),e(2701,"Esta propriedade n\xE3o funciona com a propriedade "),i(2702,"code"),e(2703,"gridColumns"),t(),e(2704,". Deve-se especificar o tamanho da tela."),t()()()(),i(2705,"tr",16)(2706,"td",17)(2707,"div",24)(2708,"span",25),e(2709," headers"),n(2710,"br"),t()()(),i(2711,"td",20)(2712,"code",53),e(2713,"{ [name: string]: string "),t(),i(2714,"code",54),e(2715,` Array<string>;
}`),t()(),i(2716,"td",23)(2717,"em")(2718,"strong"),e(2719,"(opcional)"),t()(),i(2720,"p"),e(2721,"Objeto que cont\xE9m os cabe\xE7alhos que ser\xE1 enviado na requisi\xE7\xE3o dos arquivos."),t(),i(2722,"p")(2723,"strong"),e(2724,"Componente compat\xEDvel"),t(),e(2725,": "),i(2726,"code"),e(2727,"po-upload"),t()()()(),i(2728,"tr",16)(2729,"td",17)(2730,"div",24)(2731,"span",25),e(2732," help"),n(2733,"br"),t()()(),i(2734,"td",20)(2735,"code",26),e(2736,"string"),t()(),i(2737,"td",23)(2738,"em")(2739,"strong"),e(2740,"(opcional)"),t()(),i(2741,"p"),e(2742,"Texto de ajuda."),t()()(),i(2743,"tr",16)(2744,"td",17)(2745,"div",24)(2746,"span",25),e(2747," hideLabelStatus"),n(2748,"br"),t()()(),i(2749,"td",20)(2750,"code",28),e(2751,"boolean"),t()(),i(2752,"td",23)(2753,"em")(2754,"strong"),e(2755,"(opcional)"),t()(),i(2756,"p"),e(2757,"Indica se o status do "),i(2758,"code"),e(2759,"model"),t(),e(2760," ser\xE1 escondido visualmente ao lado do switch"),t()()(),i(2761,"tr",16)(2762,"td",17)(2763,"div",24)(2764,"span",25),e(2765," hidePasswordPeek"),n(2766,"br"),t()()(),i(2767,"td",20)(2768,"code",28),e(2769,"boolean"),t()(),i(2770,"td",23)(2771,"em")(2772,"strong"),e(2773,"(opcional)"),t()(),i(2774,"p"),e(2775,"Permite esconder a fun\xE7\xE3o de espiar a senha digitada no "),i(2776,"code"),e(2777,"po-password"),t(),e(2778,"."),t()()(),i(2779,"tr",16)(2780,"td",17)(2781,"div",24)(2782,"span",25),e(2783," hideRestrictionsInfo"),n(2784,"br"),t()()(),i(2785,"td",20)(2786,"code",28),e(2787,"boolean"),t()(),i(2788,"td",23)(2789,"em")(2790,"strong"),e(2791,"(opcional)"),t()(),i(2792,"p"),e(2793,"Oculta visualmente as informa\xE7\xF5es de restri\xE7\xF5es para o upload."),t(),i(2794,"p")(2795,"strong"),e(2796,"Componente compat\xEDvel"),t(),e(2797,": "),i(2798,"code"),e(2799,"po-upload"),t()()()(),i(2800,"tr",16)(2801,"td",17)(2802,"div",24)(2803,"span",25),e(2804," hideSearch"),n(2805,"br"),t()()(),i(2806,"td",20)(2807,"code",28),e(2808,"boolean"),t()(),i(2809,"td",23)(2810,"em")(2811,"strong"),e(2812,"(opcional)"),t()(),i(2813,"p"),e(2814,"Esconde o campo de pesquisa existente dentro do dropdown do "),i(2815,"code"),e(2816,"po-multiselect"),t(),e(2817,"."),t()()(),i(2818,"tr",16)(2819,"td",17)(2820,"div",24)(2821,"span",25),e(2822," hideSelectAll"),n(2823,"br"),t()()(),i(2824,"td",20)(2825,"code",28),e(2826,"boolean"),t()(),i(2827,"td",23)(2828,"em")(2829,"strong"),e(2830,"(opcional)"),t()(),i(2831,"p"),e(2832,'Indica se o campo "Selecionar todos" do '),i(2833,"code"),e(2834,"po-multiselect"),t(),e(2835," ser\xE1 escondido."),t()()(),i(2836,"tr",16)(2837,"td",17)(2838,"div",24)(2839,"span",25),e(2840," hideSelectButton"),n(2841,"br"),t()()(),i(2842,"td",20)(2843,"code",28),e(2844,"boolean"),t()(),i(2845,"td",23)(2846,"em")(2847,"strong"),e(2848,"(opcional)"),t()(),i(2849,"p"),e(2850,"Omite o bot\xE3o de sele\xE7\xE3o de arquivos."),t(),i(2851,"blockquote")(2852,"p"),e(2853,"Caso o valor definido seja "),i(2854,"code"),e(2855,"true"),t(),e(2856,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),i(2857,"code"),e(2858,"selectFiles()"),t(),e(2859," para sele\xE7\xE3o de arquivos."),t()(),i(2860,"p")(2861,"strong"),e(2862,"Componente compat\xEDvel"),t(),e(2863,": "),i(2864,"code"),e(2865,"po-upload"),t()()()(),i(2866,"tr",16)(2867,"td",17)(2868,"div",24)(2869,"span",25),e(2870," hideSendButton"),n(2871,"br"),t()()(),i(2872,"td",20)(2873,"code",28),e(2874,"boolean"),t()(),i(2875,"td",23)(2876,"em")(2877,"strong"),e(2878,"(opcional)"),t()(),i(2879,"p"),e(2880,"Omite o bot\xE3o de envio de arquivos."),t(),i(2881,"blockquote")(2882,"p"),e(2883,"Caso o valor definido seja "),i(2884,"code"),e(2885,"true"),t(),e(2886,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),i(2887,"code"),e(2888,"sendFiles()"),t(),e(2889," para envio do(s) arquivo(s) selecionado(s)."),t()(),i(2890,"p")(2891,"strong"),e(2892,"Componente compat\xEDvel"),t(),e(2893,": "),i(2894,"code"),e(2895,"po-upload"),t()()()(),i(2896,"tr",16)(2897,"td",17)(2898,"div",24)(2899,"span",25),e(2900," icon"),n(2901,"br"),t()()(),i(2902,"td",20)(2903,"code",26),e(2904,"string "),t(),i(2905,"code",55),e(2906," TemplateRef<void>"),t()(),i(2907,"td",23)(2908,"em")(2909,"strong"),e(2910,"(opcional)"),t()(),i(2911,"p"),e(2912,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),t(),i(2913,"blockquote")(2914,"p"),e(2915,"Esta propriedade s\xF3 pode ser utilizado nos campos:"),t()(),i(2916,"ul")(2917,"li"),e(2918,"Input;"),t(),i(2919,"li"),e(2920,"Number;"),t(),i(2921,"li"),e(2922,"Decimal;"),t(),i(2923,"li"),e(2924,"Combo;"),t(),i(2925,"li"),e(2926,"Password;"),t()(),i(2927,"blockquote")(2928,"p"),e(2929,"Veja a disponibilidade de \xEDcones em "),i(2930,"a",56),e(2931,"biblioteca de \xEDcones"),t(),e(2932,"."),t()()()(),i(2933,"tr",16)(2934,"td",17)(2935,"div",24)(2936,"span",25),e(2937," infiniteScroll"),n(2938,"br"),t()()(),i(2939,"td",20)(2940,"code",28),e(2941,"boolean"),t()(),i(2942,"td",23)(2943,"em")(2944,"strong"),e(2945,"(opcional)"),t()(),i(2946,"p"),e(2947,"Se verdadeiro ativa a funcionalidade de scroll infinito para o combo ou lookup, ao chegar ao fim da tabela executar\xE1 nova busca dos dados conforme pagina\xE7\xE3o."),t(),i(2948,"p")(2949,"strong"),e(2950,"Componentes compat\xEDveis:"),t(),i(2951,"code"),e(2952,"po-combo"),t(),e(2953,", "),i(2954,"code"),e(2955,"po-lookup"),t(),e(2956,"."),t()()(),i(2957,"tr",16)(2958,"td",17)(2959,"div",24)(2960,"span",25),e(2961," infiniteScrollDistance"),n(2962,"br"),t()()(),i(2963,"td",20)(2964,"code",43),e(2965,"number"),t()(),i(2966,"td",23)(2967,"em")(2968,"strong"),e(2969,"(opcional)"),t()(),i(2970,"p"),e(2971,`Define o percentual necess\xE1rio para disparar o evento show-more, que \xE9 respons\xE1vel por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padr\xE3o ser\xE1 100%.
`),i(2972,"strong"),e(2973,"Exemplos"),t(),i(2974,"code"),e(2975,"{ infiniteScrollDistance: 80 }"),t(),e(2976,": Quando atingir 80% do scroll do combo, o show-more ser\xE1 disparado."),t(),i(2977,"p")(2978,"strong"),e(2979,"Componente compat\xEDvel:"),t(),i(2980,"code"),e(2981,"po-combo"),t(),e(2982,"."),t()()(),i(2983,"tr",16)(2984,"td",17)(2985,"div",24)(2986,"span",25),e(2987," isoFormat"),n(2988,"br"),t()()(),i(2989,"td",20)(2990,"code",57),e(2991,"PoDatepickerIsoFormat"),t()(),i(2992,"td",23)(2993,"em")(2994,"strong"),e(2995,"(opcional)"),t()(),i(2996,"p"),e(2997,"Padr\xE3o de formata\xE7\xE3o para sa\xEDda do model, independentemente do formato de entrada."),t(),i(2998,"blockquote")(2999,"p"),e(3e3,"Veja os valores v\xE1lidos no "),i(3001,"code"),e(3002,"enumPoDatepickerIsoFormat"),t(),e(3003,"."),t()(),i(3004,"p")(3005,"strong"),e(3006,"Componente compat\xEDvel:"),t(),e(3007," po-datepicker"),t()()(),i(3008,"tr",16)(3009,"td",17)(3010,"div",24)(3011,"span",25),e(3012," key"),n(3013,"br"),t()()(),i(3014,"td",20)(3015,"code",28),e(3016,"boolean"),t()(),i(3017,"td",23)(3018,"em")(3019,"strong"),e(3020,"(opcional)"),t()(),i(3021,"p"),e(3022,"Identificador"),t()()(),i(3023,"tr",16)(3024,"td",17)(3025,"div",24)(3026,"span",25),e(3027," keydown"),n(3028,"br"),t()()(),i(3029,"td",20)(3030,"code",42),e(3031,"Function"),t()(),i(3032,"td",23)(3033,"em")(3034,"strong"),e(3035,"(opcional)"),t()(),i(3036,"p"),e(3037,`Fun\xE7\xE3o executada quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),i(3038,"code"),e(3039,"KeyboardEvent"),t(),e(3040," com informa\xE7\xF5es sobre a tecla."),t()()(),i(3041,"tr",16)(3042,"td",17)(3043,"div",24)(3044,"span",25),e(3045," label"),n(3046,"br"),t()()(),i(3047,"td",20)(3048,"code",26),e(3049,"string"),t()(),i(3050,"td",23)(3051,"em")(3052,"strong"),e(3053,"(opcional)"),t()(),i(3054,"p"),e(3055,"R\xF3tulo do campo exibido."),t(),i(3056,"p"),e(3057,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),i(3058,"code"),e(3059,"label"),t(),e(3060," o valor da propriedade "),i(3061,"code"),e(3062,"property"),t(),e(3063," com a primeira letra em mai\xFAsculo."),t()()(),i(3064,"tr",16)(3065,"td",17)(3066,"div",24)(3067,"span",25),e(3068," labelPosition"),n(3069,"br"),t()()(),i(3070,"td",20)(3071,"code",58),e(3072,"PoSwitchLabelPosition"),t()(),i(3073,"td",23)(3074,"em")(3075,"strong"),e(3076,"(opcional)"),t()(),i(3077,"p"),e(3078,"Posi\xE7\xE3o de exibi\xE7\xE3o do r\xF3tulo do PoSwitch."),t(),i(3079,"blockquote")(3080,"p"),e(3081,"Por padr\xE3o exibe \xE0 direita."),t()()()(),i(3082,"tr",16)(3083,"td",17)(3084,"div",24)(3085,"span",25),e(3086," literals"),n(3087,"br"),t()()(),i(3088,"td",20)(3089,"code",35),e(3090,"PoLookupLiterals "),t(),i(3091,"code",59),e(3092," PoMultiselectLiterals "),t(),i(3093,"code",60),e(3094," PoComboLiterals "),t(),i(3095,"code",61),e(3096," PoDatepickerRangeLiterals "),t(),i(3097,"code",62),e(3098," PoUploadLiterals"),t()(),i(3099,"td",23)(3100,"em")(3101,"strong"),e(3102,"(opcional)"),t()(),i(3103,"p"),e(3104,"Objeto com as literais usadas para os seguintes componentes: "),i(3105,"code"),e(3106,"po-lookup"),t(),e(3107,", "),i(3108,"code"),e(3109,"po-multiselect"),t(),e(3110,", "),i(3111,"code"),e(3112,"po-combo"),t(),e(3113," e "),i(3114,"code"),e(3115,"po-datepicker-range"),t(),e(3116,"."),t(),i(3117,"blockquote")(3118,"p"),e(3119,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do PoI18nService ou do browser."),t()(),i(3120,"p")(3121,"strong"),e(3122,"Componentes compat\xEDveis:"),t(),i(3123,"code"),e(3124,"po-lookup"),t(),e(3125,", "),i(3126,"code"),e(3127,"po-multiselect"),t(),e(3128,", "),i(3129,"code"),e(3130,"po-combo"),t(),e(3131,", "),i(3132,"code"),e(3133,"po-datepicker-range"),t()()()(),i(3134,"tr",16)(3135,"td",17)(3136,"div",24)(3137,"span",25),e(3138," locale"),n(3139,"br"),t()()(),i(3140,"td",20)(3141,"code",26),e(3142,"string"),t()(),i(3143,"td",23)(3144,"em")(3145,"strong"),e(3146,"(opcional)"),t()(),i(3147,"p"),e(3148,`Define a localidade a ser utilizada no componente.
Por padr\xE3o o valor ser\xE1 configurado segundo a o m\xF3dulo `),i(3149,"a",63)(3150,"code"),e(3151,"I18n"),t()()(),i(3152,"p"),e(3153,`Exemplo de utiliza\xE7\xE3o:
`),i(3154,"code"),e(3155,"[ { property: 'birthday', locale: 'en', type: 'date' }, { property: 'wage', locale: 'ru', type: 'currency' } ];"),t()(),i(3156,"blockquote")(3157,"p"),e(3158,"Para ver quais linguagens suportadas acesse "),i(3159,"a",63)(3160,"code"),e(3161,"I18n"),t()(),e(3162,`
A propriedade ser\xE1 repassada para os componentes que suportam a mesma.`),t()()()(),i(3163,"tr",16)(3164,"td",17)(3165,"div",24)(3166,"span",25),e(3167," mask"),n(3168,"br"),t()()(),i(3169,"td",20)(3170,"code",26),e(3171,"string"),t()(),i(3172,"td",23)(3173,"em")(3174,"strong"),e(3175,"(opcional)"),t()(),i(3176,"p"),e(3177,"M\xE1scara para o campo."),t(),i(3178,"p")(3179,"strong"),e(3180,"Componentes compat\xEDveis:"),t(),i(3181,"code"),e(3182,"po-input"),t(),e(3183,"."),t(),i(3184,"blockquote")(3185,"p"),e(3186,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),i(3187,"code"),e(3188,"type: time"),t(),e(3189,"."),t()()()(),i(3190,"tr",16)(3191,"td",17)(3192,"div",24)(3193,"span",25),e(3194," maskFormatModel"),n(3195,"br"),t()()(),i(3196,"td",20)(3197,"code",28),e(3198,"boolean"),t()(),i(3199,"td",23)(3200,"em")(3201,"strong"),e(3202,"(opcional)"),t()(),i(3203,"p"),e(3204,"Define que o valor do componente ser\xE1 conforme especificado na masc\xE1ra. O valor padr\xE3o \xE9 "),i(3205,"code"),e(3206,"false"),t(),e(3207,"."),t(),i(3208,"p")(3209,"strong"),e(3210,"Componentes compat\xEDveis:"),t(),i(3211,"code"),e(3212,"po-input"),t(),e(3213,"."),t(),i(3214,"blockquote")(3215,"p"),e(3216,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),i(3217,"code"),e(3218,"type: time"),t(),e(3219,"."),t()()()(),i(3220,"tr",16)(3221,"td",17)(3222,"div",24)(3223,"span",25),e(3224," maxLength"),n(3225,"br"),t()()(),i(3226,"td",20)(3227,"code",43),e(3228,"number"),t()(),i(3229,"td",23)(3230,"em")(3231,"strong"),e(3232,"(opcional)"),t()(),i(3233,"p"),e(3234,"Tamanho m\xE1ximo de caracteres."),t(),i(3235,"p")(3236,"strong"),e(3237,"Componentes compat\xEDveis:"),t(),i(3238,"code"),e(3239,"po-input"),t(),e(3240,", "),i(3241,"code"),e(3242,"po-number"),t(),e(3243,", "),i(3244,"code"),e(3245,"po-decimal"),t(),e(3246,", "),i(3247,"code"),e(3248,"po-textarea"),t(),e(3249,", "),i(3250,"code"),e(3251,"po-password"),t(),e(3252,"."),t()()(),i(3253,"tr",16)(3254,"td",17)(3255,"div",24)(3256,"span",25),e(3257," maxValue"),n(3258,"br"),t()()(),i(3259,"td",20)(3260,"code",26),e(3261,"string "),t(),i(3262,"code",43),e(3263," number"),t()(),i(3264,"td",23)(3265,"em")(3266,"strong"),e(3267,"(opcional)"),t()(),i(3268,"p"),e(3269,"Valor m\xE1ximo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),i(3270,"em"),e(3271,"number"),t(),e(3272,", "),i(3273,"em"),e(3274,"date"),t(),e(3275," ou "),i(3276,"em"),e(3277,"dateTime"),t(),e(3278,"."),t(),i(3279,"p")(3280,"strong"),e(3281,"Componentes compat\xEDveis:"),t(),i(3282,"code"),e(3283,"po-datepicker"),t(),e(3284,", "),i(3285,"code"),e(3286,"po-datepicker-range"),t(),e(3287,", "),i(3288,"code"),e(3289,"po-number"),t(),e(3290,", "),i(3291,"code"),e(3292,"po-decimal"),t()()()(),i(3293,"tr",16)(3294,"td",17)(3295,"div",24)(3296,"span",25),e(3297," minLength"),n(3298,"br"),t()()(),i(3299,"td",20)(3300,"code",43),e(3301,"number"),t()(),i(3302,"td",23)(3303,"em")(3304,"strong"),e(3305,"(opcional)"),t()(),i(3306,"p"),e(3307,"Tamanho m\xEDnimo de caracteres."),t(),i(3308,"p")(3309,"strong"),e(3310,"Componentes compat\xEDveis:"),t(),i(3311,"code"),e(3312,"po-input"),t(),e(3313,", "),i(3314,"code"),e(3315,"po-number"),t(),e(3316,", "),i(3317,"code"),e(3318,"po-decimal"),t(),e(3319,", "),i(3320,"code"),e(3321,"po-textarea"),t(),e(3322,", "),i(3323,"code"),e(3324,"po-password"),t(),e(3325,"."),t()()(),i(3326,"tr",16)(3327,"td",17)(3328,"div",24)(3329,"span",25),e(3330," minValue"),n(3331,"br"),t()()(),i(3332,"td",20)(3333,"code",26),e(3334,"string "),t(),i(3335,"code",43),e(3336," number"),t()(),i(3337,"td",23)(3338,"em")(3339,"strong"),e(3340,"(opcional)"),t()(),i(3341,"p"),e(3342,"Valor m\xEDnimo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),i(3343,"em"),e(3344,"number"),t(),e(3345,", "),i(3346,"em"),e(3347,"date"),t(),e(3348," ou "),i(3349,"em"),e(3350,"dateTime"),t(),e(3351,"."),t(),i(3352,"p")(3353,"strong"),e(3354,"Componentes compat\xEDveis:"),t(),i(3355,"code"),e(3356,"po-datepicker"),t(),e(3357,", "),i(3358,"code"),e(3359,"po-datepicker-range"),t(),e(3360,", "),i(3361,"code"),e(3362,"po-number"),t(),e(3363,", "),i(3364,"code"),e(3365,"po-decimal"),t()()()(),i(3366,"tr",16)(3367,"td",17)(3368,"div",24)(3369,"span",25),e(3370," multiple"),n(3371,"br"),t()()(),i(3372,"td",20)(3373,"code",28),e(3374,"boolean"),t()(),i(3375,"td",23)(3376,"em")(3377,"strong"),e(3378,"(opcional)"),t()(),i(3379,"p"),e(3380,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),t(),i(3381,"p")(3382,"strong"),e(3383,"Componente compat\xEDvel:"),t(),i(3384,"code"),e(3385,"po-lookup"),t(),e(3386,", "),i(3387,"code"),e(3388,"po-upload"),t()()()(),i(3389,"tr",16)(3390,"td",17)(3391,"div",24)(3392,"span",25),e(3393," noAutocomplete"),n(3394,"br"),t()()(),i(3395,"td",20)(3396,"code",28),e(3397,"boolean"),t()(),i(3398,"td",23)(3399,"em")(3400,"strong"),e(3401,"(opcional)"),t()(),i(3402,"p"),e(3403,"Define a propriedade nativa "),i(3404,"code"),e(3405,"autocomplete"),t(),e(3406," do campo como off."),t(),i(3407,"p")(3408,"strong"),e(3409,"Componentes compat\xEDveis:"),t(),i(3410,"code"),e(3411,"po-datepicker"),t(),e(3412,", "),i(3413,"code"),e(3414,"po-datepicker-range"),t(),e(3415,", "),i(3416,"code"),e(3417,"po-input"),t(),e(3418,", "),i(3419,"code"),e(3420,"po-number"),t(),e(3421,", "),i(3422,"code"),e(3423,"po-decimal"),t(),e(3424,", "),i(3425,"code"),e(3426,"po-lookup"),t(),e(3427,", "),i(3428,"code"),e(3429,"po-password"),t()()()(),i(3430,"tr",16)(3431,"td",17)(3432,"div",24)(3433,"span",25),e(3434," offsetColumns"),n(3435,"br"),t()()(),i(3436,"td",20)(3437,"code",43),e(3438,"number"),t()(),i(3439,"td",23)(3440,"em")(3441,"strong"),e(3442,"(opcional)"),t()(),i(3443,"p"),e(3444,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas."),t(),i(3445,"p"),e(3446,"Deve ser usado o sistema de "),i(3447,"strong"),e(3448,"grid"),t(),e(3449," do PO (1 ... 12 colunas)."),t(),i(3450,"blockquote")(3451,"p"),e(3452,"Esta propriedade \xE9 gen\xE9rica, aplica o valor em todos os tamanhos de telas."),t()()()(),i(3453,"tr",16)(3454,"td",17)(3455,"div",24)(3456,"span",25),e(3457," offsetLgColumns"),n(3458,"br"),t()()(),i(3459,"td",20)(3460,"code",43),e(3461,"number"),t()(),i(3462,"td",23)(3463,"em")(3464,"strong"),e(3465,"(opcional)"),t()(),i(3466,"p"),e(3467,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas grandes (lg)."),t(),i(3468,"p"),e(3469,"Deve ser usado o sistema de "),i(3470,"strong"),e(3471,"grid"),t(),e(3472," do PO (1 ... 12 colunas)."),t(),i(3473,"blockquote")(3474,"p"),e(3475,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(3476,"code"),e(3477,"offsetColumns"),t(),e(3478,"."),t()()()(),i(3479,"tr",16)(3480,"td",17)(3481,"div",24)(3482,"span",25),e(3483," offsetMdColumns"),n(3484,"br"),t()()(),i(3485,"td",20)(3486,"code",43),e(3487,"number"),t()(),i(3488,"td",23)(3489,"em")(3490,"strong"),e(3491,"(opcional)"),t()(),i(3492,"p"),e(3493,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),t(),i(3494,"p"),e(3495,"Deve ser usado o sistema de "),i(3496,"strong"),e(3497,"grid"),t(),e(3498," do PO (1 ... 12 colunas)."),t(),i(3499,"blockquote")(3500,"p"),e(3501,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(3502,"code"),e(3503,"offsetColumns"),t(),e(3504,"."),t()()()(),i(3505,"tr",16)(3506,"td",17)(3507,"div",24)(3508,"span",25),e(3509," offsetSmColumns"),n(3510,"br"),t()()(),i(3511,"td",20)(3512,"code",43),e(3513,"number"),t()(),i(3514,"td",23)(3515,"em")(3516,"strong"),e(3517,"(opcional)"),t()(),i(3518,"p"),e(3519,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas menores (sm)."),t(),i(3520,"p"),e(3521,"Deve ser usado o sistema de "),i(3522,"strong"),e(3523,"grid"),t(),e(3524," do PO (1 ... 12 colunas)."),t(),i(3525,"blockquote")(3526,"p"),e(3527,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(3528,"code"),e(3529,"offsetColumns"),t(),e(3530,"."),t()()()(),i(3531,"tr",16)(3532,"td",17)(3533,"div",24)(3534,"span",25),e(3535," offsetXlColumns"),n(3536,"br"),t()()(),i(3537,"td",20)(3538,"code",43),e(3539,"number"),t()(),i(3540,"td",23)(3541,"em")(3542,"strong"),e(3543,"(opcional)"),t()(),i(3544,"p"),e(3545,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),t(),i(3546,"p"),e(3547,"Deve ser usado o sistema de "),i(3548,"strong"),e(3549,"grid"),t(),e(3550," do PO (1 ... 12 colunas)."),t(),i(3551,"blockquote")(3552,"p"),e(3553,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(3554,"code"),e(3555,"offsetColumns"),t(),e(3556,"."),t()()()(),i(3557,"tr",16)(3558,"td",17)(3559,"div",24)(3560,"span",25),e(3561," onError"),n(3562,"br"),t()()(),i(3563,"td",20)(3564,"code",42),e(3565,"Function"),t()(),i(3566,"td",23)(3567,"em")(3568,"strong"),e(3569,"(opcional)"),t()(),i(3570,"p"),e(3571,"Evento ser\xE1 disparado quando ocorrer algum erro no envio do arquivo."),t(),i(3572,"blockquote")(3573,"p"),e(3574,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),i(3575,"code"),e(3576,"HttpErrorResponse"),t(),e(3577,"."),t()(),i(3578,"p")(3579,"strong"),e(3580,"Componente compat\xEDvel"),t(),e(3581,": "),i(3582,"code"),e(3583,"po-upload"),t()()()(),i(3584,"tr",16)(3585,"td",17)(3586,"div",24)(3587,"span",25),e(3588," onSuccess"),n(3589,"br"),t()()(),i(3590,"td",20)(3591,"code",42),e(3592,"Function"),t()(),i(3593,"td",23)(3594,"em")(3595,"strong"),e(3596,"(opcional)"),t()(),i(3597,"p"),e(3598,"Evento ser\xE1 disparado quando o envio do arquivo for realizado com sucesso."),t(),i(3599,"blockquote")(3600,"p"),e(3601,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),i(3602,"code"),e(3603,"HttpResponse"),t(),e(3604,"."),t()(),i(3605,"p")(3606,"strong"),e(3607,"Componente compat\xEDvel"),t(),e(3608,": "),i(3609,"code"),e(3610,"po-upload"),t()()()(),i(3611,"tr",16)(3612,"td",17)(3613,"div",24)(3614,"span",25),e(3615," onUpload"),n(3616,"br"),t()()(),i(3617,"td",20)(3618,"code",42),e(3619,"Function"),t()(),i(3620,"td",23)(3621,"em")(3622,"strong"),e(3623,"(opcional)"),t()(),i(3624,"p"),e(3625,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e a propriedade data nesta propriedade pode ser informado algum dado,
que ser\xE1 enviado em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),t(),i(3626,"pre")(3627,"code"),e(3628,`event.data = {id: 'id do usu\xE1rio'};
`),t()(),i(3629,"p")(3630,"strong"),e(3631,"Componente compat\xEDvel"),t(),e(3632,": "),i(3633,"code"),e(3634,"po-upload"),t()()()(),i(3635,"tr",16)(3636,"td",17)(3637,"div",24)(3638,"span",25),e(3639," optional"),n(3640,"br"),t()()(),i(3641,"td",20)(3642,"code",28),e(3643,"boolean"),t()(),i(3644,"td",23)(3645,"em")(3646,"strong"),e(3647,"(opcional)"),t()(),i(3648,"p"),e(3649,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),i(3650,"blockquote")(3651,"p"),e(3652,"A indica\xE7\xE3o n\xE3o ser\xE1 exibida, se:"),t()(),i(3653,"ul")(3654,"li"),e(3655,"O campo for "),i(3656,"code"),e(3657,"required"),t(),e(3658,", ou;"),t(),i(3659,"li"),e(3660,"N\xE3o possuir "),i(3661,"code"),e(3662,"help"),t(),e(3663," e "),i(3664,"code"),e(3665,"label"),t(),e(3666,"."),t()()()(),i(3667,"tr",16)(3668,"td",17)(3669,"div",24)(3670,"span",25),e(3671," options"),n(3672,"br"),t()()(),i(3673,"td",20)(3674,"code",31),e(3675,"Array<string> "),t(),i(3676,"code",64),e(3677," Array<PoSelectOption> "),t(),i(3678,"code",65),e(3679," Array<PoMultiselectOption> "),t(),i(3680,"code",66),e(3681," Array<PoCheckboxGroupOption> "),t(),i(3682,"code",67),e(3683," Array<any>"),t()(),i(3684,"td",23)(3685,"em")(3686,"strong"),e(3687,"(opcional)"),t()(),i(3688,"p"),e(3689,"Lista de op\xE7\xF5es que ser\xE3o exibidos em um componente, podendo selecionar uma op\xE7\xE3o."),t(),i(3690,"p")(3691,"strong"),e(3692,"Componentes compat\xEDveis:"),t(),i(3693,"code"),e(3694,"po-select"),t(),e(3695,", "),i(3696,"code"),e(3697,"po-radio-group"),t(),e(3698,", "),i(3699,"code"),e(3700,"po-checkbox-group"),t(),e(3701,", "),i(3702,"code"),e(3703,"po-multiselect"),t(),e(3704,"."),t()()(),i(3705,"tr",16)(3706,"td",17)(3707,"div",24)(3708,"span",25),e(3709," optionsMulti"),n(3710,"br"),t()()(),i(3711,"td",20)(3712,"code",28),e(3713,"boolean"),t()(),i(3714,"td",23)(3715,"em")(3716,"strong"),e(3717,"(opcional)"),t()(),i(3718,"p"),e(3719,"Permite que o usu\xE1rio fa\xE7a m\xFAltipla sele\xE7\xE3o dentro da lista de op\xE7\xF5es."),t()()(),i(3720,"tr",16)(3721,"td",17)(3722,"div",24)(3723,"span",25),e(3724," optionsService"),n(3725,"br"),t()()(),i(3726,"td",20)(3727,"code",26),e(3728,"string "),t(),i(3729,"code",68),e(3730," PoComboFilter "),t(),i(3731,"code",69),e(3732," PoMultiselectFilter"),t()(),i(3733,"td",23)(3734,"em")(3735,"strong"),e(3736,"(opcional)"),t()(),i(3737,"p"),e(3738,"Servi\xE7o que ser\xE1 utilizado para buscar os itens e preencher a lista de op\xE7\xF5es dinamicamente. Pode ser informada uma URL ou uma instancia do servi\xE7o baseado em PoComboFilter. "),i(3739,"strong"),e(3740,"Importante"),t()(),i(3741,"blockquote")(3742,"p"),e(3743,"Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o "),i(3744,"a",7),e(3745,"guia de API do PO UI"),t(),e(3746,"."),t()()()(),i(3747,"tr",16)(3748,"td",17)(3749,"div",24)(3750,"span",25),e(3751," order"),n(3752,"br"),t()()(),i(3753,"td",20)(3754,"code",43),e(3755,"number"),t()(),i(3756,"td",23)(3757,"em")(3758,"strong"),e(3759,"(opcional)"),t()(),i(3760,"p"),e(3761,"Informa a ordem de exibi\xE7\xE3o do campo."),t(),i(3762,"p"),e(3763,"Exemplo de utiliza\xE7\xE3o:"),t(),i(3764,"p")(3765,"code"),e(3766,"[ { property: 'test 1', order: 2 }, { property: 'test 2', order: 1 }, { property: 'test 3' }, { property: 'test 4', order: 3 } ];"),t()(),i(3767,"p"),e(3768,`Na exibi\xE7\xE3o a ordem ficar\xE1 dessa forma:
`),i(3769,"code"),e(3770,"[ { property: 'test 2', order: 1 }, { property: 'test 1', order: 2 }, { property: 'test 4', order: 3 }, { property: 'test 3' } ];"),t()(),i(3771,"p"),e(3772,"S\xF3 ser\xE3o aceitos valores com n\xFAmeros inteiros maiores do que zero."),t(),i(3773,"p"),e(3774,"Campos sem "),i(3775,"code"),e(3776,"order"),t(),e(3777,` ou com valores negativos, zerados ou inv\xE1lidos
ser\xE3o os \xFAltimos a serem renderizados e seguir\xE3o o posicionamento dentro do
array.`),t()()(),i(3778,"tr",16)(3779,"td",17)(3780,"div",24)(3781,"span",25),e(3782," params"),n(3783,"br"),t()()(),i(3784,"td",20)(3785,"code",32),e(3786,"any"),t()(),i(3787,"td",23)(3788,"em")(3789,"strong"),e(3790,"(opcional)"),t()(),i(3791,"p"),e(3792,"Objeto que ser\xE1 enviado como par\xE2metro nas requisi\xE7\xF5es de busca usados pelos componentes "),i(3793,"code"),e(3794,"po-lookup"),t(),e(3795,` e
`),i(3796,"code"),e(3797,"po-combo"),t(),e(3798,"."),t(),i(3799,"p"),e(3800,"Por exemplo, para o par\xE2metro "),i(3801,"code"),e(3802,"{ age: 23 }"),t(),e(3803," a URL da requisi\xE7\xE3o ficaria:"),t(),i(3804,"p")(3805,"code"),e(3806,"url + ?age=23&filter=Peter"),t()()()(),i(3807,"tr",16)(3808,"td",17)(3809,"div",24)(3810,"span",25),e(3811," pattern"),n(3812,"br"),t()()(),i(3813,"td",20)(3814,"code",26),e(3815,"string"),t()(),i(3816,"td",23)(3817,"em")(3818,"strong"),e(3819,"(opcional)"),t()(),i(3820,"p"),e(3821,"Regex para valida\xE7\xE3o do campo."),t(),i(3822,"p")(3823,"strong"),e(3824,"Componentes compat\xEDveis:"),t(),i(3825,"code"),e(3826,"po-input"),t(),e(3827,", "),i(3828,"code"),e(3829,"po-password"),t(),e(3830,"."),t()()(),i(3831,"tr",16)(3832,"td",17)(3833,"div",24)(3834,"span",25),e(3835," placeholder"),n(3836,"br"),t()()(),i(3837,"td",20)(3838,"code",26),e(3839,"string"),t()(),i(3840,"td",23)(3841,"em")(3842,"strong"),e(3843,"(opcional)"),t()(),i(3844,"p"),e(3845,"Mensagem que ser\xE1 exibida enquanto o campo n\xE3o estiver preenchido."),t()()(),i(3846,"tr",16)(3847,"td",17)(3848,"div",24)(3849,"span",25),e(3850," placeholderSearch"),n(3851,"br"),t()()(),i(3852,"td",20)(3853,"code",26),e(3854,"string"),t()(),i(3855,"td",23)(3856,"em")(3857,"strong"),e(3858,"(opcional)"),t()(),i(3859,"p"),e(3860,"Placeholder do campo de pesquisa do "),i(3861,"code"),e(3862,"po-multiselect"),t(),e(3863,"."),t(),i(3864,"blockquote")(3865,"p"),e(3866,"Caso o mesmo n\xE3o seja informado, o valor padr\xE3o ser\xE1 traduzido com base no idioma do navegador (pt, es e en)."),t()()()(),i(3867,"tr",16)(3868,"td",17)(3869,"div",24)(3870,"span",25),e(3871," property"),n(3872,"br"),t()()(),i(3873,"td",20)(3874,"code",26),e(3875,"string"),t()(),i(3876,"td",23)(3877,"p"),e(3878,"Nome de refer\xEAncia do campo."),t()()(),i(3879,"tr",16)(3880,"td",17)(3881,"div",24)(3882,"span",25),e(3883," range"),n(3884,"br"),t()()(),i(3885,"td",20)(3886,"code",28),e(3887,"boolean"),t()(),i(3888,"td",23)(3889,"em")(3890,"strong"),e(3891,"(opcional)"),t()(),i(3892,"p"),e(3893,"O controle passa a permitir a entrada de um intervalo ao inv\xE9s de um \xFAnico valor."),t(),i(3894,"blockquote")(3895,"p"),e(3896,"Atualmente essa propriedade est\xE1 dispon\xEDvel apenas para o tipo 'date' e 'dateTime'."),t()()()(),i(3897,"tr",16)(3898,"td",17)(3899,"div",24)(3900,"span",25),e(3901," readonly"),n(3902,"br"),t()()(),i(3903,"td",20)(3904,"code",28),e(3905,"boolean"),t()(),i(3906,"td",23)(3907,"em")(3908,"strong"),e(3909,"(opcional)"),t()(),i(3910,"p"),e(3911,"Indica que o campo ser\xE1 somente leitura."),t(),i(3912,"p")(3913,"strong"),e(3914,"Componentes compat\xEDveis:"),t(),i(3915,"code"),e(3916,"po-datepicker"),t(),e(3917,", "),i(3918,"code"),e(3919,"po-datepicker-range"),t(),e(3920,", "),i(3921,"code"),e(3922,"po-input"),t(),e(3923,", "),i(3924,"code"),e(3925,"po-number"),t(),e(3926,", "),i(3927,"code"),e(3928,"po-decimal"),t(),e(3929,", "),i(3930,"code"),e(3931,"po-select"),t(),e(3932,", "),i(3933,"code"),e(3934,"po-textarea"),t(),e(3935,", "),i(3936,"code"),e(3937,"po-password"),t()()()(),i(3938,"tr",16)(3939,"td",17)(3940,"div",24)(3941,"span",25),e(3942," removeInitialFilter"),n(3943,"br"),t()()(),i(3944,"td",20)(3945,"code",28),e(3946,"boolean"),t()(),i(3947,"td",23)(3948,"em")(3949,"strong"),e(3950,"(opcional)"),t()(),i(3951,"p"),e(3952,"Define que o filtro no primeiro clique ser\xE1 removido."),t(),i(3953,"blockquote")(3954,"p"),e(3955,`Caso o combo tenha um valor padr\xE3o de inicializa\xE7\xE3o, o primeiro clique
no componente retornar\xE1 todos os itens da lista e n\xE3o apenas o item inicialiazado.`),t()(),i(3956,"p")(3957,"strong"),e(3958,"Componente compat\xEDvel"),t(),e(3959,": "),i(3960,"code"),e(3961,"po-combo"),t()()()(),i(3962,"tr",16)(3963,"td",17)(3964,"div",24)(3965,"span",25),e(3966," required"),n(3967,"br"),t()()(),i(3968,"td",20)(3969,"code",28),e(3970,"boolean"),t()(),i(3971,"td",23)(3972,"em")(3973,"strong"),e(3974,"(opcional)"),t()(),i(3975,"p"),e(3976,"Define a obrigatoriedade do campo."),t()()(),i(3977,"tr",16)(3978,"td",17)(3979,"div",24)(3980,"span",25),e(3981," requiredFieldErrorMessage"),n(3982,"br"),t()()(),i(3983,"td",20)(3984,"code",28),e(3985,"boolean"),t()(),i(3986,"td",23)(3987,"em")(3988,"strong"),e(3989,"(opcional)"),t()(),i(3990,"p"),e(3991,"Exibe a mensagem setada na propriedade "),i(3992,"code"),e(3993,"errorMessage"),t(),e(3994," se o campo estiver vazio e for requerido."),t(),i(3995,"blockquote")(3996,"p"),e(3997,"Necess\xE1rio que a propriedade "),i(3998,"code"),e(3999,"required"),t(),e(4e3," esteja habilitada."),t()(),i(4001,"p")(4002,"strong"),e(4003,"Componentes compat\xEDveis:"),t(),i(4004,"code"),e(4005,"po-datepicker"),t(),e(4006,", "),i(4007,"code"),e(4008,"po-input"),t(),e(4009,", "),i(4010,"code"),e(4011,"po-number"),t(),e(4012,", "),i(4013,"code"),e(4014,"po-decimal"),t(),e(4015,", "),i(4016,"code"),e(4017,"po-password"),t(),e(4018,"."),t()()(),i(4019,"tr",16)(4020,"td",17)(4021,"div",24)(4022,"span",25),e(4023," restrictions"),n(4024,"br"),t()()(),i(4025,"td",20)(4026,"code",70),e(4027,"PoUploadFileRestrictions"),t()(),i(4028,"td",23)(4029,"em")(4030,"strong"),e(4031,"(opcional)"),t()(),i(4032,"p"),e(4033,"Objeto que segue a defini\xE7\xE3o da interface "),i(4034,"code"),e(4035,"PoUploadFileRestrictions"),t(),e(4036,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),t(),i(4037,"p")(4038,"strong"),e(4039,"Componente compat\xEDvel"),t(),e(4040,": "),i(4041,"code"),e(4042,"po-upload"),t()()()(),i(4043,"tr",16)(4044,"td",17)(4045,"div",24)(4046,"span",25),e(4047," rows"),n(4048,"br"),t()()(),i(4049,"td",20)(4050,"code",43),e(4051,"number"),t()(),i(4052,"td",23)(4053,"em")(4054,"strong"),e(4055,"(opcional)"),t()(),i(4056,"p"),e(4057,"Quantidade de linhas exibidas no "),i(4058,"code"),e(4059,"po-textarea"),t(),e(4060,"."),t()()(),i(4061,"tr",16)(4062,"td",17)(4063,"div",24)(4064,"span",25),e(4065," searchService"),n(4066,"br"),t()()(),i(4067,"td",20)(4068,"code",26),e(4069,"string "),t(),i(4070,"code",33),e(4071," PoLookupFilter"),t()(),i(4072,"td",23)(4073,"em")(4074,"strong"),e(4075,"(opcional)"),t()(),i(4076,"p"),e(4077,"Servi\xE7o que ser\xE1 utilizado para realizar a busca avan\xE7ada. Pode ser utilizado em conjunto com a propriedade "),i(4078,"code"),e(4079,"columns"),t(),e(4080,`.
Pode ser ser informada uma URL ou uma instancia do servi\xE7o baseado em PoLookupFilter.
`),i(4081,"strong"),e(4082,"Importante:"),t()(),i(4083,"blockquote")(4084,"p"),e(4085,"Caso utilizar a propriedade "),i(4086,"code"),e(4087,"optionsService"),t(),e(4088,` esta propriedade ser\xE1 ignorada.
Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),i(4089,"a",7),e(4090,"guia de API do PO UI"),t(),e(4091,"."),t()()()(),i(4092,"tr",16)(4093,"td",17)(4094,"div",24)(4095,"span",25),e(4096," secret"),n(4097,"br"),t()()(),i(4098,"td",20)(4099,"code",28),e(4100,"boolean"),t()(),i(4101,"td",23)(4102,"em")(4103,"strong"),e(4104,"(opcional)"),t()(),i(4105,"p"),e(4106,"Esconde a informa\xE7\xE3o estilo "),i(4107,"em"),e(4108,"password"),t(),e(4109,", pode ser utilizado quando o tipo de dado for "),i(4110,"em"),e(4111,"string"),t(),e(4112,"."),t()()(),i(4113,"tr",16)(4114,"td",17)(4115,"div",24)(4116,"span",25),e(4117," showRequired"),n(4118,"br"),t()()(),i(4119,"td",20)(4120,"code",28),e(4121,"boolean"),t()(),i(4122,"td",23)(4123,"em")(4124,"strong"),e(4125,"(opcional)"),t()(),i(4126,"p"),e(4127,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),i(4128,"blockquote")(4129,"p"),e(4130,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),i(4131,"ul")(4132,"li"),e(4133,"N\xE3o possuir "),i(4134,"code"),e(4135,"p-help"),t(),e(4136," e/ou "),i(4137,"code"),e(4138,"p-label"),t(),e(4139,"."),t()()()(),i(4140,"tr",16)(4141,"td",17)(4142,"div",24)(4143,"span",25),e(4144," size"),n(4145,"br"),t()()(),i(4146,"td",20)(4147,"code",26),e(4148,"string"),t()(),i(4149,"td",23)(4150,"em")(4151,"strong"),e(4152,"(opcional)"),t()(),i(4153,"p"),e(4154,"Define o tamanho dos componentes de formul\xE1rio no template conforme suas respectivas documenta\xE7\xF5es:"),t(),i(4155,"ul")(4156,"li")(4157,"code"),e(4158,"small"),t(),e(4159,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),i(4160,"li")(4161,"code"),e(4162,"medium"),t(),e(4163,": aplica a medida medium de cada componente."),t(),i(4164,"li")(4165,"code"),e(4166,"large"),t(),e(4167,": aplica a medida large de cada componente (dispon\xEDvel para "),i(4168,"code"),e(4169,"po-checkbox"),t(),e(4170," e "),i(4171,"code"),e(4172,"po-radio-group"),t(),e(4173,")."),i(4174,"blockquote")(4175,"p"),e(4176,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(4177,"code"),e(4178,"medium"),t(),e(4179,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(4180,"a",37),e(4181,"po-theme"),t(),e(4182,"."),t()()()()()(),i(4183,"tr",16)(4184,"td",17)(4185,"div",24)(4186,"span",25),e(4187," sort"),n(4188,"br"),t()()(),i(4189,"td",20)(4190,"code",28),e(4191,"boolean"),t()(),i(4192,"td",23)(4193,"em")(4194,"strong"),e(4195,"(opcional)"),t()(),i(4196,"p"),e(4197,"Indica que a lista definida na propriedade p-options ser\xE1 ordenada pela descri\xE7\xE3o."),t(),i(4198,"p")(4199,"strong"),e(4200,"Componentes compat\xEDveis:"),t(),i(4201,"code"),e(4202,"po-combo"),t(),e(4203,", po-multiselect"),t()()(),i(4204,"tr",16)(4205,"td",17)(4206,"div",24)(4207,"span",25),e(4208," step"),n(4209,"br"),t()()(),i(4210,"td",20)(4211,"code",43),e(4212,"number"),t()(),i(4213,"td",23)(4214,"em")(4215,"strong"),e(4216,"(opcional)"),t()(),i(4217,"p"),e(4218,"Intervalo utilizado no "),i(4219,"code"),e(4220,"po-number"),t(),e(4221,"."),t()()(),i(4222,"tr",16)(4223,"td",17)(4224,"div",24)(4225,"span",25),e(4226," thousandMaxlength"),n(4227,"br"),t()()(),i(4228,"td",20)(4229,"code",43),e(4230,"number"),t()(),i(4231,"td",23)(4232,"em")(4233,"strong"),e(4234,"(opcional)"),t()(),i(4235,"p"),e(4236,"Quantidade m\xE1xima de d\xEDgitos antes do separador decimal. O valor m\xE1ximo permitido \xE9 13"),t(),i(4237,"blockquote")(4238,"p"),e(4239,"Esta propriedade s\xF3 pode ser utilizada quando o "),i(4240,"code"),e(4241,"type"),t(),e(4242," for "),i(4243,"em"),e(4244,"currency"),t(),e(4245," ou "),i(4246,"em"),e(4247,"decimal"),t(),e(4248,"."),t()()()(),i(4249,"tr",16)(4250,"td",17)(4251,"div",24)(4252,"span",25),e(4253," type"),n(4254,"br"),t()()(),i(4255,"td",20)(4256,"code",26),e(4257,"string "),t(),i(4258,"code",71),e(4259," PoDynamicFieldType"),t()(),i(4260,"td",23)(4261,"em")(4262,"strong"),e(4263,"(opcional)"),t()(),i(4264,"p"),e(4265,"Tipo do valor campo."),t(),i(4266,"p"),e(4267,"Valores v\xE1lidos:"),t(),i(4268,"ul")(4269,"li")(4270,"code"),e(4271,"boolean"),t(),e(4272,": Valores "),i(4273,"em"),e(4274,"booleanos"),t(),e(4275,"."),t(),i(4276,"li")(4277,"code"),e(4278,"currency"),t(),e(4279,": Valores monet\xE1rios."),t(),i(4280,"li")(4281,"code"),e(4282,"decimal"),t(),e(4283,": Valores decimais."),t(),i(4284,"li")(4285,"code"),e(4286,"date"),t(),e(4287,": Valores de datas."),t()(),i(4288,"ul")(4289,"li"),e(4290,"Aceita os tipos "),i(4291,"strong"),e(4292,"string"),t(),e(4293," e "),i(4294,"strong"),e(4295,"Date"),t(),e(4296," padr\xE3o do Javascript, por exemplo: "),i(4297,"code"),e(4298,"'2017-11-28'"),t(),e(4299," ou "),i(4300,"code"),e(4301,"new Date(2017, 10, 28)"),t(),e(4302,"."),t()(),i(4303,"ul")(4304,"li")(4305,"code"),e(4306,"dateTime"),t(),e(4307,": Valor de data com hor\xE1rio."),t()(),i(4308,"ul")(4309,"li"),e(4310,"Aceita o tipo "),i(4311,"em"),e(4312,"string"),t(),e(4313," no formato "),i(4314,"strong"),e(4315,"ISO-8601"),t(),e(4316," extendido "),i(4317,"strong"),e(4318,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),t(),e(4319,`
e o tipo `),i(4320,"strong"),e(4321,"Date"),t(),e(4322," padr\xE3o do Javascript, por exemplo: "),i(4323,"code"),e(4324,"'2017-11-28T00:00:00-02:00'"),t(),e(4325," ou "),i(4326,"code"),e(4327,"new Date(2017, 10, 28)"),t(),e(4328,"."),t()(),i(4329,"ul")(4330,"li")(4331,"code"),e(4332,"number"),t(),e(4333,": Valores num\xE9ricos."),t(),i(4334,"li")(4335,"code"),e(4336,"string"),t(),e(4337,": Textos."),t(),i(4338,"li")(4339,"code"),e(4340,"time"),t(),e(4341,": Valor do hor\xE1rio."),t()(),i(4342,"ul")(4343,"li"),e(4344,"Aceita o tipo "),i(4345,"strong"),e(4346,"string"),t(),e(4347," nos formatos "),i(4348,"strong"),e(4349,"'HH:mm:ss'"),t(),e(4350," ou "),i(4351,"strong"),e(4352,"'HH:mm:ss.ffffff'"),t(),e(4353,", por exemplo: "),i(4354,"code"),e(4355,"'23:12:45'"),t(),e(4356,"."),t()()()(),i(4357,"tr",16)(4358,"td",17)(4359,"div",24)(4360,"span",25),e(4361," url"),n(4362,"br"),t()()(),i(4363,"td",20)(4364,"code",26),e(4365,"string"),t()(),i(4366,"td",23)(4367,"em")(4368,"strong"),e(4369,"(opcional)"),t()(),i(4370,"p"),e(4371,"URL que deve ser feita a requisi\xE7\xE3o com os arquivos selecionados."),t(),i(4372,"p")(4373,"strong"),e(4374,"Componente compat\xEDvel"),t(),e(4375,": "),i(4376,"code"),e(4377,"po-upload"),t()()()(),i(4378,"tr",16)(4379,"td",17)(4380,"div",24)(4381,"span",25),e(4382," validate"),n(4383,"br"),t()()(),i(4384,"td",20)(4385,"code",26),e(4386,"string "),t(),i(4387,"code",42),e(4388," Function"),t()(),i(4389,"td",23)(4390,"em")(4391,"strong"),e(4392,"(opcional)"),t()(),i(4393,"p"),e(4394,"Fun\xE7\xE3o ou servi\xE7o para validar as "),i(4395,"strong"),e(4396,"mudan\xE7as do campo"),t(),e(4397,"."),t(),i(4398,"ul")(4399,"li"),e(4400,"A propriedade aceita os seguintes tipos:"),t()(),i(4401,"ul")(4402,"li")(4403,"strong"),e(4404,"String"),t(),e(4405,": Endpoint usado pelo componente para requisi\xE7\xE3o via "),i(4406,"code"),e(4407,"POST"),t(),e(4408,"."),t(),i(4409,"li")(4410,"strong"),e(4411,"Function"),t(),e(4412,": M\xE9todo que ser\xE1 executado."),t()(),i(4413,"p"),e(4414,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e o novo valor, conforme a interface `),i(4415,"code"),e(4416,"PoDynamicFormFieldChanged"),t(),e(4417,":"),t(),i(4418,"p")(4419,"code"),e(4420,"{ property: 'property name', value: 'new value' }"),t()(),i(4421,"p"),e(4422,"O retorno desta fun\xE7\xE3o deve ser do tipo "),i(4423,"a",72),e(4424,"PoDynamicFormFieldValidation"),t(),e(4425,`,
onde o usu\xE1rio poder\xE1 determinar as novas propriedades do campo.
Por exemplo:`),t(),i(4426,"pre")(4427,"code"),e(4428,`onChangeField(changeValue): PoDynamicFormFieldValidation {

if (changeValue.property === 'birthday' && !this.validate('birthday')) {
  return {
    value: '',
    field: { property: 'birthday', required: true },
    focus: true
  };
}
`),t()(),i(4429,"p"),e(4430,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),i(4431,"code"),e(4432,"bind"),t(),e(4433,`, por exemplo:
`),i(4434,"code"),e(4435,"{ property: 'state', gridColumns: 6, validate: this.myFunction.bind(this) }"),t()()()(),i(4436,"tr",16)(4437,"td",17)(4438,"div",24)(4439,"span",25),e(4440," visible"),n(4441,"br"),t()()(),i(4442,"td",20)(4443,"code",28),e(4444,"boolean"),t()(),i(4445,"td",23)(4446,"em")(4447,"strong"),e(4448,"(opcional)"),t()(),i(4449,"p"),e(4450,"Indica se o campo ser\xE1 vis\xEDvel."),t()()()(),i(4451,"h4",41)(4452,"code",5),e(4453,"PoLookupColumn"),t()(),i(4454,"div",2)(4455,"p"),e(4456,"Interface para configura\xE7\xE3o das colunas do po-lookup."),t()(),i(4457,"h4",12),e(4458,"Propriedades"),t(),i(4459,"table",13)(4460,"tr",14)(4461,"th",15),e(4462,"Nome"),t(),i(4463,"th",15),e(4464,"Tipo"),t(),i(4465,"th",15),e(4466,"Descri\xE7\xE3o"),t()(),i(4467,"tr",16)(4468,"td",17)(4469,"div",24)(4470,"span",25),e(4471," fieldLabel"),n(4472,"br"),t()()(),i(4473,"td",20)(4474,"code",28),e(4475,"boolean"),t()(),i(4476,"td",23)(4477,"em")(4478,"strong"),e(4479,"(opcional)"),t()(),i(4480,"p"),e(4481,"Indica que a coluna ser\xE1 utilizada como valor do campo e como filtro dentro da modal."),t(),i(4482,"p"),e(4483,`Se houver mais de uma configura\xE7\xE3o habilitada, \xE9 exibido os valores no campo concatenados separados
por um tra\xE7o("-"). Por exemplo: "Joinville - SC".`),t(),i(4484,"p"),e(4485,`Importante
Esta configura\xE7\xE3o se torna obsoleta caso os atributos `),i(4486,"code"),e(4487,"p-field-format"),t(),e(4488," ou "),i(4489,"code"),e(4490,"p-field-label"),t(),e(4491," forem configurados no componente."),t()()(),i(4492,"tr",16)(4493,"td",17)(4494,"div",24)(4495,"span",25),e(4496," format"),n(4497,"br"),t()()(),i(4498,"td",20)(4499,"code",26),e(4500,"string"),t()(),i(4501,"td",23)(4502,"em")(4503,"strong"),e(4504,"(opcional)"),t()(),i(4505,"p"),e(4506,"Formato de exibi\xE7\xE3o do valor da coluna:"),t(),i(4507,"ul")(4508,"li"),e(4509,"Formato para moeda (currency). Exemplos: 'BRL', 'USD'."),t(),i(4510,"li"),e(4511,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
valor padr\xE3o \xE9 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),t()()()(),i(4512,"tr",16)(4513,"td",17)(4514,"div",24)(4515,"span",25),e(4516," label"),n(4517,"br"),t()()(),i(4518,"td",20)(4519,"code",26),e(4520,"string"),t()(),i(4521,"td",23)(4522,"em")(4523,"strong"),e(4524,"(opcional)"),t()(),i(4525,"p"),e(4526,"Texto para t\xEDtulo da coluna."),t(),i(4527,"p"),e(4528,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),i(4529,"em"),e(4530,"label"),t(),e(4531," o valor da propriedade "),i(4532,"em"),e(4533,"property"),t(),e(4534," com a primeira letra em mai\xFAsculo."),t()()(),i(4535,"tr",16)(4536,"td",17)(4537,"div",24)(4538,"span",25),e(4539," property"),n(4540,"br"),t()()(),i(4541,"td",20)(4542,"code",26),e(4543,"string"),t()(),i(4544,"td",23)(4545,"em")(4546,"strong"),e(4547,"(opcional)"),t()(),i(4548,"p"),e(4549,"Nome identificador da coluna."),t()()(),i(4550,"tr",16)(4551,"td",17)(4552,"div",24)(4553,"span",25),e(4554," type"),n(4555,"br"),t()()(),i(4556,"td",20)(4557,"code",26),e(4558,"string"),t()(),i(4559,"td",23)(4560,"em")(4561,"strong"),e(4562,"(opcional)"),t()(),i(4563,"p"),e(4564,"Tipo da coluna:"),t(),i(4565,"ul")(4566,"li"),e(4567,"string (padr\xE3o): textos"),t(),i(4568,"li"),e(4569,"number: valores num\xE9ricos"),t(),i(4570,"li"),e(4571,"date: data"),t(),i(4572,"li"),e(4573,"currency: valores monet\xE1rios"),t(),i(4574,"li"),e(4575,"dateTime: data e hora"),t()()()(),i(4576,"tr",16)(4577,"td",17)(4578,"div",24)(4579,"span",25),e(4580," width"),n(4581,"br"),t()()(),i(4582,"td",20)(4583,"code",26),e(4584,"string"),t()(),i(4585,"td",23)(4586,"em")(4587,"strong"),e(4588,"(opcional)"),t()(),i(4589,"p"),e(4590,"A largura da coluna pode ser informada em pixels ou porcentagem. Exemplo: '100px' ou '20%'"),t()()()(),i(4591,"h4",41)(4592,"code",5),e(4593,"PoLookupFilter"),t()(),i(4594,"div",2)(4595,"p"),e(4596,"Define o tipo de busca utilizado no po-lookup."),t()(),i(4597,"h4",12),e(4598,"M\xE9todos"),t(),i(4599,"table",39)(4600,"tr",16)(4601,"th",40)(4602,"div",24)(4603,"h4")(4604,"span",25),e(4605," getFilteredItems "),t()()()()(),i(4606,"tr",23)(4607,"td",23)(4608,"p"),e(4609,`M\xE9todo que ser\xE1 disparado ao filtrar a lista de itens ou carregar mais resultados no componente, deve-se retornar
um `),i(4610,"em"),e(4611,"Observable"),t(),e(4612," com a resposta da API no formato da interface "),i(4613,"code"),e(4614,"PoLookupResponseApi"),t(),e(4615,"."),t()()()(),i(4616,"h5")(4617,"b"),e(4618,"Par\xE2metros"),t()(),i(4619,"table",13)(4620,"tr",14)(4621,"th",15),e(4622,"Nome"),t(),i(4623,"th",15),e(4624,"Tipo"),t(),i(4625,"th",15),e(4626,"Descri\xE7\xE3o"),t()(),i(4627,"tr",16)(4628,"td",17),e(4629," params"),t(),i(4630,"td",20)(4631,"code",73),e(4632," PoLookupFilteredItemsParams "),t()(),i(4633,"td",23)(4634,"p"),e(4635,"Objeto enviado por par\xE2metro que implementa a interface "),i(4636,"code"),e(4637,"PoLookupFilteredItemsParams"),t(),e(4638,"."),t()()()(),n(4639,"br"),i(4640,"table",39)(4641,"tr",16)(4642,"th",40)(4643,"div",24)(4644,"h4")(4645,"span",25),e(4646," getObjectByValue "),t()()()()(),i(4647,"tr",23)(4648,"td",23)(4649,"p"),e(4650,"M\xE9todo respons\xE1vel por enviar um valor que ser\xE1 buscado no servi\xE7o."),t(),i(4651,"p"),e(4652,`Caso a funcionalidade de m\xFAltipla sele\xE7\xE3o estver habilitada, o parametro value ser\xE1 enviado como uma lista de valores
e o observable deve retornar uma lista de objetos.`),t()()()(),i(4653,"h5")(4654,"b"),e(4655,"Par\xE2metros"),t()(),i(4656,"table",13)(4657,"tr",14)(4658,"th",15),e(4659,"Nome"),t(),i(4660,"th",15),e(4661,"Tipo"),t(),i(4662,"th",15),e(4663,"Descri\xE7\xE3o"),t()(),i(4664,"tr",16)(4665,"td",17),e(4666," value"),t(),i(4667,"td",20)(4668,"code",26),e(4669," string "),t(),i(4670,"code",67),e(4671," Array<any> "),t()(),i(4672,"td",23)(4673,"p"),e(4674,"Valor \xFAnico a ser buscado na fonte de dados."),t()()(),i(4675,"tr",16)(4676,"td",17),e(4677," filterParams"),t(),i(4678,"td",20)(4679,"code",73),e(4680," any "),t()(),i(4681,"td",23)(4682,"p"),e(4683,"Valor informado atrav\xE9s da propriedade "),i(4684,"code"),e(4685,"p-filter-params"),t(),e(4686,"."),t()()()(),n(4687,"br"),i(4688,"h4",41)(4689,"code",5),e(4690,"PoLookupFilteredItemsParams"),t()(),i(4691,"div",2)(4692,"p"),e(4693,"Interface do objeto enviado como par\xE2metro na fun\xE7\xE3o "),i(4694,"code"),e(4695,"getFilteredItems"),t(),e(4696,"."),t()(),i(4697,"h4",12),e(4698,"Propriedades"),t(),i(4699,"table",13)(4700,"tr",14)(4701,"th",15),e(4702,"Nome"),t(),i(4703,"th",15),e(4704,"Tipo"),t(),i(4705,"th",15),e(4706,"Descri\xE7\xE3o"),t()(),i(4707,"tr",16)(4708,"td",17)(4709,"div",24)(4710,"span",25),e(4711," advancedFilters"),n(4712,"br"),t()()(),i(4713,"td",20)(4714,"code",74),e(4715,`{ [key: string]: any;
}`),t()(),i(4716,"td",23)(4717,"em")(4718,"strong"),e(4719,"(opcional)"),t()(),i(4720,"p"),e(4721,"Valores informados nos campos de busca avan\xE7ada, que ser\xE3o utilizados para filtrar a lista de itens."),t()()(),i(4722,"tr",16)(4723,"td",17)(4724,"div",24)(4725,"span",25),e(4726," filter"),n(4727,"br"),t()()(),i(4728,"td",20)(4729,"code",26),e(4730,"string"),t()(),i(4731,"td",23)(4732,"em")(4733,"strong"),e(4734,"(opcional)"),t()(),i(4735,"p"),e(4736,"Conte\xFAdo utilizado para filtrar a lista de itens."),t()()(),i(4737,"tr",16)(4738,"td",17)(4739,"div",24)(4740,"span",25),e(4741," filterParams"),n(4742,"br"),t()()(),i(4743,"td",20)(4744,"code",32),e(4745,"any"),t()(),i(4746,"td",23)(4747,"em")(4748,"strong"),e(4749,"(opcional)"),t()(),i(4750,"p"),e(4751,"Valor informado atrav\xE9s da propriedade "),i(4752,"code"),e(4753,"p-filter-params"),t(),e(4754,"."),t()()(),i(4755,"tr",16)(4756,"td",17)(4757,"div",24)(4758,"span",25),e(4759," order"),n(4760,"br"),t()()(),i(4761,"td",20)(4762,"code",26),e(4763,"string"),t()(),i(4764,"td",23)(4765,"em")(4766,"strong"),e(4767,"(opcional)"),t()(),i(4768,"p"),e(4769,"Coluna que est\xE1 sendo ordenada na tabela."),t(),i(4770,"ul")(4771,"li"),e(4772,"Coluna decrescente ser\xE1 informada da seguinte forma: "),i(4773,"code"),e(4774,"-<colunaOrdenada>"),t(),e(4775,", por exemplo "),i(4776,"code"),e(4777,"-name"),t(),e(4778,"."),t(),i(4779,"li"),e(4780,"Coluna ascendente ser\xE1 informada da seguinte forma: "),i(4781,"code"),e(4782,"<colunaOrdenada>"),t(),e(4783,", por exemplo "),i(4784,"code"),e(4785,"name"),t(),e(4786,"."),t()()()(),i(4787,"tr",16)(4788,"td",17)(4789,"div",24)(4790,"span",25),e(4791," page"),n(4792,"br"),t()()(),i(4793,"td",20)(4794,"code",43),e(4795,"number"),t()(),i(4796,"td",23)(4797,"em")(4798,"strong"),e(4799,"(opcional)"),t()(),i(4800,"p"),e(4801,"Controla a pagina\xE7\xE3o dos dados e recebe valor automaticamente a cada clique no bot\xE3o 'Carregar mais resultados'."),t()()(),i(4802,"tr",16)(4803,"td",17)(4804,"div",24)(4805,"span",25),e(4806," pageSize"),n(4807,"br"),t()()(),i(4808,"td",20)(4809,"code",43),e(4810,"number"),t()(),i(4811,"td",23)(4812,"em")(4813,"strong"),e(4814,"(opcional)"),t()(),i(4815,"p"),e(4816,"Quantidade de itens retornados cada vez que o servi\xE7o \xE9 chamado, por padr\xE3o \xE9 10."),t()()()(),i(4817,"h4",41)(4818,"code",5),e(4819,"PoLookupLiterals"),t()(),i(4820,"div",2)(4821,"p"),e(4822,"Interface para defini\xE7\xE3o das literais usadas no "),i(4823,"code"),e(4824,"po-lookup"),t(),e(4825,"."),t()(),i(4826,"h4",12),e(4827,"Propriedades"),t(),i(4828,"table",13)(4829,"tr",14)(4830,"th",15),e(4831,"Nome"),t(),i(4832,"th",15),e(4833,"Tipo"),t(),i(4834,"th",15),e(4835,"Descri\xE7\xE3o"),t()(),i(4836,"tr",16)(4837,"td",17)(4838,"div",24)(4839,"span",25),e(4840," clean"),n(4841,"br"),t()()(),i(4842,"td",20)(4843,"code",26),e(4844,"string"),t()(),i(4845,"td",23)(4846,"em")(4847,"strong"),e(4848,"(opcional)"),t()(),i(4849,"p"),e(4850,"Texto usado no leitor de tela para acessibilidade. Aplica-se ao \xEDcone de limpar."),t()()(),i(4851,"tr",16)(4852,"td",17)(4853,"div",24)(4854,"span",25),e(4855," modalAdvancedSearch"),n(4856,"br"),t()()(),i(4857,"td",20)(4858,"code",26),e(4859,"string"),t()(),i(4860,"td",23)(4861,"em")(4862,"strong"),e(4863,"(opcional)"),t()(),i(4864,"p"),e(4865,"Texto do link de busca avan\xE7ada."),t(),i(4866,"p"),e(4867,`Importante
Caso seja passado uma literal muito comprida poder\xE1 quebrar o layout.`),t()()(),i(4868,"tr",16)(4869,"td",17)(4870,"div",24)(4871,"span",25),e(4872," modalAdvancedSearchPrimaryActionLabel"),n(4873,"br"),t()()(),i(4874,"td",20)(4875,"code",26),e(4876,"string"),t()(),i(4877,"td",23)(4878,"em")(4879,"strong"),e(4880,"(opcional)"),t()(),i(4881,"p"),e(4882,"Texto exibido no label do bot\xE3o de a\xE7\xE3o prim\xE1ria da modal de busca avan\xE7ada."),t()()(),i(4883,"tr",16)(4884,"td",17)(4885,"div",24)(4886,"span",25),e(4887," modalAdvancedSearchSecondaryActionLabel"),n(4888,"br"),t()()(),i(4889,"td",20)(4890,"code",26),e(4891,"string"),t()(),i(4892,"td",23)(4893,"em")(4894,"strong"),e(4895,"(opcional)"),t()(),i(4896,"p"),e(4897,"Texto exibido no label do bot\xE3o de a\xE7\xE3o secund\xE1ria da modal de busca avan\xE7ada."),t()()(),i(4898,"tr",16)(4899,"td",17)(4900,"div",24)(4901,"span",25),e(4902," modalAdvancedSearchTitle"),n(4903,"br"),t()()(),i(4904,"td",20)(4905,"code",26),e(4906,"string"),t()(),i(4907,"td",23)(4908,"em")(4909,"strong"),e(4910,"(opcional)"),t()(),i(4911,"p"),e(4912,"Texto exibido no t\xEDtulo da modal de busca avan\xE7ada."),t()()(),i(4913,"tr",16)(4914,"td",17)(4915,"div",24)(4916,"span",25),e(4917," modalDisclaimerGroupTitle"),n(4918,"br"),t()()(),i(4919,"td",20)(4920,"code",26),e(4921,"string"),t()(),i(4922,"td",23)(4923,"em")(4924,"strong"),e(4925,"(opcional)"),t()(),i(4926,"p"),e(4927,"Texto exibido no t\xEDtulo do disclaimer."),t()()(),i(4928,"tr",16)(4929,"td",17)(4930,"div",24)(4931,"span",25),e(4932," modalPlaceholder"),n(4933,"br"),t()()(),i(4934,"td",20)(4935,"code",26),e(4936,"string"),t()(),i(4937,"td",23)(4938,"em")(4939,"strong"),e(4940,"(opcional)"),t()(),i(4941,"p"),e(4942,"Texto exibido no placeholder do input da modal."),t()()(),i(4943,"tr",16)(4944,"td",17)(4945,"div",24)(4946,"span",25),e(4947," modalPrimaryActionLabel"),n(4948,"br"),t()()(),i(4949,"td",20)(4950,"code",26),e(4951,"string"),t()(),i(4952,"td",23)(4953,"em")(4954,"strong"),e(4955,"(opcional)"),t()(),i(4956,"p"),e(4957,"Texto exibido no label do bot\xE3o de a\xE7\xE3o prim\xE1ria da modal."),t()()(),i(4958,"tr",16)(4959,"td",17)(4960,"div",24)(4961,"span",25),e(4962," modalSecondaryActionLabel"),n(4963,"br"),t()()(),i(4964,"td",20)(4965,"code",26),e(4966,"string"),t()(),i(4967,"td",23)(4968,"em")(4969,"strong"),e(4970,"(opcional)"),t()(),i(4971,"p"),e(4972,"Texto exibido no label do bot\xE3o de a\xE7\xE3o secund\xE1ria da modal."),t()()(),i(4973,"tr",16)(4974,"td",17)(4975,"div",24)(4976,"span",25),e(4977," modalTableLoadMoreData"),n(4978,"br"),t()()(),i(4979,"td",20)(4980,"code",26),e(4981,"string"),t()(),i(4982,"td",23)(4983,"em")(4984,"strong"),e(4985,"(opcional)"),t()(),i(4986,"p"),e(4987,"Label do "),i(4988,"code"),e(4989,"button"),t(),e(4990," que deve carregar mais resultados na tabela, ou seja, exibir mais itens."),t()()(),i(4991,"tr",16)(4992,"td",17)(4993,"div",24)(4994,"span",25),e(4995," modalTableLoadingData"),n(4996,"br"),t()()(),i(4997,"td",20)(4998,"code",26),e(4999,"string"),t()(),i(5e3,"td",23)(5001,"em")(5002,"strong"),e(5003,"(opcional)"),t()(),i(5004,"p"),e(5005,"Texto exibido enquanto uma requisi\xE7\xE3o est\xE1 sendo executada para carregar dados na tabela."),t()()(),i(5006,"tr",16)(5007,"td",17)(5008,"div",24)(5009,"span",25),e(5010," modalTableNoColumns"),n(5011,"br"),t()()(),i(5012,"td",20)(5013,"code",26),e(5014,"string"),t()(),i(5015,"td",23)(5016,"em")(5017,"strong"),e(5018,"(opcional)"),t()(),i(5019,"p"),e(5020,"Texto exibido quando n\xE3o existem colunas definidas para a tabela."),t()()(),i(5021,"tr",16)(5022,"td",17)(5023,"div",24)(5024,"span",25),e(5025," modalTableNoData"),n(5026,"br"),t()()(),i(5027,"td",20)(5028,"code",26),e(5029,"string"),t()(),i(5030,"td",23)(5031,"em")(5032,"strong"),e(5033,"(opcional)"),t()(),i(5034,"p"),e(5035,"Texto exibido quando n\xE3o existem itens para serem exibidos na tabela."),t()()(),i(5036,"tr",16)(5037,"td",17)(5038,"div",24)(5039,"span",25),e(5040," modalTitle"),n(5041,"br"),t()()(),i(5042,"td",20)(5043,"code",26),e(5044,"string"),t()(),i(5045,"td",23)(5046,"em")(5047,"strong"),e(5048,"(opcional)"),t()(),i(5049,"p"),e(5050,"Texto exibido no t\xEDtulo da modal."),t()()(),i(5051,"tr",16)(5052,"td",17)(5053,"div",24)(5054,"span",25),e(5055," search"),n(5056,"br"),t()()(),i(5057,"td",20)(5058,"code",26),e(5059,"string"),t()(),i(5060,"td",23)(5061,"em")(5062,"strong"),e(5063,"(opcional)"),t()(),i(5064,"p"),e(5065,"Texto usado no leitor de tela para acessibilidade. Aplica-se ao \xEDcone de pesquisa."),t()()()(),i(5066,"h4",41)(5067,"code",5),e(5068,"PoLookupResponseApi"),t()(),i(5069,"div",2)(5070,"p"),e(5071,"Interface que representa a estrutura de resposta de uma cole\xE7\xE3o de itens. "),t()(),i(5072,"h4",12),e(5073,"Propriedades"),t(),i(5074,"table",13)(5075,"tr",14)(5076,"th",15),e(5077,"Nome"),t(),i(5078,"th",15),e(5079,"Tipo"),t(),i(5080,"th",15),e(5081,"Descri\xE7\xE3o"),t()(),i(5082,"tr",16)(5083,"td",17)(5084,"div",24)(5085,"span",25),e(5086," hasNext"),n(5087,"br"),t()()(),i(5088,"td",20)(5089,"code",28),e(5090,"boolean"),t()(),i(5091,"td",23)(5092,"p"),e(5093,"Indica se existe uma pr\xF3xima p\xE1gina com mais registros para aquela cole\xE7\xE3o de itens."),t()()(),i(5094,"tr",16)(5095,"td",17)(5096,"div",24)(5097,"span",25),e(5098," items"),n(5099,"br"),t()()(),i(5100,"td",20)(5101,"code",75),e(5102,"Array<object>"),t()(),i(5103,"td",23)(5104,"p"),e(5105,"Lista de itens retornados."),t()()()()())},dependencies:[y],encapsulation:2})}return a})();var Re=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=6;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,l){this.route=r,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let l=r.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||a)(f(he),f(fe))};static \u0275cmp=S({type:a,selectors:[["ng-component"]],standalone:!1,decls:11,vars:4,consts:[["p-title"," Lookup",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,o){l&1&&(i(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),x("p-click",function(){return o.changeTab("doc")}),n(3,"sample-po-lookup-doc"),t(),i(4,"po-tab",3),x("p-click",function(){return o.changeTab("web")}),n(5,"sample-po-lookup-basic-view")(6,"sample-po-lookup-labs-view")(7,"sample-po-lookup-hero-view")(8,"sample-po-lookup-hero-reactive-form-view")(9,"sample-po-lookup-sw-films-view")(10,"sample-po-lookup-multiple-view"),t()()()),l&2&&(u("p-actions",o.actions),d(2),u("p-active",o.activeTab==="doc"),d(2),u("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"))},dependencies:[Le,C,k,qe,_e,Ae,Ie,je,Ne,Be],encapsulation:2})}return a})();var St=[{path:"",component:Re}],We=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=J({type:a});static \u0275inj=Q({imports:[le.forChild(St),le]})}return a})();var mi=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=J({type:a});static \u0275inj=Q({imports:[Fe,We]})}return a})();export{mi as DocPoLookupModule};
