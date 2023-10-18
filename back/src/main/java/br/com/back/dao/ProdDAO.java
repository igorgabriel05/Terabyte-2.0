package br.com.back.dao;

import org.springframework.data.repository.CrudRepository;

import br.com.back.modelo.ProdModelo;

public interface ProdDAO extends CrudRepository<ProdModelo, Integer> {
    
}
