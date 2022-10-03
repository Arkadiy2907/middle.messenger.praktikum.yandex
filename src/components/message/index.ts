import tpl from './tpl.hbs';
import Block from '../../core/Block';

interface IMessageProps {
    avatar?: string;
    title?: string;
    href?: string;
    myMessage?: string;
    created_by?: number;
    last_message?: Record<string, any>;
    time?: Date;
    id: number;
    unread_count?: number;
    click?: () => Promise<void>;
    events?: {
        click: () => void;
    };
}

export default class Message extends Block {
    constructor(props: IMessageProps) {
        super('div', props);
    }

    render() {
        return this.compile(tpl, this.props);
    }
}
