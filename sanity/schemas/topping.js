import { GiSlicedMushroom as icon } from 'react-icons/gi';

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
    ]
}
