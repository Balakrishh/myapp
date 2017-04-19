(function () {
    var AppComponent = (function () {
        function AppComponent(viewService, $mdSidenav, $mdBottomSheet, $log, $scope, $state, $timeout) {
            this.viewService = viewService;
            this.$mdSidenav = $mdSidenav;
            this.$mdBottomSheet = $mdBottomSheet;
            this.$log = $log;
            this.$scope = $scope;
            this.$state = $state;
            this.$timeout = $timeout;
            this.selected = null;
            this.views = [];
        }
        AppComponent.factory = function () {
            return {
                scope: {},
                bindToController: {},
                templateUrl: '/app/app-component.html',
                controller: AppComponent,
                controllerAs: '$ctrl',
                link: function (scope, element, attrs, controller) { controller.ngOnInit(); }
            };
        };
        AppComponent.prototype.ngOnInit = function () {
            var _this = this;
            // Load all registered views
            this.selectedItem = "home";
            this.viewService
                .loadAllViews()
                .then(function (views) {
                _this.views = [].concat(views);
                _this.selected = views[0];
            });
        };
        /**
         * Hide or Show the 'left' sideNav area
         */
        AppComponent.prototype.toggleViewsList = function () {
            this.$mdSidenav('left').toggle();
        };
        /**
         * Select the current avatars
         * @param viewId
         */
        AppComponent.prototype.selectView = function (viewId) {
            this.selected = angular.isNumber(viewId)
                ? this.views[viewId]
                : viewId;
            this.toggleViewsList();
        };
        AppComponent.prototype.navigate = function (viewId) {
            var _this = this;
            this.$state.go('home');
            this.$timeout(function () {
                _this.$state.go(viewId);
            }, 100);
        };
        /**
         * Show the bottom sheet
         */
        AppComponent.prototype.share = function ($event) {
            var _this = this;
            var bottomSheetConfig = {
                parent: angular.element(document.getElementById('content')),
                template: "\n        <md-bottom-sheet class=\"md-list md-has-header\">\n          <share-view contact=\"$ctrl.selected\"></share-view>\n        </md-bottom-sheet>\n        ",
                scope: this.$scope.$new(),
                targetEvent: $event
            };
            this.$mdBottomSheet
                .show(bottomSheetConfig)
                .then(function (clickedItem) {
                _this.$log.debug(clickedItem.name + " clicked!");
            });
        };
        return AppComponent;
    })();
    angular
        .module('myApp')
        .directive('app', AppComponent.factory);
})();
//# sourceMappingURL=app-component.js.map