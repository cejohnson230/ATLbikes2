(function()
{
angular.module('app.directives').controller('custombikeController', ['$scope', function($scope) {
  $scope.index = 2
}]).directive(
    'custombike', CustomBikeDirective);


	/* @ngInject */
    function CustomBikeDirective() {

    	return {
	    restrict: 'AE',
	    templateUrl: 'app/directives/custombike/custom-bike.view.html',
	    replace: false,
	    scope: {
        index: '=',
		forkColor: '=',
		frameColor: '=',
		seatColor: '=',
		handleColor: '=',
		frameDecalColor: '='
	    },
	    link: function(scope, element) {
		scope.$watchGroup(['forkColor', 'frameColor', 'seatColor',
			'handleColor', 'frameDecalColor'], function(attr, scope, newValues){

		    console.log(newValues);
		    var svgElement = d3.select('#forkGroup' + newValues.index);
		    svgElement.style('fill', newValues.forkColor);
		    svgElement.style('stroke', newValues.forkColor);


		    svgElement = d3.select('#frame' + newValues.index);
		    svgElement.style('fill', newValues.frameColor);
		    svgElement.style('stroke', newValues.frameColor);

		    svgElement = d3.select('#frame-decal' + newValues.index);
		    svgElement.style('fill', newValues.frameDecalColor);
		    svgElement.style('stroke', newValues.frameDecalColor);

		    svgElement = d3.select('#seat' + newValues.index);
		    svgElement.style('fill', newValues.seatColor);
		    svgElement.style('stroke', newValues.seatColor);

			svgElement = d3.select('#handle-bar' + newValues.index);
		    svgElement.style('stroke', newValues.handleColor);

		});
	    }
	}
}
}
)
();
