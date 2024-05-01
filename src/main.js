// all variable
// section text varibale
const text1 = document.querySelector("#text-1");
const text2 = document.querySelector("#text-2");

// let timeout = setInterval(textCorsel(text1), 5000, )
function set1() {
  setInterval(() => {
    text1.classList.toggle("text-corsel-1");
    console.log("text1");
  }, 10000);
}

function set2() {
  setInterval(() => {
    text2.classList.toggle("translate-x-[-2400px]");
    console.log("text2");
  }, 10000);
}

set1();
set2();

// navigasi mobile
const navMobile = document.querySelector(".navigasi-mobile");
const humberger = document.getElementById("humberger");
const mainMenuClose = document.getElementById("main-menu-close");

humberger.addEventListener("click", (e) => {
  navMobile.classList.toggle("translate-x-[600px]");
  // navMobile.classList.add("fixed");
});

mainMenuClose.addEventListener("click", (e) => {
  navMobile.classList.toggle("translate-x-[600px]");
  // navMobile.classList.replace("fixed", "absolute");
});

// click diluar nav 
const nav = document.querySelector("#nav");
document.addEventListener("click", (e) => {
  if (!nav.contains(e.target) && !humberger.contains(e.target)) {
    navMobile.classList.add("translate-x-[600px]");
  }
})

// nav mobile switch
const nav00 = document.getElementById("nav-00");
const nav01 = document.querySelector("#nav-01");
const featuredNavMobile = document.getElementById("featured-nav-mobile");

// new featured
featuredNavMobile.addEventListener("click", (e) => {
  nav00.classList.add("minus-400px");
  nav01.classList.remove("translate-x-[400px]");
});

const newFeaturedMenu = document.querySelector("#new-featured-menu-btn-close");
const newfeaturedLink = document.querySelector("#new-featured-link");
const newfeatured = document.querySelector("#nav-01-new-featured");

newFeaturedMenu.addEventListener("click", (e) => {
  nav00.classList.remove("minus-400px");
  nav01.classList.add("translate-x-[400px]");
});

newfeaturedLink.addEventListener("click", (e) => {
  newfeatured.classList.remove("translate-x-[400px]");
  nav01.classList.add("minus-400px");
});

const newBtnCloseFeatured = document.getElementById("btn-close-new&featured");
newBtnCloseFeatured.addEventListener("click", (e) => {
  newfeatured.classList.add("translate-x-[400px]");
  nav01.classList.remove("minus-400px");
});

// shop icons
const shopIcons = document.querySelector("#nav-01-shop-icons");
const shopIconsLink = document.querySelector("#shop-icons-link");
shopIconsLink.addEventListener("click", (e) => {
  shopIcons.classList.remove("translate-x-[400px]");
  nav01.classList.add("minus-400px");
});

const btnCloseShopIcons = document.getElementById("btn-close-new&featured-shop-icons");
btnCloseShopIcons.addEventListener("click", () => {
  shopIcons.classList.add("translate-x-[400px]");
  nav01.classList.remove("minus-400px");
})

// new for men
const newForMen = document.getElementById("nav-01-new-for-men");
const newForMenLink = document.getElementById("new-for-men-link");
newForMenLink.addEventListener("click", (e) => {
  newForMen.classList.remove("translate-x-[400px]");
  nav01.classList.add("minus-400px");
});

const btnNewForMenClose = document.getElementById("btn-close-new&featured-new-for-men");
btnNewForMenClose.addEventListener("click", (e) => {
  newForMen.classList.add("translate-x-[400px]");
  nav01.classList.remove("minus-400px");
})

// new for women
const newForWomen = document.getElementById("nav-01-new-for-women");
const newForWomenLink = document.getElementById("new-for-women-link");
newForWomenLink.addEventListener("click", (e) => {
  newForWomen.classList.remove("translate-x-[400px]");
  nav01.classList.add("minus-400px");
});

const btnNewForWomenClose = document.getElementById("btn-close-new&featured-new-for-women");
btnNewForWomenClose.addEventListener("click", (e) => {
  newForWomen.classList.add("translate-x-[400px]");
  nav01.classList.remove("minus-400px");
});

// new for women
const newForKids = document.getElementById("nav-01-new-for-Kids");
const newForKidsLink = document.getElementById("new-for-kids-link");
newForKidsLink.addEventListener("click", (e) => {
  newForKids.classList.remove("translate-x-[400px]");
  nav01.classList.add("minus-400px");
});

