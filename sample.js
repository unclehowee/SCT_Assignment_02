function getProfile(userId) {
    const profile = database.getProfileById(userId);
    if (profile) {
      return profile;
    } else {
      return "Profile not found";
    }
}
  

function displayComment(comment) {
    document.getElementById("comment-display").innerHTML = comment; 
}
  
function calculate(expression) {
    return eval(expression);
}

function processUserInput(input) {
    console.log("User input:", input);
}
  
function generateRandomToken() {
    return Math.random().toString(36).substring(2); 
}
  