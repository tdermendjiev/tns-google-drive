import { Observable } from 'tns-core-modules/data/observable';
import { GoogleDrive } from 'nativescript-google-drive';

export class HelloWorldModel extends Observable {
  public message: string;
  private googleDrive: GoogleDrive;

  constructor() {
    super();

    this.googleDrive = new GoogleDrive();
    this.message = this.googleDrive.message;
  }
}