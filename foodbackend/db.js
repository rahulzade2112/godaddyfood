
const mongoose = require("mongoose");
const dbUrl = "";
//mongodb://<username>:<password>@cluster0.qonivtm.mongodb.net/<databasename>
module.exports = function (callback) {
     mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true})
     .then(async () => {
             console.log("connected to mongo")
             const foodCollection = await mongoose.connection.db.collection("food_items");
             foodCollection.find({}).toArray(async function (err, data) {
                 const categoryCollection = await mongoose.connection.db.collection("foodCategory");
                 categoryCollection.find({}).toArray(async function (err, Catdata) {
                     callback(err, data, Catdata);
                 }  )                               

             })
         }).catch((err) => {
          console.log(err);
     });

   }
    