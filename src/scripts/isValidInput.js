function isValidInput(input) {
  const pattern = /.*\S.*/;

  return pattern.test(input);
}

export default isValidInput;
