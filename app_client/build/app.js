"use strict";

angular.module('app', ["ui.router", "app.layout", "app.home"]);
"use strict";

angular.module('app.home', ['ui.router']).config(function ($stateProvider) {
    $stateProvider.state('app.home', {
        abstract: false,
        url: "/home",
        views: {
            "content@app": {
                template: "\n                        <div><h1>Hello World</h1></div>\n                        <div><h1>Hello World</h1></div>\n                        <div><h1>Hello World</h1></div>\n                        <div><h1>Hello World</h1></div>\n                        <div><h1>Hello World</h1></div>\n                        <div><h1>Hello World</h1></div>\n                        <div><h1>Hello World</h1></div>\n                        <div><h1>Hello World</h1></div>\n                        <div><h1>Hello World</h1></div>\n                        <div><h1>Hello World</h1></div>\n                        <div><h1>Hello World</h1></div>\n                        <div><h1>Hello World</h1></div>\n                        <div><h1>Hello World</h1></div>\n                        <div><h1>Hello World</h1></div>\n                        <div><h1>Hello World</h1></div>\n                        <div><h1>Hello World</h1></div>\n                        <div><h1>Hello World</h1></div>\n                        <div><h1>Hello World</h1></div>\n                        <div><h1>Hello World</h1></div>\n                        <div><h1>Hello World</h1></div>\n                        <div><h1>Hello World</h1></div>\n                        <div><h1>Hello World</h1></div>\n                        <div><h1>Hello World</h1></div>\n                        <div><h1>Hello World</h1></div>\n                        <div><h1>Hello World</h1></div>\n                        <div><h1>Hello World</h1></div>\n                        <div><h1>Hello World</h1></div>\n                        <div><h1>Hello World</h1></div>\n                        <div><h1>Hello World</h1></div>\n                        <div><h1>Hello World</h1></div>\n                        <div><h1>Hello World</h1></div>\n                        <div><h1>Hello World</h1></div>\n                        <div><h1>Hello World</h1></div>\n                        <div><h1>Hello World</h1></div>\n                        <div><h1>Hello World</h1></div>\n                        <div><h1>Hello World</h1></div>\n                        <div><h1>Hello World</h1></div>\n                        <div><h1>Hello World</h1></div>\n                        <div><h1>Hello World</h1></div>\n                        \n                        ",
                controller: "homeCtrl"
            }
        }
    });
});

"use strict";

angular.module('app.layout', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('app', {
        abstract: true,
        views: {
            root: {
                templateUrl: 'app/layout/views/layout.tpl.html',
                controller: 'layoutCtrl'
            }
        }
    });
    $urlRouterProvider.otherwise('/home');
});
angular.module('app.home').controller("homeCtrl", function () {
    console.log("Hello World");
});
angular.module("app").run(["$templateCache", function ($templateCache) {
    $templateCache.put("src/layout/views/layout.tpl.html", "<div>\n    <div ng-include=\"\'app/layout/views/partials/header.partial.tpl.html\'\"></div>\n    <div ng-include = \"\'app/layout/views/partials/sidebar.partial.tpl.html\'\"></div>\n    <div class = \"main-content\">\n        <div data-ui-view=\"content\" data-autoscroll=\"false\"></div>\n    </div>\n</div>");
    $templateCache.put("src/layout/views/partials/header.partial.tpl.html", "<nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n        <!-- Brand and toggle get grouped for better mobile display -->\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"#\">Sleepy API</a>\n        </div>\n\n        <!-- Collect the nav links, forms, and other content for toggling -->\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n            <ul class=\"nav navbar-nav\">\n                <li class=\"active\"><a href=\"#\">Link <span class=\"sr-only\">(current)</span></a></li>\n                <li><a href=\"#\">Link</a></li>\n                <li class=\"dropdown\">\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown <span class=\"caret\"></span></a>\n                    <ul class=\"dropdown-menu\">\n                        <li><a href=\"#\">Action</a></li>\n                        <li><a href=\"#\">Another action</a></li>\n                        <li><a href=\"#\">Something else here</a></li>\n                        <li role=\"separator\" class=\"divider\"></li>\n                        <li><a href=\"#\">Separated link</a></li>\n                        <li role=\"separator\" class=\"divider\"></li>\n                        <li><a href=\"#\">One more separated link</a></li>\n                    </ul>\n                </li>\n            </ul>\n            <form class=\"navbar-form navbar-left\" role=\"search\">\n                <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n                </div>\n                <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n            </form>\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li><a href=\"#\">Link</a></li>\n                <li class=\"dropdown\">\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown <span class=\"caret\"></span></a>\n                    <ul class=\"dropdown-menu\">\n                        <li><a href=\"#\">Action</a></li>\n                        <li><a href=\"#\">Another action</a></li>\n                        <li><a href=\"#\">Something else here</a></li>\n                        <li role=\"separator\" class=\"divider\"></li>\n                        <li><a href=\"#\">Separated link</a></li>\n                    </ul>\n                </li>\n            </ul>\n        </div><!-- /.navbar-collapse -->\n    </div><!-- /.container-fluid -->\n</nav>");
    $templateCache.put("src/layout/views/partials/sidebar.partial.tpl.html", "<div class = \"sidebar\">\n    <div class = \"sidebar-header\">Navigation</div>\n    <ul class = \"sidebar-list\">\n        <li class = \"sidebar-content\">\n            <a href=\"\">\n                <div class = \"item-media\"><i class =\"fa fa-lg fa-fw fa-home\"></i></div>\n                <div class =\"item-label\">Item 1</div>\n            </a>\n        </li>\n        <li class = \"sidebar-content\">\n            <a href=\"\">\n                <div class = \"item-media\"><i class =\"fa fa-lg fa-fw fa-home\"></i></div>\n                <div class =\"item-label\">Item 2</div>\n            </a>\n        </li>\n        <li class = \"sidebar-content\">\n            <a href=\"\">\n                <div class = \"item-media\"><i class =\"fa fa-lg fa-fw fa-home\"></i></div>\n                <div class =\"item-label\">Item 3</div>\n            </a>\n        </li>\n        <li class = \"sidebar-content\">\n            <a href=\"\">\n                <div class = \"item-media\"><i class =\"fa fa-lg fa-fw fa-home\"></i></div>\n                <div class =\"item-label\">Item 4</div>\n            </a>\n        </li>\n        <li class = \"sidebar-content\">\n            <a href=\"\">\n                <div class = \"item-media\"><i class =\"fa fa-lg fa-fw fa-home\"></i></div>\n                <div class =\"item-label\">Item 5</div>\n            </a>\n        </li>\n    </ul>\n</div>");
}]);
angular.module("app.layout").controller("layoutCtrl", function () {
    console.log("inside layout");
});