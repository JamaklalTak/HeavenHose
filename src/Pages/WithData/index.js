import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Image from 'Helpers/Image';
import Avatar from 'Helpers/Avatar';

import {
  getAnimalDataSelector
} from 'Components/Header/store/reducer';

import WithDataStyleContainer from './WithData.styled';

const WithData = React.memo((props) => {
  const { animalData } = props;
  const [dataToRender, setDataToRender] = useState([]);

  useEffect(() => {
    const path = window.localStorage.getItem('currentPath');
    if(path === '/animal'){
      setDataToRender(animalData);
    }
  });

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
    if(dataToRender && dataToRender.length > 0){
      resultArray = chunkArray(dataToRender, dataToRender.length/3);
    }
    return resultArray;
  };

  return(
    <WithDataStyleContainer>
      {renderImages() && renderImages().length > 0 && renderImages().map(innerArr => {
        return <div className='imageContainer'>
          {innerArr.map(item => {
            return(
              <figure>
                <Image
                  key={item.id}
                  className='randomImage'
                  width='100%'
                  height='auto'
                  src={item.urls.full}
                  alt={item.alt_description}
                >
                  <div className='imageName textBold14' style={{color: item.color}}>{item.alt_description}</div>
                  <div className='userName textBold14'>
                      <Avatar image={item.user.profile_image.medium} size='M' bgColor={item.color}/>
                      <span style={{color: item.color}}>{item.user.username}</span>
                  </div>
                </Image>
                {item.description && <figcaption>
                  <div className='imageDescription text12'>{item.description}</div>
                </figcaption>}
              </figure>
            );
          })}
        </div>
      })}
    </WithDataStyleContainer>
  );
})


const mapStateToProps = state => ({
  animalData: getAnimalDataSelector(state)
});

export default connect(mapStateToProps)(WithData);