const baseUrl = "http://api.airvisual.com/v2/city";
const key = "7403a02f-d63f-46d0-9d39-3c34e76d5bdf";

const userCity = document.querySelector('.city');
const userState = document.querySelector('.state');
const form = document.querySelector('.form');
const submitButton = document.getElementsByClassName('.btn');
const paragraph = document.querySelector('p');


form.addEventListener('submit', getAQI);

function getAQI(event){
    event.preventDefault();
    let url = `${baseUrl}?city=${userCity.value}&state=${userState.value}&country=USA&key=${key}`;


    if(userCity.value)

    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        console.log(json);
        displayAQI(json);
    })
    .catch(function(error){
        paragraph.innerText = "Um...";
        smallPara.innerText = "what's that?"
    })

}

function displayAQI(json){
    
    let smallPara = document.getElementById('smallPara');
    let AQI = json.data.current.pollution.aqius;
    console.log(AQI);
    
    

    if(AQI <= 50){
        paragraph.innerText = `${AQI}!`;
        smallPara.innerText = "Nice."
        
    }

        else if(AQI > 50 && AQI < 100){
            paragraph.innerHTML = `${AQI}!`;
            smallPara.innerHTML = "Eh. Average."
    }

        else if(AQI >= 100 && AQI < 200){
            paragraph.innerHTML = `${AQI}!`;
            smallPara.innerHTML = "Not good at all."

    }
        else if(AQI >= 200){
            paragraph.innerHTML = `${AQI}!`;
            smallPara.innerHTML = "Uh-oh."
        }
 
}

