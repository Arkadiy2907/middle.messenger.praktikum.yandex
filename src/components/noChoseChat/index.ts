import tpl from './tpl.hbs';
import Block from '../../core/Block';

interface INoChoseChat {
    value: string;
}

export default class NoChoseChat extends Block {
    constructor(props: INoChoseChat) {
        super('div', props);
    }

    render() {
        return this.compile(tpl, this.props);
    }
}
