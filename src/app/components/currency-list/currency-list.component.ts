import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.scss']
})
export class CurrencyListComponent implements OnInit {
  displayedColumns: string[] = ['rank', 'name', 'symbol','type'];
  dataSource: MatTableDataSource<CryptoCurrency> = new MatTableDataSource( ELEMENT_DATA);
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;
  
  constructor(private _currencyService:CurrencyService) {
   }

  ngOnInit(): void {
    this._currencyService.getLiveCurrencies<CryptoCurrency[]>()
        .subscribe((response) => {
           this.dataSource = new MatTableDataSource(response);
           this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
  }
  ngAfterViewInit() {
      }
}

export interface CryptoCurrency {
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active:boolean;
  type:string;
}

const ELEMENT_DATA: CryptoCurrency[] = [

];

