import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  public contents;
  public errors = [];
  public errorMessage;

  constructor(private _httpService: HttpService) { }

  ngOnInit(): void {
    this._httpService.get('contents.json')
      .subscribe(data => {
        if(data.code != 200){
          this.errors.push(data.message);
        }
        else{
          this.contents =  data.results;
        }
      },
      error => this.errorMessage = error);
  }

}
