const placeholderImage = "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80";

const cars = [
  { name: "BMW 3 Series (E36)", year: 1995, image: "https://upload.wikimedia.org/wikipedia/commons/2/20/BMW_E36_front_20080115.jpg", parts: [{ name: "Engine", price: "$2600" }, { name: "Wheels", price: "$700" }, { name: "Suspension", price: "$650" }] },
  { name: "BMW 5 Series (E39)", year: 1996, image: "https://upload.wikimedia.org/wikipedia/commons/8/87/BMW_E39_523i_front_20080115.jpg", parts: [{ name: "Engine", price: "$3000" }, { name: "Wheels", price: "$800" }, { name: "Headlights", price: "$400" }] },
  { name: "BMW Z3", year: 1996, image: "https://upload.wikimedia.org/wikipedia/commons/0/0d/BMW_Z3_roadster.jpg", parts: [{ name: "Convertible Top", price: "$900" }, { name: "Seats", price: "$1100" }, { name: "Brakes", price: "$550" }] },
  { name: "BMW 7 Series (E38)", year: 1995, image: "https://upload.wikimedia.org/wikipedia/commons/e/e5/BMW_E38_front_20080819.jpg", parts: [{ name: "Engine", price: "$3900" }, { name: "Transmission", price: "$2100" }, { name: "Electronics", price: "$1300" }] },

  { name: "Mercedes C-Class (W202)", year: 1995, image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Mercedes-Benz_W202_front_20081222.jpg", parts: [{ name: "Engine", price: "$2900" }, { name: "Wheels", price: "$850" }, { name: "Interior", price: "$1300" }] },
  { name: "Mercedes E-Class (W210)", year: 1995, image: "https://upload.wikimedia.org/wikipedia/commons/1/14/Mercedes-Benz_W210_front_20080117.jpg", parts: [{ name: "Engine", price: "$3200" }, { name: "Wheels", price: "$900" }, { name: "Interior", price: "$1500" }] },
  { name: "Mercedes SLK (R170)", year: 1996, image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Mercedes-Benz_R170_front_20071228.jpg", parts: [{ name: "Roof Mechanism", price: "$1600" }, { name: "Brakes", price: "$700" }, { name: "Suspension", price: "$800" }] },
  { name: "Mercedes S-Class (W220)", year: 1998, image: "https://upload.wikimedia.org/wikipedia/commons/7/79/Mercedes-Benz_W220_front_20090228.jpg", parts: [{ name: "Engine", price: "$4200" }, { name: "Air Suspension", price: "$2300" }, { name: "Dashboard", price: "$1400" }] },

  { name: "Audi A4 (B5)", year: 1995, image: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Audi_A4_B5_front_20071027.jpg", parts: [{ name: "Engine", price: "$2800" }, { name: "Turbo", price: "$1200" }, { name: "Brakes", price: "$600" }] },
  { name: "Audi A6 (C5)", year: 1997, image: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Audi_A6_C5_front_20080220.jpg", parts: [{ name: "Engine", price: "$3100" }, { name: "Transmission", price: "$1800" }, { name: "Lights", price: "$500" }] },
  { name: "Audi A8 (D2)", year: 1996, image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Audi_A8_D2_front_20080107.jpg", parts: [{ name: "Engine", price: "$4000" }, { name: "Quattro Drivetrain", price: "$2200" }, { name: "Interior", price: "$1700" }] },
  { name: "Audi TT (8N)", year: 1998, image: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Audi_TT_8N_front_20080222.jpg", parts: [{ name: "Turbo", price: "$1500" }, { name: "Body Kit", price: "$950" }, { name: "Exhaust", price: "$700" }] }
];

function renderCarList(listData = cars) {
  const list = document.getElementById("carList");
  list.innerHTML = "";

  listData.forEach((car, index) => {
    const li = document.createElement("li");
    li.innerText = `${car.name} - Released: ${car.year}`;
    li.onclick = () => openCar(index);
    list.appendChild(li);
  });
}

function toggleList() {
  const list = document.getElementById("carList");
  list.style.display = list.style.display === "none" ? "block" : "none";
}

function searchCar() {
  const input = document.getElementById("search").value.toLowerCase();
  const filtered = cars.filter(car => `${car.name} ${car.year}`.toLowerCase().includes(input));
  renderCarList(filtered);
}

function openCar(index) {
  const visibleItems = document.querySelectorAll("#carList li");
  const selectedText = visibleItems[index]?.innerText;
  const car = cars.find(c => selectedText && selectedText.includes(c.name));

  if (!car) return;

  document.getElementById("modal").classList.remove("hidden");
  document.getElementById("carTitle").innerText = `${car.name} (${car.year})`;

  const carImage = document.getElementById("carImage");
  carImage.src = car.image;
  carImage.onerror = () => {
    carImage.onerror = null;
    carImage.src = placeholderImage;
  };

  const list = document.getElementById("partsList");
  list.innerHTML = "";

  car.parts.forEach((p) => {
    const li = document.createElement("li");
    li.innerText = `${p.name} - ${p.price}`;
    list.appendChild(li);
  });
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}

renderCarList();
