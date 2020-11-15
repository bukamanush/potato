import { Component } from '@angular/core';
import { PrimeNGConfig } from "primeng/api";
import { Router, ActivatedRoute, ParamMap, NavigationStart } from '@angular/router';
import { LoginService } from './services/login.service';

/**
 * Entry component
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  showToolbar:boolean = false;
  constructor(private primengConfig:PrimeNGConfig,
    private router:Router,
    private loginService:LoginService
    ){
      const authcode =localStorage.getItem('authCode');
      loginService.authCode=authcode;
      router.events.forEach((event) => {
        if(event instanceof NavigationStart) {
          console.log(event.url);
          
         this.showToolbar= event.url!='/login';
        }
        // NavigationEnd
        // NavigationCancel
        // NavigationError
        // RoutesRecognized
      });
  }
  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  /**
   * Method to navigate different urls
   * @param url string
   */
  navigate(url:string){
    this.router.navigate([url]);
  }

  /**
   * Method to log out application
   */
  logout(){
    localStorage.removeItem('authCode');
    this.loginService.authCode = '';
    this.router.navigate(['/login']);
  }
}