const btnNewForKidsClose = document.getElementById("btn-close-new&featured-new-for-kids");
btnNewForKidsClose.addEventListener("click", (e) => {
  newForKids.classList.add("translate-x-[400px]");
  nav01.classList.remove("minus-400px");
});




// men navigasi mobile
const nav02 = document.getElementById('nav-02');
document.getElementById("men-nav-mobile").addEventListener('click', (e) => {
  nav00.classList.add("minus-400px");
  nav02.classList.remove("translate-x-[400px]");
});

const btnNav02Close = document.getElementById("men-menu-btn-close");
btnNav02Close.addEventListener("click", () => {
  nav00.classList.remove("minus-400px");
  nav02.classList.add("translate-x-[400px]");
});

// men-featured
const menFeaturedLink = document.querySelector("#men-featured-link");
const nav02Featured = document.getElementById("nav-02-featured");
menFeaturedLink.addEventListener('click', (e) => {
  nav02.classList.add("minus-400px");
  nav02Featured.classList.remove("translate-x-[400px]");
});

const menBtnClosefeatured = document.getElementById("men-btn-close-featured");
menBtnClosefeatured.addEventListener('click', (e) => {
  nav02.classList.remove("minus-400px");
  nav02Featured.classList.add("translate-x-[400px]");
});
// men-jordan
const menJordanLink = document.querySelector("#men-jordan-link");
const nav02Jordan = document.getElementById("nav-02-jordan");
menJordanLink.addEventListener('click', (e) => {
  nav02.classList.add("minus-400px");
  nav02Jordan.classList.remove("translate-x-[400px]");
});

const menBtnCloseJordan = document.getElementById("men-btn-close-jordan");
menBtnCloseJordan.addEventListener('click', (e) => {
  nav02.classList.remove("minus-400px");
  nav02Jordan.classList.add("translate-x-[400px]");
});
// men-shoes
const menShoesLink = document.querySelector("#men-shoes-link");
const nav02Shoes = document.getElementById("nav-02-shoes");
menShoesLink.addEventListener('click', (e) => {
  nav02.classList.add("minus-400px");
  nav02Shoes.classList.remove("translate-x-[400px]");
});

const menBtnCloseShoes = document.getElementById("men-btn-close-shoes");
menBtnCloseShoes.addEventListener('click', (e) => {
  nav02.classList.remove("minus-400px");
  nav02Shoes.classList.add("translate-x-[400px]");
});
// men-clothing
const menClothingLink = document.querySelector("#men-clothing-link");
const nav02Clothing = document.getElementById("nav-02-clothing");
menClothingLink.addEventListener('click', (e) => {
  nav02.classList.add("minus-400px");
  nav02Clothing.classList.remove("translate-x-[400px]");
});

const menBtnCloseClothing = document.getElementById("men-btn-close-clothing");
menBtnCloseClothing.addEventListener('click', (e) => {
  nav02.classList.remove("minus-400px");
  nav02Clothing.classList.add("translate-x-[400px]");
});
// men-accessories and equipment
const menAccessoriesLink = document.querySelector("#men-accessories-link");
const nav02Accessories = document.getElementById("nav-02-accessories");
menAccessoriesLink.addEventListener('click', (e) => {
  nav02.classList.add("minus-400px");
  nav02Accessories.classList.remove("translate-x-[400px]");
});

const menBtnCloseAcccessories = document.getElementById("men-btn-close-accessories");
menBtnCloseAcccessories.addEventListener('click', (e) => {
  nav02.classList.remove("minus-400px");
  nav02Accessories.classList.add("translate-x-[400px]");
});
// shop by sport
const menShopBySportLink = document.querySelector("#men-shopbysport-link");
const nav02ShopBySport = document.getElementById("nav-02-shopbysport");
menShopBySportLink.addEventListener('click', (e) => {
  nav02.classList.add("minus-400px");
  nav02ShopBySport.classList.remove("translate-x-[400px]");
});

const menBtnCloseShopBySport = document.getElementById("men-btn-close-shopbysport");
menBtnCloseShopBySport.addEventListener('click', (e) => {
  nav02.classList.remove("minus-400px");
  nav02ShopBySport.classList.add("translate-x-[400px]");
});
// shop by brand
const menShopByBrandLink = document.querySelector("#men-shopbybrand-link");
const nav02ShopByBrand = document.getElementById("nav-02-shopbybrand");
menShopByBrandLink.addEventListener('click', (e) => {
  nav02.classList.add("minus-400px");
  nav02ShopByBrand.classList.remove("translate-x-[400px]");
});

