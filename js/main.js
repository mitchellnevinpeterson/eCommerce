// on window finished loading run the fuction that will display the snowboards
window.onload = function() {showMore(),solidNav()}
// On any type of scroll these functions will run
window.onscroll = function() {hideText(),solidNav()}
// Logging the page y offset with this function
function solidNav() {
	var yOffset = window.pageYOffset
	// Removing the background on the navbar if the window is at the absolute top
	if(yOffset == 0) {
		document.getElementsByClassName("navbar")[0].classList.remove("bg-light")
		document.getElementsByClassName("navbar")[0].classList.add("white-text")
	}
	if(yOffset > 0) {
		document.getElementsByClassName("navbar")[0].classList.remove("white-text")
		document.getElementsByClassName("navbar")[0].classList.add("bg-light")
	}
}
// creating the constructor notation that creates the objects
function newSnowboard(brand, name, sex, year, price, image) {
	this.brand = brand
	this.name = name
	this.sex = sex
	this.year = year
	this.price = price
	this.image = image
}
// Creating the objects to go into an array
var jonesGreen = new newSnowboard("Jones", "Explorer Snowboard", "Men's", "2017/2018", "$449.00", "img/jonesGreen.jpeg")
var burtonBlue = new newSnowboard("Burton", "Custom X Snowboard", "Men's", "2017/2018", "$749.00", "img/burtonBlue.jpeg")
var jonesWood = new newSnowboard("Jones", "Flagship Snowboard", "Men's", "2017/2018", "$599.00", "img/jonesWood.jpeg")
var jonesPurple = new newSnowboard("Jones", "Dream Catcher Snowboard", "Women's", "2017/2018", "$449.00", "img/jonesPurple.jpeg")
var libColorful = new newSnowboard("Lib Tech", "Pro Horsepower Blunt Snowboard", "Men's", "2017/2018", "$599.00", "img/libColorful.jpeg")
var arborWood = new newSnowboard("Arbor", "Wasteland System Rocker Snowboard", "Men's", "2017/2018", "$599.00", "img/arborWood.jpeg")
var arborTree = new newSnowboard("Arbor", "Bryan Iguchi Pro Camber Snowboard", "Men's", "2017/2018", "$599.00", "img/arborTree.jpeg")
var nicheBlack = new newSnowboard("NICHE", "Story Snowboard", "Men's", "2017/2018", "$579.00", "img/nicheBlack.jpeg")
var nicheGrey = new newSnowboard("NICHE", "Minx Snowboard", "Women's", "2017/2018", "$419.00", "img/nicheGrey.png")
// creating the empty array
var snowboardArray = []
// Pushing all the objects into the array
snowboardArray.push(jonesGreen, burtonBlue, jonesWood, jonesPurple, libColorful, arborWood, arborTree, nicheBlack, nicheGrey)
console.log(snowboardArray)

// Setting a variable base line for the index increasing by 6
var indexUpSix = 0
// Showing 6 snowboards at a time and 6 more when clicking show more button
function showMore() {
	document.getElementById("snowboards").innerHTML = ""
	indexUpSix += 6
	console.log(indexUpSix)
	console.log(snowboardArray.length)
	if(indexUpSix > snowboardArray.length) {
		indexUpSix = snowboardArray.length
	}
	console.log(indexUpSix)

	// creating the for loop that goes through the array and creates the elements to hold the infomation in the objects
	for(var i = 0; i < indexUpSix; i++) {
	// creating the new elments to hold the information from the objects created above
	var newCol = document.createElement("div")
	var newDiv = document.createElement("div")
	var snowboardImg = document.createElement("img")
	var brandH4 = document.createElement("h4")
	var nameH5 = document.createElement("h5")
	var sexH6 = document.createElement("h6")
	var yearH6 = document.createElement("h6")
	var priceH5 = document.createElement("h5")
	var buyButton = document.createElement("button")
	// creating the text nodes that go into the elements above
	var srcImage = snowboardArray[i].image
	console.log(srcImage)
	var txtBrand = document.createTextNode(snowboardArray[i].brand)
	var txtName = document.createTextNode(snowboardArray[i].name)
	var txtSex = document.createTextNode(snowboardArray[i].sex)
	var txtYear = document.createTextNode(snowboardArray[i].year)
	var txtPrice = document.createTextNode(snowboardArray[i].price)
	var txtButton = document.createTextNode("Add To Cart")
	// putting the text into the elements created above
	snowboardImg.src = srcImage
	brandH4.appendChild(txtBrand)
	nameH5.appendChild(txtName)
	sexH6.appendChild(txtSex)
	yearH6.appendChild(txtYear)
	priceH5.appendChild(txtPrice)
	buyButton.appendChild(txtButton)
	// adding classes to the elements that need them
	buyButton.className = "btn btn-outline-secondary btn-lg"
	snowboardImg.className = "img-responsive"
	newCol.className = "col-sm-4"
	priceH5.className = "priceH5"
	newDiv.className = "boardWrap"
	newDiv.appendChild(snowboardImg)
	newDiv.appendChild(brandH4)
	newDiv.appendChild(nameH5)
	newDiv.appendChild(sexH6)
	newDiv.appendChild(yearH6)
	newDiv.appendChild(priceH5)
	newDiv.appendChild(buyButton)
	newCol.appendChild(newDiv)
	snowboards.appendChild(newCol)
	// Adding the ellipsis css to the h5 when the name is too long
	nameH5.classList.add("ellipsis")
	nameH5.setAttribute("onclick", "showText()")
	}
}
// showing the hidden text by targeting the element that has been clicked on and removing the class of ellipsis
function showText() {
		var target = event.target
		console.log(target)
		target.classList.remove("ellipsis")
		
	}

// On scroll the text will go back to being hidden
function hideText() {
	var ellipsis = document.getElementsByTagName("h5")
	for(var i = 0; i < ellipsis.length; i++) {
		ellipsis[i].classList.add("ellipsis")
	}
}


