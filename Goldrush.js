;
(function() {
  'use strict'
  angular.module('GoldDigger', [])
    .controller("GoldDiggerController", GoldDiggerController)

  function GoldDiggerController() {
    var Gold = this
    Gold.pinsArray = []
    Gold.getCoordinates = function() {
      var pin = {
        X: event.pageX - 14,
        Y: event.pageY - 47
      }
      Gold.pinsArray.push(pin)
      console.log(Gold.pinsArray)
    }

    Gold.removePin = function(index) {
      Gold.pinsArray.splice(index, 1)
      console.log(index);
    }








  }
}())


// ['$scope', '$log', GoldDiggerController]
