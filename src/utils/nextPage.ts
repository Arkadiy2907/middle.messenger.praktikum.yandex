import { getResForm } from '../core/valid';

export const goNextPage = (y: string) => {
    const obj = getResForm('form');
    console.log('после клика на синюю клавишу в течении 4 сек произойтет изменение');
    const nextPage = () => {
        if (obj) {
            window.location.href = y;
        }
    };
    setTimeout(nextPage, 4000);
};
