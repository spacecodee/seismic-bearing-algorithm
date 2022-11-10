import {SinFormulas} from "./short-forumlas/sin-formulas";
import {CosFormulas} from "./short-forumlas/cos-formulas";
import {ExponentialFormulas} from "./short-forumlas/exponential-formulas";
import {TanFormulas} from "./short-forumlas/tan-formulas";

export class AlgorithmFormulas {

  static getFormulaF1(alfa: number, alfaPrime: number, phi: number): number {
    let sinAlfa = SinFormulas.getSinAlfa(alfa);
    let sinAlfaPrime = SinFormulas.getSinAlfaPrime(alfaPrime);
    let sinAlfaPlusAlfaPrime = SinFormulas.getSinAlfaPlusAlfaPrime(alfa, alfaPrime);
    let sinAlfaPrimeMinusPhi = SinFormulas.getSinAlfaPrimeMinusPhi(alfaPrime, phi);

    return ((sinAlfa * sinAlfaPrime) / sinAlfaPlusAlfaPrime) * sinAlfaPrimeMinusPhi;
  }

  static getFormulaF2(alfa: number, alfaPrime: number, delta: number, phi: number): number {
    let sinAlfaPrimeQuadratic = SinFormulas.getSinAlfaPrimeExponent(alfaPrime, 2);
    let sinAlfaPlusAlfaPrimeQuadratic = SinFormulas.getSinAlfaPlusAlfaPrimeExponent(alfa, alfaPrime, 2);
    let sinAlfaPlusDelta = SinFormulas.getSinAlfaPlusDelta(alfa, delta);
    let cosAlfaPlusDelta = CosFormulas.getCosAlfaPlusDelta(alfa, delta);
    let cosPhi = CosFormulas.getCosPhi(phi);
    let cosAbsolutAllMinusPhi = CosFormulas.getCosAbsolutAlfaPlusAlfaPrimeMinusPhiMinusPiHalfAllMinusPhi(alfa, alfaPrime, phi);
    let tanAlfaPlusDeltaMinusPhi = TanFormulas.getTanAlfaPlusDeltaMinusPhi(alfa, delta, phi);
    let cubicExponential = ExponentialFormulas.getExponentialElevatedAt(3, delta, phi);

    let oneAndSecondAndThirdSide = -(sinAlfaPrimeQuadratic / sinAlfaPlusAlfaPrimeQuadratic)
      * ((sinAlfaPlusDelta * cosAlfaPlusDelta) / cosPhi)
      * cosAbsolutAllMinusPhi;

    let fourSide = (cosAlfaPlusDelta + sinAlfaPlusDelta * tanAlfaPlusDeltaMinusPhi) * cubicExponential;

    return oneAndSecondAndThirdSide * fourSide;
  }

  static getFormulaF3(alfa: number, alfaPrime: number, delta: number, phi: number): number {
    let sinAlfaPrimeQuadratic = SinFormulas.getSinAlfaPrimeExponent(alfaPrime, 2);
    let sinAlfaPlusAlfaPrimeQuadratic = SinFormulas.getSinAlfaPlusAlfaPrimeExponent(alfa, alfaPrime, 2);
    let cosAbsolutAllMinusPhi = CosFormulas.getCosAbsolutAlfaPlusAlfaPrimeMinusPhiMinusPiHalfAllMinusPhi(alfa, alfaPrime, phi);
    let cosPhi = CosFormulas.getCosPhi(phi);
    let cubicExponential = ExponentialFormulas.getExponentialElevatedAt(3, delta, phi);
    let tanPhi = TanFormulas.getTanPhi(phi);
    let cosAlfaPlusDelta = CosFormulas.getCosAlfaPlusDelta(alfa, delta);
    let sinAlfaPlusDelta = SinFormulas.getSinAlfaPlusDelta(alfa, delta);
    let tanPhiQuadratic = TanFormulas.getTanPhiExponent(phi, 2);
    let cosAlfa = CosFormulas.getCosAlfa(alfa);
    let sinAlfa = SinFormulas.getSinAlfa(alfa);

    let equalOne = 9 * tanPhiQuadratic + 1;

    let oneAndSecondSide = (sinAlfaPrimeQuadratic / sinAlfaPlusAlfaPrimeQuadratic)
      * (cosAbsolutAllMinusPhi / cosPhi);
    let thirdSide = (cubicExponential * ((3 * tanPhi * cosAlfaPlusDelta + sinAlfaPlusDelta) / equalOne))
      * ((3 * tanPhi * cosAlfa + sinAlfa) / equalOne);

    return oneAndSecondSide * thirdSide;
  }

  static getFormulaF4(alfa: number, alfaPrime: number, delta: number, phi: number): number {
    let sinAlfaPrime = SinFormulas.getSinAlfaPrime(alfaPrime);
    let sinAlfaPlusAlfaPrime = SinFormulas.getSinAlfaPlusAlfaPrime(alfa, alfaPrime);
    let cosAlfaPlusDelta = CosFormulas.getCosAlfaPlusDelta(alfa, delta);
    let cosPhi = CosFormulas.getCosPhi(phi);
    let cosAbsolutAllMinusPhi = CosFormulas.getCosAbsolutAlfaPlusAlfaPrimeMinusPhiMinusPiHalfAllMinusPhi(alfa, alfaPrime, phi);
    let sinAlfaPlusDelta = SinFormulas.getSinAlfaPlusDelta(alfa, delta);
    let tanAlfaPlusDeltaMinusPhi = TanFormulas.getTanAlfaPlusDeltaMinusPhi(alfa, delta, phi);
    let cubicExponential = ExponentialFormulas.getExponentialElevatedAt(2, delta, phi);


    let oneAndSecondAndThirdSide = (sinAlfaPrime / sinAlfaPlusAlfaPrime) * (cosAlfaPlusDelta / cosPhi) * cosAbsolutAllMinusPhi;
    let fourSide = (cosAlfaPlusDelta + sinAlfaPlusDelta * tanAlfaPlusDeltaMinusPhi) * cubicExponential;
    return oneAndSecondAndThirdSide * fourSide;
  }
}
