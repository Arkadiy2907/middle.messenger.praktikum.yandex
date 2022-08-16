import tpl from './tpl.hbs';
import Block from '../../core/Block';

interface IAvatarProps {
    displayName: string;
    href: string;
    src?: string;
    events?: {
        click: (event: Event) => void;
    };
}

export default class Avatar extends Block {
    constructor(props: IAvatarProps) {
        super('div', props);
    }

    render() {
        return this.compile(tpl, this.props);
    }
}
