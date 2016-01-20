$(document).ready(function() {
  $("#prefs form").submit(function(event) {
    var result = "no";
    var river = $("select#river").val();
    var temp = $("select#temp").val();
    var hemi = $("select#hemi").val();
    var devel = $("select#devel").val();
    var cheese = $("select#cheese").val();

      if (river === "riverYes" && temp === "tempCool" && hemi === "hemiNorth" && devel === "develYes" && cheese === "cheeseYes") {
        var result = "yes";
        $('#Milwaukee').fadeIn();
        $('#PortlandMaine').hide();
        $('#elPaso').hide();
        $('#Brazil').hide();
        $('#Antarctica').hide();
        $('#whoops').hide();
      }

      if (river === "riverYes" && temp === "tempCool" && hemi === "hemiNorth" && devel === "develYes" && cheese === "cheeseNo") {
        var result = "yes";
        $('#PortlandMaine').fadeIn();
        $('#elPaso').hide();
        $('#Brazil').hide();
        $('#Milwaukee').hide();
        $('#Antarctica').hide();
        $('#whoops').hide();
      }

      if (river === "riverYes" && temp === "tempHot" && hemi === "hemiNorth" && devel === "develYes" && cheese === "cheeseYes") {
        var result = "yes";
        $('#Antarctica').hide();
        $('#elPaso').fadeIn();
        $('#Brazil').hide();
        $('#Milwaukee').hide();
        $('#PortlandMaine').hide();
        $('#whoops').hide();
      }

      if (river === "riverYes" && temp === "tempHot" && hemi === "hemiSouth" && devel === "develYes" && cheese === "cheeseYes") {
        var result = "yes";
        $('#Antarctica').hide();
        $('#Brazil').fadeIn();
        $('#elPaso').hide();
        $('#Milwaukee').hide();
        $('#PortlandMaine').hide();
        $('#whoops').hide();
      }

      if (river === "riverNo" && temp === "tempCool" && hemi === "hemiSouth" && devel === "develNo" && cheese === "cheeseNo") {
        var result = "yes";
        $('#Antarctica').fadeIn();
        $('#Brazil').hide();
        $('#elPaso').hide();
        $('#Milwaukee').hide();
        $('#PortlandMaine').hide();
        $('#whoops').hide();
      }

      if (result === "no") {
        alert('Whoops, no results for those selections, try something else!')
      }
    event.preventDefault();

    });
  });
