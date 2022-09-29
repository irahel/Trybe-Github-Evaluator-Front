export interface darkModeProps{  
  setDarkMode?: Function,
  darkMode: boolean
}

export let loadDarkState = () => {
    const json = localStorage.getItem("site-dark-mode");
    return json == null? true : JSON.parse(json as string)
}

export let setDarkState = (darkModeState: boolean) => {
  if (darkModeState) {
    document.body.classList.remove("bg-trybelight");
    document.body.classList.add("bg-trybe");        
  } else {
    document.body.classList.remove("bg-trybe");
    document.body.classList.add("bg-trybelight");
  }
  const json = JSON.stringify(darkModeState);
  localStorage.setItem("site-dark-mode", json);
}