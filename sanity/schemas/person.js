import { MdPerson as icon } from 'react-icons/md';

export default {
    //name in code
    name: 'person',
    //visible title
    title: 'Slicemasters',
    type: 'document',
    icon: icon,
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
         },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 100,
            },
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }, 
    ] //do not end with a comma
};