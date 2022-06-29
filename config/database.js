const mongoose=require("mongoose")
const DBURL=`mongodb+srv://Alphazene:Bangalore%40333@cluster0.jpduk.mongodb.net/Sample_roombooking?retryWrites=true&w=majority`

mongoose.connect(DBURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log(`Database Connected`)
}).catch((error)=>{
    if(error) return console.log(error)
})

module.exports=mongoose