import { Route, Routes } from "react-router-dom"
import { SharedLayout } from "./components/SharedLayout/SharedLayout"
import { Catalog } from "./pages/Catalog/Catalog"

function App() {

  return (
    <Routes>
      <Route path='/' element={<SharedLayout />}>
        <Route index element={<div>Home</div>} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<div>Favorites</div>} />
      </Route>
    </Routes>
  )
}

export default App
