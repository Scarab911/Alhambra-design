import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { InfoContainerComponent } from './components/info-container/info-container.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryComponent } from './components/category/category.component';
import { DescriptionComponent } from './components/description/description.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { SideContentComponent } from './components/side-content/side-content.component';
import { SideFooterComponent } from './components/side-footer/side-footer.component';
import { SideSocialsComponent } from './components/side-socials/side-socials.component';
import { SideTagsComponent } from './components/side-tags/side-tags.component';
import { SearchComponent } from './components/search/search.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CollectionItemComponent } from './components/collection-item/collection-item.component';
import { FabricsItemComponent } from './components/fabrics-item/fabrics-item.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InfoContainerComponent,
    CategoriesComponent,
    CategoryComponent,
    DescriptionComponent,
    CollectionsComponent,
    SideContentComponent,
    SideFooterComponent,
    SideSocialsComponent,
    SideTagsComponent,
    SearchComponent,
    CollectionItemComponent,
    FabricsItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
