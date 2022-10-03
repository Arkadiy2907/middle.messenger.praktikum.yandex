import tpl from './tpl.hbs';
import Block from '../../core/Block';
import ReloadAvatar from '../../components/reloadAvatar';
import userController from '../../controllers/userController';
import { getAvatar } from '../../utils/getUserData';
import startPic from '../../image/cat.png';

export default class LoadAvatar extends Block {
    constructor(props: Record<string, any> = {}) {
        const reloadAvatar = new ReloadAvatar({
            src: getAvatar() || startPic,
            events: {
                change: async () => {
                    const input = <HTMLInputElement>document.getElementById('avatarUploader');

                    if (input) {
                        const image = <HTMLImageElement>document.getElementById('userAvatar');
                        const file = input.files![0];
                        if (file && image) {
                            await userController.changeAvatar(file, image);
                        }
                    }
                },
            },
        });

        super('div', {
            ...props,
            title: 'Загрузите файл',
            reloadAvatar,
        });
    }

    render() {
        return this.compile(tpl, this.props);
    }
}
