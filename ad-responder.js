const desktopAdContainer = document.querySelector(".top-leaderboard");
const mobileAdContainer = document.querySelector(".top-leaderboard-mobile");
    
let adState = {
    mobile = false,
    desktop = false
};
    

const removeMobileAd = () => {
        adState.mobile = false;    
};
const insertMobileAd = () => {
var newItem = document.createElement("div");
var textNode = document.createTextNode("Ad Code");
newItem.appendChild(textNode);
mobileAdContainer.insertAdjacentElement("afterend", newItem);
adState.desktop = true;
};
const removeDesktopAd = () => {
adState.desktop = false;
};
const insertDesktopAd = () => {     
};

  window.addEventListener("resize", (e) => {
    if (window.innerWidth >= 1024) {
      removeMobileAd();
      adState.desktop ? null : insertDesktopAd();
    } else {
      removeDesktopAd();
      adState.mobile ? null : insertMobileAd();
    }
  });

