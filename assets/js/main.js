const btnGenerate = document.getElementById("btnGenerate");
const btnCopy = document.getElementById("btnCopy");

const passLength = document.getElementById("passLenght");
const upperCase = document.getElementById("upperCase");
const lowerCase = document.getElementById("lowerCase");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");
const result = document.getElementById("result");

const getRandomLower = () => {
  const charLower = "abcdefghijlmnopqrstuvwxyz";
  return charLower[Math.floor(Math.random() * charLower.length)];
};

const getRandomUppercase = () => {
  const charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return charUpper[Math.floor(Math.random() * charUpper.length)];
};

const getRandomNumber = () => {
  const num = "0123456789";
  return num[Math.floor(Math.random() * num.length)];
};

const getRandomSymbol = () => {
  const symbols = "!@#$%^&*()[]{}=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
};

const randomChar = {
  lower: getRandomLower,
  upper: getRandomUppercase,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

btnGenerate.addEventListener("click", () => {
  const length = passLength.value;
  const hasLower = lowerCase.checked;
  const hasUpper = upperCase.checked;
  const hasNumber = number.checked;
  const hasSymbol = symbol.checked;

  result.value = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  );
});

const generatePassword = (lower, upper, number, symbol, length) => {
  let getPassword = "";

  const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(
    (item) => {
      return Object.values(item)[0];
    }
  );

  for (let i = 0; i < length; i++) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      getPassword += randomChar[funcName]();
    });
  }

  const finalyPasswd = getPassword.slice(0, length);
  return finalyPasswd;
};

btnCopy.addEventListener("click", () => {
  navigator.clipboard.writeText(result.value);
  alert("Texto copiado " + result.value);
});