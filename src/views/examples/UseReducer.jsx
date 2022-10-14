import React, { useReducer } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const initialState = {
  other: "...",
  products: [],
  user: null,

  //foco ...
  number: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "number_add2":
      return { ...state, number: state.number + 2 };
    case 'login'  :
        return { ...state, user: {name: action.payload}}
    default:
      return state;
  }
}

const UseReducer = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />
      <SectionTitle title="Exercicio #01" />
      <div className="center">
      {state.user ? <span className="text">{state.user.name}</span> : <span className="text">Sem usuário</span> }
      
        <div className="span text">{state.number}</div>
        <div>
            <button className="btn" onClick={() => dispatch({type: 'login', payload: 'Dine'})}>Login</button>
            <button className="btn" onClick={() => dispatch({type: 'number_add2'})}> + 2</button>
            <button className="btn" onClick={() => dispatch({type: 'number_multiply7'})}> *7</button>
            <button className="btn" onClick={() => dispatch({type: 'number_divide25'})}> /25</button>
            <button className="btn" onClick={() => dispatch({type: 'number_parse'})}>Parse</button>
            <input type="number" className="input" />
            <button className="btn" onClick={() => dispatch({type: 'number_addN'})}>Add N</button>



        </div>
      </div>                
    </div>
  );
};

export default UseReducer;
