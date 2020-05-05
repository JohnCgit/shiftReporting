import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromPlant from './plant/plant.reducer';
import * as fromDepartment from './department/department.reducer';
import * as fromShift from './shift/shift.reducer';
import * as fromSchedule from './schedule/schedule.reducer';
import * as fromTemplate from './template/template.reducer';
import * as fromInterface from './interface/interface.reducer';
import * as fromDataEntry from './data-entry/data-entry.reducer';
import * as fromUser from './user/user.reducer';
import * as fromConfiguration from './configuration/configuration.reducer';

export interface State {

  [fromPlant.plantsFeatureKey]: fromPlant.State;
  [fromDepartment.departmentsFeatureKey]: fromDepartment.State;
  [fromShift.shiftsFeatureKey]: fromShift.State;
  [fromSchedule.schedulesFeatureKey]: fromSchedule.State;
  [fromTemplate.templatesFeatureKey]: fromTemplate.State;
  [fromInterface.interfaceFeatureKey]: fromInterface.State;
  [fromDataEntry.dataEntryFeatureKey]: fromDataEntry.State;
  [fromUser.usersFeatureKey]: fromUser.State;
  [fromConfiguration.configurationFeatureKey]: fromConfiguration.State;
}

export const reducers: ActionReducerMap<State> = {

  [fromPlant.plantsFeatureKey]: fromPlant.reducer,
  [fromDepartment.departmentsFeatureKey]: fromDepartment.reducer,
  [fromShift.shiftsFeatureKey]: fromShift.reducer,
  [fromSchedule.schedulesFeatureKey]: fromSchedule.reducer,
  [fromTemplate.templatesFeatureKey]: fromTemplate.reducer,
  [fromInterface.interfaceFeatureKey]: fromInterface.reducer,
  [fromDataEntry.dataEntryFeatureKey]: fromDataEntry.reducer,
  [fromUser.usersFeatureKey]: fromUser.reducer,
  [fromConfiguration.configurationFeatureKey]: fromConfiguration.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];


// ========= selectors ========
// plants
export const plantState = createFeatureSelector<fromPlant.State>('plants');
export const allPlants = createSelector(plantState, fromPlant.selectAll);
//departments
export const departmentsState = createFeatureSelector<fromDepartment.State>('departments');
export const allDepartments = createSelector(departmentsState, fromDepartment.selectAll);
export const userDepartments = createSelector(departmentsState, (state) => state.userDepartments);

//shifts
export const shiftsState = createFeatureSelector<fromShift.State>('shifts');
export const allShifts = createSelector(shiftsState, fromShift.selectAll);
//schedule
export const scheduleState = createFeatureSelector<fromSchedule.State>('schedules');
export const allSchedules = createSelector(scheduleState, fromSchedule.selectAll);
export const editingSchedule = createSelector(scheduleState, (state) => state.editingSchedule);
//templates
export const templateState = createFeatureSelector<fromTemplate.State>('templates');
export const allTemplates = createSelector(templateState, fromTemplate.selectAll);
export const templateTypes = createSelector(templateState, (state) => state.templateTypes);
export const editingTemplate = createSelector(templateState, (state) => state.editingTemplate);
export const addedTemplate = createSelector(templateState, (state) => state.addedTemplate);

//users
export const userState = createFeatureSelector<fromUser.State>('users');
export const allUsers = createSelector(userState, fromUser.selectAll);
export const roles = createSelector(userState, (state) => state.roles);
export const userRoles = createSelector(userState, (state) => state.userRoles);

// dataEntry
export const dataEntryState = createFeatureSelector<fromDataEntry.State>('dataEntry');
export const dataEntriesOnDate = createSelector(dataEntryState, (state) => state.dataEntriesOnDate);
export const currentDataEntry = createSelector(dataEntryState, (state) => state.currentDataEntry);

// interfaces
export const interfaceState = createFeatureSelector<fromInterface.State>('interface');
export const templateInterfaces = createSelector(interfaceState, (state) => state.interfaces);

//configurations
export const configurationState = createFeatureSelector<fromConfiguration.State>('configuration');
export const configurations = createSelector(configurationState, (state) => state.configurations);