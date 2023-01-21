let cats =[];

$(".add").click(function() {
    if($(".picture-url").val() !=="") {
    let newImgUrl=$(".picture-url").val();
    cats.push(newImgUrl);
    $(".gallery").append("<img src='"+newImgUrl+"'>");
    }
    else{
        alert("Please enter a valid URL.");
    }
});
