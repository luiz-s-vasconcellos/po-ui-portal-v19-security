import{$ as N,$a as k,$d as C,Ec as W,F as h,Fd as ie,G as b,Ga as e,Ha as H,Ia as _,Ka as f,La as g,Lb as L,Ma as E,Mb as D,Nb as I,Ob as z,Pa as T,Pb as B,Rd as oe,Sb as Y,T as p,Tb as Q,Tc as $,U as P,Vb as J,Vc as ee,Wb as X,Yb as Z,Zb as U,_ as c,_d as v,cd as F,ce as j,dd as M,ha as d,jd as q,ka as y,na as i,oa as t,pa as l,pd as te,ta as R,te as x,ua as u,ue as ne,vc as V,y as A}from"./chunk-Y4SQKOF7.js";var ae=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["sample-po-switch-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","switch","p-label","PO Switch"]],template:function(a,o){a&1&&l(0,"po-switch",0)},dependencies:[M],encapsulation:2})}return n})();var ge=n=>({"docs-sample-code-tabs":n}),le=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["sample-po-switch-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(l(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Switch Basic"),t(),i(4,"a",2),u("click",function(){return o.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-switch-basic/sample-po-switch-basic.component.html"),t(),i(13,"pre",7),e(14,`<po-switch name="switch" p-label="PO Switch"> </po-switch>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-switch-basic/sample-po-switch-basic.component.ts"),t(),i(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-switch-basic',
  templateUrl: './sample-po-switch-basic.component.html',
  standalone: false
})
export class SamplePoSwitchBasicComponent {}
`),t()()()()(),i(21,"div",10),l(22,"sample-po-switch-basic"),t(),l(23,"hr")),a&2&&(p(5),y("po-icon "+o.sampleCodeButtonIcon),p(),_(" ",o.sampleCodeButtonLabel,""),p(),d("ngClass",T(4,ge,o.hideSampleCodeTabs)))},dependencies:[k,x,v,C,ae],encapsulation:2})}return n})();var pe=(()=>{class n{additionalHelpTooltip;event;help;label;labelOff;labelOn;labelPosition;properties;size;switch;labelPositionOptions=[{label:"Left",value:F.Left},{label:"Right",value:F.Right}];propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"formatModel",label:"Format Model"},{value:"hideLabelStatus",label:"Hide label status"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}changeEvent(m){this.event=m}restore(){this.additionalHelpTooltip="",this.event="",this.help=void 0,this.label=void 0,this.labelOn="",this.labelOff="",this.labelPosition=void 0,this.properties=[],this.size="medium",this.switch=void 0}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["sample-po-switch-labs"]],standalone:!1,decls:18,vars:24,consts:[["f","ngForm"],["name","switch",3,"ngModelChange","p-change","p-keydown","ngModel","p-additional-help-tooltip","p-disabled","p-help","p-label","p-label-off","p-label-on","p-label-position","p-format-model","p-hide-label-status","p-size"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","additionalHelpTooltip","p-clean","","p-label","Additional Help Tooltip",1,"po-md-6",3,"ngModelChange","ngModel"],["name","labelOff","p-help","Text displayed when PO Switch is set to 'false'","p-label","Label Off",1,"po-md-6",3,"ngModelChange","ngModel"],["name","labelOn","p-help","Text displayed when PO Switch is set to 'true'","p-label","Label On",1,"po-md-6",3,"ngModelChange","ngModel"],["name","labelPosition","p-label","Label Position",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","4","p-label","Properties",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(a,o){if(a&1){let s=R();i(0,"po-switch",1),E("ngModelChange",function(r){return h(s),g(o.switch,r)||(o.switch=r),b(r)}),u("p-change",function(){return h(s),b(o.changeEvent("p-change"))})("p-keydown",function(){return h(s),b(o.changeEvent("p-keydown"))}),t(),l(1,"hr"),i(2,"div",2),l(3,"po-info",3)(4,"po-info",4),t(),l(5,"hr"),i(6,"form",null,0)(8,"po-input",5),E("ngModelChange",function(r){return h(s),g(o.label,r)||(o.label=r),b(r)}),t(),i(9,"po-input",6),E("ngModelChange",function(r){return h(s),g(o.help,r)||(o.help=r),b(r)}),t(),i(10,"po-input",7),E("ngModelChange",function(r){return h(s),g(o.additionalHelpTooltip,r)||(o.additionalHelpTooltip=r),b(r)}),t(),i(11,"po-input",8),E("ngModelChange",function(r){return h(s),g(o.labelOff,r)||(o.labelOff=r),b(r)}),t(),i(12,"po-input",9),E("ngModelChange",function(r){return h(s),g(o.labelOn,r)||(o.labelOn=r),b(r)}),t(),i(13,"po-radio-group",10),E("ngModelChange",function(r){return h(s),g(o.labelPosition,r)||(o.labelPosition=r),b(r)}),t(),i(14,"po-checkbox-group",11),E("ngModelChange",function(r){return h(s),g(o.properties,r)||(o.properties=r),b(r)}),t(),i(15,"po-radio-group",12),E("ngModelChange",function(r){return h(s),g(o.size,r)||(o.size=r),b(r)}),t(),i(16,"div",2)(17,"po-button",13),u("p-click",function(){return h(s),b(o.restore())}),t()()()}a&2&&(f("ngModel",o.switch),d("p-additional-help-tooltip",o.additionalHelpTooltip)("p-disabled",o.properties.includes("disabled"))("p-help",o.help)("p-label",o.label)("p-label-off",o.labelOff)("p-label-on",o.labelOn)("p-label-position",o.labelPosition)("p-format-model",o.properties.includes("formatModel"))("p-hide-label-status",o.properties.includes("hideLabelStatus"))("p-size",o.size),p(3),d("p-value",o.switch),p(),d("p-value",o.event),p(4),f("ngModel",o.label),p(),f("ngModel",o.help),p(),f("ngModel",o.additionalHelpTooltip),p(),f("ngModel",o.labelOff),p(),f("ngModel",o.labelOn),p(),f("ngModel",o.labelPosition),d("p-options",o.labelPositionOptions),p(),f("ngModel",o.properties),d("p-options",o.propertiesOptions),p(),f("ngModel",o.size),d("p-options",o.sizeOptions))},dependencies:[B,L,D,z,I,V,$,ee,te,M,ie],encapsulation:2})}return n})();var ve=n=>({"docs-sample-code-tabs":n}),me=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["sample-po-switch-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(l(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Switch Labs"),t(),i(4,"a",2),u("click",function(){return o.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-switch-labs/sample-po-switch-labs.component.html"),t(),i(13,"pre",7),e(14,`<po-switch
  name="switch"
  [(ngModel)]="switch"
  [p-additional-help-tooltip]="additionalHelpTooltip"
  [p-disabled]="properties.includes('disabled')"
  [p-help]="help"
  [p-label]="label"
  [p-label-off]="labelOff"
  [p-label-on]="labelOn"
  [p-label-position]="labelPosition"
  [p-format-model]="properties.includes('formatModel')"
  [p-hide-label-status]="properties.includes('hideLabelStatus')"
  [p-size]="size"
  (p-change)="changeEvent('p-change')"
  (p-keydown)="changeEvent('p-keydown')"
