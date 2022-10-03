import tpl from './tpl.hbs';
import Block from '../../core/Block';
import ButtonBlue from '../button';
import Link from '../link';
import store from '../../store';
import { router } from '../..';
import authController from '../../controllers/authController';
import chatController from '../../controllers/chatController';
import Input from '../input';
import { IMessageProps } from '../chatsOnline';
import Message from '../message';

export default class MessageAside extends Block {
    constructor(props: Record<string, any> = {}) {
        const signOut = new Link({
            value: 'выход из профиля',
            events: {
                click: (e) => {
                    e.preventDefault();
                    authController.logOut();
                    router.go('/login');
                },
            },
        });

        const inProfile = new Link({
            value: 'профиль',
            events: {
                click: (event) => {
                    event.preventDefault();
                    router.go('/profile');
                },
            },
        });

        const inputSearchChat = new Input({
            name: 'search',
            class: 'search',
            type: 'text',
            placeholder: 'поиск чата',
        });

        const buttonBlue = new ButtonBlue({
            value: 'создать чат',
            events: {
                click: (event) => {
                    event.preventDefault();
                    createNewChat();
                },
            },
        });

        const nameNewChat = new Input({
            name: 'create',
            class: 'create',
            type: 'text',
            placeholder: 'новый чат',
        });

        const item = localStorage.getItem('chats');

        const chatList: any[] = [];

        if (item) {
            JSON.parse(item).forEach((element: IMessageProps) => {
                const { content } = element.last_message || {};
                const elemData = {
                    ...element,
                    last_message: content,
                };
                chatList.push(
                    new Message({
                        id: element.id,
                        title: element.title,
                        last_message: content,
                        events: {
                            click: async () => {
                                await openSelectedChat(elemData);
                            },
                        },
                    }),
                );
            });
        }

        super('div', {
            ...props,
            signOut,
            inProfile,
            inputSearchChat,
            buttonBlue,
            nameNewChat,
            chatList,
        });
    }

    render() {
        return this.compile(tpl, this.props);
    }
}

async function createNewChat() {
    const createChat = document.querySelector<HTMLInputElement>('.create');
    const title = createChat!.value === '' ? 'новый чат без имени' : createChat!.value;
    await chatController.createChat({ title });
    router.go('/chooseChat');
}

const openSelectedChat = async (elemData: IMessageProps) => {
    const { id } = elemData;
    store.changeState({ currentChat: id });

    const userData = localStorage.getItem('user');
    let user;
    if (userData) {
        user = JSON.parse(userData);
    }

    if (user) {
        await chatController.connectToChat(user.id, id);
    }

    router.go('/chooseChatActive');
};
