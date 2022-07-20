function addDestinationInfo(name, diameter, star, distance, moons, imageUrl) {
    document.getElementById("missionTarget").innerHTML += `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
    `
}
 
function validateInput(testInput) {
    if (testInput.length <= 0) {
     return "empty"
    }
    if (Number(testInput) + 0 == Number(testInput)) {
     return "number"
    }
    return "NAN"
 }
 function formSubmission (document, pilot, copilot, fuelLvl, cargoMassKG) {
    let array = [pilot, copilot, fuelLvl, cargoMassKG]
    let list = document.getElementById("faultyItems")
    let validation = []
     for (let i = 0; i < array.length; i++) {
         validation.push(validateInput(array[i]))
         if (validation[i] == "null") {
            alert("All fields are required!")
         }
     }
     if (validation[0] === "number" || validation[1] === "number") {
         alert("Make sure to enter valid information for each field!")
     }
     if (validation[2] === "NAN" || validation[3] === "NAN") {
         alert("Make sure to enter valid information for each field!")
     }
     let pilotStatus = "Pilot Ready."
     let copilotStatus = "Copilot Ready."
     let fuelStatus = "Fuel level is high enough for launch."
     let cargoStatus = "Cargo level is low enough for launch."
     let launchStatus = document.getElementById("launchStatus")
     if(fuelLvl < 10000) {
        launchStatus.style.color = "Red"
        fuelStatus = "The fuel is too low!"
        launchStatus.innerHTML = "Shuttle not ready for launch."
     }
     if(cargoMassKG > 10000) {
        launchStatus.style.color = "Red"
        cargoStatus = "The cargo is too heavy!"
        launchStatus.innerHTML = "Shuttle not ready for launch."
     } if(cargoMassKG < 10000 && fuelLvl > 10000) {
        launchStatus.style.color = "Black"
        launchStatus.innerHTML = "Shuttle is ready for launch!"
     }
     list.innerHTML = `<div  id="faultyItems" data-testid="faultyItems">
   <ol>
       <li id="pilotStatus" data-testid="pilotStatus">${pilotStatus}</li>
       <li id="copilotStatus" data-testid="copilotStatus">${copilotStatus}</li>
       <li id="fuelStatus" data-testid="fuelStatus">${fuelStatus}</li>
       <li id="cargoStatus" data-testid="cargoStatus">${cargoStatus}</li>
   </ol>
</div>`
list.style.visibility = "visible"
}
 
async function myFetch() {
    let planetsReturned;
 
    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
        return response.json()
        });
 
    return planetsReturned;
}
 
function pickPlanet(planets) {
        let planet = planets[Math.floor(Math.random() * planets.length)];
        return planet
}
 
module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;