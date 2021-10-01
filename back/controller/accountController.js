const accountModel = require("../model/accountModel")

module.exports.get = async(user) => {
    let getAccount = new accountModel();
    let data = await getAccount.get(user);
    if(data){
        return data
    }
    else{
        return "Error"
    }
}


module.exports.update = async(user) => {
    let updateAccount = new accountModel();
    let data = await updateAccount.update(user);
    if(data){
        return data
    }
    else{
        return "error"
    }
}
