Template.register.events({
  'submit form': function() {
    event.preventDefault();
    var email = event.target.email.value;
    var password = event.target.password.value;
    var gender = event.target.sex.value;
    var name = event.target.username.value;
    var age = event.target.age.value;
    profile = {
      gender: gender,
      hasDb:false,
      age:age
    };
    Accounts.createUser({
        email: email,
        password: password,
        username: name,
        profile: profile
      },
      function(error) {
        if (error) {
          sweetAlert(error.reason);
        } else {
          Router.go('details');
        }
      });

    $('[name = password]').val('');
    $('[name = email]').val('');
  },

});


// ........................login.............................

Template.login.events({
  'submit form': function(event) {
    event.preventDefault();
    var email = event.target.email.value;
    var password = event.target.password.value;

    Meteor.loginWithPassword(email, password,
      function(error) {

        if (error) {
          sweetAlert(error.reason);
        } else {
          Router.go('list');
        };
      });
    $('[name="listName"]').val('');
    $('[name = password]').val('');
  }
});
