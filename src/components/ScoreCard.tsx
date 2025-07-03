import React from "react"

type Props = {
  score: number
  classificacao: string
}

export default function ScoreCard({ score, classificacao }: Props) {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold">Score: {score}</h2>
      <p>{classificacao}</p>
    </div>
  )
}