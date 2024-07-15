
        TableData=[];

       function TableLoad(){
        document.getElementById("tbody").innerHTML="";
        document.getElementById("txt_title").value="";
        document.getElementById("txt_description").value="";
       

        TableData.map(function(item ,index){
            var tr= document.createElement("tr");
            tr.innerHTML=`
            <tr class=" p-3 text-center">
                <td>${index+1}</td>
                <td id="name">${item.name}</td>
                <td id="lstname">${item.txt_description}</td>
               
                <td class="p-3">
                    <button class="btn btn-danger" onclick="deleteData()">delete</button>
                    <button class="btn btn-warning text-light" onclick="updateData(${index})">Update</button>
                    <button class="btn btn-success "><a href="#addTodo" class="text-decoration-none text-light">Add Folder</a></button>
                </td>
            </tr>
            `
            document.getElementById("tbody").appendChild(tr);

        })

       }
       function SubmitClick(){
       var Name= document.getElementById("txt_title").value;
       var Last= document.getElementById("txt_description").value;
       
        var table= document.getElementById("container");
     var  Data={
            name:Name,
            txt_description:Last,
           
       }
     
       TableData.push(Data);
       TableLoad();
       table.className="d-block ";
       }

       function updateData(index){
        index.map(function (ite){
           console.log(ite);
        })
       }

       function deleteData(index){
            var msg= confirm("ar you shore to delete ");
            if(msg==true){
                TableData.splice(index,1);
                }
            TableLoad();
     
       }
  
