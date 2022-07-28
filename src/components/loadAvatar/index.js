import tplLoadAvatar from './tplLoadAvatar.hbs';
import button from '../button';

const chooseFile = {
	title: 'Загрузите файл',
	chooseFile: button('loadFile_chooseFile', 'Выбрать файл на компьютере', '#'),
	buttonBlue: button('loadFile_chooseFileBlue', 'Поменять'),
	message: ''
}

const fileOk = {
	title: 'Файл загружен',
	chooseFile: button('loadFile_fileOk', 'pic.jpg', '#'),
	buttonBlue: button('loadFile_fileOkBlue', 'Поменять'),
	message: ''
}

const fileError = {
	title: 'Загрузите файл',
	chooseFile: button('loadFile_chooseFileNoError', 'Выбрать файл на компьютере', '#'),
	buttonBlue: button('loadFile_changeFileNoErrorBlue', 'Поменять'),
	message: 'Нужно выбрать файл'
}

const reloadFile = {
	title: 'Ошибка, попробуйте ещё раз',
	chooseFile: button('loadFile_reloadFile', 'Выбрать файл на компьютере', '#'),
	buttonBlue: button('loadFile_reloadFileBlue', 'Поменять'),
	message: ''
}

export default (type) => {
	if (type === 'chooseFile') {
		return tplLoadAvatar(chooseFile);
	}
	if (type === 'fileOk') {
		return tplLoadAvatar(fileOk);
	}
	if (type === 'fileError') {
		return tplLoadAvatar(fileError);
	}
	if (type === 'reloadFile') {
		return tplLoadAvatar(reloadFile);
	}
}