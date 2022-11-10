import {SymbolsDto} from "../../core/dto/symbols-dto";

export class SymbolsRender {

  private static alphaBold = "<strong>&alpha;</strong>";
  private static alphaPrimeBold = "<strong>&alpha;</strong>'";
  private static deltaBold = "<strong>&delta;</strong>";
  private static phiBold = "<strong>&phi;</strong>";
  private static piBold = "<strong>&pi;</strong>";

  public static getSymbolsBold(): SymbolsDto {
    return {
      alpha: this.alphaBold,
      alphaPrime: this.alphaPrimeBold,
      delta: this.deltaBold,
      phi: this.phiBold,
      pi: this.piBold
    }
  }
}
