import sql from "./db.js";

class Product {
  constructor(product) {
    this.id = product.id;
    this.name = product.name;
    this.price = product.price;
    this.qty = product.qty;
    this.image = product.image;
  }

  static findById(id, result) {
    sql.query(`SELECT * FROM products WHERE id LIKE ${id}`, (err, res) => {
      if (err) {
        console.log("Greška: ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("Pronađen artikal: ", res[0]);
        result(null, res[0]);
        return;
      }

      result({ kind: "Nije pronađen artikal" }, null);
    });
  }

  static find(name, result) {
    let query = "SELECT * FROM products";
    if (name) query += ` WHERE name LIKE '%${name}%'`;

    sql.query(query, (err, res) => {
      if (err) {
        console.log("Greška: ", err);
        result(null, err);
        return;
      }

      console.log("Artikli: ", res);
      result(null, res);
    });
  }

  static update(id, product, result) {
    sql.query("UPDATE products SET name = ?, price = ?, qty = ?, image = ? WHERE id LIKE ?", [product.name, product.price, product.qty, product.image, id], (err, res) => {
      if (err) {
        console.log("Greška: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        result({ kind: "Nije pronađen artikal" }, null);
        return;
      }

      console.log("Ažuriran artikal: ", { id: id, ...product });
      result(null, { id: id, ...product });
    });
  }
}

export default Product;
