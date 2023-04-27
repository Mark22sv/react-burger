import {
  ConstructorElement,
  DragIcon,
  CurrencyIcon,
  Button
} from "@ya.praktikum/react-developer-burger-ui-components";
import burgerConstructorStyle from '../BurgerConstructor/BurgerConstructor.module.css';

const IngredientsItem = ({ ingredient }) => {
  return (
    <div>
      <ConstructorElement
          text={ingredient.name}
          price={ingredient.price}
          thumbnail={ingredient.image_mobile}
      />
    </div>
  );
}

const BurgerConstructor = (props) => {
  const buns = props.ingredients.data.filter((el) => el.type === "bun"),
        saucesAndMains = props.ingredients.data.filter((el) => el.type !== "bun");

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'end' }}>
      <ConstructorElement
        type="top"
        isLocked={true}
        text={`${buns[0].name} '(вверх)'`}
        price={buns[0].price}
        thumbnail={buns[0].image_mobile}
      />
      <ul className={ burgerConstructorStyle.list }>
        {saucesAndMains.map((item, index) => (
          <li className={ burgerConstructorStyle.item } key={index}>
            <DragIcon type="primary" />
            <IngredientsItem ingredient={ item } />
          </li>
          ))
        }
      </ul>
      <ConstructorElement
        type="bottom"
        isLocked={true}
        text={`${buns[0].name} '(низ)'`}
        price={buns[0].price}
        thumbnail={buns[0].image_mobile}
      />
      <div className={`${burgerConstructorStyle.order} pt-10 pr-4`}>
        <div className={`${burgerConstructorStyle.price}`}>
          <p className="text text_type_digits-medium">610</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button htmlType="button" type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </div>
  )
}

export default BurgerConstructor;


