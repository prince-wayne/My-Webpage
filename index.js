console.clear();

// store page data functions
let pages = {
  page: [],
  add(title, url, description, img, tags = ["unsorted"], date = null, id = null) {
    pages.page.push({
      id,
      title,
      url,
      description,
      img,
      tags,
      date
    });
    /* 
      0 : {
        date : "1/15/24"
        desrciption: "My First Javascript
        challenge using the Document Object Model"
        id: null
        img: placeholder img
        tags: [...]
        title: "Generator Page"
        url: "generator-page/index.html"
      }
    */
  },
  remove() {
    // find the name and remove it from the array
  },
  edit() {
    // find the item by id or something that coundn't be confused
  }
};

// placeholder elements 
const placeholder = {
  img: "https://dailynexus.s3.us-west-1.amazonaws.com/dailynexus/wp-content/uploads/2017/12/blackout--1044x783.jpg" // might need to add class later on
};

/* pages to import as of 3/4/24 8:30 AM */
/* 
    generator page 
    blog card preview
    pricing grid
    perfume card
    testimonials
    qr code
    time tracking dashboard (in process)
*/

// add(title, url, desrciption, img, [tags], date)
pages.add("Generator Page", "generator-page/index.html", "My First Javascript challenge using the Document Object Model", placeholder.img, ["Javascript"], "1/15/24");

pages.add("Pricing Grid Card", "single-price-grid-component-master/single-price-grid-component-master/index.html", "CSS challenge By Fronend Mentor Desktop Only Version, Meant to learn Postion and display", placeholder.img, ["HTML", "CSS"], "1/16/24");

pages.add("Shareable qr code", "qr-code-component-main/index.html", "IMG display challenge, shows a QR code. <br> Frontend Dev. challenge", placeholder.img, ["HTML", "CSS"], "1/22/23");

pages.add("Blog Card preview", "blog-preview-card-main/index.html", "challenge from Frontend Mentor meant to display a card with an image and a few other elements", placeholder.img, ["HTML", "CSS"], "1/23/24");

pages.add("Testimonials grid", "testimonials-grid-section-main/index.html", "Flexbox challenge from frontend mentor", placeholder.img, ["HTML", "CSS"], "1/25/24");

pages.add("Perfume product card", "./product-preview-card-component-main/index.html", "practice ptoject from frontend mentor, meant as a warm up for future projects.", placeholder.img, ["HTML", "CSS"], "1/25/24");

// next page to be inported - this will likely be an unclickable page or an empty one soon
pages.add("Time Tracking Dashboard", "dashboard/index.html", "Interactive Javascript and Data challange", placeholder.img, ["HTML", "CSS", "Javascript", "Data"], "3/1/24");

let reverseArr = pages.page.reverse(); /* reverses arr  */
let GlobalCt = 0;


let Scroll = 1;
let btns = {};
btns.next = function () {
  let cards = document.getElementsByClassName("card"); // collects cards on screen
  if (GlobalCt * scroll < pages.page.length) {
    console.log([scroll * 2, scroll * 2 - 1 ] );
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
  scroll = pages.page.length/GlobalCt;
}


const btn = function (pageCt) {
  const vaildInputs = [3, 4, 6, 8, 9]; // stores acceptable inputs
  const vaildation = vaildInputs.includes(pageCt);
  const inputFix = vaildation == true ? null : pageCt = 6; // validates inputed value or puts it to 6
  GlobalCt = pageCt;

  let placement = [Scroll * (pageCt - 1), Scroll * (pageCt * 2)]; // [start, end] index = start, index < end


  let grid = document.querySelector(".main"); // store .main into const value
  let contentStr = ""; // stores values into const var and then changes DOM onc

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

  // fills card length
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

  const arr = reverseArr;
  const li = {};
  li.start = "<li class = 'list-item'>";
  li.end =  "</li>"

  for (let index = 0; index < arr.length; index++) {
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

// step 2
// create fliter to select pages by there tags

// use a for each .includes tags then a push to create new array we did something very simlair around the begining of our journey

/* 
  arr.forEach((element) => {
  if (arr2.includes(element)) {
    arr3.push(element)
  }
});
sets arr3 to matching elements of arr1 and arr2
*/

// step three 
// display selected tags information on cards
const contents = function (arr = reverseArr) {
  // arr is the fillered pages arr. this is an inputed value that deflauts to the originalal arr.
  const cards = document.getElementsByClassName(".card");

  const img = document.getElementsByClassName("card-img");
  const title = document.getElementsByClassName("card-title");
  const dates = document.getElementsByClassName("card-date");
  const description = document.getElementsByClassName("card-description");
  const tags = document.getElementsByClassName("card-tags");
  const url = document.getElementsByClassName("card-link");

  for (let index = 0; index < arr.length; index++) {
    // at index fill each of these with the page[index] values 
    // object[index],innerHTML = arr[index].object); 
    let object = pages.page[index];
    img[index].src = object.img;

    url[index].innerHTML = object.title;
    dates[index].innerHTML = object.date;
    description[index].innerHTML = object.description;

    // for fuction to add all tags
    

  }
}

btn(6);