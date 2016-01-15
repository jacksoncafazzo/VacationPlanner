$(document).ready(function() {
  $("#prefs form").submit(function(event) {
    debugger
    console.log('tests')
    var result = "no";
    var river = $("select#river").val();
    var temp = $("select#temp").val();
    var hemi = $("select#hemi").val();
    var devel = $("select#devel").val();
    var cheese = $("select#cheese").val();
      if (river === "riverYes") {
        if (temp === "tempCool") {
          if (hemi === "hemiNorth") {
            if (devel === "develYes") {
              if (cheese === "cheeseYes") {
                var result = "yes";
                $('#Milwaukee').show();
                $('#PortlandMaine').hide();
                $('#elPaso').hide();
                $('#Brazil').hide();
                }
              }
            }
          }
        }
      if (river === "riverYes") {
        if (temp === "tempCool") {
          if (hemi === "hemiNorth") {
            if (devel === "develYes") {
              if (cheese === "cheeseNo") {
                $('#PortlandMaine').show();
                $('#elPaso').hide();
                $('#Brazil').hide();
                $('#Milwaukee').hide();
                }
              }
            }
          }
        }
      if (river === "riverYes") {
        if (temp === "tempHot") {
          if (hemi === "hemiNorth") {
            if (devel === "develYes") {
              if (cheese === "cheeseYes") {
                $('#elPaso').show();
                $('#Brazil').hide();
                $('#Milwaukee').hide();
                $('#PortlandMaine').hide();
                }
              }
            }
          }
        }
      if (river === "riverYes") {
        if (temp === "tempHot") {
          if (hemi === "hemiSouth") {
            if (devel === "develYes") {
              if (cheese === "cheeseYes") {
                $('#Brazil').show();
                $('#elPaso').hide();
                $('#Milwaukee').hide();
                $('#PortlandMaine').hide();
                }
              }
            }
          }
        }
      if (river === "riverNo") {
        if (temp === "tempCool") {
          if (hemi === "hemiSouth") {
            if (devel === "develNo") {
              if (cheese === "cheeseNo") {
                $('#Antarctica').show();
                $('#Brazil').hide();
                $('#elPaso').hide();
                $('#Milwaukee').hide();
                $('#PortlandMaine').hide();
                }
              }
            }
          }
        }
      if (result === "no") {
        $('#whoops').show();
      }
    event.preventDefault();

    });
  });
