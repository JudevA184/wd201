const fs=require("fs")
fs.writeFile(
    "sample.txt",
    "hiii...hola,welcome to node.js system module",
    (err)=>{
        if(err) throw err;
        console.log("file created")
    }
)

fs.readFile("sample.txt",(err,data)=>{
    if(err) throw err;
    console.log(data.toString())
}
)

fs.appendFile("sample.txt","updated content",(err)=>{
    if(err) throw err;
    console.log("file updated")
})

fs.rename("sample.txt","updated.txt",
    (err)=>{
        if(err) throw err;
        console.log("file renamed!")
    }
)

fs.unlink("updated.txt",(err)=>{
    if(err) throw err;
    console.log("file unlinked/deletd")
}
)