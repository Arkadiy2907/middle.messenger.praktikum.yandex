import tpl from './tpl.hbs';
import Block from '../../core/Block';
import Link from '../../components/link';
import { router } from '../..';

export default class FourHundredFour extends Block {
    constructor(props: Record<string, any> = {}) {
        const buttonText = new Link({
            value: 'что-то не то, назад к чатам',
            events: {
                click: (event) => {
                    event.preventDefault();
                    router.go('/chooseChat');
                },
            },
        });

        super('div', {
            ...props,
            buttonText,
        });
    }

    render() {
        return this.compile(tpl, this.props);
    }
}