const menBtnCloseShopByBrand = document.getElementById("men-btn-close-shopbybrand");
menBtnCloseShopByBrand.addEventListener('click', (e) => {
  nav02.classList.remove("minus-400px");
  nav02ShopByBrand.classList.add("translate-x-[400px]");
});



// women navigasi mobile
const womenNavLink = document.querySelector("#women-nav-mobile");
const nav03 = document.querySelector("#nav-03");
womenNavLink.addEventListener("click", () => {
  nav00.classList.add("minus-400px");
  nav03.classList.remove("translate-x-[400px]");
});

const womenBtnCloseMenu = document.querySelector("#women-menu-btn-close");
womenBtnCloseMenu.addEventListener("click", () => {
  nav00.classList.remove("minus-400px");
  nav03.classList.add("translate-x-[400px]");
});
// women featured 
const womenFeaturedLink = document.querySelector("#women-featured-link");
const nav03Featured = document.getElementById("nav-03-featured");
womenFeaturedLink.addEventListener("click", () => {
  nav03Featured.classList.remove("translate-x-[400px]");
  nav03.classList.add("minus-400px");
});
const womenBtnCloseFeatured = document.getElementById("women-btn-close-featured");
womenBtnCloseFeatured.addEventListener("click", () => {
  nav03Featured.classList.add("translate-x-[400px]");
  nav03.classList.remove("minus-400px");
});
// women shoes
const womenShoesLink = document.querySelector("#women-shoes-link");
const nav03Shoes = document.getElementById("nav-03-shoes");
womenShoesLink.addEventListener("click", () => {
  nav03Shoes.classList.remove("translate-x-[400px]");
  nav03.classList.add("minus-400px");
});
const womenBtnCloseShoes = document.getElementById("women-btn-close-shoes");
womenBtnCloseShoes.addEventListener("click", () => {
  nav03Shoes.classList.add("translate-x-[400px]");
  nav03.classList.remove("minus-400px");
});
// women clothing
const womenClothingLink = document.querySelector("#women-clothing-link");
const nav03Clothing = document.getElementById("nav-03-clothing");
womenClothingLink.addEventListener("click", () => {
  nav03Clothing.classList.remove("translate-x-[400px]");
  nav03.classList.add("minus-400px");
});
const womenBtnCloseClothing = document.getElementById("women-btn-close-clothing");
womenBtnCloseClothing.addEventListener("click", () => {
  nav03Clothing.classList.add("translate-x-[400px]");
  nav03.classList.remove("minus-400px");
});
// women accessories and equipment
const womenAccessoriesAndEquipmentLink = document.querySelector("#women-accessoriesandequipment-link");
const nav03AccessoriesAndEquipment = document.getElementById("nav-03-accsessoriesandequipment");
womenAccessoriesAndEquipmentLink.addEventListener("click", () => {
  nav03AccessoriesAndEquipment.classList.remove("translate-x-[400px]");
  nav03.classList.add("minus-400px");
});
const womenBtnCloseAccessoriesAndEquipment = document.getElementById("women-btn-close-accessoriesandequipment");
womenBtnCloseAccessoriesAndEquipment.addEventListener("click", () => {
  nav03AccessoriesAndEquipment.classList.add("translate-x-[400px]");
  nav03.classList.remove("minus-400px");
});
// shop by sport
const womenShopBySportLink = document.querySelector("#women-shopbysport-link");
const nav03ShopBySport = document.getElementById("nav-03-shopbysport");
womenShopBySportLink.addEventListener("click", () => {
  nav03ShopBySport.classList.remove("translate-x-[400px]");
  nav03.classList.add("minus-400px");
});
const womenBtnCloseShopBySport = document.getElementById("women-btn-close-shopbysport");
womenBtnCloseShopBySport.addEventListener("click", () => {
  nav03ShopBySport.classList.add("translate-x-[400px]");
  nav03.classList.remove("minus-400px");
});
// shop by brand
const womenShopByBrandLink = document.querySelector("#women-shopbybrand-link");
const nav03ShopByBrand = document.getElementById("nav-03-shopbybrand");
womenShopByBrandLink.addEventListener("click", () => {
  nav03ShopByBrand.classList.remove("translate-x-[400px]");
  nav03.classList.add("minus-400px");
});
const womenBtnCloseShopByBrand = document.getElementById("women-btn-close-shopbybrand");
womenBtnCloseShopByBrand.addEventListener("click", () => {
  nav03ShopByBrand.classList.add("translate-x-[400px]");
  nav03.classList.remove("minus-400px");
});


