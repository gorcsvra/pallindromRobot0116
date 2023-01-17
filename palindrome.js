//Function to check if the entered text is a palindrome
function isPalindrome() {
  const input = document.getElementById("input").value;
  const cleanedString = input.replace(/\s+/g, "").toLowerCase();
  const result = cleanedString === cleanedString.split("").reverse().join("");
  const resu = document.getElementById("result");
  const robot = document.querySelector(".robot");
  setTimeout(() => {
    resu.innerHTML = result;
    if (result) {
      resu.style.color = "green";
    } else {
      resu.style.color = "red";
    }
    robot.style.display = "block";
    setTimeout(() => {
      resu.innerHTML = "";
      robot.style.display = "none";
    }, 1000);
  }, 2000);
}

//Event listener to the button
document
  .querySelector(".inputbutton button")
  .addEventListener("click", function () {
    isPalindrome();
  });

//Hiding the robot class
document.querySelector(".robot").style.display = "none";
