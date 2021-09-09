import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {

  @ViewChild('fileInput') fileInput!: ElementRef;
  fileAttr = 'Choose File';

  @Output() public filesUploaded: EventEmitter<FileList> = new EventEmitter()
  public files!: FileList;

  uploadFileEvt(imgFile: any) {
    if (imgFile.target.files && imgFile.target.files[0]) {
      this.fileAttr = '';
      this.files = imgFile.target.files;
      this.filesUploaded.emit(imgFile.target.files);
    } else {
      this.fileAttr = 'Choose File';
    }
  }

}
