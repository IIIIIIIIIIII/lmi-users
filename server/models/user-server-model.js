var User = function(fullName, mailAddress, occupation, birthday) {
  this.fullName = fullName;
  this.mailAddress = mailAddress;
  this.occupation = occupation;
  this.birthday = birthday;
};

var isNameValid = function(name) {
  var nameTokens = name.split(" ");
  // right now only the letters of the English alphabet allowed in names
  if (!/[a-zA-z]+/.test(name)) { return false; }
  // the string also should be at least 2 words as the first and last name,
  // could be more though with middle names
  if (nameTokens.length < 2) { return false; }
  // the length of the individual words should also contain more than 2-3 characters;
  // it is a reasonable expectation that these name components are more than
  // a few characters long, so "A BC D" shouldnt pass as a valid name
  for (var i = 0; i < nameTokens.length; i += 1) {
    if (nameTokens[i].length < 3) { return false; }
  }
  // otherwise the name is valid
  return true;
};

var isMailAddressValid = function(mail) {
  if (/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(mail)) {
    return true;
  } else { return false; }
};

var isOldEnough = function(birthdayString) {
  // in case the user didn't share his/her birthday
  if (!birthdayString) { return true; }
  var birthDayTokens = birthdayString.split("-");
  var birthDay = new Date(birthDayTokens[0], birthDayTokens[1], birthDayTokens[2]);
  var now = new Date();
  return (now.getTime() - birthDay.getTime() > 568024668000) ? true : false;
};

var createError = function(reason) {
  return { status: "error", reason: reason };
};

// validate a user object
User.prototype.validate = function() {

  if (!this.fullName) {
    return createError("Full name must be provided");
  }

  if (!this.mailAddress) {
    return createError("Mail address must be provided");
  }

  if (!isNameValid(this.fullName)) {
    return createError("The name should contain only English letters "
                       + "and at least 2 words");
  }

  if (!isMailAddressValid(this.mailAddress)) {
    return createError("Invalid e-mail address");
  }

  if (!isOldEnough(this.birthday)) {
    return createError("Have to be older than 18 years old");
  }

  return { status: "success", reason: null };
};

exports.createUser = function(userData) {
  return new User(userData.fullName, userData.mailAddress,
                  userData.occupation, userData.birthday);
};