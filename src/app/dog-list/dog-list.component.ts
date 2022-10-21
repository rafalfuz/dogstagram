import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})

export class DogListComponent implements OnInit {

  dogList: any;
  data?: string;
  dogListArray: string[];
  


  constructor(private httpClient: HttpClient) { 
    this.dogList
    this.dogListArray = []
  }

  ngOnInit(): void {
    this.getDogList()
    
  }

  getDogList(){
    this.httpClient.get('https://dog.ceo/api/breeds/list').subscribe((result)=>{
      this.dogList = result
      this.dogListArray = this.dogList.message
    });
  }
}
