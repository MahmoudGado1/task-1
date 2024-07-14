
const fs=require("fs")

const addPerson=(id,fname,lname,city,age)=>{
  const allData=loadInfo()
  const duplicatedData=allData.filter((obj)=>{
    return obj.id===id
  })

  if (duplicatedData.length==0){
    allData.push({id,fname,lname,city,age})
  }else{
    console.log("this id already exist")
  }
  saveAllData(allData)
}

////////////////////////////
const loadInfo=()=>{
  try {
    const dataJson=fs.readFileSync("data.json").toString()
    return JSON.parse(dataJson)
  } catch (e) {
    return []
  }
}
const saveAllData=(allData)=>{
  const saveDataJson=JSON.stringify(allData)
  fs.writeFileSync("data.json",saveDataJson)
}
///////////////////////////
const deletePerson=(id)=>{
  const allData=loadInfo()
  const newData=allData.filter((obj)=>{
    return obj.id!==id
  })
  console.log("deleted successfully")
  saveAllData(newData)
}
///////////////////////////
const readData=(id)=>{
  const allData=loadInfo()
  const itemNeeded=allData.find((obj)=>{
    return obj.id===id
  })
  if (itemNeeded){
    console.log(itemNeeded)
  }else{
    console.log("no item found")
  }
}
///////////////////////////
const listData=()=>{
  const allData=loadInfo()
  allData.forEach((obj) => {
    console.log(obj.id,obj.fname,obj.city)
  });
}
///////////////////////////
module.exports={
  addPerson,
  deletePerson,
  readData,
  listData
}