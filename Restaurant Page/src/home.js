const createHome = () => {
  const home = document.createElement("div");
  home.classList.add("home");
  const logFile = console.log("hello!");
  const restaurantBanner = document.createElement("img");
  restaurantBanner.src = "./restaurantBanner.jpg";
  restaurantBanner.alt = "Restaurant Banner";

  home.appendChild(restaurantBanner);

  return {
    home,
    logFile,
  };
};

export default createHome;
