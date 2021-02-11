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
            name: 'slicemaster',
            title: 'Slicemasters Currently Slicing',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'person'}]}]
        }

    ],
    preview: {

    },
}