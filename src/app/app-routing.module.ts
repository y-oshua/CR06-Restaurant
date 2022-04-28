import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
},
{
  path:'about',
  component:AboutComponent,
},
{
  path:'menu',
  component:MenuComponent,
},
{
  path:'menu/:productId',
  component:DetailsComponent,
},
{
  path:'cart',
  component:CartComponent,
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
