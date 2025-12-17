import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { HttpEventType, HttpHandlerFn, HttpRequest, provideHttpClient, withInterceptors } from '@angular/common/http';
import { tap } from 'rxjs';

function LoginInterceptor(request:HttpRequest<unknown>,next:HttpHandlerFn){
    console.log("Outgoing request");
    console.log(request);

    // const req = request.clone({
    //     headers: request.headers.set('X-DEBUG','TESTING')
    // })
    return next(request).pipe( // to intercept response 
        tap(event => {
            if(event.type === HttpEventType.Response){
                console.log("Incoming response");
                console.log(event);
            }
        })
    );

}


bootstrapApplication(AppComponent,{
    providers: [provideHttpClient(
        withInterceptors([LoginInterceptor])
    )]
}).catch((err) => console.error(err));
