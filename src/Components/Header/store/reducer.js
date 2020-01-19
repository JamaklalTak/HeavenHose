import { createSelector } from 'reselect';
import { actions } from './action';

const initialState = {
  animalData: [],
}

// Memorized  Selector Function
export const getAnimalDataSelector = createSelector(
  state => state.headerReducer.animalData,
  (animalData) => animalData
);

export default (state = initialState, payload = {}) => {
  switch(payload.type){
    case actions.SAVE_ANIMAL_DATA:
      return {
        ...state,
        animalData: payload.data
      };

    default:
      return state;
  }
}