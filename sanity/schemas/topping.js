import { GiSlicedMushroom as icon } from 'react-icons/gi';
// import { ImLeaf as leaf } from 'react-icons/im';

export default {
    //name in code
    name: 'topping',
    //visible title
    title: 'Toppings',
    type: 'document',
    icon, //es6 shorthand for icon: icon,
    fields: [
        {
            name: 'name',
            title: 'Topping Name',
            type: 'string',
            description: 'Name of the Topping ',
        },
        {
            name: 'vegetarian',
            title: 'Vegetarian',
            type: 'boolean',
            options: {
                layout: 'switch', //could also use checkbox            
            },
        },
    ],
    preview: {
        select: {
            name: 'name',
            vegetarian: 'vegetarian',
        },
        prepare: fields => ({
            title: `${fields.name} ${fields.vegetarian ? '🌱' : '🍖'}`,
        })

    },
};
