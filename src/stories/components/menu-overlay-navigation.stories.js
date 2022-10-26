import overlayNavigationAnimation from '../../html/components/menu/menu-overlay-navigation.hbs';

export default {
  title: 'Components/MainMenu/Overlay Navigation Animation',
  argTypes: {
    dataModule: {
      name: 'data-module',
      control: 'text'
    },
    testButton: {
      name: 'testButton',
      control: 'boolean'
    }
  },
  decorators: [Story => `<div>${Story()}</div>`]
};

export const OverlayNavigationAnimation = story.build(
  overlayNavigationAnimation,
  {
    dataModule: 'menu-overlay-navigation',
    testButton: true,
    sections: [
      {
        title: 'Our <span>Work</span>',
        subtitle: 'Explore Our<span>Work</span>',
        items: [
          {
            label: 'Aspen Snowmass',
            tag: 'CMS'
          },
          {
            label: 'Acadian Asset Management',
            tag: 'Development'
          },
          {
            label: 'Quinnipiac University',
            tag: 'CMS & DXP'
          }
        ]
      },
      {
        title: 'Our <span>Careers</span>',
        subtitle: 'Explore Our<span>Careers</span>',
        items: [
          {
            label: 'Senior Front End Engineer',
            tag: 'Ecuador'
          },
          {
            label: 'Senior Project Manager',
            tag: 'Ecuador'
          },
          {
            label: 'Account Coordinator',
            tag: 'Ecuador'
          }
        ]
      }
    ]
  },
  'padded'
);
