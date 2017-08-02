import * as applicationModule from "tns-core-modules/application";
import { LoginButtonBase } from './login-button.common';

declare var GIDSignInButton: any;
declare class GIDSignInDelegate {}
declare class GIDSignInUIDelegate {}
declare class GIDSignIn {}
declare class UIViewController {}


export class LoginButton extends LoginButtonBase {

  public nativeView: any;
  private _delegate;

  constructor() {
    super();
    this.nativeView = new GIDSignInButton();
     console.log("GID button init");
    this._delegate = new LoginButtonDelegate();
    // this.nativeView.delegate = this._delegate;
    // this.nativeView.uiDelegate = this._delegate;
  }

}

class LoginButtonDelegate extends UIViewController implements GIDSignInDelegate, GIDSignInUIDelegate {
  public static ObjCProtocols = [GIDSignInDelegate, GIDSignInUIDelegate];


}