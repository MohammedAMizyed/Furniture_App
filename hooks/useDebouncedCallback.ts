import { useEffect, useMemo, useRef } from "react"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyFn = (...args: any[]) => any

export function useDebouncedCallback<T extends AnyFn>(
  callback: T,
  delay: number,
): (...args: Parameters<T>) => void {
  const callbackRef = useRef(callback)

  // keep latest callback without recreating the debounced fn
  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // cleanup on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  return useMemo(() => {
    return (...args: Parameters<T>) => {
      if (timerRef.current) clearTimeout(timerRef.current)
      timerRef.current = setTimeout(() => {
        callbackRef.current(...args)
      }, delay)
    }
  }, [delay])
}
