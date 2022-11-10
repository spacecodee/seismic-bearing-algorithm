export class SinFormulas {

  public static getSinAlfa(alfa: number) {
    return Math.sin(alfa);
  }

  public static getSinAlfaPrime(alfaPrime: number): number {
    return Math.sin(alfaPrime);
  }

  public static getSinAlfaPlusDelta(alfa: number, delta: number): number {
    return Math.sin(alfa + delta);
  }

  public static getSinExponentAlfaPlusDelta(exponent: number, alfa: number, delta: number): number {
    return Math.pow(Math.sin(alfa + delta), exponent);
  }

  public static getSinAlfaMultiplySinAlfaPrime(alfa: number, alfaPrime: number): number {
    return Math.sin(alfa) * Math.sin(alfaPrime);
  }

  public static getSinAlfaPlusAlfaPrime(alfa: number, alfaPrime: number): number {
    return Math.sin(alfa + alfaPrime);
  }

  public static getSinAlfaPrimeMinusPhi(alfaPrime: number, phi: number): number {
    return Math.sin(alfaPrime - phi);
  }

  public static getSinAlfaPrimeExponent(alfaPrime: number, exponent: number): number {
    return Math.pow(Math.sin(alfaPrime), exponent);
  }

  public static getSinAlfaPlusAlfaPrimeExponent(alfa: number, alfaPrime: number, exponent: number): number {
    return Math.pow(Math.sin(alfa + alfaPrime), exponent);
  }
}
