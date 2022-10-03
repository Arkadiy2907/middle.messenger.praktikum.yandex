import tpl from './tpl.hbs';
import Block from '../../core/Block';
import ButtonBlue from '../../components/button';
import Input from '../../components/input';
import { router } from '../..';
import chatController from '../../controllers/chatController';
import MessageAside from '../../components/messageAside';
import NoChoseChat from '../../components/noChoseChat';
import BtnSendMessage from '../../components/btnSendMessage';
import store from '../../store';
import createSocket from '../../controllers/socketController';
import { getDate, getTime } from '../../utils/changeTime';
import { getDataFromChat } from '../../utils/getDataFromChat';
import { ChatOnline } from '../../components/chatsOnline';
// const { ChatOnline } = require('../../components/chatsOnline');

export default class ChooseChat extends Block {
    constructor(props: Record<string, any> = {}) {
        const messageAside = new MessageAside({});
        const noChoseChat = new NoChoseChat({
            value: 'Выберите чат чтобы отправить сообщение',
        });

        let wsParams;
        let wsParamsString;
        let socket: WebSocket;

        const { pathname } = window.location;
        if (pathname === '/chooseChatActive') {
            wsParamsString = localStorage.getItem('wsParams');
            if (wsParamsString) {
                wsParams = JSON.parse(wsParamsString);
            }
            socket = createSocket(wsParams, handleMessages);

            openMessagesSocket(socket);
        }

        const chatOnline = new ChatOnline({
            inputAddUser: new Input({
                name: 'addUser',
                type: 'text',
                class: 'inputAddUser',
                placeholder: 'имя пользователя',
            }),

            buttonAddUser: new ButtonBlue({
                value: 'добавить',
                events: {
                    click: (event) => {
                        event.preventDefault();
                        addUsersToChat(currentChatId || '')
                            .then((data) => {
                                if (data) {
                                    store.changeState({ ...data });
                                    router.go('/chooseChatActive');
                                }
                            })
                            .catch((error: any) => {
                                console.error(error);
                            });
                    },
                },
            }),

            inputDelUser: new Input({
                name: 'addUser',
                type: 'text',
                class: 'inputDelUser',
                placeholder: 'имя пользователя',
            }),

            buttonDelUser: new ButtonBlue({
                value: 'удалить',
                events: {
                    click: (event) => {
                        event.preventDefault();
                        deleteUsersFromChat(currentChatId || '')
                            .then((data) => {
                                if (data) {
                                    store.changeState({ ...data });
                                    router.go('/chooseChatActive');
                                }
                            })
                            .catch((error: any) => {
                                console.error(error);
                            });
                    },
                },
            }),

            sendMessge: new BtnSendMessage({
                events: {
                    click: (event) => {
                        event.preventDefault();
                        const handler = checkSendMassage();
                        if (handler) {
                            sendMessage(socket);
                        }
                    },
                },
            }),
        });

        const chatContent = pathname === '/chooseChatActive'
            ? chatOnline
            : noChoseChat;

        const currentChatId = localStorage.getItem('currentChat');

        super('div', {
            ...props,
            messageAside,
            chatContent,
        });
    }

    render() {
        return this.compile(tpl, this.props);
    }
}

const sendMessage = (socket: WebSocket) => {
    const messageInput = document.querySelector<HTMLFormElement>('.message');
    const message = {
        content: messageInput!.value,
        type: 'message',
    };
    socket.send(JSON.stringify(message));
	messageInput!.value = '';
};

const handleMessages = (messages: Record<string, any> | Record<string, any>[]) => {
    const dataMessage = document.getElementById('data__Message');
    const isMessagesArray = messages instanceof Array;

    const timeAllMessage = document.createElement('time');
    timeAllMessage.className = 'headerTime';
    if (isMessagesArray) {
        timeAllMessage.textContent = getDate(new Date(messages[0].time));
    } else {
        timeAllMessage.textContent = getDate(new Date(messages.time));
    }

    const headerTime = document.querySelector('.headerTime');
    if (headerTime) {
        timeAllMessage.textContent = '';
    }

	dataMessage!.appendChild(timeAllMessage);

	const { id } = JSON.parse(localStorage.getItem('user')!);

	const addMessage = (elem: Record<string, any>) => {
	    if (elem) {
	        const container = id === elem.user_id
	            ? document.getElementById('my__messages')
	            : document.getElementById('otherUser_messages');

	        const textMessage = document.createElement('div');
	        textMessage.className = 'textMessage';
	        textMessage.textContent = elem.content;

	        const timeMessage = document.createElement('time');
	        timeMessage.className = 'time';
	        timeMessage.textContent = getTime(new Date(elem.time));
	        textMessage.appendChild(timeMessage);

	        const { pathname } = window.location;
	        if (pathname === '/chooseChatActive') {
				container!.appendChild(textMessage);
	        }
	    }
	};

	if (isMessagesArray) {
	    messages.reverse().forEach((el: Record<string, any>) => addMessage(el));
	} else {
	    addMessage(messages);
	}
};

const openMessagesSocket = (socket: WebSocket) => {
    socket.addEventListener('open', () => {
        socket.send(
            JSON.stringify({
                content: '0',
                type: 'get old',
            }),
        );
    });
};

const addUsersToChat = async (chatId: string) => {
    const inputAddUser = document.querySelector<HTMLInputElement>('.inputAddUser');
    const users = inputAddUser!.value.split(',');
    if (inputAddUser?.value) {
        inputAddUser.value = '';
    }
    await chatController.addUser({ users, chatId: parseInt(chatId) });
    return { usersInChats: [{ id: chatId, users }] };
};

const deleteUsersFromChat = async (chatId: string) => {
    const inputDelUser = document.querySelector<HTMLInputElement>('.inputDelUser');
    const users = inputDelUser!.value.split(',');
    if (inputDelUser?.value) {
        inputDelUser.value = '';
    }
    await chatController.deleteUsers({ users, chatId: parseInt(chatId) });
    return { usersInChats: [{ id: chatId, users }] };
};

const checkSendMassage = (): boolean => {
    let handler = true;
    const { id } = JSON.parse(localStorage.getItem('user')!);
    const currentChatId = localStorage.getItem('currentChat');
    const created_by = getDataFromChat(currentChatId || '', 'chats', 'created_by');
    const usersInChats = localStorage.getItem('usersInChats');
    if (usersInChats) {
        const InChats = JSON.parse(usersInChats);
        const { login } = JSON.parse(localStorage.getItem('user')!);
        if (id !== created_by && login !== InChats[0].users[0] && currentChatId !== InChats[0].id) {
            console.log('нет подписки на чат');
            handler = false;
        }
    } else {
        console.log('это не твой чат добавь имя c кем хочешь общаться');
        handler = false;
    }
    return handler;
};
