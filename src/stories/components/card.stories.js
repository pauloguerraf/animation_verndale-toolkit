import card from '../../html/components/card.hbs';

export default {
  title: 'Components/Card',
  argTypes: {
    text: {
      name: 'srcset',
      control: 'object',
      type: { required: true }
    },
    srcset: {
      name: 'srcset',
      control: 'object',
      type: { required: true }
    },
    src: {
      name: 'src',
      control: 'text',
      type: { required: true }
    },
    width: {
      name: 'Width',
      control: 'text',
      type: { required: true }
    },
    height: {
      name: 'Height',
      control: 'text',
      type: { required: true }
    },
    description: {
      name: 'Alt tag',
      control: 'text',
      type: { required: true }
    }
  }
};

export const CardWithNoPattern = story.build(
  card,
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper magna ac semper tempus. Suspendisse dignissim ac orci et consectetur',
    srcset: {
      639: 'https://verndale-image-tools.herokuapp.com/id/XexawgzYOBc?w=300&h=600',
      1023: 'https://verndale-image-tools.herokuapp.com/id/XexawgzYOBc?w=300&h=600'
    },
    src: 'https://verndale-image-tools.herokuapp.com/id/XexawgzYOBc?w=300&h=600',
    width: '677px',
    height: '600px',
    description: 'Image Description'
  },
  'padded'
);

export const CardWithPattern = story.build(
  card,
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper magna ac semper tempus. Suspendisse dignissim ac orci et consectetur',
    usePattern: true
  },
  'padded'
);
