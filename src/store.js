import {generateCode} from "./utils";

/**
 * Хранилище состояния приложения
 */
class Store {
  constructor(initState = {}) {
    this.state = { ...initState, trash: new Map() }
    this.listeners = []; // Слушатели изменений состояния
  }

  /**
   * Подписка слушателя на изменения состояния
   * @param listener {Function}
   * @returns {Function} Функция отписки
   */
  subscribe(listener) {
    this.listeners.push(listener);
    // Возвращается функция для удаления добавленного слушателя
    return () => {
      this.listeners = this.listeners.filter(item => item !== listener);
    }
  }

  /**
   * Выбор состояния
   * @returns {Object}
   */
  getState() {
    return this.state;
  }

  /**
   * Установка состояния
   * @param newState {Object}
   */
  setState(newState) {
    this.state = newState;
    // Вызываем всех слушателей
    for (const listener of this.listeners) listener();
  }

  /**
   * Добавление товара в корзину
   * @param code Код товара
   */
  addItem(code) {
    let trash = this.state.trash;
    let item = this.state.list.filter(value => value.code === code)[0];
    let title = item.title, price = item.price;

    if (trash.has(title)) {
      let { count, price } = trash.get(title);
      trash.set(title, {count: count + 1, price, code: code});
    }
    else 
      trash.set(title, {count : 1, price: price, code: code});

    this.setState({
      ...this.state,
      trash: new Map(trash)
    });
  };

    /**
   * Добавление товара в корзину
   * @param title  Описание товара
   */
  deleteItem(title) {
    let trash = this.state.trash;
    trash.delete(title);
    this.setState({
      ...this.state,
      trash: new Map(trash)
    })
  };
}

export default Store;
