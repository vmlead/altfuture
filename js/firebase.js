// grab a form
const form = document.querySelector('.sub-form');

// grab an input
const inputEmail = form.querySelector('#inputEmail');

// config your firebase push
const config = {
    apiKey: "AIzaSyC80yD3rwatY-HrZsFgrfNkfueKKdT2hrg",
    authDomain: "altfuture-test.firebaseapp.com",
    databaseURL: "https://altfuture-test-default-rtdb.firebaseio.com",
    projectId: "altfuture-test",
    storageBucket: "altfuture-test.appspot.com",
    messagingSenderId: "162890812619",
    appId: "1:162890812619:web:29b5f06617577384c29f4e",
    measurementId: "G-JEYK7LCTTJ"
  };

//   create a fun to push

  function firebasePush(input) {
    //   prevent from braking
    if (!firebase.apps.length){
        firebase.initializeApp(config);
    }

    // push itself
    var mailRef = firebase.database().ref('emails').push().set(
        {
            mail: input.value
        }
    );
  }

//   push on form submit
if (form) {
    form.addEventListener('submit', function(evt) {
        evt.preventDefault();
        firebasePush(inputEmail);

        // show alert if everything went well
        return alert('Data Successfully Sent to database');
    }
    )
}

  // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
