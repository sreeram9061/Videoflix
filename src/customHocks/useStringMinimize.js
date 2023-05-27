
export const useStringMinimize = (value,intalCount,endCount) => {
    return value && value.split('').splice(intalCount,endCount).join('')
}

 
