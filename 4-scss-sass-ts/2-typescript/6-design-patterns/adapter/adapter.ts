// 1. The Target: What our modern app expects
interface User {
    id: number;
    fullName: string;
}

interface ModernNetworkProvider {
    getUser(): Promise<User>;
}

// 2. The Adaptee: A legacy service with a different "interface"
// Imagine this is an old API that returns a string: "ID;FirstName;LastName"
class LegacyNetworkClient {
    id: number;
    firstName: string;
    lastName: string;

    constructor(id: number, firstName: string, lastName: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public async fetchLegacyData(): Promise<string> {
        // Simulating a network call
        return `${this.id};${this.firstName};${this.lastName}`;
    }
}

// 3. The Adapter: Bridges the gap between Legacy and Modern
class NetworkAdapter implements ModernNetworkProvider {
    private legacyClient: LegacyNetworkClient;

    constructor(client: LegacyNetworkClient) {
        this.legacyClient = client;
    }

    public async getUser(): Promise<User> {
        console.log("Adapter: Converting legacy data to modern format...");
        
        // Call the legacy method
        const rawString = await this.legacyClient.fetchLegacyData();

        // Perform the translation (The "Adaptation")
        const [id, firstName, lastName] = rawString.split(";");

        return {
            id: parseInt(id),
            fullName: `${firstName} ${lastName}`
        };
    }
}

// --- Execution ---
async function runApplication() {
    // Our app doesn't know about LegacyNetworkClient. 
    // It only knows it needs something that implements ModernNetworkProvider.
    
    const legacyClient = new LegacyNetworkClient(101, "John", "Newman");
    const adapter = new NetworkAdapter(legacyClient);

    // Now we use the adapter as if it were a modern service
    const user = await adapter.getUser();

    console.log("App received user object:");
    console.log(user); // Output: { id: 101, fullName: 'Jonh Newman' }
}

runApplication();
