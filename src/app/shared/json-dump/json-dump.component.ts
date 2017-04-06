import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-json-dump',
  templateUrl: './json-dump.component.html',
  styleUrls: ['./json-dump.component.scss']
})
export class JsonDumpComponent implements OnInit {

  public data$: Observable<{}>;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    this.data$ = this.activatedRoute.data;
  }

}
