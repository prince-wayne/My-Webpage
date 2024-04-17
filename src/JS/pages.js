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
  const placeholder = {
    img: "https://dailynexus.s3.us-west-1.amazonaws.com/dailynexus/wp-content/uploads/2017/12/blackout--1044x783.jpg" // might need to add class later on
  };

  // add(title, url, desrciption, img, [tags], date)
pages.add("Generator Page", "generator-page/index.html", "My First Javascript challenge using the Document Object Model", placeholder.img, ["Javascript"], "1/15/24");

pages.add("Pricing Grid Card", "single-price-grid-component-master/single-price-grid-component-master/index.html", "CSS challenge By Fronend Mentor Desktop Only Version, Meant to learn Postion and display", placeholder.img, ["HTML", "CSS"], "1/16/24");

pages.add("Shareable qr code", "qr-code-component-main/index.html", "IMG display challenge, shows a QR code. <br> Frontend Dev. challenge", placeholder.img, ["HTML", "CSS"], "1/22/23");

pages.add("Blog Card preview", "blog-preview-card-main/index.html", "challenge from Frontend Mentor meant to display a card with an image and a few other elements", placeholder.img, ["HTML", "CSS"], "1/23/24");

pages.add("Testimonials grid", "testimonials-grid-section-main/index.html", "Flexbox challenge from frontend mentor", placeholder.img, ["HTML", "CSS"], "1/25/24");

pages.add("Perfume product card", "./product-preview-card-component-main/index.html", "practice ptoject from frontend mentor, meant as a warm up for future projects.", placeholder.img, ["HTML", "CSS"], "1/25/24");

pages.add("Time Tracking Dashboard", "dashboard/index.html", "Interactive Javascript and Data challange", placeholder.img, ["HTML", "CSS", "Javascript", "Data"], "3/1/24");
