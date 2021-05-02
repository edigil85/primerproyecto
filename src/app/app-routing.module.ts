import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SegundapaginaComponent} from '../app/segundapagina/segundapagina.component';

const routes: Routes = [
  {path: 'segundapagina', component: SegundapaginaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
