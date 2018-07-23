'use strict'

const Route = use('Route')

// rotas que requerem autenticacao
Route.group(() => {
  Route.resource('/properties', 'PropertyController').apiOnly()
  Route.resource('/post', 'PostController').apiOnly()
  Route.get('/users/:id', 'UserController.show')
  Route.post('properties/:id/images', 'ImageController.store')
}).prefix('api').middleware('auth')

// rotas que nao precisam de autenticacao
Route.group(() => {
  Route.post('/users', 'UserController.create')
  Route.post('/sessions', 'SessionController.create')
  Route.get('images/:path', 'ImageController.show')
}).prefix('api')
