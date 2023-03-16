const fs=require("fs")
const getuserData = () => {
    fs.readFile("../output.json",'utf8',(err,data)=>{
        if (err) {
            console.error(err);
          }
          else{
            return data;
          } 
    })
}
module.exports=getuserData;