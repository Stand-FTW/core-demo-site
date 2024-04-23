"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2353],{12353:(D,M,s)=>{s.r(M),s.d(M,{PasswordResetPageModule:()=>u});var e=s(70655),h=s(98274),o=s(36895),d=s(24006),v=s(48058),E=s(1236),m=s(92665),T=s(85226),t=s(39528);var _=s(50727),f=s(10805),O=s(86437),L=s(8601),x=s(98739);let r=class{constructor(l,g,y,I,P,b){this.formBuilder=l,this.passwordService=g,this.router=y,this.menu=I,this.themeService=P,this.toastService=b,this.stepIndex=0,this.subscriptions=new _.w0,this.form=this.formBuilder.group({codigo:[,[d.kI.required]],email:[,[d.kI.required,d.kI.email]],senha:[,[d.kI.required,d.kI.minLength(6)]]})}ngOnInit(){document.body.setAttribute("color-theme","light"),this.themeService.switchTheme("saga-blue"),this.steps=[{label:"Recupera\xe7\xe3o"},{label:"Reset"}]}ngOnDestroy(){this.subscriptions.unsubscribe(),this.stepIndex=0}ionViewWillEnter(){this.stepIndex=0,document.body.setAttribute("color-theme","light"),this.themeService.switchTheme("saga-blue"),this.menu.enable(!1)}goBack(){this.stepIndex=0,this.router.navigateByUrl("login")}setFocus(l){l.setFocus()}sendRequest(){const l=this.form.get("email").value,g=this.passwordService.requestReset(l).subscribe(y=>{this.stepIndex++});this.subscriptions.add(g)}doReset(){const l=this.form.get("codigo").value,g=this.form.get("senha").value,y=this.passwordService.doReset(l,g).subscribe(I=>{this.presentToast("success","Sucesso!","Senha alterada",x.m4.mediumDuration),this.goBack()});this.subscriptions.add(y)}isInputError(l){return!(!this.form.controls[l].dirty||!this.form.controls[l].errors)}disableBTN(){return!this.form.valid}presentToast(l,g,y,I){this.toastService.clear(),this.toastService.add({severity:l,summary:g,detail:y,life:I})}};r.ctorParameters=()=>[{type:d.QS},{type:O.C},{type:t.F0},{type:v._q},{type:L.f},{type:f.ez}],r=(0,e.gn)([(0,h.wA2)({selector:"app-password-reset",template:'<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot="start" (click)="goBack()">\n      <ion-button style="min-width: 70px;" size="large" color="primary" shape="round" fill="outline">\n        <ion-icon style="font-size:40px" name="arrow-undo-outline"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>\n      Recupera\xe7\xe3o de senha\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content appScrollTheme>\n\n  <ion-grid>\n\n\n    <div class="border">\n      <div class="limiter">\n\n        <form [formGroup]="form" (ngSubmit)="$event.preventDefault()">\n\n          <ng-container *ngIf="stepIndex == 0">\n            <ion-row>\n              <ion-col>\n                <ion-item style="margin-top: 5px;" color="light">\n                  <ion-input color="primary" (keyup.enter)="sendRequest()" formControlName="email" type="email"\n                    placeholder="Insira seu email"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <ion-button expand="block" fill="solid" [disabled]="!this.form.get(\'email\').valid"\n                  (click)="sendRequest()">Enviar\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ng-container>\n\n          <ng-container *ngIf="stepIndex == 1">\n            <ion-row>\n              <ion-col>\n                <ion-item style="margin-top: 5px;" color="light">\n                  <ion-input color="primary" (keyup.enter)="setFocus(pass)" formControlName="codigo"\n                  type="input" placeholder="Insira o c\xf3digo recebido em seu e-mail"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <ion-item color="light">\n                  <ion-input #pass color="primary"  formControlName="senha" type="password"\n                    placeholder="Insira sua nova senha"></ion-input>\n                </ion-item>\n                <p-message [style]="{\'margin-top\': \'3px\'}" severity="error" text="Obrigat\xf3rio, m\xednimo de 6 caracteres"\n                  *ngIf="isInputError(\'senha\')"></p-message>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <ion-button expand="block" fill="solid" [disabled]="disableBTN()" (click)="doReset()">Resetar\n                </ion-button>\n              </ion-col>\n            </ion-row>\n\n          </ng-container>\n\n        </form>\n      </div>\n    </div>\n  </ion-grid>\n\n\n</ion-content>',styles:[""]})],r);const p=[{path:"",component:r}];let i=class{};i=(0,e.gn)([(0,h.LVF)({imports:[t.Bz.forChild(p)],exports:[t.Bz]})],i);let u=class{};u=(0,e.gn)([(0,h.LVF)({imports:[o.ez,d.u5,d.UX,v.Pc,E.q,m.O,i,T.o],declarations:[r]})],u)},86437:(D,M,s)=>{s.d(M,{C:()=>v});var e=s(70655),h=s(80529),o=s(98274),d=s(99038);let v=class{constructor(m){this.http=m}requestReset(m){return this.http.post(`${d.Hz.baseURL}/auth/forgot`,{email:m},{responseType:"json"})}doReset(m,T){const t=(new h.LE).set("token",m);return this.http.post(`${d.Hz.baseURL}/auth/reset`,{password:T},{params:t})}change(m){return this.http.patch(`${d.Hz.baseURL}/password/change`,{senha:m})}};v.ctorParameters=()=>[{type:h.eN}],v=(0,e.gn)([(0,o.GSi)({providedIn:"root"})],v)},92665:(D,M,s)=>{s.d(M,{O:()=>c});var e=s(98274),h=s(36895);function o(n,_){if(1&n&&e._UZ(0,"span",6),2&n){const f=e.oxw(3);e.Q6J("innerHTML",f.text,e.oJD)}}function d(n,_){if(1&n&&(e.TgZ(0,"div"),e.YNc(1,o,1,1,"span",5),e.qZA()),2&n){const f=e.oxw(2);e.xp6(1),e.Q6J("ngIf",!f.escape)}}function v(n,_){if(1&n&&(e.TgZ(0,"span",8),e._uU(1),e.qZA()),2&n){const f=e.oxw(3);e.xp6(1),e.Oqu(f.text)}}function E(n,_){if(1&n&&e.YNc(0,v,2,1,"span",7),2&n){const f=e.oxw(2);e.Q6J("ngIf",f.escape)}}const m=function(n,_,f,O,L){return{"p-inline-message-info":n,"p-inline-message-warn":_,"p-inline-message-error":f,"p-inline-message-success":O,"p-inline-message-icon-only":L}};function T(n,_){if(1&n&&(e.TgZ(0,"div",1),e._UZ(1,"span",2),e.YNc(2,d,2,1,"div",3),e.YNc(3,E,1,1,"ng-template",null,4,e.W1O),e.qZA()),2&n){const f=e.MAs(4),O=e.oxw();e.Tol(O.styleClass),e.Q6J("ngStyle",O.style)("ngClass",e.qbA(7,m,"info"===O.severity,"warn"===O.severity,"error"===O.severity,"success"===O.severity,null==O.text)),e.xp6(1),e.Q6J("ngClass",O.icon),e.xp6(1),e.Q6J("ngIf",!O.escape)("ngIfElse",f)}}class t{constructor(){this.escape=!0}get icon(){let _=null;if(this.severity)switch(this.severity){case"success":_="pi pi-check";break;case"info":default:_="pi pi-info-circle";break;case"error":_="pi pi-times-circle";break;case"warn":_="pi pi-exclamation-triangle"}return _}}t.\u0275fac=function(_){return new(_||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["p-message"]],hostAttrs:[1,"p-element"],inputs:{severity:"severity",text:"text",escape:"escape",style:"style",styleClass:"styleClass"},decls:1,vars:1,consts:[["aria-live","polite","class","p-inline-message p-component p-inline-message",3,"ngStyle","class","ngClass",4,"ngIf"],["aria-live","polite",1,"p-inline-message","p-component","p-inline-message",3,"ngStyle","ngClass"],[1,"p-inline-message-icon",3,"ngClass"],[4,"ngIf","ngIfElse"],["escapeOut",""],["class","p-inline-message-text",3,"innerHTML",4,"ngIf"],[1,"p-inline-message-text",3,"innerHTML"],["class","p-inline-message-text",4,"ngIf"],[1,"p-inline-message-text"]],template:function(_,f){1&_&&e.YNc(0,T,5,13,"div",0),2&_&&e.Q6J("ngIf",f.severity)},dependencies:[h.mk,h.O5,h.PC],styles:[".p-inline-message{display:inline-flex;align-items:center;justify-content:center;vertical-align:top}.p-inline-message-icon-only .p-inline-message-text{visibility:hidden;width:0}.p-fluid .p-inline-message{display:flex}\n"],encapsulation:2,changeDetection:0});class c{}c.\u0275fac=function(_){return new(_||c)},c.\u0275mod=e.oAB({type:c,declarations:[t],imports:[h.ez],exports:[t]}),c.\u0275inj=e.cJS({imports:[h.ez]})},1236:(D,M,s)=>{s.d(M,{q:()=>x});var e=s(98274),h=s(36895),o=s(39528),d=s(3608);function v(r,p){if(1&r&&(e.TgZ(0,"span",11),e._uU(1),e.qZA()),2&r){const i=e.oxw(2).$implicit;e.xp6(1),e.Oqu(i.label)}}function E(r,p){if(1&r&&e._UZ(0,"span",12),2&r){const i=e.oxw(2).$implicit;e.Q6J("innerHTML",i.label,e.oJD)}}const m=function(){return{exact:!1}};function T(r,p){if(1&r){const i=e.EpF();e.TgZ(0,"a",7),e.NdJ("click",function(a){e.CHM(i);const l=e.oxw(),g=l.$implicit,y=l.index,I=e.oxw();return e.KtG(I.itemClick(a,g,y))})("keydown.enter",function(a){e.CHM(i);const l=e.oxw(),g=l.$implicit,y=l.index,I=e.oxw();return e.KtG(I.itemClick(a,g,y))}),e.TgZ(1,"span",8),e._uU(2),e.qZA(),e.YNc(3,v,2,1,"span",9),e.YNc(4,E,1,1,"ng-template",null,10,e.W1O),e.qZA()}if(2&r){const i=e.MAs(5),u=e.oxw(),a=u.$implicit,l=u.index,g=e.oxw();e.Q6J("routerLink",a.routerLink)("queryParams",a.queryParams)("routerLinkActive","p-menuitem-link-active")("routerLinkActiveOptions",a.routerLinkActiveOptions||e.DdM(16,m))("target",a.target)("fragment",a.fragment)("queryParamsHandling",a.queryParamsHandling)("preserveFragment",a.preserveFragment)("skipLocationChange",a.skipLocationChange)("replaceUrl",a.replaceUrl)("state",a.state),e.uIk("id",a.id)("tabindex",a.disabled||g.readonly?null:a.tabindex?a.tabindex:"0"),e.xp6(2),e.Oqu(l+1),e.xp6(1),e.Q6J("ngIf",!1!==a.escape)("ngIfElse",i)}}function t(r,p){if(1&r&&(e.TgZ(0,"span",11),e._uU(1),e.qZA()),2&r){const i=e.oxw(2).$implicit;e.xp6(1),e.Oqu(i.label)}}function c(r,p){if(1&r&&e._UZ(0,"span",12),2&r){const i=e.oxw(2).$implicit;e.Q6J("innerHTML",i.label,e.oJD)}}function n(r,p){if(1&r){const i=e.EpF();e.TgZ(0,"a",13),e.NdJ("click",function(a){e.CHM(i);const l=e.oxw(),g=l.$implicit,y=l.index,I=e.oxw();return e.KtG(I.itemClick(a,g,y))})("keydown.enter",function(a){e.CHM(i);const l=e.oxw(),g=l.$implicit,y=l.index,I=e.oxw();return e.KtG(I.itemClick(a,g,y))}),e.TgZ(1,"span",8),e._uU(2),e.qZA(),e.YNc(3,t,2,1,"span",9),e.YNc(4,c,1,1,"ng-template",null,14,e.W1O),e.qZA()}if(2&r){const i=e.MAs(5),u=e.oxw(),a=u.$implicit,l=u.index,g=e.oxw();e.Q6J("target",a.target),e.uIk("href",a.url,e.LSH)("id",a.id)("tabindex",a.disabled||l!==g.activeIndex&&g.readonly?null:a.tabindex?a.tabindex:"0"),e.xp6(2),e.Oqu(l+1),e.xp6(1),e.Q6J("ngIf",!1!==a.escape)("ngIfElse",i)}}const _=function(r,p){return{"p-highlight p-steps-current":r,"p-disabled":p}};function f(r,p){if(1&r&&(e.TgZ(0,"li",3,4),e.YNc(2,T,6,17,"a",5),e.YNc(3,n,6,7,"ng-template",null,6,e.W1O),e.qZA()),2&r){const i=p.$implicit,u=p.index,a=e.MAs(4),l=e.oxw();e.Tol(i.styleClass),e.Q6J("ngStyle",i.style)("tooltipOptions",i.tooltipOptions)("ngClass",e.WLB(9,_,l.isActive(i,u),i.disabled||l.readonly&&!l.isActive(i,u))),e.uIk("aria-selected",u===l.activeIndex)("aria-expanded",u===l.activeIndex),e.xp6(2),e.Q6J("ngIf",l.isClickableRouterLink(i))("ngIfElse",a)}}const O=function(r){return{"p-steps p-component":!0,"p-readonly":r}};class L{constructor(p,i,u){this.router=p,this.route=i,this.cd=u,this.activeIndex=0,this.readonly=!0,this.activeIndexChange=new e.vpe}ngOnInit(){this.subscription=this.router.events.subscribe(()=>this.cd.markForCheck())}itemClick(p,i,u){this.readonly||i.disabled?p.preventDefault():(this.activeIndexChange.emit(u),!i.url&&!i.routerLink&&p.preventDefault(),i.command&&i.command({originalEvent:p,item:i,index:u}))}isClickableRouterLink(p){return p.routerLink&&!this.readonly&&!p.disabled}isActive(p,i){if(p.routerLink){let u=Array.isArray(p.routerLink)?p.routerLink:[p.routerLink];return this.router.isActive(this.router.createUrlTree(u,{relativeTo:this.route}).toString(),!1)}return i===this.activeIndex}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}}L.\u0275fac=function(p){return new(p||L)(e.Y36(o.F0),e.Y36(o.gz),e.Y36(e.sBO))},L.\u0275cmp=e.Xpm({type:L,selectors:[["p-steps"]],hostAttrs:[1,"p-element"],inputs:{activeIndex:"activeIndex",model:"model",readonly:"readonly",style:"style",styleClass:"styleClass"},outputs:{activeIndexChange:"activeIndexChange"},decls:3,vars:7,consts:[[3,"ngClass","ngStyle"],["role","tablist"],["class","p-steps-item","role","tab","pTooltip","",3,"ngStyle","class","tooltipOptions","ngClass",4,"ngFor","ngForOf"],["role","tab","pTooltip","",1,"p-steps-item",3,"ngStyle","tooltipOptions","ngClass"],["menuitem",""],["role","presentation","class","p-menuitem-link",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","click","keydown.enter",4,"ngIf","ngIfElse"],["elseBlock",""],["role","presentation",1,"p-menuitem-link",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","click","keydown.enter"],[1,"p-steps-number"],["class","p-steps-title",4,"ngIf","ngIfElse"],["htmlLabel",""],[1,"p-steps-title"],[1,"p-steps-title",3,"innerHTML"],["role","presentation",1,"p-menuitem-link",3,"target","click","keydown.enter"],["htmlRouteLabel",""]],template:function(p,i){1&p&&(e.TgZ(0,"div",0)(1,"ul",1),e.YNc(2,f,5,12,"li",2),e.qZA()()),2&p&&(e.Tol(i.styleClass),e.Q6J("ngClass",e.VKq(5,O,i.readonly))("ngStyle",i.style),e.xp6(2),e.Q6J("ngForOf",i.model))},dependencies:[h.mk,h.sg,h.O5,h.PC,o.yS,o.Od,d.u],styles:[".p-steps{position:relative}.p-steps ul{padding:0;margin:0;list-style-type:none;display:flex}.p-steps-item{position:relative;display:flex;justify-content:center;flex:1 1 auto}.p-steps-item .p-menuitem-link{display:inline-flex;flex-direction:column;align-items:center;overflow:hidden;text-decoration:none}.p-steps.p-steps-readonly .p-steps-item{cursor:auto}.p-steps-item.p-steps-current .p-menuitem-link{cursor:default}.p-steps-title{white-space:nowrap}.p-steps-number{display:flex;align-items:center;justify-content:center}.p-steps-title{display:block}\n"],encapsulation:2,changeDetection:0});class x{}x.\u0275fac=function(p){return new(p||x)},x.\u0275mod=e.oAB({type:x,declarations:[L],imports:[h.ez,o.Bz,d.z],exports:[L,o.Bz,d.z]}),x.\u0275inj=e.cJS({imports:[h.ez,o.Bz,d.z,o.Bz,d.z]})},3608:(D,M,s)=>{s.d(M,{u:()=>E,z:()=>m});var e=s(98274),h=s(36895),o=s(19592),d=s(60982),v=s(10805);class E{constructor(t,c,n){this.el=t,this.zone=c,this.config=n,this.escape=!0,this.fitContent=!0,this._tooltipOptions={tooltipPosition:"right",tooltipEvent:"hover",appendTo:"body",tooltipZIndex:"auto",escape:!0,positionTop:0,positionLeft:0}}get disabled(){return this._disabled}set disabled(t){this._disabled=t,this.deactivate()}ngAfterViewInit(){this.zone.runOutsideAngular(()=>{if("hover"===this.getOption("tooltipEvent"))this.mouseEnterListener=this.onMouseEnter.bind(this),this.mouseLeaveListener=this.onMouseLeave.bind(this),this.clickListener=this.onClick.bind(this),this.el.nativeElement.addEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.addEventListener("mouseleave",this.mouseLeaveListener),this.el.nativeElement.addEventListener("click",this.clickListener);else if("focus"===this.getOption("tooltipEvent")){this.focusListener=this.onFocus.bind(this),this.blurListener=this.onBlur.bind(this);let t=this.getTarget(this.el.nativeElement);t.addEventListener("focus",this.focusListener),t.addEventListener("blur",this.blurListener)}})}ngOnChanges(t){t.tooltipPosition&&this.setOption({tooltipPosition:t.tooltipPosition.currentValue}),t.tooltipEvent&&this.setOption({tooltipEvent:t.tooltipEvent.currentValue}),t.appendTo&&this.setOption({appendTo:t.appendTo.currentValue}),t.positionStyle&&this.setOption({positionStyle:t.positionStyle.currentValue}),t.tooltipStyleClass&&this.setOption({tooltipStyleClass:t.tooltipStyleClass.currentValue}),t.tooltipZIndex&&this.setOption({tooltipZIndex:t.tooltipZIndex.currentValue}),t.escape&&this.setOption({escape:t.escape.currentValue}),t.showDelay&&this.setOption({showDelay:t.showDelay.currentValue}),t.hideDelay&&this.setOption({hideDelay:t.hideDelay.currentValue}),t.life&&this.setOption({life:t.life.currentValue}),t.positionTop&&this.setOption({positionTop:t.positionTop.currentValue}),t.positionLeft&&this.setOption({positionLeft:t.positionLeft.currentValue}),t.disabled&&this.setOption({disabled:t.disabled.currentValue}),t.text&&(this.setOption({tooltipLabel:t.text.currentValue}),this.active&&(t.text.currentValue?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide())),t.tooltipOptions&&(this._tooltipOptions={...this._tooltipOptions,...t.tooltipOptions.currentValue},this.deactivate(),this.active&&(this.getOption("tooltipLabel")?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide()))}onMouseEnter(t){!this.container&&!this.showTimeout&&this.activate()}onMouseLeave(t){this.deactivate()}onFocus(t){this.activate()}onBlur(t){this.deactivate()}onClick(t){this.deactivate()}activate(){if(this.active=!0,this.clearHideTimeout(),this.getOption("showDelay")?this.showTimeout=setTimeout(()=>{this.show()},this.getOption("showDelay")):this.show(),this.getOption("life")){let t=this.getOption("showDelay")?this.getOption("life")+this.getOption("showDelay"):this.getOption("life");this.hideTimeout=setTimeout(()=>{this.hide()},t)}}deactivate(){this.active=!1,this.clearShowTimeout(),this.getOption("hideDelay")?(this.clearHideTimeout(),this.hideTimeout=setTimeout(()=>{this.hide()},this.getOption("hideDelay"))):this.hide()}create(){this.container&&(this.clearHideTimeout(),this.remove()),this.container=document.createElement("div");let t=document.createElement("div");t.className="p-tooltip-arrow",this.container.appendChild(t),this.tooltipText=document.createElement("div"),this.tooltipText.className="p-tooltip-text",this.updateText(),this.getOption("positionStyle")&&(this.container.style.position=this.getOption("positionStyle")),this.container.appendChild(this.tooltipText),"body"===this.getOption("appendTo")?document.body.appendChild(this.container):"target"===this.getOption("appendTo")?o.p.appendChild(this.container,this.el.nativeElement):o.p.appendChild(this.container,this.getOption("appendTo")),this.container.style.display="inline-block",this.fitContent&&(this.container.style.width="fit-content")}show(){!this.getOption("tooltipLabel")||this.getOption("disabled")||(this.create(),this.align(),o.p.fadeIn(this.container,250),"auto"===this.getOption("tooltipZIndex")?d.P9.set("tooltip",this.container,this.config.zIndex.tooltip):this.container.style.zIndex=this.getOption("tooltipZIndex"),this.bindDocumentResizeListener(),this.bindScrollListener())}hide(){"auto"===this.getOption("tooltipZIndex")&&d.P9.clear(this.container),this.remove()}updateText(){this.getOption("escape")?(this.tooltipText.innerHTML="",this.tooltipText.appendChild(document.createTextNode(this.getOption("tooltipLabel")))):this.tooltipText.innerHTML=this.getOption("tooltipLabel")}align(){switch(this.getOption("tooltipPosition")){case"top":this.alignTop(),this.isOutOfBounds()&&(this.alignBottom(),this.isOutOfBounds()&&(this.alignRight(),this.isOutOfBounds()&&this.alignLeft()));break;case"bottom":this.alignBottom(),this.isOutOfBounds()&&(this.alignTop(),this.isOutOfBounds()&&(this.alignRight(),this.isOutOfBounds()&&this.alignLeft()));break;case"left":this.alignLeft(),this.isOutOfBounds()&&(this.alignRight(),this.isOutOfBounds()&&(this.alignTop(),this.isOutOfBounds()&&this.alignBottom()));break;case"right":this.alignRight(),this.isOutOfBounds()&&(this.alignLeft(),this.isOutOfBounds()&&(this.alignTop(),this.isOutOfBounds()&&this.alignBottom()))}}getHostOffset(){if("body"===this.getOption("appendTo")||"target"===this.getOption("appendTo")){let t=this.el.nativeElement.getBoundingClientRect();return{left:t.left+o.p.getWindowScrollLeft(),top:t.top+o.p.getWindowScrollTop()}}return{left:0,top:0}}alignRight(){this.preAlign("right");let t=this.getHostOffset(),c=t.left+o.p.getOuterWidth(this.el.nativeElement),n=t.top+(o.p.getOuterHeight(this.el.nativeElement)-o.p.getOuterHeight(this.container))/2;this.container.style.left=c+this.getOption("positionLeft")+"px",this.container.style.top=n+this.getOption("positionTop")+"px"}alignLeft(){this.preAlign("left");let t=this.getHostOffset(),c=t.left-o.p.getOuterWidth(this.container),n=t.top+(o.p.getOuterHeight(this.el.nativeElement)-o.p.getOuterHeight(this.container))/2;this.container.style.left=c+this.getOption("positionLeft")+"px",this.container.style.top=n+this.getOption("positionTop")+"px"}alignTop(){this.preAlign("top");let t=this.getHostOffset(),c=t.left+(o.p.getOuterWidth(this.el.nativeElement)-o.p.getOuterWidth(this.container))/2,n=t.top-o.p.getOuterHeight(this.container);this.container.style.left=c+this.getOption("positionLeft")+"px",this.container.style.top=n+this.getOption("positionTop")+"px"}alignBottom(){this.preAlign("bottom");let t=this.getHostOffset(),c=t.left+(o.p.getOuterWidth(this.el.nativeElement)-o.p.getOuterWidth(this.container))/2,n=t.top+o.p.getOuterHeight(this.el.nativeElement);this.container.style.left=c+this.getOption("positionLeft")+"px",this.container.style.top=n+this.getOption("positionTop")+"px"}setOption(t){this._tooltipOptions={...this._tooltipOptions,...t}}getOption(t){return this._tooltipOptions[t]}getTarget(t){return o.p.hasClass(t,"p-inputwrapper")?o.p.findSingle(t,"input"):t}preAlign(t){this.container.style.left="-999px",this.container.style.top="-999px";let c="p-tooltip p-component p-tooltip-"+t;this.container.className=this.getOption("tooltipStyleClass")?c+" "+this.getOption("tooltipStyleClass"):c}isOutOfBounds(){let t=this.container.getBoundingClientRect(),c=t.top,n=t.left,_=o.p.getOuterWidth(this.container),f=o.p.getOuterHeight(this.container),O=o.p.getViewport();return n+_>O.width||n<0||c<0||c+f>O.height}onWindowResize(t){this.hide()}bindDocumentResizeListener(){this.zone.runOutsideAngular(()=>{this.resizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.resizeListener)})}unbindDocumentResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new o.V(this.el.nativeElement,()=>{this.container&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unbindEvents(){if("hover"===this.getOption("tooltipEvent"))this.el.nativeElement.removeEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.removeEventListener("mouseleave",this.mouseLeaveListener),this.el.nativeElement.removeEventListener("click",this.clickListener);else if("focus"===this.getOption("tooltipEvent")){let t=this.getTarget(this.el.nativeElement);t.removeEventListener("focus",this.focusListener),t.removeEventListener("blur",this.blurListener)}this.unbindDocumentResizeListener()}remove(){this.container&&this.container.parentElement&&("body"===this.getOption("appendTo")?document.body.removeChild(this.container):"target"===this.getOption("appendTo")?this.el.nativeElement.removeChild(this.container):o.p.removeChild(this.container,this.getOption("appendTo"))),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.clearTimeouts(),this.container=null,this.scrollHandler=null}clearShowTimeout(){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=null)}clearHideTimeout(){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=null)}clearTimeouts(){this.clearShowTimeout(),this.clearHideTimeout()}ngOnDestroy(){this.unbindEvents(),this.container&&d.P9.clear(this.container),this.remove(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null)}}E.\u0275fac=function(t){return new(t||E)(e.Y36(e.SBq),e.Y36(e.R0b),e.Y36(v.b4))},E.\u0275dir=e.lG2({type:E,selectors:[["","pTooltip",""]],hostAttrs:[1,"p-element"],inputs:{tooltipPosition:"tooltipPosition",tooltipEvent:"tooltipEvent",appendTo:"appendTo",positionStyle:"positionStyle",tooltipStyleClass:"tooltipStyleClass",tooltipZIndex:"tooltipZIndex",escape:"escape",showDelay:"showDelay",hideDelay:"hideDelay",life:"life",positionTop:"positionTop",positionLeft:"positionLeft",fitContent:"fitContent",text:["pTooltip","text"],disabled:["tooltipDisabled","disabled"],tooltipOptions:"tooltipOptions"},features:[e.TTD]});class m{}m.\u0275fac=function(t){return new(t||m)},m.\u0275mod=e.oAB({type:m,declarations:[E],imports:[h.ez],exports:[E]}),m.\u0275inj=e.cJS({imports:[h.ez]})}}]);