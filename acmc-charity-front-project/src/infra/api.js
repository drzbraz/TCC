import axios from 'axios'
import { createServer } from 'miragejs'
createServer({
  routes() {
    this.post('http://localhost:3001/api/v1/auth', (schema, request) => {
      let attrs = JSON.parse(request.requestBody)
      console.log(attrs)

      return { token: 'test' }
    })
  }
})

export const api = axios.create({
  //   baseURL: 'https://puc-garden-backend.herokuapp.com/'
  baseURL: 'http://localhost:3001/'
})

export const onAuthenticate = async (login, password) => {
  try {
    const response = await api.post('/api/v1/auth', { login, password })
    return response.data.token
  } catch (error) {
    console.log(error)
  }
}
