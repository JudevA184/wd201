const todoList=require('../todo')
const{all, markAsComplete, add}=todoList()

describe("todo test suite",()=>{
    beforeAll(()=>{
        add({
        title:"test todo",
        completed:false,
        duedate:"today"
        })
    })
    test("empty check",()=>{
        const todoCount=all.length
        add({
        title:"test todo",
        completed:false,
        duedate:"today"
        })
        expect(all.length).toBe(todoCount+1);
    })
    test("check for completed",()=>{
        expect(all[0].completed).toBe(false)
        markAsComplete(0)
        expect(all[0].completed).toBe(true)
    })
    
})