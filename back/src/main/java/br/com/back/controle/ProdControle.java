package br.com.back.controle;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import br.com.back.dao.ProdDAO;
import br.com.back.modelo.ProdModelo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;



@RestController
@CrossOrigin("*")
public class ProdControle {
    @Autowired
    ProdDAO dao;

    @GetMapping
    public Iterable<ProdModelo> listar() {
        return dao.findAll();
    }

    @GetMapping("/pagina-produto/{id}")
    public ProdModelo getProduto(@PathVariable Integer id){
        return dao.findById(id).orElse(null);
    }

    @GetMapping("/pagina-finalizar/{id}")
    public ProdModelo finalizar(@PathVariable Integer id){
        return dao.findById(id).orElse(null);
    }

    @PostMapping
    public ResponseEntity<ProdModelo> cadastrar(@RequestParam("img") MultipartFile img, @RequestParam("descricao") String descricao, @RequestParam("preco") Double preco, @RequestParam("tipo") Integer tipo) {
        try {
            byte[] imgBytes = img.getBytes();
            ProdModelo model = new ProdModelo();
            model.setImg(imgBytes);            
            model.setDescricao(descricao);
            model.setPreco(preco);
            model.setTipo(tipo);
            return new ResponseEntity<ProdModelo>(dao.save(model), HttpStatus.CREATED);
        } catch (Exception e) {
            return null;
        }
    }

    public byte[] imagem(Integer id){
        Optional<ProdModelo> produto = dao.findById(id);
        return produto.orElse(null).getImg();
    }

    @PutMapping
    public ResponseEntity<ProdModelo> alterar(@RequestParam("id") Integer id, @RequestParam("img") MultipartFile img, @RequestParam("descricao") String descricao, @RequestParam("preco") Double preco, @RequestParam("tipo") Integer tipo) {
        try {
            byte[] imgBytes;
            ProdModelo model = new ProdModelo();
            if(img.isEmpty()){
                imgBytes = imagem(id);
            }else{
                imgBytes = img.getBytes();
            }
            model.setId(id);
            model.setImg(imgBytes);            
            model.setDescricao(descricao);
            model.setPreco(preco);
            model.setTipo(tipo);
            return new ResponseEntity<ProdModelo>(dao.save(model), HttpStatus.CREATED);
        } catch (Exception e) {
            return null;
        }
    }
    
    @DeleteMapping("/{id}")
    public void remover(@PathVariable Integer id){
        dao.deleteById(id);
    }
    
}
