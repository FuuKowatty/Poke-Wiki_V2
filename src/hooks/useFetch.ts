import { checkErrorType } from 'utils/checkData'
import { LRUCache } from 'lru-cache'
import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'

interface FetchState<TData> {
  data?: TData
  error?: Error
  isLoading: boolean
}

export function useFetch<TData extends object = object>(url: string): FetchState<TData> {
  const [state, setState] = useState<FetchState<TData>>({
    data: undefined,
    error: undefined,
    isLoading: true,
  })

  const cache = new LRUCache<string, TData>({
    max: 100, // max numb of elements
    ttl: 1000 * 60 * 60, // 1h expiration date
  })

  const cacheKey = url
  const { data, error, isLoading } = state

  const execute = useCallback(async () => {
    const cachedResult = cache.get(cacheKey)

    if (cachedResult) {
      setState({ data: cachedResult, error: undefined, isLoading: false })
      return
    }

    setState({ data: undefined, error: undefined, isLoading: true })

    const controller = new AbortController();

    try {
      const response = await axios.get<TData>(url, { signal: controller.signal })
      // caching data
      cache.set(cacheKey, response.data)
      setState({ data: response.data, error: undefined, isLoading: false })
    } catch (error) {
      setState({
        data: undefined,
        error: checkErrorType(error),
        isLoading: false,
      })
    }

    return controller.abort()
  }, [url])

  useEffect(() => {
    execute()
  }, [execute])

  return { data, error, isLoading }
}
