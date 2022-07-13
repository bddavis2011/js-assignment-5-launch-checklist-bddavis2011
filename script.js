window.addEventListener("load", function() {
    let list = document.getElementById("faultyItems")
    list.style.visibility = "hidden"
    let form = document.querySelector("form")
    form.addEventListener("submit", (event) => {
        event.preventDefault()
        let pilot = document.querySelector('input[name=pilotName]').value
        let copilot = document.querySelector('input[name=copilotName]').value
        let fuelLvl = document.querySelector('input[name=fuelLevel]').value
        let cargoMassKG = document.querySelector('input[name=cargoMass]').value
        formSubmission(document, pilot, copilot, fuelLvl, cargoMassKG)
    })

   let listedPlanets;
   let listedPlanetsResponse;
    listedPlanetsResponse = myFetch()
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       let planet = pickPlanet(listedPlanets)
       addDestinationInfo(planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image)
   })

});