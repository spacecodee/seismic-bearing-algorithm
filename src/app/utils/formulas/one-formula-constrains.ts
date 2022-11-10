import {SinFormulas} from "../short-forumlas/sin-formulas";
import {CosFormulas} from "../short-forumlas/cos-formulas";

export class OneFormulaConstrains {

  public static applyAlfaConstrain(value: number): boolean {
    return 0 < value;
  }

  public static applyAlfaPrimeConstrain(alfaValue: number, value: number): boolean {
    if (alfaValue != 0) {
      if (alfaValue < value) {
        return true;
      }
    }

    return false;
  }

  public static applyDeltaConstrain(value: number): boolean {
    return 0 < value;
  }

  public static applyPhiConstrain(value: number): boolean {
    return 0 < value && value < Math.PI / 2;
  }

  public static applyPiConstraint(alfa: number, alfaPrime: number): boolean {
    return (alfa + alfaPrime) < Math.PI;
  }

  public static applyAlfaAndDeltaConstrain(phi: number, alfa: number, delta: number): boolean {
    const alfaPlusDelta = alfa + delta;

    return (Math.PI / 2 + phi) < alfaPlusDelta && alfaPlusDelta < Math.PI;
  }

  // sin(alfaPrime - phi) + kh * cos(alfaPrime - phi) > 0
  public static applyConstrainSinKhCos(alfaPrime: number, phi: number, kh: number): boolean {
    return (SinFormulas.getSinAlfaPrimeMinusPhi(alfaPrime, phi) + kh * CosFormulas.getCosAlfaPrimeMinusPhi(alfaPrime, phi)) > 0;
  }
}
