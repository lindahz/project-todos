import { createSlice } from '@reduxjs/toolkit'

export const tasks = createSlice({
  name: 'tasks',
  initialState: {
    items: [
      {id: 1, text: 'make breakfast', complete: false, category: 'home'},
      {id: 2, text: 'go to work', complete: false, category: 'work'},
      {id: 3, text: 'pay the bills', complete: false, category: 'finance'},
      {id: 4, text: 'get some eggs from the store', complete: false, category: 'shopping'}
    ]
  },
  reducers: {
    addItem: (state, action) => {
      const { newTask, category } = action.payload
      state.items.push({ id: Date.now(), text: newTask, category, complete: false})
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(task => task.id !== action.payload)
    },
    toggleTaskCompleted: (state, action) => {
      // to find the item id that matches.
      const foundItem = state.items.find(task => task.id === action.payload)
      // if item is found, the value of initial state will be inverted, go from false to true
      if (foundItem) {
        foundItem.complete = !foundItem.complete
      }
    }
  }
})