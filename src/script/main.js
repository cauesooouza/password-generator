const pwdGen = function () {
  const pwd = [];
  let innerPWD = document.getElementById("pwd");
  let secure = document.querySelectorAll("input[type=radio]:checked");
  let copy = document.getElementById("copy");
  let input = document.getElementById("inputnumber").value;
  input = input - 1;

  copy.addEventListener("click", () => {
    navigator.clipboard.writeText(innerPWD.value);
  });

  if (input < 0) {
    alert("tamahno de sua senha não pode ser menor que 0");
  } else {
    for (let i = 0; i <= input; i++) {
      if (secure[0].value == 4) {
        let random = Math.floor(Math.random() * (126 - 33 + 1) + 33);
        pwd[i] = String.fromCharCode(random);
      } else if (secure[0].value == 3) {
        let random = Math.floor(Math.random() * (122 - 48 + 1) + 48);
        pwd[i] = String.fromCharCode(random);
      } else if (secure[0].value >= 2) {
        let random = Math.floor(Math.random() * (122 - 65 + 1) + 65);
        pwd[i] = String.fromCharCode(random);
      } else {
        let random = Math.floor(Math.random() * (126 - 33 + 1) + 33);
        pwd[i] = String.fromCharCode(random);
      }
    }
    return (innerPWD.value = pwd.join(""));
  }
};
