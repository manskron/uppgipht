function isValidInput(input) {
  let pattern = /.*\S.*/;

  return pattern.test(input);
}

export default isValidInput;
