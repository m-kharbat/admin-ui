angular.module('common', []);

angular.module('common').config(function($stateProvider) {

  /* Add New States Above */

});

angular.module('common').run(function(crNavigationService) {
  // Initial translation of navigation bar items
  crNavigationService.addNavBarElement("img/icons/icon-overview.svg#icon-overview", "overview", "overview", 1);
  crNavigationService.addNavBarElement("img/icons/icon-console.svg#icon-console", "console", "console", 2);
  crNavigationService.addNavBarElement("img/icons/icon-getstarted.svg#icon-getstarted", "get started", "tutorial", 3);
  crNavigationService.addNavBarElement("img/icons/icon-cluster.svg#icon-cluster", "cluster ", "cluster", 4);

  console.log(crNavigationService.navBarElements);
});
