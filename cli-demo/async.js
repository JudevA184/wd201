const time=async(ms)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve()
        },ms)
    })
}
const fetchdetails=async(userid)=>{
     console.log("fetched")
     await time(500)
     return(`https://image.com/${userid}`) 
}

const downloadimage=async(imageurl)=>{
    console.log("downloading image")
    await time(500)
    return (`image data for ${imageurl}`) 
}

const render=async(imagedata)=>{
    await time(300)
    console.log("render image")
}

const run=async()=>{
    const imageurl=await fetchdetails("john")
    const imagedata=await downloadimage(imageurl)
    await render(imagedata)
}

run()