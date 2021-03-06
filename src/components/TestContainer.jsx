import { useEffect, useRef, useState } from "react";

export default function TestContainer({content}) {
    const titleRef = useRef('');
    const imgRef = useRef(null);
    const [image , setImage] = useState({file:null,imagePreviewUrl:""})
    
     //이미지 관리 함수
     const handleImageChange = (e)=>{
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];
        let url = URL.createObjectURL(file);
        
        reader.onloadend = () => {
            setImage({
            file: file,
            imagePreviewUrl: url
            });
        }
        reader.readAsDataURL(file);
        fillImageFile();

    }
    const fillImageFile = () => { 
        imgRef.current.files.item(1,image.file)
    }

    useEffect(()=>{
        titleRef.current.value = content.title
    })
    return(
    <div>
        <input ref = {titleRef} type="text" />
        <input type="file"  onChange={handleImageChange}/>
        <input ref = {imgRef} type="file"/>
        {image.imagePreviewUrl}
        <img width = '100px'src={image.imagePreviewUrl} alt="" />
        
        test Container
    </div>
    );
}