import calculatePizzaPrice from "./calculatePizzaPrice";
import formatMoney from "./formatMoney";

export default function calculateOrderTotal(order, pizzas) {
    //loop over order
    //calculate price for each pizza
    //add to running total
        ///////accumulator and single order
    const totalPrice = order.reduce((acc, singleOrder) => {
        const pizza = pizzas.find(pizza => pizza.id === singleOrder.id);
        return acc + calculatePizzaPrice(pizza.price, singleOrder.size);
    }, 0); 
    return formatMoney(totalPrice);
}