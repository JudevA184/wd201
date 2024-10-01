let togglestatus=(todoitem)=>{
    return  todoitem
}

let testtogglecompletion=()=>{
    let item={title:"buy x",completed:false}
    item=togglestatus(item)
    console.assert(item.completed===true,"task must be completed")

}

testtogglecompletion()