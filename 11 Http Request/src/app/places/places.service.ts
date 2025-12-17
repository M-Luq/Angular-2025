import { inject, Injectable, signal } from '@angular/core';

import { Place } from './place.model';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap, throwError } from 'rxjs';
import { ErrorService } from '../shared/error.service';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private userPlaces = signal<Place[]>([]);

  private httpClient   = inject(HttpClient);
  private  errorService = inject(ErrorService);

  loadedUserPlaces = this.userPlaces.asReadonly();

  loadAvailablePlaces() {
    return this.fecthPlaces('http://localhost:3002/places','Something went wrong while fetching available places!');
  }

  loadUserPlaces() {
    return this.fecthPlaces('http://localhost:3002/user-places','Something went wrong while fetching user places!').pipe(
      tap({ 
        next: (userPlaces) => {
          this.userPlaces.set(userPlaces);
        }
      })
    );
  }

  addPlaceToUserPlaces(place:Place) {
    const prevPlaces = this.userPlaces();
    if(!prevPlaces.some((p)=> p.id === place.id)){
      this.userPlaces.set([...prevPlaces,place]);
  }

    return this.httpClient.put('http://localhost:3002/user-places',{
      placeId: place.id
    }).pipe(
      catchError( (error)=> {
        this.userPlaces.set(prevPlaces);
        this.errorService.showError("failed to add place to userPlaces on Server")
        return throwError(()=> new Error("failed to add place to userPlaces on Server"))
      })
    );
  }

  removeUserPlace(place: Place) {
    const prevPlaces = this.userPlaces();
    if(prevPlaces.some((p)=> p.id === place.id)){
      this.userPlaces.set(prevPlaces.filter((p) => p.id !== place.id));
  }
    return this.httpClient.delete('http://localhost:3002/user-places/'+place.id).pipe(
       catchError( (error)=> {
        this.userPlaces.set(prevPlaces);
        this.errorService.showError("failed to remove place from userPlaces on Server")
        return throwError(()=> new Error("failed to remove place from userPlaces on Server"))
      })
    )
  }

  private fecthPlaces(url:string, errorMessage:string){
    return this.httpClient.get<{places: Place[]}>(url)
    .pipe(
      map((resData) => resData.places),
      catchError((error) => {
        console.log(error);
        return throwError(() => new Error(errorMessage));
      }))
  }
}
