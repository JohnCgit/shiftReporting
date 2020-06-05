import { BaseControl } from '../base/base.model';

export class DynLabel extends BaseControl {
  type = 'label';
  valueType = 'string';
  forControl: string;
  private _settings = [
    { controlId: 'bgColor', label: 'Background color', type: 'color' },
    // { controlId: 'max', label: 'Maximum value', type: 'number' },
  ]

  constructor(opt: {} = {}) {
    super(opt);
    this.settings = this.settings.filter(s => s.controlId !== 'isRequired' && s.controlId !== 'name')
    this.settings = this.settings.concat(this._settings);

    this.forControl = opt['forControl'] || null;
    this.controlId = this.controlId || this.createControlId(this.type);
    this.name = opt['name'] || this.type
  }
} 