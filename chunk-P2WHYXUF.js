import{$ as L,$a as D,$d as y,Bd as ne,Ec as Y,F as S,Fd as W,G as v,Ga as n,Ia as k,Ka as g,Kc as $,La as C,Lb as O,Lc as M,Ma as b,Mb as z,Nb as G,Ob as V,Pa as x,Pb as U,Rd as I,T as d,U as _,Ua as j,Va as q,Vc as ee,Wb as J,Xc as te,Yb as Z,Zb as N,_ as u,_b as K,_d as E,ha as r,ka as T,kb as Q,na as e,oa as t,pa as l,ta as R,te as P,ua as h,ue as ae,vc as X,y as B,ya as H}from"./chunk-Y4SQKOF7.js";var ie=(()=>{class i{static \u0275fac=function(o){return new(o||i)};static \u0275cmp=u({type:i,selectors:[["sample-po-calendar-basic"]],standalone:!1,decls:1,vars:0,template:function(o,a){o&1&&l(0,"po-calendar")},dependencies:[M],encapsulation:2})}return i})();var he=i=>({"docs-sample-code-tabs":i}),oe=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||i)};static \u0275cmp=u({type:i,selectors:[["sample-po-calendar-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,a){o&1&&(l(0,"br"),e(1,"blockquote",0)(2,"label",1),n(3,"PO Calendar Basic"),t(),e(4,"a",2),h("click",function(){return a.toggleSampleCodeTabs()}),l(5,"span"),n(6),t()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-calendar-basic/sample-po-calendar-basic.component.html"),t(),e(13,"pre",7),n(14,`<po-calendar></po-calendar>
`),t()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-calendar-basic/sample-po-calendar-basic.component.ts"),t(),e(19,"pre",9),n(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-calendar-basic',
  templateUrl: './sample-po-calendar-basic.component.html',
  standalone: false
})
export class SamplePoCalendarBasicComponent {}
`),t()()()()(),e(21,"div",10),l(22,"sample-po-calendar-basic"),t(),l(23,"hr")),o&2&&(d(5),T("po-icon "+a.sampleCodeButtonIcon),d(),k(" ",a.sampleCodeButtonLabel,""),d(),r("ngClass",x(4,he,a.hideSampleCodeTabs)))},dependencies:[D,P,E,y,ie],encapsulation:2})}return i})();var le=(()=>{class i{calendar;event;locale;maxDate;minDate;mode;localeOptions=[{label:"pt",value:"pt"},{label:"es",value:"es"},{label:"en",value:"en"},{label:"ru",value:"ru"}];calendarModeOptions=[{label:"Range",value:$.Range},{label:"Unset",value:null}];ngOnInit(){this.restore()}changeEvent(p){this.event=p}restore(){this.calendar=void 0,this.event=void 0,this.locale=void 0,this.maxDate=void 0,this.minDate=void 0,this.mode=void 0}static \u0275fac=function(o){return new(o||i)};static \u0275cmp=u({type:i,selectors:[["sample-po-calendar-labs"]],standalone:!1,decls:18,vars:17,consts:[["f","ngForm"],[1,"po-md-8","po-p-2"],[3,"ngModelChange","p-change","ngModel","p-locale","p-min-date","p-max-date","p-mode"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","minDate","p-clean","","p-label","Min Date",1,"po-md-4",3,"ngModelChange","ngModel","p-max-date"],["name","maxDate","p-clean","","p-label","Max Date",1,"po-md-4",3,"ngModelChange","ngModel","p-min-date"],["name","mode","p-label","Mode",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","locales","p-columns","4","p-help","Select a locale for the calendar","p-label","Locale",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(o,a){if(o&1){let c=R();e(0,"div",1)(1,"po-calendar",2),b("ngModelChange",function(m){return S(c),C(a.calendar,m)||(a.calendar=m),v(m)}),h("p-change",function(){return S(c),v(a.changeEvent("p-change"))}),t()(),l(2,"hr"),e(3,"div",3),l(4,"po-info",4),j(5,"json"),l(6,"po-info",5),t(),l(7,"hr"),e(8,"form",null,0)(10,"div",3)(11,"po-datepicker",6),b("ngModelChange",function(m){return S(c),C(a.minDate,m)||(a.minDate=m),v(m)}),t(),e(12,"po-datepicker",7),b("ngModelChange",function(m){return S(c),C(a.maxDate,m)||(a.maxDate=m),v(m)}),t(),e(13,"po-radio-group",8),b("ngModelChange",function(m){return S(c),C(a.mode,m)||(a.mode=m),v(m)}),t()(),e(14,"div",3)(15,"po-radio-group",9),b("ngModelChange",function(m){return S(c),C(a.locale,m)||(a.locale=m),v(m)}),t()(),e(16,"div",3)(17,"po-button",10),h("p-click",function(){return S(c),v(a.restore())}),t()()()}o&2&&(d(),g("ngModel",a.calendar),r("p-locale",a.locale)("p-min-date",a.minDate)("p-max-date",a.maxDate)("p-mode",a.mode),d(3),H("p-value",q(5,15,a.calendar)),d(2),r("p-value",a.event),d(5),g("ngModel",a.minDate),r("p-max-date",a.maxDate),d(),g("ngModel",a.maxDate),r("p-min-date",a.minDate),d(),g("ngModel",a.mode),r("p-options",a.calendarModeOptions),d(2),g("ngModel",a.locale),r("p-options",a.localeOptions))},dependencies:[U,O,z,V,G,X,M,ee,te,W,Q],encapsulation:2})}return i})();var fe=i=>({"docs-sample-code-tabs":i}),pe=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||i)};static \u0275cmp=u({type:i,selectors:[["sample-po-calendar-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,a){o&1&&(l(0,"br"),e(1,"blockquote",0)(2,"label",1),n(3,"PO Calendar Labs"),t(),e(4,"a",2),h("click",function(){return a.toggleSampleCodeTabs()}),l(5,"span"),n(6),t()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-calendar-labs/sample-po-calendar-labs.component.html"),t(),e(13,"pre",7),n(14,`<div class="po-md-8 po-p-2">
  <po-calendar
    [(ngModel)]="calendar"
    [p-locale]="locale"
    [p-min-date]="minDate"
    [p-max-date]="maxDate"
    [p-mode]="mode"
    (p-change)="changeEvent('p-change')"
  >
  </po-calendar>
</div>

<hr />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" p-value="{ { calendar | json }}"> </po-info>
  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<hr />

<form #f="ngForm">
  <div class="po-row">
    <po-datepicker
      class="po-md-4"
      name="minDate"
      [(ngModel)]="minDate"
      p-clean
      p-label="Min Date"
      [p-max-date]="maxDate"
    >
    </po-datepicker>

    <po-datepicker
      class="po-md-4"
      name="maxDate"
      [(ngModel)]="maxDate"
      p-clean
      p-label="Max Date"
      [p-min-date]="minDate"
    >
    </po-datepicker>

    <po-radio-group class="po-md-4" name="mode" [(ngModel)]="mode" p-label="Mode" [p-options]="calendarModeOptions">
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-radio-group
      class="po-md-6"
      name="locales"
      [(ngModel)]="locale"
      p-columns="4"
      p-help="Select a locale for the calendar"
      p-label="Locale"
      [p-options]="localeOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),t()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-calendar-labs/sample-po-calendar-labs.component.ts"),t(),e(19,"pre",9),n(20,`import { Component, OnInit } from '@angular/core';

import { PoRadioGroupOption, PoCalendarMode } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-calendar-labs',
  templateUrl: './sample-po-calendar-labs.component.html',
  standalone: false
})
export class SamplePoCalendarLabsComponent implements OnInit {
  calendar;
  event;
  locale: string;
  maxDate: string | Date;
  minDate: string | Date;
  mode: PoCalendarMode;

  readonly localeOptions: Array<PoRadioGroupOption> = [
    { label: 'pt', value: 'pt' },
    { label: 'es', value: 'es' },
    { label: 'en', value: 'en' },
    { label: 'ru', value: 'ru' }
  ];

  readonly calendarModeOptions: Array<PoRadioGroupOption> = [
    { label: 'Range', value: PoCalendarMode.Range },
    { label: 'Unset', value: null }
  ];

  ngOnInit() {
    this.restore();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.calendar = undefined;
    this.event = undefined;
    this.locale = undefined;
    this.maxDate = undefined;
    this.minDate = undefined;
    this.mode = undefined;
  }
}
`),t()()()()(),e(21,"div",10),l(22,"sample-po-calendar-labs"),t(),l(23,"hr")),o&2&&(d(5),T("po-icon "+a.sampleCodeButtonIcon),d(),k(" ",a.sampleCodeButtonLabel,""),d(),r("ngClass",x(4,fe,a.hideSampleCodeTabs)))},dependencies:[D,P,E,y,le],encapsulation:2})}return i})();var de=(()=>{class i{poNotification;date;halfPriceTicketQuantity;tickets;pageActions=[{label:"Buy tickets",action:this.buyTickets.bind(this),disabled:this.isdisableBuy.bind(this)}];ticketsOptions=[{label:"0",value:0},{label:"1",value:1},{label:"2",value:2},{label:"3",value:3},{label:"4",value:4}];constructor(p){this.poNotification=p}buyTickets(){this.poNotification.success(`Tickets purchased to ${this.getDate(this.date)} successfully!`),this.date=void 0,this.tickets=void 0,this.halfPriceTicketQuantity=void 0}getDate(p){let o=p.substring(0,4),a=p.substring(5,7),c=p.substring(8,10);return`${a}/${c}/${o}`}isdisableBuy(){return!(this.date&&(this.tickets>0||this.halfPriceTicketQuantity>0))}static \u0275fac=function(o){return new(o||i)(_(Y))};static \u0275cmp=u({type:i,selectors:[["sample-po-calendar-ticket-sales"]],standalone:!1,decls:12,vars:6,consts:[["p-title","Tickets sales",3,"p-actions"],[1,"po-row"],[1,"po-lg-8","po-md-7"],["p-label","Prices",1,"po-md-12"],["p-label","Weekends and holidays","p-value","$ 20,00",1,"po-md-6"],["p-label","Working days","p-value","$ 10,00",1,"po-md-6"],["p-label","Quantity",1,"po-md-12"],["p-help","From 12 years","p-label","Adults",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-help","04 to 11 years","p-label","Children and older adults",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],[1,"po-lg-4","po-md-5"],["p-label","Select the date",1,"po-md-12"],["p-locale","en",3,"ngModelChange","ngModel"]],template:function(o,a){o&1&&(e(0,"po-page-default",0)(1,"div",1)(2,"div",2),l(3,"po-divider",3)(4,"po-info",4)(5,"po-info",5)(6,"po-divider",6),e(7,"po-select",7),b("ngModelChange",function(s){return C(a.tickets,s)||(a.tickets=s),s}),t(),e(8,"po-select",8),b("ngModelChange",function(s){return C(a.halfPriceTicketQuantity,s)||(a.halfPriceTicketQuantity=s),s}),t()(),e(9,"div",9),l(10,"po-divider",10),e(11,"po-calendar",11),b("ngModelChange",function(s){return C(a.date,s)||(a.date=s),s}),t()()()()),o&2&&(r("p-actions",a.pageActions),d(7),g("ngModel",a.tickets),r("p-options",a.ticketsOptions),d(),g("ngModel",a.halfPriceTicketQuantity),r("p-options",a.ticketsOptions),d(3),g("ngModel",a.date))},dependencies:[O,V,M,K,ne,W,I],encapsulation:2})}return i})();var Ee=i=>({"docs-sample-code-tabs":i}),re=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||i)};static \u0275cmp=u({type:i,selectors:[["sample-po-calendar-ticket-sales-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,a){o&1&&(l(0,"br"),e(1,"blockquote",0)(2,"label",1),n(3,"PO Calendar - Ticket Sales"),t(),e(4,"a",2),h("click",function(){return a.toggleSampleCodeTabs()}),l(5,"span"),n(6),t()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-calendar-ticket-sales/sample-po-calendar-ticket-sales.component.html"),t(),e(13,"pre",7),n(14,`<po-page-default p-title="Tickets sales" [p-actions]="pageActions">
  <div class="po-row">
    <div class="po-lg-8 po-md-7">
      <po-divider class="po-md-12" p-label="Prices"></po-divider>

      <po-info class="po-md-6" p-label="Weekends and holidays" p-value="$ 20,00"> </po-info>

      <po-info class="po-md-6" p-label="Working days" p-value="$ 10,00"> </po-info>

      <po-divider class="po-md-12" p-label="Quantity"></po-divider>

      <po-select
        class="po-lg-6"
        [(ngModel)]="tickets"
        p-help="From 12 years"
        p-label="Adults"
        [p-options]="ticketsOptions"
      >
      </po-select>

      <po-select
        class="po-lg-6"
        [(ngModel)]="halfPriceTicketQuantity"
        p-help="04 to 11 years"
        p-label="Children and older adults"
        [p-options]="ticketsOptions"
      >
      </po-select>
    </div>

    <div class="po-lg-4 po-md-5">
      <po-divider class="po-md-12" p-label="Select the date"></po-divider>

      <po-calendar [(ngModel)]="date" p-locale="en"> </po-calendar>
    </div>
  </div>
</po-page-default>
`),t()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-calendar-ticket-sales/sample-po-calendar-ticket-sales.component.ts"),t(),e(19,"pre",9),n(20,`import { Component } from '@angular/core';

import { PoNotificationService, PoPageAction, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-calendar-ticket-sales',
  templateUrl: './sample-po-calendar-ticket-sales.component.html',
  standalone: false
})
export class SamplePoCalendarTicketSalesComponent {
  date: string;
  halfPriceTicketQuantity: number;
  tickets: number;

  readonly pageActions: Array<PoPageAction> = [
    { label: 'Buy tickets', action: this.buyTickets.bind(this), disabled: this.isdisableBuy.bind(this) }
  ];

  readonly ticketsOptions: Array<PoSelectOption> = [
    { label: '0', value: 0 },
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 },
    { label: '4', value: 4 }
  ];

  constructor(private poNotification: PoNotificationService) {}

  private buyTickets() {
    this.poNotification.success(\`Tickets purchased to \${this.getDate(this.date)} successfully!\`);

    this.date = undefined;
    this.tickets = undefined;
    this.halfPriceTicketQuantity = undefined;
  }

  private getDate(date) {
    const year = date.substring(0, 4);
    const month = date.substring(5, 7);
    const day = date.substring(8, 10);

    return \`\${month}/\${day}/\${year}\`;
  }

  private isdisableBuy(): boolean {
    return !(this.date && (this.tickets > 0 || this.halfPriceTicketQuantity > 0));
  }
}
`),t()()()()(),e(21,"div",10),l(22,"sample-po-calendar-ticket-sales"),t(),l(23,"hr")),o&2&&(d(5),T("po-icon "+a.sampleCodeButtonIcon),d(),k(" ",a.sampleCodeButtonLabel,""),d(),r("ngClass",x(4,Ee,a.hideSampleCodeTabs)))},dependencies:[D,P,E,y,de],encapsulation:2})}return i})();var me=(()=>{class i{static \u0275fac=function(o){return new(o||i)};static \u0275cmp=u({type:i,selectors:[["sample-po-calendar-doc"]],standalone:!1,decls:258,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","PoCalendarMode"]],template:function(o,a){o&1&&(e(0,"div",0)(1,"p",1)(2,"code"),n(3,"import { PoCalendarModule } from '@po-ui/ng-components';"),t()(),e(4,"div",2)(5,"p"),n(6,"M\xF3dulo do componente "),e(7,"code"),n(8,"po-calendar"),t(),n(9,"."),t()(),e(10,"h3",3),n(11,"Componente"),t(),e(12,"h4",4)(13,"code",5),n(14,"PoCalendarComponent"),t()(),e(15,"div",2)(16,"p"),n(17,"O "),e(18,"code"),n(19,"po-calendar"),t(),n(20,` \xE9 um componente para sele\xE7\xE3o de datas. Ele permite uma f\xE1cil navega\xE7\xE3o clicando nas setas
de direcionamento e nos `),e(21,"em"),n(22,"labels"),t(),n(23," do ano ou m\xEAs."),t(),e(24,"p"),n(25,"Este componente pode receber os seguintes formatos de data:"),t(),e(26,"ul")(27,"li")(28,"strong"),n(29,"Data e hora combinados (E8601DZw): yyyy-mm-ddThh:mm:ss+|-hh:mm"),t()()(),e(30,"pre")(31,"code"),n(32,`this.date = '2017-11-28T00:00:00-02:00';
`),t()(),e(33,"ul")(34,"li")(35,"strong"),n(36,"Data (E8601DAw.): yyyy-mm-dd"),t()()(),e(37,"pre")(38,"code"),n(39,`this.date = '2017-11-28';
`),t()(),e(40,"ul")(41,"li")(42,"strong"),n(43,"JavaScript Date Object:"),t()()(),e(44,"pre")(45,"code"),n(46,`this.date = new Date(2017, 10, 28);
`),t()(),e(47,"blockquote")(48,"p"),n(49,"Independentemente do formato utilizado, o componente trata o valor do "),e(50,"em"),n(51,"model"),t(),n(52,` internamente com o
formato `),e(53,"strong"),n(54,"Data (E8601DAw.): yyyy-mm-dd"),t(),n(55,"."),t()(),e(56,"p"),n(57,"Importante:"),t(),e(58,"ul")(59,"li"),n(60,"Caso seja definida uma data fora do range da data m\xEDnima e data m\xE1xima via "),e(61,"em"),n(62,"ngModel"),t(),n(63,` o componente mostrar\xE1
a data desabilitada por\xE9m o `),e(64,"em"),n(65,"model"),t(),n(66," n\xE3o ser\xE1 alterado."),t(),e(67,"li"),n(68,"Caso seja definida uma data inv\xE1lida a mesma n\xE3o ser\xE1 atribu\xEDda ao calend\xE1rio por\xE9m o "),e(69,"em"),n(70,"model"),t(),n(71," manter\xE1 a data inv\xE1lida."),t()()(),e(72,"div",6)(73,"h4",7),n(74,"Seletor"),t(),e(75,"pre",8),n(76,`<po-calendar
    (p-change)="EventEmitter"
    p-locale="string"
    p-max-date="any"
    p-min-date="any"
    p-mode="PoCalendarMode" >
</po-calendar>
`),t()(),e(77,"h4",9),n(78,"Propriedades"),t(),e(79,"table",10)(80,"tr",11)(81,"th",12),n(82,"Nome"),t(),e(83,"th",12),n(84,"Tipo"),t(),e(85,"th",12),n(86,"Padr\xE3o"),t(),e(87,"th",12),n(88,"Descri\xE7\xE3o"),t()(),e(89,"tr",13)(90,"td",14)(91,"div",15)(92,"span",16),n(93," (p-change)"),l(94,"br"),t()()(),e(95,"td",17)(96,"code",18),n(97,"EventEmitter"),t()(),e(98,"td",19),n(99,"-"),t(),e(100,"td",20)(101,"p"),n(102,"Evento disparado ao selecionar um dia do calend\xE1rio."),t()()(),e(103,"tr",13)(104,"td",14)(105,"div",21)(106,"span",22),n(107," p-locale"),l(108,"br"),t()()(),e(109,"td",17)(110,"code",23),n(111,"string"),t()(),e(112,"td",19),n(113,"-"),t(),e(114,"td",20)(115,"em")(116,"strong"),n(117,"(opcional)"),t()(),e(118,"p"),n(119,"Idioma do calend\xE1rio."),t(),e(120,"blockquote")(121,"p"),n(122,"O locale padr\xE3o sera recuperado com base no "),e(123,"a",24)(124,"code"),n(125,"PoI18nService"),t()(),n(126," ou "),e(127,"em"),n(128,"browser"),t(),n(129,"."),t()()()(),e(130,"tr",13)(131,"td",14)(132,"div",21)(133,"span",22),n(134," p-max-date"),l(135,"br"),t()()(),e(136,"td",17)(137,"code",25),n(138,"any"),t()(),e(139,"td",19),n(140,"-"),t(),e(141,"td",20)(142,"em")(143,"strong"),n(144,"(opcional)"),t()(),e(145,"p"),n(146,"Define a data m\xE1xima poss\xEDvel de ser selecionada."),t(),e(147,"p"),n(148,"Pode receber os seguintes formatos de data:"),t(),e(149,"ul")(150,"li")(151,"strong"),n(152,"Data e hora combinados (E8601DZw): yyyy-mm-ddThh:mm:ss+|-hh:mm"),t()()(),e(153,"pre")(154,"code"),n(155,`this.date = '2017-11-28T00:00:00-02:00';
`),t()(),e(156,"ul")(157,"li")(158,"strong"),n(159,"Data (E8601DAw.): yyyy-mm-dd"),t()()(),e(160,"pre")(161,"code"),n(162,`this.date = '2017-11-28';
`),t()(),e(163,"ul")(164,"li")(165,"strong"),n(166,"JavaScript Date Object:"),t()()(),e(167,"pre")(168,"code"),n(169,`this.date = new Date(2017, 10, 28);
`),t()()()(),e(170,"tr",13)(171,"td",14)(172,"div",21)(173,"span",22),n(174," p-min-date"),l(175,"br"),t()()(),e(176,"td",17)(177,"code",25),n(178,"any"),t()(),e(179,"td",19),n(180,"-"),t(),e(181,"td",20)(182,"em")(183,"strong"),n(184,"(opcional)"),t()(),e(185,"p"),n(186,"Define a data m\xEDnima poss\xEDvel de ser selecionada."),t(),e(187,"p"),n(188,"Pode receber os seguintes formatos de data:"),t(),e(189,"ul")(190,"li")(191,"strong"),n(192,"Data e hora combinados (E8601DZw): yyyy-mm-ddThh:mm:ss+|-hh:mm"),t()()(),e(193,"pre")(194,"code"),n(195,`this.date = '2017-11-28T00:00:00-02:00';
`),t()(),e(196,"ul")(197,"li")(198,"strong"),n(199,"Data (E8601DAw.): yyyy-mm-dd"),t()()(),e(200,"pre")(201,"code"),n(202,`this.date = '2017-11-28';
`),t()(),e(203,"ul")(204,"li")(205,"strong"),n(206,"JavaScript Date Object:"),t()()(),e(207,"pre")(208,"code"),n(209,`this.date = new Date(2017, 10, 28);
`),t()()()(),e(210,"tr",13)(211,"td",14)(212,"div",21)(213,"span",22),n(214," p-mode"),l(215,"br"),t()()(),e(216,"td",17)(217,"code",26),n(218,"PoCalendarMode"),t()(),e(219,"td",19),n(220,"-"),t(),e(221,"td",20)(222,"p"),n(223,"Propriedade que permite informar o modo de exibi\xE7\xE3o do calendar."),t(),e(224,"p"),n(225,"Implementa o enum "),e(226,"code"),n(227,"PoCalendarMode"),t(),n(228,"."),t()()()(),e(229,"h3"),n(230,"Enums"),t(),e(231,"h4",4)(232,"code",5),n(233,"PoCalendarMode"),t()(),e(234,"div",2)(235,"p")(236,"em"),n(237,"Enum"),t(),e(238,"code"),n(239,"PoCalendarMode"),t(),n(240," para especificar os modos de visualiza\xE7\xE3o do calend\xE1rio."),t()(),e(241,"h4",9),n(242,"Propriedades"),t(),e(243,"table",10)(244,"tr",11)(245,"th",12),n(246,"Nome"),t(),e(247,"th",12),n(248,"Descri\xE7\xE3o"),t()(),e(249,"tr",13)(250,"td",14)(251,"div",21)(252,"span",22),n(253," Range"),l(254,"br"),t()()(),e(255,"td",20)(256,"p"),n(257,"Define que o calend\xE1rio ser\xE1 exibido em modo faixa de sele\xE7\xE3o."),t()()()()())},dependencies:[P],encapsulation:2})}return i})();var se=(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,o){this.route=p,this.router=o}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let o=p.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(o){return new(o||i)(_(J),_(Z))};static \u0275cmp=u({type:i,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title"," Calendar",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,a){o&1&&(e(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),h("p-click",function(){return a.changeTab("doc")}),l(3,"sample-po-calendar-doc"),t(),e(4,"po-tab",3),h("p-click",function(){return a.changeTab("web")}),l(5,"sample-po-calendar-basic-view")(6,"sample-po-calendar-labs-view")(7,"sample-po-calendar-ticket-sales-view"),t()()()),o&2&&(r("p-actions",a.actions),d(2),r("p-active",a.activeTab==="doc"),d(2),r("p-hide",a.hidePoWebSample)("p-active",a.activeTab==="web"))},dependencies:[I,E,y,oe,pe,re,me],encapsulation:2})}return i})();var Te=[{path:"",component:se}],ce=(()=>{class i{static \u0275fac=function(o){return new(o||i)};static \u0275mod=L({type:i});static \u0275inj=B({imports:[N.forChild(Te),N]})}return i})();var Ze=(()=>{class i{static \u0275fac=function(o){return new(o||i)};static \u0275mod=L({type:i});static \u0275inj=B({imports:[ae,ce]})}return i})();export{Ze as DocPoCalendarModule};
