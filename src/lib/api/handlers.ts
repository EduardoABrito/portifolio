import { FetchResponse, ErrorResponse } from '@/@types/api'
import { redirect } from 'next/navigation'


export async function handleSuccessResponse<T>(response: Response): Promise<FetchResponse<T>> {
  if (response.status === 204) {
    return { hasError: false, data: null as T, status: response.status }
  }

  try {
    const json = await response.json()

    return { hasError: false, data: json, status: response.status }
  } catch {
    const bodyText = await response.text()

    console.error(`Falha ao fazer parse do JSON. Corpo:`, bodyText)

    return {
      hasError: true,
      data: null,
      status: response.status,
      error: {
        message: 'A resposta da API não era um JSON válido.',
        body: bodyText,
      },
    }
  }
}

export async function handleHttpError(response: Response): Promise<ErrorResponse> {
  let errorBody: unknown
  const clonedResponse = response.clone()

  try {
    errorBody = await response.json()
  } catch {
    errorBody = await clonedResponse.text()
  }

  if (response.status == 401) {
    redirect('/auth/signin')
  }

  return {
    hasError: true,
    data: null,
    status: response.status,
    error: { message: `Erro HTTP: ${response.statusText}`, body: errorBody },
  }
}

export function handleNetworkError(e: unknown): ErrorResponse {
  const error = e instanceof Error ? e : new Error('Erro de rede desconhecido')

  console.error(`Erro de Rede:`, error)

  return {
    hasError: true,
    data: null,
    status: 0,
    error: { message: error.message },
  }
}
