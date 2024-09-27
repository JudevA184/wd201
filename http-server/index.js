
const http=require("http")
const fs=require("fs");
const minimist=require("minimist")
const args = minimist(process.argv.slice(2));

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
}).listen(port)
