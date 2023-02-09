# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version
* System dependencies
* Configuration
* Database creation
* Database initialization
* How to run the test suite
* Services (job queues, cache servers, search engines, etc.)
* Deployment instructions
* ...

WyoConcerts

WyoConcerts is a single page application built with a ruby on rails backend and utilizes create-react-app for the front end. Styling was accomplished using tailwinds CSS. 

This project utilizes watir and nokogiri to scrape a large concert site to seed the data.

Wyoming is a large state, but lacks a central location for information on live music. 

By creating a single location for this information, residents and visitors can browse concerts and venues. If a user creates an account, they have the ability to store concerts in their dashboard. 

In addition, venues can send an admin information regarding their location and concerts they are hosting. This will allow site visitors to stay informed about events around the state.


ruby version 2.7.4p191
Postgresql 

deployment instructions

run, bundle install
start the backend with, rails s

run, npm install --prefix client
start the frontend with, npm start --prefix client