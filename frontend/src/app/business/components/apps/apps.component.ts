import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { catchError } from 'rxjs';
import { Aplicacion } from '../../models/uninorte';
import { AplicacionService } from '../../services/uninorte.service';

@Component({
    templateUrl: './apps.component.html',
    providers: [MessageService],
})
export class AppsComponent implements OnInit {

    entityDialog: boolean;
    deleteEntityDialog: boolean = false;
    deleteEntitiesDialog: boolean = false;
    entities: Aplicacion[];
    entity: Aplicacion;
    selectedEntity: Aplicacion[];
    submitted: boolean;
    cols: any[];
    statuses: any[];
    rowsPerPageOptions = [5, 10, 20];
    lifeMessage: number = 5000;
    isEdit: boolean = false;

    constructor(private mainService: AplicacionService, private messageService: MessageService) {}

    ngOnInit() {
        this.readAll();

        this.cols = [
            {field: 'id', header: 'Id'},
            {field: 'descripcion', header: 'Descripción'}
        ];
    }

    readAll(): void {
        this.mainService.readAll().subscribe(response => this.entities = response);
    }

    create(obj: Aplicacion): void {
        this.mainService.create(obj)
        .pipe(
            catchError(err => {
                console.error(err);
                throw new Error(err);
            })
        )
        .subscribe(_res => {
            this.messageService.add({severity: 'success', summary: 'Exito al Crear', detail: 'Registro creado exitosamente!', life: this.lifeMessage});
            this.readAll();
            this.entityDialog = false;
        });
    }

    update(id: string, obj: Aplicacion): void {
        this.mainService.update(id, obj)
        .pipe(
            catchError(err => {
                console.error(err);
                throw new Error(err);
            })
        )
        .subscribe(_res => {
            this.messageService.add({severity: 'success', summary: 'Exito al Actualizar', detail: 'Registro actualizado exitosamente!', life: this.lifeMessage});
            this.readAll();
            this.entityDialog = false;
        });
    }

    openNew(): void {
        this.entity = {
            estado: 'A',
            usuario: 'RJAY',
            fechaActividad: new Date()
        };
        this.submitted = false;
        this.entityDialog = true;
        this.isEdit = false;
    }

    openEdit(obj: Aplicacion): void {
        this.entity = { ...obj};
        this.entityDialog = true;
        this.isEdit = true;
    }

    hideDialog(): void {
        this.submitted = false;
        this.entityDialog = false;
    }

    save(): void {
        this.submitted = true;
        try {
            if(this.isEdit) {
                this.entity.fechaActividad = new Date();
                this.update(this.entity.id, this.entity);
            } else {
                this.create(this.entity);
            }
        } catch (error) {
            this.messageService.add({severity: 'error', summary: 'Error', detail: error, life: this.lifeMessage});
        }
    }
}