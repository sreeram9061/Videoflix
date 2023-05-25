
export const useStringMinimize = (value,intalCount,endCount) => {
    return value.split('').splice(intalCount,endCount).join('')
}

 
