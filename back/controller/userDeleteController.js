
const userDeleteModel = require("../model/userDeleteModel")


module.exports.delete = async(id) => {
    let deleteUser = new userDeleteModel();
    let data = await deleteUser.delete(id);
    if(data){
        return data
    }
    else{
        return "Error"
    }
}
