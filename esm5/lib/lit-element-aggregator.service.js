/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FormatService } from '@xlayers/sketch-lib';
import { WebCodeGenService } from '@xlayers/web-codegen';
import * as i0 from "@angular/core";
import * as i1 from "@xlayers/sketch-lib";
import * as i2 from "@xlayers/web-codegen";
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
    /** @nocollapse */ LitElementAggregatorService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function LitElementAggregatorService_Factory() { return new LitElementAggregatorService(i0.ɵɵinject(i1.FormatService), i0.ɵɵinject(i2.WebCodeGenService)); }, token: LitElementAggregatorService, providedIn: "root" });
    return LitElementAggregatorService;
}());
export { LitElementAggregatorService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGl0LWVsZW1lbnQtYWdncmVnYXRvci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhsYXllcnMvbGl0LWVsZW1lbnQtY29kZWdlbi8iLCJzb3VyY2VzIjpbImxpYi9saXQtZWxlbWVudC1hZ2dyZWdhdG9yLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7O0FBSXpEO0lBSUUscUNBQ21CLGFBQTRCLEVBQzVCLGlCQUFvQztRQURwQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBQ3BELENBQUM7Ozs7Ozs7SUFFSiwrQ0FBUzs7Ozs7O0lBQVQsVUFDRSxPQUFzQixFQUN0QixJQUFrQixFQUNsQixPQUEwQjs7WUFFcEIsUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7O1lBQ3pELEtBQUssR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDOztZQUNoRSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUk7Ozs7UUFBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxRQUFRLEtBQUssTUFBTSxFQUF4QixDQUF3QixFQUFDOztZQUNuRCxHQUFHLEdBQUcsS0FBSyxDQUFDLElBQUk7Ozs7UUFBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxRQUFRLEtBQUssS0FBSyxFQUF2QixDQUF1QixFQUFDO1FBQ3ZELE9BQU87WUFDTDtnQkFDRSxJQUFJLEVBQUUsWUFBWTtnQkFDbEIsS0FBSyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQ3pCLE9BQU8sQ0FBQyxJQUFJLEVBQ1osSUFBSSxDQUFDLEtBQUssRUFDVixHQUFHLENBQUMsS0FBSyxFQUNULE9BQU8sQ0FDUjtnQkFDRCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsR0FBRyxFQUFLLE9BQU8sQ0FBQyxZQUFZLFNBQUksUUFBUSxRQUFLO2FBQzlDO1NBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7OztJQUVPLHFEQUFlOzs7Ozs7OztJQUF2QixVQUNFLElBQVksRUFDWixJQUFZLEVBQ1osR0FBVyxFQUNYLE9BQTBCOztZQUVwQixTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDOztZQUM5QyxjQUFjLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDOztZQUN2RCxPQUFPLEdBQUcsS0FBRyxPQUFPLENBQUMsU0FBUyxHQUFHLGNBQWdCO1FBQ3ZELE9BQU8sbUVBR0gsU0FBUyx5RUFHZixJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyw2RkFTaEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0RBSzFCLE9BQU8sWUFBTyxTQUFTLE9BQUksQ0FBQztJQUNuRCxDQUFDOztnQkEvREYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFQUSxhQUFhO2dCQUNiLGlCQUFpQjs7O3NDQUYxQjtDQXNFQyxBQWhFRCxJQWdFQztTQTdEWSwyQkFBMkI7Ozs7OztJQUVwQyxvREFBNkM7Ozs7O0lBQzdDLHdEQUFxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybWF0U2VydmljZSB9IGZyb20gJ0B4bGF5ZXJzL3NrZXRjaC1saWInO1xyXG5pbXBvcnQgeyBXZWJDb2RlR2VuU2VydmljZSB9IGZyb20gJ0B4bGF5ZXJzL3dlYi1jb2RlZ2VuJztcclxuXHJcbnR5cGUgV2ViQ29kZUdlbk9wdGlvbnMgPSBhbnk7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaXRFbGVtZW50QWdncmVnYXRvclNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBmb3JtYXRTZXJ2aWNlOiBGb3JtYXRTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSB3ZWJDb2RlR2VuU2VydmljZTogV2ViQ29kZUdlblNlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIGFnZ3JlZ2F0ZShcclxuICAgIGN1cnJlbnQ6IFNrZXRjaE1TTGF5ZXIsXHJcbiAgICBkYXRhOiBTa2V0Y2hNU0RhdGEsXHJcbiAgICBvcHRpb25zOiBXZWJDb2RlR2VuT3B0aW9uc1xyXG4gICkge1xyXG4gICAgY29uc3QgZmlsZU5hbWUgPSB0aGlzLmZvcm1hdFNlcnZpY2Uubm9ybWFsaXplTmFtZShjdXJyZW50Lm5hbWUpO1xyXG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLndlYkNvZGVHZW5TZXJ2aWNlLmFnZ3JlZ2F0ZShjdXJyZW50LCBkYXRhLCBvcHRpb25zKTtcclxuICAgIGNvbnN0IGh0bWwgPSBmaWxlcy5maW5kKGZpbGUgPT4gZmlsZS5sYW5ndWFnZSA9PT0gJ2h0bWwnKTtcclxuICAgIGNvbnN0IGNzcyA9IGZpbGVzLmZpbmQoZmlsZSA9PiBmaWxlLmxhbmd1YWdlID09PSAnY3NzJyk7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICB7XHJcbiAgICAgICAga2luZDogJ2xpdEVsZW1lbnQnLFxyXG4gICAgICAgIHZhbHVlOiB0aGlzLnJlbmRlckNvbXBvbmVudChcclxuICAgICAgICAgIGN1cnJlbnQubmFtZSxcclxuICAgICAgICAgIGh0bWwudmFsdWUsXHJcbiAgICAgICAgICBjc3MudmFsdWUsXHJcbiAgICAgICAgICBvcHRpb25zXHJcbiAgICAgICAgKSxcclxuICAgICAgICBsYW5ndWFnZTogJ2phdmFzY3JpcHQnLFxyXG4gICAgICAgIHVyaTogYCR7b3B0aW9ucy5jb21wb25lbnREaXJ9LyR7ZmlsZU5hbWV9LmpzYFxyXG4gICAgICB9XHJcbiAgICBdO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW5kZXJDb21wb25lbnQoXHJcbiAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICBodG1sOiBzdHJpbmcsXHJcbiAgICBjc3M6IHN0cmluZyxcclxuICAgIG9wdGlvbnM6IFdlYkNvZGVHZW5PcHRpb25zXHJcbiAgKSB7XHJcbiAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLmZvcm1hdFNlcnZpY2UuY2xhc3NOYW1lKG5hbWUpO1xyXG4gICAgY29uc3Qgbm9ybWFsaXplZE5hbWUgPSB0aGlzLmZvcm1hdFNlcnZpY2Uubm9ybWFsaXplTmFtZShuYW1lKTtcclxuICAgIGNvbnN0IHRhZ05hbWUgPSBgJHtvcHRpb25zLnhtbFByZWZpeH0ke25vcm1hbGl6ZWROYW1lfWA7XHJcbiAgICByZXR1cm4gYFxcXHJcbmltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwsIGNzcyB9IGZyb20gJ2xpdC1lbGVtZW50JztcclxuXHJcbmNsYXNzICR7Y2xhc3NOYW1lfSBleHRlbmRzIExpdEVsZW1lbnQge1xyXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCkge1xyXG4gICAgcmV0dXJuIGNzc1xcYFxyXG4ke3RoaXMuZm9ybWF0U2VydmljZS5pbmRlbnRGaWxlKDMsIGNzcykuam9pbignXFxuJyl9XHJcbiAgICBcXGBcclxuICB9XHJcbiAgY29uc3RydWN0b3IoKXtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gaHRtbFxcYFxyXG4ke3RoaXMuZm9ybWF0U2VydmljZS5pbmRlbnRGaWxlKDMsIGh0bWwpLmpvaW4oJ1xcbicpfVxyXG4gICAgXFxgXHJcbiAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJyR7dGFnTmFtZX0nICwgJHtjbGFzc05hbWV9KTtgO1xyXG4gIH1cclxufVxyXG4iXX0=