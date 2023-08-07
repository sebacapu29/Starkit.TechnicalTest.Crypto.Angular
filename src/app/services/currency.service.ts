import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CryptoCurrency } from '../interfaces/crypto-currency.interface';
import { CryptoCurrencyDetail } from '../interfaces/crypto-currency-detail.interface';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private url_base_coinpaprika = 'https://api.coinpaprika.com';

  constructor(private httpClient:HttpClient) { }

 getLiveCurrencies(){
  return this.httpClient.get<CryptoCurrency[]>(this.url_base_coinpaprika + '/v1/coins');
 } 
 getCurrencyTicker(id:string){
  return this.httpClient.get<CryptoCurrencyDetail>(this.url_base_coinpaprika + '/v1/tickers/' + id);
 }
 getCurrencyInfo(id:string){
  return this.httpClient.get<CryptoCurrency>(this.url_base_coinpaprika + '/v1/coins/'+id);
 }
}
