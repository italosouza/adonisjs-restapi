'use strict'

const User = use('App/Models/User')

class UserController {
  async create ({ request }) {
    const data = request.only(['username', 'email', 'password'])

    const user = await User.create(data)

    return user
  }

  async show ({ params, request, response, view }) {
    const user = await User.findOrFail(params.id)
    await user.load('posts')
    return user
  }
}

module.exports = UserController
