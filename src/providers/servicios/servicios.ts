import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


/*
  Generated class for the ServiciosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiciosProvider {

  baseUrl:string = 'http://rutcucuta/';

  constructor(public http: HttpClient) {
    console.log('Hello ServiciosProvider Provider');
  }

  login(datos: any ): Observable<any>{
    return this.http.post(this.baseUrl+"usuario/login", {email:datos.correo,password:datos.clave},{headers:{'Content-Type':'application/json'}}) ;
  }

  registrar(datos: any ): Observable<any>{
    return this.http.post(this.baseUrl+"usuario/registrar", {email:datos.correo,password:datos.clave},{headers:{'Content-Type':'application/json'}}) ;
  }

  public extractData(token: string){
    
    window.localStorage.setItem('token', token);
    
    
    
}


}
