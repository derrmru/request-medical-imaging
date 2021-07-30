import { useState } from 'react'
import style from './BodyPart.module.css'

const BodyPart = ({
    updateFields,
    fields,
    setStage
}) => {

    //hover state
    const [focus, setFocus] = useState('');

    //style for clicked areas
    const selected = {
        fill: '#75c4ba38',
        transition: '.4s'
    }

    return (
        <div className={style.BodyPartContainer + ' fade-in'}>
            <svg 
                version="1.1" 
                id="Layer_1"
                x="0px" y="0px"
                viewBox="0 0 1000 1000" 
                >
                <g>
                    <path className={style.st0} d="M312.5,230.5" />
                    <path className={style.st0} d="M285.5,89.5c0,0-40-1-34,50c0,0-6-1-4,11s3,12,3,12s1,4,5,4c0,0,5,25,30,29c0,0,32,3,31-33c0,0,7,1,7-7
c0,0,4-18-2-18C321.5,137.5,327.5,91.5,285.5,89.5z"/>
                    <line className={style.st0} x1="261.5" y1="232.5" x2="261.5" y2="180.5" />
                    <path className={style.st0} d="M261.5,198.7c0,0-14,11.8-25,18.8c0,0-14,7-18,10c0,0-23,6-34,23c0,0-10,10-5,55c0,0-9,26-11,55
c0,0-10,8-15,57c0,0-1,36-9,55c0,0,1,7-11,13c0,0-7,4-13,12c0,0-6,8-14,14c0,0-8,5-4,9c0,0,5,2,12-3c0,0,6-6,10-6c0,0,1,8-7,21
c0,0-13,21-10,25c0,0,3,4,7-4c0,0,11-22,15-23c0,0,3-1-1,6c0,0-12,25-7,31c0,0,5,3,7-7c0,0,11-29,14-27c0,0,2,0,0,9c0,0-4,23,1,24
c0,0,3,0,4-7c0,0,3-27,5-28c0,0,3-1,2,7c0,0-1,18,5,16c0,0,2-2,2-9c0,0,0-27,3-37c0,0,3-10,3-13c0,0,3-20,11-37s24-56,24-61
s3-16,4-28c0,0,1-15,10-23c0,0,11,26,6,57c0,0-2,8-2,25c0,0-3-1-6,31l-7.4,52.5"/>
                    <g>
                        <path className={style.st0} d="M228.3,911.5l-3-0.2c-6.5-8.4,4.2-19.8,4.2-19.8c5.6-9.7,4.2-18.8,4.2-18.8c-2.6-7.2-0.8-19.1-0.8-19.1
c1.2-20-12.8-67.9-12.8-67.9s-9.7-36.7-3.8-68.4c6-31.7,4.6-41.8,4.7-58.8s-12.4-58.9-12.4-58.9c-13.4-42.9-2.9-82.3-2.9-82.3
l0.9-4.5"/>
                        <path className={style.st0} d="M232.1,899.7c0,0-6.8,12.6-0.9,15c0,0,0.9,2.1,3.1-0.8" />
                        <path className={style.st0} d="M237.1,900c0,0-4,16.8,0,16c0,0,2.9,2.2,4.1-1.7" />
                        <path className={style.st0} d="M244,900.5c0,0-5.9,14.7,1,16.1c0,0,5.1-0.7,4.3-4.7c0,0,1.3-4.9,2.6-9.9c0,0-5.9,13.7,1.1,15.1
c0,0,10.7,4.7,11.5-7.3c0,0,3.5-24.8,0.7-28c0,0-1.7-4.1-0.6-7c0,0,2-15.9-0.8-20.1c0,0-9.4-26.6-0.7-69.2
c8.7-42.5-0.8-67.2-0.8-67.2s-0.6-6.1-0.4-10c0,0,1.9-13.9,1.3-21c0,0,0.2-3,3.9-13.8c3.7-10.8,7.2-50.7,4.5-55.8
c-2.7-5.2,14.5-55.2,5.7-91.8c0,0,3.9,1.2,5.9,1.4"/>
                    </g>
                    <line className={style.st0} x1="312.5" y1="233.5" x2="312.5" y2="181.5" />
                    <path className={style.st0} d="M313.2,198.7c0,0,14,11.8,25,18.8c0,0,14,7,18,10c0,0,23,6,34,23c0,0,10,10,5,55c0,0,9,26,11,55
c0,0,10,8,15,57c0,0,1,36,9,55c0,0-1,7,11,13c0,0,7,4,13,12c0,0,6,8,14,14c0,0,8,5,4,9c0,0-5,2-12-3c0,0-6-6-10-6c0,0-1,8,7,21
c0,0,13,21,10,25c0,0-3,4-7-4c0,0-11-22-15-23c0,0-3-1,1,6c0,0,12,25,7,31c0,0-5,3-7-7c0,0-11-29-14-27c0,0-2,0,0,9c0,0,4,23-1,24
c0,0-3,0-4-7c0,0-3-27-5-28c0,0-3-1-2,7c0,0,1,18-5,16c0,0-2-2-2-9c0,0,0-27-3-37c0,0-3-10-3-13c0,0-3-20-11-37s-24-56-24-61
s-3-16-4-28c0,0-1-15-10-23c0,0-11,26-6,57c0,0,2,8,2,25c0,0,3-1,6,31l7.4,52.5"/>
                    <g>
                        <path className={style.st0} d="M368,512.9l0.9,4.5c0,0,10.5,39.4-2.9,82.3c0,0-12.4,41.9-12.4,58.9c0.1,17-1.3,27.1,4.7,58.8
c6,31.7-3.8,68.4-3.8,68.4s-14.1,48-12.8,67.9c0,0,1.7,11.9-0.8,19.1c0,0-1.4,9.1,4.2,18.8c0,0,10.7,11.4,4.2,19.8l-3,0.2"/>
                        <path className={style.st0} d="M342.6,899.7c0,0,6.8,12.6,0.9,15c0,0-0.9,2.1-3.1-0.8" />
                        <path className={style.st0} d="M337.6,900c0,0,4,16.8,0,16c0,0-2.9,2.2-4.1-1.7" />
                        <path className={style.st0} d="M282.8,527.1c0,0,5.5,0.7,8.6,0.1c2-0.4,5.9-1.4,5.9-1.4c-8.7,36.6,8.4,86.6,5.7,91.8
c-2.7,5.2,0.8,45,4.5,55.8c3.7,10.8,3.9,13.8,3.9,13.8c-0.6,7,1.3,21,1.3,21c0.2,4-0.4,10-0.4,10s-9.5,24.6-0.8,67.2
c8.7,42.5-0.7,69.2-0.7,69.2c-2.7,4.2-0.8,20.1-0.8,20.1c1.2,2.9-0.6,7-0.6,7c-2.8,3.2,0.7,28,0.7,28c0.7,12,11.5,7.3,11.5,7.3
c6.9-1.4,1.1-15.1,1.1-15.1c1.3,4.9,2.6,9.9,2.6,9.9c-0.7,4.1,4.3,4.7,4.3,4.7c6.9-1.4,1-16.1,1-16.1"/>
                    </g>
                </g>
                <path className={style.st0} d="M273.5,142.5c0,0-8-3-10,2s11,6,14,4" />
                <path className={style.st0} d="M277.5,177.5c0,0,1-6,6-4c0,0,2,2,4,0c0,0,2-4,7,2" />
                <path className={style.st0} d="M280.5,177.5c0,0,5,1,10,0" />
                <path className={style.st0} d="M276.5,179.5c0,0,2,6,8,3c0,0,2-2,4,0c0,0,5,2,6-3" />
                <path className={style.st0} d="M298.3,142.5c0,0,8-3,10,2s-11,6-14,4" />
                <g>
                    <path className={style.st0} d="M644.6,430.2c0,0-36.1,82.5-5.6,197.9c0,0,13.5,38.2,5,81.1c0,0-6.6,44.9,10.8,91.1
c17.4,46.2,10.9,84.1,10.9,84.1s-1.1,10-11.2,12.9c0,0-8.1,5.9,0.9,10c0,0,6,2.1,13,0.2c0,0,7-0.9,12,1.2c0,0,17.9,6.2,18.2-12.8
c0,0,0.3-26-5.5-42.1c0,0-8.4-44.1,1-77c0,0,6.5-40.9-2-76c0,0-0.9-6,1.2-12c0,0,5.3-26.9,1.8-60c0,0,1.3-22,3.4-30
c0,0,12.7-27.4,7.1-58.4c0,0,1.8-19.4,6.9-19.3"/>
                    <path className={style.st0} d="M712.5,88.5c0,0-43-3-35,51c0,0,10,34,9,59c0,0-26,14-35,23c0,0-48,1-51,57s-7,60-7,60s-2,5-2,12c0,0,0,9-7,19
c0,0-9,14-8,35c0,0-1,32-16,74c0,0-12,2-17,12c0,0-4,8-24,19c0,0-5,4,2,5c0,0,8,1,14-5c0,0,10-6,7,0l-18,40c0,0-4,7,1,7
c0,0,5,1,20-27c0,0,5-8,3,0s-15,32-11,36c0,0,2,2,6-6c0,0,16-37,17-26c0,0-6,29-1,29c0,0,2,0,3-6c0,0,6-28,8-28c0,0,3-5,2,21
c0,0,1,7,4,1c0,0,4-43,8-53s13-50,26-70c0,0,17-29,18-59c0,0,3-13,9-23c0,0,11,12,7,47c0,0-2,19,0,38"/>
                    <path className={style.st0} d="M676.5,140.5c0,0-8,2-3,10c0,0,1.5,16.5,9.8,13.7" />
                    <path className={style.st0} d="M782.4,430.2c0,0,36.1,82.5,5.6,197.9c0,0-13.5,38.2-5,81.1c0,0,6.6,44.9-10.8,91.1
c-17.4,46.2-10.9,84.1-10.9,84.1s1.1,10,11.2,12.9c0,0,8.1,5.9-0.9,10c0,0-6,2.1-13,0.2c0,0-7-0.9-12,1.2c0,0-17.9,6.2-18.2-12.8
c0,0-0.3-26,5.5-42.1c0,0,8.4-44.1-1-77c0,0-6.5-40.9,2-76c0,0,0.9-6-1.2-12c0,0-5.3-26.9-1.8-60c0,0-1.3-22-3.4-30
c0,0-12.7-27.4-7.1-58.4c0,0-1.7-18.8-6.7-19.3"/>
                    <path className={style.st0} d="M714.5,88.5c0,0,43-3,35,51c0,0-10,34-9,59c0,0,26,14,35,23c0,0,48,1,51,57s7,60,7,60s2,5,2,12c0,0,0,9,7,19
c0,0,9,14,8,35c0,0,1,32,16,74c0,0,12,2,17,12c0,0,4,8,24,19c0,0,5,4-2,5c0,0-8,1-14-5c0,0-10-6-7,0l18,40c0,0,4,7-1,7
c0,0-5,1-20-27c0,0-5-8-3,0s15,32,11,36c0,0-2,2-6-6c0,0-16-37-17-26c0,0,6,29,1,29c0,0-2,0-3-6c0,0-6-28-8-28c0,0-3-5-2,21
c0,0-1,7-4,1c0,0-4-43-8-53s-13-50-26-70c0,0-17-29-18-59c0,0-3-13-9-23c0,0-12,13-8,48c0,0,2,18,1,37"/>
                    <path className={style.st0} d="M750.5,140.5c0,0,8,2,3,10c0,0-1.5,16.5-9.8,13.7" />
                    <line className={style.st0} x1="711.1" y1="88.5" x2="717.5" y2="88.5" />
                    <line className={style.st0} x1="712.1" y1="521.2" x2="715.1" y2="521.3" />
                </g>
                <g>
                    <path className={style.st0} d="M701.3,170.7c0,0,12.1,7.8,0.9,54l-0.9,4c0,0,7.3,20.9,5.1,129.9" />
                    <path className={style.st0} d="M725.4,173.3c0,0-12.9,5.2,1.9,54c0,0-9,0.1-6.1,118.1" />
                    <ellipse transform="matrix(0.9995 -3.058519e-02 3.058519e-02 0.9995 -5.6623 21.9058)" className={style.st0} cx="713.2" cy="196" rx="1.5" ry="2.5" />
                    <ellipse transform="matrix(0.9995 -3.058519e-02 3.058519e-02 0.9995 -5.9686 21.9045)" className={style.st0} cx="713" cy="206.1" rx="2" ry="3.5" />
                    <ellipse transform="matrix(0.9995 -3.058519e-02 3.058519e-02 0.9995 -6.2894 21.9192)" className={style.st0} cx="713.3" cy="216.5" rx="2" ry="3" />
                    <ellipse transform="matrix(0.9995 -3.058519e-02 3.058519e-02 0.9995 -6.5804 21.9173)" className={style.st0} cx="713.1" cy="226.1" rx="2.5" ry="4.5" />
                    <ellipse transform="matrix(0.9995 -3.058519e-02 3.058519e-02 0.9995 -6.9936 21.921)" className={style.st0} cx="713.1" cy="239.6" rx="3" ry="4" />
                    <ellipse transform="matrix(0.9995 -3.058519e-02 3.058519e-02 0.9995 -7.377 21.9079)" className={style.st0} cx="712.4" cy="252.1" rx="2" ry="3.5" />
                    <ellipse transform="matrix(0.9995 -3.058519e-02 3.058519e-02 0.9995 -7.7902 21.9116)" className={style.st0} cx="712.3" cy="265.6" rx="2.5" ry="4" />
                    <ellipse transform="matrix(0.9995 -3.058519e-02 3.058519e-02 0.9995 -8.1722 21.9291)" className={style.st0} cx="712.7" cy="278.1" rx="2.5" ry="3.5" />
                    <ellipse transform="matrix(0.9995 -3.058519e-02 3.058519e-02 0.9995 -8.5396 21.9307)" className={style.st0} cx="712.6" cy="290.1" rx="2" ry="3.5" />
                    <ellipse transform="matrix(0.9995 -3.058519e-02 3.058519e-02 0.9995 -8.9368 21.9489)" className={style.st0} cx="713" cy="303.1" rx="2" ry="3.5" />
                    <ellipse transform="matrix(0.9995 -3.058519e-02 3.058519e-02 0.9995 -9.334 21.9672)" className={style.st0} cx="713.4" cy="316.1" rx="3" ry="4.5" />
                    <ellipse transform="matrix(0.9995 -3.058519e-02 3.058519e-02 0.9995 -9.7327 21.9549)" className={style.st0} cx="712.8" cy="329.1" rx="2" ry="3.5" />
                    <ellipse transform="matrix(0.9995 -3.058519e-02 3.058519e-02 0.9995 -10.1299 21.9731)" className={style.st0} cx="713.2" cy="342.1" rx="2" ry="3.5" />
                    <ellipse transform="matrix(0.9995 -3.058519e-02 3.058519e-02 0.9995 -10.5119 21.9906)" className={style.st0} cx="713.6" cy="354.6" rx="2" ry="4" />
                    <ellipse transform="matrix(0.9995 -3.058519e-02 3.058519e-02 0.9995 -10.9251 21.9943)" className={style.st0} cx="713.5" cy="368.1" rx="2.5" ry="3.5" />
                    <ellipse transform="matrix(0.9995 -3.058519e-02 3.058519e-02 0.9995 -11.3695 21.9841)" className={style.st0} cx="712.9" cy="382.6" rx="2.5" ry="3" />
                    <ellipse transform="matrix(0.9995 -3.058519e-02 3.058519e-02 0.9995 -11.8293 21.9746)" className={style.st0} cx="712.4" cy="397.7" rx="2.5" ry="3" />
                    <ellipse transform="matrix(0.9995 -3.058519e-02 3.058519e-02 0.9995 -12.2571 21.9942)" className={style.st0} cx="712.8" cy="411.7" rx="2.5" ry="3" />
                    <ellipse transform="matrix(0.9995 -3.058519e-02 3.058519e-02 0.9995 -12.6703 21.9979)" className={style.st0} cx="712.7" cy="425.2" rx="3" ry="2.5" />
                    <ellipse transform="matrix(0.9995 -3.058519e-02 3.058519e-02 0.9995 -12.9759 22.0119)" className={style.st0} cx="713" cy="435.2" rx="2" ry="2.5" />
                    <ellipse transform="matrix(0.9995 -3.058519e-02 3.058519e-02 0.9995 -13.296 22.0419)" className={style.st0} cx="713.9" cy="445.6" rx="2.5" ry="3" />
                    <ellipse transform="matrix(0.9995 -3.058519e-02 3.058519e-02 0.9995 -13.6183 22.0261)" className={style.st0} cx="713.2" cy="456.2" rx="2.5" ry="3.5" />
                    <ellipse transform="matrix(0.9995 -3.058519e-02 3.058519e-02 0.9995 -13.9245 22.0249)" className={style.st0} cx="713" cy="466.2" rx="2" ry="2.5" />
                </g>
                <path 
                    className={style.st1} 
                    onClick={() => updateFields('area', 'head')}
                    onMouseOver={() => setFocus('head')}
                    onMouseLeave={() => setFocus('')}
                    style={focus === 'head' || fields.area === 'head' ? selected : {fill: '#ffffff00'}}
                    d="M285.5,89.5c0,0-40-1-34,50c0,0-6-1-4,11s3,12,3,12s1,4,5,4c0,0,5,25,30,29c0,0,32,3,31-33c0,0,7,1,7-7
c0,0,4-18-2-18C321.5,137.5,327.5,91.5,285.5,89.5z"
                />
                <path 
                    className={style.st1} 
                    onClick={() => updateFields('area', 'neck')}
                    onMouseOver={() => setFocus('neck')}
                    onMouseLeave={() => setFocus('')}
                    style={focus === 'neck' || fields.area === 'neck' ? selected : {fill: '#ffffff00'}}
                    d="M287.8,195.6c-16.7-0.1-26.3-15.6-26.3-15.6v52c0,0,25,8,51,1v-49.5v-1C312.5,182.5,307.2,195.6,287.8,195.6z"
                />
                <path 
                    className={style.st1} 
                    onClick={() => updateFields('area', 'head')}
                    onMouseOver={() => setFocus('head')}
                    onMouseLeave={() => setFocus('')}
                    style={focus === 'head' || fields.area === 'head' ? selected : {fill: '#ffffff00'}}
                    d="M744.7,159.3c-31.8-20.2-62.4,0-62.4,0l3.2,19.5c-2.4-20.1-8-39.2-8-39.2c-8-54,35-51,35-51h2c0,0,43-3,35,51
c0,0-5.6,19.1-8,39.2"
                />
                <path 
                    className={style.st1} 
                    onClick={() => updateFields('area', 'neck')}
                    onMouseOver={() => setFocus('neck')}
                    onMouseLeave={() => setFocus('')}
                    style={focus === 'neck' || fields.area === 'neck' ? selected : {fill: '#ffffff00'}}
                    d="M701.5,169.5c0,0,12-4,25,0c0,0-10,13-5,28c0,0,7,5,19,1c0,0,0-29,3-39c0,0-28-20-60,0c0,0,5,24,4,39
c0,0,11,2,18-2C705.5,196.5,709.5,184.5,701.5,169.5z"/>
                <path 
                    className={style.st1} 
                    onClick={() => updateFields('area', 'chest')}
                    onMouseOver={() => setFocus('chest')}
                    onMouseLeave={() => setFocus('')}
                    style={focus === 'chest' || fields.area === 'chest' ? selected : {fill: '#ffffff00'}}
                    d="M363.5,265.5c-5-15-28-21-28-21c-15.2-0.9-36.9-5-41.2-5.8c-8.2-1.8-15.8-0.2-15.8-0.2s-25,5-42,6
c0,0-23,6-28,21c0,0,8,14,8,31l-0.2,1.7c-0.6,5.3-2.3,22.7,0.2,48.3c0,0,7,12,8,36c0,0,56.9,2.9,62.8-19.4
c5.9,22.3,62.8,19.4,62.8,19.4c1-24,8-36,8-36c3-31-2.7-50-2.7-50C355.5,279.5,363.5,265.5,363.5,265.5z M294.3,238.7
c-0.5-0.1-0.8-0.2-0.8-0.2L294.3,238.7z M316.3,321.2c-11.5,1.6-22.5-9.3-24.6-24.3c-2.1-15,5.5-28.5,17-30.2
c11.5-1.6,22.5,9.3,24.6,24.3C335.4,306.1,327.8,319.6,316.3,321.2z"/>
                <ellipse 
                    transform="matrix(0.9902 -0.1397 0.1397 0.9902 -37.9986 46.5267)" 
                    className={style.st1} 
                    onClick={() => updateFields('area', 'heart')}
                    onMouseOver={() => setFocus('heart')}
                    onMouseLeave={() => setFocus('')}
                    style={focus === 'heart' || fields.area === 'heart' ? selected : {fill: '#ffffff00'}}
                    cx="312.5" 
                    cy="294" 
                    rx="21" 
                    ry="27.5" />
                <path 
                    className={style.st1} 
                    onClick={() => updateFields('area', 'abdomen')}
                    onMouseOver={() => setFocus('abdomen')}
                    onMouseLeave={() => setFocus('')}
                    style={focus === 'abdomen' || fields.area === 'abdomen' ? selected : {fill: '#ffffff00'}}
                    d="M313.5,482.5c0,0-10,13-27,12c0,0-14,1-30-12c0,0-9-8-11-22c0,0-8-21-23-31c0,0-3-9,2-27c0,0,1-16,0-20
s48,8,63-19c0,0,2,21,63,19c0,0-1,13,2,21c0,0,1,9,2,26c0,0-19,14-21,22C333.5,451.5,329.5,465.5,313.5,482.5z"/>
                <path 
                    className={style.st1} 
                    onClick={() => updateFields('area', 'pelvis')}
                    onMouseOver={() => setFocus('pelvis')}
                    onMouseLeave={() => setFocus('')}
                    style={focus === 'pelvis' || fields.area === 'pelvis' ? selected : {fill: '#ffffff00'}}
                    d="M212.5,482.5c0,0,3-51,9-53c0,0,16,7.5,26.5,40.2c0,0,5.5,21.8,38.5,24.8c0,0,22.9,0.4,38.4-26.3
c0,0,14.6-34.7,29.6-38.7c0,0,5,9,9,52.3c0,0-40,2.7-64,42.7c0,0-12,6-23,0C276.5,524.5,259.5,499.5,212.5,482.5z"/>
                <path 
                    className={style.st1} 
                    onClick={() => updateFields('area', 'pelvis')}
                    onMouseOver={() => setFocus('pelvis')}
                    onMouseLeave={() => setFocus('')}
                    style={focus === 'pelvis' || fields.area === 'pelvis' ? selected : {fill: '#ffffff00'}}
                    d="M632.5,474.5c0,0,7-36,12-44c0,0,16,3,29.5,31.2c0,0,19.5,26.8,38.5,24.8c0,0,22.9,0.4,38.4-26.3
c0,0,16.6-25.7,31.6-29.7c0,0,6,10,12,42c0,0-45,4-69,44c0,0-11,12-23,0C702.5,516.5,679.5,491.5,632.5,474.5z"/>
                <path 
                    className={style.st1} 
                    onClick={() => updateFields('area', 'upper leg')}
                    onMouseOver={() => setFocus('upper leg')}
                    onMouseLeave={() => setFocus('')}
                    style={focus === 'upper leg' || fields.area === 'upper leg' ? selected : {fill: '#ffffff00'}}
                    d="M221.1,667.3c0,0,29-6.5,45.7,7.4c0,0,8-32.2,4.9-62.2c0,0,13.6-67.4,5.7-86.7c-7.9-19.3-57.4-40.9-66.1-43.1
c0,0-3.7,28.4-7.2,43.1c0,0-4.5,20.2,0,54.4c0,0,0.9,11.6,10.2,39.9C214.2,620.2,219.6,635.1,221.1,667.3z"/>
                <path 
                    className={style.st1} 
                    onClick={() => updateFields('area', 'upper leg')}
                    onMouseOver={() => setFocus('upper leg')}
                    onMouseLeave={() => setFocus('')}
                    style={focus === 'upper leg' || fields.area === 'upper leg' ? selected : {fill: '#ffffff00'}}
                    d="M307.9,674.7c0,0,20.8-11,45.7-3.1c0,0-2.5-22,8.7-58.6c0,0,15.8-36.4,8-89c0,0-4.8-23.6-6.8-41.6
c0,0-40,2.3-66.5,44.7c0,0-7.9,10.9,6.3,88.1C303.3,615.3,298.2,629.9,307.9,674.7z"/>
                <path 
                    className={style.st1} 
                    onClick={() => updateFields('area', 'upper leg')}
                    onMouseOver={() => setFocus('upper leg')}
                    onMouseLeave={() => setFocus('')}
                    style={focus === 'upper leg' || fields.area === 'upper leg' ? selected : {fill: '#ffffff00'}}
                    d="M632.5,474.5c0,0-18,70,7,154c0,0,5.6,20.1,6.3,32.6c0,0,20.9-11.4,50.3,0c0,0,0.6-21.2-1-33.4
c0,0,1-27.8,6.7-38c0,0,9.1-26.8,3.9-51c0,0,2-27.6,12.4-13.9c0,0,2.4,5.7,3.4,15.7c0,0-6,30,7,58c0,0,4.5,15.3,3.2,32.6
c0,0-2.3,15.9-0.8,31.1c0,0,25.6-9.2,50.1,0c0,0,3.7-28,10.1-46.9c0,0,18.4-73.9,3.4-140.9l-0.8-1.9c0,0-43.8,5.7-67.5,42.8
c0,0-11.1,11.3-21.9,2.7C704.3,518.1,672.5,487.5,632.5,474.5z"/>
                <path 
                    className={style.st1} 
                    onClick={() => updateFields('area', 'knee')}
                    onMouseOver={() => setFocus('knee')}
                    onMouseLeave={() => setFocus('')}
                    style={focus === 'knee' || fields.area === 'knee' ? selected : {fill: '#ffffff00'}}
                    d="M215.6,721.9c0,0,24.3-18,48.6,2.8c0,0-7.7-23.2,2.3-50.2c0,0-9-11-45-7C221.5,667.5,220.7,700.3,215.6,721.9z"
                />
                <path 
                    className={style.st1} 
                    onClick={() => updateFields('area', 'knee')}
                    onMouseOver={() => setFocus('knee')}
                    onMouseLeave={() => setFocus('')}
                    style={focus === 'knee' || fields.area === 'knee' ? selected : {fill: '#ffffff00'}}
                    d="M358.5,724.9c0,0-24.3-18-48.6,2.8c0,0,7.7-23.2-2.3-50.2c0,0,9-11,45-7C352.6,670.5,353.4,703.3,358.5,724.9z"
                />
                <path 
                    className={style.st1} 
                    onClick={() => updateFields('area', 'knee')}
                    onMouseOver={() => setFocus('knee')}
                    onMouseLeave={() => setFocus('')}
                    style={focus === 'knee' || fields.area === 'knee' ? selected : {fill: '#ffffff00'}}
                    d="M646,662.3c0,0,2.5,20.2-2.5,47.2c0,0,30.6-13.6,51.3,5.7c0,0-3.3-10.7-2.3-14.7c0,0-0.3-8.9,1.3-15
c0,0,2.7-15,2.7-24C696.5,661.5,665.4,649,646,662.3z"/>
                <path 
                    className={style.st1} 
                    onClick={() => updateFields('area', 'knee')}
                    onMouseOver={() => setFocus('knee')}
                    onMouseLeave={() => setFocus('')}
                    style={focus === 'knee' || fields.area === 'knee' ? selected : {fill: '#ffffff00'}}
                    d="M780.5,663.5c0,0-0.9,21.4,3.6,48.5c0,0-30.3-14.1-51.4,4.8c0,0,1.8-9.3,2.5-14.7c0,0,0.5-8.9-1.1-15
c0,0-2.4-15.1-2.2-24.1C731.9,663,761.3,649.9,780.5,663.5z"/>
                <path 
                    className={style.st1} 
                    onClick={() => updateFields('area', 'lower leg')}
                    onMouseOver={() => setFocus('lower leg')}
                    onMouseLeave={() => setFocus('')}
                    style={focus === 'lower leg' || fields.area === 'lower leg' ? selected : {fill: '#ffffff00'}}
                    d="M233.5,853.5c0,0,9-11.1,28-7.6c0,0-4.9-29,3-67.7c0,0,7-35.7,0-53.7c0,0-24.8-19.7-48.9-1.4
c0,0-4.5,28.8,6.2,68.6C232.5,831.5,233.5,853.5,233.5,853.5z"/>
                <path 
                    className={style.st1} 
                    onClick={() => updateFields('area', 'lower leg')}
                    onMouseOver={() => setFocus('lower leg')}
                    onMouseLeave={() => setFocus('')}
                    style={focus === 'lower leg' || fields.area === 'lower leg' ? selected : {fill: '#ffffff00'}}
                    d="M341.8,855.5c0,0-9-11.1-28-7.6c0,0,4.9-29-3-67.7c0,0-7-35.7,0-53.7c0,0,24.8-19.7,48.9-1.4
c0,0,4.5,28.8-6.2,68.6C342.8,833.5,341.8,855.5,341.8,855.5z"/>
                <path 
                    className={style.st1} 
                    onClick={() => updateFields('area', 'lower leg')}
                    onMouseOver={() => setFocus('lower leg')}
                    onMouseLeave={() => setFocus('')}
                    style={focus === 'lower leg' || fields.area === 'lower leg' ? selected : {fill: '#ffffff00'}}
                    d="M643.8,710.4c0,0,29.7-14.9,50.7,5.1c0,0,5.2,34.3-3.9,80.2c0,0-5.1,37.1,5.9,70c0,0-17.3-9.8-29.6,5
c0,0-0.8-46.8-14.6-77.5C652.3,793.2,638.2,740.4,643.8,710.4z"/>
                <path 
                    className={style.st1} 
                    onClick={() => updateFields('area', 'lower leg')}
                    onMouseOver={() => setFocus('lower leg')}
                    onMouseLeave={() => setFocus('')}
                    style={focus === 'lower leg' || fields.area === 'lower leg' ? selected : {fill: '#ffffff00'}}
                    d="M783.2,712.4c0,0-29.7-14.9-50.7,5.1c0,0-5.2,34.3,3.9,80.2c0,0,5.1,37.1-5.9,70c0,0,17.3-9.8,29.6,5
c0,0,0.8-46.8,14.6-77.5C774.7,795.2,788.8,742.4,783.2,712.4z"/>
                <path 
                    className={style.st1} 
                    onClick={() => updateFields('area', 'foot / ankle')}
                    onMouseOver={() => setFocus('foot / ankle')}
                    onMouseLeave={() => setFocus('')}
                    style={focus === 'foot / ankle' || fields.area === 'foot / ankle' ? selected : {fill: '#ffffff00'}}
                    d="M258.5,918.5c0,0,9,1,7.8-29.6c0,0,0.6-4.4-1.6-8.9c0,0-1.2-3,0.3-8.3c0,0,1.4-12.2-1.5-18.7l-1.9-7.5
c0,0-20-3-29,10c0,0-1.2,6.6,1.4,19.3c0,0-0.9,14.7-5.1,17.7c0,0-9.3,9-3.3,19C225.5,911.5,230.6,920.7,258.5,918.5z"/>
                <path 
                    className={style.st1} 
                    onClick={() => updateFields('area', 'foot / ankle')}
                    onMouseOver={() => setFocus('foot / ankle')}
                    onMouseLeave={() => setFocus('')}
                    style={focus === 'foot / ankle' || fields.area === 'foot / ankle' ? selected : {fill: '#ffffff00'}}
                    d="M315.4,920.5c0,0-9,1-7.8-29.6c0,0-0.6-4.4,1.6-8.9c0,0,1.2-3-0.3-8.3c0,0-1.4-12.2,1.5-18.7l1.9-7.5
c0,0,20-3,29,10c0,0,1.2,6.6-1.4,19.3c0,0,0.9,14.7,5.1,17.7c0,0,9.3,9,3.3,19C348.4,913.5,343.3,922.7,315.4,920.5z"/>
                <path 
                    className={style.st1} 
                    onClick={() => updateFields('area', 'foot / ankle')}
                    onMouseOver={() => setFocus('foot / ankle')}
                    onMouseLeave={() => setFocus('')}
                    style={focus === 'foot / ankle' || fields.area === 'foot / ankle' ? selected : {fill: '#ffffff00'}}
                    d="M654.5,897.5c0,0,14-1,12-27c0,0,10-14,30-5c0,0,8.8,46.4-9.1,44.2c0,0-5.1,0-9-1.6c0,0-7.6-2.4-12.3,0
c0,0-10.9,1.9-14.3-3.3C651.9,904.7,649.5,900.5,654.5,897.5z"/>
                <path 
                    className={style.st1} 
                    onClick={() => updateFields('area', 'foot / ankle')}
                    onMouseOver={() => setFocus('foot / ankle')}
                    onMouseLeave={() => setFocus('')}
                    style={focus === 'foot / ankle' || fields.area === 'foot / ankle' ? selected : {fill: '#ffffff00'}}
                    d="M772.5,898.5c0,0-14-1-12-27c0,0-10-14-30-5c0,0-8.8,46.4,9.1,44.2c0,0,5.1,0,9-1.6c0,0,7.6-2.4,12.3,0
c0,0,10.9,1.9,14.3-3.3C775.1,905.7,777.5,901.5,772.5,898.5z"/>
                <path 
                    className={style.st1} 
                    onClick={() => updateFields('area', 'spine')}
                    onMouseOver={() => setFocus('spine')}
                    onMouseLeave={() => setFocus('')}
                    style={focus === 'spine' || fields.area === 'spine' ? selected : {fill: '#ffffff00'}}
                    d="M712.5,476.5c0,0,6,0,8-7c0,0-3-230,7-242c0,0-14.7-36.5-1.8-56.8c0,0-8.2-3.2-23.2-0.2c0,0,10,18-2,58
c0,0,13,78,4,244C704.5,472.5,707.5,477.5,712.5,476.5z"/>
                <path 
                    className={style.st1} 
                    onClick={() => updateFields('area', 'shoulder')}
                    onMouseOver={() => setFocus('shoulder')}
                    onMouseLeave={() => setFocus('')}
                    style={focus === 'shoulder' || fields.area === 'shoulder' ? selected : {fill: '#ffffff00'}}
                    d="M261.5,198.7c0,0-25,20.3-53,32.6c0,0-41,4.3-29,74.3c0,0,0,3,8,5c0,0,12-61,49-66c0,0,49-6.4,49-8.7l-24-3.3
V198.7z"/>
                <path 
                    className={style.st1} 
                    onClick={() => updateFields('area', 'shoulder')}
                    onMouseOver={() => setFocus('shoulder')}
                    onMouseLeave={() => setFocus('')}
                    style={focus === 'shoulder' || fields.area === 'shoulder' ? selected : {fill: '#ffffff00'}}
                    d="M312.5,198.7c0,0,25,20.3,53,32.6c0,0,41,4.3,29,74.3c0,0,0,3-8,5c0,0-12-61-49-66c0,0-49-6.4-49-8.7l24-3.3
V198.7z"/>
                <path 
                    className={style.st1} 
                    onClick={() => updateFields('area', 'shoulder')}
                    onMouseOver={() => setFocus('shoulder')}
                    onMouseLeave={() => setFocus('')}
                    style={focus === 'shoulder' || fields.area === 'shoulder' ? selected : {fill: '#ffffff00'}}
                    d="M599.6,294c0,0-8.1-67.5,51.9-72.5c0,0,39.1,1.8,50,14.4c0,0-7,94.6-32,85.6c0,0-17-6-19-33
C650.5,288.5,634.6,298.5,599.6,294z"/>
                <path 
                    className={style.st1} 
                    onClick={() => updateFields('area', 'shoulder')}
                    onMouseOver={() => setFocus('shoulder')}
                    onMouseLeave={() => setFocus('')}
                    style={focus === 'shoulder' || fields.area === 'shoulder' ? selected : {fill: '#ffffff00'}}
                    d="M826.2,294c0,0,8.1-67.5-51.9-72.5c0,0-39.1,1.8-50,14.4c0,0,7,94.6,32,85.6c0,0,17-6,19-33
C775.2,288.5,791.1,298.5,826.2,294z"/>
                <path 
                    className={style.st1} 
                    onClick={() => updateFields('area', 'hand')}
                    onMouseOver={() => setFocus('hand')}
                    onMouseLeave={() => setFocus('')}
                    style={focus === 'hand' || fields.area === 'hand' ? selected : {fill: '#ffffff00'}}
                    d="M144.5,473.4c0,0,16-5.9,27,3.1c0,0-5.5,18.5-4.3,21.3c0,0,0.5,3.4-2.1,8.6c0,0-5.7,15.4-3.7,40.8
c0,0,0,10.5-3.5,7.5c0,0-4.1,0.4-3.3-18.8c0,0-1.2-10.6-3.7,0.1l-3.9,25.8c0,0-0.6,3.8-3.6,4.8c0,0-3.9,2-2.4-11c0,0,3.4-23,1.4-22
c0,0-1-6.8-15.5,31.6c0,0-3.5,6-6.5,0.2c0,0-2.6-9.5,9.2-31.1c0,0,2.8-7.1-3.7-0.4l-13.1,22.4c0,0-4.4,6.3-6.4,0.3
c0,0,1.2-10.4,14.6-30.7c0,0,3.4-5.3,3.4-15.3c0,0-8,3-10,7c0,0-8.3,6.3-12.7,2.2c0,0-3.4-3.6,5.6-8.9c0,0,9.1-8.1,14.6-15.2
c0,0,9.6-12.1,17-13.6C139,482,143.5,477.2,144.5,473.4z"/>
                <path 
                    className={style.st1} 
                    onClick={() => updateFields('area', 'hand')}
                    onMouseOver={() => setFocus('hand')}
                    onMouseLeave={() => setFocus('')}
                    style={focus === 'hand' || fields.area === 'hand' ? selected : {fill: '#ffffff00'}}
                    d="M430.2,474.4c0,0-16-5.9-27,3.1c0,0,5.5,18.5,4.3,21.3c0,0-0.5,3.4,2.1,8.6c0,0,5.7,15.4,3.7,40.8
c0,0,0,10.5,3.5,7.5c0,0,4.1,0.4,3.3-18.8c0,0,1.2-10.6,3.7,0.1l3.9,25.8c0,0,0.6,3.8,3.6,4.8c0,0,3.9,2,2.4-11c0,0-3.4-23-1.4-22
c0,0,1-6.8,15.5,31.6c0,0,3.5,6,6.5,0.2c0,0,2.6-9.5-9.2-31.1c0,0-2.8-7.1,3.7-0.4l13.1,22.4c0,0,4.4,6.3,6.4,0.3
c0,0-1.2-10.4-14.6-30.7c0,0-3.4-5.3-3.4-15.3c0,0,8,3,10,7c0,0,8.3,6.3,12.7,2.2c0,0,3.4-3.6-5.6-8.9c0,0-9.1-8.1-14.6-15.2
c0,0-9.6-12.1-17-13.6C435.7,483,431.2,478.2,430.2,474.4z"/>
                <path 
                    className={style.st1} 
                    onClick={() => updateFields('area', 'hand')}
                    onMouseOver={() => setFocus('hand')}
                    onMouseLeave={() => setFocus('')}
                    style={focus === 'hand' || fields.area === 'hand' ? selected : {fill: '#ffffff00'}}
                    d="M560.5,478.5c0,0,22.6-3,26.8,10.5c0,0-6.9,12.8-7.4,31.7c0,0-2,31.8-4.7,31.8c0,0-2.6,1.6-2.7-4.2
c0,0,2-18.8-2-19.8c0,0-1.6-2.4-5.3,16.3c0,0-2.7,19.7-5.7,17.7c0,0-1.9,2.1-1.4-13.9l2.1-13.4c0,0,2-7.5-4.3-0.1l-14.1,27.6
c0,0-3.7,7.1-5,0c0,0,3.6-14.6,10.7-29.9c0,0,4.2-12.7-2.4-2.5c0,0-13.7,27.5-21.1,25.9c0,0-2.1-1.5,1.2-8.1l17-37.7
c0,0,4.4-6.5-5.1-1.7l-1.9,1.2c0,0-8.5,8.8-17,3.2c0,0-2.9-2.4,7.3-7c0,0,17.7-9.9,21.4-20.3C546.8,485.8,551.5,479.5,560.5,478.5"
                />
                <path 
                    className={style.st1} 
                    onClick={() => updateFields('area', 'hand')}
                    onMouseOver={() => setFocus('hand')}
                    onMouseLeave={() => setFocus('')}
                    style={focus === 'hand' || fields.area === 'hand' ? selected : {fill: '#ffffff00'}}
                    d="M866.5,478.5c0,0-22.6-3-26.8,10.5c0,0,6.9,12.8,7.4,31.7c0,0,2,31.8,4.7,31.8c0,0,2.6,1.6,2.7-4.2
c0,0-2-18.8,2-19.8c0,0,1.6-2.4,5.3,16.3c0,0,2.7,19.7,5.7,17.7c0,0,1.9,2.1,1.4-13.9l-2.1-13.4c0,0-2-7.5,4.3-0.1l14.1,27.6
c0,0,3.7,7.1,5,0c0,0-3.6-14.6-10.7-29.9c0,0-4.2-12.7,2.4-2.5c0,0,13.7,27.5,21.1,25.9c0,0,2.1-1.5-1.2-8.1l-17-37.7
c0,0-4.4-6.5,5.1-1.7l1.9,1.2c0,0,8.5,8.8,17,3.2c0,0,2.9-2.4-7.3-7c0,0-17.7-9.9-21.4-20.3C880.2,485.8,875.5,479.5,866.5,478.5"/>
                <path 
                    className={style.st1} 
                    onClick={() => updateFields('area', 'arm')}
                    onMouseOver={() => setFocus('arm')}
                    onMouseLeave={() => setFocus('')}
                    style={focus === 'arm' || fields.area === 'arm' ? selected : {fill: '#ffffff00'}}
                    d="M168.5,360.5c0,0,2.4-37,10.2-52.5l0.8-2.5c0,0,2,4,8,5c0,0,10-37,20-45c0,0,9.1,12.6,8.1,40.8
c0,0-2.1,33.2,0.9,40.2c0,0-10.2,7.9-10.1,24c0.1,16-2.9,30.5-26.4,84.8c0,0-8.5,18.3-8.5,21.3c0,0-10-8-27-4c0,0,8.2-24.9,8.6-47
C153.5,403.5,159.5,370.5,168.5,360.5z"/>
                <path 
                    className={style.st1} 
                    onClick={() => updateFields('area', 'arm')}
                    onMouseOver={() => setFocus('arm')}
                    onMouseLeave={() => setFocus('')}
                    style={focus === 'arm' || fields.area === 'arm' ? selected : {fill: '#ffffff00'}}
                    d="M405.5,360.5c0,0-2.4-37-10.2-52.5l-0.8-2.5c0,0-2,4-8,5c0,0-10-37-20-45c0,0-9.1,12.6-8.1,40.8
c0,0,2.1,33.2-0.9,40.2c0,0,10.2,7.9,10.1,24c-0.1,16,2.9,30.5,26.4,84.8c0,0,8.5,18.3,8.5,21.3c0,0,10-8,27-4c0,0-8.2-24.9-8.6-47
C420.5,403.5,414.5,370.5,405.5,360.5z"/>
                <ellipse 
                    transform="matrix(0.2756 -0.9613 0.9613 0.2756 85.5019 850.4553)" 
                    className={style.st1} 
                    onClick={() => updateFields('area', 'elbow')}
                    onMouseOver={() => setFocus('elbow')}
                    onMouseLeave={() => setFocus('')}
                    style={focus === 'elbow' || fields.area === 'elbow' ? selected : {fill: '#ffffff00'}}
                    cx="607" 
                    cy="368.5" 
                    rx="31" 
                    ry="19.5" />
                <ellipse 
                    transform="matrix(0.9613 -0.2756 0.2756 0.9613 -69.8741 239.6752)" 
                    className={style.st1} 
                    onClick={() => updateFields('area', 'elbow')}
                    onMouseOver={() => setFocus('elbow')}
                    onMouseLeave={() => setFocus('')}
                    style={focus === 'elbow' || fields.area === 'elbow' ? selected : {fill: '#ffffff00'}}
                    cx="818" 
                    cy="368.5" 
                    rx="19.5" 
                    ry="31" />
                <path 
                    className={style.st1} 
                    onClick={() => updateFields('area', 'arm')}
                    onMouseOver={() => setFocus('arm')}
                    onMouseLeave={() => setFocus('')}
                    style={focus === 'arm' || fields.area === 'arm' ? selected : {fill: '#ffffff00'}}
                    d="M650.5,288.5c0,0-16,11-51,5c0,0-0.9,42.6-8.4,60.8c0,0-1.7,13-8.1,18.1c0,0-8.4,7.1-6.4,32.1
c0,0,1.3,23.3-15.3,72.1c0,0,21.2-0.3,26.7,10.3c0,0,11.6-42.4,20.6-56.4c0,0,20.9-34,20-61c0,0,3-17,9-24
C637.5,345.5,651.5,330.5,650.5,288.5z M626.7,374.9c-4.7,16.5-16.9,27.4-27.3,24.4c-10.4-3-14.9-18.7-10.2-35.2
c4.7-16.5,16.9-27.4,27.3-24.4S631.5,358.4,626.7,374.9z"/>
                <path 
                    className={style.st1} 
                    onClick={() => updateFields('area', 'arm')}
                    onMouseOver={() => setFocus('arm')}
                    onMouseLeave={() => setFocus('')}
                    style={focus === 'arm' || fields.area === 'arm' ? selected : {fill: '#ffffff00'}}
                    d="M788.8,345.8c6.1,6.9,9.3,23.9,9.3,23.9c-0.7,27,20.6,60.8,20.6,60.8c9.1,13.9,21.2,56.2,21.2,56.2
c5.5-10.6,26.6-10.5,26.6-10.5c-17.2-48.7-16.1-72-16.1-72c1.7-25-6.7-32-6.7-32c-6.5-5-8.3-18-8.3-18c-7.7-18.1-9.1-60.7-9.1-60.7
c-34.9,6.4-51-4.5-51-4.5C774.6,331,788.8,345.8,788.8,345.8z M809.7,339.8c10.3-3.1,22.6,7.7,27.5,24.2c4.9,16.4,0.5,32.2-9.8,35.3
c-10.3,3.1-22.6-7.7-27.5-24.2C795,358.7,799.4,342.9,809.7,339.8z"/>
            </svg>
        </div>
    )
}

export default BodyPart