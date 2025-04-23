import{$ as w,$a as g,$d as x,A as M,B as q,Ga as e,Hd as f,Ia as b,Na as L,Oa as V,Pa as u,Rd as v,T as m,U as T,Wb as z,Yb as B,Zb as A,_ as d,_d as E,h as F,ha as p,ka as y,na as i,oa as t,ob as H,pa as n,pb as I,te as S,ua as c,ue as _,x as j,y as D}from"./chunk-Y4SQKOF7.js";var $=()=>({property:"name"}),ee=o=>[o],te=()=>({name:"Jhon"}),N=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-dynamic-view-basic"]],standalone:!1,decls:1,vars:6,consts:[[3,"p-fields","p-value"]],template:function(a,l){a&1&&n(0,"po-dynamic-view",0),a&2&&p("p-fields",u(3,ee,V(2,$)))("p-value",V(5,te))},dependencies:[f],encapsulation:2})}return o})();var ne=o=>({"docs-sample-code-tabs":o}),R=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-dynamic-view-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,l){a&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Dynamic View Basic"),t(),i(4,"a",2),c("click",function(){return l.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-dynamic-view-basic/sample-po-dynamic-view-basic.component.html"),t(),i(13,"pre",7),e(14,`<po-dynamic-view [p-fields]="[{ property: 'name' }]" [p-value]="{ name: 'Jhon' }"> </po-dynamic-view>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-dynamic-view-basic/sample-po-dynamic-view-basic.component.ts"),t(),i(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-dynamic-view-basic',
  templateUrl: './sample-po-dynamic-view-basic.component.html',
  standalone: false
})
export class SamplePoDynamicViewBasicComponent {}
`),t()()()()(),i(21,"div",10),n(22,"sample-po-dynamic-view-basic"),t(),n(23,"hr")),a&2&&(m(5),y("po-icon "+l.sampleCodeButtonIcon),m(),b(" ",l.sampleCodeButtonLabel,""),m(),p("ngClass",u(4,ne,l.hideSampleCodeTabs)))},dependencies:[g,S,E,x,N],encapsulation:2})}return o})();var G=(()=>{class o{fields=[{property:"name",divider:"Personal data",gridColumns:4,order:1},{property:"age",label:"Age",gridColumns:4},{property:"genre",gridColumns:4},{property:"cpf",label:"CPF",gridColumns:4,order:2},{property:"rg",label:"RG",gridColumns:4,order:3},{property:"graduation",label:"Graduation",gridColumns:4},{property:"company",label:"Company",divider:"Work Data"},{property:"job",tag:!0,icon:"an an-copy"},{property:"admissionDate",label:"Admission date",type:"date"},{property:"hoursPerDay",label:"Hours per day",type:"time"},{property:"wage",label:"Wage",type:"currency"},{property:"availability",tag:!0,color:"#C596E7",icon:"an an-check"},{property:"city",label:"City",divider:"Address"},{property:"addressStreet",label:"Street"},{property:"addressNumber",label:"Number"},{property:"zipCode",label:"Zip Code"},{property:"marriedStatus",options:[{label:"MARRIED",value:"1"}],label:"Marital status",divider:"ADDITIONAL DATA",tag:!0,color:"#C596E7"},{property:"children",options:[{label:"yes ",value:"1"},{label:"no",value:"2"}]},{property:"hobbies",label:"Hobbies",gridColumns:12,divider:"Additional Information"}];employee={name:"Jhon Doe",age:"20",rg:"9999999",email:"jhon.doe@po-ui.com",cpf:"999.999.999-99",birthday:"1998-03-14T00:00:01-00:00",graduation:"College Degree",genre:"male",company:"PO",job:"Software Engineer",addressStreet:"Avenida Braz Leme",addressNumber:"1000",zipCode:"02511-000",city:"S\xE3o Paulo",wage:8000.5,availability:"Available",admissionDate:"2014-10-14T13:45:00-00:00",hoursPerDay:"08:30:00",marriedStatus:"1",children:"1",hobbies:`Leitura de livros t\xE9cnicos e fic\xE7\xE3o cient\xEDfica.
Pr\xE1tica de corrida ao ar livre.
Jogos de tabuleiro e videogames.
Culin\xE1ria, especialmente cozinha italiana.`};static \u0275fac=function(a){return new(a||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-dynamic-view-employee"]],standalone:!1,decls:2,vars:3,consts:[["p-title","Employee"],[3,"p-fields","p-value","p-text-wrap"]],template:function(a,l){a&1&&(i(0,"po-page-default",0),n(1,"po-dynamic-view",1),t()),a&2&&(m(),p("p-fields",l.fields)("p-value",l.employee)("p-text-wrap",!0))},dependencies:[f,v],encapsulation:2})}return o})();var le=o=>({"docs-sample-code-tabs":o}),J=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-dynamic-view-employee-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,l){a&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Dynamic View - Employee"),t(),i(4,"a",2),c("click",function(){return l.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-dynamic-view-employee/sample-po-dynamic-view-employee.component.html"),t(),i(13,"pre",7),e(14,`<po-page-default p-title="Employee">
  <po-dynamic-view [p-fields]="fields" [p-value]="employee" [p-text-wrap]="true"> </po-dynamic-view>
</po-page-default>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-dynamic-view-employee/sample-po-dynamic-view-employee.component.ts"),t(),i(19,"pre",9),e(20,`import { Component } from '@angular/core';

import { PoDynamicViewField } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-dynamic-view-employee',
  templateUrl: './sample-po-dynamic-view-employee.component.html',
  standalone: false
})
export class SamplePoDynamicViewEmployeeComponent {
  fields: Array<PoDynamicViewField> = [
    { property: 'name', divider: 'Personal data', gridColumns: 4, order: 1 },
    { property: 'age', label: 'Age', gridColumns: 4 },
    { property: 'genre', gridColumns: 4 },
    { property: 'cpf', label: 'CPF', gridColumns: 4, order: 2 },
    { property: 'rg', label: 'RG', gridColumns: 4, order: 3 },
    { property: 'graduation', label: 'Graduation', gridColumns: 4 },
    { property: 'company', label: 'Company', divider: 'Work Data' },
    { property: 'job', tag: true, icon: 'an an-copy' },
    { property: 'admissionDate', label: 'Admission date', type: 'date' },
    { property: 'hoursPerDay', label: 'Hours per day', type: 'time' },
    { property: 'wage', label: 'Wage', type: 'currency' },
    { property: 'availability', tag: true, color: '#C596E7', icon: 'an an-check' },
    { property: 'city', label: 'City', divider: 'Address' },
    { property: 'addressStreet', label: 'Street' },
    { property: 'addressNumber', label: 'Number' },
    { property: 'zipCode', label: 'Zip Code' },
    {
      property: 'marriedStatus',
      options: [{ label: 'MARRIED', value: '1' }],
      label: 'Marital status',
      divider: 'ADDITIONAL DATA',
      tag: true,
      color: '#C596E7'
    },
    {
      property: 'children',
      options: [
        { label: 'yes ', value: '1' },
        { label: 'no', value: '2' }
      ]
    },
    {
      property: 'hobbies',
      label: 'Hobbies',
      gridColumns: 12,
      divider: 'Additional Information'
    }
  ];

