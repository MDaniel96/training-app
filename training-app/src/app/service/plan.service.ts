import {Injectable} from '@angular/core';
// @ts-ignore
import planGroupsJson from '../data/plan-groups.json';
import {PlanGroup} from '../model/plan-group.model';
import {Plan} from '../model/plan.model';

@Injectable({providedIn: 'root'})
export class PlanService {

    myPlan: Plan = planGroupsJson[0].plans[0];

    getPlanGroups(): PlanGroup[] {
        return planGroupsJson;
    }
}
