import{$ as z,$a as T,$d as x,Bd as le,Ca as O,Da as D,Ea as R,F as g,Fa as F,Fd as me,G as h,Ga as e,Ia as M,Ka as C,La as w,Lb as W,Ma as S,Mb as G,Nb as j,Oa as ee,Ob as U,Pa as q,Pb as Q,Pc as ie,Rd as de,T as p,Td as ce,U as B,Vc as re,Wb as ne,Xc as se,Ya as te,Yb as oe,Zb as $,_ as c,_b as Y,_d as f,bb as H,dd as pe,ea as A,ha as d,je as P,ka as _,na as n,oa as t,pa as s,pd as Z,re as ue,ta as k,te as v,ua as u,ue as ge,va as b,vc as J,y as I,yc as ae}from"./chunk-Y4SQKOF7.js";var he=(()=>{class a{static \u0275fac=function(i){return new(i||a)};static \u0275cmp=c({type:a,selectors:[["sample-po-page-change-password-basic"]],standalone:!1,decls:1,vars:0,template:function(i,o){i&1&&s(0,"po-page-change-password")},dependencies:[P],encapsulation:2})}return a})();var Te=a=>({"docs-sample-code-tabs":a}),Pe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=c({type:a,selectors:[["sample-po-page-change-password-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,o){i&1&&(s(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Page Change Password Basic"),t(),n(4,"a",2),u("click",function(){return o.toggleSampleCodeTabs()}),s(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-change-password-basic/sample-po-page-change-password-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-page-change-password></po-page-change-password>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-change-password-basic/sample-po-page-change-password-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-page-change-password-basic',
  templateUrl: './sample-po-page-change-password-basic.component.html',
  standalone: false
})
export class SamplePoPageChangePasswordBasicComponent {}
`),t()()()()(),n(21,"div",10),s(22,"sample-po-page-change-password-basic"),t(),s(23,"hr")),i&2&&(p(5),_("po-icon "+o.sampleCodeButtonIcon),p(),M(" ",o.sampleCodeButtonLabel,""),p(),d("ngClass",q(4,Te,o.hideSampleCodeTabs)))},dependencies:[T,v,f,x,he],encapsulation:2})}return a})();var Ce=(()=>{class a{poDialog;changePassword;componentsSize;hideCurrentPassword;logo;recovery;requirement;requirements;secondaryLogo;urlBack;urlHome;componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];constructor(r){this.poDialog=r}ngOnInit(){this.restore()}addRequirement(){this.requirements=[...this.requirements,this.requirement],this.requirement={requirement:"",status:!1}}restore(){this.componentsSize="medium",this.hideCurrentPassword=!1,this.logo=void 0,this.urlBack="",this.urlHome="",this.recovery="",this.requirement={requirement:"",status:!1},this.requirements=[],this.secondaryLogo=void 0}submit(r){this.poDialog.alert({title:"Authenticate",message:JSON.stringify(r),componentsSize:this.componentsSize,ok:()=>this.changePassword.openConfirmation()})}static \u0275fac=function(i){return new(i||a)(B(ae))};static \u0275cmp=c({type:a,selectors:[["sample-po-page-change-password-labs"]],viewQuery:function(i,o){if(i&1&&O(P,7),i&2){let l;D(l=R())&&(o.changePassword=l.first)}},standalone:!1,decls:26,vars:19,consts:[["f","ngForm"],["fRequirements","ngForm"],[3,"p-submit","p-components-size","p-hide-current-password","p-logo","p-recovery","p-requirements","p-secondary-logo","p-url-back","p-url-home"],["p-label","Properties"],[1,"po-row"],["name","urlHome","p-label","Url home",1,"po-md-6",3,"ngModelChange","ngModel"],["name","recovery","p-label","Recovery",1,"po-md-6",3,"ngModelChange","ngModel"],["name","urlBack","p-label","Url back",1,"po-md-6",3,"ngModelChange","ngModel"],["name","logo","p-clean","","p-label","Logo",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","secondaryLogo","p-clean","","p-label","Secondary logo",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","hideCurrentPassword","p-label","Hide current password",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","componentsSize","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","requirement","p-label","Requirement","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","requirementStatus","p-label","Requirement Status",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Password Requirement",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(i,o){if(i&1){let l=k();n(0,"po-page-change-password",2),u("p-submit",function(m){return g(l),h(o.submit(m))}),t(),s(1,"po-divider",3),n(2,"form",null,0)(4,"div",4)(5,"po-input",5),S("ngModelChange",function(m){return g(l),w(o.urlHome,m)||(o.urlHome=m),h(m)}),t(),n(6,"po-input",6),S("ngModelChange",function(m){return g(l),w(o.recovery,m)||(o.recovery=m),h(m)}),t()(),n(7,"div",4)(8,"po-input",7),S("ngModelChange",function(m){return g(l),w(o.urlBack,m)||(o.urlBack=m),h(m)}),t(),n(9,"po-input",8),S("ngModelChange",function(m){return g(l),w(o.logo,m)||(o.logo=m),h(m)}),t()(),n(10,"div",4)(11,"po-input",9),S("ngModelChange",function(m){return g(l),w(o.secondaryLogo,m)||(o.secondaryLogo=m),h(m)}),t(),n(12,"po-switch",10),S("ngModelChange",function(m){return g(l),w(o.hideCurrentPassword,m)||(o.hideCurrentPassword=m),h(m)}),t()(),n(13,"po-radio-group",11),S("ngModelChange",function(m){return g(l),w(o.componentsSize,m)||(o.componentsSize=m),h(m)}),t(),s(14,"br")(15,"hr"),n(16,"form",null,1)(18,"div",4)(19,"po-input",12),S("ngModelChange",function(m){return g(l),w(o.requirement.requirement,m)||(o.requirement.requirement=m),h(m)}),t(),n(20,"po-switch",13),S("ngModelChange",function(m){return g(l),w(o.requirement.status,m)||(o.requirement.status=m),h(m)}),t()(),n(21,"div",4)(22,"po-button",14),u("p-click",function(){return g(l),h(o.addRequirement())}),t()()(),s(23,"hr"),n(24,"div",4)(25,"po-button",15),u("p-click",function(){return g(l),h(o.restore())}),t()()()}if(i&2){let l=F(17);d("p-components-size",o.componentsSize)("p-hide-current-password",o.hideCurrentPassword)("p-logo",o.logo)("p-recovery",o.recovery)("p-requirements",o.requirements)("p-secondary-logo",o.secondaryLogo)("p-url-back",o.urlBack)("p-url-home",o.urlHome),p(5),C("ngModel",o.urlHome),p(),C("ngModel",o.recovery),p(2),C("ngModel",o.urlBack),p(),C("ngModel",o.logo),p(2),C("ngModel",o.secondaryLogo),p(),C("ngModel",o.hideCurrentPassword),p(),C("ngModel",o.componentsSize),d("p-options",o.componentsSizeOptions),p(6),C("ngModel",o.requirement.requirement),p(),C("ngModel",o.requirement.status),p(2),d("p-disabled",l.form.invalid)}},dependencies:[Q,W,G,U,j,J,Y,re,Z,pe,P],encapsulation:2})}return a})();var De=a=>({"docs-sample-code-tabs":a}),we=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=c({type:a,selectors:[["sample-po-page-change-password-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,o){i&1&&(s(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Page Change Password Labs"),t(),n(4,"a",2),u("click",function(){return o.toggleSampleCodeTabs()}),s(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-change-password-labs/sample-po-page-change-password-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-page-change-password
  [p-components-size]="componentsSize"
  [p-hide-current-password]="hideCurrentPassword"
  [p-logo]="logo"
  [p-recovery]="recovery"
  [p-requirements]="requirements"
  [p-secondary-logo]="secondaryLogo"
  [p-url-back]="urlBack"
  [p-url-home]="urlHome"
  (p-submit)="submit($event)"
>
</po-page-change-password>

<po-divider p-label="Properties"></po-divider>

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="urlHome" [(ngModel)]="urlHome" p-label="Url home"> </po-input>

    <po-input class="po-md-6" name="recovery" [(ngModel)]="recovery" p-label="Recovery"> </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-md-6" name="urlBack" [(ngModel)]="urlBack" p-label="Url back"> </po-input>

    <po-input class="po-lg-6" name="logo" [(ngModel)]="logo" p-clean p-label="Logo"> </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-lg-6" name="secondaryLogo" [(ngModel)]="secondaryLogo" p-clean p-label="Secondary logo">
    </po-input>

    <po-switch
      class="po-lg-6"
      name="hideCurrentPassword"
      [(ngModel)]="hideCurrentPassword"
      p-label="Hide current password"
    >
    </po-switch>
  </div>

  <po-radio-group
    class="po-md-12 po-lg-6"
    name="componentsSize"
    [(ngModel)]="componentsSize"
    p-label="Components size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="componentsSizeOptions"
  >
  </po-radio-group>

  <br />

  <hr />

  <form #fRequirements="ngForm">
    <div class="po-row">
      <po-input
        class="po-md-6"
        name="requirement"
        [(ngModel)]="requirement.requirement"
        p-label="Requirement"
        p-required
      >
      </po-input>

      <po-switch class="po-md-6" name="requirementStatus" [(ngModel)]="requirement.status" p-label="Requirement Status">
      </po-switch>
    </div>

    <div class="po-row">
      <po-button
        class="po-md-6 po-lg-3"
        p-label="Add Password Requirement"
        [p-disabled]="fRequirements.form.invalid"
        (p-click)="addRequirement()"
      >
      </po-button>
    </div>
  </form>

  <hr />

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-change-password-labs/sample-po-page-change-password-labs.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit, ViewChild } from '@angular/core';

import { PoDialogService, PoRadioGroupOption } from '@po-ui/ng-components';
import {
  PoPageChangePassword,
  PoPageChangePasswordComponent,
  PoPageChangePasswordRequirement
} from '@po-ui/ng-templates';

@Component({
  selector: 'sample-po-page-change-password-labs',
  templateUrl: './sample-po-page-change-password-labs.component.html',
  standalone: false
})
export class SamplePoPageChangePasswordLabsComponent implements OnInit {
  @ViewChild(PoPageChangePasswordComponent, { static: true }) changePassword: PoPageChangePasswordComponent;

  componentsSize: string;
  hideCurrentPassword: boolean;
  logo: string;
  recovery: string;
  requirement: PoPageChangePasswordRequirement;
  requirements: Array<PoPageChangePasswordRequirement>;
  secondaryLogo: string;
  urlBack: string;
  urlHome: string;

  public readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  constructor(private poDialog: PoDialogService) {}

  ngOnInit() {
    this.restore();
  }

  addRequirement() {
    this.requirements = [...this.requirements, this.requirement];
    this.requirement = { requirement: '', status: false };
  }

  restore() {
    this.componentsSize = 'medium';
    this.hideCurrentPassword = false;
    this.logo = undefined;
    this.urlBack = '';
    this.urlHome = '';
    this.recovery = '';
    this.requirement = { requirement: '', status: false };
    this.requirements = [];
    this.secondaryLogo = undefined;
  }

  submit(formData: PoPageChangePassword) {
    this.poDialog.alert({
      title: 'Authenticate',
      message: JSON.stringify(formData),
      componentsSize: this.componentsSize,
      ok: () => this.changePassword.openConfirmation()
    });
  }
}
`),t()()()()(),n(21,"div",10),s(22,"sample-po-page-change-password-labs"),t(),s(23,"hr")),i&2&&(p(5),_("po-icon "+o.sampleCodeButtonIcon),p(),M(" ",o.sampleCodeButtonLabel,""),p(),d("ngClass",q(4,De,o.hideSampleCodeTabs)))},dependencies:[T,v,f,x,Ce],encapsulation:2})}return a})();function Ve(a,X){if(a&1){let r=k();n(0,"po-page-edit",3)(1,"form",null,1)(3,"div",4)(4,"div",4),s(5,"po-input",5),n(6,"po-datepicker",6),S("ngModelChange",function(o){g(r);let l=b();return w(l.birthday,o)||(l.birthday=o),h(o)}),t(),s(7,"po-input",7),t(),n(8,"div",4)(9,"po-select",8),S("ngModelChange",function(o){g(r);let l=b();return w(l.country,o)||(l.country=o),h(o)}),t(),n(10,"po-select",9),S("ngModelChange",function(o){g(r);let l=b();return w(l.city,o)||(l.city=o),h(o)}),t(),s(11,"po-input",10),t(),s(12,"po-divider",11),n(13,"po-button",12),u("p-click",function(){g(r);let o=b();return h(o.showChangePasswordScreen())}),t()()()()}if(a&2){let r=b();d("p-breadcrumb",r.breadcrumb),p(5),d("ngModel",r.fullName),p(),C("ngModel",r.birthday),p(),d("ngModel",r.email),p(2),C("ngModel",r.country),d("p-options",r.countryOptions),p(),C("ngModel",r.city),d("p-options",r.cityOptions),p(),d("ngModel",r.phoneNumber)}}function Be(a,X){if(a&1){let r=k();n(0,"po-page-change-password",13),u("p-submit",function(){g(r);let o=b();return h(o.onSubmit())}),t()}if(a&2){let r=b();d("p-url-back",r.url)("p-url-home",r.url)}}var Se=(()=>{class a{changePassword;birthday;changePasswordScreen;city;country;email;fullName;phoneNumber;url;breadcrumb={items:[{label:"Home",link:"/documentation/po-page-change-password"},{label:"Profile"}]};cityOptions=[{label:"S\xE3o Paulo",value:"sp"}];countryOptions=[{label:"Brazil",value:"br"}];ngOnInit(){this.initialize()}initialize(){this.birthday="1991-11-28T00:00:00-02:00",this.changePasswordScreen=!1,this.city="sp",this.country="br",this.email="natasha.romanova@mail.com.br",this.fullName="Natasha Romanova",this.phoneNumber="119999999999",this.url="/home"}onSubmit(){this.changePassword.openConfirmation()}showChangePasswordScreen(){this.changePasswordScreen=!0}showProfileScreen(){this.changePasswordScreen=!1}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=c({type:a,selectors:[["sample-po-page-change-password-modify"]],viewQuery:function(i,o){if(i&1&&O(P,5),i&2){let l;D(l=R())&&(o.changePassword=l.first)}},standalone:!1,decls:3,vars:2,consts:[["changePasswordBlock",""],["formEditUser","ngForm"],["p-title","User Profile",3,"p-breadcrumb",4,"ngIf","ngIfElse"],["p-title","User Profile",3,"p-breadcrumb"],[1,"po-row"],["name","fullName","p-label","Name",1,"po-md-12",3,"ngModel"],["name","birthday","p-clean","","p-format","dd/mm/yyyy","p-label","Birthday Date","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","email","p-label","Email",1,"po-md-6",3,"ngModel"],["name","country","p-disabled","","p-label","Country",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","city","p-disabled","","p-label","City",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","phoneNumber","p-label","Phone Number","p-mask","(99)99999-9999",1,"po-md-12",3,"ngModel"],["p-label","Change Password",1,"po-md-12","po-mt-3"],["p-label","Change Your Password",1,"po-pb-3","po-pt-3","po-md-3",3,"p-click"],["p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO",3,"p-submit","p-url-back","p-url-home"]],template:function(i,o){if(i&1&&A(0,Ve,14,9,"po-page-edit",2)(1,Be,1,2,"ng-template",null,0,te),i&2){let l=F(2);d("ngIf",!o.changePasswordScreen)("ngIfElse",l)}},dependencies:[H,Q,W,G,U,j,J,Y,se,Z,le,ce,P],encapsulation:2})}return a})();var Ie=a=>({"docs-sample-code-tabs":a}),Ee=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=c({type:a,selectors:[["sample-po-page-change-password-modify-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,o){i&1&&(s(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Page Change Password Modify"),t(),n(4,"a",2),u("click",function(){return o.toggleSampleCodeTabs()}),s(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-change-password-modify/sample-po-page-change-password-modify.component.html"),t(),n(13,"pre",7),e(14,`<po-page-edit
  *ngIf="!changePasswordScreen; else changePasswordBlock"
  p-title="User Profile"
  [p-breadcrumb]="breadcrumb"
>
  <form #formEditUser="ngForm">
    <div class="po-row">
      <div class="po-row">
        <po-input class="po-md-12" name="fullName" [ngModel]="fullName" p-label="Name"> </po-input>

        <po-datepicker
          class="po-md-6"
          name="birthday"
          [(ngModel)]="birthday"
          p-clean
          p-format="dd/mm/yyyy"
          p-label="Birthday Date"
          p-required
        >
        </po-datepicker>

        <po-input class="po-md-6" name="email" [ngModel]="email" p-label="Email"> </po-input>
      </div>

      <div class="po-row">
        <po-select
          class="po-md-6"
          name="country"
          [(ngModel)]="country"
          p-disabled
          p-label="Country"
          [p-options]="countryOptions"
        >
        </po-select>

        <po-select class="po-md-6" name="city" [(ngModel)]="city" p-disabled p-label="City" [p-options]="cityOptions">
        </po-select>

        <po-input
          class="po-md-12"
          name="phoneNumber"
          [ngModel]="phoneNumber"
          p-label="Phone Number"
          p-mask="(99)99999-9999"
        >
        </po-input>
      </div>

      <po-divider class="po-md-12 po-mt-3" p-label="Change Password"> </po-divider>

      <po-button class="po-pb-3 po-pt-3 po-md-3" p-label="Change Your Password" (p-click)="showChangePasswordScreen()">
      </po-button>
    </div>
  </form>
</po-page-edit>

<ng-template #changePasswordBlock>
  <po-page-change-password
    p-logo="https://via.placeholder.com/160x64?text=MAIN+LOGO"
    p-secondary-logo="https://via.placeholder.com/80x24?text=SECONDARY+LOGO"
    [p-url-back]="url"
    [p-url-home]="url"
    (p-submit)="onSubmit()"
  >
  </po-page-change-password>
</ng-template>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-change-password-modify/sample-po-page-change-password-modify.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit, ViewChild } from '@angular/core';

import { PoPageChangePasswordComponent } from '@po-ui/ng-templates';

import { PoBreadcrumb, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-change-password-modify',
  templateUrl: './sample-po-page-change-password-modify.component.html',
  standalone: false
})
export class SamplePoPageChangePasswordModifyComponent implements OnInit {
  @ViewChild(PoPageChangePasswordComponent) changePassword: PoPageChangePasswordComponent;

  birthday: string;
  changePasswordScreen: boolean;
  city: string;
  country: string;
  email: string;
  fullName: string;
  phoneNumber: string;
  url: string;

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/documentation/po-page-change-password' }, { label: 'Profile' }]
  };

  public readonly cityOptions: Array<PoSelectOption> = [{ label: 'S\xE3o Paulo', value: 'sp' }];

  public readonly countryOptions: Array<PoSelectOption> = [{ label: 'Brazil', value: 'br' }];

  ngOnInit() {
    this.initialize();
  }

  initialize() {
    this.birthday = '1991-11-28T00:00:00-02:00';
    this.changePasswordScreen = false;
    this.city = 'sp';
    this.country = 'br';
    this.email = 'natasha.romanova@mail.com.br';
    this.fullName = 'Natasha Romanova';
    this.phoneNumber = '119999999999';
    this.url = '/home';
  }

  onSubmit() {
    this.changePassword.openConfirmation();
  }

  showChangePasswordScreen() {
    this.changePasswordScreen = true;
  }

  showProfileScreen() {
    this.changePasswordScreen = false;
  }
}
`),t()()()()(),n(21,"div",10),s(22,"sample-po-page-change-password-modify"),t(),s(23,"hr")),i&2&&(p(5),_("po-icon "+o.sampleCodeButtonIcon),p(),M(" ",o.sampleCodeButtonLabel,""),p(),d("ngClass",q(4,Ie,o.hideSampleCodeTabs)))},dependencies:[T,v,f,x,Se],encapsulation:2})}return a})();function Ae(a,X){if(a&1){let r=k();n(0,"po-page-login",2),u("p-login-submit",function(){g(r);let o=b();return h(o.checkLogin())}),t()}}function Fe(a,X){if(a&1){let r=k();n(0,"po-page-change-password",3),u("p-submit",function(){g(r);let o=b();return h(o.onSubmit())}),t()}if(a&2){let r=b();d("p-requirements",r.requirements)}}var be=(()=>{class a{changePassword;login=!1;requirements=[{requirement:"Use at least one symbol (ex. !, @, #).",status:this.validateSymbols.bind(this)},{requirement:"Mix uppercase and lowercase characters.",status:this.validateCases.bind(this)},{requirement:"Min of 5 characters.",status:this.validateCharacters.bind(this)}];checkLogin(){this.login=!this.login}onSubmit(){this.changePassword.openConfirmation()}validateCases(r){if(r){let i=r.match(/[a-z]/g);return!(!i||i.length<1||(i=r.match(/[A-Z]/g),!i||i.length<1))}}validateCharacters(r){return r&&r.length>=5}validateSymbols(r){if(r){let i=r.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/g);return!(!i||i.length<1)}}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=c({type:a,selectors:[["sample-po-page-change-password-create"]],viewQuery:function(i,o){if(i&1&&O(P,7),i&2){let l;D(l=R())&&(o.changePassword=l.first)}},standalone:!1,decls:2,vars:2,consts:[["p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO",3,"p-login-submit",4,"ngIf"],["p-hide-current-password","","p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO","p-url-home","/home",3,"p-requirements","p-submit",4,"ngIf"],["p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO",3,"p-login-submit"],["p-hide-current-password","","p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO","p-url-home","/home",3,"p-submit","p-requirements"]],template:function(i,o){i&1&&A(0,Ae,1,0,"po-page-login",0)(1,Fe,1,1,"po-page-change-password",1),i&2&&(d("ngIf",!o.login),p(),d("ngIf",o.login))},dependencies:[H,P,ue],encapsulation:2})}return a})();var We=a=>({"docs-sample-code-tabs":a}),fe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=c({type:a,selectors:[["sample-po-page-change-password-create-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,o){i&1&&(s(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Page Change Password Create"),t(),n(4,"a",2),u("click",function(){return o.toggleSampleCodeTabs()}),s(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-change-password-create/sample-po-page-change-password-create.component.html"),t(),n(13,"pre",7),e(14,`<po-page-login
  *ngIf="!login"
  p-logo="https://via.placeholder.com/160x64?text=MAIN+LOGO"
  p-secondary-logo="https://via.placeholder.com/80x24?text=SECONDARY+LOGO"
  (p-login-submit)="checkLogin()"
>
</po-page-login>

<po-page-change-password
  *ngIf="login"
  p-hide-current-password
  p-logo="https://via.placeholder.com/160x64?text=MAIN+LOGO"
  p-secondary-logo="https://via.placeholder.com/80x24?text=SECONDARY+LOGO"
  p-url-home="/home"
  [p-requirements]="requirements"
  (p-submit)="onSubmit()"
>
</po-page-change-password>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-change-password-create/sample-po-page-change-password-create.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, ViewChild } from '@angular/core';
import { PoPageChangePasswordComponent, PoPageChangePasswordRequirement } from '@po-ui/ng-templates';

