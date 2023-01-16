document.getElementById("input").addEventListener("focus", function () {
  this.value = "";
});

//Function to check if the entered text is a palindrome
function isPalindrome() {
  const input = document.getElementById("input").value;
  const cleanedString = input.replace(/\s+/g, "").toLowerCase();
  const result = cleanedString === cleanedString.split("").reverse().join("");
  const resu = document.getElementById("result");
  setTimeout(() => {
    resu.innerHTML = result;
    if (result) {
      resu.style.color = "green";
    } else {
      resu.style.color = "red";
    }
    setTimeout(() => {
      resu.innerHTML = "";
    }, 1000);
  }, 2000);
}

//Event listener to the button
document.querySelector(".button").addEventListener("click", function () {
  document.querySelector(".robot").style.display = "block";
  isPalindrome();
});

//Hiding the robot class
document.querySelector(".robot").style.display = "none";
