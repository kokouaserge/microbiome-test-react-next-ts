//url for production
export let url: any = "";
if (process.env.NODE_ENV === "development") {
  url = "";
} else {
  url = window.location.host.split("/")[1];
  if (url) {
    url = `/${window.location.host.split("/")[1]}`;
  } else url = process.env.PUBLIC_URL; /// ADD YOUR CPANEL SUB-URL
}

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

// Logs out user
export const handleSignout = () => {
  localStorage.removeItem("accessToken");
};

//Function to validate and return errors for a form
export const checkForm = (formData: any) => {
  let errorState: any = {};
  Object.keys(formData).forEach((item) => {
    if (formData[item] === null || formData[item] === "") {
      errorState[item] = "This field is required";
    }
  });
  return errorState;
};

//Function that returns the first or first two letters from a name
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

// Set deadlines for projects
export const setDeadlineDays = (deadline: Date) => {
  var currentDate = new Date();
  var difference = deadline.getTime() - currentDate.getTime();
  var days = Math.ceil(difference / (1000 * 3600 * 24));
  return days;
};

//Percentage calculation
export const calcPercentage = (str1: any, str2: any) => {
  let result = Number(str2) / Number(str1);
  result = result * 100;
  return Math.floor(result);
};

export const truncate: any = (str: string, n: number) => {
  return str.length > n
    ? str.substr(0, n - 1) + " " + truncate(str.substr(n - 1, str.length), n)
    : str;
};
