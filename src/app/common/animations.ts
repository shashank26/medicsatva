import {
  trigger,
  animate,
  transition,
  style,
  query,
  animateChild,
  stagger
} from "@angular/animations";

export const headerAnimation = trigger("headerAnimation", [
  transition(":enter", [
    query(".category-header", [
      style({ opacity: 0 }),
      stagger("30ms", [
        animate("500ms 900ms cubic-bezier(0.35, 0, 0.25, 1)", style({ opacity: 1 }))
      ])
    ])
  ]),
  transition(":leave", [
    query(".category-header", [
      style({ opacity: 1 }),
      stagger("30ms", [
        animate("500ms cubic-bezier(0.35, 0, 0.25, 1)", style({ opacity: 0 }))
      ])
    ])
  ])

]);

export const expandAnimation = trigger('expandAnimation', [
  transition(':enter', [
    style({ opacity: 0,  transform : 'translateX(-500px)' }),
    animate(
      '1000ms cubic-bezier(0.35, 0, 0.25, 1)',
      style({ opacity: 1,  transform : 'translateX(0px)' })
    )
  ]),
  transition(':leave', [
    style({ opacity: 1,  transform : 'translateX(0px)' }),
    animate(
      '1000ms cubic-bezier(0.35, 0, 0.25, 1)',
      style({ opacity: 0,  transform : 'translateX(-500px)' })
    ),
    query("@headerAnimation", [animateChild()], { optional: true })
  ])
]);

export const expandAnimationRight = trigger('expandAnimationRight', [
  transition(':enter', [
    style({ opacity: 0,  transform : 'translateX(500px)' }),
    animate(
      '1000ms cubic-bezier(0.35, 0, 0.25, 1)',
      style({ opacity: 1,  transform : 'translateX(0px)' })
    ),
    query("@fadeAnimation, @opacityAnimation", [animateChild()], { optional: true })
  ])
]);