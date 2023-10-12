import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  id:any = '0';
  constructor(private _Activatedroute:ActivatedRoute){
    // using snapshot
    this.id=_Activatedroute.snapshot.params["id"];
    // or
    // this.id=_Actiatedroute.snapshot.paramMap.get("id");

    // using observable
    // this._Activatedroute.paramMap.subscribe(paramMap => { 
    //   this.id = paramMap.get('id');
    // });
    // or
    // this._Activatedroute.params.subscribe(params => {
    //   this.id = params['id'];
    // });
 
  }
}
