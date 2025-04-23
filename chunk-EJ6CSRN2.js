import{$ as D,$a as y,$d as C,F as g,G as b,Ga as t,H as I,I as F,Ia as S,Ka as x,La as w,Lb as q,Ma as P,Mb as A,Nb as G,Ob as j,Pa as _,Pb as U,Pc as X,Rd as te,T as r,Tc as Y,U as O,Vc as Z,Wb as J,Yb as K,Zb as L,_ as m,_d as v,ab as R,ea as N,ga as W,ha as d,ic as M,ka as B,na as e,oa as n,pa as a,pd as $,ta as H,te as E,ua as u,ue as ne,vc as Q,vd as ee,y as T}from"./chunk-Y4SQKOF7.js";var oe=(()=>{class i{static \u0275fac=function(l){return new(l||i)};static \u0275cmp=m({type:i,selectors:[["sample-po-badge-basic"]],standalone:!1,decls:1,vars:0,template:function(l,o){l&1&&a(0,"po-badge")},dependencies:[M],encapsulation:2})}return i})();var ge=i=>({"docs-sample-code-tabs":i}),ie=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||i)};static \u0275cmp=m({type:i,selectors:[["sample-po-badge-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(a(0,"br"),e(1,"blockquote",0)(2,"label",1),t(3,"PO Badge Basic"),n(),e(4,"a",2),u("click",function(){return o.toggleSampleCodeTabs()}),a(5,"span"),t(6),n()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-badge-basic/sample-po-badge-basic.component.html"),n(),e(13,"pre",7),t(14,`<po-badge></po-badge>
`),n()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-badge-basic/sample-po-badge-basic.component.ts"),n(),e(19,"pre",9),t(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-badge-basic',
  templateUrl: './sample-po-badge-basic.component.html',
  standalone: false
})
export class SamplePoBadgeBasicComponent {}
`),n()()()()(),e(21,"div",10),a(22,"sample-po-badge-basic"),n(),a(23,"hr")),l&2&&(r(5),B("po-icon "+o.sampleCodeButtonIcon),r(),S(" ",o.sampleCodeButtonLabel,""),r(),d("ngClass",_(4,ge,o.hideSampleCodeTabs)))},dependencies:[y,E,v,C,oe],encapsulation:2})}return i})();var ae=(()=>{class i{value;icon;size;status;properties;color;showIcon;propertiesOptions=[{value:"showBorder",label:"Show Border"}];iconsOptions=[{label:"an-check",value:"an an-check"},{label:"an-check-circle",value:"an an-check-circle"},{label:"an an-check",value:"an an-check"},{label:"fa-minus",value:"fa fa-minus"},{label:"true (Enabled when status is settled)",value:"true",disabled:!0},{label:"None",value:"false"}];sizesOptions=[{label:"Small",value:"small"},{label:"Medium",value:"medium"},{label:"Large",value:"large"}];statusOptions=[{label:"Positive",value:"positive"},{label:"Negative",value:"negative"},{label:"Warning",value:"warning"},{label:"Disabled",value:"disabled"},{label:"None",value:"none"}];constructor(){}ngOnInit(){this.restore()}propertiesChange(p){this.properties=p}statusChange(p){this.value=void 0,this.iconsOptions[4].disabled=!1,p==="none"&&(this.iconsOptions[4].disabled=!0)}iconsChange(p){this.value=void 0,this.showIcon=p==="true"}restore(){this.size="medium",this.status=void 0,this.icon=void 0,this.color="color-07",this.value=void 0,this.showIcon=!1,this.iconsOptions[4].disabled=!0,this.properties=[]}static \u0275fac=function(l){return new(l||i)};static \u0275cmp=m({type:i,selectors:[["sample-po-badge-labs"]],standalone:!1,decls:15,vars:17,consts:[["f","ngForm"],[1,"po-row"],[3,"p-color","p-icon","p-size","p-status","p-show-border","p-value"],["name","value","p-label","Value",1,"po-md-4",3,"ngModelChange","ngModel","p-min"],["name","color","p-label","Color","p-help","color-01, red, rgb(201, 53, 125), #753399",1,"po-md-4",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties",1,"po-md-12",3,"ngModelChange","p-change","ngModel","p-options"],["name","status","p-label","Status",1,"po-lg-12",3,"ngModelChange","p-change","ngModel","p-options"],["name","size","p-label","Size",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-lg-12",3,"ngModelChange","p-change","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(l,o){if(l&1){let c=H();e(0,"div",1),a(1,"po-badge",2),n(),a(2,"hr"),e(3,"form",null,0)(5,"div",1)(6,"po-number",3),P("ngModelChange",function(s){return g(c),w(o.value,s)||(o.value=s),b(s)}),n(),e(7,"po-input",4),P("ngModelChange",function(s){return g(c),w(o.color,s)||(o.color=s),b(s)}),n()(),e(8,"div",1)(9,"po-checkbox-group",5),P("ngModelChange",function(s){return g(c),w(o.properties,s)||(o.properties=s),b(s)}),u("p-change",function(s){return g(c),b(o.propertiesChange(s))}),n(),e(10,"po-radio-group",6),P("ngModelChange",function(s){return g(c),w(o.status,s)||(o.status=s),b(s)}),u("p-change",function(s){return g(c),b(o.statusChange(s))}),n(),e(11,"po-radio-group",7),P("ngModelChange",function(s){return g(c),w(o.size,s)||(o.size=s),b(s)}),n(),e(12,"po-radio-group",8),P("ngModelChange",function(s){return g(c),w(o.icon,s)||(o.icon=s),b(s)}),u("p-change",function(s){return g(c),b(o.iconsChange(s))}),n()(),e(13,"div",1)(14,"po-button",9),u("p-click",function(){return g(c),b(o.restore())}),n()()()}l&2&&(r(),d("p-color",o.color)("p-icon",o.showIcon?!0:o.icon)("p-size",o.size)("p-status",o.status)("p-show-border",o.properties.includes("showBorder"))("p-value",o.value),r(5),x("ngModel",o.value),d("p-min",0),r(),x("ngModel",o.color),r(2),x("ngModel",o.properties),d("p-options",o.propertiesOptions),r(),x("ngModel",o.status),d("p-options",o.statusOptions),r(),x("ngModel",o.size),d("p-options",o.sizesOptions),r(),x("ngModel",o.icon),d("p-options",o.iconsOptions))},dependencies:[U,q,A,j,G,Q,Y,Z,$,ee,M],encapsulation:2})}return i})();var fe=i=>({"docs-sample-code-tabs":i}),le=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||i)};static \u0275cmp=m({type:i,selectors:[["sample-po-badge-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(a(0,"br"),e(1,"blockquote",0)(2,"label",1),t(3,"PO Badge Labs"),n(),e(4,"a",2),u("click",function(){return o.toggleSampleCodeTabs()}),a(5,"span"),t(6),n()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-badge-labs/sample-po-badge-labs.component.html"),n(),e(13,"pre",7),t(14,`<div class="po-row">
  <po-badge
    [p-color]="color"
    [p-icon]="showIcon ? true : icon"
    [p-size]="size"
    [p-status]="status"
    [p-show-border]="properties.includes('showBorder')"
    [p-value]="value"
  ></po-badge>
</div>

<hr />

<form #f="ngForm">
  <div class="po-row">
    <po-number class="po-md-4" name="value" [(ngModel)]="value" p-label="Value" [p-min]="0"> </po-number>
    <po-input
      class="po-md-4"
      name="color"
      [(ngModel)]="color"
      p-label="Color"
      p-help="color-01, red, rgb(201, 53, 125), #753399"
    ></po-input>
  </div>

  <div class="po-row">
    <po-checkbox-group
      class="po-md-12"
      name="properties"
      [(ngModel)]="properties"
      p-label="Properties"
      [p-options]="propertiesOptions"
      (p-change)="propertiesChange($event)"
    >
    </po-checkbox-group>

    <po-radio-group
      class="po-lg-12"
      name="status"
      [(ngModel)]="status"
      p-label="Status"
      [p-options]="statusOptions"
      (p-change)="statusChange($event)"
    >
    </po-radio-group>

    <po-radio-group class="po-lg-12" name="size" [(ngModel)]="size" p-label="Size" [p-options]="sizesOptions">
    </po-radio-group>

    <po-radio-group
      class="po-lg-12"
      name="icon"
      [(ngModel)]="icon"
      p-label="Icon"
      [p-options]="iconsOptions"
      (p-change)="iconsChange($event)"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),n()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-badge-labs/sample-po-badge-labs.component.ts"),n(),e(19,"pre",9),t(20,`import { Component, OnInit } from '@angular/core';
