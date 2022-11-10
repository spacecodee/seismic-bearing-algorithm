export class CosFormulas {

  public static getCosAlfaPlusDelta(alfa: number, delta: number): number {
    return Math.cos(alfa + delta);
  }

  public static getCosAlfa(alfa: number): number {
    return Math.cos(alfa);
  }

  public static getCosPhi(phi: number): number {
    return Math.cos(phi);
  }

  public static getCosAbsolutAlfaPlusAlfaPrimeMinusPhiMinusPiHalfAllMinusPhi(alfa: number, alfaPrime: number, phi: number): number {
    return Math.cos(Math.abs(alfa + alfaPrime - phi - (Math.PI / 2)) - phi);
  }
}
