const getMoreListingsBtn = document.querySelector(".get-more-listings");
const listingList = document.querySelector(".listings-list-wrapper");

getMoreListingsBtn.addEventListener("click", () => {
  console.log("reuested mote listinfgs");

  createListings();
});

const listingsJson = [
  {
    label: "Best price",
    locationAndType: "Miami/semi-detached",
    title: "Semi-detached house",
    price: "400,00",
    beds: "5",
    baths: "2",
    size: "2.400 sqft",
    imgSrc: "/listingsApp/images/apartmentInterior2.jpeg",
  },

  {
    label: "Best price",
    locationAndType: "Miami/semi-detached",
    title: "Semi-detached house",
    price: "400,000",
    beds: "5",
    baths: "2",
    size: "2.400 sqft",
    imgSrc: "/listingsApp/images/apartmentInterior3.jpg",
  },

  {
    label: "Best price",
    locationAndType: "Miami/semi-detached",
    title: "Semi-detached house",
    price: "400,000",
    beds: "5",
    baths: "2",
    size: "2.400 sqft",
    imgSrc: "/listingsApp/images/apartmentInterior4.jpg",
  },

  {
    label: "Best price",
    locationAndType: "Miami/semi-detached",
    title: "Semi-detached house",
    price: "400,000",
    beds: "5",
    baths: "2",
    size: "2.400 sqft",
    imgSrc: "/listingsApp/images/apartmentInterior5.jpg",
  },
];

const buildSpecific = ({ imageSrc, type, value }) => {
  const specific = document.createElement("div");
  specific.classList.add("listing-specific");

  const image = document.createElement("img");
  image.src = imageSrc;
  image.alt = type;

  const valueEl = document.createElement("div");
  valueEl.classList.add("helper-1");
  valueEl.innerText = value;

  specific.appendChild(image);
  specific.appendChild(valueEl);

  return specific;
};

const buildSpecifics = (data) => {
  const specifics = document.createElement("div");
  specifics.classList.add("listing-specifics");

  const specific1 = buildSpecific({
    imageSrc: "images/bed.svg",
    type: "bed",
    value: data.beds,
  });

  const specific2 = buildSpecific({
    imageSrc: "images/bath.svg",
    type: "bath",
    value: data.baths,
  });

  const specific3 = buildSpecific({
    imageSrc: "images/bed.svg",
    type: "size",
    value: data.size,
  });

  specifics.appendChild(specific1);
  specifics.appendChild(specific2);
  specifics.appendChild(specific3);

  return specifics;
};

const buildDetails = (data) => {
  const details = document.createElement("div");
  details.classList.add("listing-details");

  const locationAndType = document.createElement("p");
  locationAndType.classList.add("helper-1");
  locationAndType.innerText = data.locationAndType;

  const title = document.createElement("h4");
  title.classList.add("h4-semibold");
  title.innerText = data.title;

  const price = document.createElement("h3");
  price.classList.add("h3-medium");
  price.innerText = `s$ ${data.price}`;

  const specifics = buildSpecifics(data);

  details.appendChild(locationAndType);
  details.appendChild(title);
  details.appendChild(price);
  details.appendChild(specifics);

  return details;
};

const buildHeader = (data) => {
  const header = document.createElement("div");
  header.classList.add("listing-header");
  header.style.backgroundImage = `url('${data.imgSrc}')`;

  const label = document.createElement("div");
  label.classList.add("label");
  label.innerText = data.label;

  header.appendChild(label);

  return header;
};

const createListing = (data) => {
  const listing = document.createElement("div");
  listing.classList.add("listing");

  const header = buildHeader(data);
  const details = buildDetails(data);

  listing.appendChild(header);
  listing.appendChild(details);

  return listing;
};

const createListings = () => {
  const listings = [];

  const listingElements = listingsJson.map((jsonListing) => {
    return createListing(jsonListing);
  });

  listingElements.forEach((listingElement) => {
    listingList.appendChild(listingElement);
  });
};
