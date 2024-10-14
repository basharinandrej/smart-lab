import {PointColorSLLogo} from "../enums/enums";


export const getClassNamesByStatePointColor = (pointColor: PointColorSLLogo) => {
  const pointColorMap: Record<PointColorSLLogo, string> = {
    [PointColorSLLogo.Amber]: 'ds--logo--amber',
    [PointColorSLLogo.Green]: 'ds--logo--green',
    [PointColorSLLogo.Primary]: 'ds--logo--primary',
    [PointColorSLLogo.Red]: 'ds--logo--red',
  }

  return pointColorMap[pointColor]
}