>
</po-switch>

<hr />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="switch"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<hr />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-label="Help"> </po-input>

  <po-input
    class="po-md-6"
    name="additionalHelpTooltip"
    [(ngModel)]="additionalHelpTooltip"
    p-clean
    p-label="Additional Help Tooltip"
  >
  </po-input>

  <po-input
    class="po-md-6"
    name="labelOff"
    [(ngModel)]="labelOff"
    p-help="Text displayed when PO Switch is set to 'false'"
    p-label="Label Off"
  >
  </po-input>

  <po-input
    class="po-md-6"
    name="labelOn"
    [(ngModel)]="labelOn"
    p-help="Text displayed when PO Switch is set to 'true'"
    p-label="Label On"
  >
  </po-input>

  <po-radio-group
    class="po-lg-6"
    name="labelPosition"
    [(ngModel)]="labelPosition"
    p-label="Label Position"
    [p-options]="labelPositionOptions"
  >
  </po-radio-group>

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
    class="po-lg-6"
    name="size"
    [(ngModel)]="size"
    p-label="Size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="sizeOptions"
  >
  </po-radio-group>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-switch-labs/sample-po-switch-labs.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption, PoSwitchLabelPosition } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-switch-labs',
  templateUrl: './sample-po-switch-labs.component.html',
  standalone: false
})
export class SamplePoSwitchLabsComponent implements OnInit {
  additionalHelpTooltip: string;
  event: string;
  help: string;
  label: string;
  labelOff: string;
  labelOn: string;
  labelPosition: PoSwitchLabelPosition;
  properties: Array<string>;
  size: string;
  switch: boolean;

  public readonly labelPositionOptions: Array<PoRadioGroupOption> = [
    { label: 'Left', value: PoSwitchLabelPosition.Left },
    { label: 'Right', value: PoSwitchLabelPosition.Right }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'formatModel', label: 'Format Model' },
    { value: 'hideLabelStatus', label: 'Hide label status' }
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

