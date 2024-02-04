import { useState } from "react"
import Nav from "./navigation/Nav"
import Products from "./products/Products"
import Recommended from "./recommended/Recommended"
import Sidebar from "./sidebar/Sidebar"

//database
import products from "./db/data"
import Card from "./components/Card"

function App() {

  const [selectedCategory, setSelectedCategory] = useState(null)
  const [query, setQuery] = useState("")

  //-------------input filter-----------------

  const handleInputChange = (event) => {
    setQuery(event.target.value)
  }

  const filteredItems = products.filter((product) => 
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
  )

  //-------------Radio filter-----------------
  
  const handleChange = (event) => {
    setSelectedCategory(event.target.value)
  }

  //-------------Buttons filter-----------------

  const handleClick = (event) => {
    setSelectedCategory(event.target.value)
  }

  //-------------Main Function-----------------

  function filteredData(products, selected, query){
    let filteredProducts = products

    //filtering input items
    if(query){
      filteredProducts = filteredItems
    }

    //selected filter
    if(selected){
      filteredProducts = filteredProducts.filter(
        ({category,color,company,newPrice,title}) =>
          category === selected || 
          color == selected || 
          company == selected || 
          newPrice == selected || 
          title == selected
          )
      }

      return filteredProducts.map(({img,title,star,reviews,newPrice,prevPrice}) => (
        <Card 
        key={Math.random()} 
        img = {img}
        title = {title}
        star = {star}
        reviews = {reviews}
        newPrice = {newPrice}
        prevPrice = {prevPrice}
        />
      )
    )
  }

  const result = filteredData(products, selectedCategory, query)

  return (
    <>
      <Sidebar handleChange = {handleChange}/>
      <Nav query = {query} handleInputChange = {handleInputChange}/>
      <Recommended handleClick = {handleClick}/>
      <Products result = {result}/>
    </>
  )
}

export default App
