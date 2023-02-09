Rails.application.routes.draw do
  resources :posts
  resources :user_lists do
    resources :concerts, only: [:show]
  end
  resources :concerts do 
    resources :venues, only: [:show]
  end
  resources :venues
  resources :bands
  resources :users

  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  post "/signup", to: "users#create"
  get "/freeconcerts", to: "concerts#freeConcerts"

  # get '/hello', to: 'application#hello_world'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }

end
