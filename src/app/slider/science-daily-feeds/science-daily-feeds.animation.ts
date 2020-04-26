import {
  trigger,
  transition,
  query,
  style,
  animate,
  stagger
} from "@angular/animations";

export const scienceDailyFeedsAnimations = [
  trigger("cascade", [
    transition("void => *", [
      query(
        ".scienceDailyFeed-info",
        [
          style({ opacity: 0, transform: "translateX(-60px)" }),
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
        ".scienceDailyFeed-info",
        [
          style({ opacity: 1, transform: "none" }),
          stagger("100ms", [
            animate(
              "300ms ease-out",
              style({ opacity: 0, transform: "translateX(-60px)" })
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
    ]),
    transition("* => void", [
      query(
        ".fade",
        [
          style({ opacity: 1 }),
          stagger("30ms", [animate("500ms ease-out", style({ opacity: 0 }))])
        ]
      )
    ])
  ])
];
