import tpl from './tpl.hbs';
import Block from '../../core/Block';

interface IInputProps {
    name: string;
    label: string;
    type: string;
    placeholder?: string;
    readonly?: string;
    class?: string;
    events?: {
        blur: (event: InputEvent) => void;
        focus: (event: InputEvent) => void;
    };
}
class Input extends Block {
    constructor(props: IInputProps) {
        super('div', props);
    }

    render() {
        return this.compile(tpl, this.props);
    }
}

export default Input;
