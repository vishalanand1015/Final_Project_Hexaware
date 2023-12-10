import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminManagementComponent } from './Components/admin-management/admin-management.component';
import { HomeComponent } from './Components/home/home.component';
import { AdminCreateComponent } from './Components/admin-create/admin-create.component';
import { AdminUIComponent } from './Components/admin-ui/admin-ui.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { UserSignupComponent } from './Components/user-signup/user-signup.component';
import { UserLoginComponent } from './Components/user-login/user-login.component';
import { UserUiComponent } from './Components/user-ui/user-ui.component';
import { DisplayAllAdminComponent } from './Components/display-all-admin/display-all-admin.component';
import { UserUpdateComponent } from './Components/user-update/user-update.component';
import { BusOperatorSignupComponent } from './Components/bus-operator-signup/bus-operator-signup.component';
import { OperatorUiComponent } from './Components/operator-ui/operator-ui/operator-ui.component';
import { BusOperatorLoginComponent } from './Components/bus-operator-login/bus-operator-login.component';
import { UpdateAdminComponent } from './Components/update-admin/update-admin.component';
import { AddBusComponent } from './Components/add-bus/add-bus.component';
import { SearchbusComponent } from './Components/searchbus/searchbus.component';
import { BookBusComponent } from './Components/book-bus/book-bus.component';
import { BookingComponent } from './Components/booking/booking.component';
import { UpdateBusComponent } from './Components/update-bus/update-bus.component';
import { GetAllBusComponent } from './Components/get-all-bus/get-all-bus.component';
import { GetAllUserComponent } from './Components/get-all-user/get-all-user.component';
import { GetAllOperatorComponent } from './Components/get-all-operator/get-all-operator.component';
import { UpdateBusOperatorComponent } from './Components/update-bus-operator/update-bus-operator.component';



const routes: Routes = [
  { path: 'admin', component: AdminManagementComponent },
  {path:'home', component: HomeComponent},
  {path:'admin-create', component:AdminCreateComponent},
  {path:'adminUI', component:AdminUIComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'user-signup',component:UserSignupComponent},
  {path:'user-login',component:UserLoginComponent},
  {path:'userUI', component:UserUiComponent},
  {path:'display-all-admin',component:DisplayAllAdminComponent},
  {path:'user-update',component:UserUpdateComponent},
  {path:'bus-operator-signup',component:BusOperatorSignupComponent},
  {path:'operator-ui',component:OperatorUiComponent},
  {path:'bus-operator-login',component:BusOperatorLoginComponent},
  { path:'update-admin', component :UpdateAdminComponent },
  {path:'operator-login',component:BusOperatorLoginComponent},
  {path:'add-bus',component:AddBusComponent},
  {path:'searchbus',component:SearchbusComponent},
  {path:'book-bus',component:BookBusComponent},
  {path:'booking/:busId',component:BookingComponent},
  {path:'update-bus/:id',component:UpdateBusComponent},
 {path:'getAllBus',component:GetAllBusComponent},
 {path:'getAllUsers',component:GetAllUserComponent},
 {path:'getAllOperator',component:GetAllOperatorComponent},
 {path:'update-busOperator',component:UpdateBusOperatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
