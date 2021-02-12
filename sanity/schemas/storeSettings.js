import { MdStore as icon } from 'react-icons/md';

export default {
    //name in code
    name: 'storeSettings',
    //visible title
    title: 'Settings',
    type: 'document',
    icon: icon,
    fields: [
        {
            name: 'name',
            title: 'Store Name',
            type: 'string',
            description: 'Name of the store',
        },
        {
            name: 'slicemaster',
            title: 'Slicemasters Currently Slicing',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'person'}]}]
        },
        {
            name: 'hotSlices',
            title: 'Slices Available Now',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'pizza' }] }]
        },
    ],
    preview: {

    },
}