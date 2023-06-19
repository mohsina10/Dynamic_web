 
 require('dotenv').config();
 const mongoose=require("mongoose"); 
mongoose.connect(process.env.MONGODB_URL, { 
    useNewUrlParser:true, 
    useUnifiedTopology:true, 
   
}
).then(() => { 
    console.log(`connection succesful`);
}).catch((e) => { 
    console.log(`no connection`);
})