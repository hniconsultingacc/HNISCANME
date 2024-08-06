window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script2 = function()
{
  /*####################################*/
player.SetVar("Client", "HNI");
/*####################################*/

var firebaseConfig = {
  apiKey: "AIzaSyBHHFTre1L76I9mtXCoaQZr-Y2U2qVjDRg",
  authDomain: "scanme10.firebaseapp.com",
  projectId: "scanme10",
  storageBucket: "scanme10.appspot.com",
  messagingSenderId: "417477205176",
  appId: "1:417477205176:web:081113d63a4107bc2be84d"
};

var parentWindow = window.parent;

var script1 = document.createElement('script');
var script2 = document.createElement('script');
var script3 = document.createElement('script');

script1.src = 'https://www.gstatic.com/firebasejs/8.2.7/firebase-app.js';
script2.src = 'https://www.gstatic.com/firebasejs/8.2.7/firebase-database.js';
script3.src = 'https://www.gstatic.com/firebasejs/8.2.7/firebase-auth.js';

parentWindow.document.head.appendChild(script1);
parentWindow.document.head.appendChild(script2);
parentWindow.document.head.appendChild(script3);


function firebasedefine() {
    firebase.initializeApp(firebaseConfig);
    var player = GetPlayer();
    var Client = player.GetVar("Client");
    var mainBranchRef = firebase.database().ref(Client);

    mainBranchRef.once('value', function(snapshot) {
        if(!snapshot.exists()) {
            firebase.database().ref(Client + '/').set({
                Phase: 1,
            });
}
})
}

setTimeout(firebasedefine, 2000);

function getphase() {
    var player = GetPlayer();
    var Phase;
    var Client = player.GetVar("Client")
    firebase.database().ref(Client + '/').once("value", function(snapshot) {
        Phase = snapshot.val().Phase;
        player.SetVar("Phase", Phase);
    })
}
setTimeout(getphase, 3000);
}

