import { useNavigate } from "react-router-dom"
import { LogOut, User, Clock, DollarSign, Phone, MapPin } from "lucide-react"

export function Admin() {
  const navigate = useNavigate()
  const nombre = localStorage.getItem("nombre")

  const cerrarSesion = () => {
    localStorage.clear()
    navigate("/")
  }

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <div className="bg-black text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">✂️ BarberApp Admin</h1>
        <div className="flex items-center gap-3">
          <span className="text-sm text-white/70">Hola, {nombre}</span>
          <button onClick={cerrarSesion} className="bg-red-600 px-3 py-1 rounded-lg text-sm hover:bg-red-700 transition flex items-center gap-1">
            <LogOut size={16} /> Salir
          </button>
        </div>
      </div>

      {/* Contenido */}
      <div className="max-w-2xl mx-auto p-6 space-y-4">

        <h2 className="text-xl font-bold text-gray-800">Mi Perfil</h2>

        {/* Tarjetas de info */}
        <div className="grid grid-cols-2 gap-4">

          <div className="bg-white rounded-xl p-4 shadow-sm flex items-center gap-3">
            <User size={22} className="text-purple-500" />
            <div>
              <p className="text-xs text-gray-400">Nombre</p>
              <p className="font-bold text-gray-800">{nombre}</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm flex items-center gap-3">
            <MapPin size={22} className="text-blue-500" />
            <div>
              <p className="text-xs text-gray-400">Ubicación</p>
              <p className="font-bold text-gray-800">Sin definir</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm flex items-center gap-3">
            <DollarSign size={22} className="text-green-500" />
            <div>
              <p className="text-xs text-gray-400">Precio</p>
              <p className="font-bold text-gray-800">Sin definir</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm flex items-center gap-3">
            <Phone size={22} className="text-orange-500" />
            <div>
              <p className="text-xs text-gray-400">Teléfono</p>
              <p className="font-bold text-gray-800">Sin definir</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm flex items-center gap-3 col-span-2">
            <Clock size={22} className="text-pink-500" />
            <div>
              <p className="text-xs text-gray-400">Horario</p>
              <p className="font-bold text-gray-800">Sin definir</p>
            </div>
          </div>

        </div>

        {/* Botón editar */}
        <button className="w-full bg-black text-white py-3 rounded-xl font-bold hover:bg-gray-800 transition">
          Editar mi perfil
        </button>

      </div>
    </div>
  )
}