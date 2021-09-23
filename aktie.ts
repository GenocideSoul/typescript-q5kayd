import { Gegenstand } from './gegenstand'; //von Stackblitz automat. generiert

export class aktie extends Gegenstand {
  constructor(id: number, wert: number, public unternehmen: string, public nennwert: number) {
    super(id, wert);
  }

  get toString(): string {
    let text: string = '\nUnternehmen: ' + this.unternehmen + '\nNennwert: ' + this.nennwert;
    text += super.toString;
    return text;
  }
}