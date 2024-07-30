// DON'T CHANGE THESE LINE
window.myBadAssGarage = 'dougies-palace';
if (myBadAssGarage)
  document.querySelector('#garage-name').innerText = myBadAssGarage.replace(
    /-/g,
    ' ',
  );
// DON'T CHANGE THESE LINE

const url = "https://garage.api.lewagon.com/dougies-palace/cars";

// //////////////////////
// PSEUDOCODE
// //////////////////////

// Get all the cars
const carsList = document.querySelector(".cars-list");
// select the html element where you want to add new cars(carsLIST)
// fetch the cars from the garage api 
const getCars = (data) => {
  console.log(data);
  carsList.innerHTML = "";
  data.forEach((car) => {
    carsList.insertAdjacentHTML("beforeend", `
        <div class="car">
          <div class="car-image">
            <img src="http://loremflickr.com/280/280/${car.brand},${car.model}" />
          </div>
          <div class="car-info"
            <h4>${car.brand} ${car.model}</h4>
            <p><strong>Owner:</strong> ${car.owner}</p>
            <p><strong>Plate:</strong> ${car.plate}</p>
          </div>
        </div> 
      `)
  });
};

const displayCars = () => {
  fetch(url)
    .then (response => response.json())
    .then ((data) => {getCars(data)});
}
// iterate over the cars
// create the car's card for each car, inserting in the previously selected html elemnt
displayCars();
// //////////////////////



// Add a new car
// //////////////////////TO STORE OUR CAR IN THE API
// SELECT the values entered, that would be the html elements of input with corresponding ids
const addCar = (event) => {
  event.preventDefault();
const brand = document.querySelector("#brand").value;
const model = document.querySelector("#model").value;
const plate = document.querySelector("#plate").value;
const owner = document.querySelector("#owner").value;

// const newCar = {
//   brand: brand,
//   model: model,
//   plate: plate,
//   owner: owner, 
// }

const newCar = { brand, model, plate, owner }

const options = {
  method: 'POST',
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(newCar)
}
fetch(url, options)
  .then(response => response.json())
  .then((data) => {
    console.log(data)
    displayCars()
  })
};
const submitBtn = document.querySelector("#submit-btn");
submitBtn.addEventListener("click", addCar);

//ALSO select the add card button
// step 2 , listen to a click on the button
// step 3 , fetch with post 
// in the .then part, console.log for checking what we sent
// display all the cars 
