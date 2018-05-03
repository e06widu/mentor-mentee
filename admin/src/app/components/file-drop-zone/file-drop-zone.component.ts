import {
  Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, SimpleChanges,
  ViewChild,
  OnChanges,
} from '@angular/core';

@Component({
  selector: 'app-file-drop-zone',
  templateUrl: './file-drop-zone.component.html',
  styleUrls: ['./file-drop-zone.component.scss']
})
export class FileDropZoneComponent implements OnInit, OnChanges {

  @ViewChild('selectedFile') selectedFile: ElementRef;

  @Input() allowedExtensions: any = '';
  @Input() text: any = '';
  @Output() private filesChangeEmitter: EventEmitter<File> = new EventEmitter();

  @Input() fileSelected = null;
  @Input() large = false;
  @Input() showFile = true;
  @Input() error = false;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {

    if (changes && changes.fileSelected && changes.fileSelected.currentValue === null) {
      this.selectedFile.nativeElement.value = null;
    }

  }

  /**
   * drag over event
   * @param evt
   */
  @HostListener('dragover', ['$event'])
  public onDragOver(evt) {
    evt.preventDefault();
    evt.stopPropagation();
  }

  /**
   * Drag leave event
   * @param evt
   */
  @HostListener('dragleave', ['$event'])
  public onDragLeave(evt) {
    evt.preventDefault();
    evt.stopPropagation();
  }

  /**
   * Drop event
   * @param evt
   */
  @HostListener('drop', ['$event'])
  public onDrop(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    const files = evt.dataTransfer.files;
    const valid_files: Array<File> = [];
    const invalid_files: Array<File> = [];
    if (files.length > 0) {
      for (const file of files) {
        const ext = file.name.split('.')[file.name.split('.').length - 1];
        if (this.allowedExtensions === ''
          || this.allowedExtensions.split(',').length === 0
          || this.allowedExtensions.split(',').lastIndexOf('.' + ext) !== -1) {
          valid_files.push(file);
        } else {
          invalid_files.push(file);
        }
      }
      if (valid_files.length > 0 && this.showFile) {
        this.fileSelected = valid_files[0];
      }
      this.filesChangeEmitter.emit(this.fileSelected);
    }
  }

  /**
   * File selected
   * @param event - event
   */
  fileChange(event) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0 && this.showFile) {
      this.fileSelected = fileList[0];
    }
    if (fileList.length > 0) {
      this.filesChangeEmitter.emit(fileList[0]);
    }
  }

  /**
   * Show File Dialog
   */
  showBrowseDlg() {
    this.selectedFile.nativeElement.click();
  }
}
