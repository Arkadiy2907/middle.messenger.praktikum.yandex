import tpl from './tpl.hbs';
import Block from '../../core/Block';

interface IArrowProps {
    value?: string;
    href: string;
    events?: {
        click: (event: Event) => void;
    };
}

export default class ArrowPrevPage extends Block {
    constructor(props: IArrowProps) {
        super('div', props);
    }

    render() {
        return this.compile(tpl, this.props);
    }
}
