import {Component, OnInit} from '@angular/core';
import {SinFormulas} from "../../../../../utils/short-forumlas/sin-formulas";
import {CosFormulas} from "../../../../../utils/short-forumlas/cos-formulas";
import {AlgorithmFormulas} from "../../../../../utils/algorithm-formulas";
import {AlgorithmFormulasPrime} from "../../../../../utils/algorithm-formulas-prime";
import {OneFormulaConstrains} from "../../../../../utils/formulas/one-formula-constrains";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MinimizationAlfaAPrimeDeltaPhiDto} from "../../../../../core/dto/minimization-alfa-aprime-delta-phi-dto";

@Component({
  selector: 'app-one-formula',
  templateUrl: './one-formula.component.html',
  styleUrls: ['./one-formula.component.scss']
})
export class OneFormulaComponent implements OnInit {

  minimizationAlgorithm: FormGroup;
  minimizationAlfaAPrimeDeltaPhi: MinimizationAlfaAPrimeDeltaPhiDto = {
    alfaPrime: 0,
    phi: 0,
    delta: 0,
    alfa: 0,
  };

  //direct interaction
  sigmaCValue: number = 0;
  beta0Value: number = 0;
  gammaValue: number = 0;
  loadQ0Value: number = 0;

  //indirect interaction
  alfaValue: number = 0;
  alfaPrimeValue: number = 0;
  deltaValue: number = 0;
  phiValue: number = 0;
  khValue: number = 0;

  resultFormula: number = 0;
  constrainsValidation: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.minimizationAlgorithm = this.formBuilder.group({
      alfa: new FormControl('', [Validators.required]),
      alfaPrime: new FormControl('', [Validators.required]),
      delta: new FormControl('', [Validators.required]),
      phi: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  //full formula
  failureMechanismsM1(): void {
    if (!OneFormulaConstrains.applyAlfaConstrain(this.alfaValue) && !OneFormulaConstrains.applyDeltaConstrain(this.deltaValue)
      && !OneFormulaConstrains.applyPhiConstrain(this.phiValue)
      && !OneFormulaConstrains.applyAlfaPrimeConstrain(this.alfaValue, this.alfaPrimeValue)) {
      this.constrainsValidation = true;
      return;
    }

    let topFormula = (this.sigmaCValue * this.getF1()) - (0.5 * this.beta0Value * this.gammaValue * this.getF2())
      - (this.loadQ0Value * this.getF3());
    let bottomFormula = SinFormulas.getSinAlfaPrimeMinusPhi(this.alfaPrimeValue, this.phiValue)
      + (this.khValue * CosFormulas.getCosAlfaPrimeMinusPhi(this.alfaPrimeValue, this.phiValue));

    this.resultFormula = topFormula / bottomFormula;
  }

  //formula 1
  getF1(): number {
    return 35;
  }

  getF2(): number {
    let partOne = AlgorithmFormulas.getFormulaFunction1(this.alfaValue, this.alfaPrimeValue, this.phiValue)
      + AlgorithmFormulas.getFormulaFunction2(this.alfaValue, this.alfaPrimeValue, this.deltaValue, this.phiValue)
      + AlgorithmFormulas.getFormulaFunction3(this.alfaValue, this.alfaPrimeValue, this.deltaValue, this.phiValue);

    let secondPart = this.khValue
      * (AlgorithmFormulasPrime.getFormulaFuntion1Prime(this.alfaValue, this.alfaPrimeValue)
        + AlgorithmFormulasPrime.getFormulaFuntion2Prime(this.alfaValue, this.alfaPrimeValue, this.deltaValue, this.phiValue)
        + AlgorithmFormulasPrime.getFormulaFuntion3Prime(this.alfaValue, this.alfaPrimeValue, this.deltaValue, this.phiValue));

    return partOne + secondPart;
  }

  getF3(): number {
    return AlgorithmFormulas.getFormulaFunction4(this.alfaValue, this.alfaPrimeValue, this.deltaValue, this.phiValue)
      + (this.khValue * AlgorithmFormulasPrime.getFormulaFuntion4Prime(this.alfaValue, this.alfaPrimeValue, this.deltaValue, this.phiValue));
  }
}
