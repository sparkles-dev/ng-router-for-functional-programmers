import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class RemoteDataService {

  constructor() { }

  public fetchAllTheThings() {

    return Observable.of({ bar: '123' });
  }

}
