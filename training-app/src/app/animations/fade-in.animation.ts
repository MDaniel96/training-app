import {animate, state, style, transition, trigger} from '@angular/animations';

export const fadeInAnimation = trigger('fadeIn', [
    transition('void => *', [
        style({opacity: 0}),
        animate(180, style({opacity: 1}))
    ])
]);

export const fadeInStateAnimation = trigger('fadeInState', [
    state('out', style({
        opacity: '0'
    })),
    state('in', style({
        opacity: '1'
    })),
    transition('out => in',
        animate('200ms ease-in')
    )
]);
