import React from 'react';
import AppHeader from '../appheader/appheader';
import BurgersIngredients from '../BurgerIngredients/BurgerIngredients';
import appStyles from '../app/app.module.css'
import {data} from '../utils/data'

class App extends React.Component {
  state = {
    data
  };
  render() {
    return (

      <div>
        <header className={ appStyles.header }>
          <AppHeader />
        </header>
        <main className={ appStyles.main }>
          <section className={ appStyles.burgersIngredients }>
            <BurgersIngredients ingredients={ this.state } />
          </section>
        </main>
      </div>

    );
  }
}

export default App;
