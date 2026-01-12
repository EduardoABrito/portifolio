export type SuccessResponse<T> = {
  hasError: false
  data: T
  status: number
}

export type ErrorResponse = {
  hasError: true
  data: null
  status: number
  error?: { message: string; body?: unknown }
}

export type FetchResponse<T> = SuccessResponse<T> | ErrorResponse
