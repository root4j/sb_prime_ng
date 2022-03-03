/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.uninorte.sb.template.repositories;

import co.edu.uninorte.sb.template.entities.Parametro;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Los repositorio se pueden implementar con CrudRepository o JpaRepository. Si
 * utilizas JpaRepository no requieres realizar conversiones de tipos o
 * validaciones de opcionales.
 *
 * @author ruthford.jay
 */
public interface ParametroRepository extends JpaRepository<Parametro, String> {

    List<Parametro> findAllByApp_IdOrderById(String appId);
}
