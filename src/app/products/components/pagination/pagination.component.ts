import { Component, AfterViewInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements AfterViewInit {

  @Input() count: any;
  

  @ViewChild('page', { read: ElementRef })
  page: ElementRef | undefined;

  @Output() pageNumber = new EventEmitter;

  constructor() {

  }

  ngAfterViewInit(): void {

  }

  getPageNumber() {
    if (this.page) {
      this.pageNumber.emit(this.page.nativeElement.textContent)
    }
    else {
      this.pageNumber.emit(1)
    }

  }



}
