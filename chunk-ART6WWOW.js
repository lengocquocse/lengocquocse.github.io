import{K as a,M as f,O as p,Qa as V,R as r,Ra as D,W as g,Wa as b,a as c,b as h,ca as m,ea as o,ga as l,ka as u,kb as A,mb as d,ua as _,wa as v,xa as y,ya as C}from"./chunk-LTUZRBPQ.js";var M=new p("");var E={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Y=h(c({},E),{"[class.ng-submitted]":"isSubmitted"});var F=["*"],w=(()=>{class n{config;afterChange=o();beforeChange=o();breakpoint=o();destroy=o();init=o();$instance;currentIndex=0;slides=[];initialized=!1;_removedSlides=[];_addedSlides=[];el=r(l);zone=r(m);isServer=d(r(u));ngOnDestroy(){this.unslick()}ngAfterViewInit(){this.ngAfterViewChecked()}ngAfterViewChecked(){if(!this.isServer&&(this._addedSlides.length>0||this._removedSlides.length>0)){let t=this.slides.length-this._removedSlides.length+this._addedSlides.length;this.initialized?t===0?this.unslick():(this._addedSlides.forEach(e=>{this.slides.push(e),this.$instance.slick("slickAdd",e.el.nativeElement)}),this._addedSlides=[],this._removedSlides.forEach(e=>{let i=this.slides.indexOf(e);this.slides=this.slides.filter(s=>s!==e),this.$instance.slick("slickRemove",i)}),this._removedSlides=[]):t>0&&this.initSlick()}}initSlick(){this.slides=this._addedSlides,this._addedSlides=[],this._removedSlides=[],this.$instance=jQuery(this.el.nativeElement),this.$instance.on("init",(t,e)=>{this.zone.run(()=>{this.init.emit({event:t,slick:e})})}),this.$instance.slick(this.config),this.zone.run(()=>{this.initialized=!0,this.currentIndex=this.config?.initialSlide||0}),this.$instance.on("afterChange",(t,e,i)=>{this.zone.run(()=>{this.afterChange.emit({event:t,slick:e,currentSlide:i,first:i===0,last:e.$slides.length===i+e.options.slidesToScroll}),this.currentIndex=i})}),this.$instance.on("beforeChange",(t,e,i,s)=>{this.zone.run(()=>{this.beforeChange.emit({event:t,slick:e,currentSlide:i,nextSlide:s}),this.currentIndex=s})}),this.$instance.on("breakpoint",(t,e,i)=>{this.zone.run(()=>{this.breakpoint.emit({event:t,slick:e,breakpoint:i})})}),this.$instance.on("destroy",(t,e)=>{this.zone.run(()=>{this.destroy.emit({event:t,slick:e}),this.initialized=!1})})}addSlide(t){this._addedSlides.push(t)}removeSlide(t){this._removedSlides.push(t)}slickGoTo(t){this.$instance.slick("slickGoTo",t)}slickNext(){this.$instance.slick("slickNext")}slickPrev(){this.$instance.slick("slickPrev")}slickPause(){this.$instance.slick("slickPause")}slickPlay(){this.$instance.slick("slickPlay")}unslick(){this.$instance&&(this.$instance.slick("unslick"),this.$instance=void 0),this.initialized=!1}ngOnChanges(t){if(this.initialized){let e=t.config;if(e.previousValue!==e.currentValue&&e.currentValue!==void 0){let i=e.currentValue.refresh,s=Object.assign({},e.currentValue);delete s.refresh,this.$instance.slick("slickSetOption",s,i)}}}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=v({type:n,selectors:[["ngx-slick-carousel"]],inputs:{config:"config"},outputs:{afterChange:"afterChange",beforeChange:"beforeChange",breakpoint:"breakpoint",destroy:"destroy",init:"init"},exportAs:["slick-carousel"],standalone:!1,features:[b([{provide:M,useExisting:a(()=>n),multi:!0}]),g],ngContentSelectors:F,decls:1,vars:0,template:function(e,i){e&1&&(V(),D(0))},encapsulation:2})}return n})(),ae=(()=>{class n{carousel=r(w,{host:!0});renderer=r(_);el=r(l);isServer=d(r(u));ngOnInit(){this.carousel.addSlide(this),this.isServer&&this.carousel.slides.length>0&&this.renderer.setStyle(this.el,"display","none")}ngOnDestroy(){this.carousel.removeSlide(this)}static \u0275fac=function(e){return new(e||n)};static \u0275dir=C({type:n,selectors:[["","ngxSlickItem",""]],standalone:!1})}return n})(),le=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=y({type:n});static \u0275inj=f({imports:[A]})}return n})();export{w as a,ae as b,le as c};
