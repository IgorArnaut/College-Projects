const Artikal = require("../models/artikal.model.js");

exports.vratiSve = (req, res) => {
  const naziv = req.query.naziv;

  Artikal.vratiSve(naziv, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Greska prilikom dobavljanja artikala.",
      });
    else res.send(data);
  });
};

exports.vratiJedan = (req, res) => {
  Artikal.vratiPoSifri(req.params.sifra, (err, data) => {
    if (err) {
      if (err.kind === "Nije pronadjen artikal") {
        res.status(404).send({
          message: `Nije pronadjen artikal sa sifrom ${req.params.sifra}.`,
        });
      } else {
        res.status(500).send({
          message: `Greska prilikom dobavljanja artikla sa sifrom ${req.params.sifra}`,
        });
      }
    } else res.send(data);
  });
};

exports.azuriraj = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Sadrzaj ne sme biti prazan!",
    });
  }

  console.log(req.body);

  Artikal.azuriraj(req.params.sifra, new Artikal(req.body), (err, data) => {
    if (err) {
      if (err.kind === "Nije pronadjen artikal") {
        res.status(404).send({
          message: `Nije pronadjen artikal sa sifrom ${req.params.sifra}.`,
        });
      } else {
        res.status(500).send({
          message: `Greska prilikom azuriranja artikla sa sifrom ${req.params.sifra}`,
        });
      }
    } else res.send(data);
  });
};
