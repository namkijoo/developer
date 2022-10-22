/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState} from "react";

import "./Login.css";

const User={
    email:'test@example.com',
    pw:'test2323@@@'
}

export default function Login() {
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');
    const[emailValid,setEmailValid]  = useState(false);
    const[pwValid,setPwValid]  = useState(false);
    

    const handleEmail = (e)=>{
        setEmail(e.target.value);
        const regex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        if(regex.text(email)){
            setEmailValid(true);
        }
        else{
            setEmailValid(false);
        }
    }

    const handlePassWord = (e)=>{
        setPw(e.target.value);
        const regex =/^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
        if(regex.test(pw)){
            setPwValid(true);
        }else{
            setPwValid(false);
        }
    }

    const onClickConfirm=()=>{
        if(email=== User.email&&pw===User.pw){
            alert('로그인에 성공했습니다.');
        }else{
            alert('등록되지 않은 회원입니다.');
        }
    }

    return (
        <div id="page">
            <h1 id="title">로그인</h1>
            <div id="inputWrapper">
                
                <input id="email" placeholder="이메일을 입력해주세요" value={email} onChange={handleEmail} type='text'/>
                
                <div className="errorMessageWrap">
                    {
                        !emailValid&&email.length>0&&(
                            <div>올바른 이메일을 입력해주세요.</div>
                        )
                    }
                </div>
                
                <input id="email" placeholder="비밀번호를 입력해주세요." value={pw} onChange={handlePassWord} type='password'></input>
                
                <div className="errorMessageWrap">
                    {!pwValid&&pw.length>0&&(
                        <div>영문, 숫자, 특수문자 포함 8장 이상 입력해주세요.</div>
                    )}
                </div>
            </div>

            <div id="change">
                <input id="check" type="checkbox"></input>
                <span id="equal">로그인 상태 유지</span>
            </div>
            
            <div id="button">
                <button id="pass" onClick={onClickConfirm}>
                    로그인 하기
                </button>
            </div>

            <div id="search">
                <a href="#">아이디</a>/<a href="#">비밀번호 찾기</a>
                <span id="register"><a href="#" >회원가입</a></span>
            </div>
        </div>

    )
}