// kids menu navigasi mobile
const kidsNavLink = document.querySelector("#kids-nav-mobile");
const nav04 = document.querySelector("#nav-04");
kidsNavLink.addEventListener("click", (e) => {
  nav04.classList.remove("translate-x-[400px]");
  nav00.classList.add("minus-400px")
});
const kidsMenuBtnClose = document.querySelector("#kids-menu-btn-close");
kidsMenuBtnClose.addEventListener('click', () => {
  nav04.classList.add("translate-x-[400px]");
  nav00.classList.remove("minus-400px")
});
// kids featured
const kidsFeaturedLink = document.querySelector("#kids-featured-link");
const nav04Featured = document.getElementById("nav-04-featured");
kidsFeaturedLink.addEventListener("click", () => {
  nav04Featured.classList.remove("translate-x-[400px]");
  nav04.classList.add("minus-400px");
});
const kidsBtnCloseFeatured = document.getElementById("kids-btn-close-featured");
kidsBtnCloseFeatured.addEventListener("click", () => {
  nav04Featured.classList.add("translate-x-[400px]");
  nav04.classList.remove("minus-400px");
});
// kids by age
const kidsByAgeLink = document.querySelector("#kids-byage-link");
const nav04Byage = document.getElementById("nav-04-byage");
kidsByAgeLink.addEventListener("click", () => {
  nav04Byage.classList.remove("translate-x-[400px]");
  nav04.classList.add("minus-400px");
});
const kidsBtnCloseByAge = document.getElementById("kids-btn-close-byage");
kidsBtnCloseByAge.addEventListener("click", () => {
  nav04Byage.classList.add("translate-x-[400px]");
  nav04.classList.remove("minus-400px");
});
// boys by shoes
const kidsBshoesLink = document.querySelector("#kids-bshoes-link");
const nav04Bshoes = document.getElementById("nav-04-bshoes");
kidsBshoesLink.addEventListener("click", () => {
  nav04Bshoes.classList.remove("translate-x-[400px]");
  nav04.classList.add("minus-400px");
});
const kidsBtnCloseBshoes = document.getElementById("kids-btn-close-bshoes");
kidsBtnCloseBshoes.addEventListener("click", () => {
  nav04Bshoes.classList.add("translate-x-[400px]");
  nav04.classList.remove("minus-400px");
});
// boys by clothing
const kidsBclothingLink = document.querySelector("#kids-bclothing-link");
const nav04Bclothing = document.getElementById("nav-04-bclothing");
kidsBclothingLink.addEventListener("click", () => {
  nav04Bclothing.classList.remove("translate-x-[400px]");
  nav04.classList.add("minus-400px");
});
const kidsBtnCloseBclothing = document.getElementById("kids-btn-close-bclothing");
kidsBtnCloseBclothing.addEventListener("click", () => {
  nav04Bclothing.classList.add("translate-x-[400px]");
  nav04.classList.remove("minus-400px");
});
// girls by shoes
const kidsGshoesLink = document.querySelector("#kids-gshoes-link");
const nav04Gshoes = document.getElementById("nav-04-gshoes");
kidsGshoesLink.addEventListener("click", () => {
  nav04Gshoes.classList.remove("translate-x-[400px]");
  nav04.classList.add("minus-400px");
});
const kidsBtnCloseGshoes = document.getElementById("kids-btn-close-gshoes");
kidsBtnCloseGshoes.addEventListener("click", () => {
  nav04Gshoes.classList.add("translate-x-[400px]");
  nav04.classList.remove("minus-400px");
});
// girls by clothing
const kidsGclothingLink = document.querySelector("#kids-gclothing-link");
const nav04Gclothing = document.getElementById("nav-04-gclothing");
kidsGclothingLink.addEventListener("click", () => {
  nav04Gclothing.classList.remove("translate-x-[400px]");
  nav04.classList.add("minus-400px");
});
const kidsBtnCloseGclothing = document.getElementById("kids-btn-close-gclothing");
kidsBtnCloseGclothing.addEventListener("click", () => {
  nav04Gclothing.classList.add("translate-x-[400px]");
  nav04.classList.remove("minus-400px");
});
// girls by clothing
const kidsAccessoriesLink = document.querySelector("#kids-accessories-link");
const nav04Accessories = document.getElementById("nav-04-accessories");
kidsAccessoriesLink.addEventListener("click", () => {
  nav04Accessories.classList.remove("translate-x-[400px]");
  nav04.classList.add("minus-400px");
});
const kidsBtnCloseAccessories = document.getElementById("kids-btn-close-accessories");
kidsBtnCloseAccessories.addEventListener("click", () => {
  nav04Accessories.classList.add("translate-x-[400px]");
  nav04.classList.remove("minus-400px");
});
// girls by clothing
const kidsShopbysportLink = document.querySelector("#kids-shopbysport-link");
const nav04Shopbysport = document.getElementById("nav-04-shopbysport");
kidsShopbysportLink.addEventListener("click", () => {
  nav04Shopbysport.classList.remove("translate-x-[400px]");
  nav04.classList.add("minus-400px");
});
const kidsBtnCloseShopbysport = document.getElementById("kids-btn-close-shopbysport");
kidsBtnCloseShopbysport.addEventListener("click", () => {
  nav04Shopbysport.classList.add("translate-x-[400px]");
  nav04.classList.remove("minus-400px");
});


