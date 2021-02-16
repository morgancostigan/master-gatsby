import React, { Children } from 'react';
import S from "@sanity/desk-tool/structure-builder";
import { DocumentBuilder } from '@sanity/structure/lib/Document';

//build a custom sidebar

export default function Sidebar() {
    return S.list().title(`Slick's Slices`).items([
        //create a new item
        S.listItem().title(`Home Page`).icon(() => 
            <strong>🏠 </strong>)
            .child(
                S.editor()
                    .schemaType(`storeSettings`)
                //make a new document ID, instead of random string
                .documentId(`downtown`)
            ),
            //add in the rest of our document items
        ...S.documentTypeListItems().filter(item => item.getId() !== `storeSettings`),
    ]);
};