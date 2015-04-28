(function() {
  'use strict';

  angular
    .module('uvpBuilderWeb')
    .run(addMethod);

  addMethod.$inject = [ 'MethodsService' ];

  function addMethod(MethodsService) {
    var ZagFormat = function () {
      this.category = '';
      this.attribute = '';
    };

    ZagFormat.prototype.template = function () {
      return 'Our ' + this.category + ' is the only ' + this.attribute + '.';
    };

    MethodsService.add('ZagFormat', ZagFormat);
  }
})();