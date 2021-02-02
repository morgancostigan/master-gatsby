const formatter = Intl.NumberFormat('en-NZ', {
    style: 'currency',
    currency: 'NZD',
})

export default function formatMoney(cents) {
    return formatter.format()
}