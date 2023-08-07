import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MarketData } from '../interfaces/market-data.interface';

@Injectable({
  providedIn: 'root'
})
export class MarketService {
  
  private url_base = 'https://api.coinpaprika.com';

  constructor(private httpClient:HttpClient) { }

  getMarketData(){
    return this.httpClient.get<MarketData>(this.url_base + '/v1/global');
   } 
}
