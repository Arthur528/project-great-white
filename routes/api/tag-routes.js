const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
    // Find all tags
    Tag.findAll({
            attributes: ['id', 'tag_name'],
            include: [{
                model: Product,
                attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
            }]
        })
        .then(dbTagData => res.json(dbTagData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
    // Find a single tag by its `id`
    Tag.findOne({
            where: {
                id: req.params.id
            },
            attributes: ['id', 'tag_name'],
            include: [{
                model: Product,
                attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
            }]
        })
        .then(dbTagData => {
            if (!dbTagData) {
                res.status(404).json({
                    message: 'No tag found with this id'
                });
                return;
            }
            res.json(dbTagData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    // Create a new tag
    Tag.create({
            tag_name: req.body.tag_name
        })
        .then(dbTagData => res.json(dbTagData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});            

router.put('/:id', (req, res) => {
    // Update a tag's name by its `id` value
    Tag.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        .then(dbTagData => {
            if (!dbTagData[0]) {
                res.status(404).json({
                    message: 'No tag found with this id'
                });
                return;
            }
            res.json(dbTagData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete('/:id', (req, res) => {
    // Delete on tag by its `id` value
    Tag.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(dbTagData => {
            if (!dbTagData) {
                res.status(404).json({
                    message: 'No tag found with this id'
                });
                return;
            }
            res.json(dbTagData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;
