import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './pages/basket/list/list.component';
import { EditComponent } from './pages/basket/edit/edit.component';
import { MaskDirective } from './directives/mask.directive';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { LoginComponent } from './pages/login/login.component';
import { MasterComponent } from './pages/master/master.component';
import { ManagerGuard } from './guards/manager.guard';
import { AuthGuard } from "./guards/AuthGuard";

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    EditComponent,
    MaskDirective,
    LoadingComponent,
    LoginComponent,
    MasterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard, ManagerGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
