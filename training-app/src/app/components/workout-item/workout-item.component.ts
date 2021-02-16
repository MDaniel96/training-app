import {Component, Input} from '@angular/core';
import {Workout} from '../../model/workout.model';
import {Platform} from '@ionic/angular';

@Component({
  selector: 'app-workout-item',
  templateUrl: './workout-item.component.html',
  styleUrls: ['./workout-item.component.scss'],
})
export class WorkoutItemComponent {

  @Input() workout: Workout;

  constructor(private platform: Platform) {
  }

  selectWorkout() {
  }

  isIos(): boolean {
    return this.platform.is('ios');
  }
}
