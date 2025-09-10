import { Component } from "@angular/core";

@Component({
    selector: 'app-header',
    // template:'<h1> Hello World</h1>',
    templateUrl:'./header.component.html',
    standalone: true, // default it is true in angular > 19 
    styleUrl:'./header.component.css'
})
export class HeaderComponent{

}