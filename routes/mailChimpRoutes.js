const keys = require("../config/keys");
const Mailchimp = require("mailchimp-api-v3");

module.exports = app => {
  let mc_api_key = keys.mailChimpApiKey;
  let list_id = keys.mailChimpListId;

  const mailchimp = new Mailchimp(mc_api_key);

  //routes
  app.get("/api/memberList", (req, res) => {
    mailchimp
      .get(`/lists/${list_id}/members`)
      .then(function(results) {
        res.send(results);
      })
      .catch(function(err) {
        res.send(err);
      });
  });

  app.post("/api/memberList", (req, res) => {
    mailchimp
      .post(`/lists/${list_id}/members`, {
        email_address: "abelmarka@gmail.com",
        status: "subscribed"
      })
      .then(function(results) {res.send(results)})
      .catch(function(err) {console.log(err)});
  });
};
