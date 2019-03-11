function setTheme(theme) {
  let themeElement = document.querySelector('#theme');
  if (theme === 'dark') {
    themeElement.textContent = `
      body, input {background-color: black;}
      h1, h2, h3, h4, h5, h6, p, label, button, input {color: white;}
      .todo__title {color: white}
      input[type="text"] {
      border-bottom: 1px solid rgb(187, 187, 187);
      margin-right: 5px;}
      .done > p,
      .done > h3 {
       color: rgb(127, 127, 127);
}`;
  } else {
    themeElement.textContent = '';
  }
}

export default setTheme;
