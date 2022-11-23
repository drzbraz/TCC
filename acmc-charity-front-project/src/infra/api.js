import axios from 'axios'

export const api = axios.create({
  //   baseURL: 'https://puc-garden-backend.herokuapp.com/'
  baseURL: 'http://localhost:3333/'
})

export const getPatientList = async (offset, limit) => {
  try {
    const response = await api.get('/v1/patient/all', { params: { offset, limit } })
    const data = response.data
    return data
  } catch (error) {
    console.log(error)
  }
}
export const createPatient = async (patient) => {
  try {
    const response = await api.post('/v1/patient', { ...patient })
    console.log(response)
    return response.status
  } catch (error) {
    return error.response.status
  }
}

export const updatePatient = async (patient) => {
  try {
    const response = await api.put('/v1/patient', { ...patient })
    console.log(response)
    return response.status
  } catch (error) {
    return error.response.status
  }
}

export const searchPatientRequest = async (name) => {
  try {
    const response = await api.get(`/v1/patient/find`, { params: { name } })
    const data = response.data
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getPatient = async (patientId) => {
  try {
    const response = await api.get(`/v1/patient`, { params: { patientId } })
    const data = response.data
    return data
  } catch (error) {
    console.log(error)
  }
}
export const deletePatient = async (patientId) => {
  try {
    const response = await api.delete(`/v1/patient`, { params: { patientId } })
    const data = response.data
    return data
  } catch (error) {
    console.log(error)
  }
}

export const onAuthenticate = async (login, password) => {
  try {
    const response = await api.post('/api/v1/auth', { login, password })
    return response.data.token
  } catch (error) {
    console.log(error)
  }
}
