import React from "react"

type Props = {
  equipe: string
  setEquipe: (value: string) => void
}

export default function TeamSelector({ equipe, setEquipe }: Props) {
  return (
    <div className="mt-4">
      <label className="block font-medium">Equipe Sugerida</label>
      <textarea
        className="w-full border p-2 mt-1"
        value={equipe}
        onChange={(e) => setEquipe(e.target.value)}
        placeholder="Edite ou proponha sua equipe ideal..."
      />
    </div>
  )
}