import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import getCakesRecipes from '../actions'


const mapStateToProps = (state) => {
    return { cakeURL: state.cakeRecipesReducer.cakeURL}
}

const Cakes = (props) => {
    console.log (props)
    useEffect(()=>{
        props.getCakesRecipes()
    },[])


    const cakeList = props.map((cake)=>{
        return(
            <div className="cakes" >
            <h3>{cake.recipe.label}</h3>
            <br/>
             <img src={cake.recipe.image} alt=""></img>
           <div className="links">
                <a href={cake.recipe.url} target="_blank">Full Recipe</a>
            </div>
            
        </div>
        )
    })
    return (
        <div>
           {cakeList}
        </div>
    )
}
export default connect(mapStateToProps, {getCakesRecipes})(Cakes)
