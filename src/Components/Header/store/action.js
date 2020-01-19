export const actions = {
    GET_DATA: 'GET_DATA',
    SAVE_ANIMAL_DATA: 'SAVE_ANIMAL_DATA',
    SAVE_DATA: 'SAVE_DATA',
    SAVE_IMAGE_DATA: 'SAVE_IMAGE_DATA'
};

export const getData = () => ({
    type: actions.GET_DATA
});

export const saveAnimalData = (data) => ({
    type: actions.SAVE_ANIMAL_DATA,
    data
});

export const saveImageData = (animalData, data) => ({
    type: actions.SAVE_IMAGE_DATA,
    animalData,
    data
});
