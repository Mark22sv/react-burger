import React from 'react';
import {
  Tab,
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import burgersIngredientsStyle from '../BurgerIngredients/BurgerIngredients.module.css'

const IngredientsItem = ({ ingredient }) => {
  return (
    <div className={ burgersIngredientsStyle.card }>
      <img className={ `${burgersIngredientsStyle.image} ml-4 mr-4` } src={ ingredient.image } alt="фото" />
      <Counter className={ burgersIngredientsStyle.count } count={1} size="default" extraClass="m-1" />
      <div className={ `${burgersIngredientsStyle.price} mt-1 mb-1` }>
        <p>
          { ingredient.price }
        </p>
        <CurrencyIcon />
      </div>
      <p>
        { ingredient.name }
      </p>
    </div>
  );
}


const BurgersIngredients = (props) => {
    const [current, setCurrent] = React.useState('one')
    const buns = props.ingredients.data.filter((el) => el.type === "bun"),
          sauces = props.ingredients.data.filter((el) => el.type === "sauce"),
          mains = props.ingredients.data.filter((el) => el.type === "main");

    return (
      <div>
        <h1 className="text text_type_main-large pt-10 pb-5">
          Соберите бургер
        </h1>
        <div style={{ display: 'flex' }}>
          <Tab value="one" active={current === 'one'} onClick={setCurrent}>
            Булки
          </Tab>
          <Tab value="two" active={current === 'two'} onClick={setCurrent}>
            Соусы
          </Tab>
          <Tab value="three" active={current === 'three'} onClick={setCurrent}>
            Начинки
          </Tab>
        </div>
        <div className={ `${burgersIngredientsStyle.container} pt-10` }>
          <h2 className="text text_type_main-medium">
            Булки
          </h2>
          <ul className={ `${burgersIngredientsStyle.list} pt-6 pb-10` }>
            {buns.map((item, index) => (
              <li key={index}>
                <IngredientsItem ingredient={ item } />
              </li>
              ))
            }
          </ul>
          <h2 className="text text_type_main-medium">
            Соусы
          </h2>
          <ul className={ `${burgersIngredientsStyle.list} pt-6 pb-10` }>
            {sauces.map((item, index) => (
              <li key={index}>
                <IngredientsItem ingredient={ item } />
              </li>
              ))
            }
          </ul>
          <h2 className="text text_type_main-medium">
            Начинки
          </h2>
          <ul className={ `${burgersIngredientsStyle.list} pt-6 pb-10` }>
          {mains.map((item, index) => (
            <li key={index}>
              <IngredientsItem ingredient={ item } />
            </li>
            ))
          }
          </ul>
        </div>
      </div>
    )
  }

export default BurgersIngredients;
