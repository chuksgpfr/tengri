//check if there's "no-cache" in request header
//if there's none, add it.
//we are adding it so testing from browsers will return body (browser caches API request and returns 304)


const noCache = (req)=>{
    const { rawHeaders, headers } = req;

    //removing cache from main headers
    headers["cache-control"] = "no-cache"

    //removing cache from raw headers
    const cacheEnabled = rawHeaders.includes("no-cache")

    if(!cacheEnabled){
        var index = rawHeaders.indexOf("max-age=0");
        if (~index) {
            rawHeaders[index] = "no-cache";
        }
    }

}



module.exports = noCache;

