import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ControlsLocalService } from './services/controls-local.service';
import { FormGroup } from '@angular/forms';
import { DynControl } from './models/';
import { dynComponents } from './components/dyn-components';


@Component({
  selector: 'app-dynamic-controls',
  templateUrl: './dynamic-controls.component.html',
  styleUrls: ['./dynamic-controls.component.scss'],
  providers: [ControlsLocalService]
})
export class DynamicControlsComponent implements OnChanges, OnInit {
  @Input() control: DynControl;
  @Input() form: FormGroup;
  @Input() appearance: string;
  @Input() readOnly:boolean;

  component;
  private dataSourse = new BehaviorSubject<any>(null);
  private data = this.dataSourse.asObservable();
  constructor(
    private clService: ControlsLocalService,
  ) { }

  ngOnInit(){
    if(this.readOnly){this.form.disable();}
  }
  ngOnChanges() {
    
    this.clService.setData({
      control: this.control,
      form: this.form,
      appearance: this.appearance || 'outline'
    });
    this.component = dynComponents.get(this.control.type);
    
  }

  get isInvalid() {
    if (this.appearance !== 'standard1') return false;
    if (!this.form) return false;
    if (this.control.type === 'label') return false;
    if (!this.form.controls[this.control.controlId].errors) return false;
    return true;
  }
}
