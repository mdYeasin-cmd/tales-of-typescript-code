{
    // 
    // conditional type
    type a = string;
    type b = undefined;

    type x = a extends null ? true : false;

    type y = a extends null ? true : b extends undefined ? undefined : any;

    type richKid = {
        bike: string;
        dslr: string;
        mac: string;
        iphone: string;
    }

    type CheckDevice<T> = T extends keyof richKid ? true : false;

    type hasBike = CheckDevice<"car">

    // 
}