export const getDate = (time: Date): string => {
    const day = time.getDate() < 10 ? `0${time.getDate()}` : `${time.getDate()}`;
    const monthStr =		['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = monthStr[time.getMonth()];
    return `${day} ${month}`;
};

export const getTime = (time: Date): string => {
    const hours = time.getHours() < 10 ? `0${time.getHours()}` : `${time.getHours()}`;
    const minutes = time.getMinutes() < 10 ? `0${time.getMinutes()}` : `${time.getMinutes()}`;
    return `${hours}: ${minutes}`;
};
