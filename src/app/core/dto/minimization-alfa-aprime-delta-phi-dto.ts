export class MinimizationAlfaAPrimeDeltaPhiDto {

  private _alpha: number;
  private _alphaPrime: number;
  private _delta: number;
  private _phi: number;
  private _kh: number;

  constructor() {
    this._alpha = 0;
    this._alphaPrime = 0;
    this._delta = 0;
    this._phi = 0;
    this._kh = 0;
  }

  get alpha(): number {
    return this._alpha;
  }

  set alpha(value: number) {
    this._alpha = value;
  }

  get alphaPrime(): number {
    return this._alphaPrime;
  }

  set alphaPrime(value: number) {
    this._alphaPrime = value;
  }

  get delta(): number {
    return this._delta;
  }

  set delta(value: number) {
    this._delta = value;
  }

  get phi(): number {
    return this._phi;
  }

  set phi(value: number) {
    this._phi = value;
  }

  get kh(): number {
    return this._kh;
  }

  set kh(value: number) {
    this._kh = value;
  }
}
