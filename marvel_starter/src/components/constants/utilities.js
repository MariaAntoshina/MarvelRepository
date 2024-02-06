/**
 * Check if string is empty
 * @param str string to check
 * @returns {boolean}
 */
export const stringIsEmpty = (str) => {
    return str === null || str === undefined || str === '';
}

/**
 * Check if string is too long. If true returns first part of teh string with ellipsis
 * @param str string to check
 * @param length specified length
 * @returns {*|string} processed string
 */
export const processLongString = (str, length) => {
    if (!stringIsEmpty(str) && str.length > length) {
        return str.slice(0, length) + "...";
    }
    return str;
}