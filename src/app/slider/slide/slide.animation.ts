import {
  trigger,
  transition,
  query,
  style,
  stagger,
  animate,
  state,
  animateChild
} from "@angular/animations";

export const slideAnimations = [
  trigger("floatIn", [
    state(
      "void",
      style({
        opacity: 0,
        transform: "translateX(-100px)"
      })
    ),
    state(
      "*",
      style({
        opacity: 1,
        transform: "none"
      })
    ),
    transition("void=>*", [
      animate("500ms ease-in-out"),
      query("@floatInDiv , @floatInInfo", [animateChild()], { optional: true })
    ])
  ]),
  trigger("floatInDiv", [
    state(
      "void",
      style({
        opacity: 0,
        transform: "translateX(-100px)"
      })
    ),
    state(
      "*",
      style({
        opacity: 1,
        transform: "none"
      })
    ),
    transition(":enter", [
      animate("500ms 250ms ease-in-out"),
      query("@floatInInfo", [animateChild()], { optional: true })
    ])
  ]),
  trigger("floatInInfo", [
    transition("void=>*", [
      query("div", [
        style({ opacity: 0, transform: "translateX(-100px)" }),
        stagger("100ms", [
          animate(
            "500ms ease-in-out",
            style({ opacity: 1, transform: "none" })
          )
        ])
      ])
    ])
  ])
];
