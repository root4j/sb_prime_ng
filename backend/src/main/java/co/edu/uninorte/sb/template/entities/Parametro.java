/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.uninorte.sb.template.entities;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author ruthford.jay
 */
@Entity
@Table(name = "ZTRPARS")
@XmlRootElement
public class Parametro implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Column(name = "ZTRPARS_ID", length = 9, nullable = false)
    private String id;
    
    @JoinColumn(name = "ZTRPARS_APPS_ID", referencedColumnName = "ZTVAPPS_ID")
    @ManyToOne(optional = false, fetch = FetchType.EAGER)
    private Aplicacion app;
    
    @Column(name = "ZTRPARS_TYPE", length = 1, nullable = false)
    private String tipo;
    
    @Column(name = "ZTRPARS_LIST", length = 255)
    private String listado;

    @Column(name = "ZTRPARS_DESC", length = 900, nullable = false)
    private String descripcion;

    @Column(name = "ZTRPARS_VALUE", length = 4000, nullable = false)
    private String valor;

    @Column(name = "AUDITOR_STATUS", length = 1, nullable = false)
    protected String estado;

    @Column(name = "AUDITOR_USER", length = 30, nullable = false)
    protected String usuario;

    @Column(name = "AUDITOR_ACTIVITY_DATE", nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    protected Date fechaActividad;

    public Parametro() {
        super();
    }
    
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Aplicacion getApp() {
        return app;
    }

    public void setApp(Aplicacion app) {
        this.app = app;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public String getListado() {
        return listado;
    }

    public void setListado(String listado) {
        this.listado = listado;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getValor() {
        return valor;
    }

    public void setValor(String valor) {
        this.valor = valor;
    }


    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public Date getFechaActividad() {
        return fechaActividad;
    }

    public void setFechaActividad(Date fechaActividad) {
        this.fechaActividad = fechaActividad;
    }
}