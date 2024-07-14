const yargs=require("yargs")
const data=require("./data")

yargs.command({
  command:"add",
  describe:"add an item",
  builder:{
    id:{
      describe:"this is id in add command",
      demandOption:true,
      type:"number"
    },
    fname:{
      describe:"this is the first name desc in add command",
      demandOption:true,
      type:"string"
    },
    lname:{
      describe:"this is the last name desc in add command",
      demandOption:true,
      type:"string"
    }
  },
  handler:(x)=>{
    data.addPerson(x.id,x.fname,x.lname,x.city,x.age)
  }
})
yargs.command({
  command:"delete",
  describe:"delete an item",
  builder:{
    id:{
        describe:"this is the id desc in delete command",
        demandOption:true,
        type:"number",
    },
  },
  handler:(x)=>{
    data.deletePerson(x.id)
  }
})
yargs.command({
  command:"read",
  describe:"read an item",
  builder:{
    id:{
        describe:"this is the id desc in read command",
        demandOption:true,
        type:"number",
    },
  },
  handler:(x)=>{
    data.readData(x.id)
  }
})
yargs.command({
  command:"list",
  describe:"list an item",
  handler:()=>{
    data.listData()
  }
})
yargs.parse()
