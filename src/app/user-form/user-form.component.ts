import {Component, OnInit} from '@angular/core';
import {FileUploader, FileUploaderOptions} from 'ng2-file-upload';
import {User} from '../user';
const URL = 'http://localhost:3000/api/upload';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  constructor() {
  }

  // model = new User(1, 'appu', 'bht bada', 'aajki', '120');
  model = new User(1, '', '', '', '');

  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
    };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('ImageUpload:uploaded:', item, status, response);
      alert('File uploaded successfully');
    };
  }

  uploadAllData() {
    // save all form data
    this.uploader.uploadAll();
  }
}
