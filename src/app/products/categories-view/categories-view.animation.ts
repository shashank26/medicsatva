import {
  trigger,
  transition,
  query,
  style,
  animate,
  stagger
} from "@angular/animations";

export const categoriesViewAnimations = [
  trigger("cascade", [
    transition("void => *", [
      query(".tile, .cascade", [
        style({ opacity: 0, transform: "translateX(30px)" }),
        stagger("30ms", [
          animate(
            "300ms 500ms ease-out",
            style({ opacity: 1, transform: "none" })
          )
        ])
      ])
    ]),
    transition("* => void", [
      query(".tile, .cascade", [
        style({ opacity: 1, transform: "none" }),
        stagger("30ms", [
          animate(
            "300ms ease-out",
            style({ opacity: 0, transform: "translateX(30px)" })
          )
        ])
      ])
    ])
  ]),
  trigger("fade", [
    transition("void => *", [
      query(".fade", [
        style({ opacity: 0 }),
        stagger("30ms", [animate("500ms ease-out", style({ opacity: 1 }))])
      ])
    ])
  ])
];
