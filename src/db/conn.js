const mongoose=require("mongoose"); 
mongoose.connect("mongodb+srv://user2001:test123@cluster0.yrjxwok.mongodb.net/?retryWrites=true&w=majority", { 
    useNewUrlParser:true, 
    useUnifiedTopology:true, 
   
}
).then(() => { 
    console.log(`connection succesful`);
}).catch((e) => { 
    console.log(`no connection`);
})