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
                $('#Milwaukee').fadeIn();
                $('#PortlandMaine').hide();
                $('#elPaso').hide();
                $('#Brazil').hide();
                $('#Antarctica').hide();
                $('#whoops').hide();
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
                var result = "yes";
                $('#PortlandMaine').fadeIn();
                $('#elPaso').hide();
                $('#Brazil').hide();
                $('#Milwaukee').hide();
                $('#Antarctica').hide();
                $('#whoops').hide();
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
                var result = "yes";
                $('#Antarctica').hide();
                $('#elPaso').fadeIn();
                $('#Brazil').hide();
                $('#Milwaukee').hide();
                $('#PortlandMaine').hide();
                $('#whoops').hide();
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
                var result = "yes";
                $('#Antarctica').hide();
                $('#Brazil').fadeIn();
                $('#elPaso').hide();
                $('#Milwaukee').hide();
                $('#PortlandMaine').hide();
                $('#whoops').hide();
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
                var result = "yes";
                $('#Antarctica').fadeIn();
                $('#Brazil').hide();
                $('#elPaso').hide();
                $('#Milwaukee').hide();
                $('#PortlandMaine').hide();
                $('#whoops').hide();
                }
              }
            }
          }
        }
      if (result === "no") {
        alert('Whoops, no results for those selections, try something else!')
      }
    event.preventDefault();

    });
  });
