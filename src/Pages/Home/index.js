import React, { useState } from 'react';
import { connect } from 'react-redux';

import Avatar from 'Helpers/Avatar';
import Image from 'Helpers/Image';
import Input from 'Helpers/Input';
import Dialog from 'Helpers/Dialog';

import { saveImageData } from 'Components/Header/store/action';
import {
  getAnimalDataSelector
} from 'Components/Header/store/reducer';

import HomeStyleContainer from './Home.styled';

const Home = React.memo((props) => {
  const { animalData } = props;

  const [showDialogBox, setShowDialogBox] = useState(false);
  const [imageName, setImageName] = useState('');
  const [imageDesc, setImageDesc] = useState('');
  const [userDataToRender, setUserDataToRender] = useState('');
  const [showEditName, setShowEditName] = useState(false);
  const [showEditDesc, setShowEditDesc] = useState(false);

  const chunkArray = (myArray, chunk_size) => {
      var index = 0;
      var arrayLength = myArray.length;
      var tempArray = [];
      
      for (index = 0; index < arrayLength; index += chunk_size) {
          const myChunk = myArray.slice(index, index+chunk_size);
          // Do something if you want with the group
          tempArray.push(myChunk);
      }
  
      return tempArray;
  };

  const renderImages = () => {
    let resultArray = [];
    if(animalData && animalData.length > 0){
      resultArray = chunkArray(animalData, animalData.length/3);
    }
    return resultArray;
  };

  const _handleImageClick = (data) => {
    setUserDataToRender(data);
    setImageName(data.alt_description);
    setImageDesc(data.description);
    setShowDialogBox(true);
  };

  const _handleSaveButton = (data) => {
      let temp = data;
      temp.alt_description = imageName;
      temp.description = imageDesc;
    setShowDialogBox(false);
    props.dispatch(saveImageData(animalData, temp));
  };

  return(
    <HomeStyleContainer>
      {renderImages() && renderImages().length > 0 && renderImages().map((innerArr, index) => {
        return <div className='imageContainer'>
          {innerArr.map(item => {
            return(
              <div key={item.id} className='imageRow'>
                  <Image
                    className='randomImage'
                    src={item.urls.full}
                    alt={item.alt_description}
                    _onImgClick={() => _handleImageClick(item)}
                  />
              </div>
            );
          })}
        </div>
      })}
      {showDialogBox &&
        <Dialog
          openModalBox={showDialogBox}
          onDialogClose={() => setShowDialogBox(false)}
          _handleDialogCrossClick={() => setShowDialogBox(false)}
          textPrimaryButton="Cancel"
          textSecondaryButton="Save"
          disableSecondaryButton={!(imageName || imageDesc)}
          onPrimaryButtonClick={() => setShowDialogBox(false)}
          onSecondaryButtonClick={() => _handleSaveButton(userDataToRender)}
        >
          <div className='dialogBodyContainer'>
            <div className='dialogUserName'>
              <Avatar image={userDataToRender.user.profile_image.medium} size='M' bgColor={'#e0891a'} />
              <span style={{color: '#0c0c0c'}} className='text16'>{userDataToRender.user.username}</span>
            </div>
            <div className='dialogImageURL'>
              <Image src={userDataToRender.urls.full} />
            </div>
            <div className='dialogDetailContainer'>
              {showEditName ?
                <Input
                  value={imageName}
                  _onChange={(e) => setImageName(e.target.value)}
                  _onBlur={() => setShowEditName(false)}
                />
                :
                <div className='dialogImageName textBold14' onClick={() => setShowEditName(true)}>
                  {imageName ? imageName : 'Add Name'}
                </div>
              }
              {showEditDesc ?
                <Input
                  value={imageDesc}
                  _onChange={(e) => setImageDesc(e.target.value)}
                  _onBlur={() => setShowEditDesc(false)}
                />
                :
                <div className='dialogImageDesc text14' onClick={() => setShowEditDesc(true)}>
                  {imageDesc ? imageDesc : 'Add Description'}
                </div>
              }
            </div>
          </div>
        </Dialog>
      }
    </HomeStyleContainer>
  );
})


const mapStateToProps = state => ({
  animalData: getAnimalDataSelector(state)
});

export default connect(mapStateToProps)(Home);