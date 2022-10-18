import { describe } from 'mocha';
import { expect } from 'chai';
import Block from './Block';

describe('Test Block have correct props', () => {
    const block = new Block('div', {
        className: 'component',
    });

    it('block must have correct props', () => {
        expect(block.props.className).to.equal('component');
    });
});

describe('Test Block have id', () => {
    const block = new Block('div', {
        className: 'component',
    });

    it('block must have id', () => {
        expect(block.id).to.be.a('string');
    });
});
