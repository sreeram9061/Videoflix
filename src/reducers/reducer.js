export const listReducer=(list,{type,payload})=>{
    switch(type){
        case 'LIST_FROM_MAIN_SLIDER':
            return [...list,payload]
        case 'DELETE_ITEM_FROM_LIST':
            return list.filter(item=> item.id!=payload.id)
    }
}