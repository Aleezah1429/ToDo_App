function addTodo(){
            var todoItem = document.getElementById('todo-item');
    
    
            // create li tag with text node
            
            var li = document.createElement('li');
            var liText = document.createTextNode(todoItem.value);
            li.appendChild(liText) ;
    
            // create dlt button 
    
            var dltBtn = document.createElement('button');
            var dltText = document.createTextNode('Delete');
            dltBtn.setAttribute('class','btn');
            dltBtn.setAttribute('onclick','deleteItem(this)');
            dltBtn.appendChild(dltText);
    
            // create edit button 
            var editBtn = document.createElement('button');
            var editText = document.createTextNode('Edit');
            editBtn.setAttribute('class','btn');
            editBtn.setAttribute('onclick','editItem(this)');
            editBtn.appendChild(editText);
            
            li.appendChild(dltBtn);
            li.appendChild(editBtn)
    
    
            
            list.appendChild(li) ;
            todoItem.value = '';
    
    
            console.log(li)
    }
    
    function deleteItem(e){
            e.parentNode.remove()
    }
    function editItem(e){
            var editValue = prompt('Enter updated value: ',e.parentNode.firstChild.nodeValue)
            e.parentNode.firstChild.nodeValue = editValue
    }
    function deleteAll(){
            list.innerHTML = ''
    }