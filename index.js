var MongoClient=require('mongodb').MongoClient;
var URl="mongodb+srv://jauadulkarim:foregivememylord@cluster0.sqtcuzy.mongodb.net/?retryWrites=true&w=majority"

MongoClient.connect(URl,function (error,MyMongoClient) {
    if(error){
        console.log("connection fail")
    }
    else{
        console.log("connection Successful");
        //insertData(MyMongoClient);
        //UpdateMyData(MyMongoClient);
        //FindAllDataByProjection(MyMongoClient);
        //FindAllData(MyMongoClient);
        DeleteOneItem(MyMongoClient)
    }
})
function insertData(MyMongoClient){
    var MyDataBase=MyMongoClient.db("house");
    var MyCollection=MyDataBase.collection("members");
    var MyData={Name:"me",memberno:"3",Age:"28"};
    MyCollection.insertOne(MyData,function (error) {
        if(error){
            console.log("data insert Fail");
        }
        else{
            console.log("data insert successful");
        }

    })

}
function UpdateMyData(MyMongoClient){
    var MyDataBase=MyMongoClient.db("house");
    var MyCollection=MyDataBase.collection("members");

    var myquery={Name:"me"};
    var MyNewValues={$set:{memberno:"4",Age:"24"}};
    MyCollection.updateOne(myquery,MyNewValues,function(error,result) {
        console.log(result);

    })

}
function FindAllData(MyMongoClient){
    var MyDataBase=MyMongoClient.db("house");
    var MyCollection=MyDataBase.collection("members");
    MyCollection.find().toArray(function (error,result) {
        console.log(result);
    })
}

function DeleteOneItem(MyMongoClient){
    var MyDataBase=MyMongoClient.db("house");
    var MyCollection=MyDataBase.collection("members");
    var DeleteItem={memberno:"4"}
    MyCollection.deleteOne(DeleteItem,function (error) {
        if(error){
            console.log("data delete fail")
        }
        else
            console.log("data delete successful");

    })
}