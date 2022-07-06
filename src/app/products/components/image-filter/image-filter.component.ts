import { Component, OnInit, Output, ViewChild, ElementRef, EventEmitter, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-image-filter',
  templateUrl: './image-filter.component.html',
  styleUrls: ['./image-filter.component.css']
})
export class ImageFilterComponent implements OnInit, AfterViewChecked {

  @ViewChild('bed')
  bed!: ElementRef;

  @ViewChild('bath')
  bath!: ElementRef;

  @ViewChild('story')
  story!: ElementRef;

  @ViewChild('lower')
  lower!: ElementRef;

  @ViewChild('higher')
  higher!: ElementRef;

  @Output('filterEvent') filterEvent = new EventEmitter();

  homeCount = 0;
  resultArr : any[] = [];
  imageUrls : any[] = [];
  imagesData : any;

  
  constructor() { }

  ngOnInit(): void {
    }

   

  ngAfterViewChecked(): void {
    
    let data = JSON.parse(localStorage.getItem("datas") || '{}' );
    if(data['bed'] && data['bath'] && data['story'] && data['lower'] && data['higher']){
      this.bed.nativeElement.value = data['bed'];
      this.bath.nativeElement.value = data['bath'];
      this.story.nativeElement.value = data['story'];
      this.lower.nativeElement.value = data['lower'];
      this.higher.nativeElement.value = data['higher'];
    }
    else{

      
      this.bed.nativeElement.value = '';
      this.bath.nativeElement.value = '';
      this.story.nativeElement.value = '';
      this.lower.nativeElement.value = '';
      this.higher.nativeElement.value = '';
    }
  }

  filteringEvent() {

  localStorage.setItem("datas", JSON.stringify({
    bed: this.bed.nativeElement.value,
    bath: this.bath.nativeElement.value,
    story: this.story.nativeElement.value,
    lower: this.lower.nativeElement.value,
    higher: this.higher.nativeElement.value
}));

    this.filterEvent.emit({
      bed: this.bed.nativeElement.value,
        bath: this.bath.nativeElement.value,
        story: this.story.nativeElement.value,
        lower: this.lower.nativeElement.value,
        higher: this.higher.nativeElement.value
    });


  
  }
}
