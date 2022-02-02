import { Action, createReducer, on } from '@ngrx/store';
import * as DataEntryActions from './data-entry.actions';
import { DataEntry, CurrentDataEntry, DataEntryLog } from './data-entry.model';

export const dataEntryFeatureKey = 'dataEntry';

export interface State {
  currentDataEntry: CurrentDataEntry,

  //me
  // currentDataEntryId: string,

  pendingDataEntry: DataEntry,
  latestDataEntry: DataEntry,
  dataEntriesOnDate: DataEntry[],
  dataEntries: DataEntry[],
  dataEntryLogs: DataEntryLog[],
  dataEntriesWaitingForApproval: DataEntry[],
  date:{startDate:string,endDate:string}
}

export const initialState: State = {
  currentDataEntry: null,

  //me
  // currentDataEntryId: null,
  pendingDataEntry:null,
  latestDataEntry: null,
  dataEntriesOnDate: [],
  dataEntries: [],
  dataEntryLogs: [],
  dataEntriesWaitingForApproval:[],
  date:{startDate:'',endDate:''}
};

const dataEntryReducer = createReducer(
  initialState,

  on(DataEntryActions.setDataEntries,
    (state, { dataEntries }) => ({ ...state, dataEntries: dataEntries })),

  on(DataEntryActions.setDate,
    (state, { startDate,endDate }) => ({ ...state, date:{startDate: startDate,endDate: endDate}})),

  on(DataEntryActions.getLatestDataEntrySuccess,
    (state, { dataEntry }) => ({ ...state, latestDataEntry: dataEntry })),

  on(DataEntryActions.setDataEntriesOnDate,
    (state, { dataEntries }) => ({ ...state, dataEntriesOnDate: dataEntries })),

  on(DataEntryActions.setCurrentDataEntry,
    (state, { currentDataEntry }) => ({ ...state, currentDataEntry })),

  on(DataEntryActions.getDataEntryLogsSuccess,
    (state, { dataEntryLogs }) => ({ ...state, dataEntryLogs })),

  on(DataEntryActions.setDataEntrieWaitingForApproval,
    (state, { DataEntriesWaitingForApproval }) => ({ ...state, dataEntriesWaitingForApproval:DataEntriesWaitingForApproval })),

  on(DataEntryActions.setPendingDataEntry,
    (state, { pendingDataEntry }) => ({ ...state, pendingDataEntry:pendingDataEntry })),
);

export function reducer(state: State | undefined, action: Action) {
  return dataEntryReducer(state, action);
}