@Component({
  selector: 'sample-po-page-change-password-create',
  templateUrl: './sample-po-page-change-password-create.component.html',
  standalone: false
})
export class SamplePoPageChangePasswordCreateComponent {
  @ViewChild(PoPageChangePasswordComponent, { static: true }) changePassword: PoPageChangePasswordComponent;

  login: boolean = false;
  requirements: Array<PoPageChangePasswordRequirement> = [
    { requirement: 'Use at least one symbol (ex. !, @, #).', status: this.validateSymbols.bind(this) },
    { requirement: 'Mix uppercase and lowercase characters.', status: this.validateCases.bind(this) },
    { requirement: 'Min of 5 characters.', status: this.validateCharacters.bind(this) }
  ];

  checkLogin() {
    this.login = !this.login;
  }

  onSubmit() {
    this.changePassword.openConfirmation();
  }

  validateCases(newPassword: string) {
    if (newPassword) {
      let result = newPassword.match(/[a-z]/g);

      if (!result || result.length < 1) {
        return false;
      }

      result = newPassword.match(/[A-Z]/g);

      if (!result || result.length < 1) {
        return false;
      }
      return true;
    }
  }

  validateCharacters(newPassword: string) {
    return newPassword && newPassword.length >= 5;
  }

  validateSymbols(newPassword: string) {
    if (newPassword) {
      const result = newPassword.match(/[!@#$%^&*()_+\\-=\\[\\]{};':"\\\\|,.<>\\/?]+/g);

      if (!result || result.length < 1) {
        return false;
      }
      return true;
    }
  }
}
`),t()()()()(),n(21,"div",10),s(22,"sample-po-page-change-password-create"),t(),s(23,"hr")),i&2&&(p(5),_("po-icon "+o.sampleCodeButtonIcon),p(),M(" ",o.sampleCodeButtonLabel,""),p(),d("ngClass",q(4,We,o.hideSampleCodeTabs)))},dependencies:[T,v,f,x,be],encapsulation:2})}return a})();var je=()=>({url:"https://po-sample-api.onrender.com/v1/users",type:"all",contactMail:"support@mail.com"}),xe=(()=>{class a{static \u0275fac=function(i){return new(i||a)};static \u0275cmp=c({type:a,selectors:[["sample-po-page-change-password-request"]],standalone:!1,decls:6,vars:2,consts:[[1,"po-row"],["p-label","Forgot your Password Sample Phone","p-value","(99) 99999-9999",1,"po-md-2"],["p-label","Forgot your Password Sample Email","p-value","mail@mail.com",1,"po-md-2"],["p-label","Forgot your Password Sample SMS Code","p-value","999999",1,"po-md-2"],["p-logo","https://via.placeholder.com/160x64?text=MAIN+LOGO","p-secondary-logo","https://via.placeholder.com/80x24?text=SECONDARY+LOGO","p-token","rzDsQiSYoq","p-url-new-password","https://thf.totvs.com.br/sample/api/new-password",3,"p-recovery"]],template:function(i,o){i&1&&(n(0,"po-container")(1,"div",0),s(2,"po-info",1)(3,"po-info",2)(4,"po-info",3),t()(),s(5,"po-page-change-password",4)),i&2&&(p(5),d("p-recovery",ee(1,je)))},dependencies:[ie,me,P],encapsulation:2})}return a})();var Qe=a=>({"docs-sample-code-tabs":a}),ve=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(i){return new(i||a)};static \u0275cmp=c({type:a,selectors:[["sample-po-page-change-password-request-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(i,o){i&1&&(s(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Page Change Password Request"),t(),n(4,"a",2),u("click",function(){return o.toggleSampleCodeTabs()}),s(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-change-password-request/sample-po-page-change-password-request.component.html"),t(),n(13,"pre",7),e(14,`<po-container>
  <div class="po-row">
    <po-info class="po-md-2" p-label="Forgot your Password Sample Phone" p-value="(99) 99999-9999"></po-info>
    <po-info class="po-md-2" p-label="Forgot your Password Sample Email" p-value="mail@mail.com"></po-info>
    <po-info class="po-md-2" p-label="Forgot your Password Sample SMS Code" p-value="999999"></po-info>
  </div>
</po-container>

<po-page-change-password
  p-logo="https://via.placeholder.com/160x64?text=MAIN+LOGO"
  p-secondary-logo="https://via.placeholder.com/80x24?text=SECONDARY+LOGO"
  p-token="rzDsQiSYoq"
  p-url-new-password="https://thf.totvs.com.br/sample/api/new-password"
  [p-recovery]="{ url: 'https://po-sample-api.onrender.com/v1/users', type: 'all', contactMail: 'support@mail.com' }"
>
</po-page-change-password>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-change-password-request/sample-po-page-change-password-request.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-page-change-password-request',
  templateUrl: './sample-po-page-change-password-request.component.html',
  standalone: false
})
export class SamplePoPageChangePasswordRequestComponent {}
`),t()()()()(),n(21,"div",10),s(22,"sample-po-page-change-password-request"),t(),s(23,"hr")),i&2&&(p(5),_("po-icon "+o.sampleCodeButtonIcon),p(),M(" ",o.sampleCodeButtonLabel,""),p(),d("ngClass",q(4,Qe,o.hideSampleCodeTabs)))},dependencies:[T,v,f,x,xe],encapsulation:2})}return a})();var ye=(()=>{class a{static \u0275fac=function(i){return new(i||a)};static \u0275cmp=c({type:a,selectors:[["sample-po-page-change-password-doc"]],standalone:!1,decls:669,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","PoPageChangePasswordRecovery"],["pan","",1,"docs-api-property-type","PoPageChangePasswordRequirement[]"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","PoModalPasswordRecoveryType"],["href","/documentation/po-modal-password-recovery"]],template:function(i,o){i&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoPageChangePasswordModule } from '@po-ui/ng-templates';"),t()(),n(4,"div",2)(5,"p"),e(6,"M\xF3dulo do template do po-page-change-password."),t()(),n(7,"h3",3),e(8,"Componente"),t(),n(9,"h4",4)(10,"code",5),e(11,"PoPageChangePasswordComponent"),t()(),n(12,"div",2)(13,"p"),e(14,"O componente "),n(15,"code"),e(16,"po-page-change-password"),t(),e(17," \xE9 utilizado como template para tela de cadastro ou altera\xE7\xE3o de senha."),t(),n(18,"p"),e(19,`Apresenta dicas e regras para senhas mais seguras e tamb\xE9m possibilidade de personalizar o redirecionamento para as telas
'esqueceu a senha', 'voltar' e 'entrar no sistema'. Os textos das telas s\xE3o pr\xE9-definidos e imut\xE1veis.`),t(),n(20,"p"),e(21,"A propriedade "),n(22,"code"),e(23,"p-url-new-password"),t(),e(24,` automatiza a rotina do template e simplifica o processo de cadastro/altera\xE7\xE3o de senha, bastando
definir uma url para POST das informa\xE7\xF5es digitadas pelo usu\xE1rio. A flexibilidade e praticidade podem chegar a um n\xEDvel em que o
desenvolvimento da aplica\xE7\xE3o no `),n(25,"em"),e(26,"client side"),t(),e(27,` \xE9 desprovida de qualquer c\xF3digo-fonte relacionado \xE0 rotina de cadastro/altera\xE7\xE3o de senha.
Seu detalhamento para uso pode ser visto logo abaixo em `),n(28,"em"),e(29,"propriedades"),t(),e(30,`.
Caso julgue necess\xE1rio, pode-se tamb\xE9m definir manualmente a rotina do componente.`),t(),n(31,"p"),e(32,`Para que as imagens sejam exibidas corretamente, \xE9 necess\xE1rio incluir o caminho delas ao projeto. Para isso, edite
o `),n(33,"em"),e(34,"assets"),t(),e(35," no arquivo "),n(36,"strong"),e(37,"angular.json"),t(),e(38," da aplica\xE7\xE3o na seguinte ordem:"),t(),n(39,"pre")(40,"code"),e(41,`"assets": [
  "src/assets",
  "src/favicon.ico",
  {
    "glob": "**\\/*",
    "input": "node_modules/@po-ui/style/images",
    "output": "assets/images"
  }
]
`),t()()(),n(42,"div",6)(43,"h4",7),e(44,"Seletor"),t(),n(45,"pre",8),e(46,`<po-page-change-password
    p-components-size="string"
    p-hide-current-password="boolean"
    p-logo="string"
    p-no-autocomplete-password="boolean"
    p-recovery="string | Function | PoPageChangePasswordRecovery"
    p-requirements="PoPageChangePasswordRequirement[]"
    p-secondary-logo="string"
    (p-submit)="EventEmitter"
    p-token="string"
    p-url-back="string"
    p-url-home="string"
    p-url-new-password="string" >
