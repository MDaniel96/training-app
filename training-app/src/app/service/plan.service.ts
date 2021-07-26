import {Injectable} from '@angular/core';
// @ts-ignore
import planGroupsJson from '../data/plan-groups.json';
import {PlanGroup} from '../model/plan-group.model';
import {Plan} from '../model/plan.model';
import {Subject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class PlanService {

    // tslint:disable-next-line:variable-name
    _myPlan: Plan = planGroupsJson[0].plans[0];
    myPlanSubject = new Subject<void>();

    get myPlan() {
        return this._myPlan;
    }

    set myPlan(newPlan: Plan) {
        this._myPlan = newPlan;
        this.myPlanSubject.next();
    }

    getPlanGroups(): PlanGroup[] {
        return planGroupsJson;
    }
}
