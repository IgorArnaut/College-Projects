package model;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import lombok.*;

/**
 * The persistent class for the artikal database table.
 * 
 */
@Data
@Entity
@Table(name = "products")
@NoArgsConstructor
public class Product implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private String id;

	@Column(name = "price")
	private int price;

	@Column(name = "qty")
	private int qty;

	@Column(name = "name")
	private String name;

	@Column(name = "image")
	private String image;

}