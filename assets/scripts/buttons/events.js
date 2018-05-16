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
  $('#right-css').click(onCSSClick)
  $('#right-html').click(onHTMLClick)
  $('#left-css').click(onCSSClick)
  $('#left-html').click(onHTMLClick)
}

module.exports = {
  addHandlers
}
