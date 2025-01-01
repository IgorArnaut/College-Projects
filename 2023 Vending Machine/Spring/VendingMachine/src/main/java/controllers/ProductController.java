package controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import model.Product;
import repositories.ProductRepository;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class ProductController {

	@Autowired
	private ProductRepository pr;
	
	@GetMapping("/products")
	public ResponseEntity<List<Product>> find() {
		try {
            List<Product> products = new ArrayList<>(pr.findAll());
			
			if (products.isEmpty())
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			else
				return new ResponseEntity<>(products, HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("/products/{id}")
	public ResponseEntity<Product> findById(@PathVariable("id") String id) {
		Optional<Product> productData = pr.findById(id);

		if (productData.isPresent())
			return new ResponseEntity<>(productData.get(), HttpStatus.OK);
		else
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
	
	@PutMapping("/products/{id}")
	public ResponseEntity<Product> update(@PathVariable("id") String id, @RequestBody Product product) {
		Optional<Product> productData = pr.findById(id);
		
		if (productData.isPresent()) {
			Product _product = productData.get();
			_product.setName(product.getName());
			_product.setPrice(product.getPrice());
			_product.setQty(product.getQty());
			_product.setImage(product.getImage());
			return new ResponseEntity<>(pr.save(_product), HttpStatus.OK);
		} else
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
	
}
