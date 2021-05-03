import React, {   ChangeEvent, useRef,useState } from 'react'
import {
    Presentation, Slide, Text,
    Shape, Image, render
  } from "react-pptx";
import FileViewer from 'react-file-viewer';
import "./home.css"

const Home:React.FC=()=>{
// debugger
        const [type , setType]= useState("")
const [filePath1, setFilePath] = useState("")
const [toggle ,  setToggle] = useState(false)
        const inputRef= useRef<HTMLInputElement>(null)

   const [flag, setFlag] = useState(false)
    const clickHandler = () =>{
debugger
        var x:FileList|null = inputRef.current?inputRef.current.files:null
       
        setFilePath(x?URL.createObjectURL(x[0]):"")
      var  abcd = x?x[0].type:""
    var len= abcd.split("/")
        console.log(abcd.includes("sheet"));
        if(abcd.includes("mp4")){
            setType("mp4")
        } else if(abcd.includes("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")){
            setType("xlsx")
        } else if(abcd.includes("openxmlformats-officedocument.wordprocessingml.document" )){
            setType("docx")
        } else if (abcd.includes("mpeg")){
            setType("mp3")
        } else
        if(abcd.includes("jpeg")){
            setType("jpeg")
        }else if(abcd.includes("vnd.openxmlformats-officedocument.presentationml.presentation")){
   setType("pptx")
        }else {
        setType(abcd.split("/")[1])

        }
        if(type === "png"){
            setFlag(true)
        }
        // debugger
        
     
        console.log(filePath1);
console.log(x?x[0].type.includes("pdf"):[]);
console.log(type);

    }
    const change = (e:ChangeEvent<HTMLInputElement>) =>{
        e.preventDefault();

        // var xy = e.target.value?true:false
        console.log(toggle);
        setToggle(true)
    }
     
    
   
    
    return(
        <div >
            
           <input className="document " type="file"  ref={inputRef} onChange={(e)=>{
               e.preventDefault();
               change(e)
           }} name="file" id="input"></input>
           <div className="document">
           
{
         toggle?  <input className=" preview   " type="button" onClick={clickHandler} value="Preview File"  />:""

}
</div>
           <div  className="style ">
               
                  
                     
                     {
                         filePath1?<FileViewer className="style container"
                         fileType={type}
                         filePath={filePath1}
                         
                       />: ""
                     }
                   
                   
               
           </div>
           <Presentation>
    <Slide>
      <Text style={{
        x: 3, y: 1, w: 3, h: 0.5,
        fontSize: 32
      }}>
        Hello there!
      </Text>
      <Shape
        type="rect"
        style={{
          x: 3, y: 1.55, w: 3, h: 0.1,
          backgroundColor: "#FF0000"
        }}
      />
    </Slide>
    <Slide>
      <Image
        src={{
          kind: "path",
          path: filePath1
        }}
        style={{
          x: "10%", y: "10%", w: "80%", h: "80%"
        }}
      />
    </Slide>
  </Presentation>
        </div>

    )
}
export default Home