
function changeAboutMe(){
    let radio1 =
    document.getElementById('aboutMeRadio');
    let radioStatus =
    document.querySelector(".hideable");
    radio1.addEventListener("change", (e) => {
      radioStatus.classList.aboutMeRadio("aboutView");
  });
}
