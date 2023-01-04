export interface IAddressBody {
    body: {
        street: string | boolean;
        publicPlace: string | boolean;
        number: string | boolean;
        city: string | boolean;
        uf: string | boolean;
        cep: string | boolean;
        id?:number
    };
}

export interface IResponseId {
    params: {
        id: number | boolean;
    }
}
