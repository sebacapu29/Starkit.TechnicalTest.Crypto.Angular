export interface CryptoCurrencyDetail {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    quotes: {
      USD: Quote;
      EUR?: Quote;
      BTC?: Quote;
    };
    logo:string;
  }
export interface Quote {
    price: number;
    volume_24h: number;
    volume_24h_change_24h: number;
  }
  
  
  