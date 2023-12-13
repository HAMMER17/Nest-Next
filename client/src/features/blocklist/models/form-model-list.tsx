import { useAddBlockMutation } from "@/entities/block-llist/querylist";
import { AddBlockDtoType } from "@/shared/api/generate";
import { useForm } from "react-hook-form";

export function formBlockList() {
  const { handleSubmit, register, watch, reset } = useForm<{ type: AddBlockDtoType, data: string }>()
  const useBlockMutation = useAddBlockMutation()
  const types = watch('type')
  return {
    HandleSubmit: handleSubmit((data) => useBlockMutation.mutate(data, {
      onSuccess() {
        reset()
      }
    })),
    register,
    types
  }
}