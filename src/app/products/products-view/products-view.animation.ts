import {
  trigger,
  transition,
  query,
  style,
  animate,
  stagger
} from "@angular/animations";

export const productsViewAnimations = [
  trigger("cascade", [
    transition("void => *", [
      query(
        ".product-view",
        [
          style({ opacity: 0, transform: "translateX(60px)" }),
          stagger("100ms", [
            animate(
              "300ms 500ms ease-out",
              style({ opacity: 1, transform: "none" })
            )
          ])
        ],
        { optional: true }
      )
    ]),
    transition("* => void", [
      query(
        ".product-view",
        [
          style({ opacity: 1, transform: "none" }),
          stagger("100ms", [
            animate(
              "300ms ease-out",
              style({ opacity: 0, transform: "translateX(60px)" })
            )
          ])
        ]
      )
    ])
  ]),
  trigger("fade", [
    transition("void => *", [
      query(
        ".fade",
        [
          style({ opacity: 0 }),
          stagger("30ms", [animate("500ms ease-out", style({ opacity: 1 }))])
        ]
      )
    ])
  ])
];
