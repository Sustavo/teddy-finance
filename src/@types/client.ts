export interface Client {
    id: number;
    name: string;
    salary: number;
    companyValuation: number;
    createdAt: string;
    updatedAt: string;
}

export type CreateClient = Omit<Client, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateClient = Omit<Client, 'createdAt' | 'updatedAt'>;
