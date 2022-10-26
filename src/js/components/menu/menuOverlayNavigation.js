import { animate, stagger } from 'motion';
import { Component } from '@verndale/core';

class Module extends Component {
  setupDefaults() {
    this.dom = {
      container: this.el,
      navLi: this.el.querySelectorAll('nav ul li'),
      animatedElements: [
        ...this.el.querySelectorAll('.navigation-v2__animated-item')
      ],
      testButton: this.el.previousElementSibling
    };
    this.isOpen = false;
    if (
      this.dom.testButton &&
      this.dom.testButton.classList.contains('navigation-v2__test-button')
    )
      this.dom.testButton.addEventListener(
        'click',
        this.toggleAnimation.bind(this)
      );
  }

  toggleAnimation() {
    if (!this.isOpen) this.inAnimation();
    else this.outAnimation();
  }

  inAnimation() {
    animate(
      this.dom.navLi,
      {
        opacity: [0, 1],
        transform: ['translate(-75%, 0)', 'translate(0, 0)']
      },
      { duration: 0.75, delay: stagger(0.1, { start: 0.15 }) }
    );
    animate(
      this.dom.container,
      {
        transform: ['translate(100%, 0)', 'translate(0, 0)']
      },
      { duration: 1 }
    );
    animate(
      this.dom.animatedElements,
      {
        opacity: [0, 1],
        transform: ['translate(-150px, 0)', 'translate(0, 0)']
      },
      { duration: 0.75, delay: stagger(0.05, { start: 0.15 }) }
    );
    this.isOpen = true;
  }

  outAnimation() {
    animate(
      this.dom.navLi,
      {
        opacity: [1, 0],
        transform: ['translate(0, 0)', 'translate(-300px, 0)']
      },
      { duration: 0.5, delay: stagger(0.05) }
    );
    animate(
      this.dom.container,
      {
        transform: ['translate(0, 0)', 'translate(100%, 0)']
      },
      { duration: window.matchMedia('(max-width: 1025px)').matches ? 0.75 : 1 }
    );
    animate(
      this.dom.animatedElements,
      {
        opacity: [1, 0],
        transform: ['translate(0, 0)', 'translate(-300px, 0)']
      },
      { duration: 0.5, delay: stagger(0.05) }
    );
    this.isOpen = false;
  }
}

export default Module;
