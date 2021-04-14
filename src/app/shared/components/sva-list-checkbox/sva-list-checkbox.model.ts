import { MatListOptionCheckboxPosition } from '@angular/material/list';

export class SvaCheckboxListModel{
  positioning!: MatListOptionCheckboxPosition;
  ItterableCheckboxList!: SvaCheckboxModel[];
}
export class SvaCheckboxModel{
  data!: string;
  isChecked!: boolean;
}

