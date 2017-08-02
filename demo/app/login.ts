import * as observable from 'tns-core-modules/data/observable';
import * as pages from 'tns-core-modules/ui/page';
import {LoginViewModel} from './login-view-model';
import * as frameModule from "tns-core-modules/ui/frame";

// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
    // Get the event sender
    let page = <pages.Page>args.object;
    page.bindingContext = new LoginViewModel();
}

export function signIn () {
    var topmost = frameModule.topmost();
    topmost.navigate("main-page");
};