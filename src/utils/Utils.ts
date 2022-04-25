export const randomTheme = () => {
  const themes = [
    { value: "primary" },
    { value: "danger" },
    { value: "succes" },
    { value: "warning" },
    { value: "info" },
    { value: "pink" },
  ];
  const index = Math.floor(Math.random() * 5);

  return themes[index].value;
};

export const findUpper = (string: string) => {
  let extractedString = [];

  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) === string.charAt(i) && string.charAt(i) !== " ") {
      extractedString.push(string.charAt(i));
    }
  }
  if (extractedString.length > 1) {
    return extractedString[0] + extractedString[1];
  } else {
    return extractedString[0];
  }
};
