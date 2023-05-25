import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  key = new FormControl('');

  constructor(
    private router: Router
  ) {}

  ngOnInit() {}

  acessoHome() {
    fetch('https://v3.football.api-sports.io/players/seasons', {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'v3.football.api-sports.io',
        'x-rapidapi-key': `${this.key.value}`,
      },
    })
      .then((response) => {
        console.log(response);
        this.router.navigate(['home']);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
