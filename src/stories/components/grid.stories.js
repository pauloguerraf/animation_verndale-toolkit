import { animate } from 'motion';
import gridPattern from '../../html/components/grid.hbs';

export default {
  title: 'Components/Grid/Grid Pattern',
  argTypes: {
    animate: {
      name: animate,
      control: 'boolean'
    },
    variation: {
      name: 'variation',
      control: 'text',
      type: { required: true }
    },
    color: {
      name: 'color',
      control: 'text'
    },
    accent: {

      name: 'colorAccent',
      control: 'text'
    }, 
    direction: { 
      name: 'direction',
      control: 'radio',
      options: ['right', 'left'],
    },
    columns: { 
      name: 'columns',
      control: 'text'
  },
  position: {
    name: 'position',
    control: 'object'
  }
  }
};

export const GridPattern = story.build(
  gridPattern,
  {
    animate: false,
    variation: '1',
    color: '#444',
    accent: '#f00',
    direction: 'right',
    columns: '4',
    position: {
      top: 0,
      right: 0,
      left: 0,
      bottom: 0
    }
  }
);