  employee = {
    name: 'Jhon Doe',
    age: '20',
    rg: '9999999',
    email: 'jhon.doe@po-ui.com',
    cpf: '999.999.999-99',
    birthday: '1998-03-14T00:00:01-00:00',
    graduation: 'College Degree',
    genre: 'male',
    company: 'PO',
    job: 'Software Engineer',
    addressStreet: 'Avenida Braz Leme',
    addressNumber: '1000',
    zipCode: '02511-000',
    city: 'S\xE3o Paulo',
    wage: 8000.5,
    availability: 'Available',
    admissionDate: '2014-10-14T13:45:00-00:00',
    hoursPerDay: '08:30:00',
    marriedStatus: '1',
    children: '1',
    hobbies:
      'Leitura de livros t\xE9cnicos e fic\xE7\xE3o cient\xEDfica.\\n' +
      'Pr\xE1tica de corrida ao ar livre.\\n' +
      'Jogos de tabuleiro e videogames.\\n' +
      'Culin\xE1ria, especialmente cozinha italiana.'
  };
}
`),t()()()()(),i(21,"div",10),n(22,"sample-po-dynamic-view-employee"),t(),n(23,"hr")),a&2&&(m(5),y("po-icon "+l.sampleCodeButtonIcon),m(),b(" ",l.sampleCodeButtonLabel,""),m(),p("ngClass",u(4,le,l.hideSampleCodeTabs)))},dependencies:[g,S,E,x,G],encapsulation:2})}return o})();var O=(()=>{class o{httpClient;headers=new H({"X-PO-No-Message":"true"});url;filterParams;constructor(r){this.httpClient=r}getObjectByValue(r,a){return this.httpClient.get(this.url,{headers:this.headers,params:this.filterParams}).pipe(F(l=>"items"in l?l.items:l))}setConfig(r,a){this.url=r,this.filterParams=a}static \u0275fac=function(a){return new(a||o)(M(I))};static \u0275prov=j({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var W=(()=>{class o{employee={name:"Jhon Doe",age:"20",rg:"9999999",email:"jhon.doe@po-ui.com",cpf:"999.999.999-99",birthday:"1998-03-14T00:00:01-00:00",graduation:"College Degree",genre:"male",company:"PO",job:"Software Engineer",addressStreet:"Avenida Braz Leme",addressNumber:"1000",zipCode:"02511-000",city:"A",wage:8000.5,availability:"Available",cities:[{city:"S\xE3o Paulo",id:"SP"},{city:"Joinville",id:"SC"},{city:"Belo Horizonte",id:"MG"}],admissionDate:"2014-10-14T13:45:00-00:00",hoursPerDay:"08:30:00",profile:"admin",image:"https://raw.githubusercontent.com/po-ui/po-angular/master/docs/assets/po-logos/po_color_bg.svg"};fields=[{property:"name",divider:"Personal data",gridColumns:4,order:1},{property:"age",label:"Age",gridColumns:4},{property:"genre",gridColumns:4},{property:"cpf",label:"CPF",gridColumns:4,order:2},{property:"rg",label:"RG",gridColumns:4,order:3},{property:"graduation",label:"Graduation",gridColumns:4},{property:"company",label:"Company",divider:"Work Data"},{property:"job",tag:!0,icon:"an an-copy"},{property:"admissionDate",label:"Admission date",type:"date"},{property:"hoursPerDay",label:"Hours per day",type:"time"},{property:"wage",label:"Wage",type:"currency"},{property:"availability",tag:!0,color:"#C596E7",icon:"an an-check"},{property:"cities",isArrayOrObject:!0,fieldLabel:"city",fieldValue:"id",concatLabelValue:!0},{property:"city",label:"City",divider:"Address"},{property:"addressStreet",label:"Street"},{property:"addressNumber",label:"Number"},{property:"zipCode",label:"Zip Code"},{property:"image",divider:"Image",image:!0,alt:"image",height:"250"}];_newService=q(O);ngOnInit(){this._newService.setConfig("https://po-sample-api.onrender.com/v1/hotels",{id:1485976673002})}customEmployeeData(){return{value:{cpf:this.checkProfile(),rg:this.checkProfile(),wage:this.checkProfile()},fields:[{property:"name",divider:"Personal data by load customization",order:1},{property:"cpf",tag:!0,color:"color-07",order:2},{property:"rg",tag:!0,color:"color-07",order:3},{property:"wage",type:"string",tag:!0,color:"color-07"},{property:"genre",visible:!1},{property:"job",tag:!1},{searchService:this._newService,fieldLabel:"address_city",property:"city"}]}}checkProfile(){if(this.employee.profile==="admin")return"confidential"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-dynamic-view-employee-on-load"]],standalone:!1,features:[L([O])],decls:2,vars:3,consts:[["p-title","Employee on Load"],[3,"p-fields","p-load","p-value"]],template:function(a,l){a&1&&(i(0,"po-page-default",0),n(1,"po-dynamic-view",1),t()),a&2&&(m(),p("p-fields",l.fields)("p-load",l.customEmployeeData.bind(l))("p-value",l.employee))},dependencies:[f,v],encapsulation:2})}return o})();var de=o=>({"docs-sample-code-tabs":o}),U=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-dynamic-view-employee-on-load-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,l){a&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Dynamic View - Employee on load"),t(),i(4,"a",2),c("click",function(){return l.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-dynamic-view-employee-on-load/sample-po-dynamic-view-employee-on-load.component.html"),t(),i(13,"pre",7),e(14,`<po-page-default p-title="Employee on Load">
  <po-dynamic-view [p-fields]="fields" [p-load]="customEmployeeData.bind(this)" [p-value]="employee"> </po-dynamic-view>
</po-page-default>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-dynamic-view-employee-on-load/sample-po-dynamic-view-employee-on-load.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, OnInit, inject } from '@angular/core';

import { PoDynamicViewField } from '@po-ui/ng-components';
import { SamplePoDynamicViewEmployeeOnLoadService } from './sample-po-dynamic-view-employee-on-load.service';

@Component({
  selector: 'sample-po-dynamic-view-employee-on-load',
  templateUrl: './sample-po-dynamic-view-employee-on-load.component.html',
  providers: [SamplePoDynamicViewEmployeeOnLoadService],
  standalone: false
})
export class SamplePoDynamicViewEmployeeOnLoadComponent implements OnInit {
  employee = {
    name: 'Jhon Doe',
    age: '20',
    rg: '9999999',
    email: 'jhon.doe@po-ui.com',
    cpf: '999.999.999-99',
    birthday: '1998-03-14T00:00:01-00:00',
    graduation: 'College Degree',
    genre: 'male',
    company: 'PO',
    job: 'Software Engineer',
    addressStreet: 'Avenida Braz Leme',
    addressNumber: '1000',
    zipCode: '02511-000',
    city: 'A',
    wage: 8000.5,
    availability: 'Available',
    cities: [
      {
        city: 'S\xE3o Paulo',
        id: 'SP'
      },
      {
        city: 'Joinville',
        id: 'SC'
      },
      {
        city: 'Belo Horizonte',
        id: 'MG'
      }
    ],
    admissionDate: '2014-10-14T13:45:00-00:00',
    hoursPerDay: '08:30:00',
    profile: 'admin',
    image: 'https://raw.githubusercontent.com/po-ui/po-angular/master/docs/assets/po-logos/po_color_bg.svg'
  };

  fields: Array<PoDynamicViewField> = [
    { property: 'name', divider: 'Personal data', gridColumns: 4, order: 1 },
    { property: 'age', label: 'Age', gridColumns: 4 },
    { property: 'genre', gridColumns: 4 },
    { property: 'cpf', label: 'CPF', gridColumns: 4, order: 2 },
    { property: 'rg', label: 'RG', gridColumns: 4, order: 3 },
    { property: 'graduation', label: 'Graduation', gridColumns: 4 },
    { property: 'company', label: 'Company', divider: 'Work Data' },
    { property: 'job', tag: true, icon: 'an an-copy' },
    { property: 'admissionDate', label: 'Admission date', type: 'date' },
    { property: 'hoursPerDay', label: 'Hours per day', type: 'time' },
    { property: 'wage', label: 'Wage', type: 'currency' },
    { property: 'availability', tag: true, color: '#C596E7', icon: 'an an-check' },
    { property: 'cities', isArrayOrObject: true, fieldLabel: 'city', fieldValue: 'id', concatLabelValue: true },
    { property: 'city', label: 'City', divider: 'Address' },
    { property: 'addressStreet', label: 'Street' },
    { property: 'addressNumber', label: 'Number' },
    { property: 'zipCode', label: 'Zip Code' },
    { property: 'image', divider: 'Image', image: true, alt: 'image', height: '250' }
  ];

  private _newService = inject(SamplePoDynamicViewEmployeeOnLoadService);

  ngOnInit(): void {
    this._newService.setConfig('https://po-sample-api.onrender.com/v1/hotels', { id: 1485976673002 });
  }

  customEmployeeData() {
    return {
      value: {
        cpf: this.checkProfile(),
        rg: this.checkProfile(),
        wage: this.checkProfile()
      },
      fields: [
        { property: 'name', divider: 'Personal data by load customization', order: 1 },
        { property: 'cpf', tag: true, color: 'color-07', order: 2 },
        { property: 'rg', tag: true, color: 'color-07', order: 3 },
        { property: 'wage', type: 'string', tag: true, color: 'color-07' },
        { property: 'genre', visible: false },
        { property: 'job', tag: false },
        {
          searchService: this._newService,
          fieldLabel: 'address_city',
          property: 'city'
        }
      ]
    };
  }

  private checkProfile(): string {
    if (this.employee.profile === 'admin') {
      return 'confidential';
    }
  }
}
`),t(),i(21,"label",6),e(22,"sample-po-dynamic-view-employee-on-load/sample-po-dynamic-view-employee-on-load.service.ts"),t(),i(23,"pre",9),e(24,`import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SamplePoDynamicViewEmployeeOnLoadService {
  readonly headers: HttpHeaders = new HttpHeaders({
    'X-PO-No-Message': 'true'
  });

  url: string;
  filterParams;

  constructor(private httpClient: HttpClient) {}

  getObjectByValue(value: string | Array<any>, filterParams?: any): Observable<Array<any> | { [key: string]: any }> {
    return this.httpClient
      .get(this.url, {
        headers: this.headers,
        params: this.filterParams
      })
      .pipe(map((response: any) => ('items' in response ? response.items : response)));
  }

  setConfig(url: string, filterParams) {
    this.url = url;
    this.filterParams = filterParams;
  }
}
`),t()()()()(),i(25,"div",10),n(26,"sample-po-dynamic-view-employee-on-load"),t(),n(27,"hr")),a&2&&(m(5),y("po-icon "+l.sampleCodeButtonIcon),m(),b(" ",l.sampleCodeButtonLabel,""),m(),p("ngClass",u(4,de,l.hideSampleCodeTabs)))},dependencies:[g,S,E,x,W],encapsulation:2})}return o})();var Z=(()=>{class o{fields=[{property:"name",container:"Personal data",gridColumns:4,order:1},{property:"age",label:"Age",gridColumns:4},{property:"genre",gridColumns:4},{property:"cpf",label:"CPF",gridColumns:4,order:2},{property:"rg",label:"RG",gridColumns:4,order:3},{property:"graduation",label:"Graduation",gridColumns:4},{property:"company",label:"Company",container:"Work Data"},{property:"job",tag:!0,icon:"an an-copy"},{property:"admissionDate",label:"Admission date",type:"date"},{property:"hoursPerDay",label:"Hours per day",type:"time"},{property:"wage",label:"Wage",type:"currency"},{property:"availability",tag:!0,color:"#C596E7",icon:"an an-check"},{property:"city",label:"City",container:"Address"},{property:"addressStreet",label:"Street"},{property:"addressNumber",label:"Number"},{property:"zipCode",label:"Zip Code"},{property:"marriedStatus",options:[{label:"MARRIED",value:"1"}],label:"Marital status",container:"ADDITIONAL DATA",tag:!0,color:"#C596E7"},{property:"children",options:[{label:"yes ",value:"1"},{label:"no",value:"2"}]}];employee={name:"Jhon Doe",age:"20",rg:"9999999",email:"jhon.doe@po-ui.com",cpf:"999.999.999-99",birthday:"1998-03-14T00:00:01-00:00",graduation:"College Degree",genre:"male",company:"PO",job:"Software Engineer",addressStreet:"Avenida Braz Leme",addressNumber:"1000",zipCode:"02511-000",city:"S\xE3o Paulo",wage:8000.5,availability:"Available",admissionDate:"2014-10-14T13:45:00-00:00",hoursPerDay:"08:30:00",marriedStatus:"1",children:"1"};static \u0275fac=function(a){return new(a||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-dynamic-view-container"]],standalone:!1,decls:2,vars:2,consts:[["p-title","Employee"],[3,"p-fields","p-value"]],template:function(a,l){a&1&&(i(0,"po-page-default",0),n(1,"po-dynamic-view",1),t()),a&2&&(m(),p("p-fields",l.fields)("p-value",l.employee))},dependencies:[f,v],encapsulation:2})}return o})();var ce=o=>({"docs-sample-code-tabs":o}),X=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-dynamic-view-container-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,l){a&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Dynamic View - Employee on load"),t(),i(4,"a",2),c("click",function(){return l.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-dynamic-view-container/sample-po-dynamic-view-container.component.html"),t(),i(13,"pre",7),e(14,`<po-page-default p-title="Employee">
  <po-dynamic-view [p-fields]="fields" [p-value]="employee"> </po-dynamic-view>
