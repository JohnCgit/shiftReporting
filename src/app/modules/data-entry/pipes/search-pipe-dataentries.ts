import { Pipe, PipeTransform } from '@angular/core';
import { Template } from '@models/*';
import { DataEntry } from '@models/*';

@Pipe({
  name: 'searchPipeDataEntries'
})
export class SearchPipeDataEntries implements PipeTransform {

  transform(dataEntries: DataEntry[], query: string): DataEntry[] {
    return dataEntries
      .filter(dataEntry => dataEntry.template.name.toLowerCase().indexOf(query.toLowerCase()) != -1)
  };

}
