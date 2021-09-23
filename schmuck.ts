import { Gegenstand } from "./gegenstand"; //von Stackblitz automat. generiert

export class Schmuck extends Gegenstand {

  constructor (id: number, wert: number, bezeichnung: string) {
    super(id, wert)
  }

  get wert(): number {return this._wert;}

  set wert(wert: number) {this._wert = wert;}
    //todo) {
	//todo
  }
  
  //todo

}