</po-page-change-password>
`),t()(),n(47,"h4",9),e(48,"Propriedades"),t(),n(49,"table",10)(50,"tr",11)(51,"th",12),e(52,"Nome"),t(),n(53,"th",12),e(54,"Tipo"),t(),n(55,"th",12),e(56,"Padr\xE3o"),t(),n(57,"th",12),e(58,"Descri\xE7\xE3o"),t()(),n(59,"tr",13)(60,"td",14)(61,"div",15)(62,"span",16),e(63," p-components-size"),s(64,"br"),t()()(),n(65,"td",17)(66,"code",18),e(67,"string"),t()(),n(68,"td",19)(69,"p")(70,"code"),e(71,"medium"),t()()(),n(72,"td",20)(73,"em")(74,"strong"),e(75,"(opcional)"),t()(),n(76,"p"),e(77,"Define o tamanho dos componentes de formul\xE1rio no template:"),t(),n(78,"ul")(79,"li")(80,"code"),e(81,"small"),t(),e(82,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(83,"li")(84,"code"),e(85,"medium"),t(),e(86,": aplica a medida medium de cada componente."),t()(),n(87,"blockquote")(88,"p"),e(89,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(90,"code"),e(91,"medium"),t(),e(92,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(93,"a",21),e(94,"po-theme"),t(),e(95,"."),t()()()(),n(96,"tr",13)(97,"td",14)(98,"div",15)(99,"span",16),e(100," p-hide-current-password"),s(101,"br"),t()()(),n(102,"td",17)(103,"code",22),e(104,"boolean"),t()(),n(105,"td",19)(106,"p")(107,"code"),e(108,"false"),t()()(),n(109,"td",20)(110,"em")(111,"strong"),e(112,"(opcional)"),t()(),n(113,"p"),e(114,"Esconde o campo "),n(115,"code"),e(116,"Senha atual"),t(),e(117," para que o template seja para cria\xE7\xE3o de senha."),t()()(),n(118,"tr",13)(119,"td",14)(120,"div",15)(121,"span",16),e(122," p-logo"),s(123,"br"),t()()(),n(124,"td",17)(125,"code",18),e(126,"string"),t()(),n(127,"td",19),e(128,"-"),t(),n(129,"td",20)(130,"em")(131,"strong"),e(132,"(opcional)"),t()(),n(133,"p"),e(134,"Caminho para a logomarca localizada na parte superior."),t(),n(135,"blockquote")(136,"p"),e(137,"Caso seja indefinida o espa\xE7o se mant\xE9m preservado por\xE9m vazio."),t()()()(),n(138,"tr",13)(139,"td",14)(140,"div",15)(141,"span",16),e(142," p-no-autocomplete-password"),s(143,"br"),t()()(),n(144,"td",17)(145,"code",22),e(146,"boolean"),t()(),n(147,"td",19)(148,"p")(149,"code"),e(150,"true"),t()()(),n(151,"td",20)(152,"em")(153,"strong"),e(154,"(opcional)"),t()(),n(155,"p"),e(156,"Define a propriedade nativa "),n(157,"code"),e(158,"autocomplete"),t(),e(159," do campo como "),n(160,"code"),e(161,"off"),t(),e(162,"."),t(),n(163,"blockquote")(164,"p"),e(165,"No input de senha("),n(166,"code"),e(167,"po-password"),t(),e(168,") ser\xE1 definido como "),n(169,"code"),e(170,"new-password"),t(),e(171,"."),t()()()(),n(172,"tr",13)(173,"td",14)(174,"div",15)(175,"span",16),e(176," p-recovery"),s(177,"br"),t()()(),n(178,"td",17)(179,"code",18),e(180,"string "),t(),n(181,"code",23),e(182," Function "),t(),n(183,"code",24),e(184," PoPageChangePasswordRecovery"),t()(),n(185,"td",19),e(186,"-"),t(),n(187,"td",20)(188,"em")(189,"strong"),e(190,"(opcional)"),t()(),n(191,"p"),e(192,"URL para a a\xE7\xE3o do link "),n(193,"code"),e(194,"Esqueceu a senha"),t(),e(195,"."),t(),n(196,"p"),e(197,"A propriedade aceita os seguintes tipos:"),t(),n(198,"ul")(199,"li")(200,"strong"),e(201,"String"),t(),e(202,": informe uma url externa ou uma rota v\xE1lida;"),t(),n(203,"li")(204,"strong"),e(205,"Function"),t(),e(206,": pode-se customizar a a\xE7\xE3o. Para esta possilidade basta atribuir:"),t()(),n(207,"pre")(208,"code"),e(209,`<po-page-change-password>
     [recovery]="this.myFunc.bind(this)";
