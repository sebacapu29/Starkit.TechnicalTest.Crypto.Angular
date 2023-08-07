import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription, firstValueFrom } from 'rxjs';
import { CryptoCurrencyDetail } from 'src/app/interfaces/crypto-currency-detail.interface';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-currency-detail',
  templateUrl: './currency-detail.component.html',
  styleUrls: ['./currency-detail.component.scss']
})
export class CurrencyDetailComponent implements OnInit, OnDestroy  {

  private routeSubscription: Subscription;
  public currencyDetail:CryptoCurrencyDetail;
  constructor(private route: ActivatedRoute,
              private _currencyService:CurrencyService) { }

  ngOnInit(): void {
    this.routeSubscription = this.route.params.subscribe(async (params: Params) => {      
      let id = String(params['id']);
      let responseTicker$ = this._currencyService.getCurrencyTicker(id);
      this.currencyDetail = await firstValueFrom(responseTicker$);
      let responseCurrencyInfo$ = this._currencyService.getCurrencyInfo(id);
      const currency = await firstValueFrom(responseCurrencyInfo$);
      this.currencyDetail.logo = currency!.logo;
    });
    
  }
  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }
}
