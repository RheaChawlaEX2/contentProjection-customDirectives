import { Component, ComponentFactoryResolver, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ImagesService } from 'src/app/images.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  @ViewChild('imageUrl')
  imgTag: ElementRef | undefined;

  @ViewChild('content', { static: true })
  content!: ElementRef;

  @ViewChild("filter", { read: ViewContainerRef })
  filterComponent!: ViewContainerRef;

  imageUrls: string[] = [];
  imagesData: [] | any;
  homeCount!: number;
  resultArr: number[] = [];
  compiler: any;

  constructor(public imagesService: ImagesService,
    private cfr: ComponentFactoryResolver) { }

  ngOnInit(): void {

    let data = JSON.parse(localStorage.getItem("datas") || '{}');
    if (data['bed'] == '' && data['bath'] == '' && data['story'] == '' && data['lower'] == '' && data['higher'] == '') {

      this.imagesService.getCountForPagination().subscribe((data: number) => {
        this.homeCount = data;
        this.resultArr = new Array(Math.ceil(this.homeCount / 5))
        return this.resultArr;
      });
      this.defaultDisplay()
    }
    else {
      this.filteringData(data)
    }
  }

  //Default  
  defaultDisplay() {

    this.imageUrls = [];
    this.imagesService.getImagesById(1).subscribe((image) => {

      this.imagesData = image;
      this.imagesData = this.imagesData['searchResultModels'];
      this.imagesData.forEach((element: any) => {

        if (element) {
          this.imageUrls.push(element['imageInfo']['path'])
        }
      });
    })
  }

  //Lazy Loaded - Filter Component
  async lazyLoadComponent() {

    this.filterComponent.clear()
    const { ImageFilterComponent } = await import('../image-filter/image-filter.component');

    const componentFactory = this.cfr.resolveComponentFactory(ImageFilterComponent);
    const componentInstance = this.filterComponent.createComponent(componentFactory);
    componentInstance.instance.filterEvent.subscribe((data: any) => {
      this.filteringData(data)
    })
  }

  //Buttons Click handler
  currentPage(index: number) {
    let count = 0;

    this.imagesService.getImagesById(index).subscribe((data) => {
      this.imagesData = data;
      this.imagesData = this.imagesData['searchResultModels'];
      this.imageUrls = [];

      this.imagesData.forEach((element: any) => {
        if (element) {
          this.imageUrls[count++] = element.imageInfo.path;
        }
      });
    })

    return this.imageUrls;
  }

  //Filtering Data
  filteringData(filters: any) {

    if (filters['bed'] == '' && filters['bath'] == '' && filters['story'] == '' && filters['lower'] == '' && filters['higher'] == '') {

      this.imagesService.setFilters(0, 0, 0, 10000, 10000000);
    }
    else {
      this.imagesService.setFilters(filters.bed, filters.bath, filters.story, filters.lower, filters.higher);
    }
    this.imagesService.getCountForPagination().subscribe((data: number) => {
      this.homeCount = data;
      this.resultArr = new Array(Math.ceil(this.homeCount / 5))
      return this.resultArr;
    });

    this.defaultDisplay()
  }
}




