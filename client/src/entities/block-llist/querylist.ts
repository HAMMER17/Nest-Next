import { blockListControllerAddBlock, blockListControllerGetList, blockListControllerRemoteBlock } from "@/shared/api/generate";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";


const blockListKey: any = ['block-list']
export function useBlockListQuery({ q }: { q?: string }) {
  return useQuery({
    queryKey: blockListKey.concat([{ q }]),
    queryFn: () => blockListControllerGetList({ q }),
  })
}

export function useAddBlockMutation() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: blockListControllerAddBlock,
    async onSettled() {
      await queryClient.invalidateQueries(blockListKey)
    }
  })
}
export function useRemoteBlockMutation() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: blockListControllerRemoteBlock,
    async onSettled() {
      await queryClient.invalidateQueries(blockListKey)
    }
  })
}