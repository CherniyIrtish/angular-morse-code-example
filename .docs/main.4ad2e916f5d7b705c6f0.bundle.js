webpackJsonp([3],{"/U0V":function(n,l,e){"use strict";function t(n){return s._34(0,[(n()(),s._15(0,null,null,5,"div",[["class","morse-frame"]],null,null,null,null,null)),s._13(278528,null,0,r.h,[s.y,s.z,s.n,s.M],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(n()(),s._33(null,["\n  "])),(n()(),s._15(0,null,null,1,"div",[["class","inner-frame"]],[[8,"title",0]],null,null,null,null)),(n()(),s._33(null,["",""])),(n()(),s._33(null,["\n"])),(n()(),s._33(null,["\n"]))],function(n,l){var e=l.component;n(l,1,0,"morse-frame","size-"+e.size+" type-"+e.signalType)},function(n,l){var e=l.component;n(l,3,0,s._18(1,"",e.signal,"")),n(l,4,0,e.signal)})}function o(n){return s._34(0,[(n()(),s._15(0,null,null,1,"morse-frame",[],null,null,null,t,c)),s._13(573440,null,0,i.a,[],null,null)],null,null)}Object.defineProperty(l,"__esModule",{value:!0});var u=['.morse-frame[_ngcontent-%COMP%]{width:auto;display:inline-block;font-size:16px;font-weight:700}.morse-frame[_ngcontent-%COMP%]   .inner-frame[_ngcontent-%COMP%]{line-height:24px;border-radius:3px;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-left:5px;padding-right:5px;border-width:3px;border-color:#dee2e6;border-style:solid}.morse-frame.size-auto[_ngcontent-%COMP%]{width:auto}.morse-frame.size-short[_ngcontent-%COMP%]{width:60px}.morse-frame.size-tiny[_ngcontent-%COMP%]{width:30px}.morse-frame.type-timestamp[_ngcontent-%COMP%]{font-size:11px}.morse-frame.type-timestamp[_ngcontent-%COMP%]   .inner-frame[_ngcontent-%COMP%]{border-style:dotted}.morse-frame.type-timediff[_ngcontent-%COMP%]{font-size:14px}.morse-frame.type-timediff[_ngcontent-%COMP%]   .inner-frame[_ngcontent-%COMP%]{border-style:dashed}.morse-frame.type-timediff[_ngcontent-%COMP%]   .inner-frame[title^="-"][_ngcontent-%COMP%]{color:#dc3545}.morse-frame.type-character[_ngcontent-%COMP%]   .inner-frame[title="."][_ngcontent-%COMP%]{border-color:#add8e6}.morse-frame.type-character[_ngcontent-%COMP%]   .inner-frame[title="-"][_ngcontent-%COMP%]{border-color:#6495ed}.morse-frame.type-character[_ngcontent-%COMP%]   .inner-frame[title="+"][_ngcontent-%COMP%]{border-color:#f8f9fa}.morse-frame.type-character[_ngcontent-%COMP%]   .inner-frame[title="*"][_ngcontent-%COMP%]{border-color:#dee2e6}'];e.d(l,"a",function(){return c}),l.b=t;var s=e("/oeL"),r=e("qbdv"),i=e("49Nx"),a=[u],c=s._12({encapsulation:0,styles:a,data:{}});s._10("morse-frame",i.a,o,{size:"size",signal:"signal",signalType:"signalType"},{},[])},0:function(n,l,e){n.exports=e("cDNt")},"3Xxe":function(n,l,e){"use strict";e.d(l,"b",function(){return o}),e.d(l,"a",function(){return u}),e.d(l,"c",function(){return s});var t=e("/oeL"),o=new t.v("morse-code time ranges"),u=new t.v("morse-code characters"),s=new t.v("morse-code translations")},"49Nx":function(n,l,e){"use strict";e.d(l,"a",function(){return t});var t=function(){function n(){this.validSizes=["default","short","tiny"],this.size="default",this.validSignalTypes=["default","timestamp","timediff","character","symbol"],this.signalType="default"}return n.prototype.ngOnChanges=function(n){"size"in n&&(this.size=this.isValidSize(n.size.currentValue)?n.size.currentValue:this.validSizes[0]),"signalType"in n&&(this.signalType=this.isValidSignalType(n.signalType.currentValue)?n.signalType.currentValue:this.validSignalTypes[0])},n.prototype.isValidSize=function(n){return-1!==this.validSizes.indexOf(n)},n.prototype.isValidSignalType=function(n){return-1!==this.validSignalTypes.indexOf(n)},n}()},"7W6T":function(n,l,e){"use strict";e.d(l,"a",function(){return o});var t=e("lDeE"),o=function(){function n(n){this.ms=n,this.startEvents$=n.startEvents$,this.stopEvents$=n.stopEvents$,this.morseChar$=n.morseChar$,this.morseSymbol$=n.morseSymbol$,this.morseLetter$=n.morseLetter$}return n.prototype.sendStartSignal=function(){this.ms.sendStartTime(Date.now())},n.prototype.sendStopSignal=function(){this.ms.sendStopTime(Date.now())},n.prototype.resetAll=function(){this.morseCodeDisplaysQueryList.forEach(function(n){n.reset()})},n.ctorParameters=function(){return[{type:t.a}]},n}()},BhIu:function(n,l,e){"use strict";e.d(l,"a",function(){return u});var t=e("bKpL"),o=(e.n(t),e("rlar")),u=(e.n(o),function(){function n(){this.onDestroy$=new o.Subject,this.size="default",this.signalType="default",this.signals=[],this.offset=0}return n.prototype.ngOnChanges=function(n){var l=this;"signal"in n&&(this.signalSubscription&&(this.signalSubscription.unsubscribe(),this.signalSubscription=void 0),n.signal.currentValue instanceof t.Observable&&(this.signalSubscription=n.signal.currentValue.takeUntil(this.onDestroy$).subscribe(function(n){l.signals.push(n)},console.log)))},n.prototype.ngAfterViewChecked=function(){this.streamElem.nativeElement.scrollLeft=this.streamElem.nativeElement.scrollWidth},n.prototype.ngOnDestroy=function(){this.onDestroy$.next(!0)},n.prototype.reset=function(){this.signals=[]},n}())},GPSL:function(n,l,e){"use strict";e.d(l,"a",function(){return o});var t=e("7W6T"),o=(t.a,function(){function n(){}return n}())},HM0j:function(n,l,e){"use strict";e.d(l,"a",function(){return u});var t=e("/oeL"),o=e("SDgR"),u=(e.n(o),function(){function n(){this.isMuted=!0,this.isMouseDown=!1,this.mouseDownChange=new t.p,this.mouseUpChange=new t.p}return n.prototype.ngAfterViewInit=function(){this.initBeepSound()},n.prototype.ngOnDestroy=function(){},n.prototype.initBeepSound=function(){var n=this;this.beepSoundElem=this.beepSound.nativeElement,this.beepSoundElem.addEventListener("timeupdate",function(){console.log("currentTime",n.beepSoundElem.currentTime),console.log("duration",n.beepSoundElem.duration),n.isMouseDown&&!n.isMuted&&n.beepSoundElem.currentTime>n.beepSoundElem.duration-.42&&(n.beepSoundElem.currentTime=0,n.beepSoundElem.play())},!1)},n.prototype.onMouseDown=function(){this.isMouseDown=!0,this.mouseDownChange.next(),this.isMuted||this.beepSoundElem.play()},n.prototype.onMouseLeave=function(){this.isMouseDown&&this.onMouseUp()},n.prototype.onMouseUp=function(){this.isMouseDown&&(this.isMouseDown=!1,this.mouseUpChange.next(),this.beepSoundElem.paused||(this.beepSoundElem.pause(),this.beepSoundElem.currentTime=0))},n.ctorParameters=function(){return[]},n}())},SDgR:function(n,l){function e(){this.is={ff:Boolean(!(null==window.mozInnerScreenX)&&/firefox/.test(navigator.userAgent.toLowerCase())),ie:Boolean(document.all&&!window.opera),opera:Boolean(window.opera),chrome:Boolean(window.chrome),safari:Boolean(!window.chrome&&/safari/.test(navigator.userAgent.toLowerCase())&&window.getComputedStyle&&!window.globalStorage&&!window.opera)},console.debug("ff: "+this.is.ff),console.debug("ie: "+this.is.ie),console.debug("opera: "+this.is.opera),console.debug("chrome: "+this.is.chrome),console.debug("safari: "+this.is.safari),this._total=0,this._load=0,this.cb_loaded,this.cb_loaded_flag=new Boolean,this.timeout,this.playDelay=-30,this.stopDelay=30,this.is.chrome&&(this.playDelay=-25),this.is.chrome&&(this.stopDelay=25),this.is.ff&&(this.playDelay=-25),this.is.ff&&(this.stopDelay=85),this.is.opera&&(this.playDelay=5),this.is.opera&&(this.stopDelay=0),console.debug(this.playDelay+", "+this.stopDelay),this.next=1,this.audios=new Array,this.actual=new Array,this.dropOld=new Boolean,this.old,this._volume=1;var n=this;this._eventCanplaythrough=function(l){0==l&&(l=!0,++n._load==n._total&&(n.loaded=!0,1==n.cb_loaded_flag&&(n.cb_loaded(),n.cb_loaded_flag=!1)))},this._eventPlaying=function(l){setTimeout(function(){l.pause();try{l.currentTime=0}catch(n){console.debug(n.message)}},n.stopDelay),1==n.dropOld&&(setTimeout(function(){if(0==n.old.paused){n.old.pause();try{n.old.currentTime=0}catch(n){console.debug(n.message)}}},n.stopDelay),n.dropOld=!1)},this._eventEnded=function(n){n.volume=this._volume},this.doLoop=function(){var n=1==this.next?"_1":"_2",l=1==this.next?"_2":"_1",e=this;this.timeout=setTimeout(function(){e.doLoop()},this.actual._length+this.playDelay),this.is.opera&&this.actual[l].pause(),this.actual[n].play(),this.next*=-1},this.isLoaded=function(){return Boolean(this._load==this._total)}}e.prototype.start=function(n){""!=n&&(this.actual=this.audios[n]),this.doLoop()},e.prototype.volume=function(n){return void 0!==n&&(this.actual._1.volume=n,this.actual._2.volume=n,this._volume=n),n},e.prototype.stop=function(){clearTimeout(this.timeout),this.actual._1.currentTime=0,this.actual._1.pause(),this.actual._2.currentTime=0,this.actual._2.pause()},e.prototype.callback=function(n){this.cb_loaded=n,1==this.isLoaded()?n():this.cb_loaded_flag=!0},e.prototype.update=function(n,l){var e=1==this.next?"_2":"_1";this.old=this.actual[e],this.actual=this.audios[n],0==l&&(0==this.old.paused&&(this.dropOld=!0,this.is.opera&&this.old.pause()),clearTimeout(this.timeout),this.doLoop())},e.prototype.addUri=function(n,l,e){this.audios[e]=new Array,this.audios[e]._length=l;var t=this;this.audios[e]._1_isLoaded=new Boolean,this.audios[e]._2_isLoaded=new Boolean,this.audios[e]._1=new Audio(n),this.audios[e]._2=new Audio(n),this._total++,this.audios[e]._1.addEventListener("canplaythrough",function(){t._eventCanplaythrough(t.audios[e]._1_isLoaded)}),this.audios[e]._2.addEventListener("canplaythrough",function(){t._eventCanplaythrough(t.audios[e]._2_isLoaded)}),this.audios[e]._1.addEventListener("playing",function(){t._eventPlaying(t.audios[e]._2)}),this.audios[e]._2.addEventListener("playing",function(){t._eventPlaying(t.audios[e]._1)}),this.audios[e]._1.addEventListener("ended",function(){t._eventEnded(t.audios[e]._1)}),this.audios[e]._2.addEventListener("ended",function(){t._eventEnded(t.audios[e]._2)}),this.audios[e]._1.load(),this.audios[e]._2.load(),this.audios[e]._1.volume=this._volume,this.audios[e]._2.volume=this._volume}},T2Au:function(n,l,e){"use strict";e.d(l,"a",function(){return s});var t=e("49Nx"),o=e("BhIu"),u=e("HM0j"),s=(t.a,u.a,o.a,function(){function n(){}return n}())},cDNt:function(n,l,e){"use strict";function t(n){return d._34(0,[(n()(),d._15(0,null,null,9,"li",[],null,null,null,null,null)),(n()(),d._33(null,["\n          "])),(n()(),d._15(0,null,null,2,"morse-frame",[],null,null,null,_.b,_.a)),d._13(573440,null,0,h.a,[],{size:[0,"size"],signal:[1,"signal"],signalType:[2,"signalType"]},null),(n()(),d._33(null,["\n          "])),(n()(),d._33(null,["\n          "])),(n()(),d._15(0,null,null,2,"morse-frame",[],null,null,null,_.b,_.a)),d._13(573440,null,0,h.a,[],{size:[0,"size"],signal:[1,"signal"],signalType:[2,"signalType"]},null),(n()(),d._33(null,["\n          "])),(n()(),d._33(null,["\n        "]))],function(n,l){n(l,3,0,"short",l.context.$implicit.char,"character");n(l,7,0,"short",l.context.$implicit.symbol,"symbol")},null)}function o(n){return d._34(0,[(n()(),d._15(0,null,null,74,"div",[["class","container-fluid"],["id","main-container"]],null,null,null,null,null)),(n()(),d._33(null,["\n  "])),(n()(),d._15(0,null,null,50,"nav",[["class","navbar navbar-expand-md navbar-dark fixed-top bg-dark"],["id","main-menu"]],null,null,null,null,null)),(n()(),d._33(null,["\n    "])),(n()(),d._15(0,null,null,1,"a",[["class","navbar-brand"],["href","#"]],null,null,null,null,null)),(n()(),d._33(null,["MorseCodeDecoder-Professional"])),(n()(),d._33(null,["\n    "])),(n()(),d._15(0,null,null,3,"button",[["aria-controls","mainNavbar"],["aria-expanded","false"],["aria-label","Toggle navigation"],["class","navbar-toggler d-lg-none"],["data-target","#mainNavbar"],["data-toggle","collapse"],["type","button"]],null,[[null,"click"]],function(n,l,e){var t=!0,o=n.component;if("click"===l){t=!1!==o.toggleNav()&&t}return t},null,null)),(n()(),d._33(null,["\n      "])),(n()(),d._15(0,null,null,0,"span",[["class","navbar-toggler-icon"]],null,null,null,null,null)),(n()(),d._33(null,["\n    "])),(n()(),d._33(null,["\n\n    "])),(n()(),d._15(0,null,null,39,"div",[["class"," navbar-collapse"],["id","mainNavbar"]],null,null,null,null,null)),d._13(278528,null,0,m.h,[d.y,d.z,d.n,d.M],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),d._30({collapse:0}),(n()(),d._33(null,["\n      "])),(n()(),d._15(0,null,null,34,"ul",[["class","navbar-nav mr-auto"]],null,null,null,null,null)),(n()(),d._33(null,["\n        "])),(n()(),d._15(0,null,null,9,"li",[["class","nav-item"],["routerLinkActive","active"]],null,null,null,null,null)),d._13(1720320,null,2,f.l,[f.k,d.n,d.N,d.i],{routerLinkActive:[0,"routerLinkActive"]},null),d._31(603979776,1,{links:1}),d._31(603979776,2,{linksWithHrefs:1}),(n()(),d._33(null,["\n          "])),(n()(),d._15(0,null,null,3,"a",[["class","nav-link"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,e){var t=!0,o=n.component;if("click"===l){t=!1!==d._28(n,24).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&t}if("click"===l){t=!1!==o.toggleNav(!0)&&t}return t},null,null)),d._13(671744,[[2,4]],0,f.m,[f.k,f.a,m.g],{routerLink:[0,"routerLink"]},null),d._29(1),(n()(),d._33(null,["Legend"])),(n()(),d._33(null,["\n        "])),(n()(),d._33(null,["\n        "])),(n()(),d._15(0,null,null,9,"li",[["class","nav-item"],["routerLinkActive","active"]],null,null,null,null,null)),d._13(1720320,null,2,f.l,[f.k,d.n,d.N,d.i],{routerLinkActive:[0,"routerLinkActive"]},null),d._31(603979776,3,{links:1}),d._31(603979776,4,{linksWithHrefs:1}),(n()(),d._33(null,["\n          "])),(n()(),d._15(0,null,null,3,"a",[["class","nav-link"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,e){var t=!0,o=n.component;if("click"===l){t=!1!==d._28(n,35).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&t}if("click"===l){t=!1!==o.toggleNav(!0)&&t}return t},null,null)),d._13(671744,[[4,4]],0,f.m,[f.k,f.a,m.g],{routerLink:[0,"routerLink"]},null),d._29(1),(n()(),d._33(null,["Encode"])),(n()(),d._33(null,["\n        "])),(n()(),d._33(null,["\n        "])),(n()(),d._15(0,null,null,9,"li",[["class","nav-item"],["routerLinkActive","active"]],null,null,null,null,null)),d._13(1720320,null,2,f.l,[f.k,d.n,d.N,d.i],{routerLinkActive:[0,"routerLinkActive"]},null),d._31(603979776,5,{links:1}),d._31(603979776,6,{linksWithHrefs:1}),(n()(),d._33(null,["\n          "])),(n()(),d._15(0,null,null,3,"a",[["class","nav-link"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,e){var t=!0,o=n.component;if("click"===l){t=!1!==d._28(n,46).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&t}if("click"===l){t=!1!==o.toggleNav(!0)&&t}return t},null,null)),d._13(671744,[[6,4]],0,f.m,[f.k,f.a,m.g],{routerLink:[0,"routerLink"]},null),d._29(1),(n()(),d._33(null,["Decode"])),(n()(),d._33(null,["\n        "])),(n()(),d._33(null,["\n      "])),(n()(),d._33(null,["\n    "])),(n()(),d._33(null,["\n  "])),(n()(),d._33(null,["\n  "])),(n()(),d._15(0,null,null,19,"div",[["class","row"],["id","main-content"]],null,null,null,null,null)),(n()(),d._33(null,["\n    "])),(n()(),d._15(0,null,null,10,"aside",[["class","col-sm-3 col-md-2 d-none d-sm-block bg-light sidebar"],["id","sidebar"]],null,null,null,null,null)),(n()(),d._33(null,["\n      "])),(n()(),d._15(0,null,null,1,"h4",[],null,null,null,null,null)),(n()(),d._33(null,["Morse Table"])),(n()(),d._33(null,["\n      "])),(n()(),d._15(0,null,null,4,"ul",[["class","legend"]],null,null,null,null,null)),(n()(),d._33(null,["\n        "])),(n()(),d._9(16777216,null,null,1,null,t)),d._13(802816,null,0,m.i,[d.Y,d.V,d.y],{ngForOf:[0,"ngForOf"]},null),(n()(),d._33(null,["\n      "])),(n()(),d._33(null,["\n    "])),(n()(),d._33(null,["\n    "])),(n()(),d._15(0,null,null,4,"main",[["class","col-sm-9 ml-sm-auto col-md-10 pt-3"],["id","main-"]],null,null,null,null,null)),(n()(),d._33(null,["\n      "])),(n()(),d._15(16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),d._13(212992,null,0,f.o,[f.b,d.Y,d.k,[8,null],d.i],null,null),(n()(),d._33(null,["\n    "])),(n()(),d._33(null,["\n  "])),(n()(),d._33(null,["\n"])),(n()(),d._33(null,["\n"]))],function(n,l){var e=l.component;n(l,13,0," navbar-collapse",n(l,14,0,e.navBarCollapsed));n(l,19,0,"active"),n(l,24,0,n(l,25,0,"legend"));n(l,30,0,"active"),n(l,35,0,n(l,36,0,"encode"));n(l,41,0,"active"),n(l,46,0,n(l,47,0,"dencode")),n(l,64,0,e.morseTranslations),n(l,71,0)},function(n,l){n(l,23,0,d._28(l,24).target,d._28(l,24).href),n(l,34,0,d._28(l,35).target,d._28(l,35).href),n(l,45,0,d._28(l,46).target,d._28(l,46).href)})}function u(n){return d._34(0,[(n()(),d._15(0,null,null,1,"app-root",[],null,null,null,o,b)),d._13(49152,null,0,c,[p.c],null,null)],null,null)}Object.defineProperty(l,"__esModule",{value:!0});var s={production:!0},r=function(){function n(){}return n}(),i=e("/oeL"),a=e("3Xxe"),c=function(){function n(n){this.morseTranslations=n,this.navBarCollapsed=!0}return n.prototype.toggleNav=function(n){this.navBarCollapsed=!!n||!this.navBarCollapsed},n.ctorParameters=function(){return[{type:void 0,decorators:[{type:i.t,args:[a.c]}]}]},n}(),d=e("/oeL"),_=e("/U0V"),h=e("49Nx"),m=e("qbdv"),f=e("BkNc"),p=e("3Xxe"),g=[],b=d._12({encapsulation:2,styles:g,data:{}}),y=d._10("app-root",c,u,{},{},[]),v=function(){function n(){}return n}(),C={shortMorse:".",longMorse:"-",shortBreak:"+",longBreak:"*"},k={shortMorse:200,longMorse:400,shortBreak:-450,longBreak:-1e3},M=[{symbol:".-",char:"A"},{symbol:"-...,",char:"B"},{symbol:"-.-.",char:"C"},{symbol:"-..",char:"D"},{symbol:".",char:"E"},{symbol:"..-.",char:"F"},{symbol:"--.",char:"G"},{symbol:"....",char:"H"},{symbol:"..",char:"I"},{symbol:".---",char:"J"},{symbol:"-.-",char:"K"},{symbol:".-..",char:"L"},{symbol:"--",char:"M"},{symbol:"-.",char:"N"},{symbol:"---",char:"O"},{symbol:".--.",char:"P"},{symbol:"--.-",char:"Q"},{symbol:".-.",char:"R"},{symbol:"...",char:"S"},{symbol:"-",char:"T"},{symbol:"..-",char:"U"},{symbol:"...-",char:"V"},{symbol:".--",char:"W"},{symbol:"-..-",char:"X"},{symbol:"-.--",char:"Y"},{symbol:"--..",char:"Z"},{symbol:"-----",char:"0"},{symbol:".----",char:"1"},{symbol:"..---",char:"2"},{symbol:"...--",char:"3"},{symbol:"....-",char:"4"},{symbol:".....",char:"5"},{symbol:"-....",char:"6"},{symbol:"--...",char:"7"},{symbol:"---..",char:"8"},{symbol:"----.",char:"9"},{symbol:".--.-",char:"\xc0"},{symbol:".-.-",char:"\xc4"},{symbol:".-..-",char:"\xc8"},{symbol:"..-..",char:"\xc9"},{symbol:"---.",char:"\xd6"},{symbol:"..--",char:"\xdc"},{symbol:"...--..",char:"\xdf"},{symbol:"----",char:"CH"},{symbol:"--.--",char:"\xd1"},{symbol:".-.-.-",char:"."},{symbol:"--..--",char:","},{symbol:"---...",char:":"},{symbol:"-.-.-.",char:""},{symbol:"..--..",char:"?"},{symbol:"-....-",char:"-"},{symbol:"..--.-",char:"_"},{symbol:"-.--.",char:"("},{symbol:"-.--.-",char:")"},{symbol:".----.",char:"'"},{symbol:"-...-",char:"="},{symbol:".-.-.",char:"+"},{symbol:"-..-.",char:"/"},{symbol:".--.-.",char:"@"}],w=e("lDeE"),T=e("3Xxe"),S=function(){function n(){}return n.forRoot=function(){return{ngModule:n,providers:[{provide:T.b,useValue:k},{provide:T.a,useValue:C},{provide:T.c,useValue:M},w.a]}},n}(),O=e("/oeL"),L=e("mIo+"),E=e("qbdv"),P=e("fc+i"),D=e("BkNc"),x=e("XKz0"),$=e("lDeE"),z=e("3Xxe"),B=e("7W6T"),j=e("wKj0"),A=e("T2Au"),N=e("GPSL"),V=O._11(r,[c],function(n){return O._25([O._26(512,O.k,O._7,[[8,[L.a,y]],[3,O.k],O.E]),O._26(5120,O.A,O._24,[[3,O.A]]),O._26(4608,E.k,E.j,[O.A]),O._26(5120,O.c,O._16,[]),O._26(5120,O.y,O._22,[]),O._26(5120,O.z,O._23,[]),O._26(4608,P.b,P.s,[E.c]),O._26(6144,O.Q,null,[P.b]),O._26(4608,P.e,P.f,[]),O._26(5120,P.c,function(n,l,e,t){return[new P.k(n),new P.o(l),new P.n(e,t)]},[E.c,E.c,E.c,P.e]),O._26(4608,P.d,P.d,[P.c,O.G]),O._26(135680,P.m,P.m,[E.c]),O._26(4608,P.l,P.l,[P.d,P.m]),O._26(6144,O.O,null,[P.l]),O._26(6144,P.p,null,[P.m]),O._26(4608,O.W,O.W,[O.G]),O._26(4608,P.g,P.g,[E.c]),O._26(4608,P.i,P.i,[E.c]),O._26(5120,D.a,D.x,[D.k]),O._26(4608,D.d,D.d,[]),O._26(6144,D.f,null,[D.d]),O._26(135680,D.p,D.p,[D.k,O.D,O.j,O.w,D.f]),O._26(4608,D.e,D.e,[]),O._26(5120,D.h,D.A,[D.y]),O._26(5120,O.b,function(n){return[n]},[D.h]),O._26(4608,x.h,x.m,[E.c,O.J,x.k]),O._26(4608,x.n,x.n,[x.h,x.l]),O._26(5120,x.a,function(n){return[n]},[x.n]),O._26(4608,x.j,x.j,[]),O._26(6144,x.i,null,[x.j]),O._26(4608,x.g,x.g,[x.i]),O._26(6144,x.b,null,[x.g]),O._26(5120,x.f,x.o,[x.b,[2,x.a]]),O._26(4608,x.c,x.c,[x.f]),O._26(4608,$.a,$.a,[z.b,z.a,z.c]),O._26(512,E.b,E.b,[]),O._26(1024,O.o,P.q,[]),O._26(1024,O.F,function(){return[D.t()]},[]),O._26(512,D.y,D.y,[O.w]),O._26(1024,O.d,function(n,l,e){return[P.r(n,l),D.z(e)]},[[2,P.h],[2,O.F],D.y]),O._26(512,O.e,O.e,[[2,O.d]]),O._26(131584,O._14,O._14,[O.G,O._8,O.w,O.o,O.k,O.e]),O._26(2048,O.g,null,[O._14]),O._26(512,O.f,O.f,[O.g]),O._26(512,P.a,P.a,[[3,P.a]]),O._26(1024,D.s,D.v,[[3,D.k]]),O._26(512,D.r,D.c,[]),O._26(512,D.b,D.b,[]),O._26(256,D.g,{},[]),O._26(1024,E.g,D.u,[E.m,[2,E.a],D.g]),O._26(512,E.f,E.f,[E.g]),O._26(512,O.j,O.j,[]),O._26(512,O.D,O.T,[O.j,[2,O.U]]),O._26(1024,D.i,function(){return[[{path:"",component:B.a}],[{path:"",pathMatch:"full",redirectTo:"legend"},{path:"legend",loadChildren:"app/pages/legend/legend.module#LegendModule"},{path:"encode",loadChildren:"app/pages/morse-code-encoding/morse-code-encoding.module#MorseCodeEncodingModule"}]]},[]),O._26(1024,D.k,D.w,[O.g,D.r,D.b,E.f,O.w,O.D,O.j,D.i,D.g,[2,D.q],[2,D.j]]),O._26(512,D.n,D.n,[[2,D.s],[2,D.k]]),O._26(512,j.a,j.a,[]),O._26(512,A.a,A.a,[]),O._26(512,N.a,N.a,[]),O._26(512,v,v,[]),O._26(512,x.e,x.e,[]),O._26(512,x.d,x.d,[]),O._26(512,S,S,[]),O._26(512,r,r,[]),O._26(256,x.k,"XSRF-TOKEN",[]),O._26(256,x.l,"X-XSRF-TOKEN",[]),O._26(256,z.b,k,[]),O._26(256,z.a,C,[]),O._26(256,z.c,M,[])])}),U=e("/oeL"),K=e("fc+i");s.production&&Object(U._2)(),Object(K.j)().bootstrapModuleFactory(V)},gFIY:function(n,l,e){function t(n){var l=o[n];return l?e.e(l[1]).then(function(){return e(l[0])}):Promise.reject(new Error("Cannot find module '"+n+"'."))}var o={"app/pages/legend/legend.module.ngfactory":["BAqS",0],"app/pages/morse-code-encoding/morse-code-encoding.module.ngfactory":["wbYy",1]};t.keys=function(){return Object.keys(o)},n.exports=t,t.id="gFIY"},lDeE:function(n,l,e){"use strict";e.d(l,"a",function(){return i});var t=e("/oeL"),o=e("bKpL"),u=(e.n(o),e("Dqrr")),s=(e.n(u),e("rlar")),r=(e.n(s),e("3Xxe")),i=function(){function n(n,l,e){var t=this;this.MorseTimeRanges=n,this.MorseCharacters=l,this.MorseTranslations=e,this._startEvents$=new s.Subject,this._stopEvents$=new s.Subject,this._injectedMorseChar$=new s.Subject,this.toTimeDiff=function(n){return n[1]-n[0]},this.translateSymbolToLetter=function(n){var l=t.MorseTranslations.find(function(l){return l.symbol===n});if(l)return l.char;throw new Error("Translation Error: Could not translate morse symbol "+n+" to a letter")},this.msToMorseChar=function(n){return n>=0?n>t.MorseTimeRanges.shortMorse?t.MorseCharacters.longMorse:t.MorseCharacters.shortMorse:n>=t.MorseTimeRanges.shortBreak?t.MorseCharacters.shortBreak:t.MorseCharacters.longBreak},this.charArrayToSymbol=function(n){return n.join("").replace(t.MorseCharacters.longBreak,"")},this.isMorseSymbol=function(n){return!!t.MorseTranslations.map(function(n){return n.symbol}).find(function(l){return l===n})},this.isCharNoShortBreak=function(n){return n!==t.MorseCharacters.shortBreak},this.isCharLongBreak=function(n){return n===t.MorseCharacters.longBreak},this._morseChar$=o.Observable.combineLatest(this._startEvents$,this._stopEvents$).map(this.toTimeDiff).map(this.msToMorseChar).filter(this.isCharNoShortBreak).merge(this._injectedMorseChar$),this._morseSymbol$=this._morseChar$.window(this._morseChar$.filter(this.isCharLongBreak)).flatMap(function(n){return n.toArray()}).map(this.charArrayToSymbol).filter(function(n){return!!n}),this._morseLetter$=this._morseSymbol$.switchMap(function(n){return o.Observable.of(n).map(t.translateSymbolToLetter).catch(function(n){return o.Observable.of("?")})});var u=Math.abs(n.longBreak);this._stopEvents$.switchMap(function(){return o.Observable.timer(u,u).take(1)}).subscribe(function(n){return t.sendMorseChar(l.longBreak)})}return Object.defineProperty(n.prototype,"startEvents$",{get:function(){return this._startEvents$},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"stopEvents$",{get:function(){return this._stopEvents$},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"morseChar$",{get:function(){return this._morseChar$},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"morseSymbol$",{get:function(){return this._morseSymbol$},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"morseLetter$",{get:function(){return this._morseLetter$},enumerable:!0,configurable:!0}),n.prototype.sendStartTime=function(n){this._startEvents$.next(n)},n.prototype.sendStopTime=function(n){this._stopEvents$.next(n)},n.prototype.sendMorseChar=function(n){this._injectedMorseChar$.next(n)},n.ctorParameters=function(){return[{type:void 0,decorators:[{type:t.t,args:[r.b]}]},{type:void 0,decorators:[{type:t.t,args:[r.a]}]},{type:void 0,decorators:[{type:t.t,args:[r.c]}]}]},n}()},"mIo+":function(n,l,e){"use strict";function t(n){return d._34(0,[d._31(402653184,1,{beepSound:0}),(n()(),d._15(0,null,null,13,"div",[["class","btn-group"]],null,null,null,null,null)),(n()(),d._33(null,["\n  "])),(n()(),d._15(0,null,null,5,"button",[["class","btn btn-outline-dark btn-lg"]],null,[[null,"click"]],function(n,l,e){var t=!0,o=n.component;if("click"===l){t=!1!=(o.isMuted=!o.isMuted)&&t}return t},null,null)),(n()(),d._33(null,["\n    "])),(n()(),d._15(0,null,null,2,"i",[["class","fa"]],null,null,null,null,null)),d._13(278528,null,0,h.h,[d.y,d.z,d.n,d.M],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),d._30({"fa-volume-up":0,"fa-volume-off":1}),(n()(),d._33(null,["\n  "])),(n()(),d._33(null,["\n\n  "])),(n()(),d._15(0,null,null,3,"button",[["class","btn btn-morse btn-lg"]],null,[[null,"mousedown"],[null,"mouseleave"],[null,"mouseup"]],function(n,l,e){var t=!0,o=n.component;if("mousedown"===l){t=!1!==o.onMouseDown()&&t}if("mouseleave"===l){t=!1!==o.onMouseLeave()&&t}if("mouseup"===l){t=!1!==o.onMouseUp()&&t}return t},null,null)),d._13(278528,null,0,h.h,[d.y,d.z,d.n,d.M],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),d._30({active:0}),(n()(),d._33(null,["\n    Morse Button\n  "])),(n()(),d._33(null,["\n"])),(n()(),d._33(null,["\n"])),(n()(),d._15(0,[[1,0],["beepSound",1]],null,0,"audio",[["autostart","false"],["src","assets/sounds/beep-04.wav"]],null,null,null,null,null)),(n()(),d._33(null,["\n"]))],function(n,l){var e=l.component;n(l,6,0,"fa",n(l,7,0,!e.isMuted,e.isMuted));n(l,11,0,"btn btn-morse btn-lg",n(l,12,0,e.isMouseDown))},null)}function o(n){return d._34(0,[(n()(),d._15(0,null,null,1,"morse-button",[],null,null,null,t,f)),d._13(4374528,null,0,_.a,[],null,null)],null,null)}function u(n){return g._34(0,[(n()(),g._15(0,null,null,2,"morse-frame",[],null,null,null,b.b,b.a)),g._13(573440,null,0,y.a,[],{size:[0,"size"],signal:[1,"signal"],signalType:[2,"signalType"]},null),(n()(),g._33(null,["\n      "]))],function(n,l){var e=l.component;n(l,1,0,e.size,l.context.$implicit,e.signalType)},null)}function s(n){return g._34(0,[g._31(402653184,1,{streamElem:0}),(n()(),g._15(0,null,null,20,"div",[["class","card"]],null,null,null,null,null)),(n()(),g._33(null,["\n  "])),(n()(),g._15(0,null,null,8,"div",[["class","card-header"]],null,null,null,null,null)),(n()(),g._33(null,["\n    "])),(n()(),g._15(0,null,null,3,"button",[["class","reset btn btn-sm btn-outline btn-outline-danger pull-left"]],null,[[null,"click"]],function(n,l,e){var t=!0,o=n.component;if("click"===l){t=!1!==o.reset()&&t}return t},null,null)),(n()(),g._33(null,["\n      "])),(n()(),g._15(0,null,null,0,"i",[["class","fa fa-remove"]],null,null,null,null,null)),(n()(),g._33(null,["\n    "])),(n()(),g._33(null,["\n    "])),g._27(null,0),(n()(),g._33(null,["\n  "])),(n()(),g._33(null,["\n  "])),(n()(),g._15(0,null,null,7,"div",[["class","card-block"]],null,null,null,null,null)),(n()(),g._33(null,["\n    "])),(n()(),g._15(0,[[1,0],["stream",1]],null,4,"div",[],[[8,"className",0]],null,null,null,null)),(n()(),g._33(null,["\n      "])),(n()(),g._9(16777216,null,null,1,null,u)),g._13(802816,null,0,C.i,[g.Y,g.V,g.y],{ngForOf:[0,"ngForOf"]},null),(n()(),g._33(null,["\n    "])),(n()(),g._33(null,["\n\n  "])),(n()(),g._33(null,["\n"])),(n()(),g._33(null,["\n"]))],function(n,l){n(l,18,0,l.component.signals)},function(n,l){var e=l.component;n(l,15,0,g._18(1,"stream ",e.offset?"offset-"+e.offset:"",""))})}function r(n){return g._34(0,[(n()(),g._15(0,null,null,1,"morse-display",[],null,null,null,s,M)),g._13(9093120,null,0,v.a,[],null,null)],null,null)}function i(n){return w._34(0,[w._31(671088640,1,{morseCodeDisplaysQueryList:1}),(n()(),w._15(0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),w._33(null,["Morse code decoder"])),(n()(),w._33(null,["\n\n"])),(n()(),w._15(0,null,null,3,"button",[["class","btn btn-outline btn-outline-danger btn-lg"]],null,[[null,"click"]],function(n,l,e){var t=!0,o=n.component;if("click"===l){t=!1!==o.resetAll()&&t}return t},null,null)),(n()(),w._33(null,["\n  "])),(n()(),w._15(0,null,null,0,"i",[["class","fa fa-remove"]],null,null,null,null,null)),(n()(),w._33(null,["\n"])),(n()(),w._33(null,["\n"])),(n()(),w._15(0,null,null,1,"morse-button",[],null,[[null,"mouseDownChange"],[null,"mouseUpChange"]],function(n,l,e){var t=!0,o=n.component;if("mouseDownChange"===l){t=!1!==o.sendStartSignal()&&t}if("mouseUpChange"===l){t=!1!==o.sendStopSignal()&&t}return t},t,f)),w._13(4374528,null,0,S.a,[],null,{mouseDownChange:"mouseDownChange",mouseUpChange:"mouseUpChange"}),(n()(),w._33(null,["\n\n"])),(n()(),w._15(0,null,null,5,"morse-display",[],null,null,null,s,M)),w._13(9093120,[[1,4]],0,O.a,[],{signalType:[0,"signalType"],signal:[1,"signal"]},null),(n()(),w._33(0,["\n  "])),(n()(),w._15(0,null,0,1,"h4",[],null,null,null,null,null)),(n()(),w._33(null,["StartEvents"])),(n()(),w._33(0,["\n"])),(n()(),w._33(null,["\n\n"])),(n()(),w._15(0,null,null,5,"morse-display",[],null,null,null,s,M)),w._13(9093120,[[1,4]],0,O.a,[],{signalType:[0,"signalType"],signal:[1,"signal"],offset:[2,"offset"]},null),(n()(),w._33(0,["\n  "])),(n()(),w._15(0,null,0,1,"h4",[],null,null,null,null,null)),(n()(),w._33(null,["StopEvents"])),(n()(),w._33(0,["\n"])),(n()(),w._33(null,["\n\n"])),(n()(),w._15(0,null,null,5,"morse-display",[],null,null,null,s,M)),w._13(9093120,[[1,4]],0,O.a,[],{size:[0,"size"],signalType:[1,"signalType"],signal:[2,"signal"],offset:[3,"offset"]},null),(n()(),w._33(0,["\n  "])),(n()(),w._15(0,null,0,1,"h4",[],null,null,null,null,null)),(n()(),w._33(null,["MorseCode Characters"])),(n()(),w._33(0,["\n"])),(n()(),w._33(null,["\n\n"])),(n()(),w._15(0,null,null,5,"morse-display",[],null,null,null,s,M)),w._13(9093120,[[1,4]],0,O.a,[],{size:[0,"size"],signalType:[1,"signalType"],signal:[2,"signal"],offset:[3,"offset"]},null),(n()(),w._33(0,["\n  "])),(n()(),w._15(0,null,0,1,"h4",[],null,null,null,null,null)),(n()(),w._33(null,["MorseCode Symbol"])),(n()(),w._33(0,["\n"])),(n()(),w._33(null,["\n\n"])),(n()(),w._15(0,null,null,5,"morse-display",[],null,null,null,s,M)),w._13(9093120,[[1,4]],0,O.a,[],{size:[0,"size"],signalType:[1,"signalType"],signal:[2,"signal"],offset:[3,"offset"]},null),(n()(),w._33(0,["\n  "])),(n()(),w._15(0,null,0,1,"h4",[],null,null,null,null,null)),(n()(),w._33(null,["MorseCode Letter"])),(n()(),w._33(0,["\n"])),(n()(),w._33(null,["\n"]))],function(n,l){var e=l.component;n(l,13,0,"timestamp",e.startEvents$);n(l,20,0,"timestamp",e.stopEvents$,1);n(l,27,0,"short","character",e.morseChar$,1);n(l,34,0,"auto","symbol",e.morseSymbol$,1);n(l,41,0,"short","letter",e.morseLetter$,1)},null)}function a(n){return w._34(0,[(n()(),w._15(0,null,null,1,"morse-code-encoding",[],null,null,null,i,P)),w._13(49152,null,0,T.a,[L.a],null,null)],null,null)}Object.defineProperty(l,"__esModule",{value:!0});var c=[".btn-morse[_ngcontent-%COMP%]{border-width:3px;border-style:solid;border-color:#dee2e6;background-color:#fff}.btn-default[_ngcontent-%COMP%], .btn-default[_ngcontent-%COMP%]:active, .btn-default[_ngcontent-%COMP%]:active:focus, .btn-default[_ngcontent-%COMP%]:focus, .btn-default[_ngcontent-%COMP%]:hover, .btn-default[_ngcontent-%COMP%]:visited{color:#dcdcdc;background-color:#232323;outline:none}.active[_ngcontent-%COMP%]{color:#fff;border-color:#dee2e6;background-color:#6495ed;-webkit-animation-name:color_change;animation-name:color_change;-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-direction:alternate;animation-direction:alternate}@-webkit-keyframes color_change{0%{border-color:#add8e6;background-color:#add8e6}to{border-color:#dee2e6;background-color:#6495ed}}@keyframes color_change{0%{border-color:#add8e6;background-color:#add8e6}to{border-color:#dee2e6;background-color:#6495ed}}"],d=e("/oeL"),_=e("HM0j"),h=e("qbdv"),m=[c],f=d._12({encapsulation:0,styles:m,data:{}}),p=(d._10("morse-button",_.a,o,{},{mouseDownChange:"mouseDownChange",mouseUpChange:"mouseUpChange"},[]),["[_nghost-%COMP%]{display:block;margin-top:15px}.reset[_ngcontent-%COMP%]{margin-right:5px}.stream[_ngcontent-%COMP%]{width:100%;min-height:50px;overflow-x:scroll;display:block;white-space:nowrap;padding-top:5px}.stream.offset-1[_ngcontent-%COMP%]   morse-frame[_ngcontent-%COMP%]:first-child, .stream.offset-1[_ngcontent-%COMP%]   morse-frame[_ngcontent-%COMP%]:first-child.size-short{margin-left:120px}.stream.offset-1[_ngcontent-%COMP%]   morse-frame[_ngcontent-%COMP%]:first-child.size-tiny{margin-left:30px}"]),g=e("/oeL"),b=e("/U0V"),y=e("49Nx"),v=e("BhIu"),C=e("qbdv"),k=[p],M=g._12({encapsulation:0,styles:k,data:{}});g._10("morse-display",v.a,r,{size:"size",signalType:"signalType",signal:"signal",offset:"offset"},{},["*"]);e.d(l,"a",function(){return D});var w=e("/oeL"),T=e("7W6T"),S=e("HM0j"),O=e("BhIu"),L=e("lDeE"),E=[],P=w._12({encapsulation:2,styles:E,data:{}}),D=w._10("morse-code-encoding",T.a,a,{},{},[])},wKj0:function(n,l,e){"use strict";e.d(l,"a",function(){return o});var t=e("7W6T"),o=(t.a,function(){function n(){}return n}())}},[0]);