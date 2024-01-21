import { Route, Routes } from "react-router-dom"
import { SharedLayout } from "./components/SharedLayout/SharedLayout"
import { Catalog } from "./pages/Catalog/Catalog"
import { Favorites } from "./pages/Favorite/Favorites"

function App() {

  return (
    <Routes>
      <Route path='/' element={<SharedLayout />}>
        <Route index element={<div>Home</div>} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorites />} />
      </Route>
    </Routes>
  )
}

export default App
