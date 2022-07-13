window.addEventListener("load", function() {
    let list = document.getElementById("faultyItems")
    list.style.visibility = "hidden"
    let form = document.querySelector("form")
    form.addEventListener("submit", (event) =>{
        event.preventDefault()
        let pilot = document.querySelector('input[name=pilotName]').value
        let copilot = document.querySelector('input[name=copilotName]').value
        let fuelLvl = document.querySelector('input[name=fuelLevel]').value
        let cargoMassKG = document.querySelector('input[name=cargoMass]').value
        formSubmission(document, pilot, copilot, fuelLvl, cargoMassKG)
    
        if (pilot.value == "" || copilot.value == "" || fuelLvl.value == "" || cargoMassKG.value == "") {
            alert ("All fields are required!")
        
        }
        if (fuelLvl.value == isNAN || cargoMassKG.value == isNAN) {
            alert ("Make sure to enter valid information for each field!")
        }
         
        
        
    });
 
   let listedPlanets;
   let listedPlanetsResponse = myFetch()
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
   }).then(function () {
       let planet = pickPlanet(listedPlanets)
       addDestinationInfo(planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image)
   });
   
});