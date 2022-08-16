import tpl from './tpl.hbs';
import Block from '../../core/Block';

interface ILinkProps {
    value: string;
    href: string;
    events?: {
        click: (event: Event) => void;
    };
}

export default class Link extends Block {
    constructor(props: ILinkProps) {
        super('div', props);
    }

    render() {
        return this.compile(tpl, this.props);
    }
}
