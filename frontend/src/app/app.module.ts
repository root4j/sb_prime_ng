import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AppConfigComponent } from "./app.config.component";
import { AppFooterComponent } from "./app.footer.component";
import { AppMainComponent } from "./app.main.component";
import { AppMenuComponent } from "./app.menu.component";
import { AppMenuitemComponent } from "./app.menuitem.component";
import { AppPrimeModule } from "./app.prime.module";
import { AppTopBarComponent } from "./app.topbar.component";
import { UninorteModule } from "./business/uninorte.module";

import { AccessComponent } from "./components/access/access.component";
import { CrudComponent } from "./components/crud/crud.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ErrorComponent } from "./components/error/error.component";
import { NotfoundComponent } from "./components/notfound/notfound.component";

import { ConfigService } from "./service/app.config.service";
import { MenuService } from "./service/app.menu.service";
import { CountryService } from "./service/countryservice";
import { CustomerService } from "./service/customerservice";
import { EventService } from "./service/eventservice";
import { IconService } from "./service/iconservice";
import { NodeService } from "./service/nodeservice";
import { PhotoService } from "./service/photoservice";
import { ProductService } from "./service/productservice";

@NgModule({
    imports: [
        AppPrimeModule,
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        UninorteModule
    ],
    declarations: [
        AppComponent,
        AppMainComponent,
        AppTopBarComponent,
        AppFooterComponent,
        AppConfigComponent,
        AppMenuComponent,
        AppMenuitemComponent,
        DashboardComponent,
        CrudComponent,
        ErrorComponent,
        NotfoundComponent,
        AccessComponent,
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService, MenuService, ConfigService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
