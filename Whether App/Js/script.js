function search() {
  let city = document.querySelector("input").value.trim();
  const hiddenElement = document.querySelectorAll('.same');

  if (city.length <= 0) {
    document.querySelector(".empty").style.display = "block";
    hiddenElement.forEach(ele => ele.style.display = "none");
    return;
  }

  document.querySelector(".empty").style.display = "none";
  const key = "b85f9919d43e511e45875a655b87115e";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data.cod !== 200) {
        alert("City not found!");
        hiddenElement.forEach(ele => ele.style.display = "none");
        return;
      }
      console.log(data)
      let temp = document.querySelector(".temp");
      let cityName = document.querySelector(".city");
      let humid = document.querySelector(".value");
      temp.textContent = `${Math.round(data.main.temp)}°C`;
      cityName.textContent = data.name;
      humid.textContent = data.main.humidity;

      hiddenElement.forEach(ele => ele.style.display = "block");
    })
    .catch(err => {
      alert("Network error, please try again!");
      console.error(err);
    });
  document.querySelector("input").value ="";
}
