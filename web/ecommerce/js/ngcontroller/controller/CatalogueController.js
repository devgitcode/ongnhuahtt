var app = angular.module('web.application');

app.controller('CatalogueController',function($scope, CatalogueService){
    /* BEGIN PROPERTY */
    $scope.catalogues = CatalogueService.getCatalogues();

   
    /* END PROPERTY */

    /* BEGIN FUNCTION */
    
    /* END FUNCTION */

    
});

/* BEGIN NEW DIRECTIVE */

/* END NEW DIRECTIVE */