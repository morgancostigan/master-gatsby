import React, { Children } from 'react';
import S from '@sanity/desk-tool/structure-builder';

//build a custom sidebar

 export default function Sidebar() {
     return S.list().title(`Slick's Slices`).items([
         //create a new item
         S.listItem().title(`Home Page`).icon(() => 
             <strong>🏠 </strong>)
     ])
 };