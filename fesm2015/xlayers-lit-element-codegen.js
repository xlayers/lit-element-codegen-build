import { Injectable, ɵɵdefineInjectable, ɵɵinject, NgModule } from '@angular/core';
import { FormatService, SymbolService, ImageService, LayerService } from '@xlayers/sketch-lib';
import { WebCodeGenService, WebCodeGenModule } from '@xlayers/web-codegen';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LitElementDocGenService {
    /**
     * @param {?} data
     * @return {?}
     */
    aggregate(data) {
        return [
            {
                uri: 'README.md',
                value: this.renderReadme(data.meta.app),
                language: 'markdown',
                kind: 'text'
            }
        ];
    }
    /**
     * @private
     * @param {?} name
     * @return {?}
     */
    renderReadme(name) {
        return `\
## How to use the ${name} Web Components built with LitElement

This implementation export the assets as single file web component that can be consumed in the following ways:

\`\`\`html
<!–– index.html ––>
<script src="./x-layers-element.js"></script>
<x-layers-element></x-layers-element>
\`\`\`

> Needed polyfills must be imported, in most cases you can import it globally or use different strategy. For example:

\`\`\`html
<!–– index.html ––>
<!-- Load polyfills; note that "loader" will load these async -->
<script src="node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js" defer></script>

<!-- Load a custom element definitions in \'waitFor\' and return a promise -->
<script type="module">
  WebComponents.waitFor(() => {
    return import(\'./x-layers-element.js\');
  });
</script>

<!-- Use the custom element -->
<x-layers-element></x-layers-element>
\`\`\`

>  [LitElement website](https://lit-element.polymer-project.org/)
>  For more information about [web components and browser support](https://github.com/WebComponents/webcomponentsjs#browser-support)`;
    }
}
LitElementDocGenService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ LitElementDocGenService.ngInjectableDef = ɵɵdefineInjectable({ factory: function LitElementDocGenService_Factory() { return new LitElementDocGenService(); }, token: LitElementDocGenService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LitElementAggregatorService {
    /**
     * @param {?} formatService
     * @param {?} webCodeGenService
     */
    constructor(formatService, webCodeGenService) {
        this.formatService = formatService;
        this.webCodeGenService = webCodeGenService;
    }
    /**
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    aggregate(current, data, options) {
        /** @type {?} */
        const fileName = this.formatService.normalizeName(current.name);
        /** @type {?} */
        const files = this.webCodeGenService.aggregate(current, data, options);
        /** @type {?} */
        const html = files.find((/**
         * @param {?} file
         * @return {?}
         */
        file => file.language === 'html'));
        /** @type {?} */
        const css = files.find((/**
         * @param {?} file
         * @return {?}
         */
        file => file.language === 'css'));
        return [
            {
                kind: 'litElement',
                value: this.renderComponent(current.name, html.value, css.value, options),
                language: 'javascript',
                uri: `${options.componentDir}/${fileName}.js`
            }
        ];
    }
    /**
     * @private
     * @param {?} name
     * @param {?} html
     * @param {?} css
     * @param {?} options
     * @return {?}
     */
    renderComponent(name, html, css, options) {
        /** @type {?} */
        const className = this.formatService.className(name);
        /** @type {?} */
        const normalizedName = this.formatService.normalizeName(name);
        /** @type {?} */
        const tagName = `${options.xmlPrefix}${normalizedName}`;
        return `\
import { LitElement, html, css } from 'lit-element';

class ${className} extends LitElement {
  static get styles() {
    return css\`
${this.formatService.indentFile(3, css).join('\n')}
    \`
  }
  constructor(){
    super();
  }

  render() {
    return html\`
${this.formatService.indentFile(3, html).join('\n')}
    \`
  }
}

customElements.define('${tagName}' , ${className});`;
    }
}
LitElementAggregatorService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
LitElementAggregatorService.ctorParameters = () => [
    { type: FormatService },
    { type: WebCodeGenService }
];
/** @nocollapse */ LitElementAggregatorService.ngInjectableDef = ɵɵdefineInjectable({ factory: function LitElementAggregatorService_Factory() { return new LitElementAggregatorService(ɵɵinject(FormatService), ɵɵinject(WebCodeGenService)); }, token: LitElementAggregatorService, providedIn: "root" });
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
class LitElementCodeGenService {
    /**
     * @param {?} symbolService
     * @param {?} imageService
     * @param {?} webCodeGen
     * @param {?} litElementAggretatorService
     * @param {?} layerService
     */
    constructor(symbolService, imageService, webCodeGen, litElementAggretatorService, layerService) {
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
    compute(current, data, options) {
        this.webCodeGen.compute(current, data, this.compileOptions(options));
    }
    /**
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    aggregate(data, options) {
        return data.pages.flatMap((/**
         * @param {?} page
         * @return {?}
         */
        page => this.visit(page, data, this.compileOptions(options))));
    }
    /**
     * @param {?} current
     * @return {?}
     */
    identify(current) {
        return this.webCodeGen.identify(current);
    }
    /**
     * @param {?} current
     * @return {?}
     */
    context(current) {
        return this.webCodeGen.context(current);
    }
    /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    visit(current, data, options) {
        return this.visitContent(current, data, options).concat(this.litElementAggretatorService.aggregate(current, data, options));
    }
    /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    visitContent(current, data, options) {
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
    }
    /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    visitLayer(current, data, options) {
        return this.layerService
            .lookup(current)
            .flatMap((/**
         * @param {?} layer
         * @return {?}
         */
        layer => this.visitContent(layer, data, options)));
    }
    /**
     * @private
     * @param {?} current
     * @param {?} data
     * @param {?} options
     * @return {?}
     */
    visitSymbolMaster(current, data, options) {
        /** @type {?} */
        const symbolMaster = this.symbolService.lookup(current, data);
        if (symbolMaster) {
            return this.visit(symbolMaster, data, options);
        }
        return [];
    }
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    compileOptions(options) {
        return Object.assign({ textTagName: 'span', bitmapTagName: 'img', blockTagName: 'div', xmlPrefix: 'xly-', cssPrefix: 'xly_', componentDir: 'components', assetDir: 'assets' }, options);
    }
}
LitElementCodeGenService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
LitElementCodeGenService.ctorParameters = () => [
    { type: SymbolService },
    { type: ImageService },
    { type: WebCodeGenService },
    { type: LitElementAggregatorService },
    { type: LayerService }
];
/** @nocollapse */ LitElementCodeGenService.ngInjectableDef = ɵɵdefineInjectable({ factory: function LitElementCodeGenService_Factory() { return new LitElementCodeGenService(ɵɵinject(SymbolService), ɵɵinject(ImageService), ɵɵinject(WebCodeGenService), ɵɵinject(LitElementAggregatorService), ɵɵinject(LayerService)); }, token: LitElementCodeGenService, providedIn: "root" });
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
class LitElementCodeGenModule {
}
LitElementCodeGenModule.decorators = [
    { type: NgModule, args: [{
                imports: [WebCodeGenModule]
            },] }
];

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
