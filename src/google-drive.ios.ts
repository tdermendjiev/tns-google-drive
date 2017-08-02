import { Common } from './google-drive.common';
import { LoginButton } from './login-button/login-button';
declare var GIDSignIn: any;
declare class NSObject {}
declare class UIApplicationDelegate {}
declare var GGLContext: any;

export class GoogleDrive extends Common {
	constructor() {
    super();
    
  }
}


export class CustomAppDelegate extends NSObject implements UIApplicationDelegate {
	public static ObjCProtocols = [UIApplicationDelegate];
	applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<any,any>) {
		console.log("App delegate assigned");
		let error = new interop.Reference();
		GIDSignIn.sharedInstance().clientID = "476119937412-a7dvcqpljopkk9krb3407hfmefoaal3o.apps.googleusercontent.com";
		GGLContext.sharedInstance().configureWithError(error);
		return (error.value == null)
	}

	applicationOpenURLSourceApplicationAnnotation(application: UIApplication, url: NSURL, sourceApplication: NSString, annotation: any) {
		console.log("open url" + url);
		return GIDSignIn.sharedInstance().handleURLSourceApplicationAnnotation(url, sourceApplication, annotation);
	}
}


