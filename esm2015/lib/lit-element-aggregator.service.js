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
export class LitElementAggregatorService {
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
/** @nocollapse */ LitElementAggregatorService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function LitElementAggregatorService_Factory() { return new LitElementAggregatorService(i0.ɵɵinject(i1.FormatService), i0.ɵɵinject(i2.WebCodeGenService)); }, token: LitElementAggregatorService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGl0LWVsZW1lbnQtYWdncmVnYXRvci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhsYXllcnMvbGl0LWVsZW1lbnQtY29kZWdlbi8iLCJzb3VyY2VzIjpbImxpYi9saXQtZWxlbWVudC1hZ2dyZWdhdG9yLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7O0FBT3pELE1BQU0sT0FBTywyQkFBMkI7Ozs7O0lBQ3RDLFlBQ21CLGFBQTRCLEVBQzVCLGlCQUFvQztRQURwQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBQ3BELENBQUM7Ozs7Ozs7SUFFSixTQUFTLENBQ1AsT0FBc0IsRUFDdEIsSUFBa0IsRUFDbEIsT0FBMEI7O2NBRXBCLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDOztjQUN6RCxLQUFLLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQzs7Y0FDaEUsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLE1BQU0sRUFBQzs7Y0FDbkQsR0FBRyxHQUFHLEtBQUssQ0FBQyxJQUFJOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLEtBQUssRUFBQztRQUN2RCxPQUFPO1lBQ0w7Z0JBQ0UsSUFBSSxFQUFFLFlBQVk7Z0JBQ2xCLEtBQUssRUFBRSxJQUFJLENBQUMsZUFBZSxDQUN6QixPQUFPLENBQUMsSUFBSSxFQUNaLElBQUksQ0FBQyxLQUFLLEVBQ1YsR0FBRyxDQUFDLEtBQUssRUFDVCxPQUFPLENBQ1I7Z0JBQ0QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLEdBQUcsRUFBRSxHQUFHLE9BQU8sQ0FBQyxZQUFZLElBQUksUUFBUSxLQUFLO2FBQzlDO1NBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7OztJQUVPLGVBQWUsQ0FDckIsSUFBWSxFQUNaLElBQVksRUFDWixHQUFXLEVBQ1gsT0FBMEI7O2NBRXBCLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7O2NBQzlDLGNBQWMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7O2NBQ3ZELE9BQU8sR0FBRyxHQUFHLE9BQU8sQ0FBQyxTQUFTLEdBQUcsY0FBYyxFQUFFO1FBQ3ZELE9BQU87OztRQUdILFNBQVM7OztFQUdmLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDOzs7Ozs7Ozs7RUFTaEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7Ozs7O3lCQUsxQixPQUFPLE9BQU8sU0FBUyxJQUFJLENBQUM7SUFDbkQsQ0FBQzs7O1lBL0RGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVBRLGFBQWE7WUFDYixpQkFBaUI7Ozs7Ozs7O0lBU3RCLG9EQUE2Qzs7Ozs7SUFDN0Msd0RBQXFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtYXRTZXJ2aWNlIH0gZnJvbSAnQHhsYXllcnMvc2tldGNoLWxpYic7XHJcbmltcG9ydCB7IFdlYkNvZGVHZW5TZXJ2aWNlIH0gZnJvbSAnQHhsYXllcnMvd2ViLWNvZGVnZW4nO1xyXG5cclxudHlwZSBXZWJDb2RlR2VuT3B0aW9ucyA9IGFueTtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIExpdEVsZW1lbnRBZ2dyZWdhdG9yU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGZvcm1hdFNlcnZpY2U6IEZvcm1hdFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHdlYkNvZGVHZW5TZXJ2aWNlOiBXZWJDb2RlR2VuU2VydmljZVxyXG4gICkge31cclxuXHJcbiAgYWdncmVnYXRlKFxyXG4gICAgY3VycmVudDogU2tldGNoTVNMYXllcixcclxuICAgIGRhdGE6IFNrZXRjaE1TRGF0YSxcclxuICAgIG9wdGlvbnM6IFdlYkNvZGVHZW5PcHRpb25zXHJcbiAgKSB7XHJcbiAgICBjb25zdCBmaWxlTmFtZSA9IHRoaXMuZm9ybWF0U2VydmljZS5ub3JtYWxpemVOYW1lKGN1cnJlbnQubmFtZSk7XHJcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMud2ViQ29kZUdlblNlcnZpY2UuYWdncmVnYXRlKGN1cnJlbnQsIGRhdGEsIG9wdGlvbnMpO1xyXG4gICAgY29uc3QgaHRtbCA9IGZpbGVzLmZpbmQoZmlsZSA9PiBmaWxlLmxhbmd1YWdlID09PSAnaHRtbCcpO1xyXG4gICAgY29uc3QgY3NzID0gZmlsZXMuZmluZChmaWxlID0+IGZpbGUubGFuZ3VhZ2UgPT09ICdjc3MnKTtcclxuICAgIHJldHVybiBbXHJcbiAgICAgIHtcclxuICAgICAgICBraW5kOiAnbGl0RWxlbWVudCcsXHJcbiAgICAgICAgdmFsdWU6IHRoaXMucmVuZGVyQ29tcG9uZW50KFxyXG4gICAgICAgICAgY3VycmVudC5uYW1lLFxyXG4gICAgICAgICAgaHRtbC52YWx1ZSxcclxuICAgICAgICAgIGNzcy52YWx1ZSxcclxuICAgICAgICAgIG9wdGlvbnNcclxuICAgICAgICApLFxyXG4gICAgICAgIGxhbmd1YWdlOiAnamF2YXNjcmlwdCcsXHJcbiAgICAgICAgdXJpOiBgJHtvcHRpb25zLmNvbXBvbmVudERpcn0vJHtmaWxlTmFtZX0uanNgXHJcbiAgICAgIH1cclxuICAgIF07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbmRlckNvbXBvbmVudChcclxuICAgIG5hbWU6IHN0cmluZyxcclxuICAgIGh0bWw6IHN0cmluZyxcclxuICAgIGNzczogc3RyaW5nLFxyXG4gICAgb3B0aW9uczogV2ViQ29kZUdlbk9wdGlvbnNcclxuICApIHtcclxuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMuZm9ybWF0U2VydmljZS5jbGFzc05hbWUobmFtZSk7XHJcbiAgICBjb25zdCBub3JtYWxpemVkTmFtZSA9IHRoaXMuZm9ybWF0U2VydmljZS5ub3JtYWxpemVOYW1lKG5hbWUpO1xyXG4gICAgY29uc3QgdGFnTmFtZSA9IGAke29wdGlvbnMueG1sUHJlZml4fSR7bm9ybWFsaXplZE5hbWV9YDtcclxuICAgIHJldHVybiBgXFxcclxuaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCwgY3NzIH0gZnJvbSAnbGl0LWVsZW1lbnQnO1xyXG5cclxuY2xhc3MgJHtjbGFzc05hbWV9IGV4dGVuZHMgTGl0RWxlbWVudCB7XHJcbiAgc3RhdGljIGdldCBzdHlsZXMoKSB7XHJcbiAgICByZXR1cm4gY3NzXFxgXHJcbiR7dGhpcy5mb3JtYXRTZXJ2aWNlLmluZGVudEZpbGUoMywgY3NzKS5qb2luKCdcXG4nKX1cclxuICAgIFxcYFxyXG4gIH1cclxuICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiBodG1sXFxgXHJcbiR7dGhpcy5mb3JtYXRTZXJ2aWNlLmluZGVudEZpbGUoMywgaHRtbCkuam9pbignXFxuJyl9XHJcbiAgICBcXGBcclxuICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnJHt0YWdOYW1lfScgLCAke2NsYXNzTmFtZX0pO2A7XHJcbiAgfVxyXG59XHJcbiJdfQ==