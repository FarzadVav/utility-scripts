// Fetching without throw any errors with clean response

type SuccessT<ResultT> = {
  status: number
  data: ResultT
  success: true
  error: null
}

type ErrorT = {
  status: number
  data: null
  success: false
  error: string[]
}

type ResponseT<ResultT> = SuccessT<ResultT> | ErrorT

export const safeFetch = async <ResultT>(endpoint: string, configs?: RequestInit): Promise<ResponseT<ResultT>> => {
  let response: Response | undefined
  let result: any = undefined

  try {
    response = await fetch(`${process.env.API_URL}/api/v1/${endpoint}`, configs)
    result = await response.json()
  } catch (error) {
    console.log(`Unknown error on fetch: "${endpoint}" --->`, error)
  }


  if (response && response.status >= 200 && response.status < 300 && result?.data) {
    return {
      status: response.status,
      success: true,
      data: result.data,
      error: null
    }
  }

  return {
    status: response?.status || 500,
    success: false,
    data: null,
    error: result?.error || ["خطا در پاسخ سرور!"]
  }
}
