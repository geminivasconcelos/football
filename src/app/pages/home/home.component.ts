import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import {
  MatTableDataSource,
  MatTableDataSourcePaginator,
  MatTableModule,
} from '@angular/material/table';
import { Router } from '@angular/router';
import { IntegracoesService } from 'src/app/integracoes.service';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

export interface PeriodicElement {
  name: string;
  idade: number;
  weight: number;
}

export interface jogos {
  derrotas: number;
  empates: number;
  vitorias: number;
  jogos: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { idade: 1, name: 'Hydrogen', weight: 1.0079 },
  { idade: 2, name: 'Helium', weight: 4.0026 },
  { idade: 3, name: 'Lithium', weight: 6.941 },
  { idade: 4, name: 'Beryllium', weight: 9.0122 },
  { idade: 5, name: 'Boron', weight: 10.811 },
  { idade: 6, name: 'Carbon', weight: 12.0107 },
  { idade: 7, name: 'Nitrogen', weight: 14.0067 },
  { idade: 8, name: 'Oxygen', weight: 15.9994 },
  { idade: 9, name: 'Fluorine', weight: 18.9984 },
  { idade: 10, name: 'Neon', weight: 20.1797 },
];

const JOGOS: jogos[] = [
  { derrotas: 1, empates: 1, vitorias: 1, jogos: 1 },
  { derrotas: 2, empates: 1, vitorias: 4, jogos: 1 },
  { derrotas: 3, empates: 1, vitorias: 6, jogos: 1 },
  { derrotas: 4, empates: 1, vitorias: 9, jogos: 1 },
  { derrotas: 5, empates: 1, vitorias: 10, jogos: 1 },
  { derrotas: 6, empates: 1, vitorias: 12, jogos: 1 },
  { derrotas: 7, empates: 1, vitorias: 14, jogos: 1 },
  { derrotas: 8, empates: 1, vitorias: 15, jogos: 1 },
  { derrotas: 9, empates: 1, vitorias: 18, jogos: 1 },
  { derrotas: 10, empates: 1, vitorias: 20, jogos: 1 },
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  panelColor = new FormControl('red');

  displayedColumns: string[] = ['idade', 'name', 'weight'];
  dataSource!: MatTableDataSource<PeriodicElement>;

  displayedColumnsJogos: string[] = [
    'derrotas',
    'empates',
    'vitorias',
    'jogos',
  ];
  dataSourceJogos!: MatTableDataSource<jogos>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  paises: any;
  liga = [];
  temporada = [];
  time = [];

  constructor(
    private router: Router,
    private integracoes: IntegracoesService
  ) {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    this.dataSourceJogos = new MatTableDataSource(JOGOS);

    this.dadosFiltros()
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.dataSourceJogos.paginator = this.paginator;
    this.dataSourceJogos.sort = this.sort;
  }

  dadosFiltros() {
    // this.paises = this.integracoes.getCountries();
  }
}
