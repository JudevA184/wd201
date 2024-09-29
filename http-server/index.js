<<<<<<< HEAD
const minimist=require("minimist")
const args = minimist(process.argv.slice(2));
const http=require("http")
const fs=require("fs");
=======

const http=require("http")
const fs=require("fs");
const minimist=require("minimist")
const args = minimist(process.argv.slice(2));
>>>>>>> 675a920a5b71e0f486a85f83af98c25c8d7c0e64

const port=parseInt(args.port);

let homecontent=""
let projectcontent=""
let regcontent=""

fs.readFile("home.html",(err,home)=>{
    if(err) throw err;
    homecontent=home
})

fs.readFile("project.html",(err,project)=>{
    if(err) throw err;
    projectcontent=project
})

fs.readFile("registration.html",(err,reg)=>{
    if(err) throw err;
    regcontent=reg;

})

http.createServer((request,response)=>{
    let url=request.url
    response.writeHeader(200,{"content-type":"text/html"})
    switch(url){
        case "/project":
            response.write(projectcontent)
            response.end()
            break
        case "/registration":
            response.write(regcontent)
            response.end()
            break
        default:
            response.write(homecontent)
            response.end()
            break
    }
<<<<<<< HEAD
}).listen(port)
=======
}).listen(port)
>>>>>>> 675a920a5b71e0f486a85f83af98c25c8d7c0e64
