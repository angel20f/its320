import Quotes from '../models/quotesModel.js';

async function getQuotes(req, res) {
    try {
        const quotes = await Quotes.find();
        if (quotes) {
            return res.status(200).json(quotes);

        } else {
            return res.status(404).json({ messege: "No quotes yet." })
        }
    } catch (error) {
        console.error("Error getting Quotes");
        return res.status(500).json(
            { message: "Something went wrong while getting quotes" }
        );
    }
}
async function createQuotes(req, res) {
    const { quotes, author, published, title } = req.body;

    if (!quotes || !author || !published || !title) {
        res.send('Please fill out all fields.')
    }

    //const exists = User.findOne({username})

    // if (exists) {
    //    res.status(489).send('Username already exists')
    //   throw new Error('Username already exists')
    //
    //  }

    const newQuotes = Quotes.create({
        quotes, author, published, title
    })
    if (!newQuotes) {
        res.status(500).send('Error while creating user.')
    }
    return res.status(200).send('User successfully created.')

}

export { createQuotes, getQuotes };