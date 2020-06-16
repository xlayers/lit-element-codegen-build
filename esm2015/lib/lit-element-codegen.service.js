/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ImageService, SymbolService, LayerService } from '@xlayers/sketch-lib';
import { WebCodeGenService } from '@xlayers/web-codegen';
import { LitElementAggregatorService } from './lit-element-aggregator.service';
import * as i0 from "@angular/core";
import * as i1 from "@xlayers/sketch-lib";
import * as i2 from "@xlayers/web-codegen";
import * as i3 from "./lit-element-aggregator.service";
export class LitElementCodeGenService {
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
/** @nocollapse */ LitElementCodeGenService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function LitElementCodeGenService_Factory() { return new LitElementCodeGenService(i0.ɵɵinject(i1.SymbolService), i0.ɵɵinject(i1.ImageService), i0.ɵɵinject(i2.WebCodeGenService), i0.ɵɵinject(i3.LitElementAggregatorService), i0.ɵɵinject(i1.LayerService)); }, token: LitElementCodeGenService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGl0LWVsZW1lbnQtY29kZWdlbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhsYXllcnMvbGl0LWVsZW1lbnQtY29kZWdlbi8iLCJzb3VyY2VzIjpbImxpYi9saXQtZWxlbWVudC1jb2RlZ2VuLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDaEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7Ozs7O0FBTy9FLE1BQU0sT0FBTyx3QkFBd0I7Ozs7Ozs7O0lBQ25DLFlBQ21CLGFBQTRCLEVBQzVCLFlBQTBCLEVBQzFCLFVBQTZCLEVBQzdCLDJCQUF3RCxFQUN4RCxZQUEwQjtRQUoxQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixlQUFVLEdBQVYsVUFBVSxDQUFtQjtRQUM3QixnQ0FBMkIsR0FBM0IsMkJBQTJCLENBQTZCO1FBQ3hELGlCQUFZLEdBQVosWUFBWSxDQUFjO0lBQzFDLENBQUM7Ozs7Ozs7SUFFSixPQUFPLENBQ0wsT0FBc0IsRUFDdEIsSUFBa0IsRUFDbEIsT0FBMkI7UUFFM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDdkUsQ0FBQzs7Ozs7O0lBRUQsU0FBUyxDQUFDLElBQWtCLEVBQUUsT0FBMkI7UUFDdkQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU87Ozs7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUNyRCxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsT0FBc0I7UUFDN0IsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxPQUFzQjtRQUM1QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7Ozs7O0lBRU8sS0FBSyxDQUNYLE9BQXNCLEVBQ3RCLElBQWtCLEVBQ2xCLE9BQTJCO1FBRTNCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FDckQsSUFBSSxDQUFDLDJCQUEyQixDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUNuRSxDQUFDO0lBQ0osQ0FBQzs7Ozs7Ozs7SUFFTyxZQUFZLENBQ2xCLE9BQXNCLEVBQ3RCLElBQWtCLEVBQ2xCLE9BQTBCO1FBRTFCLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDdkMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDaEQ7YUFBTSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQy9DLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDdkQ7YUFBTSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQzlDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztTQUM1RDtRQUNELE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQzs7Ozs7Ozs7SUFFTyxVQUFVLENBQ2hCLE9BQXNCLEVBQ3RCLElBQWtCLEVBQ2xCLE9BQTBCO1FBRTFCLE9BQU8sSUFBSSxDQUFDLFlBQVk7YUFDckIsTUFBTSxDQUFDLE9BQU8sQ0FBQzthQUNmLE9BQU87Ozs7UUFBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsRUFBQyxDQUFDO0lBQy9ELENBQUM7Ozs7Ozs7O0lBRU8saUJBQWlCLENBQ3ZCLE9BQXNCLEVBQ3RCLElBQWtCLEVBQ2xCLE9BQTBCOztjQUVwQixZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQztRQUM3RCxJQUFJLFlBQVksRUFBRTtZQUNoQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztTQUNoRDtRQUNELE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQzs7Ozs7O0lBRU8sY0FBYyxDQUFDLE9BQTBCO1FBQy9DLHVCQUNFLFdBQVcsRUFBRSxNQUFNLEVBQ25CLGFBQWEsRUFBRSxLQUFLLEVBQ3BCLFlBQVksRUFBRSxLQUFLLEVBQ25CLFNBQVMsRUFBRSxNQUFNLEVBQ2pCLFNBQVMsRUFBRSxNQUFNLEVBQ2pCLFlBQVksRUFBRSxZQUFZLEVBQzFCLFFBQVEsRUFBRSxRQUFRLElBQ2YsT0FBTyxFQUNWO0lBQ0osQ0FBQzs7O1lBNUZGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVJzQixhQUFhO1lBQTNCLFlBQVk7WUFDWixpQkFBaUI7WUFDakIsMkJBQTJCO1lBRkUsWUFBWTs7Ozs7Ozs7SUFXOUMsaURBQTZDOzs7OztJQUM3QyxnREFBMkM7Ozs7O0lBQzNDLDhDQUE4Qzs7Ozs7SUFDOUMsK0RBQXlFOzs7OztJQUN6RSxnREFBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEltYWdlU2VydmljZSwgU3ltYm9sU2VydmljZSwgTGF5ZXJTZXJ2aWNlIH0gZnJvbSAnQHhsYXllcnMvc2tldGNoLWxpYic7XHJcbmltcG9ydCB7IFdlYkNvZGVHZW5TZXJ2aWNlIH0gZnJvbSAnQHhsYXllcnMvd2ViLWNvZGVnZW4nO1xyXG5pbXBvcnQgeyBMaXRFbGVtZW50QWdncmVnYXRvclNlcnZpY2UgfSBmcm9tICcuL2xpdC1lbGVtZW50LWFnZ3JlZ2F0b3Iuc2VydmljZSc7XHJcblxyXG50eXBlIFdlYkNvZGVHZW5PcHRpb25zID0gYW55O1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTGl0RWxlbWVudENvZGVHZW5TZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgc3ltYm9sU2VydmljZTogU3ltYm9sU2VydmljZSxcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgaW1hZ2VTZXJ2aWNlOiBJbWFnZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHdlYkNvZGVHZW46IFdlYkNvZGVHZW5TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBsaXRFbGVtZW50QWdncmV0YXRvclNlcnZpY2U6IExpdEVsZW1lbnRBZ2dyZWdhdG9yU2VydmljZSxcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbGF5ZXJTZXJ2aWNlOiBMYXllclNlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIGNvbXB1dGUoXHJcbiAgICBjdXJyZW50OiBTa2V0Y2hNU0xheWVyLFxyXG4gICAgZGF0YTogU2tldGNoTVNEYXRhLFxyXG4gICAgb3B0aW9ucz86IFdlYkNvZGVHZW5PcHRpb25zXHJcbiAgKSB7XHJcbiAgICB0aGlzLndlYkNvZGVHZW4uY29tcHV0ZShjdXJyZW50LCBkYXRhLCB0aGlzLmNvbXBpbGVPcHRpb25zKG9wdGlvbnMpKTtcclxuICB9XHJcblxyXG4gIGFnZ3JlZ2F0ZShkYXRhOiBTa2V0Y2hNU0RhdGEsIG9wdGlvbnM/OiBXZWJDb2RlR2VuT3B0aW9ucykge1xyXG4gICAgcmV0dXJuIGRhdGEucGFnZXMuZmxhdE1hcChwYWdlID0+XHJcbiAgICAgIHRoaXMudmlzaXQocGFnZSwgZGF0YSwgdGhpcy5jb21waWxlT3B0aW9ucyhvcHRpb25zKSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBpZGVudGlmeShjdXJyZW50OiBTa2V0Y2hNU0xheWVyKSB7XHJcbiAgICByZXR1cm4gdGhpcy53ZWJDb2RlR2VuLmlkZW50aWZ5KGN1cnJlbnQpO1xyXG4gIH1cclxuXHJcbiAgY29udGV4dChjdXJyZW50OiBTa2V0Y2hNU0xheWVyKSB7XHJcbiAgICByZXR1cm4gdGhpcy53ZWJDb2RlR2VuLmNvbnRleHQoY3VycmVudCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHZpc2l0KFxyXG4gICAgY3VycmVudDogU2tldGNoTVNMYXllcixcclxuICAgIGRhdGE6IFNrZXRjaE1TRGF0YSxcclxuICAgIG9wdGlvbnM/OiBXZWJDb2RlR2VuT3B0aW9uc1xyXG4gICkge1xyXG4gICAgcmV0dXJuIHRoaXMudmlzaXRDb250ZW50KGN1cnJlbnQsIGRhdGEsIG9wdGlvbnMpLmNvbmNhdChcclxuICAgICAgdGhpcy5saXRFbGVtZW50QWdncmV0YXRvclNlcnZpY2UuYWdncmVnYXRlKGN1cnJlbnQsIGRhdGEsIG9wdGlvbnMpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB2aXNpdENvbnRlbnQoXHJcbiAgICBjdXJyZW50OiBTa2V0Y2hNU0xheWVyLFxyXG4gICAgZGF0YTogU2tldGNoTVNEYXRhLFxyXG4gICAgb3B0aW9uczogV2ViQ29kZUdlbk9wdGlvbnNcclxuICApIHtcclxuICAgIGlmICh0aGlzLmxheWVyU2VydmljZS5pZGVudGlmeShjdXJyZW50KSkge1xyXG4gICAgICByZXR1cm4gdGhpcy52aXNpdExheWVyKGN1cnJlbnQsIGRhdGEsIG9wdGlvbnMpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnN5bWJvbFNlcnZpY2UuaWRlbnRpZnkoY3VycmVudCkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmlzaXRTeW1ib2xNYXN0ZXIoY3VycmVudCwgZGF0YSwgb3B0aW9ucyk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuaW1hZ2VTZXJ2aWNlLmlkZW50aWZ5KGN1cnJlbnQpKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmltYWdlU2VydmljZS5hZ2dyZWdhdGUoY3VycmVudCwgZGF0YSwgb3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHZpc2l0TGF5ZXIoXHJcbiAgICBjdXJyZW50OiBTa2V0Y2hNU0xheWVyLFxyXG4gICAgZGF0YTogU2tldGNoTVNEYXRhLFxyXG4gICAgb3B0aW9uczogV2ViQ29kZUdlbk9wdGlvbnNcclxuICApIHtcclxuICAgIHJldHVybiB0aGlzLmxheWVyU2VydmljZVxyXG4gICAgICAubG9va3VwKGN1cnJlbnQpXHJcbiAgICAgIC5mbGF0TWFwKGxheWVyID0+IHRoaXMudmlzaXRDb250ZW50KGxheWVyLCBkYXRhLCBvcHRpb25zKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHZpc2l0U3ltYm9sTWFzdGVyKFxyXG4gICAgY3VycmVudDogU2tldGNoTVNMYXllcixcclxuICAgIGRhdGE6IFNrZXRjaE1TRGF0YSxcclxuICAgIG9wdGlvbnM6IFdlYkNvZGVHZW5PcHRpb25zXHJcbiAgKSB7XHJcbiAgICBjb25zdCBzeW1ib2xNYXN0ZXIgPSB0aGlzLnN5bWJvbFNlcnZpY2UubG9va3VwKGN1cnJlbnQsIGRhdGEpO1xyXG4gICAgaWYgKHN5bWJvbE1hc3Rlcikge1xyXG4gICAgICByZXR1cm4gdGhpcy52aXNpdChzeW1ib2xNYXN0ZXIsIGRhdGEsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjb21waWxlT3B0aW9ucyhvcHRpb25zOiBXZWJDb2RlR2VuT3B0aW9ucykge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdGV4dFRhZ05hbWU6ICdzcGFuJyxcclxuICAgICAgYml0bWFwVGFnTmFtZTogJ2ltZycsXHJcbiAgICAgIGJsb2NrVGFnTmFtZTogJ2RpdicsXHJcbiAgICAgIHhtbFByZWZpeDogJ3hseS0nLFxyXG4gICAgICBjc3NQcmVmaXg6ICd4bHlfJyxcclxuICAgICAgY29tcG9uZW50RGlyOiAnY29tcG9uZW50cycsXHJcbiAgICAgIGFzc2V0RGlyOiAnYXNzZXRzJyxcclxuICAgICAgLi4ub3B0aW9uc1xyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19