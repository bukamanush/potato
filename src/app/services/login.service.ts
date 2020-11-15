import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { environment } from 'src/environments/environment';

/**
 * Login service to validate user login
 */
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  authCode:string ='';
  constructor(private httpService: HttpService) { }

  /**
   * Fetch login data and validate user details
   * @param user User login name
   * @param password User login password
   * @returns {Promise}
   */
  validateLogin(user: string, password: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpService.doGet(environment.api.login).subscribe((userData: Array<any>) => {
        console.log(userData,user,password)
        let loginUser = userData.filter(userDetails => { return userDetails.user == user && userDetails.password == password });
        if (loginUser.length === 0) {
          reject(false);
        } else {
          this.authCode = loginUser[0].authCode;
          resolve(loginUser[0]);
        }
      },
        error => {
          reject(error)
        });
    });
  }

}
