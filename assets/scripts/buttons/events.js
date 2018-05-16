'use strict'

// const ui = require('./ui')

const onCSSClick = (event) => {
  $('.css-content').removeClass('hidden')
  $('.html-content').addClass('hidden')
}

const onHTMLClick = (event) => {
  $('.html-content').removeClass('hidden')
  $('.css-content').addClass('hidden')
}

const addHandlers = () => {
  $('modal').modal('toggle')
  $('#grow-css').click(onCSSClick)
  $('#grow-html').click(onHTMLClick)
  $('#shrink-css').click(onCSSClick)
  $('#shrink-html').click(onHTMLClick)
  $('#right-Z360-css').click(onCSSClick)
  $('#right-Z360-html').click(onHTMLClick)
  $('#left-Z360-css').click(onCSSClick)
  $('#left-Z360-html').click(onHTMLClick)
  $('#right-Z180-css').click(onCSSClick)
  $('#right-Z180-html').click(onHTMLClick)
  $('#left-Z180-css').click(onCSSClick)
  $('#left-Z180-html').click(onHTMLClick)
  $('#right-Y360-css').click(onCSSClick)
  $('#right-Y360-html').click(onHTMLClick)
  $('#left-Y360-css').click(onCSSClick)
  $('#left-Y360-html').click(onHTMLClick)
}

module.exports = {
  addHandlers
}
