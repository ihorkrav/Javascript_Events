const Add = document.getElementById("AddBtn");
const Clear = document.getElementById("clearBtn");
const Search = document.getElementById("SearchBtn");

const Id = document.getElementById("ID");
const Name = document.getElementById("Name");
const Group = document.getElementById("Group");
const isChecked = document.getElementById("isChecked");
const Filter = document.getElementById("Search");

const tBody = document.querySelector(`#product_table tbody`);
table = document.getElementById("product_table");
  tr = table.getElementsByTagName("tr");
Add.onclick = () => {
    
if(Id.value==0||Name.value==""||Group.value==""){
    alert("Fill all required fields");
}
else{
    item = new Student(Id.value, Name.value, Group.value, isChecked.checked);
    tBody.innerHTML += `
                    <tr>
                        <td>${item.Id}</td>
                        <td>${item.Name}</td> 
                        <td>${item.isChecked}</td> 
                        <td>${item.Group}</td>    
                    </tr>
                    `;

}
};
Clear.onclick = () =>{
    tBody.innerHTML="";
};
function myFunction(){
    filter = Filter.value.toUpperCase();
    table = document.getElementById("product_table");
    tr = table.getElementsByTagName("tr");
    for (i = 1; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
};
class Student{
    constructor(ID, Name, isChecked, Group){
        this.Id=ID;
        this.Name=Name;
        this.Group=Group;
        this.isChecked=isChecked;
        let row=Student.count++;

    }
};
