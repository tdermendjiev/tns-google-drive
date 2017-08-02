import * as application from 'tns-core-modules/application';
import { CustomAppDelegate } from 'nativescript-google-drive';

application.ios.delegate = CustomAppDelegate;
application.start({ moduleName: "login" });


