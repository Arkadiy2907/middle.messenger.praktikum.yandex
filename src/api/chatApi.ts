import { Client } from '../core/HTTP';

type TCreateChat = {
    title: string;
};

type TChatUser = {
    users: string[];
    chatId: number;
};

const _http = new Client('/chats');

class ChatApi {
    get() {
        return _http.get('/');
    }

    createChat(data: TCreateChat) {
        return _http.post('/', data);
    }

    addUser(data: TChatUser) {
        return _http.put('/users', data);
    }

    deleteUsers(data: TChatUser) {
        return _http.delete('/users', data);
    }

    getChatUsers(chatId: number = 0) {
        return _http.post(`/token/${chatId}`);
    }
}

const chatApi = new ChatApi();

export default chatApi;
