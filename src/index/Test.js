import {Input, List, Avatar, Checkbox, Button, Form, Alert, Menu, Comment, Tooltip} from "antd";
import "antd/dist/antd.css";
import { TextLoop } from 'react-text-loop-next';
import '../css/T.css'
import React, {createElement, useEffect, useState} from "react";
import {
    AppstoreOutlined,
    DislikeFilled, DislikeOutlined,
    LikeFilled,
    LikeOutlined,
    MailOutlined,
    SettingOutlined
} from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import moment from "moment";





function Test() {
   useEffect(() => {
       document.getElementById('btn').addEventListener('click', debounce())
     //  document.getElementById('btn').addEventListener('click', throttle(fn))

     //loading()
   //submit()
      // console.log(window.innerHeight);

   })


    let images = document.getElementsByTagName("img");
    function callback(entries) {
        console.log(entries)
        for (let i of entries) {
            if (i.isIntersecting) {
                let img = i.target;
                let trueSrc = img.getAttribute("data-src");
                img.setAttribute("src", trueSrc);
                observer.unobserve(img);
            }
        }
    }
    const observer = new IntersectionObserver(callback);
  // window.addEventListener('scroll',submit)
    function submit(){
        for (let i of images) {
            observer.observe(i);
        }
    }
    function loading(){
            for (let i of images) {
                if (i.offsetTop <= window.innerHeight + window.scrollY) {
                    let trueSrc = i.getAttribute('data-src')
                    i.setAttribute('src', trueSrc);
                }
            }

    }

    function fangdou(){
      let timer=null
        return function (){
           clearTimeout(timer);
           timer=setTimeout(()=>{
               console.log(document.documentElement.scrollTop)
           },1000)
        }
    }


let count=1;
    //let timer = null;
    function debounce(){
        let timer = null
        return function() {
            clearTimeout(timer)
            timer = setTimeout(()=>{
                console.log(count++)
            }, 1000)
        }
    }

    function throttle(fn){
        let flag = false
        return function() {
            if (!flag){
                flag = true
                setTimeout(function () {
                    fn()
                    flag = false
                }, 1000)
            }
        }
    }
    function fn(){
        console.log('请求数据')
    }

    return (
        <div>
            <div className="father">

                <div className="son"></div>
            </div>
            <button id="btn">提交</button>
        </div>
   /*<div>
     <div >
        <img data-src='../json/himage/tou.jpg' src="../json/himage/img.png" alt=""/>
        <img  data-src='../json/himage/wp1.png' src="../json/himage/img.png" alt=""/>
            <img  data-src='../json/himage/wp2.png' src="../json/himage/img.png" alt=""/>
        <img data-src='../json/himage/wp3.png' src="../json/himage/img.png" alt=""/>
        <img data-src='../json/himage/wp4.png' src="../json/himage/img.png" alt=""/>
        <img data-src='../json/himage/wp5.png' src="../json/himage/img.png" alt=""/>
        <img data-src='../json/himage/wp6.png' src="../json/himage/img.png" alt=""/>

            <img  data-src='../json/himage/wp1.png' src="../json/himage/img.png" alt=""/>
            <img  data-src='../json/himage/wp1.png' src="../json/himage/img.png" alt=""/>


        </div>

        <button id="btn">提交</button>
    </div>*/

  );
}

export default Test;