</po-page-default>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-dynamic-view-container/sample-po-dynamic-view-container.component.ts"),t(),i(19,"pre",9),e(20,`import { Component } from '@angular/core';
import { PoDynamicViewField } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-dynamic-view-container',
  templateUrl: './sample-po-dynamic-view-container.component.html',
  standalone: false
})
export class SamplePoDynamicViewContainerComponent {
  fields: Array<PoDynamicViewField> = [
    { property: 'name', container: 'Personal data', gridColumns: 4, order: 1 },
    { property: 'age', label: 'Age', gridColumns: 4 },
    { property: 'genre', gridColumns: 4 },
    { property: 'cpf', label: 'CPF', gridColumns: 4, order: 2 },
    { property: 'rg', label: 'RG', gridColumns: 4, order: 3 },
    { property: 'graduation', label: 'Graduation', gridColumns: 4 },
    { property: 'company', label: 'Company', container: 'Work Data' },
    { property: 'job', tag: true, icon: 'an an-copy' },
    { property: 'admissionDate', label: 'Admission date', type: 'date' },
    { property: 'hoursPerDay', label: 'Hours per day', type: 'time' },
    { property: 'wage', label: 'Wage', type: 'currency' },
    { property: 'availability', tag: true, color: '#C596E7', icon: 'an an-check' },
    { property: 'city', label: 'City', container: 'Address' },
    { property: 'addressStreet', label: 'Street' },
    { property: 'addressNumber', label: 'Number' },
    { property: 'zipCode', label: 'Zip Code' },
    {
      property: 'marriedStatus',
      options: [{ label: 'MARRIED', value: '1' }],
      label: 'Marital status',
      container: 'ADDITIONAL DATA',
      tag: true,
      color: '#C596E7'
    },
    {
      property: 'children',
      options: [
        { label: 'yes ', value: '1' },
        { label: 'no', value: '2' }
      ]
    }
  ];

  employee = {
    name: 'Jhon Doe',
    age: '20',
    rg: '9999999',
    email: 'jhon.doe@po-ui.com',
    cpf: '999.999.999-99',
    birthday: '1998-03-14T00:00:01-00:00',
    graduation: 'College Degree',
    genre: 'male',
    company: 'PO',
    job: 'Software Engineer',
    addressStreet: 'Avenida Braz Leme',
    addressNumber: '1000',
    zipCode: '02511-000',
    city: 'S\xE3o Paulo',
    wage: 8000.5,
    availability: 'Available',
    admissionDate: '2014-10-14T13:45:00-00:00',
    hoursPerDay: '08:30:00',
    marriedStatus: '1',
    children: '1'
  };
}
`),t()()()()(),i(21,"div",10),n(22,"sample-po-dynamic-view-container"),t(),n(23,"hr")),a&2&&(m(5),y("po-icon "+l.sampleCodeButtonIcon),m(),b(" ",l.sampleCodeButtonLabel,""),m(),p("ngClass",u(4,ce,l.hideSampleCodeTabs)))},dependencies:[g,S,E,x,Z],encapsulation:2})}return o})();var Q=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-dynamic-view-doc"]],standalone:!1,decls:1532,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoDynamicViewField[]"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","object"],[1,"docs-api-h4","docs-api-class-name"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],["pan","",1,"docs-api-property-type","Array<string>"],["href","https://angular.io/api/common/CurrencyPipe"],["href","https://angular.io/api/common/DatePipe"],["href","https://angular.io/api/common/DecimalPipe"],["pan","",1,"docs-api-property-type","number"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","Array<{","label:","string;","value:","string"],["pan","",1,"docs-api-property-type","number;","}>"],["pan","",1,"docs-api-property-type","PoComboFilter"],["pan","",1,"docs-api-property-type","PoMultiselectFilter"],["href","https://po-ui.io/guides/api"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","PoDynamicViewRequest"],["pan","",1,"docs-api-property-type","PoDynamicFieldType"]],template:function(a,l){a&1&&(i(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoDynamicModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2),i(5,"h3",3),e(6,"Componente"),t(),i(7,"h4",4)(8,"code",5),e(9,"PoDynamicViewComponent"),t()(),i(10,"div",2)(11,"p"),e(12,"Componente para listar dados dinamicamente a partir de uma lista de objetos."),t(),i(13,"blockquote")(14,"p"),e(15,"Por padr\xE3o esse componente cria "),i(16,"code"),e(17,"po-info"),t(),e(18," para exibi\xE7\xE3o, \xE9 poss\xEDvel criar "),i(19,"code"),e(20,"po-tag"),t(),e(21," passando a propriedade { tag: true }. "),t()()(),i(22,"div",6)(23,"h4",7),e(24,"Seletor"),t(),i(25,"pre",8),e(26,`<po-dynamic-view
    p-fields="PoDynamicViewField[]"
    p-load="string | Function"
    p-show-all-value="boolean"
    p-text-wrap="boolean"
    p-value="object" >
