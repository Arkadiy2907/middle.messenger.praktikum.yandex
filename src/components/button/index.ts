import tpl from './tpl.hbs';
import Block from '../../core/Block';

type EventType = Record<string, (e: Event) => void>;

interface IButtonBlueProps {
    value: string;
    href?: string;
    type?: string;
    events?: {
        click: (event: Event) => void;
	};
	event?: EventType;
}

export default class ButtonBlue extends Block {
    constructor(props: IButtonBlueProps) {
        super('div', props);
    }

    render() {
        return this.compile(tpl, this.props);
    }
}
