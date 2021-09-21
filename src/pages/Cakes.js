import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import getCakesRecipes from '../actions'


const mapStateToProps = (state) => {
    console.log(state)
    return { cakeRecipe: state.cakeRecipesReducer}
}

const Cakes = (props) => {
    console.log (props.cakeRecipe)
    useEffect(()=>{
        props.getCakesRecipes()
    },[])


    // const cakeList = props.cakeRecipe.map((cake)=>{
    //     return(
    //         <div className="cakes" >
    //         <h3>{cake.recipe.label}</h3>
    //         <br/>
    //          <img src={cake.recipe.image} alt=""></img>
    //        <div className="links">
    //             <a href={cake.recipe.url} target="_blank">Full Recipe</a>
    //         </div>
            
    //     </div>
    //     )
    // })
    
    return (
        <div>
           {/* {cakeList} */}
        </div>
    )
    
}

export default connect(mapStateToProps, {getCakesRecipes})(Cakes)
