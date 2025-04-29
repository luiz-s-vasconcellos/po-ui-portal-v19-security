import{$ as T,$a as h,$d as b,Ca as B,Da as R,Ea as H,Ec as N,F as q,Fa as v,G as k,Ga as e,Ia as f,Na as A,Oa as U,Pa as x,Rd as X,T as d,U as E,Wb as _,Yb as K,Zb as V,_ as s,_d as S,ee as z,ha as p,ka as y,na as n,oa as t,pa as i,rd as C,ta as w,te as g,ua as c,ue as J,vc as M,x as D,y as P}from"./chunk-Y4SQKOF7.js";var ae=()=>({property:"name",required:!0,showRequired:!0}),re=o=>[o],W=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-dynamic-form-basic"]],standalone:!1,decls:1,vars:4,consts:[[3,"p-fields"]],template:function(a,l){a&1&&i(0,"po-dynamic-form",0),a&2&&p("p-fields",x(2,re,U(1,ae)))},dependencies:[C],encapsulation:2})}return o})();var me=o=>({"docs-sample-code-tabs":o}),Y=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-dynamic-form-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,l){a&1&&(i(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Dynamic Form Basic"),t(),n(4,"a",2),c("click",function(){return l.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-dynamic-form-basic/sample-po-dynamic-form-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-dynamic-form [p-fields]="[{ property: 'name', required: true, showRequired: true }]"> </po-dynamic-form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-dynamic-form-basic/sample-po-dynamic-form-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-dynamic-form-basic',
  templateUrl: './sample-po-dynamic-form-basic.component.html',
  standalone: false
})
export class SamplePoDynamicFormBasicComponent {}
`),t()()()()(),n(21,"div",10),i(22,"sample-po-dynamic-form-basic"),t(),i(23,"hr")),a&2&&(d(5),y("po-icon "+l.sampleCodeButtonIcon),d(),f(" ",l.sampleCodeButtonLabel,""),d(),p("ngClass",x(4,me,l.hideSampleCodeTabs)))},dependencies:[h,g,S,b,W],encapsulation:2})}return o})();var j=(()=>{class o{getCity(r){switch(r){case 1:return[{city:"Palho\xE7a",code:5},{city:"Lages",code:6},{city:"Balne\xE1rio Cambori\xFA",code:7},{city:"Brusque",code:8}];case 2:return[{city:"S\xE3o Paulo",code:9},{city:"Guarulhos",code:10},{city:"Campinas",code:11},{city:"S\xE3o Bernardo do Campo",code:12}];case 3:return[{city:"Rio de Janeiro",code:13},{city:"S\xE3o Gon\xE7alo",code:14},{city:"Duque de Caxias",code:15},{city:"Nova Igua\xE7u",code:16}];case 4:return[{city:"Belo Horizonte",code:17},{city:"Uberl\xE2ndia",code:18},{city:"Contagem",code:19},{city:"Juiz de Fora",code:20}]}return[]}getUserDocument(r){let a={property:"cpf",visible:!0},l={property:"cnpj",visible:!0};return{fields:[r.isJuridicPerson?l:a]}}static \u0275fac=function(a){return new(a||o)};static \u0275prov=D({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var Q=(()=>{class o{poNotification;registerService;person={};validateFields=["state"];fields=[{property:"name",divider:"PERSONAL DATA",required:!0,minLength:4,maxLength:50,gridColumns:6,gridSmColumns:12,order:1,placeholder:"Type your name"},{property:"birthday",label:"Date of birth",type:"date",format:"mm/dd/yyyy",gridColumns:6,gridSmColumns:12,maxValue:"2010-01-01",errorMessage:"The date must be before the year 2010.",order:-1},{property:"cpf",label:"CPF",mask:"999.999.999-99",gridColumns:6,gridSmColumns:12,visible:!1},{property:"cnpj",label:"CNPJ",mask:"99.999.999/9999-99",gridColumns:6,gridSmColumns:12,visible:!1},{property:"genre",gridColumns:6,gridSmColumns:12,options:["Male","Female","Other"],order:2},{property:"shortDescription",label:"Short Description",gridColumns:12,gridSmColumns:12,rows:5,placeholder:"Type short description"},{property:"secretKey",label:"Secret Key",gridColumns:6,secret:!0,pattern:"[a-zA]{5}[Z0-9]{3}",errorMessage:"At least 5 alphabetic and 3 numeric characters are required.",placeholder:"Type your password"},{property:"rememberSecretKey",label:"Remember Secret Key",gridColumns:3,type:"boolean",booleanTrue:"yes",booleanFalse:"no",formatModel:!0},{property:"status",label:"Status",gridColumns:3,type:"boolean",booleanTrue:"Active",booleanFalse:"Inactive",formatModel:!0},{property:"email",divider:"CONTACTS",gridColumns:6,icon:"an an-envelope"},{property:"phone",mask:"(99) 99999-9999",gridColumns:6},{property:"address",gridColumns:6},{property:"addressNumber",label:"Address number",type:"number",gridColumns:6,maxValue:1e4,errorMessage:"Invalid number."},{property:"state",gridColumns:6,options:[{state:"Santa Catarina",code:1},{state:"S\xE3o Paulo",code:2},{state:"Rio de Janeiro",code:3},{state:"Minas Gerais",code:4}],fieldLabel:"state",fieldValue:"code"},{property:"city",disabled:!0,gridColumns:6,fieldValue:"code",fieldLabel:"city"},{property:"vacation",type:"date",divider:"Work data",range:!0,gridColumns:5,gridSmColumns:12},{property:"entryTime",label:"Entry time",type:"time",gridColumns:2,gridSmColumns:6},{property:"exitTime",label:"Exit time",type:"time",gridColumns:2,gridSmColumns:6},{property:"wage",type:"currency",gridColumns:3,gridSmColumns:12,decimalsLength:2,thousandMaxlength:7,icon:"an an-currency-circle-dollar"},{property:"hobbies",divider:"MORE INFO",gridColumns:6,gridSmColumns:12,optional:!0,options:["Soccer","Basketball","Bike","Yoga","Travel","Run"],optionsMulti:!0},{property:"favoriteHero",gridColumns:6,gridSmColumns:12,label:"Favorite hero",optional:!0,searchService:"https://po-sample-api.onrender.com/v1/heroes",columns:[{property:"nickname",label:"Hero"},{property:"label",label:"Name"}],format:["id","nickname"],fieldLabel:"nickname",fieldValue:"email"},{property:"partner",gridColumns:6,gridSmColumns:12,optionsService:"https://po-sample-api.onrender.com/v1/people",fieldLabel:"name",fieldValue:"id",optional:!0},{property:"videogame",gridColumns:6,gridSmColumns:12,label:"Video game console",optional:!0,fieldValue:"code",fieldLabel:"console",options:[{console:"Nintendo Wii U",code:"NWU"},{console:"Playstation 4",code:"PS4"},{console:"Xbox One",code:"XONE"},{console:"Nintendo Switch",code:"NSW"},{console:"Playstation 5",code:"PS5"},{console:"Xbox Series S|X",code:"XSSX"}],optionsMulti:!0},{property:"agree",gridColumns:12,label:"Do you agree?",type:"boolean",forceBooleanComponentType:z.checkbox},{property:"image",type:"upload",gridColumns:12,gridSmColumns:12,label:"Upload your background",optional:!0,url:"https://po-sample-api.onrender.com/v1/uploads/addFile"}];constructor(r,a){this.poNotification=r,this.registerService=a}ngOnInit(){this.person={name:"Tony Stark",birthday:"1970-05-29",isJuridicPerson:!1,videogame:["PS4","NSW","XSSX"],rememberSecretKey:"no",status:"active"}}onChangeFields(r){return{value:{city:void 0},fields:[{property:"city",gridColumns:6,options:this.registerService.getCity(r.value.state),disabled:!1}]}}onLoadFields(r){return this.registerService.getUserDocument(r)}static \u0275fac=function(a){return new(a||o)(E(N),E(j))};static \u0275cmp=s({type:o,selectors:[["sample-po-dynamic-form-register"]],standalone:!1,features:[A([j])],decls:5,vars:6,consts:[["dynamicForm",""],["p-auto-focus","name",3,"p-fields","p-load","p-validate","p-validate-fields","p-value"],[1,"po-row"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"]],template:function(a,l){if(a&1){let m=w();i(0,"po-dynamic-form",1,0)(2,"br"),n(3,"div",2)(4,"po-button",3),c("p-click",function(){q(m);let L=v(1);return l.poNotification.success("Data saved successfully!"),k(L.form.reset())}),t()()}if(a&2){let m=v(1);p("p-fields",l.fields)("p-load",l.onLoadFields.bind(l))("p-validate",l.onChangeFields.bind(l))("p-validate-fields",l.validateFields)("p-value",l.person),d(4),p("p-disabled",m==null?null:m.form.invalid)}},dependencies:[M,C],encapsulation:2})}return o})();var ce=o=>({"docs-sample-code-tabs":o}),Z=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-dynamic-form-register-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,l){a&1&&(i(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Dynamic Form - Register"),t(),n(4,"a",2),c("click",function(){return l.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-dynamic-form-register/sample-po-dynamic-form-register.component.html"),t(),n(13,"pre",7),e(14,`<po-dynamic-form
  #dynamicForm
  p-auto-focus="name"
  [p-fields]="fields"
  [p-load]="onLoadFields.bind(this)"
  [p-validate]="this.onChangeFields.bind(this)"
  [p-validate-fields]="validateFields"
  [p-value]="person"
>
</po-dynamic-form>

<br />

<div class="po-row">
  <po-button
    class="po-md-3"
    p-label="Save"
    [p-disabled]="dynamicForm?.form.invalid"
    (p-click)="poNotification.success('Data saved successfully!'); dynamicForm.form.reset()"
  >
  </po-button>
</div>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-dynamic-form-register/sample-po-dynamic-form-register.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import {
  PoDynamicFormField,
  PoDynamicFormFieldChanged,
  PoDynamicFormValidation,
  PoNotificationService,
  ForceBooleanComponentEnum
} from '@po-ui/ng-components';
import { PoDynamicFormRegisterService } from './sample-po-dynamic-form-register.service';

@Component({
  selector: 'sample-po-dynamic-form-register',
  templateUrl: './sample-po-dynamic-form-register.component.html',
  providers: [PoDynamicFormRegisterService],
  standalone: false
})
export class SamplePoDynamicFormRegisterComponent implements OnInit {
  person = {};
  validateFields: Array<string> = ['state'];

  fields: Array<PoDynamicFormField> = [
    {
      property: 'name',
      divider: 'PERSONAL DATA',
      required: true,
      minLength: 4,
      maxLength: 50,
      gridColumns: 6,
      gridSmColumns: 12,
      order: 1,
      placeholder: 'Type your name'
    },
    {
      property: 'birthday',
      label: 'Date of birth',
      type: 'date',
      format: 'mm/dd/yyyy',
      gridColumns: 6,
      gridSmColumns: 12,
      maxValue: '2010-01-01',
      errorMessage: 'The date must be before the year 2010.',
      order: -1
    },
    { property: 'cpf', label: 'CPF', mask: '999.999.999-99', gridColumns: 6, gridSmColumns: 12, visible: false },
    { property: 'cnpj', label: 'CNPJ', mask: '99.999.999/9999-99', gridColumns: 6, gridSmColumns: 12, visible: false },
    { property: 'genre', gridColumns: 6, gridSmColumns: 12, options: ['Male', 'Female', 'Other'], order: 2 },
    {
      property: 'shortDescription',
      label: 'Short Description',
      gridColumns: 12,
      gridSmColumns: 12,
      rows: 5,
      placeholder: 'Type short description'
    },
    {
      property: 'secretKey',
      label: 'Secret Key',
      gridColumns: 6,
      secret: true,
      pattern: '[a-zA]{5}[Z0-9]{3}',
      errorMessage: 'At least 5 alphabetic and 3 numeric characters are required.',
      placeholder: 'Type your password'
    },
    {
      property: 'rememberSecretKey',
      label: 'Remember Secret Key',
      gridColumns: 3,
      type: 'boolean',
      booleanTrue: 'yes',
      booleanFalse: 'no',
      formatModel: true
    },
    {
      property: 'status',
      label: 'Status',
      gridColumns: 3,
      type: 'boolean',
      booleanTrue: 'Active',
      booleanFalse: 'Inactive',
      formatModel: true
    },
    { property: 'email', divider: 'CONTACTS', gridColumns: 6, icon: 'an an-envelope' },
    { property: 'phone', mask: '(99) 99999-9999', gridColumns: 6 },
    { property: 'address', gridColumns: 6 },
    {
      property: 'addressNumber',
      label: 'Address number',
      type: 'number',
      gridColumns: 6,
      maxValue: 10000,
      errorMessage: 'Invalid number.'
    },
    {
      property: 'state',
      gridColumns: 6,
      options: [
        { state: 'Santa Catarina', code: 1 },
        { state: 'S\xE3o Paulo', code: 2 },
        { state: 'Rio de Janeiro', code: 3 },
        { state: 'Minas Gerais', code: 4 }
      ],
      fieldLabel: 'state',
      fieldValue: 'code'
    },
    { property: 'city', disabled: true, gridColumns: 6, fieldValue: 'code', fieldLabel: 'city' },
    {
      property: 'vacation',
      type: 'date',
      divider: 'Work data',
      range: true,
      gridColumns: 5,
      gridSmColumns: 12
    },
    {
      property: 'entryTime',
      label: 'Entry time',
      type: 'time',
      gridColumns: 2,
      gridSmColumns: 6
    },
    { property: 'exitTime', label: 'Exit time', type: 'time', gridColumns: 2, gridSmColumns: 6 },
    {
      property: 'wage',
      type: 'currency',
      gridColumns: 3,
      gridSmColumns: 12,
      decimalsLength: 2,
      thousandMaxlength: 7,
      icon: 'an an-currency-circle-dollar'
    },
    {
      property: 'hobbies',
      divider: 'MORE INFO',
      gridColumns: 6,
      gridSmColumns: 12,
      optional: true,
      options: ['Soccer', 'Basketball', 'Bike', 'Yoga', 'Travel', 'Run'],
      optionsMulti: true
    },
    {
      property: 'favoriteHero',
      gridColumns: 6,
      gridSmColumns: 12,
      label: 'Favorite hero',
      optional: true,
      searchService: 'https://po-sample-api.onrender.com/v1/heroes',
      columns: [
        { property: 'nickname', label: 'Hero' },
        { property: 'label', label: 'Name' }
      ],
      format: ['id', 'nickname'],
      fieldLabel: 'nickname',
      fieldValue: 'email'
    },
    {
      property: 'partner',
      gridColumns: 6,
      gridSmColumns: 12,
      optionsService: 'https://po-sample-api.onrender.com/v1/people',
      fieldLabel: 'name',
      fieldValue: 'id',
      optional: true
    },
    {
      property: 'videogame',
      gridColumns: 6,
      gridSmColumns: 12,
      label: 'Video game console',
      optional: true,
      fieldValue: 'code',
      fieldLabel: 'console',
      options: [
        { console: 'Nintendo Wii U', code: 'NWU' },
        { console: 'Playstation 4', code: 'PS4' },
        { console: 'Xbox One', code: 'XONE' },
        { console: 'Nintendo Switch', code: 'NSW' },
        { console: 'Playstation 5', code: 'PS5' },
        { console: 'Xbox Series S|X', code: 'XSSX' }
      ],
      optionsMulti: true
    },
    {
      property: 'agree',
      gridColumns: 12,
      label: 'Do you agree?',
      type: 'boolean',
      forceBooleanComponentType: ForceBooleanComponentEnum.checkbox
    },
    {
      property: 'image',
      type: 'upload',
      gridColumns: 12,
      gridSmColumns: 12,
      label: 'Upload your background',
      optional: true,
      url: 'https://po-sample-api.onrender.com/v1/uploads/addFile'
    }
  ];

  constructor(
    public poNotification: PoNotificationService,
    private registerService: PoDynamicFormRegisterService
  ) {}

  ngOnInit() {
    this.person = {
      name: 'Tony Stark',
      birthday: '1970-05-29',
      isJuridicPerson: false,
      videogame: ['PS4', 'NSW', 'XSSX'],
      rememberSecretKey: 'no',
      status: 'active'
    };
  }

  onChangeFields(changedValue: PoDynamicFormFieldChanged): PoDynamicFormValidation {
    return {
      value: { city: undefined },
      fields: [
        {
          property: 'city',
          gridColumns: 6,
          options: this.registerService.getCity(changedValue.value.state),
          disabled: false
        }
      ]
    };
  }

  onLoadFields(value: any) {
    return this.registerService.getUserDocument(value);
  }
}
`),t(),n(21,"label",6),e(22,"sample-po-dynamic-form-register/sample-po-dynamic-form-register.service.ts"),t(),n(23,"pre",9),e(24,`import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PoDynamicFormRegisterService {
  getCity(state: number) {
    switch (state) {
      case 1: {
        return [
          { city: 'Palho\xE7a', code: 5 },
          { city: 'Lages', code: 6 },
          { city: 'Balne\xE1rio Cambori\xFA', code: 7 },
          { city: 'Brusque', code: 8 }
        ];
      }
      case 2: {
        return [
          { city: 'S\xE3o Paulo', code: 9 },
          { city: 'Guarulhos', code: 10 },
          { city: 'Campinas', code: 11 },
          { city: 'S\xE3o Bernardo do Campo', code: 12 }
        ];
      }
      case 3: {
        return [
          { city: 'Rio de Janeiro', code: 13 },
          { city: 'S\xE3o Gon\xE7alo', code: 14 },
          { city: 'Duque de Caxias', code: 15 },
          { city: 'Nova Igua\xE7u', code: 16 }
        ];
      }
      case 4: {
        return [
          { city: 'Belo Horizonte', code: 17 },
          { city: 'Uberl\xE2ndia', code: 18 },
          { city: 'Contagem', code: 19 },
          { city: 'Juiz de Fora', code: 20 }
        ];
      }
    }
    return [];
  }

  getUserDocument(value) {
    const cpfField = { property: 'cpf', visible: true };
    const cnpjField = { property: 'cnpj', visible: true };
    const document = value.isJuridicPerson ? cnpjField : cpfField;

    return {
      fields: [document]
    };
  }
}
`),t()()()()(),n(25,"div",10),i(26,"sample-po-dynamic-form-register"),t(),i(27,"hr")),a&2&&(d(5),y("po-icon "+l.sampleCodeButtonIcon),d(),f(" ",l.sampleCodeButtonLabel,""),d(),p("ngClass",x(4,ce,l.hideSampleCodeTabs)))},dependencies:[h,g,S,b,Q],encapsulation:2})}return o})();var O=(()=>{class o{getCity(r){switch(r){case 1:return[{city:"Palho\xE7a",code:5},{city:"Lages",code:6},{city:"Balne\xE1rio Cambori\xFA",code:7},{city:"Brusque",code:8}];case 2:return[{city:"S\xE3o Paulo",code:9},{city:"Guarulhos",code:10},{city:"Campinas",code:11},{city:"S\xE3o Bernardo do Campo",code:12}];case 3:return[{city:"Rio de Janeiro",code:13},{city:"S\xE3o Gon\xE7alo",code:14},{city:"Duque de Caxias",code:15},{city:"Nova Igua\xE7u",code:16}];case 4:return[{city:"Belo Horizonte",code:17},{city:"Uberl\xE2ndia",code:18},{city:"Contagem",code:19},{city:"Juiz de Fora",code:20}]}return[]}getUserDocument(r){let a={property:"cpf",visible:!0},l={property:"cnpj",visible:!0};return{fields:[r.isJuridicPerson?l:a]}}static \u0275fac=function(a){return new(a||o)};static \u0275prov=D({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var xe=["dynamicForm"],$=(()=>{class o{poNotification;registerService;dynamicForm;person={};validateFields=["state"];fields=[{property:"name",container:"PERSONAL DATA",required:!0,minLength:4,maxLength:50,gridColumns:6,gridSmColumns:12,order:1,placeholder:"Type your name"},{property:"birthday",label:"Date of birth",type:"date",format:"mm/dd/yyyy",gridColumns:6,gridSmColumns:12,maxValue:"2010-01-01",errorMessage:"The date must be before the year 2010.",order:-1,help:"Enter or select a valid date.",additionalHelpTooltip:"Please enter a valid date in the format MMDDYYYY.",keydown:this.onKeyDown.bind(this,"birthday")},{property:"cpf",label:"CPF",mask:"999.999.999-99",gridColumns:6,gridSmColumns:12,visible:!1},{property:"cnpj",label:"CNPJ",mask:"99.999.999/9999-99",gridColumns:6,gridSmColumns:12,visible:!1},{property:"genre",gridColumns:6,gridSmColumns:12,options:["Male","Female","Other"],order:2},{property:"shortDescription",label:"Short Description",gridColumns:12,gridSmColumns:12,rows:5,placeholder:"Type short description"},{property:"secretKey",label:"Secret Key",gridColumns:6,secret:!0,pattern:"[a-zA]{5}[Z0-9]{3}",errorMessage:"At least 5 alphabetic and 3 numeric characters are required.",placeholder:"Type your password",help:"Password must include a combination of letters and numbers.",additionalHelpTooltip:"At least 5 alphabetic and 3 numeric characters are required.",keydown:this.onKeyDown.bind(this,"secretKey")},{property:"rememberSecretKey",label:"Remember Secret Key",gridColumns:3,type:"boolean",booleanTrue:"yes",booleanFalse:"no",formatModel:!0},{property:"status",label:"Status",gridColumns:3,type:"boolean",booleanTrue:"Active",booleanFalse:"Inactive",formatModel:!0},{property:"email",container:"CONTACTS",gridColumns:6,icon:"an an-envelope"},{property:"phone",mask:"(99) 99999-9999",gridColumns:6},{property:"address",gridColumns:6},{property:"addressNumber",label:"Address number",type:"number",gridColumns:6,maxValue:1e4,errorMessage:"Invalid number."},{property:"state",gridColumns:6,options:[{state:"Santa Catarina",code:1},{state:"S\xE3o Paulo",code:2},{state:"Rio de Janeiro",code:3},{state:"Minas Gerais",code:4}],fieldLabel:"state",fieldValue:"code"},{property:"city",disabled:!0,gridColumns:6,fieldValue:"code",fieldLabel:"city"},{property:"vacation",type:"date",container:"Work data",range:!0,gridColumns:5,gridSmColumns:12,help:"Enter or select a valid date range.",additionalHelpTooltip:"Ensure the start date is earlier than or equal to the end date.",keydown:this.onKeyDown.bind(this,"vacation")},{property:"entryTime",label:"Entry time",type:"time",gridColumns:2,gridSmColumns:6},{property:"exitTime",label:"Exit time",type:"time",gridColumns:2,gridSmColumns:6},{property:"wage",type:"currency",gridColumns:3,gridSmColumns:12,decimalsLength:2,thousandMaxlength:7,icon:"an an-currency-circle-dollar"},{property:"hobbies",container:"MORE INFO",gridColumns:6,gridSmColumns:12,optional:!0,options:["Soccer","Basketball","Bike","Yoga","Travel","Run"],optionsMulti:!0},{property:"favoriteHero",gridColumns:6,gridSmColumns:12,label:"Favorite hero",optional:!0,searchService:"https://po-sample-api.onrender.com/v1/heroes",columns:[{property:"nickname",label:"Hero"},{property:"label",label:"Name"}],format:["id","nickname"],fieldLabel:"nickname",fieldValue:"email"},{property:"partner",gridColumns:6,gridSmColumns:12,optionsService:"https://po-sample-api.onrender.com/v1/people",fieldLabel:"name",fieldValue:"id",optional:!0},{property:"videogame",gridColumns:6,gridSmColumns:12,label:"Video game console",optional:!0,fieldValue:"code",fieldLabel:"console",options:[{console:"Nintendo Wii U",code:"NWU"},{console:"Playstation 4",code:"PS4"},{console:"Xbox One",code:"XONE"},{console:"Nintendo Switch",code:"NSW"},{console:"Playstation 5",code:"PS5"},{console:"Xbox Series S|X",code:"XSSX"}],optionsMulti:!0},{property:"agree",gridColumns:12,label:"Do you agree?",type:"boolean",forceBooleanComponentType:z.checkbox},{property:"image",type:"upload",gridColumns:12,gridSmColumns:12,label:"Upload your background",optional:!0,url:"https://po-sample-api.onrender.com/v1/uploads/addFile",customAction:{icon:"an an-download",visible:!0},customActionClick:r=>{console.log("Iniciar download para o arquivo:",r.name)}}];constructor(r,a){this.poNotification=r,this.registerService=a}ngOnInit(){this.person={name:"Tony Stark",birthday:"1970-05-29",isJuridicPerson:!1,videogame:["PS4","NSW","XSSX"],rememberSecretKey:"no",status:"active"}}onChangeFields(r){return{value:{city:void 0},fields:[{property:"city",gridColumns:6,options:this.registerService.getCity(r.value.state),disabled:!1}]}}onKeyDown(r,a){a.code==="F9"&&this.dynamicForm.showAdditionalHelp(r)}onLoadFields(r){return this.registerService.getUserDocument(r)}static \u0275fac=function(a){return new(a||o)(E(N),E(O))};static \u0275cmp=s({type:o,selectors:[["sample-po-dynamic-form-container"]],viewQuery:function(a,l){if(a&1&&B(xe,7),a&2){let m;R(m=H())&&(l.dynamicForm=m.first)}},standalone:!1,features:[A([O])],decls:5,vars:6,consts:[["dynamicForm",""],["p-auto-focus","name",3,"p-fields","p-load","p-validate","p-validate-fields","p-value"],[1,"po-row"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"]],template:function(a,l){if(a&1){let m=w();i(0,"po-dynamic-form",1,0)(2,"br"),n(3,"div",2)(4,"po-button",3),c("p-click",function(){q(m);let L=v(1);return l.poNotification.success("Data saved successfully!"),k(L.form.reset())}),t()()}if(a&2){let m=v(1);p("p-fields",l.fields)("p-load",l.onLoadFields.bind(l))("p-validate",l.onChangeFields.bind(l))("p-validate-fields",l.validateFields)("p-value",l.person),d(4),p("p-disabled",m==null?null:m.form.invalid)}},dependencies:[M,C],encapsulation:2})}return o})();var be=o=>({"docs-sample-code-tabs":o}),ee=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-dynamic-form-container-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,l){a&1&&(i(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Dynamic Form - Container"),t(),n(4,"a",2),c("click",function(){return l.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-dynamic-form-container/sample-po-dynamic-form-container.component.html"),t(),n(13,"pre",7),e(14,`<po-dynamic-form
  #dynamicForm
  p-auto-focus="name"
  [p-fields]="fields"
  [p-load]="onLoadFields.bind(this)"
  [p-validate]="this.onChangeFields.bind(this)"
  [p-validate-fields]="validateFields"
  [p-value]="person"
