// main.ts is the main entry point for the Angular application. It's the very
// first code that runs when someone visits the web page.

// This line imports the `bootstrapApplication` function from one of Angular's
// core libraries, `@angular/platform-browser`. This function is specifically
// designed to start (or "bootstrap") an Angular application in a web browser
// environment.
import { bootstrapApplication } from '@angular/platform-browser';

// This imports the application's root component, named `AppComponent`, from the
// `app.component.ts` file. The `AppComponent` is the main component that acts
// as the container for all other components and views in your application.
import { AppComponent } from './app/app.component';

// This is the most important line in the file. It calls the function we
// imported earlier and tells it to launch the application using `AppComponent`
// as the root. When this function runs, Angular creates an application instance
// and renders the `AppComponent`'s template inside the `<app-root>` element
// in `index.html`.
bootstrapApplication(AppComponent)
  // The `bootstrapApplication` function returns a JavaScript `Promise`. This
  // `.catch()` block is attached to that promise to handle any errors that
  // might occur during the application startup process. If something goes
  // wrong, the error will be caught and printed to the browser's developer
  // console.
  .catch((err) => console.error(err));
