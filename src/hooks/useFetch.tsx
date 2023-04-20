import { LRUCache } from 'lru-cache'
import { useState, useEffect, useCallback } from 'react'

interface FetchState<TData> {
  status: 'idle' | 'pending' | 'success' | 'error'
  data?: TData
  error?: Error
  isLoading: boolean
}

export function useFetch<TData extends object = object>(url: string): FetchState<TData> {
  const [state, setState] = useState<FetchState<TData>>({
    status: 'idle',
    data: undefined,
    error: undefined,
    isLoading: false,
  })

  const cache = new LRUCache<string, TData>({
    max: 100, // max numb of elements
    ttl: 1000 * 60 * 60, // 1h expiration date
  })

  const cacheKey = url
  const { status, data, error, isLoading } = state

  const execute = useCallback(async () => {
    const cachedResult = cache.get(cacheKey)

    if (cachedResult) {
      setState({ status: 'success', data: cachedResult, error: undefined, isLoading: false })
      return
    }

    setState({ status: 'pending', data: undefined, error: undefined, isLoading: true })

    try {
      const response = await fetch(url)

      if (!response.ok) {
        throw new Error(response.statusText)
      }

      const data: TData = await response.json()

      // caching data
      cache.set(cacheKey, data)
      setState({ status: 'success', data, error: undefined, isLoading: false })
    } catch (error) {
      setState({
        status: 'error',
        data: undefined,
        error: error instanceof Error ? error : new Error(String(error)),
        isLoading: false,
      })
    }
  }, [url, cacheKey])

  useEffect(() => {
    execute()
  }, [execute])

  return { status, data, error, isLoading }
}
