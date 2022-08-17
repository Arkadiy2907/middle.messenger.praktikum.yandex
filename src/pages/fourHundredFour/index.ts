import tpl from './tpl.hbs';
import Block from '../../core/Block';
import Link from '../../components/link';

export default class FourHundredFour extends Block {
    constructor(props: Record<string, any> = {}) {
        const buttonText = new Link({ value: 'назад к чатам', href: '/chooseChat' });

        super('div', {
            ...props,
            buttonText,
        });
    }

    render() {
        return this.compile(tpl, this.props);
    }
}
