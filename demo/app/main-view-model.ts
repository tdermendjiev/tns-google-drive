import { Observable } from 'tns-core-modules/data/observable';
import { GoogleDrive } from 'nativescript-google-drive';
// import { CustomLogin } from 'nativescript-google-drive';

export class MainViewModel extends Observable {
  public message: string;
  public filesList: any;
  private googleDrive: GoogleDrive;

  constructor() {
    super();

    this.googleDrive = new GoogleDrive();

  }
}