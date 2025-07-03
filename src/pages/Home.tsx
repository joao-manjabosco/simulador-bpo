import React, { useState } from "react"
import { tiposServico } from "@/data/presets"
import { calcularScore, calcularPreco } from "@/data/pricing"
import PriceCard from "@/components/PriceCard"
import Header from "@/components/ui/Header"

export default function Home() {
  const [tipoServico, setTipoServico] = useState("BPO Controladoria")
  const [numeroFuncionarios, setNumeroFuncionarios] = useState(5)
  const [contasBancarias, setContasBancarias] = useState(1)
  const [erpNuvem, setErpNuvem] = useState("Não")
  const [maturidade, setMaturidade] = useState("Alta")
  const [equipe, setEquipe] = useState("")

  const { score, classificacao } = calcularScore(tipoServico, numeroFuncionarios, contasBancarias, erpNuvem, maturidade, equipe)
  const price = calcularPreco(score)

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Simulador de Precificação
          </h1>
          <h2 className="text-xl font-bold text-gray-800">
            de Serviços
          </h2>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tipo de Serviço
            </label>
            <select 
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
              value={tipoServico} 
              onChange={e => setTipoServico(e.target.value)}
            >
              {tiposServico.map(tipo => (
                <option key={tipo} value={tipo}>{tipo}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Número de Funcionários
            </label>
            <select 
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
              value={numeroFuncionarios} 
              onChange={e => setNumeroFuncionarios(Number(e.target.value))}
            >
              <option value={5}>05</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
              <option value={100}>100+</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Contas Bancárias
            </label>
            <select 
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
              value={contasBancarias} 
              onChange={e => setContasBancarias(Number(e.target.value))}
            >
              <option value={1}>1 Conta</option>
              <option value={2}>2 Contas</option>
              <option value={3}>3 Contas</option>
              <option value={5}>5+ Contas</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              ERP em Nuvem
            </label>
            <select 
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
              value={erpNuvem} 
              onChange={e => setErpNuvem(e.target.value)}
            >
              <option value="Não">Não</option>
              <option value="Sim">Sim</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Maturidade dos Processos
            </label>
            <select 
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
              value={maturidade} 
              onChange={e => setMaturidade(e.target.value)}
            >
              <option value="Alta">Alta</option>
              <option value="Média">Média</option>
              <option value="Baixa">Baixa</option>
            </select>
          </div>

          <PriceCard score={score} price={price} classificacao={classificacao} />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Equipe Sugerida
            </label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              rows={3}
              value={equipe}
              onChange={(e) => setEquipe(e.target.value)}
              placeholder="Ex: 1 analista senior, 2 assistentes júnior..."
            />
            {equipe.trim() && (
              <p className="text-xs text-gray-500 mt-1">
                💡 O preço está sendo ajustado com base na equipe informada
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

