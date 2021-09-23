import { Gegenstand } from './gegenstand'; //von Stackblitz automat. generiert

export class Schmuck extends Gegenstand {
  constructor(id: number, wert: number, public bezeichnung: string) {
    super(id, wert);
  }

  get toString(): string {
    let text: string = '\nBezeichnung: ' + this.bezeichnung;
    text += super.toString;
    return text;
  }
}
