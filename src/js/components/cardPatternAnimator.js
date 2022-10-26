import { Component } from '@verndale/core';
import { timeline } from 'motion';

class Module extends Component {
  setupDefaults() {
    this.dom = {
      chevronWithAccent: this.el.querySelector(
        '.card-pattern__chevron--w-accent'
      ),
      chevron: this.el.querySelector('.card-pattern__chevron'),
      panels: this.el.querySelector('.card-pattern__panels')
    };
    this.sequence = [];
    this.variation = this.el.dataset.variation
      ? parseInt(this.el.dataset.variation, 10)
      : 0;
    this.duration = this.el.dataset.duration
      ? parseFloat(this.el.dataset.duration)
      : 1;
    this.delay = this.el.dataset.delay ? parseFloat(this.el.dataset.delay) : 0;
    this.el.classList.add(`card-pattern__variation--${this.variation}`);
    this.setupVariation(this.variation);
    this.defineSequence();

    if (!this.el.dataset.grid) {
      this.outAnimation();
    }
  }

  setOpacity(opacity) {
    this.dom.chevronWithAccent.style.opacity = opacity;
    this.dom.chevron.style.opacity = opacity;
    this.dom.panels.style.opacity = opacity;
  }

  inAnimation() {
    this.dom.chevronWithAccent.querySelector('.chevron').style.fill = '#ffffff';
    this.dom.chevron.querySelector('.chevron').style.fill = '#ffffff';
    this.dom.panels.querySelector('.panels').style.fill = '#ffffff';
    this.animate();
  }

  outAnimation() {
    this.dom.chevronWithAccent.querySelector('.chevron').style.fill = '#6a2ff3';
    this.dom.chevron.querySelector('.chevron').style.fill = '#6a2ff3';
    this.dom.panels.querySelector('.panels').style.fill = '#6a2ff3';
    this.animate();
  }

  outGridAnimation(delay, color, accent) {
    this.dom.chevronWithAccent.querySelector('.chevron').style.fill = color;
    this.dom.chevronWithAccent.querySelector('.accent').style.fill = accent;
    this.dom.chevron.querySelector('.chevron').style.fill = color;
    this.dom.panels.querySelector('.panels').style.fill = color;
    timeline(this.sequence, {
      duration: this.duration,
      delay
    });
  }

  setupVariation(variation) {
    //     chevron with accent, chevron, panels
    switch (variation) {
      case 1:
        this.defineAnimations(
          this.dom.chevronWithAccent,
          this.dom.chevron,
          this.dom.panels
        );
        break;
      case 2:
        this.defineAnimations(
          this.dom.panels,
          this.dom.chevron,
          this.dom.chevronWithAccent
        );
        break;
      case 3:
        this.defineAnimations(
          this.dom.chevron,
          this.dom.panels,
          this.dom.chevronWithAccent
        );
        break;
      case 4:
        this.defineAnimations(
          this.dom.panels,
          this.dom.chevronWithAccent,
          this.dom.chevron
        );
        break;
      case 5:
        this.defineAnimations(
          this.dom.chevron,
          this.dom.chevronWithAccent,
          this.dom.panels
        );
        break;
      case 6:
        this.defineAnimations(
          this.dom.chevron,
          this.dom.panels,
          this.dom.chevronWithAccent
        );
        break;

      default:
        this.defineAnimations(
          this.dom.chevronWithAccent,
          this.dom.chevron,
          this.dom.panels
        );
    }
  }

  defineAnimations(animEl1, animEl2, animEl3) {
    this.anim1 = [
      animEl1,
      {
        opacity: [0, 1],
        transform: [
          `translate(0, ${this.el.dataset.grid ? -50 : -30}px)`,
          'translate(0, 0px)'
        ]
      },
      { at: '0' }
    ];
    this.anim2 = [
      animEl2,
      {
        opacity: [0, 1],
        transform: [
          `translate(0, ${this.el.dataset.grid ? -50 : -30}px)`,
          'translate(0, 0px)'
        ]
      },
      { at: '-0.27' }
    ];
    this.anim3 = [
      animEl3,
      {
        opacity: [0, 1],
        transform: [
          `translate(0, ${this.el.dataset.grid ? -50 : -30}px)`,
          'translate(0, 0px)'
        ]
      },
      { at: '-0.26' }
    ];
  }

  defineSequence() {
    this.sequence.push(this.anim1);
    this.sequence.push(this.anim2);
    this.sequence.push(this.anim3);
  }

  animate() {
    timeline(this.sequence, { duration: this.duration, delay: this.delay });
  }
}

export default Module;
