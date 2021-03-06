import { Injectable } from '@angular/core';
import{Http, Response, Headers} from '@angular/http';
import{World, Pallier,Product} from './world';
import {HttpClientModule, HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestserviceService {

  server : string;
  user : string;
  
  constructor(private http: Http) {
    
    
    this.server = "http://localhost:9998/adventureisis/";
    this.user = "";

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
  
  getWorld(): Promise<World> {
    console.log(this.server + "generic/world")
    return this.http.get(this.server + "generic/world").toPromise().then(response =>response.json()).catch(this.handleError);
  };

  getServer():string{
    return this.server;
  }
  
}
