const initialState = {
  title: "",
  displayTitle: "",
};

export default (state = initialState, { type, title, letter }) => {
  if (type === "ADD_TITLE") {
    const displayTitle = title.replace(/[a-z]/gi, "_");

    return { ...state, title, displayTitle };
  } else if (type === "CORRECT_GUESS") {
    const alpha = [..."qwertyuiopasdfghjklzxcvbnm"];
    const filtered = alpha.filter(az => az !== letter).join("");
    const re = new RegExp(`[${filtered}\\s\\d\\W]`, "gi");

    state.displayTitle = state.title.replace(re, "_");

    return { ...state, displayTitle: state.title.replace(re, "_") };
  } else return state;
};
