import tpl from './tpl.hbs';
import Block from '../../service/Block';

interface ITempMassage {
    chatTitle: string;
    href: string;
    myMassage?: string;
    chatMassage: string;
    time: string;
    events?: {
        click: (event: Event) => void;
    };
}

export default class Massage extends Block {
    constructor(props: ITempMassage) {
        super('div', props);
    }

    render() {
        return this.compile(tpl, this.props);
    }
}
