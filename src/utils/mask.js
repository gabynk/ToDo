export function maskDateBr(value) {
    const year = value.substring(0, 4)
    const month = value.substring(5, 7);
    const day = value.substring(8);

    value = `${year}/${day}/${month}`;

    return value
}