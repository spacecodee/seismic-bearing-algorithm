export class MinimizationErrorConstrain {

  private _alfaConstrain: boolean;
  private _alfaPrimeConstrain: boolean;
  private _deltaConstrain: boolean;
  private _phiConstrain: boolean;
  private _piConstraint: boolean;
  private _alfaAndDeltaConstrain: boolean;
  private _sinKhCosConstrain: boolean;

  constructor() {
    this._alfaConstrain = false;
    this._alfaPrimeConstrain = false;
    this._deltaConstrain = false;
    this._phiConstrain = false;
    this._piConstraint = false;
    this._alfaAndDeltaConstrain = false;
    this._sinKhCosConstrain = false;
  }

  get alfaConstrain(): boolean {
    return this._alfaConstrain;
  }

  set alfaConstrain(value: boolean) {
    this._alfaConstrain = value;
  }

  get alfaPrimeConstrain(): boolean {
    return this._alfaPrimeConstrain;
  }

  set alfaPrimeConstrain(value: boolean) {
    this._alfaPrimeConstrain = value;
  }

  get deltaConstrain(): boolean {
    return this._deltaConstrain;
  }

  set deltaConstrain(value: boolean) {
    this._deltaConstrain = value;
  }

  get phiConstrain(): boolean {
    return this._phiConstrain;
  }

  set phiConstrain(value: boolean) {
    this._phiConstrain = value;
  }

  get piConstraint(): boolean {
    return this._piConstraint;
  }

  set piConstraint(value: boolean) {
    this._piConstraint = value;
  }

  get alfaAndDeltaConstrain(): boolean {
    return this._alfaAndDeltaConstrain;
  }

  set alfaAndDeltaConstrain(value: boolean) {
    this._alfaAndDeltaConstrain = value;
  }

  get sinKhCosConstrain(): boolean {
    return this._sinKhCosConstrain;
  }

  set sinKhCosConstrain(value: boolean) {
    this._sinKhCosConstrain = value;
  }
}
