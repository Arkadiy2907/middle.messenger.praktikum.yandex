import tpl from './tpl.hbs';
import Block from '../../core/Block';

interface IBtnSendMessageProps {
    value?: string;
    href?: string;
    events?: {
        click: (event: Event) => void;
    };
}

export default class BtnSendMessage extends Block {
    constructor(props: IBtnSendMessageProps) {
        super('div', props);
    }

    render() {
        return this.compile(tpl, this.props);
    }
}
