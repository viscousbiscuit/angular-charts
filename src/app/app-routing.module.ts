import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxExamplesComponent} from './ngx-examples/ngx-examples.component';


const routes: Routes = [
  {
    path: 'ngx-examples', component: NgxExamplesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
