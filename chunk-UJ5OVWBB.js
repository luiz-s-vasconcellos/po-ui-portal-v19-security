import{$ as y,$a as U,$d as D,Ca as R,Da as q,Ea as z,F as g,Fd as ce,G as x,Ga as e,Ia as j,Ka as L,Kb as p,La as k,Lb as H,Ma as w,Mb as Q,Na as B,Ob as J,Pa as W,Pb as K,Rd as he,Sb as X,T as l,Tb as Y,U as b,Vb as Z,Vc as me,Wb as $,Yb as ee,Za as G,Zb as F,_ as S,_d as P,a as c,b as u,cc as v,ce as ue,ha as d,ka as I,kc as te,lc as ne,mc as ie,na as t,nc as _,oa as n,oc as N,od as le,pa as i,pc as oe,pd as de,qc as M,rc as V,sc as C,ta as O,te as Ee,ua as E,ue as Se,vc as ae,vd as pe,xc as re,y as A,zd as se}from"./chunk-Y4SQKOF7.js";var Ae=["reactiveFormData"],be=(()=>{class r{cdr;fb;poTheme;reactiveFormModal;a11yLevel;a11yLevelStorage="po-a11y-AAA";reactiveForm;theme=0;themeStorage="po-theme-default";a11yChangeListenerAAA;a11yChangeListenerAA;themeChangeListenerDark;themeChangeListenerDefault;a11yLevelOptions=[{label:"AA",value:"AA"},{label:"AAA",value:"AAA"}];themeOptions=[{label:"Light",value:0},{label:"Dark",value:1}];modalPrimaryAction={action:()=>this.reactiveFormModal.close(),label:"Close"};poThemeSample={name:"po-theme",type:{light:{color:{brand:{"01":{lightest:"#f2eaf6",lighter:"#d9c2e5",light:"#bd94d1",base:"#753399",dark:"#5b1c7d",darker:"#400e58",darkest:"#260538"},"02":{base:"#b92f72"},"03":{base:"#ffd464"}},action:u(c({},ne),{disabled:"var(--color-neutral-mid-40)"}),feedback:u(c({},_),{info:u(c({},_.info),{base:"#0079b8"})}),neutral:c({},ie)},onRoot:u(c({},N.onRoot),{"--color-page-background-color-page":"var(--color-neutral-light-05)"}),perComponent:c({},N.perComponent)},dark:{color:{brand:{"01":{darkest:"#f2eaf6",darker:"#d9c2e5",dark:"#bd94d1",base:"#753399",light:"#5b1c7d",lighter:"#400e58",lightest:"#260538"},"02":{base:"#b92f72"},"03":{base:"#ffd464"}},action:u(c({},oe),{disabled:"var(--color-neutral-mid-40)"}),feedback:u(c({},M),{info:u(c({},M.info),{base:"#0079b8"})}),neutral:{light:{"00":"#1c1c1c","05":"#202020",10:"#2b2b2b",20:"#3b3b3b",30:"#5a5a5a"},mid:{40:"#7c7c7c",60:"#a1a1a1"},dark:{70:"#c1c1c1",80:"#d9d9d9",90:"#eeeeee",95:"#fbfbfb"}}},onRoot:u(c({},V.onRoot),{"--color-page-background-color-page":"var(--color-neutral-light-05)"}),perComponent:c({},V.perComponent)}},active:te.light};constructor(m,a,o){this.cdr=m,this.fb=a,this.poTheme=o;let s=this.poTheme.applyTheme();this.a11yLevel=this.poTheme.getA11yLevel(),s?this.theme=s.active||0:(this.poTheme.setTheme(this.poThemeSample,this.theme,this.a11yLevel),this.theme=this.poThemeSample.active),this.createReactiveForm(),this.a11yLevel==="AA"&&this.poTheme.setA11yDefaultSizeSmall(!0)}ngOnInit(){localStorage.getItem("po-ui-theme")&&(this.themeStorage=localStorage.getItem("po-ui-theme")),this.theme=this.themeStorage==="po-theme-default"?0:1,this.changeTheme(this.theme,!1),localStorage.getItem("po-ui-a11y")&&(this.a11yLevelStorage=localStorage.getItem("po-ui-a11y")),this.a11yLevel=this.a11yLevelStorage==="po-a11y-AAA"?v.AAA:v.AA,this.changeA11yLevel(this.a11yLevel,!1),this.themeChangeListenerDefault=()=>{this.changeTheme(0,!1),this.theme=0},this.themeChangeListenerDark=()=>{this.changeTheme(1,!1),this.theme=1},this.a11yChangeListenerAAA=()=>{this.changeA11yLevel(v.AAA,!1),this.a11yLevel=v.AAA},this.a11yChangeListenerAA=()=>{this.changeA11yLevel(v.AA,!1),this.a11yLevel=v.AA},window.addEventListener("po-a11y-AA",this.a11yChangeListenerAA),window.addEventListener("po-a11y-AAA",this.a11yChangeListenerAAA),window.addEventListener("po-theme-default",this.themeChangeListenerDefault),window.addEventListener("po-theme-dark",this.themeChangeListenerDark)}ngOnDestroy(){window.removeEventListener("po-theme-default",this.themeChangeListenerDefault),window.removeEventListener("po-theme-dark",this.themeChangeListenerDark),window.removeEventListener("po-a11y-AA",this.a11yChangeListenerAA),window.removeEventListener("po-a11y-AAA",this.a11yChangeListenerAAA)}changeA11yLevel(m,a=!0){this.poTheme.setCurrentThemeA11y(m),m==="AA"?localStorage.setItem("po-ui-a11y","po-a11y-AA"):localStorage.setItem("po-ui-a11y","po-a11y-AAA"),m===v.AA&&this.poTheme.setA11yDefaultSizeSmall(!0),a&&window.dispatchEvent(new Event("po-sample-change-a11y"))}changeTheme(m,a=!0){this.poTheme.setTheme(this.poThemeSample,m,this.a11yLevel),m===1?localStorage.setItem("po-ui-theme","po-theme-dark"):localStorage.setItem("po-ui-theme","po-theme-default"),a&&window.dispatchEvent(new Event("po-sample-change-theme")),this.a11yLevel==="AA"&&this.poTheme.setA11yDefaultSizeSmall(!0)}createReactiveForm(){this.reactiveForm=this.fb.group({name:["",p.compose([p.required,p.minLength(5),p.maxLength(30)])],address:["",p.compose([p.required,p.minLength(5),p.maxLength(50)])],number:["",p.compose([p.required,p.min(1),p.max(99999)])],email:["",p.required],website:["",p.required]})}saveForm(){this.reactiveFormModal.open()}static \u0275fac=function(a){return new(a||r)(b(G),b(Z),b(C))};static \u0275cmp=S({type:r,selectors:[["sample-po-theme-labs"]],viewQuery:function(a,o){if(a&1&&R(Ae,7),a&2){let s;q(s=z())&&(o.reactiveFormModal=s.first)}},standalone:!1,features:[B([C])],decls:24,vars:12,consts:[["reactiveFormData",""],["p-title","Example"],[3,"formGroup"],["formControlName","name","p-clean","","p-icon","an an-user","p-label","Customer name",1,"po-lg-6"],["formControlName","email","p-label","Email","p-clean","",1,"po-lg-6"],["formControlName","address","p-clean","","p-icon","an an-map-pin","p-label","Address",1,"po-lg-4","po-md-8"],["formControlName","number","p-label","Number","p-clean","",1,"po-lg-2","po-md-4"],["formControlName","website","p-label","Website","p-clean","",1,"po-lg-6"],[1,"po-row"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"],["p-title","Save successful",3,"p-primary-action"],["p-label","Name",1,"po-md-12",3,"p-value"],["p-label","Address",1,"po-md-6",3,"p-value"],["p-label","Number",1,"po-md-6",3,"p-value"],["p-label","Email",1,"po-md-6",3,"p-value"],["p-label","Website",1,"po-md-6",3,"p-value"],[1,"po-row","po-mt-3"],["name","theme","p-label","Theme Type",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","a11ylevel","p-label","Acessibility Level",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"]],template:function(a,o){if(a&1){let s=O();t(0,"po-widget",1)(1,"form",2),i(2,"po-input",3)(3,"po-email",4)(4,"po-input",5)(5,"po-number",6)(6,"po-url",7),t(7,"div",8)(8,"po-button",9),E("p-click",function(){return g(s),x(o.saveForm())}),n()()(),t(9,"po-modal",10,0)(11,"div",8),i(12,"po-info",11),n(),i(13,"hr"),t(14,"div",8),i(15,"po-info",12)(16,"po-info",13),n(),i(17,"hr"),t(18,"div",8),i(19,"po-info",14)(20,"po-info",15),n()()(),t(21,"div",16)(22,"po-radio-group",17),w("ngModelChange",function(h){return g(s),k(o.theme,h)||(o.theme=h),x(h)}),E("p-change",function(h){return g(s),x(o.changeTheme(h))}),n(),t(23,"po-radio-group",18),w("ngModelChange",function(h){return g(s),k(o.a11yLevel,h)||(o.a11yLevel=h),x(h)}),E("p-change",function(h){return g(s),x(o.changeA11yLevel(h))}),n()()}a&2&&(l(),d("formGroup",o.reactiveForm),l(7),d("p-disabled",!o.reactiveForm.valid),l(),d("p-primary-action",o.modalPrimaryAction),l(3),d("p-value",o.reactiveForm.controls.name.value),l(3),d("p-value",o.reactiveForm.controls.address.value),l(),d("p-value",o.reactiveForm.controls.number.value),l(3),d("p-value",o.reactiveForm.controls.email.value),l(),d("p-value",o.reactiveForm.controls.website.value),l(2),L("ngModel",o.theme),d("p-options",o.themeOptions),l(),L("ngModel",o.a11yLevel),d("p-options",o.a11yLevelOptions))},dependencies:[K,H,Q,J,X,Y,ae,me,le,de,pe,se,ce,re,ue],encapsulation:2})}return r})();var Ce=r=>({"docs-sample-code-tabs":r}),ge=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||r)};static \u0275cmp=S({type:r,selectors:[["sample-po-theme-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(i(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Theme Labs"),n(),t(4,"a",2),E("click",function(){return o.toggleSampleCodeTabs()}),i(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-theme-labs/sample-po-theme-labs.component.html"),n(),t(13,"pre",7),e(14,`<po-widget p-title="Example">
  <form [formGroup]="reactiveForm">
    <po-input class="po-lg-6" formControlName="name" p-clean p-icon="an an-user" p-label="Customer name"> </po-input>

    <po-email class="po-lg-6" formControlName="email" p-label="Email" p-clean> </po-email>

    <po-input class="po-lg-4 po-md-8" formControlName="address" p-clean p-icon="an an-map-pin" p-label="Address">
    </po-input>

    <po-number class="po-lg-2 po-md-4" formControlName="number" p-label="Number" p-clean> </po-number>

    <po-url class="po-lg-6" formControlName="website" p-label="Website" p-clean> </po-url>

    <div class="po-row">
      <po-button class="po-md-3" p-label="Save" [p-disabled]="!reactiveForm.valid" (p-click)="saveForm()"> </po-button>
    </div>
  </form>

  <po-modal #reactiveFormData p-title="Save successful" [p-primary-action]="modalPrimaryAction">
    <div class="po-row">
      <po-info class="po-md-12" p-label="Name" [p-value]="reactiveForm.controls.name.value"> </po-info>
    </div>

    <hr />

    <div class="po-row">
      <po-info class="po-md-6" p-label="Address" [p-value]="reactiveForm.controls.address.value"> </po-info>

      <po-info class="po-md-6" p-label="Number" [p-value]="reactiveForm.controls.number.value"> </po-info>
    </div>

    <hr />

    <div class="po-row">
      <po-info class="po-md-6" p-label="Email" [p-value]="reactiveForm.controls.email.value"> </po-info>

      <po-info class="po-md-6" p-label="Website" [p-value]="reactiveForm.controls.website.value"> </po-info>
    </div>
  </po-modal>
</po-widget>

<div class="po-row po-mt-3">
  <po-radio-group
    class="po-md-6"
    name="theme"
    p-label="Theme Type"
    [(ngModel)]="theme"
    [p-options]="themeOptions"
    (p-change)="changeTheme($event)"
  >
  </po-radio-group>

  <po-radio-group
    class="po-md-6"
    name="a11ylevel"
    p-label="Acessibility Level"
    [(ngModel)]="a11yLevel"
    [p-options]="a11yLevelOptions"
    (p-change)="changeA11yLevel($event)"
  >
  </po-radio-group>
</div>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-theme-labs/sample-po-theme-labs.component.ts"),n(),t(19,"pre",9),e(20,`import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import {
  PoRadioGroupOption,
  PoThemeA11yEnum,
  PoThemeService,
  PoThemeTypeEnum,
  poThemeDefaultActions,
  poThemeDefaultActionsDark,
  poThemeDefaultDarkValues,
  poThemeDefaultFeedback,
  poThemeDefaultFeedbackDark,
  poThemeDefaultLightValues,
  poThemeDefaultNeutrals
} from '@po-ui/ng-components';

import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';
@Component({
  selector: 'sample-po-theme-labs',
  templateUrl: './sample-po-theme-labs.component.html',
  providers: [PoThemeService],
  standalone: false
})
export class SamplePoThemeLabsComponent implements OnInit, OnDestroy {
  @ViewChild('reactiveFormData', { static: true }) reactiveFormModal: PoModalComponent;

  a11yLevel: PoThemeA11yEnum;
  a11yLevelStorage = 'po-a11y-AAA';
  reactiveForm: UntypedFormGroup;
  theme: PoThemeTypeEnum = 0;
  themeStorage = 'po-theme-default';

  private a11yChangeListenerAAA: any;
  private a11yChangeListenerAA: any;
  private themeChangeListenerDark: any;
  private themeChangeListenerDefault: any;

  readonly a11yLevelOptions: Array<PoRadioGroupOption> = [
    { label: 'AA', value: 'AA' },
    { label: 'AAA', value: 'AAA' }
  ];

  readonly themeOptions: Array<PoRadioGroupOption> = [
    { label: 'Light', value: 0 },
    { label: 'Dark', value: 1 }
  ];

  readonly modalPrimaryAction: PoModalAction = {
    action: () => this.reactiveFormModal.close(),
    label: 'Close'
  };

  poThemeSample = {
    name: 'po-theme',
    type: {
      light: {
        color: {
          brand: {
            '01': {
              lightest: '#f2eaf6',
              lighter: '#d9c2e5',
              light: '#bd94d1',
              base: '#753399',
              dark: '#5b1c7d',
              darker: '#400e58',
              darkest: '#260538'
            },
            '02': {
              base: '#b92f72'
            },
            '03': {
              base: '#ffd464'
            }
          },
          action: {
            ...poThemeDefaultActions,
            disabled: 'var(--color-neutral-mid-40)'
          },
          feedback: {
            ...poThemeDefaultFeedback,
            info: {
              ...poThemeDefaultFeedback.info,
              base: '#0079b8'
            }
          },
          neutral: {
            ...poThemeDefaultNeutrals
          }
        },
        onRoot: {
          ...poThemeDefaultLightValues.onRoot,
          '--color-page-background-color-page': 'var(--color-neutral-light-05)'
        },
        perComponent: {
          ...poThemeDefaultLightValues.perComponent
        }
      },
      dark: {
        color: {
          brand: {
            '01': {
              darkest: '#f2eaf6',
              darker: '#d9c2e5',
              dark: '#bd94d1',
              base: '#753399',
              light: '#5b1c7d',
              lighter: '#400e58',
              lightest: '#260538'
            },
            '02': {
              base: '#b92f72'
            },
            '03': {
              base: '#ffd464'
            }
          },
          action: {
            ...poThemeDefaultActionsDark,
            disabled: 'var(--color-neutral-mid-40)'
          },
          feedback: {
            ...poThemeDefaultFeedbackDark,
            info: {
              ...poThemeDefaultFeedbackDark.info,
              base: '#0079b8'
            }
          },
          neutral: {
            light: {
              '00': '#1c1c1c',
              '05': '#202020',
              '10': '#2b2b2b',
              '20': '#3b3b3b',
              '30': '#5a5a5a'
            },
            mid: {
              '40': '#7c7c7c',
              '60': '#a1a1a1'
            },
            dark: {
              '70': '#c1c1c1',
              '80': '#d9d9d9',
              '90': '#eeeeee',
              '95': '#fbfbfb'
            }
          }
        },
        onRoot: {
          ...poThemeDefaultDarkValues.onRoot,
          '--color-page-background-color-page': 'var(--color-neutral-light-05)'
        },
        perComponent: {
          ...poThemeDefaultDarkValues.perComponent
        }
      }
    },
    active: PoThemeTypeEnum.light
  };

  constructor(
    private cdr: ChangeDetectorRef,
    private fb: UntypedFormBuilder,
    private poTheme: PoThemeService
  ) {
    const _poTheme = this.poTheme.applyTheme();
    this.a11yLevel = this.poTheme.getA11yLevel();

    if (!_poTheme) {
      this.poTheme.setTheme(this.poThemeSample, this.theme, this.a11yLevel);
      this.theme = this.poThemeSample.active;
    } else {
      this.theme = _poTheme.active || 0;
    }
    this.createReactiveForm();

    if (this.a11yLevel === 'AA') {
      this.poTheme.setA11yDefaultSizeSmall(true);
    }
  }

  ngOnInit(): void {
    if (localStorage.getItem('po-ui-theme')) {
      this.themeStorage = localStorage.getItem('po-ui-theme');
    }

    this.theme = this.themeStorage === 'po-theme-default' ? 0 : 1;
    this.changeTheme(this.theme, false);

    if (localStorage.getItem('po-ui-a11y')) {
      this.a11yLevelStorage = localStorage.getItem('po-ui-a11y');
    }

    this.a11yLevel = this.a11yLevelStorage === 'po-a11y-AAA' ? PoThemeA11yEnum.AAA : PoThemeA11yEnum.AA;
    this.changeA11yLevel(this.a11yLevel, false);

    this.themeChangeListenerDefault = () => {
      this.changeTheme(0, false);
      this.theme = 0;
    };

    this.themeChangeListenerDark = () => {
      this.changeTheme(1, false);
      this.theme = 1;
    };

    this.a11yChangeListenerAAA = () => {
      this.changeA11yLevel(PoThemeA11yEnum.AAA, false);
      this.a11yLevel = PoThemeA11yEnum.AAA;
    };

    this.a11yChangeListenerAA = () => {
      this.changeA11yLevel(PoThemeA11yEnum.AA, false);
      this.a11yLevel = PoThemeA11yEnum.AA;
    };

    window.addEventListener('po-a11y-AA', this.a11yChangeListenerAA);
    window.addEventListener('po-a11y-AAA', this.a11yChangeListenerAAA);
    window.addEventListener('po-theme-default', this.themeChangeListenerDefault);
    window.addEventListener('po-theme-dark', this.themeChangeListenerDark);
  }

  ngOnDestroy(): void {
    window.removeEventListener('po-theme-default', this.themeChangeListenerDefault);
    window.removeEventListener('po-theme-dark', this.themeChangeListenerDark);

    window.removeEventListener('po-a11y-AA', this.a11yChangeListenerAA);
    window.removeEventListener('po-a11y-AAA', this.a11yChangeListenerAAA);
  }

  changeA11yLevel(value: PoThemeA11yEnum, dispatchEvent = true) {
    this.poTheme.setCurrentThemeA11y(value);
    value === 'AA'
      ? localStorage.setItem('po-ui-a11y', 'po-a11y-AA')
      : localStorage.setItem('po-ui-a11y', 'po-a11y-AAA');

    if (value === PoThemeA11yEnum.AA) {
      this.poTheme.setA11yDefaultSizeSmall(true);
    }

    if (dispatchEvent) {
      window.dispatchEvent(new Event('po-sample-change-a11y'));
    }
  }

  changeTheme(value: number, dispatchEvent = true) {
    this.poTheme.setTheme(this.poThemeSample, value, this.a11yLevel);
    value === 1
      ? localStorage.setItem('po-ui-theme', 'po-theme-dark')
      : localStorage.setItem('po-ui-theme', 'po-theme-default');
    if (dispatchEvent) {
      window.dispatchEvent(new Event('po-sample-change-theme'));
    }

    if (this.a11yLevel === 'AA') {
      this.poTheme.setA11yDefaultSizeSmall(true);
    }
  }

  createReactiveForm() {
    this.reactiveForm = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(30)])],
      address: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])],
      number: ['', Validators.compose([Validators.required, Validators.min(1), Validators.max(99999)])],
      email: ['', Validators.required],
      website: ['', Validators.required]
    });
  }

  saveForm() {
    this.reactiveFormModal.open();
  }
}
`),n()()()()(),t(21,"div",10),i(22,"sample-po-theme-labs"),n(),i(23,"hr")),a&2&&(l(5),I("po-icon "+o.sampleCodeButtonIcon),l(),j(" ",o.sampleCodeButtonLabel,""),l(),d("ngClass",W(4,Ce,o.hideSampleCodeTabs)))},dependencies:[U,Ee,P,D,be],encapsulation:2})}return r})();var xe=(()=>{class r{static \u0275fac=function(a){return new(a||r)};static \u0275cmp=S({type:r,selectors:[["sample-po-theme-doc"]],standalone:!1,decls:1019,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/colors-customization"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-method-table"],[1,"docs-api-properties-row"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-property-description"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-name-cell"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","PoThemeColorAction"],[1,"language-javascript"],["pan","",1,"docs-api-property-type","poThemeColorBrand"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","PoThemeColorNeutral"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","{","'70'?:","string;","'80'?:","string;","'90'?:","string;","'95'?:","string;","}"],["pan","",1,"docs-api-property-type","{","'00'?:","string;","'05'?:","string;","'10'?:","string;","'20'?:","string;","'30'?:","string;","}"],["pan","",1,"docs-api-property-type","{","'40'?:","string;","'60'?:","string;","}"],["pan","",1,"docs-api-property-type","PoThemeColor"],["pan","",1,"docs-api-property-type","DynamicProperties"],["pan","",1,"docs-api-property-type","PoThemeTypeEnum"],["pan","",1,"docs-api-property-type","PoThemeActive"],["pan","",1,"docs-api-property-type","PoThemeType"],["pan","",1,"docs-api-property-type","Array<PoThemeType>"]],template:function(a,o){a&1&&(t(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoThemeModule } from '@po-ui/ng-components';"),n()(),t(4,"div",2)(5,"p"),e(6,"M\xF3dulo respons\xE1vel por fornecer servi\xE7os relacionados ao tema PO."),n()(),t(7,"h3",3),e(8,"Services"),n(),t(9,"h4",4)(10,"code",5),e(11,"PoThemeService"),n()(),t(12,"div",2)(13,"p"),e(14,"O "),t(15,"code"),e(16,"PoThemeService"),n(),e(17," possibilita a personaliza\xE7\xE3o das cores do tema padr\xE3o do "),t(18,"code"),e(19,"PO-UI"),n(),e(20,", permitindo a altera\xE7\xE3o dos valores das vari\xE1veis de estilo usadas no CSS padr\xE3o."),n(),t(21,"blockquote")(22,"p"),e(23,"Para saber mais sobre como customizar as cores do tema padr\xE3o verifique o item "),t(24,"a",6),e(25,"Customizando cores do tema padr\xE3o"),n(),e(26," na aba "),t(27,"code"),e(28,"Guias"),n(),e(29,"."),n()(),t(30,"blockquote")(31,"p"),e(32,"Obs.: N\xE3o est\xE1 documentado aqui e n\xE3o indicamos a customiza\xE7\xE3o das cores de 'feedback' por motivos de acessibilidade e usabilidade."),n()()(),t(33,"h3",7),e(34,"M\xE9todos"),n(),t(35,"table",8)(36,"tr",9)(37,"th",10)(38,"div",11)(39,"h4")(40,"span",12),e(41," setTheme "),n()()()()(),t(42,"tr",13)(43,"td",13)(44,"p"),e(45,"Aplica um tema ao componente de acordo com o tipo de tema e o n\xEDvel de acessibilidade especificados."),n(),t(46,"p"),e(47,"Este m\xE9todo configura o tema do componente com base no objeto "),t(48,"code"),e(49,"themeConfig"),n(),e(50," fornecido, no "),t(51,"code"),e(52,"themeType"),n(),e(53," e no "),t(54,"code"),e(55,"a11yLevel"),n(),e(56,`.
Al\xE9m disso, ele pode opcionalmente salvar a prefer\xEAncia de tema no localStorage, se solicitado.`),n()()()(),t(57,"h5")(58,"b"),e(59,"Par\xE2metros"),n()(),t(60,"table",14)(61,"tr",15)(62,"th",16),e(63,"Nome"),n(),t(64,"th",16),e(65,"Tipo"),n(),t(66,"th",16),e(67,"Descri\xE7\xE3o"),n()(),t(68,"tr",9)(69,"td",17),e(70," themeConfig"),n(),t(71,"td",18)(72,"code",19),e(73," PoTheme "),n()(),t(74,"td",13)(75,"p"),e(76,"Configura\xE7\xE3o de tema a ser aplicada ao componente."),n()()(),t(77,"tr",9)(78,"td",17),e(79," themeType"),n(),t(80,"td",18)(81,"code",19),e(82," PoThemeTypeEnum "),n()(),t(83,"td",13)(84,"p"),e(85,"(Opcional) Tipo de tema, podendo ser 'light' (claro) ou 'dark' (escuro). O tema claro \xE9 o padr\xE3o."),n()()(),t(86,"tr",9)(87,"td",17),e(88," a11yLevel"),n(),t(89,"td",18)(90,"code",19),e(91," PoThemeA11yEnum "),n()(),t(92,"td",13)(93,"p"),e(94,"(Opcional) N\xEDvel de acessibilidade dos componentes, podendo ser AA ou AAA. Padr\xE3o \xE9 AAA."),n()()(),t(95,"tr",9)(96,"td",17),e(97," persistPreference"),n(),t(98,"td",18)(99,"code",19),e(100," boolean "),n()(),t(101,"td",13)(102,"p"),e(103,"(Opcional) Define se a prefer\xEAncia de tema deve ser salva no localStorage para persist\xEAncia. "),t(104,"code"),e(105,"true"),n(),e(106," para salvar, "),t(107,"code"),e(108,"false"),n(),e(109," para n\xE3o salvar."),n()()()(),i(110,"br"),t(111,"table",8)(112,"tr",9)(113,"th",10)(114,"div",11)(115,"h4")(116,"span",12),e(117," getA11yLevel "),n()()()()(),t(118,"tr",13)(119,"td",13)(120,"p"),e(121,`Retorna o n\xEDvel de acessibilidade configurado no tema.
Se n\xE3o estiver configurado, retorna `),t(122,"code"),e(123,"AAA"),n(),e(124," como padr\xE3o."),n()()()(),t(125,"h5")(126,"b"),e(127,"Retorno"),n()(),t(128,"table",14)(129,"tr",15)(130,"th",16),e(131,"Tipo"),n(),t(132,"th",16),e(133,"Descri\xE7\xE3o"),n()(),t(134,"tr",9)(135,"td",18)(136,"code",19),e(137,"PoThemeA11yEnum"),n()(),t(138,"td",13)(139,"p"),e(140,"O n\xEDvel de acessibilidade, que pode ser "),t(141,"code"),e(142,"AA"),n(),e(143," ou "),t(144,"code"),e(145,"AAA"),n(),e(146,"."),n()()()(),i(147,"br"),t(148,"table",8)(149,"tr",9)(150,"th",10)(151,"div",11)(152,"h4")(153,"span",12),e(154," setA11yDefaultSizeSmall "),n()()()()(),t(155,"tr",13)(156,"td",13)(157,"p"),e(158,"Define o tamanho "),t(159,"code"),e(160,"small"),n(),e(161,` como padr\xE3o para componentes de formul\xE1rio que n\xE3o possuem um tamanho definido.
Essa configura\xE7\xE3o \xE9 aplicada globalmente apenas quando o n\xEDvel de acessibilidade for `),t(162,"code"),e(163,"AA"),n(),e(164,`.
Caso contr\xE1rio, o tamanho padr\xE3o ser\xE1 `),t(165,"code"),e(166,"medium"),n(),e(167,"."),n()()()(),t(168,"h5")(169,"b"),e(170,"Par\xE2metros"),n()(),t(171,"table",14)(172,"tr",15)(173,"th",16),e(174,"Nome"),n(),t(175,"th",16),e(176,"Tipo"),n(),t(177,"th",16),e(178,"Descri\xE7\xE3o"),n()(),t(179,"tr",9)(180,"td",17),e(181," enable"),n(),t(182,"td",18)(183,"code",19),e(184," boolean "),n()(),t(185,"td",13)(186,"p"),e(187,"Habilita ou desabilita o tamanho "),t(188,"code"),e(189,"small"),n(),e(190," globalmente."),n()()()(),i(191,"br"),t(192,"table",8)(193,"tr",9)(194,"th",10)(195,"div",11)(196,"h4")(197,"span",12),e(198," persistThemeActive "),n()()()()(),t(199,"tr",13)(200,"td",13)(201,"p"),e(202,"Persiste e define o tema do aplicativo com base nos dados armazenados."),n(),t(203,"p"),e(204,"Este m\xE9todo recupera os dados do tema armazenados e os aplica ao aplicativo."),n()()()(),t(205,"h5")(206,"b"),e(207,"Retorno"),n()(),t(208,"table",14)(209,"tr",15)(210,"th",16),e(211,"Tipo"),n(),t(212,"th",16),e(213,"Descri\xE7\xE3o"),n()(),t(214,"tr",9)(215,"td",18)(216,"code",19),e(217,"PoTheme"),n()(),t(218,"td",13)(219,"p"),e(220,"Recupera o tema armazenado."),n()()()(),i(221,"br"),t(222,"table",8)(223,"tr",9)(224,"th",10)(225,"div",11)(226,"h4")(227,"span",12),e(228," changeCurrentThemeType "),n()()()()(),t(229,"tr",13)(230,"td",13)(231,"p"),e(232,"Altera o tipo do tema armazenado e aplica os novos estilos ao documento."),n(),t(233,"p"),e(234,"Este m\xE9todo altera o tipo do tema armazenado ativo (light/dark)"),n()()()(),t(235,"h5")(236,"b"),e(237,"Par\xE2metros"),n()(),t(238,"table",14)(239,"tr",15)(240,"th",16),e(241,"Nome"),n(),t(242,"th",16),e(243,"Tipo"),n(),t(244,"th",16),e(245,"Descri\xE7\xE3o"),n()(),t(246,"tr",9)(247,"td",17),e(248," themeType"),n(),t(249,"td",18)(250,"code",19),e(251," PoThemeTypeEnum "),n()(),t(252,"td",13)(253,"p"),e(254,"O tipo de tema a ser aplicado, light ou dark."),n()()()(),i(255,"br"),t(256,"table",8)(257,"tr",9)(258,"th",10)(259,"div",11)(260,"h4")(261,"span",12),e(262," cleanThemeActive "),n()()()()(),t(263,"tr",13)(264,"td",13)(265,"p"),e(266,`M\xE9todo remove o tema armazenado e limpa todos os estilos de tema
aplicados ao documento.`),n()()()(),t(267,"h5")(268,"b"),e(269,"Par\xE2metros"),n()(),t(270,"table",14)(271,"tr",15)(272,"th",16),e(273,"Nome"),n(),t(274,"th",16),e(275,"Tipo"),n(),t(276,"th",16),e(277,"Descri\xE7\xE3o"),n()(),t(278,"tr",9)(279,"td",17),e(280," persistPreference"),n(),t(281,"td",18)(282,"code",19),e(283," boolean "),n()(),t(284,"td",13)(285,"p"),e(286,"(Opcional) Define se a prefer\xEAncia de tema n\xE3o deve ser mantida no localStorage para persist\xEAncia. "),t(287,"code"),e(288,"true"),n(),e(289," para remover, "),t(290,"code"),e(291,"false"),n(),e(292," para manter."),n()()()(),i(293,"br"),t(294,"table",8)(295,"tr",9)(296,"th",10)(297,"div",11)(298,"h4")(299,"span",12),e(300," getThemeActive "),n()()()()(),t(301,"tr",13)(302,"td",13)(303,"p"),e(304,"Retorna o tema ativo como um observable. Este m\xE9todo funcionar\xE1 apenas se o tema estiver armazenado no "),t(305,"code"),e(306,"localStorage"),n(),e(307,"."),n()()()(),t(308,"h5")(309,"b"),e(310,"Retorno"),n()(),t(311,"table",14)(312,"tr",15)(313,"th",16),e(314,"Tipo"),n(),t(315,"th",16),e(316,"Descri\xE7\xE3o"),n()(),t(317,"tr",9)(318,"td",18)(319,"code",19),e(320,"PoTheme"),n()(),t(321,"td",13)(322,"p"),e(323,"Tema ativo."),n()()()(),i(324,"br"),t(325,"table",8)(326,"tr",9)(327,"th",10)(328,"div",11)(329,"h4")(330,"span",12),e(331," setDefaultTheme "),n()()()()(),t(332,"tr",13)(333,"td",13)(334,"p"),e(335,'Define o tema atual como o tema "PoUI Padr\xE3o".'),n()()()(),t(336,"h5")(337,"b"),e(338,"Par\xE2metros"),n()(),t(339,"table",14)(340,"tr",15)(341,"th",16),e(342,"Nome"),n(),t(343,"th",16),e(344,"Tipo"),n(),t(345,"th",16),e(346,"Descri\xE7\xE3o"),n()(),t(347,"tr",9)(348,"td",17),e(349," type"),n(),t(350,"td",18)(351,"code",19),e(352," PoThemeTypeEnum "),n()(),t(353,"td",13)(354,"p"),e(355,"O tipo de Tema a ser aplicado, light / dark."),n()()()(),i(356,"br"),t(357,"table",8)(358,"tr",9)(359,"th",10)(360,"div",11)(361,"h4")(362,"span",12),e(363," setThemeType "),n()()()()(),t(364,"tr",13)(365,"td",13)(366,"p"),e(367,"Define o tipo (light/dark) quando um tema est\xE1 sendo aplicado."),n()()()(),t(368,"h5")(369,"b"),e(370,"Par\xE2metros"),n()(),t(371,"table",14)(372,"tr",15)(373,"th",16),e(374,"Nome"),n(),t(375,"th",16),e(376,"Tipo"),n(),t(377,"th",16),e(378,"Descri\xE7\xE3o"),n()(),t(379,"tr",9)(380,"td",17),e(381," theme"),n(),t(382,"td",18)(383,"code",19),e(384," PoTheme "),n()(),t(385,"td",13)(386,"p"),e(387,"Objeto contendo as defini\xE7\xF5es de tema a serem aplicadas no componente."),n()()(),t(388,"tr",9)(389,"td",17),e(390," themeType"),n(),t(391,"td",18)(392,"code",19),e(393," PoThemeTypeEnum "),n()(),t(394,"td",13)(395,"p"),e(396,"(Opcional) Tipo de tema a ser aplicado, podendo ser 'light' (claro) ou 'dark' (escuro). Por padr\xE3o, o tema claro \xE9 aplicado."),n()()()(),i(397,"br"),t(398,"table",8)(399,"tr",9)(400,"th",10)(401,"div",11)(402,"h4")(403,"span",12),e(404," setCurrentThemeType "),n()()()()(),t(405,"tr",13)(406,"td",13)(407,"p"),e(408,"Define o tipo (light/dark) para um tema j\xE1 ativo."),n()()()(),t(409,"h5")(410,"b"),e(411,"Par\xE2metros"),n()(),t(412,"table",14)(413,"tr",15)(414,"th",16),e(415,"Nome"),n(),t(416,"th",16),e(417,"Tipo"),n(),t(418,"th",16),e(419,"Descri\xE7\xE3o"),n()(),t(420,"tr",9)(421,"td",17),e(422," themeType"),n(),t(423,"td",18)(424,"code",19),e(425," PoThemeTypeEnum "),n()(),t(426,"td",13)(427,"p"),e(428,"(Opcional) Tipo de tema a ser aplicado, podendo ser 'light' (claro) ou 'dark' (escuro). Por padr\xE3o, o tema claro \xE9 aplicado."),n()()()(),i(429,"br"),t(430,"table",8)(431,"tr",9)(432,"th",10)(433,"div",11)(434,"h4")(435,"span",12),e(436," setThemeA11y "),n()()()()(),t(437,"tr",13)(438,"td",13)(439,"p"),e(440,"Define o n\xEDvel de acessibilidade quando um tema est\xE1 sendo aplicado."),n()()()(),t(441,"h5")(442,"b"),e(443,"Par\xE2metros"),n()(),t(444,"table",14)(445,"tr",15)(446,"th",16),e(447,"Nome"),n(),t(448,"th",16),e(449,"Tipo"),n(),t(450,"th",16),e(451,"Descri\xE7\xE3o"),n()(),t(452,"tr",9)(453,"td",17),e(454," theme"),n(),t(455,"td",18)(456,"code",19),e(457," PoTheme "),n()(),t(458,"td",13)(459,"p"),e(460,"Objeto contendo as defini\xE7\xF5es de tema a serem aplicadas no componente."),n()()(),t(461,"tr",9)(462,"td",17),e(463," a11y"),n(),t(464,"td",18)(465,"code",19),e(466," PoThemeA11yEnum "),n()(),t(467,"td",13)(468,"p"),e(469,`(Opcional) N\xEDvel de acessibilidade dos componentes podendo ser
AA ou AAA. Por padr\xE3o a acessibilidade \xE9 AAA.`),n()()()(),i(470,"br"),t(471,"table",8)(472,"tr",9)(473,"th",10)(474,"div",11)(475,"h4")(476,"span",12),e(477," setCurrentThemeA11y "),n()()()()(),t(478,"tr",13)(479,"td",13)(480,"p"),e(481,"Define o n\xEDvel de acessibilidade para um tema j\xE1 ativo."),n()()()(),t(482,"h5")(483,"b"),e(484,"Par\xE2metros"),n()(),t(485,"table",14)(486,"tr",15)(487,"th",16),e(488,"Nome"),n(),t(489,"th",16),e(490,"Tipo"),n(),t(491,"th",16),e(492,"Descri\xE7\xE3o"),n()(),t(493,"tr",9)(494,"td",17),e(495," a11y"),n(),t(496,"td",18)(497,"code",19),e(498," PoThemeA11yEnum "),n()(),t(499,"td",13)(500,"p"),e(501,`(Opcional) N\xEDvel de acessibilidade dos componentes podendo ser
AA ou AAA. Por padr\xE3o a acessibilidade \xE9 AAA.`),n()()()(),i(502,"br"),t(503,"h3"),e(504,"Interfaces"),n(),t(505,"h4",20)(506,"code",5),e(507,"PoThemeColor"),n()(),t(508,"div",2)(509,"p"),e(510,"Interface para representar as cores do tema."),n()(),t(511,"h4",7),e(512,"Propriedades"),n(),t(513,"table",14)(514,"tr",15)(515,"th",16),e(516,"Nome"),n(),t(517,"th",16),e(518,"Tipo"),n(),t(519,"th",16),e(520,"Descri\xE7\xE3o"),n()(),t(521,"tr",9)(522,"td",17)(523,"div",11)(524,"span",12),e(525," action"),i(526,"br"),n()()(),t(527,"td",18)(528,"code",21),e(529,"PoThemeColorAction"),n()(),t(530,"td",13)(531,"em")(532,"strong"),e(533,"(opcional)"),n()(),t(534,"p"),e(535,"Cores da Action a serem aplicadas."),n(),t(536,"p"),e(537,"Exemplo de uso:"),n(),t(538,"pre")(539,"code",22),e(540,`PoThemeColor.action = {
 default: 'var(--color-brand-01-base)',
 hover: 'var(--color-brand-01-dark)',
 pressed: 'var(--color-brand-01-darker)',
 disabled: 'var(--color-neutral-light-30)',
 focus: 'var(--color-brand-01-darkest)'
}
`),n()()()(),t(541,"tr",9)(542,"td",17)(543,"div",11)(544,"span",12),e(545," brand"),i(546,"br"),n()()(),t(547,"td",18)(548,"code",23),e(549,"poThemeColorBrand"),n()(),t(550,"td",13)(551,"em")(552,"strong"),e(553,"(opcional)"),n()(),t(554,"p"),e(555,"Cores da Brand a serem aplicadas."),n(),t(556,"p"),e(557,"Exemplo de uso:"),n(),t(558,"pre")(559,"code",24),e(560,`PoThemeColor.brand = {
 01: PoThemeColorTone,
 02: PoThemeColorTone,
 03: PoThemeColorTone
}
`),n()()()(),t(561,"tr",9)(562,"td",17)(563,"div",11)(564,"span",12),e(565," neutral"),i(566,"br"),n()()(),t(567,"td",18)(568,"code",25),e(569,"PoThemeColorNeutral"),n()(),t(570,"td",13)(571,"em")(572,"strong"),e(573,"(opcional)"),n()(),t(574,"p"),e(575,"Cores Neutrals a serem aplicadas."),n(),t(576,"p"),e(577,"Exemplo de uso:"),n(),t(578,"pre")(579,"code",24),e(580,`PoThemeColor.neutral = {
 light: { '00': string, '05': string, '10': string, '20': string, '30': string },
 mid: { '40': string, '60': string },
 dark: { '70': string, '80': string, '90': string, '95': string },
}
`),n()()()()(),t(581,"h4",20)(582,"code",5),e(583,"PoThemeColorAction"),n()(),t(584,"div",2)(585,"p"),e(586,"Interface para as cores de a\xE7\xE3o do tema."),n()(),t(587,"h4",7),e(588,"Propriedades"),n(),t(589,"table",14)(590,"tr",15)(591,"th",16),e(592,"Nome"),n(),t(593,"th",16),e(594,"Tipo"),n(),t(595,"th",16),e(596,"Descri\xE7\xE3o"),n()(),t(597,"tr",9)(598,"td",17)(599,"div",11)(600,"span",12),e(601," default"),i(602,"br"),n()()(),t(603,"td",18)(604,"code",26),e(605,"string"),n()(),t(606,"td",13)(607,"em")(608,"strong"),e(609,"(opcional)"),n()(),t(610,"p"),e(611,"Cores da Action 'Default'."),n(),t(612,"p"),e(613,"Exemplo de uso:"),n(),t(614,"pre")(615,"code",24),e(616,`PoThemeColor.action = {
 default: 'var(--color-brand-01-base)',
}
`),n()()()(),t(617,"tr",9)(618,"td",17)(619,"div",11)(620,"span",12),e(621," disabled"),i(622,"br"),n()()(),t(623,"td",18)(624,"code",26),e(625,"string"),n()(),t(626,"td",13)(627,"em")(628,"strong"),e(629,"(opcional)"),n()(),t(630,"p"),e(631,"Cores da Action de 'disabled'."),n(),t(632,"p"),e(633,"Exemplo de uso:"),n(),t(634,"pre")(635,"code",24),e(636,`PoThemeColor.action = {
 disabled: 'var(--color-neutral-light-30)',
}
`),n()()()(),t(637,"tr",9)(638,"td",17)(639,"div",11)(640,"span",12),e(641," focus"),i(642,"br"),n()()(),t(643,"td",18)(644,"code",26),e(645,"string"),n()(),t(646,"td",13)(647,"em")(648,"strong"),e(649,"(opcional)"),n()(),t(650,"p"),e(651,"Cores da Action para 'focus'."),n(),t(652,"p"),e(653,"Exemplo de uso:"),n(),t(654,"pre")(655,"code",24),e(656,`PoThemeColor.action = {
 focus: 'var(--color-brand-01-darkest)'
}
`),n()()()(),t(657,"tr",9)(658,"td",17)(659,"div",11)(660,"span",12),e(661," hover"),i(662,"br"),n()()(),t(663,"td",18)(664,"code",26),e(665,"string"),n()(),t(666,"td",13)(667,"em")(668,"strong"),e(669,"(opcional)"),n()(),t(670,"p"),e(671,"Cores da Action para 'hover'."),n(),t(672,"p"),e(673,"Exemplo de uso:"),n(),t(674,"pre")(675,"code",24),e(676,`PoThemeColor.action = {
 hover: 'var(--color-brand-01-dark)',
}
`),n()()()(),t(677,"tr",9)(678,"td",17)(679,"div",11)(680,"span",12),e(681," pressed"),i(682,"br"),n()()(),t(683,"td",18)(684,"code",26),e(685,"string"),n()(),t(686,"td",13)(687,"em")(688,"strong"),e(689,"(opcional)"),n()(),t(690,"p"),e(691,"Cores da Action para 'pressed'."),n(),t(692,"p"),e(693,"Exemplo de uso:"),n(),t(694,"pre")(695,"code",24),e(696,`PoThemeColor.action = {
 pressed: 'var(--color-brand-01-darker)',
}
`),n()()()()(),t(697,"h4",20)(698,"code",5),e(699,"PoThemeColorNeutral"),n()(),t(700,"div",2)(701,"p"),e(702,"Interface para as cores neutras do tema."),n()(),t(703,"h4",7),e(704,"Propriedades"),n(),t(705,"table",14)(706,"tr",15)(707,"th",16),e(708,"Nome"),n(),t(709,"th",16),e(710,"Tipo"),n(),t(711,"th",16),e(712,"Descri\xE7\xE3o"),n()(),t(713,"tr",9)(714,"td",17)(715,"div",11)(716,"span",12),e(717," dark"),i(718,"br"),n()()(),t(719,"td",18)(720,"code",27),e(721,`{ '70'?: string; '80'?: string; '90'?: string; '95'?: string;
}`),n()(),t(722,"td",13)(723,"em")(724,"strong"),e(725,"(opcional)"),n()(),t(726,"p"),e(727,"Cores Neutrals do tipo 'dark'."),n(),t(728,"p"),e(729,"Exemplo de uso:"),n(),t(730,"pre")(731,"code",24),e(732,`PoThemeColor.neutral.dark = {
 '70': '#4a5c60',
 '80': '#2c3739',
 '90': '#1d2426',
 '95': '#0b0e0e',
}
`),n()()()(),t(733,"tr",9)(734,"td",17)(735,"div",11)(736,"span",12),e(737," light"),i(738,"br"),n()()(),t(739,"td",18)(740,"code",28),e(741,`{ '00'?: string; '05'?: string; '10'?: string; '20'?: string; '30'?: string;
}`),n()(),t(742,"td",13)(743,"em")(744,"strong"),e(745,"(opcional)"),n()(),t(746,"p"),e(747,"Cores Neutrals do tipo 'light'."),n(),t(748,"p"),e(749,"Exemplo de uso:"),n(),t(750,"pre")(751,"code",24),e(752,`PoThemeColor.neutral.light = {
 '00': '#ffffff',
 '05': '#fbfbfb',
 '10': '#eceeee',
 '20': '#dadedf',
 '30': '#b6bdbf'
}
`),n()()()(),t(753,"tr",9)(754,"td",17)(755,"div",11)(756,"span",12),e(757," mid"),i(758,"br"),n()()(),t(759,"td",18)(760,"code",29),e(761,`{ '40'?: string; '60'?: string;
}`),n()(),t(762,"td",13)(763,"em")(764,"strong"),e(765,"(opcional)"),n()(),t(766,"p"),e(767,"Cores Neutrals do tipo 'mid'."),n(),t(768,"p"),e(769,"Exemplo de uso:"),n(),t(770,"pre")(771,"code",24),e(772,`PoThemeColor.neutral.mid = {
 '40': '#9da7a9',
 '60': '#6e7c7f',
}
`),n()()()()(),t(773,"h4",20)(774,"code",5),e(775,"PoThemeTokens"),n()(),t(776,"div",2)(777,"p"),e(778,"Interface para o tema da aplica\xE7\xE3o."),n()(),t(779,"h4",20)(780,"code",5),e(781,"PoThemeToken"),n()(),t(782,"div",2)(783,"p"),e(784,"Interface para os tokens do Tema."),n()(),t(785,"h4",7),e(786,"Propriedades"),n(),t(787,"table",14)(788,"tr",15)(789,"th",16),e(790,"Nome"),n(),t(791,"th",16),e(792,"Tipo"),n(),t(793,"th",16),e(794,"Descri\xE7\xE3o"),n()(),t(795,"tr",9)(796,"td",17)(797,"div",11)(798,"span",12),e(799," color"),i(800,"br"),n()()(),t(801,"td",18)(802,"code",30),e(803,"PoThemeColor"),n()(),t(804,"td",13)(805,"em")(806,"strong"),e(807,"(opcional)"),n()(),t(808,"p"),e(809,"Tokens do tipo 'color'"),n()()(),t(810,"tr",9)(811,"td",17)(812,"div",11)(813,"span",12),e(814," onRoot"),i(815,"br"),n()()(),t(816,"td",18)(817,"code",31),e(818,"DynamicProperties"),n()(),t(819,"td",13)(820,"em")(821,"strong"),e(822,"(opcional)"),n()(),t(823,"p"),e(824,`Tokens do tipo 'onRoot'
Esta propriedade adicionar\xE1 todos os tokens passados e adicionado direto no `),t(825,"code"),e(826,":root"),n()(),t(827,"p"),e(828,"Exemplo de uso:"),n(),t(829,"pre")(830,"code",24),e(831,`onRoot: {
  '--color-page-background-color-page': '#121212',
  '--color-toolbar-color-badge-text': 'var(--color-neutral-dark-95)',
},
`),n()()()(),t(832,"tr",9)(833,"td",17)(834,"div",11)(835,"span",12),e(836," perComponent"),i(837,"br"),n()()(),t(838,"td",18)(839,"code",31),e(840,"DynamicProperties"),n()(),t(841,"td",13)(842,"em")(843,"strong"),e(844,"(opcional)"),n()(),t(845,"p"),e(846,"Tokens do tipo 'perComponent'"),n(),t(847,"p"),e(848,"Exemplo de uso:"),n(),t(849,"pre")(850,"code",24),e(851,`perComponent: {
  'po-badge': {
    '--color': 'var(--color-neutral-dark-95)',
  },
  'po-container': {
    '--background': '#121212',
  },
},
`),n()()()()(),t(852,"h4",20)(853,"code",5),e(854,"PoTheme"),n()(),t(855,"div",2)(856,"p"),e(857,"Interface para o m\xE9todo "),t(858,"code"),e(859,"setTheme()"),n(),e(860,"."),n()(),t(861,"h4",7),e(862,"Propriedades"),n(),t(863,"table",14)(864,"tr",15)(865,"th",16),e(866,"Nome"),n(),t(867,"th",16),e(868,"Tipo"),n(),t(869,"th",16),e(870,"Descri\xE7\xE3o"),n()(),t(871,"tr",9)(872,"td",17)(873,"div",11)(874,"span",12),e(875," active"),i(876,"br"),n()()(),t(877,"td",18)(878,"code",32),e(879,"PoThemeTypeEnum "),n(),t(880,"code",33),e(881," PoThemeActive"),n()(),t(882,"td",13)(883,"em")(884,"strong"),e(885,"(opcional)"),n()(),t(886,"p"),e(887,"Tipo e n\xEDvel de acessibilidade de tema ativo"),n()()(),t(888,"tr",9)(889,"td",17)(890,"div",11)(891,"span",12),e(892," name"),i(893,"br"),n()()(),t(894,"td",18)(895,"code",26),e(896,"string"),n()(),t(897,"td",13)(898,"p"),e(899,`Nome para o tema:
Ex.: default, totvs, sunset...`),n()()(),t(900,"tr",9)(901,"td",17)(902,"div",11)(903,"span",12),e(904," type"),i(905,"br"),n()()(),t(906,"td",18)(907,"code",34),e(908,"PoThemeType "),n(),t(909,"code",35),e(910," Array<PoThemeType>"),n()(),t(911,"td",13)(912,"p"),e(913,"Tipo de tema:"),n(),t(914,"ul")(915,"li"),e(916,"light"),n(),t(917,"li"),e(918,"dark"),n()()()()(),t(919,"h3"),e(920,"Enums"),n(),t(921,"h4",4)(922,"code",5),e(923,"PoThemeA11yEnum"),n()(),t(924,"div",2)(925,"p"),e(926,"Enum para configurar o n\xEDvel de acessibilidade dos componentes atrav\xE9s do servi\xE7o de tema."),n(),t(927,"pre")(928,"code"),e(929,`import { PoThemeA11yEnum } from '@po-ui/theme';

// Definindo o n\xEDvel de acessibilidade ao configurar as cores e o tipo do tema (light | dark)
themeService.setTheme(...theme, ...type, PoThemeA11yEnum.AA);

// Definindo o n\xEDvel de acessibilidade ao configurar apenas as cores do tema
themeService.setThemeA11y(...theme, PoThemeA11yEnum.AAA);

// Alterando o n\xEDvel de acessibilidade com as cores do tema j\xE1 definidas
themeService.setCurrentThemeA11y(PoThemeA11yEnum.AAA);
`),n()()(),t(930,"h4",7),e(931,"Propriedades"),n(),t(932,"table",14)(933,"tr",15)(934,"th",16),e(935,"Nome"),n(),t(936,"th",16),e(937,"Descri\xE7\xE3o"),n()(),t(938,"tr",9)(939,"td",17)(940,"div",11)(941,"span",12),e(942," AA"),i(943,"br"),n()()(),t(944,"td",13)(945,"p"),e(946,"N\xEDvel de acessibilidade AA."),n(),t(947,"ul")(948,"li"),e(949,"Define a espessura do "),t(950,"code"),e(951,"outline"),n(),e(952," para "),t(953,"strong"),e(954,"2px"),n(),e(955,"."),n(),t(956,"li"),e(957,"Disponibiliza o tamanho "),t(958,"code"),e(959,"small"),n(),e(960,` para componentes de formul\xE1rio (buttons, inputs, checkboxes, radios e switches)
conforme suas documenta\xE7\xF5es.`),n()()()(),t(961,"tr",9)(962,"td",17)(963,"div",11)(964,"span",12),e(965," AAA"),i(966,"br"),n()()(),t(967,"td",13)(968,"p"),e(969,"N\xEDvel de acessibilidade AAA."),n(),t(970,"ul")(971,"li"),e(972,"Define a espessura do "),t(973,"code"),e(974,"outline"),n(),e(975," para "),t(976,"strong"),e(977,"4px"),n(),e(978,"."),n(),t(979,"li"),e(980,"N\xE3o disponibiliza o tamanho "),t(981,"code"),e(982,"small"),n(),e(983," para componentes de formul\xE1rio."),n()()()()(),t(984,"h4",4)(985,"code",5),e(986,"PoThemeTypeEnum"),n()(),t(987,"div",2)(988,"p"),e(989,"Enum utilizado para configurar o tipo de tema suportado, \xE9 poss\xEDvel alternar entre os tipos definidos."),n(),t(990,"pre")(991,"code"),e(992,`import { PoThemeTypeEnum } from '@po-ui/theme';

// Definindo o tipo de tema como claro
themeService.setTheme(...theme, PoThemeTypeEnum.light);

// Definindo o tipo de tema como escuro
themeService.setTheme(...theme, PoThemeTypeEnum.dark);

// Alterando o tipo do tema para um tema j\xE1 aplicado
themeService.setCurrentThemeType(PoThemeTypeEnum.dark);
`),n()()(),t(993,"h4",7),e(994,"Propriedades"),n(),t(995,"table",14)(996,"tr",15)(997,"th",16),e(998,"Nome"),n(),t(999,"th",16),e(1e3,"Descri\xE7\xE3o"),n()(),t(1001,"tr",9)(1002,"td",17)(1003,"div",11)(1004,"span",12),e(1005," light"),i(1006,"br"),n()()(),t(1007,"td",13)(1008,"p"),e(1009,"Define o tema como claro."),n()()(),t(1010,"tr",9)(1011,"td",17)(1012,"div",11)(1013,"span",12),e(1014," dark"),i(1015,"br"),n()()(),t(1016,"td",13)(1017,"p"),e(1018,"Define o tema como escuro."),n()()()()())},encapsulation:2})}return r})();var fe=(()=>{class r{route;router;sub;hidePoWebSample=!0;samplesLength=1;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,a){this.route=m,this.router=a}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let a=m.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(a){return new(a||r)(b($),b(ee))};static \u0275cmp=S({type:r,selectors:[["ng-component"]],standalone:!1,decls:6,vars:4,consts:[["p-title"," Theme",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,o){a&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),E("p-click",function(){return o.changeTab("doc")}),i(3,"sample-po-theme-doc"),n(),t(4,"po-tab",3),E("p-click",function(){return o.changeTab("web")}),i(5,"sample-po-theme-labs-view"),n()()()),a&2&&(d("p-actions",o.actions),l(2),d("p-active",o.activeTab==="doc"),l(2),d("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"))},dependencies:[he,P,D,ge,xe],encapsulation:2})}return r})();var Le=[{path:"",component:fe}],Te=(()=>{class r{static \u0275fac=function(a){return new(a||r)};static \u0275mod=y({type:r});static \u0275inj=A({imports:[F.forChild(Le),F]})}return r})();var Xe=(()=>{class r{static \u0275fac=function(a){return new(a||r)};static \u0275mod=y({type:r});static \u0275inj=A({imports:[Se,Te]})}return r})();export{Xe as DocPoThemeModule};
