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

import model.Artikal;
import repositories.ArtikalRepository;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class ArtikalController {

	@Autowired
	private ArtikalRepository ar;
	
	@GetMapping("/artikli")
	public ResponseEntity<List<Artikal>> getAllArtikals() {
		try {
			List<Artikal> artikli = new ArrayList<Artikal>();
			ar.findAll().forEach(artikli::add);
			
			if (artikli.isEmpty())
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			else
				return new ResponseEntity<>(artikli, HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("/artikli/{sifra}")
	public ResponseEntity<Artikal> getArtikalBySifra(@PathVariable("sifra") String sifra) {
		Optional<Artikal> artikalData = ar.findById(sifra);
		
		if (artikalData.isPresent())
			return new ResponseEntity<>(artikalData.get(), HttpStatus.OK);
		else
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
	
	@PutMapping("/artikli/{sifra}")
	public ResponseEntity<Artikal> updateArtikal(@PathVariable("sifra") String sifra, @RequestBody Artikal artikal) {
		Optional<Artikal> artikalData = ar.findById(sifra);
		
		if (artikalData.isPresent()) {
			Artikal _artikal = artikalData.get();
			_artikal.setNaziv(artikal.getNaziv());
			_artikal.setCena(artikal.getCena());
			_artikal.setKolicina(artikal.getKolicina());
			_artikal.setSlika(artikal.getSlika());
			return new ResponseEntity<>(ar.save(_artikal), HttpStatus.OK);
		} else
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
	
}
