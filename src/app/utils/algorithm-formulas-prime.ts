import {SinFormulas} from "./short-forumlas/sin-formulas";
import {CosFormulas} from "./short-forumlas/cos-formulas";
import {ExponentialFormulas} from "./short-forumlas/exponential-formulas";
import {TanFormulas} from "./short-forumlas/tan-formulas";

export class AlgorithmFormulasPrime {

  public static getFormulaFuntion1Prime(alfa: number, alfaPrime: number): number {
    let sinAlfaMultiplySinAlfaPrime = SinFormulas.getSinAlfaMultiplySinAlfaPrime(alfa, alfaPrime);
    let sinAlfaPlusAlfaPrime = SinFormulas.getSinAlfaPlusAlfaPrime(alfa, alfaPrime);
    let cosAlfaPrimeMinusPhi = CosFormulas.getCosAlfaPrimeMinusPhi(alfa, alfaPrime);

    return (sinAlfaMultiplySinAlfaPrime / sinAlfaPlusAlfaPrime) * cosAlfaPrimeMinusPhi;
  }

  public static getFormulaFuntion2Prime(alfa: number, alfaPrime: number, delta: number, phi: number): number {
    let sinAlfaPrimeQuadratic = SinFormulas.getSinAlfaPrimeExponent(alfaPrime, 2);
    let sinAlfaPlusAlfaPrimeQuadratic = SinFormulas.getSinAlfaPlusAlfaPrimeExponent(alfa, alfaPrime, 2);
    let sinQuadraticAlfaPlusDelta = SinFormulas.getSinExponentAlfaPlusDelta(2, alfa, delta);
    let cosPhi = CosFormulas.getCosPhi(phi);
    let cosAbsolutAllMinusPhi = CosFormulas.getCosAbsolutAlfaPlusAlfaPrimeMinusPhiMinusPiHalfAllMinusPhi(alfa, alfaPrime, phi);
    let cubicExponential = ExponentialFormulas.getExponentialElevatedAt(3, delta, phi);
    let sinAlfaPlusDelta = SinFormulas.getSinAlfaPlusDelta(alfa, delta);
    let cosAlfaPlusDelta = CosFormulas.getCosAlfaPlusDelta(alfa, delta);
    let tanAlfaPlusDeltaMinusPhi = TanFormulas.getTanAlfaPlusDeltaMinusPhi(alfa, delta, phi);

    let oneAndSecondAndThirdSide = -(sinAlfaPrimeQuadratic / sinAlfaPlusAlfaPrimeQuadratic)
      * (sinQuadraticAlfaPlusDelta / cosPhi)
      * cosAbsolutAllMinusPhi;

    let fourSide = (cosAlfaPlusDelta + sinAlfaPlusDelta * tanAlfaPlusDeltaMinusPhi) * cubicExponential;

    return oneAndSecondAndThirdSide * fourSide;
  }

  public static getFormulaFuntion3Prime(alfa: number, alfaPrime: number, delta: number, phi: number): number {
    let sinAlfaPrimeQuadratic = SinFormulas.getSinAlfaPrimeExponent(alfaPrime, 2);
    let sinAlfaPlusAlfaPrimeQuadratic = SinFormulas.getSinAlfaPlusAlfaPrimeExponent(alfa, alfaPrime, 2);
    let cosAbsolutAllMinusPhi = CosFormulas.getCosAbsolutAlfaPlusAlfaPrimeMinusPhiMinusPiHalfAllMinusPhi(alfa, alfaPrime, phi);
    let cubicExponential = ExponentialFormulas.getExponentialElevatedAt(3, delta, phi);
    let tanPhi = TanFormulas.getTanPhi(phi);
    let sinAlfaPlusDelta = SinFormulas.getSinAlfaPlusDelta(alfa, delta);
    let cosAlfaPlusDelta = CosFormulas.getCosAlfaPlusDelta(alfa, delta);
    let tanPhiQuadratic = TanFormulas.getTanPhiExponent(phi, 2);
    let sinAlfa = SinFormulas.getSinAlfa(alfa);
    let cosAlfa = CosFormulas.getCosAlfa(alfa);
    let cosPhi = CosFormulas.getCosPhi(phi);

    let equalOne = 9 * tanPhiQuadratic + 1;

    let oneAndSecondSide = (sinAlfaPrimeQuadratic / sinAlfaPlusAlfaPrimeQuadratic)
      * (cosAbsolutAllMinusPhi / cosPhi);
    let thirdSide = (cubicExponential * ((3 * tanPhi * sinAlfaPlusDelta - cosAlfaPlusDelta) / equalOne))
      - ((3 * tanPhi * sinAlfa + cosAlfa) / equalOne);

    return 0;
  }

  public static getFormulaFuntion4Prime(alfa: number, alfaPrime: number, delta: number, phi: number): number {
    let sinAlfaPrime = SinFormulas.getSinAlfaPrime(alfaPrime);
    let sinAlfaPlusAlfaPrime = SinFormulas.getSinAlfaPlusAlfaPrime(alfa, alfaPrime);
    let sinAlfaPlusDelta = SinFormulas.getSinAlfaPlusDelta(alfa, delta);
    let cosPhi = CosFormulas.getCosPhi(phi);
    let cosAbsolutAllMinusPhi = CosFormulas.getCosAbsolutAlfaPlusAlfaPrimeMinusPhiMinusPiHalfAllMinusPhi(alfa, alfaPrime, phi);
    let cosAlfaPlusDelta = CosFormulas.getCosAlfaPlusDelta(alfa, delta);
    let tanAlfaPlusDeltaMinusPhi = TanFormulas.getTanAlfaPlusDeltaMinusPhi(alfa, delta, phi);
    let cubicExponential = ExponentialFormulas.getExponentialElevatedAt(2, delta, phi);

    let oneAndSecondAndThirdSide = (sinAlfaPrime / sinAlfaPlusAlfaPrime) * (sinAlfaPlusDelta / cosPhi) * cosAbsolutAllMinusPhi;
    let fourSide = (cosAlfaPlusDelta + sinAlfaPlusDelta * tanAlfaPlusDeltaMinusPhi) * cubicExponential;
    return oneAndSecondAndThirdSide * fourSide;
  }
}
