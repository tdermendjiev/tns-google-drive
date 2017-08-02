import { Observable } from 'tns-core-modules/data/observable';
import { EventData } from "tns-core-modules/data/observable";
import { login } from "nativescript-google-drive";
let frameModule = require("tns-core-modules/ui/frame");
let appSettings = require("tns-core-modules/application-settings");

export class LoginViewModel extends Observable {

  private _navigate(path: string) {
    let topmost = frameModule.topmost();
    topmost.navigate({
      moduleName: path,
      clearHistory: true
    });
  }

  public onLogin(eventData: EventData) {

  }

}