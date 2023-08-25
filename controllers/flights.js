const Flight = require('../models/flight');
const Ticket = require('../models/ticket')

module.exports = {
    index,
    new: newFlight,
    create,
    show
}

async function index(req, res) {
    const flights = await Flight.find({})
    flights.sort(function(a,b){
        return b.departs - a.departs
    })
    res.render('flights/index', { title: 'All Flights',flights })
}

function newFlight(req, res) {
    res.render('flights/new', { title: "Add a Flight", errorMsg: ''});
}

async function create(req, res) {
    if (!req.body.departs) {
        delete req.body.departs;
    }
    try {
        Flight.create(req.body)
        res.redirect('/flights')
    }
    catch (err) {
        console.log(err)
        res.render('/flights/new', {errorMsg: err.message})
    }
}

async function show(req, res) {
    const flight = await Flight.findById(req.params.id);
    const tickets = await Ticket.find({flight: req.params.id}).sort('seat')
    res.render('flights/show', { title: 'Flight Detail', flight, tickets });
}  


