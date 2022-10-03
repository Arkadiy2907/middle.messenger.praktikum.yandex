import tpl from './tpl.hbs';
import Block from '../../core/Block';
import { getDataFromChat } from '../../utils/getDataFromChat';

export interface IMessageProps {
	avatar?: string;
	title?: string;
	created_by?: number;
	last_message?: Record<string, any>;
	time?: Date;
	id: number;
	unread_count?: number;
}

export class ChatOnline extends Block {
    constructor(props: Record<string, any> = {}) {
        const currentChatId = localStorage.getItem('currentChat');

        super('div', {
            ...props,
            chatTitle: getDataFromChat(currentChatId || '', 'chats', 'title'),
            login: getLogin(),
        });
    }

    render() {
        return this.compile(tpl, this.props);
    }
}

const getLogin = (): string => {
    const { login } = JSON.parse(localStorage.getItem('user')!);
    return login;
};
