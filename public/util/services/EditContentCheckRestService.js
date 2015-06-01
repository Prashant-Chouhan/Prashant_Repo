
Util.services.EditContentCheckRestService = 	
	angular.module('util').service('EditContentCheckRestService', ['$resource', '$log', function($resource, $log){
	     
		
		this.editContentCheck = function(consoleAccordion){
		  return $resource('/luigi/api/editContentCheck').get().$promise.catch(showResponseOnError()).then(setElementEditable(consoleAccordion));
		};
		
		showResponseOnError = function(){
			
		};
		
		setElementEditable = function(consoleAccordion){
			$log.info("git kjsdkjaskd");
			consoleAccordion.contentEditable = true;
		};
		
		setContent = function(){
			
		};
		
	    undoElementEditibility = function(index){
	    	$scope.consoleAccordians[index].contentEditable = false;
		};
		
 		
	}]);	
 	
 	
