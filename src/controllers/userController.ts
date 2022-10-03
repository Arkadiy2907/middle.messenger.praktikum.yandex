import store from '../store';
import userApi from '../api/userApi';
import { TSignUp } from '../pages/registration';
import authController from './authController';

type TPassword = {
    oldPassword: string;
    newPassword: string;
};

class UserController {
    public async changeProfile(data: TSignUp) {
        try {
            await userApi.changeProfile(data);
            await authController.getUser();
            return { success: true };
        } catch (e: any) {
            return e.reason;
        }
    }

    public async changeAvatar(file: File, image: HTMLImageElement) {
        try {
            const data = new FormData();
            data.append('avatar', file, `avatar.${file.type.split('/')[1]}`);
            await userApi.changeAvatar(data);
            this.updateImage(file, image);
            await authController.getUser();
        } catch (e: any) {
            return e.reason;
        }
    }

    public updateImage(file: File, image: HTMLImageElement) {
        const reader = new FileReader();

        reader.onload = async (e) => {
            const base64 = e.target!.result;
            const newImage = { ...image };
            newImage.src = base64 as string;
            store.changeState({ avatarIcon: base64 }, true);
        };

        reader.readAsDataURL(file);
    }

    public async changeUserPassword(data: TPassword) {
        try {
            await userApi.changeUserPassword(data);
            await authController.getUser();
            return { success: true };
        } catch (e: any) {
            return e.reason;
        }
    }
}

const userController = new UserController();

export default userController;
