# config/routes.rb
Rails.application.routes.draw do
    resources :sneakers
    resources :cart_items
    resources :users
    get '/me', to: "users#show"
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
    post "/signup", to: "users#create"
   
  
    get '*path',
        to: 'fallback#index',
        constraints: ->(req) { !req.xhr? && req.format.html? }
  end