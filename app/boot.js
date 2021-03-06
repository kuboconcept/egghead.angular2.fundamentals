System.register(['angular2/platform/browser', './main', './todo/services/todo-service'], function(exports_1) {
    var browser_1, main_1, todo_service_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (main_1_1) {
                main_1 = main_1_1;
            },
            function (todo_service_1_1) {
                todo_service_1 = todo_service_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(main_1.App, [todo_service_1.TodoService]);
        }
    }
});
//# sourceMappingURL=boot.js.map