function saveForm(event)
{ 
    event.preventDefault()
    var name = document.getElementById("name").value
    var age = document.getElementById("age").value
    var email = document.getElementById("email").value
    var gender = document.querySelector('input[name="gender"]:checked').value
    var course = document.querySelector("select").value
    var table = document.getElementById("studentTable")

    var row = table.insertRow(-1)

    var cell1 = row.insertCell(0)
    var cell2 = row.insertCell(1)
    var cell3 = row.insertCell(2)
    var cell4 = row.insertCell(3)
    var cell5 = row.insertCell(4)
    var cell6 = row.insertCell(5)

    cell1.innerHTML = name
    cell2.innerHTML = age
    cell3.innerHTML = gender
    cell4.innerHTML = course
    cell5.innerHTML = email
    cell6.innerHTML = "<button onclick='deleteRow(this)'style='background-color: red; color: white; border: none; padding: 5px 10px;border-radius:5px; cursor: pointer;'>Delete</button>"
}


function deleteRow(btn)
{
    var row = btn.parentNode.parentNode
    row.remove()
}