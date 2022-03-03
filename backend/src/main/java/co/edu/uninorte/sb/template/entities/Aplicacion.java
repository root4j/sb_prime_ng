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
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author ruthford.jay
 */
@Entity
@Table(name = "ZTVAPPS")
@XmlRootElement
public class Aplicacion implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Column(name = "ZTVAPPS_ID", length = 30, nullable = false)
    private String id;

    @Column(name = "ZTVAPPS_DESC", length = 150, nullable = false)
    private String descripcion;

    @Column(name = "ZTVAPPS_URL", length = 400)
    private String url;
    
    @Column(name = "AUDITOR_STATUS", length = 1, nullable = false)
    protected String estado;

    @Column(name = "AUDITOR_USER", length = 30, nullable = false)
    protected String usuario;

    @Column(name = "AUDITOR_ACTIVITY_DATE", nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    protected Date fechaActividad;

    public Aplicacion() {
        super();
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
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