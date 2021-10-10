const userAdminModel = require("../model/userAdminModel")

module.exports.get = async() => {
    let getUsers = new userAdminModel();
    let data = await getUsers.get();
    if(data){
        return data
    }
    else{
        return "Error"
    }
}
