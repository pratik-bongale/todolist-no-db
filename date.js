module.exports.getDate = function () {
// same as exports.getDate = function () {
// same as export function getDate () { ES6 syntax, needs babel to convert it into ES5


    const date = new Date();

    const options = {
      weekday: "long",
      month: "long",
      day: "numeric"
    }

    return date.toLocaleDateString("en-US", options)

}


module.exports.getDay = function () {
// export function getDay () {

    var date = new Date();

    var options = {
      weekday: "long",
    }

    return date.toLocaleDateString("en-US", options)

}
