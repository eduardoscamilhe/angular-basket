import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MasterComponent } from './pages/master/master.component';
import { ListComponent } from './pages/basket/list/list.component';
import { AuthGuard } from './guards/auth.guard';
import { ManagerGuard } from './guards/manager.guard';
import { EditComponent } from './pages/basket/edit/edit.component';


const routes: Routes = [
  { path: "login", component: LoginComponent },
  {
    path: "",
    component: MasterComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "list", component: ListComponent },
      { path: "edit/:code", component: EditComponent, canActivate: [ManagerGuard] },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
