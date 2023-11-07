"use strict";
{
    // 
    /*
        # when we use static keyword it makes one memory for different instance.
        # By default different memory different instance.
    */
    // static
    class Counter {
        static increment() {
            return (Counter.count = Counter.count + 1);
        }
        ;
        decrement() {
            return (Counter.count = Counter.count - 1);
        }
        ;
    }
    Counter.count = 0;
    // const instance1 = new Counter(); // 1 -> different memory by default
    console.log(Counter.increment());
    // const instance2 = new Counter(); // 1 -> different memory by default
    console.log(Counter.increment());
    // const instance3 = new Counter();
    console.log(Counter.increment());
    // 
}
