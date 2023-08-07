import { Component, OnInit } from '@angular/core';
import { MarketData } from 'src/app/interfaces/market-data.interface';
import { MarketService } from 'src/app/services/market.service';

@Component({
  selector: 'app-market-overview',
  templateUrl: './market-overview.component.html',
  styleUrls: ['./market-overview.component.scss']
})
export class MarketOverviewComponent implements OnInit {

  marketData:MarketData = {market_cap_usd:0, cryptocurrencies_number:0, volume_24h_ath_value:0, volume_24h_usd:0};

  constructor(private _marketDataService:MarketService) { }

  ngOnInit(): void {
    this._marketDataService.getMarketData().subscribe((response) => {
        this.marketData = response;
        console.log(response);
   });;
  }

}
