/**!
 * ReactionJS includes smiley reactions directive.
 * @author  Furkan Başaran  <frknbasaran@gmail.com>
 * @version 1.0.0
 */

var ngReactions = angular.module('ngReactions', []);

ngReactions.version = '1.0.0';

ngReactions
.directive('reactions', function() {
  return {
    restrict: 'E',
    scope: {
      options: '=options'
    },
    controller: ['$scope', function($scope) {

      /*
        constructor method when run every render which
        check injected object properties
      */
      $scope.checkValidation = function() {
        
        if (typeof $scope.options == "undefined") {
          console.error("Reactions Error: reactions attribute not injected.");
        
        } else if(typeof $scope.options != "undefined") {
        
          $scope.options.forEach(function(reaction) {
        
            if(typeof reaction.count == "undefined") {
              console.error("Reactions Error: reaction count property can't be undefined in reactions object");
            } else if (typeof reaction.src == "undefined") {
              console.info("Reactions Warning: reaction img property is undefined.");
            }
        
          })
        }
      }

      $scope.checkValidation();

      $scope.getMostlySelected = function() {
        var sortable = [];
        for (var reaction in $scope.options) {
            sortable.push([reaction, $scope.options[reaction]])
        }
        sortable.sort(function(a, b) {return a[1] - b[1]})
        return sortable[sortable.length - 1];
      }

      $scope.choosen = false;

      $scope.choose = function($index) {
        
        if (!$scope.choosen) {
          $scope.options[$index].count++;
          $scope.choosen = true;
        } else {
          $scope.reactionsError = "You can't vote multiple times";
        }

      }

    }],
    template: "<div style='width:100%;'>"
              +"<div ng-repeat='reaction in options track by $index' style='background-color:#f7f7f7;padding:5px;float:left;width:60px;height:80px;margin-left:10px;'>"
              +"<center><span>{{reaction.count}}</span></center>"
              +"<div ng-click='choose($index)' style='width: 60px;height:60px;padding-bottom:5px'>"
              +"<img style='width:50px;height:50px' ng-src='{{reaction.src}}'>"
              +"</div></div></div>"
    };
});

