// on window finished loading run the fuction that will display the snowboards
window.onload = function() {snowBoardLoop(),solidNav()}
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
	this.price = "$" + price
	this.image = image
}
// Creating the objects to go into an array
var jonesGreen = new newSnowboard("Jones", "Explorer Snowboard", "Men's", "2017/2018", "449.00", "img/jonesGreen.jpeg")
var burtonBlue = new newSnowboard("Burton", "Custom X Snowboard", "Men's", "2017/2018", "749.00", "img/burtonBlue.jpeg")
var jonesWood = new newSnowboard("Jones", "Flagship Snowboard", "Men's", "2017/2018", "599.00", "img/jonesWood.jpeg")
var jonesPurple = new newSnowboard("Jones", "Dream Catcher Snowboard", "Women's", "2017/2018", "449.00", "img/jonesPurple.jpeg")
var libColorful = new newSnowboard("Lib Tech", "Pro Horsepower Blunt Snowboard", "Men's", "2017/2018", "599.00", "img/libColorful.jpeg")
var arborWood = new newSnowboard("Arbor", "Wasteland System Rocker Snowboard", "Men's", "2017/2018", "599.00", "img/arborWood.jpeg")
var arborTree = new newSnowboard("Arbor", "Bryan Iguchi Pro Camber Snowboard", "Men's", "2017/2018", "599.00", "img/arborTree.jpeg")
var nicheBlack = new newSnowboard("NICHE", "Story Snowboard", "Men's", "2017/2018", "579.00", "img/nicheBlack.jpeg")
var nicheGrey = new newSnowboard("NICHE", "Minx Snowboard", "Women's", "2017/2018", "419.00", "img/nicheGrey.png")
var capitaWhite = new newSnowboard("CAPiTA", "Mercury Snowboard", "Uni-Sex", "2019", "549.95", "img/capitaMercury.jpg")
var arborTerrapin = new newSnowboard("Arbor", "Terrapin Snowboard", "Uni-Sex", "2019", "499.99", "img/arborTerrapin.jpg")
var libRice = new newSnowboard("Lib Tech", "T.Rice Orca Snowboard", "Men's", "2019", "599.95", "img/libTechRice.jpg")
var yesStandard = new newSnowboard("yes", "Standard Snowboard", "Men's", "2019", "499.95", "img/yesStandard.jpg")
// creating the empty array
var snowboardArray = []
// Pushing all the objects into the array
snowboardArray.push(jonesGreen, burtonBlue, jonesWood, jonesPurple, libColorful, arborWood, arborTree, nicheBlack, nicheGrey)
snowboardArray.push(capitaWhite, libRice, arborTerrapin)

// Setting a variable base line for the index increasing by 6
var indexUpSix = 6

// selling your own board
function sellPost() {
	// clearing the snowboards to refresh and allowing the newly added board to appear first
	document.getElementById("snowboards").innerHTML = ""

	var brandSell = document.getElementById("brandSell").value
	var boardSell = document.getElementById("boardSell").value
	var genderSellOption = document.getElementById("genderSell").selectedIndex
	var genderSellSelected = document.getElementsByClassName("gender")
	var genderSell = document.getElementById("genderSell")[genderSellOption].value
	var yearSell = document.getElementById("yearSell").value
	var priceSell = document.getElementById("priceSell").value
	// adding 2 decmial places to the price of board
	priceSell = Number(priceSell).toFixed(2)
	var imageSell = document.getElementById("imgSell").value

	// adding a blank img snowboard if user does not provide one
	if(imageSell == "") {
		imageSell = "img/blankSnowboard.png"
	}

	// if the user fails to provide the required information then the snowboard wont be posted
	if(brandSell == "" || boardSell == "" || yearSell == "" || priceSell == "") {
		var requiredFields = document.getElementById("requiredFields")
		requiredFields.innerText = "* Please fill in required fields *"
		requiredFields.style.color = "red"
		document.getElementById("brand").style.color = "red"
		document.getElementById("board").style.color = "red"
		document.getElementById("year").style.color = "red"
		document.getElementById("price").style.color = "red"

		if (document.getElementById("yearSell").value <= "1800") {
			document.getElementById("formatYear").style.color = "red"
		}
		if (document.getElementById("yearSell").value >= "1800") {
			document.getElementById("formatYear").style.color = "black"
		}
		if(document.getElementById("brandSell").value !== "") {
			document.getElementById("brand").style.color = "black"
		}
		if(document.getElementById("boardSell").value !== "") {
			document.getElementById("board").style.color = "black"
		}
		if(document.getElementById("yearSell").value !== "") {
			document.getElementById("year").style.color = "black"
		}
		if(document.getElementById("priceSell").value !== "") {
			document.getElementById("price").style.color = "black"
		}
		
		return
	}


	var userBoardSell = new newSnowboard(brandSell, boardSell, genderSell, yearSell, priceSell, imageSell)

	snowboardArray.unshift(userBoardSell)

	// calling the loop function that goes through the array and creates the elements to hold the infomation in the objects
	snowBoardLoop()
	var sellForm = document.getElementById("sellBoard")
	hide("sellBoard")
	document.getElementById("formatYear").style.color = "black"
	document.getElementById("brand").style.color = "black"
	document.getElementById("board").style.color = "black"
	document.getElementById("year").style.color = "black"
	document.getElementById("price").style.color = "black"
}

