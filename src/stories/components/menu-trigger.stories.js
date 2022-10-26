import menuTrigger from '../../html/components/menu-trigger.hbs';

export default {
  title: 'Components/MainMenu/Menu Trigger',
  argTypes: {
    variation: {
      name: 'variation',
      control: 'text',
      type: { required: true }
    },
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

export const MenuTrigger = story.build(
  menuTrigger,
  {
    dataModule: 'menu-trigger'
  },
  'padded'
);
