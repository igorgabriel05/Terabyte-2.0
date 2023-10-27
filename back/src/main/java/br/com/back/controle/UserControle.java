package br.com.back.controle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.back.dao.UserDAO;
import br.com.back.modelo.UserModelo;

@RestController
@CrossOrigin("*")
public class UserControle {
    @Autowired
    UserDAO userDAO;

    @PostMapping("/pagina-login/")
    public UserModelo login(@RequestBody UserModelo login){
        Iterable<UserModelo> usuarios = userDAO.findAll();
        for(UserModelo u : usuarios){
            if(u.getUser().equals(login.getUser())){
                if(u.getSenha().equals(login.getSenha())){
                    return u;
                }
            }
        }
        return null;
    }
    
    /* @PostMapping("/pagina-login/")
    public ResponseEntity<?> cadastro(@RequestBody UserModelo userModelo) {
        return new ResponseEntity<UserModelo>(userDAO.save(userModelo), HttpStatus.CREATED);
    } */
}
