const userData='../Userdata/Userdata.json';
const getuserData=()=>{
    const jsonData = fs.readFile(userData)
    return JSON.parse(jsonData)   
}
module.exports= getuserData;