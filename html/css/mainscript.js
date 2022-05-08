

function showAboutMe(){
  let section = document.getElementById("authorBio")

  let buttonHide = document.querySelector(".aboutView")

    buttonHide.classList.replace("aboutView", "hideable")
      section.classList.replace("hideable", "aboutView")
}

function showJobExperience(){
// Assign variables by ID
  let section = document.getElementById("authorJobExperience")
// Assign variables by the selector it contains
  let buttonHide = document.querySelector(".aboutView")
// replace items in a specific classlist
    buttonHide.classList.replace("aboutView", "hideable")
      section.classList.replace("hideable", "aboutView")
}

function showJobSkills(){
  let section = document.getElementById("authorJobSkills")

  let buttonHide = document.querySelector(".aboutView")

    buttonHide.classList.replace("aboutView", "hideable")
      section.classList.replace("hideable", "aboutView")
}

function showCoreBeliefs(){
  let section = document.getElementById("authorCoreBeliefs")

  let buttonHide = document.querySelector(".aboutView")

    buttonHide.classList.replace("aboutView", "hideable")
      section.classList.replace("hideable", "aboutView")
}
