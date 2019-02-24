import { View, Property, ViewBase } from "tns-core-modules/ui/core/view";
import { AddArrayFromBuilder } from "tns-core-modules/ui/core/view";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import * as gaugesInitializers from "./initializers/gauges-initializers.common";
import { EventData } from "tns-core-modules/data/observable";
export declare namespace ScaleLabelsLayoutMode {
    const Outer = "Outer";
    const Inner = "Inner";
}
export declare namespace ScaleTicksLayoutMode {
    const Outer = "Outer";
    const Inner = "Inner";
}
export declare namespace BarIndicatorCapMode {
    const Round = "Round";
    const Edge = "Edge";
}
export declare namespace knownCollections {
    const scales = "scales";
    const indicators = "indicators";
}
export declare class RadGauge extends View implements AddArrayFromBuilder {
    protected _initializer: gaugesInitializers.RadGaugeValueMapper;
    scales: ObservableArray<GaugeScale>;
    title: string;
    subtitle: string;
    fillColor: string;
    titleStyle: TitleStyle;
    subtitleStyle: SubtitleStyle;
    constructor();
    static scalesProperty: Property<RadGauge, ObservableArray<GaugeScale>>;
    static titleProperty: Property<RadGauge, string>;
    static subtitleProperty: Property<RadGauge, string>;
    static fillColorProperty: Property<RadGauge, string>;
    static titleStyleProperty: Property<RadGauge, TitleStyle>;
    static subtitleStyleProperty: Property<RadGauge, SubtitleStyle>;
    private onScalesPropertyChanged;
    private onTitlePropertyChanged;
    private onSubtitlePropertyChanged;
    private onFillColorPropertyChanged;
    private bindingContextChanged;
    protected _onScalesPropertyChanged(oldValue: ObservableArray<GaugeScale>, newValue: ObservableArray<GaugeScale>): void;
    protected scalesCollectionChanged(eventData: EventData): void;
    protected reloadScales(): void;
    private onTitleStylePropertyChanged;
    private onSubtitleStylePropertyChanged;
    protected _onTitlePropertyChanged(oldValue: string, newValue: string): void;
    protected _onSubtitlePropertyChanged(oldValue: string, newValue: string): void;
    protected _onFillColorPropertyChanged(oldValue: string, newValue: string): void;
    protected _onTitleStylePropertyChanged(oldValue: TitleStyle, newValue: TitleStyle): void;
    protected _onSubtitleStylePropertyChanged(oldValue: SubtitleStyle, newValue: SubtitleStyle): void;
    readonly nativeObject: any;
    readonly _nativeView: any;
    readonly initializer: gaugesInitializers.RadGaugeValueMapper;
    _addArrayFromBuilder(name: string, value: Array<any>): void;
}
export declare class RadRadialGauge extends RadGauge {
}
export declare class GaugeScale extends ViewBase implements AddArrayFromBuilder {
    protected _initializer: gaugesInitializers.GaugeScaleValueMapper;
    protected _owner: RadGauge;
    indicators: ObservableArray<GaugeIndicator>;
    minimum: number;
    maximum: number;
    scaleStyle: ScaleStyle;
    constructor();
    private bindingContextChanged;
    static indicatorsProperty: Property<GaugeScale, ObservableArray<GaugeIndicator>>;
    static minimumProperty: Property<GaugeScale, number>;
    static maximumProperty: Property<GaugeScale, number>;
    static scaleStyleProperty: Property<GaugeScale, ScaleStyle>;
    private onIndicatorsPropertyChanged;
    private onMinimumPropertyChanged;
    private onMaximumPropertyChanged;
    private onScaleStylePropertyChanged;
    protected _onIndicatorsPropertyChanged(oldValue: ObservableArray<GaugeIndicator>, newValue: ObservableArray<GaugeIndicator>): void;
    protected _onMinimumPropertyChanged(oldValue: number, newValue: number): void;
    protected _onMaximumPropertyChanged(oldValue: number, newValue: number): void;
    protected _onScaleStylePropertyChanged(oldValue: ScaleStyle, newValue: ScaleStyle): void;
    _addArrayFromBuilder(name: string, value: Array<any>): void;
    indicatorsCollectionChanged(eventData: EventData): void;
    readonly android: any;
    readonly ios: any;
    readonly nativeObject: any;
    readonly _nativeView: any;
    readonly initializer: gaugesInitializers.GaugeScaleValueMapper;
    owner: RadGauge;
}
export declare class RadialScale extends GaugeScale {
    startAngle: number;
    sweepAngle: number;
    radius: number;
    static startAngleProperty: Property<RadialScale, number>;
    static sweepAngleProperty: Property<RadialScale, number>;
    static radiusProperty: Property<RadialScale, number>;
    private onStartAnglePropertyChanged;
    private onSweepAnglePropertyChanged;
    private onRadiusPropertyChanged;
    protected _onStartAnglePropertyChanged(oldValue: number, newValue: number): void;
    protected _onSweepAnglePropertyChanged(oldValue: number, newValue: number): void;
    protected _onRadiusPropertyChanged(oldValue: number, newValue: number): void;
}
export declare class GaugeIndicator extends ViewBase {
    protected _owner: GaugeScale;
    protected _initializer: gaugesInitializers.GaugeIndicatorValueMapper;
    isAnimated: boolean;
    animationDuration: number;
    readonly initializer: gaugesInitializers.GaugeIndicatorValueMapper;
    static isAnimatedProperty: Property<GaugeIndicator, boolean>;
    static animationDurationProperty: Property<GaugeIndicator, number>;
    private onIsAnimatedPropertyChanged;
    private onAnimationDurationPropertyChanged;
    protected _onIsAnimatedPropertyChanged(oldValue: boolean, newValue: boolean): void;
    protected _onAnimationDurationPropertyChanged(oldValue: number, newValue: number): void;
    readonly ios: any;
    readonly android: any;
    owner: GaugeScale;
    readonly nativeObject: any;
    readonly _nativeView: any;
}
export declare class RadialNeedle extends GaugeIndicator {
    needleStyle: NeedleStyle;
    value: number;
    constructor();
    private bindingContextChanged;
    static needleStyleProperty: Property<RadialNeedle, NeedleStyle>;
    static valueProperty: Property<RadialNeedle, number>;
    private onNeedleStylePropertyChanged;
    private onValuePropertyChanged;
    protected _onNeedleStylePropertyChanged(oldValue: NeedleStyle, newValue: NeedleStyle): void;
    protected _onValuePropertyChanged(oldValue: number, newValue: number): void;
    readonly initializer: gaugesInitializers.GaugeIndicatorValueMapper;
}
export declare class BarIndicator extends GaugeIndicator {
    indicatorStyle: BarIndicatorStyle;
    minimum: number;
    maximum: number;
    location: number;
    animationStartValue: number;
    constructor();
    private bindingContextChanged;
    static indicatorStyleProperty: Property<BarIndicator, BarIndicatorStyle>;
    static minimumProperty: Property<BarIndicator, number>;
    static maximumProperty: Property<BarIndicator, number>;
    static locationProperty: Property<BarIndicator, number>;
    static animationStartValueProperty: Property<BarIndicator, number>;
    private onIndicatorStylePropertyChanged;
    private onMinimumPropertyChanged;
    private onMaximumPropertyChanged;
    private onLocationPropertyChanged;
    private onAnimationStartValueChanged;
    protected _onIndicatorStyleChanged(oldValue: BarIndicatorStyle, newValue: BarIndicatorStyle): void;
    protected _onMinimumPropertyChanged(oldValue: number, newValue: number): void;
    protected _onMaximumPropertyChanged(oldValue: number, newValue: number): void;
    protected _onLocationPropertyChanged(oldValue: number, newValue: number): void;
    protected _onAnimationStartValueChanged(oldValue: number, newValue: number): void;
    readonly initializer: gaugesInitializers.GaugeIndicatorValueMapper;
}
export declare class RadialBarIndicator extends BarIndicator {
}
export declare class GaugeStyleBase extends ViewBase {
    fillColor: string;
    strokeColor: string;
    strokeWidth: number;
    static fillColorProperty: Property<GaugeStyleBase, string>;
    static strokeColorProperty: Property<GaugeStyleBase, string>;
    static strokeWidthProperty: Property<GaugeStyleBase, number>;
    private onFillColorPropertyChanged;
    private onStrokeColorPropertyChanged;
    private onStrokeWidthPropertyChanged;
    protected _onFillColorPropertyChanged(oldValue: string, newValue: string): void;
    protected _onStrokeColorPropertyChanged(oldValue: string, newValue: string): void;
    protected _onStrokeWidthPropertyChanged(oldValue: number, newValue: number): void;
    private _owner;
    owner: any;
    protected shouldUpdateNativeObject(): boolean;
}
export declare class TitleStyle extends GaugeStyleBase {
    textSize: number;
    textColor: string;
    horizontalOffset: number;
    verticalOffset: number;
    static textSizeProperty: Property<TitleStyle, number>;
    static textColorProperty: Property<TitleStyle, string>;
    static horizontalOffsetProperty: Property<TitleStyle, number>;
    static verticalOffsetProperty: Property<TitleStyle, number>;
    private onTextSizePropertyChanged;
    private onTextColorPropertyChanged;
    private onHorizontalOffsetPropertyChanged;
    private onVerticalOffsetPropertyChanged;
    protected _onTextSizePropertyChanged(oldValue: number, newValue: number): void;
    protected _onTextColorPropertyChanged(oldValue: string, newValue: string): void;
    protected _onHorizontalOffsetPropertyChanged(oldValue: number, newValue: number): void;
    protected _onVerticalOffsetPropertyChanged(oldValue: number, newValue: number): void;
}
export declare class SubtitleStyle extends TitleStyle {
}
export declare class ScaleStyle extends GaugeStyleBase {
    lineColor: string;
    lineThickness: number;
    ticksVisible: boolean;
    majorTicksCount: number;
    minorTicksCount: number;
    ticksOffset: number;
    ticksLayoutMode: string;
    majorTicksWidth: number;
    minorTicksWidth: number;
    majorTicksLength: number;
    minorTicksLength: number;
    majorTicksStrokeColor: string;
    minorTicksStrokeColor: string;
    majorTicksFillColor: string;
    minorTicksFillColor: string;
    majorTicksStrokeWidth: number;
    minorTicksStrokeWidth: number;
    labelsVisible: boolean;
    labelsCount: number;
    labelsLayoutMode: string;
    labelsOffset: number;
    labelsSize: number;
    labelsColor: string;
    static lineColorProperty: Property<ScaleStyle, string>;
    private onLineColorPropertyChanged;
    protected _onLineColorPropertyChanged(oldValue: string, newValue: string): void;
    static lineThicknessProperty: Property<ScaleStyle, number>;
    private onLineThicknessPropertyChanged;
    protected _onLineThicknessPropertyChanged(oldValue: number, newValue: number): void;
    static ticksVisibleProperty: Property<ScaleStyle, boolean>;
    private onTicksVisiblePropertyChanged;
    protected _onTicksVisiblePropertyChanged(oldValue: boolean, newValue: boolean): void;
    static majorTicksCountProperty: Property<ScaleStyle, number>;
    private onMajorTicksCountPropertyChanged;
    protected _onMajorTicksCountPropertyChanged(oldValue: number, newValue: number): void;
    static minorTicksCountProperty: Property<ScaleStyle, number>;
    private onMinorTicksCountPropertyChanged;
    protected _onMinorTicksCountPropertyChanged(oldValue: number, newValue: number): void;
    static ticksOffsetProperty: Property<ScaleStyle, number>;
    private onТicksOffsetPropertyChanged;
    protected _onТicksOffsetPropertyChanged(oldValue: number, newValue: number): void;
    static ticksLayoutModeProperty: Property<ScaleStyle, string>;
    private onTicksLayoutModePropertyChanged;
    protected _onTicksLayoutModePropertyChanged(oldValue: string, newValue: string): void;
    static majorTicksWidthProperty: Property<ScaleStyle, number>;
    private onMajorTicksWidthPropertyChanged;
    protected _onMajorTicksWidthPropertyChanged(oldValue: number, newValue: number): void;
    static minorTicksWidthProperty: Property<ScaleStyle, number>;
    private onMinorTicksWidthPropertyChanged;
    protected _onMinorTicksWidthPropertyChanged(oldValue: number, newValue: number): void;
    static majorTicksLengthProperty: Property<ScaleStyle, number>;
    private onMajorTicksLengthPropertyChanged;
    protected _onMajorTicksLengthPropertyChanged(oldValue: number, newValue: number): void;
    static minorTicksLengthProperty: Property<ScaleStyle, number>;
    private onMinorTicksLengthPropertyChanged;
    protected _onMinorTicksLengthPropertyChanged(oldValue: number, newValue: number): void;
    static majorTicksStrokeColorProperty: Property<ScaleStyle, string>;
    private onMajorTicksStrokeColorPropertyChanged;
    protected _onMajorTicksStrokeColorPropertyChanged(oldValue: string, newValue: string): void;
    static minorTicksStrokeColorProperty: Property<ScaleStyle, string>;
    private onМinorTicksStrokeColorPropertyChanged;
    protected _onМinorTicksStrokeColorPropertyChanged(oldValue: string, newValue: string): void;
    static majorTicksFillColorProperty: Property<ScaleStyle, string>;
    private onMajorTicksFillColorPropertyChanged;
    protected _onMajorTicksFillColorPropertyChanged(oldValue: string, newValue: string): void;
    static minorTicksFillColorProperty: Property<ScaleStyle, string>;
    private onMinorTicksFillColorPropertyChanged;
    protected _onMinorTicksFillColorPropertyChanged(oldValue: string, newValue: string): void;
    static majorTicksStrokeWidthProperty: Property<ScaleStyle, number>;
    private onМajorTicksStrokeWidthPropertyChanged;
    protected _onМajorTicksStrokeWidthPropertyChanged(oldValue: number, newValue: number): void;
    static minorTicksStrokeWidthProperty: Property<ScaleStyle, number>;
    private onМinorTicksStrokeWidthPropertyChanged;
    protected _onМinorTicksStrokeWidthPropertyChanged(oldValue: number, newValue: number): void;
    static labelsVisibleProperty: Property<ScaleStyle, boolean>;
    private onLabelsVisiblePropertyChanged;
    protected _onLabelsVisiblePropertyChanged(oldValue: boolean, newValue: boolean): void;
    static labelsCountProperty: Property<ScaleStyle, number>;
    private onLabelsCountPropertyChanged;
    protected _onLabelsCountPropertyChanged(oldValue: number, newValue: number): void;
    static labelsLayoutModeProperty: Property<ScaleStyle, string>;
    private onLabelsLayoutModePropertyChanged;
    protected _onLabelsLayoutModePropertyChanged(oldValue: string, newValue: string): void;
    static labelsOffsetProperty: Property<ScaleStyle, number>;
    private onLabelsOffsetPropertyChanged;
    protected _onLabelsOffsetPropertyChanged(oldValue: number, newValue: number): void;
    static labelsSizeProperty: Property<ScaleStyle, number>;
    private onLabelsSizePropertyChanged;
    protected _onLabelsSizePropertyChanged(oldValue: number, newValue: number): void;
    static labelsColorProperty: Property<ScaleStyle, string>;
    private onLabelsColorPropertyChanged;
    protected _onLabelsColorPropertyChanged(oldValue: string, newValue: string): void;
}
export declare class IndicatorStyle extends GaugeStyleBase {
}
export declare class NeedleStyle extends IndicatorStyle {
    length: number;
    bottomWidth: number;
    topWidth: number;
    circleRadius: number;
    circleInnerRadius: number;
    offset: number;
    circleFillColor: string;
    circleStrokeColor: string;
    circleStrokeWidth: number;
    static lengthProperty: Property<NeedleStyle, number>;
    private onLengthPropertyChanged;
    protected _onLengthPropertyChanged(oldValue: number, newValue: number): void;
    static bottomWidthProperty: Property<NeedleStyle, number>;
    private onBottomWidthPropertyChanged;
    protected _onBottomWidthPropertyChanged(oldValue: number, newValue: number): void;
    static topWidthProperty: Property<NeedleStyle, number>;
    private onTopWidthPropertyChanged;
    protected _onTopWidthPropertyChanged(oldValue: number, newValue: number): void;
    static circleRadiusProperty: Property<NeedleStyle, number>;
    private onCircleRadiusPropertyChanged;
    protected _onCircleRadiusPropertyChanged(oldValue: number, newValue: number): void;
    static circleInnerRadiusProperty: Property<NeedleStyle, number>;
    private onCircleInnerRadiusPropertyChanged;
    protected _onCircleInnerRadiusPropertyChanged(oldValue: number, newValue: number): void;
    static offsetProperty: Property<NeedleStyle, number>;
    private onOffsetPropertyChanged;
    protected _onOffsetPropertyChanged(oldValue: number, newValue: number): void;
    static circleFillColorProperty: Property<NeedleStyle, string>;
    private onCircleFillColorPropertyChanged;
    protected _onCircleFillColorPropertyChanged(oldValue: string, newValue: string): void;
    static circleStrokeColorProperty: Property<NeedleStyle, string>;
    private onCircleStrokeColorPropertyChanged;
    protected _onCircleStrokeColorPropertyChanged(oldValue: string, newValue: string): void;
    static circleStrokeWidthProperty: Property<NeedleStyle, number>;
    private onCircleStrokeWidthPropertyChanged;
    protected _onCircleStrokeWidthPropertyChanged(oldValue: number, newValue: number): void;
}
export declare class BarIndicatorStyle extends IndicatorStyle {
    cap: string;
    barWidth: number;
    static capProperty: Property<BarIndicatorStyle, string>;
    private onCapPropertyChanged;
    protected _onCapPropertyChanged(oldValue: string, newValue: string): void;
    static barWidthProperty: Property<BarIndicatorStyle, number>;
    private onBarWidthPropertyChanged;
    protected _onBarWidthPropertyChanged(oldValue: number, newValue: number): void;
}
