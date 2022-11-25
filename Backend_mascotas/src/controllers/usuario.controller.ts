import {authenticate} from '@loopback/authentication';
import { service } from '@loopback/core';
import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
  HttpErrors,
} from '@loopback/rest';
import {Usuario, Credenciales, RecuperacionClave} from '../models/';
import {UsuarioRepository} from '../repositories';
import {AutenticacionService} from '../services';
import { Llaves } from '../config/llaves';

const fetch = require('node-fetch');

export class UsuarioController {
  constructor(
    @repository(UsuarioRepository)
    public usuarioRepository : UsuarioRepository,
    @service(AutenticacionService)
    public servicioAutenticacion : AutenticacionService
  ) {}

  @post('/identificarUsuario',{
    responses:{
      '200':{
        description:'Identificacion de usuarios'
      }
    }
  })
  async identificarUsuario(
    @requestBody() credenciales: Credenciales
  ){
    let p = await this.servicioAutenticacion.IdentificarUsuario(credenciales.usuario, credenciales.clave);
    if (p){
      let token = this.servicioAutenticacion.GenerarTokenJWT(p);
      return{
        datos:{
          nombre: p.nombre,
          correo: p.correo,
          id: p.id
        },
        tk: token
      }
    }else{
      throw new HttpErrors[401]('Datos invalidos');
    }
  }


  @post('/usuarios')
  @response(200, {
    description: 'Usuario model instance',
    content: {'application/json': {schema: getModelSchemaRef(Usuario)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Usuario, {
            title: 'NewUsuario',
            exclude: ['id'],
          }),
        },
      },
    })
    usuario: Omit<Usuario, 'id'>,
  ): Promise<Usuario> {
    let clave = this.servicioAutenticacion.GenerarClave();
    let claveCifrada = this.servicioAutenticacion.CifrarClave(clave);
    usuario.contrasena = claveCifrada;
    let p = await this.usuarioRepository.create(usuario);

    //Notificar al usuario
    let destino = usuario.correo;
    let asunto = 'Registo en la plataforma';
    let contenido= `Hola ${usuario.nombre}, su usuario es ${usuario.correo} y su contraseña es ${clave}`;
    fetch(`http://127.0.0.1:5000/email?correo_destino=${destino}&asunto_correo=${asunto}&cuerpo_correo=A${contenido}`)
      .then((data:any)=>{
        console.log(data);
      })
      return p

  }
    /* Servicio para la recuperacion de la clave del usuario*/
    @authenticate.skip()
    @post('/recuperarClave')
    @response(200, {
      description: 'Recuperacion de contraseña',
    })
    async recuperarClave(@requestBody() usuarioRecuperacion: RecuperacionClave) {
      const p = await this.servicioAutenticacion.RecuperarClaveUsuario(
        usuarioRecuperacion.usuario,
      );
      if (p) {
        /* Generacion de la clave cifrada */
        const clave = this.servicioAutenticacion.GenerarClave();
        const claveCifrada = this.servicioAutenticacion.CifrarClave(clave);
        p.contrasena = claveCifrada;

        await this.usuarioRepository.updateById(p.id, p);

        /* Envio del correo*/
        const destino = p.correo;
        const asunto = 'Recuperación de contraseña mascota feliz';
        const contenido = `Hola ${p.nombre}, el restablecimiento de tu contraseña fue exitoso. Tu nueva contraseña es ${clave}`;
        fetch(
          `${Llaves.urlServicioNotificaciones}/correo_destino=${destino}&asunto_correo=${asunto}&cuerpo_correo=${contenido}`,
        )
          .then((data: unknown) => {
            console.log(data);
          })
          .catch((err: unknown) => console.log(err));

        return p;
      } else {
        throw new HttpErrors[401]('Datos no válidos');
      }
    }

  @get('/usuarios/count')
  @response(200, {
    description: 'Usuario model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Usuario) where?: Where<Usuario>,
  ): Promise<Count> {
    return this.usuarioRepository.count(where);
  }

  @get('/usuarios')
  @response(200, {
    description: 'Array of Usuario model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Usuario, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Usuario) filter?: Filter<Usuario>,
  ): Promise<Usuario[]> {
    return this.usuarioRepository.find(filter);
  }

  @patch('/usuarios')
  @response(200, {
    description: 'Usuario PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Usuario, {partial: true}),
        },
      },
    })
    usuario: Usuario,
    @param.where(Usuario) where?: Where<Usuario>,
  ): Promise<Count> {
    return this.usuarioRepository.updateAll(usuario, where);
  }

  @get('/usuarios/{id}')
  @response(200, {
    description: 'Usuario model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Usuario, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Usuario, {exclude: 'where'}) filter?: FilterExcludingWhere<Usuario>
  ): Promise<Usuario> {
    return this.usuarioRepository.findById(id, filter);
  }

  @patch('/usuarios/{id}')
  @response(204, {
    description: 'Usuario PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Usuario, {partial: true}),
        },
      },
    })
    usuario: Usuario,
  ): Promise<void> {
    await this.usuarioRepository.updateById(id, usuario);
  }

  @put('/usuarios/{id}')
  @response(204, {
    description: 'Usuario PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() usuario: Usuario,
  ): Promise<void> {
    await this.usuarioRepository.replaceById(id, usuario);
  }

  @del('/usuarios/{id}')
  @response(204, {
    description: 'Usuario DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.usuarioRepository.deleteById(id);
  }
}
