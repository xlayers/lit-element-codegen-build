import { Injectable, ɵɵdefineInjectable, ɵɵinject, NgModule } from '@angular/core';
import { __assign } from 'tslib';
import { FormatService, SymbolService, ImageService, LayerService } from '@xlayers/sketch-lib';
import { WebCodeGenService, WebCodeGenModule } from '@xlayers/web-codegen';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LitElementDocGenService = /** @class */ (function () {
    function LitElementDocGenService() {
    }
    /**
     * @param {?} data
     * @return {?}
     */
    LitElementDocGenService.prototype.aggregate = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return [
            {
                uri: 'README.md',
                value: this.renderReadme(data.meta.app),
                language: 'markdown',
                kind: 'text'
            }
        ];
    };
    /**
     * @private
     * @param {?} name
     * @return {?}
     */
    LitElementDocGenService.prototype.renderReadme = /**
     * @private
     * @param {?} name
     * @return {?}
     */
    function (name) {
        return "## How to use the " + name + " Web Components built with LitElement\n\nThis implementation export the assets as single file web component that can be consumed in the following ways:\n\n```html\n<!\u2013\u2013 index.html \u2013\u2013>\n<script src=\"./x-layers-element.js\"></script>\n<x-layers-element></x-layers-element>\n```\n\n> Needed polyfills must be imported, in most cases you can import it globally or use different strategy. For example:\n\n```html\n<!\u2013\u2013 index.html \u2013\u2013>\n<!-- Load polyfills; note that \"loader\" will load these async -->\n<script src=\"node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js\" defer></script>\n\n<!-- Load a custom element definitions in 'waitFor' and return a promise -->\n<script type=\"module\">\n  WebComponents.waitFor(() => {\n    return import('./x-layers-element.js');\n  });\n</script>\n\n<!-- Use the custom element -->\n<x-layers-element></x-layers-element>\n```\n\n>  [LitElement website](https://lit-element.polymer-project.org/)\n>  For more information about [web components and browser support](https://github.com/WebComponents/webcomponentsjs#browser-support)";
    };
    LitElementDocGenService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ LitElementDocGenService.ngInjectableDef = ɵɵdefineInjectable({ factory: function LitElementDocGenService_Factory() { return new LitElementDocGenService(); }, token: LitElementDocGenService, providedIn: "root" });
    return LitElementDocGenService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LitElementAggregatorService = /** @class */ (function () {
    function LitElementAggregatorService(formatService, webCodeGenService) {
        this.formatService = formatService;
        this.webCodeGenService = webCodeGenService;
    }
    /**
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    LitElementAggregatorService.prototype.aggregate = /**
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    function (current, data, options) {
        /** @type {?} */
        var fileName = this.formatService.normalizeName(current.name);
        /** @type {?} */
        var files = this.webCodeGenService.aggregate(current, data, options);
        /** @type {?} */
        var html = files.find((/**
         * @param {?} file
         * @return {?}
         */
        function (file) { return file.language === 'html'; }));
        /** @type {?} */
        var css = files.find((/**
         * @param {?} file
         * @return {?}
         */
        function (file) { return file.language === 'css'; }));
        return [
            {
                kind: 'litElement',
                value: this.renderComponent(current.name, html.value, css.value, options),
                language: 'javascript',
                uri: options.componentDir + "/" + fileName + ".js"
            }
        ];
    };
    /**
     * @private
     * @param {?} name
     * @param {?} html
     * @param {?} css
     * @param {?} options
     * @return {?}
     */
    LitElementAggregatorService.prototype.renderComponent = /**
     * @private
     * @param {?} name
     * @param {?} html
     * @param {?} css
     * @param {?} options
     * @return {?}
     */
    function (name, html, css, options) {
        /** @type {?} */
        var className = this.formatService.className(name);
        /** @type {?} */
        var normalizedName = this.formatService.normalizeName(name);
        /** @type {?} */
        var tagName = "" + options.xmlPrefix + normalizedName;
        return "import { LitElement, html, css } from 'lit-element';\n\nclass " + className + " extends LitElement {\n  static get styles() {\n    return css`\n" + this.formatService.indentFile(3, css).join('\n') + "\n    `\n  }\n  constructor(){\n    super();\n  }\n\n  render() {\n    return html`\n" + this.formatService.indentFile(3, html).join('\n') + "\n    `\n  }\n}\n\ncustomElements.define('" + tagName + "' , " + className + ");";
    };
    LitElementAggregatorService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    LitElementAggregatorService.ctorParameters = function () { return [
        { type: FormatService },
        { type: WebCodeGenService }
    ]; };
    /** @nocollapse */ LitElementAggregatorService.ngInjectableDef = ɵɵdefineInjectable({ factory: function LitElementAggregatorService_Factory() { return new LitElementAggregatorService(ɵɵinject(FormatService), ɵɵinject(WebCodeGenService)); }, token: LitElementAggregatorService, providedIn: "root" });
    return LitElementAggregatorService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    LitElementAggregatorService.prototype.formatService;
    /**
     * @type {?}
     * @private
     */
    LitElementAggregatorService.prototype.webCodeGenService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LitElementCodeGenService = /** @class */ (function () {
    function LitElementCodeGenService(symbolService, imageService, webCodeGen, litElementAggretatorService, layerService) {
        this.symbolService = symbolService;
        this.imageService = imageService;
        this.webCodeGen = webCodeGen;
        this.litElementAggretatorService = litElementAggretatorService;
        this.layerService = layerService;
    }
    /**
     * @param {?} current
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    LitElementCodeGenService.prototype.compute = /**
     * @param {?} current
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    function (current, data, options) {
        this.webCodeGen.compute(current, data, this.compileOptions(options));
    };
    /**
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    LitElementCodeGenService.prototype.aggregate = /**
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    function (data, options) {
        var _this = this;
        return data.pages.flatMap((/**
         * @param {?} page
         * @return {?}
         */
        function (page) {
            return _this.visit(page, data, _this.compileOptions(options));
        }));
    };
    /**
     * @param {?} current
     * @return {?}
     */
    LitElementCodeGenService.prototype.identify = /**
     * @param {?} current
     * @return {?}
     */
    function (current) {
        return this.webCodeGen.identify(current);
    };
    /**
     * @param {?} current
     * @return {?}
     */
    LitElementCodeGenService.prototype.context = /**
     * @param {?} current
     * @return {?}
     */
    function (current) {
        return this.webCodeGen.context(current);
    };
    /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    LitElementCodeGenService.prototype.visit = /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    function (current, data, options) {
        return this.visitContent(current, data, options).concat(this.litElementAggretatorService.aggregate(current, data, options));
    };
    /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    LitElementCodeGenService.prototype.visitContent = /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    function (current, data, options) {
        if (this.layerService.identify(current)) {
            return this.visitLayer(current, data, options);
        }
        else if (this.symbolService.identify(current)) {
            return this.visitSymbolMaster(current, data, options);
        }
        else if (this.imageService.identify(current)) {
            return this.imageService.aggregate(current, data, options);
        }
        return [];
    };
    /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    LitElementCodeGenService.prototype.visitLayer = /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    function (current, data, options) {
        var _this = this;
        return this.layerService
            .lookup(current)
            .flatMap((/**
         * @param {?} layer
         * @return {?}
         */
        function (layer) { return _this.visitContent(layer, data, options); }));
    };
    /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    LitElementCodeGenService.prototype.visitSymbolMaster = /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    function (current, data, options) {
        /** @type {?} */
        var symbolMaster = this.symbolService.lookup(current, data);
        if (symbolMaster) {
            return this.visit(symbolMaster, data, options);
        }
        return [];
    };
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    LitElementCodeGenService.prototype.compileOptions = /**
     * @private
     * @param {?} options
     * @return {?}
     */
    function (options) {
        return __assign({ textTagName: 'span', bitmapTagName: 'img', blockTagName: 'div', xmlPrefix: 'xly-', cssPrefix: 'xly_', componentDir: 'components', assetDir: 'assets' }, options);
    };
    LitElementCodeGenService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    LitElementCodeGenService.ctorParameters = function () { return [
        { type: SymbolService },
        { type: ImageService },
        { type: WebCodeGenService },
        { type: LitElementAggregatorService },
        { type: LayerService }
    ]; };
    /** @nocollapse */ LitElementCodeGenService.ngInjectableDef = ɵɵdefineInjectable({ factory: function LitElementCodeGenService_Factory() { return new LitElementCodeGenService(ɵɵinject(SymbolService), ɵɵinject(ImageService), ɵɵinject(WebCodeGenService), ɵɵinject(LitElementAggregatorService), ɵɵinject(LayerService)); }, token: LitElementCodeGenService, providedIn: "root" });
    return LitElementCodeGenService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    LitElementCodeGenService.prototype.symbolService;
    /**
     * @type {?}
     * @private
     */
    LitElementCodeGenService.prototype.imageService;
    /**
     * @type {?}
     * @private
     */
    LitElementCodeGenService.prototype.webCodeGen;
    /**
     * @type {?}
     * @private
     */
    LitElementCodeGenService.prototype.litElementAggretatorService;
    /**
     * @type {?}
     * @private
     */
    LitElementCodeGenService.prototype.layerService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LitElementCodeGenModule = /** @class */ (function () {
    function LitElementCodeGenModule() {
    }
    LitElementCodeGenModule.decorators = [
        { type: NgModule, args: [{
                    imports: [WebCodeGenModule]
                },] }
    ];
    return LitElementCodeGenModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { LitElementCodeGenModule, LitElementCodeGenService, LitElementDocGenService, LitElementAggregatorService as ɵa };
//# sourceMappingURL=xlayers-lit-element-codegen.js.map
