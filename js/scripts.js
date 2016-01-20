$(document).ready(function() {
  $("#prefs form").submit(function(event) {
    var result = "no";
    var river = $("select#river").val();
    var temp = $("select#temp").val();
    var hemi = $("select#hemi").val();
    var devel = $("select#devel").val();
    var cheese = $("select#cheese").val();
    var destResults = ['#Milwaukee', '#PortlandMaine', '#elPaso', '#Brazil', '#Antarctica'];
    $(destResults.join(', ')).fadeOut();

      if (river === "riverYes" && temp === "tempCool" && hemi === "hemiNorth" && devel === "develYes" && cheese === "cheeseYes") {
        var result = "yes";
        var index = 0
      }

      if (river === "riverYes" && temp === "tempCool" && hemi === "hemiNorth" && devel === "develYes" && cheese === "cheeseNo") {
        var result = "yes";
        var index = 1
      }

      if (river === "riverYes" && temp === "tempHot" && hemi === "hemiNorth" && devel === "develYes" && cheese === "cheeseYes") {
        var result = "yes";
        var index = 2
      }

      if (river === "riverYes" && temp === "tempHot" && hemi === "hemiSouth" && devel === "develYes" && cheese === "cheeseYes") {
        var result = "yes";
        var index = 3
      }

      if (river === "riverNo" && temp === "tempCool" && hemi === "hemiSouth" && devel === "develNo" && cheese === "cheeseNo") {
        var result = "yes";
        var index = 4
      }

      $(destResults[index]).fadeIn();


      if (result === "no") {
        alert('Whoops, no results for those selections, try something else!')
      }
    event.preventDefault();

    });
  });
