;
(function() {
  'use strict'
  // Our Gold Digger Module/Controller
  angular.module('GoldDigger', [])
    .controller("GoldDiggerController", GoldDiggerController)
    // hoisted GoldDiggerController Function
  function GoldDiggerController() {
    var Gold = this
    Gold.pinsArray = []
    Gold.noteInput = "Hi!"
    Gold.okToPlace = true
    // var img = document.querySelector(".Map")
    // Gold.imgWidth = img.clientWidth
    // Gold.imgHeight = img.clientHeight

    // a funciton used to get exact coordinates on our map, and pushes a pin
    // into our pinsArray

    function Pin(X,Y){
      var img = document.querySelector(".Map")
      this.X = (X / img.clientWidth) *100
      this.Y = (Y / img.clientHeight) *100
      this.note = ""
      this.visible = true
      this.readNoteVisible = false

      console.log(this.X)
      console.log(this.Y)

      this.cssMaker = function(){
        // console.log("top:" +this.Y + "left:"+ this.X)
        return "top:" +this.Y+"% ;" + "left:"+ this.X + "%;"
      }
    }

    Gold.getCoordinates = function() {
      if (Gold.okToPlace) {
        Gold.pinsArray.push(new Pin(event.pageX,event.pageY) )
        console.log(Gold.pinsArray)
        Gold.okToPlace = false
      }
    }

    // a function that removes a pin by erasing that specific pin from
    // the pinsArray
    Gold.removePin = function(index) {
      Gold.pinsArray.splice(index, 1)
      console.log(index);
    }

    Gold.submitClick = function(index) {
      Gold.pinsArray[index].note = Gold.noteInput
      console.log(Gold.pinsArray)
      Gold.noteInput = ""
      Gold.pinsArray[index].visible = false
      Gold.okToPlace = true
    }

    Gold.hover = function(index){
      Gold.pinsArray[index].readNoteVisible = true
    }

    Gold.hoverLeave = function(index) {
      Gold.pinsArray[index].readNoteVisible = false
    }




  }
}())

// var pin = {
//   X: event.pageX,
//   Y: event.pageY,
//   note:"",
//   visible: true,
//   readNoteVisible: false,
// }
// ['$scope', '$log', GoldDiggerController]
