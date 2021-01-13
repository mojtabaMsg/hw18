$(document).ready(function () {
    $("button").click(function () {
        $.get("https://5ffdfe10d9ddad0017f68c79.mockapi.io/students",function (data,status){
            console.log(data);
           $("#mytb2").empty();
            for (i = 0 ; i<data.length;i++){
                $("#mytb2").append("<tr><td>"+data[i].fname+"</td>"+"<td>"+data[i].lname+"</td>"+"<td>"+data[i].nCode+"</td>"+
                    "<td>"+data[i].tell+"</td>"+"<td>"
                    +data[i].age+"</td>"+"<td><img src='"+data[i].avatar+"' ></td>"+"</tr>");
            }
        })

        })
    $("form").submit(function (event) {
        event.preventDefault();
        $.post("https://5ffdfe10d9ddad0017f68c79.mockapi.io/students",{fname:event.target.FirstName.value,lname:event.target.LastName.value,
             age:event.target.age.value,nCode:event.target.NationalCode.value,tell:event.target.NationalCode.value,avatar:event.target.img.value},function (status,data) {


        })
    })


    }
)