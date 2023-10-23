package br.com.back.dao;

import org.springframework.data.repository.CrudRepository;

import br.com.back.modelo.UserModelo;

public interface UserDAO extends CrudRepository<UserModelo, Integer> {
    
}
