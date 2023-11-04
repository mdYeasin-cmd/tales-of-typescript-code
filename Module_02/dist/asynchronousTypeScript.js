"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
{
    const myPromise = () => {
        return new Promise((resolve, reject) => {
            const user = { id: 1, name: "Poyel" };
            if (!user) {
                reject("Couldn't found ther user");
            }
            else {
                setTimeout(() => {
                    resolve(user);
                }, 1000);
            }
        });
    };
    // calling promise
    const getPromiseData = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const data = yield myPromise();
            console.log(data);
            return data;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    });
    // getPromiseData();
    const fetchedData = () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield fetch(`https://jsonplaceholder.typicode.com/todos/1`);
        const data = yield res.json();
        console.log(data);
        return data;
    });
    fetchedData();
    // 
}
