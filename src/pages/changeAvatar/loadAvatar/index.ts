import tpl from './tpl.hbs';
import Block from '../../../core/Block';
import Link from '../../../components/link';
import ButtonBlue from '../../../components/button';

export default class LoadAvatar extends Block {
    constructor(props: Record<string, any> = {}) {
        const chooseFile = new Link({ value: 'Выбрать файл на компьютере', href: '/fileError' });
        const buttonBlue = new ButtonBlue({ value: 'Поменять' });

        super('div', {
            ...props,
            title: 'Загрузите файл',
            chooseFile,
            buttonBlue,
        });
    }

    render() {
        return this.compile(tpl, this.props);
    }
}
