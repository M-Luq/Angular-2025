import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = DUMMY_USERS[randomIndex];
  
  // This is a "getter" property.
  // It's a special kind of property that is computed on-the-fly whenever it's accessed,
  // rather than being stored as a static value.
  //
  // Why use a getter here?
  // It helps to keep the component's template clean. Instead of constructing the
  // image path directly in the HTML, we centralize the logic here. If the path
  // structure ever changes, we only need to update it in this one place.
  get imagePath(){
    // This constructs the full path to the user's avatar image.
    // It uses a template literal (the backticks ``) to combine the base path
    // with the avatar filename from the selectedUser object.
    return `assets/users/${this.selectedUser.avatar}`
  }

  onSelectUser(){
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
    this.selectedUser = DUMMY_USERS[randomIndex];
  }
}
