import tpl from './tpl.hbs';
import Block from '../../core/Block';

interface IMessagekProps {
    chatTitle: string;
    href: string;
    myMessage?: string;
    chatMessage: string;
	time?: string;
    events?: {
        click: (event: Event) => void;
    };
}

export default class Message extends Block {
    constructor(props: IMessagekProps) {
        super('div', props);
    }

    render() {
        return this.compile(tpl, this.props);
    }
}
