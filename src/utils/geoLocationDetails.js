const request=require('request')
const geoLocationDetails=(address,callback)=>
{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoiYXNodXRvc2hnb3VkYSIsImEiOiJja2Jic2d4MHowNGZ3MndwM3lsdGtlZXVlIn0.-TRSSXd3pkPcI0_XEQaV4Q&limit=1'
    request({url:url,json:true},(error,response)=>{
        if(error)
        {
            callback('Unable to connect internet',undefined)
        }else if(response.body.features.length===0){
            callback('unable to find location',undefined)
        }else{
            callback(undefined,response.body.features[0].center)
        }
    })
}
module.exports= geoLocationDetails