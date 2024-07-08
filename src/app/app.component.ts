import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { slider, transformer, transformer2, fader, stepper } from './_helpers/route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'SGW Agendamentos';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
