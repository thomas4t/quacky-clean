import { useEffect } from "react"

export function useDidMount(cb: () => void) {
    return useEffect(cb, [])
}

export function useUnmount(cb: () => void) {
    return useEffect(() => {
        return cb;
    }, [])
}