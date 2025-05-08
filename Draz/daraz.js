itemLoadPage();

let bagItems = [];

function addInBag(itemId) {
  bagItems.push(itemId);
  localStorage.setItem('bag in item', JSON.stringify(bagItems));
  BagItems();
}

let bagItemSTRING = localStorage.getItem('bag in item');
bagItems = bagItemSTRING ? JSON.parse(bagItemSTRING) : [];

BagItems();

function BagItems() {
  let bItem = document.querySelector('.bag-item-count');
  console.log(bItem)
  if (bagItems.length > 0) {
    bItem.innerText = bagItems.length;
    bItem.style.visibility = 'visible';
  }

  console.log('=> ' + bagItems.length);
  console.log('=| ' + bagItems);

}

function itemLoadPage() 
{
  var i = 0;
  let Item = document.querySelector('.items--container');
  let newHtml = '';
  if (!Item) 
  {
    console.log("hi");
  }else{
  // console.log('\\ ',items);
  items.forEach((item) => {
    console.log(`item printed ${++i}`)
    newHtml +=
      `
    <div class="item--container">
      <img src="${item.image}" alt="${item.loading}" class="item-image"">
      <div class="ratings">
        <span>${item.rating.stars} ⭐</span>
        <span>| ${item.rating.count} reviews</span>
      </div>
      <div class="item-name">${item.company}</div>
      <div class="item-details">${item.item_name}</div>
      <div class="price">
      <span class="item-price">PkR ${item.current_price} </span>
      <span class="orignal-price">  Rs ${item.original_price}</span>
      <span class="discounted-price">(${item.discount_percentage}% OFF)</span>
      </div>
      <div><button type="button" class="item-btn" onclick="addInBag(${item.id});" >Add to Bag</button></div>
    </div>

    `;
    // item.innerHTML = newHtml;//
  });
  
  Item.innerHTML= newHtml;
}
}



