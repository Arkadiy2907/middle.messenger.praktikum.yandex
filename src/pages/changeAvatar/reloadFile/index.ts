import tpl from './tpl.hbs';
import Block from '../../../core/Block';
import Link from '../../../components/link';
import ButtonBlue from '../../../components/button';

export default class ReloadFile extends Block {
    constructor(props: Record<string, any> = {}) {
        const chooseFile = new Link({ value: 'Выбрать файл на компьютере', href: '/fileOk' });
        const buttonBlue = new ButtonBlue({ value: 'Поменять' });

        super('div', {
            ...props,
            title: 'Ошибка, попробуйте ещё раз',
            chooseFile,
            buttonBlue,
        });
    }

    render() {
        return this.compile(tpl, this.props);
    }
}
