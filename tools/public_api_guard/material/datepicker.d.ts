export declare type DatepickerDropdownPositionX = 'start' | 'end';

export declare type DatepickerDropdownPositionY = 'above' | 'below';

export declare const MAT_DATEPICKER_SCROLL_STRATEGY: InjectionToken<() => ScrollStrategy>;

export declare function MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY(overlay: Overlay): () => ScrollStrategy;

export declare const MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER: {
    provide: InjectionToken<() => ScrollStrategy>;
    deps: (typeof Overlay)[];
    useFactory: typeof MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY;
};

export declare const MAT_DATEPICKER_VALIDATORS: any;

export declare const MAT_DATEPICKER_VALUE_ACCESSOR: any;

export declare class MatCalendar<D> implements AfterContentInit, AfterViewChecked, OnDestroy, OnChanges {
    _calendarHeaderPortal: Portal<any>;
    readonly _userSelection: EventEmitter<void>;
    get activeDate(): D;
    set activeDate(value: D);
    get currentView(): MatCalendarView;
    set currentView(value: MatCalendarView);
    dateClass: (date: D) => MatCalendarCellCssClasses;
    dateFilter: (date: D) => boolean;
    headerComponent: ComponentType<any>;
    get maxDate(): D | null;
    set maxDate(value: D | null);
    get minDate(): D | null;
    set minDate(value: D | null);
    readonly monthSelected: EventEmitter<D>;
    monthView: MatMonthView<D>;
    multiYearView: MatMultiYearView<D>;
    get selected(): D | null;
    set selected(value: D | null);
    readonly selectedChange: EventEmitter<D>;
    get startAt(): D | null;
    set startAt(value: D | null);
    startView: MatCalendarView;
    stateChanges: Subject<void>;
    readonly yearSelected: EventEmitter<D>;
    yearView: MatYearView<D>;
    constructor(_intl: MatDatepickerIntl, _dateAdapter: DateAdapter<D>, _dateFormats: MatDateFormats, _changeDetectorRef: ChangeDetectorRef);
    _dateSelected(date: D | null): void;
    _goToDateInView(date: D, view: 'month' | 'year' | 'multi-year'): void;
    _monthSelectedInYearView(normalizedMonth: D): void;
    _userSelected(): void;
    _yearSelectedInMultiYearView(normalizedYear: D): void;
    focusActiveCell(): void;
    ngAfterContentInit(): void;
    ngAfterViewChecked(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    updateTodaysDate(): void;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MatCalendar<any>, "mat-calendar", ["matCalendar"], { "headerComponent": "headerComponent"; "startAt": "startAt"; "startView": "startView"; "selected": "selected"; "minDate": "minDate"; "maxDate": "maxDate"; "dateFilter": "dateFilter"; "dateClass": "dateClass"; }, { "selectedChange": "selectedChange"; "yearSelected": "yearSelected"; "monthSelected": "monthSelected"; "_userSelection": "_userSelection"; }, never, never>;
    static ɵfac: i0.ɵɵFactoryDef<MatCalendar<any>, [null, { optional: true; }, { optional: true; }, null]>;
}

export declare class MatCalendarBody implements OnChanges {
    _cellPadding: string;
    _cellWidth: string;
    _firstRowOffset: number;
    activeCell: number;
    cellAspectRatio: number;
    label: string;
    labelMinRequiredCells: number;
    numCols: number;
    rows: MatCalendarCell[][];
    selectedValue: number;
    readonly selectedValueChange: EventEmitter<number>;
    todayValue: number;
    constructor(_elementRef: ElementRef<HTMLElement>, _ngZone: NgZone);
    _cellClicked(cell: MatCalendarCell): void;
    _focusActiveCell(): void;
    _isActiveCell(rowIndex: number, colIndex: number): boolean;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MatCalendarBody, "[mat-calendar-body]", ["matCalendarBody"], { "label": "label"; "rows": "rows"; "todayValue": "todayValue"; "selectedValue": "selectedValue"; "labelMinRequiredCells": "labelMinRequiredCells"; "numCols": "numCols"; "activeCell": "activeCell"; "cellAspectRatio": "cellAspectRatio"; }, { "selectedValueChange": "selectedValueChange"; }, never, never>;
    static ɵfac: i0.ɵɵFactoryDef<MatCalendarBody, never>;
}

export declare class MatCalendarCell {
    ariaLabel: string;
    cssClasses: MatCalendarCellCssClasses;
    displayValue: string;
    enabled: boolean;
    value: number;
    constructor(value: number, displayValue: string, ariaLabel: string, enabled: boolean, cssClasses?: MatCalendarCellCssClasses);
}

export declare type MatCalendarCellCssClasses = string | string[] | Set<string> | {
    [key: string]: any;
};

export declare class MatCalendarHeader<D> {
    calendar: MatCalendar<D>;
    get nextButtonLabel(): string;
    get periodButtonLabel(): string;
    get periodButtonText(): string;
    get prevButtonLabel(): string;
    constructor(_intl: MatDatepickerIntl, calendar: MatCalendar<D>, _dateAdapter: DateAdapter<D>, _dateFormats: MatDateFormats, changeDetectorRef: ChangeDetectorRef);
    currentPeriodClicked(): void;
    nextClicked(): void;
    nextEnabled(): boolean;
    previousClicked(): void;
    previousEnabled(): boolean;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MatCalendarHeader<any>, "mat-calendar-header", ["matCalendarHeader"], {}, {}, never, ["*"]>;
    static ɵfac: i0.ɵɵFactoryDef<MatCalendarHeader<any>, [null, null, { optional: true; }, { optional: true; }, null]>;
}

export declare type MatCalendarView = 'month' | 'year' | 'multi-year';

export declare class MatDatepicker<D> implements OnDestroy, CanColor, OnChanges {
    _color: ThemePalette;
    get _dateFilter(): (date: D | null) => boolean;
    _datepickerInput: MatDatepickerInput<D>;
    readonly _disabledChange: Subject<boolean>;
    get _maxDate(): D | null;
    get _minDate(): D | null;
    get _selected(): D | null;
    set _selected(value: D | null);
    readonly _selectedChanged: Subject<D>;
    calendarHeaderComponent: ComponentType<any>;
    closedStream: EventEmitter<void>;
    get color(): ThemePalette;
    set color(value: ThemePalette);
    dateClass: (date: D) => MatCalendarCellCssClasses;
    get disabled(): boolean;
    set disabled(value: boolean);
    id: string;
    readonly monthSelected: EventEmitter<D>;
    get opened(): boolean;
    set opened(value: boolean);
    openedStream: EventEmitter<void>;
    panelClass: string | string[];
    get startAt(): D | null;
    set startAt(value: D | null);
    startView: 'month' | 'year' | 'multi-year';
    get touchUi(): boolean;
    set touchUi(value: boolean);
    xPosition: DatepickerDropdownPositionX;
    yPosition: DatepickerDropdownPositionY;
    readonly yearSelected: EventEmitter<D>;
    constructor(_dialog: MatDialog, _overlay: Overlay, _ngZone: NgZone, _viewContainerRef: ViewContainerRef, scrollStrategy: any, _dateAdapter: DateAdapter<D>, _dir: Directionality, _document: any);
    _registerInput(input: MatDatepickerInput<D>): void;
    _selectMonth(normalizedMonth: D): void;
    _selectYear(normalizedYear: D): void;
    close(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    open(): void;
    select(date: D): void;
    static ngAcceptInputType_disabled: BooleanInput;
    static ngAcceptInputType_touchUi: BooleanInput;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MatDatepicker<any>, "mat-datepicker", ["matDatepicker"], { "calendarHeaderComponent": "calendarHeaderComponent"; "startAt": "startAt"; "startView": "startView"; "color": "color"; "touchUi": "touchUi"; "disabled": "disabled"; "xPosition": "xPosition"; "yPosition": "yPosition"; "panelClass": "panelClass"; "dateClass": "dateClass"; "opened": "opened"; }, { "yearSelected": "yearSelected"; "monthSelected": "monthSelected"; "openedStream": "opened"; "closedStream": "closed"; }, never, never>;
    static ɵfac: i0.ɵɵFactoryDef<MatDatepicker<any>, [null, null, null, null, null, { optional: true; }, { optional: true; }, { optional: true; }]>;
}

export declare const matDatepickerAnimations: {
    readonly transformPanel: AnimationTriggerMetadata;
    readonly fadeInCalendar: AnimationTriggerMetadata;
};

export declare class MatDatepickerContent<D> extends _MatDatepickerContentMixinBase implements AfterViewInit, OnDestroy, CanColor {
    _animationDone: Subject<void>;
    _animationState: 'enter' | 'void';
    _calendar: MatCalendar<D>;
    _isAbove: boolean;
    datepicker: MatDatepicker<D>;
    constructor(elementRef: ElementRef,
    _changeDetectorRef?: ChangeDetectorRef | undefined);
    _startExitAnimation(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MatDatepickerContent<any>, "mat-datepicker-content", ["matDatepickerContent"], { "color": "color"; }, {}, never, never>;
    static ɵfac: i0.ɵɵFactoryDef<MatDatepickerContent<any>, never>;
}

export declare class MatDatepickerInput<D> implements ControlValueAccessor, OnDestroy, AfterViewInit, Validator {
    _dateAdapter: DateAdapter<D>;
    _dateFilter: (date: D | null) => boolean;
    _datepicker: MatDatepicker<D>;
    _disabledChange: EventEmitter<boolean>;
    _onTouched: () => void;
    _valueChange: EventEmitter<D | null>;
    readonly dateChange: EventEmitter<MatDatepickerInputEvent<D>>;
    readonly dateInput: EventEmitter<MatDatepickerInputEvent<D>>;
    get disabled(): boolean;
    set disabled(value: boolean);
    set matDatepicker(value: MatDatepicker<D>);
    set matDatepickerFilter(value: (date: D | null) => boolean);
    get max(): D | null;
    set max(value: D | null);
    get min(): D | null;
    set min(value: D | null);
    get value(): D | null;
    set value(value: D | null);
    constructor(_elementRef: ElementRef<HTMLInputElement>, _dateAdapter: DateAdapter<D>, _dateFormats: MatDateFormats, _formField: MatFormField);
    _getThemePalette(): ThemePalette;
    _onBlur(): void;
    _onChange(): void;
    _onInput(value: string): void;
    _onKeydown(event: KeyboardEvent): void;
    getConnectedOverlayOrigin(): ElementRef;
    getPopupConnectionElementRef(): ElementRef;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    registerOnChange(fn: (value: any) => void): void;
    registerOnTouched(fn: () => void): void;
    registerOnValidatorChange(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    validate(c: AbstractControl): ValidationErrors | null;
    writeValue(value: D): void;
    static ngAcceptInputType_disabled: BooleanInput;
    static ngAcceptInputType_value: any;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<MatDatepickerInput<any>, "input[matDatepicker]", ["matDatepickerInput"], { "matDatepicker": "matDatepicker"; "matDatepickerFilter": "matDatepickerFilter"; "value": "value"; "min": "min"; "max": "max"; "disabled": "disabled"; }, { "dateChange": "dateChange"; "dateInput": "dateInput"; }, never>;
    static ɵfac: i0.ɵɵFactoryDef<MatDatepickerInput<any>, [null, { optional: true; }, { optional: true; }, { optional: true; }]>;
}

export declare class MatDatepickerInputEvent<D> {
    target: MatDatepickerInput<D>;
    targetElement: HTMLElement;
    value: D | null;
    constructor(
    target: MatDatepickerInput<D>,
    targetElement: HTMLElement);
}

export declare class MatDatepickerIntl {
    calendarLabel: string;
    readonly changes: Subject<void>;
    nextMonthLabel: string;
    nextMultiYearLabel: string;
    nextYearLabel: string;
    openCalendarLabel: string;
    prevMonthLabel: string;
    prevMultiYearLabel: string;
    prevYearLabel: string;
    switchToMonthViewLabel: string;
    switchToMultiYearViewLabel: string;
    formatYearRange(start: string, end: string): string;
    static ɵfac: i0.ɵɵFactoryDef<MatDatepickerIntl, never>;
    static ɵprov: i0.ɵɵInjectableDef<MatDatepickerIntl>;
}

export declare class MatDatepickerModule {
    static ɵinj: i0.ɵɵInjectorDef<MatDatepickerModule>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<MatDatepickerModule, [typeof i1.MatCalendar, typeof i2.MatCalendarBody, typeof i3.MatDatepicker, typeof i3.MatDatepickerContent, typeof i4.MatDatepickerInput, typeof i5.MatDatepickerToggle, typeof i5.MatDatepickerToggleIcon, typeof i6.MatMonthView, typeof i7.MatYearView, typeof i8.MatMultiYearView, typeof i1.MatCalendarHeader], [typeof i9.CommonModule, typeof i10.MatButtonModule, typeof i11.MatDialogModule, typeof i12.OverlayModule, typeof i13.A11yModule, typeof i14.PortalModule], [typeof i15.CdkScrollableModule, typeof i1.MatCalendar, typeof i2.MatCalendarBody, typeof i3.MatDatepicker, typeof i3.MatDatepickerContent, typeof i4.MatDatepickerInput, typeof i5.MatDatepickerToggle, typeof i5.MatDatepickerToggleIcon, typeof i6.MatMonthView, typeof i7.MatYearView, typeof i8.MatMultiYearView, typeof i1.MatCalendarHeader]>;
}

export declare class MatDatepickerToggle<D> implements AfterContentInit, OnChanges, OnDestroy {
    _button: MatButton;
    _customIcon: MatDatepickerToggleIcon;
    _intl: MatDatepickerIntl;
    datepicker: MatDatepicker<D>;
    disableRipple: boolean;
    get disabled(): boolean;
    set disabled(value: boolean);
    tabIndex: number | null;
    constructor(_intl: MatDatepickerIntl, _changeDetectorRef: ChangeDetectorRef, defaultTabIndex: string);
    _open(event: Event): void;
    ngAfterContentInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    static ngAcceptInputType_disabled: BooleanInput;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MatDatepickerToggle<any>, "mat-datepicker-toggle", ["matDatepickerToggle"], { "datepicker": "for"; "tabIndex": "tabIndex"; "disabled": "disabled"; "disableRipple": "disableRipple"; }, {}, ["_customIcon"], ["[matDatepickerToggleIcon]"]>;
    static ɵfac: i0.ɵɵFactoryDef<MatDatepickerToggle<any>, [null, null, { attribute: "tabindex"; }]>;
}

export declare class MatDatepickerToggleIcon {
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<MatDatepickerToggleIcon, "[matDatepickerToggleIcon]", never, {}, {}, never>;
    static ɵfac: i0.ɵɵFactoryDef<MatDatepickerToggleIcon, never>;
}

export declare class MatMonthView<D> implements AfterContentInit, OnDestroy {
    _dateAdapter: DateAdapter<D>;
    _firstWeekOffset: number;
    _matCalendarBody: MatCalendarBody;
    _monthLabel: string;
    _selectedDate: number | null;
    _todayDate: number | null;
    readonly _userSelection: EventEmitter<void>;
    _weekdays: {
        long: string;
        narrow: string;
    }[];
    _weeks: MatCalendarCell[][];
    get activeDate(): D;
    set activeDate(value: D);
    readonly activeDateChange: EventEmitter<D>;
    dateClass: (date: D) => MatCalendarCellCssClasses;
    dateFilter: (date: D) => boolean;
    get maxDate(): D | null;
    set maxDate(value: D | null);
    get minDate(): D | null;
    set minDate(value: D | null);
    get selected(): D | null;
    set selected(value: D | null);
    readonly selectedChange: EventEmitter<D | null>;
    constructor(_changeDetectorRef: ChangeDetectorRef, _dateFormats: MatDateFormats, _dateAdapter: DateAdapter<D>, _dir?: Directionality | undefined);
    _dateSelected(date: number): void;
    _focusActiveCell(): void;
    _handleCalendarBodyKeydown(event: KeyboardEvent): void;
    _init(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MatMonthView<any>, "mat-month-view", ["matMonthView"], { "activeDate": "activeDate"; "selected": "selected"; "minDate": "minDate"; "maxDate": "maxDate"; "dateFilter": "dateFilter"; "dateClass": "dateClass"; }, { "selectedChange": "selectedChange"; "_userSelection": "_userSelection"; "activeDateChange": "activeDateChange"; }, never, never>;
    static ɵfac: i0.ɵɵFactoryDef<MatMonthView<any>, [null, { optional: true; }, { optional: true; }, { optional: true; }]>;
}

export declare class MatMultiYearView<D> implements AfterContentInit, OnDestroy {
    _dateAdapter: DateAdapter<D>;
    _matCalendarBody: MatCalendarBody;
    _selectedYear: number | null;
    _todayYear: number;
    _years: MatCalendarCell[][];
    get activeDate(): D;
    set activeDate(value: D);
    readonly activeDateChange: EventEmitter<D>;
    dateFilter: (date: D) => boolean;
    get maxDate(): D | null;
    set maxDate(value: D | null);
    get minDate(): D | null;
    set minDate(value: D | null);
    get selected(): D | null;
    set selected(value: D | null);
    readonly selectedChange: EventEmitter<D>;
    readonly yearSelected: EventEmitter<D>;
    constructor(_changeDetectorRef: ChangeDetectorRef, _dateAdapter: DateAdapter<D>, _dir?: Directionality | undefined);
    _focusActiveCell(): void;
    _getActiveCell(): number;
    _handleCalendarBodyKeydown(event: KeyboardEvent): void;
    _init(): void;
    _yearSelected(year: number): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MatMultiYearView<any>, "mat-multi-year-view", ["matMultiYearView"], { "activeDate": "activeDate"; "selected": "selected"; "minDate": "minDate"; "maxDate": "maxDate"; "dateFilter": "dateFilter"; }, { "selectedChange": "selectedChange"; "yearSelected": "yearSelected"; "activeDateChange": "activeDateChange"; }, never, never>;
    static ɵfac: i0.ɵɵFactoryDef<MatMultiYearView<any>, [null, { optional: true; }, { optional: true; }]>;
}

export declare class MatYearView<D> implements AfterContentInit, OnDestroy {
    _dateAdapter: DateAdapter<D>;
    _matCalendarBody: MatCalendarBody;
    _months: MatCalendarCell[][];
    _selectedMonth: number | null;
    _todayMonth: number | null;
    _yearLabel: string;
    get activeDate(): D;
    set activeDate(value: D);
    readonly activeDateChange: EventEmitter<D>;
    dateFilter: (date: D) => boolean;
    get maxDate(): D | null;
    set maxDate(value: D | null);
    get minDate(): D | null;
    set minDate(value: D | null);
    readonly monthSelected: EventEmitter<D>;
    get selected(): D | null;
    set selected(value: D | null);
    readonly selectedChange: EventEmitter<D>;
    constructor(_changeDetectorRef: ChangeDetectorRef, _dateFormats: MatDateFormats, _dateAdapter: DateAdapter<D>, _dir?: Directionality | undefined);
    _focusActiveCell(): void;
    _handleCalendarBodyKeydown(event: KeyboardEvent): void;
    _init(): void;
    _monthSelected(month: number): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MatYearView<any>, "mat-year-view", ["matYearView"], { "activeDate": "activeDate"; "selected": "selected"; "minDate": "minDate"; "maxDate": "maxDate"; "dateFilter": "dateFilter"; }, { "selectedChange": "selectedChange"; "monthSelected": "monthSelected"; "activeDateChange": "activeDateChange"; }, never, never>;
    static ɵfac: i0.ɵɵFactoryDef<MatYearView<any>, [null, { optional: true; }, { optional: true; }, { optional: true; }]>;
}

export declare const yearsPerPage = 24;

export declare const yearsPerRow = 4;
