import React from "react";
import BaseChartProps from "../common/BaseChartProps";
import { CurveType } from "../../../lib/inputTypes";
import { CategoricalChartFunc } from "recharts/types/chart/generateCategoricalChart";
export interface AreaChartProps extends BaseChartProps {
    stack?: boolean;
    tooltipOrder: "byCategory" | "byValue";
    curveType?: CurveType;
    connectNulls?: boolean;
    onClickChart?: CategoricalChartFunc;
    onMouseLeaveChart?: CategoricalChartFunc;
    onMouseEnterChart?: CategoricalChartFunc;
    onMouseMoveChart?: CategoricalChartFunc;
    onMouseDownChart?: CategoricalChartFunc;
    onMouseUpChart?: CategoricalChartFunc;
}
declare const AreaChart: React.ForwardRefExoticComponent<AreaChartProps & React.RefAttributes<HTMLDivElement>>;
export default AreaChart;
