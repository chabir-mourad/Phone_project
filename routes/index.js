const express = require('express');

const router = express.Router();
const Phone = require('../models/Phone');

const admin = require('../middlware/admin');


// @route  Post   admin/phones
//@desc   Create a Product
// @access  Private

router.post('/phones/add',  admin,async (req, res) => {
	try {
		const { name, price, image, ram, storage, processor } = req.body;

		// console.log(req.body.storage)

		newProduct = new Phone({
			name,
			price,
			image,
			ram,
			storage,
			processor
		});

		const product = await newProduct.save();
		res.json(product);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server is out');
	}
});

// @route  Get   admin/phones
//@desc   Get all products
// @access  Public

router.get('/phones', async (req, res) => {
	try {
		const products = await Phone.find().sort();
	

		
		res.json(products);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server is out ...');
	}
});
router.get('/searchedPhone', async (req, res) => {
	const { name } = req.query;
	console.log('name', name);
	try {
		if(!name) {
			const products = await Phone.find()
			res.json(products)
		}

		const products = await Phone.find({ name: { $regex: `.*${name}*.` } });
       
        res.json(products)
	} catch (error) {
		// console.log('error', error)
		res.json({ errors: error });
	}
});

// @route  get   /admin/phone/:id_phone
//@desc   Get a specific  phone
// @access  Private

router.get('/phones/:id_phone' ,  async (req, res) => {
	try {
		const phone = await Phone.findById(req.params.id_phone);

		if (!phone) {
			res.status(404).send('Product not Found');
		} else {
			res.json(phone);
		}
	} catch (err) {
		if (err.kind === 'ObjectId') {
			res.status(404).json({ message: 'Product is Not Found' });
		}
		console.error(err.message);
		res.status(500).send('Server is out ... ');
	}
});

// @route  delete   /admin/phones/:id_phone
//@desc   delete a phone
// @access  Private

router.delete('/phones/delete/:id_phone',admin ,  async (req, res) => {
	try {
		const phone = await Phone.findById(req.params.id_phone);

		phone.remove();
		res.json({ message: 'Phone removed' });
	} catch (err) {
		console.log(err.message);
		res.status(500).send('Server is out');
	}
});

router.put('/phones/update/:id_phone',admin  ,async (req, res) => {
	try {
		console.log(req.params.id_phone);
		let modifiedProduct = req.body;

		let modifiedProducts = await Phone.findOneAndUpdate({ _id: req.params.id_phone }, modifiedProduct);
		res.json({ message: 'document updated' });
	} catch (err) {
		console.error(err.message);
		res.status(500).send('server is out ....');
	}
});


module.exports = router;
