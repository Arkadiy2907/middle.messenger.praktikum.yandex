import tpl from './tpl.hbs';
import Block from '../../service/Block';

interface ITempProps {
    name: string;
    label: string;
    type: string;
    placeholder?: string;
    readonly?: string;
    events?: {
        blur: (event: Event) => void;
        focus: (event: Event) => void;
    };
}
class Input extends Block {
    constructor(props: ITempProps) {
        super('div', props);
    }

    render() {
        return this.compile(tpl, this.props);
    }
}

export default Input;
