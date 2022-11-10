import {TanFormulas} from "./tan-formulas";


export class ExponentialFormulas {

  public static getExponentialElevatedAt(exponent: number, delta: number, phi: number): number {
    return Math.pow(Math.E, (exponent * delta * TanFormulas.getTanPhi(phi)));
  }
}
