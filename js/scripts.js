$(document).ready(function() {
  $("#prefs form").submit(function(event) {
    var index = -1
    var river = $("select#river").val();
    var temp = $("select#temp").val();
    var hemi = $("select#hemi").val();
    var devel = $("select#devel").val();
    var cheese = $("select#cheese").val();
    var destResults = ['#Milwaukee', '#PortlandMaine', '#elPaso', '#Brazil', '#Antarctica'];
    $(destResults.join(', ')).fadeOut();

      if (river === "riverYes" && temp === "tempCool" && hemi === "hemiNorth" && devel === "develYes" && cheese === "cheeseYes") {
        var index = 0;
      }

      if (river === "riverYes" && temp === "tempCool" && hemi === "hemiNorth" && devel === "develYes" && cheese === "cheeseNo") {
        var index = 1;
      }

      if (river === "riverYes" && temp === "tempHot" && hemi === "hemiNorth" && devel === "develYes" && cheese === "cheeseYes") {
        var index = 2;
      }

      if (river === "riverYes" && temp === "tempHot" && hemi === "hemiSouth" && devel === "develYes" && cheese === "cheeseYes") {
        var index = 3;
      }

      if (river === "riverNo" && temp === "tempCool" && hemi === "hemiSouth" && devel === "develNo" && cheese === "cheeseNo") {
        var index = 4;
      }

      if (index === -1) {
        alert('Whoops, no results for those selections, try something else!');
      }

    $(destResults[index]).fadeIn();
    event.preventDefault();
    });
  });
