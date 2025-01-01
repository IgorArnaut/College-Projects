import Product from "../models/product.model.js";

export function find(req, res) {
  const name = req.query.name;

  Product.find(name, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Greška tokom dobavljanja artikla",
      });
    else res.send(data);
  });
}

export function findById(req, res) {
  const id = req.params.id;

  Product.findById(id, (err, data) => {
    if (err) {
      if (err.kind === "Nije pronađen artikal")
        res.status(404).send({
          message: `Nije pronađen artikal sa šifrom ${id}.`,
        });
      else
        res.status(500).send({
          message: `Greška tokom dobavljanja artikla sa šifrom ${id}`,
        });
    } else res.send(data);
  });
}

export function update(req, res) {
  if (!req.body)
    res.status(400).send({
      message: "Sadržaj ne sme biti prazan!",
    });

  console.log(req.body);

  const id = req.params.id;

  Product.update(id, new Product(req.body), (err, data) => {
    if (err) {
      if (err.kind === "Nije pronađen artikal")
        res.status(404).send({
          message: `Nije pronađen artikal sa šifrom ${id}.`,
        });
      else
        res.status(500).send({
          message: `Greška tokom ažuriranja artikla sa šifrom ${id}`,
        });
    } else res.send(data);
  });
}
