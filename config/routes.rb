Rails.application.routes.draw do
  namespace :api do
    resources :posts, only: [:show, :create, :destroy] #remove update, index
    resources :user_lists do #remove update, index
      resources :concerts, only: [:show]
    end
    resources :concerts do 
      resources :venues, only: [:show]
    end
    resources :venues
    # resources :bands
    resources :users, only: [:show, :update] #remove index, destroy

    get "/me", to: "users#show"
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
    post "/signup", to: "users#create"
    get "/freeconcerts", to: "concerts#freeConcerts"
  end

  # get '/hello', to: 'application#hello_world'

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
