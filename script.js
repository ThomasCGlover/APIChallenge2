const teamsUrl = "http://api.cfl.ca/v1/teams"
const standingsUrl = "http://api.cfl.ca/v1/standings/2019"
const key = '4ONu9LoTyNnwqUOsE9C5QEuIQ036pDZ6'
const urlWithKey = `${teamsUrl}?key=${key}`

const teamList = document.querySelector('ul');

function displayTeams(x){
    // let teamName = x.data.full_name;
    let teamLogo = x.data.images.logo_image_url;
    for(let i = 0; i < x.data.length; i++){
        let listItem = document.createElement("img");
        img.className = "list-group-item";
        listItem.src = teamLogo;
        teamList.appendChild(listItem);
        
    }
    
}
// write an async function to fetch the stats, etc.



fetch(urlWithKey)
.then(function(response){
    return response.json();
})
.then(function(json){
    displayTeams(json)
})