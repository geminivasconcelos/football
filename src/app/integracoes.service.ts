import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class IntegracoesService {
  constructor(private http: HttpClient) {}

  autenticacao(key: string) {
    const apiKey = key; // Substitua pela sua chave de API
    const headers = new HttpHeaders()
      .set('x-rapidapi-host', 'api-football.com')
      .set('x-rapidapi-key', apiKey)
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT')
      .set(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization'
      );

    this.http.get('/api/v3/fixtures', { headers }).subscribe(
      (response: any) => {
        // Processar a resposta da API
        console.log(response);
      },
      (error: any) => {
        // Lidar com erros
        console.error(error);
      }
    );
  }

  async getCountries(apiKey: string) {
    fetch('https://v3.football.api-sports.io/countries', {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'v3.football.api-sports.io',
        'x-rapidapi-key': apiKey,
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getLigue(apiKey: string) {
    fetch('https://v3.football.api-sports.io/leagues', {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'v3.football.api-sports.io',
        'x-rapidapi-key': apiKey,
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getSeasons(apiKey: string) {
    fetch('https://v3.football.api-sports.io/leagues/seasons', {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'v3.football.api-sports.io',
        'x-rapidapi-key': apiKey,
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
