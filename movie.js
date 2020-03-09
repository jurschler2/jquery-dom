
$("form").on("submit", appendScores);

function appendScores(evt) {

  evt.preventDefault();

  let title = $("#movie").val();
  let rating = $("#rating").val();

  $(".movieRating").append(`
    <div> Title: ${title} Rating:${rating}   
      <button class = 'delete'> x  
    </div>
  `)
  
  $("form").trigger("reset");
}

function removeRating(evtTarget) {
  $(evtTarget).parent().remove();
}

$(".movieRating").on("click", ".delete", function (evt) {
  removeRating(evt.target);
});  




