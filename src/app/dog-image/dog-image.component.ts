import { Component, OnInit, Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dog-image',
  templateUrl: './dog-image.component.html',
  styleUrls: ['./dog-image.component.css']
})

export class DogImageComponent implements OnInit {
  @Input() data: any | undefined;
  breed: any;  

constructor(private httpClient: HttpClient){
  this.breed = '' 
}

ngOnInit(): void{
  this.selectBreed()
}

selectBreed(){
  this.httpClient.get(`https://dog.ceo/api/breed/boxer/images/random`).subscribe((result)=>{
    this.breed = result
});
}

}
