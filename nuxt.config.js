module.exports = {
  head: {
    title: 'newPromises',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name:"viewport", content:"width=device-width" }
    ],
    link: [
      { rel:"shortcut icon", href:"/favicon.png", type:"image/png" },
      { rel:"stylesheet", href:"https://fonts.googleapis.com/css?family=Raleway" }
    ]
  },
  build: {
    vendor: ['axios']
  },
  css: ['~/assets/main.css']
}
