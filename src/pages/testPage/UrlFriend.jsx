import React, {useState} from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import icon from '../../assets/img/character/mint.png'


const UrlFriend = () => {
    const [nickname, setNickname] = useState('Guest');
    const navigate = useNavigate();

    useEffect(() => {
      const timer = setTimeout(() => {
        navigate("/test");
      }, 3000);
  
      return () => clearTimeout(timer); 
    }, [navigate]);
    return (
        <div className='container urlfriend'>
            <img src={icon} alt="url 받은 친구 아이콘" />
            <h3>{nickname}님의 테스트가 도착했어요!<br/>풀어볼까요?</h3>
        </div>
    )
 
}

export default UrlFriend
