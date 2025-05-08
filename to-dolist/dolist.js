let doList = [
  {
    my_item:'buy milk',
    my_date:'1/17/2025'
  }
  ,
  {
    my_item:'car rent',
    my_date:'1/19/2025'
  }
];
function addit()
{
  let myItemElement = document.querySelector('#todo-mytxt');
  let myDateElement = document.querySelector('.todo-myDate');
  let Item = myItemElement.value;
  let to_Date = myDateElement.value;
  doList.push({my_item:Item , my_date : to_Date});
  myItemElement.value='';
  myDateElement.value='';
  console.log('Selected date:', to_Date);
  
    display();
}


function display(){
  let myItemdisplay= document.querySelector('.myItems-list');

  let newhtml='';

    for(let i=0 ;i<doList.length ; i++ )
      {
        let item = doList[i].my_item;
        let date = doList[i].my_date;
        newhtml += 
        `
          <span type="text">${item}</span>
          <span class="todo-myDate">${date}</span>
          <button id="del-place" onclick="doList.splice(${i},1);
          display();
          ">delete</button>
          
          <br>
        `;
        // Document.querySelector('#erase-item')<span >${doList[i]}</span>
      }
      myItemdisplay.innerHTML=newhtml;
}
console.log(`itemElement running well`);


// function display(){
  // myItemdisplay.innerText = myItemdisplay.innerText +'\n'+ ;
//   let myItemdisplay= document.querySelector('.mydiv');
//   myItemdisplay.innerText = ' ';
//   for(let i=0 ;i<doList.length ; i++ )
//     {
//       myItemdisplay.innerText = myItemdisplay.innerText +'\n'+ doList[i];
      

// console.log('salam');
//       return (`
//           <div class="para">
//             <textarea type="text" class="notes-area" cols="30" rows="5">${notesArea[i]}</textarea>
//             <button class="delete" onclick="fun_delete(${CreatedNotes[i]});">X</button>
//           </div>

//     }