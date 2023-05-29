export function useDeleteDuplicate(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index)
}