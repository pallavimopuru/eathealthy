import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { OffersComponent } from './offers/offers.component';
import { HelppComponent } from './helpp/helpp.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BetterHighlightDirective } from './basic-hilight/better-highlight.directive';
import { UnlessDirective } from './basic-hilight/unless.directive';
import { DropdownDirective } from './shared/dropdown.directive';
import { CaluclatorComponent } from './caluclator/caluclator.component';

@NgModule({
    declarations: [
    SearchComponent,
         OffersComponent,
         HelppComponent,
         CartComponent,
         LoginComponent,
         FeedbackComponent,
         AboutusComponent,
         BetterHighlightDirective,
         UnlessDirective,
         DropdownDirective,
         CaluclatorComponent,

  ],
    imports: [
      NgModule
    ],

})
export class SharedModule { }
