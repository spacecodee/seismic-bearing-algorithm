import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {SinFormulas} from "../../utils/short-forumlas/sin-formulas";
import {CosFormulas} from "../../utils/short-forumlas/cos-formulas";

@Injectable({
  providedIn: 'root'
})
export class OneFormulaConstrainsService {

  constructor() {
    //document why this constructor is empty
  }

  public applyAlfaConstrain(alfa: number): Observable<boolean> {
    console.log(0 < alfa);
    return new Observable<boolean>(subscriber => {
      subscriber.next(0 < alfa);
    });
  }

  public applyAlfaPrimeConstrain(phi: number, alfaPrime: number): Observable<boolean> {
    return new Observable<boolean>(subscriber => {
      subscriber.next(phi < alfaPrime);
    });
  }

  public applyDeltaConstrain(delta: number): Observable<boolean> {
    return new Observable<boolean>(subscriber => {
      subscriber.next(0 < delta);
    });
  }

  public applyPhiConstrain(phi: number): Observable<boolean> {
    return new Observable<boolean>(subscriber => {
      subscriber.next(0 < phi && phi < Math.PI / 2);
    });
  }

  public applyPiConstraint(alfa: number, alfaPrime: number): Observable<boolean> {
    return new Observable<boolean>(subscriber => {
      subscriber.next((alfa + alfaPrime) < Math.PI);
    });
  }

  public applyAlfaAndDeltaConstrain(phi: number, alfa: number, delta: number): Observable<boolean> {
    const alfaPlusDelta = alfa + delta;
    return new Observable<boolean>(subscriber => {
      subscriber.next(((Math.PI / 2) + phi) < alfaPlusDelta && alfaPlusDelta < Math.PI);
    });
  }

  public applyConstrainSinKhCos(alfaPrime: number, phi: number, kh: number): Observable<boolean> {
    const firstPart = SinFormulas.getSinAlfaPrimeMinusPhi(alfaPrime, phi);
    const secondPart = kh * CosFormulas.getCosAlfaPrimeMinusPhi(alfaPrime, phi);
    return new Observable<boolean>(subscriber => {
      subscriber.next((firstPart + secondPart) > 0);
    });
  }
}
