Rails.application.routes.draw do
  namespace :v1, defaults: { format: 'json' } do
    post 'auth/login', to: 'authentication#authenticate'
    post 'signup', to: 'users#create'

    # get "/posts/new", to: "posts#new"
    # post '/reservations', to: 'reservations#create'
    # get '/reservations', to: 'reservations#index'
    # get "/reservations/:id/edit", to: "reservations#edit"
    # put "/reservations/:id", to: "reservations#update" 
    # delete '/reservations/:id', to: 'reservations#destroy'
    resources :reservations
  
  end
end