import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-badge-labs',
  templateUrl: './sample-po-badge-labs.component.html',
  standalone: false
})
export class SamplePoBadgeLabsComponent implements OnInit {
  value: number;
  icon: string;
  size: string;
  status: any;
  properties: Array<string>;
  color: string;
  showIcon: boolean;

  propertiesOptions: Array<PoCheckboxGroupOption> = [{ value: 'showBorder', label: 'Show Border' }];

  iconsOptions: Array<PoRadioGroupOption> = [
    { label: 'an-check', value: 'an an-check' },
    { label: 'an-check-circle', value: 'an an-check-circle' },
    { label: 'an an-check', value: 'an an-check' },
    { label: 'fa-minus', value: 'fa fa-minus' },
    { label: 'true (Enabled when status is settled)', value: 'true', disabled: true },
    { label: 'None', value: 'false' }
  ];

  sizesOptions: Array<PoRadioGroupOption> = [
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' }
  ];

  statusOptions: Array<PoRadioGroupOption> = [
    { label: 'Positive', value: 'positive' },
    { label: 'Negative', value: 'negative' },
    { label: 'Warning', value: 'warning' },
    { label: 'Disabled', value: 'disabled' },
    { label: 'None', value: 'none' }
  ];

  constructor() {}

  ngOnInit() {
    this.restore();
  }