</po-dynamic-view>
`),t()(),i(27,"h4",9),e(28,"Propriedades"),t(),i(29,"table",10)(30,"tr",11)(31,"th",12),e(32,"Nome"),t(),i(33,"th",12),e(34,"Tipo"),t(),i(35,"th",12),e(36,"Padr\xE3o"),t(),i(37,"th",12),e(38,"Descri\xE7\xE3o"),t()(),i(39,"tr",13)(40,"td",14)(41,"div",15)(42,"span",16),e(43," p-fields"),n(44,"br"),t()()(),i(45,"td",17)(46,"code",18),e(47,"PoDynamicViewField[]"),t()(),i(48,"td",19)(49,"p")(50,"code"),e(51,"[]"),t()()(),i(52,"td",20)(53,"em")(54,"strong"),e(55,"(opcional)"),t()(),i(56,"p"),e(57,"Lista de objetos que implementam a interface "),i(58,"code"),e(59,"PoDynamicView"),t(),e(60,"."),t(),i(61,"blockquote")(62,"p"),e(63,"Ex: "),i(64,"code"),e(65,"[ { property: 'age' } ]"),t()()(),i(66,"p"),e(67,"Regras de tipagem e formata\xE7\xE3o dos valores exibidos:"),t(),i(68,"ul")(69,"li"),e(70,"Caso o "),i(71,"em"),e(72,"type"),t(),e(73," informado seja "),i(74,"em"),e(75,"currency"),t(),e(76," e n\xE3o seja informado o "),i(77,"em"),e(78,"format"),t(),e(79,` o mesmo recebe "'BRL', 'symbol', '1.2-2'"
como formato padr\xE3o.`),t(),i(80,"li"),e(81,"Caso o "),i(82,"em"),e(83,"type"),t(),e(84," informado seja "),i(85,"em"),e(86,"date"),t(),e(87," e n\xE3o seja informado o "),i(88,"em"),e(89,"format"),t(),e(90," o mesmo recebe 'dd/MM/yyyy' como formato padr\xE3o."),t(),i(91,"li"),e(92,"Caso o "),i(93,"em"),e(94,"type"),t(),e(95," informado seja "),i(96,"em"),e(97,"dateTime"),t(),e(98," e n\xE3o seja informado o "),i(99,"em"),e(100,"format"),t(),e(101," o mesmo recebe 'dd/MM/yyyy HH:mm:ss' como formato padr\xE3o."),t(),i(102,"li"),e(103,"Caso o "),i(104,"em"),e(105,"type"),t(),e(106," informado seja "),i(107,"em"),e(108,"number"),t(),e(109," e n\xE3o seja informado o "),i(110,"em"),e(111,"format"),t(),e(112," o mesmo n\xE3o ser\xE1 formatado."),t(),i(113,"li"),e(114,"Caso o "),i(115,"em"),e(116,"type"),t(),e(117," informado seja "),i(118,"em"),e(119,"time"),t(),e(120," e n\xE3o seja informado o "),i(121,"em"),e(122,"format"),t(),e(123," o mesmo recebe 'HH:mm:ss.ffffff' como formato padr\xE3o."),t()(),i(124,"blockquote")(125,"p"),e(126,"As propriedades informadas ser\xE3o exibidas mesmo n\xE3o contendo valor de refer\xEAncia no objeto da propriedade "),i(127,"code"),e(128,"p-value"),t(),e(129,"."),t()()()(),i(130,"tr",13)(131,"td",14)(132,"div",15)(133,"span",16),e(134," p-load"),n(135,"br"),t()()(),i(136,"td",17)(137,"code",21),e(138,"string "),t(),i(139,"code",22),e(140," Function"),t()(),i(141,"td",19),e(142,"-"),t(),i(143,"td",20)(144,"em")(145,"strong"),e(146,"(opcional)"),t()(),i(147,"p"),e(148,"Possibilita executar uma fun\xE7\xE3o quando o componente \xE9 inicializado."),t(),i(149,"p"),e(150,"A propriedade aceita os seguintes tipos:"),t(),i(151,"ul")(152,"li")(153,"strong"),e(154,"String"),t(),e(155,": Endpoint usado pelo componente para requisi\xE7\xE3o via "),i(156,"code"),e(157,"POST"),t(),e(158,"."),t(),i(159,"li")(160,"strong"),e(161,"Function"),t(),e(162,": M\xE9todo que ser\xE1 executado na inicializa\xE7\xE3o do componente."),t()(),i(163,"p"),e(164,"Para os dois tipos de utiliza\xE7\xE3o da propriedade espera-se o seguinte retorno:"),t(),i(165,"pre")(166,"code"),e(167,`{
  value: {
    cnpj: '**************', // altera valor do campo
    updated: (new Date()).toString() // atribui valor ao campo novo
  },
  fields: [
    { property: 'updated', tag: true } // inclui campo novo
  ]
}
`),t()(),i(168,"blockquote")(169,"p")(170,"strong"),e(171,"value"),t(),e(172,": any = atribui novo valor do model."),t()(),i(173,"blockquote")(174,"p")(175,"strong"),e(176,"fields"),t(),e(177,": "),i(178,"code"),e(179,"Array<PoDynamicViewField>"),t(),e(180,` = Lista de campos que deseja alterar as propriedades,
caso enviar um campo a mais ser\xE1 criado um novo campo.`),t()(),i(181,"ul")(182,"li"),e(183,"Para esconder/remover campos precisa informar no field a propriedade "),i(184,"code"),e(185,"visible = false"),t(),e(186,"."),t()()()(),i(187,"tr",13)(188,"td",14)(189,"div",15)(190,"span",16),e(191," p-show-all-value"),n(192,"br"),t()()(),i(193,"td",17)(194,"code",23),e(195,"boolean"),t()(),i(196,"td",19)(197,"p")(198,"code"),e(199,"false"),t()()(),i(200,"td",20)(201,"em")(202,"strong"),e(203,"(opcional)"),t()(),i(204,"p"),e(205,"Indica se exibir\xE1 todas as informa\xE7\xF5es contidas dentro do objeto informado na propriedade "),i(206,"code"),e(207,"p-value"),t(),e(208,"."),t()()(),i(209,"tr",13)(210,"td",14)(211,"div",15)(212,"span",16),e(213," p-text-wrap"),n(214,"br"),t()()(),i(215,"td",17)(216,"code",23),e(217,"boolean"),t()(),i(218,"td",19)(219,"p")(220,"code"),e(221,"false"),t()()(),i(222,"td",20)(223,"em")(224,"strong"),e(225,"(opcional)"),t()(),i(226,"p"),e(227,"Permite a quebra de linha no texto do "),i(228,"code"),e(229,"p-value"),t(),e(230,", aplicando-a onde h\xE1 "),i(231,"code"),e(232,"\\n"),t(),e(233,"."),t(),i(234,"pre")(235,"code"),e(236,`<po-dynamic-view
  [p-value]="{ description: 'Primeira linha\\nSegunda linha' }"
  [p-text-wrap]="true"
