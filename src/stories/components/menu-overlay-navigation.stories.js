import overlayNavigationAnimation from '../../html/components/menu-overlay/menu-overlay-navigation.hbs';

export default {
  title: 'Components/MainMenu/Overlay Navigation Animation',
  argTypes: {
    dataModule: {
      name: 'data-module',
      control: 'text'
    }
  },
  decorators: [
    Story =>
      `<div style="width:40px; height: 40px; margin: 100px;">${Story()}</div>`
  ]
};

export const OverlayNavigationAnimation = story.build(
  overlayNavigationAnimation,
  {
    dataModule: 'overlay-navigation-animator'
  },
  'padded'
);
