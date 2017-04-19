(function () {
    'use strict';
    /**
     * Bottom Sheet controller for the Avatar Actions
     */
    var ViewDetailComponent = (function () {
        function ViewDetailComponent() {
        }
        ViewDetailComponent.factory = function () {
            return {
                scope: {},
                bindToController: {
                    view: '='
                },
                transclude: true,
                templateUrl: '/app/components/view-detail/view-detail.html',
                controller: ViewDetailComponent,
                controllerAs: '$ctrl',
                link: function (scope, element, attrs, controller) { controller.ngOnInit(); }
            };
        };
        ;
        ViewDetailComponent.prototype.ngOnInit = function () { };
        ViewDetailComponent.$inject = [];
        return ViewDetailComponent;
    })();
    angular.module('viewDetail')
        .directive('viewDetail', ViewDetailComponent.factory);
})();
//# sourceMappingURL=view-detail-component.js.map