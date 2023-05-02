import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { CaluclatorComponent } from './caluclator/caluclator.component';

@NgModule({
    declarations: [
    SearchComponent,
         LoginComponent,
         FeedbackComponent,
         AboutusComponent,
         DropdownDirective,
         CaluclatorComponent,

  ],
    imports: [
      NgModule
    ],

})
export class SharedModule { }
