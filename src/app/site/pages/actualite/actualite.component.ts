import { Component, OnInit } from '@angular/core';
import { ActualiteService } from '../../services/actualite.service';

@Component({
  selector: 'app-actualite',
  templateUrl: './actualite.component.html',
  styleUrls: ['./actualite.component.css']
})
export class ActualiteComponent implements OnInit {
  actualites:any[] = [];
      constructor(private _actualiteService:ActualiteService) { }
    

  ngOnInit() {
    this._actualiteService.getActualites().subscribe((res:[]) => {
      this.actualites = res
       console.log(this.actualites)
       console.log("this.actualites") 
     },
      err => console.log(err)
     );
   }

}
