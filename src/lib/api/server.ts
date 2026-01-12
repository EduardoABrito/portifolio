import { cache } from 'react'

import qs from 'qs'

import { fetcher } from '@/lib/api/core'

import { environment } from '../environment'

type ParamsRequest = Record<string, unknown>

export function addParams(path: string, params?: ParamsRequest) {
  if (!params) return path

  const queryString = qs.stringify(params, {
    encode: true,
    arrayFormat: 'brackets',
    skipNulls: true,
  })

  return queryString ? `${path}?${queryString}` : path
}

export interface RequestInitExtended extends RequestInit {
  params?: ParamsRequest
}

export const createApiClient = cache(async (url?: string) => {
  // const session = await auth()
  // const token = session?.authTokens.accessToken
  const token = ''
  const baseUrl = url || environment.NEXT_PUBLIC_API_BASE_URL
  return {
    get: <T>(path: string, init?: RequestInitExtended) => {
      const url = `${baseUrl}${addParams(path, init?.params)}`
      return fetcher<T>(url, token, { ...init, method: 'GET' })
    },

    post: <T>(path: string, body: unknown, init?: RequestInitExtended) => {
      const url = `${baseUrl}${addParams(path, init?.params)}`

      if (body instanceof FormData) {
        return fetcher<T>(url, token, { ...init, method: 'POST', body })
      }

      return fetcher<T>(url, token, { ...init, method: 'POST', body: JSON.stringify(body) })
    },

    patch: <T>(path: string, body: unknown, init?: RequestInitExtended) => {
      const url = `${baseUrl}${addParams(path, init?.params)}`

      if (body instanceof FormData) {
        return fetcher<T>(url, token, { ...init, method: 'PATCH', body })
      }

      return fetcher<T>(url, token, { ...init, method: 'PATCH', body: JSON.stringify(body) })
    },

    put: <T>(path: string, body: unknown, init?: RequestInitExtended) => {
      const url = `${baseUrl}${addParams(path, init?.params)}`

      if (body instanceof FormData) {
        return fetcher<T>(url, token, { ...init, method: 'PUT', body })
      }

      return fetcher<T>(url, token, { ...init, method: 'PUT', body: JSON.stringify(body) })
    },

    delete: <T>(path: string, init?: RequestInitExtended) => {
      const url = `${baseUrl}${addParams(path, init?.params)}`
      return fetcher<T>(url, token, { ...init, method: 'DELETE' })
    },
  }
})
