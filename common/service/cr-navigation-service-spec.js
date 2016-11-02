describe('crNavigationService', function() {

  var crNavigationService;

  beforeEach(module('app'));
  beforeEach(module('common'));
  beforeEach(function() {
    angular.mock.inject(function($injector) {
      crNavigationService = $injector.get('crNavigationService');
    });
  });


  it('should add navBarElement in specified position', inject(function(crNavigationService) {
    var navBarElement = {
      image: "example.icon",
      state: "state",
      text: "example",
      index: 1
    };
    crNavigationService.addNavBarElement(navBarElement.image, navBarElement.text, navBarElement.state, navBarElement.index);

    var navBarElements = crNavigationService.navBarElements;
    expect(navBarElements[1]).toEqual({
      text: 'example',
      state: 'state',
      iconSrc: 'example.icon'
    });

  }));

  it('should update navBarElement text', inject(function(crNavigationService) {
    //insert element in navBarElements
    var navBarElement = {
      image: "example.icon",
      state: "state",
      text: "example",
      index: 1
    };
    crNavigationService.addNavBarElement(navBarElement.image, navBarElement.text, navBarElement.state, navBarElement.index);

    //verify successful insert
    var navBarElements = crNavigationService.navBarElements;
    expect(navBarElements[1]).toEqual({
      text: 'example',
      state: 'state',
      iconSrc: 'example.icon'
    });

    crNavigationService.updateNavBarElement(navBarElement.state, 'updated');

    navBarElements = crNavigationService.navBarElements;
    expect(navBarElements[1].text).toEqual('updated');




  }));

});
