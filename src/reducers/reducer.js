export const listReducer=(list,{type,payload})=>{
    switch(type){
        case 'ADD_LIST':
            return [...list,payload]
        case 'DELETE_ITEM_FROM_LIST':
            return list.filter(item=> item.id!=payload.id)
        case 'LOCAL_STORAGE_DATA' :
            return payload
    }
}

