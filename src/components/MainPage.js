import { colors } from '@material-ui/core';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const MainPage = ({ images, saved, setsaved }) => {

  const savedImgs = (img) => {
    let checker = true;

    for (let i = 0; i < saved.length; i++) {
      if (img.id === saved[i].id) {
        checker = false;
        toast.warn("It is already saved!", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        break;
      }
    }

    if (checker) {
      setsaved([...saved, img]);
      toast.success("Image saved successfully!", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  return (
    <div className="AllCities">
      {images.map((image) => (
        <div key={image.id} className="AllCitiesItem">
          <img 
            src={image.src.medium} 
            alt={image.alt} 
            className="citypic" 
            loading='lazy' 
            onClick={() => { savedImgs(image) }} 
          />
      </div>
      ))}
      <ToastContainer /> 
    </div>
  )
}

export default MainPage;
