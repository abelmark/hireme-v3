const keys = require("../config/keys");
const Mailchimp = require("mailchimp-api-v3");

let mc_api_key = keys.mailChimpApiKey;
let list_id = keys.mailChimpListId;

const mailchimp = new Mailchimp(mc_api_key);
