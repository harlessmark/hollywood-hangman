export default (state = false, { type }) => {
  if (type === "IS_MOBILE") return true;
  return state;
};
