import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router"; 
import { ProductComponent } from "./components/product/product.component";
import { CommonModule } from "@angular/common";
const routes : Routes = [
    {path:"",pathMatch:"full", component:ProductComponent},
    {path:"products", component:ProductComponent}
];

@NgModule({
    imports: [ CommonModule,RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}