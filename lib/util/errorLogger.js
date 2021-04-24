

const logError = (error)=>{
    let log = new Error(error);
    console.log(log)

    process.exitCode = 1;
    process.exit()

}


module.exports = logError;