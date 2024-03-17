'use client'

import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { makeStore } from '../lib/store';
import { initializeMeals } from '@/lib/features/mealsSlice';

export default function StoreProvider({ children }) {
  const [store, setStore] = useState(null);

  useEffect(() => {
    const storeInstance = makeStore();
    storeInstance.dispatch(initializeMeals());
    setStore(storeInstance);
  }, []);

  // Don't render the children until the store is initialized
  if (!store) return null;

  return <Provider store={store}>{children}</Provider>;
}