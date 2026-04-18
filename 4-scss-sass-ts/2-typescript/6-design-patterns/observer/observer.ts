interface Subscriber {
    update(context: string): void;
}

class NewYorkTimes {
    private subscribers: Subscriber[] = [];

    subscribe(s: Subscriber): void {
        this.subscribers.push(s);
    }

    unsubscribe(s: Subscriber): void {
        this.subscribers = this.subscribers.filter(sub => sub !== s);
    }

    private notifySubscribers(news: string): void {
        for(const sub of this.subscribers) {
            sub.update(news);
        }
    }
    
    publishNews(news: string) {
        console.log(`Agency is publishing: "${news}"`);
        this.notifySubscribers(news);
    }
}

class Reader implements Subscriber {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    update(context: string): void {
        console.log(`Reader with name ${this.name} got news about ${context}.`);
    }
}

const readers: string[] = ["Bob", "Charlie", "Ilya", "Marry", "Alice"];
const agency = new NewYorkTimes();
const bobReader: Reader = new Reader(readers[0]);
agency.subscribe(bobReader); 
for(const reader of readers.slice(1)) {
   agency.subscribe(new Reader(reader)); 
}

agency.publishNews("TypeScript is awesome!");
agency.unsubscribe(bobReader);
agency.publishNews("Design Patterns are useful!");
