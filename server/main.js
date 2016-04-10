main = function () {
  require('slackin')({
    token: Meteor.settings.token, // required
    interval: 100000,
    org: 'apollostack', // required
    //silent: false // suppresses warnings
  }).listen(process.env.PORT);

  console.log("LISTENING");

  return 'DAEMON';
}
