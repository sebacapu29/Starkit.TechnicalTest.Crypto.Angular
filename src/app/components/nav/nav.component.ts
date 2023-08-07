import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OpcionMenu } from 'src/app/interfaces/option-menu.interface';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public enabledPanel:true;
  public static displayComponent:boolean=true;
  constructor(private router:Router) { }
  opcionesMenu: OpcionMenu[] = [
    { ruta: '/currencies', etiqueta: 'Home' },
    { ruta: '/market', etiqueta: 'Market Data' }
  ];
  ngOnInit(): void {
  }
  navigate(path:string){
    this.router.navigate([path]);
  }
}
