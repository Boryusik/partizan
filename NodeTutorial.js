// var Tutor = require('./Tutorial.js');
// exports.NodeTutorials = function () {
//     console.log("Node Tutorial")
//     function pTutor() {
//         var PTuta = Tutor
//         PTuta.tutorial();
//     }
// }

//Or
var Tutor = require('./Tutorial.js');
exports.NodeTutorials = function () {
    console.log("Node Tutorial")
    this.pTutor = ((name)=>{
        console.log("Hello "+ req);
        var PTutor = Tutor
        PTutor.tutorial();
    })
}