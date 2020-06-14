console.log('Cllient side js file')

const formEle = document.querySelector('form')
const inputEle = document.querySelector('input') 
const locationDetails=document.querySelector('#locationD')

const forecast=document.querySelector('#forecast')
formEle.addEventListener('submit', (e) => {
    locationDetails.textContent='Loading..'
    forecast.textContent=''
    e.preventDefault()
    fetch('/weather?address=' + inputEle.value).then((response) => {

        response.json().then((data) => {
            if (data.error) {
                return console.log('unable to fetch forecast')
            }
            else{
                locationDetails.textContent=data.location
                forecast.textContent=data.forecast
            }
        })
    })
    //console.log()
})
