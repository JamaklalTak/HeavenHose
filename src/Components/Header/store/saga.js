import { put, takeLatest } from 'redux-saga/effects';

import { actions, saveAnimalData } from './action';

import animalData from 'Mocks/animalData.json';

function* fetchDataWorker() {
  try{
    yield put(saveAnimalData(animalData));
  } catch(error) {
    console.log(error)
  }
};

function* saveImageDataWorker({ animalData, data }) {
  try{
    const updatedData = animalData.map(item => {
      let temp = item;
      if(temp.id === data.id){
        temp.alt_description = data.alt_description;
        temp.description = data.alt_description;
      }
      return temp;
    });
    console.log('>>>>>>saga>>>', updatedData);
    yield put(saveAnimalData(updatedData));
  } catch(error){
    console.log(error);
  }
};

export default function* fetchDataWatcher() {
    yield takeLatest(actions.GET_DATA, fetchDataWorker);
    yield takeLatest(actions.SAVE_DATA, saveImageDataWorker)
}