exports.getData = (req, res) => {
    const data = [
      { name: 'Item 1' },
      { name: 'Item 2' },
      { name: 'Item 3' }
    ];
    res.json(data);
  };
  