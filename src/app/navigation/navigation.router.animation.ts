import {
  trigger,
  animate,
  transition,
  style,
  query,
  animateChild
} from "@angular/animations";

export const fadeAnimation = trigger("fadeAnimation", [
  transition("* => *", [
    query(
      ":enter",
      [
        style({
          position: "absolute",
          width: "100%",
          height: "100%",
          opacity: 0
        })
      ],
      { optional: true }
    ),
    query(
      ":leave",
      [
        style({
          position: "absolute",
          width: "100%",
          height: "100%",
          opacity: 1
        }),
        animate(
          "0.3s",
          style({
            position: "absolute",
            width: "100%",
            height: "100%",
            opacity: 0
          })
        )
      ],
      { optional: true }
    ),
    query(
      ":enter",
      [
        style({
          position: "absolute",
          width: "100%",
          height: "100%",
          opacity: 0
        }),
        animate(
          "0.3s",
          style({
            position: "absolute",
            width: "100%",
            height: "100%",
            opacity: 1
          })
        )
      ],
      { optional: true }
    ),
    query("@headerAnimation , @expandAnimation, @expandAnimationRight", [animateChild()], { optional: true })
  ])
]);
