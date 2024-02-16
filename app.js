

var input=document.getElementById('input');

function addTodo(){
    var li=document.createElement('li');
    var liText=document.createTextNode(input.value);
    li.appendChild(liText);
// creating li
    var list=document.getElementById('list');
    list.appendChild(li);

    // delete button
    var btn=document.createElement("button");
    var btnText=document.createTextNode("Delete");
    btn.setAttribute("onclick","del(this)");
    btn.setAttribute("class","btn");
    btn.appendChild(btnText);
    li.appendChild(btn);

    //edit button

    var editBtn=document.createElement("button");
    var editBtnText=document.createTextNode("Edit");
    editBtn.setAttribute("onclick", "edit(this)");
   editBtn.setAttribute("class","btn");
    editBtn.appendChild(editBtnText);
    li.appendChild(editBtn);



    input.value= "";
}


function deleteAll(){
    list.innerHTML ="";
    
}

function edit(a){
    var value=prompt("Enter Text here",a.parentNode.firstChild.nodeValue);
    a.parentNode.firstChild.nodeValue= value;
    console.log(value)
}

function del(e){
    e.parentNode.remove();
   
}