></po-dynamic-view>
`),t()(),i(237,"p"),e(238,"Sa\xEDda:"),t(),i(239,"pre")(240,"code"),e(241,`Primeira linha
Segunda linha
`),t()()()(),i(242,"tr",13)(243,"td",14)(244,"div",15)(245,"span",16),e(246," p-value"),n(247,"br"),t()()(),i(248,"td",17)(249,"code",24),e(250,"object"),t()(),i(251,"td",19),e(252,"-"),t(),i(253,"td",20)(254,"p"),e(255,"Objeto que ser\xE1 utilizado para exibir as informa\xE7\xF5es din\xE2micas, o valor ser\xE1 recuperado atrav\xE9s do atributo "),i(256,"em"),e(257,"property"),t(),e(258,`
dos objetos contidos na propridade `),i(259,"code"),e(260,"p-fields"),t(),e(261,"."),t(),i(262,"blockquote")(263,"p"),e(264,"Ex: "),i(265,"code"),e(266,"{ age: '35' }"),t()()()()()(),i(267,"h3"),e(268,"Interfaces"),t(),i(269,"h4",25)(270,"code",5),e(271,"PoDynamicViewRequest"),t()(),i(272,"div",2)(273,"p"),e(274,"Define o tipo de busca customizada para um campo em espec\xEDfico."),t()(),i(275,"h4",9),e(276,"M\xE9todos"),t(),i(277,"table",26)(278,"tr",13)(279,"th",27)(280,"div",15)(281,"h4")(282,"span",16),e(283," getObjectByValue "),t()()()()(),i(284,"tr",20)(285,"td",20)(286,"p"),e(287,"M\xE9todo respons\xE1vel por enviar um valor que ser\xE1 buscado no servi\xE7o."),t()()()(),i(288,"h5")(289,"b"),e(290,"Par\xE2metros"),t()(),i(291,"table",10)(292,"tr",11)(293,"th",12),e(294,"Nome"),t(),i(295,"th",12),e(296,"Tipo"),t(),i(297,"th",12),e(298,"Descri\xE7\xE3o"),t()(),i(299,"tr",13)(300,"td",14),e(301," value"),t(),i(302,"td",17)(303,"code",21),e(304," string "),t(),i(305,"code",28),e(306," Array<any> "),t()(),i(307,"td",20)(308,"p"),e(309,"Valor \xFAnico a ser buscado na fonte de dados."),t()()(),i(310,"tr",13)(311,"td",14),e(312," filterParams"),t(),i(313,"td",17)(314,"code",29),e(315," any "),t()(),i(316,"td",20)(317,"p"),e(318,"Valor opcional para informar filtros customizados."),t()()()(),n(319,"br"),i(320,"h4",25)(321,"code",5),e(322,"PoDynamicViewField"),t()(),i(323,"div",2)(324,"p"),e(325," Interface para defini\xE7\xE3o das propriedades dos campos de visualiza\xE7\xE3o que ser\xE3o criados dinamicamente."),t()(),i(326,"h4",9),e(327,"Propriedades"),t(),i(328,"table",10)(329,"tr",11)(330,"th",12),e(331,"Nome"),t(),i(332,"th",12),e(333,"Tipo"),t(),i(334,"th",12),e(335,"Descri\xE7\xE3o"),t()(),i(336,"tr",13)(337,"td",14)(338,"div",15)(339,"span",16),e(340," alt"),n(341,"br"),t()()(),i(342,"td",17)(343,"code",21),e(344,"string"),t()(),i(345,"td",20)(346,"em")(347,"strong"),e(348,"(opcional)"),t()(),i(349,"p"),e(350,"Defini o texto alternativo descrevendo a imagem."),t(),i(351,"p"),e(352,"Exemplo de utiliza\xE7\xE3o:"),t(),i(353,"pre")(354,"code"),e(355,`[
  { property: 'imagem 1', image:'string', alt:'string', height:'300'},
];
`),t()(),i(356,"p")(357,"strong"),e(358,"Componentes compat\xEDveis:"),t(),i(359,"code"),e(360,"po-image"),t(),e(361,"."),t()()(),i(362,"tr",13)(363,"td",14)(364,"div",15)(365,"span",16),e(366," booleanFalse"),n(367,"br"),t()()(),i(368,"td",17)(369,"code",21),e(370,"string"),t()(),i(371,"td",20)(372,"em")(373,"strong"),e(374,"(opcional)"),t()(),i(375,"p"),e(376,"Texto exibido quando o valor do componente for "),i(377,"em"),e(378,"false"),t(),e(379,"."),t()()(),i(380,"tr",13)(381,"td",14)(382,"div",15)(383,"span",16),e(384," booleanTrue"),n(385,"br"),t()()(),i(386,"td",17)(387,"code",21),e(388,"string"),t()(),i(389,"td",20)(390,"em")(391,"strong"),e(392,"(opcional)"),t()(),i(393,"p"),e(394,"Texto exibido quando o valor do componente for "),i(395,"em"),e(396,"true"),t(),e(397,"."),t()()(),i(398,"tr",13)(399,"td",14)(400,"div",15)(401,"span",16),e(402," color"),n(403,"br"),t()()(),i(404,"td",17)(405,"code",21),e(406,"string"),t()(),i(407,"td",20)(408,"em")(409,"strong"),e(410,"(opcional)"),t()(),i(411,"p"),e(412,"Determina a cor da tag. As maneiras de customizar as cores s\xE3o:"),t(),i(413,"ul")(414,"li"),e(415,"Hexadeximal, por exemplo "),i(416,"code"),e(417,"#c64840"),t(),e(418,";"),t(),i(419,"li"),e(420,"RGB, como "),i(421,"code"),e(422,"rgb(0, 0, 165)"),t(),e(423,";"),t(),i(424,"li"),e(425,"O nome da cor, por exemplo "),i(426,"code"),e(427,"blue"),t(),e(428,";"),t(),i(429,"li"),e(430,"Usando uma das cores do tema do PO:"),t(),i(431,"li"),e(432,"Valores v\xE1lidos:"),t(),i(433,"li"),n(434,"span",30),i(435,"code"),e(436,"color-01"),t()(),i(437,"li"),n(438,"span",31),i(439,"code"),e(440,"color-02"),t()(),i(441,"li"),n(442,"span",32),i(443,"code"),e(444,"color-03"),t()(),i(445,"li"),n(446,"span",33),i(447,"code"),e(448,"color-04"),t()(),i(449,"li"),n(450,"span",34),i(451,"code"),e(452,"color-05"),t()(),i(453,"li"),n(454,"span",35),i(455,"code"),e(456,"color-06"),t()(),i(457,"li"),n(458,"span",36),i(459,"code"),e(460,"color-07"),t()(),i(461,"li"),n(462,"span",37),i(463,"code"),e(464,"color-08"),t()(),i(465,"li"),n(466,"span",38),i(467,"code"),e(468,"color-09"),t()(),i(469,"li"),n(470,"span",39),i(471,"code"),e(472,"color-10"),t()(),i(473,"li"),n(474,"span",40),i(475,"code"),e(476,"color-11"),t()(),i(477,"li"),n(478,"span",41),i(479,"code"),e(480,"color-12"),t()()()()(),i(481,"tr",13)(482,"td",14)(483,"div",15)(484,"span",16),e(485," concatLabelValue"),n(486,"br"),t()()(),i(487,"td",17)(488,"code",23),e(489,"boolean"),t()(),i(490,"td",20)(491,"em")(492,"strong"),e(493,"(opcional)"),t()(),i(494,"p"),e(495,"Permite que seja exibido em tela, de forma concatenada as propriedades "),i(496,"code"),e(497,"fieldLabel"),t(),e(498," + "),i(499,"code"),e(500,"fieldValue"),t(),e(501,`.
A ordem sempre ser\xE1 `),i(502,"code"),e(503,"fieldLabel"),t(),e(504," e depois "),i(505,"code"),e(506,"fieldValue"),t(),e(507,", n\xE3o sendo poss\xEDvel alterar."),t(),i(508,"blockquote")(509,"p"),e(510,"Propriedade funciona corretamente caso as propriedades "),i(511,"code"),e(512,"fieldLabel"),t(),e(513," e "),i(514,"code"),e(515,"fielValue"),t(),e(516," sejam v\xE1lidas."),t()()()(),i(517,"tr",13)(518,"td",14)(519,"div",15)(520,"span",16),e(521," container"),n(522,"br"),t()()(),i(523,"td",17)(524,"code",21),e(525,"string"),t()(),i(526,"td",20)(527,"em")(528,"strong"),e(529,"(opcional)"),t()(),i(530,"p"),e(531,`Exibir\xE1 um container para todos os campos abaixo dessa propriedade.
Esta propriedade configura o layout dos componentes dynamic-view e dynamic-edit, deixando todos os items dentro de containers`),t(),i(532,"p"),e(533,"Est\xE1 propriedade \xE9 do tipo string, o valor que ser\xE1 titulo do contianer"),t()()(),i(534,"tr",13)(535,"td",14)(536,"div",15)(537,"span",16),e(538," divider"),n(539,"br"),t()()(),i(540,"td",17)(541,"code",21),e(542,"string"),t()(),i(543,"td",20)(544,"em")(545,"strong"),e(546,"(opcional)"),t()(),i(547,"p"),e(548,"Exibir\xE1 um divisor acima, utilizando o seu conteudo como t\xEDtulo."),t()()(),i(549,"tr",13)(550,"td",14)(551,"div",15)(552,"span",16),e(553," fieldLabel"),n(554,"br"),t()()(),i(555,"td",17)(556,"code",21),e(557,"string"),t()(),i(558,"td",20)(559,"em")(560,"strong"),e(561,"(opcional)"),t()(),i(562,"p"),e(563,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como descri\xE7\xE3o do campo."),t(),i(564,"p"),e(565,"O valor padr\xE3o \xE9: "),i(566,"code"),e(567,"label"),t(),e(568,"."),t()()(),i(569,"tr",13)(570,"td",14)(571,"div",15)(572,"span",16),e(573," fieldValue"),n(574,"br"),t()()(),i(575,"td",17)(576,"code",21),e(577,"string"),t()(),i(578,"td",20)(579,"em")(580,"strong"),e(581,"(opcional)"),t()(),i(582,"p"),e(583,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como valor do campo."),t(),i(584,"p"),e(585,"O valor padr\xE3o \xE9: "),i(586,"code"),e(587,"value"),t(),e(588,"."),t()()(),i(589,"tr",13)(590,"td",14)(591,"div",15)(592,"span",16),e(593," format"),n(594,"br"),t()()(),i(595,"td",17)(596,"code",21),e(597,"string "),t(),i(598,"code",42),e(599," Array<string>"),t()(),i(600,"td",20)(601,"em")(602,"strong"),e(603,"(opcional)"),t()(),i(604,"p"),e(605,"Define o formato de exibi\xE7\xE3o para o valor de um campo."),t(),i(606,"ul")(607,"li")(608,"p"),e(609,"Quando "),i(610,"code"),e(611,"format"),t(),e(612," \xE9 uma "),i(613,"code"),e(614,"string"),t(),e(615,", o formato aplicado depende da propriedade "),i(616,"strong"),e(617,"type"),t(),e(618," segue como usar cada tipo:"),t(),i(619,"ul")(620,"li")(621,"code"),e(622,"currency"),t(),e(623,": Utiliza c\xF3digos de moeda definidos pelo "),i(624,"a",43),e(625,"CurrencyPipe"),t(),e(626,`.
Exemplos: Use 'BRL' para Real Brasileiro e 'USD' para D\xF3lar Americano.`),t(),i(627,"li")(628,"code"),e(629,"date"),t(),e(630,": Adota formatos de data especificados pelo "),i(631,"a",44),e(632,"DatePipe"),t(),e(633,`.
Suporta formatos personalizados, como dia (dd), m\xEAs (MM) e ano (yyyy ou yy).
Formato padr\xE3o \xE9 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),t(),i(634,"li")(635,"code"),e(636,"time"),t(),e(637,`: Aceita formatos de tempo, incluindo hora (HH), minutos (mm), segundos (ss) e opcionalmente
milisegundos (f-ffffff). Formato padr\xE3o \xE9 'HH:mm:ss'. Exemplos: 'HH:mm', 'HH:mm:ss.ffffff', 'HH:mm:ss.ff'.`),t(),i(638,"li")(639,"code"),e(640,"number"),t(),e(641,": Usa especifica\xE7\xF5es do "),i(642,"a",45),e(643,"DecimalPipe"),t(),e(644,` para formata\xE7\xE3o num\xE9rica.
Na aus\xEAncia de um formato espec\xEDfico, o n\xFAmero \xE9 exibido como fornecido.
Exemplo: Entrada `),i(645,"code"),e(646,"50"),t(),e(647,", formato "),i(648,"code"),e(649,"'1.2-5'"),t(),e(650,", resulta em "),i(651,"code"),e(652,"50.00"),t(),e(653,"."),t()()(),i(654,"li")(655,"p"),e(656,"Quando "),i(657,"code"),e(658,"format"),t(),e(659," \xE9 um "),i(660,"code"),e(661,"Array<string>"),t(),e(662,":"),t(),i(663,"ul")(664,"li"),e(665,"Cada elemento do array representa uma propriedade do objeto."),t(),i(666,"li"),e(667,"Os valores dessas propriedades s\xE3o concatenados, separados pelo padr\xE3o ' - '."),t(),i(668,"li"),e(669,"Exemplo: Para "),i(670,"code"),e(671,'format: ["id", "name"]'),t(),e(672," e um objeto "),i(673,"code"),e(674,"{ id: 1, name: 'Carlos Diego' }"),t(),e(675,`,
o resultado ser\xE1 `),i(676,"code"),e(677,"'1 - Carlos Diego'"),t(),e(678,"."),t()()()()()(),i(679,"tr",13)(680,"td",14)(681,"div",15)(682,"span",16),e(683," gridColumns"),n(684,"br"),t()()(),i(685,"td",17)(686,"code",46),e(687,"number"),t()(),i(688,"td",20)(689,"em")(690,"strong"),e(691,"(opcional)"),t()(),i(692,"p"),e(693,"Tamanho de exibi\xE7\xE3o do campo em telas."),t(),i(694,"p"),e(695,"Deve ser usado o sistema de "),i(696,"strong"),e(697,"grid"),t(),e(698," do PO (1 ... 12 colunas)."),t(),i(699,"blockquote")(700,"p"),e(701,"Esta propriedade \xE9 generica, aplica o valor em todos os tamanhos de telas."),t()()()(),i(702,"tr",13)(703,"td",14)(704,"div",15)(705,"span",16),e(706," gridLgColumns"),n(707,"br"),t()()(),i(708,"td",17)(709,"code",46),e(710,"number"),t()(),i(711,"td",20)(712,"em")(713,"strong"),e(714,"(opcional)"),t()(),i(715,"p"),e(716,"Tamanho de exibi\xE7\xE3o do campo em telas grandes (lg)."),t(),i(717,"p"),e(718,"Deve ser usado o sistema de "),i(719,"strong"),e(720,"grid"),t(),e(721," do PO (1 ... 12 colunas)."),t(),i(722,"blockquote")(723,"p"),e(724,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(725,"code"),e(726,"gridColumns"),t(),e(727,"."),t()()()(),i(728,"tr",13)(729,"td",14)(730,"div",15)(731,"span",16),e(732," gridLgPull"),n(733,"br"),t()()(),i(734,"td",17)(735,"code",46),e(736,"number"),t()(),i(737,"td",20)(738,"em")(739,"strong"),e(740,"(opcional)"),t()(),i(741,"p"),e(742,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas grandes (lg)."),t(),i(743,"p"),e(744,"Deve ser usado o sistema de "),i(745,"strong"),e(746,"grid"),t(),e(747," do PO (1 ... 11 colunas)."),t(),i(748,"blockquote")(749,"p"),e(750,"Esta propriedade n\xE3o funciona com a propriedade "),i(751,"code"),e(752,"gridColumns"),t(),e(753,". Deve-se especificar o tamanho da tela."),t()()()(),i(754,"tr",13)(755,"td",14)(756,"div",15)(757,"span",16),e(758," gridMdColumns"),n(759,"br"),t()()(),i(760,"td",17)(761,"code",46),e(762,"number"),t()(),i(763,"td",20)(764,"em")(765,"strong"),e(766,"(opcional)"),t()(),i(767,"p"),e(768,"Tamanho de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),t(),i(769,"p"),e(770,"Deve ser usado o sistema de "),i(771,"strong"),e(772,"grid"),t(),e(773," do PO (1 ... 12 colunas)."),t(),i(774,"blockquote")(775,"p"),e(776,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(777,"code"),e(778,"gridColumns"),t(),e(779,"."),t()()()(),i(780,"tr",13)(781,"td",14)(782,"div",15)(783,"span",16),e(784," gridMdPull"),n(785,"br"),t()()(),i(786,"td",17)(787,"code",46),e(788,"number"),t()(),i(789,"td",20)(790,"em")(791,"strong"),e(792,"(opcional)"),t()(),i(793,"p"),e(794,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas m\xE9dias (md)."),t(),i(795,"p"),e(796,"Deve ser usado o sistema de "),i(797,"strong"),e(798,"grid"),t(),e(799," do PO (1 ... 11 colunas)."),t(),i(800,"blockquote")(801,"p"),e(802,"Esta propriedade n\xE3o funciona com a propriedade "),i(803,"code"),e(804,"gridColumns"),t(),e(805,". Deve-se especificar o tamanho da tela."),t()()()(),i(806,"tr",13)(807,"td",14)(808,"div",15)(809,"span",16),e(810," gridSmColumns"),n(811,"br"),t()()(),i(812,"td",17)(813,"code",46),e(814,"number"),t()(),i(815,"td",20)(816,"em")(817,"strong"),e(818,"(opcional)"),t()(),i(819,"p"),e(820,"Tamanho de exibi\xE7\xE3o do campo em telas menores (sm)."),t(),i(821,"p"),e(822,"Deve ser usado o sistema de "),i(823,"strong"),e(824,"grid"),t(),e(825," do PO (1 ... 12 colunas)."),t(),i(826,"blockquote")(827,"p"),e(828,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(829,"code"),e(830,"gridColumns"),t(),e(831,"."),t()()()(),i(832,"tr",13)(833,"td",14)(834,"div",15)(835,"span",16),e(836," gridSmPull"),n(837,"br"),t()()(),i(838,"td",17)(839,"code",46),e(840,"number"),t()(),i(841,"td",20)(842,"em")(843,"strong"),e(844,"(opcional)"),t()(),i(845,"p"),e(846,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas menores (sm)."),t(),i(847,"p"),e(848,"Deve ser usado o sistema de "),i(849,"strong"),e(850,"grid"),t(),e(851," do PO (1 ... 11 colunas)."),t(),i(852,"blockquote")(853,"p"),e(854,"Esta propriedade n\xE3o funciona com a propriedade "),i(855,"code"),e(856,"gridColumns"),t(),e(857,". Deve-se especificar o tamanho da tela."),t()()()(),i(858,"tr",13)(859,"td",14)(860,"div",15)(861,"span",16),e(862," gridXlColumns"),n(863,"br"),t()()(),i(864,"td",17)(865,"code",46),e(866,"number"),t()(),i(867,"td",20)(868,"em")(869,"strong"),e(870,"(opcional)"),t()(),i(871,"p"),e(872,"Tamanho de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),t(),i(873,"p"),e(874,"Deve ser usado o sistema de "),i(875,"strong"),e(876,"grid"),t(),e(877," do PO (1 ... 12 colunas)."),t(),i(878,"blockquote")(879,"p"),e(880,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(881,"code"),e(882,"gridColumns"),t(),e(883,"."),t()()()(),i(884,"tr",13)(885,"td",14)(886,"div",15)(887,"span",16),e(888," gridXlPull"),n(889,"br"),t()()(),i(890,"td",17)(891,"code",46),e(892,"number"),t()(),i(893,"td",20)(894,"em")(895,"strong"),e(896,"(opcional)"),t()(),i(897,"p"),e(898,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas extra grandes (xl)."),t(),i(899,"p"),e(900,"Deve ser usado o sistema de "),i(901,"strong"),e(902,"grid"),t(),e(903," do PO (1 ... 11 colunas)."),t(),i(904,"blockquote")(905,"p"),e(906,"Esta propriedade n\xE3o funciona com a propriedade "),i(907,"code"),e(908,"gridColumns"),t(),e(909,". Deve-se especificar o tamanho da tela."),t()()()(),i(910,"tr",13)(911,"td",14)(912,"div",15)(913,"span",16),e(914," height"),n(915,"br"),t()()(),i(916,"td",17)(917,"code",21),e(918,"string"),t()(),i(919,"td",20)(920,"em")(921,"strong"),e(922,"(opcional)"),t()(),i(923,"p"),e(924,"Defini o texto alternativo descrevendo a imagem."),t(),i(925,"p"),e(926,"Exemplo de utiliza\xE7\xE3o:"),t(),i(927,"pre")(928,"code"),e(929,`[
  { property: 'imagem 1', image:'string', alt:'string', height:'number'},
];
`),t()(),i(930,"p")(931,"strong"),e(932,"Componentes compat\xEDveis:"),t(),i(933,"code"),e(934,"po-image"),t(),e(935,"."),t()()(),i(936,"tr",13)(937,"td",14)(938,"div",15)(939,"span",16),e(940," icon"),n(941,"br"),t()()(),i(942,"td",17)(943,"code",21),e(944,"string"),t()(),i(945,"td",20)(946,"em")(947,"strong"),e(948,"(opcional)"),t()(),i(949,"p"),e(950,"Define um \xEDcone que ser\xE1 exibido ao lado do valor para o campo do tipo "),i(951,"em"),e(952,"tag"),t(),e(953,"."),t(),i(954,"blockquote")(955,"p"),e(956,"Veja os valores v\xE1lidos na "),i(957,"a",47),e(958,"biblioteca de \xEDcones"),t(),e(959,"."),t()()()(),i(960,"tr",13)(961,"td",14)(962,"div",15)(963,"span",16),e(964," image"),n(965,"br"),t()()(),i(966,"td",17)(967,"code",23),e(968,"boolean"),t()(),i(969,"td",20)(970,"em")(971,"strong"),e(972,"(opcional)"),t()(),i(973,"p"),e(974,"Possibilita a utiliza\xE7\xE3o de imagem."),t(),i(975,"p"),e(976,"Exemplo de utiliza\xE7\xE3o:"),t(),i(977,"pre")(978,"code"),e(979,`[
  { property: 'imagem 1', image:'string', alt:'string', height:'300'},
];
`),t()(),i(980,"ul")(981,"li"),e(982,"@default "),i(983,"code"),e(984,"false"),t()()(),i(985,"p")(986,"strong"),e(987,"Componentes compat\xEDveis:"),t(),i(988,"code"),e(989,"po-image"),t(),e(990,"."),t()()(),i(991,"tr",13)(992,"td",14)(993,"div",15)(994,"span",16),e(995," isArrayOrObject"),n(996,"br"),t()()(),i(997,"td",17)(998,"code",23),e(999,"boolean"),t()(),i(1e3,"td",20)(1001,"em")(1002,"strong"),e(1003,"(opcional)"),t()(),i(1004,"p"),e(1005,"Define que a propriedade "),i(1006,"code"),e(1007,"property"),t(),e(1008," \xE9 uma lista ou um objeto."),t(),i(1009,"blockquote")(1010,"p"),e(1011,"Por padr\xE3o, espera-se que a lista ou o objeto esteja com as propriedades "),i(1012,"code"),e(1013,"label"),t(),e(1014," e "),i(1015,"code"),e(1016,"value"),t(),e(1017,`.
Caso estejam com nomes diferentes, deve-se usar as propriedades `),i(1018,"code"),e(1019,"fieldLabel"),t(),e(1020," e "),i(1021,"code"),e(1022,"fieldValue"),t(),e(1023,`.
\xC9 ignorada caso a propriedade `),i(1024,"code"),e(1025,"searchService"),t(),e(1026," esteja sendo utilizada."),t()()()(),i(1027,"tr",13)(1028,"td",14)(1029,"div",15)(1030,"span",16),e(1031," key"),n(1032,"br"),t()()(),i(1033,"td",17)(1034,"code",23),e(1035,"boolean"),t()(),i(1036,"td",20)(1037,"em")(1038,"strong"),e(1039,"(opcional)"),t()(),i(1040,"p"),e(1041,"Identificador"),t()()(),i(1042,"tr",13)(1043,"td",14)(1044,"div",15)(1045,"span",16),e(1046," label"),n(1047,"br"),t()()(),i(1048,"td",17)(1049,"code",21),e(1050,"string"),t()(),i(1051,"td",20)(1052,"em")(1053,"strong"),e(1054,"(opcional)"),t()(),i(1055,"p"),e(1056,"R\xF3tulo do campo exibido."),t(),i(1057,"p"),e(1058,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),i(1059,"code"),e(1060,"label"),t(),e(1061," o valor da propriedade "),i(1062,"code"),e(1063,"property"),t(),e(1064," com a primeira letra em mai\xFAsculo."),t()()(),i(1065,"tr",13)(1066,"td",14)(1067,"div",15)(1068,"span",16),e(1069," offsetColumns"),n(1070,"br"),t()()(),i(1071,"td",17)(1072,"code",46),e(1073,"number"),t()(),i(1074,"td",20)(1075,"em")(1076,"strong"),e(1077,"(opcional)"),t()(),i(1078,"p"),e(1079,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas."),t(),i(1080,"p"),e(1081,"Deve ser usado o sistema de "),i(1082,"strong"),e(1083,"grid"),t(),e(1084," do PO (1 ... 12 colunas)."),t(),i(1085,"blockquote")(1086,"p"),e(1087,"Esta propriedade \xE9 gen\xE9rica, aplica o valor em todos os tamanhos de telas."),t()()()(),i(1088,"tr",13)(1089,"td",14)(1090,"div",15)(1091,"span",16),e(1092," offsetLgColumns"),n(1093,"br"),t()()(),i(1094,"td",17)(1095,"code",46),e(1096,"number"),t()(),i(1097,"td",20)(1098,"em")(1099,"strong"),e(1100,"(opcional)"),t()(),i(1101,"p"),e(1102,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas grandes (lg)."),t(),i(1103,"p"),e(1104,"Deve ser usado o sistema de "),i(1105,"strong"),e(1106,"grid"),t(),e(1107," do PO (1 ... 12 colunas)."),t(),i(1108,"blockquote")(1109,"p"),e(1110,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(1111,"code"),e(1112,"offsetColumns"),t(),e(1113,"."),t()()()(),i(1114,"tr",13)(1115,"td",14)(1116,"div",15)(1117,"span",16),e(1118," offsetMdColumns"),n(1119,"br"),t()()(),i(1120,"td",17)(1121,"code",46),e(1122,"number"),t()(),i(1123,"td",20)(1124,"em")(1125,"strong"),e(1126,"(opcional)"),t()(),i(1127,"p"),e(1128,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),t(),i(1129,"p"),e(1130,"Deve ser usado o sistema de "),i(1131,"strong"),e(1132,"grid"),t(),e(1133," do PO (1 ... 12 colunas)."),t(),i(1134,"blockquote")(1135,"p"),e(1136,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(1137,"code"),e(1138,"offsetColumns"),t(),e(1139,"."),t()()()(),i(1140,"tr",13)(1141,"td",14)(1142,"div",15)(1143,"span",16),e(1144," offsetSmColumns"),n(1145,"br"),t()()(),i(1146,"td",17)(1147,"code",46),e(1148,"number"),t()(),i(1149,"td",20)(1150,"em")(1151,"strong"),e(1152,"(opcional)"),t()(),i(1153,"p"),e(1154,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas menores (sm)."),t(),i(1155,"p"),e(1156,"Deve ser usado o sistema de "),i(1157,"strong"),e(1158,"grid"),t(),e(1159," do PO (1 ... 12 colunas)."),t(),i(1160,"blockquote")(1161,"p"),e(1162,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(1163,"code"),e(1164,"offsetColumns"),t(),e(1165,"."),t()()()(),i(1166,"tr",13)(1167,"td",14)(1168,"div",15)(1169,"span",16),e(1170," offsetXlColumns"),n(1171,"br"),t()()(),i(1172,"td",17)(1173,"code",46),e(1174,"number"),t()(),i(1175,"td",20)(1176,"em")(1177,"strong"),e(1178,"(opcional)"),t()(),i(1179,"p"),e(1180,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),t(),i(1181,"p"),e(1182,"Deve ser usado o sistema de "),i(1183,"strong"),e(1184,"grid"),t(),e(1185," do PO (1 ... 12 colunas)."),t(),i(1186,"blockquote")(1187,"p"),e(1188,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(1189,"code"),e(1190,"offsetColumns"),t(),e(1191,"."),t()()()(),i(1192,"tr",13)(1193,"td",14)(1194,"div",15)(1195,"span",16),e(1196," options"),n(1197,"br"),t()()(),i(1198,"td",17)(1199,"code",48),e(1200,"Array<{ label: string; value: string "),t(),i(1201,"code",49),e(1202,` number;
}>`),t()(),i(1203,"td",20)(1204,"em")(1205,"strong"),e(1206,"(opcional)"),t()(),i(1207,"p"),e(1208,`Lista de op\xE7\xF5es que podem ser vinculadas \xE0 propriedade p-value.
Quando uma op\xE7\xE3o de valor \xE9 passada, sua propriedade label ser\xE1 atribu\xEDda \xE0 propriedade p-value.`),t(),i(1209,"p"),e(1210,"Exemplo de utiliza\xE7\xE3o:"),t(),i(1211,"pre")(1212,"code"),e(1213,`fields = [
  {
    property: 'name', options: [
      {label: 'Anna', value: '1'},
      {label: 'Jhon', value: '2'},
      {label: 'Mark', value: '3'}
    ]
  }
];
`),t()(),i(1214,"pre")(1215,"code"),e(1216,`<!-- Passando o valor 2 referente ao Jhon -->
<po-dynamic-view [p-fields]="fields" [p-value]="{ name: '2' }"> </po-dynamic-view>
`),t()()()(),i(1217,"tr",13)(1218,"td",14)(1219,"div",15)(1220,"span",16),e(1221," optionsMulti"),n(1222,"br"),t()()(),i(1223,"td",17)(1224,"code",23),e(1225,"boolean"),t()(),i(1226,"td",20)(1227,"em")(1228,"strong"),e(1229,"(opcional)"),t()(),i(1230,"p"),e(1231,`Habilita a visualiza\xE7\xE3o de m\xFAltiplos itens.
\xDAtil para exibir dados em formatos semelhantes aos componentes que suportam sele\xE7\xE3o m\xFAltipla.`),t()()(),i(1232,"tr",13)(1233,"td",14)(1234,"div",15)(1235,"span",16),e(1236," optionsService"),n(1237,"br"),t()()(),i(1238,"td",17)(1239,"code",21),e(1240,"string "),t(),i(1241,"code",50),e(1242," PoComboFilter "),t(),i(1243,"code",51),e(1244," PoMultiselectFilter"),t()(),i(1245,"td",20)(1246,"em")(1247,"strong"),e(1248,"(opcional)"),t()(),i(1249,"p"),e(1250,"Servi\xE7o que ser\xE1 utilizado para buscar os itens e preencher a lista de op\xE7\xF5es dinamicamente. Pode ser informada uma URL ou uma instancia do servi\xE7o baseado em PoComboFilter. "),i(1251,"strong"),e(1252,"Importante"),t()(),i(1253,"blockquote")(1254,"p"),e(1255,"Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o "),i(1256,"a",52),e(1257,"guia de API do PO UI"),t(),e(1258,"."),t()()()(),i(1259,"tr",13)(1260,"td",14)(1261,"div",15)(1262,"span",16),e(1263," order"),n(1264,"br"),t()()(),i(1265,"td",17)(1266,"code",46),e(1267,"number"),t()(),i(1268,"td",20)(1269,"em")(1270,"strong"),e(1271,"(opcional)"),t()(),i(1272,"p"),e(1273,"Informa a ordem de exibi\xE7\xE3o do campo."),t(),i(1274,"p"),e(1275,"Exemplo de utiliza\xE7\xE3o:"),t(),i(1276,"pre")(1277,"code"),e(1278,`[
  { property: 'test 1', order: 2 },
  { property: 'test 2', order: 1 },
  { property: 'test 3' },
  { property: 'test 4', order: 3 }
];
`),t()(),i(1279,"p"),e(1280,"Na exibi\xE7\xE3o a ordem ficar\xE1 dessa forma:"),t(),i(1281,"pre")(1282,"code"),e(1283,`[
  { property: 'test 2', order: 1 },
  { property: 'test 1', order: 2 },
  { property: 'test 4', order: 3 },
  { property: 'test 3' }
];
`),t()(),i(1284,"p"),e(1285,"S\xF3 ser\xE3o aceitos valores com n\xFAmeros inteiros maiores do que zero."),t(),i(1286,"p"),e(1287,"Campos sem "),i(1288,"code"),e(1289,"order"),t(),e(1290,` ou com valores negativos, zerados ou inv\xE1lidos
ser\xE3o os \xFAltimos a serem renderizados e seguir\xE3o o posicionamento dentro do
array.`),t()()(),i(1291,"tr",13)(1292,"td",14)(1293,"div",15)(1294,"span",16),e(1295," params"),n(1296,"br"),t()()(),i(1297,"td",17)(1298,"code",53),e(1299,"any"),t()(),i(1300,"td",20)(1301,"em")(1302,"strong"),e(1303,"(opcional)"),t()(),i(1304,"p"),e(1305,"Objeto que ser\xE1 enviado como par\xE2metro nas requisi\xE7\xF5es de busca "),i(1306,"code"),e(1307,"searchService"),t(),e(1308," ou "),i(1309,"code"),e(1310,"optionsService"),t(),e(1311,`
utilizadas pelos campos que dependem de servi\xE7os para carregar seus dados.`),t(),i(1312,"p"),e(1313,"Por exemplo, para o par\xE2metro "),i(1314,"code"),e(1315,"{ age: 23 }"),t(),e(1316," a URL da requisi\xE7\xE3o ficaria:"),t(),i(1317,"p")(1318,"code"),e(1319,"url + /1?age=23"),t()()()(),i(1320,"tr",13)(1321,"td",14)(1322,"div",15)(1323,"span",16),e(1324," property"),n(1325,"br"),t()()(),i(1326,"td",17)(1327,"code",21),e(1328,"string"),t()(),i(1329,"td",20)(1330,"p"),e(1331,"Nome de refer\xEAncia do campo."),t()()(),i(1332,"tr",13)(1333,"td",14)(1334,"div",15)(1335,"span",16),e(1336," searchService"),n(1337,"br"),t()()(),i(1338,"td",17)(1339,"code",21),e(1340,"string "),t(),i(1341,"code",54),e(1342," PoDynamicViewRequest"),t()(),i(1343,"td",20)(1344,"em")(1345,"strong"),e(1346,"(opcional)"),t()(),i(1347,"p"),e(1348,`Servi\xE7o customizado para um campo em espec\xEDfico.
Pode ser ser informada uma URL ou uma instancia do servi\xE7o baseado em PoDynamicViewRequest.
`),i(1349,"strong"),e(1350,"Importante:"),t()(),i(1351,"blockquote")(1352,"p"),e(1353,"A propriedade "),i(1354,"code"),e(1355,"property"),t(),e(1356,` deve receber um valor v\xE1lido independente de sua utiliza\xE7\xE3o para
execu\xE7\xE3o correta.
Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),i(1357,"a",52),e(1358,"guia de API do PO UI"),t(),e(1359,"."),t()()()(),i(1360,"tr",13)(1361,"td",14)(1362,"div",15)(1363,"span",16),e(1364," tag"),n(1365,"br"),t()()(),i(1366,"td",17)(1367,"code",23),e(1368,"boolean"),t()(),i(1369,"td",20)(1370,"em")(1371,"strong"),e(1372,"(opcional)"),t()(),i(1373,"p"),e(1374,"Indica se o campo ser\xE1 um "),i(1375,"code"),e(1376,"po-tag"),t(),e(1377,"."),t()()(),i(1378,"tr",13)(1379,"td",14)(1380,"div",15)(1381,"span",16),e(1382," textColor"),n(1383,"br"),t()()(),i(1384,"td",17)(1385,"code",21),e(1386,"string"),t()(),i(1387,"td",20)(1388,"em")(1389,"strong"),e(1390,"(opcional)"),t()(),i(1391,"p"),e(1392,"Determina a cor do texto da tag. As maneiras de customizar as cores s\xE3o:"),t(),i(1393,"ul")(1394,"li"),e(1395,"Hexadeximal, por exemplo "),i(1396,"code"),e(1397,"#c64840"),t(),e(1398,";"),t(),i(1399,"li"),e(1400,"RGB, como "),i(1401,"code"),e(1402,"rgb(0, 0, 165)"),t(),e(1403,";"),t(),i(1404,"li"),e(1405,"O nome da cor, por exemplo "),i(1406,"code"),e(1407,"blue"),t(),e(1408,";"),t()()()(),i(1409,"tr",13)(1410,"td",14)(1411,"div",15)(1412,"span",16),e(1413," type"),n(1414,"br"),t()()(),i(1415,"td",17)(1416,"code",21),e(1417,"string "),t(),i(1418,"code",55),e(1419," PoDynamicFieldType"),t()(),i(1420,"td",20)(1421,"em")(1422,"strong"),e(1423,"(opcional)"),t()(),i(1424,"p"),e(1425,"Tipo do valor campo."),t(),i(1426,"p"),e(1427,"Valores v\xE1lidos:"),t(),i(1428,"ul")(1429,"li")(1430,"code"),e(1431,"boolean"),t(),e(1432,": Valores "),i(1433,"em"),e(1434,"booleanos"),t(),e(1435,"."),t(),i(1436,"li")(1437,"code"),e(1438,"currency"),t(),e(1439,": Valores monet\xE1rios."),t(),i(1440,"li")(1441,"code"),e(1442,"decimal"),t(),e(1443,": Valores decimais."),t(),i(1444,"li")(1445,"code"),e(1446,"date"),t(),e(1447,": Valores de datas."),t()(),i(1448,"ul")(1449,"li"),e(1450,"Aceita os tipos "),i(1451,"strong"),e(1452,"string"),t(),e(1453," e "),i(1454,"strong"),e(1455,"Date"),t(),e(1456," padr\xE3o do Javascript, por exemplo: "),i(1457,"code"),e(1458,"'2017-11-28'"),t(),e(1459," ou "),i(1460,"code"),e(1461,"new Date(2017, 10, 28)"),t(),e(1462,"."),t()(),i(1463,"ul")(1464,"li")(1465,"code"),e(1466,"dateTime"),t(),e(1467,": Valor de data com hor\xE1rio."),t()(),i(1468,"ul")(1469,"li"),e(1470,"Aceita o tipo "),i(1471,"em"),e(1472,"string"),t(),e(1473," no formato "),i(1474,"strong"),e(1475,"ISO-8601"),t(),e(1476," extendido "),i(1477,"strong"),e(1478,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),t(),e(1479,`
e o tipo `),i(1480,"strong"),e(1481,"Date"),t(),e(1482," padr\xE3o do Javascript, por exemplo: "),i(1483,"code"),e(1484,"'2017-11-28T00:00:00-02:00'"),t(),e(1485," ou "),i(1486,"code"),e(1487,"new Date(2017, 10, 28)"),t(),e(1488,"."),t()(),i(1489,"ul")(1490,"li")(1491,"code"),e(1492,"number"),t(),e(1493,": Valores num\xE9ricos."),t(),i(1494,"li")(1495,"code"),e(1496,"string"),t(),e(1497,": Textos."),t(),i(1498,"li")(1499,"code"),e(1500,"time"),t(),e(1501,": Valor do hor\xE1rio."),t()(),i(1502,"ul")(1503,"li"),e(1504,"Aceita o tipo "),i(1505,"strong"),e(1506,"string"),t(),e(1507," nos formatos "),i(1508,"strong"),e(1509,"'HH:mm:ss'"),t(),e(1510," ou "),i(1511,"strong"),e(1512,"'HH:mm:ss.ffffff'"),t(),e(1513,", por exemplo: "),i(1514,"code"),e(1515,"'23:12:45'"),t(),e(1516,"."),t()()()(),i(1517,"tr",13)(1518,"td",14)(1519,"div",15)(1520,"span",16),e(1521," visible"),n(1522,"br"),t()()(),i(1523,"td",17)(1524,"code",23),e(1525,"boolean"),t()(),i(1526,"td",20)(1527,"em")(1528,"strong"),e(1529,"(opcional)"),t()(),i(1530,"p"),e(1531,"Indica se o campo ser\xE1 vis\xEDvel."),t()()()()())},dependencies:[S],encapsulation:2})}return o})();var K=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(a){return new(a||o)(T(z),T(B))};static \u0275cmp=d({type:o,selectors:[["ng-component"]],standalone:!1,decls:9,vars:4,consts:[["p-title"," Dynamic View",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,l){a&1&&(i(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),c("p-click",function(){return l.changeTab("doc")}),n(3,"sample-po-dynamic-view-doc"),t(),i(4,"po-tab",3),c("p-click",function(){return l.changeTab("web")}),n(5,"sample-po-dynamic-view-basic-view")(6,"sample-po-dynamic-view-employee-view")(7,"sample-po-dynamic-view-employee-on-load-view")(8,"sample-po-dynamic-view-container-view"),t()()()),a&2&&(p("p-actions",l.actions),m(2),p("p-active",l.activeTab==="doc"),m(2),p("p-hide",l.hidePoWebSample)("p-active",l.activeTab==="web"))},dependencies:[v,E,x,R,J,U,X,Q],encapsulation:2})}return o})();var xe=[{path:"",component:K}],Y=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=w({type:o});static \u0275inj=D({imports:[A.forChild(xe),A]})}return o})();var Qe=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=w({type:o});static \u0275inj=D({imports:[_,Y]})}return o})();export{Qe as DocPoDynamicViewModule};
