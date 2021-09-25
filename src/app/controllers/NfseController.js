class NfseController {
  index(req, res) {
    return res.json({
      list: ['Nota fiscal 1', 'Nota fiscal 2'],
    });
  }

  show(req, res) {
    return res.json({
      nfse: 'Nota fiscal 1',
    });
  }

  store(req, res) {
    console.log(req.body);
    return res.json({
      nfse: 'Nota fiscal 3',
    });
  }

  update(req, res) {
    return res.json({
      nfse: 'Nota fiscal eletronica 3',
    });
  }

  delete(req, res) {
    return res.json({
      status: 'success',
    });
  }
}

module.exports = new NfseController();
