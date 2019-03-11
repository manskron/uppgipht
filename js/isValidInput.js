function isValidInput(title, desc) {
  let pattern = /.*\S.*/;

  return pattern.test(title) && pattern.test(desc);
}

export default isValidInput;