  propertiesChange(event) {
    this.properties = event;
  }

  statusChange(event) {
    this.value = undefined;
    this.iconsOptions[4].disabled = false;

    if (event === 'none') {
      this.iconsOptions[4].disabled = true;
    }
  }

  iconsChange(event) {
    this.value = undefined;
    this.showIcon = event === 'true' ? true : false;
  }

  restore() {
    this.size = 'medium';
    this.status = undefined;
    this.icon = undefined;
    this.color = 'color-07';
    this.value = undefined;
    this.showIcon = false;
    this.iconsOptions[4].disabled = true;
    this.properties = [];
  }
}
`),n()()()()(),e(21,"div",10),a(22,"sample-po-badge-labs"),n(),a(23,"hr")),l&2&&(r(5),B("po-icon "+o.sampleCodeButtonIcon),r(),S(" ",o.sampleCodeButtonLabel,""),r(),d("ngClass",_(4,fe,o.hideSampleCodeTabs)))},dependencies:[y,E,v,C,ae],encapsulation:2})}return i})();function ve(i,ce){if(i&1&&(e(0,"div",2)(1,"po-container")(2,"div",3),I(),e(3,"svg",4),a(4,"circle",5)(5,"path",6),n(),F(),e(6,"p",7),t(7),a(8,"po-badge",8),n()()()()),i&2){let p=ce.$implicit;r(3),W("kind",p.status),r(4),S(" ",p.nome," "),r(),d("p-status",p.status==="online"?"positive":"negative")}}var pe=(()=>{class i{users=[{nome:"Leonardo da vinci",status:"online"},{nome:"Johann Pachelbel",status:"offline"},{nome:"Amadeus Mozart",status:"offline"}];static \u0275fac=function(l){return new(l||i)};static \u0275cmp=m({type:i,selectors:[["sample-po-badge-message"]],standalone:!1,decls:3,vars:1,consts:[[1,"po-row","po-mt-3"],["class","po-mb-1",4,"ngFor","ngForOf"],[1,"po-mb-1"],[1,"card"],["stroke-linecap","round","stroke-linejoin","round",1,"po-mr-1"],["cx","12","cy","12","r","11"],["d","m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9","fill","none"],[1,"po-mr-1","card-name-user","po-text-color-neutral-dark-40"],[1,"po-badge-wrap",3,"p-status"]],template:function(l,o){l&1&&(e(0,"div",0)(1,"div"),N(2,ve,9,3,"div",1),n()()),l&2&&(r(2),d("ngForOf",o.users))},dependencies:[R,X,M],styles:[".po-badge-wrap[_ngcontent-%COMP%]{position:absolute;top:-12px;right:-12px}svg[_ngcontent-%COMP%]{width:1.5rem;height:1.5rem;flex:none;stroke-width:2;stroke-linecap:round}svg[kind=online][_ngcontent-%COMP%]{stroke:#0ea5e9;fill:#e0f2fe}svg[kind=offline][_ngcontent-%COMP%]{fill:#fff;stroke:#dc2626}.card[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative}"]})}return i})();var Ee=i=>({"docs-sample-code-tabs":i}),se=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||i)};static \u0275cmp=m({type:i,selectors:[["sample-po-badge-message-view"]],standalone:!1,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(a(0,"br"),e(1,"blockquote",0)(2,"label",1),t(3,"PO Badge Message"),n(),e(4,"a",2),u("click",function(){return o.toggleSampleCodeTabs()}),a(5,"span"),t(6),n()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-badge-message/sample-po-badge-message.component.html"),n(),e(13,"pre",7),t(14,`<div class="po-row po-mt-3">
  <div>
    <div class="po-mb-1" *ngFor="let user of users">
      <po-container>
        <div class="card">
          <svg class="po-mr-1" [attr.kind]="user.status" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="11" />
            <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
          </svg>
          <p class="po-mr-1 card-name-user po-text-color-neutral-dark-40">
            { { user.nome }}
            <po-badge class="po-badge-wrap" [p-status]="user.status === 'online' ? 'positive' : 'negative'"></po-badge>
          </p>
        </div>
      </po-container>
    </div>
  </div>
