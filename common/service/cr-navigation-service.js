angular.module('common').factory('crNavigationService',function() {

    var navBarElements = [];
    var crNavigationService = {
        addNavBarElement : addNavBarElement,
        updateNavBarElement: updateNavBarElement,
        navBarElements: navBarElements

    };
    return crNavigationService;


    /////

    function addNavBarElement(iconSrc, text, state, index) {
        var pluginElement = {
            text: text,
            state: state,
            iconSrc: iconSrc
        };

        if (index === undefined){
            navBarElements.push(pluginElement);
        } else if (index < 0 || index >= navBarElements.length){
            navBarElements.push(pluginElement);
        } else {
            navBarElements.push(index, 0, pluginElement);
        }
    };

    function updateNavBarElement(state, text){
        var filteredNavElements = navBarElements.filter(function(item){
            return item.state === state;
        });

        if (filteredNavElements.length === 0){
            return;
        }

        filteredNavElements[0].text = text;

    };

});
