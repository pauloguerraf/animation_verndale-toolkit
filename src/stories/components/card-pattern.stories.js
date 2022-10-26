import cardPattern from '../../html/components/card-pattern.hbs';

export default {
  title: 'Components/Card/Card Pattern',
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
      `<div style="width:350px; height: 350px; border: solid 1px black; 
      border-radius: 5px; position:relative;">${Story()}</div>`
  ]
};

export const CardPattern = story.build(
  cardPattern,
  {
    variation: '1',
    dataModule: 'card-pattern-animator'
  },
  'padded'
);
