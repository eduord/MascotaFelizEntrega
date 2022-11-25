import {Model, model, property} from '@loopback/repository';

@model()
export class RecuperacionClave extends Model {
  @property({
    type: 'string',
    required: true,
  })
  usuario: string;


  constructor(data?: Partial<RecuperacionClave>) {
    super(data);
  }
}

export interface RecuperacionClaveRelations {
  // describe navigational properties here
}

export type RecuperacionClaveWithRelations = RecuperacionClave & RecuperacionClaveRelations;
