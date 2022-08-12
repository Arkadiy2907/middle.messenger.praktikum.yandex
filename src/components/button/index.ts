import tpl from './tpl.hbs';
import Block from '../../service/Block';

interface ITemp {
    value: string;
    href?: string;
    events?: {
        click: (event: Event) => void;
    };
}

export default class ButtonBlue extends Block {
    constructor(props: ITemp) {
        super('div', props);
    }

    render() {
        return this.compile(tpl, this.props);
    }
}
