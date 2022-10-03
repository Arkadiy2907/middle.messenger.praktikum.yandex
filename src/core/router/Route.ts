import renderDom from '../renderDOM';
import { isEqualString } from '../../utils/isEqualString';

export class Route {
    private _pathname: any;

    private _blockClass: any;

    private _block: any;

    private _props: any;

    constructor(pathname: string, view: any, props: any) {
        this._pathname = pathname;
        this._blockClass = view;
        this._block = null;
        this._props = props;
    }

    navigate(pathname: string): void {
        if (this.match(pathname)) {
            this._pathname = pathname;
            this.render();
        }
    }

    leave(): void {
        if (this._block) {
            this._block.hide();
        }
    }

    match(pathname: string): boolean {
        return isEqualString(pathname, this._pathname);
    }

    render() {
        this._block = new this._blockClass();
        renderDom(this._props.rootQuery, this._block);
    }
}