>
</po-dynamic-form>

<br />

<div class="po-row">
  <po-button
    class="po-md-3"
    p-label="Save"
    [p-disabled]="dynamicForm?.form.invalid"
    (p-click)="poNotification.success('Data saved successfully!'); dynamicForm.form.reset()"
  >
  </po-button>
</div>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-dynamic-form-container/sample-po-dynamic-form-container.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit, ViewChild } from '@angular/core';

import {
  PoDynamicFormField,
  PoDynamicFormFieldChanged,
  PoDynamicFormValidation,
  PoNotificationService,
  ForceBooleanComponentEnum,
  PoUploadFile,
  PoDynamicFormComponent
} from '@po-ui/ng-components';
import { PoDynamicFormContainerService } from './sample-po-dynamic-form-container.service';

@Component({
  selector: 'sample-po-dynamic-form-container',
  templateUrl: './sample-po-dynamic-form-container.component.html',
  providers: [PoDynamicFormContainerService],
  standalone: false
})
export class SamplePoDynamicFormContainerComponent implements OnInit {
  @ViewChild('dynamicForm', { static: true }) dynamicForm: PoDynamicFormComponent;
  person = {};
  validateFields: Array<string> = ['state'];

  fields: Array<PoDynamicFormField> = [
    {
      property: 'name',
      container: 'PERSONAL DATA',
      required: true,
      minLength: 4,
      maxLength: 50,
      gridColumns: 6,
      gridSmColumns: 12,
      order: 1,
      placeholder: 'Type your name'
    },
    {
      property: 'birthday',
      label: 'Date of birth',
      type: 'date',
      format: 'mm/dd/yyyy',
      gridColumns: 6,
      gridSmColumns: 12,
      maxValue: '2010-01-01',
      errorMessage: 'The date must be before the year 2010.',
      order: -1,
      help: 'Enter or select a valid date.',
      additionalHelpTooltip: 'Please enter a valid date in the format MMDDYYYY.',
      keydown: this.onKeyDown.bind(this, 'birthday')
    },
    { property: 'cpf', label: 'CPF', mask: '999.999.999-99', gridColumns: 6, gridSmColumns: 12, visible: false },
    { property: 'cnpj', label: 'CNPJ', mask: '99.999.999/9999-99', gridColumns: 6, gridSmColumns: 12, visible: false },
    { property: 'genre', gridColumns: 6, gridSmColumns: 12, options: ['Male', 'Female', 'Other'], order: 2 },
    {
      property: 'shortDescription',
      label: 'Short Description',
      gridColumns: 12,
      gridSmColumns: 12,
      rows: 5,
      placeholder: 'Type short description'
    },
    {
      property: 'secretKey',
      label: 'Secret Key',
      gridColumns: 6,
      secret: true,
      pattern: '[a-zA]{5}[Z0-9]{3}',
      errorMessage: 'At least 5 alphabetic and 3 numeric characters are required.',
      placeholder: 'Type your password',
      help: 'Password must include a combination of letters and numbers.',
      additionalHelpTooltip: 'At least 5 alphabetic and 3 numeric characters are required.',
      keydown: this.onKeyDown.bind(this, 'secretKey')
    },
    {
      property: 'rememberSecretKey',
      label: 'Remember Secret Key',
      gridColumns: 3,
      type: 'boolean',
      booleanTrue: 'yes',
      booleanFalse: 'no',
      formatModel: true
    },
    {
      property: 'status',
      label: 'Status',
      gridColumns: 3,
      type: 'boolean',
      booleanTrue: 'Active',
      booleanFalse: 'Inactive',
      formatModel: true
    },
    { property: 'email', container: 'CONTACTS', gridColumns: 6, icon: 'an an-envelope' },
    { property: 'phone', mask: '(99) 99999-9999', gridColumns: 6 },
    { property: 'address', gridColumns: 6 },
    {
      property: 'addressNumber',
      label: 'Address number',
      type: 'number',
      gridColumns: 6,
      maxValue: 10000,
      errorMessage: 'Invalid number.'
    },
    {
      property: 'state',
      gridColumns: 6,
      options: [
        { state: 'Santa Catarina', code: 1 },
        { state: 'S\xE3o Paulo', code: 2 },
        { state: 'Rio de Janeiro', code: 3 },
        { state: 'Minas Gerais', code: 4 }
      ],
      fieldLabel: 'state',
      fieldValue: 'code'
    },
    { property: 'city', disabled: true, gridColumns: 6, fieldValue: 'code', fieldLabel: 'city' },
    {
      property: 'vacation',
      type: 'date',
      container: 'Work data',
      range: true,
      gridColumns: 5,
      gridSmColumns: 12,
      help: 'Enter or select a valid date range.',
      additionalHelpTooltip: 'Ensure the start date is earlier than or equal to the end date.',
      keydown: this.onKeyDown.bind(this, 'vacation')
    },
    {
      property: 'entryTime',
      label: 'Entry time',
      type: 'time',
      gridColumns: 2,
      gridSmColumns: 6
    },
    { property: 'exitTime', label: 'Exit time', type: 'time', gridColumns: 2, gridSmColumns: 6 },
    {
      property: 'wage',
      type: 'currency',
      gridColumns: 3,
      gridSmColumns: 12,
      decimalsLength: 2,
      thousandMaxlength: 7,
      icon: 'an an-currency-circle-dollar'
    },
    {
      property: 'hobbies',
      container: 'MORE INFO',
      gridColumns: 6,
      gridSmColumns: 12,
      optional: true,
      options: ['Soccer', 'Basketball', 'Bike', 'Yoga', 'Travel', 'Run'],
      optionsMulti: true
    },
    {
      property: 'favoriteHero',
      gridColumns: 6,
      gridSmColumns: 12,
      label: 'Favorite hero',
      optional: true,
      searchService: 'https://po-sample-api.onrender.com/v1/heroes',
      columns: [
        { property: 'nickname', label: 'Hero' },
        { property: 'label', label: 'Name' }
      ],
      format: ['id', 'nickname'],
      fieldLabel: 'nickname',
      fieldValue: 'email'
    },
    {
      property: 'partner',
      gridColumns: 6,
      gridSmColumns: 12,
      optionsService: 'https://po-sample-api.onrender.com/v1/people',
      fieldLabel: 'name',
      fieldValue: 'id',
      optional: true
    },
    {
      property: 'videogame',
      gridColumns: 6,
      gridSmColumns: 12,
      label: 'Video game console',
      optional: true,
      fieldValue: 'code',
      fieldLabel: 'console',
      options: [
        { console: 'Nintendo Wii U', code: 'NWU' },
        { console: 'Playstation 4', code: 'PS4' },
        { console: 'Xbox One', code: 'XONE' },
        { console: 'Nintendo Switch', code: 'NSW' },
        { console: 'Playstation 5', code: 'PS5' },
        { console: 'Xbox Series S|X', code: 'XSSX' }
      ],
      optionsMulti: true
    },
    {
      property: 'agree',
      gridColumns: 12,
      label: 'Do you agree?',
      type: 'boolean',
      forceBooleanComponentType: ForceBooleanComponentEnum.checkbox
    },
    {
      property: 'image',
      type: 'upload',
      gridColumns: 12,
      gridSmColumns: 12,
      label: 'Upload your background',
      optional: true,
      url: 'https://po-sample-api.onrender.com/v1/uploads/addFile',
      customAction: { icon: 'an an-download', visible: true },
      customActionClick: (file: PoUploadFile) => {
        console.log('Iniciar download para o arquivo:', file.name);
      }
    }
  ];

  constructor(
    public poNotification: PoNotificationService,
    private registerService: PoDynamicFormContainerService
  ) {}

  ngOnInit() {
    this.person = {
      name: 'Tony Stark',
      birthday: '1970-05-29',
      isJuridicPerson: false,
      videogame: ['PS4', 'NSW', 'XSSX'],
      rememberSecretKey: 'no',
      status: 'active'
    };
  }

  onChangeFields(changedValue: PoDynamicFormFieldChanged): PoDynamicFormValidation {
    return {
      value: { city: undefined },
      fields: [
        {
          property: 'city',
          gridColumns: 6,
          options: this.registerService.getCity(changedValue.value.state),
          disabled: false
        }
      ]
    };
  }

  onKeyDown(property: string, event: KeyboardEvent): void {
    if (event.code === 'F9') {
      this.dynamicForm.showAdditionalHelp(property);
    }
  }

  onLoadFields(value: any) {
    return this.registerService.getUserDocument(value);
  }
}
`),t(),n(21,"label",6),e(22,"sample-po-dynamic-form-container/sample-po-dynamic-form-container.service.ts"),t(),n(23,"pre",9),e(24,`import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PoDynamicFormContainerService {
  getCity(state: number) {
    switch (state) {
      case 1: {
        return [
          { city: 'Palho\xE7a', code: 5 },
          { city: 'Lages', code: 6 },
          { city: 'Balne\xE1rio Cambori\xFA', code: 7 },
          { city: 'Brusque', code: 8 }
        ];
      }
      case 2: {
        return [
          { city: 'S\xE3o Paulo', code: 9 },
          { city: 'Guarulhos', code: 10 },
          { city: 'Campinas', code: 11 },
          { city: 'S\xE3o Bernardo do Campo', code: 12 }
        ];
      }
      case 3: {
        return [
          { city: 'Rio de Janeiro', code: 13 },
          { city: 'S\xE3o Gon\xE7alo', code: 14 },
          { city: 'Duque de Caxias', code: 15 },
          { city: 'Nova Igua\xE7u', code: 16 }
        ];
      }
      case 4: {
        return [
          { city: 'Belo Horizonte', code: 17 },
          { city: 'Uberl\xE2ndia', code: 18 },
          { city: 'Contagem', code: 19 },
          { city: 'Juiz de Fora', code: 20 }
        ];
      }
    }
    return [];
  }

  getUserDocument(value) {
    const cpfField = { property: 'cpf', visible: true };
    const cnpjField = { property: 'cnpj', visible: true };
    const document = value.isJuridicPerson ? cnpjField : cpfField;

    return {
      fields: [document]
    };
  }
}
`),t()()()()(),n(25,"div",10),i(26,"sample-po-dynamic-form-container"),t(),i(27,"hr")),a&2&&(d(5),y("po-icon "+l.sampleCodeButtonIcon),d(),f(" ",l.sampleCodeButtonLabel,""),d(),p("ngClass",x(4,be,l.hideSampleCodeTabs)))},dependencies:[h,g,S,b,$],encapsulation:2})}return o})();var te=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-dynamic-form-doc"]],standalone:!1,decls:4304,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","Array<PoDynamicFormField>"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"language-html"],[1,"language-ts"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Function"],["href","documentation/po-dynamic-form#po-dynamic-form-load"],["href","documentation/po-dynamic-form#po-dynamic-form-validation"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","any"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"language-javascript"],["pan","",1,"docs-api-property-type"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Array<PoLookupAdvancedFilter>"],["pan","",1,"docs-api-property-type","Array<PoLookupColumn>"],["pan","",1,"docs-api-property-type","number"],["href","/documentation/po-lookup"],["pan","",1,"docs-api-property-type","PoProgressAction"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","(file:","PoUploadFile)","=>","void"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","PoMultiselectFilterMode"],["pan","",1,"docs-api-property-type","ForceBooleanComponentEnum"],["pan","",1,"docs-api-property-type","ForceOptionComponentEnum"],["pan","",1,"docs-api-property-type","{","[name:","string]:","string"],["pan","",1,"docs-api-property-type","Array<string>;","}"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoDatepickerIsoFormat"],["pan","",1,"docs-api-property-type","PoSwitchLabelPosition"],["pan","",1,"docs-api-property-type","PoLookupLiterals"],["pan","",1,"docs-api-property-type","PoMultiselectLiterals"],["pan","",1,"docs-api-property-type","PoComboLiterals"],["pan","",1,"docs-api-property-type","PoDatepickerRangeLiterals"],["pan","",1,"docs-api-property-type","PoUploadLiterals"],["href","documentation/po-i18n"],["pan","",1,"docs-api-property-type","Array<PoSelectOption>"],["pan","",1,"docs-api-property-type","Array<PoMultiselectOption>"],["pan","",1,"docs-api-property-type","Array<PoCheckboxGroupOption>"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type","PoComboFilter"],["pan","",1,"docs-api-property-type","PoMultiselectFilter"],["href","https://po-ui.io/guides/api"],["pan","",1,"docs-api-property-type","PoUploadFileRestrictions"],["pan","",1,"docs-api-property-type","PoLookupFilter"],["pan","",1,"docs-api-property-type","PoDynamicFieldType"],["href","documentation/po-dynamic-form#po-dynamic-form-field-validation"],["id","po-dynamic-form-load"],["id","po-dynamic-form-field-validation"],["pan","",1,"docs-api-property-type","PoDynamicFormField"],["id","po-dynamic-form-validation"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(a,l){a&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoDynamicModule } from '@po-ui/ng-components';"),t()(),i(4,"div",2),n(5,"h3",3),e(6,"Componente"),t(),n(7,"h4",4)(8,"code",5),e(9,"PoDynamicFormComponent"),t()(),n(10,"div",2)(11,"p"),e(12,"Componente para cria\xE7\xE3o de formul\xE1rios din\xE2micos a partir de uma lista de objetos."),t(),n(13,"p"),e(14,"Tamb\xE9m \xE9 poss\xEDvel verificar se o formul\xE1rio est\xE1 v\xE1lido e informar valores para a exibi\xE7\xE3o de informa\xE7\xF5es. "),t()(),n(15,"div",6)(16,"h4",7),e(17,"Seletor"),t(),n(18,"pre",8),e(19,`<po-dynamic-form
    p-auto-focus="string"
    p-components-size="string"
    p-fields="Array<PoDynamicFormField>"
    (p-form)="EventEmitter"
    p-group-form="boolean"
    p-load="string | Function"
    p-validate="string | Function"
    p-validate-fields="Array<string>"
    p-validate-on-input="boolean"
    p-value="any" >
