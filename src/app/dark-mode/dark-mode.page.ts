import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-dark-mode',
  templateUrl: './dark-mode.page.html',
  styleUrls: ['./dark-mode.page.scss'],
})
export class DarkModePage implements OnInit {
  darkMode: any
  constructor(
      private themeService: ThemeService,
  ) {
    this.darkMode = this.themeService.darkMode;
  }

  ngOnInit() {
  }

}