</po-page-change-password>
`),t()(),n(210,"ul")(211,"li")(212,"strong"),e(213,"PoPageChangePasswordRecovery"),t(),e(214,": cria-se v\xEDnculo autom\xE1tico com o template "),n(215,"strong"),e(216,"po-modal-password-recovery"),t(),e(217,`.
O objeto deve conter a `),n(218,"strong"),e(219,"url"),t(),e(220," para requisi\xE7\xE3o dos recursos e pode-se definir o "),n(221,"strong"),e(222,"tipo"),t(),e(223,` de modal para recupera\xE7\xE3o de senha,
`),n(224,"strong"),e(225,"email"),t(),e(226," para contato e "),n(227,"strong"),e(228,"m\xE1scara"),t(),e(229," do campo de telefone."),t()(),n(230,"blockquote")(231,"p"),e(232,"Caso n\xE3o tenha valor o link "),n(233,"code"),e(234,"Esqueceu a senha"),t(),e(235," desaparece."),t()()()(),n(236,"tr",13)(237,"td",14)(238,"div",15)(239,"span",16),e(240," p-requirements"),s(241,"br"),t()()(),n(242,"td",17)(243,"code",25),e(244,"PoPageChangePasswordRequirement[]"),t()(),n(245,"td",19),e(246,"-"),t(),n(247,"td",20)(248,"em")(249,"strong"),e(250,"(opcional)"),t()(),n(251,"p"),e(252,"Lista de regras para cria\xE7\xE3o e altera\xE7\xE3o de senha."),t()()(),n(253,"tr",13)(254,"td",14)(255,"div",15)(256,"span",16),e(257," p-secondary-logo"),s(258,"br"),t()()(),n(259,"td",17)(260,"code",18),e(261,"string"),t()(),n(262,"td",19),e(263,"-"),t(),n(264,"td",20)(265,"em")(266,"strong"),e(267,"(opcional)"),t()(),n(268,"p"),e(269,"Caminho para a logomarca localizada no rodap\xE9."),t()()(),n(270,"tr",13)(271,"td",14)(272,"div",26)(273,"span",27),e(274," (p-submit)"),s(275,"br"),t()()(),n(276,"td",17)(277,"code",28),e(278,"EventEmitter"),t()(),n(279,"td",19),e(280,"-"),t(),n(281,"td",20)(282,"em")(283,"strong"),e(284,"(opcional)"),t()(),n(285,"p"),e(286,"Fun\xE7\xE3o executada ao submeter o form pelo bot\xE3o salvar."),t(),n(287,"p"),e(288,`Caso definida essa fun\xE7\xE3o, a modal de confirma\xE7\xE3o n\xE3o aparece, mas pode ser chamada pelo
m\xE9todo `),n(289,"code"),e(290,"openConfirmation"),t(),e(291,". Exemplo:"),t(),n(292,"pre")(293,"code"),e(294,`@ViewChild(PoPageChangePasswordComponent) changePassword: PoPageChangePasswordComponent;

