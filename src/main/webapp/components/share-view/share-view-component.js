(function () {
    'use strict';
    /**
     * Bottom Sheet controller for the Avatar Actions
     */
    var ShareView = (function () {
        function ShareView($mdBottomSheet) {
            this.$mdBottomSheet = $mdBottomSheet;
            this.items = [
                { name: 'Phone', icon: 'phone', icon_url: 'assets/svg/phone.svg' },
                { name: 'Twitter', icon: 'twitter', icon_url: 'assets/svg/twitter.svg' },
                { name: 'Google+', icon: 'google_plus', icon_url: 'assets/svg/google_plus.svg' },
                { name: 'Hangout', icon: 'hangouts', icon_url: 'assets/svg/hangouts.svg' }
            ];
        }
        ShareView.factory = function () {
            return {
                scope: {},
                bindToController: {
                    contact: '='
                },
                templateUrl: '/app/components/share-view/share-view.html',
                controller: ShareView,
                controllerAs: '$ctrl',
                link: function (scope, element, attrs, controller) { controller.ngOnInit(); }
            };
        };
        ;
        ShareView.prototype.ngOnInit = function () { };
        ShareView.prototype.performAction = function (action) {
            console.log(action);
            this.$mdBottomSheet.hide(action);
        };
        ShareView.$inject = ['$mdBottomSheet'];
        return ShareView;
    })();
    angular.module('shareView')
        .directive('shareView', ShareView.factory);
})();
//# sourceMappingURL=share-view-component.js.map