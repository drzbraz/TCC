import axios from 'axios'

export const api = axios.create({
  //   baseURL: 'https://puc-garden-backend.herokuapp.com/'
  baseURL: 'http://localhost:3333/'
})

export const getAppointmentList = async (offset, limit) => {
  try {
    const response = await api.get('/v1/appointment/all', { params: { offset, limit } })
    const data = response.data
    return data
  } catch (error) {
    console.log(error)
  }
}
export const createAppointment = async (appointment) => {
  try {
    const response = await api.post('/v1/appointment', { ...appointment })
    return response.status
  } catch (error) {
    return error.response.status
  }
}

export const updateAppointment = async (appointment) => {
  try {
    const response = await api.put('/v1/appointment', { ...appointment })
    console.log(response)
    return response.status
  } catch (error) {
    return error.response.status
  }
}

export const searchAppointmentRequest = async (name) => {
  try {
    const response = await api.get(`/v1/appointment/find`, { params: { name } })
    const data = response.data
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getAppointment = async (appointmentId) => {
  try {
    const response = await api.get(`/v1/appointment`, { params: { appointmentId } })
    const data = response.data
    return data
  } catch (error) {
    console.log(error)
  }
}
export const deleteAppointment = async (appointmentId) => {
  try {
    const response = await api.delete(`/v1/appointment`, { params: { appointmentId } })
    const data = response.data
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getDoctorList = async (offset, limit) => {
  try {
    const response = await api.get('/v1/doctor/all', { params: { offset, limit } })
    const data = response.data
    return data
  } catch (error) {
    console.log(error)
  }
}
export const createDoctor = async (doctor) => {
  try {
    const response = await api.post('/v1/doctor', { ...doctor })
    console.log(response)
    return response.status
  } catch (error) {
    return error.response.status
  }
}

export const updateDoctor = async (doctor) => {
  try {
    const response = await api.put('/v1/doctor', { ...doctor })
    console.log(response)
    return response.status
  } catch (error) {
    return error.response.status
  }
}

export const searchDoctorRequest = async (name) => {
  try {
    const response = await api.get(`/v1/doctor/find`, { params: { name } })
    const data = response.data
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getDoctor = async (doctorId) => {
  try {
    const response = await api.get(`/v1/doctor`, { params: { doctorId } })
    const data = response.data
    return data
  } catch (error) {
    console.log(error)
  }
}
export const deleteDoctor = async (doctorId) => {
  try {
    const response = await api.delete(`/v1/doctor`, { params: { doctorId } })
    const data = response.data
    return data
  } catch (error) {
    console.log(error)
  }
}

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

export const onAuthenticate = async (email, password) => {
  try {
    const response = await api.post('/v1/admin/auth', { email, password })
    return response.data.token
  } catch (error) {
    console.log(error)
  }
}