  restore() {
    this.additionalHelpTooltip = '';
    this.event = '';
    this.help = undefined;
    this.label = undefined;
    this.labelOn = '';
    this.labelOff = '';
    this.labelPosition = undefined;
    this.properties = [];
    this.size = 'medium';
    this.switch = undefined;
  }
}
`),t()()()()(),i(21,"div",10),l(22,"sample-po-switch-labs"),t(),l(23,"hr")),a&2&&(p(5),y("po-icon "+o.sampleCodeButtonIcon),p(),_(" ",o.sampleCodeButtonLabel,""),p(),d("ngClass",T(4,ve,o.hideSampleCodeTabs)))},dependencies:[k,x,v,C,pe],encapsulation:2})}return n})();var de=(()=>{class n{poNotification;labelPosition=F.Left;serviceFee=!1;totalAmount=43;columns=[{property:"page",label:"Product"},{property:"value",label:"Value (R$)",type:"currency",format:"BRL"}];items=[{page:"Hamburger",value:"20"},{page:"Soft Drink",value:"6"},{page:"French Fries",value:"17"}];constructor(m){this.poNotification=m}addServiceFee(){this.totalAmount=this.serviceFee?parseFloat((this.totalAmount*1.1).toFixed(2)):43}confirm(){this.poNotification.success("Purchase done Successful!")}static \u0275fac=function(a){return new(a||n)(P(W))};static \u0275cmp=c({type:n,selectors:[["sample-po-switch-order"]],standalone:!1,decls:15,vars:6,consts:[["f","ngForm"],[1,"po-row"],["p-title","Order Summary",1,"po-md-6","po-lg-4"],[3,"p-columns","p-items","p-hide-table-search"],["name","serviceFee","p-label","Allow a 10% service fee?","p-label-off","No, thank you.","p-label-on","Yes, please.",3,"ngModelChange","p-change","ngModel","p-label-position"],[1,"po-pull-right"],[1,"po-font-text-large-bold"],[1,"po-font-text"],[1,"po-pull-right","po-font-title"],["p-icon","po-icon an an-check","p-label","Confirm","p-kind","primary",1,"po-md-12",3,"p-click"]],template:function(a,o){if(a&1){let s=R();i(0,"div",1)(1,"po-widget",2)(2,"form",null,0),l(4,"po-table",3),i(5,"po-switch",4),E("ngModelChange",function(r){return h(s),g(o.serviceFee,r)||(o.serviceFee=r),b(r)}),u("p-change",function(){return h(s),b(o.addServiceFee())}),t(),i(6,"div",5)(7,"div",6),e(8,"Total value"),t(),i(9,"span",7),e(10,"R$"),t(),i(11,"span",8),e(12),t()(),i(13,"div",1)(14,"po-button",9),u("p-click",function(){return h(s),b(o.confirm())}),t()()()()()}a&2&&(p(4),d("p-columns",o.columns)("p-items",o.items)("p-hide-table-search",!1),p(),f("ngModel",o.serviceFee),d("p-label-position",o.labelPosition),p(7),H(o.totalAmount))},dependencies:[B,L,D,z,I,V,M,q,j],encapsulation:2})}return n})();var Pe=n=>({"docs-sample-code-tabs":n}),se=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["sample-po-switch-order-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(l(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Switch - Order Summary"),t(),i(4,"a",2),u("click",function(){return o.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-switch-order/sample-po-switch-order.component.html"),t(),i(13,"pre",7),e(14,`<div class="po-row">
  <po-widget class="po-md-6 po-lg-4" p-title="Order Summary">
    <form #f="ngForm">
      <po-table [p-columns]="columns" [p-items]="items" [p-hide-table-search]="false"> </po-table>

      <po-switch
        name="serviceFee"
        [(ngModel)]="serviceFee"
        p-label="Allow a 10% service fee?"
        p-label-off="No, thank you."
        p-label-on="Yes, please."
        [p-label-position]="labelPosition"
        (p-change)="addServiceFee()"
      >
      </po-switch>

      <div class="po-pull-right">
        <div class="po-font-text-large-bold">Total value</div>
        <span class="po-font-text">R$</span>
        <span class="po-pull-right po-font-title">{ { totalAmount }}</span>
      </div>

      <div class="po-row">
        <po-button
          class="po-md-12"
          p-icon="po-icon an an-check"
          p-label="Confirm"
          p-kind="primary"
          (p-click)="confirm()"
        >
        </po-button>
      </div>
    </form>
  </po-widget>
</div>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-switch-order/sample-po-switch-order.component.ts"),t(),i(19,"pre",9),e(20,`import { Component } from '@angular/core';

import { PoNotificationService, PoSwitchLabelPosition, PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-switch-order',
  templateUrl: './sample-po-switch-order.component.html',
  standalone: false
})
export class SamplePoSwitchOrderComponent {
  labelPosition: PoSwitchLabelPosition = PoSwitchLabelPosition.Left;
  serviceFee: boolean = false;
  totalAmount: number = 43;

  public readonly columns: Array<PoTableColumn> = [
    {
      property: 'page',
      label: 'Product'
    },
    {
      property: 'value',
      label: 'Value (R$)',
      type: 'currency',
      format: 'BRL'
    }
  ];

  public readonly items: Array<any> = [
    { page: 'Hamburger', value: '20' },
    { page: 'Soft Drink', value: '6' },
    { page: 'French Fries', value: '17' }
  ];

  constructor(private poNotification: PoNotificationService) {}

  addServiceFee() {
    const percentage: number = 1.1;
    this.totalAmount = this.serviceFee ? parseFloat((this.totalAmount * percentage).toFixed(2)) : 43;
  }

