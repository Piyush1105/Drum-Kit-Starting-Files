for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelector(".drum")[i].addEventListener("click", function() {
        alert("i got clicked");
    });

}