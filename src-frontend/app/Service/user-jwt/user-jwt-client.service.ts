import { HttpClient, HttpHeaders , HttpErrorResponse,} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/Model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserJwtClientService {

  
  apiUrl: string = 'http://localhost:8181/api/v1/usercustomers/';
  loggedInUsername: string = '';
  constructor(private http: HttpClient) { }

  getGeneratedToken(requestBody: any) {

    return this.http.post(this.apiUrl + "authenticate", requestBody, { responseType: 'text' as 'json' });

  }
  updateUser(user: User,token:string): Observable<any> {
    let tokenString = 'Bearer '+ token;
    console.log(tokenString);
    const headers = new HttpHeaders().set('Authorization', tokenString);
    console.log(headers);
    return this.http.put(`${this.apiUrl}update/${user.userId}`, user,{headers});
  }


}