  confirm() {
    this.poNotification.success('Purchase done Successful!');
  }
}
`),t()()()()(),i(21,"div",10),l(22,"sample-po-switch-order"),t(),l(23,"hr")),a&2&&(p(5),y("po-icon "+o.sampleCodeButtonIcon),p(),_(" ",o.sampleCodeButtonLabel,""),p(),d("ngClass",T(4,Pe,o.hideSampleCodeTabs)))},dependencies:[k,x,v,C,de],encapsulation:2})}return n})();var ce=(()=>{class n{poNotification;formBuilder;formOrderSummary;labelPosition=F.Left;totalAmount=43;columns=[{property:"page",label:"Product"},{property:"value",label:"Value (R$)",type:"currency",format:"BRL"}];items=[{page:"Hamburger",value:"20"},{page:"Soft Drink",value:"6"},{page:"French Fries",value:"17"}];constructor(m,a){this.poNotification=m,this.formBuilder=a}ngOnInit(){this.formOrderSummary=this.formBuilder.group({serviceFee:[!1]})}addServiceFee(){let m=this.formOrderSummary.get("serviceFee").value,a=1.1;this.totalAmount=m?parseFloat((this.totalAmount*a).toFixed(2)):43}confirm(){this.poNotification.success("Purchase done Successful!")}static \u0275fac=function(a){return new(a||n)(P(W),P(J))};static \u0275cmp=c({type:n,selectors:[["sample-po-switch-order-reactive-form"]],standalone:!1,decls:14,vars:6,consts:[[1,"po-row"],["p-title","Order Summary",1,"po-md-6","po-lg-4"],[3,"formGroup"],[3,"p-columns","p-items","p-hide-table-search"],["name","serviceFee","formControlName","serviceFee","p-label","Allow a 10% service fee?","p-label-off","No, thank you.","p-label-on","Yes, please.",3,"p-change","p-label-position"],[1,"po-pull-right"],[1,"po-font-text-large-bold"],[1,"po-font-text"],[1,"po-pull-right","po-font-title"],["p-icon","an an-check","p-label","Confirm","p-kind","primary",1,"po-md-12",3,"p-click"]],template:function(a,o){a&1&&(i(0,"div",0)(1,"po-widget",1)(2,"form",2),l(3,"po-table",3),i(4,"po-switch",4),u("p-change",function(){return o.addServiceFee()}),t(),i(5,"div",5)(6,"div",6),e(7,"Total value"),t(),i(8,"span",7),e(9,"R$"),t(),i(10,"span",8),e(11),t()(),i(12,"div",0)(13,"po-button",9),u("p-click",function(){return o.confirm()}),t()()()()()),a&2&&(p(2),d("formGroup",o.formOrderSummary),p(),d("p-columns",o.columns)("p-items",o.items)("p-hide-table-search",!1),p(),d("p-label-position",o.labelPosition),p(7),H(o.totalAmount))},dependencies:[B,L,D,Y,Q,V,M,q,j],encapsulation:2})}return n})();var Te=n=>({"docs-sample-code-tabs":n}),ue=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["sample-po-switch-order-reactive-form-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(l(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Switch - Order Summary Reactive Form"),t(),i(4,"a",2),u("click",function(){return o.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-switch-order-reactive-form/sample-po-switch-order-reactive-form.component.html"),t(),i(13,"pre",7),e(14,`<div class="po-row">
  <po-widget class="po-md-6 po-lg-4" p-title="Order Summary">
    <form [formGroup]="formOrderSummary">
      <po-table [p-columns]="columns" [p-items]="items" [p-hide-table-search]="false"> </po-table>

      <po-switch
        name="serviceFee"
        formControlName="serviceFee"
        p-label="Allow a 10% service fee?"
        p-label-off="No, thank you."
        p-label-on="Yes, please."
        [p-label-position]="labelPosition"
        (p-change)="addServiceFee()"
      >
      </po-switch>

      <div class="po-pull-right">
        <div class="po-font-text-large-bold">Total value</div>
        <span class="po-font-text">R$</span>
        <span class="po-pull-right po-font-title">{ { totalAmount }}</span>
      </div>

      <div class="po-row">
        <po-button class="po-md-12" p-icon="an an-check" p-label="Confirm" p-kind="primary" (p-click)="confirm()">
        </po-button>
      </div>
    </form>
  </po-widget>
</div>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-switch-order-reactive-form/sample-po-switch-order-reactive-form.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

import { PoNotificationService, PoSwitchLabelPosition, PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-switch-order-reactive-form',
  templateUrl: './sample-po-switch-order-reactive-form.component.html',
  standalone: false
})
export class SamplePoSwitchOrderReactiveFormComponent implements OnInit {
  formOrderSummary: UntypedFormGroup;
  labelPosition: PoSwitchLabelPosition = PoSwitchLabelPosition.Left;
  totalAmount: number = 43;

  public readonly columns: Array<PoTableColumn> = [
    {
      property: 'page',
      label: 'Product'
    },
    {
      property: 'value',
      label: 'Value (R$)',
      type: 'currency',
      format: 'BRL'
    }
  ];

  public readonly items: Array<any> = [
    { page: 'Hamburger', value: '20' },
    { page: 'Soft Drink', value: '6' },
    { page: 'French Fries', value: '17' }
  ];

  constructor(
    private poNotification: PoNotificationService,
    private formBuilder: UntypedFormBuilder
  ) {}

  ngOnInit() {
    this.formOrderSummary = this.formBuilder.group({ serviceFee: [false] });
  }

  addServiceFee() {
    const serviceFee = this.formOrderSummary.get('serviceFee').value;
    const percentage: number = 1.1;
    this.totalAmount = serviceFee ? parseFloat((this.totalAmount * percentage).toFixed(2)) : 43;
  }

