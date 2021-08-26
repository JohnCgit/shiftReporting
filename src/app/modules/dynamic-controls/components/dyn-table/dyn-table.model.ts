import { BaseControl } from '../base/base.model';

export class DynTable extends BaseControl {
  type = 'gridster';
  valueType = 'string';
  forControl: string;
  diffGridItem = {
    maxItemRows: Infinity,
  }

  private _settings = [
    { controlId: 'table', label: 'Table', type: 'gridster' },
  ]

  constructor(opt: {} = {}) {
    super(opt);
    this.settings = this.settings.filter(s => s.controlId !== 'isRequired' && s.controlId !== 'name')
    this.settings = this.settings.concat(this._settings);
    this.forControl = opt['forControl'] || null;
    this.controlId = this.controlId || this.createControlId(this.type);
    this.gridItem && Object.assign(this.gridItem, this.diffGridItem)
  }
} 
