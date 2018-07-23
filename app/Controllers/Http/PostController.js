'use strict'

const Post = use('App/Models/Post')

/**
 * Resourceful controller for interacting with posts
 */
class PostController {
  /**
   * Show a list of all posts.
   * GET posts
   */
  async index ({ request, response, view }) {
    const posts = Post.query()
      .with('user')
      .fetch()

    return posts
  }

  /**
   * Create/save a new post.
   * POST posts
   */
  async store ({ auth, request }) {
    const { id } = auth.user
    const data = request.only([
      'post_title',
      'post_body'
    ])
    const post = await Post.create({ ...data, user_id: id })
    return post
  }

  /**
   * Display a single post.
   * GET posts/:id
   */
  async show ({ params, request, response, view }) {
    const post = await Post.findOrFail(params.id)
    await post.load('user')
    return post
  }

  /**
   * Update post details.
   * PUT or PATCH posts/:id
   */
  async update ({ params, request, response }) {
    const post = await Post.findOrFail(params.id)
    const data = request.only([
      'post_title',
      'post_body'
    ])

    post.merge(data)
    await post.save()
    return post
  }

  /**
   * Delete a post with id.
   * DELETE posts/:id
   */
  async destroy ({ params, auth, response }) {
    const post = await Post.findOrFail(params.id)

    if (post.user_id !== auth.user.id) {
      return response.status(401).send({ error: 'Not authorized' })
    }

    await post.delete()
  }
}

module.exports = PostController
