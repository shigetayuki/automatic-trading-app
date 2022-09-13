import { animate, animateChild, group, query, style, transition, trigger } from "@angular/animations";
export const slideInAnimation = 
trigger('routeAnimations', [
  transition('login => *,*<=>resultByMonths,*<=>resultBySystems,*<=>footkeyChart', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        width:'90%',
      })
    ]),
    query(':enter', [
      style({ opacity: 0 })
    ]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate('500ms ease-in-out', style({ opacity: 0 }))
      ]),
      query(':enter', [
        animate('500ms ease-in-out', style({ opacity: 1 }))
      ]),
    ]),
  ]),
]);