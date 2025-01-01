const sql = require("./db.js");

const Artikal = function (artikal) {
  this.sifra = artikal.sifra;
  this.naziv = artikal.naziv;
  this.cena = artikal.cena;
  this.kolicina = artikal.kolicina;
  this.slika = artikal.slika;
};

Artikal.vratiPoSifri = (sifra, result) => {
  sql.query(`SELECT * FROM artikal WHERE sifra LIKE ${sifra}`, (err, res) => {
    if (err) {
      console.log("Greska: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("Pronadjen artikal: ", res[0]);
      result(null, res[0]);
      return;
    }

    result({ kind: "Nije pronadjen artikal" }, null);
  });
};

Artikal.vratiSve = (naziv, result) => {
  let query = "SELECT * FROM artikal";

  if (naziv) {
    query += ` WHERE naziv LIKE '%${naziv}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("Greska: ", err);
      result(null, err);
      return;
    }

    console.log("Artikli: ", res);
    result(null, res);
  });
};

Artikal.azuriraj = (sifra, artikal, result) => {
  sql.query(
    "UPDATE artikal SET naziv = ?, cena = ?, kolicina = ?, slika = ? WHERE sifra LIKE ?",
    [artikal.naziv, artikal.cena, artikal.kolicina, artikal.slika, sifra],
    (err, res) => {
      if (err) {
        console.log("Greska: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        result({ kind: "Nije pronadjen artikal" }, null);
        return;
      }

      console.log("Azuriran artikal: ", { sifra: sifra, ...artikal });
      result(null, { sifra: sifra, ...artikal });
    }
  );
};

module.exports = Artikal;