// sale navigasi mobile
const saleNavLink = document.querySelector("#sale-nav-mobile");
const nav05 = document.querySelector("#nav-05");
saleNavLink.addEventListener("click", (e) => {
  nav05.classList.remove("translate-x-[400px]");
  nav00.classList.add("minus-400px")
});
const saleMenuBtnClose = document.querySelector("#sale-menu-btn-close");
saleMenuBtnClose.addEventListener('click', () => {
  nav05.classList.add("translate-x-[400px]");
  nav00.classList.remove("minus-400px")
});
// sale - sale
const saleSaleLink = document.querySelector("#sale-sale-link");
const nav05Sale = document.getElementById("nav-05-sale");
saleSaleLink.addEventListener("click", () => {
  nav05Sale.classList.remove("translate-x-[400px]");
  nav05.classList.add("minus-400px");
});
const saleBtnCloseSale = document.getElementById("sale-btn-close-sale");
saleBtnCloseSale.addEventListener("click", () => {
  nav05Sale.classList.add("translate-x-[400px]");
  nav05.classList.remove("minus-400px");
});
// sale - mens
const saleMensLink = document.querySelector("#sale-menssale-link");
const nav05Mens = document.getElementById("nav-05-mens");
saleMensLink.addEventListener("click", () => {
  nav05Mens.classList.remove("translate-x-[400px]");
  nav05.classList.add("minus-400px");
});
const saleBtnCloseMens = document.getElementById("sale-btn-close-mens");
saleBtnCloseMens.addEventListener("click", () => {
  nav05Mens.classList.add("translate-x-[400px]");
  nav05.classList.remove("minus-400px");
});
// sale - womens
const saleWomensLink = document.querySelector("#sale-womenssale-link");
const nav05Womens = document.getElementById("nav-05-womens");
saleWomensLink.addEventListener("click", () => {
  nav05Womens.classList.remove("translate-x-[400px]");
  nav05.classList.add("minus-400px");
});
const saleBtnCloseWomens = document.getElementById("sale-btn-close-womens");
saleBtnCloseWomens.addEventListener("click", () => {
  nav05Womens.classList.add("translate-x-[400px]");
  nav05.classList.remove("minus-400px");
});
// sale - womens
const saleKidsLink = document.querySelector("#sale-kidssale-link");
const nav05Kids = document.getElementById("nav-05-kids");
saleKidsLink.addEventListener("click", () => {
  nav05Kids.classList.remove("translate-x-[400px]");
  nav05.classList.add("minus-400px");
});
const saleBtnCloseKids = document.getElementById("sale-btn-close-kids");
saleBtnCloseKids.addEventListener("click", () => {
  nav05Kids.classList.add("translate-x-[400px]");
  nav05.classList.remove("minus-400px");
});





// btn switch cart
const englishLg = document.querySelector("#english-lg");
const indonesiaLg = document.querySelector("#indonesia-lg");
const btnSwicthLg = document.getElementById("btn-swicth-lg");

const textContentUk = document.querySelector("#text-content-uk");
const textContentIdn = document.querySelector("#text-content-idn");

const btnCloseCart = document.querySelector("#btn-close-cart");
const Cart = document.querySelector(".cart");
btnCloseCart.addEventListener("click", () => {
  Cart.classList.add("hidden");
  // Cart.classList.remove("flex");
  // console.log("uabscubuajs")
});

// Cart.addEventListener("click", () => {
//   console.log("jbsjdc")
// })


const circle = document.getElementById("circle");
btnSwicthLg.addEventListener("click", (e) => {
  circle.classList.toggle("translate-x-6");
  englishLg.classList.toggle("underline");
  indonesiaLg.classList.toggle("underline");
  textContentUk.classList.toggle("flex");
  textContentUk.classList.toggle("hidden");
  textContentIdn.classList.toggle("flex");
  textContentIdn.classList.toggle("hidden");
  

});

