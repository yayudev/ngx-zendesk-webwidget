import { Injectable } from '@angular/core';
import { NgxZendeskWebwidgetConfig } from './ngx-zendesk-webwidget.model';
import * as i0 from "@angular/core";
import * as i1 from "./ngx-zendesk-webwidget.model";
function getWindow() {
    return window;
}
export class NgxZendeskWebwidgetService {
    ngxZendeskWebwidgetConfig;
    window;
    initialized = false;
    _zE;
    constructor(ngxZendeskWebwidgetConfig) {
        this.ngxZendeskWebwidgetConfig = ngxZendeskWebwidgetConfig;
        if (!this.ngxZendeskWebwidgetConfig.accountUrl) {
            throw new Error('Missing accountUrl. Please set in app config via ZendeskWidgetProvider');
        }
        this.window = getWindow();
        if (!this.ngxZendeskWebwidgetConfig.lazyLoad) {
            this.initZendesk();
        }
    }
    initZendesk() {
        const window = this.window;
        const config = this.ngxZendeskWebwidgetConfig;
        // tslint:disable
        window.zEmbed || function (e, t) {
            let n, o, d, i, s, a = [];
            let r = document.createElement("iframe");
            window.zEmbed = function () {
                a.push(arguments);
            };
            window.zE = window.zE || window.zEmbed;
            r.src = "javascript:false";
            r.title = "";
            r.style.cssText = "display: none";
            d = document.getElementsByTagName(config.injectionTag || "head");
            d = d[d.length - 1];
            d.parentNode.insertBefore(r, d);
            i = r.contentWindow;
            s = i.document;
            try {
                o = s;
            }
            catch (e) {
                n = document.domain;
                r.src = 'javascript:var d=document.open();d.domain="' + n + '";void(0);';
                o = s;
            }
            o.open()._l = function () {
                let e = this.createElement("script");
                n && (this.domain = n);
                e.id = "js-iframe-async";
                e.src = "https://static.zdassets.com/ekr/snippet.js";
                this.t += new Date;
                this.zendeskHost = config.accountUrl;
                this.zEQueue = a;
                this.body.appendChild(e);
            };
            o.write('<body onload="document._l();">');
            o.close();
        }();
        // tslint:enable
        return this.finishLoading();
    }
    finishLoading() {
        return new Promise((resolve, reject) => {
            const timeout = setTimeout(() => {
                this.initialized = false;
                reject(Error('timeout'));
            }, this.ngxZendeskWebwidgetConfig.timeOut || 30000); // 30 seconds
            this.window.zE(() => {
                this.ngxZendeskWebwidgetConfig.callback(this.window.zE);
                this.initialized = true;
                this._zE = this.window.zE;
                clearTimeout(timeout);
                resolve(true);
            });
        });
    }
    get isInitialized() {
        return this.initialized;
    }
    get zE() {
        return this._zE;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: NgxZendeskWebwidgetService, deps: [{ token: i1.NgxZendeskWebwidgetConfig }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: NgxZendeskWebwidgetService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.8", ngImport: i0, type: NgxZendeskWebwidgetService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [{ type: i1.NgxZendeskWebwidgetConfig }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXplbmRlc2std2Vid2lkZ2V0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL25neC16ZW5kZXNrLXdlYndpZGdldC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sK0JBQStCLENBQUM7OztBQUUxRSxTQUFTLFNBQVM7SUFDaEIsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQUtELE1BQU0sT0FBTywwQkFBMEI7SUFNakI7SUFKSCxNQUFNLENBQU07SUFDckIsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUNwQixHQUFHLENBQU07SUFFakIsWUFBb0IseUJBQW9EO1FBQXBELDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7UUFDdEUsSUFBSSxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxVQUFVLEVBQUU7WUFDOUMsTUFBTSxJQUFJLEtBQUssQ0FBQyx3RUFBd0UsQ0FBQyxDQUFDO1NBQzNGO1FBRUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLEVBQUUsQ0FBQztRQUUxQixJQUFJLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFFBQVEsRUFBRTtZQUM1QyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEI7SUFDSCxDQUFDO0lBRU0sV0FBVztRQUNoQixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzNCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQztRQUU5QyxpQkFBaUI7UUFDakIsTUFBTSxDQUFDLE1BQU0sSUFBSSxVQUFTLENBQUMsRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFBO1lB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LElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO2dCQUMxQixZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3RCLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoQixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELElBQUksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBRUQsSUFBSSxFQUFFO1FBQ0osT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFBO0lBQ2pCLENBQUM7dUdBdkZVLDBCQUEwQjsyR0FBMUIsMEJBQTBCLGNBRnpCLE1BQU07OzJGQUVQLDBCQUEwQjtrQkFIdEMsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5neFplbmRlc2tXZWJ3aWRnZXRDb25maWcgfSBmcm9tICcuL25neC16ZW5kZXNrLXdlYndpZGdldC5tb2RlbCc7XG5cbmZ1bmN0aW9uIGdldFdpbmRvdygpOiBhbnkge1xuICByZXR1cm4gd2luZG93O1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOZ3haZW5kZXNrV2Vid2lkZ2V0U2VydmljZSB7XG5cbiAgcHJpdmF0ZSByZWFkb25seSB3aW5kb3c6IGFueTtcbiAgcHJpdmF0ZSBpbml0aWFsaXplZCA9IGZhbHNlO1xuICBwcml2YXRlIF96RTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbmd4WmVuZGVza1dlYndpZGdldENvbmZpZzogTmd4WmVuZGVza1dlYndpZGdldENvbmZpZykge1xuICAgIGlmICghdGhpcy5uZ3haZW5kZXNrV2Vid2lkZ2V0Q29uZmlnLmFjY291bnRVcmwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBhY2NvdW50VXJsLiBQbGVhc2Ugc2V0IGluIGFwcCBjb25maWcgdmlhIFplbmRlc2tXaWRnZXRQcm92aWRlcicpO1xuICAgIH1cblxuICAgIHRoaXMud2luZG93ID0gZ2V0V2luZG93KCk7XG5cbiAgICBpZiAoIXRoaXMubmd4WmVuZGVza1dlYndpZGdldENvbmZpZy5sYXp5TG9hZCkge1xuICAgICAgdGhpcy5pbml0WmVuZGVzaygpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBpbml0WmVuZGVzaygpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBjb25zdCB3aW5kb3cgPSB0aGlzLndpbmRvdztcbiAgICBjb25zdCBjb25maWcgPSB0aGlzLm5neFplbmRlc2tXZWJ3aWRnZXRDb25maWc7XG5cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZVxuICAgIHdpbmRvdy56RW1iZWQgfHwgZnVuY3Rpb24oZSwgdCkge1xuICAgICAgbGV0IG4sIG8sIGQsIGksIHMsIGEgPSBbXVxuICAgICAgbGV0IHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpXG4gICAgICB3aW5kb3cuekVtYmVkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGEucHVzaChhcmd1bWVudHMpXG4gICAgICB9XG4gICAgICB3aW5kb3cuekUgPSB3aW5kb3cuekUgfHwgd2luZG93LnpFbWJlZFxuICAgICAgci5zcmMgPSBcImphdmFzY3JpcHQ6ZmFsc2VcIlxuICAgICAgci50aXRsZSA9IFwiXCJcbiAgICAgIHIuc3R5bGUuY3NzVGV4dCA9IFwiZGlzcGxheTogbm9uZVwiXG4gICAgICBkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoY29uZmlnLmluamVjdGlvblRhZyB8fCBcImhlYWRcIilcbiAgICAgIGQgPSBkW2QubGVuZ3RoIC0gMV1cbiAgICAgIGQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUociwgZClcbiAgICAgIGkgPSByLmNvbnRlbnRXaW5kb3dcbiAgICAgIHMgPSBpLmRvY3VtZW50XG4gICAgICB0cnkge1xuICAgICAgICBvID0gc1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBuID0gZG9jdW1lbnQuZG9tYWluXG4gICAgICAgIHIuc3JjID0gJ2phdmFzY3JpcHQ6dmFyIGQ9ZG9jdW1lbnQub3BlbigpO2QuZG9tYWluPVwiJyArIG4gKyAnXCI7dm9pZCgwKTsnXG4gICAgICAgIG8gPSBzXG4gICAgICB9XG4gICAgICBvLm9wZW4oKS5fbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgZSA9IHRoaXMuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKVxuICAgICAgICBuICYmICh0aGlzLmRvbWFpbiA9IG4pXG4gICAgICAgIGUuaWQgPSBcImpzLWlmcmFtZS1hc3luY1wiXG4gICAgICAgIGUuc3JjID0gXCJodHRwczovL3N0YXRpYy56ZGFzc2V0cy5jb20vZWtyL3NuaXBwZXQuanNcIlxuICAgICAgICB0aGlzLnQgKz0gbmV3IERhdGVcbiAgICAgICAgdGhpcy56ZW5kZXNrSG9zdCA9IGNvbmZpZy5hY2NvdW50VXJsXG4gICAgICAgIHRoaXMuekVRdWV1ZSA9IGFcbiAgICAgICAgdGhpcy5ib2R5LmFwcGVuZENoaWxkKGUpXG4gICAgICB9XG4gICAgICBvLndyaXRlKCc8Ym9keSBvbmxvYWQ9XCJkb2N1bWVudC5fbCgpO1wiPicpXG4gICAgICBvLmNsb3NlKClcbiAgICB9KCk7XG4gICAgLy8gdHNsaW50OmVuYWJsZVxuXG4gICAgcmV0dXJuIHRoaXMuZmluaXNoTG9hZGluZygpO1xuICB9XG5cbiAgcHJpdmF0ZSBmaW5pc2hMb2FkaW5nKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxib29sZWFuPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cbiAgICAgIGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplZCA9IGZhbHNlO1xuICAgICAgICByZWplY3QoRXJyb3IoJ3RpbWVvdXQnKSk7XG4gICAgICB9LCB0aGlzLm5neFplbmRlc2tXZWJ3aWRnZXRDb25maWcudGltZU91dCB8fCAzMDAwMCk7IC8vIDMwIHNlY29uZHNcblxuICAgICAgdGhpcy53aW5kb3cuekUoKCkgPT4ge1xuICAgICAgICB0aGlzLm5neFplbmRlc2tXZWJ3aWRnZXRDb25maWcuY2FsbGJhY2sodGhpcy53aW5kb3cuekUpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fekUgPSB0aGlzLndpbmRvdy56RTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXQgaXNJbml0aWFsaXplZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pbml0aWFsaXplZDtcbiAgfVxuXG4gIGdldCB6RSgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl96RVxuICB9XG59XG4iXX0=