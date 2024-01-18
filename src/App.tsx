import { Route, Routes } from "react-router-dom"
import { SharedLayout } from "./components/SharedLayout/SharedLayout"

function App() {

  return (
    <Routes>
      <Route path='/' element={<SharedLayout />}>
        <Route index element={<div>Home</div>} />
        <Route path="/catalog" element={<div>Catalog</div>} />
        <Route path="/favorites" element={<div>Favorites</div>} />
      </Route>
    </Routes>
  )
}

export default App
