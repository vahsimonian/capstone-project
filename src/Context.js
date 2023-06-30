import React, { useState, useEffect, createContext } from 'react'
const Context = createContext()

function ContextProvider({ children }) {
  const [allPhotos, setAllPhotos] = useState([])
  const [cartItems, setCartItems] = useState([])

  const url =
    'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllPhotos(data))
  }, [])

  function toggleFavorite(id) {
    const updatedArr = allPhotos.map((photo) => {
      if (photo.id === id) {
        return {
          ...photo,
          isFavorite: !photo.isFavorite,
        }
      }
      return photo
    })
    setAllPhotos(updatedArr)
  }

  function addToCart(newItem) {
    setCartItems((cartItems) => [...cartItems, newItem])
  }

  function removeFromCart(id) {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  console.log(cartItems)

  return (
    <Context.Provider
      value={{
        allPhotos,
        cartItems,
        setCartItems,
        toggleFavorite,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export { Context, ContextProvider }
