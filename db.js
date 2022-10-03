const {mongoClient}=require('mongoDb ')
let dbConnection
module.export={
    connectToDb:(cb)=>{
        mongoClient.connect('mongodb://localhost:27017/cosmas')
        .then((client)=>{
            dbConnection=client.db()
            return cb()

        })
        .catch(err=>{
            console.log(err);
            return cb(err)
        })

    },
    getDb:()=>{dbConnection}

}