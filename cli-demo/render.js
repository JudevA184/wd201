// const fetchdetails=(userid,callback)=>{
//     console.log("fetched")
//     setTimeout(()=>{
//         callback(`https://image.com/${userid}`)
//     },500)
// }
// const downloadimage=(imageurl,callback)=>{
//     console.log("downloading image")
//     setTimeout(()=>{
//         callback(`imag data for${imageurl}`)
//     },500)
// }
// const render=(image)=>{
//     console.log("render image")
// }

// fetchdetails("john",(imageurl)=>{
//     downloadimage(imageurl,(image)=>{
//         render(image)
//     })
// })

//THE ABOVE METHOD IS COMPLICATED AND COMPLEX...SO WE USE A PROMISE

const fetchdetails=(userid)=>{
     console.log("fetched")
     return new Promise((resolve,reject)=>{
        setTimeout(()=>{
         resolve(`https://image.com/${userid}`)
        },500)
     })
     
 }
 const downloadimage=(imageurl)=>{
     console.log("downloading image")
     return new Promise((resolve,reject)=>{
        setTimeout(()=>{
         resolve(`imag data for${imageurl}`)
        },500)
     })
     
 }
 const render=(image)=>{
     console.log("render image")
 }

 fetchdetails("john")
 .then((imageurl)=>{downloadimage(imageurl)})
 .then((imagedata)=>{render(imagedata)})
 .catch((error)=>{console.log(error)})