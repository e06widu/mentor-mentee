import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {


  @Input() template: any;
  @Input() title: any;
  @Output() cancel: EventEmitter<any> = new EventEmitter;


  constructor(private _sanitizer: DomSanitizer) {
  }

  ngOnInit() {
  }


  /**
   * get HTML
   * @returns {}
   */
  public get html(): SafeHtml {
    return this._sanitizer.bypassSecurityTrustHtml(this.template);
  }

  /**
   * Close modal
   */
  onClose() {
    this.cancel.emit();
  }

}
