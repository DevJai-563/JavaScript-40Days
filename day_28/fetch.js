let p = fetch("https://goweather.herokuapp.com/weather/saharanpur");
p.then((response)=>{
    console.log(response.ok)
    console.log(response.status)
    return response.json()}
).then((response)=>{
    console.log(response)

    let objW = response
    // console.log(objW.temeprature)


    let temp = document.getElementById('temp')
    temp.innerHTML = `Temp is ${objW.temperature}`
})
