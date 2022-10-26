import globModules from './glob-modules';

const components = [
  {
    name: 'card',
    loader: () => import('./components/card')
  },
  {
    name: 'card-pattern-animator',
    loader: () => import('./components/cardPatternAnimator')
  },
  {
    name: 'menu-trigger',
    loader: () => import('./components/menu/menuTrigger')
  },
  {
    name: 'overlay-navigation-animator',
    loader: () => import('./components/menu/menuOverlayNavigation')
  }
];

const modules = [
  {
    name: 'accordion',
    loader: () => import('./modules/accordion')
  }
];

export default [...globModules, ...modules, ...components];
