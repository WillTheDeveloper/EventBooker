// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import EventsLayout from 'src/layouts/EventsLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={EventsLayout}>
        <Route path="/events/new" page={EventNewEventPage} name="newEvent" />
        <Route path="/events/{id:Int}/edit" page={EventEditEventPage} name="editEvent" />
        <Route path="/events/{id:Int}" page={EventEventPage} name="event" />
        <Route path="/events" page={EventEventsPage} name="events" />
      </Set>
      <Route path="/" page={HomePage} name="home" />
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
