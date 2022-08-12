import tpl from './tpl.hbs';
import Block from '../../service/Block';

interface ITemp {
    displayName: string;
    href: string;
    src?: string;
    events?: {
        click: (event: Event) => void;
    };
}

export default class Avatar extends Block {
    constructor(props: ITemp) {
        super('div', props);
    }

    render() {
        return this.compile(tpl, this.props);
    }
}
