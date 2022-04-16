import axios from 'axios'

export const getLastEvent = async (): Promise<any> => {
  const response = await axios.get('/api/last-event')
  const data: any = await response.data
  return data
}

export const getAllEvent = async (): Promise<any> => {
  const response = await axios.get('/api/all-event')
  const data: any = await response.data
  return data
}

export const getBlockNumberEvent = async (): Promise<any> => {
  const response = await axios.get('/api/block-number')
  const data: any = await response.data
  return data
}
