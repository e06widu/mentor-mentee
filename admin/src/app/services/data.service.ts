import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import 'rxjs/add/operator/share';

import {environment} from '../../environments/environment';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) {
  }


  /**
   * Loading data from JSON files
   * @param name
   * @returns {any}
   */
  getData(name) {
    return this.http.get(environment.api.replace('{name}', name)).share().toPromise();
  }
}
