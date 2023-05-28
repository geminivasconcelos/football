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

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  panelColor = new FormControl('red');

  displayedColumns: string[] = ['idade', 'name', 'weight'];
  dataSource!: MatTableDataSource<PeriodicElement>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private router: Router,
    private integracoes: IntegracoesService
  ) {}

  ngOnInit() {

    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
