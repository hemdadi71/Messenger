import { useParams } from 'next/navigation'
import { useMemo } from 'react'
const useConversation = () => {
  const params = useParams()

  const conversatoinId = useMemo(() => {
    if (!params?.conversatoinId) {
      return ''
    }
    return params.conversatoinId as string
  }, [params?.conversatoinId])

  const isOpen = useMemo(() => !!conversatoinId, [conversatoinId])

  return useMemo(
    () => ({
      isOpen,
      conversatoinId,
    }),
    [isOpen, conversatoinId]
  )
}
export default useConversation
