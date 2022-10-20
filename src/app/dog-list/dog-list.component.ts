import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})
export class DogListComponent implements OnInit {

  dogList: any;
  constructor(private httpClient: HttpClient) { 
    this.dogList = []
  }

  ngOnInit(): void {
    this.getDogList()
  }

  getDogList(){
    this.httpClient.get('https://dog.ceo/api/breeds/list').subscribe((result)=>{
      this.dogList = result
      console.log(this.dogList.message)
    });
  }

}
