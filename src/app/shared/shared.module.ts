import { NgModule } from "@angular/core";
import { DropdownDirective } from "./dropdown.directive";
import { CommonModule } from "@angular/common";
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [DropdownDirective, LoadingSpinnerComponent, AlertComponent],
  imports: [CommonModule],
  exports: [DropdownDirective, CommonModule, LoadingSpinnerComponent, AlertComponent]
  //entryComponents: [AlertComponent]
})
export class SharedModule {}
