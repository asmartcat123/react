import '../css/User.css'
import React, {createElement, useEffect, useState} from "react";
import {Menu,Button,Layout} from "element-react";
import axios from "axios";
import {Content, Header} from "antd/es/layout/layout";
import {Avatar, Comment, List, Tooltip,Form,Input} from "antd";
import {DislikeFilled, DislikeOutlined, LikeFilled, LikeOutlined} from "@ant-design/icons";
import moment from "moment";

const { TextArea } = Input;
function User(){

    const[time,setTime]=useState(new Date());
    const[comments,setComments]=useState([]);
    const[submitting,setSubmitting]=useState(false);
    const[value,setValue]=useState('');
    const[image,setImage]=useState('');
    const[name,setName]=useState('');


    const handleSubmit=()=>{
        if(!value) {return;}
        setSubmitting(true);
        let yy = new Date().getFullYear();
        let mm = new Date().getMonth() + 1;
        let dd = new Date().getDate();
        let hh = new Date().getHours();
        let mf = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes();
        let date=yy + '-' + mm + '-' + dd + ' ' + hh + ':' + mf
        const{data:res}= axios.post("http://localhost:1642/api/User/insertcomment",{uid:window.sessionStorage.getItem('uid'),username:name,uimage:image,comment:value,time:date})

        setTimeout(()=>{
            setSubmitting(false );
            setValue();
            (async function getComment(){
                const {data:res}=await axios.get("http://localhost:1642/api/User/getcomment",{params:{uid:window.sessionStorage.getItem('uid')}});

                res.data.map(item=>{
                setComments([...comments,{author:item.username,avatar:item.uimage, content: <p>{item.comment}</p>, datetime: item.time}])
                    console.log(comments);
                });
            })();
        },1000)
    }
  const onkeydown=(e)=> {
      if (value == '') {
          return
      }
          if (e.keyCode === 13 && value.trim().length) {
              handleSubmit();
          }

  }
  const handleChange=(e)=>{
      setValue(e.target.value)
  };


    const CommentList = () =>{
        return(
        <List
            dataSource={comments}
            header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
            itemLayout="horizontal"
            renderItem={item => <Comment {...item} />}
        />
    )};

    useEffect(()=>{
      setName(window.sessionStorage.getItem('username'));
       let timer= setInterval(()=>{
            setTime(new Date());
        },1000);
        (async function getHead(){
             let uid=window.sessionStorage.getItem('uid');
             const {data:res}=await axios.get("http://localhost:1642/api/User/gethead",{params:{uid:uid}});
             setImage('../'+res.data[0]);
         })();
        (async function getComment(){
            const {data:res}=await axios.get("http://localhost:1642/api/User/getcomment",{params:{uid:window.sessionStorage.getItem('uid')}});
          //  console.log(res.data);
         res.data.map(item=>{
            comments.push({author:item.username,avatar:item.uimage, content: <p>{item.comment}</p>, datetime: item.time,likes:item.likes})
            });  console.log(comments)
        })();

        return ()=>{
            clearInterval(timer);
            setImage();
        }

    },[]);


    return(
        <div >
        <Header style={{height:'100%',background:'white'}}>
            <div style={{border:'1px solid grey' ,width:'100%'}}></div>
            <div style={{display:'flex',}}>

            <Avatar size={150} src={image} style={{ position:'relative' ,left:'3%', transform: 'translate(-50%,0%)'}}></Avatar>
             <ul id='nav'>
                 <li>JZ</li>
                 <li>{time.toLocaleString()}</li>
                 <li>Boy</li>
             </ul>

            </div>
            <div style={{border:'1px solid grey' ,width:'100%'}}></div>
        </Header>
            <Content>
                {comments.length > 0 && <CommentList  />}
                <Comment
                    avatar={<Avatar src={image} alt='' />}
                    content={
                        <div>
                            <Form.Item>
                                <TextArea rows={4} onChange={handleChange} onKeyDown={onkeydown} value={value} />
                            </Form.Item>
                            <Form.Item>
                                <Button htmlType="submit" loading={submitting} onClick={handleSubmit}  type="primary">
                                    Add Comment
                                </Button>
                            </Form.Item>
                        </div>
                    }
                />

            </Content>



        </div>
    )
}
export default User
