export const getNowDate = () => {
    const today = new Date();

    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;

    const newToday = `${year}-${month}-${day}`;
    return newToday
}

export const getNowHour = () => {
    const today = new Date();

    let hour = today.getHours();
    let min = today.getMinutes();

    hour = hour < 10 ? `${hour}0` : hour;
    min = min < 10 ? `${min}0` : min;

    const hours = `${hour}:${min}`;
    return hours
}