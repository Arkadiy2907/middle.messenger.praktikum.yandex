export const regExp = {
    login: /^[a-zA-Z0-9-_]{3,20}$(?<=.*?[a-zA-Z].*?)/,
    name: /^[A-Z-А-Я]+[A-Za-zА-Яа-я-]+$/,
    email: /^[a-z0-9-]+@[a-z0-9-]+.[a-z]{2,6}$/,
    phone: /^([0-9]+).{10,15}$/,
    password: /^(?=.*?[A-Z]+)(?=.*?[0-9]+).{8,40}$/,
};

export const errorMessage = {
    login: 'от 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов.',
    name: 'первая буква должна быть заглавной, без пробелов и без цифр, (допустим дефис)',
    email: 'есть «собака»!! и точка после неё? но перед точкой обязательно должны быть буквы.',
    phone: 'от 10 до 15 символов, состоит из цифр, может начинается с плюса.',
    password: 'от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра.',
};

export const propsInput = {
    login: {
        label: 'Логин',
        name: 'login',
        type: 'text',
        placeholder: 'Ivan',
    },

    firstName: {
        label: 'Имя',
        name: 'firstName',
        type: 'text',
        placeholder: 'Иван',
    },

    secondName: {
        label: 'Фамилия',
        name: 'secondName',
        type: 'text',
        placeholder: 'Иванов',
    },

    password: {
        label: 'Пароль',
        name: 'password',
        type: 'password',
        placeholder: 'пароль',
    },

    passwordAgain: {
        label: 'Повторите пароль',
        name: 'passwordAgain',
        type: 'password',
        placeholder: 'пароль',
    },

    oldPassword: {
        label: 'Старый пароль',
        name: 'oldPassword',
        type: 'password',
        placeholder: 'пароль',
    },

    email: {
        label: 'Почта',
        name: 'email',
        type: 'email',
        placeholder: 'hello.@ivan.com',
    },

    phone: {
        label: 'Телефон',
        name: 'phone',
        type: 'tel',
        placeholder: '+78001002030',
    },

    displayName: {
        label: 'Имя в чате',
        name: 'displayName',
        type: 'text',
        placeholder: 'Ivan',
    },
};
