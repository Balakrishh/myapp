(function () {
    'use strict';
    var Configure = (function () {
        function Configure($mdIconProvider, $mdThemingProvider, $urlRouterProvider, $stateProvider) {
            // Register the user `avatar` icons
            $mdIconProvider
                .defaultIconSet("./assets/svg/avatars.svg", 128)
                .icon("menu", "./assets/svg/menu.svg", 24)
                .icon("share", "./assets/svg/share.svg", 24)
                .icon("google_plus", "./assets/svg/google_plus.svg", 512)
                .icon("hangouts", "./assets/svg/hangouts.svg", 512)
                .icon("twitter", "./assets/svg/twitter.svg", 512)
                .icon("phone", "./assets/svg/phone.svg", 512);
            $mdThemingProvider.theme('default')
                .primaryPalette('brown')
                .accentPalette('red');
            $urlRouterProvider.otherwise('/contactus');
            $stateProvider.state('home', {
                url: '/home',
                templateUrl: '/app/components/view-detail/home.html',
                component: 'AppComponent' })
                .state('axis2', {
                url: '/axis2',
                templateUrl: '/app/components/view-detail/axis2.html',
                component: 'AppComponent' })
                .state('about', {
                url: '/about',
                templateUrl: '/app/components/view-detail/about.html',
                component: 'AppComponent' })
                .state('contactus', {
                url: '/contactus',
                templateUrl: '/app/components/view-detail/contact-us.html',
                component: 'AppComponent' })
                .state('aws', {
                url: '/aws',
                templateUrl: '/app/components/view-detail/aws.html',
                component: 'AppComponent' })
                .state('java', {
                url: '/java',
                templateUrl: '/app/components/view-detail/java.html',
                component: 'AppComponent' })
                .state('angular', {
                url: '/angular',
                templateUrl: '/app/components/view-detail/angular.html',
                component: 'AppComponent' })
                .state('issues', {
                url: '/issues',
                templateUrl: '/app/components/view-detail/issues.html',
                component: 'AppComponent' });
        }
        Configure.$inject = ['$mdIconProvider', '$mdThemingProvider', '$urlRouterProvider', '$stateProvider'];
        return Configure;
    })();
    angular.module('myApp')
        .config(Configure);
})();
//# sourceMappingURL=app-config.js.map