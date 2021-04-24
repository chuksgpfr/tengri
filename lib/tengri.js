var {exec} = require("child_process");
const initialize = require("./util/initialize");
const noCache = require("./util/noCache");
var path = require("path");
var fs = require("fs")
var logError = require("./util/errorLogger");
var createNewWatch = require("./util/tengriRepo")

var capture = require("./capture");

let tengriBody ={};

const init = (file_name)=>{
    exec("echo $PWD", (error, stdout, stderr)=>{

        let file_path= path.join(stdout.replace("\n",""), file_name);

        let isExist = fs.existsSync(file_path)

        //check if connection path  is empty
        if(!file_name){
            logError(`tengri connection file is empty, please create a file and add to init method.`)
        }
        
        if(isExist){
            initialize(file_path);
        }else{
            logError(`file ${file_name} does not exist, please create the file and initialize tengri again`)
        }

    })
}

const tengri = async(req, res, next) =>{
    const requestStart = Date.now();
    const started = new Date();

    //removes "no-cache" from browser headers
    noCache(req);

    let message;

    var oldWrite = res.write;
    var oldEnd = res.end;

    var chunks = [];
    
    res.write = function (chunk) {
        chunks.push(chunk);

        return oldWrite.apply(res, arguments);
    };

    // res.on("finish",function(chunk){
    //     if (chunk){
    //         chunks.push(chunk);
    //     }


    // })

    res.end =  function (chunk){
        if (chunk){
            chunks.push(chunk);
        }
        
        //check if it's buffer so you can concat
        const isBuffer = Buffer.isBuffer(chunk)

        if(isBuffer){
            var body = Buffer.concat(chunks).toString('utf8');
            message = body;
            //console.log(req.path, body);

            const { rawHeaders, headers, httpVersion, method, socket, url, baseUrl } = req;
            const { remoteAddress, remoteFamily } = socket;
            const {statusMessage, statusCode} = req.res
            
            //console.log(req.res)

            //create new watch

            let newWatch = {
                method,
                occured: started,
                route:`${baseUrl}${url}`,
                status: statusCode.toString(),
                statusMessage: "",
                remoteAddress: remoteAddress.toString() ,
                remoteFamily: remoteFamily.toString(),
                duration: (Date.now() - requestStart).toFixed(4).toString(),//converts to 6 decimal places
                host: headers["host"],
                payload: JSON.stringify(req.body),
                response: JSON.stringify(message),
                headers: JSON.stringify(headers),
                started: started,
                finished: new Date()
            }

            tengriBody = newWatch;

        }

        //console.log(message)

        oldEnd.apply(res, arguments);
    };

    await next();

    if(Object.entries(tengriBody).length > 0){
        tengriBody.statusMessage = req.res.statusMessage;

        createNewWatch(tengriBody).then(()=>{
            console.log("new watch created")
        }).catch(err=>{
            //console.log(err.message)
        })
    }
    
}
module.exports = { tengri, init }