import React, {useCallback} from 'react';

import List from "./components/list";
import Head from "./components/head";
import PageLayout from "./components/page-layout";
import Info from "./components/info";
import Modal from './components/modal';
/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({store}) {
  const [active, setActive] = React.useState(false);
  const { list, trash } = store.getState();
  const callbacks = {
    onAddItem: React.useCallback((code) => {
      store.addItem(code);
    }, [trash]),
    onDeleteItem: React.useCallback((title) => {
      store.deleteItem(title);
    }, [trash])
  }

  return (
    <PageLayout>
      <Head title='Магазин'/>
      <Info trash={trash} setActive={setActive}/>
      <List list={list}
        onClick={callbacks.onAddItem}
      />
      { active ? <Modal active={active} 
                        setActive={setActive} 
                        trash={trash}  
                        onClick={callbacks.onDeleteItem}
                  /> 
                : null 
      }
    </PageLayout>
  );
}

export default App;
