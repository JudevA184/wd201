const todoList = () => {
  all = []
  const add = (todoItem) => {
    all.push(todoItem)
  }
  const markAsComplete = (index) => {
    all[index].completed = true
  }

  const overdue = () => {
    // Write the date check condition here and return the array
    // of overdue items accordingly.
    arr=[]
    all.forEach(element => {
        if(element.dueDate===yesterday){
            arr.push(element)
        }
    });
    return arr
  }

  const dueToday = () => {
    // Write the date check condition here and return the array
    // of todo items that are due today accordingly.
    arr=[]
    all.forEach(element => {
        if(element.dueDate===today){
            arr.push(element)
        }
    });
    return arr
  }

  const dueLater = () => {
    // Write the date check condition here and return the array
    // of todo items that are due later accordingly.
    arr=[]
    all.forEach(element => {
        if(element.dueDate===tomorrow){
            arr.push(element)
        }
    });
    return arr
  }

  const toDisplayableList = (list) => {
    // Format the To-Do list here, and return the output string
    // as per the format given above.
    arr=[]
    list.forEach(element=>{
        if(element.dueDate===yesterday || element.dueDate===tomorrow){
            if(element.completed===true){
                arr.push(`[x] ${element.title} ${element.dueDate}`)
            }else{
                arr.push(`[ ] ${element.title} ${element.dueDate}`)
            }
        }else{
            if(element.completed===true){
                arr.push(`[x] ${element.title}`)
            }else{
                arr.push(`[ ] ${element.title}`)
            }
        }
    })
    return arr.join("\n")
  }

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList
  };
};

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

module.exports=todoList