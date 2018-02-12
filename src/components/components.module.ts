import { NgModule } from '@angular/core';
import { ActionSheetComponent } from './action-sheet/action-sheet';
import {IonicModule} from "ionic-angular";
@NgModule({
	declarations: [ActionSheetComponent],
	imports: [
    IonicModule.forRoot(ActionSheetComponent)
  ],
	exports: [ActionSheetComponent]
})
export class ComponentsModule {}