  confirm() {
    this.poNotification.success('Purchase done Successful!');
  }
}
`),t()()()()(),i(21,"div",10),l(22,"sample-po-switch-order-reactive-form"),t(),l(23,"hr")),a&2&&(p(5),y("po-icon "+o.sampleCodeButtonIcon),p(),_(" ",o.sampleCodeButtonLabel,""),p(),d("ngClass",T(4,Te,o.hideSampleCodeTabs)))},dependencies:[k,x,v,C,ce],encapsulation:2})}return n})();var he=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=c({type:n,selectors:[["sample-po-switch-doc"]],standalone:!1,decls:638,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-checkbox-group"],["href","https://www.w3.org/WAI/ARIA/apg/patterns/switch/#keyboard-interaction-19"],["href","https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoSwitchLabelPosition"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(a,o){a&1&&(i(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),i(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),i(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),i(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),i(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),i(16,"h3",3),e(17,"Componente"),t(),i(18,"h4",4)(19,"code",5),e(20,"PoSwitchComponent"),t()(),i(21,"div",2)(22,"p"),e(23," O componente "),i(24,"code"),e(25,"po-switch"),t(),e(26," \xE9 um "),i(27,"a",6),e(28,"checkbox"),t(),e(29,` mais intuitivo, pois faz analogia a um interruptor.
Deve ser usado quando deseja-se transmitir a ideia de ligar / desligar uma funcionalidade espec\xEDfica.`),t(),i(30,"p"),e(31,"Pode-se ligar ou desligar o switch utilizando a tecla de espa\xE7o ou o clique do mouse."),t(),i(32,"p"),e(33,`O texto exibido pode ser alterado de acordo com o valor setado aumentando as possibilidades de uso do componente,
portanto, recomenda-se informar textos que contextualizem seu uso para que facilite a compreens\xE3o do usu\xE1rio.`),t(),i(34,"blockquote")(35,"p"),e(36,"O componente n\xE3o altera o valor incial informado no "),i(37,"em"),e(38,"model"),t(),e(39,", portanto indica-se inicializa-lo caso ter necessidade."),t()(),i(40,"h4"),e(41,"Boas pr\xE1ticas"),t(),i(42,"ul")(43,"li"),e(44,"Evite "),i(45,"code"),e(46,"labels"),t(),e(47," extensos que quebram o layout do "),i(48,"code"),e(49,"po-switch"),t(),e(50,", use "),i(51,"code"),e(52,"labels"),t(),e(53," diretos, curtos e intuitivos."),t()(),i(54,"h4"),e(55,"Acessibilidade tratada no componente"),t(),i(56,"p"),e(57,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo propriet\xE1rio do conte\xFAdo. S\xE3o elas:"),t(),i(58,"ul")(59,"li"),e(60,"Quando em foco, o switch \xE9 ativado usando a tecla de Espa\xE7o. "),i(61,"a",7),e(62,"W3C WAI-ARIA 3.5 Switch - Keyboard Interaction"),t()(),i(63,"li"),e(64,"A \xE1rea do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco n\xE3o pode ficar escondido por outros elementos da tela. "),i(65,"a",8),e(66,"WCAG 2.4.12: Focus Appearance"),t()()(),i(67,"h4"),e(68,"Tokens customiz\xE1veis"),t(),i(69,"p"),e(70,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),t(),i(71,"blockquote")(72,"p"),e(73,"Para maiores informa\xE7\xF5es, acesse o guia "),i(74,"a",9),e(75,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(76,"."),t()(),i(77,"table")(78,"thead")(79,"tr")(80,"th"),e(81,"Propriedade"),t(),i(82,"th"),e(83,"Descri\xE7\xE3o"),t(),i(84,"th"),e(85,"Valor Padr\xE3o"),t()()(),i(86,"tbody")(87,"tr")(88,"td")(89,"strong"),e(90,"Unchecked"),t()(),l(91,"td")(92,"td"),t(),i(93,"tr")(94,"td")(95,"code"),e(96,"--color-unchecked"),t()(),i(97,"td"),e(98,"Cor principal no estado desmarcado"),t(),i(99,"td")(100,"code"),e(101,"var(--color-neutral-light-00)"),t()()(),i(102,"tr")(103,"td")(104,"code"),e(105,"--border-color"),t()(),i(106,"td"),e(107,"Cor da borda"),t(),i(108,"td")(109,"code"),e(110,"var(--color-neutral-dark-70)"),t()()(),i(111,"tr")(112,"td")(113,"code"),e(114,"--track-unchecked"),t()(),i(115,"td"),e(116,"Cor principal da faixa no estado desmarcado"),t(),i(117,"td")(118,"code"),e(119,"var(--color-neutral-light-20)"),t()()(),i(120,"tr")(121,"td")(122,"strong"),e(123,"Checked"),t()(),l(124,"td")(125,"td"),t(),i(126,"tr")(127,"td")(128,"code"),e(129,"--color-checked"),t()(),i(130,"td"),e(131,"Cor principal no estado selecionado"),t(),i(132,"td")(133,"code"),e(134,"var(--color-action-default)"),t()()(),i(135,"tr")(136,"td")(137,"code"),e(138,"--track-checked"),t()(),i(139,"td"),e(140,"Cor da faixa no estado selecionado"),t(),i(141,"td")(142,"code"),e(143,"var(--color-brand-01-light)"),t()()(),i(144,"tr")(145,"td")(146,"strong"),e(147,"Hover"),t()(),l(148,"td")(149,"td"),t(),i(150,"tr")(151,"td")(152,"code"),e(153,"--color-unchecked-hover"),t()(),i(154,"td"),e(155,"Cor principal no estado hover desmarcado"),t(),i(156,"td")(157,"code"),e(158,"var(--color-action-pressed)"),t()()(),i(159,"tr")(160,"td")(161,"code"),e(162,"--color-checked-hover"),t()(),i(163,"td"),e(164,"Cor principal no estado hover marcado"),t(),i(165,"td")(166,"code"),e(167,"var(--color-action-pressed)"),t()()(),i(168,"tr")(169,"td")(170,"strong"),e(171,"Focused"),t()(),l(172,"td")(173,"td"),t(),i(174,"tr")(175,"td")(176,"code"),e(177,"--outline-color-focused"),t()(),i(178,"td"),e(179,"Cor do outline do estado de focus"),t(),i(180,"td")(181,"code"),e(182,"var(--color-action-focus)"),t()()(),i(183,"tr")(184,"td")(185,"strong"),e(186,"Disabled"),t()(),l(187,"td")(188,"td"),t(),i(189,"tr")(190,"td")(191,"code"),e(192,"--color-unchecked-disabled"),t()(),i(193,"td"),e(194,"Cor principal do disabled no estado desmarcado"),t(),i(195,"td")(196,"code"),e(197,"var(--color-neutral-light-20)"),t()()(),i(198,"tr")(199,"td")(200,"code"),e(201,"--color-checked-disabled"),t()(),i(202,"td"),e(203,"Cor principal do disabled no estado marcado"),t(),i(204,"td")(205,"code"),e(206,"var(--color-action-disabled)"),t()()()()()(),i(207,"div",10)(208,"h4",11),e(209,"Seletor"),t(),i(210,"pre",12),e(211,`<po-switch
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    (p-change)="EventEmitter"
    p-disabled="boolean"
    p-format-model="boolean"
    p-help="string"
    p-hide-label-status="boolean"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-off="string"
    p-label-on="string"
    p-label-position="PoSwitchLabelPosition"
    name="string"
    p-size="string" >
