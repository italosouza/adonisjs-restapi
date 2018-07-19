'use strict'

const Route = use('Route')

// rotas que requerem autenticacao
Route.group(() => {
  Route.resource('/properties', 'PropertyController').apiOnly()
  Route.post('properties/:id/images', 'ImageController.store').middleware('auth')
}).prefix('api').middleware('auth')

// rotas que nao precisam de autenticacao
Route.group(() => {
  Route.post('/users', 'UserController.create')
  Route.post('/sessions', 'SessionController.create')
  Route.get('images/:path', 'ImageController.show')
}).prefix('api')
