import { handleHttpError, handleNetworkError, handleSuccessResponse } from '@/lib/api/handlers'

import { isUrlAllowed } from './security'
import { FetchResponse } from '@/@types/api'

function buildHeaders(init?: RequestInit, token?: string): Headers {
  const headers = new Headers(init?.headers || {})
  if (token) {
    headers.set('Authorization', `Bearer ${token}`)
  }
  if (init?.body && !headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json')
  }
  if (!headers.has('Accept')) {
    headers.set('Accept', 'application/json')
  }
  return headers
}

export async function fetcher<T>(url: string, token: string | undefined, init: RequestInit): Promise<FetchResponse<T>> {
  if (!isUrlAllowed(url)) {
    throw new Error(`Blocked: URL not allowed: ${url}`)
  }

  const headers = buildHeaders(init, token)

  try {
    const response = await fetch(url, { ...init, headers })
    return response.ok ? handleSuccessResponse<T>(response) : handleHttpError(response)
  } catch (e) {
    return handleNetworkError(e)
  }
}
