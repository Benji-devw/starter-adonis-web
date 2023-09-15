// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import View from "@ioc:Adonis/Core/View"

export default class ProductsController {
    // Return a list of all products from DB
    public async index() {
      const products = [
      {
        id: 3,
        title: 'Hello world',
      },
      {
        id: 2,
        title: 'Hello universe',
      },
    ]
    return View.render('products/index', { products })
  }

  // Return a specific product from DB
  public async show() {
    const product = {
      id: 1,
      title: 'Hello guys',
    }
    return View.render('products/show', { product })
  }
}
