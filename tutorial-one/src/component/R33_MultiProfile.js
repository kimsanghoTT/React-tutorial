import React, {useState} from 'react';
import './R32_Profile.css';

const Profile = () => {
    const [selectedImg, setSelectedImg] = useState(null);

    const handleImageChange = (event) => {
        const files = event.target.files;
        const imagesArray = [];
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          const reader = new FileReader();

          reader.onloadend = () => {
            imagesArray.push(reader.result);
            if (imagesArray.length === files.length) {
              setSelectedImg(imagesArray);
            }
          };
          reader.readAsDataURL(file);
        }
      };
    

    return (
        <div className='profile-container'>
        <h1>프로필 사진 바꾸기</h1>
        <label htmlFor="imgSelect" className="imgSelectBtn">사진 선택하기</label>
        <input id="imgSelect" type="file" accept='image/*' onChange={handleImageChange} multiple/>

        {selectedImg && (
            <div>
                <h2>미리보기</h2>
                {selectedImg.map(img => (
                    <img src={img}/>
                ))}
            </div>
        )}
        </div>
    )
}
export default Profile;