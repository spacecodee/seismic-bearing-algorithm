import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-one-formula',
  templateUrl: './one-formula.component.html',
  styleUrls: ['./one-formula.component.scss']
})
export class OneFormulaComponent implements OnInit {


  alfaValue: number = 0;
  deltaValue: number = 0;
  phiValue: number = 0;

  constructor() {
  }

  ngOnInit(): void {
    console.log(`xd ${Math.pow(Math.sin(1), 2)}`)
  }

  applyAlfaConstrain(value: number): boolean {
    if (0 < value) {
      this.alfaValue = value;
      return true;
    }
    return false;
  }


  //constrains to formulas
  applyAlfaPrimeConstrain(value: number): boolean {
    if (this.alfaValue != 0) {
      if (this.alfaValue < value) {
        return true;
      }
    }

    return false;
  }

  applyDeltaConstrain(value: number): boolean {
    if (0 < value) {
      this.deltaValue = value;
      return true;
    }
    return false;
  }

  applyPhiConstrain(value: number): boolean {
    if (0 < value && value < Math.PI / 2) {
      this.phiValue = value;
      return true;
    }
    return false;
  }

  //right side of formula -- FAILURE MECHANISMS
  failureMechanisms(alfa: number, alfaPrime: number, delta: number, phi: number): void {

  }

}
