export interface IAddress{
    street: string,
    publicPlace: string,
    number: string,
    city: string,
    uf: string,
    cep: string,
    id?:number
}

export interface IPerson {
    body: {
        name: string;
        cpf: string;
        profession: string;
        password: string;
        email: string;
        phone: string;
        type: 'Client' | 'Collaborator';
        adressId: number;
    };
}

export interface IResponseBody{
    body: {
        message: string
        error: boolean
    }
}

export interface IResponse{
    status: number
    message: string
}

export interface IPersonBody {
    body: {
        name: string | boolean;
        cpf: string | boolean;
        profession: string | boolean;
        password: string | boolean;
        email: string | boolean;
        phone: string | boolean;
        type: 'Client' | 'Collaborator' | boolean;
        adressId: number | boolean;
    };
}
