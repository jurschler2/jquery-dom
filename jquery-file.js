$(function() {
  console.log("Let's get ready to party with jQuery!");
})


$("img").addClass(".image-center");

$("p").last().remove();



$("#title")
    .css("font-size", Math.random()*100)

$("ol").append("<li>This is a new bullet point");

$("li").remove();
$("ol").append("<p> Sorry for putting the list in here!");

$(".form-control").on("click", changeColor)

function changeColor() {

  let arr = $(".form-control").get();
  let rgb1 = parseInt(arr[0].value);
  let rgb2 = parseInt(arr[1].value);
  let rgb3 = parseInt(arr[2].value);

  $("body")
      .css("background-color", `rgb(${rgb1}, ${rgb2}, ${rgb3})`);
}

$("img").on('click',removeImage)

function removeImage() {
$("img").remove()

}