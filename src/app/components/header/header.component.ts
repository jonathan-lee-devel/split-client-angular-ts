import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
/**
 * Header component used in all pages.
 */
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;
  isMobile: boolean = false;

  /**
   * Standard constructor.
   * @param {AuthService} authService used to authenticate user
   */
  constructor(private authService: AuthService) {
    this.authService.getIsLoggedIn().subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  /**
   * Init function for header component.
   */
  ngOnInit(): void {
    this.isMobile = window.innerWidth <= 640 && window.innerHeight <= 1200;
  }

  /**
   * Do log out function called from within U.I.
   */
  doLogout() {
    this.authService.logout();
  }
}
