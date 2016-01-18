import {bootstrap} from 'angular2/platform/browser'

import {App} from './main'

import {TodoService} from './todo/services/todo-service'

bootstrap(App, [TodoService])