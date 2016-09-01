import { Component } from '@angular/core';
import { MainNavComponent } from './shared/navigation/main-nav/main-nav.component';

@Component({
  moduleId: module.id,
  selector: 'lw-app',
  template: `
            <main-nav></main-nav>
            <div class='container'>
              <router-outlet></router-outlet>
            </div>
            `,
  styleUrls: ['app.component.css'],
  directives: [ MainNavComponent ]
})

export class AppComponent {
  title = 'app works!';
}
