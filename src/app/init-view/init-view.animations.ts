import { trigger, transition, query, style, stagger, animate, sequence, state } from '@angular/animations';

export const animations = [
    trigger('intro-color', [
        state('void', style({
            background: 'rgba(0,0,0,0)'
        })),
        state('*', style({
            background: 'rgba(0,0,0,0.7)'
        })),
        transition(':enter', [animate('1000ms')])
    ]),
    trigger('logo', [
        state('void', style({
            opacity: 0
        })),
        state('*', style({
            opacity: 1
        })),
        transition(':enter', [animate('1000ms')])
    ]),
    trigger('intro-animations', [
        transition('void=>*', [
            query('div', [
                style({ opacity: 0, transform: 'translateY(-100px)' }),
                stagger('300ms', [
                    animate('500ms 1000ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
                ])
            ])
        ])
    ]),
];
