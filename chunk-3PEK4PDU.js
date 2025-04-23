import{$ as G,$a as _,$d as D,Bd as ce,Ca as z,Cd as $,Da as A,Ea as H,Ec as Z,F as c,Fa as U,Fd as I,G as u,Ga as e,Ia as R,Ka as b,Kb as ne,La as h,Lb as F,Ma as E,Mb as O,Nb as J,Ob as B,Pa as w,Pb as N,Rd as ue,Sb as ie,T as p,Tb as ae,Tc as pe,U as x,Ua as q,Vb as oe,Vc as de,Wb as le,Xa as L,Xc as me,Yb as re,Zb as te,_ as S,_b as K,_d as k,ha as s,jb as Y,ka as y,md as M,na as t,oa as n,pa as a,pd as se,ta as T,te as C,ua as f,ue as ge,vc as W,vd as X,xc as P,y as Q}from"./chunk-Y4SQKOF7.js";var fe=(()=>{class l{static \u0275fac=function(o){return new(o||l)};static \u0275cmp=S({type:l,selectors:[["sample-po-datepicker-range-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","datepickerRange","p-label","PO Datepicker Range"]],template:function(o,i){o&1&&a(0,"po-datepicker-range",0)},dependencies:[M],encapsulation:2})}return l})();var _e=l=>({"docs-sample-code-tabs":l}),Se=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||l)};static \u0275cmp=S({type:l,selectors:[["sample-po-datepicker-range-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(a(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Datepicker Range Basic"),n(),t(4,"a",2),f("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-datepicker-range-basic/sample-po-datepicker-range-basic.component.html"),n(),t(13,"pre",7),e(14,`<po-datepicker-range name="datepickerRange" p-label="PO Datepicker Range"> </po-datepicker-range>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-datepicker-range-basic/sample-po-datepicker-range-basic.component.ts"),n(),t(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-datepicker-range-basic',
  templateUrl: './sample-po-datepicker-range-basic.component.html',
  standalone: false
})
export class SamplePoDatepickerRangeBasicComponent {}
`),n()()()()(),t(21,"div",10),a(22,"sample-po-datepicker-range-basic"),n(),a(23,"hr")),o&2&&(p(5),y("po-icon "+i.sampleCodeButtonIcon),p(),R(" ",i.sampleCodeButtonLabel,""),p(),s("ngClass",w(4,_e,i.hideSampleCodeTabs)))},dependencies:[_,C,k,D,fe],encapsulation:2})}return l})();var he=(()=>{class l{additionalHelpTooltip;clean;customLiterals;datepickerRange;endDate;event;help;label;literals;properties;fieldErrorMessage;startDate;maxDate;minDate;locale;size;propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Limit Error Message"}];localeOptions=[{label:"English",value:"en"},{label:"Espa\xF1ol",value:"es"},{label:"Portugu\xEAs",value:"pt"},{label:"P\u0443\u0441\u0441\u043A\u0438\u0439",value:"ru"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}changeEvent(d){this.event=d}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals=void 0}}getDatepickerRange(){return JSON.stringify(this.datepickerRange)}restore(){this.additionalHelpTooltip="",this.clean=void 0,this.customLiterals=void 0,this.endDate=void 0,this.event=void 0,this.help=void 0,this.label=void 0,this.literals=void 0,this.properties=[],this.fieldErrorMessage="",this.startDate=void 0,this.maxDate=void 0,this.minDate=void 0,this.locale=void 0,this.size="medium",setTimeout(()=>this.datepickerRange=void 0)}static \u0275fac=function(o){return new(o||l)};static \u0275cmp=S({type:l,selectors:[["sample-po-datepicker-range-labs"]],standalone:!1,decls:20,vars:37,consts:[["f","ngForm"],["name","datepickerRange",1,"po-sm-12",3,"ngModelChange","p-change","p-keydown","ngModel","p-additional-help-tooltip","p-clean","p-disabled","p-end-date","p-help","p-label","p-literals","p-max-date","p-min-date","p-no-autocomplete","p-optional","p-readonly","p-required","p-field-error-message","p-show-required","p-start-date","p-locale","p-size","p-error-limit"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","additionalHelpTooltip","p-clean","","p-label","Additional Help Tooltip",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minDate","p-clean","","p-label","Min date",1,"po-md-6",3,"ngModelChange","ngModel","p-max-date"],["name","maxDate","p-clean","","p-label","Max date",1,"po-md-6",3,"ngModelChange","ngModel","p-min-date"],["name","literals","p-help",'Ex.: { "invalidFormat": "Date in inconsistent format", "startDateGreaterThanEndDate": "End date less than start date" }',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","locale","p-label","Locale",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","restore","p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(o,i){if(o&1){let m=T();t(0,"po-datepicker-range",1),E("ngModelChange",function(r){return c(m),h(i.datepickerRange,r)||(i.datepickerRange=r),u(r)}),f("p-change",function(){return c(m),u(i.changeEvent("p-change"))})("p-keydown",function(){return c(m),u(i.changeEvent("p-keydown"))}),n(),a(1,"hr"),t(2,"div",2),a(3,"po-info",3)(4,"po-info",4),n(),a(5,"hr"),t(6,"form",null,0)(8,"po-input",5),E("ngModelChange",function(r){return c(m),h(i.label,r)||(i.label=r),u(r)}),n(),t(9,"po-input",6),E("ngModelChange",function(r){return c(m),h(i.help,r)||(i.help=r),u(r)}),n(),t(10,"po-input",7),E("ngModelChange",function(r){return c(m),h(i.additionalHelpTooltip,r)||(i.additionalHelpTooltip=r),u(r)}),n(),t(11,"po-datepicker",8),E("ngModelChange",function(r){return c(m),h(i.minDate,r)||(i.minDate=r),u(r)}),n(),t(12,"po-datepicker",9),E("ngModelChange",function(r){return c(m),h(i.maxDate,r)||(i.maxDate=r),u(r)}),n(),t(13,"po-input",10),E("ngModelChange",function(r){return c(m),h(i.literals,r)||(i.literals=r),u(r)}),f("p-change",function(){return c(m),u(i.changeLiterals())}),n(),t(14,"po-input",11),E("ngModelChange",function(r){return c(m),h(i.fieldErrorMessage,r)||(i.fieldErrorMessage=r),u(r)}),n(),t(15,"po-select",12),E("ngModelChange",function(r){return c(m),h(i.locale,r)||(i.locale=r),u(r)}),n(),t(16,"po-checkbox-group",13),E("ngModelChange",function(r){return c(m),h(i.properties,r)||(i.properties=r),u(r)}),n(),t(17,"po-radio-group",14),E("ngModelChange",function(r){return c(m),h(i.size,r)||(i.size=r),u(r)}),n(),t(18,"div",2)(19,"po-button",15),f("p-click",function(){return c(m),u(i.restore())}),n()()()}o&2&&(b("ngModel",i.datepickerRange),s("p-additional-help-tooltip",i.additionalHelpTooltip)("p-clean",i.properties.includes("clean"))("p-disabled",i.properties.includes("disabled"))("p-end-date",i.endDate)("p-help",i.help)("p-label",i.label)("p-literals",i.customLiterals)("p-max-date",i.maxDate)("p-min-date",i.minDate)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-field-error-message",i.fieldErrorMessage)("p-show-required",i.properties.includes("showRequired"))("p-start-date",i.startDate)("p-locale",i.locale)("p-size",i.size)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit")),p(3),s("p-value",i.getDatepickerRange()),p(),s("p-value",i.event),p(4),b("ngModel",i.label),p(),b("ngModel",i.help),p(),b("ngModel",i.additionalHelpTooltip),p(),b("ngModel",i.minDate),s("p-max-date",i.maxDate),p(),b("ngModel",i.maxDate),s("p-min-date",i.minDate),p(),b("ngModel",i.literals),p(),b("ngModel",i.fieldErrorMessage),p(),b("ngModel",i.locale),s("p-options",i.localeOptions),p(),b("ngModel",i.properties),s("p-options",i.propertiesOptions),p(),b("ngModel",i.size),s("p-options",i.sizeOptions))},dependencies:[N,F,O,B,J,W,pe,de,me,M,se,ce,I],encapsulation:2})}return l})();var Ve=l=>({"docs-sample-code-tabs":l}),Ee=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||l)};static \u0275cmp=S({type:l,selectors:[["sample-po-datepicker-range-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(a(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Datepicker Range Labs"),n(),t(4,"a",2),f("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-datepicker-range-labs/sample-po-datepicker-range-labs.component.html"),n(),t(13,"pre",7),e(14,`<po-datepicker-range
  class="po-sm-12"
  name="datepickerRange"
  [(ngModel)]="datepickerRange"
  [p-additional-help-tooltip]="additionalHelpTooltip"
  [p-clean]="properties.includes('clean')"
  [p-disabled]="properties.includes('disabled')"
  [p-end-date]="endDate"
  [p-help]="help"
  [p-label]="label"
  [p-literals]="customLiterals"
  [p-max-date]="maxDate"
  [p-min-date]="minDate"
  [p-no-autocomplete]="properties?.includes('noAutocomplete')"
  [p-optional]="properties.includes('optional')"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-field-error-message]="fieldErrorMessage"
  [p-show-required]="properties.includes('showRequired')"
  [p-start-date]="startDate"
  [p-locale]="locale"
  [p-size]="size"
  (p-change)="changeEvent('p-change')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-error-limit]="properties?.includes('errorLimit')"
>
</po-datepicker-range>

<hr />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="getDatepickerRange()"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

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

  <po-datepicker class="po-md-6" name="minDate" [(ngModel)]="minDate" p-clean p-label="Min date" [p-max-date]="maxDate">
  </po-datepicker>

  <po-datepicker class="po-md-6" name="maxDate" [(ngModel)]="maxDate" p-clean p-label="Max date" [p-min-date]="minDate">
  </po-datepicker>

  <po-input
    class="po-md-12 po-lg-6"
    name="literals"
    [(ngModel)]="literals"
    p-help='Ex.: { "invalidFormat": "Date in inconsistent format", "startDateGreaterThanEndDate": "End date less than start date" }'
    p-label="Literals"
    (p-change)="changeLiterals()"
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

  <po-select class="po-md-6" name="locale" p-label="Locale" [(ngModel)]="locale" [p-options]="localeOptions">
  </po-select>

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
    name="size"
    [(ngModel)]="size"
    p-columns="4"
    p-label="Size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="sizeOptions"
  >
  </po-radio-group>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" name="restore" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-datepicker-range-labs/sample-po-datepicker-range-labs.component.ts"),n(),t(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoDatepickerRange,
  PoDatepickerRangeLiterals,
  PoRadioGroupOption,
  PoSelectOption
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-datepicker-range-labs',
  templateUrl: './sample-po-datepicker-range-labs.component.html',
  standalone: false
})
export class SamplePoDatepickerRangeLabsComponent implements OnInit {
  additionalHelpTooltip: string;
  clean: boolean;
  customLiterals: PoDatepickerRangeLiterals;
  datepickerRange: PoDatepickerRange;
  endDate: string | Date;
  event: string;
  help: string;
  label: string;
  literals: string;
  properties: Array<string>;
  fieldErrorMessage: string;
  startDate: string | Date;
  maxDate: string | Date;
  minDate: string | Date;
  locale: string;
  size: string;

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'clean', label: 'Clean' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'noAutocomplete', label: 'No Autocomplete' },
    { value: 'optional', label: 'Optional' },
    { value: 'readonly', label: 'Read Only' },
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'errorLimit', label: 'Limit Error Message' }
  ];

  public readonly localeOptions: Array<PoSelectOption> = [
    { label: 'English', value: 'en' },
    { label: 'Espa\xF1ol', value: 'es' },
    { label: 'Portugu\xEAs', value: 'pt' },
    { label: 'P\u0443\u0441\u0441\u043A\u0438\u0439', value: 'ru' }
  ];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  ngOnInit() {
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

  getDatepickerRange() {
    return JSON.stringify(this.datepickerRange);
  }

  restore() {
    this.additionalHelpTooltip = '';
    this.clean = undefined;
    this.customLiterals = undefined;
    this.endDate = undefined;
    this.event = undefined;
    this.help = undefined;
    this.label = undefined;
    this.literals = undefined;
    this.properties = [];
    this.fieldErrorMessage = '';
    this.startDate = undefined;
    this.maxDate = undefined;
    this.minDate = undefined;
    this.locale = undefined;
    this.size = 'medium';
    setTimeout(() => (this.datepickerRange = undefined));
  }
}
`),n()()()()(),t(21,"div",10),a(22,"sample-po-datepicker-range-labs"),n(),a(23,"hr")),o&2&&(p(5),y("po-icon "+i.sampleCodeButtonIcon),p(),R(" ",i.sampleCodeButtonLabel,""),p(),s("ngClass",w(4,Ve,i.hideSampleCodeTabs)))},dependencies:[_,C,k,D,he],encapsulation:2})}return l})();var qe=["formVacationSuggestion"],ve=(()=>{class l{poNotification;formVacationSuggestion;poModal;datepickerRange;quantityOfDays=void 0;reason;cancel={action:()=>{this.poModal.close()},label:"Cancel"};submit={action:()=>{this.poModal.close(),this.formVacationSuggestion.reset(),this.poNotification.success("Vacation suggestion submitted!")},label:"Submit"};get validateForm(){return!(this.formVacationSuggestion.valid&&this.datepickerRange&&this.datepickerRange.start&&this.datepickerRange.end)}constructor(d){this.poNotification=d}calculateQuantityOfVacationDays(){let d=new Date(this.datepickerRange.start),o=new Date(this.datepickerRange.end);this.quantityOfDays=Math.floor((Date.UTC(o.getFullYear(),o.getMonth(),o.getDate())-Date.UTC(d.getFullYear(),d.getMonth(),d.getDate()))/(1e3*60*60*24))}clean(){this.datepickerRange=void 0,this.quantityOfDays=void 0,this.reason=void 0}static \u0275fac=function(o){return new(o||l)(x(Z))};static \u0275cmp=S({type:l,selectors:[["sample-po-datepicker-range-vacations"]],viewQuery:function(o,i){if(o&1&&(z(qe,7),z(P,7)),o&2){let m;A(m=H())&&(i.formVacationSuggestion=m.first),A(m=H())&&(i.poModal=m.first)}},standalone:!1,decls:21,vars:18,consts:[["formVacationSuggestion","ngForm"],["modalVacationSuggestion",""],["p-label","Vacation suggestion",1,"po-md-9"],[1,"po-row"],["name","datepickerRange","p-clean","","p-label","Select the period","p-required","",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","number","p-disabled","","p-label","Quantity of days","p-required","",1,"po-md-3",3,"ngModelChange","ngModel"],["name","textarea","p-label","Reason",1,"po-md-9",3,"ngModelChange","ngModel"],["p-label","Clean",1,"po-md-2","po-offset-md-5","po-offset-lg-5","po-offset-xl-5",3,"p-click"],["p-label","Submit",1,"po-md-2",3,"p-click","p-disabled"],["p-hide-close","","p-title","Confirm vacation suggestion",3,"p-primary-action","p-secondary-action"],["p-label","Initial period",1,"po-md-4",3,"p-value"],["p-label","Final period",1,"po-md-4",3,"p-value"],["p-label","Quantity of days",1,"po-md-4",3,"p-value"],["p-disabled","","p-label","Reason","p-required","",1,"po-md-12",3,"ngModelChange","ngModel"]],template:function(o,i){if(o&1){let m=T();t(0,"form",null,0),a(2,"po-divider",2),t(3,"div",3)(4,"po-datepicker-range",4),E("ngModelChange",function(r){return c(m),h(i.datepickerRange,r)||(i.datepickerRange=r),u(r)}),f("p-change",function(){return c(m),u(i.calculateQuantityOfVacationDays())}),n(),t(5,"po-number",5),E("ngModelChange",function(r){return c(m),h(i.quantityOfDays,r)||(i.quantityOfDays=r),u(r)}),n()(),t(6,"div",3)(7,"po-textarea",6),E("ngModelChange",function(r){return c(m),h(i.reason,r)||(i.reason=r),u(r)}),n()(),t(8,"div",3)(9,"po-button",7),f("p-click",function(){return c(m),u(i.clean())}),n(),t(10,"po-button",8),f("p-click",function(){c(m);let r=U(12);return u(r.open())}),n()()(),t(11,"po-modal",9,1)(13,"div",3),a(14,"po-info",10),q(15,"date"),a(16,"po-info",11),q(17,"date"),a(18,"po-info",12),n(),t(19,"div",3)(20,"po-textarea",13),E("ngModelChange",function(r){return c(m),h(i.reason,r)||(i.reason=r),u(r)}),n()()()}o&2&&(p(4),b("ngModel",i.datepickerRange),p(),b("ngModel",i.quantityOfDays),p(2),b("ngModel",i.reason),p(3),s("p-disabled",i.validateForm),p(),s("p-primary-action",i.submit)("p-secondary-action",i.cancel),p(3),s("p-value",L(15,10,i.datepickerRange==null?null:i.datepickerRange.start,"longDate","+0000")),p(2),s("p-value",L(17,14,i.datepickerRange==null?null:i.datepickerRange.end,"longDate","+0000")),p(2),s("p-value",i.quantityOfDays),p(2),b("ngModel",i.reason))},dependencies:[N,F,O,B,J,W,K,M,X,$,I,P,Y],encapsulation:2})}return l})();var Fe=l=>({"docs-sample-code-tabs":l}),ke=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||l)};static \u0275cmp=S({type:l,selectors:[["sample-po-datepicker-range-vacations-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(a(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Datepicker Range - Vacations Suggestion"),n(),t(4,"a",2),f("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-datepicker-range-vacations/sample-po-datepicker-range-vacations.component.html"),n(),t(13,"pre",7),e(14,`<form #formVacationSuggestion="ngForm">
  <po-divider class="po-md-9" p-label="Vacation suggestion"> </po-divider>

  <div class="po-row">
    <po-datepicker-range
      class="po-md-6"
      name="datepickerRange"
      [(ngModel)]="datepickerRange"
      p-clean
      p-label="Select the period"
      p-required
      (p-change)="calculateQuantityOfVacationDays()"
    >
    </po-datepicker-range>

    <po-number
      class="po-md-3"
      name="number"
      [(ngModel)]="quantityOfDays"
      p-disabled
      p-label="Quantity of days"
      p-required
    >
    </po-number>
  </div>

  <div class="po-row">
    <po-textarea class="po-md-9" name="textarea" [(ngModel)]="reason" p-label="Reason"> </po-textarea>
  </div>

  <div class="po-row">
    <po-button class="po-md-2 po-offset-md-5 po-offset-lg-5 po-offset-xl-5" p-label="Clean" (p-click)="clean()">
    </po-button>

    <po-button class="po-md-2" p-label="Submit" [p-disabled]="validateForm" (p-click)="modalVacationSuggestion.open()">
    </po-button>
  </div>
</form>

<po-modal
  #modalVacationSuggestion
  p-hide-close
  p-title="Confirm vacation suggestion"
  [p-primary-action]="submit"
  [p-secondary-action]="cancel"
>
  <div class="po-row">
    <po-info class="po-md-4" p-label="Initial period" [p-value]="datepickerRange?.start | date: 'longDate' : '+0000'">
    </po-info>

    <po-info class="po-md-4" p-label="Final period" [p-value]="datepickerRange?.end | date: 'longDate' : '+0000'">
    </po-info>

    <po-info class="po-md-4" p-label="Quantity of days" [p-value]="quantityOfDays"> </po-info>
  </div>

  <div class="po-row">
    <po-textarea class="po-md-12" [(ngModel)]="reason" p-disabled p-label="Reason" p-required> </po-textarea>
  </div>
</po-modal>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-datepicker-range-vacations/sample-po-datepicker-range-vacations.component.ts"),n(),t(19,"pre",9),e(20,`import { Component, ViewChild } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

import { PoDatepickerRange, PoModalAction, PoModalComponent, PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-datepicker-range-vacations',
  templateUrl: './sample-po-datepicker-range-vacations.component.html',
  standalone: false
})
export class SamplePoDatepickerRangeVacationsComponent {
  @ViewChild('formVacationSuggestion', { static: true }) formVacationSuggestion: UntypedFormControl;
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  datepickerRange: PoDatepickerRange;
  quantityOfDays: number = undefined;
  reason: string;

  cancel: PoModalAction = {
    action: () => {
      this.poModal.close();
    },
    label: 'Cancel'
  };

  submit: PoModalAction = {
    action: () => {
      this.poModal.close();
      this.formVacationSuggestion.reset();
      this.poNotification.success('Vacation suggestion submitted!');
    },
    label: 'Submit'
  };

  get validateForm() {
    return !(
      this.formVacationSuggestion.valid &&
      this.datepickerRange &&
      this.datepickerRange.start &&
      this.datepickerRange.end
    );
  }

  constructor(private poNotification: PoNotificationService) {}

  calculateQuantityOfVacationDays() {
    const start = new Date(this.datepickerRange.start);
    const end = new Date(this.datepickerRange.end);

    this.quantityOfDays = Math.floor(
      (Date.UTC(end.getFullYear(), end.getMonth(), end.getDate()) -
        Date.UTC(start.getFullYear(), start.getMonth(), start.getDate())) /
        (1000 * 60 * 60 * 24)
    );
  }

  clean() {
    this.datepickerRange = undefined;
    this.quantityOfDays = undefined;
    this.reason = undefined;
  }
}
`),n()()()()(),t(21,"div",10),a(22,"sample-po-datepicker-range-vacations"),n(),a(23,"hr")),o&2&&(p(5),y("po-icon "+i.sampleCodeButtonIcon),p(),R(" ",i.sampleCodeButtonLabel,""),p(),s("ngClass",w(4,Fe,i.hideSampleCodeTabs)))},dependencies:[_,C,k,D,ve],encapsulation:2})}return l})();var De=(()=>{class l{poNotification;formBuilder;poModal;datepickerRange;formVacationSuggestion;quantityOfDays;reason;cancel={action:()=>{this.poModal.close()},label:"Cancel"};submit={action:()=>{this.poModal.close(),this.formVacationSuggestion.reset(),this.poNotification.success("Vacation suggestion submitted!")},label:"Submit"};get validateForm(){return!(this.formVacationSuggestion.valid&&this.formVacationSuggestion.get("datepickerRange").value.start&&this.formVacationSuggestion.get("datepickerRange").value.end)}constructor(d,o){this.poNotification=d,this.formBuilder=o}ngOnInit(){this.formVacationSuggestion=this.formBuilder.group({datepickerRange:[void 0,ne.required],quantityOfDays:[void 0],reason:[void 0]})}calculateQuantityOfVacationDays(){let d=new Date(this.formVacationSuggestion.get("datepickerRange").value.start),o=new Date(this.formVacationSuggestion.get("datepickerRange").value.end),i=Math.floor((Date.UTC(o.getFullYear(),o.getMonth(),o.getDate())-Date.UTC(d.getFullYear(),d.getMonth(),d.getDate()))/(1e3*60*60*24));this.formVacationSuggestion.get("quantityOfDays").setValue(i)}clean(){this.formVacationSuggestion.reset()}submitForm(){this.datepickerRange=this.formVacationSuggestion.get("datepickerRange").value,this.reason=this.formVacationSuggestion.get("reason").value,this.quantityOfDays=this.formVacationSuggestion.get("quantityOfDays").value}static \u0275fac=function(o){return new(o||l)(x(Z),x(oe))};static \u0275cmp=S({type:l,selectors:[["sample-po-datepicker-range-vacations-reactive-form"]],viewQuery:function(o,i){if(o&1&&z(P,7),o&2){let m;A(m=H())&&(i.poModal=m.first)}},standalone:!1,decls:20,vars:16,consts:[["modalVacationSuggestion",""],[3,"formGroup"],["p-label","Vacation suggestion",1,"po-md-9"],[1,"po-row"],["formControlName","datepickerRange","p-clean","","p-label","Select the period","p-required","",1,"po-md-6",3,"p-change"],["formControlName","quantityOfDays","p-disabled","","p-label","Quantity of days","p-required","",1,"po-md-3"],["formControlName","reason","p-label","Reason",1,"po-md-9"],["p-label","Clean",1,"po-md-2","po-offset-md-5","po-offset-lg-5","po-offset-xl-5",3,"p-click"],["p-label","Submit",1,"po-md-2",3,"p-click","p-disabled"],["p-hide-close","","p-title","Confirm vacation suggestion",3,"p-primary-action","p-secondary-action"],["p-label","Initial period",1,"po-md-4",3,"p-value"],["p-label","Final period",1,"po-md-4",3,"p-value"],["p-label","Quantity of days",1,"po-md-4",3,"p-value"],["p-disabled","","p-label","Reason","p-required","",1,"po-md-12",3,"ngModelChange","ngModel"]],template:function(o,i){if(o&1){let m=T();t(0,"form",1),a(1,"po-divider",2),t(2,"div",3)(3,"po-datepicker-range",4),f("p-change",function(){return c(m),u(i.calculateQuantityOfVacationDays())}),n(),a(4,"po-number",5),n(),t(5,"div",3),a(6,"po-textarea",6),n(),t(7,"div",3)(8,"po-button",7),f("p-click",function(){return c(m),u(i.clean())}),n(),t(9,"po-button",8),f("p-click",function(){c(m);let r=U(11);return i.submitForm(),u(r.open())}),n()()(),t(10,"po-modal",9,0)(12,"div",3),a(13,"po-info",10),q(14,"date"),a(15,"po-info",11),q(16,"date"),a(17,"po-info",12),n(),t(18,"div",3)(19,"po-textarea",13),E("ngModelChange",function(r){return c(m),h(i.reason,r)||(i.reason=r),u(r)}),n()()()}o&2&&(s("formGroup",i.formVacationSuggestion),p(9),s("p-disabled",i.validateForm),p(),s("p-primary-action",i.submit)("p-secondary-action",i.cancel),p(3),s("p-value",L(14,8,i.datepickerRange==null?null:i.datepickerRange.start,"longDate","+0000")),p(2),s("p-value",L(16,12,i.datepickerRange==null?null:i.datepickerRange.end,"longDate","+0000")),p(2),s("p-value",i.quantityOfDays),p(2),b("ngModel",i.reason))},dependencies:[N,F,O,B,ie,ae,W,K,M,X,$,I,P,Y],encapsulation:2})}return l})();var Ne=l=>({"docs-sample-code-tabs":l}),Ce=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||l)};static \u0275cmp=S({type:l,selectors:[["sample-po-datepicker-range-vacations-reactive-form-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(a(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Datepicker Range - Vacations Reactive Form"),n(),t(4,"a",2),f("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-datepicker-range-vacations-reactive-form/sample-po-datepicker-range-vacations-reactive-form.component.html"),n(),t(13,"pre",7),e(14,`<form [formGroup]="formVacationSuggestion">
  <po-divider class="po-md-9" p-label="Vacation suggestion"> </po-divider>

  <div class="po-row">
    <po-datepicker-range
      class="po-md-6"
      formControlName="datepickerRange"
      p-clean
      p-label="Select the period"
      p-required
      (p-change)="calculateQuantityOfVacationDays()"
    >
    </po-datepicker-range>

    <po-number class="po-md-3" formControlName="quantityOfDays" p-disabled p-label="Quantity of days" p-required>
    </po-number>
  </div>

  <div class="po-row">
    <po-textarea class="po-md-9" formControlName="reason" p-label="Reason"> </po-textarea>
  </div>

  <div class="po-row">
    <po-button class="po-md-2 po-offset-md-5 po-offset-lg-5 po-offset-xl-5" p-label="Clean" (p-click)="clean()">
    </po-button>

    <po-button
      class="po-md-2"
      p-label="Submit"
      [p-disabled]="validateForm"
      (p-click)="submitForm(); modalVacationSuggestion.open()"
    >
    </po-button>
  </div>
</form>

<po-modal
  #modalVacationSuggestion
  p-hide-close
  p-title="Confirm vacation suggestion"
  [p-primary-action]="submit"
  [p-secondary-action]="cancel"
>
  <div class="po-row">
    <po-info class="po-md-4" p-label="Initial period" [p-value]="datepickerRange?.start | date: 'longDate' : '+0000'">
    </po-info>

    <po-info class="po-md-4" p-label="Final period" [p-value]="datepickerRange?.end | date: 'longDate' : '+0000'">
    </po-info>

    <po-info class="po-md-4" p-label="Quantity of days" [p-value]="quantityOfDays"> </po-info>
  </div>

  <div class="po-row">
    <po-textarea class="po-md-12" [(ngModel)]="reason" p-disabled p-label="Reason" p-required> </po-textarea>
  </div>
</po-modal>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-datepicker-range-vacations-reactive-form/sample-po-datepicker-range-vacations-reactive-form.component.ts"),n(),t(19,"pre",9),e(20,`import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { PoDatepickerRange, PoModalAction, PoModalComponent, PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-datepicker-range-vacations-reactive-form',
  templateUrl: './sample-po-datepicker-range-vacations-reactive-form.component.html',
  standalone: false
})
export class SamplePoDatepickerRangeVacationsReactiveFormComponent implements OnInit {
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  datepickerRange: PoDatepickerRange;
  formVacationSuggestion: UntypedFormGroup;
  quantityOfDays: number;
  reason: string;

  cancel: PoModalAction = {
    action: () => {
      this.poModal.close();
    },
    label: 'Cancel'
  };

  submit: PoModalAction = {
    action: () => {
      this.poModal.close();
      this.formVacationSuggestion.reset();
      this.poNotification.success('Vacation suggestion submitted!');
    },
    label: 'Submit'
  };

  get validateForm() {
    return !(
      this.formVacationSuggestion.valid &&
      this.formVacationSuggestion.get('datepickerRange').value.start &&
      this.formVacationSuggestion.get('datepickerRange').value.end
    );
  }

  constructor(
    private poNotification: PoNotificationService,
    private formBuilder: UntypedFormBuilder
  ) {}

  ngOnInit() {
    this.formVacationSuggestion = this.formBuilder.group({
      datepickerRange: [undefined, Validators.required],
      quantityOfDays: [undefined],
      reason: [undefined]
    });
  }

  calculateQuantityOfVacationDays() {
    const start = new Date(this.formVacationSuggestion.get('datepickerRange').value.start);
    const end = new Date(this.formVacationSuggestion.get('datepickerRange').value.end);

    const result = Math.floor(
      (Date.UTC(end.getFullYear(), end.getMonth(), end.getDate()) -
        Date.UTC(start.getFullYear(), start.getMonth(), start.getDate())) /
        (1000 * 60 * 60 * 24)
    );

    this.formVacationSuggestion.get('quantityOfDays').setValue(result);
  }

  clean() {
    this.formVacationSuggestion.reset();
  }

  submitForm() {
    this.datepickerRange = this.formVacationSuggestion.get('datepickerRange').value;
    this.reason = this.formVacationSuggestion.get('reason').value;
    this.quantityOfDays = this.formVacationSuggestion.get('quantityOfDays').value;
  }
}
`),n()()()()(),t(21,"div",10),a(22,"sample-po-datepicker-range-vacations-reactive-form"),n(),a(23,"hr")),o&2&&(p(5),y("po-icon "+i.sampleCodeButtonIcon),p(),R(" ",i.sampleCodeButtonLabel,""),p(),s("ngClass",w(4,Ne,i.hideSampleCodeTabs)))},dependencies:[_,C,k,D,De],encapsulation:2})}return l})();var xe=(()=>{class l{static \u0275fac=function(o){return new(o||l)};static \u0275cmp=S({type:l,selectors:[["sample-po-datepicker-range-doc"]],standalone:!1,decls:874,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["id","accepted-formats"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Date"],["pan","",1,"docs-api-property-type","PoDatepickerRangeLiterals"],["href","/documentation/po-i18n"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["href","/documentation/po-datepicker-range#accepted-formats"]],template:function(o,i){o&1&&(t(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),n()(),t(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),n(),t(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),t(10,"code"),e(11,"FormsModule"),n(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),t(13,"code"),e(14,"ReactiveFormsModule"),n(),e(15,", ambos nativos do Angular."),n()()(),t(16,"h3",3),e(17,"Componente"),n(),t(18,"h4",4)(19,"code",5),e(20,"PoDatepickerRangeComponent"),n()(),t(21,"div",2)(22,"p"),e(23,"O "),t(24,"code"),e(25,"po-datepicker-range"),n(),e(26,` \xE9 um componente para sele\xE7\xE3o de um per\xEDodo entre duas datas, onde \xE9 poss\xEDvel informar apenas
a data inicial ou a data final.`),n(),t(27,"p"),e(28,"O componente "),t(29,"code"),e(30,"[(ngModel)]"),n(),e(31," do "),t(32,"code"),e(33,"po-datepicker-range"),n(),e(34,` trabalha com um objeto que implementa a interface
`),t(35,"code"),e(36,"PoDatepickerRange"),n(),e(37,", contendo as seguintes propriedades:"),n(),t(38,"pre")(39,"code"),e(40,`{ "start": '2017-11-28', "end": '2017-11-30' }
`),n()(),t(41,"p"),a(42,"a",6),e(43,`
Este componente pode receber os seguintes formatos de data:`),n(),t(44,"ul")(45,"li")(46,"strong"),e(47,"Data e hora combinados (E8601DZw): yyyy-mm-ddThh:mm:ss+|-hh:mm"),n()()(),t(48,"pre")(49,"code"),e(50,`'2017-11-28T00:00:00-02:00';
`),n()(),t(51,"ul")(52,"li")(53,"strong"),e(54,"Data (E8601DAw.): yyyy-mm-dd"),n()()(),t(55,"pre")(56,"code"),e(57,`'2017-11-28';
`),n()(),t(58,"ul")(59,"li")(60,"strong"),e(61,"JavaScript Date Object:"),n()()(),t(62,"pre")(63,"code"),e(64,`new Date(2017, 10, 28);
`),n()(),t(65,"blockquote")(66,"p"),e(67,"O componente respeitar\xE1 o formato passado para o "),t(68,"em"),e(69,"model"),n(),e(70,` via codifica\xE7\xE3o. Por\xE9m, caso seja feita altera\xE7\xE3o em algum
dos valores de data em tela, o componente atribuir\xE1 o formato `),t(71,"strong"),e(72,"Data (E8601DAw.): yyyy-mm-dd"),n(),e(73," ao model."),n()(),t(74,"p"),e(75,"Importante:"),n(),t(76,"ul")(77,"li"),e(78,"Quando preenchidas a data inicial e final, a data inicial deve ser sempre menor ou igual a data final;"),n(),t(79,"li"),e(80,"Ao passar uma data inv\xE1lida via codifica\xE7\xE3o, o valor ser\xE1 mantido no "),t(81,"em"),e(82,"model"),n(),e(83," e o "),t(84,"code"),e(85,"input"),n(),e(86," da tela aparecer\xE1 vazio;"),n(),t(87,"li"),e(88,"Permite trabalhar com as duas datas separadamente atrav\xE9s das propriedades "),t(89,"code"),e(90,"p-start-date"),n(),e(91," e "),t(92,"code"),e(93,"p-end-date"),n(),e(94,` no lugar do
`),t(95,"code"),e(96,"[(ngModel)]"),n(),e(97,", no entanto sem a valida\xE7\xE3o do formul\xE1rio;"),n(),t(98,"li"),e(99,"Para a valida\xE7\xE3o do formul\xE1rio, utilize o "),t(100,"code"),e(101,"[(ngModel)]"),n(),e(102,"."),n()()(),t(103,"div",7)(104,"h4",8),e(105,"Seletor"),n(),t(106,"pre",9),e(107,`<po-datepicker-range
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    p-clean="boolean"
    p-disabled="boolean"
    p-end-date="string | Date"
    p-error-limit="boolean"
    p-field-error-message="string"
    p-help="string"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-literals="PoDatepickerRangeLiterals"
    p-locale="string"
    p-max-date="string | Date"
    p-min-date="string | Date"
    p-no-autocomplete="boolean"
    (p-change)="EventEmitter"
    p-optional="boolean"
    p-readonly="boolean"
    p-required="boolean"
    p-show-required="boolean"
    p-size="string"
    p-start-date="string | Date" >
</po-datepicker-range>
`),n()(),t(108,"h4",10),e(109,"Propriedades"),n(),t(110,"table",11)(111,"tr",12)(112,"th",13),e(113,"Nome"),n(),t(114,"th",13),e(115,"Tipo"),n(),t(116,"th",13),e(117,"Padr\xE3o"),n(),t(118,"th",13),e(119,"Descri\xE7\xE3o"),n()(),t(120,"tr",14)(121,"td",15)(122,"div",16)(123,"span",17),e(124," (p-additional-help)"),a(125,"br"),n()()(),t(126,"td",18)(127,"code",19),e(128,"EventEmitter"),n()(),t(129,"td",20),e(130,"-"),n(),t(131,"td",21)(132,"em")(133,"strong"),e(134,"(opcional)"),n()(),t(135,"p"),e(136,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),t(137,"code"),e(138,"p-help"),n(),e(139,"."),n()()(),t(140,"tr",14)(141,"td",15)(142,"div",22)(143,"span",23),e(144," p-additional-help-tooltip"),a(145,"br"),n()()(),t(146,"td",18)(147,"code",24),e(148,"string"),n()(),t(149,"td",20),e(150,"-"),n(),t(151,"td",21)(152,"em")(153,"strong"),e(154,"(opcional)"),n()(),t(155,"p"),e(156,"Exibe um \xEDcone de ajuda adicional ao "),t(157,"code"),e(158,"p-help"),n(),e(159,`, com o texto desta propriedade no tooltip.
Se o evento `),t(160,"code"),e(161,"p-additional-help"),n(),e(162,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),t(163,"strong"),e(164,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),n()(),t(165,"blockquote")(166,"p"),e(167,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),n()()()(),t(168,"tr",14)(169,"td",15)(170,"div",22)(171,"span",23),e(172," p-append-in-body"),a(173,"br"),n()()(),t(174,"td",18)(175,"code",25),e(176,"boolean"),n()(),t(177,"td",20)(178,"p")(179,"code"),e(180,"false"),n()()(),t(181,"td",21)(182,"em")(183,"strong"),e(184,"(opcional)"),n()(),t(185,"p"),e(186,"Define que o "),t(187,"code"),e(188,"calendar"),n(),e(189," e/ou tooltip ("),t(190,"code"),e(191,"p-additional-help-tooltip"),n(),e(192," e/ou "),t(193,"code"),e(194,"p-error-limit"),n(),e(195,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),n(),t(196,"blockquote")(197,"p"),e(198,"Quando utilizado com "),t(199,"code"),e(200,"p-additional-help-tooltip"),n(),e(201,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),n()()()(),t(202,"tr",14)(203,"td",15)(204,"div",22)(205,"span",23),e(206," p-auto-focus"),a(207,"br"),n()()(),t(208,"td",18)(209,"code",25),e(210,"boolean"),n()(),t(211,"td",20)(212,"p")(213,"code"),e(214,"false"),n()()(),t(215,"td",21)(216,"em")(217,"strong"),e(218,"(opcional)"),n()(),t(219,"p"),e(220,"Aplica foco no elemento ao ser iniciado."),n(),t(221,"blockquote")(222,"p"),e(223,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),n()()()(),t(224,"tr",14)(225,"td",15)(226,"div",22)(227,"span",23),e(228," p-clean"),a(229,"br"),n()()(),t(230,"td",18)(231,"code",25),e(232,"boolean"),n()(),t(233,"td",20)(234,"p")(235,"code"),e(236,"false"),n()()(),t(237,"td",21)(238,"em")(239,"strong"),e(240,"(opcional)"),n()(),t(241,"p"),e(242,"Habilita a\xE7\xE3o para limpar o campo."),n()()(),t(243,"tr",14)(244,"td",15)(245,"div",22)(246,"span",23),e(247," p-disabled"),a(248,"br"),n()()(),t(249,"td",18)(250,"code",25),e(251,"boolean"),n()(),t(252,"td",20)(253,"p")(254,"code"),e(255,"false"),n()()(),t(256,"td",21)(257,"em")(258,"strong"),e(259,"(opcional)"),n()(),t(260,"p"),e(261,"Desabilita o campo."),n()()(),t(262,"tr",14)(263,"td",15)(264,"div",22)(265,"span",23),e(266," p-end-date"),a(267,"br"),n()()(),t(268,"td",18)(269,"code",24),e(270,"string "),n(),t(271,"code",26),e(272," Date"),n()(),t(273,"td",20),e(274,"-"),n(),t(275,"td",21)(276,"em")(277,"strong"),e(278,"(opcional)"),n()(),t(279,"p"),e(280,"Data final."),n()()(),t(281,"tr",14)(282,"td",15)(283,"div",22)(284,"span",23),e(285," p-error-limit"),a(286,"br"),n()()(),t(287,"td",18)(288,"code",25),e(289,"boolean"),n()(),t(290,"td",20)(291,"p")(292,"code"),e(293,"false"),n()()(),t(294,"td",21)(295,"em")(296,"strong"),e(297,"(opcional)"),n()(),t(298,"p"),e(299,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),n(),t(300,"blockquote")(301,"p"),e(302,"Caso essa propriedade seja definida como "),t(303,"code"),e(304,"true"),n(),e(305,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),n()()()(),t(306,"tr",14)(307,"td",15)(308,"div",22)(309,"span",23),e(310," p-field-error-message"),a(311,"br"),n()()(),t(312,"td",18)(313,"code",24),e(314,"string"),n()(),t(315,"td",20),e(316,"-"),n(),t(317,"td",21)(318,"em")(319,"strong"),e(320,"(opcional)"),n()(),t(321,"p"),e(322,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),n(),t(323,"blockquote")(324,"p"),e(325,"Necess\xE1rio que a propriedade "),t(326,"code"),e(327,"p-required"),n(),e(328," esteja habilitada."),n()()()(),t(329,"tr",14)(330,"td",15)(331,"div",22)(332,"span",23),e(333," p-help"),a(334,"br"),n()()(),t(335,"td",18)(336,"code",24),e(337,"string"),n()(),t(338,"td",20),e(339,"-"),n(),t(340,"td",21)(341,"em")(342,"strong"),e(343,"(opcional)"),n()(),t(344,"p"),e(345,"Texto de apoio do campo."),n()()(),t(346,"tr",14)(347,"td",15)(348,"div",16)(349,"span",17),e(350," (p-keydown)"),a(351,"br"),n()()(),t(352,"td",18)(353,"code",19),e(354,"EventEmitter"),n()(),t(355,"td",20),e(356,"-"),n(),t(357,"td",21)(358,"em")(359,"strong"),e(360,"(opcional)"),n()(),t(361,"p"),e(362,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),t(363,"code"),e(364,"KeyboardEvent"),n(),e(365," com informa\xE7\xF5es sobre a tecla."),n()()(),t(366,"tr",14)(367,"td",15)(368,"div",22)(369,"span",23),e(370," p-label"),a(371,"br"),n()()(),t(372,"td",18)(373,"code",24),e(374,"string"),n()(),t(375,"td",20),e(376,"-"),n(),t(377,"td",21)(378,"em")(379,"strong"),e(380,"(opcional)"),n()(),t(381,"p"),e(382,"R\xF3tulo do campo."),n()()(),t(383,"tr",14)(384,"td",15)(385,"div",22)(386,"span",23),e(387," p-literals"),a(388,"br"),n()()(),t(389,"td",18)(390,"code",27),e(391,"PoDatepickerRangeLiterals"),n()(),t(392,"td",20),e(393,"-"),n(),t(394,"td",21)(395,"em")(396,"strong"),e(397,"(opcional)"),n()(),t(398,"p"),e(399,"Objeto com as literais usadas no "),t(400,"code"),e(401,"po-datepicker-range"),n(),e(402,"."),n(),t(403,"p"),e(404,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),n(),t(405,"pre")(406,"code"),e(407,`const customLiterals: PoDatepickerRangeLiterals = {
  invalidFormat: 'Date in inconsistent format',
  startDateGreaterThanEndDate: 'End date less than start date'
};
`),n()(),t(408,"p"),e(409,"Ou passando apenas as literais que deseja customizar:"),n(),t(410,"pre")(411,"code"),e(412,`const customLiterals: PoDatepickerRangeLiterals = {
  invalidFormat: 'Date in inconsistent format'
};
`),n()(),t(413,"p"),e(414,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),n(),t(415,"pre")(416,"code"),e(417,`<po-datepicker-range
  [p-literals]="customLiterals">
</po-datepicker-range>
`),n()(),t(418,"blockquote")(419,"p"),e(420,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),t(421,"a",28)(422,"code"),e(423,"PoI18nService"),n()(),e(424," ou do browser."),n()()()(),t(425,"tr",14)(426,"td",15)(427,"div",22)(428,"span",23),e(429," p-locale"),a(430,"br"),n()()(),t(431,"td",18)(432,"code",24),e(433,"string"),n()(),t(434,"td",20),e(435,"-"),n(),t(436,"td",21)(437,"em")(438,"strong"),e(439,"(opcional)"),n()(),t(440,"p"),e(441,"Idioma que o calend\xE1rio utilizar\xE1 para exibir as datas."),n(),t(442,"blockquote")(443,"p"),e(444,"O locale padr\xE3o ser\xE1 recuperado com base no "),t(445,"a",28)(446,"code"),e(447,"PoI18nService"),n()(),e(448," ou "),t(449,"em"),e(450,"browser"),n(),e(451,"."),n()()()(),t(452,"tr",14)(453,"td",15)(454,"div",22)(455,"span",23),e(456," p-max-date"),a(457,"br"),n()()(),t(458,"td",18)(459,"code",24),e(460,"string "),n(),t(461,"code",26),e(462," Date"),n()(),t(463,"td",20),e(464,"-"),n(),t(465,"td",21)(466,"em")(467,"strong"),e(468,"(opcional)"),n()(),t(469,"p"),e(470,"Define uma data m\xE1xima para o "),t(471,"code"),e(472,"po-datepicker-range"),n(),e(473,"."),n()()(),t(474,"tr",14)(475,"td",15)(476,"div",22)(477,"span",23),e(478," p-min-date"),a(479,"br"),n()()(),t(480,"td",18)(481,"code",24),e(482,"string "),n(),t(483,"code",26),e(484," Date"),n()(),t(485,"td",20),e(486,"-"),n(),t(487,"td",21)(488,"em")(489,"strong"),e(490,"(opcional)"),n()(),t(491,"p"),e(492,"Define uma data m\xEDnima para o "),t(493,"code"),e(494,"po-datepicker-range"),n(),e(495,"."),n()()(),t(496,"tr",14)(497,"td",15)(498,"div",22)(499,"span",23),e(500," p-no-autocomplete"),a(501,"br"),n()()(),t(502,"td",18)(503,"code",25),e(504,"boolean"),n()(),t(505,"td",20)(506,"p")(507,"code"),e(508,"false"),n()()(),t(509,"td",21)(510,"em")(511,"strong"),e(512,"(opcional)"),n()(),t(513,"p"),e(514,"Define a propriedade nativa "),t(515,"code"),e(516,"autocomplete"),n(),e(517," do campo como "),t(518,"code"),e(519,"off"),n(),e(520,"."),n()()(),t(521,"tr",14)(522,"td",15)(523,"div",16)(524,"span",17),e(525," (p-change)"),a(526,"br"),n()()(),t(527,"td",18)(528,"code",19),e(529,"EventEmitter"),n()(),t(530,"td",20),e(531,"-"),n(),t(532,"td",21)(533,"em")(534,"strong"),e(535,"(opcional)"),n()(),t(536,"p"),e(537,"Evento disparado ao alterar valor do campo."),n()()(),t(538,"tr",14)(539,"td",15)(540,"div",22)(541,"span",23),e(542," p-optional"),a(543,"br"),n()()(),t(544,"td",18)(545,"code",25),e(546,"boolean"),n()(),t(547,"td",20)(548,"p")(549,"code"),e(550,"false"),n()()(),t(551,"td",21)(552,"em")(553,"strong"),e(554,"(opcional)"),n()(),t(555,"p"),e(556,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),n(),t(557,"blockquote")(558,"p"),e(559,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),n()(),t(560,"ul")(561,"li"),e(562,"O campo conter "),t(563,"code"),e(564,"p-required"),n(),e(565,";"),n(),t(566,"li"),e(567,"N\xE3o possuir "),t(568,"code"),e(569,"p-help"),n(),e(570," e/ou "),t(571,"code"),e(572,"p-label"),n(),e(573,"."),n()()()(),t(574,"tr",14)(575,"td",15)(576,"div",22)(577,"span",23),e(578," p-readonly"),a(579,"br"),n()()(),t(580,"td",18)(581,"code",25),e(582,"boolean"),n()(),t(583,"td",20)(584,"p")(585,"code"),e(586,"false"),n()()(),t(587,"td",21)(588,"em")(589,"strong"),e(590,"(opcional)"),n()(),t(591,"p"),e(592,"Indica que o campo ser\xE1 somente leitura."),n()()(),t(593,"tr",14)(594,"td",15)(595,"div",22)(596,"span",23),e(597," p-required"),a(598,"br"),n()()(),t(599,"td",18)(600,"code",25),e(601,"boolean"),n()(),t(602,"td",20)(603,"p")(604,"code"),e(605,"false"),n()()(),t(606,"td",21)(607,"em")(608,"strong"),e(609,"(opcional)"),n()(),t(610,"p"),e(611,"Define que o campo ser\xE1 obrigat\xF3rio."),n()()(),t(612,"tr",14)(613,"td",15)(614,"div",22)(615,"span",23),e(616," p-show-required"),a(617,"br"),n()()(),t(618,"td",18)(619,"code",25),e(620,"boolean"),n()(),t(621,"td",20),e(622,"-"),n(),t(623,"td",21)(624,"p"),e(625,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),n(),t(626,"blockquote")(627,"p"),e(628,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),n()(),t(629,"ul")(630,"li"),e(631,"N\xE3o possuir "),t(632,"code"),e(633,"p-help"),n(),e(634," e/ou "),t(635,"code"),e(636,"p-label"),n(),e(637,"."),n()()()(),t(638,"tr",14)(639,"td",15)(640,"div",22)(641,"span",23),e(642," p-size"),a(643,"br"),n()()(),t(644,"td",18)(645,"code",24),e(646,"string"),n()(),t(647,"td",20)(648,"p")(649,"code"),e(650,"medium"),n()()(),t(651,"td",21)(652,"em")(653,"strong"),e(654,"(opcional)"),n()(),t(655,"p"),e(656,"Define o tamanho do componente:"),n(),t(657,"ul")(658,"li")(659,"code"),e(660,"small"),n(),e(661,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),n(),t(662,"li")(663,"code"),e(664,"medium"),n(),e(665,": altura do input como 44px."),n()(),t(666,"blockquote")(667,"p"),e(668,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),t(669,"code"),e(670,"medium"),n(),e(671,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),t(672,"a",29),e(673,"po-theme"),n(),e(674,"."),n()()()(),t(675,"tr",14)(676,"td",15)(677,"div",22)(678,"span",23),e(679," p-start-date"),a(680,"br"),n()()(),t(681,"td",18)(682,"code",24),e(683,"string "),n(),t(684,"code",26),e(685," Date"),n()(),t(686,"td",20),e(687,"-"),n(),t(688,"td",21)(689,"em")(690,"strong"),e(691,"(opcional)"),n()(),t(692,"p"),e(693,"Data inicial."),n()()()(),t(694,"h3",10),e(695,"M\xE9todos"),n(),t(696,"table",30)(697,"tr",14)(698,"th",31)(699,"div",22)(700,"h4")(701,"span",23),e(702," focus "),n()()()()(),t(703,"tr",21)(704,"td",21)(705,"p"),e(706,"Fun\xE7\xE3o que atribui foco ao componente."),n(),t(707,"p"),e(708,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),n(),t(709,"pre")(710,"code"),e(711,`import { PoDatepickerRangeComponent } from '@po-ui/ng-components';

...

@ViewChild(PoDatepickerRangeComponent, { static: true }) datepickerRange: PoDatepickerRangeComponent;

focusDatepickerRange() {
  this.datepickerRange.focus();
}
`),n()()()()(),a(712,"br"),t(713,"table",30)(714,"tr",14)(715,"th",31)(716,"div",22)(717,"h4")(718,"span",23),e(719," showAdditionalHelp "),n()()()()(),t(720,"tr",21)(721,"td",21)(722,"p"),e(723,"M\xE9todo que exibe "),t(724,"code"),e(725,"p-additionalHelpTooltip"),n(),e(726," ou executa a a\xE7\xE3o definida em "),t(727,"code"),e(728,"p-additionalHelp"),n(),e(729,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),t(730,"code"),e(731,"p-keydown"),n(),e(732,"."),n(),t(733,"pre")(734,"code"),e(735,`<po-datepicker-range
 #datepickerRange
 ...
 p-additional-help-tooltip="Mensagem de ajuda complementar"
 (p-keydown)="onKeyDown($event, datepickerRange)"
></po-datepicker-range>
`),n()(),t(736,"pre")(737,"code"),e(738,`...
onKeyDown(event: KeyboardEvent, inp: PoDatepickerRangeComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),n()()()()(),a(739,"br"),t(740,"h3"),e(741,"Interfaces"),n(),t(742,"h4",32)(743,"code",5),e(744,"PoDatepickerRangeLiterals"),n()(),t(745,"div",2)(746,"p"),e(747,"Interface para defini\xE7\xE3o das literais usadas no "),t(748,"code"),e(749,"po-datepicker-range"),n(),e(750,"."),n()(),t(751,"h4",10),e(752,"Propriedades"),n(),t(753,"table",11)(754,"tr",12)(755,"th",13),e(756,"Nome"),n(),t(757,"th",13),e(758,"Tipo"),n(),t(759,"th",13),e(760,"Descri\xE7\xE3o"),n()(),t(761,"tr",14)(762,"td",15)(763,"div",22)(764,"span",23),e(765," dateOutOfPeriod"),a(766,"br"),n()()(),t(767,"td",18)(768,"code",24),e(769,"string"),n()(),t(770,"td",21)(771,"em")(772,"strong"),e(773,"(opcional)"),n()(),t(774,"p"),e(775,"Data fora do per\xEDodo."),n()()(),t(776,"tr",14)(777,"td",15)(778,"div",22)(779,"span",23),e(780," invalidDate"),a(781,"br"),n()()(),t(782,"td",18)(783,"code",24),e(784,"string"),n()(),t(785,"td",21)(786,"em")(787,"strong"),e(788,"(opcional)"),n()(),t(789,"p"),e(790,"Data inv\xE1lida."),n()()(),t(791,"tr",14)(792,"td",15)(793,"div",22)(794,"span",23),e(795," invalidFormat"),a(796,"br"),n()()(),t(797,"td",18)(798,"code",24),e(799,"string"),n()(),t(800,"td",21)(801,"em")(802,"strong"),e(803,"(opcional)"),n()(),t(804,"p"),e(805,"Data em formato inv\xE1lido."),n()()(),t(806,"tr",14)(807,"td",15)(808,"div",22)(809,"span",23),e(810," startDateGreaterThanEndDate"),a(811,"br"),n()()(),t(812,"td",18)(813,"code",24),e(814,"string"),n()(),t(815,"td",21)(816,"em")(817,"strong"),e(818,"(opcional)"),n()(),t(819,"p"),e(820,"Data inicial maior que data final."),n()()()(),t(821,"h4",32)(822,"code",5),e(823,"PoDatepickerRange"),n()(),t(824,"div",2)(825,"p"),e(826,"Interface para defini\xE7\xE3o do objeto com a data inicial e final usadas no "),t(827,"code"),e(828,"po-datepicker-range"),n(),e(829,"."),n(),t(830,"blockquote")(831,"p"),e(832,`Os formatos de data permitidos seguem os padr\xF5es definidos na
`),t(833,"a",33),e(834,"descri\xE7\xE3o do componente"),n(),e(835,"."),n()()(),t(836,"h4",10),e(837,"Propriedades"),n(),t(838,"table",11)(839,"tr",12)(840,"th",13),e(841,"Nome"),n(),t(842,"th",13),e(843,"Tipo"),n(),t(844,"th",13),e(845,"Descri\xE7\xE3o"),n()(),t(846,"tr",14)(847,"td",15)(848,"div",22)(849,"span",23),e(850," end"),a(851,"br"),n()()(),t(852,"td",18)(853,"code",24),e(854,"string "),n(),t(855,"code",26),e(856," Date"),n()(),t(857,"td",21)(858,"p"),e(859,"Data final"),n()()(),t(860,"tr",14)(861,"td",15)(862,"div",22)(863,"span",23),e(864," start"),a(865,"br"),n()()(),t(866,"td",18)(867,"code",24),e(868,"string "),n(),t(869,"code",26),e(870," Date"),n()(),t(871,"td",21)(872,"p"),e(873,"Data inicial"),n()()()()())},dependencies:[C],encapsulation:2})}return l})();var ye=(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,o){this.route=d,this.router=o}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let o=d.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(o){return new(o||l)(x(le),x(re))};static \u0275cmp=S({type:l,selectors:[["ng-component"]],standalone:!1,decls:9,vars:4,consts:[["p-title"," Datepicker Range",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,i){o&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),f("p-click",function(){return i.changeTab("doc")}),a(3,"sample-po-datepicker-range-doc"),n(),t(4,"po-tab",3),f("p-click",function(){return i.changeTab("web")}),a(5,"sample-po-datepicker-range-basic-view")(6,"sample-po-datepicker-range-labs-view")(7,"sample-po-datepicker-range-vacations-view")(8,"sample-po-datepicker-range-vacations-reactive-form-view"),n()()()),o&2&&(s("p-actions",i.actions),p(2),s("p-active",i.activeTab==="doc"),p(2),s("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[ue,k,D,Se,Ee,ke,Ce,xe],encapsulation:2})}return l})();var ze=[{path:"",component:ye}],Re=(()=>{class l{static \u0275fac=function(o){return new(o||l)};static \u0275mod=G({type:l});static \u0275inj=Q({imports:[te.forChild(ze),te]})}return l})();var ht=(()=>{class l{static \u0275fac=function(o){return new(o||l)};static \u0275mod=G({type:l});static \u0275inj=Q({imports:[ge,Re]})}return l})();export{ht as DocPoDatepickerRangeModule};
