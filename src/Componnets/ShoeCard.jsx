import React from 'react'

const ShoeCard = ({imgurl, changeImg, backgroundimg}) => {
    const handellclick = () => {
        if (backgroundimg !== imgurl.bigShoe) {
            changeImg(imgurl.bigShoe)
        }
    }
  
  return (
    <div className={`w-[150px] h-[150px] bg-cover rounded-xl border flex justify-center items-center bg-card ${imgurl.bigShoe == backgroundimg ? `border-coral-red`: `border-white-space`}`} onClick={handellclick}>
        <img src={imgurl.thumbnail}/>
    </div>
  )
}

export default ShoeCard