window.Script3 = function()
{
  var player = GetPlayer();
var Phase;
var Name;
var Username;
var Password;

Name = player.GetVar("Name");
Username = player.GetVar("Username").toLowerCase();
Username = Username.trim();
Password = player.GetVar("Password");
var Client = player.GetVar("Client");
var Q = player.GetVar("Q");
var A = player.GetVar("A");

// Check for invalid characters in Username
var invalidChars = /[.#$[\]]/;
if (invalidChars.test(Username)) {
    player.SetVar("Message", "Username should be text and numbers only");
    setTimeout(function() {
    player.SetVar("Message", " ");
    }, 3000);
    setTimeout(function() {
        player.SetVar("Message", " ");
    }, 3000);
} else {
    firebase.database().ref(Client + '/' + Username).once("value", function(snapshot) {
        if (snapshot.exists()) {
            let dbUsername = snapshot.val().Username;
            if (dbUsername == Username) {
                player.SetVar("Message", "Username is already used by another account");
                setTimeout(function() {
                    player.SetVar("Message", " ");
                }, 3000);
            }
        } else {
            const database = firebase.database();
            const rootRef = database.ref(Client + '/');
            rootRef.child(Username).set({
                Name: Name,
                Username: Username,
                Password: Password,
            }).then(() => {
                // Uncommented section to add questions and initialize other variables
                rootRef.child(Username + "/Question").set({
                    // Assuming initial score is 0
                    Score: 0,
                });
                // Set additional variables if needed
                player.SetVar("Go", "True");
                firebase.database().ref(Client + "/" + Username + "/Old").child(Username).set(Username);
            });
        }
    });
}
}

window.Script4 = function()
{
  var player = GetPlayer();
var Phase;
var Name;
var Username;
var Password;

Name = player.GetVar("Name");
Username = player.GetVar("Username").toLowerCase();
Username = Username.trim();
Password = player.GetVar("Password");
var Client = player.GetVar("Client");
var Q = player.GetVar("Q");
var A = player.GetVar("A");

// Check for invalid characters in Username
var invalidChars = /[.#$[\]]/;
if (invalidChars.test(Username)) {
    player.SetVar("Message", "Username should be text and numbers only");
    setTimeout(function() {
    player.SetVar("Message", " ");
    }, 3000);
    setTimeout(function() {
        player.SetVar("Message", " ");
    }, 3000);
} else {
    firebase.database().ref(Client + '/' + Username).once("value", function(snapshot) {
        if (snapshot.exists()) {
            let dbUsername = snapshot.val().Username;
            if (dbUsername == Username) {
                player.SetVar("Message", "Username is already used by another account");
                setTimeout(function() {
                    player.SetVar("Message", " ");
                }, 3000);
            }
        } else {
            const database = firebase.database();
            const rootRef = database.ref(Client + '/');
            rootRef.child(Username).set({
                Name: Name,
                Username: Username,
                Password: Password,
            }).then(() => {
                // Uncommented section to add questions and initialize other variables
                rootRef.child(Username + "/Question").set({
                    // Assuming initial score is 0
                    Score: 0,
                });
                // Set additional variables if needed
                player.SetVar("Go", "True");
                firebase.database().ref(Client + "/" + Username + "/Old").child(Username).set(Username);
            });
        }
    });
}
}

window.Script5 = function()
{
      var player = GetPlayer();
    var Username = player.GetVar("Username").toLowerCase();
    Username = Username.trim();
    var Password = player.GetVar("Password");
    var Client = player.GetVar("Client");

    firebase.database().ref(Client + '/' + Username).once("value", function(snapshot) {

        if (snapshot.exists()) {
            let dbPassword = snapshot.val().Password;
            if (dbPassword == Password) {
                let Name = snapshot.val().Name;
                player.SetVar("Name", Name);                
                localStorage.setItem("Par_Username", "");
                
                firebase.database().ref(Client +'/' + Username + '/Question').once("value", function(snapshot) {             
                let Score = snapshot.val().Score;
                player.SetVar("Score", Score);});                                
                player.SetVar("Go", true);
            } else {

                player.SetVar("Message", "Wrong Username or Password");
                setTimeout(function() {
                    player.SetVar("Message", " ");
                }, 3000);


            }
        } else {
            player.SetVar("Message", "This data does not exist");
            setTimeout(function() {
                player.SetVar("Message", " ");
            }, 3000);
        }
    })
}

window.Script6 = function()
{
      var player = GetPlayer();
    var Username = player.GetVar("Username").toLowerCase();
    Username = Username.trim();
    var Password = player.GetVar("Password");
    var Client = player.GetVar("Client");

    firebase.database().ref(Client + '/' + Username).once("value", function(snapshot) {

        if (snapshot.exists()) {
            let dbPassword = snapshot.val().Password;
            if (dbPassword == Password) {
                let Name = snapshot.val().Name;
                player.SetVar("Name", Name);                
                localStorage.setItem("Par_Username", "");
                
                firebase.database().ref(Client +'/' + Username + '/Question').once("value", function(snapshot) {             
                let Score = snapshot.val().Score;
                player.SetVar("Score", Score);});                                
                player.SetVar("Go", true);
            } else {

                player.SetVar("Message", "Wrong Username or Password");
                setTimeout(function() {
                    player.SetVar("Message", " ");
                }, 3000);


            }
        } else {
            player.SetVar("Message", "This data does not exist");
            setTimeout(function() {
                player.SetVar("Message", " ");
            }, 3000);
        }
    })
}

window.Script7 = function()
{
  var player = GetPlayer();
var Username = player.GetVar("Username").toLowerCase();
var Par_Username = player.GetVar("Par_Username").toLowerCase();
Par_Username = Par_Username.trim();
var Client = player.GetVar("Client");
var Old;

firebase.database().ref(Client+'/' + Par_Username).once("value", function(snapshot) {
    if (!snapshot.exists()) {
        player.SetVar("Message", "This data does not exist");
        setTimeout(function() {
            player.SetVar("Message", " ");
        }, 3000);
    } else {
        firebase.database().ref(Client+"/" + Username + "/Old").once("value").then(function(snapshot) {
            Old = snapshot.child(Par_Username).exists();
            if (Old) {
                player.SetVar("Par_Username", "");
                player.SetVar("Message", "You Should Scan Another One");
                setTimeout(function() {
                    player.SetVar("Message", " ");
                }, 3000);
            } else {	
				firebase.database().ref(Client+'/' + Par_Username).once("value", function(snapshot) {
				var Name = snapshot.val().Name;
                player.SetVar("Name", Name);
				});				
                firebase.database().ref(Client+'/' + Par_Username + '/Question').once("value", function(snapshot) {
                    var True1 = snapshot.val().True1;
                    var True2 = snapshot.val().True2;
                    var Lie = snapshot.val().Lie;
                    player.SetVar("True1", True1);
                    player.SetVar("True2", True2);
                    player.SetVar("Lie", Lie);
                    player.SetVar("Q", "1");
                });
                firebase.database().ref(Client+"/" + Username + "/Old").child(Par_Username).set(Par_Username);
            }
        })
    }
});
}

window.Script8 = function()
{
  var player = GetPlayer();

        player.SetVar("Message", "Enter Your Partner Code First");
            setTimeout(function() {
                player.SetVar("Message", "");
            }, 3000);
}

window.Script9 = function()
{
  var player = GetPlayer();
var Username = player.GetVar("Username").toLowerCase();
var Par_Username = player.GetVar("Par_Username").toLowerCase();
 Par_Username = Par_Username.trim();
var Client = player.GetVar("Client");
var Old;

firebase.database().ref(Client+'/' + Par_Username).once("value", function(snapshot) {
    if (!snapshot.exists()) {
        player.SetVar("Message", "This data does not exist");
        setTimeout(function() {
            player.SetVar("Message", " ");
        }, 3000);
    } else {
        firebase.database().ref(Client+"/" + Username + "/Old").once("value").then(function(snapshot) {
            Old = snapshot.child(Par_Username).exists();
            if (Old) {
                player.SetVar("Par_Username", "");
                player.SetVar("Message", "You Should Scan Another One");
                setTimeout(function() {
                    player.SetVar("Message", " ");
                }, 3000);
            } else {	
				firebase.database().ref(Client+'/' + Par_Username).once("value", function(snapshot) {
				var Name = snapshot.val().Name;
                player.SetVar("Name", Name);
				});				
                firebase.database().ref(Client+'/' + Par_Username + '/Question').once("value", function(snapshot) {
                    var True1 = snapshot.val().True1;
                    var True2 = snapshot.val().True2;
                    var Lie = snapshot.val().Lie;
                    player.SetVar("True1", True1);
                    player.SetVar("True2", True2);
                    player.SetVar("Lie", Lie);
                    player.SetVar("Q", "1");
                });
                firebase.database().ref(Client+"/" + Username + "/Old").child(Par_Username).set(Par_Username);
            }
        })
    }
});
}

window.Script10 = function()
{
  var player = GetPlayer();

        player.SetVar("Message", "Enter Your Partner Code First");
            setTimeout(function() {
                player.SetVar("Message", "");
            }, 3000);
}

window.Script11 = function()
{
  var player = GetPlayer();
var Par_Username = localStorage.getItem("Par_Username").toLowerCase();
var Username = player.GetVar("Username").toLowerCase();
 Par_Username = Par_Username.trim();
var Client = player.GetVar("Client");
var Old;

var Phase;
firebase.database().ref(Client + '/').once("value", function(snapshot) {
    Phase = snapshot.val().Phase;
    player.SetVar("Phase", Phase);
})


if (Par_Username) {
    player.SetVar("Par_Username", Par_Username);
    firebase.database().ref(Client +'/' + Par_Username).once("value", function(snapshot) {

        if (!snapshot.exists()) {

            player.SetVar("Message", "This data does not exist");
            setTimeout(function() {
                localStorage.setItem("Par_Username", "");
                player.SetVar("Message", " ");
            }, 3000);
        } else {

firebase.database().ref(Client+"/" + Username + "/Old").once("value").then(function(snapshot) {
	Old = snapshot.child(Par_Username).exists();

                if (Old) {

                    player.SetVar("Par_Username", "0");
                    localStorage.setItem("Par_Username", "");
                    player.SetVar("Message", "You Should Scan Another One");
                    setTimeout(function() {
                        player.SetVar("Message", " ");
                    }, 3000);
                } else {

                    firebase.database().ref(Client+'/' + Par_Username).once("value", function(snapshot) {
                        var Name = snapshot.val().Name;
                        player.SetVar("Name", Name);
                        firebase.database().ref(Client+'/' + Par_Username + '/Question').once("value", function(snapshot) {
                    var True1 = snapshot.val().True1;
                    var True2 = snapshot.val().True2;
                    var Lie = snapshot.val().Lie;
                    player.SetVar("True1", True1);
                    player.SetVar("True2", True2);
                    player.SetVar("Lie", Lie);
                    player.SetVar("Q", "1");
                        });
                    });
                    firebase.database().ref(Client+"/" + Username + "/Old").child(Par_Username).set(Par_Username);
                }
            });
        }
    })
}
}

window.Script12 = function()
{
  var player = GetPlayer();
var Par_Username = localStorage.getItem("Par_Username").toLowerCase();
var Username = player.GetVar("Username").toLowerCase();
 Par_Username = Par_Username.trim();
var Client = player.GetVar("Client");
var Old;

var Phase;
firebase.database().ref(Client + '/').once("value", function(snapshot) {
    Phase = snapshot.val().Phase;
    player.SetVar("Phase", Phase);
})


if (Par_Username) {
    player.SetVar("Par_Username", Par_Username);
    firebase.database().ref(Client +'/' + Par_Username).once("value", function(snapshot) {

        if (!snapshot.exists()) {

            player.SetVar("Message", "This data does not exist");
            setTimeout(function() {
                localStorage.setItem("Par_Username", "");
                player.SetVar("Message", " ");
            }, 3000);
        } else {

firebase.database().ref(Client+"/" + Username + "/Old").once("value").then(function(snapshot) {
	Old = snapshot.child(Par_Username).exists();

                if (Old) {

                    player.SetVar("Par_Username", "0");
                    localStorage.setItem("Par_Username", "");
                    player.SetVar("Message", "You Should Scan Another One");
                    setTimeout(function() {
                        player.SetVar("Message", " ");
                    }, 3000);
                } else {

                    firebase.database().ref(Client+'/' + Par_Username).once("value", function(snapshot) {
                        var Name = snapshot.val().Name;
                        player.SetVar("Name", Name);
                        firebase.database().ref(Client+'/' + Par_Username + '/Question').once("value", function(snapshot) {
                    var True1 = snapshot.val().True1;
                    var True2 = snapshot.val().True2;
                    var Lie = snapshot.val().Lie;
                    player.SetVar("True1", True1);
                    player.SetVar("True2", True2);
                    player.SetVar("Lie", Lie);
                    player.SetVar("Q", "1");
                        });
                    });
                    firebase.database().ref(Client+"/" + Username + "/Old").child(Par_Username).set(Par_Username);
                }
            });
        }
    })
}
}

window.Script13 = function()
{
  var player = GetPlayer();
var Username = player.GetVar("Username").toLowerCase();
var Client = player.GetVar("Client");
var Score = player.GetVar("Score");
var Phase;

        Score -= 1;
        firebase.database().ref(Client+'/' + Username + '/Question').update({
            Score: Score
        })    

firebase.database().ref(Client + '/').once("value", function(snapshot) {
    Phase = snapshot.val().Phase;
    player.SetVar("Phase", Phase);
	player.SetVar("Score", Score);
    player.SetVar("Q", 0);
})
}

window.Script14 = function()
{
  var player = GetPlayer();
var Username = player.GetVar("Username").toLowerCase();
var Client = player.GetVar("Client");
var Score = player.GetVar("Score");
var Phase;

        Score += 1;
        firebase.database().ref(Client+'/' + Username + '/Question').update({
            Score: Score
        })    

firebase.database().ref(Client + '/').once("value", function(snapshot) {
    Phase = snapshot.val().Phase;
    player.SetVar("Phase", Phase);
	player.SetVar("Score", Score);
    player.SetVar("Q", 0);
})
}

window.Script15 = function()
{
          player.SetVar("Message", "Enter Your Answer First");
        setTimeout(function() {
            player.SetVar("Message", " ");
        }, 3000);
}

window.Script16 = function()
{
          player.SetVar("Message", "Enter Your Answer First");
        setTimeout(function() {
            player.SetVar("Message", " ");
        }, 3000);
}

window.Script17 = function()
{
  var player = GetPlayer();
var Username = player.GetVar("Username").toLowerCase();
var True1 = player.GetVar("True1");
var True2 = player.GetVar("True2");
var Lie = player.GetVar("Lie");
var Client = player.GetVar("Client");

    firebase.database().ref(Client+'/' + Username + '/Question').update({
        ['True1']: True1,
        ['True2']: True2,
        ['Lie']: Lie,
    });
}

window.Script18 = function()
{
          player.SetVar("Message", "Enter Your Answer First");
        setTimeout(function() {
            player.SetVar("Message", " ");
        }, 3000);
}

};
