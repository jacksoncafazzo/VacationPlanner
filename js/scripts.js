$(document).ready(function() {
  $("#prefs form").submit(function(event) {
    debugger
    var river = $("select#river").val();
    var temp = $("select#temp").val();
    var hemi = $("select#hemi").val();
    var devel = $("select#devel").val();
    var cheese = $("select#cheese").val();

    if (river = "riverYes") {
      if (temp = "tempCool") {
        if (hemi = "hemiNorth") {
          if (devel = "develYes") {
            if (cheese = "cheeseYes") {
              $('#Milwaukee').show();
            } else {
              $('#chooseAgain').show();
              }
            }
          }
        }
      }
    if (river = "riverYes") {
      if (temp = "tempCool") {
        if (hemi = "hemiNorth") {
          if (devel = "develYes") {
            if (cheese = "cheeseNo") {
              $('#PortlandMaine').show();
            } else {
              $('#chooseAgain').show();
              }
            }
          }
        }
      }
      if (river = "riverNo") {
        if (temp = "tempHot") {
          if (hemi = "hemiNorth") {
            if (devel = "develYes") {
              if (cheese = "cheeseYes") {
                $('#ElPaso').show();
              } else {
                $('#chooseAgain').show();
                }
              }
            }
          }
        }
    event.preventDefault();

    });
  });
