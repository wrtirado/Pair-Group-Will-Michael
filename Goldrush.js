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

    // a funciton used to get exact coordinates on our map, and pushes a pin
    // into our pinsArray

    Gold.getCoordinates = function() {
      if (Gold.okToPlace) {
        var pin = {
          X: event.pageX - 14,
          Y: event.pageY - 47,
          note:"",
          visible: true,
          readNoteVisible: false,
        }
        Gold.pinsArray.push(pin)
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


// ['$scope', '$log', GoldDiggerController]
