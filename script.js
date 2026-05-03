const cars = {
  "BMW E39": {
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/BMW_E39_front.jpg",
    parts: [
      {name: "Engine", price: "$3000"},
      {name: "Wheels", price: "$800"},
      {name: "Headlights", price: "$400"}
    ]
  },
  "Mercedes W210": {
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Mercedes_W210.jpg",
    parts: [
      {name: "Engine", price: "$3200"},
      {name: "Wheels", price: "$900"},
      {name: "Interior", price: "$1500"}
    ]
  },
  "Audi A4 B5": {
    image: "https://upload.wikimedia.org/wikipedia/commons/1/15/Audi_A4_B5.jpg",
    parts: [
      {name: "Engine", price: "$2800"},
      {name: "Turbo", price: "$1200"},
      {name: "Brakes", price: "$600"}
    ]
  }
};

function toggleList() {
  const list = document.getElementById("carList");
  list.style.display = list.style.display === "none" ? "block" : "none";
}

function searchCar() {
  let input = document.getElementById("search").value.toLowerCase();
  let items = document.querySelectorAll("#carList li");

  items.forEach(item => {
    item.style.display = item.innerText.toLowerCase().includes(input)
      ? "block"
      : "none";
  });
}

function openCar(name) {
  const car = cars[name];

  document.getElementById("modal").classList.remove("hidden");
  document.getElementById("carTitle").innerText = name;
  document.getElementById("carImage").src = car.image;

  const list = document.getElementById("partsList");
  list.innerHTML = "";

  car.parts.forEach(p => {
    let li = document.createElement("li");
    li.innerText = `${p.name} - ${p.price}`;
    list.appendChild(li);
  });
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}
