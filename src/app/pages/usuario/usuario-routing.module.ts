import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElementsComponent } from './elements/elements.component';
import { ValidationComponent } from './validation/validation.component';
import { EditorComponent } from './editor/editor.component';
import { UploadsComponent } from './uploads/uploads.component';
import { WizardComponent } from './wizard/wizard.component';
import { MaskComponent } from './mask/mask.component';
import { AdvancedformComponent } from './advancedform/advancedform.component';
import { RepeaterComponent } from './repeater/repeater.component';
import { CadastroUsuarioComponent } from './layouts/cadastroUsuario.component';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';

const routes: Routes = [
    {
        path: 'elements',
        component: ElementsComponent
    },
    {
        path: 'validation',
        component: ValidationComponent
    },
    {
        path: 'editor',
        component: EditorComponent
    },
    {
        path: 'uploads',
        component: UploadsComponent
    },
    {
        path: 'wizard',
        component: WizardComponent
    },
    {
        path: 'mask',
        component: MaskComponent
    },
    {
        path: 'advanced',
        component: AdvancedformComponent
    },
    {
        path: 'repeater',
        component: RepeaterComponent
    },
    {
        path: 'cadastro',
        component: CadastroUsuarioComponent
    },
    {
      path: 'lista',
      component: ListaUsuarioComponent
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsuarioRoutingModule { }
