angular.module('homepage', ['ionic'])
.controller('PopupCtrl',function($scope, $ionicPopup, $timeout) {
    // Popup 
    $scope.showEmail = function() {
        var alertPopup = $ionicPopup.alert({
            title: 'Email Address',
            template: 'dustin.enyeart@pm.me'
        });
            alertPopup.then(function(res) {
            console.log('Thank you');
        });
    };
});

