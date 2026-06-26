export const ins = "INSERT"
export const upd = "UPDATE"
export const del = "DELETE"

export const insfun = (data) =>{
        return{
            type:ins,
            payload:data
        }
}

export const delfun = (id) =>{
    return {
        type:del,
        payload:id
    }
}

export const updfun = (id,data) =>{
    return{
        type:upd,
        payload:{id,data}
    }
}
