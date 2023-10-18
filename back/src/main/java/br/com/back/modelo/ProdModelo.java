package br.com.back.modelo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "terabyte")
public class ProdModelo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer id;

    @Lob
    @Column(name = "img", columnDefinition = "LONGBLOB")
    public byte[] img;

    public String descricao;
    public Double preco;
    public Integer tipo;
    
}
