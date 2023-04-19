import { useState, useEffect, useCallback } from 'react'

interface FetchState<TData> {
  status: 'idle' | 'pending' | 'success' | 'error'
  data?: TData
  error?: Error
  isLoading: boolean
}

export function useFetch<TData = unknown>(url: string): FetchState<TData> {
  const [state, setState] = useState<FetchState<TData>>({
    status: 'idle',
    data: undefined,
    error: undefined,
    isLoading: false,
  })

  const { status, data, error, isLoading } = state

  const execute = useCallback(async () => {
    setState({ status: 'pending', data: undefined, error: undefined, isLoading: true })

    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      const data: TData = await response.json()
      setState({ status: 'success', data, error: undefined, isLoading: false })
    } catch (error) {
      setState({
        status: 'error',
        data: undefined,
        error: error instanceof Error ? error : new Error(String(error)),
        isLoading: false,
      })
    }
  }, [url])

  useEffect(() => {
    execute()
  }, [execute])

  return { status, data, error, isLoading }
}
