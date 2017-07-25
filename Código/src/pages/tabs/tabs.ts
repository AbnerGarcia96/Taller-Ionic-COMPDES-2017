import { Component } from '@angular/core';

import { Inicio } from '../inicio/inicio';
import { NativePage } from '../native/native';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = Inicio;
  tab2Root = NativePage;

  constructor() {

  }
}
