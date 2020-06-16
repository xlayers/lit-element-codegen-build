/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class LitElementDocGenService {
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
/** @nocollapse */ LitElementDocGenService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function LitElementDocGenService_Factory() { return new LitElementDocGenService(); }, token: LitElementDocGenService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGl0LWVsZW1lbnQtZG9jZ2VuLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGxheWVycy9saXQtZWxlbWVudC1jb2RlZ2VuLyIsInNvdXJjZXMiOlsibGliL2xpdC1lbGVtZW50LWRvY2dlbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUszQyxNQUFNLE9BQU8sdUJBQXVCOzs7OztJQUNsQyxTQUFTLENBQUMsSUFBa0I7UUFDMUIsT0FBTztZQUNMO2dCQUNFLEdBQUcsRUFBRSxXQUFXO2dCQUNoQixLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFDdkMsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLElBQUksRUFBRSxNQUFNO2FBQ2I7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRU8sWUFBWSxDQUFDLElBQVk7UUFDL0IsT0FBTztvQkFDUyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxSUE2QjZHLENBQUM7SUFDcEksQ0FBQzs7O1lBL0NGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIExpdEVsZW1lbnREb2NHZW5TZXJ2aWNlIHtcclxuICBhZ2dyZWdhdGUoZGF0YTogU2tldGNoTVNEYXRhKSB7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICB7XHJcbiAgICAgICAgdXJpOiAnUkVBRE1FLm1kJyxcclxuICAgICAgICB2YWx1ZTogdGhpcy5yZW5kZXJSZWFkbWUoZGF0YS5tZXRhLmFwcCksXHJcbiAgICAgICAgbGFuZ3VhZ2U6ICdtYXJrZG93bicsXHJcbiAgICAgICAga2luZDogJ3RleHQnXHJcbiAgICAgIH1cclxuICAgIF07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbmRlclJlYWRtZShuYW1lOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBgXFxcclxuIyMgSG93IHRvIHVzZSB0aGUgJHtuYW1lfSBXZWIgQ29tcG9uZW50cyBidWlsdCB3aXRoIExpdEVsZW1lbnRcclxuXHJcblRoaXMgaW1wbGVtZW50YXRpb24gZXhwb3J0IHRoZSBhc3NldHMgYXMgc2luZ2xlIGZpbGUgd2ViIGNvbXBvbmVudCB0aGF0IGNhbiBiZSBjb25zdW1lZCBpbiB0aGUgZm9sbG93aW5nIHdheXM6XHJcblxyXG5cXGBcXGBcXGBodG1sXHJcbjwh4oCT4oCTIGluZGV4Lmh0bWwg4oCT4oCTPlxyXG48c2NyaXB0IHNyYz1cIi4veC1sYXllcnMtZWxlbWVudC5qc1wiPjwvc2NyaXB0PlxyXG48eC1sYXllcnMtZWxlbWVudD48L3gtbGF5ZXJzLWVsZW1lbnQ+XHJcblxcYFxcYFxcYFxyXG5cclxuPiBOZWVkZWQgcG9seWZpbGxzIG11c3QgYmUgaW1wb3J0ZWQsIGluIG1vc3QgY2FzZXMgeW91IGNhbiBpbXBvcnQgaXQgZ2xvYmFsbHkgb3IgdXNlIGRpZmZlcmVudCBzdHJhdGVneS4gRm9yIGV4YW1wbGU6XHJcblxyXG5cXGBcXGBcXGBodG1sXHJcbjwh4oCT4oCTIGluZGV4Lmh0bWwg4oCT4oCTPlxyXG48IS0tIExvYWQgcG9seWZpbGxzOyBub3RlIHRoYXQgXCJsb2FkZXJcIiB3aWxsIGxvYWQgdGhlc2UgYXN5bmMgLS0+XHJcbjxzY3JpcHQgc3JjPVwibm9kZV9tb2R1bGVzL0B3ZWJjb21wb25lbnRzL3dlYmNvbXBvbmVudHNqcy93ZWJjb21wb25lbnRzLWxvYWRlci5qc1wiIGRlZmVyPjwvc2NyaXB0PlxyXG5cclxuPCEtLSBMb2FkIGEgY3VzdG9tIGVsZW1lbnQgZGVmaW5pdGlvbnMgaW4gXFwnd2FpdEZvclxcJyBhbmQgcmV0dXJuIGEgcHJvbWlzZSAtLT5cclxuPHNjcmlwdCB0eXBlPVwibW9kdWxlXCI+XHJcbiAgV2ViQ29tcG9uZW50cy53YWl0Rm9yKCgpID0+IHtcclxuICAgIHJldHVybiBpbXBvcnQoXFwnLi94LWxheWVycy1lbGVtZW50LmpzXFwnKTtcclxuICB9KTtcclxuPC9zY3JpcHQ+XHJcblxyXG48IS0tIFVzZSB0aGUgY3VzdG9tIGVsZW1lbnQgLS0+XHJcbjx4LWxheWVycy1lbGVtZW50PjwveC1sYXllcnMtZWxlbWVudD5cclxuXFxgXFxgXFxgXHJcblxyXG4+ICBbTGl0RWxlbWVudCB3ZWJzaXRlXShodHRwczovL2xpdC1lbGVtZW50LnBvbHltZXItcHJvamVjdC5vcmcvKVxyXG4+ICBGb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCBbd2ViIGNvbXBvbmVudHMgYW5kIGJyb3dzZXIgc3VwcG9ydF0oaHR0cHM6Ly9naXRodWIuY29tL1dlYkNvbXBvbmVudHMvd2ViY29tcG9uZW50c2pzI2Jyb3dzZXItc3VwcG9ydClgO1xyXG4gIH1cclxufVxyXG4iXX0=