import { CanMatchFn } from '@angular/router';
import { BackendService } from '../+services/backend.service';
import { inject } from '@angular/core';
import { catchError, map, of } from 'rxjs';

export const restaurantOwnerGuard: CanMatchFn = (route, segments) => {
  let backend=inject(BackendService);
  if(sessionStorage.getItem('token')){
      return backend
      .myget('http://localhost:5071/restaurantownercheck')
      .pipe(
        map(response => response as boolean),
        catchError(error => of (false))
      )
    }
  return false;
};
