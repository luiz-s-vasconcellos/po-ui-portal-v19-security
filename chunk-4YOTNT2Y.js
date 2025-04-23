import{$ as A,$a as D,$d as f,Bd as re,F as u,Fd as F,G as g,Ga as t,Ia as _,Ka as E,La as S,Lb as J,Ma as x,Mb as Q,Nb as Y,Ob as K,Pa as k,Pb as X,Rd as z,T as p,Tc as ie,U as W,Vc as oe,Wb as Z,Yb as ee,Zb as N,_ as c,_d as v,ab as G,ac as R,bb as U,bc as M,ce as pe,dd as ae,ea as P,ec as O,ha as d,hc as te,ka as w,na as e,oa as n,pa as i,pd as le,ta as V,te as y,ua as b,ue as me,va as B,vc as ne,y as I,ya as $,za as j}from"./chunk-Y4SQKOF7.js";var de=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=c({type:a,selectors:[["sample-po-tag-basic"]],standalone:!1,decls:1,vars:0,consts:[["p-value","PO Tag"]],template:function(l,o){l&1&&i(0,"po-tag",0)},dependencies:[O],encapsulation:2})}return a})();var fe=a=>({"docs-sample-code-tabs":a}),se=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=c({type:a,selectors:[["sample-po-tag-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(i(0,"br"),e(1,"blockquote",0)(2,"label",1),t(3,"PO Tag Basic"),n(),e(4,"a",2),b("click",function(){return o.toggleSampleCodeTabs()}),i(5,"span"),t(6),n()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-tag-basic/sample-po-tag-basic.component.html"),n(),e(13,"pre",7),t(14,`<po-tag p-value="PO Tag"> </po-tag>
`),n()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-tag-basic/sample-po-tag-basic.component.ts"),n(),e(19,"pre",9),t(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-tag-basic',
  templateUrl: './sample-po-tag-basic.component.html',
  standalone: false
})
export class SamplePoTagBasicComponent {}
`),n()()()()(),e(21,"div",10),i(22,"sample-po-tag-basic"),n(),i(23,"hr")),l&2&&(p(5),w("po-icon "+o.sampleCodeButtonIcon),p(),_(" ",o.sampleCodeButtonLabel,""),p(),d("ngClass",k(4,fe,o.hideSampleCodeTabs)))},dependencies:[D,y,v,f,de],encapsulation:2})}return a})();function Ce(a,T){if(a&1){let r=V();e(0,"po-select",14),x("ngModelChange",function(o){u(r);let s=B();return S(s.icon,o)||(s.icon=o),g(o)}),n()}if(a&2){let r=B();E("ngModel",r.icon),d("p-options",r.iconList)}}function ye(a,T){if(a&1){let r=V();e(0,"po-switch",15),x("ngModelChange",function(o){u(r);let s=B();return S(s.icon,o)||(s.icon=o),g(o)}),n()}if(a&2){let r=B();E("ngModel",r.icon)}}var ce=(()=>{class a{color;event;icon;textColor;label;orientation;type;value;properties;propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"removable",label:"Removable"}];iconList=[{label:"an an-bluetooth",value:"an an-bluetooth"},{label:"an an-heart",value:"an an-heart"},{label:"an an-lightbulb",value:"an an-lightbulb"},{label:"an an-star",value:"an an-star"},{label:"an an-gear",value:"an an-gear"},{label:"an an-globe",value:"an an-globe"},{label:"fa fa-address-card",value:"fa fa-address-card"},{label:"fa fa-bell",value:"fa fa-bell"}];orientationOptions=[{label:"Horizontal",value:R.Horizontal},{label:"Vertical",value:R.Vertical}];typeOptions=[{label:"None",value:void 0},{label:"Info",value:M.Info},{label:"Danger",value:M.Danger},{label:"Success",value:M.Success},{label:"Warning",value:M.Warning},{label:"Neutral",value:M.Neutral}];ngOnInit(){this.restore()}changeEvent(r){this.event=r}propertiesChange(r){let l=[...this.propertiesOptions];r.includes("removable")?(l[0]={value:"disabled",label:"Disabled",disabled:!1},this.propertiesOptions=l):(l[0]={value:"disabled",label:"Disabled",disabled:!0},this.propertiesOptions=l)}restore(){this.color=void 0,this.icon=void 0,this.label=void 0,this.orientation=void 0,this.value="PO Tag",this.type=void 0,this.event="",this.textColor=void 0,this.properties=[]}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=c({type:a,selectors:[["sample-po-tag-labs"]],standalone:!1,decls:21,vars:22,consts:[["f","ngForm"],[3,"p-click","p-color","p-disabled","p-removable","p-icon","p-text-color","p-label","p-orientation","p-type","p-value"],[1,"po-row"],["p-label","Events",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","value","p-clean","","p-label","Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","color","p-clean","","p-label","Color","p-help","color-01, red, rgb(201, 53, 125), #753399",1,"po-md-6",3,"ngModelChange","ngModel"],["name","textColor","p-clean","","p-label","Text color","p-help","color-01, red, rgb(201, 53, 125), #753399",1,"po-md-6",3,"ngModelChange","ngModel"],["class","po-md-6 po-mt-2","name","icon","p-label","Icon",3,"ngModel","p-options","ngModelChange",4,"ngIf"],["name","properties","p-label","Properties",1,"po-md-6","po-mt-2",3,"ngModelChange","p-change","ngModel","p-options"],["class","po-md-6","name","icon","p-label","Icon",3,"ngModel","ngModelChange",4,"ngIf"],["name","orientation","p-columns","1","p-label","Orientation",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","type","p-columns","3","p-label","Type",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"],["name","icon","p-label","Icon",1,"po-md-6","po-mt-2",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-md-6",3,"ngModelChange","ngModel"]],template:function(l,o){if(l&1){let s=V();e(0,"po-tag",1),b("p-click",function(){return u(s),g(o.changeEvent("p-click"))}),n(),i(1,"hr"),e(2,"div",2),i(3,"po-info",3),n(),i(4,"hr"),e(5,"form",null,0)(7,"div",2)(8,"po-input",4),x("ngModelChange",function(m){return u(s),S(o.label,m)||(o.label=m),g(m)}),n(),e(9,"po-input",5),x("ngModelChange",function(m){return u(s),S(o.value,m)||(o.value=m),g(m)}),n()(),e(10,"div",2)(11,"po-input",6),x("ngModelChange",function(m){return u(s),S(o.color,m)||(o.color=m),g(m)}),n(),e(12,"po-input",7),x("ngModelChange",function(m){return u(s),S(o.textColor,m)||(o.textColor=m),g(m)}),n(),P(13,Ce,1,2,"po-select",8),e(14,"po-checkbox-group",9),x("ngModelChange",function(m){return u(s),S(o.properties,m)||(o.properties=m),g(m)}),b("p-change",function(m){return u(s),g(o.propertiesChange(m))}),n(),P(15,ye,1,1,"po-switch",10),n(),e(16,"div",2)(17,"po-radio-group",11),x("ngModelChange",function(m){return u(s),S(o.orientation,m)||(o.orientation=m),g(m)}),n(),e(18,"po-radio-group",12),x("ngModelChange",function(m){return u(s),S(o.type,m)||(o.type=m),g(m)}),n()(),e(19,"div",2)(20,"po-button",13),b("p-click",function(){return u(s),g(o.restore())}),n()()()}l&2&&(d("p-color",o.color)("p-disabled",o.properties.includes("disabled"))("p-removable",o.properties.includes("removable"))("p-icon",o.icon)("p-text-color",o.textColor)("p-label",o.label)("p-orientation",o.orientation)("p-type",o.type)("p-value",o.value),p(3),d("p-value",o.event),p(5),E("ngModel",o.label),p(),E("ngModel",o.value),p(2),E("ngModel",o.color),p(),E("ngModel",o.textColor),p(),d("ngIf",!o.type),p(),E("ngModel",o.properties),d("p-options",o.propertiesOptions),p(),d("ngIf",o.type),p(2),E("ngModel",o.orientation),d("p-options",o.orientationOptions),p(),E("ngModel",o.type),d("p-options",o.typeOptions))},dependencies:[U,X,J,Q,K,Y,ne,ie,oe,le,re,ae,O,F],styles:[".sample-tag-color-circle[_ngcontent-%COMP%]{border-radius:10px;display:inline-block;height:16px;margin-right:4px;vertical-align:middle;width:16px}"]})}return a})();var Pe=a=>({"docs-sample-code-tabs":a}),ue=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=c({type:a,selectors:[["sample-po-tag-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(i(0,"br"),e(1,"blockquote",0)(2,"label",1),t(3,"PO Tag Labs"),n(),e(4,"a",2),b("click",function(){return o.toggleSampleCodeTabs()}),i(5,"span"),t(6),n()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-tag-labs/sample-po-tag-labs.component.html"),n(),e(13,"pre",7),t(14,`<po-tag
  [p-color]="color"
  [p-disabled]="properties.includes('disabled')"
  [p-removable]="properties.includes('removable')"
  [p-icon]="icon"
  [p-text-color]="textColor"
  [p-label]="label"
  [p-orientation]="orientation"
  [p-type]="type"
  [p-value]="value"
  (p-click)="changeEvent('p-click')"
>
</po-tag>

<hr />

<div class="po-row">
  <po-info class="po-md-6" p-label="Events" [p-value]="event"> </po-info>
</div>

<hr />

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

    <po-input class="po-md-6" name="value" [(ngModel)]="value" p-clean p-label="Value" p-required> </po-input>
  </div>

  <div class="po-row">
    <po-input
      class="po-md-6"
      name="color"
      [(ngModel)]="color"
      p-clean
      p-label="Color"
      p-help="color-01, red, rgb(201, 53, 125), #753399"
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="textColor"
      [(ngModel)]="textColor"
      p-clean
      p-label="Text color"
      p-help="color-01, red, rgb(201, 53, 125), #753399"
    >
    </po-input>

    <po-select
      *ngIf="!type"
      class="po-md-6 po-mt-2"
      name="icon"
      [(ngModel)]="icon"
      p-label="Icon"
      [p-options]="iconList"
    >
    </po-select>

    <po-checkbox-group
      class="po-md-6 po-mt-2"
      name="properties"
      [(ngModel)]="properties"
      p-label="Properties"
      [p-options]="propertiesOptions"
      (p-change)="propertiesChange($event)"
    >
    </po-checkbox-group>

    <po-switch *ngIf="type" class="po-md-6" name="icon" [(ngModel)]="icon" p-label="Icon"> </po-switch>
  </div>

  <div class="po-row">
    <po-radio-group
      class="po-md-4"
      name="orientation"
      [(ngModel)]="orientation"
      p-columns="1"
      p-label="Orientation"
      [p-options]="orientationOptions"
    >
    </po-radio-group>

    <po-radio-group
      class="po-md-6"
      name="type"
      [(ngModel)]="type"
      p-columns="3"
      p-label="Type"
      [p-options]="typeOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),n()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-tag-labs/sample-po-tag-labs.component.ts"),n(),e(19,"pre",9),t(20,`import { Component, OnInit } from '@angular/core';

import {
  PoRadioGroupOption,
  PoSelectOption,
  PoTagOrientation,
  PoTagType,
  PoCheckboxGroupOption
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-tag-labs',
  templateUrl: './sample-po-tag-labs.component.html',
  styles: [
    \`
      .sample-tag-color-circle {
        border-radius: 10px;
        display: inline-block;
        height: 16px;
        margin-right: 4px;
        vertical-align: middle;
        width: 16px;
      }
    \`
  ],
  standalone: false
})
export class SamplePoTagLabsComponent implements OnInit {
  color: string;
  event: string;
  icon: boolean | string;
  textColor: string;
  label: string;
  orientation: PoTagOrientation;
  type: PoTagType;
  value: string;
  properties: Array<string>;

  propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'removable', label: 'Removable' }
  ];

  public readonly iconList: Array<PoSelectOption> = [
    { label: 'an an-bluetooth', value: 'an an-bluetooth' },
    { label: 'an an-heart', value: 'an an-heart' },
    { label: 'an an-lightbulb', value: 'an an-lightbulb' },
    { label: 'an an-star', value: 'an an-star' },
    { label: 'an an-gear', value: 'an an-gear' },
    { label: 'an an-globe', value: 'an an-globe' },
    { label: 'fa fa-address-card', value: 'fa fa-address-card' },
    { label: 'fa fa-bell', value: 'fa fa-bell' }
  ];

  public readonly orientationOptions: Array<PoRadioGroupOption> = [
    { label: 'Horizontal', value: PoTagOrientation.Horizontal },
    { label: 'Vertical', value: PoTagOrientation.Vertical }
  ];

  public readonly typeOptions: Array<PoRadioGroupOption> = [
    { label: 'None', value: undefined },
    { label: 'Info', value: PoTagType.Info },
    { label: 'Danger', value: PoTagType.Danger },
    { label: 'Success', value: PoTagType.Success },
    { label: 'Warning', value: PoTagType.Warning },
    { label: 'Neutral', value: PoTagType.Neutral }
  ];

  ngOnInit() {
    this.restore();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  propertiesChange(event) {
    const value = [...this.propertiesOptions];

    if (event.includes('removable')) {
      value[0] = { value: 'disabled', label: 'Disabled', disabled: false };
      this.propertiesOptions = value;
    } else {
      value[0] = { value: 'disabled', label: 'Disabled', disabled: true };
      this.propertiesOptions = value;
    }
  }

  restore() {
    this.color = undefined;
    this.icon = undefined;
    this.label = undefined;
    this.orientation = undefined;
    this.value = 'PO Tag';
    this.type = undefined;
    this.event = '';
    this.textColor = undefined;
    this.properties = [];
  }
}
`),n()()()()(),e(21,"div",10),i(22,"sample-po-tag-labs"),n(),i(23,"hr")),l&2&&(p(5),w("po-icon "+o.sampleCodeButtonIcon),p(),_(" ",o.sampleCodeButtonLabel,""),p(),d("ngClass",k(4,Pe,o.hideSampleCodeTabs)))},dependencies:[D,y,v,f,ce],encapsulation:2})}return a})();function _e(a,T){if(a&1&&i(0,"po-tag",15),a&2){let r=T.$implicit;d("p-label",r.label)("p-type",r.type)("p-value",r.value)}}function ke(a,T){if(a&1&&(e(0,"po-widget",18)(1,"div",3),i(2,"po-info",19)(3,"po-tag",20),n()()),a&2){let r=T.$implicit;p(2),d("p-label",r.label)("p-value",r.value),p(),d("p-type",r.type)("p-value",r.text)}}function De(a,T){if(a&1&&(e(0,"po-tab",16),P(1,ke,4,4,"po-widget",17),n()),a&2){let r=T.$implicit;$("p-label",r.month),p(),d("ngForOf",r.details)}}var ge=(()=>{class a{investiments=[{label:"Stocks",type:"danger",value:"Low -3.50%"},{label:"Treasury bills",type:"success",value:"Growing +2.25%"},{label:"Real estate",type:"warning",value:"Risk -0.02%"},{label:"Mutual fund",type:"success",value:"Growing +3.00%"}];items=[{month:"June",details:[{label:"Automatic Payment",value:"$ 250",type:"danger",text:"Expense"},{label:"Deposit",value:"$ 500",type:"success",text:"Income"},{label:"Bank receipt",value:"$ 10",type:"info",text:"Document"},{label:"Credit Card",value:"$ 230",type:"danger",text:"Expense"},{label:"Personal Loan",value:"$ 150",type:"warning",text:"Future"}]},{month:"July",details:[{label:"Deposit",value:"$ 500",type:"success",text:"Income"},{label:"Car insurance",value:"$ 40",type:"danger",text:"Expense"},{label:"Deposit",value:"$ 200",type:"success",text:"Income"},{label:"Bank statement",value:"$ 5",type:"info",text:"Document"},{label:"Deposit",value:"$ 70",type:"success",text:"Income"}]},{month:"August",details:[{label:"Student Loan",value:"$ 250",type:"danger",text:"Expense"},{label:"Deposit",value:"$ 50",type:"success",text:"Income"},{label:"Bank receipt",value:"$ 10",type:"info",text:"Document"},{label:"Automatic Payment",value:"$ 230",type:"warning",text:"Future"},{label:"Credit Card",value:"$ 150",type:"warning",text:"Future"}]}];advantages=[{title:"Platinum Card:",description:"best card in the market. You earn points and have concierge service and cultural advice."},{title:"Exclusive agencies:",description:"environments designed to offer comfort and privacy."},{title:"Unique experience",description:"with exclusivity background in travel, culture, entertainment and much more."},{title:"Progressive discounts",description:"on service packages, according to the volume of investments."},{title:"Free tax:",description:"withdrawals and Transfers Between Unlimited Accounts."}];userData={name:"Natasha Romanova",email:"natasha.romanova@po-ui.com.br",photo:"avatar2.png"};static \u0275fac=function(l){return new(l||a)};static \u0275cmp=c({type:a,selectors:[["sample-po-tag-bank-account"]],standalone:!1,decls:18,vars:6,consts:[["p-title","Bank Statement"],[1,"po-mt-1","po-lg-7"],["p-title","User information",1,"po-md-12","po-sm-mb-1","po-mb-1","po-lg-mb-1"],[1,"po-row"],[1,"po-md-5","po-lg-4"],["p-size","xl",3,"p-src"],[1,"po-md-7","po-lg-8"],[1,"po-mb-2"],["p-label","Name",3,"p-value"],["p-value","Premium Account"],["p-label","Email",1,"po-mt-5",3,"p-value"],["p-title","My Investiments",1,"po-md-12","po-sm-mt-1","po-mt-1","po-lg-mt-1"],["class","po-md-6 po-lg-3",3,"p-label","p-type","p-value",4,"ngFor","ngForOf"],["p-title","Last three month operations",1,"po-mt-1","po-lg-5"],["p-active","",3,"p-label",4,"ngFor","ngForOf"],[1,"po-md-6","po-lg-3",3,"p-label","p-type","p-value"],["p-active","",3,"p-label"],["class","po-lg-12 po-sm-mb-1 po-mb-1 po-lg-mb-1",4,"ngFor","ngForOf"],[1,"po-lg-12","po-sm-mb-1","po-mb-1","po-lg-mb-1"],["p-label-size","6","p-orientation","horizontal",1,"po-lg-9","po-md-8",3,"p-label","p-value"],["p-icon","","p-orientation","horizontal",1,"po-lg-3","po-md-4",3,"p-type","p-value"]],template:function(l,o){l&1&&(e(0,"po-page-default",0)(1,"div",1)(2,"po-widget",2)(3,"div",3)(4,"div",4),i(5,"po-avatar",5),n(),e(6,"div",6)(7,"div",7),i(8,"po-info",8)(9,"po-tag",9),n(),e(10,"div",7),i(11,"po-info",10),n()()()(),e(12,"po-widget",11)(13,"div",3),P(14,_e,1,3,"po-tag",12),n()()(),e(15,"po-widget",13)(16,"po-tabs"),P(17,De,2,2,"po-tab",14),n()()()),l&2&&(p(5),j("p-src","assets/graphics/",o.userData.photo,""),p(3),d("p-value",o.userData.name),p(3),d("p-value",o.userData.email),p(3),d("ngForOf",o.investiments),p(3),d("ngForOf",o.items))},dependencies:[G,te,O,F,z,v,f,pe],encapsulation:2})}return a})();var Oe=a=>({"docs-sample-code-tabs":a}),be=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=c({type:a,selectors:[["sample-po-tag-bank-account-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(i(0,"br"),e(1,"blockquote",0)(2,"label",1),t(3,"PO Tag - Bank Account"),n(),e(4,"a",2),b("click",function(){return o.toggleSampleCodeTabs()}),i(5,"span"),t(6),n()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-tag-bank-account/sample-po-tag-bank-account.component.html"),n(),e(13,"pre",7),t(14,`<po-page-default p-title="Bank Statement">
  <div class="po-mt-1 po-lg-7">
    <po-widget class="po-md-12 po-sm-mb-1 po-mb-1 po-lg-mb-1" p-title="User information">
      <div class="po-row">
        <div class="po-md-5 po-lg-4">
          <po-avatar p-size="xl" p-src="assets/graphics/{ { userData.photo }}"></po-avatar>
        </div>
        <div class="po-md-7 po-lg-8">
          <div class="po-mb-2">
            <po-info p-label="Name" [p-value]="userData.name"> </po-info>
            <po-tag p-value="Premium Account"> </po-tag>
          </div>
          <div class="po-mb-2">
            <po-info class="po-mt-5" p-label="Email" [p-value]="userData.email"> </po-info>
          </div>
        </div>
      </div>
    </po-widget>

    <po-widget class="po-md-12 po-sm-mt-1 po-mt-1 po-lg-mt-1" p-title="My Investiments">
      <div class="po-row">
        <po-tag
          *ngFor="let investiment of investiments"
          class="po-md-6 po-lg-3"
          [p-label]="investiment.label"
          [p-type]="investiment.type"
          [p-value]="investiment.value"
        >
        </po-tag>
      </div>
    </po-widget>
  </div>
  <po-widget p-title="Last three month operations" class="po-mt-1 po-lg-5">
    <po-tabs>
      <po-tab *ngFor="let item of items" p-active p-label="{ { item.month }}">
        <po-widget class="po-lg-12 po-sm-mb-1 po-mb-1 po-lg-mb-1" *ngFor="let item of item.details">
          <div class="po-row">
            <po-info
              class="po-lg-9 po-md-8"
              p-label-size="6"
              p-orientation="horizontal"
              [p-label]="item.label"
              [p-value]="item.value"
            >
            </po-info>
            <po-tag
              class="po-lg-3 po-md-4"
              p-icon
              p-orientation="horizontal"
              [p-type]="item.type"
              [p-value]="item.text"
            >
            </po-tag>
          </div>
        </po-widget>
      </po-tab>
    </po-tabs>
  </po-widget>
</po-page-default>
`),n()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-tag-bank-account/sample-po-tag-bank-account.component.ts"),n(),e(19,"pre",9),t(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-tag-bank-account',
  templateUrl: './sample-po-tag-bank-account.component.html',
  standalone: false
})
export class SamplePoTagBankAccountComponent {
  investiments = [
    { label: 'Stocks', type: 'danger', value: 'Low -3.50%' },
    { label: 'Treasury bills', type: 'success', value: 'Growing +2.25%' },
    { label: 'Real estate', type: 'warning', value: 'Risk -0.02%' },
    { label: 'Mutual fund', type: 'success', value: 'Growing +3.00%' }
  ];

  items = [
    {
      month: 'June',
      details: [
        { label: 'Automatic Payment', value: '$ 250', type: 'danger', text: 'Expense' },
        { label: 'Deposit', value: '$ 500', type: 'success', text: 'Income' },
        { label: 'Bank receipt', value: '$ 10', type: 'info', text: 'Document' },
        { label: 'Credit Card', value: '$ 230', type: 'danger', text: 'Expense' },
        { label: 'Personal Loan', value: '$ 150', type: 'warning', text: 'Future' }
      ]
    },
    {
      month: 'July',
      details: [
        { label: 'Deposit', value: '$ 500', type: 'success', text: 'Income' },
        { label: 'Car insurance', value: '$ 40', type: 'danger', text: 'Expense' },
        { label: 'Deposit', value: '$ 200', type: 'success', text: 'Income' },
        { label: 'Bank statement', value: '$ 5', type: 'info', text: 'Document' },
        { label: 'Deposit', value: '$ 70', type: 'success', text: 'Income' }
      ]
    },
    {
      month: 'August',
      details: [
        { label: 'Student Loan', value: '$ 250', type: 'danger', text: 'Expense' },
        { label: 'Deposit', value: '$ 50', type: 'success', text: 'Income' },
        { label: 'Bank receipt', value: '$ 10', type: 'info', text: 'Document' },
        { label: 'Automatic Payment', value: '$ 230', type: 'warning', text: 'Future' },
        { label: 'Credit Card', value: '$ 150', type: 'warning', text: 'Future' }
      ]
    }
  ];

  advantages = [
    {
      title: 'Platinum Card:',
      description: 'best card in the market. You earn points and have concierge service and cultural advice.'
    },
    { title: 'Exclusive agencies:', description: 'environments designed to offer comfort and privacy.' },
    {
      title: 'Unique experience',
      description: 'with exclusivity background in travel, culture, entertainment and much more.'
    },
    { title: 'Progressive discounts', description: 'on service packages, according to the volume of investments.' },
    { title: 'Free tax:', description: 'withdrawals and Transfers Between Unlimited Accounts.' }
  ];

  userData = {
    'name': 'Natasha Romanova',
    'email': 'natasha.romanova@po-ui.com.br',
    'photo': 'avatar2.png'
  };
}
`),n()()()()(),e(21,"div",10),i(22,"sample-po-tag-bank-account"),n(),i(23,"hr")),l&2&&(p(5),w("po-icon "+o.sampleCodeButtonIcon),p(),_(" ",o.sampleCodeButtonLabel,""),p(),d("ngClass",k(4,Oe,o.hideSampleCodeTabs)))},dependencies:[D,y,v,f,ge],encapsulation:2})}return a})();var Ee=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=c({type:a,selectors:[["sample-po-tag-doc"]],standalone:!1,decls:1025,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],[1,"an","an-check"],[1,"an","an-warning-circle"],[1,"an","an-x"],[1,"an","an-info"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoTagLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","PoTagOrientation"],["pan","",1,"docs-api-property-type","PoTagType"],[1,"docs-api-h4","docs-api-class-name"]],template:function(l,o){l&1&&(e(0,"div",0)(1,"p",1)(2,"code"),t(3,"import { PoTagModule } from '@po-ui/ng-components';"),n()(),e(4,"div",2)(5,"p"),t(6,"M\xF3dulo do componente "),e(7,"code"),t(8,"po-tag"),n(),t(9,"."),n()(),e(10,"h3",3),t(11,"Componente"),n(),e(12,"h4",4)(13,"code",5),t(14,"PoTagComponent"),n()(),e(15,"div",2)(16,"p"),t(17,`Este componente permite exibir um valor em forma de um marcador colorido, sendo poss\xEDvel definir uma legenda e realizar customiza\xE7\xF5es
na cor, iconografia e tipo.`),n(),e(18,"p"),t(19,"Al\xE9m disso, \xE9 poss\xEDvel definir uma a\xE7\xE3o que ser\xE1 executada tanto ao "),e(20,"em"),t(21,"click"),n(),t(22," quanto atrav\xE9s das teclas "),e(23,"em"),t(24,"enter/space"),n(),t(25,` enquanto navega
utilizando a tecla `),e(26,"em"),t(27,"tab"),n(),t(28,"."),n(),e(29,"p"),t(30,"Seu uso \xE9 recomendado para informa\xE7\xF5es que necessitem de destaque em forma de marca\xE7\xE3o."),n(),e(31,"h4"),t(32,"Tokens customiz\xE1veis"),n(),e(33,"p"),t(34,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),n(),e(35,"blockquote")(36,"p"),t(37,"Para maiores informa\xE7\xF5es, acesse o guia "),e(38,"a",6),t(39,"Personalizando o Tema Padr\xE3o com Tokens CSS"),n(),t(40,"."),n()(),e(41,"table")(42,"thead")(43,"tr")(44,"th"),t(45,"Propriedade"),n(),e(46,"th"),t(47,"Descri\xE7\xE3o"),n(),e(48,"th"),t(49,"Valor Padr\xE3o"),n()()(),e(50,"tbody")(51,"tr")(52,"td")(53,"strong"),t(54,"Default Values"),n()(),i(55,"td")(56,"td"),n(),e(57,"tr")(58,"td")(59,"code"),t(60,"--font-family"),n()(),e(61,"td"),t(62,"Fam\xEDlia tipogr\xE1fica usada"),n(),e(63,"td")(64,"code"),t(65,"var(--font-family-theme)"),n()()(),e(66,"tr")(67,"td")(68,"code"),t(69,"--font-size"),n()(),e(70,"td"),t(71,"Tamanho da fonte"),n(),e(72,"td")(73,"code"),t(74,"var(--font-size-sm)"),n()()(),e(75,"tr")(76,"td")(77,"code"),t(78,"--line-height"),n()(),e(79,"td"),t(80,"Tamanho da label"),n(),e(81,"td")(82,"code"),t(83,"var(---line-height-sm)"),n()()(),e(84,"tr")(85,"td")(86,"code"),t(87,"--border-radius"),n()(),e(88,"td"),t(89,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),n(),e(90,"td")(91,"code"),t(92,"var(--border-radius-pill)"),n()()(),e(93,"tr")(94,"td")(95,"strong"),t(96,"Neutral"),n()(),i(97,"td")(98,"td"),n(),e(99,"tr")(100,"td")(101,"code"),t(102,"--color-neutral"),n()(),e(103,"td"),t(104,"Cor principal no estado neutral"),n(),e(105,"td")(106,"code"),t(107,"var(--color-neutral-light-10)"),n()()(),e(108,"tr")(109,"td")(110,"code"),t(111,"--text-color-positive"),n()(),e(112,"td"),t(113,"Cor do texto no estado neutral"),n(),e(114,"td")(115,"code"),t(116,"var(--color-neutral-dark-80)"),n()()(),e(117,"tr")(118,"td")(119,"strong"),t(120,"Positive"),n()(),i(121,"td")(122,"td"),n(),e(123,"tr")(124,"td")(125,"code"),t(126,"--color-positive"),n()(),e(127,"td"),t(128,"Cor principal no estado positive"),n(),e(129,"td")(130,"code"),t(131,"var(--color-feedback-positive-lightest)"),n()()(),e(132,"tr")(133,"td")(134,"code"),t(135,"--text-color-positive"),n()(),e(136,"td"),t(137,"Cor do texto no estado positive"),n(),e(138,"td")(139,"code"),t(140,"var(--color-feedback-positive-dark)"),n()()(),e(141,"tr")(142,"td")(143,"strong"),t(144,"Negative"),n()(),i(145,"td")(146,"td"),n(),e(147,"tr")(148,"td")(149,"code"),t(150,"--color-negative"),n()(),e(151,"td"),t(152,"Cor principal no estado danger"),n(),e(153,"td")(154,"code"),t(155,"var(--color-feedback-negative-lightest)"),n()()(),e(156,"tr")(157,"td")(158,"code"),t(159,"--text-color-negative"),n()(),e(160,"td"),t(161,"Cor do texto no estado danger"),n(),e(162,"td")(163,"code"),t(164,"var(--color-feedback-negative-darker)"),n()()(),e(165,"tr")(166,"td")(167,"strong"),t(168,"Warning"),n()(),i(169,"td")(170,"td"),n(),e(171,"tr")(172,"td")(173,"code"),t(174,"--color-tag-warning"),n()(),e(175,"td"),t(176,"Cor principal no estado warning"),n(),e(177,"td")(178,"code"),t(179,"var(--color-feedback-warning-lightest)"),n()()(),e(180,"tr")(181,"td")(182,"code"),t(183,"--text-color-warning"),n()(),e(184,"td"),t(185,"Cor do texto no estado warning"),n(),e(186,"td")(187,"code"),t(188,"var(--color-feedback-warning-darkest)"),n()()(),e(189,"tr")(190,"td")(191,"strong"),t(192,"Info"),n()(),i(193,"td")(194,"td"),n(),e(195,"tr")(196,"td")(197,"code"),t(198,"--color-info"),n()(),e(199,"td"),t(200,"Cor principal no estado info"),n(),e(201,"td")(202,"code"),t(203,"var(--color-feedback-info-lightest)"),n()()(),e(204,"tr")(205,"td")(206,"code"),t(207,"--text-color-info"),n()(),e(208,"td"),t(209,"Cor do texto no estado info"),n(),e(210,"td")(211,"code"),t(212,"var(--color-feedback-info-dark)"),n()()(),e(213,"tr")(214,"td")(215,"strong"),t(216,"Removable"),n()(),i(217,"td")(218,"td"),n(),e(219,"tr")(220,"td")(221,"code"),t(222,"--color"),n()(),e(223,"td"),t(224,"Cor principal quando removable"),n(),e(225,"td")(226,"code"),t(227,"var(--color-brand-01-lightest)"),n()()(),e(228,"tr")(229,"td")(230,"code"),t(231,"--border-color"),n()(),e(232,"td"),t(233,"Cor de borda quando removable \xA0"),n(),e(234,"td")(235,"code"),t(236,"var(--color-brand-01-lighter)"),n()()(),e(237,"tr")(238,"td")(239,"code"),t(240,"--color-icon"),n()(),e(241,"td"),t(242,"Cor do \xEDcone quando removable \xA0"),n(),e(243,"td")(244,"code"),t(245,"var(--color-action-default)"),n()()(),e(246,"tr")(247,"td")(248,"code"),t(249,"--text-color"),n()(),e(250,"td"),t(251,"Cor do texto quando removable \xA0"),n(),e(252,"td")(253,"code"),t(254,"var(--color-neutral-dark-80)"),n()()(),e(255,"tr")(256,"td")(257,"code"),t(258,"--color-hover"),n()(),e(259,"td"),t(260,"Cor do hover no estado removable \xA0"),n(),e(261,"td")(262,"code"),t(263,"var(--color-brand-01-lighter)"),n()()(),e(264,"tr")(265,"td")(266,"strong"),t(267,"Focused"),n()(),i(268,"td")(269,"td"),n(),e(270,"tr")(271,"td")(272,"code"),t(273,"--outline-color-focused"),n()(),e(274,"td"),t(275,"Cor do outline do estado de focus"),n(),e(276,"td")(277,"code"),t(278,"var(--color-action-focus)"),n()()(),e(279,"tr")(280,"td")(281,"strong"),t(282,"Disabled"),n()(),i(283,"td")(284,"td"),n(),e(285,"tr")(286,"td")(287,"code"),t(288,"--color-disabled"),n()(),e(289,"td"),t(290,"Cor principal no estado disabled"),n(),e(291,"td")(292,"code"),t(293,"var(--color-neutral-light-20)"),n()()(),e(294,"tr")(295,"td")(296,"code"),t(297,"--border-color-disabled"),n()(),e(298,"td"),t(299,"Cor da borda no estado disabled \xA0"),n(),e(300,"td")(301,"code"),t(302,"var(--color-action-disabled)"),n()()(),e(303,"tr")(304,"td")(305,"code"),t(306,"--color-icon-disabled"),n()(),e(307,"td"),t(308,"Cor do icone no estado disabled \xA0"),n(),e(309,"td")(310,"code"),t(311,"var(--color-action-disabled)"),n()()(),e(312,"tr")(313,"td")(314,"code"),t(315,"--text-color-disabled"),n()(),e(316,"td"),t(317,"Cor do texto no estado disabled \xA0"),n(),e(318,"td")(319,"code"),t(320,"var(--color-neutral-mid-60)"),n()()()()()(),e(321,"div",7)(322,"h4",8),t(323,"Seletor"),n(),e(324,"pre",9),t(325,`<po-tag
    (p-click)="EventEmitter"
    p-color="string"
    p-disabled="boolean"
    p-icon="string | boolean | TemplateRef<void>"
    p-label="string"
    p-literals="PoTagLiterals"
    p-orientation="PoTagOrientation"
    p-removable="boolean"
    (p-close)="EventEmitter"
    p-text-color="string"
    p-type="PoTagType"
    p-value="string" >
</po-tag>
`),n()(),e(326,"h4",10),t(327,"Propriedades"),n(),e(328,"table",11)(329,"tr",12)(330,"th",13),t(331,"Nome"),n(),e(332,"th",13),t(333,"Tipo"),n(),e(334,"th",13),t(335,"Padr\xE3o"),n(),e(336,"th",13),t(337,"Descri\xE7\xE3o"),n()(),e(338,"tr",14)(339,"td",15)(340,"div",16)(341,"span",17),t(342," (p-click)"),i(343,"br"),n()()(),e(344,"td",18)(345,"code",19),t(346,"EventEmitter"),n()(),e(347,"td",20),t(348,"-"),n(),e(349,"td",21)(350,"em")(351,"strong"),t(352,"(opcional)"),n()(),e(353,"p"),t(354,"A\xE7\xE3o que ser\xE1 executada ao clicar sobre o "),e(355,"code"),t(356,"po-tag"),n(),t(357," e que receber\xE1 como par\xE2metro um objeto contendo o seu valor e tipo."),n(),e(358,"p"),t(359,"O evento de click s\xF3 funciona se a tag n\xE3o for remov\xEDvel."),n()()(),e(360,"tr",14)(361,"td",15)(362,"div",22)(363,"span",23),t(364," p-color"),i(365,"br"),n()()(),e(366,"td",18)(367,"code",24),t(368,"string"),n()(),e(369,"td",20),t(370,"-"),n(),e(371,"td",21)(372,"em")(373,"strong"),t(374,"(opcional)"),n()(),e(375,"p"),t(376,"Determina a cor da tag. As maneiras de customizar as cores s\xE3o:"),n(),e(377,"ul")(378,"li")(379,"p"),t(380,"Hexadeximal, por exemplo "),e(381,"code"),t(382,"#c64840"),n(),t(383,";"),n()(),e(384,"li")(385,"p"),t(386,"RGB, como "),e(387,"code"),t(388,"rgb(0, 0, 165)"),n(),t(389,";"),n()(),e(390,"li")(391,"p"),t(392,"O nome da cor, por exemplo "),e(393,"code"),t(394,"blue"),n(),t(395,";"),n()(),e(396,"li")(397,"p"),t(398,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),n()(),e(399,"li")(400,"p"),i(401,"span",25),e(402,"code"),t(403,"color-01"),n()()(),e(404,"li")(405,"p"),i(406,"span",26),e(407,"code"),t(408,"color-02"),n()()(),e(409,"li")(410,"p"),i(411,"span",27),e(412,"code"),t(413,"color-03"),n()()(),e(414,"li")(415,"p"),i(416,"span",28),e(417,"code"),t(418,"color-04"),n()()(),e(419,"li")(420,"p"),i(421,"span",29),e(422,"code"),t(423,"color-05"),n()()(),e(424,"li")(425,"p"),i(426,"span",30),e(427,"code"),t(428,"color-06"),n()()(),e(429,"li")(430,"p"),i(431,"span",31),e(432,"code"),t(433,"color-07"),n()()(),e(434,"li")(435,"p"),i(436,"span",32),e(437,"code"),t(438,"color-08"),n()()(),e(439,"li")(440,"p"),i(441,"span",33),e(442,"code"),t(443,"color-09"),n()()(),e(444,"li")(445,"p"),i(446,"span",34),e(447,"code"),t(448,"color-10"),n()()(),e(449,"li")(450,"p"),i(451,"span",35),e(452,"code"),t(453,"color-11"),n()()(),e(454,"li")(455,"p"),i(456,"span",36),e(457,"code"),t(458,"color-12"),n()()(),e(459,"li")(460,"p"),t(461,"Para uma melhor acessibilidade no uso do componente \xE9 recomend\xE1vel utilizar cores com um melhor contraste em rela\xE7\xE3o ao background."),n()()(),e(462,"blockquote")(463,"p")(464,"strong"),t(465,"Aten\xE7\xE3o:"),n(),t(466," A propriedade "),e(467,"code"),t(468,"p-type"),n(),t(469," sobrep\xF5e esta defini\xE7\xE3o."),n()()()(),e(470,"tr",14)(471,"td",15)(472,"div",22)(473,"span",23),t(474," p-disabled"),i(475,"br"),n()()(),e(476,"td",18)(477,"code",37),t(478,"boolean"),n()(),e(479,"td",20)(480,"p")(481,"code"),t(482,"false"),n()()(),e(483,"td",21)(484,"em")(485,"strong"),t(486,"(opcional)"),n()(),e(487,"p"),t(488,"Desabilita o "),e(489,"code"),t(490,"po-tag"),n(),t(491," e n\xE3o permite que o usu\xE1rio interaja com o mesmo."),n(),e(492,"blockquote")(493,"p"),t(494,"A propriedade "),e(495,"code"),t(496,"p-disabled"),n(),t(497," somente ter\xE1 efeito caso a propriedade "),e(498,"code"),t(499,"p-removable"),n(),t(500," esteja definida como "),e(501,"code"),t(502,"true"),n(),t(503,"."),n()()()(),e(504,"tr",14)(505,"td",15)(506,"div",22)(507,"span",23),t(508," p-icon"),i(509,"br"),n()()(),e(510,"td",18)(511,"code",24),t(512,"string "),n(),e(513,"code",37),t(514," boolean "),n(),e(515,"code",38),t(516," TemplateRef<void>"),n()(),e(517,"td",20)(518,"p")(519,"code"),t(520,"false"),n()()(),e(521,"td",21)(522,"em")(523,"strong"),t(524,"(opcional)"),n()(),e(525,"p"),t(526,"Define ou ativa um \xEDcone que ser\xE1 exibido ao lado do valor da "),e(527,"em"),t(528,"tag"),n(),t(529,"."),n(),e(530,"p"),t(531,"Quando "),e(532,"code"),t(533,"p-type"),n(),t(534," estiver definida, basta informar um valor igual a "),e(535,"code"),t(536,"true"),n(),t(537," para que o \xEDcone seja exibido conforme descri\xE7\xF5es abaixo:"),n(),e(538,"ul")(539,"li"),i(540,"span",39),t(541," - "),e(542,"code"),t(543,"success"),n()(),e(544,"li"),i(545,"span",40),t(546," - "),e(547,"code"),t(548,"warning"),n()(),e(549,"li"),i(550,"span",41),t(551," - "),e(552,"code"),t(553,"danger"),n()(),e(554,"li"),i(555,"span",42),t(556," - "),e(557,"code"),t(558,"info"),n()()(),e(559,"p"),t(560,"Tamb\xE9m \xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),e(561,"a",43),t(562,"Biblioteca de \xEDcones"),n(),t(563,". conforme exemplo abaixo:"),n(),e(564,"pre")(565,"code"),t(566,`<po-tag p-icon="an an-user" p-value="PO Tag"></po-tag>
`),n()(),e(567,"p"),t(568,"como tamb\xE9m utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),e(569,"em"),t(570,"Font Awesome"),n(),t(571,", da seguinte forma:"),n(),e(572,"pre")(573,"code"),t(574,`<po-tag p-icon="fa fa-podcast" p-value="PO Tag"></po-button>
`),n()(),e(575,"p"),t(576,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),e(577,"code"),t(578,"TemplateRef"),n(),t(579,", conforme exemplo abaixo:"),n(),e(580,"pre")(581,"code"),t(582,`<po-tag [p-icon]="template" p-value="Tag template ionic"></po-button>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),n()(),e(583,"blockquote")(584,"p"),t(585,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),e(586,"code"),t(587,"font-size: inherit"),n(),t(588," caso o \xEDcone utilizado n\xE3o aplique-o."),n()()()(),e(589,"tr",14)(590,"td",15)(591,"div",22)(592,"span",23),t(593," p-label"),i(594,"br"),n()()(),e(595,"td",18)(596,"code",24),t(597,"string"),n()(),e(598,"td",20),t(599,"-"),n(),e(600,"td",21)(601,"em")(602,"strong"),t(603,"(opcional)"),n()(),e(604,"p"),t(605,"Define uma legenda que ser\xE1 exibida acima ou ao lado da "),e(606,"em"),t(607,"tag"),n(),t(608,", de acordo com a "),e(609,"code"),t(610,"p-orientation"),n(),t(611,"."),n()()(),e(612,"tr",14)(613,"td",15)(614,"div",22)(615,"span",23),t(616," p-literals"),i(617,"br"),n()()(),e(618,"td",18)(619,"code",44),t(620,"PoTagLiterals"),n()(),e(621,"td",20),t(622,"-"),n(),e(623,"td",21)(624,"em")(625,"strong"),t(626,"(opcional)"),n()(),e(627,"p"),t(628,"Objeto com as literais usadas no "),e(629,"code"),t(630,"po-tag"),n(),t(631,"."),n(),e(632,"p"),t(633,"Para utilizar, basta passar a literal customizada:"),n(),e(634,"pre")(635,"code"),t(636,`const customLiterals: PoTagLiterals = {
  remove: 'Remover itens'
};
`),n()(),e(637,"p"),t(638,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente:"),n(),e(639,"pre")(640,"code"),t(641,`<po-tag
  [p-literals]="customLiterals">
</po-tag>
`),n()(),e(642,"blockquote")(643,"p"),t(644,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),e(645,"a",45)(646,"code"),t(647,"PoI18nService"),n()(),t(648," ou do browser."),n()()()(),e(649,"tr",14)(650,"td",15)(651,"div",22)(652,"span",23),t(653," p-orientation"),i(654,"br"),n()()(),e(655,"td",18)(656,"code",46),t(657,"PoTagOrientation"),n()(),e(658,"td",20)(659,"p")(660,"code"),t(661,"vertical"),n()()(),e(662,"td",21)(663,"em")(664,"strong"),t(665,"(opcional)"),n()(),e(666,"p"),t(667,"Define o "),e(668,"em"),t(669,"layout"),n(),t(670," de exibi\xE7\xE3o."),n()()(),e(671,"tr",14)(672,"td",15)(673,"div",22)(674,"span",23),t(675," p-removable"),i(676,"br"),n()()(),e(677,"td",18)(678,"code",37),t(679,"boolean"),n()(),e(680,"td",20)(681,"p")(682,"code"),t(683,"false"),n()()(),e(684,"td",21)(685,"em")(686,"strong"),t(687,"(opcional)"),n()(),e(688,"p"),t(689,"Habilita a op\xE7\xE3o de remover a tag"),n()()(),e(690,"tr",14)(691,"td",15)(692,"div",16)(693,"span",17),t(694," (p-close)"),i(695,"br"),n()()(),e(696,"td",18)(697,"code",19),t(698,"EventEmitter"),n()(),e(699,"td",20),t(700,"-"),n(),e(701,"td",21)(702,"em")(703,"strong"),t(704,"(opcional)"),n()(),e(705,"p"),t(706,"A\xE7\xE3o que sera executada quando clicar sobre o \xEDcone de remover no "),e(707,"code"),t(708,"po-tag"),n()()()(),e(709,"tr",14)(710,"td",15)(711,"div",22)(712,"span",23),t(713," p-text-color"),i(714,"br"),n()()(),e(715,"td",18)(716,"code",24),t(717,"string"),n()(),e(718,"td",20),t(719,"-"),n(),e(720,"td",21)(721,"em")(722,"strong"),t(723,"(opcional)"),n()(),e(724,"p"),t(725,"Determina a cor do texto da tag. As maneiras de customizar as cores s\xE3o:"),n(),e(726,"ul")(727,"li")(728,"p"),t(729,"Hexadeximal, por exemplo "),e(730,"code"),t(731,"#c64840"),n(),t(732,";"),n()(),e(733,"li")(734,"p"),t(735,"RGB, como "),e(736,"code"),t(737,"rgb(0, 0, 165)"),n(),t(738,";"),n()(),e(739,"li")(740,"p"),t(741,"O nome da cor, por exemplo "),e(742,"code"),t(743,"blue"),n(),t(744,";"),n()(),e(745,"li")(746,"p"),t(747,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),n()(),e(748,"li")(749,"p"),i(750,"span",25),e(751,"code"),t(752,"color-01"),n()()(),e(753,"li")(754,"p"),i(755,"span",26),e(756,"code"),t(757,"color-02"),n()()(),e(758,"li")(759,"p"),i(760,"span",27),e(761,"code"),t(762,"color-03"),n()()(),e(763,"li")(764,"p"),i(765,"span",28),e(766,"code"),t(767,"color-04"),n()()(),e(768,"li")(769,"p"),i(770,"span",29),e(771,"code"),t(772,"color-05"),n()()(),e(773,"li")(774,"p"),i(775,"span",30),e(776,"code"),t(777,"color-06"),n()()(),e(778,"li")(779,"p"),i(780,"span",31),e(781,"code"),t(782,"color-07"),n()()(),e(783,"li")(784,"p"),i(785,"span",32),e(786,"code"),t(787,"color-08"),n()()(),e(788,"li")(789,"p"),i(790,"span",33),e(791,"code"),t(792,"color-09"),n()()(),e(793,"li")(794,"p"),i(795,"span",34),e(796,"code"),t(797,"color-10"),n()()(),e(798,"li")(799,"p"),i(800,"span",35),e(801,"code"),t(802,"color-11"),n()()(),e(803,"li")(804,"p"),i(805,"span",36),e(806,"code"),t(807,"color-12"),n()()(),e(808,"li")(809,"p"),t(810,"Para uma melhor acessibilidade no uso do componente \xE9 recomend\xE1vel utilizar cores com um melhor contraste em rela\xE7\xE3o ao background."),n()()(),e(811,"blockquote")(812,"p")(813,"strong"),t(814,"Aten\xE7\xE3o:"),n(),t(815," A propriedade "),e(816,"code"),t(817,"p-type"),n(),t(818," sobrep\xF5e esta defini\xE7\xE3o."),n()()()(),e(819,"tr",14)(820,"td",15)(821,"div",22)(822,"span",23),t(823," p-type"),i(824,"br"),n()()(),e(825,"td",18)(826,"code",47),t(827,"PoTagType"),n()(),e(828,"td",20)(829,"p")(830,"code"),t(831,"info"),n()()(),e(832,"td",21)(833,"em")(834,"strong"),t(835,"(opcional)"),n()(),e(836,"p"),t(837,"Define o tipo da "),e(838,"em"),t(839,"tag"),n(),t(840,"."),n(),e(841,"p"),t(842,"Valores v\xE1lidos:"),n(),e(843,"ul")(844,"li")(845,"code"),t(846,"success"),n(),t(847,": cor verde utilizada para simbolizar sucesso ou \xEAxito."),n(),e(848,"li")(849,"code"),t(850,"warning"),n(),t(851,": cor amarela que representa aviso ou advert\xEAncia."),n(),e(852,"li")(853,"code"),t(854,"danger"),n(),t(855,": cor vermelha para erro ou aviso cr\xEDtico."),n(),e(856,"li")(857,"code"),t(858,"info"),n(),t(859,": cor azul claro que caracteriza conte\xFAdo informativo."),n(),e(860,"li")(861,"code"),t(862,"neutral"),n(),t(863,": cor cinza claro para uso geral."),n()(),e(864,"blockquote")(865,"p"),t(866,"Quando esta propriedade for definida, ir\xE1 sobrepor a defini\xE7\xE3o de "),e(867,"code"),t(868,"p-color"),n(),t(869," e "),e(870,"code"),t(871,"p-icon"),n(),t(872," somente ser\xE1 exibido caso seja "),e(873,"code"),t(874,"true"),n(),t(875,"."),n()()()(),e(876,"tr",14)(877,"td",15)(878,"div",22)(879,"span",23),t(880," p-value"),i(881,"br"),n()()(),e(882,"td",18)(883,"code",24),t(884,"string"),n()(),e(885,"td",20),t(886,"-"),n(),e(887,"td",21)(888,"p"),t(889,"Texto da tag."),n()()()(),e(890,"h3"),t(891,"Interfaces"),n(),e(892,"h4",48)(893,"code",5),t(894,"PoTagLiterals"),n()(),e(895,"div",2)(896,"p"),t(897,"Interface para defini\xE7\xE3o das literais usadas no "),e(898,"code"),t(899,"po-tag"),n(),t(900,"."),n()(),e(901,"h4",10),t(902,"Propriedades"),n(),e(903,"table",11)(904,"tr",12)(905,"th",13),t(906,"Nome"),n(),e(907,"th",13),t(908,"Tipo"),n(),e(909,"th",13),t(910,"Descri\xE7\xE3o"),n()(),e(911,"tr",14)(912,"td",15)(913,"div",22)(914,"span",23),t(915," remove"),i(916,"br"),n()()(),e(917,"td",18)(918,"code",24),t(919,"string"),n()(),e(920,"td",21)(921,"em")(922,"strong"),t(923,"(opcional)"),n()(),e(924,"p"),t(925,"Texto exibido no tooltip indicando remo\xE7\xE3o da tag."),n()()()(),e(926,"h3"),t(927,"Enums"),n(),e(928,"h4",4)(929,"code",5),t(930,"PoTagOrientation"),n()(),e(931,"div",2)(932,"p"),t(933,"Define os tipos de orienta\xE7\xF5es dispon\xEDveis para o "),e(934,"code"),t(935,"po-tag"),n(),t(936,"."),n()(),e(937,"h4",10),t(938,"Propriedades"),n(),e(939,"table",11)(940,"tr",12)(941,"th",13),t(942,"Nome"),n(),e(943,"th",13),t(944,"Descri\xE7\xE3o"),n()(),e(945,"tr",14)(946,"td",15)(947,"div",22)(948,"span",23),t(949," Horizontal"),i(950,"br"),n()()(),e(951,"td",21)(952,"p"),t(953,"A tag ser\xE1 exibida na horizontal, ao lado direito em rela\xE7\xE3o ao label."),n()()(),e(954,"tr",14)(955,"td",15)(956,"div",22)(957,"span",23),t(958," Vertical"),i(959,"br"),n()()(),e(960,"td",21)(961,"p"),t(962,"Exibe a tag na vertical, ou seja, abaixo do label."),n()()()(),e(963,"h4",4)(964,"code",5),t(965,"PoTagType"),n()(),e(966,"div",2)(967,"p"),t(968,"Define os tipos dispon\xEDveis para o "),e(969,"code"),t(970,"po-tag"),n(),t(971,"."),n()(),e(972,"h4",10),t(973,"Propriedades"),n(),e(974,"table",11)(975,"tr",12)(976,"th",13),t(977,"Nome"),n(),e(978,"th",13),t(979,"Descri\xE7\xE3o"),n()(),e(980,"tr",14)(981,"td",15)(982,"div",22)(983,"span",23),t(984," Danger"),i(985,"br"),n()()(),e(986,"td",21)(987,"p"),t(988,"Erro, perigo, problema ou aviso cr\xEDtico."),n()()(),e(989,"tr",14)(990,"td",15)(991,"div",22)(992,"span",23),t(993," Info"),i(994,"br"),n()()(),e(995,"td",21)(996,"p"),t(997,"Informativo ou explicativo."),n()()(),e(998,"tr",14)(999,"td",15)(1e3,"div",22)(1001,"span",23),t(1002," Success"),i(1003,"br"),n()()(),e(1004,"td",21)(1005,"p"),t(1006,"Confirma\xE7\xE3o, resultados positivos ou \xEAxito."),n()()(),e(1007,"tr",14)(1008,"td",15)(1009,"div",22)(1010,"span",23),t(1011," Warning"),i(1012,"br"),n()()(),e(1013,"td",21)(1014,"p"),t(1015,"Aviso ou advert\xEAncia."),n()()(),e(1016,"tr",14)(1017,"td",15)(1018,"div",22)(1019,"span",23),t(1020," Neutral"),i(1021,"br"),n()()(),e(1022,"td",21)(1023,"p"),t(1024,"De uso geral, quando os tipos Info, Warning, Success e Danger n\xE3o atendem a necessidade."),n()()()()())},dependencies:[y],encapsulation:2})}return a})();var Se=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,l){this.route=r,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let l=r.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||a)(W(Z),W(ee))};static \u0275cmp=c({type:a,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title"," Tag",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,o){l&1&&(e(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),b("p-click",function(){return o.changeTab("doc")}),i(3,"sample-po-tag-doc"),n(),e(4,"po-tab",3),b("p-click",function(){return o.changeTab("web")}),i(5,"sample-po-tag-basic-view")(6,"sample-po-tag-labs-view")(7,"sample-po-tag-bank-account-view"),n()()()),l&2&&(d("p-actions",o.actions),p(2),d("p-active",o.activeTab==="doc"),p(2),d("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"))},dependencies:[z,v,f,se,ue,be,Ee],encapsulation:2})}return a})();var Ie=[{path:"",component:Se}],xe=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=A({type:a});static \u0275inj=I({imports:[N.forChild(Ie),N]})}return a})();var lt=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=A({type:a});static \u0275inj=I({imports:[me,xe]})}return a})();export{lt as DocPoTagModule};
