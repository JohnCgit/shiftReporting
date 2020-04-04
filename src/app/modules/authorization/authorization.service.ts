import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
// import { User, UserRole } from './user.model';
import { Router } from '@angular/router';
import { User, Role, Department } from '@models/*';
import { HttpService, AppHttpResponse, AppHttpRequest } from 'src/app/services/http/http.service';
import { map, take, tap, mergeMap, switchMap } from 'rxjs/operators';
// import { User } from 'src/app/app-store/user/user.model';

export interface CurrentUser {
  user: User;
  roles: Role[];
  departments: Department[];
}

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  private currentUser = new BehaviorSubject<CurrentUser>(null);

  isLoggedIn = false;
  redirectUrl: string;

  constructor(
    private router: Router,
    private httpService: HttpService,
  ) { }

  setCurrentUser(userId: string): void {
    this.getUser(userId)
      .pipe(
        // map(req => <CurrentUser>req.body),
        tap(currentUser => {
          this.currentUser.next(currentUser);
          this.redirectUrl && this.router.navigate([this.redirectUrl]);
        })
      ).subscribe()
  }


  getCurrentUser(): Observable<CurrentUser> {    
    return this.currentUser.asObservable();
  }
  logout() {
    this.currentUser.next(null);
    this.isLoggedIn = false;
    this.router.navigate(['/login'])
  }

  getUser(userId): Observable<CurrentUser> {
    const options: AppHttpRequest = {
      url: 'users/getUser',
      loadingMsg: 'Loading user role ...',
      payload: { userId }
    }
    const optionsRole: AppHttpRequest = {
      url: 'users/GetUserRoles',
      loadingMsg: 'Loading user ...',
      payload: { userId }
    }
    const optionsDepartments: AppHttpRequest = {
      url: 'departments/GetUserDepartments',
      loadingMsg: 'Loading user depatments ...',
      payload: { userId }
    }


    return this.httpService.post<AppHttpResponse>(options)
      .pipe(
        switchMap((respUser) => this.httpService.post<AppHttpResponse>(optionsRole)
          .pipe(
            map(({ body }) => <CurrentUser>{ user: respUser.body, roles: body, })
          )),
        switchMap(user => this.httpService.post<AppHttpResponse>(optionsDepartments).pipe(
          map(({ body }) => { return <CurrentUser>{ ...user, departments: body } })
        )));
  };
}
