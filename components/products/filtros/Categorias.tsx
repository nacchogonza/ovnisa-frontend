"use client";

import type { ChangeEvent } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const Categorias = ({
  selected,
  categorias,
}: {
  selected: string | null;
  categorias: any;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const onSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    // objeto de URL para leer y escribir
    const current = new URLSearchParams(Array.from(searchParams.entries()));

    // actualizar
    const value = event.target.value.trim();

    if (!value) {
      current.delete("categoria");
    } else {
      current.set("categoria", event.target.value);
    }

    const search = current.toString();
    // tambien const query = `${'?'.repeat(search.length && 1)}${search}`;
    const query = search ? `?${search}` : "";

    router.push(`${pathname}${query}`);
  };

  return (
    <div>
      <label className="text-xs">Categorías</label>
      <select
        className="px-4 py-2 rounded border border-gray-400 w-full"
        value={selected ? selected : ""}
        onChange={onSelect}
      >
        <option value=""></option>
        {categorias && categorias.length > 0
          ? categorias.map((cat:any) => (
              <option key={cat.id} value={cat.attributes.slug}>
                {cat.attributes.nombre}
              </option>
            ))
          : null}
      </select>
    </div>
  );
};