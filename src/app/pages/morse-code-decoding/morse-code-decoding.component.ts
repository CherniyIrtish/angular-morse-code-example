import {Component, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {MorseCodeDecoderService} from '../../core/service/morse-code.service';
import {MorseDisplayComponent} from '../../shared/components/morse-display/morse-display.component';

@Component({
  selector: 'morse-code-decoding',
  templateUrl: './morse-code-decoding.component.html'
})
export class MorseCodeDecodingComponent {

  isMuted = true;

  @ViewChildren(MorseDisplayComponent)
  morseCodeDisplaysQueryList

  startEvents$: Observable<number>
  stopEvents$: Observable<number>
  morseChar$: Observable<any>
  morseSymbol$: Observable<string>
  morseLetter$: Observable<string>

  constructor(public ms: MorseCodeDecoderService) {
    this.startEvents$ = ms.startEvents$
    this.stopEvents$ = ms.stopEvents$
    this.morseChar$ = ms.morseChar$
    this.morseSymbol$ = ms.morseSymbol$
    this.morseLetter$ = ms.morseLetter$
  }

  sendStartSignal() {
    this.ms.sendStartTime(Date.now())
  }

  sendStopSignal() {
    this.ms.sendStopTime(Date.now())
  }

  toggleMuted() {
    this.isMuted = !this.isMuted;
  }

  resetAll() {
    this.morseCodeDisplaysQueryList.forEach((display) => {
      display.reset()
    })
  }
}