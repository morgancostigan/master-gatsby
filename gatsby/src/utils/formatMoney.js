const formatter = Intl.NumberFormat('en-EU', {
    style: 'currency',
    currency: 'EUR',
})

export default function formatMoney(cents) {
    return formatter.format(cents / 100)
}