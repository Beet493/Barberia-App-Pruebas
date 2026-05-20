import { Barbeross } from "../components"
import { useContext } from "react"
import { FavoritosContext } from "../context/FavoritosContext"
import { NavLink } from "react-router-dom"

export function Barberos(){

const { favoritos, toggleFavorito } = useContext(FavoritosContext)

    return( 
    <div>
    <h1>Te vas a quedar pelon o porque quieres 1</h1>
    <h1 className="text-2xl font-bold text-center mt-6">
    Barberos
        </h1>
        <div className="flex justify-center mt-6 flex gap-10 flex gap-3 overflow-x-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        <Barbeross
        nombre="Erin Lindford"
        imagen="https://img.freepik.com/fotos-premium/primer-plano-fotografia-hombre-elegante-posando-traje-tradicional_999340-16017.jpg"
        favorito={toggleFavorito}
        esFavorito={favoritos.some(b => b.nombre === "Erin Lindford")}
        />
        <Barbeross
      nombre="Pulpo Tigre"
      imagen="https://img.freepik.com/fotos-premium/primer-plano-fotografia-hombre-elegante-posando-traje-tradicional_999340-16017.jpg"
      favorito={toggleFavorito}
        esFavorito={favoritos.some(b => b.nombre === "Pulpo Tigre")}
      />
      <Barbeross
      nombre="Estetica Caballeros"
      imagen="https://img.freepik.com/fotos-premium/primer-plano-fotografia-hombre-elegante-posando-traje-tradicional_999340-16017.jpg"
      favorito={toggleFavorito}
        esFavorito={favoritos.some(b => b.nombre === "Estetica Caballeros")}
      />
      <Barbeross
      nombre="Barber Shop Moy"
      imagen="https://img.freepik.com/fotos-premium/primer-plano-fotografia-hombre-elegante-posando-traje-tradicional_999340-16017.jpg"
      favorito={toggleFavorito}
        esFavorito={favoritos.some(b => b.nombre === "Barber Shop Moy")}
      />
      <Barbeross
      nombre="Barber Shop y Peluqueria VD"
      imagen="https://img.freepik.com/fotos-premium/primer-plano-fotografia-hombre-elegante-posando-traje-tradicional_999340-16017.jpg"
      favorito={toggleFavorito}
        esFavorito={favoritos.some(b => b.nombre === "Barber Shop y Peluqueria VD")}
      />
      <Barbeross
      nombre="Barber Shop JDA"
      imagen="https://img.freepik.com/fotos-premium/primer-plano-fotografia-hombre-elegante-posando-traje-tradicional_999340-16017.jpg"
      favorito={toggleFavorito}
        esFavorito={favoritos.some(b => b.nombre === "Barber Shop JDA")}
      />
      <Barbeross
      nombre="CHICHO BarberShop"
      imagen="https://img.freepik.com/fotos-premium/primer-plano-fotografia-hombre-elegante-posando-traje-tradicional_999340-16017.jpg"
      favorito={toggleFavorito}
        esFavorito={favoritos.some(b => b.nombre === "CHICHO BarberShop")}
      />
        </div>
        </div>
    </div>

    )
}