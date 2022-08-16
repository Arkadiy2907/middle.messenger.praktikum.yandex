import tpl from './tpl.hbs';
import Block from '../../core/Block';
import ButtonBlue from '../../components/button';
import BtnSendMessage from '../../components/btnSendMessage';
import Link from '../../components/link';
import Message from '../../components/message';
import { getResForm } from '../../core/valid';
import src from '../../image/78.png';
import { goNextPage } from '../../utils/nextPage';
import { getDate } from '../../utils/getDate';

const today = new Date();

export default class SearchChat extends Block {
    constructor(props: Record<string, any> = {}) {
        const signOut = new Link({ value: 'ввыход из профиля', href: '/' });
        const inProfile = new Link({ value: 'профиль', href: '/profile' });
        const buttonBlue = new ButtonBlue({
            value: 'Поиск чата',
            events: {
                click: (event) => {
                    event.preventDefault();

                    goNextPage('/searchChat');
                },
            },
        });

        const sendMessge = new BtnSendMessage({
            events: {
                click: (event) => {
                    event.preventDefault();

                    const obj = getResForm('.inputMessage');
                    if (obj) {
                        console.log('пока нет сообщения кина не будет! И сообщение как бы не уйдет');
                    }
                },
            },
        });

        const chat1 = new Message({
            chatTitle: 'Chat Online!',
            href: '/chatOnline',
            myMessage: 'upss',
            chatMessage:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit Lorem ipsum, dolor sit amet consectetur adipisicing elit',
            time: getDate(today),
        });

        super('div', {
            ...props,
            signOut,
            inProfile,
            buttonBlue,
            sendMessge,
            chat1,
            src: `${src}`,
        });
    }

    render() {
        return this.compile(tpl, this.props);
    }
}
