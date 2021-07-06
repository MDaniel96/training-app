import {Injectable} from '@angular/core';
// @ts-ignore
import planGroupsJson from '../data/plan-groups.json';
import {PlanGroup} from '../model/plan-group.model';

@Injectable({providedIn: 'root'})
export class PlanService {

    getPlanGroups(): PlanGroup[] {
        return planGroupsJson;
    }
}
