import { Component, OnInit, Input,} from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-dog-image',
  templateUrl: './dog-image.component.html',
  styleUrls: ['./dog-image.component.css']
})

export class DogImageComponent implements OnInit {
  @Input() valueToChild: any
  
  breed: any;


constructor(private httpClient: HttpClient){
 this.breed = 'akita'
}

ngOnInit(): void{
  this.selectBreed()
}

selectBreed(){
  this.httpClient.get(`https://dog.ceo/api/breed/${this.breed}/images/random`).subscribe((result)=>{
    this.breed = result
    
});
}

}
