export function calcularPreco(
  score: number
): number {
  let precoBase = 0

  if (score >= 90) {
    precoBase = 2500 // Cliente Ideal
  } else if (score >= 70) {
    precoBase = 2000 // Cliente Médio
  } else if (score >= 40) {
    precoBase = 1500 // Cliente Médio
  } else {
    precoBase = 1000 // Cliente Difícil
  }

  // Ajuste fino baseado no score para uma variação mais suave
  precoBase *= (score / 100) * 0.5 + 0.75 // Exemplo: score 100 -> 1.25x, score 0 -> 0.75x

  return Math.round(precoBase)
}

export function calcularScore(
  tipoServico: string,
  numeroFuncionarios: number,
  contasBancarias: number,
  erpNuvem: string,
  maturidade: string,
  equipe: string = ""
): { score: number; classificacao: string } {
  let score = 100

  switch (tipoServico) {
    case "BPO Financeiro - Tesouraria":
    case "BPO Gestão Financeira":
      // Cliente ideal: poucos funcionários, 1 conta no banco, ERP em nuvem (Sim), alto grau de maturidade
      if (numeroFuncionarios > 5) score -= 15
      if (contasBancarias > 1) score -= 10
      if (erpNuvem === "Não") score -= 20
      if (maturidade === "Média") score -= 10
      if (maturidade === "Baixa") score -= 25
      break
    case "BPO Controladoria":
    case "CFO as a Service": // Assumindo que CFO as a Service é similar à Controladoria
      // Cliente ideal: organizado (implícito por maturidade), infos no sistema (implícito por ERP), alto grau de maturidade
      if (erpNuvem === "Não") score -= 15
      if (maturidade === "Média") score -= 10
      if (maturidade === "Baixa") score -= 25
      break
    case "Consultoria Financeira":
      // Critérios gerais, pode-se adicionar mais se houver
      if (erpNuvem === "Não") score -= 10
      if (maturidade === "Baixa") score -= 15
      break
    default:
      break
  }

  // Ajuste de score por equipe customizada
  if (equipe.trim()) {
    const equipeTexto = equipe.toLowerCase()
    let ajusteScore = 0 // Ajuste neutro

    // Palavras-chave que indicam equipe mais especializada (aumenta score)
    const palavrasEspecializadas = [
      'senior', 'sênior', 'especialista', 'gerente', 'coordenador', 
      'analista senior', 'consultor', 'supervisor', 'líder', 'pleno'
    ]
    
    // Palavras-chave que indicam equipe mais básica (diminui score)
    const palavrasBasicas = [
      'junior', 'júnior', 'estagiário', 'trainee', 'assistente', 
      'auxiliar', 'operacional', 'básico'
    ]

    let contadorEspecializada = 0
    let contadorBasica = 0

    palavrasEspecializadas.forEach(palavra => {
      if (equipeTexto.includes(palavra)) contadorEspecializada++
    })

    palavrasBasicas.forEach(palavra => {
      if (equipeTexto.includes(palavra)) contadorBasica++
    })

    if (contadorEspecializada > contadorBasica) {
      ajusteScore = contadorEspecializada * 5 // Aumenta score por cada palavra especializada
    } else if (contadorBasica > contadorEspecializada) {
      ajusteScore = - (contadorBasica * 5) // Diminui score por cada palavra básica
    }

    score += ajusteScore
  }

  // Garante que o score não seja negativo e não ultrapasse 100
  score = Math.max(0, Math.min(100, score))

  let classificacao = "Cliente Ideal"
  if (score < 40) classificacao = "Cliente Difícil"
  else if (score < 70) classificacao = "Cliente Médio"

  return { score, classificacao }
}

