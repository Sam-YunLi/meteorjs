import { Meteor } from 'meteor/meteor'
import { createRoot } from 'react-dom/client';
import React from 'react'
import App from '/imports/ui/app.js'
import './main.html'

Meteor.startup(() => {
  // createRoot(container!) if you use TypeScript
  createRoot(
    document.getElementById("root")
  )
  .render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
})