</div>
`),n()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-badge-message/sample-po-badge-message.component.ts"),n(),e(19,"pre",9),t(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-badge-message',
  templateUrl: './sample-po-badge-message.component.html',
  styleUrls: ['./sample-po-badge-message.component.css'],
  standalone: false
})
export class SamplePoBadgeMessageComponent {
  users: Array<any> = [
    {
      nome: 'Leonardo da vinci',
      status: 'online'
    },
    {
      nome: 'Johann Pachelbel',
      status: 'offline'
    },
    {
      nome: 'Amadeus Mozart',
      status: 'offline'
    }
  ];
}
`),n()()(),e(21,"po-tab",10)(22,"div")(23,"label",6),t(24,"sample-po-badge-message/sample-po-badge-message.component.css"),n(),e(25,"pre",11),t(26,`.po-badge-wrap {
  position: absolute;
  top: -12px;
  right: -12px;
}

svg {
  width: 1.5rem;
  height: 1.5rem;
  flex: none;
  stroke-width: 2;
  stroke-linecap: round;
}

svg[kind='online'] {
  stroke: #0ea5e9;
  fill: #e0f2fe;
}

svg[kind='offline'] {
  fill: white;
  stroke: #dc2626;
}

.card {
  display: flex;
  align-items: center;
  position: relative;
}
`),n()()()()(),e(27,"div",12),a(28,"sample-po-badge-message"),n(),a(29,"hr")),l&2&&(r(5),B("po-icon "+o.sampleCodeButtonIcon),r(),S(" ",o.sampleCodeButtonLabel,""),r(),d("ngClass",_(4,Ee,o.hideSampleCodeTabs)))},dependencies:[y,E,v,C,pe],encapsulation:2})}return i})();var re=(()=>{class i{static \u0275fac=function(l){return new(l||i)};static \u0275cmp=m({type:i,selectors:[["sample-po-badge-doc"]],standalone:!1,decls:315,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],["pan","",1,"docs-api-property-type","PoBadgeIcon"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoBadgeSize"],["pan","",1,"docs-api-property-type","PoBadgeStatus"],["pan","",1,"docs-api-property-type","number"]],template:function(l,o){l&1&&(e(0,"div",0)(1,"p",1)(2,"code"),t(3,"import { PoBadgeModule } from '@po-ui/ng-components';"),n()(),e(4,"div",2)(5,"p"),t(6,"M\xF3dulo do componente po-badge."),n()(),e(7,"h3",3),t(8,"Componente"),n(),e(9,"h4",4)(10,"code",5),t(11,"PoBadgeComponent"),n()(),e(12,"div",2)(13,"p"),t(14,"Utilizado para exibir a quantidade de notifica\xE7\xF5es. "),n()(),e(15,"div",6)(16,"h4",7),t(17,"Seletor"),n(),e(18,"pre",8),t(19,`<po-badge
    p-aria-label="string"
    p-color="string"
    p-icon="PoBadgeIcon"
    p-show-border="boolean"
    p-size="PoBadgeSize"
    p-status="PoBadgeStatus"
    p-value="number" >
</po-badge>
`),n()(),e(20,"h4",9),t(21,"Propriedades"),n(),e(22,"table",10)(23,"tr",11)(24,"th",12),t(25,"Nome"),n(),e(26,"th",12),t(27,"Tipo"),n(),e(28,"th",12),t(29,"Padr\xE3o"),n(),e(30,"th",12),t(31,"Descri\xE7\xE3o"),n()(),e(32,"tr",13)(33,"td",14)(34,"div",15)(35,"span",16),t(36," p-aria-label"),a(37,"br"),n()()(),e(38,"td",17)(39,"code",18),t(40,"string"),n()(),e(41,"td",19),t(42,"-"),n(),e(43,"td",20)(44,"p"),t(45,"Define um "),e(46,"code"),t(47,"aria-label"),n(),t(48," para o "),e(49,"code"),t(50,"po-badge"),n()()()(),e(51,"tr",13)(52,"td",14)(53,"div",15)(54,"span",16),t(55," p-color"),a(56,"br"),n()()(),e(57,"td",17)(58,"code",18),t(59,"string"),n()(),e(60,"td",19)(61,"p")(62,"code"),t(63,"color-07"),n()()(),e(64,"td",20)(65,"em")(66,"strong"),t(67,"(opcional)"),n()(),e(68,"p"),t(69,"Determina a cor do "),e(70,"code"),t(71,"po-badge"),n(),t(72,". As maneiras de customizar as cores s\xE3o:"),n(),e(73,"ul")(74,"li"),t(75,"Hexadeximal, por exemplo "),e(76,"code"),t(77,"#c64840"),n(),t(78,";"),n(),e(79,"li"),t(80,"RGB, como "),e(81,"code"),t(82,"rgb(0, 0, 165)"),n(),t(83,";"),n(),e(84,"li"),t(85,"O nome da cor, por exemplo "),e(86,"code"),t(87,"blue"),n(),t(88,";"),n(),e(89,"li"),t(90,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),n(),e(91,"li"),a(92,"span",21),e(93,"code"),t(94,"color-01"),n()(),e(95,"li"),a(96,"span",22),e(97,"code"),t(98,"color-02"),n()(),e(99,"li"),a(100,"span",23),e(101,"code"),t(102,"color-03"),n()(),e(103,"li"),a(104,"span",24),e(105,"code"),t(106,"color-04"),n()(),e(107,"li"),a(108,"span",25),e(109,"code"),t(110,"color-05"),n()(),e(111,"li"),a(112,"span",26),e(113,"code"),t(114,"color-06"),n()(),e(115,"li"),a(116,"span",27),e(117,"code"),t(118,"color-07"),n()(),e(119,"li"),a(120,"span",28),e(121,"code"),t(122,"color-08"),n()(),e(123,"li"),a(124,"span",29),e(125,"code"),t(126,"color-09"),n()(),e(127,"li"),a(128,"span",30),e(129,"code"),t(130,"color-10"),n()(),e(131,"li"),a(132,"span",31),e(133,"code"),t(134,"color-11"),n()(),e(135,"li"),a(136,"span",32),e(137,"code"),t(138,"color-12"),n()()()()(),e(139,"tr",13)(140,"td",14)(141,"div",15)(142,"span",16),t(143," p-icon"),a(144,"br"),n()()(),e(145,"td",17)(146,"code",33),t(147,"PoBadgeIcon"),n()(),e(148,"td",19),t(149,"-"),n(),e(150,"td",20)(151,"em")(152,"strong"),t(153,"(opcional)"),n()(),e(154,"p"),t(155,"\xCDcone exibido no "),e(156,"code"),t(157,"po-badge"),n(),t(158,"."),n(),e(159,"p"),t(160,"Para exibir icone do status atual declare a propriedade "),e(161,"code"),t(162,"p-icon"),n(),t(163,". conforme exemplo abaixo:"),n(),e(164,"pre")(165,"code"),t(166,`<po-badge [p-icon]="true"></po-badge>
`),n()(),e(167,"p"),t(168,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),e(169,"a",34),t(170,"Biblioteca de \xEDcones"),n(),t(171,". conforme exemplo abaixo:"),n(),e(172,"pre")(173,"code"),t(174,`<po-badge p-icon="an an-user"></po-badge>
`),n()(),e(175,"p"),t(176,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),e(177,"em"),t(178,"Font Awesome"),n(),t(179,", da seguinte forma:"),n(),e(180,"pre")(181,"code"),t(182,`<po-badge p-icon="fa fa-podcast"></po-badge>
`),n()(),e(183,"p"),t(184,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),e(185,"code"),t(186,"TemplateRef"),n(),t(187,", conforme exemplo abaixo:"),n(),e(188,"pre")(189,"code"),t(190,`<po-badge [p-icon]="template"></po-badge>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),n()()()(),e(191,"tr",13)(192,"td",14)(193,"div",15)(194,"span",16),t(195," p-show-border"),a(196,"br"),n()()(),e(197,"td",17)(198,"code",35),t(199,"boolean"),n()(),e(200,"td",19),t(201,"-"),n(),e(202,"td",20)(203,"p"),t(204,"Exibe uma borda para o "),e(205,"code"),t(206,"po-badge"),n()(),e(207,"blockquote")(208,"p"),t(209,"Pode personalizar cor da bordar com a propriedade "),e(210,"code"),t(211,"p-color-border"),n()()()()(),e(212,"tr",13)(213,"td",14)(214,"div",15)(215,"span",16),t(216," p-size"),a(217,"br"),n()()(),e(218,"td",17)(219,"code",36),t(220,"PoBadgeSize"),n()(),e(221,"td",19)(222,"p")(223,"code"),t(224,"medium"),n()()(),e(225,"td",20)(226,"p"),t(227,"Define o tamanho do "),e(228,"code"),t(229,"po-badge"),n()(),e(230,"p"),t(231,"Valores v\xE1lidos:"),n(),e(232,"ul")(233,"li")(234,"code"),t(235,"small"),n(),t(236,": o "),e(237,"code"),t(238,"po-badge"),n(),t(239," fica do tamanho padr\xE3o, com 8px de altura.;"),n(),e(240,"li")(241,"code"),t(242,"medium"),n(),t(243,": o "),e(244,"code"),t(245,"po-badge"),n(),t(246," fica do tamanho padr\xE3o, com 16px de altura.;"),n(),e(247,"li")(248,"code"),t(249,"large"),n(),t(250,": o "),e(251,"code"),t(252,"po-badge"),n(),t(253," fica do tamanho padr\xE3o, com 24px de altura.;"),n()()()(),e(254,"tr",13)(255,"td",14)(256,"div",15)(257,"span",16),t(258," p-status"),a(259,"br"),n()()(),e(260,"td",17)(261,"code",37),t(262,"PoBadgeStatus"),n()(),e(263,"td",19),t(264,"-"),n(),e(265,"td",20)(266,"p"),t(267,"Define o estado do "),e(268,"code"),t(269,"po-badge"),n()(),e(270,"p"),t(271,"Valores v\xE1lidos:"),n(),e(272,"ul")(273,"li")(274,"code"),t(275,"positive"),n(),t(276,": Define a cor do "),e(277,"code"),t(278,"po-badge"),n(),t(279," com a cor de feedback positivo.;"),n(),e(280,"li")(281,"code"),t(282,"negative"),n(),t(283,": Define a cor do "),e(284,"code"),t(285,"po-badge"),n(),t(286," com a cor de feedback negative.;"),n(),e(287,"li")(288,"code"),t(289,"warning"),n(),t(290,": Define a cor do "),e(291,"code"),t(292,"po-badge"),n(),t(293," com a cor de feedback warning.;"),n(),e(294,"li")(295,"code"),t(296,"disabled"),n(),t(297,": Define a cor do "),e(298,"code"),t(299,"po-badge"),n(),t(300," com a cor de feedback disabled;"),n()()()(),e(301,"tr",13)(302,"td",14)(303,"div",15)(304,"span",16),t(305," p-value"),a(306,"br"),n()()(),e(307,"td",17)(308,"code",38),t(309,"number"),n()(),e(310,"td",19),t(311,"-"),n(),e(312,"td",20)(313,"p"),t(314,"N\xFAmero exibido no componente, caso o mesmo seja maior que 9 o valor exibido ser\xE1 9+."),n()()()()())},dependencies:[E],encapsulation:2})}return i})();var de=(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||i)(O(J),O(K))};static \u0275cmp=m({type:i,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title"," Badge",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,o){l&1&&(e(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),u("p-click",function(){return o.changeTab("doc")}),a(3,"sample-po-badge-doc"),n(),e(4,"po-tab",3),u("p-click",function(){return o.changeTab("web")}),a(5,"sample-po-badge-basic-view")(6,"sample-po-badge-labs-view")(7,"sample-po-badge-message-view"),n()()()),l&2&&(d("p-actions",o.actions),r(2),d("p-active",o.activeTab==="doc"),r(2),d("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"))},dependencies:[te,v,C,ie,le,se,re],encapsulation:2})}return i})();var Pe=[{path:"",component:de}],me=(()=>{class i{static \u0275fac=function(l){return new(l||i)};static \u0275mod=D({type:i});static \u0275inj=T({imports:[L.forChild(Pe),L]})}return i})();var Qe=(()=>{class i{static \u0275fac=function(l){return new(l||i)};static \u0275mod=D({type:i});static \u0275inj=T({imports:[ne,me]})}return i})();export{Qe as DocPoBadgeModule};
