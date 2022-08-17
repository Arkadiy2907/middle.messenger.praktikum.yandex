import tpl from './tpl.hbs';
import Block from '../../core/Block';

interface IButtonBlueProps {
    value: string;
    href?: string;
    type?: string;
    events?: {
        click: (event: Event) => void;
    };
}

export default class ButtonBlue extends Block {
    constructor(props: IButtonBlueProps) {
        super('div', props);
    }

    render() {
        return this.compile(tpl, this.props);
    }
}
