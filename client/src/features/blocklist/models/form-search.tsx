import { useBlockListQuery } from "@/entities/block-llist/querylist";
import { useState } from "react";

export function SearchList() {
  const [q, setQ] = useState('')
  const blockUseQuery = useBlockListQuery({ q })
  const item = blockUseQuery.data?.items ?? []
  return { item, q, setQ }
}