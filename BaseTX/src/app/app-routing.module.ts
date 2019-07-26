import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompletoComponent } from './layout/completo/completo.component';
import { CompletoMenuComponent } from './layout/completoMenu/completo-menu.component';
import { InicioComponent } from './pages/inicio/inicio.component';


const routes: Routes = [
  { path: 'login', component: InicioComponent, data: {titulo: 'LOGIN'}},
  { path: '', redirectTo: 'inicio', pathMatch: 'full', data: {titulo: 'INICIO'} },
  {
    path: 'inicio',
    component: CompletoComponent,
   // data: {titulo: 'MONITOR'},
    // children: [
    //   { path: 'tablero', component: MensualComponent, data: {titulo: 'TABLERO'} },
    //   { path: 'inicio', component: InicioComponent, data: {titulo: 'INICIO'} },
    //   { path: 'servicio', component: SdinicioComponent, data: {titulo: 'SERVICIO'} },
    //   { path: 'ticket/crear', component: TicketCrearComponent, data: {titulo: 'TICKET/CREAR'} },
    //   { path: 'monitor', component: MonitorComponent, data: {titulo: 'MONITOR'} },
    // ]
  },
  {
    path: 'tablero',
    component: CompletoComponent,
   // data: {titulo: 'MONITOR'},
    // children: [
    //   { path: 'tablero', component: MensualComponent, data: {titulo: 'TABLERO'} },
    //   { path: 'inicio', component: InicioComponent, data: {titulo: 'INICIO'} },
    //   { path: 'servicio', component: SdinicioComponent, data: {titulo: 'SERVICIO'} },
    //   { path: 'ticket/crear', component: TicketCrearComponent, data: {titulo: 'TICKET/CREAR'} },
    //   { path: 'monitor', component: MonitorComponent, data: {titulo: 'MONITOR'} },
    // ]
  },
  
  {
    path: 'configuracion',
    component: CompletoComponent,
    // data: {titulo: 'MONITOR'},
    // children: [
    //   { path: '', component: ConfiguracionComponent, data: {titulo: 'CONFIGURACION'} },
    //   { path: 'listado/jobs/:id', component: ListadoJobsComponent, data: {titulo: 'JOBS/LISTADO'} },
    //   { path: 'job/:id', component: AgregarJobComponent, data: {titulo: 'JOB'} },
    //   { path: 'log/:id', component: ConsultaComponent, data: {titulo: 'LOG'} },
    // ]
  },
  {
    path: 'administracion',
    component: CompletoMenuComponent,
    data: {titulo: 'ADMINISTRACION'},
    // children: [
    //   { path: '', component: InicioCatalogosComponent, data: {titulo: 'INICIO'}},
    //   {
    //     path: 'areas',
    //     children: [
    //       { path: '', component: AreasComponent, data: {titulo: 'AREAS'} },
    //       { path: 'agregar', component: AgregarAreaComponent, data: {titulo: 'AREAS/AGREGAR'} },
    //       { path: 'modificar/:id', component: ModificarAreaComponent, data: {titulo: 'AREAS/MODIFICAR'} }
    //     ]
    //   },
    //   { path: 'jobs', component: JobsComponent, data: {titulo: 'JOBS'} },
    //   { path: 'servidores',
    //   children: [
    //     { path: '', component: ServidoresComponent, data: {titulo: 'SERVIDORES'} },
    //     { path: 'agregar', component: AgregarServidorComponent, data: {titulo: 'SERVIDORES/AGREGAR'} },
    //     { path: 'modificar/:id', component: ModificarServidorComponent, data: {titulo: 'SERVIDORES/MODIFICAR'} }
    //   ]
    },
  //     { path: 'temas',
  //     children: [
  //       { path: '', component: TemasComponent, data: {titulo: 'TEMAS'} },
  //       { path: 'agregar', component: AgregarTemaComponent, data: {titulo: 'TEMA/AGREGAR'} },
  //       { path: 'modificar/:id', component: ModificarTemaComponent, data: {titulo: 'TEMA/MODIFICAR'} }
  //     ]
  //   },
  //     { path: 'usuarios',
  //     children: [
  //       { path: '', component: UsuariosComponent, data: {titulo: 'USUARIOS'} },
  //       { path: 'agregar', component: AgregarUsuarioComponent, data: {titulo: 'USUARIOS/AGREGAR'} },
  //       { path: 'modificar/:id', component: ModificarUsuarioComponent, data: {titulo: 'USUARIOS/MODIFICAR'} }
  //       ]
  //     },
  //     { path: 'vistas',  children: [
  //       { path: '', component: VistasComponent, data: {titulo: 'VISTAS'} },
  //       { path: 'agregar', component: AgregarVistaComponent, data: {titulo: 'VISTAS/AGREGAR'} },
  //       { path: 'modificar/:id', component: ModificarVistaComponent, data: {titulo: 'VISTAS/MODIFICAR'} }
  //     ]
  //   },
  //     { path: 'monitoreo',  children: [
  //       { path: '', component: MonitoreoComponent, data: {titulo: 'TIPO MONITOREO'} },
  //       { path: 'agregar', component: AgregarMonitoreoComponent, data: {titulo: 'TIPO MONIOREO/AGREGAR'} },
  //       { path: 'modificar/:id', component: ModificacionMonitoreoComponent, data: {titulo: 'TIPO MONITOREO/MODIFICAR'} }
  //     ]
  //   },
  //     { path: 'paquetes',
  //     children: [
  //         { path: '', component: PaqueteComponent, data: {titulo: 'PAQUETES'} },
  //         { path: 'agregar', component: AgregarPaqueteComponent, data: {titulo: 'PAQUETES/AGREGAR'} },
  //         { path: 'modificar/:id', component: EditarPaqueteComponent, data: {titulo: 'PAQUETES/MODIFICAR'} }
  //       ]
  //     },
  //     // { path: 'criticidad', component: CriticidadComponent, data: {titulo: 'TIPO DE CRITICIDAD'} },
  //     {
  //       path: 'criticidad',
  //       children: [
  //         { path: '', component: CriticidadComponent, data: {titulo: 'TIPO DE CRITICIDAD'} },
  //         { path: 'agregar', component: AddCriticidadComponent, data: {titulo: 'TIPO CRITICIDAD/AGREGAR'} },
  //         { path: 'modificar/:id', component: ModificarCriticidadComponent, data: {titulo: 'TIPO CRITICIDAD/MODIFICAR'} }
  //       ]
  //     },
  //     { path: 'ejecucion',
  //     children: [
  //       { path: '', component: EjecucionComponent, data: {titulo: 'TIPO DE EJECUCION'} },
  //       { path: 'agregar', component: AgregarEjecucionComponent, data: {titulo: 'TIPO EJECUCION/AGREGAR'} },
  //       { path: 'modificar/:id', component: ModificarEjecucionComponent, data: {titulo: 'TIPO EJECUCION/MODIFICAR'} }
  //       ]
  //     },
  //   ]
  // },
  { path: '**', redirectTo: '/404', data: {titulo: '404'} },
  { path: '404', component: InicioComponent, data: {titulo: '404'} },
  { path: '**', component: InicioComponent, data: {titulo: '404'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }