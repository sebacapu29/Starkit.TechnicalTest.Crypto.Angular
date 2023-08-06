import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CryptoCurrency } from '../components/currency-list/currency-list.component';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private url_crypto_currencies = 'https://api.coinpaprika.com';

  constructor(private httpClient:HttpClient) { }

 getLiveCurrencies<T>(){
  return this.httpClient.get<CryptoCurrency[]>(this.url_crypto_currencies + '/v1/coins');
 } 
}
