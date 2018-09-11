import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { BigvaluePipe } from './bigvalue.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    BigvaluePipe
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
