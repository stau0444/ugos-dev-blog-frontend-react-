import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getContentDetailFail, getContentDetailStart, getContentDetailSuccess } from "../redux/moduels/contents";
import TestContainer from '../components/TestContainer';
const tags = [
  { id: 0, tagName: "JAVA" },
  { id: 2, tagName: "JAVASCIPT" },
  { id: 3, tagName: "JPA" },
  { id: 4, tagName: "SPRING-BOOT" },
  { id: 5, tagName: "JPA" },
  { id: 6, tagName: "REACT" },
];


const sempleContent = {
  id: 0,
  title : "자바란 무엇인가?",
  thumbnail:"",
  createdAt:"2015-12-12",
  tags:[tags[0],tags[1],tags[2]],
  article:"<h2>자바는 블라블라블라</h2>"
}

export default function ContentFormUpdateContainer({isUpdate}) {
    const content = useSelector(state => state.contents)
    const dispatch = useDispatch();
    useEffect(()=>{
        const getContent = () => {
            // const contentId = match.params.contentId;
            async function getContent(){
                try{
                dispatch(getContentDetailStart());
                // const resp = await axios.get("/content/"+contentId)
                const resp = sempleContent;
                dispatch(getContentDetailSuccess(resp));
                }catch(error){
                dispatch(getContentDetailFail(error));
                }
            }
            getContent();
        }
        getContent();
    },[dispatch])
    console.log('content123' , content);
    return <TestContainer  content={content}/>;
}