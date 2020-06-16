/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
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
    /** @nocollapse */ LitElementDocGenService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function LitElementDocGenService_Factory() { return new LitElementDocGenService(); }, token: LitElementDocGenService, providedIn: "root" });
    return LitElementDocGenService;
}());
export { LitElementDocGenService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGl0LWVsZW1lbnQtZG9jZ2VuLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGxheWVycy9saXQtZWxlbWVudC1jb2RlZ2VuLyIsInNvdXJjZXMiOlsibGliL2xpdC1lbGVtZW50LWRvY2dlbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUUzQztJQUFBO0tBZ0RDOzs7OztJQTVDQywyQ0FBUzs7OztJQUFULFVBQVUsSUFBa0I7UUFDMUIsT0FBTztZQUNMO2dCQUNFLEdBQUcsRUFBRSxXQUFXO2dCQUNoQixLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFDdkMsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLElBQUksRUFBRSxNQUFNO2FBQ2I7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRU8sOENBQVk7Ozs7O0lBQXBCLFVBQXFCLElBQVk7UUFDL0IsT0FBTyx1QkFDUyxJQUFJLHdtQ0E2QjZHLENBQUM7SUFDcEksQ0FBQzs7Z0JBL0NGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7OztrQ0FKRDtDQWtEQyxBQWhERCxJQWdEQztTQTdDWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaXRFbGVtZW50RG9jR2VuU2VydmljZSB7XHJcbiAgYWdncmVnYXRlKGRhdGE6IFNrZXRjaE1TRGF0YSkge1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAge1xyXG4gICAgICAgIHVyaTogJ1JFQURNRS5tZCcsXHJcbiAgICAgICAgdmFsdWU6IHRoaXMucmVuZGVyUmVhZG1lKGRhdGEubWV0YS5hcHApLFxyXG4gICAgICAgIGxhbmd1YWdlOiAnbWFya2Rvd24nLFxyXG4gICAgICAgIGtpbmQ6ICd0ZXh0J1xyXG4gICAgICB9XHJcbiAgICBdO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW5kZXJSZWFkbWUobmFtZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gYFxcXHJcbiMjIEhvdyB0byB1c2UgdGhlICR7bmFtZX0gV2ViIENvbXBvbmVudHMgYnVpbHQgd2l0aCBMaXRFbGVtZW50XHJcblxyXG5UaGlzIGltcGxlbWVudGF0aW9uIGV4cG9ydCB0aGUgYXNzZXRzIGFzIHNpbmdsZSBmaWxlIHdlYiBjb21wb25lbnQgdGhhdCBjYW4gYmUgY29uc3VtZWQgaW4gdGhlIGZvbGxvd2luZyB3YXlzOlxyXG5cclxuXFxgXFxgXFxgaHRtbFxyXG48IeKAk+KAkyBpbmRleC5odG1sIOKAk+KAkz5cclxuPHNjcmlwdCBzcmM9XCIuL3gtbGF5ZXJzLWVsZW1lbnQuanNcIj48L3NjcmlwdD5cclxuPHgtbGF5ZXJzLWVsZW1lbnQ+PC94LWxheWVycy1lbGVtZW50PlxyXG5cXGBcXGBcXGBcclxuXHJcbj4gTmVlZGVkIHBvbHlmaWxscyBtdXN0IGJlIGltcG9ydGVkLCBpbiBtb3N0IGNhc2VzIHlvdSBjYW4gaW1wb3J0IGl0IGdsb2JhbGx5IG9yIHVzZSBkaWZmZXJlbnQgc3RyYXRlZ3kuIEZvciBleGFtcGxlOlxyXG5cclxuXFxgXFxgXFxgaHRtbFxyXG48IeKAk+KAkyBpbmRleC5odG1sIOKAk+KAkz5cclxuPCEtLSBMb2FkIHBvbHlmaWxsczsgbm90ZSB0aGF0IFwibG9hZGVyXCIgd2lsbCBsb2FkIHRoZXNlIGFzeW5jIC0tPlxyXG48c2NyaXB0IHNyYz1cIm5vZGVfbW9kdWxlcy9Ad2ViY29tcG9uZW50cy93ZWJjb21wb25lbnRzanMvd2ViY29tcG9uZW50cy1sb2FkZXIuanNcIiBkZWZlcj48L3NjcmlwdD5cclxuXHJcbjwhLS0gTG9hZCBhIGN1c3RvbSBlbGVtZW50IGRlZmluaXRpb25zIGluIFxcJ3dhaXRGb3JcXCcgYW5kIHJldHVybiBhIHByb21pc2UgLS0+XHJcbjxzY3JpcHQgdHlwZT1cIm1vZHVsZVwiPlxyXG4gIFdlYkNvbXBvbmVudHMud2FpdEZvcigoKSA9PiB7XHJcbiAgICByZXR1cm4gaW1wb3J0KFxcJy4veC1sYXllcnMtZWxlbWVudC5qc1xcJyk7XHJcbiAgfSk7XHJcbjwvc2NyaXB0PlxyXG5cclxuPCEtLSBVc2UgdGhlIGN1c3RvbSBlbGVtZW50IC0tPlxyXG48eC1sYXllcnMtZWxlbWVudD48L3gtbGF5ZXJzLWVsZW1lbnQ+XHJcblxcYFxcYFxcYFxyXG5cclxuPiAgW0xpdEVsZW1lbnQgd2Vic2l0ZV0oaHR0cHM6Ly9saXQtZWxlbWVudC5wb2x5bWVyLXByb2plY3Qub3JnLylcclxuPiAgRm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgW3dlYiBjb21wb25lbnRzIGFuZCBicm93c2VyIHN1cHBvcnRdKGh0dHBzOi8vZ2l0aHViLmNvbS9XZWJDb21wb25lbnRzL3dlYmNvbXBvbmVudHNqcyNicm93c2VyLXN1cHBvcnQpYDtcclxuICB9XHJcbn1cclxuIl19