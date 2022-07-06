import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
interface ResultCount {
  homeCount: number;
  imageCount: number;
}

@Injectable({
  providedIn: 'root'
})
export class ImagesService {


  countPayload =  {"sizeRange":{"lower":500,"upper":10000},"priceRange":{"lower":10000,"upper":10000000},"location":{"latitude":"30.266898","longitude":"-97.742798","name":"Austin, TX Area","type":"Market","marketId":269,"marketName":"Austin","city":"","state":"TX","stateName":null,"category":null,"categoryId":0,"categoryIds":null,"ipAddress":null,"builder":null,"isNPSrp":false},"searchFacet":{"bed":0,"bath":0,"story":0,"radius":0},"isNational":true,"topMatchesOnly":false,"features":[],"isMatchingRequired":true,"preferences":{"marketId":142,"bedroomMin":1,"bedroomMax":10,"priceMin":300000,"priceMax":8600000,"priceType":null,"bathMin":2,"bathMax":10,"storiesMax":0,"sqftMin":0,"startDate":null,"endDate":null,"roomPreference":null,"marketLocation":{"latitude":"39.290298","longitude":"-76.612503","name":"Baltimore, MD Area"},"garage":null,"hasPool":null},"boardId":270067};

  imagePayload = {"sizeRange":{"lower":500,"upper":10000},"priceRange":{"lower":10000,"upper":10000000},"location":{"latitude":"30.266898","longitude":"-97.742798","name":"Austin, TX Area","type":"Market","marketId":269,"marketName":"Austin","city":"","state":"TX","stateName":null,"category":"","categoryId":0,"categoryIds":[],"ipAddress":null,"builder":null,"isNPSrp":false},"searchFacet":{"bed":0,"bath":0,"story":0,"radius":0},"paging":{"pageSize":5,"page":1},"isNational":true,"topMatchesOnly":false,"features":[],"isMatchingRequired":true,"preferences":{"marketId":142,"bedroomMin":1,"bedroomMax":10,"priceMin":300000,"priceMax":8600000,"priceType":null,"bathMin":2,"bathMax":10,"storiesMax":0,"sqftMin":0,"startDate":null,"endDate":null,"roomPreference":null,"marketLocation":{"latitude":"39.290298","longitude":"-76.612503","name":"Baltimore, MD Area"},"garage":null,"hasPool":null},"isSearchHome":true,"boardId":270067}

  constructor(private httpClient: HttpClient) { }

  getCountForPagination(): Observable<number>{
   const resultCount =  this.httpClient.post<ResultCount>("https://sprint-api.homluv.com/api/v3search/resultcounts",this.countPayload).pipe(map((response) => response.homeCount));

   return resultCount;
  }

  getImagesById(index: number){
    this.imagePayload.paging.page = index;
    return this.httpClient.post("https://sprint-api.homluv.com/api/v3search/results?userId=%7Bec92dc5e-9e21-4511-a691-01aa3aa2d0b2%7D&ctr=8", this.imagePayload )

  }

  setFilters(bed:number, bath:number, story:number, lower:number,higher:number){
    this.countPayload.priceRange.lower = lower;
    this.countPayload.priceRange.upper = higher;
    this.countPayload.searchFacet.bath = bath;
    this.countPayload.searchFacet.bed = bed;
    this.countPayload.searchFacet.story = story;

    this.imagePayload.searchFacet.bath = bath;
    this.imagePayload.searchFacet.bed = bed;
    this.imagePayload.searchFacet.story = story;
    this.imagePayload.priceRange.lower = lower;
    this.imagePayload.priceRange.upper = higher;
  }

   
}
