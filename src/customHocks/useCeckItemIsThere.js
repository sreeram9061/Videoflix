import { useContext } from "react"
import { myLystContext } from "../context/Globlefile"

export const useCeckItemIsThere = (item) => {
    const [list,]=useContext(myLystContext)
    return list.some(innerItem=> innerItem.id==item.id)
}

 