</po-dynamic-form>
`),t()(),n(20,"h4",9),e(21,"Propriedades"),t(),n(22,"table",10)(23,"tr",11)(24,"th",12),e(25,"Nome"),t(),n(26,"th",12),e(27,"Tipo"),t(),n(28,"th",12),e(29,"Padr\xE3o"),t(),n(30,"th",12),e(31,"Descri\xE7\xE3o"),t()(),n(32,"tr",13)(33,"td",14)(34,"div",15)(35,"span",16),e(36," p-auto-focus"),i(37,"br"),t()()(),n(38,"td",17)(39,"code",18),e(40,"string"),t()(),n(41,"td",19),e(42,"-"),t(),n(43,"td",20)(44,"em")(45,"strong"),e(46,"(opcional)"),t()(),n(47,"p"),e(48,"Nome da propriedade, atribu\xEDda ao "),n(49,"code"),e(50,"PoDynamicFormField.property"),t(),e(51,", que iniciar\xE1 o campo com foco."),t()()(),n(52,"tr",13)(53,"td",14)(54,"div",15)(55,"span",16),e(56," p-components-size"),i(57,"br"),t()()(),n(58,"td",17)(59,"code",18),e(60,"string"),t()(),n(61,"td",19)(62,"p")(63,"code"),e(64,"medium"),t()()(),n(65,"td",20)(66,"em")(67,"strong"),e(68,"(opcional)"),t()(),n(69,"p"),e(70,"Define o tamanho dos componentes de formul\xE1rio no template:"),t(),n(71,"ul")(72,"li")(73,"code"),e(74,"small"),t(),e(75,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(76,"li")(77,"code"),e(78,"medium"),t(),e(79,": aplica a medida medium de cada componente."),t()(),n(80,"blockquote")(81,"p"),e(82,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(83,"code"),e(84,"medium"),t(),e(85,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(86,"a",21),e(87,"po-theme"),t(),e(88,"."),t()()()(),n(89,"tr",13)(90,"td",14)(91,"div",15)(92,"span",16),e(93," p-fields"),i(94,"br"),t()()(),n(95,"td",17)(96,"code",22),e(97,"Array<PoDynamicFormField>"),t()(),n(98,"td",19)(99,"p")(100,"code"),e(101,"[]"),t()()(),n(102,"td",20)(103,"p"),e(104,"Cole\xE7\xE3o de objetos que implementam a interface "),n(105,"code"),e(106,"PoDynamicFormField"),t(),e(107,`, para defini\xE7\xE3o dos campos que ser\xE3o criados
dinamicamente.`),t(),n(108,"blockquote")(109,"p"),e(110,"Ex: "),n(111,"code"),e(112,"[ { property: 'name' } ]"),t()()(),n(113,"p"),e(114,"Regras de tipagem e cria\xE7\xE3o dos componentes:"),t(),n(115,"ul")(116,"li"),e(117,"Caso o "),n(118,"em"),e(119,"type"),t(),e(120," informado seja "),n(121,"em"),e(122,"boolean"),t(),e(123," o componente criado ser\xE1 o "),n(124,"code"),e(125,"po-switch"),t(),e(126,"."),t(),n(127,"li"),e(128,"Caso o "),n(129,"em"),e(130,"type"),t(),e(131," informado seja "),n(132,"em"),e(133,"currency"),t(),e(134," e n\xE3o seja informado um "),n(135,"em"),e(136,"mask"),t(),e(137," ou "),n(138,"em"),e(139,"pattern"),t(),e(140," o componente criado ser\xE1 o "),n(141,"code"),e(142,"po-decimal"),t(),e(143,`,
caso seja informado um `),n(144,"em"),e(145,"mask"),t(),e(146," ou "),n(147,"em"),e(148,"pattern"),t(),e(149," o componente criado ser\xE1 o "),n(150,"code"),e(151,"po-input"),t(),e(152,"."),t(),n(153,"li"),e(154,"Caso o "),n(155,"em"),e(156,"type"),t(),e(157," informado seja "),n(158,"em"),e(159,"number"),t(),e(160," e n\xE3o seja informado um "),n(161,"em"),e(162,"mask"),t(),e(163," ou "),n(164,"em"),e(165,"pattern"),t(),e(166," o componente criado ser\xE1 o "),n(167,"code"),e(168,"po-number"),t(),e(169,`, caso seja
informado um `),n(170,"em"),e(171,"mask"),t(),e(172," ou "),n(173,"em"),e(174,"pattern"),t(),e(175," o componente criado ser\xE1 o "),n(176,"code"),e(177,"po-input"),t(),e(178,"."),t(),n(179,"li"),e(180,"Caso a lista possua a propriedade "),n(181,"code"),e(182,"options"),t(),e(183," e a mesma possua at\xE9 3 itens o componente criado ser\xE1 o "),n(184,"code"),e(185,"po-radio-group"),t(),e(186,`
ou `),n(187,"code"),e(188,"po-checkbox-group"),t(),e(189," se informar a propriedade "),n(190,"code"),e(191,"optionsMulti"),t(),e(192,"."),t(),n(193,"li"),e(194,"Caso a mesma possua 3 ou mais itens, ser\xE1 criado o componente "),n(195,"code"),e(196,"po-select"),t(),e(197," ou, "),n(198,"code"),e(199,"po-multiselect"),t(),e(200," se a propriedade "),n(201,"code"),e(202,"optionsMulti"),t(),e(203,`
for verdadeira.`),t(),n(204,"li"),e(205,"Caso o "),n(206,"em"),e(207,"type"),t(),e(208," informado seja "),n(209,"em"),e(210,"date"),t(),e(211," ou "),n(212,"em"),e(213,"datetime"),t(),e(214," o componente criado ser\xE1 o "),n(215,"code"),e(216,"po-datepicker"),t(),e(217,"."),t(),n(218,"li"),e(219,"Caso seja informado a propriedade "),n(220,"code"),e(221,"optionsService"),t(),e(222," o componente criado ser\xE1 o "),n(223,"code"),e(224,"po-combo"),t(),e(225,"."),t(),n(226,"li"),e(227,"Caso o "),n(228,"em"),e(229,"type"),t(),e(230," informado seja "),n(231,"em"),e(232,"time"),t(),e(233," o componente criado ser\xE1 um "),n(234,"code"),e(235,"po-input"),t(),e(236," podendo receber um "),n(237,"em"),e(238,"mask"),t(),e(239,` para formatar
o valor exibido, caso n\xE3o seja informado um `),n(240,"em"),e(241,"mask"),t(),e(242," o componente ser\xE1 criado com a m\xE1scara '99:99' por padr\xE3o."),t(),n(243,"li"),e(244,"Caso a lista possua a propriedade "),n(245,"code"),e(246,"rows"),t(),e(247,` e esta seja definida com valor maior ou igual a 3 o componente criado ser\xE1
o `),n(248,"code"),e(249,"po-textarea"),t(),e(250,", caso o valor da propriedade "),n(251,"code"),e(252,"rows"),t(),e(253," seja menor que 3 o componente criado ser\xE1 o "),n(254,"code"),e(255,"po-input"),t(),e(256,"."),t(),n(257,"li"),e(258,"Caso seja informada a propriedade "),n(259,"code"),e(260,"secret"),t(),e(261," o componente criado ser\xE1 o "),n(262,"code"),e(263,"po-password"),t(),e(264,"."),t(),n(265,"li"),e(266,"Caso o "),n(267,"em"),e(268,"type"),t(),e(269," informado seja "),n(270,"em"),e(271,"string"),t(),e(272," o componente criado ser\xE1 o "),n(273,"code"),e(274,"po-input"),t(),e(275,"."),n(276,"blockquote")(277,"p"),e(278,"Ao alterar o valor das "),n(279,"code"),e(280,"properties"),t(),e(281,", visibilidade e/ou agrupamentos via container, os "),n(282,"code"),e(283,"fields"),t(),e(284," que utilizam servi\xE7o podem refazer as chamadas para as API's."),t()()()()()(),n(285,"tr",13)(286,"td",14)(287,"div",23)(288,"span",24),e(289," (p-form)"),i(290,"br"),t()()(),n(291,"td",17)(292,"code",25),e(293,"EventEmitter"),t()(),n(294,"td",19),e(295,"-"),t(),n(296,"td",20)(297,"em")(298,"strong"),e(299,"(opcional)"),t()(),n(300,"p"),e(301,`Na inicializa\xE7\xE3o do componente ser\xE1 repassado o objeto de formul\xE1rio utilizado no componente,
podendo ser utilizado para valida\xE7\xF5es e/ou detec\xE7\xE3o de mudan\xE7a dos valores.`),t(),n(302,"p"),e(303,`Portanto existem duas maneiras de recuperar o formul\xE1rio,
atrav\xE9s de `),n(304,"em"),e(305,"template reference"),t(),e(306," e atrav\xE9s do "),n(307,"em"),e(308,"output"),t(),e(309,", veja os exemplos abaixo:"),t(),n(310,"blockquote")(311,"p")(312,"em"),e(313,"template reference"),t()()(),n(314,"pre")(315,"code",26),e(316,`<po-dynamic-form #dynamicForm>
</po-dynamic-form>

<po-button p-label="Adicionar" [p-disabled]="dynamicForm?.form.invalid">
</po-button>
`),t()(),n(317,"blockquote")(318,"p")(319,"em"),e(320,"Output"),t()()(),n(321,"pre")(322,"code",26),e(323,`...
<po-dynamic-form (p-form)="getForm($event)">
</po-dynamic-form>

<po-button p-label="Adicionar" [p-disabled]="dynamicForm?.invalid">
</po-button>
...
`),t()(),n(324,"pre")(325,"code",27),e(326,`...

export class AppComponent {

  dynamicForm: NgForm;

  getForm(form: NgForm) {
    this.dynamicForm = form;
  }

}
`),t()(),n(327,"blockquote")(328,"p"),e(329,"Caso a propriedade "),n(330,"code"),e(331,"p-group-form"),t(),e(332,` for verdadeira n\xE3o ser\xE1 repassado o formul\xE1rio, pois o mesmo utilizar\xE1
o formul\xE1rio pai.`),t()()()(),n(333,"tr",13)(334,"td",14)(335,"div",15)(336,"span",16),e(337," p-group-form"),i(338,"br"),t()()(),n(339,"td",17)(340,"code",28),e(341,"boolean"),t()(),n(342,"td",19),e(343,"-"),t(),n(344,"td",20)(345,"em")(346,"strong"),e(347,"(opcional)"),t()(),n(348,"p"),e(349,"Ao informar esta propriedade, o componente passar\xE1 a utilizar o formul\xE1rio pai para criar os "),n(350,"code"),e(351,"FormControl"),t(),e(352,`
e com isso \xE9 poss\xEDvel recuperar o valor do formul\xE1rio e suas valida\xE7\xF5es a partir do formul\xE1rio pai.`),t(),n(353,"pre")(354,"code",26),e(355,`<form #parentForm="ngForm">

  <po-dynamic-form p-group-form [p-fields]="fields"></po-dynamic-form>

 <po-button p-label="Adicionar" [p-disabled]="parentForm.invalid"></po-button>
