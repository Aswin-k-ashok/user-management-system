var db=require('../config/connection')
var udb=require('../config/connection')

module.exports={
    addUser:(userdata)=>{
        return new Promise((resolve,reject)=>{
        udb.get().collection('userData').insertOne(userdata).then(()=>{
            return resolve(true)
        })
        .catch(()=>{
            return reject(false)
        })
        })
    }
}



// module.exports={

// //     addUser:(user,callback)=>{
// //         console.log("users");

// //         db.get().collection('users').insertOne(user).then((data)=>{
// //             callback(true)
// //         })
// //     }
// // }