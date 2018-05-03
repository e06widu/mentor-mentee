import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-share-document-modal',
  templateUrl: './share-document-modal.component.html',
  styleUrls: ['./share-document-modal.component.scss']
})
export class ShareDocumentModalComponent implements OnInit {

  @Output() share: EventEmitter<any> = new EventEmitter;
  @Output() cancel: EventEmitter<any> = new EventEmitter;
  @Input() mentorsDropDown = [];
  fileSelected = null;

  constructor() {
  }

  ngOnInit() {
  }

  /**
   * Share event
   */
  onShare() {
    this.share.emit();
  }

  /**
   * cancel event
   */
  onCancel() {
    this.cancel.emit();
  }


  /**
   * Upload file
   * @param file - file info
   */
  uploadFile(file) {
    this.fileSelected = file;
  }
}
