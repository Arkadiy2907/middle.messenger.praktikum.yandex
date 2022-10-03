import tpl from './tpl.hbs';
import Block from '../../core/Block';
import ButtonBlue from '../button';
import { router } from '../../index';

interface IReloadAvatarProps {
    src?: string;
    events?: {
        click?: (event: Event) => void;
        change?: () => void;
    };
}

export default class ReloadAvatar extends Block {
    constructor(props: IReloadAvatarProps) {
        const buttonBlue = new ButtonBlue({
            value: 'Сохранить',
            type: 'submit',
            events: {
                click: (event) => {
                    event.preventDefault();
                    router.go('/profile');
                },
            },
        });

        super('div', { ...props, buttonBlue });
    }

    render() {
        return this.compile(tpl, this.props);
    }
}
