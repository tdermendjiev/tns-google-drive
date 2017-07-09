import { Common } from './google-drive.common';
import { LoginButton } from './login-button/login-button';
export * from './login-manager/login-manager';
declare var GIDSignIn: any;
export class GoogleDrive extends Common {
	constructor() {
    super();
    GIDSignIn.sharedInstance().clientID = "476119937412-a7dvcqpljopkk9krb3407hfmefoaal3o.apps.googleusercontent.com"

  }
}

export class CustomLogin extends LoginButton {
	
}
