var TengriWatch = require("../models/TengriWatch");



const createNewWatch=async(body)=>{
    try {
        await TengriWatch.query().insert(body);
    } catch (error) {
        console.log(error.message)
    }
}


module.exports = createNewWatch;