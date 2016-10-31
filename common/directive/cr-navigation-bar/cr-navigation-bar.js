angular
  .module('common')
  .directive('crNavigationBar', crNavigationBar);


function crNavigationBar() {
  var directive = {
    restrict: 'E',
    replace: true,
    scope: {

    },
    templateUrl: 'common/directive/cr-navigation-bar/cr-navigation-bar.html',
    controllerAs: 'crNavigationBarCtrl',
    controller: crNavigationBarCtrl,
    bindController: true

  };

  return directive;
}


crNavigationBarCtrl.$inject = ['$scope', 'crNavigationService'];

function crNavigationBarCtrl($scope, crNavigationService) {
  var vm = this;

  vm.navBarElements = crNavigationService.navBarElements;


}
