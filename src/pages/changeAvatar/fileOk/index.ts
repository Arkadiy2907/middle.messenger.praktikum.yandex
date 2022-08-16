import tpl from './tpl.hbs';
import Block from '../../../core/Block';
import Link from '../../../components/link';
import ButtonBlue from '../../../components/button';

export default class FileOk extends Block {
    constructor(props: Record<string, any> = {}) {
        const chooseFile = new Link({ value: 'pic.jpg', href: '/profile' });
        const buttonBlue = new ButtonBlue({ value: 'Поменять' });

        super('div', {
            ...props,
            title: 'Файл загружен',
            chooseFile,
            buttonBlue,
        });
    }

    render() {
        return this.compile(tpl, this.props);
    }
}
