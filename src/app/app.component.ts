import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'lw-app',
  template: `
            <main-nav></main-nav>
            <div class='container-fluid'>
              <router-outlet></router-outlet>
            </div>
            `,
  styleUrls: ['app.component.css']
})

export class AppComponent {
  title = 'app works!';
}