</po-switch>
`),t()(),i(212,"h4",13),e(213,"Propriedades"),t(),i(214,"table",14)(215,"tr",15)(216,"th",16),e(217,"Nome"),t(),i(218,"th",16),e(219,"Tipo"),t(),i(220,"th",16),e(221,"Padr\xE3o"),t(),i(222,"th",16),e(223,"Descri\xE7\xE3o"),t()(),i(224,"tr",17)(225,"td",18)(226,"div",19)(227,"span",20),e(228," (p-additional-help)"),l(229,"br"),t()()(),i(230,"td",21)(231,"code",22),e(232,"EventEmitter"),t()(),i(233,"td",23),e(234,"-"),t(),i(235,"td",24)(236,"em")(237,"strong"),e(238,"(opcional)"),t()(),i(239,"p"),e(240,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),i(241,"code"),e(242,"p-help"),t(),e(243,"."),t()()(),i(244,"tr",17)(245,"td",18)(246,"div",25)(247,"span",26),e(248," p-additional-help-tooltip"),l(249,"br"),t()()(),i(250,"td",21)(251,"code",27),e(252,"string"),t()(),i(253,"td",23),e(254,"-"),t(),i(255,"td",24)(256,"em")(257,"strong"),e(258,"(opcional)"),t()(),i(259,"p"),e(260,"Exibe um \xEDcone de ajuda adicional ao "),i(261,"code"),e(262,"p-help"),t(),e(263,`, com o texto desta propriedade no tooltip.
Se o evento `),i(264,"code"),e(265,"p-additional-help"),t(),e(266,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),i(267,"strong"),e(268,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),i(269,"blockquote")(270,"p"),e(271,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()()()(),i(272,"tr",17)(273,"td",18)(274,"div",25)(275,"span",26),e(276," p-append-in-body"),l(277,"br"),t()()(),i(278,"td",21)(279,"code",28),e(280,"boolean"),t()(),i(281,"td",23)(282,"p")(283,"code"),e(284,"false"),t()()(),i(285,"td",24)(286,"em")(287,"strong"),e(288,"(opcional)"),t()(),i(289,"p"),e(290,"Define que o tooltip ("),i(291,"code"),e(292,"p-additional-help-tooltip"),t(),e(293," e/ou "),i(294,"code"),e(295,"p-error-limit"),t(),e(296,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),t(),i(297,"blockquote")(298,"p"),e(299,"Quando utilizado com "),i(300,"code"),e(301,"p-additional-help-tooltip"),t(),e(302,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),t()()()(),i(303,"tr",17)(304,"td",18)(305,"div",19)(306,"span",20),e(307," (p-change)"),l(308,"br"),t()()(),i(309,"td",21)(310,"code",22),e(311,"EventEmitter"),t()(),i(312,"td",23),e(313,"-"),t(),i(314,"td",24)(315,"em")(316,"strong"),e(317,"(opcional)"),t()(),i(318,"p"),e(319,"Evento disparado ao alterar valor do campo."),t()()(),i(320,"tr",17)(321,"td",18)(322,"div",25)(323,"span",26),e(324," p-disabled"),l(325,"br"),t()()(),i(326,"td",21)(327,"code",28),e(328,"boolean"),t()(),i(329,"td",23)(330,"p")(331,"code"),e(332,"false"),t()()(),i(333,"td",24)(334,"em")(335,"strong"),e(336,"(opcional)"),t()(),i(337,"p"),e(338,"Indica se o campo ser\xE1 desabilitado."),t()()(),i(339,"tr",17)(340,"td",18)(341,"div",25)(342,"span",26),e(343," p-format-model"),l(344,"br"),t()()(),i(345,"td",21)(346,"code",28),e(347,"boolean"),t()(),i(348,"td",23)(349,"p")(350,"code"),e(351,"false"),t()()(),i(352,"td",24)(353,"em")(354,"strong"),e(355,"(opcional)"),t()(),i(356,"p"),e(357,"Indica se o "),i(358,"code"),e(359,"model"),t(),e(360," receber\xE1 o valor formatado pelas propriedades "),i(361,"code"),e(362,"p-label-on"),t(),e(363," e "),i(364,"code"),e(365,"p-label-off"),t(),e(366,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),t(),i(367,"blockquote")(368,"p"),e(369,"Por padr\xE3o ser\xE1 atribu\xEDdo "),i(370,"code"),e(371,"false"),t(),e(372,"."),t()()()(),i(373,"tr",17)(374,"td",18)(375,"div",25)(376,"span",26),e(377," p-help"),l(378,"br"),t()()(),i(379,"td",21)(380,"code",27),e(381,"string"),t()(),i(382,"td",23),e(383,"-"),t(),i(384,"td",24)(385,"p"),e(386,"Texto de apoio para o campo."),t()()(),i(387,"tr",17)(388,"td",18)(389,"div",25)(390,"span",26),e(391," p-hide-label-status"),l(392,"br"),t()()(),i(393,"td",21)(394,"code",28),e(395,"boolean"),t()(),i(396,"td",23)(397,"p")(398,"code"),e(399,"false"),t()()(),i(400,"td",24)(401,"em")(402,"strong"),e(403,"(opcional)"),t()(),i(404,"p"),e(405,"Indica se o status do "),i(406,"code"),e(407,"model"),t(),e(408," ser\xE1 escondido visualmente ao lado do switch."),t(),i(409,"blockquote")(410,"p"),e(411,"Por padr\xE3o ser\xE1 atribu\xEDdo "),i(412,"code"),e(413,"false"),t(),e(414,"."),t()()()(),i(415,"tr",17)(416,"td",18)(417,"div",19)(418,"span",20),e(419," (p-keydown)"),l(420,"br"),t()()(),i(421,"td",21)(422,"code",22),e(423,"EventEmitter"),t()(),i(424,"td",23),e(425,"-"),t(),i(426,"td",24)(427,"em")(428,"strong"),e(429,"(opcional)"),t()(),i(430,"p"),e(431,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),i(432,"code"),e(433,"KeyboardEvent"),t(),e(434," com informa\xE7\xF5es sobre a tecla."),t()()(),i(435,"tr",17)(436,"td",18)(437,"div",25)(438,"span",26),e(439," p-label"),l(440,"br"),t()()(),i(441,"td",21)(442,"code",27),e(443,"string"),t()(),i(444,"td",23),e(445,"-"),t(),i(446,"td",24)(447,"p"),e(448,"R\xF3tulo exibido pelo componente."),t()()(),i(449,"tr",17)(450,"td",18)(451,"div",25)(452,"span",26),e(453," p-label-off"),l(454,"br"),t()()(),i(455,"td",21)(456,"code",27),e(457,"string"),t()(),i(458,"td",23)(459,"p")(460,"code"),e(461,"false"),t()()(),i(462,"td",24)(463,"p"),e(464,"Texto exibido quando o valor do componente for "),i(465,"code"),e(466,"false"),t(),e(467,"."),t()()(),i(468,"tr",17)(469,"td",18)(470,"div",25)(471,"span",26),e(472," p-label-on"),l(473,"br"),t()()(),i(474,"td",21)(475,"code",27),e(476,"string"),t()(),i(477,"td",23)(478,"p")(479,"code"),e(480,"true"),t()()(),i(481,"td",24)(482,"p"),e(483,"Texto exibido quando o valor do componente for "),i(484,"code"),e(485,"true"),t(),e(486,"."),t()()(),i(487,"tr",17)(488,"td",18)(489,"div",25)(490,"span",26),e(491," p-label-position"),l(492,"br"),t()()(),i(493,"td",21)(494,"code",29),e(495,"PoSwitchLabelPosition"),t()(),i(496,"td",23),e(497,"-"),t(),i(498,"td",24)(499,"em")(500,"strong"),e(501,"(opcional)"),t()(),i(502,"p"),e(503,"Posi\xE7\xE3o de exibi\xE7\xE3o do r\xF3tulo que fica ao lado do switch."),t(),i(504,"blockquote")(505,"p"),e(506,"Por padr\xE3o exibe \xE0 direita."),t()()()(),i(507,"tr",17)(508,"td",18)(509,"div",25)(510,"span",26),e(511," name"),l(512,"br"),t()()(),i(513,"td",21)(514,"code",27),e(515,"string"),t()(),i(516,"td",23),e(517,"-"),t(),i(518,"td",24)(519,"p"),e(520,"Nome do componente."),t()()(),i(521,"tr",17)(522,"td",18)(523,"div",25)(524,"span",26),e(525," p-size"),l(526,"br"),t()()(),i(527,"td",21)(528,"code",27),e(529,"string"),t()(),i(530,"td",23)(531,"p")(532,"code"),e(533,"medium"),t()()(),i(534,"td",24)(535,"em")(536,"strong"),e(537,"(opcional)"),t()(),i(538,"p"),e(539,"Define o tamanho do componente:"),t(),i(540,"ul")(541,"li")(542,"code"),e(543,"small"),t(),e(544,": altura de 16px (dispon\xEDvel apenas para acessibilidade AA)."),t(),i(545,"li")(546,"code"),e(547,"medium"),t(),e(548,": altura de 24px."),t()(),i(549,"blockquote")(550,"p"),e(551,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(552,"code"),e(553,"medium"),t(),e(554,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(555,"a",30),e(556,"po-theme"),t(),e(557,"."),t()()()()(),i(558,"h3",13),e(559,"M\xE9todos"),t(),i(560,"table",31)(561,"tr",17)(562,"th",32)(563,"div",25)(564,"h4")(565,"span",26),e(566," showAdditionalHelp "),t()()()()(),i(567,"tr",24)(568,"td",24)(569,"p"),e(570,"M\xE9todo que exibe "),i(571,"code"),e(572,"p-additionalHelpTooltip"),t(),e(573," ou executa a a\xE7\xE3o definida em "),i(574,"code"),e(575,"p-additionalHelp"),t(),e(576,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),i(577,"code"),e(578,"p-keydown"),t(),e(579,"."),t(),i(580,"pre")(581,"code"),e(582,`<po-nome-component
 #component
 ...
 p-additional-help-tooltip="Mensagem de ajuda complementar"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),t()(),i(583,"pre")(584,"code"),e(585,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),l(586,"br"),i(587,"table",31)(588,"tr",17)(589,"th",32)(590,"div",25)(591,"h4")(592,"span",26),e(593," focus "),t()()()()(),i(594,"tr",24)(595,"td",24)(596,"p"),e(597,"Fun\xE7\xE3o que atribui foco ao componente."),t(),i(598,"p"),e(599,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),i(600,"pre")(601,"code"),e(602,`import { PoSwitchComponent } from '@po-ui/ng-components';

...

@ViewChild(PoSwitchComponent, { static: true }) switch: PoSwitchComponent;

focusSwitch() {
  this.switch.focus();
}
`),t()()()()(),l(603,"br"),i(604,"h3"),e(605,"Enums"),t(),i(606,"h4",4)(607,"code",5),e(608,"PoSwitchLabelPosition"),t()(),i(609,"div",2)(610,"p"),e(611,"Enum para posicionar o label do valor do po-switch."),t()(),i(612,"h4",13),e(613,"Propriedades"),t(),i(614,"table",14)(615,"tr",15)(616,"th",16),e(617,"Nome"),t(),i(618,"th",16),e(619,"Descri\xE7\xE3o"),t()(),i(620,"tr",17)(621,"td",18)(622,"div",25)(623,"span",26),e(624," Right"),l(625,"br"),t()()(),i(626,"td",24)(627,"p"),e(628,"Posiciona o label do lado esquerdo do switch."),t()()(),i(629,"tr",17)(630,"td",18)(631,"div",25)(632,"span",26),e(633," Left"),l(634,"br"),t()()(),i(635,"td",24)(636,"p"),e(637,"Posiciona o label do lado direito do switch."),t()()()()())},dependencies:[x],encapsulation:2})}return n})();var be=(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,a){this.route=m,this.router=a}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let a=m.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(a){return new(a||n)(P(X),P(Z))};static \u0275cmp=c({type:n,selectors:[["ng-component"]],standalone:!1,decls:9,vars:4,consts:[["p-title","Switch",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,o){a&1&&(i(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),u("p-click",function(){return o.changeTab("doc")}),l(3,"sample-po-switch-doc"),t(),i(4,"po-tab",3),u("p-click",function(){return o.changeTab("web")}),l(5,"sample-po-switch-basic-view")(6,"sample-po-switch-labs-view")(7,"sample-po-switch-order-view")(8,"sample-po-switch-order-reactive-form-view"),t()()()),a&2&&(d("p-actions",o.actions),p(2),d("p-active",o.activeTab==="doc"),p(2),d("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"))},dependencies:[oe,v,C,le,me,se,ue,he],encapsulation:2})}return n})();var Oe=[{path:"",component:be}],Se=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=N({type:n});static \u0275inj=A({imports:[U.forChild(Oe),U]})}return n})();var rt=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=N({type:n});static \u0275inj=A({imports:[ne,Se]})}return n})();export{rt as DocPoSwitchModule};
