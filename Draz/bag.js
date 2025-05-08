let bagItemsByObjects;

load();

function load(){
LoadbagItemsByObjects();
myBagPage();
myBagSummary();
}

function myBagSummary()
{
  let myBagSummaryElement = document.querySelector('.bag-summary');
  let mrpPRICE =0;
  let discountVALUE =0;
  let deliveryFEEvalue=55;
  let total_amount_value= 0;

  bagItemsByObjects.forEach((bagItems)=>{
    mrpPRICE += bagItems.original_price;
    discountVALUE += bagItems.original_price - bagItems.current_price ;
    total_amount_value = mrpPRICE+deliveryFEEvalue;
  })

if(!myBagSummaryElement)
  {console.log('not called');}
else
  myBagSummaryElement.innerHTML=
  `<div class="price-details">
          <div class="slected-items">PRICE DETAILS (${bagItems.length} Items)</div>
          <div class="items-price">
            <span class="total-mrp">Total MRP</span>
            <span class="mrp-price">Pkr ${mrpPRICE}</span>
          </div>
          <div class="items-discount-price">
            <span class="discount-mrp">Discount on MRP </span>
            <span class="discount-value">Pkr ${discountVALUE}</span>
          </div>
          <div class="delivery-fee">
            <span class="delivery-tag">Delivary charges</span>
            <span class="delivery-fee-value">Pkr ${deliveryFEEvalue}</span>
          </div>
          <div class="price-footer">--------------------------</div>
          <div class="items-total">
            <span class="total-tag">"Total Amount </span>
            <span class="total-amount-value">Pkr ${total_amount_value}</span>
          </div>
        </div>  
        <div>
          <button type="button" class="btn-of-order" onclick="alert('your order is placed now for Pkr ${total_amount_value}')">ᑭᒪᗩᑕE OᖇᗪEᖇ</button>
        </div>
  `;



}

function LoadbagItemsByObjects()
{
  console.log('Load ] ', bagItems);

 bagItemsByObjects = bagItems.map((itemID)=>{
    // console.log('id outer salam');
    let R =items.length ;
    for(let i=0 ; i < R ; i++)
    {
      // console.log('id inner salam');
      if(itemID == items[i].id)
      {
        console.log('if wala salam');
        return items[i];
      }
    }
  })

}




function myBagPage()
{
  let bagElement = document.querySelector
  ('.details-container');
  console.log('outer called');
  // console.log(items[0].id);
  // console.log('\\ ',items);
  
  // bagElement.innerHTML += genrateinnerHTML()

  bagItemsByObjects.forEach((bagItems) => {
    bagElement.innerHTML += genrateinnerHTML(bagItems);
  });
  
}

// let rm = document.getElementsByClassName('remove-from-cart');
// rm.addEventListener('click', (itemID)=>{
//   bagElement.filter(b)
// })
function removing_item(itemID) {
  bagItems = bagItems.filter(bagitemID=> bagitemID != itemID);
  localStorage.setItem('bag in item', JSON.stringify(bagItems));
  // genrateinnerHTML(bagItems);
  
  let bagElement = document.querySelector
  ('.details-container');
  bagElement.innerHTML=``;
  LoadbagItemsByObjects();
  myBagSummary();
  myBagPage();
  
}


// ${console.log('inner called ')}
function genrateinnerHTML(items){
  return ` 
      <div class="remove-from-cart" onclick="removing_item(${items.id});">❌</div>
        <!-- item-left-part -->
        <div class="left-side">
          <img src="${items.image}" class="bag-item-img" alt="">
        </div>
        <!-- item-right-part -->
        <div class="right-side">
          <div class="company">${items.company}</div>
          <div class="item_name">${items.item_name}</div>
          <div class="prices">
            <span class="original_price">${items.original_price} |</span>
            <span class="current_price">${items.current_price} |</span>
            <span class="discount_percentage">${items.discount_percentage}</span>
          </div>
          <div class="period">
            <span class="return_period">${items.return_period}</span>
            <span class="delivery_date">${items.delivery_date}</span>
          </div>
          <div class="rating">
            <span class="stars">${items.rating.stars}</span>
            <span class="count">${items.rating.count}</span>
          </div>
        </div>
  `;

}
