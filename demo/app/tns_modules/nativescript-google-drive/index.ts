import * as applicationModule from "tns-core-modules/application";
export * from  "./login-button/login-button";

declare class UIResponder { }
declare class NSDictionary { }
declare class UIApplication { }
declare interface  UIApplicationDelegate {}
declare var UIApplicationDelegate: any;
declare var GGLContext: any;
declare var GIDSignIn: any;

// TODO: Extend existing delegate if exists
class BaseDelegate extends UIResponder implements UIApplicationDelegate {
  public static ObjCProtocols = [UIApplicationDelegate];

  applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary): boolean {
    console.log("FROM APPDELEGATE");
    let error; 
    return GGLContext.sharedInstance().configureWithError(error);
    
  }

  applicationOpenURLSourceApplicationAnnotation(application, url, sourceApplication, annotation) {
    return GIDSignIn.sharedInstance().handle(url,sourceApplication, annotation);
  }

}

applicationModule.ios.delegate = BaseDelegate;
console.log(applicationModule.ios.delegate, "TOVA E DELEGATE");