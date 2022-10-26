import { timeline } from 'motion';
import { Component } from '@verndale/core';

class Module extends Component {
  setupDefaults() {
    this.dom = {
      toggle: this.el.querySelector('.menu-trigger__toggle')
    };
    this.isOpen = false;
    this.addListeners();
  }

  addListeners() {
    this.dom.toggle.addEventListener('click', this.toggleMobileMenu.bind(this));
  }

  toggleMobileMenu() {
    if (this.isOpen) this.close();
    else this.open();
  }

  open() {
    const spans = this.dom.toggle.querySelectorAll('span');
    const triggerSequence = [
      [spans[0], { transform: 'translate(0, 0)' }],
      [spans[1], { opacity: 0 }, { at: 0 }],
      [spans[2], { transform: 'translate(0, 0)' }, { at: 0 }],
      'rotate',
      [
        spans[0],
        { transform: 'translate(0, 0) rotate(45deg)' },
        { at: 'rotate' }
      ],
      [
        spans[2],
        { transform: 'translate(0, 0) rotate(-45deg)' },
        { at: 'rotate' }
      ]
    ];
    timeline(triggerSequence, { delay: 0.25 }).finished.then(() => {
      this.isOpen = true;
    });
  }

  close() {
    const spans = this.dom.toggle.querySelectorAll('span');
    const triggerSequence = [
      [spans[0], { transform: 'translate(0, 0) rotate(0deg)' }, { at: 0 }],
      [spans[2], { transform: 'translate(0, 0) rotate(0deg)' }, { at: 0 }],
      'translate',
      [spans[0], { transform: 'translate(0, -9px)' }, { at: 'translate' }],
      [spans[1], { opacity: 1 }, { at: 'translate' }],
      [spans[2], { transform: 'translate(0, 9px)' }, { at: 'translate' }]
    ];
    timeline(triggerSequence, { delay: 0.25 }).finished.then(() => {
      this.isOpen = false;
    });
  }
}

export default Module;
