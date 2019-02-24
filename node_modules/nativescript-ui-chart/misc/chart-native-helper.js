Object.defineProperty(exports, "__esModule", { value: true });
var chart_public_enum_1 = require("./chart-public-enum");
function convertToAndroidPaletteMode(nsMode) {
    if (!nsMode) {
        return null;
    }
    if (chart_public_enum_1.ChartSeriesPaletteMode.Item.toLowerCase() === nsMode.toLowerCase()) {
        return com.telerik.widget.palettes.ChartSeriesPaletteMode.ITEM;
    }
    else if (chart_public_enum_1.ChartSeriesPaletteMode.Series.toLowerCase() === nsMode.toLowerCase()) {
        return com.telerik.widget.palettes.ChartSeriesPaletteMode.SERIES;
    }
    return null;
}
exports.convertToAndroidPaletteMode = convertToAndroidPaletteMode;
function convertToIOSPaletteMode(nsMode) {
    if (!nsMode) {
        return null;
    }
    if (chart_public_enum_1.ChartSeriesPaletteMode.Item.toLowerCase() === nsMode.toLowerCase()) {
        return 1 /* UseItemIndex */;
    }
    else if (chart_public_enum_1.ChartSeriesPaletteMode.Series.toLowerCase() === nsMode.toLowerCase()) {
        return 0 /* UseSeriesIndex */;
    }
    return null;
}
exports.convertToIOSPaletteMode = convertToIOSPaletteMode;
