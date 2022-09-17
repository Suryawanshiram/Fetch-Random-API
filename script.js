
//Create a function to create an element using CreateElement 
function createNode(element){
      return document.createElement(element)
  }
  
  
  
  //Function to append an element to the parent element
  function append(parent,child){
      return  parent.appendChild(child);
  }
  
  
  
  
  //selection of an element 
  const ul=document.getElementById("imglist");
  const url="https://randomuser.me/api/?gender=female&results=500";
  
  
  
  fetch(url)
  .then((response)=>response.json())
  .then((data)=>{
    let authors=  data.results;
  //   console.log(authors)
  return authors.map((author)=>{
      let li=createNode("li")
      let img=createNode("img");// display the user image (large)
      let span=createNode("span");//to print the user first& last name combination 
      let email=createNode("span");
      img.src=`${author.picture.large}`;
      span.innerHTML=`${author.name.first} ${author.name.last}`
      email.innerHTML=`${author.email}`;
      append(li,img);
      append(li,span);
      append(li,email);
      append(ul,li);
  
  
  })
  }).catch((error)=>{
      console.log(error);
  })