import{$ as y,$a as h,$d as S,Ca as w,Da as T,Ea as A,Ga as e,Ia as f,Oa as q,Pa as E,Rd as N,T as p,U as C,Wb as k,Yb as F,Zb as D,_ as m,_d as x,ha as l,ka as b,le as P,na as t,oa as i,pa as n,te as g,ua as s,ue as M,y as v}from"./chunk-Y4SQKOF7.js";var V=()=>({property:"id",label:"User ID"}),G=a=>[a],B=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=m({type:a,selectors:[["sample-po-page-dynamic-edit-basic"]],standalone:!1,decls:1,vars:4,consts:[["p-title","Po Page Dynamic Edit","p-service-api","https://po-sample-api.onrender.com/v1/people",3,"p-fields"]],template:function(o,d){o&1&&n(0,"po-page-dynamic-edit",0),o&2&&l("p-fields",E(2,G,q(1,V)))},dependencies:[P],encapsulation:2})}return a})();var W=a=>({"docs-sample-code-tabs":a}),j=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=m({type:a,selectors:[["sample-po-page-dynamic-edit-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,d){o&1&&(n(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Page Dynamic Edit Basic"),i(),t(4,"a",2),s("click",function(){return d.toggleSampleCodeTabs()}),n(5,"span"),e(6),i()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-dynamic-edit-basic/sample-po-page-dynamic-edit-basic.component.html"),i(),t(13,"pre",7),e(14,`<po-page-dynamic-edit
  p-title="Po Page Dynamic Edit"
  [p-fields]="[{ property: 'id', label: 'User ID' }]"
  p-service-api="https://po-sample-api.onrender.com/v1/people"
>
</po-page-dynamic-edit>
`),i()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-dynamic-edit-basic/sample-po-page-dynamic-edit-basic.component.ts"),i(),t(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-page-dynamic-edit-basic',
  templateUrl: './sample-po-page-dynamic-edit-basic.component.html',
  standalone: false
})
export class SamplePoPageDynamicEditBasicComponent {}
`),i()()()()(),t(21,"div",10),n(22,"sample-po-page-dynamic-edit-basic"),i(),n(23,"hr")),o&2&&(p(5),b("po-icon "+d.sampleCodeButtonIcon),p(),f(" ",d.sampleCodeButtonLabel,""),p(),l("ngClass",E(4,W,d.hideSampleCodeTabs)))},dependencies:[h,g,x,S,B],encapsulation:2})}return a})();var J=["dynamicEdit"],z=(()=>{class a{dynamicEdit;serviceApi="https://po-sample-api.onrender.com/v1/people";actions={save:"/documentation/po-page-dynamic-detail",saveNew:"/documentation/po-page-dynamic-edit"};literals={pageActionCancel:"Descartar",pageActionSave:"Gravar",pageActionSaveNew:"Gravar e novo"};breadcrumb={items:[{label:"Home",link:"/"},{label:"People",link:"/documentation/po-page-dynamic-table"},{label:"Edit"}]};fields=[{property:"status",divider:"Status",options:["active","inactive"]},{property:"id",label:"User ID",key:!0,required:!0},{property:"name",divider:"Personal data",required:!0},{property:"nickname"},{property:"email",label:"E-mail"},{property:"birthdate",label:"Birth date",type:"date",errorMessage:"Invalid date.",help:"Enter or select a valid date.",additionalHelpTooltip:"Please enter a valid date in the format MMDDYYYY.",keydown:this.onKeyDown.bind(this,"birthdate")},{property:"genre",options:["female","male","others"],gridLgColumns:6},{property:"nationality"},{property:"birthPlace",label:"Place of birth"},{property:"graduation"},{property:"father",label:"Father`s name",divider:"Relationship",gridMdColumns:4,gridLgColumns:4},{property:"mother",label:"Mother`s name",offsetMdColumns:4,offsetLgColumns:4,gridMdColumns:4,gridLgColumns:4},{property:"street",divider:"Address",gridColumns:4},{property:"city",optionsService:"https://po-sample-api.onrender.com/v1/cities?transform=true",offsetColumns:4,gridColumns:4}];onKeyDown(r,o){o.code==="F9"&&this.dynamicEdit.showAdditionalHelp(r)}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=m({type:a,selectors:[["sample-po-page-dynamic-edit-user"]],viewQuery:function(o,d){if(o&1&&w(J,7),o&2){let u;T(u=A())&&(d.dynamicEdit=u.first)}},standalone:!1,decls:2,vars:6,consts:[["dynamicEdit",""],["p-title","User edit",3,"p-auto-router","p-actions","p-breadcrumb","p-fields","p-literals","p-service-api"]],template:function(o,d){o&1&&n(0,"po-page-dynamic-edit",1,0),o&2&&l("p-auto-router",!0)("p-actions",d.actions)("p-breadcrumb",d.breadcrumb)("p-fields",d.fields)("p-literals",d.literals)("p-service-api",d.serviceApi)},dependencies:[P],encapsulation:2})}return a})();var Z=a=>({"docs-sample-code-tabs":a}),O=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=m({type:a,selectors:[["sample-po-page-dynamic-edit-user-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,d){o&1&&(n(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Page Dynamic Edit - User"),i(),t(4,"a",2),s("click",function(){return d.toggleSampleCodeTabs()}),n(5,"span"),e(6),i()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-dynamic-edit-user/sample-po-page-dynamic-edit-user.component.html"),i(),t(13,"pre",7),e(14,`<po-page-dynamic-edit
  #dynamicEdit
  [p-auto-router]="true"
  p-title="User edit"
  [p-actions]="actions"
  [p-breadcrumb]="breadcrumb"
  [p-fields]="fields"
  [p-literals]="literals"
  [p-service-api]="serviceApi"
>
</po-page-dynamic-edit>
`),i()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-dynamic-edit-user/sample-po-page-dynamic-edit-user.component.ts"),i(),t(19,"pre",9),e(20,`import { Component, ViewChild } from '@angular/core';

import { PoBreadcrumb, PoDynamicFormField } from '@po-ui/ng-components';

import { PoPageDynamicEditActions, PoPageDynamicEditComponent, PoPageDynamicEditLiterals } from '@po-ui/ng-templates';

@Component({
  selector: 'sample-po-page-dynamic-edit-user',
  templateUrl: './sample-po-page-dynamic-edit-user.component.html',
  standalone: false
})
export class SamplePoPageDynamicEditUserComponent {
  @ViewChild('dynamicEdit', { static: true }) dynamicEdit: PoPageDynamicEditComponent;

  public readonly serviceApi = 'https://po-sample-api.onrender.com/v1/people';

  public readonly actions: PoPageDynamicEditActions = {
    save: '/documentation/po-page-dynamic-detail',
    saveNew: '/documentation/po-page-dynamic-edit'
  };

  public readonly literals: PoPageDynamicEditLiterals = {
    pageActionCancel: 'Descartar',
    pageActionSave: 'Gravar',
    pageActionSaveNew: 'Gravar e novo'
  };

  public readonly breadcrumb: PoBreadcrumb = {
    items: [
      { label: 'Home', link: '/' },
      { label: 'People', link: '/documentation/po-page-dynamic-table' },
      { label: 'Edit' }
    ]
  };

  public readonly fields: Array<PoDynamicFormField> = [
    { property: 'status', divider: 'Status', options: ['active', 'inactive'] },
    { property: 'id', label: 'User ID', key: true, required: true },
    { property: 'name', divider: 'Personal data', required: true },
    { property: 'nickname' },
    { property: 'email', label: 'E-mail' },
    {
      property: 'birthdate',
      label: 'Birth date',
      type: 'date',
      errorMessage: 'Invalid date.',
      help: 'Enter or select a valid date.',
      additionalHelpTooltip: 'Please enter a valid date in the format MMDDYYYY.',
      keydown: this.onKeyDown.bind(this, 'birthdate')
    },
    { property: 'genre', options: ['female', 'male', 'others'], gridLgColumns: 6 },
    { property: 'nationality' },
    { property: 'birthPlace', label: 'Place of birth' },
    { property: 'graduation' },
    {
      property: 'father',
      label: 'Father\`s name',
      divider: 'Relationship',
      gridMdColumns: 4,
      gridLgColumns: 4
    },
    {
      property: 'mother',
      label: 'Mother\`s name',
      offsetMdColumns: 4,
      offsetLgColumns: 4,
      gridMdColumns: 4,
      gridLgColumns: 4
    },
    {
      property: 'street',
      divider: 'Address',
      gridColumns: 4
    },
    {
      property: 'city',
      optionsService: 'https://po-sample-api.onrender.com/v1/cities?transform=true',
      offsetColumns: 4,
      gridColumns: 4
    }
  ];

  onKeyDown(property: string, event: KeyboardEvent): void {
    if (event.code === 'F9') {
      this.dynamicEdit.showAdditionalHelp(property);
    }
  }
}
`),i()()()()(),t(21,"div",10),n(22,"sample-po-page-dynamic-edit-user"),i(),n(23,"hr")),o&2&&(p(5),b("po-icon "+d.sampleCodeButtonIcon),p(),f(" ",d.sampleCodeButtonLabel,""),p(),l("ngClass",E(4,Z,d.hideSampleCodeTabs)))},dependencies:[h,g,x,S,z],encapsulation:2})}return a})();var _=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=m({type:a,selectors:[["sample-po-page-dynamic-edit-doc"]],standalone:!1,decls:1403,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-page-dynamic-edit#po-page-dynamic-edit-metadata"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoPageDynamicEditActions"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","Array<PoPageDynamicEditField>"],["pan","",1,"docs-api-property-type","PoPageDynamicEditLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","(()","=>","PoPageDynamicEditOptions)"],["pan","",1,"docs-api-property-type","((model:","any)","=>","any)"],["pan","",1,"docs-api-property-type","((model:","any)","=>","Observable<any>)"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["pan","",1,"docs-api-property-type"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(()","=>","PoPageDynamicEditBeforeCancel)"],["href","https://po-ui.io/guides/api#successMessages"],["pan","",1,"docs-api-property-type","((resource:","any,","id:","string)","=>","PoPageDynamicEditBeforeSave)"],["pan","",1,"docs-api-property-type","((resource:","any,","id:","string)","=>","PoPageDynamicEditBeforeSaveNew)"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","((resource:","any,","id:","string)","=>","void)"],["pan","",1,"docs-api-property-type","((resource:","any,","id?:","string)","=>","void)"],["pan","",1,"docs-api-property-type","any"],["href","https://po-ui.io/documentation/po-dynamic-form"],["id","po-page-dynamic-edit-metadata"],["pan","",1,"docs-api-property-type","number"]],template:function(o,d){o&1&&(t(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoPageDynamicEditModule } from '@po-ui/ng-templates';"),i()(),t(4,"div",2)(5,"p"),e(6,"M\xF3dulo do template do po-page-dynamic-detail."),i()(),t(7,"h3",3),e(8,"Componente"),i(),t(9,"h4",4)(10,"code",5),e(11,"PoPageDynamicEditComponent"),i()(),t(12,"div",2)(13,"p"),e(14,"O "),t(15,"code"),e(16,"po-page-dynamic-edit"),i(),e(17,` \xE9 uma p\xE1gina que pode servir para editar ou criar novos registros,
o mesmo tamb\xE9m suporta metadados conforme especificado na documenta\xE7\xE3o.`),i(),t(18,"h3"),e(19,"Utiliza\xE7\xE3o via rota"),i(),t(20,"p"),e(21,"Ao utilizar as rotas para inicializar o template, o "),t(22,"code"),e(23,"page-dynamic-edit"),i(),e(24,` disponibiliza propriedades que devem ser fornecidas no arquivo de configura\xE7\xE3o de rotas da aplica\xE7\xE3o, para
poder especificar o endpoint dos dados e dos metadados que ser\xE3o carregados na inicializa\xE7\xE3o.`),i(),t(25,"p"),e(26,"Exemplo de utiliza\xE7\xE3o:"),i(),t(27,"p"),e(28,"Arquivo de configura\xE7\xE3o de rotas da aplica\xE7\xE3o: "),t(29,"code"),e(30,"app-routing.module.ts"),i()(),t(31,"pre")(32,"code"),e(33,`const routes: Routes = [
{
  path: 'people',
  component: PoPageDynamicEditComponent,
  data: {
    serviceApi: 'http://localhost:3000/v1/people', // endpoint dos dados
    serviceMetadataApi: 'http://localhost:3000/v1/metadata', // endpoint dos metadados utilizando o m\xE9todo HTTP Get
    serviceLoadApi: 'http://localhost:3000/load-metadata' // endpoint de customiza\xE7\xF5es dos metadados utilizando o m\xE9todo HTTP Post
  }
 },
 {
  path: 'home',
  component: HomeExampleComponent
 }
];
`),i()(),t(34,"p"),e(35,`O componente primeiro ir\xE1 carregar o metadado da rota definida na propriedade serviceMetadataApi
e depois ir\xE1 buscar da rota definida na propriedade serviceLoadApi.`),i(),t(36,"p"),e(37,`A requisi\xE7\xE3o dos metadados \xE9 feita na inicializa\xE7\xE3o do template para buscar os metadados da p\xE1gina passando o
tipo do metadado esperado e a vers\xE3o cacheada pelo browser.`),i(),t(38,"blockquote")(39,"p"),e(40,`Caso o servidor retornar um erro ao recuperar os metadados, ser\xE3o repassados os metadados salvos em cache,
se o cache n\xE3o existir ser\xE1 disparada uma notifica\xE7\xE3o.`),i()(),t(41,"p"),e(42,"Para carregar com um recurso j\xE1 existente, deve-se ser inclu\xEDdo um par\xE2metro na rota chamado "),t(43,"code"),e(44,"id"),i(),e(45,":"),i(),t(46,"pre")(47,"code"),e(48,`{
  path: 'people/:id',
  component: PoPageDynamicEditComponent,
  data: {
    serviceApi: 'http://localhost:3000/v1/people', // endpoint dos dados
    serviceMetadataApi: 'http://localhost:3000/v1/metadata', // endpoint dos metadados
    serviceLoadApi: 'http://localhost:3000/load-metadata' // endpoint de customiza\xE7\xF5es dos metadados
  }
}
`),i()(),t(49,"p"),e(50,`A requisi\xE7\xE3o dos metadados \xE9 feita na inicializa\xE7\xE3o do template para buscar os metadados da p\xE1gina passando o
tipo do metadado esperado e a vers\xE3o cacheada pelo browser.`),i(),t(51,"p"),e(52,`O formato esperado na resposta da requisi\xE7\xE3o est\xE1 especificado na interface
`),t(53,"a",6),e(54,"PoPageDynamicEditMetadata"),i(),e(55,". Por exemplo:"),i(),t(56,"pre")(57,"code"),e(58,` {
  version: 1,
  title: 'Person edit',
  fields: [
    { property: 'id', key: true, disabled: true },
    { property: 'status' },
    { property: 'name' },
    { property: 'nickname' },
    { property: 'birthdate', label: 'Birth date' },
    { property: 'genre' },
    { property: 'city' },
    { property: 'country' }
  ]
}
`),i()(),t(59,"blockquote")(60,"p"),e(61,"Caso o endpoint dos metadados n\xE3o seja especificado, ser\xE1 feito uma requisi\xE7\xE3o utilizando o "),t(62,"code"),e(63,"serviceApi"),i(),e(64," da seguinte forma:"),i()(),t(65,"pre")(66,"code"),e(67,`GET {end-point}/metadata?type=edit&version={version}
`),i()()(),t(68,"div",7)(69,"h4",8),e(70,"Seletor"),i(),t(71,"pre",9),e(72,`<po-page-dynamic-edit
    p-actions="PoPageDynamicEditActions"
    p-auto-router="boolean"
    p-breadcrumb="PoBreadcrumb"
    p-components-size="string"
    p-fields="Array<PoPageDynamicEditField>"
    p-literals="PoPageDynamicEditLiterals"
    p-notification-type="string"
    p-load="string | (() => PoPageDynamicEditOptions)"
    p-load-data="((model: any) => any) | ((model: any) => Observable<any>)"
    p-service-api="string"
    p-title="string" >
</po-page-dynamic-edit>
`),i()(),t(73,"h4",10),e(74,"Propriedades"),i(),t(75,"table",11)(76,"tr",12)(77,"th",13),e(78,"Nome"),i(),t(79,"th",13),e(80,"Tipo"),i(),t(81,"th",13),e(82,"Padr\xE3o"),i(),t(83,"th",13),e(84,"Descri\xE7\xE3o"),i()(),t(85,"tr",14)(86,"td",15)(87,"div",16)(88,"span",17),e(89," p-actions"),n(90,"br"),i()()(),t(91,"td",18)(92,"code",19),e(93,"PoPageDynamicEditActions"),i()(),t(94,"td",20),e(95,"-"),i(),t(96,"td",21)(97,"em")(98,"strong"),e(99,"(opcional)"),i()(),t(100,"p"),e(101,"A\xE7\xF5es da p\xE1gina."),i()()(),t(102,"tr",14)(103,"td",15)(104,"div",16)(105,"span",17),e(106," p-auto-router"),n(107,"br"),i()()(),t(108,"td",18)(109,"code",22),e(110,"boolean"),i()(),t(111,"td",20)(112,"p"),e(113,"false"),i()(),t(114,"td",21)(115,"em")(116,"strong"),e(117,"(opcional)"),i()(),t(118,"p"),e(119,`Cria automaticamente as rotas de edi\xE7\xE3o (novo/duplicate) e detalhes caso as a\xE7\xF5es
estejam definidas nas a\xE7\xF5es.`),i(),t(120,"blockquote")(121,"p"),e(122,"Para o correto funcionamento n\xE3o pode haver nenhum rota coringa ("),t(123,"code"),e(124,"**"),i(),e(125,") especificada."),i()()()(),t(126,"tr",14)(127,"td",15)(128,"div",16)(129,"span",17),e(130," p-breadcrumb"),n(131,"br"),i()()(),t(132,"td",18)(133,"code",23),e(134,"PoBreadcrumb"),i()(),t(135,"td",20),e(136,"-"),i(),t(137,"td",21)(138,"em")(139,"strong"),e(140,"(opcional)"),i()(),t(141,"p"),e(142,"Objeto com propriedades do breadcrumb."),i()()(),t(143,"tr",14)(144,"td",15)(145,"div",16)(146,"span",17),e(147," p-components-size"),n(148,"br"),i()()(),t(149,"td",18)(150,"code",24),e(151,"string"),i()(),t(152,"td",20)(153,"p")(154,"code"),e(155,"medium"),i()()(),t(156,"td",21)(157,"em")(158,"strong"),e(159,"(opcional)"),i()(),t(160,"p"),e(161,"Define o tamanho dos componentes de formul\xE1rio no template:"),i(),t(162,"ul")(163,"li")(164,"code"),e(165,"small"),i(),e(166,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),i(),t(167,"li")(168,"code"),e(169,"medium"),i(),e(170,": aplica a medida medium de cada componente."),i()(),t(171,"blockquote")(172,"p"),e(173,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),t(174,"code"),e(175,"medium"),i(),e(176,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),t(177,"a",25),e(178,"po-theme"),i(),e(179,"."),i()()()(),t(180,"tr",14)(181,"td",15)(182,"div",16)(183,"span",17),e(184," p-fields"),n(185,"br"),i()()(),t(186,"td",18)(187,"code",26),e(188,"Array<PoPageDynamicEditField>"),i()(),t(189,"td",20),e(190,"-"),i(),t(191,"td",21)(192,"p"),e(193,"Lista dos campos usados na tabela e busca avan\xE7ada."),i()()(),t(194,"tr",14)(195,"td",15)(196,"div",16)(197,"span",17),e(198," p-literals"),n(199,"br"),i()()(),t(200,"td",18)(201,"code",27),e(202,"PoPageDynamicEditLiterals"),i()(),t(203,"td",20),e(204,"-"),i(),t(205,"td",21)(206,"em")(207,"strong"),e(208,"(opcional)"),i()(),t(209,"p"),e(210,"Objeto com as literais usadas no "),t(211,"code"),e(212,"po-page-dynamic-edit"),i(),e(213,"."),i(),t(214,"p"),e(215,`\xC9 possivel customizar passando um objeto com todas as literais dispon\xEDveis
ou passando apenas as literais que deseja customizar`),i(),t(216,"pre")(217,"code"),e(218,`const customLiterals: PoPageDynamicEditLiterals = {
  detailActionNew: 'Incluir',
  pageActionCancel: 'Descartar',
  pageActionSave: 'Gravar',
  pageActionSaveNew: 'Gravar e incluir',
  registerNotFound: 'Nenhum registro encontrado.',
  saveNotificationError: 'Campo(s) obrigat\xF3rio(s) sem preenchimento.',
  saveNotificationSuccessSave: 'Item salvo com sucesso.',
  saveNotificationSuccessUpdate: 'Item atualizado com sucesso.',
  saveNotificationWarning: 'Necess\xE1rio preencher o formul\xE1rio corretamente.'
};
`),i()(),t(219,"p"),e(220,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),i(),t(221,"pre")(222,"code"),e(223,`<po-page-dynamic-edit
  [p-literals]="customLiterals">
</po-page-dynamic-edit>
`),i()(),t(224,"blockquote")(225,"p"),e(226,"O valor padr\xE3o ser\xE1 traduzido de acordo com o idioma configurado no "),t(227,"a",28)(228,"code"),e(229,"PoI18nService"),i()(),e(230," ou "),t(231,"em"),e(232,"browser"),i(),e(233,"."),i()()()(),t(234,"tr",14)(235,"td",15)(236,"div",16)(237,"span",17),e(238," p-notification-type"),n(239,"br"),i()()(),t(240,"td",18)(241,"code",24),e(242,"string"),i()(),t(243,"td",20)(244,"p"),e(245,"warning"),i()(),t(246,"td",21)(247,"em")(248,"strong"),e(249,"(opcional)"),i()(),t(250,"p"),e(251,"Tipo da notifica\xE7\xE3o."),i(),t(252,"p"),e(253,"\xC9 possivel definir o tipo de notifica\xE7\xE3o que ser\xE1 exibido quando houver algum campo inv\xE1lido no formul\xE1rio."),i(),t(254,"pre")(255,"code"),e(256,`<po-page-dynamic-edit
  p-notification-type="warning">
</po-page-dynamic-edit>
`),i()(),t(257,"blockquote")(258,"p"),e(259,"Os valores aceitos s\xE3o 'warning' e 'error'."),i()()()(),t(260,"tr",14)(261,"td",15)(262,"div",16)(263,"span",17),e(264," p-load"),n(265,"br"),i()()(),t(266,"td",18)(267,"code",24),e(268,"string "),i(),t(269,"code",29),e(270," (() => PoPageDynamicEditOptions)"),i()(),t(271,"td",20),e(272,"-"),i(),t(273,"td",21)(274,"p"),e(275,"Fun\xE7\xE3o ou servi\xE7o que ser\xE1 executado na inicializa\xE7\xE3o do componente."),i(),t(276,"p"),e(277,"A propriedade aceita os seguintes tipos:"),i(),t(278,"ul")(279,"li")(280,"code"),e(281,"string"),i(),e(282,": "),t(283,"em"),e(284,"Endpoint"),i(),e(285," usado pelo componente para requisi\xE7\xE3o via "),t(286,"code"),e(287,"POST"),i(),e(288,"."),i(),t(289,"li")(290,"code"),e(291,"function"),i(),e(292,": M\xE9todo que ser\xE1 executado."),i()(),t(293,"p"),e(294,"O retorno desta fun\xE7\xE3o deve ser do tipo "),t(295,"code"),e(296,"PoPageDynamicEditOptions"),i(),e(297,`,
onde o usu\xE1rio poder\xE1 customizar novos campos, breadcrumb, title e actions`),i(),t(298,"p"),e(299,"Por exemplo:"),i(),t(300,"pre")(301,"code"),e(302,`getPageOptions(): PoPageDynamicEditOptions {
return {
  actions:
    { cancel: false, save: 'save/:id', saveNew: 'saveNew' },
  fields: [
    { property: 'idCard', gridColumns: 6 }
  ]
};
}
`),i()(),t(303,"p"),e(304,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),t(305,"code"),e(306,"bind"),i(),e(307,", por exemplo:"),i(),t(308,"pre")(309,"code"),e(310,`[p-load]="onLoadOptions.bind(this)"
`),i()()()(),t(311,"tr",14)(312,"td",15)(313,"div",16)(314,"span",17),e(315," p-load-data"),n(316,"br"),i()()(),t(317,"td",18)(318,"code",30),e(319,"((model: any) => any) "),i(),t(320,"code",31),e(321," ((model: any) => Observable<any>)"),i()(),t(322,"td",20),e(323,"-"),i(),t(324,"td",21)(325,"em")(326,"strong"),e(327,"(opcional)"),i()(),t(328,"p"),e(329,"Fun\xE7\xE3o que ser\xE1 executada ap\xF3s ser realizada a busca dos dados."),i(),t(330,"p"),e(331,"A propriedade aceita os seguintes tipos:"),i(),t(332,"ul")(333,"li")(334,"code"),e(335,"function"),i(),e(336,": M\xE9todo que ser\xE1 executado."),i()(),t(337,"p"),e(338,`Esta fun\xE7\xE3o passa por par\xE2metro o model e deve receb\xEA-lo de volta com as altera\xE7\xF5es.
Tamb\xE9m aceita o retorno de um Observable com o novo model.`),i(),t(339,"p"),e(340,"Por exemplo:"),i(),t(341,"pre")(342,"code"),e(343,`onLoadCustom(model) {
 return { ...model, customField: 'newValue' };
}
`),i()(),t(344,"p"),e(345,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),t(346,"code"),e(347,"bind"),i(),e(348,", por exemplo:"),i(),t(349,"pre")(350,"code"),e(351,`[p-load-data]="onLoadCustom.bind(this)"
`),i()()()(),t(352,"tr",14)(353,"td",15)(354,"div",16)(355,"span",17),e(356," p-service-api"),n(357,"br"),i()()(),t(358,"td",18)(359,"code",24),e(360,"string"),i()(),t(361,"td",20),e(362,"-"),i(),t(363,"td",21)(364,"p"),e(365,"Endpoint usado pelo template para requisi\xE7\xE3o do recurso que ser\xE1 exibido para edi\xE7\xE3o."),i(),t(366,"p"),e(367,"Para as a\xE7\xF5es de "),t(368,"code"),e(369,"save"),i(),e(370," e "),t(371,"code"),e(372,"saveNew"),i(),e(373,`, ser\xE1 feito uma requisi\xE7\xE3o de cria\xE7\xE3o nesse mesmo endpoint passando os valores
preenchidos pelo usu\xE1rio via payload.`),i(),t(374,"blockquote")(375,"p")(376,"code"),e(377,"POST {end-point}"),i()()(),t(378,"pre")(379,"code"),e(380,`<po-page-dynamic-edit
  [p-actions]="{ save: '/', saveNew: 'new' }"
  [p-fields]="[ { property: 'name' }, { property: 'city' } ]"
  p-service="/api/po-samples/v1/people"
  ...>
</po-page-dynamic-edit>
`),i()(),t(381,"p"),e(382,"Resquisi\xE7\xE3o disparada, onde a propriedade "),t(383,"code"),e(384,"name"),i(),e(385," e "),t(386,"code"),e(387,"city"),i(),e(388," foram preenchidas:"),i(),t(389,"pre")(390,"code"),e(391,`POST /api/po-samples/v1/people HTTP/1.1
Host: localhost:4000
Connection: keep-alive
Accept: application/json, text/plain
...
`),i()(),t(392,"p"),e(393,"Request payload:"),i(),t(394,"pre")(395,"code"),e(396,`{ "name": "Fulano", "city": "Smallville" }
`),i()(),t(397,"p"),e(398,"Caso queira que o template carregue um recurso j\xE1 existente, deve-se ser inclu\xEDdo um parametro na rota chamado "),t(399,"code"),e(400,"id"),i(),e(401,"."),i(),t(402,"p"),e(403,"Exemplo de configura\xE7\xE3o de rota:"),i(),t(404,"pre")(405,"code"),e(406,`RouterModule.forRoot([
  ...
  { path: 'edit/:id', component: PersonEditComponent },
  ...
],
`),i()(),t(407,"p"),e(408,"Baseado nisso, na inicializa\xE7\xE3o do template, ser\xE1 disparado uma requisi\xE7\xE3o para buscar o recurso que ser\xE1 editado."),i(),t(409,"blockquote")(410,"p")(411,"code"),e(412,"GET {end-point}/{id}"),i()()(),t(413,"p"),e(414,"Nos m\xE9todos de "),t(415,"code"),e(416,"save"),i(),e(417," e "),t(418,"code"),e(419,"saveNew"),i(),e(420,", ao inv\xE9s de um "),t(421,"code"),e(422,"POST"),i(),e(423,", ser\xE1 disparado um "),t(424,"code"),e(425,"PUT"),i(),e(426,"."),i(),t(427,"p"),e(428,"Resquisi\xE7\xE3o disparada, onde a propriedade "),t(429,"code"),e(430,"name"),i(),e(431," e "),t(432,"code"),e(433,"city"),i(),e(434," foram preenchidas / atualizadas, e o "),t(435,"code"),e(436,"id"),i(),e(437," da url \xE9 2:"),i(),t(438,"pre")(439,"code"),e(440,`PUT /api/po-samples/v1/people/2 HTTP/1.1
Host: localhost:4000
Connection: keep-alive
Accept: application/json, text/plain
...
`),i()(),t(441,"p"),e(442,"Request payload:"),i(),t(443,"pre")(444,"code"),e(445,`{ "name": "Fulano", "city": "Metropolis" }
`),i()()()(),t(446,"tr",14)(447,"td",15)(448,"div",16)(449,"span",17),e(450," p-title"),n(451,"br"),i()()(),t(452,"td",18)(453,"code",24),e(454,"string"),i()(),t(455,"td",20),e(456,"-"),i(),t(457,"td",21)(458,"p"),e(459,"T\xEDtulo da p\xE1gina."),i()()()(),t(460,"h3",10),e(461,"M\xE9todos"),i(),t(462,"table",32)(463,"tr",14)(464,"th",33)(465,"div",16)(466,"h4")(467,"span",17),e(468," showAdditionalHelp "),i()()()()(),t(469,"tr",21)(470,"td",21)(471,"p"),e(472,"M\xE9todo que exibe "),t(473,"code"),e(474,"additionalHelpTooltip"),i(),e(475," ou executa a a\xE7\xE3o definida em "),t(476,"code"),e(477,"additionalHelp"),i(),e(478,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),t(479,"code"),e(480,"keydown"),i(),e(481,"."),i(),t(482,"pre")(483,"code"),e(484,`import { PoPageDynamicEditModule } from '@po-ui/ng-templates';
...
@ViewChild('dynamicEdit', { static: true }) dynamicEdit: PoPageDynamicEditComponent;

fields: Array<PoPageDynamicEditField> = [
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
   this.dynamicEdit.showAdditionalHelp(property);
 }
}
`),i()()()()(),t(485,"h5")(486,"b"),e(487,"Par\xE2metros"),i()(),t(488,"table",11)(489,"tr",12)(490,"th",13),e(491,"Nome"),i(),t(492,"th",13),e(493,"Tipo"),i(),t(494,"th",13),e(495,"Descri\xE7\xE3o"),i()(),t(496,"tr",14)(497,"td",15),e(498," property"),i(),t(499,"td",18)(500,"code",34),e(501," string "),i()(),t(502,"td",21)(503,"p"),e(504,"Identificador da coluna."),i()()()(),n(505,"br"),t(506,"h3"),e(507,"Interfaces"),i(),t(508,"h4",35)(509,"code",5),e(510,"PoPageDynamicEditActions"),i()(),t(511,"div",2)(512,"p"),e(513,"Interface para as a\xE7\xF5es do componente po-page-dynamic-edit."),i()(),t(514,"h4",10),e(515,"Propriedades"),i(),t(516,"table",11)(517,"tr",12)(518,"th",13),e(519,"Nome"),i(),t(520,"th",13),e(521,"Tipo"),i(),t(522,"th",13),e(523,"Descri\xE7\xE3o"),i()(),t(524,"tr",14)(525,"td",15)(526,"div",16)(527,"span",17),e(528," beforeCancel"),n(529,"br"),i()()(),t(530,"td",18)(531,"code",24),e(532,"string "),i(),t(533,"code",36),e(534," (() => PoPageDynamicEditBeforeCancel)"),i()(),t(535,"td",21)(536,"em")(537,"strong"),e(538,"(opcional)"),i()(),t(539,"p"),e(540,"Rota ou m\xE9todo que ser\xE1 chamado antes de executar a a\xE7\xE3o de cancelamento (cancel)."),i(),t(541,"p"),e(542,"Tanto o m\xE9todo como a API receber\xE3o o recurso e devem retornar um objeto com a defini\xE7\xE3o de "),t(543,"code"),e(544,"PoPageDynamicEditBeforeCancel"),i(),e(545,"."),i(),t(546,"blockquote")(547,"p"),e(548,"A url ser\xE1 chamada via POST"),i()(),t(549,"p"),e(550,"Caso o desenvolvedor queira que apare\xE7a alguma mensagem nessa a\xE7\xE3o ele pode cri\xE1-la na fun\xE7\xE3o chamada pela "),t(551,"strong"),e(552,"beforeCancel"),i(),e(553,`
ou definir a mensagem no atributo `),t(554,"code"),e(555,"_messages"),i(),e(556,` na resposta da API conforme definido
em `),t(557,"a",37),e(558,"Guia de implementa\xE7\xE3o de APIs"),i()()()(),t(559,"tr",14)(560,"td",15)(561,"div",16)(562,"span",17),e(563," beforeSave"),n(564,"br"),i()()(),t(565,"td",18)(566,"code",24),e(567,"string "),i(),t(568,"code",38),e(569," ((resource: any, id: string) => PoPageDynamicEditBeforeSave)"),i()(),t(570,"td",21)(571,"em")(572,"strong"),e(573,"(opcional)"),i()(),t(574,"p"),e(575,"Rota ou m\xE9todo que ser\xE1 chamado antes de salvar um recurso (save)."),i(),t(576,"p"),e(577,"Tanto o m\xE9todo como a API receber\xE3o o recurso e devem retornar um objeto com a defini\xE7\xE3o de "),t(578,"code"),e(579,"PoPageDynamicEditBeforeSave"),i(),e(580,"."),i(),t(581,"blockquote")(582,"p"),e(583,`A url ser\xE1 chamada via POST. Caso seja a edi\xE7\xE3o de um recurso, a url ser\xE1 concatenada
com a key especificada no metadata, por exemplo: `),t(584,"code"),e(585,"POST {beforeSave}/{key}"),i(),e(586,"."),i()(),t(587,"p"),e(588,"Caso o desenvolvedor queira que apare\xE7a alguma mensagem nessa a\xE7\xE3o ele pode cri\xE1-la na fun\xE7\xE3o chamada pela "),t(589,"strong"),e(590,"beforeSave"),i(),e(591,`
ou definir a mensagem no atributo `),t(592,"code"),e(593,"_messages"),i(),e(594,` na resposta da API conforme definido
em `),t(595,"a",37),e(596,"Guia de implementa\xE7\xE3o de APIs"),i()()()(),t(597,"tr",14)(598,"td",15)(599,"div",16)(600,"span",17),e(601," beforeSaveNew"),n(602,"br"),i()()(),t(603,"td",18)(604,"code",24),e(605,"string "),i(),t(606,"code",39),e(607," ((resource: any, id: string) => PoPageDynamicEditBeforeSaveNew)"),i()(),t(608,"td",21)(609,"em")(610,"strong"),e(611,"(opcional)"),i()(),t(612,"p"),e(613,"Rota ou m\xE9todo que ser\xE1 chamado antes de executar o evento salvar e abrir novo registro (saveNew)."),i(),t(614,"p"),e(615,"Tanto o m\xE9todo como a API receber\xE3o o recurso e devem retornar um objeto com a defini\xE7\xE3o de "),t(616,"code"),e(617,"PoPageDynamicEditBeforeSaveNew"),i(),e(618,"."),i(),t(619,"blockquote")(620,"p"),e(621,`A URL ser\xE1 chamada via POST. Caso seja a edi\xE7\xE3o de um recurso, a URL ser\xE1 concatenada
com a key especificada no metadata, por exemplo: `),t(622,"code"),e(623,"POST {beforeSave}/{key}"),i(),e(624,"."),i()(),t(625,"p"),e(626,"Caso o desenvolvedor queira que apare\xE7a alguma mensagem nessa a\xE7\xE3o ele pode cri\xE1-la na fun\xE7\xE3o chamada pela "),t(627,"strong"),e(628,"beforeSaveNew"),i(),e(629,`
ou definir a mensagem no atributo `),t(630,"code"),e(631,"_messages"),i(),e(632,` na resposta da API conforme definido
em `),t(633,"a",37),e(634,"Guia de implementa\xE7\xE3o de APIs"),i()()()(),t(635,"tr",14)(636,"td",15)(637,"div",16)(638,"span",17),e(639," cancel"),n(640,"br"),i()()(),t(641,"td",18)(642,"code",24),e(643,"string "),i(),t(644,"code",22),e(645," boolean "),i(),t(646,"code",40),e(647," Function"),i()(),t(648,"td",21)(649,"em")(650,"strong"),e(651,"(opcional)"),i()(),t(652,"p"),e(653,"Rota de redirecionamento para a\xE7\xE3o de cancelar, caso n\xE3o seja especificada ser\xE1 usado o comando "),t(654,"code"),e(655,"navigator.back()"),i(),e(656,"."),i(),t(657,"blockquote")(658,"p"),e(659,"Se passada uma fun\xE7\xE3o, \xE9 responsabilidade do desenvolvedor implementar a navega\xE7\xE3o ou outro comportamento desejado."),i()(),t(660,"blockquote")(661,"p"),e(662,"Caso queira esconder a a\xE7\xE3o deve ser passado o valor "),t(663,"code"),e(664,"false"),i(),e(665,";"),i()(),t(666,"pre")(667,"code"),e(668,`actions = {
  cancel: '/'
};
`),i()()()(),t(669,"tr",14)(670,"td",15)(671,"div",16)(672,"span",17),e(673," save"),n(674,"br"),i()()(),t(675,"td",18)(676,"code",24),e(677,"string "),i(),t(678,"code",41),e(679," ((resource: any, id: string) => void)"),i()(),t(680,"td",21)(681,"em")(682,"strong"),e(683,"(opcional)"),i()(),t(684,"p"),e(685,"Rota de redirecionamento ou m\xE9todo para executar o envio dos dados ao servidor."),i(),t(686,"p"),e(687,"A rota de redirecionamento ser\xE1 executada ap\xF3s a confirma\xE7\xE3o de grava\xE7\xE3o do registro."),i(),t(688,"blockquote")(689,"p"),e(690,"A rota pode conter um par\xE2metro chamando id."),i()(),t(691,"pre")(692,"code"),e(693,`actions = {
  save: 'detail/:id'
};
`),i()(),t(694,"p"),e(695,"Se for passado um m\xE9todo:"),i(),t(696,"ul")(697,"li"),e(698,"receber\xE1 como par\xE2metro na chamada do m\xE9todo o recurso, por exemplo: "),t(699,"code"),e(700,"{ email: 'example@email.com' }"),i(),e(701,"."),i(),t(702,"li"),e(703,`\xE9 responsabilidade do desenvolvedor implementar a navega\xE7\xE3o e/ou envio dos dados
para o servidor ou outro comportamento desejado.`),i()()()(),t(704,"tr",14)(705,"td",15)(706,"div",16)(707,"span",17),e(708," saveNew"),n(709,"br"),i()()(),t(710,"td",18)(711,"code",24),e(712,"string "),i(),t(713,"code",42),e(714," ((resource: any, id?: string) => void)"),i()(),t(715,"td",21)(716,"em")(717,"strong"),e(718,"(opcional)"),i()(),t(719,"p"),e(720,"Rota de redirecionamento ou m\xE9todo para executar o envio dos dados ao servidor."),i(),t(721,"p"),e(722,"A rota de redirecionamento ser\xE1 executada ap\xF3s a confirma\xE7\xE3o de grava\xE7\xE3o do registro."),i(),t(723,"blockquote")(724,"p"),e(725,`Caso tratar-se de um novo registro, ser\xE1 resetado o formul\xE1rio para um novo registro.
Se estiver editando um registro a rota de redirecionamento ser\xE1 utilizada.`),i()(),t(726,"pre")(727,"code"),e(728,`actions = {
  saveNew: 'new'
};
`),i()(),t(729,"p"),e(730,"A rota pode conter um par\xE2metro id."),i(),t(731,"pre")(732,"code"),e(733,`actions = {
  saveNew: 'edit/:id'
};
`),i()(),t(734,"p"),e(735,`Ao informar um m\xE9todo \xE9 responsabilidade do desenvolvedor implementar a navega\xE7\xE3o e/ou envio dos dados
para o servidor ou outro comportamento desejado.`),i()()()(),t(736,"h4",35)(737,"code",5),e(738,"PoPageDynamicEditBeforeCancel"),i()(),t(739,"div",2)(740,"p"),e(741,`Defini\xE7\xE3o da estrutura de retorno da url ou m\xE9todo executado atrav\xE9s da
propriedade `),t(742,"code"),e(743,"beforeCancel"),i(),e(744,"."),i()(),t(745,"h4",10),e(746,"Propriedades"),i(),t(747,"table",11)(748,"tr",12)(749,"th",13),e(750,"Nome"),i(),t(751,"th",13),e(752,"Tipo"),i(),t(753,"th",13),e(754,"Descri\xE7\xE3o"),i()(),t(755,"tr",14)(756,"td",15)(757,"div",16)(758,"span",17),e(759," allowAction"),n(760,"br"),i()()(),t(761,"td",18)(762,"code",22),e(763,"boolean"),i()(),t(764,"td",21)(765,"em")(766,"strong"),e(767,"(opcional)"),i()(),t(768,"p"),e(769,"Define se deve ou n\xE3o executar a a\xE7\xE3o de cancelamento de edi\xE7\xE3o da p\xE1gina (cancel)"),i()()(),t(770,"tr",14)(771,"td",15)(772,"div",16)(773,"span",17),e(774," newUrl"),n(775,"br"),i()()(),t(776,"td",18)(777,"code",24),e(778,"string"),i()(),t(779,"td",21)(780,"em")(781,"strong"),e(782,"(opcional)"),i()(),t(783,"p"),e(784,"Nova rota para navega\xE7\xE3o que substituir\xE1 a definida anteriormente em "),t(785,"code"),e(786,"cancel"),i(),e(787,"."),i()()()(),t(788,"h4",35)(789,"code",5),e(790,"PoPageDynamicEditBeforeSaveNew"),i()(),t(791,"div",2)(792,"p"),e(793,`Defini\xE7\xE3o da estrutura de retorno da url ou m\xE9todo executado atrav\xE9s da
propriedade `),t(794,"code"),e(795,"beforeSaveNew"),i(),e(796,"."),i()(),t(797,"h4",10),e(798,"Propriedades"),i(),t(799,"table",11)(800,"tr",12)(801,"th",13),e(802,"Nome"),i(),t(803,"th",13),e(804,"Tipo"),i(),t(805,"th",13),e(806,"Descri\xE7\xE3o"),i()(),t(807,"tr",14)(808,"td",15)(809,"div",16)(810,"span",17),e(811," allowAction"),n(812,"br"),i()()(),t(813,"td",18)(814,"code",22),e(815,"boolean"),i()(),t(816,"td",21)(817,"em")(818,"strong"),e(819,"(opcional)"),i()(),t(820,"p"),e(821,"Define se deve ou n\xE3o executar a a\xE7\xE3o salvar e novo (saveNew)."),i()()(),t(822,"tr",14)(823,"td",15)(824,"div",16)(825,"span",17),e(826," newUrl"),n(827,"br"),i()()(),t(828,"td",18)(829,"code",24),e(830,"string"),i()(),t(831,"td",21)(832,"em")(833,"strong"),e(834,"(opcional)"),i()(),t(835,"p"),e(836,"Nova rota de redirecionamento, que substituir\xE1 a rota definida anteriormente em "),t(837,"code"),e(838,"saveNew"),i(),e(839,"."),i()()(),t(840,"tr",14)(841,"td",15)(842,"div",16)(843,"span",17),e(844," resource"),n(845,"br"),i()()(),t(846,"td",18)(847,"code",43),e(848,"any"),i()(),t(849,"td",21)(850,"em")(851,"strong"),e(852,"(opcional)"),i()(),t(853,"p"),e(854,"Recurso atualizado."),i(),t(855,"p"),e(856,`Ser\xE1 feito uma mesclagem entre os valores existentes e esse novo objeto,
no entanto as propriedades que possu\xEDrem `),t(857,"code"),e(858,"key: true"),i(),e(859,` n\xE3o ser\xE3o alteradas.
Por exemplo:`),i(),t(860,"ul")(861,"li"),e(862,"recurso anterior com a propriedade id foi que definida como "),t(863,"em"),e(864,"key"),i(),e(865,":"),i()(),t(866,"pre")(867,"code"),e(868,`{ id: 1, name: 'Ane' }
`),i()(),t(869,"ul")(870,"li"),e(871,"recurso retornado no "),t(872,"code"),e(873,"beforeSaveNew"),i(),e(874,":"),i()(),t(875,"pre")(876,"code"),e(877,`{ id: 50, age: 23 }
`),i()(),t(878,"ul")(879,"li"),e(880,"Mesclagem do recurso:"),i()(),t(881,"pre")(882,"code"),e(883,`{ id: 1, name: 'Ane', age: 23 }
`),i()(),t(884,"blockquote")(885,"p"),e(886,"Caso "),t(887,"code"),e(888,"allowAction"),i(),e(889," seja "),t(890,"code"),e(891,"false"),i(),e(892,`, o recurso ser\xE1 atualizado apenas localmente, sem concluir
a a\xE7\xE3o de salvar (saveNew).`),i()()()()(),t(893,"h4",35)(894,"code",5),e(895,"PoPageDynamicEditBeforeSave"),i()(),t(896,"div",2)(897,"p"),e(898,`Defini\xE7\xE3o da estrutura de retorno da url ou m\xE9todo executado atrav\xE9s da
propriedade `),t(899,"code"),e(900,"beforeSave"),i(),e(901,"."),i()(),t(902,"h4",10),e(903,"Propriedades"),i(),t(904,"table",11)(905,"tr",12)(906,"th",13),e(907,"Nome"),i(),t(908,"th",13),e(909,"Tipo"),i(),t(910,"th",13),e(911,"Descri\xE7\xE3o"),i()(),t(912,"tr",14)(913,"td",15)(914,"div",16)(915,"span",17),e(916," allowAction"),n(917,"br"),i()()(),t(918,"td",18)(919,"code",22),e(920,"boolean"),i()(),t(921,"td",21)(922,"em")(923,"strong"),e(924,"(opcional)"),i()(),t(925,"p"),e(926,"Define se deve ou n\xE3o executar a a\xE7\xE3o salvar (save)."),i()()(),t(927,"tr",14)(928,"td",15)(929,"div",16)(930,"span",17),e(931," newUrl"),n(932,"br"),i()()(),t(933,"td",18)(934,"code",24),e(935,"string"),i()(),t(936,"td",21)(937,"em")(938,"strong"),e(939,"(opcional)"),i()(),t(940,"p"),e(941,"Nova rota para salvar o recurso, que substituir\xE1 a rota definida anteriormente em "),t(942,"code"),e(943,"save"),i(),e(944,"."),i()()(),t(945,"tr",14)(946,"td",15)(947,"div",16)(948,"span",17),e(949," resource"),n(950,"br"),i()()(),t(951,"td",18)(952,"code",43),e(953,"any"),i()(),t(954,"td",21)(955,"em")(956,"strong"),e(957,"(opcional)"),i()(),t(958,"p"),e(959,"Recurso atualizado."),i(),t(960,"p"),e(961,`Ser\xE1 feito uma mesclagem entre os valores existentes e esse novo objeto.
Por exemplo:`),i(),t(962,"ul")(963,"li"),e(964,"recurso anterior:"),i()(),t(965,"pre")(966,"code"),e(967,`{ name: 'Ane' }
`),i()(),t(968,"ul")(969,"li"),e(970,"recurso retornado no "),t(971,"code"),e(972,"beforeSave"),i(),e(973,":"),i()(),t(974,"pre")(975,"code"),e(976,`{ age: 23 }
`),i()(),t(977,"ul")(978,"li"),e(979,"Mesclagem do recurso:"),i()(),t(980,"pre")(981,"code"),e(982,`{ name: 'Ane', age: 23 }
`),i()(),t(983,"blockquote")(984,"p"),e(985,"Caso "),t(986,"code"),e(987,"allowAction"),i(),e(988," seja "),t(989,"code"),e(990,"false"),i(),e(991,`, o recurso ser\xE1 atualizado apenas localmente, sem concluir
a a\xE7\xE3o de salvar (save).`),i()()()()(),t(992,"h4",35)(993,"code",5),e(994,"PoPageDynamicEditField"),i()(),t(995,"div",2)(996,"p"),e(997,"Interface dos fields usados para compor o template "),t(998,"code"),e(999,"po-page-dynamic-edit"),i(),e(1e3,`.
Herda as defini\xE7\xF5es da interface
`),t(1001,"a",44),e(1002,"PoDynamicFormField"),i(),e(1003,"."),i()(),t(1004,"h4",10),e(1005,"Propriedades"),i(),t(1006,"table",11)(1007,"tr",12)(1008,"th",13),e(1009,"Nome"),i(),t(1010,"th",13),e(1011,"Tipo"),i(),t(1012,"th",13),e(1013,"Descri\xE7\xE3o"),i()(),t(1014,"tr",14)(1015,"td",15)(1016,"div",16)(1017,"span",17),e(1018," duplicate"),n(1019,"br"),i()()(),t(1020,"td",18)(1021,"code",22),e(1022,"boolean"),i()(),t(1023,"td",21)(1024,"em")(1025,"strong"),e(1026,"(opcional)"),i()(),t(1027,"p"),e(1028,"Indica se o campo ser\xE1 duplicado caso seja executada a a\xE7\xE3o de duplica\xE7\xE3o."),i()()()(),t(1029,"h4",35)(1030,"code",5),e(1031,"PoPageDynamicEditLiterals"),i()(),t(1032,"div",2)(1033,"p"),e(1034,"Interface para defini\xE7\xE3o das literais usadas no "),t(1035,"code"),e(1036,"po-page-dynamic-edit"),i(),e(1037,"."),i()(),t(1038,"h4",10),e(1039,"Propriedades"),i(),t(1040,"table",11)(1041,"tr",12)(1042,"th",13),e(1043,"Nome"),i(),t(1044,"th",13),e(1045,"Tipo"),i(),t(1046,"th",13),e(1047,"Descri\xE7\xE3o"),i()(),t(1048,"tr",14)(1049,"td",15)(1050,"div",16)(1051,"span",17),e(1052," cancelConfirmMessage"),n(1053,"br"),i()()(),t(1054,"td",18)(1055,"code",24),e(1056,"string"),i()(),t(1057,"td",21)(1058,"em")(1059,"strong"),e(1060,"(opcional)"),i()(),t(1061,"p"),e(1062,"Texto exibido na mensagem de cancelamento da inclus\xE3o/edi\xE7\xE3o."),i()()(),t(1063,"tr",14)(1064,"td",15)(1065,"div",16)(1066,"span",17),e(1067," detailActionNew"),n(1068,"br"),i()()(),t(1069,"td",18)(1070,"code",24),e(1071,"string"),i()(),t(1072,"td",21)(1073,"em")(1074,"strong"),e(1075,"(opcional)"),i()(),t(1076,"p"),e(1077,"R\xF3tulo exibido no bot\xE3o "),t(1078,"code"),e(1079,"Novo"),i(),e(1080,"."),i()()(),t(1081,"tr",14)(1082,"td",15)(1083,"div",16)(1084,"span",17),e(1085," pageActionCancel"),n(1086,"br"),i()()(),t(1087,"td",18)(1088,"code",24),e(1089,"string"),i()(),t(1090,"td",21)(1091,"em")(1092,"strong"),e(1093,"(opcional)"),i()(),t(1094,"p"),e(1095,"R\xF3tulo exibido no bot\xE3o "),t(1096,"code"),e(1097,"Cancelar"),i(),e(1098,"."),i()()(),t(1099,"tr",14)(1100,"td",15)(1101,"div",16)(1102,"span",17),e(1103," pageActionSave"),n(1104,"br"),i()()(),t(1105,"td",18)(1106,"code",24),e(1107,"string"),i()(),t(1108,"td",21)(1109,"em")(1110,"strong"),e(1111,"(opcional)"),i()(),t(1112,"p"),e(1113,"R\xF3tulo exibido no bot\xE3o "),t(1114,"code"),e(1115,"Salvar"),i(),e(1116,"."),i()()(),t(1117,"tr",14)(1118,"td",15)(1119,"div",16)(1120,"span",17),e(1121," pageActionSaveNew"),n(1122,"br"),i()()(),t(1123,"td",18)(1124,"code",24),e(1125,"string"),i()(),t(1126,"td",21)(1127,"em")(1128,"strong"),e(1129,"(opcional)"),i()(),t(1130,"p"),e(1131,"R\xF3tulo exibido no bot\xE3o "),t(1132,"code"),e(1133,"Salvar e novo"),i(),e(1134,"."),i()()(),t(1135,"tr",14)(1136,"td",15)(1137,"div",16)(1138,"span",17),e(1139," registerNotFound"),n(1140,"br"),i()()(),t(1141,"td",18)(1142,"code",24),e(1143,"string"),i()(),t(1144,"td",21)(1145,"em")(1146,"strong"),e(1147,"(opcional)"),i()(),t(1148,"p"),e(1149,"Texto exibido para resgistro n\xE3o encontrado."),i()()(),t(1150,"tr",14)(1151,"td",15)(1152,"div",16)(1153,"span",17),e(1154," saveNotificationError"),n(1155,"br"),i()()(),t(1156,"td",18)(1157,"code",24),e(1158,"string"),i()(),t(1159,"td",21)(1160,"em")(1161,"strong"),e(1162,"(opcional)"),i()(),t(1163,"p"),e(1164,"Texto exibido para ocorr\xEAncia de alguma inconsist\xEAncia ao salvar."),i()()(),t(1165,"tr",14)(1166,"td",15)(1167,"div",16)(1168,"span",17),e(1169," saveNotificationSuccessSave"),n(1170,"br"),i()()(),t(1171,"td",18)(1172,"code",24),e(1173,"string"),i()(),t(1174,"td",21)(1175,"em")(1176,"strong"),e(1177,"(opcional)"),i()(),t(1178,"p"),e(1179,"Texto exibido para recurso salvo com sucesso."),i()()(),t(1180,"tr",14)(1181,"td",15)(1182,"div",16)(1183,"span",17),e(1184," saveNotificationSuccessUpdate"),n(1185,"br"),i()()(),t(1186,"td",18)(1187,"code",24),e(1188,"string"),i()(),t(1189,"td",21)(1190,"em")(1191,"strong"),e(1192,"(opcional)"),i()(),t(1193,"p"),e(1194,"Texto exibido para recurso atualizado com sucesso."),i()()(),t(1195,"tr",14)(1196,"td",15)(1197,"div",16)(1198,"span",17),e(1199," saveNotificationWarning"),n(1200,"br"),i()()(),t(1201,"td",18)(1202,"code",24),e(1203,"string"),i()(),t(1204,"td",21)(1205,"em")(1206,"strong"),e(1207,"(opcional)"),i()(),t(1208,"p"),e(1209,"Texto exibido para adivert\xEAncia de formul\xE1rio preenchido de forma incorreta."),i()()()(),t(1210,"h4",35)(1211,"code",5),e(1212,"PoPageDynamicEditMetadata"),i()(),t(1213,"div",2)(1214,"p"),e(1215,"Interface para as propriedades de uma p\xE1gina din\xE2mica. "),n(1216,"a",45),i()(),t(1217,"h4",10),e(1218,"Propriedades"),i(),t(1219,"table",11)(1220,"tr",12)(1221,"th",13),e(1222,"Nome"),i(),t(1223,"th",13),e(1224,"Tipo"),i(),t(1225,"th",13),e(1226,"Descri\xE7\xE3o"),i()(),t(1227,"tr",14)(1228,"td",15)(1229,"div",16)(1230,"span",17),e(1231," actions"),n(1232,"br"),i()()(),t(1233,"td",18)(1234,"code",19),e(1235,"PoPageDynamicEditActions"),i()(),t(1236,"td",21)(1237,"em")(1238,"strong"),e(1239,"(opcional)"),i()(),t(1240,"p"),e(1241,"A\xE7\xF5es que o usu\xE1rio poder\xE1 executar na p\xE1gina atrav\xE9s de bot\xF5es."),i()()(),t(1242,"tr",14)(1243,"td",15)(1244,"div",16)(1245,"span",17),e(1246," autoRouter"),n(1247,"br"),i()()(),t(1248,"td",18)(1249,"code",22),e(1250,"boolean"),i()(),t(1251,"td",21)(1252,"em")(1253,"strong"),e(1254,"(opcional)"),i()(),t(1255,"p"),e(1256,"Cria automaticamente as rotas de edi\xE7\xE3o (novo/duplicate) e detalhes caso sejam definidas a\xE7\xF5es na propriedade "),t(1257,"code"),e(1258,"p-actions"),i()(),t(1259,"p"),e(1260,"As rotas criadas ser\xE3o baseadas na propriedade "),t(1261,"code"),e(1262,"p-actions"),i(),e(1263,"."),i(),t(1264,"blockquote")(1265,"p"),e(1266,"Para o correto funcionamento n\xE3o pode haver nenhuma rota coringa ("),t(1267,"code"),e(1268,"**"),i(),e(1269,") especificada."),i()()()(),t(1270,"tr",14)(1271,"td",15)(1272,"div",16)(1273,"span",17),e(1274," breadcrumb"),n(1275,"br"),i()()(),t(1276,"td",18)(1277,"code",23),e(1278,"PoBreadcrumb"),i()(),t(1279,"td",21)(1280,"em")(1281,"strong"),e(1282,"(opcional)"),i()(),t(1283,"p"),e(1284,"Objeto com propriedades do breadcrumb."),i()()(),t(1285,"tr",14)(1286,"td",15)(1287,"div",16)(1288,"span",17),e(1289," fields"),n(1290,"br"),i()()(),t(1291,"td",18)(1292,"code",26),e(1293,"Array<PoPageDynamicEditField>"),i()(),t(1294,"td",21)(1295,"em")(1296,"strong"),e(1297,"(opcional)"),i()(),t(1298,"p"),e(1299,"Lista dos campos usados."),i()()(),t(1300,"tr",14)(1301,"td",15)(1302,"div",16)(1303,"span",17),e(1304," title"),n(1305,"br"),i()()(),t(1306,"td",18)(1307,"code",24),e(1308,"string"),i()(),t(1309,"td",21)(1310,"em")(1311,"strong"),e(1312,"(opcional)"),i()(),t(1313,"p"),e(1314,"T\xEDtulo da p\xE1gina."),i()()(),t(1315,"tr",14)(1316,"td",15)(1317,"div",16)(1318,"span",17),e(1319," version"),n(1320,"br"),i()()(),t(1321,"td",18)(1322,"code",46),e(1323,"number"),i()(),t(1324,"td",21)(1325,"p"),e(1326,"Vers\xE3o do metadado devolvido pelo backend."),i()()()(),t(1327,"h4",35)(1328,"code",5),e(1329,"PoPageDynamicEditOptions"),i()(),t(1330,"div",2)(1331,"p"),e(1332,"Interface para as propriedades de uma p\xE1gina din\xE2mica."),i()(),t(1333,"h4",10),e(1334,"Propriedades"),i(),t(1335,"table",11)(1336,"tr",12)(1337,"th",13),e(1338,"Nome"),i(),t(1339,"th",13),e(1340,"Tipo"),i(),t(1341,"th",13),e(1342,"Descri\xE7\xE3o"),i()(),t(1343,"tr",14)(1344,"td",15)(1345,"div",16)(1346,"span",17),e(1347," actions"),n(1348,"br"),i()()(),t(1349,"td",18)(1350,"code",19),e(1351,"PoPageDynamicEditActions"),i()(),t(1352,"td",21)(1353,"em")(1354,"strong"),e(1355,"(opcional)"),i()(),t(1356,"p"),e(1357,"A\xE7\xF5es que o usu\xE1rio poder\xE1 executar na p\xE1gina atrav\xE9s de bot\xF5es."),i()()(),t(1358,"tr",14)(1359,"td",15)(1360,"div",16)(1361,"span",17),e(1362," breadcrumb"),n(1363,"br"),i()()(),t(1364,"td",18)(1365,"code",23),e(1366,"PoBreadcrumb"),i()(),t(1367,"td",21)(1368,"em")(1369,"strong"),e(1370,"(opcional)"),i()(),t(1371,"p"),e(1372,"Objeto com propriedades do breadcrumb."),i()()(),t(1373,"tr",14)(1374,"td",15)(1375,"div",16)(1376,"span",17),e(1377," fields"),n(1378,"br"),i()()(),t(1379,"td",18)(1380,"code",26),e(1381,"Array<PoPageDynamicEditField>"),i()(),t(1382,"td",21)(1383,"em")(1384,"strong"),e(1385,"(opcional)"),i()(),t(1386,"p"),e(1387,"Lista dos campos usados."),i()()(),t(1388,"tr",14)(1389,"td",15)(1390,"div",16)(1391,"span",17),e(1392," title"),n(1393,"br"),i()()(),t(1394,"td",18)(1395,"code",24),e(1396,"string"),i()(),t(1397,"td",21)(1398,"em")(1399,"strong"),e(1400,"(opcional)"),i()(),t(1401,"p"),e(1402,"T\xEDtulo da p\xE1gina."),i()()()()())},dependencies:[g],encapsulation:2})}return a})();var R=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=2;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,o){this.route=r,this.router=o}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let o=r.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(o){return new(o||a)(C(k),C(F))};static \u0275cmp=m({type:a,selectors:[["ng-component"]],standalone:!1,decls:7,vars:4,consts:[["p-title"," Page Dynamic Edit",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,d){o&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),s("p-click",function(){return d.changeTab("doc")}),n(3,"sample-po-page-dynamic-edit-doc"),i(),t(4,"po-tab",3),s("p-click",function(){return d.changeTab("web")}),n(5,"sample-po-page-dynamic-edit-basic-view")(6,"sample-po-page-dynamic-edit-user-view"),i()()()),o&2&&(l("p-actions",d.actions),p(2),l("p-active",d.activeTab==="doc"),p(2),l("p-hide",d.hidePoWebSample)("p-active",d.activeTab==="web"))},dependencies:[N,x,S,j,O,_],encapsulation:2})}return a})();var te=[{path:"",component:R}],H=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=y({type:a});static \u0275inj=v({imports:[D.forChild(te),D]})}return a})();var fe=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=y({type:a});static \u0275inj=v({imports:[M,H]})}return a})();export{fe as DocPoPageDynamicEditModule};
