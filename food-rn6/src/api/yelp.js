import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer OlSIc0Uo4zBZFjd-RSFPQkHLys-s-cnJss8A5IYnLmAl01XJYXa4eoJ6ozWSdfjyG3YV_9sLGMSeB1zZa-xP9wL5yeSV05BzGi-iL-uf0Xrzg7kDXRlFQ_GzhmQSZXYx'
  }
})
