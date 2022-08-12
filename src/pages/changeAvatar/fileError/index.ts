import tpl from './tpl.hbs';
import Block from '../../../service/Block';
import Link from '../../../components/link';
import ButtonBlue from '../../../components/button';

export default class FileError extends Block {
    constructor(props: Record<string, any> = {}) {
        const chooseFile = new Link({ value: 'Выбрать файл на компьютере', href: '/reloadFile' });
        const buttonBlue = new ButtonBlue({ value: 'Поменять' });

        super('div', {
            ...props,
            title: 'Загрузите файл',
            message: 'Нужно выбрать файл',
            chooseFile,
            buttonBlue,
        });
    }

    render() {
        return this.compile(tpl, this.props);
    }
}
