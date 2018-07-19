'use strict'

const Property = use('App/Models/Property')

class PropertyController {
  /**
   * GET properties
   */
  async index ({ request }) {
    const { latitude, longitude } = request.all()
    const properties = Property.query()
      .with('images')
      .nearBy(latitude, longitude, 10)
      .fetch()

    return properties
  }

  /**
   * POST properties
   */
  async store ({ auth, request }) {
    const { id } = auth.user
    const data = request.only([
      'title',
      'address',
      'latitude',
      'longitude',
      'price'
    ])
    const property = await Property.create({ ...data, user_id: id })
    return property
  }

  /**
   * GET properties/:id
   */
  async show ({ params }) {
    const property = await Property.findOrFail(params.id)
    await property.load('images')
    return property
  }

  /**
   * PUT or PATCH properties/:id
   */
  async update ({ params, request }) {
    const property = await Property.findOrFail(params.id)
    const data = request.only([
      'title',
      'address',
      'latitude',
      'longitude',
      'price'
    ])

    property.merge(data)
    await property.save()
    return property
  }

  /**
   * DELETE properties/:id
   */
  async destroy ({ params, auth, response }) {
    const property = await Property.findOrFail(params.id)

    if (property.user_id !== auth.user.id) {
      return response.status(401).send({ error: 'Not authorized' })
    }

    await property.delete()
  }
}

module.exports = PropertyController
