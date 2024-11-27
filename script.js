//your JS code here. If required.
window.onload = function convertToCapitalCase() {
	const elements = document.getElementById("fname").focus();
	 elements.forEach(element => {
		 const capitalizedText = elements
      .toLowerCase()
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    element.textContent = capitalizedText;
	 })
}