// the function that loops through the snowboardArray to allow for posting them to the website
function snowBoardLoop() {
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
	buyButton.setAttribute("onclick", "addToCart()")
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

// Showing 6 snowboards at a time and 6 more when clicking show more button
function showMore() {
	document.getElementById("itemNum").innerHTML = ""
	document.getElementById("snowboards").innerHTML = ""
	indexUpSix += 6
	var length = snowboardArray.length

	if(indexUpSix > length) {
		indexUpSix = length
	}
	// showing the number of items showing per page
	document.getElementById("itemNum").innerHTML = "<p class='m-2'>" + indexUpSix + " of " + length + "</p>"
	// calling the loop function that goes through the array and creates the elements to hold the infomation in the objects
	snowBoardLoop()
}

// The function to add a snowboard to your shopping cart
var cart = []
var priceInCart = []

function addToCart() {
	shoppingCart.innerHTML = ""
	var targetEle = event.target
	var priceStr = targetEle.parentElement.getElementsByClassName("priceH5")[0].innerText
	priceStr = priceStr.replace("$", "").replace(",", "")
	
	priceInCart.push(Number(priceStr))
	
	var boardToCart = targetEle.parentElement.innerHTML
	targetEle.innerText = "Item Added"
	targetEle.setAttribute("onclick", "")
	cart.push(boardToCart)
	
	// creating the function to use in the reduce method
	function add(a, b) {
		return a + b
	}

	// using reduce to get the sum of the cart array and then using toLocalString to add in commas when over a thousand
	var total = priceInCart.reduce(add, 0).toLocaleString("en", {minimumFractionDigits: 2})
	

	console.log(total)

	// showing the number of items in users shopping cart
	var numItems = document.createElement("p")
	numItems.innerHTML = "Your cart has " + cart.length + " items in it! <i class='fas fa-chevron-circle-up fa-2x cart-icon'" + "onclick=" + "hide('shoppingCart')" + "></i>"
	if(cart.length == 1) {
		numItems.innerText = ""
		numItems.innerHTML = "Your cart has " + cart.length + " item in it! <i class='fas fa-chevron-circle-up fa-2x cart-icon'" + "onclick=" + "hide('shoppingCart')" + "></i>"
	}
	shoppingCart.appendChild(numItems)

	// if the cart has at least one item in it then show the price total
	if(cart.length >= 1) {
		var priceWrap = document.createElement("div")
		priceWrap.style.width = "100%"
		priceWrap.style.height = "50px"
		priceWrap.style.borderBottom = "1px solid black"
		var priceTotal = document.createElement("h5")
		priceTotal.id = "cartTotal"
		priceTotal.style.paddingTop = "10px"
		priceTotal.style.textAlign = "center"
		priceTotal.style.width = "100%"
		shoppingCart.appendChild(priceWrap)
		priceWrap.appendChild(priceTotal)
		priceTotal.innerText = "Total = $" + total
		
	}
	
	// a for loop to add the board to the cart
	for(var i = 0; i < cart.length; i++) {
		var newBoardCart = document.createElement("div")
		newBoardCart.classList.add("board-cart")
		newBoardCart.innerHTML = cart[i]
		shoppingCart.appendChild(newBoardCart)
	}
}

// Show your shopping cart function
function showCart() {
	hide("shoppingCart")
	if(cart == "") {
		shoppingCart.innerHTML = ""
		var newP = document.createElement("p")
		newP.style.minWidth = "300px"
		newP.innerHTML = "Your cart has " + cart.length + " items in it! <i class='animated bounce fas fa-chevron-circle-up fa-2x cart-icon'" + "onclick=" + "hide('shoppingCart')" + "></i>"
		shoppingCart.appendChild(newP)
	}
	// shoppingCart.style.display = "block"
}

// The function that shows/hides the form to sell your own board
function sellForm() {
	document.getElementById("requiredFields").innerText = ""

	hide("sellBoard")
	
}

// showing the hidden text by targeting the element that has been clicked on and removing the class of ellipsis
function showText() {
		var target = event.target
		target.classList.remove("ellipsis")
		
	}

// The fuction that closes the sell form and the cart when the home button is clicked on
function home() {
	document.getElementById("shoppingCart").classList.add("hide")
	document.getElementById("sellBoard").classList.add("hide")
}

// On scroll the text will go back to being hidden
function hideText() {
	var ellipsis = document.getElementsByTagName("h5")
	for(var i = 0; i < ellipsis.length; i++) {
		ellipsis[i].classList.add("ellipsis")
	}
}

// hidding the dropdown menu when you click on a link
function hideDropMenu() {
	var navbar = document.getElementById("navbarNavAltMarkup")
	navbar.style.display = "none"
	navbar.classList.remove("show")
	navbar.classList.remove("fadeOutDown")
	navbar.classList.remove("fadeOutUp")
}

// showing the dropdown menu
function showDropMenu() {
	document.getElementById("shoppingCart").classList.add("hide")
	var navbar = document.getElementById("navbarNavAltMarkup")
	if(navbar.style.display === "block") {
	 	navbar.classList.add("fadeOutUp")
		navbar.classList.remove("fadeOutDown")
		setTimeout(function(){
				navbar.style.display = "none"
			}, 300)
			
	} else if(navbar.style.display === "none") {
		navbar.style.display = "block"
		navbar.classList.add("fadeOutDown")
		navbar.classList.remove("fadeOutUp")
	}
	
}

// function to toggle class "hide"
function hide(id) {
	
	var el = document.getElementById(id)
	var classList = document.getElementById(id).classList

	if(classList.contains("hide") === true) {
		el.classList.remove("fadeOutUp")
		el.classList.remove("hide")
		el.classList.add("animated")
		el.classList.add("fadeInDown")
		} else if(classList.contains("hide") === false) {
			setTimeout(function(){
				el.classList.add("hide")
			 }, 1000)
			el.classList.add("fadeOutUp")
		}	
}

// Dynamic hamburger Icon for navigation
$(document).ready(function(){
	$('#nav-icon1, #home, #cart, #sell').click(function(){
		$('#nav-icon1').toggleClass('open')
	})
})

// var i = 0
// // Showing 6 snowboards at a time and 6 more when clicking show more button
// function nextBtn() {
// 	document.getElementById("backBtn"). innerHTML = "<p class='m-2'><i class='fa fa-angle-double-left'></i> Back</p>"
// 	document.getElementById("showMore").innerHTML = ""
// 	document.getElementById("itemNum").innerHTML = ""
// 	document.getElementById("snowboards").innerHTML = ""
// 	indexUpSix += 6
// 	var length = snowboardArray.length
	
// 	if(indexUpSix > length) {
// 			indexUpSix = length
// 		}

// 	// showing the number of items showing per page
// 	document.getElementById("itemNum").innerHTML = "<p class='m-2'>" + indexUpSix + " of " + length + "</p>"

// 	i += 6
// 	if(i >= length) {
// 		i = length - 6
// 	}
	
// 	// calling the loop function that goes through the array and creates the elements to hold the infomation in the objects
// 	snowBoardLoop()
// 	return i
// }

// function backBtn() {
// 	var i = nextBtn()
// 	console.log(i)
// 	document.getElementById("showMore").innerHTML = ""
// 	document.getElementById("snowboards").innerHTML = ""
// 	indexUpSix -= 6
// 	var length = snowboardArray.length

// 	if(indexUpSix > length) {
// 		indexUpSix = length
// 	}
	
// 	i -= 6
// 	if(i <= 6) {
// 		i = 0
// 		indexUpSix = 6
// 		document.getElementById("showMore").innerHTML = "<p class='m-0'>Show More</p><p><i class='fa fa-3x fa-angle-double-down'></i></p>"
// 	}
// 	// showing the number of items showing per page
// 	document.getElementById("itemNum").innerHTML = "<p class='m-2'>" + indexUpSix + " of " + length + "</p>"
	
// 	// calling the loop function that goes through the array and creates the elements to hold the infomation in the objects
// 	snowBoardLoop()
// }