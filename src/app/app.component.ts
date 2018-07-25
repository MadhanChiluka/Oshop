import { Component } from '@angular/core';
import { AuthService } from 'shared/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(
    userService : UserService, 
    auth : AuthService,
    route : ActivatedRoute, 
    router : Router) {
    auth.user$.subscribe((user) => {
      if (user) {
        userService.save(user);
        let returnUrl = route.snapshot.queryParamMap.get('returnUrl');
        if (returnUrl || router.url === '/login')  {
          router.navigate([returnUrl || '/']);
        }
      }
    });

  }
}
