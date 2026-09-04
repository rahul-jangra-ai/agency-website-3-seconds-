# Section — Page Transition

## Concept
A fast frame-swipe rather than a cinematic loader.

## Behavior
- On internal navigation, a Signal-colored bar/frame sweeps across for ~350–500ms.
- New route begins rendering immediately behind it.
- Never delay navigation to finish decorative animation.
- Skip or simplify for reduced motion.
