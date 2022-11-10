import {Component, OnInit} from '@angular/core';
import {SinFormulas} from "../../../../../utils/short-forumlas/sin-formulas";
import {CosFormulas} from "../../../../../utils/short-forumlas/cos-formulas";
import {AlgorithmFormulas} from "../../../../../utils/algorithm-formulas";
import {AlgorithmFormulasPrime} from "../../../../../utils/algorithm-formulas-prime";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MinimizationAlfaAPrimeDeltaPhiDto} from "../../../../../core/dto/minimization-alfa-aprime-delta-phi-dto";
import {MinimizationErrorConstrain} from "../../../../../core/dto/minimization-error-constrain";
import {SymbolsRender} from "../../../../../utils/simbols/symbols-render";
import {OneFormulaConstrainsService} from "../../../../../service/one-formula/one-formula-constrains.service";

@Component({
  selector: 'app-one-formula',
  templateUrl: './one-formula.component.html',
  styleUrls: ['./one-formula.component.scss']
})
export class OneFormulaComponent implements OnInit {

  minimizationForm: FormGroup;
  minimizationDto = new MinimizationAlfaAPrimeDeltaPhiDto();
  errorConstraint = new MinimizationErrorConstrain();

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

  symbolsBold = SymbolsRender.getSymbolsBold();
  resultFormula: number = 0;

  constructor(private formBuilder: FormBuilder, private constrainsService: OneFormulaConstrainsService) {
    this.minimizationForm = this.formBuilder.group({
      alpha: new FormControl('', [Validators.required]),
      alphaPrime: new FormControl('', [Validators.required]),
      delta: new FormControl('', [Validators.required]),
      phi: new FormControl('', [Validators.required]),
      kh: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {

  }

  hasError(): boolean {
    return this.errorConstraint.alfaConstrain || this.errorConstraint.alfaPrimeConstrain
      || this.errorConstraint.deltaConstrain || this.errorConstraint.phiConstrain
      || this.errorConstraint.piConstraint || this.errorConstraint.alfaAndDeltaConstrain
      || this.errorConstraint.sinKhCosConstrain;
  }

  setDtoValues(): void {
    this.minimizationDto.alpha = this.minimizationForm.get('alpha')?.value;
    this.minimizationDto.alphaPrime = this.minimizationForm.get('alphaPrime')?.value;
    this.minimizationDto.delta = this.minimizationForm.get('delta')?.value;
    this.minimizationDto.phi = this.minimizationForm.get('phi')?.value;
    this.minimizationDto.kh = this.minimizationForm.get('kh')?.value;
  }

  //full formula
  failureMechanismsM1(): void {
    if (this.minimizationForm.valid) {
      this.setDtoValues();
      this.validateConstrains();

      let topFormula = (this.sigmaCValue * this.getF1()) - (0.5 * this.beta0Value * this.gammaValue * this.getF2())
        - (this.loadQ0Value * this.getF3());
      let bottomFormula = SinFormulas.getSinAlfaPrimeMinusPhi(this.alfaPrimeValue, this.phiValue)
        + (this.khValue * CosFormulas.getCosAlfaPrimeMinusPhi(this.alfaPrimeValue, this.phiValue));

      this.resultFormula = topFormula / bottomFormula;
    }
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

  private validateConstrains(): void {
    this.constrainsService.applyAlfaConstrain(this.minimizationDto.alpha)
      .subscribe(data => this.errorConstraint.alfaConstrain = !data);
    this.constrainsService.applyDeltaConstrain(this.minimizationDto.delta)
      .subscribe(data => this.errorConstraint.deltaConstrain = !data);
    this.constrainsService.applyPhiConstrain(this.minimizationDto.phi)
      .subscribe(data => this.errorConstraint.phiConstrain = !data);
    this.constrainsService.applyAlfaPrimeConstrain(this.minimizationDto.phi, this.minimizationDto.alphaPrime)
      .subscribe(data => this.errorConstraint.alfaPrimeConstrain = !data);
    this.constrainsService.applyPiConstraint(this.minimizationDto.alpha, this.minimizationDto.alphaPrime)
      .subscribe(data => this.errorConstraint.piConstraint = !data);
    this.constrainsService.applyAlfaAndDeltaConstrain(this.minimizationDto.phi, this.minimizationDto.alpha, this.minimizationDto.delta)
      .subscribe(data => this.errorConstraint.alfaAndDeltaConstrain = !data);
    this.constrainsService.applyConstrainSinKhCos(this.minimizationDto.alphaPrime, this.minimizationDto.phi, this.minimizationDto.kh)
      .subscribe(data => this.errorConstraint.sinKhCosConstrain = !data);
  }
}
