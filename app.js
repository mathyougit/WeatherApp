const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if (address) {
  geocode(address, (err, {lat, long, location}) => {
    if (err) return console.log('Error:', err)
    forecast(lat, long, (err, data) => {
      if (err) return console.log('Error:', err)
      console.log(`Here is today's forecast for ${location}.`)
      console.log(data)
    })
  })
 } else console.log('Please provide an address')


