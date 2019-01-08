$(document).ready(function(){
    $(".devour").on("submit", function(event){
        event.preventDefault();

        var burgerid = $(this).children(".burgerid").val();
        console.log(burgerid);

        $.ajax({
            method: "PUT",
            url: "/burgers/" + burgerid
        }).then(function(data){
            location.reload();
        })

    })
})