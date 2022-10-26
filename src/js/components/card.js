import { animate, timeline } from 'motion';
import { Component } from '@verndale/core';
import SplitType from 'split-type';
import CardPatternAnimator from './cardPatternAnimator';

class Module extends Component {
  setupDefaults() {
    this.dom = {
      svgPattern: this.el.querySelector('.card-pattern'),
      overlay: this.el.querySelector('.card__overlay'),
      image: this.el.querySelector('img'),
      text: this.el.querySelector('.card__text')
    };
    if (this.dom.svgPattern)
      this.animator = new CardPatternAnimator(this.dom.svgPattern);
    this.initSplitting();
    this.addListeners();
  }

  addListeners() {
    this.addCardListeners();
  }

  addCardListeners() {
    this.el.addEventListener('mouseenter', this.handleCardHoverIn.bind(this));
    this.el.addEventListener('mouseleave', this.handleCardHoverOut.bind(this));
  }

  handleCardHoverIn(e) {
    const card = e.currentTarget;
    const hasImage = !!this.dom.image;
    card.lineSplit.lines.forEach((line, index) => {
      const sequence = [
        [
          line,
          {
            opacity: [1, 0],
            transform: ['translate(0, 0)', 'translate(100px, 0)']
          },
          { duration: 0.15, delay: 0.05 * index }
        ],
        [
          line,
          {
            color: !hasImage && '#fff'
          },
          { at: 0.15 + 0.05 * index },
          {
            duration: 0
          }
        ],
        [
          line,
          {
            opacity: [0, 1],
            transform: ['translate(-100px, 0)', 'translate(0, 0)']
          },
          { at: 0.17 + 0.05 * index },
          { duration: 0.15, delay: 0.05 * index }
        ]
      ];
      timeline(sequence);
    });
    if (this.animator) this.animator.inAnimation();
    animate(
      this.dom.overlay,
      { transform: 'skew(-30deg) scale(2, 1)' },
      { duration: 0.45 }
    ).finished.then(() => {});

    if (this.dom.image)
      animate(this.dom.image, { transform: 'scale(1.25)' }, { duration: 0.5 });
  }

  handleCardHoverOut(e) {
    const card = e.currentTarget;
    const hasImage = !!this.dom.image;
    console.log(hasImage);
    const linesReversed = card.lineSplit.lines.slice().reverse();
    linesReversed.forEach((line, index) => {
      const sequence = [
        [
          line,
          {
            opacity: [1, 0],
            transform: ['translate(0, 0)', 'translate(-100px, 0)']
          },
          { duration: 0.15, delay: 0.05 * index }
        ],
        [
          line,
          { color: !hasImage && '#1c1c1c' },
          { at: 0.17 + 0.05 * index },
          {
            duration: 0
          }
        ],
        [
          line,
          {
            opacity: [0, 1],
            transform: ['translate(100px, 0)', 'translate(0, 0)']
          },
          { at: 0.17 + 0.075 * index },
          { duration: 0.15, delay: 0.05 * index }
        ]
      ];
      timeline(sequence);
    });
    if (this.animator) this.animator.outAnimation();
    animate(
      this.dom.overlay,
      { transform: 'skew(-30deg) scale(0, 1)' },
      { duration: 0.45 }
    );
    if (this.dom.image)
      animate(
        this.dom.image,
        { transform: 'scale(1)' },
        { duration: 1, delay: 0.2 }
      );
  }

  initSplitting() {
    this.el.lineSplit = new SplitType(this.dom.text, { types: 'lines' });
  }
}

export default Module;
