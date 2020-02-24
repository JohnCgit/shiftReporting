import { BaseControl } from '../base/base.model';

export class DynDatetime extends BaseControl {
  type = 'datetime';
  valueType = 'datetime'
  constructor(options: {} = {}) {
    super(options);
    this.key = this.key || this.createKey(this.type);

  }
} 