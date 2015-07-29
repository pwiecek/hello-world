(function (angular) {

  // Create all modules and define dependencies to make sure they exist
  // and are loaded in the correct order to satisfy dependency injection
  // before all nested files are concatenated by Gulp

  // Config
  angular.module('sabreC3.config', [])
      .value('sabreC3.config', {
          debug: true
      });

  // Modules
  angular.module('sabreC3.directives', []);
  angular.module('sabreC3',
      [
          'sabreC3.config',
          'sabreC3.directives',
          'ngResource',
          'ngCookies',
          'ngSanitize'
      ]);

})(angular);
