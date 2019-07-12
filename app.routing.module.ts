
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";


const routes: Routes = [{

  path:'',
  component:AppComponent,
  children:[
    { path:'',pathMatch:'full',redirectTo:"dashboard" },
    { path:'dashboard' ,loadChildren:'./page/dashboard/dashboard.module#DashboardModule'},
    { path:'category' ,loadChildren:'./page/category/category.module#CategoryModule'},
    { path:'customers' ,loadChildren:'./page/customers/customers.module#CustomersModule'},
    { path:'customersbilling' ,loadChildren:'./page/customersbilling/customersbilling.module#CustomersBillingModule'},
    { path:'customerscreditcard' ,loadChildren:'./page/customerscreditcard/customerscreditcard.module#CustomersCreditCardModule'},
    { path:'customersshipping' ,loadChildren:'./page/customersshipping/customersshipping.module#CustomersShippingModule'},
    { path:'orderdetails' ,loadChildren:'./page/orderdetails/orderdetails.module#OrderdetailsModule'},
    { path:'orders' ,loadChildren:'./page/orders/orders.module#OrdersModule'},
    { path:'payment' ,loadChildren:'./page/payment/payment.module#PaymentModule'},
    { path:'products' ,loadChildren:'./page/products/products.module#ProductsModule'},
    { path:'shippers' ,loadChildren:'./page/shippers/shippers.module#ShippersModule'},
    { path:'subcategory' ,loadChildren:'./page/subcategory/subcategory.module#SubcategoryModule'},
    { path:'suppliers' ,loadChildren:'./page/suppliers/suppliers.module#SuppliersModule'}
  ]

}];
@NgModule({

  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]

})

export class AppRootingModule {

}
