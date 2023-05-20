export function deleteDuplicate(arr) {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
}