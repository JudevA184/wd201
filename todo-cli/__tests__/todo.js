/* eslint-disable no-undef */
const todoList=require('../todo')
const{all, markAsComplete, add, overdue, dueToday, dueLater}=todoList()


const formattedDate = d => {
  return d.toISOString().split("T")[0]
}
var dateToday = new Date()
const today = formattedDate(dateToday)
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
)
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
)

describe("todo test suite",()=>{
    test("new todo",()=>{
        const todoCount=all.length
        add({
            title:"add new todo",
            completed:false,
            dueDate:today
        })
        expect(all.length).toBe(todoCount+1)
    })
    test("check for completed",()=>{
        expect(all[0].completed).toBe(false)
        markAsComplete(0)
        expect(all[0].completed).toBe(true)
    })
    test("check for overdue",()=>{
        const overd={title:"an od task",completed:false,dueDate:yesterday}
        const overdlen=overdue().length;
        add(overd)
        const newoverdlen=overdue().length;
        expect(newoverdlen).toBe(overdlen+1)
    })
    test("check for duetoday",()=>{
        const deuTOD={title:"a task for today",completed:false,dueDate:today}
        const deuTODlen=dueToday().length;
        add(deuTOD)
        const newdeuTODlen=dueToday().length;
        expect(newdeuTODlen).toBe(deuTODlen+1)
    })
    test("check for dueLater",()=>{
        const dueL={title:"a task for later",completed:false,dueDate:tomorrow}
        const dueLlen=dueLater().length;
        add(dueL)
        const newdueLlen=dueLater().length;
        expect(newdueLlen).toBe(dueLlen+1)
    })
})