onSubmit() {
 this.changePassword.openConfirmation();
}
`),t()(),n(295,"blockquote")(296,"p"),e(297,"Esta propriedade ser\xE1 ignorada se for definido valor para a propriedade "),n(298,"code"),e(299,"p-url-new-password"),t(),e(300,"."),t()()()(),n(301,"tr",13)(302,"td",14)(303,"div",15)(304,"span",16),e(305," p-token"),s(306,"br"),t()()(),n(307,"td",17)(308,"code",18),e(309,"string"),t()(),n(310,"td",19),e(311,"-"),t(),n(312,"td",20)(313,"em")(314,"strong"),e(315,"(opcional)"),t()(),n(316,"p"),e(317,"Token para solicita\xE7\xE3o de troca/recupera\xE7\xE3o de senha."),t(),n(318,"blockquote")(319,"p"),e(320,"Esta propriedade ser\xE1 ignorada caso exista um token como par\xE2metro na URL inicial do template."),t()()()(),n(321,"tr",13)(322,"td",14)(323,"div",15)(324,"span",16),e(325," p-url-back"),s(326,"br"),t()()(),n(327,"td",17)(328,"code",18),e(329,"string"),t()(),n(330,"td",19)(331,"p")(332,"code"),e(333,"/"),t()()(),n(334,"td",20)(335,"em")(336,"strong"),e(337,"(opcional)"),t()(),n(338,"p"),e(339,"URL para a a\xE7\xE3o de retorno da p\xE1gina."),t(),n(340,"blockquote")(341,"p"),e(342,"O bot\xE3o "),n(343,"code"),e(344,"Voltar"),t(),e(345," aparece apenas para telas de altera\xE7\xE3o de senha, ou seja, s\xF3 aparece se a propriedade "),n(346,"code"),e(347,"p-hide-current-password"),t(),e(348,` for
falsa.`),t()()()(),n(349,"tr",13)(350,"td",14)(351,"div",15)(352,"span",16),e(353," p-url-home"),s(354,"br"),t()()(),n(355,"td",17)(356,"code",18),e(357,"string"),t()(),n(358,"td",19)(359,"p")(360,"code"),e(361,"/"),t()()(),n(362,"td",20)(363,"em")(364,"strong"),e(365,"(opcional)"),t()(),n(366,"p"),e(367,"URL para a a\xE7\xE3o do bot\xE3o "),n(368,"code"),e(369,"Entrar no sistema"),t(),e(370,` da modal de confirma\xE7\xE3o que aparece ap\xF3s salvar a senha ou se chamada pelo m\xE9todo
`),n(371,"code"),e(372,"openConfirmation"),t(),e(373,"."),t()()(),n(374,"tr",13)(375,"td",14)(376,"div",15)(377,"span",16),e(378," p-url-new-password"),s(379,"br"),t()()(),n(380,"td",17)(381,"code",18),e(382,"string"),t()(),n(383,"td",19),e(384,"-"),t(),n(385,"td",20)(386,"em")(387,"strong"),e(388,"(opcional)"),t()(),n(389,"p"),e(390,"Endpoint usado pelo template para realizar um POST. Quando preenchido, o m\xE9todo "),n(391,"code"),e(392,"p-submit"),t(),e(393,` ser\xE1 ignorado e o componente adquirir\xE1
automatiza\xE7\xE3o para o processo de cadastro/troca de senha.`),t(),n(394,"h3"),e(395,"Processo"),t(),n(396,"p"),e(397,"Ao digitar um valor v\xE1lido nos campos de senha e pressionar "),n(398,"strong"),e(399,"salvar"),t(),e(400,`,
o componente far\xE1 uma requisi\xE7\xE3o `),n(401,"code"),e(402,"POST"),t(),e(403,` na url especificada nesta propriedade passando o objeto contendo os valores definidos pelo
usu\xE1rio.`),t(),n(404,"pre")(405,"code"),e(406,`body {
 token?: token,
 oldPassword?: oldPassword,
 newPassword: newPassword
}
`),t()(),n(407,"p"),e(408,"O c\xF3digo de resposta HTTP de status esperado \xE9 "),n(409,"code"),e(410,"204"),t(),e(411,"."),t(),n(412,"p"),e(413,"Em caso de "),n(414,"strong"),e(415,"sucesso"),t(),e(416,", ser\xE1 exibida a modal de confirma\xE7\xE3o de senha alterada."),t(),n(417,"blockquote")(418,"p"),e(419,"O token ser\xE1 informado pela propriedade "),n(420,"code"),e(421,"p-token"),t(),e(422,"do componente ou por um "),n(423,"em"),e(424,"query parameter"),t(),e(425," na URL do template."),t()(),n(426,"p")(427,"em"),e(428,"Processo finalizado."),t()(),s(429,"hr"),n(430,"h4"),e(431,"Praticidade"),t(),n(432,"p"),e(433,`As informa\xE7\xF5es do servi\xE7o de autentica\xE7\xE3o tamb\xE9m podem ser transmitidas diretamente pelas configura\xE7\xE3os de rota e, desta maneira,
dispensa-se qualquer men\xE7\xE3o e/ou importa\xE7\xE3o do componente `),n(434,"code"),e(435,"po-page-change-password"),t(),e(436,` no restante da aplica\xE7\xE3o. O exemplo abaixo
exemplifica a forma din\xE2mica com a qual o template de tela de troca de senha pode ser gerado ao navegar para rota `),n(437,"code"),e(438,"/change-password"),t(),e(439,`, e
tamb\xE9m como ele se comunica com o servi\xE7o para efetua\xE7\xE3o do processo de troca de senha do usu\xE1rio e solicita\xE7\xE3o de nova senha.
Basta definir nas configura\xE7\xF5es de rota:`),t(),n(440,"pre")(441,"code"),e(442,`import { PoModalPasswordRecoveryType, PoPageChangePasswordComponent } from '@po-ui/ng-templates';

