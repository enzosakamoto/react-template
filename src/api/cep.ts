import axios from 'axios'

export async function getDataByCep(cep: string) {
  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    return response.data
  } catch (error) {
    console.error(error)
    return Response.error()
  }
}
