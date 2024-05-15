"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5481],{75481:(W,P,t)=>{t.r(P),t.d(P,{PrestacaoServicoGestaoPageModule:()=>T});var n=t(70655),o=t(98274),f=t(36895),g=t(24006),l=t(48058),c=t(39528);let r=class{constructor(){}ngOnInit(){}};r.ctorParameters=()=>[],r=(0,n.gn)([(0,o.wA2)({selector:"app-prestacao-servico-gestao",template:'<ion-header [translucent]="true">\n  <ion-toolbar>\n    <ion-buttons slot="start">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Gest\xe3o <span class="text-xs">(Servi\xe7os)</span></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content appScrollTheme>\n  <br>\n  <div style="max-width: 95%; max-height: 95%; margin: auto">\n    <app-prestacao-servicos-gestao-main></app-prestacao-servicos-gestao-main>\n  </div>\n</ion-content>\n',styles:[""]})],r);const K=[{path:"",component:r}];let C=class{};C=(0,n.gn)([(0,o.LVF)({imports:[c.Bz.forChild(K)],exports:[c.Bz]})],C);var _=t(85226),E=t(35593),F=t(25047),w=t(91795),D=t(21493),R=t(82210),G=t(15108),J=t(45132),U=t(77604),z=t(9764),I=t(51740),H=t(1997),Z=t(21327),$=t(92665),Q=t(50613),X=t(17489),k=t(70585),N=t(32137),Y=t(15861);var te=t(10805),ae=t(50727),oe=t(54452),L=t(59136),d=t(98739),ne=t(59256),se=t(34758),ie=t(57118),h=t(54692),re=t(18109),le=t(91475),V=t(91391),ce=t(45037);let S=class{constructor(e,a,s,i,u,x,A,B){this.userService=e,this.modal=a,this.toastService=s,this.lojaService=i,this.router=u,this.prestacaoServicosService=x,this.storageService=A,this.confirmationService=B,this.searchedPrestacaoServico="",this.currentPage=1,this.searchedColaborador="",this.selectedColaborador="",this.searchedLoja="",this.selectedLoja="",this.shouldDisableColaborador=!1,this.sortOptions=[],this.isLoaded=!1,this.showEnderecoDialog=!1,this.showServicoDialog=!1,this.subscriptions=new ae.w0}ngOnInit(){const{id:e,loja:a}=this.storageService.getCompleteLocalUser();this.selectedColaborador=e,this.selectedLoja=a.id,this.sortOptions=[...h.Ti],this.loadLojas(),this.loadFuncionarios(),this.loadPrestacaoServico()}ngOnDestroy(){this.subscriptions.unsubscribe()}changeFiltro({value:e}){this.selectedStatusServico=e,this.loadPrestacaoServico(1)}clearFilter(){this.loadPrestacaoServico(1)}clearAllFilters(e,a,s){this.searchedPrestacaoServico=void 0,this.selectedLoja=void 0,this.clearLojaFilter(null),a.writeValue(null),s.writeValue(null),this.loadFuncionarios(1)}createNewPrestacao(){this.router.navigateByUrl("prestacao-servico-simples")}setUserImage(e){return e.avatar_url||"assets/imgs/outros/default-user.jpg"}changeLoja({value:e}){this.selectedLoja&&(this.shouldDisableColaborador=!1,this.loadFuncionarios(1),this.loadPrestacaoServico(1))}clearLojaFilter(e){this.shouldDisableColaborador=!0,this.selectedColaborador=void 0,this.selectedStatusServico=void 0}loadLojas(e=1,a){const s=this.lojaService.list({searchedLoja:this.searchedLoja},{order:L.L.ASC,page:e,take:10}).subscribe(i=>{this.lojas=i,a&&a.show()});this.subscriptions.add(s)}paginarLoja(e){this.loadLojas()}onLojaFilter(e){const a=e.filter;this.searchedLoja=a}blurLoja(e,a){this.searchedLoja=void 0,a.filterValue=void 0}changeColaborador({value:e}){this.loadFuncionarios(1)}loadFuncionarios(e=1){const a=this.userService.listUsers({loja_id:this.selectedLoja,searchedUser:this.searchedColaborador,tipo_user:re.X.FUNCIONARIO},{order:L.L.DESC,page:e,take:10}).subscribe(s=>{this.colaboradores=s});this.subscriptions.add(a)}paginarColaborador(e){this.loadFuncionarios()}onColaboradorFilter(e){const a=e.filter;this.searchedColaborador=a}blurColaborador(e,a){this.searchedColaborador=void 0,a.filterValue=void 0}searchPrestacaoServico(){this.loadPrestacaoServico(1)}paginarPrestacaoServico(e){const{first:a,rows:s}=e,i=Number(Number(a)/Number(s)+1);i!=this.currentPage&&(this.currentPage=i,this.loadPrestacaoServico(i))}loadPrestacaoServico(e=1){const a=this.prestacaoServicosService.list({loja_id:this.selectedLoja,colaborador_id:this.selectedColaborador,searchedPrestacaoServico:this.searchedPrestacaoServico,status_servico:this.selectedStatusServico},{order:L.L.DESC,page:e,take:10}).subscribe(s=>{this.prestacoesServico=s});this.subscriptions.add(a)}openEndereco(e){if(!e&&this.selectedPrestacaoServico&&(e=this.selectedPrestacaoServico),!e&&!this.selectedPrestacaoServico)return void this.toastService.presentToast({detalhe:"Nenhuma presta\xe7\xe3o selecionada",titulo:"Aten\xe7\xe3o",gravidade:d.kl.ATENCAO,duracao:d.m4.shortDuration});const{local:a}=e;if(a==V.sK.LOCAL||a==V.sK.EXTERNO){const s=e.agendamento_servico?.endereco||e.loja.endereco;return this.selectedEndereco=s,void(this.showEnderecoDialog=!0)}this.toastService.presentToast({detalhe:"Atendimento remoto",titulo:"Remoto",gravidade:d.kl.INFORMACAO,duracao:d.m4.shortDuration})}openDetailPrestacaoServico(e){this.selectedPrestacaoServico||(this.selectedPrestacaoServico=e),this.showServicoDialog=!0}startPrestacaoServico(e){const{id:a,cliente:s}=e,i=this.prestacaoServicosService.initiateById(a).subscribe(u=>{this.toastService.presentToast({titulo:"Iniciado",detalhe:`Servi\xe7o do cliente '${s.nome}' iniciado`,duracao:d.m4.mediumDuration,gravidade:d.kl.INFORMACAO}),this.loadPrestacaoServico(1)});this.subscriptions.add(i)}finalizePrestacaoServico(e){const{id:a,cliente:s}=e,i=this.prestacaoServicosService.finalizeById(a).subscribe(u=>{this.toastService.presentToast({titulo:"Finalizado",detalhe:`Servi\xe7o do cliente '${s.nome}' finalizado`,duracao:d.m4.mediumDuration,gravidade:d.kl.SUCESSO}),this.loadPrestacaoServico(1)});this.subscriptions.add(i)}cancelPrestacaoServico(e){const{id:a,cliente:s}=e;this.confirmationService.confirm({message:`Deseja mesmo cancelar a presta\xe7\xe3o de servi\xe7o ${a}?`,header:`Presta\xe7\xe3o do cliente '${s.nome}'`,icon:"pi pi-exclamation-triangle",accept:()=>{const i=this.prestacaoServicosService.cancelById(a).subscribe(u=>{this.toastService.presentToast({titulo:"Cancelado",detalhe:`Servi\xe7o do cliente '${s.nome}' cancelado`,duracao:d.m4.mediumDuration,gravidade:d.kl.INFORMACAO}),this.loadPrestacaoServico(1)});this.subscriptions.add(i)},reject:i=>{this.toastService.clearToast()}})}updatePrestacaoServico(e){this.showModal(ce.U,{prestacaoServico:e})}showStartButton(e){const{status_servico:a}=e;return a==h.vx.AGENDADO}showFinalizeButton(e){const{status_servico:a}=e;return a==h.vx.INICIADO}showCancelButton(e){const{status_servico:a}=e;return a==h.vx.AGENDADO||a==h.vx.INICIADO}showModal(e,a){var s=this;return(0,Y.Z)(function*(){const i=yield s.modal.create({component:e,backdropDismiss:!1,cssClass:"modal-size-80",componentProps:a});return i.onDidDismiss().then(u=>{const{data:x}=u;s.isLoaded=!1,x&&s.loadPrestacaoServico()}),yield i.present()})()}};S.ctorParameters=()=>[{type:se.K},{type:l.IN},{type:ne.D},{type:ie.W},{type:c.F0},{type:le.P},{type:oe.V},{type:te.YP}],S=(0,n.gn)([(0,o.wA2)({selector:"app-prestacao-servicos-gestao-main",template:'<div class="card main-view ">\n  <p-dataView *ngIf="prestacoesServico && colaboradores && lojas"\n    emptyMessage="Nada encontrado, experimente trocar os filtros" class="data-container" #dv [lazy]="true"\n    [value]="prestacoesServico.data" [paginator]="true" [rows]="prestacoesServico.meta.take"\n    [totalRecords]="prestacoesServico.meta.itemCount" [pageLinks]="prestacoesServico.meta.pageCount"\n    (onLazyLoad)="paginarPrestacaoServico($event)" filterBy="nome" layout="list">\n    <ng-template pTemplate="header">\n      <div class="flex flex-column md:flex-row md:justify-content-between mb-2">\n        <p-dropdown #dropdown_lojas [options]="lojas.data" styleClass="mb-2 md:mb-0" (onClear)="clearLojaFilter($event)"\n          (onChange)="changeLoja($event)" [showClear]="true" [filter]="true" placeholder="Selecione uma Loja"\n          [virtualScroll]="true" [virtualScrollItemSize]="38" [lazy]="true"\n          (onLazyLoad)="paginarLojas($event)" (onFilter)="onLojaFilter($event)"\n          (onFocus)="blurLojas($event, drop_client)" optionValue="id" optionLabel="nome" [(ngModel)]="selectedLoja">\n          <ng-template pTemplate="loader" let-options="options">\n            <div class="flex align-items-center py-2 px-3" style="height: 38px">\n              <p-skeleton [width]="options.even ? \'60%\' : \'50%\'" height="1rem"></p-skeleton>\n            </div>\n          </ng-template>\n        </p-dropdown>\n\n        <p-dropdown #drop_colaborador [options]="colaboradores.data" styleClass="mb-2 md:mb-0"\n          (onClear)="clearFilter($event)" (onChange)="loadPrestacaoServico(1)" [showClear]="true" [filter]="true"\n          placeholder="Selecione o colaborador que far\xe1 o servi\xe7o" [virtualScroll]="true" [virtualScrollItemSize]="38"\n          [lazy]="true" (onLazyLoad)="paginarColaborador($event)" (onFilter)="onColaboradorFilter($event)"\n          (onFocus)="blurColaborador($event, drop_colaborador)" optionValue="id" optionLabel="nome"\n          [(ngModel)]="selectedColaborador" [disabled]="shouldDisableColaborador">\n          <ng-template pTemplate="loader" let-options="options">\n            <div class="flex align-items-center py-2 px-3" style="height: 38px">\n              <p-skeleton [width]="options.even ? \'60%\' : \'50%\'" height="1rem"></p-skeleton>\n            </div>\n          </ng-template>\n        </p-dropdown>\n\n        <p-dropdown #dropdown_filtro [options]="sortOptions" placeholder="Status" (onChange)="changeFiltro($event)"\n          (onClear)="clearFilter($event)" [showClear]="true" styleClass="mb-2 md:mb-0"\n          [disabled]="shouldDisableColaborador"></p-dropdown>\n      </div>\n\n      <div class="flex flex-column md:flex-row md:justify-content-end">\n        <button pButton type="button" class="p-button-outlined p-button-danger sm:ml-2 mt-2" icon="pi pi-times"\n          label="Limpar filtros" (click)="clearAllFilters($event, dropdown_lojas, dropdown_filtro)">\n        </button>\n      </div>\n\n      <div class="flex flex-column md:flex-row md:justify-content-end">\n        <p-button class="sm:ml-2 mt-2" icon="pi pi-plus" label="Nova presta\xe7\xe3o" (click)="createNewPrestacao()">\n        </p-button>\n      </div>\n\n      <div class="flex  justify-content-center">\n        <span class="p-input-icon-right mb-2 md:mb-0 mt-2">\n          <i class="pi pi-search cursor-pointer text-primary" (click)="searchPrestacaoServico()"></i>\n          <input type="search" pInputText [(ngModel)]="searchedPrestacaoServico" [ngModelOptions]="{standalone: true}"\n            placeholder="ID ou c\xf3digo da presta\xe7\xe3o" (keyup.enter)="searchPrestacaoServico()">\n        </span>\n      </div>\n    </ng-template>\n\n    <ng-template let-prestacaoServico pTemplate="listItem">\n      <div #templateGrid class="col-12 ">\n        <div class="data-list-item">\n          <div class="crop mb-2 md:mb-0 ">\n            <img class="border-circle border-2 border-primary" [src]="setUserImage(prestacaoServico.colaborador)"\n              [alt]="prestacaoServico.colaborador.nome" />\n          </div>\n          <div class="data-list-detail">\n            <div class="data-name">{{ prestacaoServico.id }}</div>\n            <div class="data-description mt-2">Status: {{ prestacaoServico.status_servico }}</div>\n            <div (click)="openEndereco(prestacaoServico)" class="data-description mt-1 cursor-pointer">Local: {{\n              prestacaoServico.local }}\n              <i class="pi pi-external-link data-category-icon mb-1 ml-1 text-sm text-primary "></i>\n            </div>\n            <div class="data-description mt-2">Prestador: {{ prestacaoServico.colaborador?.nome }}</div>\n            <div class="data-description mt-1">Cliente: {{ prestacaoServico.cliente?.nome || "Cliente n\xe3o identificado"\n              }}</div>\n            <div *ngIf="prestacaoServico.agendamento_servico && prestacaoServico.agendamento_servico.compromisso "\n              class="mt-3">\n              <i class="pi pi-play data-category-icon text-primary"></i>\n              <span class="data-category">In\xedcio previsto:\n                {{prestacaoServico.agendamento_servico.compromisso.data_inicio_completa | date: \'dd/MM/yyyy -\n                HH:mm:ss\' : \'+0000\' }}h</span>\n              <br><br>\n              <i class="pi pi-stopwatch data-category-icon text-primary"></i>\n              <span class="data-category">Finaliza\xe7\xe3o prevista:\n                {{prestacaoServico.agendamento_servico.compromisso.data_fim_completa | date: \'dd/MM/yyyy -\n                HH:mm:ss\' : \'+0000\' }}h</span>\n            </div>\n          </div>\n          <div class="data-list-action">\n            <button pButton type="button" class="p-button-info" icon="pi pi-file-edit" label="Detalhar atendimento"\n              (click)="openDetailPrestacaoServico(prestacaoServico)">\n            </button>\n            <button *ngIf="showStartButton(prestacaoServico)" pButton type="button" class="mt-2 p-button-success"\n              icon="pi pi-play" label="Iniciar Atendimento" (click)="startPrestacaoServico(prestacaoServico)">\n            </button>\n            <button *ngIf="showFinalizeButton(prestacaoServico)" pButton type="button" class="mt-2 p-button-success"\n              icon="pi pi-check" label="Finalizar Atendimento" (click)="finalizePrestacaoServico(prestacaoServico)">\n            </button>\n            <button *ngIf="showCancelButton(prestacaoServico)" pButton type="button"\n              class="p-button-outlined p-button-danger" icon="pi pi-times" label="Cancelar Atendimento"\n              (click)="cancelPrestacaoServico(prestacaoServico)">\n            </button>\n          </div>\n        </div>\n      </div>\n    </ng-template>\n  </p-dataView>\n</div>\n\n\n<app-see-agendamento [showDialog]="showServicoDialog" [selectedPrestacaoServico]="selectedPrestacaoServico"\n  (closeEvent)="selectedPrestacaoServico = undefined; showServicoDialog = false;"\n  (seeEnderecoEvent)="showServicoDialog = false; openEndereco()"\n  (updateAgendamentoEvent)="updatePrestacaoServico($event);showServicoDialog = false;"></app-see-agendamento>\n\n<app-see-endereco [showDialog]="showEnderecoDialog" [endereco]="selectedEndereco"\n  (closeEvent)="selectedPrestacaoServico = undefined; selectedEndereco = undefined; showEnderecoDialog = false;"\n  (returnEvent)="showEnderecoDialog = false; openDetailPrestacaoServico()"></app-see-endereco>\n\n<p-confirmDialog acceptLabel="Sim" rejectLabel="N\xe3o" [style]="{width: \'50vw\'}" [baseZIndex]="10000"\n  rejectButtonStyleClass="p-button-text"></p-confirmDialog>',styles:[""]})],S);var ve=t(54222);let b=class{constructor(){this.showDialog=!1,this.title="Endere\xe7o",this.closeEvent=new o.vpe,this.returnEvent=new o.vpe}ngOnInit(){}dialogOpenMap(){const{bairro:e,cep:a,cidade:s,complemento:i,endereco:u,estado:x,numero:A}=this.endereco,B=`https://www.google.com.br/maps/place/${u},+${A},+-+${e},+${s}+-+${x},+${a}`;ve.U.externalLinkHandle(B),this.close()}close(){this.showDialog=!1,this.closeEvent.emit(this.showDialog)}dialogVoltar(){this.returnEvent.emit(!0)}};b.ctorParameters=()=>[],b.propDecorators={showDialog:[{type:o.IIB}],endereco:[{type:o.IIB}],title:[{type:o.IIB}],closeEvent:[{type:o.r_U}],returnEvent:[{type:o.r_U}]},b=(0,n.gn)([(0,o.wA2)({selector:"app-see-endereco",template:'<p-dialog *ngIf="endereco" [(visible)]="showDialog" appendTo="body" [modal]="true" [closable]="false"\n  [draggable]="false" [breakpoints]="{\'960px\': \'75vw\', \'640px\': \'100vw\'}" [style]="{width: \'40vw\'}">\n  <ng-template pTemplate="header">\n    <div class="flex align-items-center ">\n      <span class="flex align-items-center justify-content-center bg-cyan-100 text-cyan-800 mr-3 border-circle"\n        style="width:32px;height:32px">\n        <i class="pi pi-info text-lg"></i>\n      </span>\n      <span class="font-medium text-2xl text-900">{{ title }}</span>\n    </div>\n\n    <div class="flex align-items-center justify-content-end ml-auto cursor-pointer" (click)="close()">\n      <span\n        class="flex align-items-center justify-content-center bg-pink-100 text-pink-800 border-circle vertical-align-top"\n        style="width:24px;height:24px">\n        <i class="pi pi-times text-sm"></i>\n      </span>\n    </div>\n  </ng-template>\n  <div class="grid">\n    <div class="text-900 font-medium text-xl mt-2 mb-3">Endere\xe7o</div>\n    <div class="surface-card p-4 shadow-2 border-round p-fluid">\n      <div class="grid formgrid p-fluid">\n        <div class="field mb-4 col-12 md:col-6">\n          <label for="company_name" class="font-medium text-900">CEP</label>\n          <input readonly id="company_name" type="text" pInputText [value]="endereco.cep">\n        </div>\n        <div class="field mb-4 col-12 md:col-6">\n          <label for="invoice_id" class="font-medium text-900">Cidade</label>\n          <input readonly id="invoice_id" type="text" pInputText [value]="endereco.cidade">\n        </div>\n        <div class="field mb-4 col-12 md:col-6">\n          <label for="customer_name" class="font-medium text-900">Estado</label>\n          <input readonly id="customer_name" type="text" pInputText [value]="endereco.estado">\n        </div>\n        <div class="field mb-4 col-12 md:col-6">\n          <label for="customer_email" class="font-medium text-900">N\xfamero</label>\n          <input readonly id="customer_email" type="text" pInputText [value]="endereco.numero">\n        </div>\n        <div class="field mb-4 col-12 md:col-6">\n          <label for="customer_email" class="font-medium text-900">Endere\xe7o</label>\n          <input readonly id="customer_email" type="text" pInputText [value]="endereco.endereco">\n        </div>\n        <div class="field mb-4 col-12 md:col-6">\n          <label for="customer_email" class="font-medium text-900">Complemento</label>\n          <input readonly id="customer_email" type="text" pInputText [value]="endereco.complemento">\n        </div>\n      </div>\n    </div>\n  </div>\n  <ng-template pTemplate="footer">\n    <div class="flex justify-content-end">\n      <button class="p-button-outlined p-button-secondary" type="button" pButton pRipple icon="pi pi-arrow-left"\n        iconPos="left" (click)="dialogVoltar()" label="Voltar"></button>\n      <button type="button" pButton pRipple icon="pi pi-globe" iconPos="right" (click)="dialogOpenMap()"\n        label="Maps"></button>\n    </div>\n  </ng-template>\n</p-dialog>',styles:[""]})],b);let O=class{};O=(0,n.gn)([(0,o.LVF)({declarations:[b],imports:[f.ez,l.Pc,D.S,E.hJ,w.T,I.j],exports:[b]})],O);var me=t(92216),ue=t(58783),ge=t(73425),he=t(23520),fe=t(17913),be=t(67147),ye=t(86679);let y=class{constructor(){this.showDialog=!1,this.title="Presta\xe7\xe3o de Servi\xe7o",this.closeEvent=new o.vpe,this.seeEnderecoEvent=new o.vpe,this.updateAgendamentoEvent=new o.vpe}ngOnInit(){}close(){this.showDialog=!1,this.closeEvent.emit(this.showDialog)}dialogSeeEndereco(){this.seeEnderecoEvent.emit(!0)}editPrestacao(){this.updateAgendamentoEvent.emit(this.selectedPrestacaoServico),this.close()}showUpdateButton(){if(!this.selectedPrestacaoServico)return!1;const{status_servico:e}=this.selectedPrestacaoServico;return!(e==h.vx.FINALIZADO||e==h.vx.CANCELADO)}};y.ctorParameters=()=>[],y.propDecorators={showDialog:[{type:o.IIB}],selectedPrestacaoServico:[{type:o.IIB}],title:[{type:o.IIB}],closeEvent:[{type:o.r_U}],seeEnderecoEvent:[{type:o.r_U}],updateAgendamentoEvent:[{type:o.r_U}]},y=(0,n.gn)([(0,o.wA2)({selector:"app-see-agendamento",template:'<ng-container *ngIf="selectedPrestacaoServico">\n  <p-dialog [(visible)]="showDialog" appendTo="body" [modal]="true" [closable]="false" [draggable]="false"\n    [breakpoints]="{\'960px\': \'75vw\', \'640px\': \'100vw\'}" [style]="{width: \'60vw\'}">\n    <ng-template pTemplate="header">\n      <div class="flex align-items-center ">\n        <span class="flex align-items-center justify-content-center bg-cyan-100 text-cyan-800 mr-3 border-circle"\n          style="width:32px;height:32px">\n          <i class="pi pi-info text-lg"></i>\n        </span>\n        <span class="font-medium text-2xl text-900">{{ title }}</span>\n      </div>\n\n      <div class="flex align-items-center justify-content-end ml-auto cursor-pointer" (click)="close()">\n        <span\n          class="flex align-items-center justify-content-center bg-pink-100 text-pink-800 border-circle vertical-align-top"\n          style="width:24px;height:24px">\n          <i class="pi pi-times text-sm"></i>\n        </span>\n      </div>\n    </ng-template>\n\n    <ng-template pTemplate="content">\n      <div class="surface-card p-4 shadow-2 border-round">\n        <div class="font-medium text-3xl text-900 mb-3">Detalhamento</div>\n        <div class="text-primary mb-5">{{ selectedPrestacaoServico.id }}</div>\n        <ul class="list-none p-0 m-0 border-top-1 surface-border">\n          <li class="flex align-items-center py-3 px-2 flex-wrap ">\n            <div class="text-500 w-full md:w-2 font-medium">Prestador</div>\n            <div class="text-900 w-full md:w-10">{{ selectedPrestacaoServico.colaborador.nome }}</div>\n          </li>\n          <li class="flex align-items-center py-3 px-2  flex-wrap surface-ground">\n            <div class="text-500 w-full md:w-2 font-medium">Cliente</div>\n            <div class="text-900 w-full md:w-10">{{ selectedPrestacaoServico.cliente.nome }}</div>\n          </li>\n          <li class="flex align-items-center py-3 px-2 flex-wrap ">\n            <div class="text-500 w-full md:w-2 font-medium">Total a ser pago:</div>\n            <div class="text-900 w-full md:w-10">{{ selectedPrestacaoServico.total_devido | currency:\'BRL\':\'\' }}</div>\n          </li>\n          <li class="flex align-items-center py-3 px-2 flex-wrap surface-ground">\n            <div class="text-500 w-full md:w-2 font-medium">Loja faturando</div>\n            <div class="text-900 w-full md:w-10">{{ selectedPrestacaoServico.loja.nome }}</div>\n          </li>\n          <li class="flex align-items-center py-3 px-2 flex-wrap ">\n            <div class="text-500 w-full md:w-2 font-medium">Adicionais</div>\n            <div class="text-900 w-full md:w-10">\n              <p-tag styleClass="mr-2 text-green-500 bg-green-100" [value]="selectedPrestacaoServico.pagamento_forma"\n                [rounded]="true"></p-tag>\n              <p-tag styleClass="mr-2 text-blue-500 bg-blue-100" [value]="selectedPrestacaoServico.status_servico"\n                [rounded]="true"></p-tag>\n              <p-tag styleClass="mr-2 text-orange-500 bg-orange-100" [value]="selectedPrestacaoServico.local"\n                [rounded]="true"></p-tag>\n            </div>\n          </li>\n          <li class="flex align-items-center py-3 px-2 flex-wrap surface-ground">\n            <div class="text-500 w-full md:w-2 font-medium">Detalhe da ordem de servi\xe7o</div>\n            <div class="text-900 w-full md:w-10">\n              <div class="grid mt-0 mr-0">\n                <div *ngFor="let i of selectedPrestacaoServico.itens_prestacao_servico" class="col-12 md:col-6">\n                  <div class="p-3 border-1 surface-border border-round surface-card">\n                    <div class="text-900 mb-2">\n                      <ion-icon slot="start" icon="business-outline" class="mr-2"></ion-icon>\n                      <span class="font-medium">{{ i.servico.nome }}</span>\n                    </div>\n                    <div class="text-900 mb-2">\n                      <i class="pi pi-tag mr-2"></i>\n                      <span class="font-medium">{{ i.servico.descricao }}</span>\n                    </div>\n                    <div class="surface-200 mb-1 mt-1 " style="height:2px"></div>\n                    <ng-container>\n                      <div class="text-700 mb-1">Valor unit\xe1rio: {{ i.valor_unitario | currency:\'BRL\':\'\' }}</div>\n                      <div class="text-700 mb-1">Quantidade: {{ i.quantidade }}</div>\n                      <div class="text-700">Sub total: {{ i.sub_total | currency:\'BRL\':\'\' }}</div>\n                    </ng-container>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </li>\n          <li class="flex align-items-center py-3 px-2 flex-wrap ">\n            <div class="text-500 w-full md:w-2 font-medium">Resumo da ordem de servi\xe7o</div>\n            <div class="text-900 w-full md:w-10">\n              <div class="grid mt-0 mr-0">\n                <div class="col-12 md:col-6">\n                  <div class="p-3 border-1 surface-border border-round surface-card">\n                    <ng-container>\n                      <div class="text-700 mb-1">Total do servi\xe7o: {{ selectedPrestacaoServico.total_servico |\n                        currency:\'BRL\':\'\' }}</div>\n                      <div class="text-700 mb-1">Acr\xe9scimo/Desconto: {{ selectedPrestacaoServico.acrescimo_desconto |\n                        currency:\'BRL\':\'\' }}</div>\n                      <div class="text-700">Total a ser pago: {{ selectedPrestacaoServico.total_devido |\n                        currency:\'BRL\':\'\' }}</div>\n                    </ng-container>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </li>\n          <li class="flex align-items-center py-3 px-2 flex-wrap surface-ground">\n            <div class="text-500 w-full md:w-2 font-medium ">Justificativa (desconto/acr\xe9scimo)</div>\n            <div class="text-900 w-full md:w-10">{{ selectedPrestacaoServico.descricao || \'N.A\' }}</div>\n          </li>\n        </ul>\n      </div>\n    </ng-template>\n\n    <ng-template pTemplate="footer">\n      \x3c!--\n        <button class="p-button-danger" type="button" pButton pRipple icon="pi pi-times" iconPos="right"\n        (click)="dialogCancel()" label="Cancelar"></button>\n      --\x3e\n      <div class="mt-2">\n        <button class="" type="button" pButton pRipple icon="pi pi-external-link" iconPos="right"\n          (click)="dialogSeeEndereco()" label="Ver endere\xe7o"></button>\n        <button *ngIf="showUpdateButton()" class="" pButton type="button" pRipple icon="pi pi-pencil" iconPos="right" (click)="editPrestacao()"\n          label="Editar"></button>\n      </div>\n    </ng-template>\n  </p-dialog>\n</ng-container>',styles:[""]})],y);let j=class{};j=(0,n.gn)([(0,o.LVF)({declarations:[y],imports:[f.ez,g.u5,g.UX,l.Pc,U.FI,z.Q,R.kW,ue.LU,I.j,D.S,E.hJ,me.uH,w.T,be.o,ye.W,$.O,ge.gz,he.zz,fe.Iu,F.L$,N.D,_.o],exports:[y]})],j);var Pe=t(48257);let M=class{};M=(0,n.gn)([(0,o.LVF)({declarations:[S],imports:[f.ez,g.u5,g.UX,l.Pc,E.hJ,F.L$,w.T,D.S,R.kW,G.x,J.l,X.m,Z.$9,U.FI,k._8,N.D,z.Q,I.j,H.U,$.O,Q.cc,O,j,Pe.J],exports:[S]})],M);let T=class{};T=(0,n.gn)([(0,o.LVF)({imports:[f.ez,g.u5,l.Pc,M,C,_.o],declarations:[r]})],T)},86679:(W,P,t)=>{t.d(P,{W:()=>c});var n=t(98274),o=t(36895);function f(p,v){if(1&p&&n._UZ(0,"span",3),2&p){const r=n.oxw();n.Q6J("ngClass",r.icon)}}class l{containerClass(){return{"p-tag p-component":!0,"p-tag-info":"info"===this.severity,"p-tag-success":"success"===this.severity,"p-tag-warning":"warning"===this.severity,"p-tag-danger":"danger"===this.severity,"p-tag-rounded":this.rounded}}}l.\u0275fac=function(v){return new(v||l)},l.\u0275cmp=n.Xpm({type:l,selectors:[["p-tag"]],hostAttrs:[1,"p-element"],inputs:{styleClass:"styleClass",style:"style",severity:"severity",value:"value",icon:"icon",rounded:"rounded"},ngContentSelectors:["*"],decls:5,vars:6,consts:[[3,"ngClass","ngStyle"],["class","p-tag-icon",3,"ngClass",4,"ngIf"],[1,"p-tag-value"],[1,"p-tag-icon",3,"ngClass"]],template:function(v,r){1&v&&(n.F$t(),n.TgZ(0,"span",0),n.Hsn(1),n.YNc(2,f,1,1,"span",1),n.TgZ(3,"span",2),n._uU(4),n.qZA()()),2&v&&(n.Tol(r.styleClass),n.Q6J("ngClass",r.containerClass())("ngStyle",r.style),n.xp6(2),n.Q6J("ngIf",r.icon),n.xp6(2),n.Oqu(r.value))},dependencies:[o.mk,o.O5,o.PC],styles:[".p-tag{display:inline-flex;align-items:center;justify-content:center}.p-tag-icon,.p-tag-value,.p-tag-icon.pi{line-height:1.5}.p-tag.p-tag-rounded{border-radius:10rem}\n"],encapsulation:2,changeDetection:0});class c{}c.\u0275fac=function(v){return new(v||c)},c.\u0275mod=n.oAB({type:c,declarations:[l],imports:[o.ez],exports:[l]}),c.\u0275inj=n.cJS({imports:[o.ez]})}}]);