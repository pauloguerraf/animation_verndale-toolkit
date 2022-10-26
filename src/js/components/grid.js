import { Component } from '@verndale/core';
import { inView } from 'motion';
import CardPatternAnimator from './cardPatternAnimator';

class Module extends Component {
  setupDefaults() {
    this.colNumbers = parseInt(this.el.dataset.columns, 10);
    this.requiredPatterns = (this.colNumbers * (this.colNumbers + 1)) / 2;
    this.direction = this.el.dataset.direction;
    this.trigger = this.el.dataset.trigger;
    this.animate = this.el.dataset.animate === 'true';
    this.variation = parseInt(this.el.dataset.variation, 10);
    this.setupVariation();
    this.createPattern();
    this.getAnimatedSVG();
  }

  setupVariation() {
    switch (this.variation) {
      case 1:
        this.patternWidth = 265;
        this.patternHeight = 279;
        this.offsetWidth = 220;
        this.offsetHeight = 245;
        this.colOffsetHeight = -8;
        this.heightColOffset = 4;
        break;
      case 2:
        this.patternWidth = 316;
        this.patternHeight = 283;
        this.offsetWidth = 240;
        this.offsetHeight = 280;
        this.colOffsetHeight = -18;
        this.heightColOffset = 4.1;
        break;
      case 3:
        this.patternWidth = 329;
        this.patternHeight = 240;
        this.offsetWidth = 210;
        this.offsetHeight = 250;
        this.colOffsetHeight = -6.5;
        this.heightColOffset = 2;
        break;
      case 4:
        this.patternWidth = 331;
        this.patternHeight = 242;
        this.offsetWidth = 270;
        this.offsetHeight = 240;
        this.colOffsetHeight = 8.5;
        this.heightColOffset = 3.5;
        break;
      case 5:
        this.patternWidth = 331;
        this.patternHeight = 236;
        this.offsetWidth = 290;
        this.offsetHeight = 250;
        this.colOffsetHeight = 10;
        this.heightColOffset = 4.2;
        break;
      case 6:
        this.patternWidth = 331;
        this.patternHeight = 238;
        this.offsetWidth = 280;
        this.offsetHeight = 250;
        this.colOffsetHeight = -7;
        this.heightColOffset = 4;
        break;
      default:
        break;
    }
  }

  calculateBlockHeight(index) {
    let insetHeight =
      this.col * (this.patternHeight / 2) +
      0 +
      (index % this.patternCol) * this.offsetHeight;

    if (this.col > 0) {
      insetHeight =
        insetHeight +
        this.colOffsetHeight +
        this.colOffsetHeight * (this.col * this.heightColOffset);
    }

    return insetHeight;
  }


  createPattern() {
    this.i = 0;
    this.change = 0;
    this.patternCol = this.colNumbers;
    this.col = 0;
    this.animatedCards = [];

    while (this.i < this.requiredPatterns) {
      const _i = this.change ? this.i - (this.change + 1) : this.i;
      const smallPattern = document.createElement('div');
      smallPattern.classList.add('card-pattern');
      smallPattern.dataset.variation = this.variation;
      smallPattern.dataset.duration = this.animate ? '1' : '0.01';
      smallPattern.dataset.delay = '0';
      smallPattern.dataset.grid = 'true';

      smallPattern.innerHTML = `<div class="card-pattern__container"><svg class="card-pattern__chevron--w-accent" width="189" height="146" viewBox="0 0 189 146" fill="none" xmlns="http://www.w3.org/2000/svg"> <path id="accent-${this.i}" class="accent" d="M62.9625 108.031L126.596 145.139L188.974 109.378L125.749 71.8489L125.164 72.8338L186.701 109.361L126.601 143.816L64.1091 107.373L64.1562 37.0991L63.011 37.0984L62.9625 108.031Z"/> <path id="chevron-${this.i}" class="chevron" d="M63.1829 36.4746L0 0V71.912L62.8968 108.229L63.1829 108.395L126.08 72.0777L126.366 71.912V0L63.1829 36.4746ZM125.22 1.98468V71.2507L63.1829 107.071L1.14589 71.2507V1.98468L62.8968 37.6323L63.1829 37.7979L125.22 1.98468Z" /> </svg><svg class="card-pattern__chevron" width="127" height="109" viewBox="0 0 127 109" fill="none" xmlns="http://www.w3.org/2000/svg" ><path id="chevron-${this.i}" class="chevron" d="M1.14587 71.25L63.1829 107.07L125.22 71.25V1.98535L63.4697 37.6323L63.1829 37.798L1.14587 1.98535V71.25ZM126.366 0V71.9114L63.4697 108.229L63.1829 108.394L0.286804 72.077L0 71.9114V0L63.1829 36.4746L126.366 0Z"/> </svg> <svg class="card-pattern__panels" width="190" height="147" viewBox="0 0 190 147" fill="none" xmlns="http://www.w3.org/2000/svg" ><path id="panels-${this.i}" class="panels" d="M127.576 0L0.286804 73.4304L0.570374 73.9215H0V145.507L63.1823 109.034L127.023 146.166L127.313 146.336L189.811 109.311L127.576 72.995V0ZM65.1663 37.3252L126.43 1.98401V71.2487H126.409V72.3933L65.1663 37.3252ZM63.7487 108.037V38.1437L64.0178 37.9878L126.409 73.7134V144.485L63.7487 108.037ZM1.14594 74.2568L62.6022 38.8043V108.045L1.14594 143.523V74.2568ZM127.555 74.3098L187.55 109.318L127.555 144.861V74.3098Z"/> </svg></div></div>`;

      if (this.direction === 'right') {
        smallPattern.style = `transform:scaleX(-1); inset-inline-end:${
          0 + this.col * this.offsetWidth
        }px; inset-block-start: ${this.calculateBlockHeight(_i)}px`;
      } else {
        smallPattern.style = `inset-inline-start:${
          0 + this.col * this.offsetWidth
        }px; inset-block-start: ${this.calculateBlockHeight(_i)}px`;
      }
      this.el.appendChild(smallPattern);
      this.animatedCards.push(new CardPatternAnimator(smallPattern));

      if (_i % this.patternCol === this.patternCol - 1) {
        this.patternCol -= 1;
        this.change = this.i;
        this.col += 1;
      }

      this.i += 1;
    }
  }

  getAnimatedSVG() {
    if (!this.animate) {
    this.animatedCards.forEach(card => card.setOpacity(0));
    }
    inView(
      this.el,
      () => {
        this.animatedCards.forEach(card => {
          card.outGridAnimation( this.animate ? 
            (parseInt(card.el.style.insetBlockStart, 10) / this.offsetHeight) *
              0.4 : 0,
            this.el.dataset.color,
            this.el.dataset.accent
          );
        });
      },
      { amount: this.animate ? 0.6 : 0 }
    );
  }
}
export default Module;
