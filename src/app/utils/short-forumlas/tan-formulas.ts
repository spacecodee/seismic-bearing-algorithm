export class TanFormulas {

  public static getTanAlfaPlusDeltaMinusPhi(alfa: number, delta: number, phi: number): number {
    return Math.tan(alfa + delta - phi);
  }

  public static getTanPhi(phi: number): number {
    return Math.tan(phi);
  }

  public static getTanPhiExponent(phi: number, exponent: number): number {
    return Math.pow(Math.sin(phi), exponent);
  }
}
