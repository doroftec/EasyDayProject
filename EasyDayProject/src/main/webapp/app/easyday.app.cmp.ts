import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'app',
  template: `
    <navigation-menu></navigation-menu>
    <router-outlet></router-outlet>
    `
})
export class EasyDayAppComponent {
}
