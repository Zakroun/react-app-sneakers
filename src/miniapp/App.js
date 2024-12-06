import { Hedear } from './header';
import { Products1 } from './products1';
import { tableau } from './data';
import { Footer } from './footer'
import { Hedear2 } from './header2';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Pages from './pages';
import { Mantableau, Womanetableau, Kidstableau, Newtableau } from './data';
export default function App() {
  const [tableauSneak, settableau] = useState(tableau)
  const [Mantableaus, setMantableau] = useState(Mantableau)
  const [Womanetableaus, setWomanetableau] = useState(Womanetableau)
  const [Kidstableaus, setKidstableau] = useState(Kidstableau)
  const [Newtableaus, setNewtableau] = useState(Newtableau)
  const [panier, setpanier] = useState([])
  const [Favorites, setFavorites] = useState([])
  const Ajoutpanier = (t) => {
    setpanier((prevpanier) => {
      const newpanier = [...prevpanier, t];
      return newpanier;
    });
  }
  const fnFavorites = (t) => {
    setFavorites((prevFavorites) => {
      const newFavorites = [...prevFavorites, t];
      return newFavorites;
    })
  }
  const supprimer = (i) => {
    setpanier(panier.filter(a => a.id !== i))
  }
  const fnSupprimerfav = (i) => {
    setFavorites(Favorites.filter(a => a.id !== i))
  }
  const rechercher = (n) => {
    if (n !== '') {
      setNewtableau(tableau.filter(e => e.name.toLowerCase().includes(n)))
      settableau(tableau.filter(e => e.name.toLowerCase().includes(n)))
      setMantableau(Mantableau.filter(e => e.name.toLowerCase().includes(n)))
      setWomanetableau(Womanetableau.filter(e => e.name.toLowerCase().includes(n)))
      setKidstableau(Kidstableau.filter(e => e.name.toLowerCase().includes(n)))
    } else {
      setNewtableau(tableau)
      settableau(tableau)
      setMantableau(Mantableau)
      setWomanetableau(Womanetableau)
      setKidstableau(Kidstableau)
    }
  }
  const DeleteAll = () => {
    setpanier([])
  }
  const DeleteAllfav = () => {
    setFavorites([])
  }
  const addAll = (t) => {
    setpanier((prevpanier) => {
      const newpanier = [...prevpanier, ...t];
      return newpanier;
    });
  }
  return (
    <>
      <Routes>
        <Route path='/' element={
          <><Hedear Favorites={Favorites} listpanier={panier} fnrecherch={rechercher}></Hedear>
            <Hedear2></Hedear2>
            <Products1 fnFavorites={fnFavorites} tab={tableauSneak} fnctajout={Ajoutpanier}></Products1>
            <Footer></Footer></>
        }>
        </Route>
        <Route path='/pages/:d' element={
          <><Hedear listpanier={panier} fnrecherch={rechercher} ></Hedear>
            <Pages Mantableau={Mantableaus} Newtableau={Newtableaus} Womanetableau={Womanetableaus} Kidstableau={Kidstableaus}
              fnctajout={Ajoutpanier} panier={panier} fnSupprimer={supprimer} DeleteAll={DeleteAll}
              fnFavorites={fnFavorites} Favorites={Favorites} DeleteAllfav={DeleteAllfav} fnSupprimerfav={fnSupprimerfav}
              addAll={addAll}
            ></Pages>
            {/* <Hedear2></Hedear2>
          <Products1 tab={tableauSneak} fnctajout={Ajoutpanier}></Products1> */}
            <Footer></Footer></>
        }>
        </Route>
      </Routes>
    </>
  );
}
