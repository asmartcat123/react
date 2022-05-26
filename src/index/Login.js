import {Form, Input, Button, Checkbox, message} from 'antd';
import '../css/Login.css';
import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Login() {
      const navigate = useNavigate();
    const onFinish = (values: any) => {
        console.log('Success:', values);
        let username = values.username;
        let password = values.password;

        (async function CheckUser(){
            const{data:res}=await axios.post("http://localhost:1642/api/User/checkuser", {username, password});
            console.log(res)
              if(res.code!=200){
                  fail()
              }else{
                  window.sessionStorage.setItem('uid',res.data[0].uid);
                  window.sessionStorage.setItem('username',res.data[0].username);
                  await navigate('/Load');
                  success()
              }
        })()

    };
    const success = () => {
        return message.success('Login Success');
    }
   const fail = () => {
      return message.error('Login fail');
   }
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <div style={{position:'relative', top:'300px',width:'100%' }}>
            <h2 style={{marginLeft:'48%'}}>Login</h2>
        <Form
            name="basic"
            labelCol={{ span: 10 }}
            wrapperCol={{ span: 4 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"

        >
            <Form.Item
                label="Username"
                name="username"

                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"

                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 10, span: 16 }}>
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
                <Button type="primary" htmlType="submit" >
                    Submit
                </Button>
            </Form.Item>
        </Form>
        </div>
        )
}


export default Login;
