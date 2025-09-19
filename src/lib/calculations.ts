export function convertirAHs(valor: number, unidad: string) {
  unidad = unidad.toLowerCase()
  if (unidad.includes('zh')) return valor * 1e21
  if (unidad.includes('eh')) return valor * 1e18
  if (unidad.includes('ph')) return valor * 1e15
  if (unidad.includes('th')) return valor * 1e12
  if (unidad.includes('gh')) return valor * 1e9
  if (unidad.includes('mh')) return valor * 1e6
  return valor
}

export function tiempoASegundos(tiempo: string) {
  const partes = tiempo.split(':').map(Number)
  if (partes.length === 2) return partes[0] * 60 + partes[1]
  return 601
}
