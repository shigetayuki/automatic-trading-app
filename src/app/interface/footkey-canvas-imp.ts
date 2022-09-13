import { CanvasContentsImp } from "./canvas-contents-imp";
import { CanvasTitileContentsImp } from "./canvas-titile-contents-imp";

export interface FootkeyCanvasImp {
    xSize:number,
    ySize:number,
    footkeyList:[CanvasContentsImp],
    resultList:[CanvasContentsImp],
    xLabelList:[CanvasTitileContentsImp],
    yLabelList:[CanvasTitileContentsImp]
}