...
const routes: Routes = [
  {
    path: 'change-password', component: PoPageChangePasswordComponent, data: {
      serviceApi: 'https://po-ui.io/sample/api/new-password',
      recovery: {
        url: 'https://po-ui.io/sample/api/users',
        type: PoModalPasswordRecoveryType.All,
        contactMail: 'dev.po@po-ui.com',
        phoneMask: '9-999-999-9999'
      }
    }
  }
  ...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
`),t()(),n(443,"p"),e(444,"O metadado "),n(445,"code"),e(446,"serviceApi"),t(),e(447," deve ser a "),n(448,"strong"),e(449,"url"),t(),e(450," para requisi\xE7\xE3o dos recursos de troca de senha. E "),n(451,"code"),e(452,"recovery"),t(),e(453,` \xE9 a interface
`),n(454,"code"),e(455,"PoPageChangePasswordRecovery"),t(),e(456," respons\xE1vel pelas especifica\xE7\xF5es contidas na modal de recupera\xE7\xE3o de senha."),t(),n(457,"blockquote")(458,"p"),e(459,"\xC9 essencial que siga a nomenclatura dos atributos exemplificados acima para sua efetiva funcionalidade."),t()()()()(),n(460,"h3",9),e(461,"M\xE9todos"),t(),n(462,"table",29)(463,"tr",13)(464,"th",30)(465,"div",15)(466,"h4")(467,"span",16),e(468," openConfirmation "),t()()()()(),n(469,"tr",20)(470,"td",20)(471,"p"),e(472,"Abre uma modal de confirma\xE7\xE3o com texto, imagem e bot\xE3o que redireciona para o link definido na propriedade "),n(473,"code"),e(474,"p-url-home"),t(),e(475,""),t()()()(),s(476,"br"),n(477,"h3"),e(478,"Interfaces"),t(),n(479,"h4",31)(480,"code",5),e(481,"PoPageChangePasswordRecovery"),t()(),n(482,"div",2)(483,"p"),e(484,"Interface para especifica\xE7\xE3o do tipo de recupera\xE7\xE3o de senha no "),n(485,"code"),e(486,"po-modal-password-recovery"),t(),e(487,"."),t()(),n(488,"h4",9),e(489,"Propriedades"),t(),n(490,"table",10)(491,"tr",11)(492,"th",12),e(493,"Nome"),t(),n(494,"th",12),e(495,"Tipo"),t(),n(496,"th",12),e(497,"Descri\xE7\xE3o"),t()(),n(498,"tr",13)(499,"td",14)(500,"div",15)(501,"span",16),e(502," contactMail"),s(503,"br"),t()()(),n(504,"td",17)(505,"code",18),e(506,"string"),t()(),n(507,"td",20)(508,"em")(509,"strong"),e(510,"(opcional)"),t()(),n(511,"p"),e(512,"Defini\xE7\xE3o do e-mail que \xE9 exibido na mensagem para contato de suporte."),t()()(),n(513,"tr",13)(514,"td",14)(515,"div",15)(516,"span",16),e(517," phoneMask"),s(518,"br"),t()()(),n(519,"td",17)(520,"code",18),e(521,"string"),t()(),n(522,"td",20)(523,"em")(524,"strong"),e(525,"(opcional)"),t()(),n(526,"p"),e(527,"Defini\xE7\xE3o da m\xE1scara do campo de telefone."),t()()(),n(528,"tr",13)(529,"td",14)(530,"div",15)(531,"span",16),e(532," type"),s(533,"br"),t()()(),n(534,"td",17)(535,"code",32),e(536,"PoModalPasswordRecoveryType"),t()(),n(537,"td",20)(538,"em")(539,"strong"),e(540,"(opcional)"),t()(),n(541,"p"),e(542,"Enum para especifica\xE7\xE3o do tipo de recupera\xE7\xE3o de senha "),n(543,"a",33),e(544,"PoModalPasswordRecoveryType"),t(),e(545,"."),t(),n(546,"blockquote")(547,"p"),e(548,"Caso n\xE3o seja definido valor se assume o padr\xE3o "),n(549,"code"),e(550,"PoModalPasswordRecoveryType.Email"),t(),e(551,"."),t()()()(),n(552,"tr",13)(553,"td",14)(554,"div",15)(555,"span",16),e(556," url"),s(557,"br"),t()()(),n(558,"td",17)(559,"code",18),e(560,"string"),t()(),n(561,"td",20)(562,"p"),e(563,"Endpoint usado pelo template "),n(564,"strong"),e(565,"PoModalPasswordRecovery"),t(),e(566," para requisi\xE7\xE3o do recurso."),t(),n(567,"blockquote")(568,"p"),e(569,"Saiba mais em "),n(570,"a",33),e(571,"PoModalPasswordRecovery"),t(),e(572,"."),t()()()()(),n(573,"h4",31)(574,"code",5),e(575,"PoPageChangePasswordRequirement"),t()(),n(576,"div",2)(577,"p"),e(578,"Interface com a defini\xE7\xE3o dos objetos aceitos pela propriedade "),n(579,"code"),e(580,"p-password-requirements"),t(),e(581,"."),t()(),n(582,"h4",9),e(583,"Propriedades"),t(),n(584,"table",10)(585,"tr",11)(586,"th",12),e(587,"Nome"),t(),n(588,"th",12),e(589,"Tipo"),t(),n(590,"th",12),e(591,"Descri\xE7\xE3o"),t()(),n(592,"tr",13)(593,"td",14)(594,"div",15)(595,"span",16),e(596," requirement"),s(597,"br"),t()()(),n(598,"td",17)(599,"code",18),e(600,"string"),t()(),n(601,"td",20)(602,"p"),e(603,"Requisito."),t()()(),n(604,"tr",13)(605,"td",14)(606,"div",15)(607,"span",16),e(608," status"),s(609,"br"),t()()(),n(610,"td",17)(611,"code",22),e(612,"boolean "),t(),n(613,"code",23),e(614," Function"),t()(),n(615,"td",20)(616,"p"),e(617,"Fun\xE7\xE3o que deve retornar um booleano para validar um requisito de senha."),t(),n(618,"p"),e(619,"Tamb\xE9m \xE9 poss\xEDvel informar diretamente um valor booleano que representa esta valida\xE7\xE3o."),t()()()(),n(620,"h4",31)(621,"code",5),e(622,"PoPageChangePassword"),t()(),n(623,"div",2)(624,"p"),e(625,"Interface com a defini\xE7\xE3o do objeto gerado pelo formul\xE1rio do componente "),n(626,"code"),e(627,"po-page-change-password"),t(),e(628,"."),t()(),n(629,"h4",9),e(630,"Propriedades"),t(),n(631,"table",10)(632,"tr",11)(633,"th",12),e(634,"Nome"),t(),n(635,"th",12),e(636,"Tipo"),t(),n(637,"th",12),e(638,"Descri\xE7\xE3o"),t()(),n(639,"tr",13)(640,"td",14)(641,"div",15)(642,"span",16),e(643," currentPassword"),s(644,"br"),t()()(),n(645,"td",17)(646,"code",18),e(647,"string"),t()(),n(648,"td",20)(649,"em")(650,"strong"),e(651,"(opcional)"),t()(),n(652,"p"),e(653,"Senha atual"),t()()(),n(654,"tr",13)(655,"td",14)(656,"div",15)(657,"span",16),e(658," newPassword"),s(659,"br"),t()()(),n(660,"td",17)(661,"code",18),e(662,"string"),t()(),n(663,"td",20)(664,"em")(665,"strong"),e(666,"(opcional)"),t()(),n(667,"p"),e(668,"Nova senha"),t()()()()())},dependencies:[v],encapsulation:2})}return a})();var _e=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=5;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,i){this.route=r,this.router=i}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let i=r.view;this.activeTab=i||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(i){return new(i||a)(B(ne),B(oe))};static \u0275cmp=c({type:a,selectors:[["ng-component"]],standalone:!1,decls:10,vars:4,consts:[["p-title"," Page Change Password",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(i,o){i&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),u("p-click",function(){return o.changeTab("doc")}),s(3,"sample-po-page-change-password-doc"),t(),n(4,"po-tab",3),u("p-click",function(){return o.changeTab("web")}),s(5,"sample-po-page-change-password-basic-view")(6,"sample-po-page-change-password-labs-view")(7,"sample-po-page-change-password-modify-view")(8,"sample-po-page-change-password-create-view")(9,"sample-po-page-change-password-request-view"),t()()()),i&2&&(d("p-actions",o.actions),p(2),d("p-active",o.activeTab==="doc"),p(2),d("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"))},dependencies:[de,f,x,Pe,we,Ee,fe,ve,ye],encapsulation:2})}return a})();var Ze=[{path:"",component:_e}],Me=(()=>{class a{static \u0275fac=function(i){return new(i||a)};static \u0275mod=z({type:a});static \u0275inj=I({imports:[$.forChild(Ze),$]})}return a})();var Lt=(()=>{class a{static \u0275fac=function(i){return new(i||a)};static \u0275mod=z({type:a});static \u0275inj=I({imports:[ge,Me]})}return a})();export{Lt as DocPoPageChangePasswordModule};
