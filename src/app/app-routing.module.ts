import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyListComponent } from './components/currency-list/currency-list.component';
import { MarketOverviewComponent } from './components/market-overview/market-overview.component';
import { CurrencyDetailComponent } from './components/currency-detail/currency-detail.component';

const routes: Routes = [  
                        { path: '', component: CurrencyListComponent },
                        { path: 'currencies', component: CurrencyListComponent },
                        { path: 'market', component: MarketOverviewComponent },
                        {path:'currency-detail/:id', component:CurrencyDetailComponent}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
