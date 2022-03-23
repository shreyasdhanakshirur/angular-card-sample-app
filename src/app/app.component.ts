import { Component, OnInit, OnDestroy, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator'
import { AppService } from './app.service';
import * as moment from "moment";

export interface Card {
  title: string;
  subtitle: string;
  text: string;
}

let DATA: Card[] = [
  {
    title: 'Shiba Inu 1',
    subtitle: 'Dog Breed',
    text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
  },
  {
    title: 'Shiba Inu 2',
    subtitle: 'Dog Breed',
    text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
  },
  {
    title: 'Shiba Inu 3',
    subtitle: 'Dog Breed',
    text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
  },
  {
    title: 'Shiba Inu 4',
    subtitle: 'Dog Breed',
    text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
  },
  {
    title: 'Shiba Inu 5',
    subtitle: 'Dog Breed',
    text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
  },
  {
    title: 'Shiba Inu 6',
    subtitle: 'Dog Breed',
    text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
  },
  {
    title: 'Shiba Inu 7',
    subtitle: 'Dog Breed',
    text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
  },
  {
    title: 'Shiba Inu 8',
    subtitle: 'Dog Breed',
    text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
  },
  {
    title: 'Shiba Inu 9',
    subtitle: 'Dog Breed',
    text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
  },
  {
    title: 'Shiba Inu 10',
    subtitle: 'Dog Breed',
    text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  obs: any;
  dataSource: MatTableDataSource<Card> = new MatTableDataSource<Card>(DATA);
  length : any;
  pageSize = 20;
  pageIndex = 0;
  pageSizeOptions = [20,25,50];
  data : any;
  
  constructor(private changeDetectorRef: ChangeDetectorRef,private appService : AppService) {
  }

  ngOnInit() {
    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    let params = {
      "type":"",
      "page":1,
      "count":20,
      "order":1
    }
    this.getData(params);
  }

  ngOnDestroy() {
    if (this.dataSource) { 
      this.dataSource.disconnect(); 
    }
  }
  getData(params: { type: string; page: number; count: number; order: number; }){
    this.appService.getData(params).subscribe(
      data  => {
        this.data = data;
        this.length = this.obs.count;
        this.obs = this.data.publicLearningPathResults
      },
      error => {
        console.log(error);
      }
    );
    this.obs = this.dataSource.connect();
  }
  handlePageEvent(event: PageEvent) {
    console.log(event)
    if(event.previousPageIndex === 0){
      event.pageIndex ++
    }
    if(event.pageIndex === 0)
    event.pageIndex ++
    this.length = event.length;
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    let params = {
      "type":"",
      "page":event.pageIndex,
      "count":this.pageSize,
      "order":1
    }
    this.getData(params);
  }

  openModal(card : any)
  {
   alert(
     `Name : ${card?.name},
      Created On : ${moment(new Date(card?.creationDate)).format("YYYY-MM-DD")},
      Publisher : ${card?.publisher.name},
      License : ${card?.licence},
      Description : ${card?.description}
     `
   )
  }
}