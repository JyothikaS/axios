const express=require("express")

const axios=require("axios")

const app=express()
const fs=require("fs")

async function getRequest() {
    const config={
        method:"get",
        url:"https://jsonplaceholder.typicode.com/users"
    }
    const res=await new axios(config)
    console.log(res.data)
}
//getRequest()
app.get("/async",async (request,response)=>{
    const url="https://jsonplaceholder.typicode.com/users"
    // const config={
    //     method:"get",
    //     url:"https://jsonplaceholder.typicode.com/users"
    // }
    //const res=await new axios(config)
    const res=await axios.get(url)

    response.status(200).json(res.data)
})

app.get("/async/:id",async (request,response)=>{
    const url="https://jsonplaceholder.typicode.com/users"
    const userId=request.params.id
    // const config={
    //     method:"get",
    //     url:"https://jsonplaceholder.typicode.com/users"
    // }
    //const res=await new axios(config)
    const res=await axios.get(url+"/"+userId)

    response.status(200).json(res.data)
})

async function getImage () {
    const imgUrl="https://images.unsplash.com/photo-1661956601349-f61c959a8fd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
    var config={
        responseType:"stream"
    }
    const res=await axios.get(imgUrl,config)
    res.data.pipe(fs.createWriteStream("image1.jpg"))

}
getImage()


app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})
