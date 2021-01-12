import {animate, style, transition, trigger} from '@angular/animations';

export const foldAnimation = trigger('fold', [
    transition(':enter', [
        style({'font-size': 0, overflow: 'hidden'}),
        animate('100ms ease-in', style({'font-size': '*'}))
    ]),
    transition(':leave', [
        style({height: '*', overflow: 'hidden'}),
        animate('80ms ease-in', style({height: 0}))
    ])
]);
