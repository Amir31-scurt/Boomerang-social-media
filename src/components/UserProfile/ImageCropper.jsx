import React, { useState, useCallback } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

function ImageCropper({ imageFile, onCropped, aspectRatio }) {
  const [crop, setCrop] = useState({ aspect: aspectRatio });
  const [image, setImage] = useState(null);
  const [croppedImageUrl, setCroppedImageUrl] = useState(null);

  const onImageLoaded = useCallback((img) => {
    setImage(img);
  }, []);

  const onCropComplete = useCallback(
    (crop) => {
      if (image && crop.width && crop.height) {
        const croppedImage = getCroppedImg(image, crop);
        setCroppedImageUrl(croppedImage);
      }
    },
    [image]
  );

  const getCroppedImg = (image, crop) => {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    return canvas.toDataURL('image/jpeg');
  };

  const handleCropConfirm = () => {
    onCropped(croppedImageUrl);
  };

  return (
    <div>
      {imageFile && (
        <ReactCrop
          src={URL.createObjectURL(imageFile)}
          crop={crop}
          onImageLoaded={onImageLoaded}
          onComplete={onCropComplete}
          onChange={(newCrop) => setCrop(newCrop)}
        />
      )}
      {croppedImageUrl && (
        <div>
          <img alt="Cropped" src={croppedImageUrl} />
          <button onClick={handleCropConfirm}>Confirm Crop</button>
        </div>
      )}
    </div>
  );
}

export default ImageCropper;
