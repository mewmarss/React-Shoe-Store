import Category from "./category/Category"
import Price from "./price/Price"
import Colors from "./colors/Colors"

import "./Sidebar.css"

function Sidebar({handleChange}) {
    
    return(
        <>
            <section className="sidebar">

                <div className="space"></div>

                <Category handleChange = {handleChange}/>
                <Price handleChange = {handleChange}/>
                <Colors handleChange = {handleChange}/>

            </section>
        </>
    )
}

export default Sidebar