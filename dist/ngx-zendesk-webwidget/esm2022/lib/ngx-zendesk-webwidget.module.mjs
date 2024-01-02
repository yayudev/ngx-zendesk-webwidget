import { NgModule } from '@angular/core';
import { NgxZendeskWebwidgetConfig } from './ngx-zendesk-webwidget.model';
import { NgxZendeskWebwidgetService } from './ngx-zendesk-webwidget.service';
import * as i0 from "@angular/core";
export class NgxZendeskWebwidgetModule {
    static forRoot(zendeskConfig) {
        return {
            ngModule: NgxZendeskWebwidgetModule,
            providers: [
                { provide: NgxZendeskWebwidgetConfig, useClass: zendeskConfig },
                { provide: NgxZendeskWebwidgetService, useClass: NgxZendeskWebwidgetService, deps: [NgxZendeskWebwidgetConfig] }
            ]
        };
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: NgxZendeskWebwidgetModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.0.8", ngImport: i0, type: NgxZendeskWebwidgetModule });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: NgxZendeskWebwidgetModule });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: NgxZendeskWebwidgetModule, decorators: [{
            type: NgModule,
            args: [{}]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXplbmRlc2std2Vid2lkZ2V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvbmd4LXplbmRlc2std2Vid2lkZ2V0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUE2QixNQUFNLGVBQWUsQ0FBQTtBQUNuRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQTtBQUN6RSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQTs7QUFHNUUsTUFBTSxPQUFPLHlCQUF5QjtJQUNwQyxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQThDO1FBQzNELE9BQU87WUFDTCxRQUFRLEVBQUUseUJBQXlCO1lBQ25DLFNBQVMsRUFBRTtnQkFDVCxFQUFDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFO2dCQUM5RCxFQUFDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxRQUFRLEVBQUUsMEJBQTBCLEVBQUUsSUFBSSxFQUFFLENBQUMseUJBQXlCLENBQUMsRUFBRTthQUNoSDtTQUNGLENBQUE7SUFDSCxDQUFDO3VHQVRVLHlCQUF5Qjt3R0FBekIseUJBQXlCO3dHQUF6Qix5QkFBeUI7OzJGQUF6Qix5QkFBeUI7a0JBRHJDLFFBQVE7bUJBQUMsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IE5neFplbmRlc2tXZWJ3aWRnZXRDb25maWcgfSBmcm9tICcuL25neC16ZW5kZXNrLXdlYndpZGdldC5tb2RlbCdcbmltcG9ydCB7IE5neFplbmRlc2tXZWJ3aWRnZXRTZXJ2aWNlIH0gZnJvbSAnLi9uZ3gtemVuZGVzay13ZWJ3aWRnZXQuc2VydmljZSdcblxuQE5nTW9kdWxlKHt9KVxuZXhwb3J0IGNsYXNzIE5neFplbmRlc2tXZWJ3aWRnZXRNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCh6ZW5kZXNrQ29uZmlnOiBUeXBlPE5neFplbmRlc2tXZWJ3aWRnZXRDb25maWc+KTogTW9kdWxlV2l0aFByb3ZpZGVyczxOZ3haZW5kZXNrV2Vid2lkZ2V0TW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOZ3haZW5kZXNrV2Vid2lkZ2V0TW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtwcm92aWRlOiBOZ3haZW5kZXNrV2Vid2lkZ2V0Q29uZmlnLCB1c2VDbGFzczogemVuZGVza0NvbmZpZyB9LFxuICAgICAgICB7cHJvdmlkZTogTmd4WmVuZGVza1dlYndpZGdldFNlcnZpY2UsIHVzZUNsYXNzOiBOZ3haZW5kZXNrV2Vid2lkZ2V0U2VydmljZSwgZGVwczogW05neFplbmRlc2tXZWJ3aWRnZXRDb25maWddIH1cbiAgICAgIF1cbiAgICB9XG4gIH1cbn1cbiJdfQ==