// 1. The Strategy Interface
// All payment methods must have a 'pay' method.
interface PaymentStrategy {
    pay(amount: number): void;
}

// 2. Concrete Strategies
// Each class implements the 'pay' method in its own way.

class CreditCardPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Paid ${amount} using Credit Card.`);
    }
}

class PayPalPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Paid ${amount} using PayPal.`);
    }
}

class BitcoinPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Paid ${amount} using Bitcoin.`);
    }
}

// 3. The Context
// This class doesn't care HOW the payment is done, only that it IS done.
class ShoppingCart {
    private amount: number = 0;
    private strategy: PaymentStrategy;

    // We inject the strategy here
    constructor(strategy: PaymentStrategy) {
        this.strategy = strategy;
    }

    // We can also change the strategy at runtime
    setPaymentMethod(strategy: PaymentStrategy) {
        this.strategy = strategy;
    }

    addToCart(price: number) {
        this.amount += price;
    }

    checkout() {
        this.strategy.pay(this.amount);
    }
}

// --- Execution ---

const cart = new ShoppingCart(new CreditCardPayment()); // Default: Credit Card
cart.addToCart(100);
cart.addToCart(50);

cart.checkout(); // Output: Paid 150 using Credit Card.

// User changes their mind and wants to use PayPal
cart.setPaymentMethod(new PayPalPayment());
cart.checkout(); // Output: Paid 150 using PayPal.

