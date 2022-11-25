import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import { repository } from '@loopback/repository';
import { Usuario } from '../models';
import {UsuarioRepository} from '../repositories';
import { Llaves } from '../config/llaves';
const generador = require('password-generator');
const cryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');



@injectable({scope: BindingScope.TRANSIENT})
export class AutenticacionService {
  constructor(
    /* Add @inject to inject parameters */
    @repository(UsuarioRepository)
    public usuarioRepository : UsuarioRepository
    ) {}

  /*
   * Add service methods here
   */
  GenerarClave(){
    let clave = generador(8,false);
    return clave;
  }

  IdentificarUsuario(usuario: string, contrasena: string){
    try{
      let p = this.usuarioRepository.findOne({where: {correo: usuario, contrasena: contrasena}});
      if(p){
        return p;
      }
      return false;
    }catch{
      return false;
    }
  }

  GenerarTokenJWT(usuario: Usuario){
    let token = jwt.sign({
      data:{
        id: usuario.id,
        correo: usuario.correo,
        nombre: usuario.nombre
      }
    },
      Llaves.claveJWT)
      return token;
    }

  ValidarTokenJWT(token: string){
    try{
      let datos = jwt.verify(token, Llaves.claveJWT);
      return datos;
    }catch{
      return false;
    }
  }

  CifrarClave(clave:string){
    let claveCifrada = cryptoJS.MD5(clave);
    return claveCifrada;
  }
   /* Valida que exista el usuario para recuperar la contraseña */
  RecuperarClaveUsuario(usuario: string) {
    try {
      const p = this.usuarioRepository.findOne({
        where: {correo: usuario},
      });
      
      if (p) {
        return p;
      }
      return false;
    } catch (error) {
      return false;
    }
  }
}
