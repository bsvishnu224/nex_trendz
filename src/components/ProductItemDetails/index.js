// Write your code here

import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'
import Header from '../Header'


class ProductitemDetails extends Component {
  state = {
    productData: {},
    isLoading: true,
  }

  componentDidMount() {
    this.getProductDetails()
  }
  getProductDetails = async () => {
    const jwtToken = Cookies.get('jwt_token')
    console.log(jwtToken)

    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)

    const url = `https://apis.ccbp.in/products/${id}`
    const options = {
      method: 'GET',
      Headers: {
        Authorization: `Bearer ${jwtToken}`,
      }
    }
    const response = await fetch(url, options)
    const each = await response.json()

    const updatedData = {
      id: each.id,
      imageUrl: each.image_url,
      title: each.title,
      brand: each.brand,
      totalReviews: each.total_reviews,
      rating: each.rating,
      availability: each.availability,
      similarProducts: each.similar_products,
    }

    console.log(updatedData)
  }

  render() {
    return (
      <div>
        <Header />
      </div>
    )
  }
}

export default ProductitemDetails
