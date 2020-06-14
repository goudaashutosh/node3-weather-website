const request = require("request")

const geoforecast=(queryData,callback)=>{

    const url = 'http://api.weatherstack.com/current?access_key=4f4cbaace9189cfcd8fbbd1fa71b8d1d&query='+queryData+''
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback('Unable to connect internet',undefined)
        }else {
           callback(undefined,response.body.current.weather_descriptions)
        }
    })
}
module.exports=geoforecast