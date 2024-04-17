
let reverseArr = pages.page.reverse(); /* reverses arr  */

let GlobalCt = 0;

let Scroll = 1;
let btns = {};
btns.next = function () {
	let cards = document.getElementsByClassName("card"); // collects cards on screen
	if (GlobalCt * scroll < pages.page.length) {
		console.log([scroll * 2, scroll * 2 - 1]);
		scroll++;
		console.log(scroll);

	} else {
		console.log("issue with overflow or there's no more items to display");
	}
}

btns.back = function () {
	scroll--;
}

btns.first = function () {
	scroll = 1;
}

btns.last = function () {
	scroll = pages.page.length / GlobalCt;
}

btn.pages = function (pageCt) {
	const vaildInputs = [3, 4, 6, 8, 9]; // stores acceptable inputs
	const vaildation = vaildInputs.includes(pageCt);
	const inputFix = vaildation == true ? null : pageCt = 6; // validates inputed value or puts it to 6
	let start = 0;
	if (Scroll !== 1) {
		start = Scroll * (pageCt - 1);
	}

	GlobalCt = pageCt;
	let placement = [start, Scroll * (pageCt * 2)]; // [start, end] index = start, index < end

	let grid = document.querySelector(".main"); // store .main into const value
	let contentStr = ""; // stores values into const var and then changes DOM onc

	// adds cards in
	for (let index = 0; index < pageCt && index < pages.page.length; index++) {
		if (index == 0) {
			contentStr = "<div class = 'card'> </div>";
		} else {
			contentStr += "<div class = 'card'> </div> ";
		}
	}
	grid.innerHTML = contentStr; // sets the grid to the final product

	let cards = document.getElementsByClassName("card"); // collects cards on screen

	// card elements
	const imgTag = "<img class ='card-img'/>";
	const titleTag = "<h2 class = 'card-title'> <a class = 'card-link' href = '#'></a> </h2>";
	const dateTag = "<h4 class = 'card-date'> </h4>";
	const desrciptionTag = "<p class = 'card-description'></p>";
	const tagsGroup = "<ul class = 'card-tags'> </ul>";

	// controls height and width
	for (let index = 0; index < cards.length; index++) {
		if (cards.length == null) {
			cards = [];
		} // safely exit
		cards[index].innerHTML = imgTag + titleTag + dateTag + desrciptionTag + tagsGroup;
		if (pageCt % 2 == 1 || pageCt == 6) {
			cards[index].style.width = "28%";
		} else {
			cards[index].style.width = "19%";
		}
	}

	// access to page elements
	const img = document.getElementsByClassName("card-img");
	const title = document.getElementsByClassName("card-title");
	const dates = document.getElementsByClassName("card-date");
	const description = document.getElementsByClassName("card-description");
	const tags = document.getElementsByClassName("card-tags");
	const url = document.getElementsByClassName("card-link");

	const li = {};
	li.start = "<li class = 'list-item'>";
	li.end = "</li>"

	for (let index = 0; index < reverseArr.length; index++) {
		// at index fill each of these with the page[index] values 
		// object[index],innerHTML = arr[index].object); 
		const object = pages.page[index];

		img[index].src = object.img;

		url[index].innerHTML = object.title;
		url[index].href = object.url;
		// adds date and description
		dates[index].innerHTML = object.date;
		description[index].innerHTML = object.description;

		// adds each tag as a list item  
		object.tags.forEach(element => {
			tags[index].innerHTML += li.start + element + li.end;
		});

	}

}

btn(6);