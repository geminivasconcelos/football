import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IntegracoesService } from 'src/app/integracoes.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  key = new FormControl('');

  constructor(
    private router: Router,
    private integracoes: IntegracoesService
  ) {}

  ngOnInit() {}

  goHome() {
    this.router.navigate(['home']);
  }
}
