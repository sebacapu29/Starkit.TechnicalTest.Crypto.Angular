import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyListComponent } from './components/currency-list/currency-list.component';
import { MarketOverviewComponent } from './components/market-overview/market-overview.component';

const routes: Routes = [  
                        { path: 'currencies', component: CurrencyListComponent },
                        { path: 'market', component: MarketOverviewComponent },
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
