import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CryptoCurrency } from 'src/app/interfaces/crypto-currency.interface';
import { CurrencyService } from 'src/app/services/currency.service';
import { NavComponent } from '../nav/nav.component';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.scss']
})
export class CurrencyListComponent implements OnInit {
  displayedColumns: string[] = ['rank', 'name', 'symbol','type'];
  ELEMENT_DATA: CryptoCurrency[] = [];
  dataSource: MatTableDataSource<CryptoCurrency> = new MatTableDataSource(this.ELEMENT_DATA);
  showSpinnir:boolean;
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;
  
  constructor(private _currencyService:CurrencyService,
              private _router:Router) {
   }

  async ngOnInit() {
    this.showSpinnir = true;
    let source$ = this._currencyService.getLiveCurrencies();
    const currencies = await firstValueFrom(source$); 
    this.dataSource = new MatTableDataSource(currencies);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.showSpinnir = false;
  }
  rowSelected(element:CryptoCurrency){
        this._router.navigate(['/currency-detail', element.id])
  }
}

