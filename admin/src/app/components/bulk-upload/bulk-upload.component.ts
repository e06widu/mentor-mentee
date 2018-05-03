import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-bulk-upload',
  templateUrl: './bulk-upload.component.html',
  styleUrls: ['./bulk-upload.component.scss']
})
export class BulkUploadComponent implements OnInit {

  @Output() update: EventEmitter<any> = new EventEmitter;
  @Output() cancel: EventEmitter<any> = new EventEmitter;
  @Input() learningDropDown = [];
  @Input() categoryDropDown = [];

  tabIndex = 0;
  done = false;
  fileSelected = null;
  category = 'Category';
  areas = 'Learning Areas';
  dropText = 'Drag and drop mentor predefined list here or';

  constructor() {
  }

  ngOnInit() {
  }

  /**
   * Update event
   */
  onUpdate() {
    this.update.emit();
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

  /**
   * On category change
   * @param value
   */
  onCategoryChange(value) {
    this.category = value;
  }

  /**
   * On area change
   * @param value
   */
  onAreasChange(value) {
    this.areas = value;
  }

}