</form>
`),t()()()(),n(356,"tr",13)(357,"td",14)(358,"div",15)(359,"span",16),e(360," p-load"),i(361,"br"),t()()(),n(362,"td",17)(363,"code",18),e(364,"string "),t(),n(365,"code",29),e(366," Function"),t()(),n(367,"td",19),e(368,"-"),t(),n(369,"td",20)(370,"em")(371,"strong"),e(372,"(opcional)"),t()(),n(373,"p"),e(374,"Fun\xE7\xE3o ou servi\xE7o que ser\xE1 executado na inicializa\xE7\xE3o do componente."),t(),n(375,"p"),e(376,"A propriedade aceita os seguintes tipos:"),t(),n(377,"ul")(378,"li")(379,"code"),e(380,"string"),t(),e(381,": "),n(382,"em"),e(383,"Endpoint"),t(),e(384," usado pelo componente para requisi\xE7\xE3o via "),n(385,"code"),e(386,"POST"),t(),e(387,"."),t(),n(388,"li")(389,"code"),e(390,"function"),t(),e(391,": M\xE9todo que ser\xE1 executado."),t()(),n(392,"p"),e(393,"Ao ser executado, ir\xE1 receber como par\xE2metro o objeto informado no "),n(394,"code"),e(395,"p-value"),t(),e(396,"."),t(),n(397,"p"),e(398,"O retorno desta fun\xE7\xE3o deve ser do tipo "),n(399,"a",30),e(400,"PoDynamicFormLoad"),t(),e(401,`,
onde o usu\xE1rio poder\xE1 determinar as novas atualiza\xE7\xF5es dos campos, valores e determinar o campo a ser focado.`),t(),n(402,"p"),e(403,"Por exemplo:"),t(),n(404,"pre")(405,"code"),e(406,`onLoadFields(): PoDynamicFormLoad {

  return {
    value: { cpf: undefined },
    fields: [
      { property: 'cpf' }
    ],
    focus: 'cpf'
  };
}
`),t()(),n(407,"p"),e(408,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),n(409,"code"),e(410,"bind"),t(),e(411,", por exemplo:"),t(),n(412,"pre")(413,"code"),e(414,`[p-load]="onLoadFields.bind(this)"
`),t()()()(),n(415,"tr",13)(416,"td",14)(417,"div",15)(418,"span",16),e(419," p-validate"),i(420,"br"),t()()(),n(421,"td",17)(422,"code",18),e(423,"string "),t(),n(424,"code",29),e(425," Function"),t()(),n(426,"td",19),e(427,"-"),t(),n(428,"td",20)(429,"em")(430,"strong"),e(431,"(opcional)"),t()(),n(432,"p"),e(433,"Fun\xE7\xE3o ou servi\xE7o para validar as "),n(434,"strong"),e(435,"mudan\xE7as do formul\xE1rio"),t(),e(436,"."),t(),n(437,"p"),e(438,"A propriedade aceita os seguintes tipos:"),t(),n(439,"ul")(440,"li")(441,"code"),e(442,"string"),t(),e(443,": "),n(444,"em"),e(445,"Endpoint"),t(),e(446," usado pelo componente para requisi\xE7\xE3o via "),n(447,"code"),e(448,"POST"),t(),e(449,"."),t(),n(450,"li")(451,"code"),e(452,"function"),t(),e(453,": M\xE9todo que ser\xE1 executado."),t()(),n(454,"p"),e(455,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e os valores atualizados do formulario, conforme a interface `),n(456,"code"),e(457,"PoDynamicFormFieldChanged"),t()(),n(458,"p"),e(459,"O retorno desta fun\xE7\xE3o deve ser do tipo "),n(460,"a",31),e(461,"PoDynamicFormValidation"),t(),e(462,`,
onde o usu\xE1rio poder\xE1 determinar as novas atualiza\xE7\xF5es dos campos.
Por exemplo:`),t(),n(463,"pre")(464,"code"),e(465,`onChangeFields(changeValue): PoDynamicFormValidation {

if (changeValue.property === 'state') {

  return {
    value: { city: undefined },
    fields: [
      { property: 'city', options: this.getCity(changeValue.value.state) }
    ],
    focus: 'city'
  };
}
`),t()(),n(466,"p"),e(467,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),n(468,"code"),e(469,"bind"),t(),e(470,", por exemplo:"),t(),n(471,"pre")(472,"code"),e(473,`[p-validate]="this.myFunction.bind(this)"
`),t()(),n(474,"blockquote")(475,"p"),e(476,"Se houver uma lista de campos para valida\xE7\xE3o definida em "),n(477,"code"),e(478,"p-validate-fields"),t(),e(479,", a propriedade "),n(480,"code"),e(481,"validate"),t(),e(482," s\xF3 receber\xE1 o disparo para os campos equivalentes."),t()()()(),n(483,"tr",13)(484,"td",14)(485,"div",15)(486,"span",16),e(487," p-validate-fields"),i(488,"br"),t()()(),n(489,"td",17)(490,"code",32),e(491,"Array<string>"),t()(),n(492,"td",19),e(493,"-"),t(),n(494,"td",20)(495,"em")(496,"strong"),e(497,"(opcional)"),t()(),n(498,"p"),e(499,"Lista que define os campos que ir\xE3o disparar o validate do form."),t()()(),n(500,"tr",13)(501,"td",14)(502,"div",15)(503,"span",16),e(504," p-validate-on-input"),i(505,"br"),t()()(),n(506,"td",17)(507,"code",28),e(508,"boolean"),t()(),n(509,"td",19),e(510,"-"),t(),n(511,"td",20)(512,"em")(513,"strong"),e(514,"(opcional)"),t()(),n(515,"p"),e(516,"Ao informar esta propriedade, o componente passar\xE1 a emitir o valor a cada caractere digitado."),t(),n(517,"p"),e(518,"Pode ser aplicado nos seguintes componentes:"),t(),n(519,"ul")(520,"li"),e(521,"po-input"),t(),n(522,"li"),e(523,"po-number"),t(),n(524,"li"),e(525,"po-decimal"),t(),n(526,"li"),e(527,"po-textarea"),t(),n(528,"li"),e(529,"po-password"),t()(),n(530,"p"),e(531,"Deve informar os campos que deseja receber as emiss\xF5es na propriedade "),n(532,"code"),e(533,"p-validate-fields"),t(),e(534,"."),t()()(),n(535,"tr",13)(536,"td",14)(537,"div",15)(538,"span",16),e(539," p-value"),i(540,"br"),t()()(),n(541,"td",17)(542,"code",33),e(543,"any"),t()(),n(544,"td",19),e(545,"-"),t(),n(546,"td",20)(547,"p"),e(548,"Objeto que ser\xE1 utilizado como valor para exibir as informa\xE7\xF5es, ser\xE1 recuperado e preenchido atrav\xE9s do atributo "),n(549,"em"),e(550,"property"),t(),e(551,`
dos objetos contidos na propridade `),n(552,"code"),e(553,"p-fields"),t(),e(554,"."),t(),n(555,"p"),e(556,"Pode iniciar com valor ou apenas com um objeto vazio que ser\xE1 preenchido conforme descrito acima."),t(),n(557,"blockquote")(558,"p"),e(559,"Ex: "),n(560,"code"),e(561,"{ name: 'po' }"),t()()()()()(),n(562,"h3",9),e(563,"M\xE9todos"),t(),n(564,"table",34)(565,"tr",13)(566,"th",35)(567,"div",15)(568,"h4")(569,"span",16),e(570," focus "),t()()()()(),n(571,"tr",20)(572,"td",20)(573,"p"),e(574,"Fun\xE7\xE3o que atribui foco ao campo desejado."),t(),n(575,"p"),e(576,"Para utiliz\xE1-la \xE9 necess\xE1rio capturar a inst\xE2ncia do "),n(577,"code"),e(578,"dynamic form"),t(),e(579,", como por exemplo:"),t(),n(580,"pre")(581,"code",26),e(582,`<po-dynamic-form #dynamicForm [p-fields]="fields"></po-dynamic-form>
`),t()(),n(583,"pre")(584,"code",36),e(585,`import { PoDynamicFormComponent, PoDynamicFormField } from '@po-ui/ng-components';

...

@ViewChild('dynamicForm', { static: true }) dynamicForm: PoDynamicFormComponent;

fields: Array<PoDynamicFormField> = [
  { property: 'fieldOne' },
  { property: 'fieldTwo' }
];

fieldFocus() {
  this.dynamicForm.focus('fieldTwo');
}
`),t()()()()(),n(586,"h5")(587,"b"),e(588,"Par\xE2metros"),t()(),n(589,"table",10)(590,"tr",11)(591,"th",12),e(592,"Nome"),t(),n(593,"th",12),e(594,"Tipo"),t(),n(595,"th",12),e(596,"Descri\xE7\xE3o"),t()(),n(597,"tr",13)(598,"td",14),e(599," property"),t(),n(600,"td",17)(601,"code",37),e(602," string "),t()(),n(603,"td",20)(604,"p"),e(605,"Nome da propriedade atribu\xEDda ao "),n(606,"code"),e(607,"PoDynamicFormField.property"),t(),e(608,"."),t()()()(),i(609,"br"),n(610,"table",34)(611,"tr",13)(612,"th",35)(613,"div",15)(614,"h4")(615,"span",16),e(616," showAdditionalHelp "),t()()()()(),n(617,"tr",20)(618,"td",20)(619,"p"),e(620,"M\xE9todo que exibe "),n(621,"code"),e(622,"additionalHelpTooltip"),t(),e(623," ou executa a a\xE7\xE3o definida em "),n(624,"code"),e(625,"additionalHelp"),t(),e(626,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),n(627,"code"),e(628,"keydown"),t(),e(629,"."),t(),n(630,"pre")(631,"code"),e(632,`import { PoDynamicModule } from '@po-ui/ng-components';
...
@ViewChild('dynamicForm', { static: true }) dynamicForm: PoDynamicFormComponent;

fields: Array<PoDynamicFormField> = [
 {
   property: 'name',
   ...
   help: 'Mensagem de ajuda.',
   additionalHelpTooltip: 'Mensagem de ajuda complementar.',
   keydown: this.onKeyDown.bind(this, 'name')
 },
]

onKeyDown(property: string, event: KeyboardEvent): void {
 if (event.code === 'F9') {
   this.dynamicForm.showAdditionalHelp(property);
 }
}
`),t()()()()(),n(633,"h5")(634,"b"),e(635,"Par\xE2metros"),t()(),n(636,"table",10)(637,"tr",11)(638,"th",12),e(639,"Nome"),t(),n(640,"th",12),e(641,"Tipo"),t(),n(642,"th",12),e(643,"Descri\xE7\xE3o"),t()(),n(644,"tr",13)(645,"td",14),e(646," property"),t(),n(647,"td",17)(648,"code",37),e(649," string "),t()(),n(650,"td",20)(651,"p"),e(652,"Identificador da coluna."),t()()()(),i(653,"br"),n(654,"h3"),e(655,"Interfaces"),t(),n(656,"h4",38)(657,"code",5),e(658,"PoDynamicFormField"),t()(),n(659,"div",2)(660,"p"),e(661," Interface para defini\xE7\xE3o das propriedades dos campos de entrada que ser\xE3o criados dinamicamente."),t()(),n(662,"h4",9),e(663,"Propriedades"),t(),n(664,"table",10)(665,"tr",11)(666,"th",12),e(667,"Nome"),t(),n(668,"th",12),e(669,"Tipo"),t(),n(670,"th",12),e(671,"Descri\xE7\xE3o"),t()(),n(672,"tr",13)(673,"td",14)(674,"div",15)(675,"span",16),e(676," additionalHelp"),i(677,"br"),t()()(),n(678,"td",17)(679,"code",29),e(680,"Function"),t()(),n(681,"td",20)(682,"em")(683,"strong"),e(684,"(opcional)"),t()(),n(685,"p"),e(686,`Evento disparado ao clicar no \xEDcone de ajuda adicional.
Este evento ativa automaticamente a exibi\xE7\xE3o do \xEDcone de ajuda adicional ao `),n(687,"code"),e(688,"p-help"),t(),e(689,"."),t()()(),n(690,"tr",13)(691,"td",14)(692,"div",15)(693,"span",16),e(694," additionalHelpTooltip"),i(695,"br"),t()()(),n(696,"td",17)(697,"code",18),e(698,"string"),t()(),n(699,"td",20)(700,"em")(701,"strong"),e(702,"(opcional)"),t()(),n(703,"p"),e(704,"Exibe um \xEDcone de ajuda adicional ao "),n(705,"code"),e(706,"p-help"),t(),e(707,`, com o texto desta propriedade no tooltip.
Se o evento `),n(708,"code"),e(709,"p-additional-help"),t(),e(710,` estiver definido, o tooltip n\xE3o ser\xE1 exibido.
`),n(711,"strong"),e(712,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()()()(),n(713,"tr",13)(714,"td",14)(715,"div",15)(716,"span",16),e(717," advancedFilters"),i(718,"br"),t()()(),n(719,"td",17)(720,"code",39),e(721,"Array<PoLookupAdvancedFilter>"),t()(),n(722,"td",20)(723,"em")(724,"strong"),e(725,"(opcional)"),t()(),n(726,"p"),e(727,"Lista de objetos dos campos que ser\xE3o criados na busca avan\xE7ada."),t(),n(728,"blockquote")(729,"p"),e(730,"Caso n\xE3o seja passado um objeto ou ent\xE3o ele esteja em branco o link de busca avan\xE7ada ficar\xE1 escondido."),t()(),n(731,"p"),e(732,"Exemplo de URL com busca avan\xE7ada:"),t(),n(733,"p")(734,"code"),e(735,"url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro"),t()(),n(736,"p"),e(737,"Caso algum par\xE2metro seja uma lista, a concatena\xE7\xE3o \xE9 feita utilizando v\xEDrgula. Exemplo:"),t(),n(738,"p")(739,"code"),e(740,"url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan"),t()()()(),n(741,"tr",13)(742,"td",14)(743,"div",15)(744,"span",16),e(745," appendBox"),i(746,"br"),t()()(),n(747,"td",17)(748,"code",28),e(749,"boolean"),t()(),n(750,"td",20)(751,"em")(752,"strong"),e(753,"(opcional)"),t()(),n(754,"p"),e(755,"Define que o "),n(756,"code"),e(757,"listbox"),t(),e(758," e/ou tooltip ("),n(759,"code"),e(760,"p-additional-help-tooltip"),t(),e(761," e/ou "),n(762,"code"),e(763,"p-error-limit"),t(),e(764,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o \xE9 necess\xE1ria para cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),t(),n(765,"blockquote")(766,"p"),e(767,`O uso dessa propriedade pode acarretar na perda sequencial da tabula\xE7\xE3o da p\xE1gina.
Quando utilizado com `),n(768,"code"),e(769,"p-additional-help-tooltip"),t(),e(770,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),t()()()(),n(771,"tr",13)(772,"td",14)(773,"div",15)(774,"span",16),e(775," autoHeight"),i(776,"br"),t()()(),n(777,"td",17)(778,"code",28),e(779,"boolean"),t()(),n(780,"td",20)(781,"em")(782,"strong"),e(783,"(opcional)"),t()(),n(784,"p"),e(785,"Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis."),t(),n(786,"p")(787,"strong"),e(788,"Componentes compat\xEDveis:"),t(),n(789,"code"),e(790,"po-multiselect"),t(),e(791,", "),n(792,"code"),e(793,"po-lookup"),t(),e(794,"."),t()()(),n(795,"tr",13)(796,"td",14)(797,"div",15)(798,"span",16),e(799," autoUpload"),i(800,"br"),t()()(),n(801,"td",17)(802,"code",28),e(803,"boolean"),t()(),n(804,"td",20)(805,"em")(806,"strong"),e(807,"(opcional)"),t()(),n(808,"p"),e(809,"Define se o envio do arquivo ser\xE1 autom\xE1tico ao selecionar o mesmo."),t(),n(810,"p")(811,"strong"),e(812,"Componente compat\xEDvel"),t(),e(813,": "),n(814,"code"),e(815,"po-upload"),t()()()(),n(816,"tr",13)(817,"td",14)(818,"div",15)(819,"span",16),e(820," booleanFalse"),i(821,"br"),t()()(),n(822,"td",17)(823,"code",18),e(824,"string"),t()(),n(825,"td",20)(826,"em")(827,"strong"),e(828,"(opcional)"),t()(),n(829,"p"),e(830,"Texto exibido quando o valor do componente for "),n(831,"em"),e(832,"false"),t(),e(833,"."),t()()(),n(834,"tr",13)(835,"td",14)(836,"div",15)(837,"span",16),e(838," booleanTrue"),i(839,"br"),t()()(),n(840,"td",17)(841,"code",18),e(842,"string"),t()(),n(843,"td",20)(844,"em")(845,"strong"),e(846,"(opcional)"),t()(),n(847,"p"),e(848,"Texto exibido quando o valor do componente for "),n(849,"em"),e(850,"true"),t(),e(851,"."),t()()(),n(852,"tr",13)(853,"td",14)(854,"div",15)(855,"span",16),e(856," changeOnEnter"),i(857,"br"),t()()(),n(858,"td",17)(859,"code",28),e(860,"boolean"),t()(),n(861,"td",20)(862,"em")(863,"strong"),e(864,"(opcional)"),t()(),n(865,"p"),e(866,"Indica que o evento "),n(867,"code"),e(868,"p-change"),t(),e(869,' s\xF3 ser\xE1 disparado ao clicar ou pressionar a tecla "Enter" sobre uma op\xE7\xE3o selecionada no '),n(870,"code"),e(871,"po-combo"),t(),e(872,"."),t()()(),n(873,"tr",13)(874,"td",14)(875,"div",15)(876,"span",16),e(877," changeVisibleColumns"),i(878,"br"),t()()(),n(879,"td",17)(880,"code",29),e(881,"Function"),t()(),n(882,"td",20)(883,"em")(884,"strong"),e(885,"(opcional)"),t()(),n(886,"p"),e(887,"Evento disparado ao fechar o popover do gerenciador de colunas ap\xF3s alterar as colunas vis\xEDveis."),t(),n(888,"p"),e(889,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),t(),n(890,"p")(891,"strong"),e(892,"Componentes compat\xEDveis"),t(),e(893,": "),n(894,"code"),e(895,"po-lookup"),t()()()(),n(896,"tr",13)(897,"td",14)(898,"div",15)(899,"span",16),e(900," clean"),i(901,"br"),t()()(),n(902,"td",17)(903,"code",28),e(904,"boolean"),t()(),n(905,"td",20)(906,"em")(907,"strong"),e(908,"(opcional)"),t()(),n(909,"p"),e(910,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),t(),n(911,"p")(912,"strong"),e(913,"Componentes compat\xEDveis:"),t(),n(914,"code"),e(915,"po-datepicker"),t(),e(916,", "),n(917,"code"),e(918,"po-datepicker-range"),t(),e(919,", "),n(920,"code"),e(921,"po-input"),t(),e(922,", "),n(923,"code"),e(924,"po-number"),t(),e(925,", "),n(926,"code"),e(927,"po-decimal"),t(),e(928,", "),n(929,"code"),e(930,"po-combo"),t(),e(931,", "),n(932,"code"),e(933,"po-lookup"),t(),e(934,", "),n(935,"code"),e(936,"po-password"),t()()()(),n(937,"tr",13)(938,"td",14)(939,"div",15)(940,"span",16),e(941," columnRestoreManager"),i(942,"br"),t()()(),n(943,"td",17)(944,"code",29),e(945,"Function"),t()(),n(946,"td",20)(947,"em")(948,"strong"),e(949,"(opcional)"),t()(),n(950,"p"),e(951,"Evento disparado ao clicar no bot\xE3o de restaurar padr\xE3o no gerenciador de colunas."),t(),n(952,"p"),e(953,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),t(),n(954,"p")(955,"strong"),e(956,"Componentes compat\xEDveis"),t(),e(957,": "),n(958,"code"),e(959,"po-lookup"),t()()()(),n(960,"tr",13)(961,"td",14)(962,"div",15)(963,"span",16),e(964," columns"),i(965,"br"),t()()(),n(966,"td",17)(967,"code",40),e(968,"Array<PoLookupColumn> "),t(),n(969,"code",41),e(970," number"),t()(),n(971,"td",20)(972,"em")(973,"strong"),e(974,"(opcional)"),t()(),n(975,"p"),e(976,"Define as colunas para utiliza\xE7\xE3o da busca avan\xE7ada. Usada somente em conjunto com a propriedade "),n(977,"code"),e(978,"searchService"),t(),e(979,`,
essa propriedade deve receber um array de objetos que implementam a interface `),n(980,"a",42)(981,"code"),e(982,"PoLookupColumn"),t()(),e(983,"."),t(),n(984,"blockquote")(985,"p"),e(986,"Caso sejam informadas colunas, deve-se obrigatoriamente conter colunas definidas como "),n(987,"em"),e(988,"label"),t(),e(989," e "),n(990,"em"),e(991,"value"),t(),e(992,` para valores
de tela e do model respectivamente.`),t()(),n(993,"p")(994,"strong"),e(995,"Componentes compat\xEDveis:"),t(),n(996,"code"),e(997,"po-radio-group"),t(),e(998,", "),n(999,"code"),e(1e3,"po-lookup"),t(),e(1001,", "),n(1002,"code"),e(1003,"po-checkbox-group"),t(),e(1004,"."),t()()(),n(1005,"tr",13)(1006,"td",14)(1007,"div",15)(1008,"span",16),e(1009," container"),i(1010,"br"),t()()(),n(1011,"td",17)(1012,"code",18),e(1013,"string"),t()(),n(1014,"td",20)(1015,"em")(1016,"strong"),e(1017,"(opcional)"),t()(),n(1018,"p"),e(1019,`Exibir\xE1 um container para todos os campos abaixo dessa propriedade.
Esta propriedade configura o layout dos componentes dynamic-view e dynamic-edit, deixando todos os items dentro de containers`),t(),n(1020,"p"),e(1021,"Est\xE1 propriedade \xE9 do tipo string, o valor que ser\xE1 titulo do contianer"),t()()(),n(1022,"tr",13)(1023,"td",14)(1024,"div",15)(1025,"span",16),e(1026," customAction"),i(1027,"br"),t()()(),n(1028,"td",17)(1029,"code",43),e(1030,"PoProgressAction"),t()(),n(1031,"td",20)(1032,"em")(1033,"strong"),e(1034,"(opcional)"),t()(),n(1035,"p"),e(1036,"Define uma a\xE7\xE3o personalizada no componente "),n(1037,"code"),e(1038,"po-upload"),t(),e(1039,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),t(),n(1040,"p")(1041,"strong"),e(1042,"Componente compat\xEDvel"),t(),e(1043,": "),n(1044,"code"),e(1045,"po-upload"),t(),e(1046,","),t(),n(1047,"p")(1048,"strong"),e(1049,"Exemplo de configura\xE7\xE3o"),t(),e(1050,":"),t(),n(1051,"pre")(1052,"code",44),e(1053,`customAction: {
  label: 'Baixar',
  icon: 'an-download',
  type: 'default',
  visible: true,
  disabled: false
};
`),t()()()(),n(1054,"tr",13)(1055,"td",14)(1056,"div",15)(1057,"span",16),e(1058," customActionClick"),i(1059,"br"),t()()(),n(1060,"td",17)(1061,"code",45),e(1062,"(file: PoUploadFile) => void"),t()(),n(1063,"td",20)(1064,"em")(1065,"strong"),e(1066,"(opcional)"),t()(),n(1067,"p"),e(1068,"Evento emitido ao clicar na a\xE7\xE3o personalizada configurada no "),n(1069,"code"),e(1070,"p-custom-action"),t(),e(1071,"."),t(),n(1072,"p")(1073,"strong"),e(1074,"Componente compat\xEDvel"),t(),e(1075,": "),n(1076,"code"),e(1077,"po-upload"),t(),e(1078,","),t(),n(1079,"p"),e(1080,`Este evento \xE9 emitido quando o bot\xE3o de a\xE7\xE3o personalizada \xE9 clicado na barra de progresso associada a um arquivo.
O arquivo relacionado \xE0 barra de progresso ser\xE1 passado como par\xE2metro do evento, permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),t(),n(1081,"p")(1082,"strong"),e(1083,"Par\xE2metro do evento"),t(),e(1084,":"),t(),n(1085,"ul")(1086,"li")(1087,"code"),e(1088,"file"),t(),e(1089,": O arquivo associado ao bot\xE3o de a\xE7\xE3o. Este objeto \xE9 da classe "),n(1090,"code"),e(1091,"PoUploadFile"),t(),e(1092," e cont\xE9m informa\xE7\xF5es sobre o arquivo, como nome, status e progresso."),t()(),n(1093,"p")(1094,"strong"),e(1095,"Exemplo de uso"),t(),e(1096,":"),t(),n(1097,"pre")(1098,"code",44),e(1099,`customActionClick: (file: PoUploadFile) => {
  console.log('A\xE7\xE3o personalizada clicada para o arquivo:', file.name);
  // L\xF3gica de download ou outra a\xE7\xE3o relacionada ao arquivo
}
`),t()()()(),n(1100,"tr",13)(1101,"td",14)(1102,"div",15)(1103,"span",16),e(1104," debounceTime"),i(1105,"br"),t()()(),n(1106,"td",17)(1107,"code",41),e(1108,"number"),t()(),n(1109,"td",20)(1110,"em")(1111,"strong"),e(1112,"(opcional)"),t()(),n(1113,"p"),e(1114,"Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro ap\xF3s cada pressionamento de tecla. Ser\xE1 utilizada apenas quando houver servi\xE7o ("),n(1115,"code"),e(1116,"p-filter-service"),t(),e(1117,")."),t(),n(1118,"p")(1119,"strong"),e(1120,"Componentes compat\xEDveis:"),t(),n(1121,"code"),e(1122,"po-combo"),t(),e(1123,", "),n(1124,"code"),e(1125,"po-multiselect"),t(),e(1126,"."),t()()(),n(1127,"tr",13)(1128,"td",14)(1129,"div",15)(1130,"span",16),e(1131," decimalsLength"),i(1132,"br"),t()()(),n(1133,"td",17)(1134,"code",41),e(1135,"number"),t()(),n(1136,"td",20)(1137,"em")(1138,"strong"),e(1139,"(opcional)"),t()(),n(1140,"p"),e(1141,"Quantidade m\xE1xima de casas decimais."),t(),n(1142,"blockquote")(1143,"p"),e(1144,"Esta propriedade s\xF3 pode ser utilizada quando o "),n(1145,"code"),e(1146,"type"),t(),e(1147," for "),n(1148,"em"),e(1149,"currency"),t(),e(1150," ou "),n(1151,"em"),e(1152,"decimal"),t(),e(1153,"."),t()()()(),n(1154,"tr",13)(1155,"td",14)(1156,"div",15)(1157,"span",16),e(1158," directory"),i(1159,"br"),t()()(),n(1160,"td",17)(1161,"code",28),e(1162,"boolean"),t()(),n(1163,"td",20)(1164,"em")(1165,"strong"),e(1166,"(opcional)"),t()(),n(1167,"p"),e(1168,"Permite a sele\xE7\xE3o de diret\xF3rios contendo um ou mais arquivos para envio."),t(),n(1169,"blockquote")(1170,"p"),e(1171,"A habilita\xE7\xE3o desta propriedade se restringe apenas \xE0 sele\xE7\xE3o de diret\xF3rios."),t()(),n(1172,"blockquote")(1173,"p"),e(1174,"Defini\xE7\xE3o n\xE3o suportada pelo browser "),n(1175,"strong"),e(1176,"Internet Explorer"),t(),e(1177,", todavia ser\xE1 poss\xEDvel a sele\xE7\xE3o de arquivos padr\xE3o."),t()(),n(1178,"p")(1179,"strong"),e(1180,"Componente compat\xEDvel"),t(),e(1181,": "),n(1182,"code"),e(1183,"po-upload"),t()()()(),n(1184,"tr",13)(1185,"td",14)(1186,"div",15)(1187,"span",16),e(1188," disabled"),i(1189,"br"),t()()(),n(1190,"td",17)(1191,"code",28),e(1192,"boolean"),t()(),n(1193,"td",20)(1194,"em")(1195,"strong"),e(1196,"(opcional)"),t()(),n(1197,"p"),e(1198,"Desabilita o campo caso informar o valor "),n(1199,"em"),e(1200,"true"),t(),e(1201,"."),t()()(),n(1202,"tr",13)(1203,"td",14)(1204,"div",15)(1205,"span",16),e(1206," disabledInitFilter"),i(1207,"br"),t()()(),n(1208,"td",17)(1209,"code",28),e(1210,"boolean"),t()(),n(1211,"td",20)(1212,"em")(1213,"strong"),e(1214,"(opcional)"),t()(),n(1215,"p"),e(1216,"Desabilita o filtro inicial no servi\xE7o do "),n(1217,"code"),e(1218,"po-combo"),t(),e(1219,", que \xE9 executado no primeiro clique no campo."),t()()(),n(1220,"tr",13)(1221,"td",14)(1222,"div",15)(1223,"span",16),e(1224," disabledTabFilter"),i(1225,"br"),t()()(),n(1226,"td",17)(1227,"code",28),e(1228,"boolean"),t()(),n(1229,"td",20)(1230,"em")(1231,"strong"),e(1232,"(opcional)"),t()(),n(1233,"p"),e(1234,"Se verdadeiro, desabilitar\xE1 a busca de um item via TAB no "),n(1235,"code"),e(1236,"po-combo"),t(),e(1237,"."),t()()(),n(1238,"tr",13)(1239,"td",14)(1240,"div",15)(1241,"span",16),e(1242," divider"),i(1243,"br"),t()()(),n(1244,"td",17)(1245,"code",18),e(1246,"string"),t()(),n(1247,"td",20)(1248,"em")(1249,"strong"),e(1250,"(opcional)"),t()(),n(1251,"p"),e(1252,"Exibir\xE1 um divisor acima, utilizando o seu conteudo como t\xEDtulo."),t()()(),n(1253,"tr",13)(1254,"td",14)(1255,"div",15)(1256,"span",16),e(1257," dragDrop"),i(1258,"br"),t()()(),n(1259,"td",17)(1260,"code",28),e(1261,"boolean"),t()(),n(1262,"td",20)(1263,"em")(1264,"strong"),e(1265,"(opcional)"),t()(),n(1266,"p"),e(1267,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),t(),n(1268,"blockquote")(1269,"p"),e(1270,"Recomendamos utilizar apenas um "),n(1271,"code"),e(1272,"po-upload"),t(),e(1273," com esta funcionalidade por tela."),t()(),n(1274,"p")(1275,"strong"),e(1276,"Componente compat\xEDvel"),t(),e(1277,": "),n(1278,"code"),e(1279,"po-upload"),t()()()(),n(1280,"tr",13)(1281,"td",14)(1282,"div",15)(1283,"span",16),e(1284," dragDropHeight"),i(1285,"br"),t()()(),n(1286,"td",17)(1287,"code",41),e(1288,"number"),t()(),n(1289,"td",20)(1290,"em")(1291,"strong"),e(1292,"(opcional)"),t()(),n(1293,"p"),e(1294,"Define em "),n(1295,"em"),e(1296,"pixels"),t(),e(1297," a altura da \xE1rea onde podem ser arrastados os arquivos. A altura m\xEDnima aceita \xE9 "),n(1298,"code"),e(1299,"160px"),t(),e(1300,"."),t(),n(1301,"blockquote")(1302,"p"),e(1303,"Esta propriedade funciona somente se a propriedade "),n(1304,"code"),e(1305,"p-drag-drop"),t(),e(1306," estiver habilitada."),t()(),n(1307,"p")(1308,"strong"),e(1309,"Componente compat\xEDvel"),t(),e(1310,": "),n(1311,"code"),e(1312,"po-upload"),t()()()(),n(1313,"tr",13)(1314,"td",14)(1315,"div",15)(1316,"span",16),e(1317," errorAsyncFunction"),i(1318,"br"),t()()(),n(1319,"td",17)(1320,"code",46),e(1321,"(value) => Observable<boolean>"),t()(),n(1322,"td",20)(1323,"em")(1324,"strong"),e(1325,"(opcional)"),t()(),n(1326,"p"),e(1327,`Fun\xE7\xE3o executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),n(1328,"code"),e(1329,"change"),t(),e(1330," ou "),n(1331,"code"),e(1332,"change-model"),t(),e(1333,", dependendo do valor da propriedade "),n(1334,"code"),e(1335,"triggerMode"),t(),e(1336,"."),t(),n(1337,"blockquote")(1338,"p"),e(1339,"Retorna "),n(1340,"code"),e(1341,"Observable com o valor true"),t(),e(1342," para sinalizar o erro "),n(1343,"code"),e(1344,"false"),t(),e(1345," para indicar que n\xE3o h\xE1 erro."),t()(),n(1346,"p")(1347,"strong"),e(1348,"Componente compat\xEDvel"),t(),e(1349,": "),n(1350,"code"),e(1351,"po-datepicker"),t()()()(),n(1352,"tr",13)(1353,"td",14)(1354,"div",15)(1355,"span",16),e(1356," errorAsyncProperties"),i(1357,"br"),t()()(),n(1358,"td",17)(1359,"code",47),e(1360,"ErrorAsyncProperties"),t()(),n(1361,"td",20)(1362,"em")(1363,"strong"),e(1364,"(opcional)"),t()(),n(1365,"p"),e(1366,"Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente."),t(),n(1367,"p")(1368,"strong"),e(1369,"Componentes compat\xEDveis:"),t(),n(1370,"code"),e(1371,"po-input"),t(),e(1372,", "),n(1373,"code"),e(1374,"po-number"),t(),e(1375,", "),n(1376,"code"),e(1377,"po-decimal"),t(),e(1378,", "),n(1379,"code"),e(1380,"po-password"),t(),e(1381,"."),t()()(),n(1382,"tr",13)(1383,"td",14)(1384,"div",15)(1385,"span",16),e(1386," errorLimit"),i(1387,"br"),t()()(),n(1388,"td",17)(1389,"code",28),e(1390,"boolean"),t()(),n(1391,"td",20)(1392,"em")(1393,"strong"),e(1394,"(opcional)"),t()(),n(1395,"p"),e(1396,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),n(1397,"blockquote")(1398,"p"),e(1399,"Caso essa propriedade seja definida como "),n(1400,"code"),e(1401,"true"),t(),e(1402,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()(),n(1403,"p")(1404,"strong"),e(1405,"Componentes compat\xEDveis:"),t(),n(1406,"code"),e(1407,"po-datepicker"),t(),e(1408,", "),n(1409,"code"),e(1410,"po-input"),t(),e(1411,", "),n(1412,"code"),e(1413,"po-number"),t(),e(1414,", "),n(1415,"code"),e(1416,"po-decimal"),t(),e(1417,", "),n(1418,"code"),e(1419,"po-password"),t(),e(1420,", "),n(1421,"code"),e(1422,"po-datepicker-range"),t(),e(1423,", "),n(1424,"code"),e(1425,"po-select"),t(),e(1426,", "),n(1427,"code"),e(1428,"po-checkbox-group"),t(),e(1429,", "),n(1430,"code"),e(1431,"po-radio-group"),t(),e(1432,", "),n(1433,"code"),e(1434,"po-multiselect"),t(),e(1435,", "),n(1436,"code"),e(1437,"po-combo"),t(),e(1438,", "),n(1439,"code"),e(1440,"po-lookup"),t(),e(1441,", "),n(1442,"code"),e(1443,"po-textarea"),t(),e(1444,"."),t()()(),n(1445,"tr",13)(1446,"td",14)(1447,"div",15)(1448,"span",16),e(1449," errorMessage"),i(1450,"br"),t()()(),n(1451,"td",17)(1452,"code",18),e(1453,"string"),t()(),n(1454,"td",20)(1455,"em")(1456,"strong"),e(1457,"(opcional)"),t()(),n(1458,"p"),e(1459,"Mensagem que ser\xE1 apresentada quando o campo ficar inv\xE1lido."),t(),n(1460,"p"),e(1461,"O campo fica inv\xE1lido quando as seguintes propriedades n\xE3o forem respeitadas:"),t(),n(1462,"ul")(1463,"li"),e(1464,"pattern;"),t(),n(1465,"li"),e(1466,"minValue;"),t(),n(1467,"li"),e(1468,"maxValue;"),t(),n(1469,"li"),e(1470,"required;"),t()(),n(1471,"blockquote")(1472,"p"),e(1473,`Esta mensagem pode ser exibida quando o campo estiver vazio, caso seja requerido. Em casos de componentes como
`),n(1474,"code"),e(1475,"po-datepicker"),t(),e(1476,", "),n(1477,"code"),e(1478,"po-input"),t(),e(1479,", "),n(1480,"code"),e(1481,"po-number"),t(),e(1482,", "),n(1483,"code"),e(1484,"po-decimal"),t(),e(1485,", "),n(1486,"code"),e(1487,"po-password"),t(),e(1488,`, \xE9 necess\xE1rio que a propriedade
`),n(1489,"code"),e(1490,"requiredFieldErrorMessage"),t(),e(1491," esteja como "),n(1492,"code"),e(1493,"true"),t(),e(1494,` para que a mensagem seja exibida com o campo vazio. Componentes
como `),n(1495,"code"),e(1496,"po-datepicker-range"),t(),e(1497,", "),n(1498,"code"),e(1499,"po-select"),t(),e(1500,", "),n(1501,"code"),e(1502,"po-checkbox-group"),t(),e(1503,", "),n(1504,"code"),e(1505,"po-radio-group"),t(),e(1506,", "),n(1507,"code"),e(1508,"po-multiselect"),t(),e(1509,", "),n(1510,"code"),e(1511,"po-combo"),t(),e(1512,`,
`),n(1513,"code"),e(1514,"po-lookup"),t(),e(1515," e "),n(1516,"code"),e(1517,"po-textarea"),t(),e(1518," n\xE3o \xE9 necess\xE1rio passar a propriedade "),n(1519,"code"),e(1520,"requiredFieldErrorMessage"),t(),e(1521,"."),t()(),n(1522,"p")(1523,"strong"),e(1524,"Componentes compat\xEDveis:"),t(),n(1525,"code"),e(1526,"po-datepicker"),t(),e(1527,", "),n(1528,"code"),e(1529,"po-input"),t(),e(1530,", "),n(1531,"code"),e(1532,"po-number"),t(),e(1533,", "),n(1534,"code"),e(1535,"po-decimal"),t(),e(1536,", "),n(1537,"code"),e(1538,"po-password"),t(),e(1539,", "),n(1540,"code"),e(1541,"po-datepicker-range"),t(),e(1542,", "),n(1543,"code"),e(1544,"po-select"),t(),e(1545,", "),n(1546,"code"),e(1547,"po-checkbox-group"),t(),e(1548,", "),n(1549,"code"),e(1550,"po-radio-group"),t(),e(1551,", "),n(1552,"code"),e(1553,"po-multiselect"),t(),e(1554,", "),n(1555,"code"),e(1556,"po-combo"),t(),e(1557,", "),n(1558,"code"),e(1559,"po-lookup"),t(),e(1560,", "),n(1561,"code"),e(1562,"po-textarea"),t(),e(1563,"."),t()()(),n(1564,"tr",13)(1565,"td",14)(1566,"div",15)(1567,"span",16),e(1568," fieldLabel"),i(1569,"br"),t()()(),n(1570,"td",17)(1571,"code",18),e(1572,"string"),t()(),n(1573,"td",20)(1574,"em")(1575,"strong"),e(1576,"(opcional)"),t()(),n(1577,"p"),e(1578,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como descri\xE7\xE3o do campo."),t(),n(1579,"p"),e(1580,"O valor padr\xE3o \xE9: "),n(1581,"code"),e(1582,"label"),t(),e(1583,"."),t(),n(1584,"blockquote")(1585,"p"),e(1586,"Esta propriedade pode ser utilizada em conjunto com: "),n(1587,"code"),e(1588,"options"),t(),e(1589,", "),n(1590,"code"),e(1591,"optionsService"),t(),e(1592," e "),n(1593,"code"),e(1594,"searchService"),t(),e(1595,"."),t()()()(),n(1596,"tr",13)(1597,"td",14)(1598,"div",15)(1599,"span",16),e(1600," fieldValue"),i(1601,"br"),t()()(),n(1602,"td",17)(1603,"code",18),e(1604,"string"),t()(),n(1605,"td",20)(1606,"em")(1607,"strong"),e(1608,"(opcional)"),t()(),n(1609,"p"),e(1610,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como valor do campo."),t(),n(1611,"p"),e(1612,"O valor padr\xE3o \xE9: "),n(1613,"code"),e(1614,"value"),t(),e(1615,"."),t(),n(1616,"blockquote")(1617,"p"),e(1618,"Esta propriedade pode ser utilizada em conjunto com: "),n(1619,"code"),e(1620,"options"),t(),e(1621,", "),n(1622,"code"),e(1623,"optionsService"),t(),e(1624," e "),n(1625,"code"),e(1626,"searchService"),t(),e(1627,"."),t()()()(),n(1628,"tr",13)(1629,"td",14)(1630,"div",15)(1631,"span",16),e(1632," filterMinlength"),i(1633,"br"),t()()(),n(1634,"td",17)(1635,"code",41),e(1636,"number"),t()(),n(1637,"td",20)(1638,"em")(1639,"strong"),e(1640,"(opcional)"),t()(),n(1641,"p"),e(1642,"Valor m\xEDnimo de caracteres para realizar o filtro no servi\xE7o do "),n(1643,"code"),e(1644,"po-combo"),t(),e(1645,"."),t()()(),n(1646,"tr",13)(1647,"td",14)(1648,"div",15)(1649,"span",16),e(1650," filterMode"),i(1651,"br"),t()()(),n(1652,"td",17)(1653,"code",48),e(1654,"PoMultiselectFilterMode"),t()(),n(1655,"td",20)(1656,"em")(1657,"strong"),e(1658,"(opcional)"),t()(),n(1659,"p"),e(1660,"Define o modo de pesquisa utilizado no filtro da lista de sele\xE7\xE3o: "),n(1661,"code"),e(1662,"startsWith"),t(),e(1663,", "),n(1664,"code"),e(1665,"contains"),t(),e(1666," ou "),n(1667,"code"),e(1668,"endsWith"),t(),e(1669,"."),t(),n(1670,"blockquote")(1671,"p"),e(1672,"Quando utilizar a propriedade p-filter-service esta propriedade ser\xE1 ignorada."),t()(),n(1673,"p")(1674,"strong"),e(1675,"Componentes compat\xEDveis:"),t(),n(1676,"code"),e(1677,"po-multiselect"),t(),e(1678,"."),t()()(),n(1679,"tr",13)(1680,"td",14)(1681,"div",15)(1682,"span",16),e(1683," forceBooleanComponentType"),i(1684,"br"),t()()(),n(1685,"td",17)(1686,"code",49),e(1687,"ForceBooleanComponentEnum"),t()(),n(1688,"td",20)(1689,"em")(1690,"strong"),e(1691,"(opcional)"),t()(),n(1692,"p"),e(1693,"Valores aceitos:"),t(),n(1694,"ul")(1695,"li"),e(1696,"ForceBooleanComponentEnum.switch"),t(),n(1697,"li"),e(1698,"ForceBooleanComponentEnum.checkbox"),t()()()(),n(1699,"tr",13)(1700,"td",14)(1701,"div",15)(1702,"span",16),e(1703," forceOptionsComponentType"),i(1704,"br"),t()()(),n(1705,"td",17)(1706,"code",50),e(1707,"ForceOptionComponentEnum"),t()(),n(1708,"td",20)(1709,"em")(1710,"strong"),e(1711,"(opcional)"),t()(),n(1712,"p"),e(1713,"pode ser utilizada em conjunto com a propriedade "),n(1714,"code"),e(1715,"options"),t(),e(1716," for\xE7ando o componente a renderizar um "),n(1717,"code"),e(1718,"po-select"),t(),e(1719," ou "),n(1720,"code"),e(1721,"po-radio-group"),t(),e(1722,"."),t(),n(1723,"p"),e(1724,"Valores aceitos:"),t(),n(1725,"ul")(1726,"li"),e(1727,"ForceOptionComponentEnum.radioGroup"),t(),n(1728,"li"),e(1729,"ForceOptionComponentEnum.select"),t()(),n(1730,"blockquote")(1731,"p"),e(1732,"Essa propriedade ser\xE1 ignorada caso seja utilizada em conjunto com a propriedade "),n(1733,"code"),e(1734,"optionsMulti"),t(),e(1735," e "),n(1736,"code"),e(1737,"optionsService"),t(),e(1738,"."),t()()()(),n(1739,"tr",13)(1740,"td",14)(1741,"div",15)(1742,"span",16),e(1743," formField"),i(1744,"br"),t()()(),n(1745,"td",17)(1746,"code",18),e(1747,"string"),t()(),n(1748,"td",20)(1749,"em")(1750,"strong"),e(1751,"(opcional)"),t()(),n(1752,"p"),e(1753,"Nome do campo de formul\xE1rio que ser\xE1 enviado para o servi\xE7o informado na propriedade "),n(1754,"code"),e(1755,"url"),t(),e(1756,"."),t(),n(1757,"blockquote")(1758,"p"),e(1759,"O valor default \xE9 "),n(1760,"code"),e(1761,"files"),t()()(),n(1762,"p")(1763,"strong"),e(1764,"Componente compat\xEDvel"),t(),e(1765,": "),n(1766,"code"),e(1767,"po-upload"),t()()()(),n(1768,"tr",13)(1769,"td",14)(1770,"div",15)(1771,"span",16),e(1772," format"),i(1773,"br"),t()()(),n(1774,"td",17)(1775,"code",18),e(1776,"string "),t(),n(1777,"code",32),e(1778," Array<string>"),t()(),n(1779,"td",20)(1780,"em")(1781,"strong"),e(1782,"(opcional)"),t()(),n(1783,"p"),e(1784,"Formato de exibi\xE7\xE3o no campo."),t(),n(1785,"p"),e(1786,"Ao utilizar esta propriedade com o "),n(1787,"code"),e(1788,"type"),t(),n(1789,"em"),e(1790,"PoDynamicFieldType.Date"),t(),e(1791," ou "),n(1792,"em"),e(1793,"PoDynamicFieldType.DateTime"),t(),e(1794,`,
pode ser utilizada para formata\xE7\xE3o de exibi\xE7\xE3o da data:`),t(),n(1795,"p"),e(1796,"Valores v\xE1lidos:"),t(),n(1797,"ul")(1798,"li"),e(1799,"dd/mm/yyyy"),t(),n(1800,"li"),e(1801,"mm/dd/yyyy"),t(),n(1802,"li"),e(1803,"yyyy/mm/dd"),t()(),n(1804,"p"),e(1805,"Tamb\xE9m pode-se utilizar em conjunto com "),n(1806,"code"),e(1807,"searchService"),t(),e(1808,`, informando uma lista de propriedades que ser\xE1 utilizado
para formata\xE7\xE3o da exibi\xE7\xE3o no campo, por exemplo: ["id", "name"].`),t()()(),n(1809,"tr",13)(1810,"td",14)(1811,"div",15)(1812,"span",16),e(1813," formatModel"),i(1814,"br"),t()()(),n(1815,"td",17)(1816,"code",28),e(1817,"boolean"),t()(),n(1818,"td",20)(1819,"em")(1820,"strong"),e(1821,"(opcional)"),t()(),n(1822,"p"),e(1823,"Indica se o "),n(1824,"code"),e(1825,"model"),t(),e(1826," receber\xE1 o valor formatado pelas propriedades "),n(1827,"code"),e(1828,"p-label-on"),t(),e(1829," e "),n(1830,"code"),e(1831,"p-label-off"),t(),e(1832,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),t(),n(1833,"p"),e(1834,"O valor padr\xE3o \xE9: "),n(1835,"code"),e(1836,"false"),t(),e(1837,"."),t(),n(1838,"blockquote")(1839,"p"),e(1840,"Esta propriedade est\xE1 disponivel apenas para o "),n(1841,"code"),e(1842,"swicth"),t(),e(1843,"."),t()()()(),n(1844,"tr",13)(1845,"td",14)(1846,"div",15)(1847,"span",16),e(1848," gridColumns"),i(1849,"br"),t()()(),n(1850,"td",17)(1851,"code",41),e(1852,"number"),t()(),n(1853,"td",20)(1854,"em")(1855,"strong"),e(1856,"(opcional)"),t()(),n(1857,"p"),e(1858,"Tamanho de exibi\xE7\xE3o do campo em telas."),t(),n(1859,"p"),e(1860,"Deve ser usado o sistema de "),n(1861,"strong"),e(1862,"grid"),t(),e(1863," do PO (1 ... 12 colunas)."),t(),n(1864,"blockquote")(1865,"p"),e(1866,"Esta propriedade \xE9 generica, aplica o valor em todos os tamanhos de telas."),t()()()(),n(1867,"tr",13)(1868,"td",14)(1869,"div",15)(1870,"span",16),e(1871," gridLgColumns"),i(1872,"br"),t()()(),n(1873,"td",17)(1874,"code",41),e(1875,"number"),t()(),n(1876,"td",20)(1877,"em")(1878,"strong"),e(1879,"(opcional)"),t()(),n(1880,"p"),e(1881,"Tamanho de exibi\xE7\xE3o do campo em telas grandes (lg)."),t(),n(1882,"p"),e(1883,"Deve ser usado o sistema de "),n(1884,"strong"),e(1885,"grid"),t(),e(1886," do PO (1 ... 12 colunas)."),t(),n(1887,"blockquote")(1888,"p"),e(1889,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(1890,"code"),e(1891,"gridColumns"),t(),e(1892,"."),t()()()(),n(1893,"tr",13)(1894,"td",14)(1895,"div",15)(1896,"span",16),e(1897," gridLgPull"),i(1898,"br"),t()()(),n(1899,"td",17)(1900,"code",41),e(1901,"number"),t()(),n(1902,"td",20)(1903,"em")(1904,"strong"),e(1905,"(opcional)"),t()(),n(1906,"p"),e(1907,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas grandes (lg)."),t(),n(1908,"p"),e(1909,"Deve ser usado o sistema de "),n(1910,"strong"),e(1911,"grid"),t(),e(1912," do PO (1 ... 11 colunas)."),t(),n(1913,"blockquote")(1914,"p"),e(1915,"Esta propriedade n\xE3o funciona com a propriedade "),n(1916,"code"),e(1917,"gridColumns"),t(),e(1918,". Deve-se especificar o tamanho da tela."),t()()()(),n(1919,"tr",13)(1920,"td",14)(1921,"div",15)(1922,"span",16),e(1923," gridMdColumns"),i(1924,"br"),t()()(),n(1925,"td",17)(1926,"code",41),e(1927,"number"),t()(),n(1928,"td",20)(1929,"em")(1930,"strong"),e(1931,"(opcional)"),t()(),n(1932,"p"),e(1933,"Tamanho de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),t(),n(1934,"p"),e(1935,"Deve ser usado o sistema de "),n(1936,"strong"),e(1937,"grid"),t(),e(1938," do PO (1 ... 12 colunas)."),t(),n(1939,"blockquote")(1940,"p"),e(1941,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(1942,"code"),e(1943,"gridColumns"),t(),e(1944,"."),t()()()(),n(1945,"tr",13)(1946,"td",14)(1947,"div",15)(1948,"span",16),e(1949," gridMdPull"),i(1950,"br"),t()()(),n(1951,"td",17)(1952,"code",41),e(1953,"number"),t()(),n(1954,"td",20)(1955,"em")(1956,"strong"),e(1957,"(opcional)"),t()(),n(1958,"p"),e(1959,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas m\xE9dias (md)."),t(),n(1960,"p"),e(1961,"Deve ser usado o sistema de "),n(1962,"strong"),e(1963,"grid"),t(),e(1964," do PO (1 ... 11 colunas)."),t(),n(1965,"blockquote")(1966,"p"),e(1967,"Esta propriedade n\xE3o funciona com a propriedade "),n(1968,"code"),e(1969,"gridColumns"),t(),e(1970,". Deve-se especificar o tamanho da tela."),t()()()(),n(1971,"tr",13)(1972,"td",14)(1973,"div",15)(1974,"span",16),e(1975," gridSmColumns"),i(1976,"br"),t()()(),n(1977,"td",17)(1978,"code",41),e(1979,"number"),t()(),n(1980,"td",20)(1981,"em")(1982,"strong"),e(1983,"(opcional)"),t()(),n(1984,"p"),e(1985,"Tamanho de exibi\xE7\xE3o do campo em telas menores (sm)."),t(),n(1986,"p"),e(1987,"Deve ser usado o sistema de "),n(1988,"strong"),e(1989,"grid"),t(),e(1990," do PO (1 ... 12 colunas)."),t(),n(1991,"blockquote")(1992,"p"),e(1993,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(1994,"code"),e(1995,"gridColumns"),t(),e(1996,"."),t()()()(),n(1997,"tr",13)(1998,"td",14)(1999,"div",15)(2e3,"span",16),e(2001," gridSmPull"),i(2002,"br"),t()()(),n(2003,"td",17)(2004,"code",41),e(2005,"number"),t()(),n(2006,"td",20)(2007,"em")(2008,"strong"),e(2009,"(opcional)"),t()(),n(2010,"p"),e(2011,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas menores (sm)."),t(),n(2012,"p"),e(2013,"Deve ser usado o sistema de "),n(2014,"strong"),e(2015,"grid"),t(),e(2016," do PO (1 ... 11 colunas)."),t(),n(2017,"blockquote")(2018,"p"),e(2019,"Esta propriedade n\xE3o funciona com a propriedade "),n(2020,"code"),e(2021,"gridColumns"),t(),e(2022,". Deve-se especificar o tamanho da tela."),t()()()(),n(2023,"tr",13)(2024,"td",14)(2025,"div",15)(2026,"span",16),e(2027," gridXlColumns"),i(2028,"br"),t()()(),n(2029,"td",17)(2030,"code",41),e(2031,"number"),t()(),n(2032,"td",20)(2033,"em")(2034,"strong"),e(2035,"(opcional)"),t()(),n(2036,"p"),e(2037,"Tamanho de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),t(),n(2038,"p"),e(2039,"Deve ser usado o sistema de "),n(2040,"strong"),e(2041,"grid"),t(),e(2042," do PO (1 ... 12 colunas)."),t(),n(2043,"blockquote")(2044,"p"),e(2045,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(2046,"code"),e(2047,"gridColumns"),t(),e(2048,"."),t()()()(),n(2049,"tr",13)(2050,"td",14)(2051,"div",15)(2052,"span",16),e(2053," gridXlPull"),i(2054,"br"),t()()(),n(2055,"td",17)(2056,"code",41),e(2057,"number"),t()(),n(2058,"td",20)(2059,"em")(2060,"strong"),e(2061,"(opcional)"),t()(),n(2062,"p"),e(2063,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas extra grandes (xl)."),t(),n(2064,"p"),e(2065,"Deve ser usado o sistema de "),n(2066,"strong"),e(2067,"grid"),t(),e(2068," do PO (1 ... 11 colunas)."),t(),n(2069,"blockquote")(2070,"p"),e(2071,"Esta propriedade n\xE3o funciona com a propriedade "),n(2072,"code"),e(2073,"gridColumns"),t(),e(2074,". Deve-se especificar o tamanho da tela."),t()()()(),n(2075,"tr",13)(2076,"td",14)(2077,"div",15)(2078,"span",16),e(2079," headers"),i(2080,"br"),t()()(),n(2081,"td",17)(2082,"code",51),e(2083,"{ [name: string]: string "),t(),n(2084,"code",52),e(2085,` Array<string>;
}`),t()(),n(2086,"td",20)(2087,"em")(2088,"strong"),e(2089,"(opcional)"),t()(),n(2090,"p"),e(2091,"Objeto que cont\xE9m os cabe\xE7alhos que ser\xE1 enviado na requisi\xE7\xE3o dos arquivos."),t(),n(2092,"p")(2093,"strong"),e(2094,"Componente compat\xEDvel"),t(),e(2095,": "),n(2096,"code"),e(2097,"po-upload"),t()()()(),n(2098,"tr",13)(2099,"td",14)(2100,"div",15)(2101,"span",16),e(2102," help"),i(2103,"br"),t()()(),n(2104,"td",17)(2105,"code",18),e(2106,"string"),t()(),n(2107,"td",20)(2108,"em")(2109,"strong"),e(2110,"(opcional)"),t()(),n(2111,"p"),e(2112,"Texto de ajuda."),t()()(),n(2113,"tr",13)(2114,"td",14)(2115,"div",15)(2116,"span",16),e(2117," hideLabelStatus"),i(2118,"br"),t()()(),n(2119,"td",17)(2120,"code",28),e(2121,"boolean"),t()(),n(2122,"td",20)(2123,"em")(2124,"strong"),e(2125,"(opcional)"),t()(),n(2126,"p"),e(2127,"Indica se o status do "),n(2128,"code"),e(2129,"model"),t(),e(2130," ser\xE1 escondido visualmente ao lado do switch"),t()()(),n(2131,"tr",13)(2132,"td",14)(2133,"div",15)(2134,"span",16),e(2135," hidePasswordPeek"),i(2136,"br"),t()()(),n(2137,"td",17)(2138,"code",28),e(2139,"boolean"),t()(),n(2140,"td",20)(2141,"em")(2142,"strong"),e(2143,"(opcional)"),t()(),n(2144,"p"),e(2145,"Permite esconder a fun\xE7\xE3o de espiar a senha digitada no "),n(2146,"code"),e(2147,"po-password"),t(),e(2148,"."),t()()(),n(2149,"tr",13)(2150,"td",14)(2151,"div",15)(2152,"span",16),e(2153," hideRestrictionsInfo"),i(2154,"br"),t()()(),n(2155,"td",17)(2156,"code",28),e(2157,"boolean"),t()(),n(2158,"td",20)(2159,"em")(2160,"strong"),e(2161,"(opcional)"),t()(),n(2162,"p"),e(2163,"Oculta visualmente as informa\xE7\xF5es de restri\xE7\xF5es para o upload."),t(),n(2164,"p")(2165,"strong"),e(2166,"Componente compat\xEDvel"),t(),e(2167,": "),n(2168,"code"),e(2169,"po-upload"),t()()()(),n(2170,"tr",13)(2171,"td",14)(2172,"div",15)(2173,"span",16),e(2174," hideSearch"),i(2175,"br"),t()()(),n(2176,"td",17)(2177,"code",28),e(2178,"boolean"),t()(),n(2179,"td",20)(2180,"em")(2181,"strong"),e(2182,"(opcional)"),t()(),n(2183,"p"),e(2184,"Esconde o campo de pesquisa existente dentro do dropdown do "),n(2185,"code"),e(2186,"po-multiselect"),t(),e(2187,"."),t()()(),n(2188,"tr",13)(2189,"td",14)(2190,"div",15)(2191,"span",16),e(2192," hideSelectAll"),i(2193,"br"),t()()(),n(2194,"td",17)(2195,"code",28),e(2196,"boolean"),t()(),n(2197,"td",20)(2198,"em")(2199,"strong"),e(2200,"(opcional)"),t()(),n(2201,"p"),e(2202,'Indica se o campo "Selecionar todos" do '),n(2203,"code"),e(2204,"po-multiselect"),t(),e(2205," ser\xE1 escondido."),t()()(),n(2206,"tr",13)(2207,"td",14)(2208,"div",15)(2209,"span",16),e(2210," hideSelectButton"),i(2211,"br"),t()()(),n(2212,"td",17)(2213,"code",28),e(2214,"boolean"),t()(),n(2215,"td",20)(2216,"em")(2217,"strong"),e(2218,"(opcional)"),t()(),n(2219,"p"),e(2220,"Omite o bot\xE3o de sele\xE7\xE3o de arquivos."),t(),n(2221,"blockquote")(2222,"p"),e(2223,"Caso o valor definido seja "),n(2224,"code"),e(2225,"true"),t(),e(2226,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),n(2227,"code"),e(2228,"selectFiles()"),t(),e(2229," para sele\xE7\xE3o de arquivos."),t()(),n(2230,"p")(2231,"strong"),e(2232,"Componente compat\xEDvel"),t(),e(2233,": "),n(2234,"code"),e(2235,"po-upload"),t()()()(),n(2236,"tr",13)(2237,"td",14)(2238,"div",15)(2239,"span",16),e(2240," hideSendButton"),i(2241,"br"),t()()(),n(2242,"td",17)(2243,"code",28),e(2244,"boolean"),t()(),n(2245,"td",20)(2246,"em")(2247,"strong"),e(2248,"(opcional)"),t()(),n(2249,"p"),e(2250,"Omite o bot\xE3o de envio de arquivos."),t(),n(2251,"blockquote")(2252,"p"),e(2253,"Caso o valor definido seja "),n(2254,"code"),e(2255,"true"),t(),e(2256,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),n(2257,"code"),e(2258,"sendFiles()"),t(),e(2259," para envio do(s) arquivo(s) selecionado(s)."),t()(),n(2260,"p")(2261,"strong"),e(2262,"Componente compat\xEDvel"),t(),e(2263,": "),n(2264,"code"),e(2265,"po-upload"),t()()()(),n(2266,"tr",13)(2267,"td",14)(2268,"div",15)(2269,"span",16),e(2270," icon"),i(2271,"br"),t()()(),n(2272,"td",17)(2273,"code",18),e(2274,"string "),t(),n(2275,"code",53),e(2276," TemplateRef<void>"),t()(),n(2277,"td",20)(2278,"em")(2279,"strong"),e(2280,"(opcional)"),t()(),n(2281,"p"),e(2282,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),t(),n(2283,"blockquote")(2284,"p"),e(2285,"Esta propriedade s\xF3 pode ser utilizado nos campos:"),t()(),n(2286,"ul")(2287,"li"),e(2288,"Input;"),t(),n(2289,"li"),e(2290,"Number;"),t(),n(2291,"li"),e(2292,"Decimal;"),t(),n(2293,"li"),e(2294,"Combo;"),t(),n(2295,"li"),e(2296,"Password;"),t()(),n(2297,"blockquote")(2298,"p"),e(2299,"Veja a disponibilidade de \xEDcones em "),n(2300,"a",54),e(2301,"biblioteca de \xEDcones"),t(),e(2302,"."),t()()()(),n(2303,"tr",13)(2304,"td",14)(2305,"div",15)(2306,"span",16),e(2307," infiniteScroll"),i(2308,"br"),t()()(),n(2309,"td",17)(2310,"code",28),e(2311,"boolean"),t()(),n(2312,"td",20)(2313,"em")(2314,"strong"),e(2315,"(opcional)"),t()(),n(2316,"p"),e(2317,"Se verdadeiro ativa a funcionalidade de scroll infinito para o combo ou lookup, ao chegar ao fim da tabela executar\xE1 nova busca dos dados conforme pagina\xE7\xE3o."),t(),n(2318,"p")(2319,"strong"),e(2320,"Componentes compat\xEDveis:"),t(),n(2321,"code"),e(2322,"po-combo"),t(),e(2323,", "),n(2324,"code"),e(2325,"po-lookup"),t(),e(2326,"."),t()()(),n(2327,"tr",13)(2328,"td",14)(2329,"div",15)(2330,"span",16),e(2331," infiniteScrollDistance"),i(2332,"br"),t()()(),n(2333,"td",17)(2334,"code",41),e(2335,"number"),t()(),n(2336,"td",20)(2337,"em")(2338,"strong"),e(2339,"(opcional)"),t()(),n(2340,"p"),e(2341,`Define o percentual necess\xE1rio para disparar o evento show-more, que \xE9 respons\xE1vel por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padr\xE3o ser\xE1 100%.
`),n(2342,"strong"),e(2343,"Exemplos"),t(),n(2344,"code"),e(2345,"{ infiniteScrollDistance: 80 }"),t(),e(2346,": Quando atingir 80% do scroll do combo, o show-more ser\xE1 disparado."),t(),n(2347,"p")(2348,"strong"),e(2349,"Componente compat\xEDvel:"),t(),n(2350,"code"),e(2351,"po-combo"),t(),e(2352,"."),t()()(),n(2353,"tr",13)(2354,"td",14)(2355,"div",15)(2356,"span",16),e(2357," isoFormat"),i(2358,"br"),t()()(),n(2359,"td",17)(2360,"code",55),e(2361,"PoDatepickerIsoFormat"),t()(),n(2362,"td",20)(2363,"em")(2364,"strong"),e(2365,"(opcional)"),t()(),n(2366,"p"),e(2367,"Padr\xE3o de formata\xE7\xE3o para sa\xEDda do model, independentemente do formato de entrada."),t(),n(2368,"blockquote")(2369,"p"),e(2370,"Veja os valores v\xE1lidos no "),n(2371,"code"),e(2372,"enumPoDatepickerIsoFormat"),t(),e(2373,"."),t()(),n(2374,"p")(2375,"strong"),e(2376,"Componente compat\xEDvel:"),t(),e(2377," po-datepicker"),t()()(),n(2378,"tr",13)(2379,"td",14)(2380,"div",15)(2381,"span",16),e(2382," key"),i(2383,"br"),t()()(),n(2384,"td",17)(2385,"code",28),e(2386,"boolean"),t()(),n(2387,"td",20)(2388,"em")(2389,"strong"),e(2390,"(opcional)"),t()(),n(2391,"p"),e(2392,"Identificador"),t()()(),n(2393,"tr",13)(2394,"td",14)(2395,"div",15)(2396,"span",16),e(2397," keydown"),i(2398,"br"),t()()(),n(2399,"td",17)(2400,"code",29),e(2401,"Function"),t()(),n(2402,"td",20)(2403,"em")(2404,"strong"),e(2405,"(opcional)"),t()(),n(2406,"p"),e(2407,`Fun\xE7\xE3o executada quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),n(2408,"code"),e(2409,"KeyboardEvent"),t(),e(2410," com informa\xE7\xF5es sobre a tecla."),t()()(),n(2411,"tr",13)(2412,"td",14)(2413,"div",15)(2414,"span",16),e(2415," label"),i(2416,"br"),t()()(),n(2417,"td",17)(2418,"code",18),e(2419,"string"),t()(),n(2420,"td",20)(2421,"em")(2422,"strong"),e(2423,"(opcional)"),t()(),n(2424,"p"),e(2425,"R\xF3tulo do campo exibido."),t(),n(2426,"p"),e(2427,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),n(2428,"code"),e(2429,"label"),t(),e(2430," o valor da propriedade "),n(2431,"code"),e(2432,"property"),t(),e(2433," com a primeira letra em mai\xFAsculo."),t()()(),n(2434,"tr",13)(2435,"td",14)(2436,"div",15)(2437,"span",16),e(2438," labelPosition"),i(2439,"br"),t()()(),n(2440,"td",17)(2441,"code",56),e(2442,"PoSwitchLabelPosition"),t()(),n(2443,"td",20)(2444,"em")(2445,"strong"),e(2446,"(opcional)"),t()(),n(2447,"p"),e(2448,"Posi\xE7\xE3o de exibi\xE7\xE3o do r\xF3tulo do PoSwitch."),t(),n(2449,"blockquote")(2450,"p"),e(2451,"Por padr\xE3o exibe \xE0 direita."),t()()()(),n(2452,"tr",13)(2453,"td",14)(2454,"div",15)(2455,"span",16),e(2456," literals"),i(2457,"br"),t()()(),n(2458,"td",17)(2459,"code",57),e(2460,"PoLookupLiterals "),t(),n(2461,"code",58),e(2462," PoMultiselectLiterals "),t(),n(2463,"code",59),e(2464," PoComboLiterals "),t(),n(2465,"code",60),e(2466," PoDatepickerRangeLiterals "),t(),n(2467,"code",61),e(2468," PoUploadLiterals"),t()(),n(2469,"td",20)(2470,"em")(2471,"strong"),e(2472,"(opcional)"),t()(),n(2473,"p"),e(2474,"Objeto com as literais usadas para os seguintes componentes: "),n(2475,"code"),e(2476,"po-lookup"),t(),e(2477,", "),n(2478,"code"),e(2479,"po-multiselect"),t(),e(2480,", "),n(2481,"code"),e(2482,"po-combo"),t(),e(2483," e "),n(2484,"code"),e(2485,"po-datepicker-range"),t(),e(2486,"."),t(),n(2487,"blockquote")(2488,"p"),e(2489,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do PoI18nService ou do browser."),t()(),n(2490,"p")(2491,"strong"),e(2492,"Componentes compat\xEDveis:"),t(),n(2493,"code"),e(2494,"po-lookup"),t(),e(2495,", "),n(2496,"code"),e(2497,"po-multiselect"),t(),e(2498,", "),n(2499,"code"),e(2500,"po-combo"),t(),e(2501,", "),n(2502,"code"),e(2503,"po-datepicker-range"),t()()()(),n(2504,"tr",13)(2505,"td",14)(2506,"div",15)(2507,"span",16),e(2508," locale"),i(2509,"br"),t()()(),n(2510,"td",17)(2511,"code",18),e(2512,"string"),t()(),n(2513,"td",20)(2514,"em")(2515,"strong"),e(2516,"(opcional)"),t()(),n(2517,"p"),e(2518,`Define a localidade a ser utilizada no componente.
Por padr\xE3o o valor ser\xE1 configurado segundo a o m\xF3dulo `),n(2519,"a",62)(2520,"code"),e(2521,"I18n"),t()()(),n(2522,"p"),e(2523,`Exemplo de utiliza\xE7\xE3o:
`),n(2524,"code"),e(2525,"[ { property: 'birthday', locale: 'en', type: 'date' }, { property: 'wage', locale: 'ru', type: 'currency' } ];"),t()(),n(2526,"blockquote")(2527,"p"),e(2528,"Para ver quais linguagens suportadas acesse "),n(2529,"a",62)(2530,"code"),e(2531,"I18n"),t()(),e(2532,`
A propriedade ser\xE1 repassada para os componentes que suportam a mesma.`),t()()()(),n(2533,"tr",13)(2534,"td",14)(2535,"div",15)(2536,"span",16),e(2537," mask"),i(2538,"br"),t()()(),n(2539,"td",17)(2540,"code",18),e(2541,"string"),t()(),n(2542,"td",20)(2543,"em")(2544,"strong"),e(2545,"(opcional)"),t()(),n(2546,"p"),e(2547,"M\xE1scara para o campo."),t(),n(2548,"p")(2549,"strong"),e(2550,"Componentes compat\xEDveis:"),t(),n(2551,"code"),e(2552,"po-input"),t(),e(2553,"."),t(),n(2554,"blockquote")(2555,"p"),e(2556,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),n(2557,"code"),e(2558,"type: time"),t(),e(2559,"."),t()()()(),n(2560,"tr",13)(2561,"td",14)(2562,"div",15)(2563,"span",16),e(2564," maskFormatModel"),i(2565,"br"),t()()(),n(2566,"td",17)(2567,"code",28),e(2568,"boolean"),t()(),n(2569,"td",20)(2570,"em")(2571,"strong"),e(2572,"(opcional)"),t()(),n(2573,"p"),e(2574,"Define que o valor do componente ser\xE1 conforme especificado na masc\xE1ra. O valor padr\xE3o \xE9 "),n(2575,"code"),e(2576,"false"),t(),e(2577,"."),t(),n(2578,"p")(2579,"strong"),e(2580,"Componentes compat\xEDveis:"),t(),n(2581,"code"),e(2582,"po-input"),t(),e(2583,"."),t(),n(2584,"blockquote")(2585,"p"),e(2586,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),n(2587,"code"),e(2588,"type: time"),t(),e(2589,"."),t()()()(),n(2590,"tr",13)(2591,"td",14)(2592,"div",15)(2593,"span",16),e(2594," maxLength"),i(2595,"br"),t()()(),n(2596,"td",17)(2597,"code",41),e(2598,"number"),t()(),n(2599,"td",20)(2600,"em")(2601,"strong"),e(2602,"(opcional)"),t()(),n(2603,"p"),e(2604,"Tamanho m\xE1ximo de caracteres."),t(),n(2605,"p")(2606,"strong"),e(2607,"Componentes compat\xEDveis:"),t(),n(2608,"code"),e(2609,"po-input"),t(),e(2610,", "),n(2611,"code"),e(2612,"po-number"),t(),e(2613,", "),n(2614,"code"),e(2615,"po-decimal"),t(),e(2616,", "),n(2617,"code"),e(2618,"po-textarea"),t(),e(2619,", "),n(2620,"code"),e(2621,"po-password"),t(),e(2622,"."),t()()(),n(2623,"tr",13)(2624,"td",14)(2625,"div",15)(2626,"span",16),e(2627," maxValue"),i(2628,"br"),t()()(),n(2629,"td",17)(2630,"code",18),e(2631,"string "),t(),n(2632,"code",41),e(2633," number"),t()(),n(2634,"td",20)(2635,"em")(2636,"strong"),e(2637,"(opcional)"),t()(),n(2638,"p"),e(2639,"Valor m\xE1ximo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),n(2640,"em"),e(2641,"number"),t(),e(2642,", "),n(2643,"em"),e(2644,"date"),t(),e(2645," ou "),n(2646,"em"),e(2647,"dateTime"),t(),e(2648,"."),t(),n(2649,"p")(2650,"strong"),e(2651,"Componentes compat\xEDveis:"),t(),n(2652,"code"),e(2653,"po-datepicker"),t(),e(2654,", "),n(2655,"code"),e(2656,"po-datepicker-range"),t(),e(2657,", "),n(2658,"code"),e(2659,"po-number"),t(),e(2660,", "),n(2661,"code"),e(2662,"po-decimal"),t()()()(),n(2663,"tr",13)(2664,"td",14)(2665,"div",15)(2666,"span",16),e(2667," minLength"),i(2668,"br"),t()()(),n(2669,"td",17)(2670,"code",41),e(2671,"number"),t()(),n(2672,"td",20)(2673,"em")(2674,"strong"),e(2675,"(opcional)"),t()(),n(2676,"p"),e(2677,"Tamanho m\xEDnimo de caracteres."),t(),n(2678,"p")(2679,"strong"),e(2680,"Componentes compat\xEDveis:"),t(),n(2681,"code"),e(2682,"po-input"),t(),e(2683,", "),n(2684,"code"),e(2685,"po-number"),t(),e(2686,", "),n(2687,"code"),e(2688,"po-decimal"),t(),e(2689,", "),n(2690,"code"),e(2691,"po-textarea"),t(),e(2692,", "),n(2693,"code"),e(2694,"po-password"),t(),e(2695,"."),t()()(),n(2696,"tr",13)(2697,"td",14)(2698,"div",15)(2699,"span",16),e(2700," minValue"),i(2701,"br"),t()()(),n(2702,"td",17)(2703,"code",18),e(2704,"string "),t(),n(2705,"code",41),e(2706," number"),t()(),n(2707,"td",20)(2708,"em")(2709,"strong"),e(2710,"(opcional)"),t()(),n(2711,"p"),e(2712,"Valor m\xEDnimo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),n(2713,"em"),e(2714,"number"),t(),e(2715,", "),n(2716,"em"),e(2717,"date"),t(),e(2718," ou "),n(2719,"em"),e(2720,"dateTime"),t(),e(2721,"."),t(),n(2722,"p")(2723,"strong"),e(2724,"Componentes compat\xEDveis:"),t(),n(2725,"code"),e(2726,"po-datepicker"),t(),e(2727,", "),n(2728,"code"),e(2729,"po-datepicker-range"),t(),e(2730,", "),n(2731,"code"),e(2732,"po-number"),t(),e(2733,", "),n(2734,"code"),e(2735,"po-decimal"),t()()()(),n(2736,"tr",13)(2737,"td",14)(2738,"div",15)(2739,"span",16),e(2740," multiple"),i(2741,"br"),t()()(),n(2742,"td",17)(2743,"code",28),e(2744,"boolean"),t()(),n(2745,"td",20)(2746,"em")(2747,"strong"),e(2748,"(opcional)"),t()(),n(2749,"p"),e(2750,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),t(),n(2751,"p")(2752,"strong"),e(2753,"Componente compat\xEDvel:"),t(),n(2754,"code"),e(2755,"po-lookup"),t(),e(2756,", "),n(2757,"code"),e(2758,"po-upload"),t()()()(),n(2759,"tr",13)(2760,"td",14)(2761,"div",15)(2762,"span",16),e(2763," noAutocomplete"),i(2764,"br"),t()()(),n(2765,"td",17)(2766,"code",28),e(2767,"boolean"),t()(),n(2768,"td",20)(2769,"em")(2770,"strong"),e(2771,"(opcional)"),t()(),n(2772,"p"),e(2773,"Define a propriedade nativa "),n(2774,"code"),e(2775,"autocomplete"),t(),e(2776," do campo como off."),t(),n(2777,"p")(2778,"strong"),e(2779,"Componentes compat\xEDveis:"),t(),n(2780,"code"),e(2781,"po-datepicker"),t(),e(2782,", "),n(2783,"code"),e(2784,"po-datepicker-range"),t(),e(2785,", "),n(2786,"code"),e(2787,"po-input"),t(),e(2788,", "),n(2789,"code"),e(2790,"po-number"),t(),e(2791,", "),n(2792,"code"),e(2793,"po-decimal"),t(),e(2794,", "),n(2795,"code"),e(2796,"po-lookup"),t(),e(2797,", "),n(2798,"code"),e(2799,"po-password"),t()()()(),n(2800,"tr",13)(2801,"td",14)(2802,"div",15)(2803,"span",16),e(2804," offsetColumns"),i(2805,"br"),t()()(),n(2806,"td",17)(2807,"code",41),e(2808,"number"),t()(),n(2809,"td",20)(2810,"em")(2811,"strong"),e(2812,"(opcional)"),t()(),n(2813,"p"),e(2814,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas."),t(),n(2815,"p"),e(2816,"Deve ser usado o sistema de "),n(2817,"strong"),e(2818,"grid"),t(),e(2819," do PO (1 ... 12 colunas)."),t(),n(2820,"blockquote")(2821,"p"),e(2822,"Esta propriedade \xE9 gen\xE9rica, aplica o valor em todos os tamanhos de telas."),t()()()(),n(2823,"tr",13)(2824,"td",14)(2825,"div",15)(2826,"span",16),e(2827," offsetLgColumns"),i(2828,"br"),t()()(),n(2829,"td",17)(2830,"code",41),e(2831,"number"),t()(),n(2832,"td",20)(2833,"em")(2834,"strong"),e(2835,"(opcional)"),t()(),n(2836,"p"),e(2837,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas grandes (lg)."),t(),n(2838,"p"),e(2839,"Deve ser usado o sistema de "),n(2840,"strong"),e(2841,"grid"),t(),e(2842," do PO (1 ... 12 colunas)."),t(),n(2843,"blockquote")(2844,"p"),e(2845,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(2846,"code"),e(2847,"offsetColumns"),t(),e(2848,"."),t()()()(),n(2849,"tr",13)(2850,"td",14)(2851,"div",15)(2852,"span",16),e(2853," offsetMdColumns"),i(2854,"br"),t()()(),n(2855,"td",17)(2856,"code",41),e(2857,"number"),t()(),n(2858,"td",20)(2859,"em")(2860,"strong"),e(2861,"(opcional)"),t()(),n(2862,"p"),e(2863,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),t(),n(2864,"p"),e(2865,"Deve ser usado o sistema de "),n(2866,"strong"),e(2867,"grid"),t(),e(2868," do PO (1 ... 12 colunas)."),t(),n(2869,"blockquote")(2870,"p"),e(2871,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(2872,"code"),e(2873,"offsetColumns"),t(),e(2874,"."),t()()()(),n(2875,"tr",13)(2876,"td",14)(2877,"div",15)(2878,"span",16),e(2879," offsetSmColumns"),i(2880,"br"),t()()(),n(2881,"td",17)(2882,"code",41),e(2883,"number"),t()(),n(2884,"td",20)(2885,"em")(2886,"strong"),e(2887,"(opcional)"),t()(),n(2888,"p"),e(2889,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas menores (sm)."),t(),n(2890,"p"),e(2891,"Deve ser usado o sistema de "),n(2892,"strong"),e(2893,"grid"),t(),e(2894," do PO (1 ... 12 colunas)."),t(),n(2895,"blockquote")(2896,"p"),e(2897,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(2898,"code"),e(2899,"offsetColumns"),t(),e(2900,"."),t()()()(),n(2901,"tr",13)(2902,"td",14)(2903,"div",15)(2904,"span",16),e(2905," offsetXlColumns"),i(2906,"br"),t()()(),n(2907,"td",17)(2908,"code",41),e(2909,"number"),t()(),n(2910,"td",20)(2911,"em")(2912,"strong"),e(2913,"(opcional)"),t()(),n(2914,"p"),e(2915,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),t(),n(2916,"p"),e(2917,"Deve ser usado o sistema de "),n(2918,"strong"),e(2919,"grid"),t(),e(2920," do PO (1 ... 12 colunas)."),t(),n(2921,"blockquote")(2922,"p"),e(2923,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(2924,"code"),e(2925,"offsetColumns"),t(),e(2926,"."),t()()()(),n(2927,"tr",13)(2928,"td",14)(2929,"div",15)(2930,"span",16),e(2931," onError"),i(2932,"br"),t()()(),n(2933,"td",17)(2934,"code",29),e(2935,"Function"),t()(),n(2936,"td",20)(2937,"em")(2938,"strong"),e(2939,"(opcional)"),t()(),n(2940,"p"),e(2941,"Evento ser\xE1 disparado quando ocorrer algum erro no envio do arquivo."),t(),n(2942,"blockquote")(2943,"p"),e(2944,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),n(2945,"code"),e(2946,"HttpErrorResponse"),t(),e(2947,"."),t()(),n(2948,"p")(2949,"strong"),e(2950,"Componente compat\xEDvel"),t(),e(2951,": "),n(2952,"code"),e(2953,"po-upload"),t()()()(),n(2954,"tr",13)(2955,"td",14)(2956,"div",15)(2957,"span",16),e(2958," onSuccess"),i(2959,"br"),t()()(),n(2960,"td",17)(2961,"code",29),e(2962,"Function"),t()(),n(2963,"td",20)(2964,"em")(2965,"strong"),e(2966,"(opcional)"),t()(),n(2967,"p"),e(2968,"Evento ser\xE1 disparado quando o envio do arquivo for realizado com sucesso."),t(),n(2969,"blockquote")(2970,"p"),e(2971,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),n(2972,"code"),e(2973,"HttpResponse"),t(),e(2974,"."),t()(),n(2975,"p")(2976,"strong"),e(2977,"Componente compat\xEDvel"),t(),e(2978,": "),n(2979,"code"),e(2980,"po-upload"),t()()()(),n(2981,"tr",13)(2982,"td",14)(2983,"div",15)(2984,"span",16),e(2985," onUpload"),i(2986,"br"),t()()(),n(2987,"td",17)(2988,"code",29),e(2989,"Function"),t()(),n(2990,"td",20)(2991,"em")(2992,"strong"),e(2993,"(opcional)"),t()(),n(2994,"p"),e(2995,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e a propriedade data nesta propriedade pode ser informado algum dado,
que ser\xE1 enviado em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),t(),n(2996,"pre")(2997,"code"),e(2998,`event.data = {id: 'id do usu\xE1rio'};
`),t()(),n(2999,"p")(3e3,"strong"),e(3001,"Componente compat\xEDvel"),t(),e(3002,": "),n(3003,"code"),e(3004,"po-upload"),t()()()(),n(3005,"tr",13)(3006,"td",14)(3007,"div",15)(3008,"span",16),e(3009," optional"),i(3010,"br"),t()()(),n(3011,"td",17)(3012,"code",28),e(3013,"boolean"),t()(),n(3014,"td",20)(3015,"em")(3016,"strong"),e(3017,"(opcional)"),t()(),n(3018,"p"),e(3019,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(3020,"blockquote")(3021,"p"),e(3022,"A indica\xE7\xE3o n\xE3o ser\xE1 exibida, se:"),t()(),n(3023,"ul")(3024,"li"),e(3025,"O campo for "),n(3026,"code"),e(3027,"required"),t(),e(3028,", ou;"),t(),n(3029,"li"),e(3030,"N\xE3o possuir "),n(3031,"code"),e(3032,"help"),t(),e(3033," e "),n(3034,"code"),e(3035,"label"),t(),e(3036,"."),t()()()(),n(3037,"tr",13)(3038,"td",14)(3039,"div",15)(3040,"span",16),e(3041," options"),i(3042,"br"),t()()(),n(3043,"td",17)(3044,"code",32),e(3045,"Array<string> "),t(),n(3046,"code",63),e(3047," Array<PoSelectOption> "),t(),n(3048,"code",64),e(3049," Array<PoMultiselectOption> "),t(),n(3050,"code",65),e(3051," Array<PoCheckboxGroupOption> "),t(),n(3052,"code",66),e(3053," Array<any>"),t()(),n(3054,"td",20)(3055,"em")(3056,"strong"),e(3057,"(opcional)"),t()(),n(3058,"p"),e(3059,"Lista de op\xE7\xF5es que ser\xE3o exibidos em um componente, podendo selecionar uma op\xE7\xE3o."),t(),n(3060,"p")(3061,"strong"),e(3062,"Componentes compat\xEDveis:"),t(),n(3063,"code"),e(3064,"po-select"),t(),e(3065,", "),n(3066,"code"),e(3067,"po-radio-group"),t(),e(3068,", "),n(3069,"code"),e(3070,"po-checkbox-group"),t(),e(3071,", "),n(3072,"code"),e(3073,"po-multiselect"),t(),e(3074,"."),t()()(),n(3075,"tr",13)(3076,"td",14)(3077,"div",15)(3078,"span",16),e(3079," optionsMulti"),i(3080,"br"),t()()(),n(3081,"td",17)(3082,"code",28),e(3083,"boolean"),t()(),n(3084,"td",20)(3085,"em")(3086,"strong"),e(3087,"(opcional)"),t()(),n(3088,"p"),e(3089,"Permite que o usu\xE1rio fa\xE7a m\xFAltipla sele\xE7\xE3o dentro da lista de op\xE7\xF5es."),t()()(),n(3090,"tr",13)(3091,"td",14)(3092,"div",15)(3093,"span",16),e(3094," optionsService"),i(3095,"br"),t()()(),n(3096,"td",17)(3097,"code",18),e(3098,"string "),t(),n(3099,"code",67),e(3100," PoComboFilter "),t(),n(3101,"code",68),e(3102," PoMultiselectFilter"),t()(),n(3103,"td",20)(3104,"em")(3105,"strong"),e(3106,"(opcional)"),t()(),n(3107,"p"),e(3108,"Servi\xE7o que ser\xE1 utilizado para buscar os itens e preencher a lista de op\xE7\xF5es dinamicamente. Pode ser informada uma URL ou uma instancia do servi\xE7o baseado em PoComboFilter. "),n(3109,"strong"),e(3110,"Importante"),t()(),n(3111,"blockquote")(3112,"p"),e(3113,"Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o "),n(3114,"a",69),e(3115,"guia de API do PO UI"),t(),e(3116,"."),t()()()(),n(3117,"tr",13)(3118,"td",14)(3119,"div",15)(3120,"span",16),e(3121," order"),i(3122,"br"),t()()(),n(3123,"td",17)(3124,"code",41),e(3125,"number"),t()(),n(3126,"td",20)(3127,"em")(3128,"strong"),e(3129,"(opcional)"),t()(),n(3130,"p"),e(3131,"Informa a ordem de exibi\xE7\xE3o do campo."),t(),n(3132,"p"),e(3133,"Exemplo de utiliza\xE7\xE3o:"),t(),n(3134,"p")(3135,"code"),e(3136,"[ { property: 'test 1', order: 2 }, { property: 'test 2', order: 1 }, { property: 'test 3' }, { property: 'test 4', order: 3 } ];"),t()(),n(3137,"p"),e(3138,`Na exibi\xE7\xE3o a ordem ficar\xE1 dessa forma:
`),n(3139,"code"),e(3140,"[ { property: 'test 2', order: 1 }, { property: 'test 1', order: 2 }, { property: 'test 4', order: 3 }, { property: 'test 3' } ];"),t()(),n(3141,"p"),e(3142,"S\xF3 ser\xE3o aceitos valores com n\xFAmeros inteiros maiores do que zero."),t(),n(3143,"p"),e(3144,"Campos sem "),n(3145,"code"),e(3146,"order"),t(),e(3147,` ou com valores negativos, zerados ou inv\xE1lidos
ser\xE3o os \xFAltimos a serem renderizados e seguir\xE3o o posicionamento dentro do
array.`),t()()(),n(3148,"tr",13)(3149,"td",14)(3150,"div",15)(3151,"span",16),e(3152," params"),i(3153,"br"),t()()(),n(3154,"td",17)(3155,"code",33),e(3156,"any"),t()(),n(3157,"td",20)(3158,"em")(3159,"strong"),e(3160,"(opcional)"),t()(),n(3161,"p"),e(3162,"Objeto que ser\xE1 enviado como par\xE2metro nas requisi\xE7\xF5es de busca usados pelos componentes "),n(3163,"code"),e(3164,"po-lookup"),t(),e(3165,` e
`),n(3166,"code"),e(3167,"po-combo"),t(),e(3168,"."),t(),n(3169,"p"),e(3170,"Por exemplo, para o par\xE2metro "),n(3171,"code"),e(3172,"{ age: 23 }"),t(),e(3173," a URL da requisi\xE7\xE3o ficaria:"),t(),n(3174,"p")(3175,"code"),e(3176,"url + ?age=23&filter=Peter"),t()()()(),n(3177,"tr",13)(3178,"td",14)(3179,"div",15)(3180,"span",16),e(3181," pattern"),i(3182,"br"),t()()(),n(3183,"td",17)(3184,"code",18),e(3185,"string"),t()(),n(3186,"td",20)(3187,"em")(3188,"strong"),e(3189,"(opcional)"),t()(),n(3190,"p"),e(3191,"Regex para valida\xE7\xE3o do campo."),t(),n(3192,"p")(3193,"strong"),e(3194,"Componentes compat\xEDveis:"),t(),n(3195,"code"),e(3196,"po-input"),t(),e(3197,", "),n(3198,"code"),e(3199,"po-password"),t(),e(3200,"."),t()()(),n(3201,"tr",13)(3202,"td",14)(3203,"div",15)(3204,"span",16),e(3205," placeholder"),i(3206,"br"),t()()(),n(3207,"td",17)(3208,"code",18),e(3209,"string"),t()(),n(3210,"td",20)(3211,"em")(3212,"strong"),e(3213,"(opcional)"),t()(),n(3214,"p"),e(3215,"Mensagem que ser\xE1 exibida enquanto o campo n\xE3o estiver preenchido."),t()()(),n(3216,"tr",13)(3217,"td",14)(3218,"div",15)(3219,"span",16),e(3220," placeholderSearch"),i(3221,"br"),t()()(),n(3222,"td",17)(3223,"code",18),e(3224,"string"),t()(),n(3225,"td",20)(3226,"em")(3227,"strong"),e(3228,"(opcional)"),t()(),n(3229,"p"),e(3230,"Placeholder do campo de pesquisa do "),n(3231,"code"),e(3232,"po-multiselect"),t(),e(3233,"."),t(),n(3234,"blockquote")(3235,"p"),e(3236,"Caso o mesmo n\xE3o seja informado, o valor padr\xE3o ser\xE1 traduzido com base no idioma do navegador (pt, es e en)."),t()()()(),n(3237,"tr",13)(3238,"td",14)(3239,"div",15)(3240,"span",16),e(3241," property"),i(3242,"br"),t()()(),n(3243,"td",17)(3244,"code",18),e(3245,"string"),t()(),n(3246,"td",20)(3247,"p"),e(3248,"Nome de refer\xEAncia do campo."),t()()(),n(3249,"tr",13)(3250,"td",14)(3251,"div",15)(3252,"span",16),e(3253," range"),i(3254,"br"),t()()(),n(3255,"td",17)(3256,"code",28),e(3257,"boolean"),t()(),n(3258,"td",20)(3259,"em")(3260,"strong"),e(3261,"(opcional)"),t()(),n(3262,"p"),e(3263,"O controle passa a permitir a entrada de um intervalo ao inv\xE9s de um \xFAnico valor."),t(),n(3264,"blockquote")(3265,"p"),e(3266,"Atualmente essa propriedade est\xE1 dispon\xEDvel apenas para o tipo 'date' e 'dateTime'."),t()()()(),n(3267,"tr",13)(3268,"td",14)(3269,"div",15)(3270,"span",16),e(3271," readonly"),i(3272,"br"),t()()(),n(3273,"td",17)(3274,"code",28),e(3275,"boolean"),t()(),n(3276,"td",20)(3277,"em")(3278,"strong"),e(3279,"(opcional)"),t()(),n(3280,"p"),e(3281,"Indica que o campo ser\xE1 somente leitura."),t(),n(3282,"p")(3283,"strong"),e(3284,"Componentes compat\xEDveis:"),t(),n(3285,"code"),e(3286,"po-datepicker"),t(),e(3287,", "),n(3288,"code"),e(3289,"po-datepicker-range"),t(),e(3290,", "),n(3291,"code"),e(3292,"po-input"),t(),e(3293,", "),n(3294,"code"),e(3295,"po-number"),t(),e(3296,", "),n(3297,"code"),e(3298,"po-decimal"),t(),e(3299,", "),n(3300,"code"),e(3301,"po-select"),t(),e(3302,", "),n(3303,"code"),e(3304,"po-textarea"),t(),e(3305,", "),n(3306,"code"),e(3307,"po-password"),t()()()(),n(3308,"tr",13)(3309,"td",14)(3310,"div",15)(3311,"span",16),e(3312," removeInitialFilter"),i(3313,"br"),t()()(),n(3314,"td",17)(3315,"code",28),e(3316,"boolean"),t()(),n(3317,"td",20)(3318,"em")(3319,"strong"),e(3320,"(opcional)"),t()(),n(3321,"p"),e(3322,"Define que o filtro no primeiro clique ser\xE1 removido."),t(),n(3323,"blockquote")(3324,"p"),e(3325,`Caso o combo tenha um valor padr\xE3o de inicializa\xE7\xE3o, o primeiro clique
no componente retornar\xE1 todos os itens da lista e n\xE3o apenas o item inicialiazado.`),t()(),n(3326,"p")(3327,"strong"),e(3328,"Componente compat\xEDvel"),t(),e(3329,": "),n(3330,"code"),e(3331,"po-combo"),t()()()(),n(3332,"tr",13)(3333,"td",14)(3334,"div",15)(3335,"span",16),e(3336," required"),i(3337,"br"),t()()(),n(3338,"td",17)(3339,"code",28),e(3340,"boolean"),t()(),n(3341,"td",20)(3342,"em")(3343,"strong"),e(3344,"(opcional)"),t()(),n(3345,"p"),e(3346,"Define a obrigatoriedade do campo."),t()()(),n(3347,"tr",13)(3348,"td",14)(3349,"div",15)(3350,"span",16),e(3351," requiredFieldErrorMessage"),i(3352,"br"),t()()(),n(3353,"td",17)(3354,"code",28),e(3355,"boolean"),t()(),n(3356,"td",20)(3357,"em")(3358,"strong"),e(3359,"(opcional)"),t()(),n(3360,"p"),e(3361,"Exibe a mensagem setada na propriedade "),n(3362,"code"),e(3363,"errorMessage"),t(),e(3364," se o campo estiver vazio e for requerido."),t(),n(3365,"blockquote")(3366,"p"),e(3367,"Necess\xE1rio que a propriedade "),n(3368,"code"),e(3369,"required"),t(),e(3370," esteja habilitada."),t()(),n(3371,"p")(3372,"strong"),e(3373,"Componentes compat\xEDveis:"),t(),n(3374,"code"),e(3375,"po-datepicker"),t(),e(3376,", "),n(3377,"code"),e(3378,"po-input"),t(),e(3379,", "),n(3380,"code"),e(3381,"po-number"),t(),e(3382,", "),n(3383,"code"),e(3384,"po-decimal"),t(),e(3385,", "),n(3386,"code"),e(3387,"po-password"),t(),e(3388,"."),t()()(),n(3389,"tr",13)(3390,"td",14)(3391,"div",15)(3392,"span",16),e(3393," restrictions"),i(3394,"br"),t()()(),n(3395,"td",17)(3396,"code",70),e(3397,"PoUploadFileRestrictions"),t()(),n(3398,"td",20)(3399,"em")(3400,"strong"),e(3401,"(opcional)"),t()(),n(3402,"p"),e(3403,"Objeto que segue a defini\xE7\xE3o da interface "),n(3404,"code"),e(3405,"PoUploadFileRestrictions"),t(),e(3406,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),t(),n(3407,"p")(3408,"strong"),e(3409,"Componente compat\xEDvel"),t(),e(3410,": "),n(3411,"code"),e(3412,"po-upload"),t()()()(),n(3413,"tr",13)(3414,"td",14)(3415,"div",15)(3416,"span",16),e(3417," rows"),i(3418,"br"),t()()(),n(3419,"td",17)(3420,"code",41),e(3421,"number"),t()(),n(3422,"td",20)(3423,"em")(3424,"strong"),e(3425,"(opcional)"),t()(),n(3426,"p"),e(3427,"Quantidade de linhas exibidas no "),n(3428,"code"),e(3429,"po-textarea"),t(),e(3430,"."),t()()(),n(3431,"tr",13)(3432,"td",14)(3433,"div",15)(3434,"span",16),e(3435," searchService"),i(3436,"br"),t()()(),n(3437,"td",17)(3438,"code",18),e(3439,"string "),t(),n(3440,"code",71),e(3441," PoLookupFilter"),t()(),n(3442,"td",20)(3443,"em")(3444,"strong"),e(3445,"(opcional)"),t()(),n(3446,"p"),e(3447,"Servi\xE7o que ser\xE1 utilizado para realizar a busca avan\xE7ada. Pode ser utilizado em conjunto com a propriedade "),n(3448,"code"),e(3449,"columns"),t(),e(3450,`.
Pode ser ser informada uma URL ou uma instancia do servi\xE7o baseado em PoLookupFilter.
`),n(3451,"strong"),e(3452,"Importante:"),t()(),n(3453,"blockquote")(3454,"p"),e(3455,"Caso utilizar a propriedade "),n(3456,"code"),e(3457,"optionsService"),t(),e(3458,` esta propriedade ser\xE1 ignorada.
Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),n(3459,"a",69),e(3460,"guia de API do PO UI"),t(),e(3461,"."),t()()()(),n(3462,"tr",13)(3463,"td",14)(3464,"div",15)(3465,"span",16),e(3466," secret"),i(3467,"br"),t()()(),n(3468,"td",17)(3469,"code",28),e(3470,"boolean"),t()(),n(3471,"td",20)(3472,"em")(3473,"strong"),e(3474,"(opcional)"),t()(),n(3475,"p"),e(3476,"Esconde a informa\xE7\xE3o estilo "),n(3477,"em"),e(3478,"password"),t(),e(3479,", pode ser utilizado quando o tipo de dado for "),n(3480,"em"),e(3481,"string"),t(),e(3482,"."),t()()(),n(3483,"tr",13)(3484,"td",14)(3485,"div",15)(3486,"span",16),e(3487," showRequired"),i(3488,"br"),t()()(),n(3489,"td",17)(3490,"code",28),e(3491,"boolean"),t()(),n(3492,"td",20)(3493,"em")(3494,"strong"),e(3495,"(opcional)"),t()(),n(3496,"p"),e(3497,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),n(3498,"blockquote")(3499,"p"),e(3500,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(3501,"ul")(3502,"li"),e(3503,"N\xE3o possuir "),n(3504,"code"),e(3505,"p-help"),t(),e(3506," e/ou "),n(3507,"code"),e(3508,"p-label"),t(),e(3509,"."),t()()()(),n(3510,"tr",13)(3511,"td",14)(3512,"div",15)(3513,"span",16),e(3514," size"),i(3515,"br"),t()()(),n(3516,"td",17)(3517,"code",18),e(3518,"string"),t()(),n(3519,"td",20)(3520,"em")(3521,"strong"),e(3522,"(opcional)"),t()(),n(3523,"p"),e(3524,"Define o tamanho dos componentes de formul\xE1rio no template conforme suas respectivas documenta\xE7\xF5es:"),t(),n(3525,"ul")(3526,"li")(3527,"code"),e(3528,"small"),t(),e(3529,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(3530,"li")(3531,"code"),e(3532,"medium"),t(),e(3533,": aplica a medida medium de cada componente."),t(),n(3534,"li")(3535,"code"),e(3536,"large"),t(),e(3537,": aplica a medida large de cada componente (dispon\xEDvel para "),n(3538,"code"),e(3539,"po-checkbox"),t(),e(3540," e "),n(3541,"code"),e(3542,"po-radio-group"),t(),e(3543,")."),n(3544,"blockquote")(3545,"p"),e(3546,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(3547,"code"),e(3548,"medium"),t(),e(3549,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(3550,"a",21),e(3551,"po-theme"),t(),e(3552,"."),t()()()()()(),n(3553,"tr",13)(3554,"td",14)(3555,"div",15)(3556,"span",16),e(3557," sort"),i(3558,"br"),t()()(),n(3559,"td",17)(3560,"code",28),e(3561,"boolean"),t()(),n(3562,"td",20)(3563,"em")(3564,"strong"),e(3565,"(opcional)"),t()(),n(3566,"p"),e(3567,"Indica que a lista definida na propriedade p-options ser\xE1 ordenada pela descri\xE7\xE3o."),t(),n(3568,"p")(3569,"strong"),e(3570,"Componentes compat\xEDveis:"),t(),n(3571,"code"),e(3572,"po-combo"),t(),e(3573,", po-multiselect"),t()()(),n(3574,"tr",13)(3575,"td",14)(3576,"div",15)(3577,"span",16),e(3578," step"),i(3579,"br"),t()()(),n(3580,"td",17)(3581,"code",41),e(3582,"number"),t()(),n(3583,"td",20)(3584,"em")(3585,"strong"),e(3586,"(opcional)"),t()(),n(3587,"p"),e(3588,"Intervalo utilizado no "),n(3589,"code"),e(3590,"po-number"),t(),e(3591,"."),t()()(),n(3592,"tr",13)(3593,"td",14)(3594,"div",15)(3595,"span",16),e(3596," thousandMaxlength"),i(3597,"br"),t()()(),n(3598,"td",17)(3599,"code",41),e(3600,"number"),t()(),n(3601,"td",20)(3602,"em")(3603,"strong"),e(3604,"(opcional)"),t()(),n(3605,"p"),e(3606,"Quantidade m\xE1xima de d\xEDgitos antes do separador decimal. O valor m\xE1ximo permitido \xE9 13"),t(),n(3607,"blockquote")(3608,"p"),e(3609,"Esta propriedade s\xF3 pode ser utilizada quando o "),n(3610,"code"),e(3611,"type"),t(),e(3612," for "),n(3613,"em"),e(3614,"currency"),t(),e(3615," ou "),n(3616,"em"),e(3617,"decimal"),t(),e(3618,"."),t()()()(),n(3619,"tr",13)(3620,"td",14)(3621,"div",15)(3622,"span",16),e(3623," type"),i(3624,"br"),t()()(),n(3625,"td",17)(3626,"code",18),e(3627,"string "),t(),n(3628,"code",72),e(3629," PoDynamicFieldType"),t()(),n(3630,"td",20)(3631,"em")(3632,"strong"),e(3633,"(opcional)"),t()(),n(3634,"p"),e(3635,"Tipo do valor campo."),t(),n(3636,"p"),e(3637,"Valores v\xE1lidos:"),t(),n(3638,"ul")(3639,"li")(3640,"code"),e(3641,"boolean"),t(),e(3642,": Valores "),n(3643,"em"),e(3644,"booleanos"),t(),e(3645,"."),t(),n(3646,"li")(3647,"code"),e(3648,"currency"),t(),e(3649,": Valores monet\xE1rios."),t(),n(3650,"li")(3651,"code"),e(3652,"decimal"),t(),e(3653,": Valores decimais."),t(),n(3654,"li")(3655,"code"),e(3656,"date"),t(),e(3657,": Valores de datas."),n(3658,"ul")(3659,"li"),e(3660,"Aceita os tipos "),n(3661,"strong"),e(3662,"string"),t(),e(3663," e "),n(3664,"strong"),e(3665,"Date"),t(),e(3666,` padr\xE3o do Javascript,
por exemplo: `),n(3667,"code"),e(3668,"'2017-11-28'"),t(),e(3669," ou "),n(3670,"code"),e(3671,"new Date(2017, 10, 28)"),t(),e(3672,"."),t()()(),n(3673,"li")(3674,"code"),e(3675,"dateTime"),t(),e(3676,": Valor de data com hor\xE1rio."),n(3677,"ul")(3678,"li"),e(3679,"Aceita o tipo "),n(3680,"em"),e(3681,"string"),t(),e(3682," no formato "),n(3683,"strong"),e(3684,"ISO-8601"),t(),e(3685," extendido "),n(3686,"strong"),e(3687,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),t(),e(3688,`
e o tipo `),n(3689,"strong"),e(3690,"Date"),t(),e(3691," padr\xE3o do Javascript, por exemplo: "),n(3692,"code"),e(3693,"'2017-11-28T00:00:00-02:00'"),t(),e(3694," ou "),n(3695,"code"),e(3696,"new Date(2017, 10, 28)"),t(),e(3697,"."),t()()(),n(3698,"li")(3699,"code"),e(3700,"number"),t(),e(3701,": Valores num\xE9ricos."),t(),n(3702,"li")(3703,"code"),e(3704,"string"),t(),e(3705,": Textos."),t(),n(3706,"li")(3707,"code"),e(3708,"time"),t(),e(3709,": Valor do hor\xE1rio."),n(3710,"ul")(3711,"li"),e(3712,"Aceita o tipo "),n(3713,"strong"),e(3714,"string"),t(),e(3715," nos formatos "),n(3716,"strong"),e(3717,"'HH:mm:ss'"),t(),e(3718," ou "),n(3719,"strong"),e(3720,"'HH:mm:ss.ffffff'"),t(),e(3721,", por exemplo: "),n(3722,"code"),e(3723,"'23:12:45'"),t(),e(3724,"."),t()()()()()(),n(3725,"tr",13)(3726,"td",14)(3727,"div",15)(3728,"span",16),e(3729," url"),i(3730,"br"),t()()(),n(3731,"td",17)(3732,"code",18),e(3733,"string"),t()(),n(3734,"td",20)(3735,"em")(3736,"strong"),e(3737,"(opcional)"),t()(),n(3738,"p"),e(3739,"URL que deve ser feita a requisi\xE7\xE3o com os arquivos selecionados."),t(),n(3740,"p")(3741,"strong"),e(3742,"Componente compat\xEDvel"),t(),e(3743,": "),n(3744,"code"),e(3745,"po-upload"),t()()()(),n(3746,"tr",13)(3747,"td",14)(3748,"div",15)(3749,"span",16),e(3750," validate"),i(3751,"br"),t()()(),n(3752,"td",17)(3753,"code",18),e(3754,"string "),t(),n(3755,"code",29),e(3756," Function"),t()(),n(3757,"td",20)(3758,"em")(3759,"strong"),e(3760,"(opcional)"),t()(),n(3761,"p"),e(3762,"Fun\xE7\xE3o ou servi\xE7o para validar as "),n(3763,"strong"),e(3764,"mudan\xE7as do campo"),t(),e(3765,"."),t(),n(3766,"ul")(3767,"li"),e(3768,"A propriedade aceita os seguintes tipos:"),t()(),n(3769,"ul")(3770,"li")(3771,"strong"),e(3772,"String"),t(),e(3773,": Endpoint usado pelo componente para requisi\xE7\xE3o via "),n(3774,"code"),e(3775,"POST"),t(),e(3776,"."),t(),n(3777,"li")(3778,"strong"),e(3779,"Function"),t(),e(3780,": M\xE9todo que ser\xE1 executado."),t()(),n(3781,"p"),e(3782,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e o novo valor, conforme a interface `),n(3783,"code"),e(3784,"PoDynamicFormFieldChanged"),t(),e(3785,":"),t(),n(3786,"p")(3787,"code"),e(3788,"{ property: 'property name', value: 'new value' }"),t()(),n(3789,"p"),e(3790,"O retorno desta fun\xE7\xE3o deve ser do tipo "),n(3791,"a",73),e(3792,"PoDynamicFormFieldValidation"),t(),e(3793,`,
onde o usu\xE1rio poder\xE1 determinar as novas propriedades do campo.
Por exemplo:`),t(),n(3794,"pre")(3795,"code"),e(3796,`onChangeField(changeValue): PoDynamicFormFieldValidation {

if (changeValue.property === 'birthday' && !this.validate('birthday')) {
  return {
    value: '',
    field: { property: 'birthday', required: true },
    focus: true
  };
}
`),t()(),n(3797,"p"),e(3798,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),n(3799,"code"),e(3800,"bind"),t(),e(3801,`, por exemplo:
`),n(3802,"code"),e(3803,"{ property: 'state', gridColumns: 6, validate: this.myFunction.bind(this) }"),t()()()(),n(3804,"tr",13)(3805,"td",14)(3806,"div",15)(3807,"span",16),e(3808," visible"),i(3809,"br"),t()()(),n(3810,"td",17)(3811,"code",28),e(3812,"boolean"),t()(),n(3813,"td",20)(3814,"em")(3815,"strong"),e(3816,"(opcional)"),t()(),n(3817,"p"),e(3818,"Indica se o campo ser\xE1 vis\xEDvel."),t()()()(),n(3819,"h4",38)(3820,"code",5),e(3821,"PoDynamicFormLoad"),t()(),n(3822,"div",2)(3823,"p"),i(3824,"a",74),t(),n(3825,"p"),e(3826,"Estrutura de retorno no carregamento do formul\xE1rio."),t()(),n(3827,"h4",9),e(3828,"Propriedades"),t(),n(3829,"table",10)(3830,"tr",11)(3831,"th",12),e(3832,"Nome"),t(),n(3833,"th",12),e(3834,"Tipo"),t(),n(3835,"th",12),e(3836,"Descri\xE7\xE3o"),t()(),n(3837,"tr",13)(3838,"td",14)(3839,"div",15)(3840,"span",16),e(3841," fields"),i(3842,"br"),t()()(),n(3843,"td",17)(3844,"code",22),e(3845,"Array<PoDynamicFormField>"),t()(),n(3846,"td",20)(3847,"em")(3848,"strong"),e(3849,"(opcional)"),t()(),n(3850,"p"),e(3851,"Lista com as novas defini\xE7\xF5es dos campos."),t(),n(3852,"blockquote")(3853,"p"),e(3854,"N\xE3o \xE9 necess\xE1rio colocar todas as propriedades e campos, apenas as que precisam ser alteradas ou adicionadas."),t()()()(),n(3855,"tr",13)(3856,"td",14)(3857,"div",15)(3858,"span",16),e(3859," focus"),i(3860,"br"),t()()(),n(3861,"td",17)(3862,"code",18),e(3863,"string"),t()(),n(3864,"td",20)(3865,"em")(3866,"strong"),e(3867,"(opcional)"),t()(),n(3868,"p"),e(3869,"Nome do campo que receber\xE1 o foco."),t(),n(3870,"p"),e(3871,"Exemplo:"),t(),n(3872,"pre")(3873,"code"),e(3874,`focus: 'name'
`),t()()()(),n(3875,"tr",13)(3876,"td",14)(3877,"div",15)(3878,"span",16),e(3879," value"),i(3880,"br"),t()()(),n(3881,"td",17)(3882,"code",33),e(3883,"any"),t()(),n(3884,"td",20)(3885,"em")(3886,"strong"),e(3887,"(opcional)"),t()(),n(3888,"p"),e(3889,"Objeto contendo os novos valores."),t(),n(3890,"p"),e(3891,"Exemplo:"),t(),n(3892,"pre")(3893,"code"),e(3894,`{
  name: 'new name',
  age: 10
}
`),t()(),n(3895,"blockquote")(3896,"p"),e(3897,"N\xE3o \xE9 necess\xE1rio colocar os valores de todos os campos, apenas os que foram alterados."),t()()()()(),n(3898,"h4",38)(3899,"code",5),e(3900,"PoDynamicFormFieldChanged"),t()(),n(3901,"div",2)(3902,"p"),e(3903,"Estrutura dos valores que ser\xE3o disparados quando houver uma mudan\xE7a em um campo ou no formul\xE1rio."),t()(),n(3904,"h4",9),e(3905,"Propriedades"),t(),n(3906,"table",10)(3907,"tr",11)(3908,"th",12),e(3909,"Nome"),t(),n(3910,"th",12),e(3911,"Tipo"),t(),n(3912,"th",12),e(3913,"Descri\xE7\xE3o"),t()(),n(3914,"tr",13)(3915,"td",14)(3916,"div",15)(3917,"span",16),e(3918," property"),i(3919,"br"),t()()(),n(3920,"td",17)(3921,"code",18),e(3922,"string"),t()(),n(3923,"td",20)(3924,"p"),e(3925,"Valor da propriedade do campo."),t()()(),n(3926,"tr",13)(3927,"td",14)(3928,"div",15)(3929,"span",16),e(3930," value"),i(3931,"br"),t()()(),n(3932,"td",17)(3933,"code",33),e(3934,"any"),t()(),n(3935,"td",20)(3936,"p"),e(3937,"Novo valor do campo."),t()()()(),n(3938,"h4",38)(3939,"code",5),e(3940,"PoDynamicFormFieldValidation"),t()(),n(3941,"div",2)(3942,"p"),i(3943,"a",75),t(),n(3944,"p"),e(3945,"Estrutura de retorno da valida\xE7\xE3o de um campo."),t()(),n(3946,"h4",9),e(3947,"Propriedades"),t(),n(3948,"table",10)(3949,"tr",11)(3950,"th",12),e(3951,"Nome"),t(),n(3952,"th",12),e(3953,"Tipo"),t(),n(3954,"th",12),e(3955,"Descri\xE7\xE3o"),t()(),n(3956,"tr",13)(3957,"td",14)(3958,"div",15)(3959,"span",16),e(3960," field"),i(3961,"br"),t()()(),n(3962,"td",17)(3963,"code",76),e(3964,"PoDynamicFormField"),t()(),n(3965,"td",20)(3966,"em")(3967,"strong"),e(3968,"(opcional)"),t()(),n(3969,"p"),e(3970,"Novas defini\xE7\xF5es das propriedades do campo."),t(),n(3971,"blockquote")(3972,"p"),e(3973,"N\xE3o \xE9 necess\xE1rio colocar todas as propriedades, apenas as que foram alteradas."),t()()()(),n(3974,"tr",13)(3975,"td",14)(3976,"div",15)(3977,"span",16),e(3978," focus"),i(3979,"br"),t()()(),n(3980,"td",17)(3981,"code",28),e(3982,"boolean"),t()(),n(3983,"td",20)(3984,"em")(3985,"strong"),e(3986,"(opcional)"),t()(),n(3987,"p"),e(3988,"Coloca o foco no campo ap\xF3s a valida\xE7\xE3o."),t()()(),n(3989,"tr",13)(3990,"td",14)(3991,"div",15)(3992,"span",16),e(3993," value"),i(3994,"br"),t()()(),n(3995,"td",17)(3996,"code",33),e(3997,"any"),t()(),n(3998,"td",20)(3999,"em")(4e3,"strong"),e(4001,"(opcional)"),t()(),n(4002,"p"),e(4003,"Novo valor do campo"),t()()()(),n(4004,"h4",38)(4005,"code",5),e(4006,"PoDynamicFormValidation"),t()(),n(4007,"div",2)(4008,"p"),i(4009,"a",77),t(),n(4010,"p"),e(4011,"Estrutura de retorno da valida\xE7\xE3o do formul\xE1rio."),t()(),n(4012,"h4",9),e(4013,"Propriedades"),t(),n(4014,"table",10)(4015,"tr",11)(4016,"th",12),e(4017,"Nome"),t(),n(4018,"th",12),e(4019,"Tipo"),t(),n(4020,"th",12),e(4021,"Descri\xE7\xE3o"),t()(),n(4022,"tr",13)(4023,"td",14)(4024,"div",15)(4025,"span",16),e(4026," fields"),i(4027,"br"),t()()(),n(4028,"td",17)(4029,"code",22),e(4030,"Array<PoDynamicFormField>"),t()(),n(4031,"td",20)(4032,"em")(4033,"strong"),e(4034,"(opcional)"),t()(),n(4035,"p"),e(4036,"Lista com as novas defini\xE7\xF5es dos campos."),t(),n(4037,"blockquote")(4038,"p"),e(4039,"N\xE3o \xE9 necess\xE1rio colocar todas as propriedades e campos, apenas as que foram alteradas."),t()()()(),n(4040,"tr",13)(4041,"td",14)(4042,"div",15)(4043,"span",16),e(4044," focus"),i(4045,"br"),t()()(),n(4046,"td",17)(4047,"code",18),e(4048,"string"),t()(),n(4049,"td",20)(4050,"em")(4051,"strong"),e(4052,"(opcional)"),t()(),n(4053,"p"),e(4054,"Nome do campo que receber\xE1 o foco."),t(),n(4055,"p"),e(4056,"Exemplo:"),t(),n(4057,"pre")(4058,"code"),e(4059,`focus: 'name'
`),t()()()(),n(4060,"tr",13)(4061,"td",14)(4062,"div",15)(4063,"span",16),e(4064," value"),i(4065,"br"),t()()(),n(4066,"td",17)(4067,"code",33),e(4068,"any"),t()(),n(4069,"td",20)(4070,"em")(4071,"strong"),e(4072,"(opcional)"),t()(),n(4073,"p"),e(4074,"Objeto contendo os novos valores."),t(),n(4075,"p"),e(4076,"Exemplo:"),t(),n(4077,"pre")(4078,"code"),e(4079,`{
  name: 'new name',
  age: 10
}
`),t()(),n(4080,"blockquote")(4081,"p"),e(4082,"N\xE3o \xE9 necess\xE1rio colocar os valores de todos os campos, apenas os que foram alterados."),t()()()()(),n(4083,"h4",38)(4084,"code",5),e(4085,"ErrorAsyncProperties"),t()(),n(4086,"div",2)(4087,"p"),e(4088,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),t()(),n(4089,"h4",9),e(4090,"Propriedades"),t(),n(4091,"table",10)(4092,"tr",11)(4093,"th",12),e(4094,"Nome"),t(),n(4095,"th",12),e(4096,"Tipo"),t(),n(4097,"th",12),e(4098,"Descri\xE7\xE3o"),t()(),n(4099,"tr",13)(4100,"td",14)(4101,"div",15)(4102,"span",16),e(4103," errorAsync"),i(4104,"br"),t()()(),n(4105,"td",17)(4106,"code",46),e(4107,"(value) => Observable<boolean>"),t()(),n(4108,"td",20)(4109,"p"),e(4110,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),n(4111,"code"),e(4112,"change"),t(),e(4113," ou "),n(4114,"code"),e(4115,"change-model"),t(),e(4116,", dependendo do valor da propriedade "),n(4117,"code"),e(4118,"triggerMode"),t(),e(4119,"."),t()()(),n(4120,"tr",13)(4121,"td",14)(4122,"div",15)(4123,"span",16),e(4124," triggerMode"),i(4125,"br"),t()()(),n(4126,"td",17)(4127,"code",78),e(4128,"'change' "),t(),n(4129,"code",79),e(4130," 'changeModel'"),t()(),n(4131,"td",20)(4132,"em")(4133,"strong"),e(4134,"(opcional)"),t()(),n(4135,"p"),e(4136,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),n(4137,"code"),e(4138,"change"),t(),e(4139," ou "),n(4140,"code"),e(4141,"change-model"),t(),e(4142,"."),t()()()(),n(4143,"h3"),e(4144,"Enums"),t(),n(4145,"h4",4)(4146,"code",5),e(4147,"ForceBooleanComponentEnum"),t()(),n(4148,"div",2)(4149,"p"),e(4150,"Enum para defini\xE7\xE3o do tipo de componente a ser renderizado."),t()(),n(4151,"h4",9),e(4152,"Propriedades"),t(),n(4153,"table",10)(4154,"tr",11)(4155,"th",12),e(4156,"Nome"),t(),n(4157,"th",12),e(4158,"Descri\xE7\xE3o"),t()(),n(4159,"tr",13)(4160,"td",14)(4161,"div",15)(4162,"span",16),e(4163," switch"),i(4164,"br"),t()()(),n(4165,"td",20)(4166,"p"),e(4167,"For\xE7a a renderiza\xE7\xE3o de um po-switch"),t()()(),n(4168,"tr",13)(4169,"td",14)(4170,"div",15)(4171,"span",16),e(4172," checkbox"),i(4173,"br"),t()()(),n(4174,"td",20)(4175,"p"),e(4176,"For\xE7a a renderiza\xE7\xE3o de um po-checkbox"),t()()()(),n(4177,"h4",4)(4178,"code",5),e(4179,"ForceOptionComponentEnum"),t()(),n(4180,"div",2)(4181,"p"),e(4182,"Enum para defini\xE7\xE3o do tipo de componente a ser renderizado."),t()(),n(4183,"h4",9),e(4184,"Propriedades"),t(),n(4185,"table",10)(4186,"tr",11)(4187,"th",12),e(4188,"Nome"),t(),n(4189,"th",12),e(4190,"Descri\xE7\xE3o"),t()(),n(4191,"tr",13)(4192,"td",14)(4193,"div",15)(4194,"span",16),e(4195," radioGroup"),i(4196,"br"),t()()(),n(4197,"td",20)(4198,"p"),e(4199,"For\xE7a a renderiza\xE7\xE3o de um po-radio-group independente da quantidade do op\xE7\xF5es"),t()()(),n(4200,"tr",13)(4201,"td",14)(4202,"div",15)(4203,"span",16),e(4204," select"),i(4205,"br"),t()()(),n(4206,"td",20)(4207,"p"),e(4208,"For\xE7a a renderiza\xE7\xE3o de um po-select independente da quantidade do op\xE7\xF5es"),t()()()(),n(4209,"h4",4)(4210,"code",5),e(4211,"PoDynamicFieldType"),t()(),n(4212,"div",2)(4213,"p"),e(4214,"Enum para defini\xE7\xE3o do tipo de campo que ser\xE1 criado dinamicamente."),t()(),n(4215,"h4",9),e(4216,"Propriedades"),t(),n(4217,"table",10)(4218,"tr",11)(4219,"th",12),e(4220,"Nome"),t(),n(4221,"th",12),e(4222,"Descri\xE7\xE3o"),t()(),n(4223,"tr",13)(4224,"td",14)(4225,"div",15)(4226,"span",16),e(4227," Boolean"),i(4228,"br"),t()()(),n(4229,"td",20)(4230,"p"),e(4231,"Valor booleano."),t()()(),n(4232,"tr",13)(4233,"td",14)(4234,"div",15)(4235,"span",16),e(4236," Currency"),i(4237,"br"),t()()(),n(4238,"td",20)(4239,"p"),e(4240,"Valor num\xE9rico que cont\xE9m casas decimais e milhar."),t()()(),n(4241,"tr",13)(4242,"td",14)(4243,"div",15)(4244,"span",16),e(4245," Decimal"),i(4246,"br"),t()()(),n(4247,"td",20)(4248,"p"),e(4249,"Valor num\xE9rico que cont\xE9m casas decimais e milhar."),t()()(),n(4250,"tr",13)(4251,"td",14)(4252,"div",15)(4253,"span",16),e(4254," Date"),i(4255,"br"),t()()(),n(4256,"td",20)(4257,"p"),e(4258,"Valor para data."),t()()(),n(4259,"tr",13)(4260,"td",14)(4261,"div",15)(4262,"span",16),e(4263," DateTime"),i(4264,"br"),t()()(),n(4265,"td",20)(4266,"p"),e(4267,"Valor para data e hora."),t()()(),n(4268,"tr",13)(4269,"td",14)(4270,"div",15)(4271,"span",16),e(4272," Time"),i(4273,"br"),t()()(),n(4274,"td",20)(4275,"p"),e(4276,"Utilizado para informar/exibir hora."),t()()(),n(4277,"tr",13)(4278,"td",14)(4279,"div",15)(4280,"span",16),e(4281," Number"),i(4282,"br"),t()()(),n(4283,"td",20)(4284,"p"),e(4285,"Valor num\xE9rico."),t()()(),n(4286,"tr",13)(4287,"td",14)(4288,"div",15)(4289,"span",16),e(4290," String"),i(4291,"br"),t()()(),n(4292,"td",20)(4293,"p"),e(4294,"Texto."),t()()(),n(4295,"tr",13)(4296,"td",14)(4297,"div",15)(4298,"span",16),e(4299," Upload"),i(4300,"br"),t()()(),n(4301,"td",20)(4302,"p"),e(4303,"Utilizado para fazer uploads de arquivos."),t()()()()())},dependencies:[g],encapsulation:2})}return o})();var ne=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(a){return new(a||o)(E(_),E(K))};static \u0275cmp=s({type:o,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Dynamic Form",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,l){a&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),c("p-click",function(){return l.changeTab("doc")}),i(3,"sample-po-dynamic-form-doc"),t(),n(4,"po-tab",3),c("p-click",function(){return l.changeTab("web")}),i(5,"sample-po-dynamic-form-basic-view")(6,"sample-po-dynamic-form-register-view")(7,"sample-po-dynamic-form-container-view"),t()()()),a&2&&(p("p-actions",l.actions),d(2),p("p-active",l.activeTab==="doc"),d(2),p("p-hide",l.hidePoWebSample)("p-active",l.activeTab==="web"))},dependencies:[X,S,b,Y,Z,ee,te],encapsulation:2})}return o})();var ve=[{path:"",component:ne}],ie=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=T({type:o});static \u0275inj=P({imports:[V.forChild(ve),V]})}return o})();var We=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=T({type:o});static \u0275inj=P({imports:[J,ie]})}return o})();export{We as DocPoDynamicFormModule};
