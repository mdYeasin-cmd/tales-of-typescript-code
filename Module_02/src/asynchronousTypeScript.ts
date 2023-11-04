{
    // 

    interface User {
        id: number;
        name: string;
    }

    const myPromise = (): Promise<User> => {
        return new Promise<User>((resolve, reject) => {
            const user: User = { id: 1, name: "Poyel" };
            if (!user) {
                reject("Couldn't found ther user");
            } else {
                setTimeout(() => {
                    resolve(user);
                }, 1000);
            }
        });
    }

    // calling promise
    const getPromiseData = async (): Promise<User | null> => {
        try {
            const data: User = await myPromise();
            console.log(data);
            return data
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    // getPromiseData();

    const fetchedData = async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
        const data = await res.json();
        console.log(data);
        return data;
    }

    fetchedData();





    // 
}