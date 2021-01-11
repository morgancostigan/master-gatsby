import { MdLocalPizza as icon } from 'react-icons/md';

export default {
    //name in code
    name: 'pizza',
    //visible title
    title: 'Pizzas', 
    type: 'document',
    icon: icon,
    fields: [
        {
            name: 'name',
            title: 'Pizza Name',
            type: 'string',
            description: 'Name of the Pizza',
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
        {
            name: 'price',
            title: 'Price',
            type: 'price',
            description: 'Price of the pizza in cents',
            validation: Rule => Rule.min(1000), //minimum price ten dollars
            //TODO add custom input component 
        }, 
    ]
}
