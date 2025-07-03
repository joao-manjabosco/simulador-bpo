export const tiposServico = [
  "BPO Financeiro - Tesouraria",
  "BPO Gestão Financeira",
  "BPO Controladoria",
  "Consultoria Financeira"
]

export function calcularScore(servico: string, erp: string, maturidade: string): { score: number, classificacao: string } {
  let score = 100

  if (erp === "Não") score -= 20

  if (maturidade === "Baixa") score -= 25
  else if (maturidade === "Média") score -= 10

  if (servico.includes("Consultoria")) score += 10

  let classificacao = "Cliente Ideal"
  if (score < 40) classificacao = "Cliente Difícil"
  else if (score < 70) classificacao = "Cliente Médio"

  return { score, classificacao }
}